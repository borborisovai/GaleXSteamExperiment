import type { Context } from './types';
import { decodeRpcResult } from './ipc';
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
  catch (error) { throw new Error(localizeBackendError(error instanceof Error ? error.message : String(error))); }
  if (!result.ok) throw new Error(localizeBackendError(result.error || t('bridgeNoReply')));
  return result.data as T;
}
export function initializeSteamTransport() {
  setTransport(async (method, args) => {
    const api = steamApi();
    if (!api?.Millennium?.callServerMethod) throw new Error(t('millenniumMissing'));
    return api.Millennium.callServerMethod('GaleX', method, { payload: JSON.stringify(args) });
  });
}
export const core = {
  snapshot: () => rpc<import('./types').Snapshot>('snapshot'),
  progress: () => rpc<import('./types').ProgressSnapshot>('progress'),
  cancelInstalls: () => rpc<void>('command', { method: 'cancel_installs', args: {} }),
  call: <T>(method: string, context: Context, args: Record<string, unknown> = {}) => rpc<T>('command', { method, args: { slug:context.slug, profileId:context.profileId, ...args } }),
  browserUrl: (context: Context & {kind?:string;lang?:string;file?:string|null}) => rpc<{ url: string }>('browser_url', { ...context }),
  dismissLink: (url: string) => rpc<void>('dismiss_link', { url }),
  global: <T>(method: string, args: Record<string, unknown> = {}) => rpc<T>('command', { method, args }),
  getConfig: () => rpc<string>('get_config'),
  setConfig: (path: string) => rpc<void>('set_config', { path }),
  restart: () => rpc<void>('restart'),
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
function steamSystem(): any {
  return (window as any).SteamClient?.System ?? steamApi()?.SteamClient?.System;
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
export function message(error: unknown): string { return localizeBackendError(error instanceof Error ? error.message : String(error)); }