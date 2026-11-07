import type { SteamGame } from '../lib/types';

export const SHORTCUT_APP_TYPE = 0x40000000;

/** Steam shortcut IDs are unsigned 32-bit values and may arrive signed from
 * older CEF props. Official Steam AppIDs stay below 0x80000000. */
export function normalizeAppId(value: unknown): number | undefined {
  if (typeof value === 'string' && /^\d{1,10}$/.test(value.trim())) value = Number(value.trim());
  if (typeof value !== 'number' || !Number.isSafeInteger(value)) return undefined;
  const unsigned = value < 0 ? value >>> 0 : value;
  return unsigned > 0 && unsigned <= 0xffffffff ? unsigned : undefined;
}
export function isNonSteamAppId(appid: number) { return appid >= 0x80000000; }

function stores(win: any = typeof window === 'undefined' ? undefined : window) {
  return [win?.appStore, win?.parent?.appStore, win?.top?.appStore].filter(Boolean);
}
export function steamAppOverview(appid: number, doc?: Document): any | undefined {
  const candidates = [doc?.defaultView, typeof window === 'undefined' ? undefined : window];
  for (const win of candidates) {
    for (const store of stores(win)) {
      try {
        const overview = store.GetAppOverviewByAppID?.(appid) ?? store.m_mapApps?.get?.(appid);
        if (overview) return overview;
      } catch { /* optional Steam store */ }
    }
  }
  return undefined;
}
export function isSteamShortcut(appid: number, doc?: Document): boolean {
  const overview = steamAppOverview(appid, doc);
  try {
    if (typeof overview?.BIsShortcut === 'function' && overview.BIsShortcut()) return true;
    if (typeof overview?.BIsModOrShortcut === 'function' && overview.BIsModOrShortcut()) return true;
    if (typeof overview?.app_type === 'number' && (overview.app_type & SHORTCUT_APP_TYPE) !== 0) return true;
  } catch { /* fall back to the unsigned ID range */ }
  return isNonSteamAppId(appid);
}
export function steamAppName(appid: number, doc?: Document): string | undefined {
  const overview = steamAppOverview(appid, doc);
  const name = overview?.display_name ?? overview?.m_strDisplayName;
  return typeof name === 'string' && name.length > 0 ? name : undefined;
}
export interface SteamShortcut { appid: number; name: string }
export function listSteamShortcuts(): SteamShortcut[] {
  const found = new Map<number, SteamShortcut>();
  for (const store of stores()) {
    try {
      store.m_mapApps?.forEach?.((app: any, key: any) => {
        const appid = normalizeAppId(app?.appid ?? app?.m_unAppID ?? key);
        if (!appid || !isSteamShortcut(appid)) return;
        const name = steamAppName(appid) ?? `AppID ${appid}`;
        found.set(appid, { appid, name });
      });
    } catch { /* optional Steam store */ }
  }
  return Array.from(found.values()).sort((a, b) => a.name.localeCompare(b.name) || a.appid - b.appid);
}

/** Resolve a properties window AppID to a Gale game. A non-Steam override is
 * accepted only for an actual shortcut and only for a known/cached Gale slug. */
export function resolveSteamGame(appid: number, games: SteamGame[], overrides: Record<string, string>, doc?: Document): SteamGame | undefined {
  const slug = overrides[String(appid)];
  if (slug && isSteamShortcut(appid, doc)) {
    const game = games.find(item => item.slug === slug);
    if (game) return { ...game, steamAppId: appid, nonSteam: true };
  }
  return games.find(game => game.steamAppId === appid);
}
