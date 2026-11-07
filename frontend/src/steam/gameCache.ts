import type { SteamGame } from '../lib/types';
import { readStoredJson, removeStored, writeStoredJson } from '../lib/storage';

const KEY = 'galex:supported-games:v1';
const MAX_GAMES = 1024;
export interface CachedGames { version: 1; updatedAt: number; games: SteamGame[] }

function validGame(value: unknown): value is SteamGame {
  if (!value || typeof value !== 'object') return false;
  const game = value as Partial<SteamGame>;
  if (typeof game.slug !== 'string' || !/^[a-z0-9-]{1,128}$/.test(game.slug)) return false;
  if (typeof game.name !== 'string' || game.name.length === 0 || game.name.length > 256) return false;
  if (typeof game.modLoader !== 'string' || game.modLoader.length > 64) return false;
  if (!Array.isArray(game.backends) || game.backends.length > 8 || !game.backends.every(item => typeof item === 'string' && item.length <= 32)) return false;
  if (game.steamAppId !== undefined && (!Number.isSafeInteger(game.steamAppId) || game.steamAppId <= 0 || game.steamAppId >= 0x80000000)) return false;
  return true;
}

/** The cache is only a tab-availability fallback. It never carries installing
 * state, pending links, credentials or profile data. */
export function loadGameCache(): CachedGames | undefined {
  const raw = readStoredJson<Partial<CachedGames>>(KEY);
  if (!raw || raw.version !== 1 || !Array.isArray(raw.games) || typeof raw.updatedAt !== 'number' || !Number.isFinite(raw.updatedAt)) return undefined;
  const seen = new Set<string>();
  const games: SteamGame[] = [];
  for (const item of raw.games.slice(0, MAX_GAMES)) {
    if (!validGame(item) || seen.has(item.slug)) continue;
    seen.add(item.slug);
    games.push({ slug: item.slug, name: item.name, modLoader: item.modLoader, steamAppId: item.steamAppId, backends: [...item.backends] });
  }
  return { version: 1, updatedAt: raw.updatedAt, games };
}

export function saveGameCache(games: SteamGame[]): number {
  const updatedAt = Date.now();
  const clean = games.filter(validGame).slice(0, MAX_GAMES).map(game => ({
    slug: game.slug, name: game.name, modLoader: game.modLoader, steamAppId: game.steamAppId, backends: [...game.backends],
  }));
  writeStoredJson(KEY, { version: 1, updatedAt, games: clean } satisfies CachedGames);
  return updatedAt;
}

export function clearGameCache() { removeStored(KEY); }
