// Pure learning rules. No DOM or persistence dependencies.
export const LEVELS = ['A1', 'A2', 'B1', 'B2'];
export const GOALS = [10, 20, 30];
export function normalizeAnswer(value) {
  return String(value).normalize('NFKC').trim().replace(/\s+/g, ' ').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').toLowerCase();
}
export function evaluateAnswer(question, input) {
  const normalized = normalizeAnswer(input);
  if (!normalized) return { type: 'empty', message: '先輸入你的答案吧。' };
  if (question.acceptedAnswers.some(answer => normalizeAnswer(answer) === normalized)) return { type: 'correct', message: '答對了！又多記住了一點。' };
  for (const [field, type] of [['nearMisses', 'similar'], ['commonErrors', 'incorrect']]) {
    const match = (question[field] || []).find(item => normalizeAnswer(item.input) === normalized);
    if (match) return { type, message: match.feedbackZh };
  }
  return { type: 'incorrect', message: '這不是本題設定的答案。再想一下，或查看提示。' };
}
export function studyDate(timezone, now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now);
  const read = type => parts.find(part => part.type === type).value;
  return `${read('year')}-${read('month')}-${read('day')}`;
}
export function addDays(date, amount) {
  const value = new Date(`${date}T12:00:00Z`);
  value.setUTCDate(value.getUTCDate() + amount);
  return value.toISOString().slice(0, 10);
}
export function dateRange(today, count) {
  return Array.from({ length: count }, (_, i) => addDays(today, i - count + 1));
}
export function cardStatus(progress) {
  return !progress ? 'new' : progress.stage >= 4 ? 'mastered' : 'learning';
}
export function schedule(progress, outcome, date, now) {
  const stage = outcome === 'independent' ? Math.min((progress?.stage || 0) + 1, 5) : 0;
  return {
    ...progress, stage, dueDate: addDays(date, [1, 1, 3, 7, 14, 30][stage]),
    firstCompletedAt: progress?.firstCompletedAt || now,
    firstCompletedDate: progress?.firstCompletedDate || date,
    lastCompletedAt: now, needsPractice: outcome === 'assisted',
    completionCount: (progress?.completionCount || 0) + 1,
    independentCount: (progress?.independentCount || 0) + Number(outcome === 'independent'),
    revision: (progress?.revision || 0) + 1,
  };
}
export function dailyStats(completions, date) {
  const rows = completions.filter(item => item.studyDate === date);
  const unique = new Set(rows.map(item => item.cardId));
  const fresh = new Set(rows.filter(item => item.kind === 'new').map(item => item.cardId));
  const reviews = rows.filter(item => item.kind === 'review');
  return { total: unique.size, fresh: fresh.size, review: unique.size - fresh.size, attempts: rows.length,
    independent: rows.filter(item => item.outcome === 'independent').length,
    reviewAttempts: reviews.length, reviewIndependent: reviews.filter(item => item.outcome === 'independent').length };
}
export function selectCards(catalog, state, date, reviewOnly = false) {
  const completed = dailyStats(state.completions, date).total;
  const goal = state.dailyGoals[date] || state.settings.dailyGoal;
  const limit = reviewOnly ? 20 : completed >= goal ? 10 : Math.min(20, goal - completed);
  const ready = catalog.entries.filter(entry => entry.contentStatus === 'published');
  const due = ready.filter(entry => state.progress[entry.cardId]?.dueDate <= date)
    .sort((a, b) => {
      const pa = state.progress[a.cardId], pb = state.progress[b.cardId];
      return pa.dueDate.localeCompare(pb.dueDate) || pa.lastCompletedAt.localeCompare(pb.lastCompletedAt) || a.cardId.localeCompare(b.cardId);
    });
  const fresh = reviewOnly ? [] : ready.filter(entry => !state.progress[entry.cardId] && (state.settings.selectedLevel === 'all' || entry.primaryLevel === state.settings.selectedLevel))
    .sort((a, b) => LEVELS.indexOf(a.primaryLevel) - LEVELS.indexOf(b.primaryLevel) || a.learningOrder - b.learningOrder);
  return [...due, ...fresh].slice(0, limit);
}
export function summarizeSession(session) {
  const done = session.tasks.filter(task => task.outcome && task.outcome !== 'skipped');
  return { total: session.tasks.length, completed: done.length,
    independent: done.filter(task => task.outcome === 'independent').length,
    assisted: done.filter(task => task.outcome === 'assisted').length,
    skipped: session.tasks.filter(task => task.outcome === 'skipped').length,
    fresh: done.filter(task => task.kind === 'new').length,
    review: done.filter(task => task.kind === 'review').length,
    unfinished: session.tasks.filter(task => !task.outcome).length,
    pendingPractice: session.reinforcements.filter(task => !task.outcome).length };
}
