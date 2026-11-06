const params = new URLSearchParams(location.search);
const context = new URLSearchParams({ slug: params.get('slug') ?? '', profileId: params.get('profileId') ?? '0' });
const commands: Record<string, string> = {
  get_config_files: 'config', set_config_entry: 'set_config_entry', reset_config_entry: 'reset_config_entry',
  reset_config_file: 'reset_config_file', open_config_file: 'open_config_file', delete_config_file: 'delete_config_file',
};
export async function invoke<T>(command: string, args: Record<string, unknown> = {}): Promise<T> {
  const method = commands[command];
  if (!method) throw new Error(`Unsupported config command: ${command}`);
  const response = await fetch(`/api/command?${context}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ method, args }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error ?? `Config bridge HTTP ${response.status}`);
  return payload.data as T;
}
