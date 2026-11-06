import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as ReactDOMServer from 'react-dom';
import * as JsxRuntime from 'react/jsx-runtime';

// React 18's legacy input-value polyfill expects IE-era hooks on the focused element.
const silenceReactInputPolyfill = win => {
  win.HTMLElement.prototype.attachEvent = () => {};
  win.HTMLElement.prototype.detachEvent = () => {};
};
const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
silenceReactInputPolyfill(dom.window);
const { window } = dom;
for (const key of ['window', 'document', 'HTMLElement', 'HTMLInputElement', 'Element', 'Node', 'CustomEvent', 'MutationObserver', 'Event', 'MouseEvent', 'KeyboardEvent', 'getComputedStyle', 'location']) {
  globalThis[key] = window[key];
}
Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
window.SP_REACT = React;
window.SP_REACTDOM = { ...ReactDOMServer, ...ReactDOM };
window.SP_JSX_FACTORY = JsxRuntime;
window.PLUGIN_LIST = {};
window.SteamClient = { Settings: { GetCurrentLanguage: async () => 'english' }, System: { OpenFileDialog: async () => '/tmp/profile.r2z' }, Browser: { StartDownload: url => opened.push(url) } };
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
const opened = [], calls = [], commandPayloads = [], frontendLoaded = [], windowHooks = [];
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
const NativeButton = ({children, ...props}) => React.createElement('button', props, children);
window.MILLENNIUM_API = {
  // Exercise the Steam/Millennium control path, not only the HTML fallbacks.
  DialogButton: NativeButton,
  DialogButtonPrimary: NativeButton,
  DialogCheckbox: ({checked, onChange, disabled, controlled, ...props}) => React.createElement('input', {...props, type: 'checkbox', checked, disabled, onChange: e => onChange?.(e.target.checked)}),
  Dropdown: ({rgOptions, selectedOption, onChange, menuLabel, disabled}) => React.createElement('select', {'aria-label': menuLabel, value: String(selectedOption), disabled, onChange: e => onChange?.(rgOptions.find(o => String(o.data) === e.target.value))}, rgOptions.map(o => React.createElement('option', {key: String(o.data), value: String(o.data)}, o.label))),
  Toggle: ({value, onChange, disabled, ...props}) => React.createElement('input', {...props, type: 'checkbox', role: 'switch', checked: value, disabled, onChange: e => onChange?.(e.target.checked)}),
  TextField: ({label, description, ...props}) => React.createElement('input', props),
  IconsModule: {},
  Millennium: {
    AddWindowCreateHook(callback) { windowHooks.push(callback); },
    async callServerMethod(plugin, method, args = {}) {
      assert.equal(plugin, 'GaleX');
      calls.push(method);
      if (method === 'snapshot') return luaReply({ ok: true, data: snapshot });
      if (method === 'get_config') return luaReply({ ok: true, data: '' });
      if (method === 'frontend_log') return luaReply({ ok: true });
      if (method === 'set_config' || method === 'restart') return luaReply({ ok: true });
      if (method === 'dismiss_link') { snapshot.pendingLinks = []; return luaReply({ ok: true }); }
      if (method === 'browser_url') return luaReply({ ok: true, data: { url: 'http://steamloopback.host:9/open?ticket=smoke' } });
      if (method === 'command') {
        const envelope = JSON.parse(args.payload);
        calls.push('command:' + envelope.method);
        commandPayloads.push(envelope);
        switch (envelope.method) {
          case 'profiles': return luaReply({ ok: true, data: profiles });
          case 'mods': return luaReply({ ok: true, data: { mods: [mod], totalModCount: 1, updates: [], unknownMods: [] } });
          case 'prefs': return luaReply({ ok: true, data: { dataDir: '/tmp/gale', fetchModsAutomatically: true, zoomFactor: 1, pullBeforeLaunch: true, language: 'ru', backendSkipConfirm: false, gamePrefs: {} } });
          case 'activate_profile': return luaReply({ ok: true, data: profiles });
          case 'toggle_mod': return luaReply({ ok: true, data: { type: 'done' } });
          case 'fetch_mods': return luaReply({ ok: true, data: null });
          case 'read_profile_file': return luaReply({ ok: true, data: { manifest: { profileName: 'R2Z profile', mods: [] }, path: '/tmp/profile', deleteAfterImport: true, missingMods: [] } });
          case 'import_local_mod': return luaReply({ ok: true, data: null });
          case 'export_code': return luaReply({ ok: true, data: { type: 'success', code: 'smoke-export-code' } });
          case 'list_export_files': return luaReply({ ok: true, data: [{ path: 'BepInEx/config/test.cfg', size: 128, included: true }] });
          case 'resolve_link': return luaReply({ ok: true, data: { ...mod.data, name: 'LinkMod', uuid: 'link-mod', versionUuid: 'link-v1' } });
          case 'install_mod': calls.push('install_mod'); return luaReply({ ok: true, data: null });
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
silenceReactInputPolyfill(popup.window);
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
await waitFor(() => popupDocument.querySelector('[data-galex-properties="tab"]'), 'Mods tab injected in secondary properties popup after its body is ready');
const tab = popupDocument.querySelector('[data-galex-properties="tab"]');
assert.equal(popupDocument.querySelectorAll('[data-galex-properties="tab"]').length, 1, 'unsupported app untouched');
assert.ok(popupDocument.getElementById('galex-styles'), 'styles injected into popup');
tab.click();
await waitFor(() => popupDocument.querySelector('.gx-mods'), 'mods panel activated');
const panel = popupDocument.querySelector('[data-galex-properties="panel"]');
assert.ok(panel && !panel.hidden, 'mods panel visible');
assert.equal(popupDocument.getElementById('native').style.display, 'none', 'native panel hidden while mods active');
await waitFor(() => panel.textContent.includes('TestMod'), 'double-encoded mods IPC decoded and rendered');
assert.ok(panel.querySelector('input[aria-label="Search by name or author"]'), 'search row rendered');
assert.ok(panel.querySelector('img.gx-mod-avatar')?.src.includes('ccdn.thunderstore.io'), 'remote mods use Gale/Thunderstore icon URLs instead of broken local paths');
const toggle = panel.querySelector('input[type="checkbox"]');
assert.ok(toggle, 'mod checkbox rendered');
toggle.click();
await waitFor(() => calls.includes('command:toggle_mod'), 'mod action reached backend');
assert.ok(panel.querySelector('.gx-mod-list'), 'mod list has its own scroll container');
const advanced = Array.from(panel.querySelectorAll('button')).find(button => button.textContent.includes('Advanced settings'));
advanced.click();
await waitFor(() => panel.querySelector('select[aria-label="Categories"]'), 'advanced controls expose a category dropdown');
const category = panel.querySelector('select[aria-label="Categories"]');
assert.ok(Array.from(category.options).some(option => option.value === 'Utility'), 'categories are dropdown options, not chips');
await waitFor(() => panel.querySelector('button[aria-label="Ascending"]')?.disabled === false, 'previous mod action finished before sorting');
const direction = panel.querySelector('button[aria-label="Ascending"]');
assert.ok(direction, 'explicit ascending/descending button rendered');
direction.click();
await waitFor(() => commandPayloads.some(call => call.method === 'mods' && call.args.args?.sortOrder === 'descending'), 'sort direction reaches Gale query args');
assert.ok(panel.querySelector('button[aria-label="Descending"]'), 'sort button visibly switches direction');
const exportButton = Array.from(panel.querySelectorAll('button')).find(button => button.textContent.trim() === 'Export');
exportButton.click();
await waitFor(() => popupDocument.querySelector('.gx-modal')?.textContent.includes('smoke-export-code'), 'export uses Gale export_code');
assert.ok(commandPayloads.some(call => call.method === 'list_export_files'), 'export loads Gale file exclusions');
popupDocument.querySelector('.gx-modal button[aria-label="Close"]').click();
const importButton = Array.from(panel.querySelectorAll('button')).find(button => button.textContent.trim() === 'Import');
importButton.click();
await waitFor(() => popupDocument.querySelector('.gx-modal')?.textContent.includes('Select profile file (.r2z)'), 'import dialog offers the Steam native .r2z picker');
Array.from(popupDocument.querySelectorAll('.gx-modal button')).find(button => button.textContent.includes('Select profile file (.r2z)')).click();
await waitFor(() => commandPayloads.some(call => call.method === 'read_profile_file' && call.args.path === '/tmp/profile.r2z'), 'r2z import uses Steam OpenFileDialog + Gale read_profile_file, not a CEF file input');
await waitFor(() => popupDocument.querySelector('.gx-modal')?.textContent.includes('R2Z profile'), 'r2z preview is rendered');
popupDocument.querySelector('.gx-modal button[aria-label="Close"]').click();
popupDocument.querySelector('#props [role="tab"]').click();
await waitFor(() => panel.hidden && popupDocument.getElementById('native').style.display !== 'none', 'native tab restores panels');

// Current Steam can label the tab "Installed Files", use div tabs without ARIA,
// and expose the AppID only through the popup title + appStore.
window.appStore = { m_mapApps: new Map([[1966720, { display_name: 'Lethal Company' }]]) };
const modern = new JSDOM('<!doctype html><html><head><title>Properties - Lethal Company</title></head><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
silenceReactInputPolyfill(modern.window);
modern.window.document.body.insertAdjacentHTML('beforeend', `
  <div class="DialogBody">
    <div class="TabList"><div class="Tab Active">General</div><div class="Tab">Updates</div><div class="Tab">DLC</div><div class="Tab">Installed Files</div></div>
    <div class="TabContent" id="modern-native">native content</div>
  </div>`);
for (const hook of windowHooks) hook({ window: modern.window, m_strName: 'Popup_1', m_strTitle: 'Properties - Lethal Company' });
await waitFor(() => modern.window.document.querySelector('[data-galex-properties="tab"]'), 'Installed Files/div-tab/title-AppID properties popup injected');
const modernTab = modern.window.document.querySelector('[data-galex-properties="tab"]');
assert.equal(modernTab.textContent, 'Mods');
modernTab.click();
await waitFor(() => modern.window.document.querySelector('.gx-mods'), 'modern properties panel activated');
assert.equal(modern.window.document.getElementById('modern-native').style.display, 'none', 'class-based native TabContent hidden');
assert.ok(!modern.window.document.querySelector('.TabList .Tab').className.includes('Active'), 'activating Mods clears Steam selected/active classes from the previous tab');
modern.window.document.querySelector('.TabList .Tab').click();
await waitFor(() => modern.window.document.querySelector('[data-galex-properties="panel"]').hidden && modern.window.document.getElementById('modern-native').style.display !== 'none', 'div-based native tab restores panels');
assert.ok(modern.window.document.querySelector('.TabList .Tab').className.includes('Active'), 'returning to a native tab restores its saved Steam selection class');

const russian = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
silenceReactInputPolyfill(russian.window);
russian.window.document.body.insertAdjacentHTML('beforeend', `
  <div role="dialog" data-appid="1966720">
    <nav><div>Общие</div><div>Обновления</div><div>Установленные файлы</div></nav>
    <div role="tabpanel" id="ru-native">native</div>
  </div>`);
for (const hook of windowHooks) hook({ window: russian.window, m_strName: 'Popup_2', m_strTitle: 'Свойства — Lethal Company' });
await waitFor(() => russian.window.document.querySelector('[data-galex-properties="tab"]'), 'Russian Installed Files properties popup injected');

// The Thunderstore install dialog must mount in the visible main Steam window,
// not in the hidden SharedJSContext document that loaded the plugin.
const mainSteam = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
silenceReactInputPolyfill(mainSteam.window);
for (const hook of windowHooks) hook({ window: mainSteam.window, m_strName: 'SP Desktop_uid0', m_strTitle: 'Steam' });
await waitFor(() => mainSteam.window.document.getElementById('galex-link-installer'), 'link installer root mounted in the main Steam window');
snapshot.pendingLinks = [{ url: 'ror2mm://v1/install/thunderstore.io/Test/LinkMod/1.0.0/', slug: 'lethal-company' }];
window.PLUGIN_LIST.GaleX.linkQueued('{}');
await waitFor(() => mainSteam.window.document.querySelector('.gx-modal'), 'queued Thunderstore link opens a visible install dialog');
await waitFor(() => mainSteam.window.document.querySelector('.gx-modal')?.textContent.includes('LinkMod'), 'link dialog resolves the package');
const installButton = Array.from(mainSteam.window.document.querySelectorAll('.gx-modal button')).find(button => button.textContent.includes('Install mod'));
assert.ok(installButton, 'install button rendered');
installButton.click();
await waitFor(() => calls.includes('install_mod') && !mainSteam.window.document.querySelector('.gx-modal'), 'install reaches Gale and dismisses the pending link');
const installCall = commandPayloads.find(call => call.method === 'install_mod');
assert.equal(installCall.args.profileId, 1, 'link installs into the selected Gale profile');
assert.deepEqual(installCall.args.id, { packageUuid: 'link-mod', versionUuid: 'link-v1', backend: 'Thunderstore' }, 'resolved link becomes a Gale ModId');

const settingsHost = document.createElement('div'); document.body.appendChild(settingsHost);
const settingsRoot = ReactDOM.createRoot(settingsHost); settingsRoot.render(settings.content);
await waitFor(() => settingsHost.textContent.includes('Gale 1.23.3'), 'global settings decode snapshot/prefs/config replies');
assert.ok(calls.includes('command:prefs') && calls.includes('get_config'));
settingsRoot.unmount(); settingsHost.remove();

window.GaleX.dispose();
await waitFor(() => !popupDocument.querySelector('[data-galex-properties="tab"]') && !popupDocument.querySelector('[data-galex-properties="panel"]') && !modern.window.document.querySelector('[data-galex-properties="tab"]') && !russian.window.document.querySelector('[data-galex-properties="tab"]'), 'dispose removes injected tabs and panels from every popup');
assert.equal(window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.GaleX, undefined, 'dispose unregisters settings');
assert.equal(modern.window.document.querySelector('[data-galex-properties="tab"]'), null, 'dispose cleans modern popup');
assert.equal(russian.window.document.querySelector('[data-galex-properties="tab"]'), null, 'dispose cleans Russian popup');
console.log('✓ plugin bundle: script auto-start, backend notification, Millennium 3.6.1 IPC, classic/modern/Russian properties tabs, mod UI, settings, cleanup');
console.log('  (Steam/Millennium runtime is mocked; real CEF/theme acceptance is still required)');
mainSteam.window.close();
popup.window.close();
modern.window.close();
russian.window.close();
window.close();
