import type { Context } from './types';
import { BridgeError, decodeRpcResult } from './ipc';
import { localizeBackendError, t } from './i18n';

export type { RpcResult } from './ipc';
export interface MillenniumApi {
  Millennium: {
    callServerMethod: (plugin: string, method: string, args?: Record<string, unknown>) => Promise<unknown>;
    AddWindowCreateHook?: (callback: (context: any) => void) => void;
  };
  Navigation: { Navigate: (path: string) => void; NavigateToSteamWeb: (url: string) => void; NavigateToAppProperties: () => void };
  routerHook: { addRoute: (path: string, component: unknown) => void; removeRoute: (path: string) => void; addGlobalComponent: (name: string, component: unknown) => void; removeGlobalComponent: (name: string) => void };
  [key: string]: any;
}
export function steamApi(): MillenniumApi | undefined { return (window as any).MILLENNIUM_API; }
export type Transport = (method: string, args: Record<string, unknown>) => Promise<unknown>;
let transport: Transport | undefined;
export function setTransport(value: Transport) { transport = value; }

/** Never fall back to demo data in Steam. A missing backend is a visible error. */
export async function rpc<T>(method: string, args: Record<string, unknown> = {}): Promise<T> {
  if (!transport) throw new Error(t('backendMissing'));
  const raw = await transport(method, args);
  let result;
  try { result = decodeRpcResult<T>(raw); }
  catch (error) { throw new BridgeError(localizeBackendError(error instanceof Error ? error.message : String(error)), 'invalid_rpc'); }
  if (!result.ok) throw new BridgeError(localizeBackendError(result.error || t('bridgeNoReply')), result.code, result.error);
  return result.data as T;
}
export function initializeSteamTransport() {
  setTransport(async (method, args) => {
    const api = steamApi();
    if (!api?.Millennium?.callServerMethod) throw new Error(t('millenniumMissing'));
    return api.Millennium.callServerMethod('GaleX', method, { payload: JSON.stringify(args) });
  });
}
interface JobStarted { jobId: string }
type JobStatus<T> = { status: 'running' } | { status: 'done'; data?: T } | { status: 'error'; error?: string };
function isJobStarted(value: unknown): value is JobStarted {
  return typeof value === 'object' && value !== null && typeof (value as JobStarted).jobId === 'string';
}
/** Heavy Gale commands reply with a jobId before Millennium's RPC timeout.
 * Poll the result while the separate progress monitor keeps the Steam download
 * card alive; the Lua VM is never blocked by the install itself. */
async function command<T>(method: string, args: Record<string, unknown>): Promise<T> {
  const started = await rpc<T | JobStarted>('command', { method, args });
  if (!isJobStarted(started)) return started as T;
  for (;;) {
    const state = await rpc<JobStatus<T>>('command', { method: 'job_result', args: { jobId: started.jobId } });
    if (state.status === 'done') return state.data as T;
    if (state.status === 'error') throw new BridgeError(localizeBackendError(state.error || t('bridgeNoReply')), 'job_failed', state.error);
    await new Promise(resolve => setTimeout(resolve, 600));
  }
}
export const core = {
  snapshot: () => rpc<import('./types').Snapshot>('snapshot'),
  progress: () => rpc<import('./types').ProgressSnapshot>('progress'),
  cancelInstalls: () => rpc<void>('command', { method: 'cancel_installs', args: {} }),
  call: <T>(method: string, context: Context, args: Record<string, unknown> = {}) => command<T>(method, { slug:context.slug, profileId:context.profileId, ...args }),
  browserUrl: (context: Context & {kind?:string;lang?:string;file?:string|null}) => rpc<{ url: string }>('browser_url', { ...context }),
  dismissLink: (url: string) => rpc<void>('dismiss_link', { url }),
  global: <T>(method: string, args: Record<string, unknown> = {}) => command<T>(method, args),
  getConfig: () => rpc<string>('get_config'),
  setConfig: (path: string) => rpc<void>('set_config', { path }),
  restart: () => rpc<void>('restart'),
  launchPlan: (slug: string) => rpc<import('./types').LaunchPlan>('command', { method: 'launch_plan', args: { slug } }),
  log: (message: string) => rpc<void>('frontend_log', { message }),
};
export function openSteamBrowser(url: string) {
  const parsed = new URL(url);
  if (!['https:', 'http:'].includes(parsed.protocol)) throw new Error(t('invalidBrowserUrl'));
  const navigation = steamApi()?.Navigation;
  if (navigation?.NavigateToSteamWeb) navigation.NavigateToSteamWeb(url);
  else window.open(url, '_blank', 'noopener,noreferrer');
}
/** Bring the Steam window that owns a GaleX dialog above external browser
 * popups (Thunderstore). SteamClient.Window must be called from that window's
 * own JS context, not from SharedJSContext. */
export function focusSteamWindow(doc: Document = document) {
  try {
    const win = (doc.defaultView as any)?.SteamClient?.Window;
    win?.BringToFront?.(true);
    win?.SetKeyFocus?.(true);
    win?.MarkLastFocused?.();
    doc.defaultView?.focus();
  } catch { /* focus is best-effort; the dialog still uses the top layer */ }
}
export function openSteamDownloads() {
  const nav = steamApi()?.Navigation as any;
  if (nav?.Navigate) { nav.Navigate('/library/downloads'); return; }
  const url = (window as any).SteamClient?.URL ?? steamApi()?.SteamClient?.URL;
  if (url?.ExecuteSteamURL) url.ExecuteSteamURL('steam://nav/downloads');
}
export function downloadInSteam(url: string) {
  const parsed = new URL(url);
  if (!['https:', 'http:'].includes(parsed.protocol)) throw new Error(t('invalidBrowserUrl'));
  const browser = steamApi()?.Browser ?? (window as any).SteamClient?.Browser;
  if (browser?.StartDownload) browser.StartDownload(url);
  else openSteamBrowser(url);
}
function steamSystem(doc: Document = document): any {
  return (doc.defaultView as any)?.SteamClient?.System ?? (window as any).SteamClient?.System ?? steamApi()?.SteamClient?.System;
}
/** Steam CEF may deny navigator.clipboard in secondary property windows. Use
 * the owning document, then Steam's shell clipboard, then the legacy selection
 * fallback Millennium itself uses for log export. */
export async function copyText(text: string, doc: Document = document): Promise<void> {
  focusSteamWindow(doc);
  const win = doc.defaultView as any;
  try {
    if (win?.navigator?.clipboard?.writeText) { await win.navigator.clipboard.writeText(text); return; }
  } catch { /* fall through to Steam/selection copy */ }
  try {
    const system = steamSystem(doc);
    if (typeof system?.WriteToClipboard === 'function') { system.WriteToClipboard(text); return; }
  } catch { /* fall through to selection copy */ }
  const previous = doc.activeElement as HTMLElement | null;
  const area = doc.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.top = '0';
  area.style.left = '-9999px';
  area.style.opacity = '0';
  doc.body.appendChild(area);
  area.focus();
  area.select();
  let copied = false;
  try { copied = doc.execCommand('copy'); } catch { copied = false; }
  area.remove();
  previous?.focus?.();
  if (!copied) throw new Error(t('clipboardError'));
}
/** Open a resolved Gale path through the Steam client process. The headless
 * child's detached `open` call can succeed without a visible desktop session. */
export function openSteamFolder(path: string, doc: Document = document): boolean {
  try {
    const system = steamSystem(doc);
    if (typeof system?.OpenLocalDirectoryInSystemExplorer !== 'function') return false;
    system.OpenLocalDirectoryInSystemExplorer(path);
    return true;
  } catch { return false; }
}
export function canPickSteamFile(): boolean {
  return typeof steamSystem()?.OpenFileDialog === 'function';
}
/** Steam's native file picker works in secondary CEF property windows, where
 * an HTML <input type=file> may never open a dialog. The selected path is read
 * by headless Gale on the same machine; no file bytes cross the IPC bridge. */
export async function pickSteamFile(title: string, filterName: string, patterns: string[]): Promise<string | null> {
  const system = steamSystem();
  if (typeof system?.OpenFileDialog !== 'function') return null;
  try {
    const result = await system.OpenFileDialog({
      strTitle: title,
      rgFilters: [
        { strFileTypeName: filterName, rFilePatterns: patterns, bUseAsDefault: true },
        { strFileTypeName: t('allFiles'), rFilePatterns: ['*'] },
      ],
    });
    return typeof result === 'string' && result.length > 0 ? result : null;
  } catch {
    return null;
  }
}
export function message(error: unknown): string {
  if (error instanceof BridgeError) return error.message;
  return localizeBackendError(error instanceof Error ? error.message : String(error));
}
export function errorCode(error: unknown): string | undefined {
  if (error instanceof BridgeError) return error.code;
  const raw = error instanceof Error ? error.message : String(error);
  if (raw.includes('GALEX_SESSION_LOCKED') || raw.includes('Gale уже открыт') || raw.includes('Gale session is locked')) return 'gale_session_locked';
  if (raw.startsWith('Не найдена headless-сборка Gale')) return 'missing_build';
  if (raw.startsWith('Headless Gale запускается')) return 'bridge_starting';
  if (raw === 'Нет связи с headless Gale') return 'bridge_unavailable';
  return undefined;
}
export function openPluginSettings() {
  const api = window as any;
  if (typeof api.GaleX?.openSettings === 'function') { api.GaleX.openSettings(); return; }
  const millennium = api.Millennium ?? steamApi()?.Millennium;
  if (typeof millennium?.openQuickAccess === 'function') { void millennium.openQuickAccess({ plugin: 'GaleX' }); return; }
  steamApi()?.Navigation?.Navigate?.('/library/downloads');
}