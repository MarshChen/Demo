import { evaluateAnswer, normalizeAnswer, selectCards, schedule, studyDate } from './domain.js';
const id = () => crypto.randomUUID();
export function activeSession(state) { return state.sessions.find(session => ['active', 'paused'].includes(session.status)); }
export function currentTask(session) { return [...session.tasks, ...session.reinforcements].find(task => task.taskId === session.currentTaskId); }
function newTask(entry, catalog, kind, progress) {
  const card = catalog.cardMap.get(entry.cardId);
  const previousIndex = card.questionIds.indexOf(progress?.lastQuestionId);
  const question = catalog.questionMap.get(card.questionIds[(previousIndex + 1) % card.questionIds.length]);
  return { taskId: id(), cardId: entry.cardId, entryId: entry.entryId, questionId: question.questionId, questionVersion: question.contentVersion,
    questionSnapshot: { ...structuredClone(question), headword: entry.displayHeadword, coreMeaningZh: card.coreMeaningZh, corePartOfSpeech: card.corePartOfSpeech, level: entry.primaryLevel },
    kind, progressRevisionAtStart: progress?.revision || 0, draftInput: '', hintUsed: false, answerRevealed: false, submissions: [], outcome: null, phase: 'answering', feedback: null };
}
export function startSession(state, catalog, reviewOnly = false, now = new Date()) {
  const active = activeSession(state);
  if (active) { active.status = 'active'; return active; }
  const date = studyDate(state.settings.studyTimezone, now);
  state.dailyGoals[date] ??= state.settings.dailyGoal;
  const entries = selectCards(catalog, state, date, reviewOnly);
  if (!entries.length) throw new Error(reviewOnly ? '目前沒有到期單字。下次再回來複習吧！' : '此範圍暫時沒有可學的新字，可到設定調整程度。');
  const tasks = entries.map(entry => newTask(entry, catalog, state.progress[entry.cardId] ? 'review' : 'new', state.progress[entry.cardId]));
  const session = { sessionId: id(), mode: reviewOnly ? 'reviewOnly' : 'daily', catalogVersion: catalog.manifest.catalogVersion, createdAt: now.toISOString(), status: 'active', tasks, reinforcements: [], currentTaskId: tasks[0].taskId };
  state.sessions.unshift(session);
  return session;
}
export function applyTaskAction(state, sessionId, taskId, action, input = '', now = new Date()) {
  const session = state.sessions.find(item => item.sessionId === sessionId);
  if (!session || session.status !== 'active' || session.currentTaskId !== taskId) throw new Error('題目狀態已更新，請重新載入後接續。');
  const task = currentTask(session);
  if (task.outcome) return;
  task.draftInput = input;
  if (action === 'draft') return;
  if (action === 'hint') { task.hintUsed = true; task.feedback = { type: 'hint', message: `首字母是 ${task.questionSnapshot.answer.trim()[0]} · ${task.questionSnapshot.corePartOfSpeech}` }; return; }
  if (action === 'reveal') { task.answerRevealed = true; task.phase = 'correcting'; task.feedback = { type: 'hint', message: '看一遍答案，再親手輸入一次。' }; return; }
  if (action === 'skip') {
    if (!task.answerRevealed) throw new Error('請先查看答案，再決定是否略過。');
    task.outcome = 'skipped'; task.phase = 'explained'; return;
  }
  const evaluation = evaluateAnswer(task.questionSnapshot, input);
  if (evaluation.type === 'empty') { task.feedback = evaluation; return; }
  task.submissions.push({ submissionId: id(), input, normalizedInput: normalizeAnswer(input), evaluation: evaluation.type, occurredAt: now.toISOString() });
  task.feedback = evaluation;
  if (evaluation.type !== 'correct') {
    if (task.submissions.length >= 2) { task.answerRevealed = true; task.phase = 'correcting'; }
    return;
  }
  const outcome = task.submissions.length === 1 && !task.hintUsed && !task.answerRevealed ? 'independent' : 'assisted';
  task.outcome = outcome; task.phase = 'explained'; task.completedAt = now.toISOString();
  task.feedback = { type: outcome === 'independent' ? 'correct' : 'hint', message: outcome === 'independent' ? '答對了！又多記住了一點。' : '訂正完成，下一次再練習就更熟悉。' };
  if (task.kind === 'reinforcement') return;
  if (state.completions.some(item => item.taskId === task.taskId)) return;
  const progress = state.progress[task.cardId];
  if ((progress?.revision || 0) !== task.progressRevisionAtStart) throw new Error('此單字的進度已更新，請重新接續學習。');
  const date = studyDate(state.settings.studyTimezone, now);
  state.dailyGoals[date] ??= state.settings.dailyGoal;
  const next = schedule(progress, outcome, date, task.completedAt);
  state.progress[task.cardId] = { ...next, cardId: task.cardId, lastQuestionId: task.questionId };
  state.completions.push({ completionId: id(), sessionId, taskId, cardId: task.cardId, entryId: task.entryId, questionId: task.questionId, questionVersion: task.questionVersion,
    kind: task.kind, outcome, firstInput: task.submissions[0]?.input || null, hintUsed: task.hintUsed, answerRevealed: task.answerRevealed,
    stageBefore: progress?.stage || 0, stageAfter: next.stage, occurredAt: task.completedAt, studyDate: date });
  if (outcome === 'assisted') {
    session.reinforcements.push({ ...structuredClone(task), taskId: id(), kind: 'reinforcement', draftInput: '', hintUsed: false, answerRevealed: false, submissions: [], outcome: null,
      phase: 'answering', feedback: null, completedAt: null, availableAfter: session.tasks.filter(item => item.outcome && item.outcome !== 'skipped').length + 3 });
  }
}
export function advanceSession(state, sessionId) {
  const session = state.sessions.find(item => item.sessionId === sessionId);
  if (!session || !currentTask(session)?.outcome) throw new Error('請先完成這一題。');
  const primary = session.tasks.find(item => !item.outcome);
  const completed = session.tasks.filter(item => item.outcome && item.outcome !== 'skipped').length;
  const practice = session.reinforcements.find(item => !item.outcome && (!primary || item.availableAfter <= completed));
  const next = practice || primary;
  if (next) session.currentTaskId = next.taskId;
  else { session.currentTaskId = null; session.status = 'completed'; session.endedAt = new Date().toISOString(); }
}
