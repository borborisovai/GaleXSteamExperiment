export async function writeText(text: string) { await navigator.clipboard.writeText(text); }
export async function readText() { return navigator.clipboard.readText(); }
