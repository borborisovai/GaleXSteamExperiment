import { useSyncExternalStore } from 'react';
import { readStoredJson, writeStoredJson } from './storage';

const KEY = 'galex:client-settings:v1';
export interface ClientSettings {
  version: 1;
  /** Steam shortcut AppID (unsigned 32-bit) -> Gale game slug. */
  nonSteamOverrides: Record<string, string>;
  autoLaunchOptions: boolean;
}
const defaults: ClientSettings = { version: 1, nonSteamOverrides: {}, autoLaunchOptions: true };

function normalize(value: unknown): ClientSettings {
  if (!value || typeof value !== 'object') return { ...defaults, nonSteamOverrides: {} };
  const raw = value as Partial<ClientSettings>;
  const overrides: Record<string, string> = {};
  if (raw.nonSteamOverrides && typeof raw.nonSteamOverrides === 'object') {
    for (const [appid, slug] of Object.entries(raw.nonSteamOverrides)) {
      const id = Number(appid);
      if (Number.isSafeInteger(id) && id > 0 && id <= 0xffffffff && typeof slug === 'string' && /^[a-z0-9-]{1,128}$/.test(slug)) {
        overrides[String(id)] = slug;
      }
    }
  }
  return { version: 1, nonSteamOverrides: overrides, autoLaunchOptions: raw.autoLaunchOptions !== false };
}

let state = normalize(readStoredJson<ClientSettings>(KEY));
const listeners = new Set<() => void>();
function publish(next: ClientSettings) {
  state = normalize(next);
  writeStoredJson(KEY, state);
  listeners.forEach(fn => fn());
}
export function getClientSettings() { return state; }
export function subscribeClientSettings(fn: () => void) { listeners.add(fn); return () => { listeners.delete(fn); }; }
export function useClientSettings() {
  return useSyncExternalStore(subscribeClientSettings, getClientSettings, getClientSettings);
}
export function setNonSteamOverride(appid: number, slug: string) {
  if (!Number.isSafeInteger(appid) || appid <= 0 || appid > 0xffffffff) throw new Error('invalid appid');
  publish({ ...state, nonSteamOverrides: { ...state.nonSteamOverrides, [String(appid)]: slug } });
}
export function removeNonSteamOverride(appid: number) {
  const next = { ...state.nonSteamOverrides };
  delete next[String(appid)];
  publish({ ...state, nonSteamOverrides: next });
}
export function setAutoLaunchOptions(value: boolean) { publish({ ...state, autoLaunchOptions: value }); }
