import { core, message, steamApi } from '../lib/bridge';
import { getClientSettings } from '../lib/clientSettings';
import { t } from '../lib/i18n';
import { readStoredJson, writeStoredJson } from '../lib/storage';
import type { LaunchPlan, SteamGame } from '../lib/types';
import { isSteamShortcut } from './apps';

const KEY = 'galex:launch-options:v1';
const COMMAND = '%command%';
interface AppliedArgs { args: string; platform: LaunchPlan['platform'] }
type AppliedMap = Record<string, AppliedArgs>;
const queue = new Map<number, Promise<void>>();

function appsApi(doc?: Document): any {
  return (doc?.defaultView as any)?.SteamClient?.Apps
    ?? (window as any).SteamClient?.Apps
    ?? steamApi()?.SteamClient?.Apps;
}
function normalizeOptions(value: string) { return value.replace(/\s+/g, ' ').trim(); }
function loadApplied(): AppliedMap {
  const raw = readStoredJson<AppliedMap>(KEY);
  if (!raw || typeof raw !== 'object') return {};
  const clean: AppliedMap = {};
  for (const [appid, value] of Object.entries(raw)) {
    if (/^\d{1,10}$/.test(appid) && value && typeof value.args === 'string' && ['windows', 'linux', 'macos'].includes(value.platform)) {
      clean[appid] = { args: value.args, platform: value.platform };
    }
  }
  return clean;
}
function saveApplied(appid: number, value: AppliedArgs) {
  const applied = loadApplied();
  if (value.args) applied[String(appid)] = value;
  else delete applied[String(appid)];
  writeStoredJson(KEY, applied);
}

/** Remove only the exact argument segment GaleX previously wrote. Unrelated
 * user arguments keep their original order and quoting. */
function removeSegment(options: string, segment: string): string {
  if (!segment) return options;
  const index = options.indexOf(segment);
  if (index < 0) return options;
  return normalizeOptions(`${options.slice(0, index)} ${options.slice(index + segment.length)}`);
}
function hasSegment(options: string, segment: string): boolean {
  if (!segment) return true;
  const normalized = normalizeOptions(options);
  const target = normalizeOptions(segment);
  return normalized === target || normalized.endsWith(` ${target}`) || normalized.includes(` ${target} `);
}
function splitCommand(options: string): { before: string; after: string } | undefined {
  const match = /(?:^|\s)%command%(?:\s|$)/i.exec(options);
  if (!match) return undefined;
  const start = match.index + (match[0].startsWith(' ') ? 1 : 0);
  return { before: options.slice(0, start).trim(), after: options.slice(start + COMMAND.length).trim() };
}

/** Steam launch options are shell-like on Linux/macOS (`ENV=… %command% args`)
 * and plain game arguments on Windows. Gale's resolved args always belong after
 * the executable, so Linux/macOS get a single `%command%` separator. */
export function composeLaunchOptions(existing: string, args: string, platform: LaunchPlan['platform'], previousArgs = ''): string {
  const cleaned = removeSegment(normalizeOptions(existing), previousArgs);
  const resolved = args.trim();
  if (!resolved) {
    if (platform === 'windows') return cleaned;
    const parts = splitCommand(cleaned);
    if (!parts) return cleaned;
    if (!parts.before && !parts.after) return '';
    return normalizeOptions(`${parts.before} ${COMMAND} ${parts.after}`);
  }
  if (hasSegment(cleaned, resolved)) return cleaned;
  if (platform === 'windows') return normalizeOptions(`${cleaned} ${resolved}`);
  const parts = splitCommand(cleaned);
  if (!parts) return normalizeOptions(`${COMMAND} ${cleaned} ${resolved}`);
  return normalizeOptions(`${parts.before} ${COMMAND} ${parts.after} ${resolved}`);
}

function detailsOptions(details: any, nonSteam: boolean): string {
  const value = nonSteam ? details?.strShortcutLaunchOptions : details?.strLaunchOptions;
  return typeof value === 'string' ? value : '';
}
function registerDetails(api: any, appid: number, callback: (details: any) => void): () => void {
  if (typeof api?.RegisterForAppDetails !== 'function') throw new Error(t('launchOptionsUnavailable'));
  let active = true;
  let registration: any;
  const unsubscribe = () => { active = false; try { registration?.unregister?.(); } catch { /* already gone */ } };
  registration = api.RegisterForAppDetails(appid, (details: any) => { if (active) callback(details ?? {}); });
  if (!active) unsubscribe();
  return unsubscribe;
}
function readOptions(appid: number, nonSteam: boolean, doc?: Document): Promise<string> {
  const api = appsApi(doc);
  return new Promise((resolve, reject) => {
    let done = false;
    let unsubscribe = () => {};
    const timer = setTimeout(() => finish(new Error(t('launchOptionsUnavailable'))), 5000);
    const finish = (error?: unknown, value?: string) => {
      if (done) return;
      done = true; clearTimeout(timer); unsubscribe();
      if (error) reject(error instanceof Error ? error : new Error(String(error)));
      else resolve(value ?? '');
    };
    try { unsubscribe = registerDetails(api, appid, details => finish(undefined, detailsOptions(details, nonSteam))); }
    catch (error) { finish(error); }
  });
}
function waitForOptions(appid: number, nonSteam: boolean, expected: string, doc?: Document): Promise<void> {
  const api = appsApi(doc);
  return new Promise((resolve, reject) => {
    let done = false;
    let unsubscribe = () => {};
    const timer = setTimeout(() => finish(new Error(t('launchOptionsUnavailable'))), 5000);
    const finish = (error?: unknown) => {
      if (done) return;
      done = true; clearTimeout(timer); unsubscribe();
      if (error) reject(error instanceof Error ? error : new Error(String(error)));
      else resolve();
    };
    try {
      unsubscribe = registerDetails(api, appid, details => {
        if (normalizeOptions(detailsOptions(details, nonSteam)) === normalizeOptions(expected)) finish();
      });
    } catch (error) { finish(error); }
  });
}

/** Read → compose → write → verify. The setter is followed by an app-details
 * confirmation so Steam cloud/controller sync cannot silently keep old args. */
export async function applySteamLaunchOptions(appid: number, nonSteam: boolean, expected: string, doc?: Document): Promise<boolean> {
  const api = appsApi(doc);
  const setter = nonSteam ? api?.SetShortcutLaunchOptions : api?.SetAppLaunchOptions;
  if (typeof setter !== 'function') throw new Error(t('launchOptionsUnavailable'));
  const current = await readOptions(appid, nonSteam, doc);
  if (normalizeOptions(current) === normalizeOptions(expected)) return false;
  const confirmed = waitForOptions(appid, nonSteam, expected, doc);
  setter.call(api, appid, expected);
  await confirmed;
  return true;
}

async function syncNow(game: SteamGame, doc?: Document): Promise<void> {
  if (!getClientSettings().autoLaunchOptions || !game.steamAppId) return;
  const appid = game.steamAppId;
  const nonSteam = !!game.nonSteam || isSteamShortcut(appid, doc);
  const plan = await core.launchPlan(game.slug);
  const previous = loadApplied()[String(appid)];
  const current = await readOptions(appid, nonSteam, doc);
  const expected = composeLaunchOptions(current, plan.args, plan.platform, previous?.args ?? '');
  const changed = await applySteamLaunchOptions(appid, nonSteam, expected, doc);
  // Persist only after Steam confirms the write; a failed write must not make
  // the next sync remove arguments that were never actually applied.
  saveApplied(appid, { args: plan.args.trim(), platform: plan.platform });
  if (changed) void core.log(`launch options applied appid=${appid} nonSteam=${nonSteam}`).catch(() => {});
}

/** Serialize per AppID: profile switches and mod toggles can overlap while
 * Gale's command lock and Steam's async app-details callback are in flight. */
export function syncGameLaunchOptions(game: SteamGame, doc?: Document): Promise<void> {
  const appid = game.steamAppId;
  if (!appid) return Promise.resolve();
  const previous = queue.get(appid) ?? Promise.resolve();
  const next = previous.catch(() => {}).then(() => syncNow(game, doc));
  queue.set(appid, next);
  void next.finally(() => { if (queue.get(appid) === next) queue.delete(appid); }).catch(() => {});
  return next;
}
export function launchOptionsError(error: unknown) { return t('launchOptionsFailed', { error: message(error) }); }
