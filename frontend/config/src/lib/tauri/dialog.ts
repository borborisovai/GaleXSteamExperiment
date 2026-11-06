export async function confirm(message: string, _options?: unknown): Promise<boolean> { return window.confirm(message); }
export async function open(_options?: unknown): Promise<string | null> { return null; }
