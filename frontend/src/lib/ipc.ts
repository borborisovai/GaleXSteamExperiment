export interface RpcResult<T> { ok: boolean; data?: T; error?: string }

/**
 * Millennium 3.6.x resolves callServerMethod with JSON.stringify(returnJson).
 * Lua returns a JSON string (to preserve empty arrays), so a successful reply
 * can contain two JSON layers: "\"{\\\"ok\\\":true,…}\"" → "{…}" → object.
 * Accept an already-decoded object too, for mocks and newer wrapped transports.
 */
export function decodeRpcResult<T>(raw: unknown): RpcResult<T> {
  let value: unknown = raw;
  for (let depth = 0; depth < 2 && typeof value === 'string'; depth++) {
    try { value = JSON.parse(value); }
    catch { throw new Error('Invalid GaleX JSON reply from Millennium'); }
  }
  if (typeof value !== 'object' || value === null || Array.isArray(value) || typeof (value as {ok?: unknown}).ok !== 'boolean') {
    throw new Error('Invalid GaleX reply from Millennium');
  }
  return value as RpcResult<T>;
}
