import { GOALS, LEVELS } from './domain.js';
const validDate = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && new Date(value + 'T12:00:00Z').toISOString().slice(0, 10) === value;
const record = value => value && typeof value === 'object' && !Array.isArray(value);
const ensure = (condition, message) => { if (!condition) throw new Error(message); };
export function createBackup(state, catalog) {
  return { schemaVersion: 1, catalogVersion: catalog.manifest.catalogVersion, exportedAt: new Date().toISOString(), state };
}
export function validateBackup(backup, catalog) {
  ensure(backup?.schemaVersion === 1 && backup?.state?.schemaVersion === 1, '不支援此備份版本。');
  ensure(backup.catalogVersion === catalog.manifest.catalogVersion, '此備份的詞庫版本不相容。');
  ensure(typeof backup.exportedAt === 'string' && Number.isFinite(Date.parse(backup.exportedAt)), '備份日期格式不正確。');
  const state = backup.state;
  ensure(record(state.settings) && GOALS.includes(state.settings.dailyGoal) && [...LEVELS, 'all'].includes(state.settings.selectedLevel), '設定資料不正確。');
  try { new Intl.DateTimeFormat('en', { timeZone: state.settings.studyTimezone }).format(); } catch { throw new Error('學習時區不正確。'); }
  ensure(typeof state.settings.studyTimezone === 'string', '學習時區不正確。');
  for (const key of ['progress', 'favorites', 'dailyGoals']) ensure(record(state[key]), `缺少 ${key} 資料。`);
  ensure(Array.isArray(state.completions) && Array.isArray(state.sessions), '學習紀錄格式不正確。');
  const cardIds = new Set(catalog.cards.map(x => x.cardId)), entryIds = new Set(catalog.entries.map(x => x.entryId));
  for (const [date, goal] of Object.entries(state.dailyGoals)) ensure(validDate(date) && GOALS.includes(goal), '每日目標紀錄不正確。');
  for (const [key, p] of Object.entries(state.progress)) {
    ensure(cardIds.has(key) && p.cardId === key, '備份包含未知的單字。');
    ensure(Number.isInteger(p.stage) && p.stage >= 0 && p.stage <= 5 && Number.isInteger(p.revision) && p.revision > 0, '掌握階段或版本不正確。');
    ensure(validDate(p.dueDate) && validDate(p.firstCompletedDate) && Number.isFinite(Date.parse(p.lastCompletedAt)), '複習日期不正確。');
    ensure(typeof p.needsPractice === 'boolean' && Number.isInteger(p.completionCount) && p.completionCount > 0 && Number.isInteger(p.independentCount) && p.independentCount >= 0 && p.independentCount <= p.completionCount, '學習次數不正確。');
  }
  for (const key of Object.keys(state.favorites)) ensure(entryIds.has(key), '收藏包含未知的詞條。');
  const sessionIds = new Set(), taskIds = new Set(), tasks = new Map();
  let activeCount = 0;
  for (const session of state.sessions) {
    ensure(typeof session.sessionId === 'string' && !sessionIds.has(session.sessionId), '回合識別碼重複。'); sessionIds.add(session.sessionId);
    ensure(['active', 'paused', 'completed', 'ended'].includes(session.status) && Array.isArray(session.tasks) && Array.isArray(session.reinforcements), '回合格式不正確。');
    if (['active', 'paused'].includes(session.status)) activeCount++;
    for (const task of [...session.tasks, ...session.reinforcements]) {
      ensure(typeof task.taskId === 'string' && !taskIds.has(task.taskId) && cardIds.has(task.cardId) && entryIds.has(task.entryId), '題目識別碼重複或詞条不存在。');
      taskIds.add(task.taskId); tasks.set(task.taskId, { task, sessionId: session.sessionId });
      ensure(['new', 'review', 'reinforcement'].includes(task.kind) && [null, 'independent', 'assisted', 'skipped'].includes(task.outcome), '題目結果不正確。');
      ensure(['answering', 'correcting', 'explained'].includes(task.phase) && typeof task.draftInput === 'string' && typeof task.hintUsed === 'boolean' && typeof task.answerRevealed === 'boolean' && Array.isArray(task.submissions), '題目狀態不正確。');
      const q = task.questionSnapshot;
      ensure(record(q) && q.cardId === task.cardId && typeof q.answer === 'string' && q.answer.length > 0 && Array.isArray(q.acceptedAnswers) && q.acceptedAnswers.includes(q.answer), '題目快照不完整。');
      for (const key of ['promptZh', 'sentenceBefore', 'sentenceAfter', 'headword', 'coreMeaningZh', 'corePartOfSpeech', 'level']) ensure(typeof q[key] === 'string', '題目快照文字不完整。');
      for (const key of ['nearMisses', 'commonErrors']) ensure(Array.isArray(q[key]) && q[key].every(x => typeof x.input === 'string' && typeof x.feedbackZh === 'string'), '題目判定資料不正確。');
    }
    ensure(!['active', 'paused'].includes(session.status) || [...session.tasks, ...session.reinforcements].some(t => t.taskId === session.currentTaskId), '找不到未完成回合的目前題目。');
  }
  ensure(activeCount <= 1, '備份包含多個未完成回合。');
  const completionIds = new Set(), completedTasks = new Set();
  for (const completion of state.completions) {
    const linked = tasks.get(completion.taskId);
    ensure(!completionIds.has(completion.completionId) && !completedTasks.has(completion.taskId), '備份有重複作答紀錄。');
    ensure(linked && linked.sessionId === completion.sessionId && linked.task.cardId === completion.cardId && linked.task.outcome === completion.outcome && linked.task.kind === completion.kind && completion.kind !== 'reinforcement', '作答紀錄與回合不一致。');
    ensure(validDate(completion.studyDate) && Number.isFinite(Date.parse(completion.occurredAt)) && ['independent', 'assisted'].includes(completion.outcome), '作答日期或結果不正確。');
    completionIds.add(completion.completionId); completedTasks.add(completion.taskId);
  }
  const history = new Map();
  for (const item of state.completions) { const rows = history.get(item.cardId) || []; rows.push(item); history.set(item.cardId, rows); }
  for (const [cardId, progress] of Object.entries(state.progress)) {
    const rows = history.get(cardId) || [];
    ensure(rows.length === progress.completionCount && rows.filter(x => x.outcome === 'independent').length === progress.independentCount, '進度與作答次數不一致。');
    ensure(rows.at(-1)?.stageAfter === progress.stage, '掌握階段與歷史不一致。');
  }
  ensure([...history.keys()].every(key => state.progress[key]), '作答紀錄缺少對應進度。');
  for (const { task } of tasks.values()) if (task.kind !== 'reinforcement' && ['independent', 'assisted'].includes(task.outcome)) ensure(completedTasks.has(task.taskId), '已完成題目缺少作答紀錄。');
  return structuredClone(state);
}
