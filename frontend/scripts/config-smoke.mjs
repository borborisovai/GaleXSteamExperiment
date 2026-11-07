import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html class="dark"><body><div id="app"></div></body></html>', {
  url: 'http://steamloopback.host/config?slug=lethal-company&profileId=1&lang=russian&file=BepInEx%2Fconfig%2FAinaVT-LethalConfig.cfg',
  pretendToBeVisual: true,
});
const { window } = dom;
for (const key of ['window', 'document', 'HTMLElement', 'HTMLInputElement', 'Element', 'Node', 'CustomEvent', 'MutationObserver', 'Event', 'MouseEvent', 'KeyboardEvent', 'getComputedStyle', 'location', 'Text', 'Comment', 'DocumentFragment']) {
  globalThis[key] = window[key];
}
Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
globalThis.requestAnimationFrame = window.requestAnimationFrame.bind(window);
globalThis.cancelAnimationFrame = window.cancelAnimationFrame.bind(window);
const calls = [];
const files = [{
  type: 'ok', displayName: 'LethalConfig', relativePath: 'BepInEx/config/AinaVT-LethalConfig.cfg', metadata: null,
  sections: [{ name: 'General', entries: [{ name: 'ShowInGame', description: null, default: { type: 'bool', content: true }, value: { type: 'bool', content: true } }] }],
}];
window.fetch = globalThis.fetch = async (url, options = {}) => {
  const href = String(url);
  assert.ok(!href.includes('iconify'), 'config icons must never fall back to the Iconify HTTP API');
  calls.push({ url: href, body: options.body ? JSON.parse(options.body) : null });
  return { ok: true, status: 200, json: async () => ({ data: files }) };
};
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function waitFor(predicate, description, timeout = 3000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) { if (predicate()) return; await sleep(20); }
  assert.ok(predicate(), description);
}
const html = readFileSync(resolve('../backend/gale/config-ui/index.html'), 'utf8');
assert.ok(html.includes('<style>') && html.includes('tailwindcss'), 'config CSS is inlined so Steam proxy interception cannot strip the editor styles');
assert.ok(!/<link[^>]*rel=["']stylesheet["']/.test(html), 'config document does not depend on a stylesheet subresource');
const css = readFileSync(resolve('../backend/gale/config-ui/app.css'), 'utf8');
assert.ok(/\.grid\s*\{[^}]*display:\s*grid/.test(css) && css.includes('grid-template-columns'), 'Tailwind scans the upstream Gale components, not only config preflight');
const icons = JSON.parse(readFileSync(resolve('config/src/icons.json'), 'utf8'));
assert.ok(icons.mdi.icons.config?.body, 'legacy mdi:config is bundled locally instead of fetched from api.iconify.design');
const source = readFileSync(resolve('../backend/gale/config-ui/app.js'), 'utf8');
await import('data:text/javascript;charset=utf-8,' + encodeURIComponent(source));
await waitFor(() => document.body.textContent.includes('LethalConfig'), 'upstream Gale config UI renders the file list');
assert.ok(document.querySelector('#app .grid'), 'upstream two-column config layout is present');
assert.ok(document.body.textContent.includes('BepInEx/config/AinaVT-LethalConfig.cfg'), 'a mod-row Edit config deep link selects the requested file after the first refresh');
assert.ok(document.querySelector('svg'), 'offline config icons render');
assert.ok(calls.some(call => call.url.includes('/api/command') && call.body?.method === 'config'), 'config UI uses the cookie-authenticated browser RPC');
assert.equal(document.documentElement.lang, 'ru-RU', 'Steam language becomes a valid HTML locale');
assert.ok(document.querySelector('input[placeholder="Поиск файлов..."]'), 'upstream search field uses the Steam locale');
const fileButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.includes('LethalConfig'));
assert.ok(fileButton, 'upstream config file row rendered');
fileButton.click();
await waitFor(() => Array.from(document.querySelectorAll('button')).some(button => button.textContent.trim() === 'General'), 'upstream file sections expand');
Array.from(document.querySelectorAll('button')).find(button => button.textContent.trim() === 'General').click();
await waitFor(() => document.querySelector('[role="checkbox"]'), 'upstream boolean config editor renders');
document.querySelector('[role="checkbox"]').click();
await waitFor(() => calls.some(call => call.body?.method === 'set_config_entry' && call.body.args?.entry === 'ShowInGame' && call.body.args?.value?.content === false), 'editing an upstream control saves through Gale');
console.log('✓ upstream Gale config UI: Svelte mounts, Steam locale, file/section navigation, boolean save via browser RPC');
window.close();
