import type { Context } from './types';
import { decodeRpcResult } from './ipc';

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
  if (!transport) throw new Error('Backend Millennium не подключён. Перезагрузите плагин GaleX.');
  const raw = await transport(method, args);
  const result = decodeRpcResult<T>(raw);
  if (!result.ok) throw new Error(result.error || 'Мост Gale не ответил');
  return result.data as T;
}
export function initializeSteamTransport() {
  setTransport(async (method, args) => {
    const api = steamApi();
    if (!api?.Millennium?.callServerMethod) throw new Error('Millennium API недоступен');
    return api.Millennium.callServerMethod('GaleX', method, { payload: JSON.stringify(args) });
  });
}
export const core = {
  snapshot: () => rpc<import('./types').Snapshot>('snapshot'),
  call: <T>(method: string, context: Context, args: Record<string, unknown> = {}) => rpc<T>('command', { method, args: { slug:context.slug, profileId:context.profileId, ...args } }),
  browserUrl: (context: Context & {kind?:string}) => rpc<{ url: string }>('browser_url', { ...context }),
  dismissLink: (url: string) => rpc<void>('dismiss_link', { url }),
  global: <T>(method: string, args: Record<string, unknown> = {}) => rpc<T>('command', { method, args }),
  getConfig: () => rpc<string>('get_config'),
  setConfig: (path: string) => rpc<void>('set_config', { path }),
  restart: () => rpc<void>('restart'),
};
export function openSteamBrowser(url: string) {
  const parsed = new URL(url);
  if (!['https:', 'http:'].includes(parsed.protocol)) throw new Error('Недопустимый адрес браузера');
  const navigation = steamApi()?.Navigation;
  if (navigation?.NavigateToSteamWeb) navigation.NavigateToSteamWeb(url);
  else window.open(url, '_blank', 'noopener,noreferrer');
}
export function message(error: unknown): string { return error instanceof Error ? error.message : String(error); }