import { mountIntoSteam } from './bootstrap';

async function initialize() {
  if (!document.body) await new Promise<void>(resolve => document.addEventListener('DOMContentLoaded', () => resolve(), { once: true }));
  return mountIntoSteam();
}
let startup: Promise<unknown> | undefined;
function start(): Promise<unknown> {
  if (!startup) startup = initialize().catch(error => { startup = undefined; throw error; });
  return startup;
}
export default start;
// Loose-file Millennium loader appends the module without calling its default.
void start().catch(error => console.error('[GaleX] Startup failed', error));
