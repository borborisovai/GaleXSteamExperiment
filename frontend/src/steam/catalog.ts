import { useSyncExternalStore } from 'react';
import { core, errorCode, message } from '../lib/bridge';
import { getClientSettings } from '../lib/clientSettings';
import { t } from '../lib/i18n';
import type { Snapshot, SteamGame } from '../lib/types';
import { resolveSteamGame } from './apps';
import { clearGameCache, loadGameCache, saveGameCache } from './gameCache';

export interface CatalogState {
  snapshot?: Snapshot;
  /** Live games when connected, otherwise the last validated persistent cache. */
  games: SteamGame[];
  cachedAt?: number;
  usingCache: boolean;
  error: string;
  errorCode?: string;
  loading: boolean;
}
const cached = loadGameCache();
let state: CatalogState = {
  games: cached?.games ?? [], cachedAt: cached?.updatedAt, usingCache: !!cached?.games.length,
  error: '', loading: true,
};
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setTimeout> | undefined;
let stopped = true;
let pending = false;
let generation = 0;

function publish(next: CatalogState) { state = next; listeners.forEach(fn => fn()); }
async function poll() {
  if (stopped || pending) return;
  pending = true;
  const current = generation;
  try {
    const snapshot = await core.snapshot();
    if (stopped || current !== generation) return;
    if (snapshot.ok && snapshot.bridgeVersion === 2) {
      const cachedAt = snapshot.games.length ? saveGameCache(snapshot.games) : state.cachedAt;
      publish({ snapshot, games: snapshot.games, cachedAt, usingCache: false, error: '', loading: false });
    } else {
      publish({ ...state, error: t('incompatibleBridge'), errorCode: 'incompatible_bridge', usingCache: true, loading: false });
    }
  } catch (error) {
    if (!stopped && current === generation) {
      // Keep the tab usable: properties resolve against `games`, not `snapshot.ok`.
      publish({ ...state, error: message(error), errorCode: errorCode(error), usingCache: true, loading: false });
    }
  } finally {
    pending = false;
    if (!stopped) timer = setTimeout(() => void poll(), document.visibilityState === 'hidden' ? 15000 : 3000);
  }
}
export function startCatalog() {
  if (!stopped) return () => stopCatalog();
  stopped = false; generation++; void poll();
  return () => stopCatalog();
}
function stopCatalog() { stopped = true; generation++; clearTimeout(timer); }
export function refreshCatalog() { clearTimeout(timer); void poll(); }
export function getCatalog() { return state; }
export function useCatalog() {
  return useSyncExternalStore(fn => { listeners.add(fn); return () => { listeners.delete(fn); }; }, getCatalog, getCatalog);
}
export function subscribeCatalog(fn: () => void) { listeners.add(fn); return () => { listeners.delete(fn); }; }
export function forgetGameCache() {
  clearGameCache();
  publish({ ...state, games: state.snapshot?.ok ? state.snapshot.games : [], cachedAt: undefined, usingCache: !state.snapshot?.ok });
}
/** Backwards-compatible name; resolution now uses the live-or-cached list and
 * the user's non-Steam shortcut overrides. */
export function gameForApp(appid: number, games: SteamGame[] = state.games, overrides = getClientSettings().nonSteamOverrides, doc?: Document) {
  return resolveSteamGame(appid, games, overrides, doc);
}
