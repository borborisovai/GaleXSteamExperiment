import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as ReactDOMServer from 'react-dom';
import { Simulate } from 'react-dom/test-utils';
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
const launchOptionsStore = new Map([[1966720, 'PROTON_LOG=1 %command% -console']]);
const launchOptionsCalls = [];
const appDetailsSubs = new Map();
const appDetails = appid => ({ unAppID: appid, strLaunchOptions: launchOptionsStore.get(appid) ?? '', strShortcutLaunchOptions: launchOptionsStore.get(appid) ?? '' });
const emitAppDetails = appid => queueMicrotask(() => appDetailsSubs.get(appid)?.forEach(cb => cb(appDetails(appid))));
window.SteamClient = {
  Settings: { GetCurrentLanguage: async () => 'english' },
  System: { OpenFileDialog: async () => '/tmp/profile.r2z' },
  Browser: { StartDownload: url => opened.push(url) },
  Apps: {
    RegisterForAppDetails(appid, cb) {
      if (!appDetailsSubs.has(appid)) appDetailsSubs.set(appid, new Set());
      appDetailsSubs.get(appid).add(cb);
      queueMicrotask(() => cb(appDetails(appid)));
      return { unregister() { appDetailsSubs.get(appid)?.delete(cb); } };
    },
    SetAppLaunchOptions(appid, value) { launchOptionsCalls.push({ appid, value, shortcut: false }); launchOptionsStore.set(appid, value); emitAppDetails(appid); },
    SetShortcutLaunchOptions(appid, value) { launchOptionsCalls.push({ appid, value, shortcut: true }); launchOptionsStore.set(appid, value); emitAppDetails(appid); },
  },
};
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
const mod = { enabled: true, configFile: 'BepInEx/config/test.cfg', alternateBackend: { backend: 'Hexium', latestVersion: '1.1.0', latestVersionUuid: 'hex-v1' }, data: { name: 'TestMod', author: 'Tester', version: '1.0.0', description: 'Smoke', fileSize: 1024, uuid: 'p1', versionUuid: 'v1', type: 'remote', backend: 'Thunderstore', isDeprecated: false, versions: [{ name: '1.0.0', uuid: 'v1' }, { name: '0.9.0', uuid: 'v0' }], websiteUrl: 'https://example.com/testmod', donateUrl: 'https://example.com/donate', categories: ['Utility'] } };
const opened = [], calls = [], commandPayloads = [], browserPayloads = [], copied = [], frontendLoaded = [], windowHooks = [];
Object.defineProperty(window.navigator, 'clipboard', { value: { writeText: async text => { copied.push(text); } }, configurable: true });
const focusCalls = [];
const routePatches = new Map();
let snapshotFailure = null;
let progressSnapshot = { active: false, tasks: [], networkBytesPerSecond: 0, diskBytesPerSecond: 0, history: [] };
window.SteamClient.Window = { BringToFront() { focusCalls.push('bring'); }, SetKeyFocus() { focusCalls.push('key'); }, MarkLastFocused() { focusCalls.push('last'); } };
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
  ProgressBarWithInfo: props => React.createElement('div', { 'data-progress': props.nProgress, 'data-indeterminate': String(!!props.indeterminate) }, props.strOperationText),
  Millennium: {
    AddWindowCreateHook(callback) { windowHooks.push(callback); },
    async callServerMethod(plugin, method, args = {}) {
      assert.equal(plugin, 'GaleX');
      calls.push(method);
      if (method === 'snapshot') return luaReply(snapshotFailure ?? { ok: true, data: snapshot });
      if (method === 'progress') return luaReply({ ok: true, data: progressSnapshot });
      if (method === 'get_config') return luaReply({ ok: true, data: '' });
      if (method === 'frontend_log') return luaReply({ ok: true });
      if (method === 'set_config') return luaReply({ ok: true });
      if (method === 'restart') { snapshotFailure = null; return luaReply({ ok: true }); }
      if (method === 'dismiss_link') { snapshot.pendingLinks = []; return luaReply({ ok: true }); }
      if (method === 'browser_url') { browserPayloads.push(JSON.parse(args.payload)); return luaReply({ ok: true, data: { url: 'http://steamloopback.host:9/open?ticket=smoke' } }); }
      if (method === 'command') {
        const envelope = JSON.parse(args.payload);
        calls.push('command:' + envelope.method);
        commandPayloads.push(envelope);
        switch (envelope.method) {
          case 'profiles': return luaReply({ ok: true, data: profiles });
          case 'mods': return luaReply({ ok: true, data: { mods: [mod], totalModCount: 1, updates: [], unknownMods: [] } });
          case 'prefs': return luaReply({ ok: true, data: { dataDir: '/tmp/gale', fetchModsAutomatically: true, zoomFactor: 1, pullBeforeLaunch: true, language: 'ru', backendSkipConfirm: false, gamePrefs: {} } });
          case 'launch_plan': return luaReply({ ok: true, data: { args: '--doorstop-enable true', platform: 'linux' } });
          case 'activate_profile': return luaReply({ ok: true, data: profiles });
          case 'toggle_mod': case 'remove_mod': return luaReply({ ok: true, data: { type: 'done' } });
          case 'get_dependants': return luaReply({ ok: true, data: [{ fullName: 'Tester-Dependant', preferredVersion: '1.0.0' }] });
          case 'open_mod_dir': return luaReply({ ok: true, data: null });
          case 'fetch_mods': return luaReply({ ok: true, data: null });
          case 'read_profile_file': return luaReply({ ok: true, data: { manifest: { profileName: 'R2Z profile', mods: [] }, path: '/tmp/profile', deleteAfterImport: true, missingMods: [] } });
          case 'import_local_mod': return luaReply({ ok: true, data: null });
          case 'export_code': return luaReply({ ok: true, data: { type: 'success', code: 'smoke-export-code' } });
          case 'list_export_files': return luaReply({ ok: true, data: [{ path: 'BepInEx/config/test.cfg', size: 128, included: true }] });
          case 'resolve_link': return luaReply({ ok: true, data: { ...mod.data, name: 'LinkMod', uuid: 'link-mod', versionUuid: 'link-v1' } });
          case 'install_mod': calls.push('install_mod'); return luaReply({ ok: true, data: null });
          case 'cancel_installs': progressSnapshot = { active: false, tasks: [], networkBytesPerSecond: 0, diskBytesPerSecond: 0, history: [] }; return luaReply({ ok: true, data: null });
          default: return luaReply({ ok: true, data: null });
        }
      }
      return luaReply({ ok: false, error: 'unexpected method ' + method });
    },
  },
  Navigation: { Navigate() {}, NavigateToSteamWeb(url) { opened.push(url); }, NavigateToAppProperties() {} },
  routerHook: { addRoute() {}, removeRoute() {}, addGlobalComponent() {}, removeGlobalComponent() {}, addPatch(path, patch, mode) { routePatches.set(path, { patch, mode }); }, removePatch(path) { routePatches.delete(path); } },
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
const steamCss = readFileSync(resolve('src/styles/steam.css'), 'utf8');
assert.ok(/\.gx-profile-actions \[class\*="DialogButton"\][^{]*\{[^}]*width:auto/.test(steamCss), 'Steam DialogButton keeps content width instead of stacking full-width');
assert.ok(/\.gx-toolbar\{[^}]*grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/.test(steamCss), 'toolbar uses the bounded two-column Workshop layout so Advanced settings stays on screen');
assert.ok(/\.gx-mods \.gx-toolbar \[class\*="DialogButton"\]:not\(\.gx-icon-button\)\{[^}]*width:100%/.test(steamCss), 'Workshop toolbar buttons fill their grid columns without overflowing');
assert.ok(/\.gx-mod-row\{[^}]*height:80px/.test(steamCss) && /\.gx-mod-list\{[^}]*gap:2px/.test(steamCss), 'mod rows match the Workshop 80px height / 82px step');
assert.ok(/\.gx-mod-avatar\{[^}]*width:48px[^}]*height:48px/.test(steamCss), 'mod icons use the Workshop 48px footprint');
assert.ok(/\.gx-mod-actions \.gx-icon-button\{[^}]*width:36px[^}]*height:36px[^}]*padding:0/.test(steamCss), 'row action buttons use the requested 36px Unsubscribe footprint without wrapper padding');
assert.ok(/\.gx-mod-actions \.gx-icon-button button[^}]*width:36px[^}]*height:36px[^}]*padding:0/.test(steamCss), 'the native button inside a row action is also 36px and unpadded');
assert.ok(/\.gx-native-button\{[^}]*padding:0/.test(steamCss), 'gx-native-button wrappers do not add padding');
assert.ok(/\.gx-mod-index\{[^}]*color:unset/.test(steamCss) && /\.gx-mod-size\{[^}]*color:unset/.test(steamCss), 'index and size inherit the muted Workshop row color');
assert.ok(/\.gx-mod-list::-webkit-scrollbar\{[^}]*width:14px/.test(steamCss) && /\.gx-mod-list::-webkit-scrollbar-thumb\{[^}]*border:4px solid transparent[^}]*background-clip:padding-box/.test(steamCss), 'the mod list restores the native Steam scrollbar geometry and thumb');
assert.ok(/\.gx-context-menu--submenu-open\{overflow:visible\}/.test(steamCss), 'an open fallback submenu is not clipped by the root menu scroll container');
assert.ok(/\.galex \[class\*="DialogButton"\]:not\(\.gx-icon-button\)\{[^}]*width:auto/.test(steamCss), 'generic DialogButtons still size to content outside the Workshop toolbar');
assert.ok(/\.gx-modal-backdrop\{[^}]*z-index:2147483647/.test(steamCss), 'confirmation overlays sit above Steam popups');
assert.ok(routePatches.has('/library/downloads'), 'virtual Gale downloads card patches Steam Downloads route');
assert.equal(routePatches.get('/library/downloads').mode, 7, 'Downloads patch targets Desktop UI mode');
assert.ok(windowHooks.length > 0, 'popup creation hook registered');

// Properties live in a secondary Steam popup, not in the main library document.
const popup = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
silenceReactInputPolyfill(popup.window);
const popupDocument = popup.window.document;
popup.window.SteamClient = window.SteamClient;
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
assert.ok(!popupDocument.querySelector('.gx-footer'), 'mods view has no duplicated footer text');
await waitFor(() => launchOptionsCalls.some(call => call.appid === 1966720), 'Gale launch args are applied to Steam launch options automatically');
assert.equal(launchOptionsStore.get(1966720), 'PROTON_LOG=1 %command% -console --doorstop-enable true', 'automatic launch options preserve unrelated user args and add a single %command% separator');
assert.ok(commandPayloads.some(call => call.method === 'launch_plan'), 'launch args come from Gale, not a hardcoded frontend template');
assert.ok(!panel.querySelector('.gx-heading-meta'), 'idle header has no duplicated "Gale connected" label');
assert.equal(popupDocument.getElementById('native').style.display, 'none', 'native panel hidden while mods active');
await waitFor(() => panel.textContent.includes('TestMod'), 'double-encoded mods IPC decoded and rendered');
assert.ok(panel.querySelector('input[aria-label="Search by name or author"]'), 'search row rendered');
assert.ok(panel.querySelector('.gx-search input.DialogInput.DialogTextInputBase'), 'search uses Steam DialogInput classes instead of a bespoke input theme');
assert.equal(panel.querySelectorAll('.gx-toolbar button').length, 2, 'Workshop-style toolbar keeps two bounded columns; refresh moved to the list heading');
assert.ok(panel.querySelector('.gx-list-heading button[aria-label="Refresh list"]'), 'refresh remains reachable from the list heading');
assert.ok(panel.querySelector('img.gx-mod-avatar')?.src.includes('ccdn.thunderstore.io'), 'remote mods use Gale/Thunderstore icon URLs instead of broken local paths');
const toggle = panel.querySelector('input[type="checkbox"]');
assert.ok(toggle, 'mod checkbox rendered');
toggle.click();
await waitFor(() => calls.includes('command:toggle_mod'), 'mod action reached backend');
assert.ok(panel.querySelector('.gx-mod-list'), 'mod list has its own scroll container');
await waitFor(() => panel.querySelector('button[aria-label="Remove"]')?.disabled === false, 'mod actions are idle before opening the context menu');
const modRow = panel.querySelector('.gx-mod-row');
assert.equal(modRow.getAttribute('aria-haspopup'), 'menu', 'mod rows advertise a context menu');
const rightClick = async () => {
  await waitFor(() => !popupDocument.querySelector('.gx-context-menu--root'), 'previous context menu closed');
  await waitFor(() => panel.querySelector('button[aria-label="Remove"]')?.disabled === false, 'mod actions are idle before reopening the context menu');
  modRow.dispatchEvent(new popup.window.MouseEvent('contextmenu', { bubbles: true, cancelable: true, clientX: 120, clientY: 160 }));
  await waitFor(() => popupDocument.querySelector('.gx-context-menu--root'), 'right-click opens the mod context menu');
  return popupDocument.querySelector('.gx-context-menu--root');
};
let ctx = await rightClick();
for (const label of ['Uninstall', 'Change version', 'Change source', 'Show dependants', 'Open folder', 'Edit config', 'Open website', 'Copy link', 'Donate']) assert.ok(ctx.textContent.includes(label), `context menu includes Gale action: ${label}`);
assert.ok(ctx.querySelector('button[data-item-id="uninstall"]').classList.contains('gx-context-menu-item--danger'), 'uninstall is the destructive context action');
ctx.querySelector('button[data-item-id="version"]').click();
await waitFor(() => ctx.querySelector('.gx-context-submenu'), 'Change version opens a submenu');
Array.from(ctx.querySelectorAll('.gx-context-submenu button')).find(button => button.textContent.includes('0.9.0')).click();
await waitFor(() => commandPayloads.some(call => call.method === 'change_mod_version' && call.args.id?.versionUuid === 'v0' && call.args.id?.backend === 'Thunderstore'), 'version submenu calls Gale change_mod_version');
ctx = await rightClick();
ctx.querySelector('button[data-item-id="source"]').click();
await waitFor(() => ctx.querySelector('.gx-context-submenu'), 'Change source opens a submenu');
Array.from(ctx.querySelectorAll('.gx-context-submenu button')).find(button => button.textContent.includes('Hexium (1.1.0)')).click();
await waitFor(() => commandPayloads.some(call => call.method === 'change_mod_version' && call.args.id?.backend === 'Hexium' && call.args.id?.versionUuid === 'hex-v1'), 'source submenu switches backend through Gale');
ctx = await rightClick();
ctx.querySelector('button[data-item-id="dependants"]').click();
await waitFor(() => popupDocument.querySelector('.gx-modal')?.textContent.includes('Dependants of TestMod') && popupDocument.querySelector('.gx-modal')?.textContent.includes('Tester-Dependant'), 'Show dependants opens the Gale dependants dialog');
popupDocument.querySelector('.gx-modal button[aria-label="Close"]').click();
ctx = await rightClick();
ctx.querySelector('button[data-item-id="folder"]').click();
await waitFor(() => commandPayloads.some(call => call.method === 'open_mod_dir' && call.args.uuid === 'p1'), 'Open folder reaches Gale open_mod_dir');
ctx = await rightClick();
ctx.querySelector('button[data-item-id="config"]').click();
await waitFor(() => browserPayloads.some(args => args.file === 'BepInEx/config/test.cfg'), 'Edit config deep-links to the mod config file');
ctx = await rightClick();
ctx.querySelector('button[data-item-id="website"]').click();
await waitFor(() => opened.includes('https://example.com/testmod'), 'Open website uses the mod websiteUrl');
ctx = await rightClick();
ctx.querySelector('button[data-item-id="link"]').click();
await waitFor(() => copied.includes('https://thunderstore.io/c/lethal-company/p/Tester/TestMod/'), 'Copy link copies the Gale community URL');
ctx = await rightClick();
ctx.querySelector('button[data-item-id="donate"]').click();
await waitFor(() => opened.includes('https://example.com/donate'), 'Donate opens the mod donateUrl');
ctx = await rightClick();
ctx.querySelector('button[data-item-id="uninstall"]').click();
await waitFor(() => commandPayloads.some(call => call.method === 'remove_mod' && call.args.uuid === 'p1'), 'context-menu uninstall reaches Gale remove_mod');
// When Steam exposes Menu/MenuItem, use the native context menu instead of the DOM fallback.
const nativeMenus = [];
let nativeHidden = 0;
const NativeSubMenu = ({ children, label }) => React.createElement('div', { 'data-submenu': String(label) }, children);
window.MILLENNIUM_API.Menu = ({ children, label }) => React.createElement('div', { 'data-native-menu': label }, children);
window.MILLENNIUM_API.MenuItem = ({ children, ...props }) => React.createElement('button', props, children);
window.MILLENNIUM_API.findModuleExport = () => NativeSubMenu;
window.MILLENNIUM_API.showContextMenu = (element, target, options) => { nativeMenus.push({ element, target, options }); return { Hide() { nativeHidden++; } }; };
modRow.dispatchEvent(new popup.window.MouseEvent('contextmenu', { bubbles: true, cancelable: true, clientX: 120, clientY: 160 }));
await waitFor(() => nativeMenus.length === 1, 'Steam Menu/MenuItem path is used when available');
assert.equal(popupDocument.querySelector('.gx-context-menu--root'), null, 'native menu does not also render the DOM fallback');
assert.equal(nativeMenus[0].target.clientX, 120, 'native context menu is anchored at the pointer');
assert.equal(nativeMenus[0].options.bFitToWindow, true, 'native context menu asks Steam to fit the window');
assert.equal(nativeMenus[0].element.props.children.length, 9, 'native menu carries all conditional Gale actions');
delete window.MILLENNIUM_API.Menu;
delete window.MILLENNIUM_API.MenuItem;
delete window.MILLENNIUM_API.findModuleExport;
delete window.MILLENNIUM_API.showContextMenu;
const advanced = Array.from(panel.querySelectorAll('button')).find(button => button.textContent.includes('Advanced settings'));
advanced.click();
await waitFor(() => panel.querySelectorAll('.gx-profile-row').length === 3, 'profile management, import/export and config live on separate rows');
const profileRows = panel.querySelectorAll('.gx-profile-row');
assert.ok(profileRows[0].textContent.includes('Create profile') && profileRows[0].querySelector('select[aria-label="Profile"]'), 'row 1 keeps the profile selector and profile management');
assert.ok(profileRows[1].textContent.includes('Import') && profileRows[1].textContent.includes('Export') && !profileRows[1].textContent.includes('Config'), 'row 2 is import/export only');
assert.ok(profileRows[2].textContent.includes('Config') && !profileRows[2].textContent.includes('Import'), 'row 3 is config only');
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
assert.ok(focusCalls.includes('bring') && focusCalls.includes('key'), 'confirmation focuses/raises its own Steam window instead of appearing underneath it');
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

// Current Steam nests the caption in an inner label node and marks selection
// with a hashed CSS-module class. The injected tab must reuse both so it is
// indistinguishable from native tabs (idle and selected).
const hashed = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
silenceReactInputPolyfill(hashed.window);
hashed.window.document.body.insertAdjacentHTML('beforeend', `
  <div role="dialog" data-appid="1966720">
    <div role="tablist" id="hash-list">
      <div class="TabItem SelHash" role="tab" aria-selected="true" aria-controls="g_Content"><div class="TabLabel" role="tab" aria-selected="true" aria-controls="g_Content">General</div></div>
      <div class="TabItem" role="tab" aria-selected="false" aria-controls="u_Content"><div class="TabLabel" role="tab" aria-selected="false" aria-controls="u_Content">Updates</div></div>
      <div class="TabItem" role="tab" aria-selected="false" aria-controls="l_Content"><div class="TabLabel" role="tab" aria-selected="false" aria-controls="l_Content">Installed Files</div></div>
    </div>
    <div role="tabpanel" id="hash-native">native</div>
  </div>`);
for (const hook of windowHooks) hook({ window: hashed.window, m_strName: 'Popup_3', m_strTitle: 'Properties' });
await waitFor(() => hashed.window.document.querySelector('[data-galex-properties="tab"]'), 'hashed/nested properties tab injected');
const hashedTab = hashed.window.document.querySelector('[data-galex-properties="tab"]');
const hashedGeneral = hashed.window.document.querySelector('#hash-list [role="tab"]');
assert.ok(hashedTab.querySelector('.TabLabel')?.textContent === 'Mods', 'injected tab keeps the native inner label node (padding/typography)');
assert.ok(!hashedTab.classList.contains('SelHash'), 'idle injected tab does not carry Steam selected hash');
assert.equal(hashedTab.getAttribute('aria-controls'), hashedTab.querySelector('.TabLabel').getAttribute('aria-controls'), 'inner label aria-controls repointed to the GaleX panel');
hashedTab.click();
await waitFor(() => hashedTab.classList.contains('SelHash'), 'selected injected tab reuses Steam own selected class');
assert.ok(!hashedGeneral.classList.contains('SelHash'), 'previous native tab loses the selected hash while Mods is active');
hashedGeneral.click();
await waitFor(() => !hashedTab.classList.contains('SelHash') && hashedGeneral.classList.contains('SelHash'), 'returning to a native tab restores its selection and clears Mods');
hashed.window.close();

// Real Steam renders each properties page inside a semantic DialogContent
// tabpanel (DialogContent > InnerWidth > DialogHeader + DialogBody). The adapter
// must reuse that live element as the Mods surface instead of hiding it and
// appending a bespoke gx-injected-panel sibling.
const native = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
silenceReactInputPolyfill(native.window);
native.window.document.body.insertAdjacentHTML('beforeend', `
  <div role="dialog" data-appid="1966720">
    <nav role="tablist"><button role="tab" aria-selected="true">General</button><button role="tab" aria-selected="false">Workshop</button></nav>
    <div class="DialogContentTransition">
      <div class="DialogContent _DialogLayout HashContent" role="tabpanel" id="native-content" aria-labelledby="native-tab">
        <div class="DialogContent_InnerWidth">
          <div role="heading" aria-level="2" class="DialogHeader" id="native-header">General</div>
          <div class="DialogBody" id="native-body"><div id="native-child">native controls</div></div>
        </div>
      </div>
    </div>
  </div>`);
for (const hook of windowHooks) hook({ window: native.window, m_strName: 'Popup_4', m_strTitle: 'Properties' });
await waitFor(() => native.window.document.querySelector('[data-galex-properties="tab"]'), 'DialogContent properties tab injected');
assert.equal(native.window.document.querySelector('.gx-injected-panel'), null, 'no bespoke sibling panel is created when a native DialogContent exists');
const nativeTab = native.window.document.querySelector('[data-galex-properties="tab"]');
nativeTab.click();
await waitFor(() => native.window.document.querySelector('.gx-mods'), 'Mods mounts inside the native DialogContent');
const nativeShell = native.window.document.getElementById('native-content');
const nativeBody = native.window.document.getElementById('native-body');
const nativeChild = native.window.document.getElementById('native-child');
const nativeHeader = native.window.document.getElementById('native-header');
assert.equal(native.window.document.querySelector('[data-galex-properties="panel"]'), nativeShell, 'the native DialogContent element itself becomes the Mods panel');
assert.ok(nativeShell.querySelector(':scope > .DialogContent_InnerWidth > .DialogBody > .gx-adopted-mount .gx-mods'), 'React root mounts into the native DialogBody, not a sibling');
assert.equal(nativeChild.style.display, 'none', 'native DialogBody children are hidden while Mods is active');
assert.ok(nativeBody.contains(nativeChild), 'native children are hidden, not removed (Steam React keeps its nodes)');
assert.equal(nativeHeader.textContent, 'Mods', 'native DialogHeader is reused as the Mods title');
assert.equal(native.window.document.querySelector('.gx-mods .gx-heading'), null, 'embedded ModsView does not duplicate the native DialogHeader');
assert.ok(native.window.document.querySelector('.gx-mods--embedded'), 'embedded ModsView drops its own padding so native DialogContent padding applies');
// Steam re-renders the route and replaces the DialogContent node while Mods is
// active. The adapter must re-adopt the live shell, not keep a detached one and
// not let hideNative() hide the replacement before it carries the marker.
nativeShell.remove();
native.window.document.querySelector('.DialogContentTransition').insertAdjacentHTML('beforeend', `
  <div class="DialogContent _DialogLayout HashContent" role="tabpanel" id="native-content" aria-labelledby="native-tab">
    <div class="DialogContent_InnerWidth">
      <div role="heading" aria-level="2" class="DialogHeader" id="native-header">General</div>
      <div class="DialogBody" id="native-body"><div id="native-child">native controls v2</div></div>
    </div>
  </div>`);
await waitFor(() => {
  const shell = native.window.document.getElementById('native-content');
  return shell?.getAttribute('data-galex-properties') === 'panel' && shell.querySelector('.gx-adopted-mount .gx-mods');
}, 'adapter re-adopts the replacement DialogContent after a Steam re-render');
const readopted = native.window.document.getElementById('native-content');
assert.notEqual(readopted, nativeShell, 'a genuinely new DialogContent node was adopted');
assert.notEqual(readopted.style.display, 'none', 're-adopted shell is visible, not hidden by hideNative');
assert.equal(native.window.document.getElementById('native-child').style.display, 'none', 'replacement native children are hidden while Mods is active');
assert.equal(native.window.document.getElementById('native-header').textContent, 'Mods', 'replacement DialogHeader is reused as the Mods title');
native.window.document.querySelector('[role="tablist"] [role="tab"]').click();
await waitFor(() => native.window.document.getElementById('native-child').style.display !== 'none' && native.window.document.getElementById('native-header').textContent === 'General', 'switching to a native tab restores the DialogBody children and header');
assert.equal(readopted.querySelector('.gx-adopted-mount'), null, 'GaleX mount is detached from the native DialogBody on deactivate');
assert.equal(readopted.hasAttribute('data-galex-properties'), false, 'native DialogContent marker is removed on deactivate');
native.window.close();

// Lazy route render: the tablist exists before Steam mounts DialogContent, so the
// first scan builds the fallback sibling. Once DialogContent appears the existing
// injection must upgrade to adopt it and drop the bespoke panel.
const lazy = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
silenceReactInputPolyfill(lazy.window);
lazy.window.document.body.insertAdjacentHTML('beforeend', `
  <div role="dialog" data-appid="1966720">
    <nav role="tablist"><button role="tab" aria-selected="true">General</button><button role="tab" aria-selected="false">Workshop</button></nav>
    <div class="TabContent" id="lazy-native">native controls</div>
  </div>`);
for (const hook of windowHooks) hook({ window: lazy.window, m_strName: 'Popup_5', m_strTitle: 'Properties' });
await waitFor(() => lazy.window.document.querySelector('[data-galex-properties="tab"]'), 'lazy properties tab injected');
lazy.window.document.querySelector('[data-galex-properties="tab"]').click();
await waitFor(() => lazy.window.document.querySelector('.gx-injected-panel .gx-mods'), 'fallback sibling panel used while DialogContent is absent');
lazy.window.document.querySelector('[role="dialog"]').insertAdjacentHTML('beforeend', `
  <div class="DialogContentTransition">
    <div class="DialogContent _DialogLayout" role="tabpanel" id="lazy-content" aria-labelledby="lazy-tab">
      <div class="DialogContent_InnerWidth">
        <div role="heading" aria-level="2" class="DialogHeader" id="lazy-header">General</div>
        <div class="DialogBody" id="lazy-body"><div id="lazy-child">native controls</div></div>
      </div>
    </div>
  </div>`);
await waitFor(() => {
  const shell = lazy.window.document.getElementById('lazy-content');
  return shell?.getAttribute('data-galex-properties') === 'panel' && shell.querySelector('.gx-adopted-mount .gx-mods') && !lazy.window.document.querySelector('.gx-injected-panel');
}, 'fallback injection upgrades to the native DialogContent once Steam mounts it');
assert.equal(lazy.window.document.getElementById('lazy-child').style.display, 'none', 'upgraded adoption hides native DialogBody children');
assert.equal(lazy.window.document.getElementById('lazy-header').textContent, 'Mods', 'upgraded adoption reuses the native DialogHeader');
lazy.window.document.querySelector('[role="tablist"] [role="tab"]').click();
await waitFor(() => lazy.window.document.getElementById('lazy-child').style.display !== 'none', 'deactivating upgraded adoption restores native children');
lazy.window.close();

// The Thunderstore install dialog must mount in the visible main Steam window,
// not in the hidden SharedJSContext document that loaded the plugin.
const mainSteam = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
silenceReactInputPolyfill(mainSteam.window);
mainSteam.window.SteamClient = window.SteamClient;
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

progressSnapshot = { active: true, networkBytesPerSecond: 2048, diskBytesPerSecond: 4096, history: [{ at: 1, network: 1024, disk: 2048 }, { at: 2, network: 2048, disk: 4096 }], tasks: [{ id: 'op-1', kind: 'install', slug: 'lethal-company', gameName: 'Lethal Company', steamAppId: 1966720, profileId: 1, profileName: 'Default', status: 'active', startedAt: 1, totalBytes: 100, completedBytes: 40, totalMods: 1, completedMods: 0, currentMod: 'LinkMod', phase: 'download' }] };
const downloadsRoute = routePatches.get('/library/downloads').patch({ children: React.createElement('div', null, 'native Steam downloads') });
const downloadsHost = mainSteam.window.document.createElement('div'); mainSteam.window.document.body.appendChild(downloadsHost);
const downloadsRoot = ReactDOM.createRoot(downloadsHost); downloadsRoot.render(downloadsRoute.children);
await waitFor(() => downloadsHost.querySelector('[data-galex-download]'), 'Steam Downloads route shows the measured Gale operation');
assert.equal(downloadsHost.querySelector('[data-galex-download]').dataset.appid, '1966720', 'fake download is associated with the real Steam game');
assert.ok(downloadsHost.textContent.includes('Lethal Company') && downloadsHost.textContent.includes('native Steam downloads'), 'Gale card keeps the real game name and native Steam downloads');
assert.ok(downloadsHost.querySelector('[data-progress="40"]'), 'progress percentage comes from measured Gale bytes');
assert.ok(downloadsHost.querySelectorAll('.gx-sparkline svg').length === 2, 'network and disk graphs are rendered from backend samples');
downloadsRoot.unmount(); downloadsHost.remove();

const settingsHost = document.createElement('div'); document.body.appendChild(settingsHost);
const settingsRoot = ReactDOM.createRoot(settingsHost); settingsRoot.render(settings.content);
await waitFor(() => settingsHost.textContent.includes('Gale 1.23.3'), 'global settings decode snapshot/prefs/config replies');
assert.ok(calls.includes('command:prefs') && calls.includes('get_config'));
// Non-Steam override: persist a shortcut AppID -> Gale slug mapping and inject
// the Mods tab into a shortcut properties popup that has no official Steam AppID.
const manualInput = settingsHost.querySelector('input[aria-label="Shortcut AppID"]');
const gameSelect = settingsHost.querySelector('select[aria-label="Gale game"]');
assert.ok(manualInput && gameSelect, 'non-Steam override controls rendered');
Simulate.change(manualInput, { target: { value: '3422480235' } });
Simulate.change(gameSelect, { target: { value: 'lethal-company' } });
await sleep(30);
await waitFor(() => Array.from(settingsHost.querySelectorAll('button')).some(button => button.textContent.includes('Save override') && !button.disabled), 'override save enabled');
Array.from(settingsHost.querySelectorAll('button')).find(button => button.textContent.includes('Save override')).click();
await waitFor(() => settingsHost.textContent.includes('3422480235'), 'override listed in settings: ' + settingsHost.textContent.slice(0, 400));
assert.equal(JSON.parse(window.localStorage.getItem('galex:client-settings:v1')).nonSteamOverrides['3422480235'], 'lethal-company');
window.appStore.m_mapApps.set(3422480235, { appid: 3422480235, display_name: 'Lethal Company Shortcut', BIsShortcut: () => true, app_type: 1073741824 });
const shortcut = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://steamloopback.host/', pretendToBeVisual: true });
silenceReactInputPolyfill(shortcut.window);
shortcut.window.SteamClient = window.SteamClient;
shortcut.window.document.body.insertAdjacentHTML('beforeend', `
  <div role="dialog" data-appid="3422480235">
    <nav role="tablist"><button role="tab">General</button><button role="tab">Shortcut</button></nav>
    <div role="tabpanel">shortcut native</div>
  </div>`);
for (const hook of windowHooks) hook({ window: shortcut.window, m_strName: 'Popup_6', m_strTitle: 'Properties' });
await waitFor(() => shortcut.window.document.querySelector('[data-galex-properties="tab"]'), 'non-Steam override injects Mods tab for unsigned shortcut AppID');
shortcut.window.document.querySelector('[data-galex-properties="tab"]').click();
await waitFor(() => shortcut.window.document.querySelector('.gx-mods'), 'shortcut Mods panel activated');
await waitFor(() => launchOptionsCalls.some(call => call.appid === 3422480235 && call.shortcut), 'shortcut launch options use SetShortcutLaunchOptions');
settingsRoot.unmount(); settingsHost.remove();

// A locked Gale session keeps the cached Mods tab but replaces the mod list
// with a recovery screen; Retry restarts the headless child and recovers.
snapshotFailure = { ok: false, error: 'Gale session is locked. Close desktop Gale before using GaleX.', code: 'gale_session_locked' };
window.PLUGIN_LIST.GaleX.linkQueued('{}');
await waitFor(() => popupDocument.querySelector('.gx-connection-error'), 'locked session renders the Mods error screen', 6000);
assert.ok(popupDocument.querySelector('.gx-connection-error').textContent.includes('Gale session is locked'), 'lock screen explains the shared-session conflict');
Array.from(popupDocument.querySelectorAll('.gx-connection-error button')).find(button => button.textContent.includes('Try again')).click();
await waitFor(() => !popupDocument.querySelector('.gx-connection-error') && popupDocument.querySelector('.gx-mod-row'), 'Retry recovers the mod list after the lock is released', 6000);
shortcut.window.close();

window.GaleX.dispose();
await waitFor(() => !popupDocument.querySelector('[data-galex-properties="tab"]') && !popupDocument.querySelector('[data-galex-properties="panel"]') && !modern.window.document.querySelector('[data-galex-properties="tab"]') && !russian.window.document.querySelector('[data-galex-properties="tab"]'), 'dispose removes injected tabs and panels from every popup');
assert.equal(window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.GaleX, undefined, 'dispose unregisters settings');
assert.equal(routePatches.size, 0, 'dispose removes the Downloads route patch');
assert.ok(nativeHidden >= 1, 'unmount hides any still-open native Steam context menu');
assert.equal(modern.window.document.querySelector('[data-galex-properties="tab"]'), null, 'dispose cleans modern popup');
assert.equal(russian.window.document.querySelector('[data-galex-properties="tab"]'), null, 'dispose cleans Russian popup');
console.log('✓ plugin bundle: script auto-start, backend notification, Millennium 3.6.1 IPC, classic/modern/Russian properties tabs, mod UI, focused confirmations, measured Steam downloads card, settings, cached games, session-lock recovery, non-Steam overrides, automatic Steam launch options, cleanup');
console.log('  (Steam/Millennium runtime is mocked; real CEF/theme acceptance is still required)');
mainSteam.window.close();
popup.window.close();
modern.window.close();
russian.window.close();
window.close();
