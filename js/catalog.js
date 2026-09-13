import { LEVELS, normalizeAnswer } from './domain.js';
export function validateCatalog(catalog) {
  if (!catalog?.manifest?.catalogVersion || !Array.isArray(catalog.entries) || !Array.isArray(catalog.cards) || !Array.isArray(catalog.questions)) throw new Error('詞庫格式不完整。');
  const entryIds = new Set(), cardIds = new Set(), questionIds = new Set();
  for (const entry of catalog.entries) {
    if (entryIds.has(entry.entryId) || !entry.entryId || !LEVELS.includes(entry.primaryLevel)) throw new Error(`詞條重複或等級不正確：${entry.entryId}`);
    entryIds.add(entry.entryId);
  }
  for (const card of catalog.cards) {
    if (cardIds.has(card.cardId) || !entryIds.has(card.entryId) || !card.coreMeaningZh) throw new Error(`學習卡不正確：${card.cardId}`);
    cardIds.add(card.cardId);
  }
  for (const question of catalog.questions) {
    if (questionIds.has(question.questionId) || !cardIds.has(question.cardId) || !question.promptZh || !question.answer || !question.acceptedAnswers?.includes(question.answer)) throw new Error(`題目資料不正確：${question.questionId}`);
    questionIds.add(question.questionId);
    const answers = [...question.acceptedAnswers, ...(question.nearMisses || []).map(x => x.input), ...(question.commonErrors || []).map(x => x.input)].map(normalizeAnswer);
    if (new Set(answers).size !== answers.length) throw new Error(`答案集合重疊：${question.questionId}`);
  }
  for (const entry of catalog.entries.filter(x => x.contentStatus === 'published')) {
    const card = catalog.cards.find(x => x.cardId === entry.cardId);
    if (!card || !card.questionIds.length || card.questionIds.some(id => !catalog.questions.some(q => q.questionId === id && q.cardId === card.cardId))) throw new Error(`詞條尚未備妥題目：${entry.entryId}`);
  }
  if (catalog.manifest.totalEntries !== catalog.entries.length || catalog.manifest.publishedCards !== catalog.cards.length) throw new Error('詞庫數量與 manifest 不符。');
  return catalog;
}
export async function loadCatalog() {
  const response = await fetch(new URL('../data/catalog.json', import.meta.url));
  if (!response.ok) throw new Error('無法載入詞庫，請檢查連線後重試。');
  const catalog = validateCatalog(await response.json());
  return Object.assign(catalog, {
    entryMap: new Map(catalog.entries.map(entry => [entry.entryId, entry])),
    cardMap: new Map(catalog.cards.map(card => [card.cardId, card])),
    questionMap: new Map(catalog.questions.map(question => [question.questionId, question])),
  });
}
