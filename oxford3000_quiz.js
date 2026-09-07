const STORAGE_KEY = 'oxford3000_quiz_progress_v1';

// ---- Oxford 3000 word list (word + CEFR level) ----
// ---- State ----
let quizWords = [];
let answers = [];   // { word, level, answer, skipped }
let currentIndex = 0;
let selectedLevels = new Set(['A1','A2','B1','B2']);
let quizMode = 'standard'; // 'standard' | 'review'

const el = id => document.getElementById(id);

// ---- Word lookup & level totals ----
const LEVELS = ['A1','A2','B1','B2'];
const TOTAL_WORDS = WORDS.length;
const levelTotals = {};
LEVELS.forEach(l => { levelTotals[l] = WORDS.filter(w => w.level === l).length; });
const wordIndexByLower = new Map(WORDS.map(w => [w.word.toLowerCase(), w.word]));
function resolveWord(raw){
  if (typeof raw !== 'string') return null;
  return wordIndexByLower.get(raw.trim().toLowerCase()) || null;
}
function levelMatches(w){
  return !w.level || selectedLevels.has(w.level);
}

// ---- Mastery store (persistent across sessions) ----
const MASTERY_KEY = 'oxford3000_mastery_v1';
const NAME_KEY = 'oxford3000_username_v1';
const GEMINI_KEY = 'oxford3000_gemini_settings_v1';

// ---- Gemini API settings (stored locally; see docs/adr/0001-gemini-key-stored-client-side.md) ----
function loadGeminiSettings(){
  try {
    const raw = localStorage.getItem(GEMINI_KEY);
    if (!raw) return { apiKey: '', modelId: '' };
    const parsed = JSON.parse(raw);
    return {
      apiKey: typeof parsed.apiKey === 'string' ? parsed.apiKey : '',
      modelId: typeof parsed.modelId === 'string' ? parsed.modelId : ''
    };
  } catch (e) { return { apiKey: '', modelId: '' }; }
}
function saveGeminiSettings(settings){
  try { localStorage.setItem(GEMINI_KEY, JSON.stringify(settings)); } catch (e) { /* ignore */ }
}
function hasGeminiConfig(){
  const s = loadGeminiSettings();
  return !!(s.apiKey.trim() && s.modelId.trim());
}
function geminiModelUrl(modelId){
  const model = modelId.trim().replace(/^models\//, '');
  return `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}`;
}
function loadMastery(){
  try {
    const raw = localStorage.getItem(MASTERY_KEY);
    if (!raw) return { words: {} };
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed.words !== 'object' || parsed.words === null) return { words: {} };
    return parsed;
  } catch (e) { return { words: {} }; }
}
function saveMastery(store){
  try { localStorage.setItem(MASTERY_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
}
function getStatus(word){
  const store = loadMastery();
  const entry = store.words[word];
  return entry ? entry.status : 'new';
}
function getMeaning(word){
  const store = loadMastery();
  const entry = store.words[word];
  return entry ? (entry.meaning || '') : '';
}
function getEntry(word){
  const store = loadMastery();
  return store.words[word] || null;
}
function countByStatus(status){
  const store = loadMastery();
  return Object.values(store.words).filter(e => e.status === status).length;
}
// ---- Familiarity stage scheduling (spaced review; see CONTEXT.md "熟悉度階段") ----
const STAGE_INTERVAL_DAYS = [0, 1, 3, 7, 15, 30];
const MAX_STAGE = STAGE_INTERVAL_DAYS.length - 1;

function stageDueAt(stage){
  const d = new Date();
  d.setDate(d.getDate() + STAGE_INTERVAL_DAYS[stage]);
  return d.toISOString();
}
function isDue(entry){
  if (!entry || !entry.dueAt) return true; // legacy data with no dueAt: treat as due now
  return new Date(entry.dueAt).getTime() <= Date.now();
}

function allPracticingWords(){
  const store = loadMastery();
  return WORDS.filter(w => store.words[w.word] && store.words[w.word].status === 'practicing');
}
function practicingWords(){
  const store = loadMastery();
  return WORDS.filter(w => {
    const entry = store.words[w.word];
    return entry && entry.status === 'practicing' && isDue(entry);
  });
}
function nextDueInDays(){
  const store = loadMastery();
  const now = Date.now();
  let minDays = null;
  Object.values(store.words).forEach(entry => {
    if (entry.status !== 'practicing' || !entry.dueAt) return;
    const due = new Date(entry.dueAt).getTime();
    if (due <= now) return;
    const days = Math.ceil((due - now) / 86400000);
    if (minDays === null || days < minDays) minDays = days;
  });
  return minDays;
}

function standardQuizPool(includeMastered){
  const store = loadMastery();
  return WORDS.filter(w => {
    if (!levelMatches(w)) return false;
    const entry = store.words[w.word];
    if (!entry) return true; // new word
    if (entry.status === 'mastered') return includeMastered;
    if (entry.status === 'practicing') return isDue(entry);
    return true;
  });
}

// ---- Gamification: badges & dashboard ----
const BADGES = [
  { pct: 10,  icon: '🌱', label: '入門' },
  { pct: 25,  icon: '🌿', label: '漸入佳境' },
  { pct: 50,  icon: '🌳', label: '過半' },
  { pct: 75,  icon: '🏆', label: '接近全滿' },
  { pct: 100, icon: '👑', label: '破關' },
];
function renderDashboard(){
  const masteredCount = countByStatus('mastered');
  const duePracticingCount = practicingWords().length;
  const totalPracticingCount = allPracticingWords().length;
  const pct = TOTAL_WORDS ? Math.round((masteredCount / TOTAL_WORDS) * 100) : 0;

  el('dashProgressLabel').textContent = `${masteredCount} / ${TOTAL_WORDS}（${pct}%）`;
  el('dashProgressFill').style.width = `${pct}%`;

  const levelRow = el('levelProgressRow');
  levelRow.innerHTML = '';
  LEVELS.forEach(l => {
    const total = levelTotals[l] || 0;
    const mastered = WORDS.filter(w => w.level === l && getStatus(w.word) === 'mastered').length;
    const lp = total ? Math.round((mastered / total) * 100) : 0;
    const div = document.createElement('div');
    div.className = 'mini-level';
    div.innerHTML = `<span class="lvl-name">${l}</span><div class="mini-bar"><div class="mini-fill" style="width:${lp}%"></div></div><span class="lvl-count">${mastered}/${total}</span>`;
    levelRow.appendChild(div);
  });

  const badgeRow = el('badgeRow');
  badgeRow.innerHTML = '';
  BADGES.forEach(b => {
    const earned = pct >= b.pct;
    const chip = document.createElement('span');
    chip.className = 'badge-chip' + (earned ? ' earned' : '');
    chip.textContent = `${b.icon} ${b.label}`;
    badgeRow.appendChild(chip);
  });

  el('fullClearBanner').classList.toggle('hidden', masteredCount < TOTAL_WORDS);

  el('reinforceRow').classList.toggle('hidden', masteredCount === 0);
  const reviewBtn = el('reviewBtn');
  const flashcardBtn = el('flashcardBtn');
  if (duePracticingCount > 0) {
    reviewBtn.textContent = `🔁 複習測驗（${duePracticingCount} 個待複習）`;
    flashcardBtn.textContent = `📇 閃卡複習（${duePracticingCount} 張）`;
    reviewBtn.classList.remove('hidden');
    flashcardBtn.classList.remove('hidden');
  } else {
    reviewBtn.classList.add('hidden');
    flashcardBtn.classList.add('hidden');
  }

  const upcomingCount = totalPracticingCount - duePracticingCount;
  const upcomingNote = el('upcomingReviewNote');
  if (upcomingCount > 0) {
    const days = nextDueInDays();
    upcomingNote.textContent = `📅 另有 ${upcomingCount} 個單字已安排複習，最快 ${days} 天後到期。`;
    upcomingNote.classList.remove('hidden');
  } else {
    upcomingNote.classList.add('hidden');
  }

  updateStartGating();
}

function fireConfetti(){
  const colors = ['#8a6654','#bde4d7','#493849','#8a6b2f','#8a3a3a','#68617c'];
  for (let i = 0; i < 90; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2 + Math.random() * 1.5) + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4000);
  }
}

function checkFullClear(previousMasteredCount){
  const masteredCount = countByStatus('mastered');
  if (masteredCount === TOTAL_WORDS && previousMasteredCount < TOTAL_WORDS) {
    el('fullClearTotal').textContent = TOTAL_WORDS;
    el('fullClearOverlay').classList.remove('hidden');
    fireConfetti();
  }
}

function showScreen(id){
  ['setupScreen', 'quizScreen', 'resultScreen', 'flashcardScreen'].forEach(s => {
    el(s).classList.toggle('hidden', s !== id);
  });
}

function updatePoolInfo(){
  const includeMastered = el('includeMasteredChk').checked;
  const pool = standardQuizPool(includeMastered);
  el('poolInfo').textContent = `目前符合條件的單字共 ${pool.length} 個。`;
  renderDashboard();
  return pool;
}

// ---- localStorage persistence (so mid-quiz progress survives refresh/close) ----
function saveProgress(){
  try {
    const state = {
      quizWords, answers, currentIndex, quizMode,
      userName: el('userName').value,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) { /* storage unavailable or full - ignore */ }
}

function loadProgress(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const state = JSON.parse(raw);
    if (!state || !Array.isArray(state.quizWords) || state.quizWords.length === 0) return null;
    return state;
  } catch (e) { return null; }
}

function clearProgress(){
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
}

function checkForSavedProgress(){
  const state = loadProgress();
  if (!state) return;
  const answered = state.answers.filter(a => !a.skipped).length;
  el('resumeProgress').textContent = `已答 ${answered} / ${state.quizWords.length} 題`;
  el('resumeBanner').classList.remove('hidden');
}

el('resumeBtn').addEventListener('click', () => {
  const state = loadProgress();
  if (!state) return;
  quizWords = state.quizWords;
  answers = state.answers;
  currentIndex = Math.min(state.currentIndex, quizWords.length - 1);
  quizMode = state.quizMode || 'standard';
  if (state.userName) el('userName').value = state.userName;

  el('resumeBanner').classList.add('hidden');
  showScreen('quizScreen');
  updateQuizModeBadge();
  renderQuestion();
});

el('discardResumeBtn').addEventListener('click', () => {
  clearProgress();
  el('resumeBanner').classList.add('hidden');
  showToast('已清除上次的測驗紀錄');
});

checkForSavedProgress();

// ---- Remember the user's name across sessions ----
try {
  const savedName = localStorage.getItem(NAME_KEY);
  if (savedName) el('userName').value = savedName;
} catch (e) { /* ignore */ }
el('userName').addEventListener('input', () => {
  try { localStorage.setItem(NAME_KEY, el('userName').value); } catch (e) { /* ignore */ }
});

// ---- Gemini API settings UI ----
function updateGeminiGradeBtnState(){
  const btn = el('geminiGradeBtn');
  if (!btn) return;
  if (hasGeminiConfig()) {
    btn.disabled = false;
    btn.title = '';
  } else {
    btn.disabled = true;
    btn.title = '尚未設定 Gemini API，請先點右上角「⚙️ 設定」填寫';
  }
}

// ---- Gating quiz start on having Gemini configured (grading only works via Gemini now) ----
function updateStartGating(){
  const configured = hasGeminiConfig();
  el('geminiRequiredBanner').classList.toggle('hidden', configured);

  const startBtn = el('startBtn');
  startBtn.disabled = !configured;
  startBtn.title = configured ? '' : '請先完成 Gemini API 設定';

  const reviewBtn = el('reviewBtn');
  reviewBtn.disabled = !configured;
  reviewBtn.title = configured ? '' : '請先完成 Gemini API 設定';
}

(function initGeminiSettingsUI(){
  const settings = loadGeminiSettings();
  el('geminiApiKey').value = settings.apiKey;
  el('geminiModelId').value = settings.modelId;
  updateGeminiGradeBtnState();
})();

function saveGeminiFieldsFromUI(){
  saveGeminiSettings({
    apiKey: el('geminiApiKey').value.trim(),
    modelId: el('geminiModelId').value.trim()
  });
  el('geminiTestResult').textContent = '';
  updateGeminiGradeBtnState();
  updateStartGating();
}
el('geminiApiKey').addEventListener('input', saveGeminiFieldsFromUI);
el('geminiModelId').addEventListener('input', saveGeminiFieldsFromUI);

el('toggleKeyVisibilityBtn').addEventListener('click', () => {
  const input = el('geminiApiKey');
  input.type = input.type === 'password' ? 'text' : 'password';
});

el('testGeminiBtn').addEventListener('click', async () => {
  const { apiKey, modelId } = loadGeminiSettings();
  const resultEl = el('geminiTestResult');
  if (!apiKey || !modelId) {
    resultEl.style.color = 'var(--color-danger)';
    resultEl.textContent = '請先輸入 API Key 與 Model ID';
    return;
  }
  const btn = el('testGeminiBtn');
  btn.disabled = true;
  resultEl.style.color = 'var(--color-text-tertiary)';
  resultEl.textContent = '測試中…';
  try {
    const res = await fetch(`${geminiModelUrl(modelId)}?key=${encodeURIComponent(apiKey)}`);
    if (res.ok) {
      resultEl.style.color = 'var(--color-success)';
      resultEl.textContent = '✅ 連線成功，設定沒問題';
    } else {
      const errData = await res.json().catch(() => null);
      const message = (errData && errData.error && errData.error.message) || `HTTP ${res.status}`;
      resultEl.style.color = 'var(--color-danger)';
      resultEl.textContent = `❌ 連線失敗：${message}`;
    }
  } catch (e) {
    resultEl.style.color = 'var(--color-danger)';
    resultEl.textContent = '❌ 連線失敗：網路錯誤或被瀏覽器封鎖';
  } finally {
    btn.disabled = false;
  }
});

// ---- Settings modal ----
function openSettingsModal(){
  el('settingsOverlay').classList.remove('hidden');
}
function closeSettingsModal(){
  el('settingsOverlay').classList.add('hidden');
}
el('openSettingsBtn').addEventListener('click', openSettingsModal);
el('closeSettingsBtn').addEventListener('click', closeSettingsModal);
el('settingsOverlay').addEventListener('click', (e) => {
  if (e.target === el('settingsOverlay')) closeSettingsModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !el('settingsOverlay').classList.contains('hidden')) closeSettingsModal();
});

// level chip toggles
document.querySelectorAll('#levelChips .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const lvl = chip.dataset.level;
    if (selectedLevels.has(lvl)) {
      if (selectedLevels.size === 1) return; // keep at least one level
      selectedLevels.delete(lvl);
      chip.classList.remove('active');
    } else {
      selectedLevels.add(lvl);
      chip.classList.add('active');
    }
    updatePoolInfo();
  });
});
el('includeMasteredChk').addEventListener('change', updatePoolInfo);
updatePoolInfo();

function shuffle(arr){
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function notDueMessage(){
  const days = nextDueInDays();
  return days !== null ? `目前沒有到期的複習單字，最快 ${days} 天後可以複習` : '目前沒有待複習的單字';
}

function beginQuiz(pool, mode){
  if (pool.length === 0) {
    const msg = mode === 'review'
      ? notDueMessage()
      : '這個範圍內的單字都已經學會了！可以勾選「鞏固複習」或調整等級';
    showToast(msg);
    return;
  }

  const orderMode = el('orderMode').value;
  if (orderMode === 'random') pool = shuffle(pool);

  const countVal = el('questionCount').value;
  const count = countVal === 'all' ? pool.length : Math.min(parseInt(countVal, 10), pool.length);
  quizWords = pool.slice(0, count);
  answers = quizWords.map(w => ({ word: w.word, level: w.level, answer: '', skipped: true }));
  currentIndex = 0;
  quizMode = mode;

  clearProgress(); // starting a new quiz discards any previous in-progress record
  saveProgress();

  el('resumeBanner').classList.add('hidden');
  showScreen('quizScreen');
  updateQuizModeBadge();
  renderQuestion();
}

function updateQuizModeBadge(){
  el('quizModeBadge').classList.toggle('hidden', quizMode !== 'review');
}

el('startBtn').addEventListener('click', () => {
  const includeMastered = el('includeMasteredChk').checked;
  const pool = standardQuizPool(includeMastered);
  beginQuiz(pool, 'standard');
});

el('reviewBtn').addEventListener('click', () => {
  beginQuiz(practicingWords(), 'review');
});

el('flashcardBtn').addEventListener('click', () => {
  openFlashcardScreen();
});

// ---- Flashcard screen ----
let flashcardDeck = [];
let flipIndex = 0;

function openFlashcardScreen(){
  flashcardDeck = practicingWords();
  if (flashcardDeck.length === 0) { showToast(notDueMessage()); return; }
  flipIndex = 0;
  el('flashcardCount').textContent = `（共 ${flashcardDeck.length} 張）`;
  renderFlashcardList();
  setFlashcardView('list');
  showScreen('flashcardScreen');
}

function renderFlashcardList(){
  const list = el('flashcardList');
  list.innerHTML = '';
  flashcardDeck.forEach(w => {
    const meaning = getMeaning(w.word);
    const div = document.createElement('div');
    div.className = 'review-item';
    div.innerHTML = `<span class="rword">${escapeHtml(w.word)} <small style="color:var(--color-text-tertiary);">(${w.level || '-'})</small></span><span class="rans">${meaning ? escapeHtml(meaning) : '（尚無正解紀錄）'}</span><button type="button" class="list-speak-btn" data-word="${escapeHtml(w.word)}" title="播放發音">🔊</button>`;
    list.appendChild(div);
  });
}

el('flashcardList').addEventListener('click', (e) => {
  const btn = e.target.closest('.list-speak-btn');
  if (!btn) return;
  speakWord(btn.dataset.word);
});

function setFlashcardView(mode){
  const isList = mode === 'list';
  el('flashcardListView').classList.toggle('hidden', !isList);
  el('flashcardFlipView').classList.toggle('hidden', isList);
  el('flashcardListModeBtn').classList.toggle('active', isList);
  el('flashcardFlipModeBtn').classList.toggle('active', !isList);
  if (!isList) renderFlipCard();
}

function setOptionalField(id, value){
  const node = el(id);
  if (value) { node.textContent = value; node.classList.remove('hidden'); }
  else { node.textContent = ''; node.classList.add('hidden'); }
}

function speakWord(text){
  if (!text || !('speechSynthesis' in window)) { showToast('此瀏覽器不支援語音播放'); return; }
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  } catch (e) { /* ignore */ }
}

function renderFlipCard(){
  const w = flashcardDeck[flipIndex];
  const entry = getEntry(w.word);
  el('flipCard').classList.remove('flipped');
  el('flipWord').textContent = w.word;
  el('flipMeaning').textContent = (entry && entry.meaning) || '（尚無正解紀錄）';
  el('flipProgressText').textContent = `第 ${flipIndex + 1} / ${flashcardDeck.length} 張`;
  speakWord(w.word);

  setOptionalField('flipPhoneticFront', entry && entry.phonetic ? `🔊 ${entry.phonetic}` : '');
  setOptionalField('flipPos', entry && entry.partOfSpeech);
  setOptionalField('flipPhonetic', entry && entry.phonetic ? `🔊 ${entry.phonetic}` : '');
  setOptionalField('flipSoundAlike', entry && entry.soundAlike ? `👂 空耳記音：${entry.soundAlike}` : '');

  const exampleNode = el('flipExample');
  if (entry && entry.example) {
    exampleNode.innerHTML = `${escapeHtml(entry.example)}${entry.exampleZh ? `<span class="zh">${escapeHtml(entry.exampleZh)}</span>` : ''}`;
    exampleNode.classList.remove('hidden');
  } else {
    exampleNode.innerHTML = '';
    exampleNode.classList.add('hidden');
  }

  setOptionalField('flipMnemonic', entry && entry.mnemonic ? `💡 ${entry.mnemonic}` : '');
  setOptionalField('flipRelated', entry && entry.related ? `🔗 ${entry.related}` : '');
}

el('flashcardListModeBtn').addEventListener('click', () => setFlashcardView('list'));
el('flashcardFlipModeBtn').addEventListener('click', () => setFlashcardView('flip'));

el('flipCard').addEventListener('click', () => {
  el('flipCard').classList.toggle('flipped');
});

el('flipSpeakBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  const w = flashcardDeck[flipIndex];
  if (w) speakWord(w.word);
});

el('flipPrevBtn').addEventListener('click', () => {
  flipIndex = (flipIndex - 1 + flashcardDeck.length) % flashcardDeck.length;
  renderFlipCard();
});
el('flipNextBtn').addEventListener('click', () => {
  flipIndex = (flipIndex + 1) % flashcardDeck.length;
  renderFlipCard();
});

document.addEventListener('keydown', (e) => {
  if (el('flashcardScreen').classList.contains('hidden')) return;
  if (el('flashcardFlipView').classList.contains('hidden')) return;
  if (e.key === ' ') { e.preventDefault(); el('flipCard').classList.toggle('flipped'); }
  else if (e.key === 'ArrowRight') { el('flipNextBtn').click(); }
  else if (e.key === 'ArrowLeft') { el('flipPrevBtn').click(); }
  else if (e.key === 's' || e.key === 'S') { el('flipSpeakBtn').click(); }
});

el('startReviewFromFlashcardBtn').addEventListener('click', () => {
  beginQuiz(practicingWords(), 'review');
});
el('backFromFlashcardBtn').addEventListener('click', () => {
  showScreen('setupScreen');
  updatePoolInfo();
});
el('closeFullClearBtn').addEventListener('click', () => {
  el('fullClearOverlay').classList.add('hidden');
});

function renderQuestion(){
  const w = quizWords[currentIndex];
  el('currentWord').textContent = w.word;
  el('currentLevel').textContent = w.level || '';
  el('answerInput').value = answers[currentIndex].skipped ? '' : answers[currentIndex].answer;
  el('progressText').textContent = `第 ${currentIndex + 1} / ${quizWords.length} 題`;
  el('progressFill').style.width = `${((currentIndex) / quizWords.length) * 100}%`;
  el('prevBtn').disabled = currentIndex === 0;
  el('nextBtn').textContent = currentIndex === quizWords.length - 1 ? '完成測驗 →' : '下一題 →';
  setTimeout(() => el('answerInput').focus(), 30);
}

function saveCurrentAnswer(){
  const val = el('answerInput').value.trim();
  answers[currentIndex].answer = val;
  answers[currentIndex].skipped = val.length === 0;
  saveProgress();
}

el('answerInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); el('nextBtn').click(); }
  else if (e.key === 'Escape') { e.preventDefault(); clearAnswerInput(); }
});

function clearAnswerInput(){
  el('answerInput').value = '';
  el('answerInput').focus();
  saveCurrentAnswer();
}
el('clearAnswerBtn').addEventListener('click', clearAnswerInput);

// ---- Voice input (Web Speech API) ----
const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognizer = null;
let listening = false;
let listenTimeoutId = null;
const LISTEN_TIMEOUT_MS = 8000; // safety net: some browsers never fire 'end'/'error' on silence, leaving the mic hot indefinitely

function stopListening(){
  clearTimeout(listenTimeoutId);
  if (!listening) return;
  listening = false;
  el('micBtn').classList.remove('listening');
  try { recognizer.abort(); } catch (e) { /* already stopped/aborted */ }
}

if (SpeechRecognitionCtor) {
  el('micBtn').classList.remove('hidden');
  recognizer = new SpeechRecognitionCtor();
  recognizer.lang = 'zh-TW';
  recognizer.continuous = false;
  recognizer.interimResults = false;
  recognizer.maxAlternatives = 1;

  recognizer.addEventListener('result', (e) => {
    const transcript = e.results[0][0].transcript.trim();
    el('answerInput').value = transcript;
    saveCurrentAnswer();
  });
  recognizer.addEventListener('end', () => {
    clearTimeout(listenTimeoutId);
    listening = false;
    el('micBtn').classList.remove('listening');
  });
  recognizer.addEventListener('error', () => {
    clearTimeout(listenTimeoutId);
    listening = false;
    el('micBtn').classList.remove('listening');
    showToast('語音辨識失敗，請再試一次');
  });

  el('micBtn').addEventListener('click', () => {
    if (listening) {
      stopListening();
      return;
    }
    listening = true;
    el('micBtn').classList.add('listening');
    try {
      recognizer.start();
      clearTimeout(listenTimeoutId);
      listenTimeoutId = setTimeout(stopListening, LISTEN_TIMEOUT_MS);
    } catch (e) {
      listening = false;
      el('micBtn').classList.remove('listening');
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopListening();
  });
}

el('nextBtn').addEventListener('click', () => {
  saveCurrentAnswer();
  if (currentIndex < quizWords.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
});

el('prevBtn').addEventListener('click', () => {
  saveCurrentAnswer();
  if (currentIndex > 0) { currentIndex--; renderQuestion(); }
});

el('skipBtn').addEventListener('click', () => {
  answers[currentIndex].answer = '';
  answers[currentIndex].skipped = true;
  saveProgress();
  if (currentIndex < quizWords.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
});

el('finishBtn').addEventListener('click', () => {
  saveCurrentAnswer();
  finishQuiz();
});

function finishQuiz(){
  if (listening) stopListening();
  clearProgress(); // quiz completed - no need to keep the in-progress record
  el('progressFill').style.width = '100%';
  showScreen('resultScreen');
  renderResult();
}

function renderResult(){
  const total = answers.length;
  const answered = answers.filter(a => !a.skipped).length;
  const skipped = total - answered;
  el('statTotal').textContent = total;
  el('statAnswered').textContent = answered;
  el('statSkipped').textContent = skipped;

  const reviewList = el('reviewList');
  reviewList.innerHTML = '';
  answers.forEach((a, i) => {
    const div = document.createElement('div');
    div.className = 'review-item';
    const ansClass = a.skipped ? 'rans empty' : 'rans';
    div.innerHTML = `<span class="rword"><span class="grade-badge" id="gradeBadge-${i}"></span>${i + 1}. ${escapeHtml(a.word)} <small style="color:var(--color-text-tertiary);">(${a.level})</small></span><span class="${ansClass}">${a.skipped ? '未作答' : escapeHtml(a.answer)}</span>`;
    reviewList.appendChild(div);
  });

  el('geminiGradeLoading').classList.add('hidden');
  el('geminiGradeStatus').classList.add('hidden');
  el('geminiGradeStatus').textContent = '';
  el('geminiGradeActions').classList.add('hidden');
  updateGeminiGradeBtnState();
}

// ---- Mark ✅/❌/➖ on the review list once Gemini has graded each word ----
function markReviewBadges(items){
  const badgeByWord = new Map();
  answers.forEach((a, i) => badgeByWord.set(a.word, el(`gradeBadge-${i}`)));

  items.forEach(item => {
    const canonical = resolveWord(item && item.word);
    if (!canonical) return;
    const badge = badgeByWord.get(canonical);
    if (!badge) return;

    const result = String(item.result || '').trim().toLowerCase();
    badge.classList.remove('correct', 'wrong', 'unanswered');
    if (result === 'correct') { badge.textContent = '✅'; badge.classList.add('correct'); }
    else if (result === 'wrong') { badge.textContent = '❌'; badge.classList.add('wrong'); }
    else if (result === 'unanswered') { badge.textContent = '➖'; badge.classList.add('unanswered'); }
  });
}

// ---- Gemini auto-grading (calls the API directly; see docs/adr/0001-gemini-key-stored-client-side.md) ----
const GEMINI_GRADING_SCHEMA = {
  type: 'ARRAY',
  items: {
    type: 'OBJECT',
    properties: {
      word: { type: 'STRING' },
      result: { type: 'STRING', enum: ['correct', 'wrong', 'unanswered'] },
      meaning: { type: 'STRING' },
      partOfSpeech: { type: 'STRING' },
      phonetic: { type: 'STRING' },
      soundAlike: { type: 'STRING' },
      example: { type: 'STRING' },
      exampleZh: { type: 'STRING' },
      mnemonic: { type: 'STRING' },
      related: { type: 'STRING' }
    },
    required: ['word', 'result', 'meaning']
  }
};

function buildQuizItemsForGrading(){
  return answers.map((a, i) => ({
    no: i + 1,
    word: a.word,
    level: a.level,
    userAnswer: a.answer,
    skipped: a.skipped
  }));
}

function buildGeminiGradingPrompt(items){
  return `你是一位英文老師，請批改以下 Oxford 3000 英文單字的中文意思測驗。
每一題包含 word（英文單字）、level（CEFR 等級）、userAnswer（使用者填寫的中文意思）、skipped（是否跳過）。

請針對每一題判斷 userAnswer 是否為該單字合理、正確（或部分正確）的中文意思，允許同義詞、相近詞義；若 skipped 為 true 或 userAnswer 為空，視為未作答（unanswered）。
請針對每一題盡量附上自然發音音標（phonetic）、中文空耳發音教學（soundAlike）、簡短好記的英文例句與中譯（example / exampleZh）、記憶技巧（mnemonic）、常見搭配或同義字（related；沒有可留空字串）、詞性（partOfSpeech；不確定可留空）。
輸出必須包含測驗中的每一題，不能省略任何一題。

測驗結果如下：
${JSON.stringify(items, null, 2)}`;
}

function sleep(ms){ return new Promise(resolve => setTimeout(resolve, ms)); }

function extractGeminiText(data){
  const candidate = data && data.candidates && data.candidates[0];
  const part = candidate && candidate.content && candidate.content.parts && candidate.content.parts[0];
  return part && part.text;
}

function describeGeminiEmptyResponse(data){
  const blockReason = data && data.promptFeedback && data.promptFeedback.blockReason;
  if (blockReason) return `內容被安全機制擋下（${blockReason}）`;
  const finishReason = data && data.candidates && data.candidates[0] && data.candidates[0].finishReason;
  if (finishReason && finishReason !== 'STOP') return `Gemini 未完整回應（${finishReason}）`;
  return 'Gemini 沒有回傳任何內容';
}

async function callGeminiForGrading(items){
  const { apiKey, modelId } = loadGeminiSettings();
  const requestBody = {
    contents: [{ role: 'user', parts: [{ text: buildGeminiGradingPrompt(items) }] }],
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: GEMINI_GRADING_SCHEMA,
      temperature: 0.2
    }
  };

  const maxAttempts = 3; // 1 initial try + up to 2 retries on transient errors
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    let res;
    try {
      res = await fetch(`${geminiModelUrl(modelId)}:generateContent?key=${encodeURIComponent(apiKey)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });
    } catch (networkErr) {
      if (attempt >= maxAttempts) throw new Error('網路錯誤，無法連線到 Gemini API');
      await sleep(attempt * 1500);
      continue;
    }

    if (res.ok) {
      const data = await res.json();
      const text = extractGeminiText(data);
      if (!text) throw new Error(describeGeminiEmptyResponse(data));
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed)) throw new Error('Gemini 回傳的不是陣列格式');
      return parsed;
    }

    const errData = await res.json().catch(() => null);
    const status = errData && errData.error && errData.error.status;
    const message = (errData && errData.error && errData.error.message) || `HTTP ${res.status}`;
    const retryable = res.status === 429 || res.status === 503 || status === 'RESOURCE_EXHAUSTED' || status === 'UNAVAILABLE';

    if (retryable && attempt < maxAttempts) {
      await sleep(attempt * 1500);
      continue;
    }
    throw new Error(message);
  }
  throw new Error('已達重試次數上限');
}

const GEMINI_LOADING_MESSAGES = [
  '🔮 正在呼叫 Gemini 評分中…',
  '📖 正在比對每一題的中文意思…',
  '✏️ 正在整理例句與記憶技巧…',
  '🔊 正在準備發音與空耳教學…',
  '📊 正在統計學會與待複習題數…'
];

el('geminiGradeBtn').addEventListener('click', async () => {
  if (!hasGeminiConfig()) return;
  const btn = el('geminiGradeBtn');
  const statusEl = el('geminiGradeStatus');
  const loadingEl = el('geminiGradeLoading');
  const loadingTextEl = el('geminiGradeLoadingText');
  btn.disabled = true;
  statusEl.classList.add('hidden');
  el('geminiGradeActions').classList.add('hidden');

  let loadingIdx = 0;
  loadingTextEl.textContent = GEMINI_LOADING_MESSAGES[0];
  loadingEl.classList.remove('hidden');
  const loadingTimer = setInterval(() => {
    loadingIdx = (loadingIdx + 1) % GEMINI_LOADING_MESSAGES.length;
    loadingTextEl.textContent = GEMINI_LOADING_MESSAGES[loadingIdx];
  }, 1800);

  try {
    const items = await callGeminiForGrading(buildQuizItemsForGrading());
    const result = applyGradingResults(items);
    markReviewBadges(items);
    statusEl.classList.remove('hidden');
    statusEl.style.color = 'var(--color-success)';
    statusEl.innerHTML = `✅ <b>Gemini 評分完成！</b>本次 ${result.masteredNow} 個學會、${result.practicingNow} 個待複習${result.advancedNow ? `、${result.advancedNow} 個複習進度推進` : ''}${result.unknown ? `，${result.unknown} 筆無法辨識已略過` : ''}，已更新學習進度與閃卡。`;
    showToast('Gemini 評分完成');
    if (result.practicingNow + result.advancedNow > 0) el('geminiGradeActions').classList.remove('hidden');
  } catch (err) {
    statusEl.classList.remove('hidden');
    statusEl.style.color = 'var(--color-danger)';
    statusEl.textContent = `❌ 自動評分失敗：${err.message || err}。請確認 Gemini 設定後再試一次。`;
  } finally {
    clearInterval(loadingTimer);
    loadingEl.classList.add('hidden');
    updateGeminiGradeBtnState();
  }
});

el('goToFlashcardsAfterGradeBtn').addEventListener('click', () => {
  openFlashcardScreen();
});

function applyGradingResults(items){
  const store = loadMastery();
  const previousMastered = countByStatus('mastered');
  let masteredNow = 0, practicingNow = 0, advancedNow = 0, unknown = 0;

  const str = v => typeof v === 'string' ? v.trim() : '';

  items.forEach(item => {
    if (!item || typeof item !== 'object') { unknown++; return; }
    const canonical = resolveWord(item.word);
    if (!canonical) { unknown++; return; }
    const result = String(item.result || '').trim().toLowerCase();
    const prev = store.words[canonical] || {};

    const enriched = {
      meaning: str(item.meaning) || prev.meaning || '',
      partOfSpeech: str(item.partOfSpeech) || prev.partOfSpeech || '',
      phonetic: str(item.phonetic) || prev.phonetic || '',
      soundAlike: str(item.soundAlike) || prev.soundAlike || '',
      example: str(item.example) || prev.example || '',
      exampleZh: str(item.exampleZh) || prev.exampleZh || '',
      mnemonic: str(item.mnemonic) || prev.mnemonic || '',
      related: str(item.related) || prev.related || '',
    };

    if (result === 'correct') {
      if (prev.status === 'practicing') {
        // Already on the familiarity-stage schedule: advance a stage, or graduate at the top stage.
        const nextStage = (typeof prev.stage === 'number' ? prev.stage : 0) + 1;
        if (nextStage > MAX_STAGE) {
          store.words[canonical] = { status: 'mastered', ...enriched, updatedAt: new Date().toISOString() };
          masteredNow++;
        } else {
          store.words[canonical] = { status: 'practicing', stage: nextStage, dueAt: stageDueAt(nextStage), ...enriched, updatedAt: new Date().toISOString() };
          advancedNow++;
        }
      } else {
        // First-ever correct answer (word was 'new', or already 'mastered' under reinforcement): straight to mastered.
        store.words[canonical] = { status: 'mastered', ...enriched, updatedAt: new Date().toISOString() };
        masteredNow++;
      }
    } else if (result === 'wrong' || result === 'unanswered') {
      // Wrong/unanswered always resets to stage 0 (due immediately), regardless of prior stage.
      store.words[canonical] = { status: 'practicing', stage: 0, dueAt: stageDueAt(0), ...enriched, updatedAt: new Date().toISOString() };
      practicingNow++;
    } else {
      unknown++;
    }
  });

  saveMastery(store);
  renderDashboard();
  checkFullClear(previousMastered);

  return { masteredNow, practicingNow, advancedNow, unknown, total: items.length };
}

function escapeHtml(s){
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function showToast(msg){
  const t = el('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove('show'), 1800);
}

el('restartBtn').addEventListener('click', () => {
  clearProgress();
  el('resumeBanner').classList.add('hidden');
  showScreen('setupScreen');
  updatePoolInfo();
});

// ---- Progress backup: export / import everything stored in localStorage ----
el('exportProgressBtn').addEventListener('click', () => {
  const data = {
    app: 'oxford3000_quiz',
    version: 1,
    exportedAt: new Date().toISOString(),
    userName: localStorage.getItem(NAME_KEY) || el('userName').value || '',
    mastery: loadMastery(),
    quizProgress: loadProgress()
  };
  if (el('exportIncludeGeminiKeyChk').checked) {
    data.geminiSettings = loadGeminiSettings();
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  a.href = url;
  a.download = `oxford3000_progress_${ts}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('已匯出進度備份');
});

el('importProgressBtn').addEventListener('click', () => {
  el('importProgressFile').click();
});

el('importProgressFile').addEventListener('change', (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!data || typeof data !== 'object') throw new Error('invalid backup file');

      if (data.mastery && typeof data.mastery === 'object' && typeof data.mastery.words === 'object' && data.mastery.words !== null) {
        saveMastery(data.mastery);
      }
      if (typeof data.userName === 'string' && data.userName) {
        localStorage.setItem(NAME_KEY, data.userName);
        el('userName').value = data.userName;
      }
      if (data.quizProgress && Array.isArray(data.quizProgress.quizWords) && data.quizProgress.quizWords.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data.quizProgress));
      }
      if (data.geminiSettings && typeof data.geminiSettings === 'object') {
        const gs = {
          apiKey: typeof data.geminiSettings.apiKey === 'string' ? data.geminiSettings.apiKey : '',
          modelId: typeof data.geminiSettings.modelId === 'string' ? data.geminiSettings.modelId : ''
        };
        saveGeminiSettings(gs);
        el('geminiApiKey').value = gs.apiKey;
        el('geminiModelId').value = gs.modelId;
        updateGeminiGradeBtnState();
      }

      updatePoolInfo();
      checkForSavedProgress();
      showToast('已匯入進度備份');
    } catch (err) {
      showToast('匯入失敗：檔案格式不正確');
    } finally {
      e.target.value = '';
    }
  };
  reader.readAsText(file);
});
