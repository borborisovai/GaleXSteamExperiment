import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as ReactDOMServer from 'react-dom';
import * as JsxRuntime from 'react/jsx-runtime';

const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
const { window } = dom;
for (const key of ['window', 'document', 'HTMLElement', 'HTMLInputElement', 'Element', 'Node', 'CustomEvent', 'MutationObserver', 'Event', 'MouseEvent', 'KeyboardEvent', 'getComputedStyle', 'location']) {
  globalThis[key] = window[key];
}
Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
window.SP_REACT = React;
window.SP_REACTDOM = { ...ReactDOMServer, ...ReactDOM };
window.SP_JSX_FACTORY = JsxRuntime;

const snapshot = {
  ok: true, bridgeVersion: 2, core: 'Gale', coreVersion: '1.23.3', activeSlug: 'lethal-company',
  dataDir: '/tmp/gale', installing: false, pendingLinks: [],
  games: [{ slug: 'lethal-company', name: 'Lethal Company', modLoader: 'BepInEx', steamAppId: 1966720, backends: ['Thunderstore'] }],
};
const profiles = { activeId: 1, profiles: [{ id: 1, name: 'Default', modCount: 1, customArgs: '', missing: false }] };
const mod = { enabled: true, data: { name: 'TestMod', author: 'Tester', version: '1.0.0', description: 'Smoke', fileSize: 1024, uuid: 'p1', versionUuid: 'v1', type: 'remote', backend: 'Thunderstore', isDeprecated: false, versions: [{ name: '1.0.0', uuid: 'v1' }], categories: ['Utility'] } };
const opened = [];
window.MILLENNIUM_API = {
  Millennium: {
    async callServerMethod(plugin, method, args = {}) {
      assert.equal(plugin, 'GaleX');
      if (method === 'snapshot') return { ok: true, data: snapshot };
      if (method === 'get_config') return { ok: true, data: '' };
      if (method === 'set_config' || method === 'restart' || method === 'dismiss_link') return { ok: true };
      if (method === 'browser_url') return { ok: true, data: { url: 'http://127.0.0.1:9/open?ticket=smoke' } };
      if (method === 'command') {
        const envelope = JSON.parse(args.payload);
        const a = envelope.args ?? {};
        switch (envelope.method) {
          case 'profiles': return { ok: true, data: profiles };
          case 'mods': return { ok: true, data: { mods: [mod], totalModCount: 1, updates: [], unknownMods: [] } };
          case 'prefs': return { ok: true, data: { dataDir: '/tmp/gale', fetchModsAutomatically: true, zoomFactor: 1, pullBeforeLaunch: true, language: 'ru', backendSkipConfirm: false, gamePrefs: {} } };
          case 'activate_profile': return { ok: true, data: profiles };
          case 'toggle_mod': return { ok: true, data: { type: 'done' } };
          case 'fetch_mods': return { ok: true, data: null };
          default: return { ok: true, data: null };
        }
      }
      return { ok: false, error: 'unexpected method ' + method };
    },
  },
  Navigation: { Navigate() {}, NavigateToSteamWeb(url) { opened.push(url); }, NavigateToAppProperties() {} },
  routerHook: { addRoute() {}, removeRoute() {}, addGlobalComponent() {}, removeGlobalComponent() {} },
};
window.Millennium = { AddWindowCreateHook() {}, openQuickAccess: async () => {} };

const bundle = pathToFileURL(resolve('../plugin/.millennium/Dist/index.js')).href;
const plugin = await import(bundle);
assert.equal(typeof plugin.default, 'function', 'Millennium entry must export default');
const settings = await plugin.default();
assert.equal(settings.title, 'GaleX');
assert.ok(window.PLUGIN_LIST?.GaleX?.content, 'plugin settings registered');
assert.ok(window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.GaleX, 'sidebar panel registered');
assert.ok(document.getElementById('galex-styles'), 'scoped styles injected');

window.document.body.insertAdjacentHTML('beforeend', `
  <div role="dialog" data-appid="1966720" id="props">
    <nav role="tablist"><button role="tab">Общие</button><button role="tab">Локальные файлы</button><button role="tab">DLC</button></nav>
    <div role="tabpanel" id="native">native panel</div>
  </div>
  <div role="dialog" data-appid="999" id="unsupported">
    <nav role="tablist"><button role="tab">Общие</button><button role="tab">Локальные файлы</button><button role="tab">DLC</button></nav>
    <div role="tabpanel">unsupported</div>
  </div>`);
const sleep = ms => new Promise(r => setTimeout(r, ms));
await sleep(700);
const tab = document.querySelector('[data-galex-properties="tab"]');
assert.ok(tab, 'Моды tab injected for supported Steam app');
assert.equal(document.querySelectorAll('[data-galex-properties="tab"]').length, 1, 'unsupported app untouched');
tab.click();
await sleep(400);
const panel = document.querySelector('[data-galex-properties="panel"]');
assert.ok(panel && !panel.hidden, 'mods panel activated');
assert.equal(document.getElementById('native').style.display, 'none', 'native panel hidden while mods active');
assert.ok(panel.querySelector('.gx-mods'), 'ModsView rendered');
assert.ok(panel.textContent.includes('TestMod'), 'mod list rendered');
assert.ok(panel.querySelector('input[aria-label="Поиск модов"]'), 'search row rendered');
const toggle = panel.querySelector('input[role="switch"]');
assert.ok(toggle, 'mod toggle rendered');
toggle.click();
await sleep(250);
document.querySelector('#props [role="tab"]').click();
await sleep(250);
assert.ok(panel.hidden, 'native tab restores mods panel hidden');
assert.notEqual(document.getElementById('native').style.display, 'none', 'native panel restored');

window.GaleX.dispose();
await sleep(100);
assert.equal(document.querySelector('[data-galex-properties="tab"]'), null, 'dispose removes injected tab');
assert.equal(document.querySelector('[data-galex-properties="panel"]'), null, 'dispose removes injected panel');
assert.equal(window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.GaleX, undefined, 'dispose unregisters settings');
console.log('✓ plugin bundle: Millennium entry, settings, semantic properties tab, mod UI, cleanup');
console.log('  (Steam/Millennium runtime is mocked; real CEF/theme acceptance is still required)');
window.close();
