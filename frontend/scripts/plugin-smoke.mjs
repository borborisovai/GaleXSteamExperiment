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
window.PLUGIN_LIST = {};
window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS = {};

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function waitFor(predicate, description, timeout = 2500) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (predicate()) return;
    await sleep(20);
  }
  assert.ok(predicate(), description);
}

const snapshot = {
  ok: true, bridgeVersion: 2, core: 'Gale', coreVersion: '1.23.3', activeSlug: 'lethal-company',
  dataDir: '/tmp/gale', installing: false, pendingLinks: [],
  games: [{ slug: 'lethal-company', name: 'Lethal Company', modLoader: 'BepInEx', steamAppId: 1966720, backends: ['Thunderstore'] }],
};
const profiles = { activeId: 1, profiles: [{ id: 1, name: 'Default', modCount: 1, customArgs: '', missing: false }] };
const mod = { enabled: true, data: { name: 'TestMod', author: 'Tester', version: '1.0.0', description: 'Smoke', fileSize: 1024, uuid: 'p1', versionUuid: 'v1', type: 'remote', backend: 'Thunderstore', isDeprecated: false, versions: [{ name: '1.0.0', uuid: 'v1' }], categories: ['Utility'] } };
const opened = [], calls = [], frontendLoaded = [], windowHooks = [];
// Millennium 3.6.1 FFI resolves JSON.stringify(response.returnJson). Lua returns
// a JSON string to preserve empty arrays, so the browser receives two JSON layers.
const luaReply = value => JSON.stringify(JSON.stringify(value));
window.MILLENNIUM_BACKEND_IPC = {
  async postMessage(id, data) {
    assert.equal(id, 1, 'FRONT_END_LOADED notification id');
    frontendLoaded.push(data);
    return { returnValue: null };
  },
};
window.MILLENNIUM_API = {
  Millennium: {
    AddWindowCreateHook(callback) { windowHooks.push(callback); },
    async callServerMethod(plugin, method, args = {}) {
      assert.equal(plugin, 'GaleX');
      calls.push(method);
      if (method === 'snapshot') return luaReply({ ok: true, data: snapshot });
      if (method === 'get_config') return luaReply({ ok: true, data: '' });
      if (method === 'set_config' || method === 'restart' || method === 'dismiss_link') return luaReply({ ok: true });
      if (method === 'browser_url') return luaReply({ ok: true, data: { url: 'http://127.0.0.1:9/open?ticket=smoke' } });
      if (method === 'command') {
        const envelope = JSON.parse(args.payload);
        calls.push('command:' + envelope.method);
        switch (envelope.method) {
          case 'profiles': return luaReply({ ok: true, data: profiles });
          case 'mods': return luaReply({ ok: true, data: { mods: [mod], totalModCount: 1, updates: [], unknownMods: [] } });
          case 'prefs': return luaReply({ ok: true, data: { dataDir: '/tmp/gale', fetchModsAutomatically: true, zoomFactor: 1, pullBeforeLaunch: true, language: 'ru', backendSkipConfirm: false, gamePrefs: {} } });
          case 'activate_profile': return luaReply({ ok: true, data: profiles });
          case 'toggle_mod': return luaReply({ ok: true, data: { type: 'done' } });
          case 'fetch_mods': return luaReply({ ok: true, data: null });
          default: return luaReply({ ok: true, data: null });
        }
      }
      return luaReply({ ok: false, error: 'unexpected method ' + method });
    },
  },
  Navigation: { Navigate() {}, NavigateToSteamWeb(url) { opened.push(url); }, NavigateToAppProperties() {} },
  routerHook: { addRoute() {}, removeRoute() {}, addGlobalComponent() {}, removeGlobalComponent() {} },
};
window.Millennium = { AddWindowCreateHook(callback) { windowHooks.push(callback); }, openQuickAccess: async () => {} };

// Millennium's loose-file loader appends <script type="module" src="…index.js">.
// Importing the module is the side effect under test: do NOT call default() to
// bootstrap it. The exported entry remains compatible with Millennium's wrapper.
const bundle = pathToFileURL(resolve('../plugin/.millennium/Dist/index.js')).href;
const plugin = await import(bundle);
assert.equal(typeof plugin.default, 'function', 'Millennium entry must export default');
await waitFor(() => window.GaleX && calls.includes('snapshot') && frontendLoaded.length === 1, 'script loading alone must mount GaleX, poll snapshot and notify the backend');
assert.deepEqual(frontendLoaded, [{ pluginName: 'GaleX' }]);
const settings = await plugin.default();
assert.equal(settings.title, 'GaleX');
assert.equal(await plugin.default(), settings, 'wrapper/default and script auto-start share one initialization');
assert.equal(frontendLoaded.length, 1, 'default() must not notify/mount a second time');
assert.ok(window.PLUGIN_LIST?.GaleX?.content, 'plugin settings registered');
assert.ok(window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.GaleX, 'sidebar panel registered');
assert.ok(document.getElementById('galex-styles'), 'scoped styles injected');
assert.ok(windowHooks.length > 0, 'popup creation hook registered');

// Properties live in a secondary Steam popup, not in the main library document.
const popup = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
const popupDocument = popup.window.document;
// The native hook may fire before <body> exists; attachment must wait for it.
popupDocument.body.remove();
for (const hook of windowHooks) hook({ window: popup.window });
const popupBody = popupDocument.createElement('body');
popupDocument.documentElement.appendChild(popupBody);
popupBody.insertAdjacentHTML('beforeend', `
  <div role="dialog" data-appid="1966720" id="props">
    <nav role="tablist"><button role="tab">General</button><button role="tab">Local Files</button><button role="tab">DLC</button></nav>
    <div role="tabpanel" id="native">native panel</div>
  </div>
  <div role="dialog" data-appid="999" id="unsupported">
    <nav role="tablist"><button role="tab">General</button><button role="tab">Local Files</button><button role="tab">DLC</button></nav>
    <div role="tabpanel">unsupported</div>
  </div>`);
popup.window.dispatchEvent(new popup.window.Event('DOMContentLoaded'));
await waitFor(() => popupDocument.querySelector('[data-galex-properties="tab"]'), 'Моды tab injected in secondary properties popup after its body is ready');
const tab = popupDocument.querySelector('[data-galex-properties="tab"]');
assert.equal(popupDocument.querySelectorAll('[data-galex-properties="tab"]').length, 1, 'unsupported app untouched');
assert.ok(popupDocument.getElementById('galex-styles'), 'styles injected into popup');
tab.click();
await waitFor(() => popupDocument.querySelector('.gx-mods'), 'mods panel activated');
const panel = popupDocument.querySelector('[data-galex-properties="panel"]');
assert.ok(panel && !panel.hidden, 'mods panel visible');
assert.equal(popupDocument.getElementById('native').style.display, 'none', 'native panel hidden while mods active');
await waitFor(() => panel.textContent.includes('TestMod'), 'double-encoded mods IPC decoded and rendered');
assert.ok(panel.querySelector('input[aria-label="Поиск модов"]'), 'search row rendered');
const toggle = panel.querySelector('input[role="switch"]');
assert.ok(toggle, 'mod toggle rendered');
toggle.click();
await waitFor(() => calls.includes('command'), 'mod action reached backend');
popupDocument.querySelector('#props [role="tab"]').click();
await waitFor(() => panel.hidden && popupDocument.getElementById('native').style.display !== 'none', 'native tab restores panels');

const settingsHost = document.createElement('div'); document.body.appendChild(settingsHost);
const settingsRoot = ReactDOM.createRoot(settingsHost); settingsRoot.render(settings.content);
await waitFor(() => settingsHost.textContent.includes('Gale 1.23.3'), 'global settings decode snapshot/prefs/config replies');
assert.ok(calls.includes('command:prefs') && calls.includes('get_config'));
settingsRoot.unmount(); settingsHost.remove();

window.GaleX.dispose();
await waitFor(() => !popupDocument.querySelector('[data-galex-properties="tab"]') && !popupDocument.querySelector('[data-galex-properties="panel"]'), 'dispose removes injected tab and panel');
assert.equal(window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.GaleX, undefined, 'dispose unregisters settings');
console.log('✓ plugin bundle: script auto-start, backend notification, Millennium 3.6.1 IPC, popup properties tab, mod UI, settings, cleanup');
console.log('  (Steam/Millennium runtime is mocked; real CEF/theme acceptance is still required)');
popup.window.close();
window.close();
