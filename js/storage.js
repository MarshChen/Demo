export const DATABASE_NAME = 'lexipop-vocabulary-v1';
const STORE = 'records';
function leaseError(message) { return Object.assign(new Error(message), { code: 'LEASE_LOST' }); }
export function createInitialState(timezone = 'Asia/Taipei') {
  return { schemaVersion: 1, settings: { dailyGoal: 20, selectedLevel: 'A1', studyTimezone: timezone, createdAt: new Date().toISOString() }, dailyGoals: {}, progress: {}, favorites: {}, completions: [], sessions: [], revision: 0 };
}
export class LocalStore {
  constructor(databaseName = DATABASE_NAME) { this.databaseName = databaseName; }
  async open() {
    this.db = await new Promise((resolve, reject) => {
      const request = indexedDB.open(this.databaseName, 1);
      request.onupgradeneeded = () => request.result.createObjectStore(STORE);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(new Error('無法開啟學習紀錄，請允許此網站使用儲存空間。'));
      request.onblocked = () => reject(new Error('請先關閉其他 LexiPop 分頁，再重新開啟。'));
    });
    this.db.onversionchange = () => this.db.close();
    await this.mutate(state => state, { initialize: true });
    return this;
  }
  async read() {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(STORE, 'readonly');
      const request = tx.objectStore(STORE).get('state');
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  // A synchronous reducer runs inside one serialized IndexedDB transaction.
  async mutate(reducer, { ownerId, claim = false, force = false, release = false, initialize = false } = {}) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(STORE, 'readwrite');
      const store = tx.objectStore(STORE);
      const stateRequest = store.get('state');
      const leaseRequest = store.get('lease');
      let result, failure;
      leaseRequest.onsuccess = () => {
        try {
          const lease = leaseRequest.result, now = Date.now();
          if (ownerId && !force && lease?.ownerId !== ownerId && lease?.leaseUntil > now) throw leaseError('另一個分頁正在學習。請回到該分頁，或選擇「在此接續」。');
          if (ownerId && !claim && lease?.ownerId !== ownerId) throw leaseError('此分頁的學習工作階段已暫停，請回首頁接續。');
          const existing = stateRequest.result;
          if (existing && existing.schemaVersion !== 1) throw new Error('目前資料版本不相容，請保留資料並更新網站。');
          const state = existing || createInitialState(Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Taipei');
          if (!initialize || !existing) {
            result = reducer(state) || state;
            result.revision = (state.revision || 0) + 1;
            store.put(result, 'state');
          } else result = state;
          if (ownerId) store.put(release ? { ownerId: null, leaseUntil: 0 } : { ownerId, leaseUntil: now + 45000 }, 'lease');
        } catch (error) { failure = error; tx.abort(); }
      };
      tx.oncomplete = () => resolve(result);
      tx.onerror = tx.onabort = () => reject(failure || new Error('尚未儲存。請檢查瀏覽器儲存空間後重試。'));
    });
  }
  async renew(ownerId) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(STORE, 'readwrite');
      const store = tx.objectStore(STORE), request = store.get('lease');
      let renewed = false;
      request.onsuccess = () => { if (request.result?.ownerId === ownerId) { store.put({ ownerId, leaseUntil: Date.now() + 45000 }, 'lease'); renewed = true; } };
      tx.oncomplete = () => resolve(renewed);
      tx.onerror = () => reject(tx.error);
    });
  }
}
