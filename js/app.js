import { loadCatalog } from './catalog.js';
import { LocalStore, createInitialState } from './storage.js';
import { LEVELS, GOALS, studyDate, dateRange, dailyStats, cardStatus, summarizeSession } from './domain.js';
import { activeSession, currentTask, startSession, applyTaskAction, advanceSession } from './session.js';
import { createBackup, validateBackup } from './backup.js';
import { speak, stopAudio } from './audio.js';
import { escapeHtml as h, icon, pill, emptyState, percent, ring } from './ui.js';

const main = document.querySelector('#main');
const dialog = document.querySelector('#app-dialog');
const ownerId = crypto.randomUUID();
let catalog, state, store, busy = false, draftTimer, draftJob, toastTimer, pendingRestore;
let library = { query: '', level: 'all', status: 'all', favorite: false, practice: false, page: 1 };
let trendDays = 7, ownsSession = false, queue = Promise.resolve();
const today = () => studyDate(state.settings.studyTimezone);
const progressOf = entry => state.progress[entry.cardId];
const cardOf = entry => catalog.cardMap.get(entry.cardId);
const countDue = () => Object.values(state.progress).filter(p => p.dueDate <= today()).length;
const statusLabels = { new: '未學習', learning: '學習中', mastered: '已掌握', draft: '教材準備中' };
const levelNames = { A1: '基礎日常', A2: '生活應用', B1: '自在表達', B2: '進階探索', all: '全部程度' };
function notify(message) {
  const el = document.querySelector('#toast');
  el.textContent = message; el.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 4500);
}
function navigate(route) { location.hash = `#/${route}`; }
async function mutate(reducer, options = {}) {
  const job = queue.then(async () => {
    try { state = await store.mutate(reducer, options); return state; }
    catch (error) {
      if (error.code === 'LEASE_LOST') {
        ownsSession = false; draftJob = null; clearTimeout(draftTimer);
        state = await store.read(); await render();
      }
      throw error;
    }
  });
  queue = job.catch(() => {});
  return job;
}
function openDialog(title, body) {
  dialog.innerHTML = `<button class="dialog-close" type="button" data-action="close-dialog" aria-label="關閉">×</button><h2 id="dialog-title">${h(title)}</h2>${body}`;
  if (!dialog.open) dialog.showModal();
}
function confirmAction(title, text, action, label, danger = false) {
  openDialog(title, `<p>${h(text)}</p><div class="dialog-actions"><button class="button secondary" data-action="close-dialog">取消</button><button class="button ${danger ? 'danger' : 'primary'}" data-action="${action}">${h(label)}</button></div>`);
}
function summaryMetrics() {
  const values = Object.values(state.progress);
  return { learned: values.length, mastered: values.filter(p => p.stage >= 4).length, practice: values.filter(p => p.needsPractice).length };
}
function pageHeading(eyebrow, title, subtitle, side = '') {
  return `<div class="page-heading"><div><p class="eyebrow">${h(eyebrow)}</p><h1>${h(title)}</h1><p class="subtitle">${h(subtitle)}</p></div>${side}</div>`;
}
function sourceNote() {
  return `<div class="source-note">${icon('book')}<span>Oxford 3000 · ${catalog.entries.length.toLocaleString()} 個來源詞條<br><small>目前為試用教材，可學 ${catalog.cards.length} 個；其餘 ${catalog.manifest.pendingCards.toLocaleString()} 個教材準備中。</small></span><a href="#/words">查看詞庫 ${icon('arrow')}</a></div>`;
}
function homeView() {
  const stats = dailyStats(state.completions, today());
  const metrics = summaryMetrics(), goal = state.dailyGoals[today()] || state.settings.dailyGoal;
  const active = activeSession(state);
  const friendlyDate = new Intl.DateTimeFormat('zh-TW', { month: 'long', day: 'numeric', weekday: 'long', timeZone: state.settings.studyTimezone }).format(new Date());
  return `${pageHeading('YOUR DAILY WORDS', '每天，一點進步。', `${friendlyDate} · 把一點時間，留給更好的自己。`, `<span class="quiet-badge"><i></i> 進度已保存在此瀏覽器</span>`)}
    <section class="hero-card" aria-labelledby="hero-title"><div class="hero-copy"><span class="hero-label">${icon('spark')} MY LEARNING MOMENT</span><h2 id="hero-title">一個單字，<br>打開新的世界。</h2><p>在例句中理解，在練習中記住。<br>用自己的步調，慢慢累積英文實力。</p><div class="hero-actions"><button class="button primary" data-action="start">${icon('book')}${active ? '繼續學習' : stats.total >= goal ? '繼續學習' : '開始學習'}${icon('arrow')}</button><button class="text-button" data-action="review">只複習到期單字</button></div><span class="hero-caption">${active ? `上次已完成 ${summarizeSession(active).completed}／${active.tasks.length} 個，接著學就好。` : stats.total >= goal ? '今日目標已達成，你也可以再多學一點。' : `目前從 ${h(state.settings.selectedLevel === 'all' ? '全部程度' : state.settings.selectedLevel)} 開始 · 每日目標 ${goal} 個`}</span></div><div class="hero-art" aria-hidden="true"><span class="art-orbit orbit-one"></span><span class="art-orbit orbit-two"></span><span class="art-spark spark-one">✦</span><span class="art-spark spark-two">✦</span><div class="art-card back-card"></div><div class="art-card front-card"><span class="art-small">A LITTLE, EVERY DAY</span><div class="book-art">${icon('book')}</div><strong>grow<span>.</span></strong><span class="art-meaning">成長，從今天開始。</span><div class="art-line"></div><span class="art-bottom">one word at a time</span></div><span class="art-floating">${icon('check')} 每一步都算數</span></div></section>
    <div class="dashboard-grid"><section class="panel daily-panel"><div><p class="eyebrow">TODAY'S PLAN</p><h2>今天的學習</h2><p class="muted">${stats.total >= goal ? '今天的努力，已經累積下來了。' : `再學 ${Math.max(goal - stats.total, 0)} 個，就完成今日目標。`}</p><a class="subtle-link" href="#/settings">調整每日目標 ↗</a></div>${ring(stats.total, goal)}</section><section class="panel metric-panel"><span class="metric-icon lavender">${icon('book')}</span><span class="muted">累計已學習</span><strong>${metrics.learned}<small> 個</small></strong><p>你的每一次練習，都有留下紀錄</p></section><section class="panel metric-panel"><span class="metric-icon mint">${icon('clock')}</span><span class="muted">等待複習</span><strong>${countDue()}<small> 個</small></strong><p>${countDue() ? '再見一次，記憶就更清晰' : '複習會在適合的時候出現'}</p></section></div>
    <div class="section-heading"><div><h2>你的單字旅程</h2><p>從日常出發，一步步走得更遠。</p></div><a href="#/progress">查看完整進度 ${icon('arrow')}</a></div><div class="level-grid">${LEVELS.map(level => levelCard(level)).join('')}</div>${sourceNote()}`;
}
function levelCard(level) {
  const entries = catalog.entries.filter(e => e.primaryLevel === level), learned = entries.filter(e => progressOf(e)).length;
  return `<a class="level-card" href="#/words" data-level-link="${level}"><span class="level-badge level-${level}">${level}</span><h3>${levelNames[level]}</h3><p>${learned} <span>/ ${entries.length} 個已學習</span></p><progress value="${learned}" max="${entries.length}" aria-label="${level} 學習覆蓋率"></progress><span class="level-footer">可學 ${catalog.manifest.publishedByLevel[level]} 個 ${icon('arrow')}</span></a>`;
}
function learningView() {
  const session = activeSession(state);
  if (!session) return emptyState('準備好開始了嗎？', '選擇今天的單字，開啟一段小小的學習時間。', '<button class="button primary" data-action="start">開始學習</button>');
  if (!ownsSession || session.status === 'paused') return emptyState('接著上次的進度', '你的答案與學習紀錄都已保存。', '<button class="button primary" data-action="start">繼續學習</button>');
  const task = currentTask(session), q = task.questionSnapshot, result = summarizeSession(session);
  const explained = task.phase === 'explained', practice = task.kind === 'reinforcement';
  const entry = catalog.entryMap.get(task.entryId);
  const nextDue = state.progress[task.cardId]?.dueDate;
  return `<div class="learning-shell"><div class="learning-top"><button class="text-button" data-action="pause">← 儲存後離開</button><span>${practice ? '加強練習' : '本輪學習'} <strong>${practice ? session.reinforcements.filter(t => t.outcome).length : result.completed} / ${practice ? session.reinforcements.length : result.total}</strong></span></div><progress class="session-progress" max="${result.total}" value="${result.completed}" aria-label="本輪主要單字完成數"></progress><div class="learning-meta">${pill(q.level, 'lavender')}${pill(practice ? '加強練習' : task.kind === 'new' ? '新單字' : '到期複習', 'neutral')}<span>想一想，這句英文怎麼說？</span></div>
      <section class="question-card"><div class="question-prompt"><p class="eyebrow">用英文，說說看</p><h1>${h(q.promptZh)}</h1></div><div class="question-body"><form id="answer-form"><label class="sr-only" for="answer-input">請填入英文單字或片語</label><div class="english-sentence" lang="en">${h(q.sentenceBefore)}${explained ? `<mark>${h(q.answer)}</mark>` : `<input id="answer-input" class="answer-input" name="answer" type="text" value="${h(task.draftInput)}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-describedby="answer-feedback" placeholder="填入單字" maxlength="100" size="${Math.max(7, Math.min(15, q.answer.length + 1))}">`}${h(q.sentenceAfter)}</div>${!explained && task.answerRevealed ? `<p class="revealed-answer">本題答案：<strong lang="en">${h(q.answer)}</strong><span>請在上方重新輸入。</span></p>` : ''}<div id="answer-feedback" class="feedback ${h(task.feedback?.type || '')}" role="status">${task.feedback ? `${icon(task.feedback.type === 'correct' ? 'check' : 'spark')}<span>${h(task.feedback.message)}</span>` : '<span>不確定也沒關係，試著回想看看。</span>'}</div>${explained ? `<div class="word-explanation"><div><h2 lang="en">${h(q.headword)}</h2><p><span>${h(q.corePartOfSpeech)}</span> ${h(q.coreMeaningZh)}</p></div><button class="icon-button ${state.favorites[task.entryId] ? 'is-favorite' : ''}" data-action="favorite" data-id="${h(task.entryId)}" aria-label="${state.favorites[task.entryId] ? '取消收藏' : '收藏單字'}" aria-pressed="${Boolean(state.favorites[task.entryId])}" type="button">${icon('heart')}</button></div><div class="explanation-actions"><button class="text-button" type="button" data-action="speak-word">${icon('sound')} 聽單字</button><button class="text-button" type="button" data-action="speak-sentence">${icon('sound')} 聽例句</button><button class="text-button" type="button" data-action="detail" data-id="${h(entry.entryId)}">單字詳情 ↗</button></div>` : `<div class="question-tools"><button class="text-button" type="button" data-action="hint">${icon('spark')} 給我提示</button><button class="text-button" type="button" data-action="reveal">查看答案</button></div>`}<div class="question-bottom">${explained ? `<span class="muted">${task.outcome === 'skipped' ? '這次先略過，下次再練習。' : nextDue ? `下次複習 · ${h(nextDue)}` : '加強練習已完成'}</span><button class="button primary" type="button" data-action="next">${result.unfinished === 0 && result.pendingPractice === 0 ? '查看結果' : '下一題'} ${icon('arrow')}</button>` : `<span class="input-tip">輸入後按 Enter 確認</span><button class="button primary" type="submit">確認答案 ${icon('arrow')}</button>`}</div>${!explained && task.answerRevealed ? '<button class="skip-button" type="button" data-action="skip">暫時略過這個單字</button>' : ''}</form></div></section><p class="learning-footnote">${practice ? '這是本輪加強練習，不會重複計入今日完成數。' : '不求一次就記住，每一次回想都是進步。'}</p><button class="text-button end-session" data-action="ask-end">結束本輪，查看結果</button></div>`;
}
function resultView(id) {
  const session = state.sessions.find(s => s.sessionId === id);
  if (!session) return emptyState('找不到這次學習', '回到首頁開始新的學習吧。', '<a class="button primary" href="#/today">回到首頁</a>');
  const result = summarizeSession(session);
  return `<div class="result-shell"><span class="result-symbol">${icon('check')}</span>${pageHeading('A LITTLE PROGRESS', session.status === 'ended' ? '先到這裡，也很好。' : '今天的努力，記住了。', '每一次回想，都在讓記憶更清晰。')}<div class="result-stats panel"><div><strong>${result.completed}<small> / ${result.total}</small></strong><span>完成單字</span></div><div><strong>${result.independent}</strong><span>獨立答對</span></div><div><strong>${result.assisted}</strong><span>完成訂正</span></div></div><p class="muted result-breakdown">新學 ${result.fresh} · 複習 ${result.review} · 略過 ${result.skipped} · 未作答 ${result.unfinished}${result.pendingPractice ? ` · 尚有 ${result.pendingPractice} 個重練未完成` : ''}</p><section class="panel result-list"><h2>這次遇見的單字</h2>${session.tasks.map(task => `<div class="result-word"><button class="word-title" data-action="detail" data-id="${h(task.entryId)}">${h(task.questionSnapshot.headword)}</button><span>${h(task.questionSnapshot.coreMeaningZh)}</span>${pill(task.outcome === 'independent' ? '獨立答對' : task.outcome === 'assisted' ? '需加強' : task.outcome === 'skipped' ? '已略過' : '未作答', task.outcome === 'independent' ? 'mint' : 'neutral')}</div>`).join('')}</section><div class="result-actions"><a class="button secondary" href="#/today">回到今日學習</a><button class="button primary" data-action="start">再學一點 ${icon('arrow')}</button></div></div>`;
}
function libraryMatches() {
  const query = library.query.trim().toLocaleLowerCase();
  return catalog.entries.filter(entry => {
    const card = cardOf(entry), p = progressOf(entry);
    return (!query || `${entry.displayHeadword} ${card?.coreMeaningZh || ''} ${entry.homographLabel || ''}`.toLocaleLowerCase().includes(query)) &&
      (library.level === 'all' || entry.primaryLevel === library.level) && (!library.favorite || state.favorites[entry.entryId]) && (!library.practice || p?.needsPractice) &&
      (library.status === 'all' || (library.status === 'due' ? p?.dueDate <= today() : library.status === 'draft' ? entry.contentStatus !== 'published' : entry.contentStatus === 'published' && cardStatus(p) === library.status));
  }).sort((a, b) => a.displayHeadword.localeCompare(b.displayHeadword, 'en') || a.entryId.localeCompare(b.entryId));
}
function wordsView() {
  const matches = libraryMatches(), pages = Math.max(1, Math.ceil(matches.length / 50));
  library.page = Math.min(library.page, pages);
  const options = (values, selected) => values.map(([value, label]) => `<option value="${value}" ${value === selected ? 'selected' : ''}>${h(label)}</option>`).join('');
  return `${pageHeading('YOUR WORD COLLECTION', '慢慢累積的，都是你的。', '查看學過的單字，也看看接下來會遇見什麼。')}<section class="panel library-panel"><div class="library-toolbar"><label class="search-field">${icon('search')}<span class="sr-only">搜尋單字或中文</span><input id="word-search" value="${h(library.query)}" placeholder="搜尋英文單字或中文意思…" type="search"></label><label><span class="sr-only">程度篩選</span><select id="filter-level">${options([['all', '全部程度'], ...LEVELS.map(l => [l, `${l} ${levelNames[l]}`])], library.level)}</select></label><label><span class="sr-only">學習狀態篩選</span><select id="filter-status">${options([['all', '全部狀態'], ['new', '未學習'], ['learning', '學習中'], ['mastered', '已掌握'], ['due', '待複習'], ['draft', '教材準備中']], library.status)}</select></label></div><div class="filter-chips"><button class="filter-chip ${library.favorite ? 'selected' : ''}" data-action="filter-favorite" aria-pressed="${library.favorite}">${icon('heart')} 我的收藏</button><button class="filter-chip ${library.practice ? 'selected' : ''}" data-action="filter-practice" aria-pressed="${library.practice}">${icon('target')} 需要加強</button><span>共 ${matches.length.toLocaleString()} 個詞條</span></div>${matches.length ? `<div class="word-table"><div class="word-table-header"><span>單字 / 詞義</span><span>程度</span><span>學習狀態</span><span>下次複習</span><span class="sr-only">收藏</span></div>${matches.slice((library.page - 1) * 50, library.page * 50).map(entry => {
      const card = cardOf(entry), p = progressOf(entry), status = entry.contentStatus === 'published' ? cardStatus(p) : 'draft';
      return `<div class="word-row"><div><button class="word-title" data-action="detail" data-id="${h(entry.entryId)}">${h(entry.displayHeadword)}${entry.homographLabel ? `<small> ${h(entry.homographLabel)}</small>` : ''}</button><p>${h(card?.coreMeaningZh || entry.sourceUsages.map(u => `${u.partOfSpeech} ${u.level}`).join(' · '))}</p></div><span class="word-level">${pill(entry.primaryLevel, 'neutral')}</span><span>${pill(statusLabels[status], status === 'mastered' ? 'mint' : status === 'learning' ? 'lavender' : 'neutral')}</span><span class="word-due">${p?.dueDate ? `${h(p.dueDate)}${p.dueDate <= today() ? '<small>已到期</small>' : ''}` : '—'}</span><button class="icon-button ${state.favorites[entry.entryId] ? 'is-favorite' : ''}" aria-label="${state.favorites[entry.entryId] ? '取消收藏' : '收藏'} ${h(entry.displayHeadword)}" aria-pressed="${Boolean(state.favorites[entry.entryId])}" data-action="favorite" data-id="${h(entry.entryId)}">${icon('heart')}</button></div>`;
    }).join('')}</div><div class="pagination"><span>第 ${library.page} / ${pages} 頁</span><div><button class="button secondary compact" data-action="page-prev" ${library.page === 1 ? 'disabled' : ''}>上一頁</button><button class="button secondary compact" data-action="page-next" ${library.page === pages ? 'disabled' : ''}>下一頁</button></div></div>` : emptyState('沒有符合的單字', '換個關鍵字，或清除篩選再試一次。', '<button class="button secondary" data-action="clear-filters">清除篩選</button>')}</section><p class="page-note">以來源詞條計算；片語與來源分列的同形詞各計一項。已掌握表示本課核心用法達標。</p>`;
}
function detailContent(entry) {
  const card = cardOf(entry), p = progressOf(entry), q = card && catalog.questionMap.get(card.questionIds[0]);
  const rows = state.completions.filter(x => x.cardId === entry.cardId).slice(-10).reverse();
  return `<div class="detail-labels">${pill(entry.primaryLevel, 'lavender')}${pill(entry.contentStatus === 'published' ? statusLabels[cardStatus(p)] : '教材準備中', 'neutral')}</div>${entry.homographLabel ? `<p class="muted">${h(entry.homographLabel)}</p>` : ''}${card ? `<p class="detail-meaning"><span>${h(card.corePartOfSpeech)}</span> ${h(card.coreMeaningZh)}</p><div class="detail-example"><p lang="en">${h(q.sentenceBefore)}<mark>${h(q.answer)}</mark>${h(q.sentenceAfter)}</p><p>${h(q.promptZh)}</p></div><div class="explanation-actions"><button class="text-button" data-action="detail-speak" data-id="${h(entry.entryId)}" data-sentence="false">${icon('sound')} 聽單字</button><button class="text-button" data-action="detail-speak" data-id="${h(entry.entryId)}" data-sentence="true">${icon('sound')} 聽例句</button></div>` : '<p class="muted">這個詞條的中文釋義與例句還在準備中，完成後就能加入學習。</p>'}<div class="detail-progress"><div><span>主要學習</span><strong>${p?.completionCount || 0} 次</strong></div><div><span>獨立答對</span><strong>${p?.independentCount || 0} 次</strong></div><div><span>下次複習</span><strong>${h(p?.dueDate || '尚未安排')}</strong></div></div><button class="button secondary full-width" data-action="favorite" data-id="${h(entry.entryId)}">${icon('heart')} ${state.favorites[entry.entryId] ? '已收藏 · 取消收藏' : '加入我的收藏'}</button>${rows.length ? `<h3>最近學習紀錄</h3><ul class="history-list">${rows.map(row => `<li><span>${h(row.studyDate)}</span><span>${row.outcome === 'independent' ? '獨立答對' : '使用輔助完成'}</span>${row.outcome === 'assisted' && row.firstInput ? `<small>首次輸入：${h(row.firstInput)}</small>` : ''}</li>`).join('')}</ul>` : ''}<div class="detail-source"><p>來源：Oxford 3000 · 第 ${entry.source.page} 頁</p><p>${h(entry.sourceUsages.map(u => `${u.partOfSpeech} ${u.level}`).join('；'))}</p><small>其他詞性與等級為來源資訊，尚未列入本課測驗。例句與翻譯為本專案編寫。</small></div>`;
}
function showDetail(id) { const entry = catalog.entryMap.get(id); if (entry) { dialog.dataset.entryId = id; openDialog(entry.displayHeadword, detailContent(entry)); } }
function chartView(rows) {
  const max = Math.max(1, ...rows.map(row => row.total)), width = 760, baseline = 160, step = width / rows.length, barWidth = Math.min(38, step * 0.58);
  return `<svg class="trend-chart" viewBox="0 0 800 200" role="img" aria-label="最近 ${rows.length} 天每日新學與複習數量，下方提供文字表格"><path d="M20 160h760" stroke="#e9e7f1"/>${rows.map((row, i) => {
    const freshHeight = row.fresh / max * 125, reviewHeight = row.review / max * 125, x = 20 + step * i + (step - barWidth) / 2;
    return `<g><title>${row.date}：新學 ${row.fresh}，複習 ${row.review}</title><rect x="${x}" y="${baseline - freshHeight - reviewHeight}" width="${barWidth}" height="${freshHeight}" rx="4" fill="#a795ec"/><rect x="${x}" y="${baseline - reviewHeight}" width="${barWidth}" height="${Math.max(reviewHeight, row.total ? 0 : 3)}" rx="3" fill="${row.total ? '#9cd2c1' : '#eeedf4'}"/>${rows.length === 7 || i % 5 === 0 || i === rows.length - 1 ? `<text x="${x + barWidth / 2}" y="185" text-anchor="middle" fill="#777484" font-size="12">${i === rows.length - 1 ? '今天' : row.date.slice(5).replace('-', '/')}</text>` : ''}</g>`;
  }).join('')}</svg>`;
}
function progressView() {
  const metrics = summaryMetrics(), stats = dailyStats(state.completions, today());
  const rows = dateRange(today(), trendDays).map(date => ({ date, ...dailyStats(state.completions, date) }));
  const sums = rows.reduce((a, row) => ({ attempts: a.attempts + row.attempts, independent: a.independent + row.independent, reviewAttempts: a.reviewAttempts + row.reviewAttempts, reviewIndependent: a.reviewIndependent + row.reviewIndependent }), { attempts: 0, independent: 0, reviewAttempts: 0, reviewIndependent: 0 });
  return `${pageHeading('SMALL STEPS, REAL PROGRESS', '你的進步，看得見。', '不和別人比較，只記錄每一天的累積。')}<div class="progress-metrics">${[['今日完成', stats.total, '個單字'], ['累計已學', metrics.learned, '個詞條'], ['已掌握用法', metrics.mastered, '個詞條'], ['需要加強', metrics.practice, '個詞條']].map(([label, value, unit]) => `<section class="panel stat-box"><span>${label}</span><strong>${value}<small>${unit}</small></strong></section>`).join('')}</div><section class="panel chart-panel"><div class="section-heading"><div><h2>學習的足跡</h2><p>每一天的小累積，都在這裡。</p></div><div class="segmented"><button data-action="trend" data-days="7" class="${trendDays === 7 ? 'selected' : ''}" aria-pressed="${trendDays === 7}">7 天</button><button data-action="trend" data-days="30" class="${trendDays === 30 ? 'selected' : ''}" aria-pressed="${trendDays === 30}">30 天</button></div></div><div class="chart-legend"><span><i class="legend-fresh"></i>新學單字</span><span><i class="legend-review"></i>複習單字</span></div>${chartView(rows)}<div class="accuracy-row"><span>主要獨立答對率 <strong>${sums.attempts ? percent(sums.independent, sums.attempts) : '尚無作答資料'}</strong></span><span>複習獨立答對率 <strong>${sums.reviewAttempts ? percent(sums.reviewIndependent, sums.reviewAttempts) : '尚無作答資料'}</strong></span></div><details class="chart-data"><summary>查看每日數據</summary><table><thead><tr><th>日期</th><th>新學</th><th>複習</th><th>完成</th></tr></thead><tbody>${rows.map(row => `<tr><td>${row.date}</td><td>${row.fresh}</td><td>${row.review}</td><td>${row.total}</td></tr>`).join('')}</tbody></table></details></section><section class="panel coverage-panel"><h2>Oxford 詞庫進度</h2><p class="muted">累計已學 ${percent(metrics.learned, catalog.entries.length)} · 掌握本課用法 ${percent(metrics.mastered, catalog.entries.length)}</p>${LEVELS.map(level => { const entries = catalog.entries.filter(e => e.primaryLevel === level), learned = entries.filter(e => progressOf(e)).length, mastered = entries.filter(e => progressOf(e)?.stage >= 4).length; return `<div class="coverage-row"><span class="level-badge level-${level}">${level}</span><div><strong>${levelNames[level]}</strong><progress value="${learned}" max="${entries.length}" aria-label="${level} 學習覆蓋率"></progress></div><span>已學 ${learned} / ${entries.length}<small>掌握 ${mastered} · ${percent(mastered, entries.length)}</small></span></div>`; }).join('')}<p class="page-note">分母包含整份詞表；提示、訂正與本輪重練不會重複增加學習量。掌握本課用法不代表取得 CEFR 能力認證。</p></section>`;
}
function settingsView() {
  return `${pageHeading('MAKE IT YOURS', '找到舒服的步調。', '留下必要的選擇，把時間留給學習。')}<div class="settings-layout"><section class="panel settings-panel"><h2>學習偏好</h2><form id="settings-form"><fieldset><legend>每日目標</legend><p>包含新學與複習，同一個單字每天計算一次。</p><div class="choice-group">${GOALS.map(goal => `<label><input type="radio" name="goal" value="${goal}" ${state.settings.dailyGoal === goal ? 'checked' : ''}><span><strong>${goal}</strong> 個 / 天</span></label>`).join('')}</div></fieldset><fieldset><legend>新單字程度</legend><p>調整新字的範圍，已到期的單字仍會安排複習。</p><div class="level-choices">${[...LEVELS, 'all'].map(level => `<label><input type="radio" name="level" value="${level}" ${state.settings.selectedLevel === level ? 'checked' : ''}><span><strong>${level === 'all' ? '全部' : level}</strong>${levelNames[level]}<small>${level === 'all' ? catalog.cards.length : catalog.manifest.publishedByLevel[level]} 個可學</small></span></label>`).join('')}</div></fieldset><button class="button primary" type="submit">儲存偏好 ${icon('check')}</button></form></section><div><section class="panel settings-panel"><h2>你的學習資料</h2><p class="muted">進度保存在此瀏覽器。換裝置前，可以匯出一份備份，再到新裝置還原。</p><button class="button secondary full-width" data-action="export">${icon('download')} 匯出備份</button><label class="button secondary full-width file-label">${icon('upload')} 從備份還原<input class="sr-only" type="file" id="restore-file" accept="application/json,.json"></label><p class="page-note">學習日期時區：${h(state.settings.studyTimezone)}</p></section><section class="panel settings-panel about-panel"><h2>關於這份教材</h2><p>詞表取自 American Oxford 3000，涵蓋 A1–B2，共 ${catalog.entries.length.toLocaleString()} 個詞條。</p><p>目前可學 ${catalog.cards.length} 個詞條。繁中釋義與例句為本專案編寫的試用教材，其餘內容持續準備中。</p><small>© Oxford University Press · 詞表來源標示</small></section><button class="text-button danger-text" data-action="ask-clear">清除所有個人學習紀錄</button></div></div>`;
}
async function render({ focus = false } = {}) {
  if (!state || !catalog) return;
  const [route = 'today', id] = location.hash.replace(/^#\/?/, '').split('/');
  document.body.classList.toggle('is-learning', route === 'learn');
  document.querySelectorAll('[data-nav]').forEach(link => { if (link.dataset.nav === route) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current'); });
  stopAudio();
  const views = { today: homeView, learn: learningView, words: wordsView, progress: progressView, settings: settingsView };
  main.innerHTML = route === 'session' ? resultView(id) : route === 'words' && id ? `<div class="detail-page"><a href="#/words" class="subtle-link">← 返回單字庫</a>${catalog.entryMap.has(id) ? `<h1>${h(catalog.entryMap.get(id).displayHeadword)}</h1><section class="panel">${detailContent(catalog.entryMap.get(id))}</section>` : emptyState('找不到這個詞條', '請返回單字庫搜尋。')}</div>` : views[route] ? views[route]() : emptyState('這個頁面不存在', '回到今日學習繼續吧。', '<a href="#/today" class="button primary">今日學習</a>');
  document.title = `${({ today: '今日學習', words: '單字庫', progress: '學習進度', settings: '設定與資料', learn: '詞彙學習', session: '學習結果' })[route] || 'LexiPop'} · LexiPop`;
  if (focus) main.focus({ preventScroll: true });
  if (route === 'learn' && ownsSession) document.querySelector('#answer-input')?.focus({ preventScroll: true });
}
function scheduleDraft() {
  const session = activeSession(state), task = session && currentTask(session), input = document.querySelector('#answer-input');
  if (!task || !input || !ownsSession) return;
  draftJob = { sessionId: session.sessionId, taskId: task.taskId, value: input.value };
  clearTimeout(draftTimer); draftTimer = setTimeout(() => flushDraft().catch(error => notify(error.message)), 300);
}
async function flushDraft() {
  clearTimeout(draftTimer);
  const draft = draftJob; draftJob = null;
  if (draft) {
    try { await mutate(next => applyTaskAction(next, draft.sessionId, draft.taskId, 'draft', draft.value), { ownerId }); }
    catch (error) { if (error.code !== 'LEASE_LOST') draftJob = draft; throw error; }
  }
}
async function begin(reviewOnly = false, force = false) {
  await flushDraft();
  try { await mutate(next => { startSession(next, catalog, reviewOnly); }, { ownerId, claim: true, force }); }
  catch (error) { if (error.message.includes('另一個分頁')) { confirmAction('在這裡接續學習？', '另一個分頁正在使用學習紀錄。接續後，原分頁會停止作答。', 'takeover', '在此接續'); return; } throw error; }
  ownsSession = true; dialog.close();
  if (location.hash === '#/learn') await render(); else navigate('learn');
}
async function taskAction(action) {
  const session = activeSession(state), task = session && currentTask(session);
  if (!task) return;
  const value = document.querySelector('#answer-input')?.value ?? task.draftInput;
  await flushDraft();
  await mutate(next => applyTaskAction(next, session.sessionId, task.taskId, action, value), { ownerId });
  await render();
}
function exportData() {
  const blob = new Blob([JSON.stringify(createBackup(state, catalog), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob), link = document.createElement('a');
  link.href = url; link.download = `lexipop-progress-${today()}.json`; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 10000); notify('備份已準備下載。');
}
document.addEventListener('click', async event => {
  const levelLink = event.target.closest('[data-level-link]');
  if (levelLink) { library.level = levelLink.dataset.levelLink; library.page = 1; }
  const button = event.target.closest('[data-action]');
  if (!button || busy || button.disabled) return;
  event.preventDefault();
  const action = button.dataset.action;
  if (action === 'close-dialog') { dialog.close(); return; }
  busy = true;
  try {
    if (['start', 'review', 'takeover'].includes(action)) await begin(action === 'review', action === 'takeover');
    else if (['hint', 'reveal', 'skip'].includes(action)) await taskAction(action);
    else if (action === 'next') {
      await flushDraft(); const session = activeSession(state);
      await mutate(next => advanceSession(next, session.sessionId), { ownerId });
      const updated = state.sessions.find(s => s.sessionId === session.sessionId);
      if (updated.status === 'completed') { ownsSession = false; await mutate(next => next, { ownerId, release: true }); navigate(`session/${session.sessionId}`); } else await render();
    } else if (action === 'pause' || action === 'end') {
      await flushDraft(); const session = activeSession(state);
      await mutate(next => { const s = next.sessions.find(s => s.sessionId === session.sessionId); s.status = action === 'pause' ? 'paused' : 'ended'; if (action === 'end') s.endedAt = new Date().toISOString(); }, { ownerId, release: true });
      ownsSession = false; dialog.close(); navigate(action === 'pause' ? 'today' : `session/${session.sessionId}`);
    } else if (action === 'ask-end') confirmAction('先結束這一輪？', '已完成的單字會保留。尚未完成的題目會在之後重新安排。', 'end', '結束並查看結果');
    else if (action === 'favorite') {
      const entryId = button.dataset.id;
      await mutate(next => { if (next.favorites[entryId]) delete next.favorites[entryId]; else next.favorites[entryId] = { createdAt: new Date().toISOString() }; });
      const scroll = window.scrollY; await render(); window.scrollTo(0, scroll);
      if (dialog.open && dialog.dataset.entryId === entryId) showDetail(entryId);
    } else if (action === 'detail') showDetail(button.dataset.id);
    else if (action === 'filter-favorite' || action === 'filter-practice') { const key = action === 'filter-favorite' ? 'favorite' : 'practice'; library[key] = !library[key]; library.page = 1; await render(); }
    else if (action === 'clear-filters') { library = { query: '', level: 'all', status: 'all', favorite: false, practice: false, page: 1 }; await render(); }
    else if (action === 'page-prev' || action === 'page-next') { library.page += action === 'page-prev' ? -1 : 1; await render(); window.scrollTo(0, 0); }
    else if (action === 'trend') { trendDays = Number(button.dataset.days); await render(); }
    else if (['speak-word', 'speak-sentence', 'detail-speak'].includes(action)) {
      let q, text;
      if (action === 'detail-speak') { const entry = catalog.entryMap.get(button.dataset.id), card = cardOf(entry); q = catalog.questionMap.get(card.questionIds[0]); text = button.dataset.sentence === 'true' ? q.sentenceBefore + q.answer + q.sentenceAfter : entry.displayHeadword; }
      else { q = currentTask(activeSession(state)).questionSnapshot; text = action === 'speak-word' ? q.headword : q.sentenceBefore + q.answer + q.sentenceAfter; }
      busy = false;
      const language = await speak(text); if (language && !/^en[-_]US/i.test(language)) notify(`本次使用 ${language} 英文聲音。`);
    } else if (action === 'export') { await flushDraft(); state = await store.read(); exportData(); }
    else if (action === 'restore') {
      await mutate(() => structuredClone(pendingRestore), { ownerId, claim: true, release: true }); pendingRestore = null; ownsSession = false; draftJob = null; dialog.close(); await render(); notify('備份已還原，學習進度已更新。');
    } else if (action === 'ask-clear') confirmAction('清除所有學習紀錄？', '進度、收藏、回合與設定都會清除，內建詞庫仍會保留。建議先匯出備份。', 'clear', '確認清除', true);
    else if (action === 'clear') {
      await mutate(() => createInitialState(state.settings.studyTimezone), { ownerId, claim: true, release: true }); ownsSession = false; draftJob = null; dialog.close(); navigate('today'); notify('已清除個人紀錄，可以重新開始。');
    }
  } catch (error) { notify(error.message); }
  finally { busy = false; }
});
document.addEventListener('submit', async event => {
  if (!['answer-form', 'settings-form'].includes(event.target.id)) return;
  event.preventDefault(); if (busy) return; busy = true;
  try {
    if (event.target.id === 'answer-form') await taskAction('submit');
    else {
      const data = new FormData(event.target), goal = Number(data.get('goal')), level = data.get('level');
      if (!GOALS.includes(goal) || ![...LEVELS, 'all'].includes(level)) throw new Error('請選擇有效的學習偏好。');
      await mutate(next => { next.settings.dailyGoal = goal; next.settings.selectedLevel = level; next.dailyGoals[studyDate(next.settings.studyTimezone)] = goal; });
      await render(); notify('偏好已儲存，新字範圍將於下一輪生效。');
    }
  } catch (error) { notify(error.message); } finally { busy = false; }
});
document.addEventListener('keydown', event => { if (event.target.id === 'answer-input' && event.key === 'Enter' && (event.isComposing || event.keyCode === 229)) event.preventDefault(); });
let searchTimer;
document.addEventListener('input', event => {
  if (event.target.id === 'answer-input') scheduleDraft();
  if (event.target.id === 'word-search') { const query = event.target.value, caret = event.target.selectionStart; clearTimeout(searchTimer); searchTimer = setTimeout(async () => { library.query = query; library.page = 1; await render(); const el = document.querySelector('#word-search'); el?.focus(); if (el && caret != null && el.type !== 'search') el.setSelectionRange(caret, caret); }, 180); }
});
document.addEventListener('change', async event => {
  if (event.target.id === 'filter-level' || event.target.id === 'filter-status') { library[event.target.id === 'filter-level' ? 'level' : 'status'] = event.target.value; library.page = 1; await render(); }
  if (event.target.id === 'restore-file') {
    const file = event.target.files[0]; if (!file) return;
    try {
      if (file.size > 20 * 1024 * 1024) throw new Error('備份檔不可超過 20 MB。');
      const backup = JSON.parse(await file.text()); pendingRestore = validateBackup(backup, catalog);
      confirmAction('還原這份備份？', `備份日期：${backup.exportedAt.slice(0, 10)}，包含 ${pendingRestore.completions.length} 筆完成紀錄。還原將替換目前資料，不會合併。`, 'restore', '確認替換資料');
    } catch (error) { notify(error instanceof SyntaxError ? '這不是有效的 JSON 備份檔。' : error.message); } finally { event.target.value = ''; }
  }
});
dialog.addEventListener('close', () => { delete dialog.dataset.entryId; stopAudio(); });
window.addEventListener('hashchange', async () => {
  try { await flushDraft(); state = await store.read(); await render({ focus: true }); window.scrollTo(0, 0); }
  catch (error) { notify(error.message); }
});
document.addEventListener('visibilitychange', async () => {
  try { if (document.hidden) { await flushDraft(); stopAudio(); } else if (store && state) { state = await store.read(); if (!location.hash.startsWith('#/learn')) await render(); } }
  catch (error) { notify(error.message); }
});
document.addEventListener('focusout', event => { if (event.target.id === 'answer-input') flushDraft().catch(error => notify(error.message)); });
setInterval(async () => {
  if (!ownsSession || !store) return;
  try { if (!(await store.renew(ownerId))) { ownsSession = false; draftJob = null; clearTimeout(draftTimer); state = await store.read(); await render(); notify('學習已在另一個分頁接續。'); } }
  catch { notify('連線到本機紀錄時發生問題，請先保留此頁。'); }
}, 15000);
async function boot() {
  try {
    if (location.protocol === 'file:') throw new Error('請使用本機預覽伺服器開啟網站：執行 npm start，然後開啟 http://localhost:4173。');
    [catalog, store] = await Promise.all([loadCatalog(), new LocalStore().open()]);
    state = await store.read(); await mutate(next => { next.dailyGoals[studyDate(next.settings.studyTimezone)] ??= next.settings.dailyGoal; });
    if (!location.hash) location.hash = '#/today';
    await render();
  } catch (error) {
    main.innerHTML = emptyState('暫時無法準備學習內容', error.message, '<button class="button primary" id="retry-startup">重新載入</button>');
    document.querySelector('#retry-startup').addEventListener('click', () => location.reload());
  }
}
boot();
