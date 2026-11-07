/** Best-effort CEF localStorage. Steam can expose storage before the backend is
 * reachable, which is exactly when the cached game list must still work. */
export function readStoredJson<T>(key: string): T | undefined {
  try {
    const raw = window.localStorage?.getItem(key);
    if (!raw) return undefined;
    return JSON.parse(raw) as T;
  } catch { return undefined; }
}

export function writeStoredJson(key: string, value: unknown): boolean {
  try {
    if (!window.localStorage) return false;
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch { return false; }
}

export function removeStored(key: string) {
  try { window.localStorage?.removeItem(key); } catch { /* private mode / disabled storage */ }
}
