export function stopAudio() { if ('speechSynthesis' in globalThis) speechSynthesis.cancel(); }
export async function speak(text, slow = false) {
  if (!('speechSynthesis' in globalThis)) throw new Error('此裝置暫時無法朗讀，你仍可繼續學習。');
  stopAudio();
  let voices = speechSynthesis.getVoices();
  if (!voices.length) voices = await new Promise(resolve => {
    const done = () => { clearTimeout(timer); speechSynthesis.removeEventListener('voiceschanged', done); resolve(speechSynthesis.getVoices()); };
    const timer = setTimeout(done, 1200); speechSynthesis.addEventListener('voiceschanged', done);
  });
  const voice = voices.find(item => /^en[-_]US/i.test(item.lang)) || voices.find(item => /^en/i.test(item.lang));
  if (!voice) throw new Error('此裝置沒有可用的英文聲音，你仍可繼續學習。');
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice; utterance.lang = voice.lang; utterance.rate = slow ? 0.8 : 1;
  return new Promise((resolve, reject) => {
    utterance.onend = () => resolve(voice.lang);
    utterance.onerror = event => ['interrupted', 'canceled'].includes(event.error) ? resolve(voice.lang) : reject(new Error('朗讀暫時無法播放，請稍後再試。'));
    speechSynthesis.speak(utterance);
  });
}
