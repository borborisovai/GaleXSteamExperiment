const P = window.SP_REACT;
P || console.error("[GaleX] window.SP_REACT is missing — is Millennium loaded?");
const Q = P.createElement;
P.cloneElement;
const ia = P.createContext;
P.createRef;
P.forwardRef;
P.memo;
const ra = P.useCallback, la = P.useContext;
P.useDebugValue;
P.useDeferredValue;
const q = P.useEffect;
P.useId;
P.useImperativeHandle;
const sa = P.useLayoutEffect, eo = P.useMemo;
P.useReducer;
const qe = P.useRef, w = P.useState, ht = P.useSyncExternalStore;
P.useTransition;
const da = P.Component;
P.PureComponent;
P.Fragment;
P.StrictMode;
P.Suspense;
P.Children;
P.isValidElement;
P.version;
const _e = window.SP_REACTDOM, ct = (e) => typeof _e?.createRoot == "function" ? _e.createRoot(e) : {
  render(t) {
    _e.render(t, e);
  },
  unmount() {
    _e.unmountComponentAtNode?.(e);
  }
}, to = _e.createPortal;
_e.flushSync;
const rt = window.SP_REACT, An = window.SP_JSX_FACTORY;
function qt(e, t, n) {
  const { children: a, ...l } = t ?? {};
  return n !== void 0 && (l.key = n), a === void 0 ? rt.createElement(e, l) : Array.isArray(a) ? rt.createElement(e, l, ...a) : rt.createElement(e, l, a);
}
const Ee = typeof An?.jsx == "function" ? An : void 0, Z = Ee?.Fragment ?? rt.Fragment, i = Ee ? Ee.jsx : qt, p = Ee?.jsxs ?? qt;
Ee && Ee.jsx;
const Nn = {
  package: "M12 3 3 7.5v9L12 21l9-4.5v-9L12 3Zm0 0 9 4.5M12 3 3 7.5m9-4.5v18m9-13.5-9 4.5-9-4.5",
  store: "M3 9h18M5 9V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M4 9h16l1 6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3l1-6Zm5 3v2m6-2v2",
  download: "M12 4v10m0 0 4-4m-4 4-4-4M5 19h14",
  refresh: "M20 12a8 8 0 1 1-2.5-5.8M20 4v5h-5",
  trash: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M10 11v6m4-6v6",
  check: "M4 12.5 9 17.5 20 6.5",
  x: "M6 6l12 12M18 6 6 18",
  "chevron-down": "M6 9.5 12 15.5 18 9.5",
  "chevron-right": "M9.5 6 15.5 12 9.5 18",
  "chevron-left": "M14.5 6 8.5 12 14.5 18",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm6.5-1.5L22 22",
  settings: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8.4-3.5c0-.5 0-1-.1-1.5l2-1.5-2-3.4-2.3 1a8 8 0 0 0-2.6-1.5L14.9 2H9.1l-.5 2.6A8 8 0 0 0 6 6.1l-2.3-1-2 3.4 2 1.5a9 9 0 0 0 0 3l-2 1.5 2 3.4 2.3-1a8 8 0 0 0 2.6 1.5l.5 2.6h5.8l.5-2.6a8 8 0 0 0 2.6-1.5l2.3 1 2-3.4-2-1.5c.1-.5.1-1 .1-1.5Z",
  layers: "M12 3 3 8l9 5 9-5-9-5Zm-9 8 9 5 9-5M3 16l9 5 9-5",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2.5h6a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z",
  play: "M8 5.5 18.5 12 8 18.5v-13Z",
  warning: "M12 4 2.5 20h19L12 4Zm0 5v6m0 3v.5",
  lock: "M7 11V8a5 5 0 0 1 10 0v3M5 11h14v10H5V11Zm7 4v2",
  info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v.5m0 3.5v5",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3.5 2",
  star: "M12 3.5l2.7 5.6 6.1.8-4.5 4.2 1.2 6-5.5-3-5.5 3 1.2-6L3.2 9.9l6.1-.8L12 3.5Z",
  plus: "M12 5v14M5 12h14",
  copy: "M9 9V5.5a1.5 1.5 0 0 1 1.5-1.5H19a1.5 1.5 0 0 1 1.5 1.5V14a1.5 1.5 0 0 1-1.5 1.5h-3.5M4 10.5A1.5 1.5 0 0 1 5.5 9H14a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 14 21H5.5A1.5 1.5 0 0 1 4 19.5v-9Z",
  external: "M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
  sliders: "M4 8h9m4 0h3M4 16h3m4 0h9M13 5v6M8 13v6",
  terminal: "M4 5h16v14H4V5Zm3.5 4.5 3 2.5-3 2.5M12.5 15h4",
  grid: "M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z",
  list: "M4 6h16M4 12h16M4 18h16",
  "arrow-up": "M12 19V5m0 0-6 6m6-6 6 6",
  "arrow-down": "M12 5v14m0 0 6-6m-6 6-6-6",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.4 4 5.6 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.6-4-9s1.5-6.6 4-9Z",
  power: "M12 3v9m5.7-6.7a9 9 0 1 1-11.4 0",
  sparkles: "M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Zm7 10 .9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9L19 13Z",
  filter: "M4 6h16l-6 7v6l-4-2v-4L4 6Z",
  cart: "M3 5h2l2.4 10.4A2 2 0 0 0 9.3 17h8.4a2 2 0 0 0 2-1.6L21 8H6M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  "arrow-right": "M5 12h14m0 0-6-6m6 6-6 6",
  pin: "M12 15v6m0-6a4 4 0 0 0 4-4V4H8v7a4 4 0 0 0 4 4Zm-6-7h12",
  heart: "M12 20s-7-4.6-9.2-8.8C1.2 8.2 3 5 6.4 5c2 0 3.4 1.1 4.1 2.2l1.5 2 1.5-2C14.2 6.1 15.6 5 17.6 5 21 5 22.8 8.2 21.2 11.2 19 15.4 12 20 12 20Z",
  link: "M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2",
  branch: "M6 4v10a4 4 0 0 0 4 4h8M6 4a2 2 0 1 0 0 .01M18 18a2 2 0 1 0 0 .01M18 6a2 2 0 1 0 0 .01M18 8v4a4 4 0 0 1-4 4h-4"
}, ca = {
  download: "Download",
  refresh: "Refresh",
  trash: "Trash",
  check: "Checkmark",
  x: "Close",
  "chevron-down": "ChevronDown",
  "chevron-right": "ChevronRight",
  search: "Search",
  settings: "Settings",
  folder: "Folder",
  play: "Play",
  warning: "Warning",
  lock: "Lock",
  info: "Info",
  clock: "Clock",
  star: "Star",
  plus: "Add",
  copy: "Copy",
  external: "ExternalLink",
  "arrow-up": "ArrowUp",
  "arrow-down": "ArrowDown",
  filter: "Filter",
  "arrow-right": "ArrowRight",
  pin: "Pin",
  package: "Library"
};
function J({ name: e, size: t = 18, className: n, strokeWidth: a = 1.6 }) {
  const l = window.MILLENNIUM_API?.IconsModule?.[ca[e] ?? ""], s = eo(() => Nn[e] ?? Nn.info, [e]);
  return typeof l == "function" ? /* @__PURE__ */ i(l, { width: t, height: t, className: n, "aria-hidden": "true", focusable: "false" }) : /* @__PURE__ */ i(
    "svg",
    {
      className: n,
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: a,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ i("path", { d: s })
    }
  );
}
class Ze extends Error {
  constructor(t, n, a) {
    super(t), this.code = n, this.details = a, this.name = "BridgeError";
  }
}
function pa(e) {
  let t = e;
  for (let n = 0; n < 2 && typeof t == "string"; n++)
    try {
      t = JSON.parse(t);
    } catch {
      throw new Error("Invalid GaleX JSON reply from Millennium");
    }
  if (typeof t != "object" || t === null || Array.isArray(t) || typeof t.ok != "boolean")
    throw new Error("Invalid GaleX reply from Millennium");
  return t;
}
const Mn = {
  english: "en",
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  russian: "ru",
  ru: "ru",
  "ru-ru": "ru"
}, _t = /* @__PURE__ */ new Set();
let Qe = "en", no = "english";
function oo(e) {
  return String(e ?? "").trim().toLowerCase().replace(/_/g, "-");
}
function ua(e) {
  const t = oo(e);
  return Mn[t] ?? Mn[t.split("-")[0]] ?? "en";
}
function ga(e) {
  no = oo(e) || "english";
  const t = ua(e);
  t !== Qe && (Qe = t, _t.forEach((n) => n()));
}
function Et() {
  return Qe;
}
function ma() {
  return no;
}
function pt(e) {
  const n = {
    "Некорректная команда": "invalidCommand",
    "Не выбрана игра": "noGame",
    "Некорректный контекст": "invalidContext",
    "Некорректная ссылка": "invalidLink",
    "Поддерживаются только ссылки установки Thunderstore": "onlyThunderstore",
    "Слишком много ожидающих ссылок": "tooManyLinks",
    "Некорректный путь": "invalidPath",
    "Не удалось сохранить настройки": "saveSettingsFailed",
    "Gale ещё завершает установки. Повторите перезапуск позже.": "galeFinishing",
    "Не удалось определить процесс Millennium": "millenniumPid",
    "Millennium API недоступен": "millenniumMissing",
    "Headless Gale запускается. Если запуск не завершается, проверьте путь к сборке GaleX и закройте настольный Gale.": "bridgeStarting",
    "Нет связи с headless Gale": "bridgeUnavailable",
    "Gale session is locked. Close desktop Gale before using GaleX.": "sessionLockedBody",
    "GALEX_SESSION_LOCKED: Gale session is locked. Close desktop Gale before using GaleX.": "sessionLockedBody",
    "Invalid GaleX JSON reply from Millennium": "invalidRpcJson",
    "Invalid GaleX reply from Millennium": "invalidRpcEnvelope",
    "Некорректный JSON-ответ GaleX от Millennium": "invalidRpcJson",
    "Некорректный ответ GaleX от Millennium": "invalidRpcEnvelope"
  }[e];
  if (n) return o(n);
  if (e.startsWith("Не найдена headless-сборка Gale")) return o("missingBuild");
  if (e.includes("GALEX_SESSION_LOCKED") || e.includes("Gale уже открыт")) return o("sessionLockedBody");
  const a = e.match(/^Некорректный ответ Gale \((\d+)\)$/);
  return a ? o("invalidGaleResponse", { status: a[1] }) : e.startsWith("Не удалось запустить headless Gale; см. ") ? o("launchFailed", { path: e.slice(40) }) : e;
}
function Te() {
  return ht((e) => (_t.add(e), () => _t.delete(e)), Et, Et);
}
async function fa(e = window) {
  let t;
  try {
    const n = e.SteamClient?.Settings;
    typeof n?.GetCurrentLanguage == "function" && (t = await n.GetCurrentLanguage());
  } catch {
  }
  if (!t)
    try {
      const n = e.LocalizationManager;
      t = n?.m_rgLocalesToUse?.[0] ?? n?.m_strCurrentLanguage;
    } catch {
    }
  return ga(t ?? "english"), Qe;
}
const ao = {
  mods: "Mods",
  workshop: "Community workshop",
  connected: "Gale connected",
  demo: "demo",
  openThunderstore: "Open Thunderstore",
  advanced: "Advanced settings",
  refresh: "Refresh list",
  profile: "Profile",
  createProfile: "Create profile",
  renameProfile: "Rename",
  duplicateProfile: "Duplicate",
  deleteProfile: "Delete profile",
  import: "Import",
  export: "Export",
  config: "Config",
  profileTransfer: "Profile transfer",
  modConfiguration: "Mod configuration",
  searchMods: "Search by name or author",
  clearSearch: "Clear search",
  filter: "Filter",
  sortBy: "Sort by",
  ascending: "Ascending",
  descending: "Descending",
  categories: "Categories",
  allCategories: "All categories",
  all: "All mods",
  enabled: "Enabled",
  disabled: "Disabled",
  updates: "Updates",
  byName: "Name",
  byAuthor: "Author",
  byInstallDate: "Install date",
  bySize: "Size",
  byDownloads: "Downloads",
  modCount: "{count} mods",
  enabledCount: "{count} enabled",
  updateAll: "Update all ({count})",
  loading: "Loading mods…",
  noMods: "No mods found",
  dependsOn: "Depends on",
  tags: "Tags",
  local: "Local",
  update: "Update",
  versions: "Versions",
  remove: "Remove",
  openConfig: "Edit config",
  uninstall: "Uninstall",
  changeVersion: "Change version",
  changeSource: "Change source",
  showDependants: "Show dependants",
  openFolder: "Open folder",
  openWebsite: "Open website",
  copyLink: "Copy link",
  donate: "Donate",
  modActions: "Mod actions",
  linkCopied: "Copied mod link to clipboard.",
  folderOpened: "Mod folder opened",
  dependantsTitle: "Dependants of {name}",
  noDependants: "No dependants found",
  preferredVersion: "Requires {version}",
  demoFolder: "Demo: the mod folder opens in Steam.",
  cancel: "Cancel",
  confirm: "Confirm",
  close: "Close",
  done: "Done",
  retry: "Retry",
  working: "Working…",
  save: "Save",
  profileSaved: "Profile saved",
  stateChanged: "Mod state changed",
  modRemoved: "Mod removed",
  disableMod: "Disable {name}?",
  disableDependants: "Other enabled mods depend on this one. They may stop working too.",
  removeMod: "Remove {name}?",
  removeDependants: "Other mods depend on this one. Remove them together?",
  deleteProfileTitle: "Delete profile",
  deleteProfileBody: "Profile “{name}” and its mods will be deleted. This cannot be undone.",
  createProfileTitle: "Create profile",
  renameProfileTitle: "Rename profile",
  duplicateProfileTitle: "Duplicate profile",
  profileName: "Profile name",
  importTitle: "Import profile",
  importPreview: "Review profile",
  importCode: "Profile code",
  importCodePlaceholder: "Paste a Gale / r2modman export code",
  importFile: "Choose .r2z file",
  importFileButton: "Select profile file (.r2z)",
  profileFileDialog: "Import Gale profile",
  profileFileFilter: "Gale / r2modman profile",
  localFileDialog: "Import local mod",
  localFileFilter: "Mod archive",
  allFiles: "All files",
  importR2: "r2modman / TMM",
  importLocal: "Local mod",
  importLocalFile: "Choose mod .zip",
  r2Path: "r2modman data folder",
  r2Load: "Find profiles",
  r2Profiles: "Profiles to import",
  importAllFiles: "Import all files (trusted profiles only)",
  mergeProfiles: "Merge with existing profile",
  overwriteProfile: "Overwrite existing",
  newProfile: "Create new",
  continue: "Continue",
  installProfile: "Install profile",
  importing: "Importing…",
  missingMods: "Not found: {mods}. They will be skipped.",
  modsToInstall: "{count} mods to install",
  exportTitle: "Export profile",
  exportIntro: "Share this code so another user can install the profile.",
  copyCode: "Copy code",
  codeCopied: "Code copied",
  exportFile: "Download .r2z",
  exportFiles: "Included config files",
  exportFilesHint: "Unchecked files are omitted from codes and archives.",
  totalSize: "Total size: {size}",
  copyDependencies: "Copy dependency strings",
  dependenciesCopied: "Dependency strings copied",
  copyDebug: "Copy debug info",
  debugCopied: "Debug info copied",
  exportTooLarge: "The profile is too large for a code. Exclude files below or download a .r2z archive.",
  versionTitle: "Version · {name}",
  currentVersion: "Current version: {version}",
  installed: "installed",
  versionQueued: "Version change completed",
  updateQueued: "Updates completed",
  configOpened: "Config editor opened in Steam",
  linkTitle: "Install from Thunderstore",
  linkChecking: "Checking package in Gale…",
  linkProfile: "Install to profile",
  linkInstall: "Install mod",
  linkInstalling: "Installing…",
  linkDeps: "Gale will install dependencies. Game: {game}.",
  linkQueued: "Link sent to Steam. Choose a profile to install.",
  linkOpenPackage: "Open a package page on Thunderstore.",
  settingsTitle: "Plugin settings",
  settingsIntro: "Mods in Steam. Profiles, downloads and configs use your existing Gale data.",
  connection: "Connection",
  headlessGale: "Headless Gale",
  headlessHint: "Starts and stops with the plugin",
  noConnection: "Not connected",
  galePath: "Path to headless Gale build",
  galePathPlaceholder: "Leave empty to use the build inside the plugin",
  saveRestart: "Save and restart",
  galePathHint: "The regular Gale build has no bridge. Use the build from this repository; it shares existing Gale data.",
  dataDir: "Gale data folder",
  dataDirHint: "Shared database and profiles. Move files in Gale.",
  galeGames: "Gale games",
  galeGamesHint: "The Mods tab appears in properties of games with a matching Steam AppID.",
  behavior: "Gale behavior",
  galePreferences: "Gale preferences",
  galePreferencesHint: "Shared with the desktop Gale app",
  interfaceScale: "Interface scale",
  language: "Language",
  languageAuto: "Follow Steam",
  fetchAuto: "Fetch catalog automatically",
  fetchAutoHint: "Load the mod list when a game is selected",
  pullBeforeLaunch: "Pull synced profile before launch",
  pullBeforeLaunchHint: "Uses Gale’s pull-before-launch setting",
  skipBackendConfirm: "Skip source-change confirmation",
  skipBackendConfirmHint: "Thunderstore / Hexium — shared Gale setting",
  prefsLoading: "Settings appear after connecting to Gale.",
  downloads: "Downloads",
  downloadCache: "Download cache",
  downloadCacheHint: "Remove unused files only. Installed mods stay.",
  clearCache: "Clear cache",
  cacheCleared: "Freed {size}",
  settingsBottom: "Do not run desktop Gale at the same time as GaleX.",
  checkConnection: "Check connection",
  savedInGale: "Saved in Gale",
  pathSaved: "Path saved. Restart requested.",
  backendMissing: "Gale backend is not connected. Reload the GaleX plugin.",
  bridgeNoReply: "Gale bridge did not reply",
  invalidBrowserUrl: "Invalid browser address",
  millenniumMissing: "Millennium API is unavailable",
  bridgeStarting: "Headless Gale is starting. If it does not finish, check the GaleX build path and close desktop Gale.",
  bridgeUnavailable: "Cannot reach headless Gale",
  invalidGaleResponse: "Invalid Gale response ({status})",
  invalidRpcJson: "Invalid GaleX JSON reply from Millennium",
  invalidRpcEnvelope: "Invalid GaleX reply from Millennium",
  incompatibleBridge: "Incompatible Gale bridge version",
  crashTitle: "Could not display this section",
  crashBody: "Try opening the section again. If an operation was already running, check the list before retrying.",
  missingBuild: "Headless Gale build not found. Build it with scripts/build-gale, or set the path in GaleX settings.",
  millenniumPid: "Could not identify the Millennium process",
  launchFailed: "Could not start headless Gale; see {path}",
  invalidCommand: "Invalid command",
  noGame: "No game selected",
  invalidContext: "Invalid context",
  invalidLink: "Invalid link",
  onlyThunderstore: "Only Thunderstore install links are supported",
  tooManyLinks: "Too many pending links",
  invalidPath: "Invalid path",
  saveSettingsFailed: "Could not save settings",
  galeFinishing: "Gale is still finishing installs. Try restarting later.",
  fileTooLarge: "Maximum file size is 15 MiB",
  fileReadError: "Could not read file",
  clipboardError: "Could not copy to clipboard",
  sessionLockedTitle: "Gale session is locked",
  sessionLockedBody: "Close desktop Gale before using GaleX. Both apps share the same database and profiles, so only one can run at a time.",
  connectionErrorTitle: "Gale is unavailable",
  connectionErrorBody: "The Mods tab stays available from the cached game list, but mod operations need the headless Gale backend.",
  retryConnection: "Try again",
  openSettings: "Open plugin settings",
  cachedGames: "Cached game list",
  cachedGamesHint: "{count} supported games cached {when}. The tab remains available while Gale is offline.",
  cachedGamesEmpty: "No cached games yet. Connect to Gale once to cache the supported game list.",
  clearGameCache: "Clear game cache",
  gameCacheCleared: "Game cache cleared",
  never: "never",
  justNow: "just now",
  nonSteamOverrides: "Non-Steam shortcuts",
  nonSteamHint: "Map a Steam shortcut to a Gale game. The Mods tab and automatic launch options then use the shortcut AppID.",
  shortcutAppId: "Steam shortcut",
  galeGame: "Gale game",
  manualAppId: "Shortcut AppID",
  saveOverride: "Save override",
  removeOverride: "Remove override",
  overrideSaved: "Shortcut override saved",
  overrideRemoved: "Shortcut override removed",
  noShortcuts: "No non-Steam shortcuts detected. Enter the AppID manually.",
  invalidAppId: "Enter a valid Steam AppID",
  autoLaunchOptions: "Apply launch options automatically",
  autoLaunchOptionsHint: "When a profile or mod list changes, GaleX writes the mod-loader arguments into Steam launch options and preserves unrelated user arguments.",
  launchOptionsApplied: "Steam launch options updated",
  launchOptionsFailed: "Could not apply Steam launch options: {error}",
  launchOptionsUnavailable: "Steam launch-options API is unavailable",
  launchOptionsChanged: "Steam launch options changed outside GaleX; open the Mods tab to reapply.",
  demoConfig: "The config editor is the upstream Gale UI and opens in Steam.",
  demoUpdate: "Demo: updates installed",
  demoLaunch: "Game launch is unavailable in the browser demo.",
  galeDownloads: "GaleX downloads",
  galeDownloadsHint: "Mod operations measured by Gale. This is not a Steam game update.",
  noGaleDownloads: "No GaleX operations are running.",
  network: "Network",
  disk: "Disk",
  cancelDownloads: "Cancel installs",
  openDownloads: "Open Steam downloads",
  operationInProgress: "Gale is working in the background.",
  task_install: "Installing mods",
  task_update: "Updating mods",
  task_import: "Importing profile",
  task_local_import: "Importing local mod",
  task_read_profile: "Reading profile",
  task_export: "Exporting profile",
  phase_starting: "Starting",
  phase_download: "Downloading",
  phase_extract: "Extracting",
  phase_install: "Installing",
  phase_done: "Completed",
  phase_error: "Failed",
  bytesGb: "{value} GB",
  bytesMb: "{value} MB",
  bytesKb: "{value} KB"
}, ha = {
  mods: "Моды",
  workshop: "Мастерская сообщества",
  connected: "Gale подключён",
  demo: "демо",
  openThunderstore: "Открыть Thunderstore",
  advanced: "Расширенные настройки",
  refresh: "Обновить список",
  profile: "Профиль",
  createProfile: "Создать профиль",
  renameProfile: "Переименовать",
  duplicateProfile: "Дублировать",
  deleteProfile: "Удалить профиль",
  import: "Импорт",
  export: "Экспорт",
  config: "Конфиг",
  profileTransfer: "Перенос профиля",
  modConfiguration: "Конфигурация мода",
  searchMods: "Поиск по названию или автору",
  clearSearch: "Очистить поиск",
  filter: "Фильтр",
  sortBy: "Сортировка",
  ascending: "По возрастанию",
  descending: "По убыванию",
  categories: "Категории",
  allCategories: "Все категории",
  all: "Все моды",
  enabled: "Включённые",
  disabled: "Отключённые",
  updates: "Обновления",
  byName: "По названию",
  byAuthor: "По автору",
  byInstallDate: "По дате установки",
  bySize: "По размеру",
  byDownloads: "По загрузкам",
  modCount: "{count} модов",
  enabledCount: "{count} включено",
  updateAll: "Обновить все ({count})",
  loading: "Загрузка модов…",
  noMods: "Моды не найдены",
  dependsOn: "Зависит от",
  tags: "Теги",
  local: "Локальный",
  update: "Обновить",
  versions: "Версии",
  remove: "Удалить",
  openConfig: "Изменить конфиг",
  uninstall: "Удалить",
  changeVersion: "Сменить версию",
  changeSource: "Сменить источник",
  showDependants: "Показать зависимые моды",
  openFolder: "Открыть папку",
  openWebsite: "Открыть сайт",
  copyLink: "Скопировать ссылку",
  donate: "Поддержать автора",
  modActions: "Действия с модом",
  linkCopied: "Ссылка на мод скопирована в буфер обмена.",
  folderOpened: "Папка мода открыта",
  dependantsTitle: "Моды, зависящие от {name}",
  noDependants: "Зависимых модов нет",
  preferredVersion: "Требуется {version}",
  demoFolder: "Демо: папка мода открывается в Steam.",
  cancel: "Отмена",
  confirm: "Подтвердить",
  close: "Закрыть",
  done: "Готово",
  retry: "Повторить",
  working: "Выполняется…",
  save: "Сохранить",
  profileSaved: "Профиль сохранён",
  stateChanged: "Состояние модов изменено",
  modRemoved: "Мод удалён",
  disableMod: "Отключить {name}?",
  disableDependants: "От этого мода зависят другие включённые моды. Они тоже могут перестать работать.",
  removeMod: "Удалить {name}?",
  removeDependants: "От этого мода зависят другие моды. Удалить их вместе?",
  deleteProfileTitle: "Удалить профиль",
  deleteProfileBody: "Профиль «{name}» и его моды будут удалены. Это действие нельзя отменить.",
  createProfileTitle: "Создать профиль",
  renameProfileTitle: "Переименовать профиль",
  duplicateProfileTitle: "Дублировать профиль",
  profileName: "Название профиля",
  importTitle: "Импорт профиля",
  importPreview: "Проверьте профиль",
  importCode: "Код профиля",
  importCodePlaceholder: "Вставьте код экспорта Gale / r2modman",
  importFile: "Выбрать файл .r2z",
  importFileButton: "Выбрать файл профиля (.r2z)",
  profileFileDialog: "Импорт профиля Gale",
  profileFileFilter: "Профиль Gale / r2modman",
  localFileDialog: "Импорт локального мода",
  localFileFilter: "Архив мода",
  allFiles: "Все файлы",
  importR2: "r2modman / TMM",
  importLocal: "Локальный мод",
  importLocalFile: "Выбрать .zip мода",
  r2Path: "Папка данных r2modman",
  r2Load: "Найти профили",
  r2Profiles: "Профили для импорта",
  importAllFiles: "Импортировать все файлы (только доверенные профили)",
  mergeProfiles: "Объединить с существующим профилем",
  overwriteProfile: "Перезаписать существующий",
  newProfile: "Создать новый",
  continue: "Продолжить",
  installProfile: "Установить профиль",
  importing: "Импорт…",
  missingMods: "Не найдены: {mods}. Они будут пропущены.",
  modsToInstall: "{count} модов к установке",
  exportTitle: "Экспорт профиля",
  exportIntro: "Поделитесь кодом, чтобы другой пользователь установил этот профиль.",
  copyCode: "Скопировать код",
  codeCopied: "Код скопирован",
  exportFile: "Скачать .r2z",
  exportFiles: "Включаемые файлы конфигов",
  exportFilesHint: "Снимите отметку, чтобы исключить файл из кодов и архивов.",
  totalSize: "Общий размер: {size}",
  copyDependencies: "Скопировать строки зависимостей",
  dependenciesCopied: "Строки зависимостей скопированы",
  copyDebug: "Скопировать отладочную информацию",
  debugCopied: "Отладочная информация скопирована",
  exportTooLarge: "Профиль слишком большой для кода. Исключите файлы ниже или скачайте архив .r2z.",
  versionTitle: "Версия · {name}",
  currentVersion: "Текущая версия: {version}",
  installed: "установлена",
  versionQueued: "Смена версии завершена",
  updateQueued: "Обновления завершены",
  configOpened: "Редактор конфигов открыт в Steam",
  linkTitle: "Установка из Thunderstore",
  linkChecking: "Проверяем пакет в Gale…",
  linkProfile: "Профиль установки",
  linkInstall: "Установить мод",
  linkInstalling: "Установка…",
  linkDeps: "Зависимости установит Gale. Игра: {game}.",
  linkQueued: "Ссылка передана в Steam. Выберите профиль для установки.",
  linkOpenPackage: "Откройте страницу пакета на Thunderstore.",
  settingsTitle: "Настройки плагина",
  settingsIntro: "Моды в Steam. Профили, загрузки и конфигурации — в вашем установленном Gale.",
  connection: "Подключение",
  headlessGale: "Headless Gale",
  headlessHint: "Запускается и останавливается вместе с плагином",
  noConnection: "Нет подключения",
  galePath: "Путь к headless-сборке Gale",
  galePathPlaceholder: "Оставьте пустым для сборки внутри плагина",
  saveRestart: "Сохранить и перезапустить",
  galePathHint: "Обычная сборка Gale не содержит мост. Используйте сборку из этого репозитория; она работает с существующими данными Gale.",
  dataDir: "Папка данных Gale",
  dataDirHint: "Общая база данных и профили. Перенос файлов выполняется в Gale.",
  galeGames: "Игры Gale",
  galeGamesHint: "Вкладка «Моды» появляется в свойствах игры с совпадающим Steam AppID.",
  behavior: "Поведение Gale",
  galePreferences: "Настройки Gale",
  galePreferencesHint: "Общие с настольным Gale",
  interfaceScale: "Масштаб интерфейса",
  language: "Язык",
  languageAuto: "Как в Steam",
  fetchAuto: "Загружать каталог автоматически",
  fetchAutoHint: "Получать список модов при выборе игры",
  pullBeforeLaunch: "Обновлять синхронизированный профиль перед запуском",
  pullBeforeLaunchHint: "Использовать настройку pull before launch из Gale",
  skipBackendConfirm: "Пропускать подтверждение смены источника",
  skipBackendConfirmHint: "Thunderstore / Hexium — общая настройка Gale",
  prefsLoading: "Настройки появятся после подключения к Gale.",
  downloads: "Загрузки",
  downloadCache: "Кэш загрузок",
  downloadCacheHint: "Удалить только неиспользуемые файлы. Установленные моды останутся.",
  clearCache: "Очистить кэш",
  cacheCleared: "Освобождено {size}",
  settingsBottom: "Не запускайте настольный Gale одновременно с GaleX.",
  checkConnection: "Проверить подключение",
  savedInGale: "Сохранено в Gale",
  pathSaved: "Путь сохранён. Перезапуск запрошен.",
  backendMissing: "Backend Millennium не подключён. Перезагрузите плагин GaleX.",
  bridgeNoReply: "Мост Gale не ответил",
  invalidBrowserUrl: "Недопустимый адрес браузера",
  millenniumMissing: "Millennium API недоступен",
  bridgeStarting: "Headless Gale запускается. Если запуск не завершается, проверьте путь к сборке GaleX и закройте настольный Gale.",
  bridgeUnavailable: "Нет связи с headless Gale",
  invalidGaleResponse: "Некорректный ответ Gale ({status})",
  invalidRpcJson: "Некорректный JSON-ответ GaleX от Millennium",
  invalidRpcEnvelope: "Некорректный ответ GaleX от Millennium",
  incompatibleBridge: "Мост несовместимой версии",
  crashTitle: "Не удалось отобразить раздел",
  crashBody: "Попробуйте открыть раздел ещё раз. Если операция уже выполнялась, проверьте список перед повтором.",
  missingBuild: "Не найдена headless-сборка Gale. Соберите её scripts/build-gale или укажите путь в настройках GaleX.",
  millenniumPid: "Не удалось определить процесс Millennium",
  launchFailed: "Не удалось запустить headless Gale; см. {path}",
  invalidCommand: "Некорректная команда",
  noGame: "Не выбрана игра",
  invalidContext: "Некорректный контекст",
  invalidLink: "Некорректная ссылка",
  onlyThunderstore: "Поддерживаются только ссылки установки Thunderstore",
  tooManyLinks: "Слишком много ожидающих ссылок",
  invalidPath: "Некорректный путь",
  saveSettingsFailed: "Не удалось сохранить настройки",
  galeFinishing: "Gale ещё завершает установки. Повторите перезапуск позже.",
  fileTooLarge: "Максимальный размер файла — 15 МиБ",
  fileReadError: "Не удалось прочитать файл",
  clipboardError: "Не удалось скопировать в буфер обмена",
  sessionLockedTitle: "Сессия Gale заблокирована",
  sessionLockedBody: "Закройте настольный Gale перед использованием GaleX. У них общая база данных и профили, поэтому одновременно может работать только одно приложение.",
  connectionErrorTitle: "Gale недоступен",
  connectionErrorBody: "Вкладка «Моды» остаётся благодаря кэшу игр, но для операций с модами нужен headless Gale.",
  retryConnection: "Повторить",
  openSettings: "Открыть настройки плагина",
  cachedGames: "Кэш списка игр",
  cachedGamesHint: "Поддерживаемых игр в кэше: {count}. Обновлено: {when}. Вкладка доступна, пока Gale не в сети.",
  cachedGamesEmpty: "Кэш игр пока пуст. Подключитесь к Gale один раз, чтобы сохранить список поддерживаемых игр.",
  clearGameCache: "Очистить кэш игр",
  gameCacheCleared: "Кэш игр очищен",
  never: "никогда",
  justNow: "только что",
  nonSteamOverrides: "Non-Steam ярлыки",
  nonSteamHint: "Сопоставьте ярлык Steam с игрой Gale. Вкладка «Моды» и автоматические параметры запуска будут использовать AppID ярлыка.",
  shortcutAppId: "Ярлык Steam",
  galeGame: "Игра Gale",
  manualAppId: "AppID ярлыка",
  saveOverride: "Сохранить override",
  removeOverride: "Удалить override",
  overrideSaved: "Override ярлыка сохранён",
  overrideRemoved: "Override ярлыка удалён",
  noShortcuts: "Non-Steam ярлыки не обнаружены. Введите AppID вручную.",
  invalidAppId: "Введите корректный Steam AppID",
  autoLaunchOptions: "Автоматически применять параметры запуска",
  autoLaunchOptionsHint: "При смене профиля или списка модов GaleX записывает аргументы загрузчика модов в параметры запуска Steam, сохраняя посторонние пользовательские аргументы.",
  launchOptionsApplied: "Параметры запуска Steam обновлены",
  launchOptionsFailed: "Не удалось применить параметры запуска Steam: {error}",
  launchOptionsUnavailable: "API параметров запуска Steam недоступен",
  launchOptionsChanged: "Параметры запуска Steam изменены извне GaleX; откройте вкладку «Моды», чтобы применить их снова.",
  demoConfig: "Редактор конфигов — интерфейс Gale; он открывается в Steam.",
  demoUpdate: "Демо: обновления установлены",
  demoLaunch: "Запуск игр недоступен в браузерном демо.",
  galeDownloads: "Загрузки GaleX",
  galeDownloadsHint: "Операции с модами по измерениям Gale. Это не обновление игры Steam.",
  noGaleDownloads: "Нет активных операций GaleX.",
  network: "Сеть",
  disk: "Диск",
  cancelDownloads: "Отменить установки",
  openDownloads: "Открыть загрузки Steam",
  operationInProgress: "Gale продолжает работать в фоне.",
  task_install: "Установка модов",
  task_update: "Обновление модов",
  task_import: "Импорт профиля",
  task_local_import: "Импорт локального мода",
  task_read_profile: "Чтение профиля",
  task_export: "Экспорт профиля",
  phase_starting: "Запуск",
  phase_download: "Загрузка",
  phase_extract: "Распаковка",
  phase_install: "Установка",
  phase_done: "Завершено",
  phase_error: "Ошибка",
  bytesGb: "{value} ГБ",
  bytesMb: "{value} МБ",
  bytesKb: "{value} КБ"
}, xa = { en: ao, ru: ha };
function o(e, t) {
  let n = xa[Qe][e] ?? ao[e] ?? e;
  if (t) for (const [a, l] of Object.entries(t)) n = n.split(`{${a}}`).join(String(l));
  return n;
}
function R() {
  return window.MILLENNIUM_API;
}
let Tt;
function ba(e) {
  Tt = e;
}
async function j(e, t = {}) {
  if (!Tt) throw new Error(o("backendMissing"));
  const n = await Tt(e, t);
  let a;
  try {
    a = pa(n);
  } catch (l) {
    throw new Ze(pt(l instanceof Error ? l.message : String(l)), "invalid_rpc");
  }
  if (!a.ok) throw new Ze(pt(a.error || o("bridgeNoReply")), a.code, a.error);
  return a.data;
}
function va() {
  ba(async (e, t) => {
    const n = R();
    if (!n?.Millennium?.callServerMethod) throw new Error(o("millenniumMissing"));
    return n.Millennium.callServerMethod("GaleX", e, { payload: JSON.stringify(t) });
  });
}
function wa(e) {
  return typeof e == "object" && e !== null && typeof e.jobId == "string";
}
async function In(e, t) {
  const n = await j("command", { method: e, args: t });
  if (!wa(n)) return n;
  for (; ; ) {
    const a = await j("command", { method: "job_result", args: { jobId: n.jobId } });
    if (a.status === "done") return a.data;
    if (a.status === "error") throw new Ze(pt(a.error || o("bridgeNoReply")), "job_failed", a.error);
    await new Promise((l) => setTimeout(l, 600));
  }
}
const y = {
  snapshot: () => j("snapshot"),
  progress: () => j("progress"),
  cancelInstalls: () => j("command", { method: "cancel_installs", args: {} }),
  call: (e, t, n = {}) => In(e, { slug: t.slug, profileId: t.profileId, ...n }),
  browserUrl: (e) => j("browser_url", { ...e }),
  dismissLink: (e) => j("dismiss_link", { url: e }),
  global: (e, t = {}) => In(e, t),
  getConfig: () => j("get_config"),
  setConfig: (e) => j("set_config", { path: e }),
  restart: () => j("restart"),
  launchPlan: (e) => j("command", { method: "launch_plan", args: { slug: e } }),
  log: (e) => j("frontend_log", { message: e })
};
function Xe(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(o("invalidBrowserUrl"));
  const n = R()?.Navigation;
  n?.NavigateToSteamWeb ? n.NavigateToSteamWeb(e) : window.open(e, "_blank", "noopener,noreferrer");
}
function Zt(e = document) {
  try {
    const t = e.defaultView?.SteamClient?.Window;
    t?.BringToFront?.(!0), t?.SetKeyFocus?.(!0), t?.MarkLastFocused?.(), e.defaultView?.focus();
  } catch {
  }
}
function ya() {
  const e = R()?.Navigation;
  if (e?.Navigate) {
    e.Navigate("/library/downloads");
    return;
  }
  const t = window.SteamClient?.URL ?? R()?.SteamClient?.URL;
  t?.ExecuteSteamURL && t.ExecuteSteamURL("steam://nav/downloads");
}
function ka(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(o("invalidBrowserUrl"));
  const n = R()?.Browser ?? window.SteamClient?.Browser;
  n?.StartDownload ? n.StartDownload(e) : Xe(e);
}
function xt(e = document) {
  return e.defaultView?.SteamClient?.System ?? window.SteamClient?.System ?? R()?.SteamClient?.System;
}
async function Ca(e, t = document) {
  Zt(t);
  const n = t.defaultView;
  try {
    if (n?.navigator?.clipboard?.writeText) {
      await n.navigator.clipboard.writeText(e);
      return;
    }
  } catch {
  }
  try {
    const d = xt(t);
    if (typeof d?.WriteToClipboard == "function") {
      d.WriteToClipboard(e);
      return;
    }
  } catch {
  }
  const a = t.activeElement, l = t.createElement("textarea");
  l.value = e, l.setAttribute("readonly", ""), l.style.position = "fixed", l.style.top = "0", l.style.left = "-9999px", l.style.opacity = "0", t.body.appendChild(l), l.focus(), l.select();
  let s = !1;
  try {
    s = t.execCommand("copy");
  } catch {
    s = !1;
  }
  if (l.remove(), a?.focus?.(), !s) throw new Error(o("clipboardError"));
}
function Sa(e, t = document) {
  try {
    const n = xt(t);
    return typeof n?.OpenLocalDirectoryInSystemExplorer != "function" ? !1 : (n.OpenLocalDirectoryInSystemExplorer(e), !0);
  } catch {
    return !1;
  }
}
function Gn() {
  return typeof xt()?.OpenFileDialog == "function";
}
async function Pn(e, t, n) {
  const a = xt();
  if (typeof a?.OpenFileDialog != "function") return null;
  try {
    const l = await a.OpenFileDialog({
      strTitle: e,
      rgFilters: [
        { strFileTypeName: t, rFilePatterns: n, bUseAsDefault: !0 },
        { strFileTypeName: o("allFiles"), rFilePatterns: ["*"] }
      ]
    });
    return typeof l == "string" && l.length > 0 ? l : null;
  } catch {
    return null;
  }
}
function F(e) {
  return e instanceof Ze ? e.message : pt(e instanceof Error ? e.message : String(e));
}
function io(e) {
  if (e instanceof Ze) return e.code;
  const t = e instanceof Error ? e.message : String(e);
  if (t.includes("GALEX_SESSION_LOCKED") || t.includes("Gale уже открыт") || t.includes("Gale session is locked")) return "gale_session_locked";
  if (t.startsWith("Не найдена headless-сборка Gale")) return "missing_build";
  if (t.startsWith("Headless Gale запускается")) return "bridge_starting";
  if (t === "Нет связи с headless Gale") return "bridge_unavailable";
}
function Aa() {
  const e = window;
  if (typeof e.GaleX?.openSettings == "function") {
    e.GaleX.openSettings();
    return;
  }
  const t = e.Millennium ?? R()?.Millennium;
  if (typeof t?.openQuickAccess == "function") {
    t.openQuickAccess({ plugin: "GaleX" });
    return;
  }
  R()?.Navigation?.Navigate?.("/library/downloads");
}
function Na({ error: e, onRetry: t }) {
  return Te(), /* @__PURE__ */ p("div", { className: "galex gx-crash", role: "alert", children: [
    /* @__PURE__ */ i("h2", { children: o("crashTitle") }),
    /* @__PURE__ */ i("p", { children: o("crashBody") }),
    /* @__PURE__ */ i("pre", { children: F(e) }),
    /* @__PURE__ */ i("button", { className: "gx-button", onClick: t, children: o("retry") })
  ] });
}
class Qt extends da {
  state = {};
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {
    console.error("[GaleX]", t, n.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ i(Na, { error: this.state.error, onRetry: () => this.setState({ error: void 0 }) }) : this.props.children;
  }
}
const Jt = ia(document);
function bt() {
  return la(Jt);
}
function Ie(e) {
  const t = R()?.[e];
  return typeof t == "function" || t && typeof t == "object" ? t : void 0;
}
function M({ children: e, icon: t, primary: n, className: a = "", ...l }) {
  const s = Ie(n ? "DialogButtonPrimary" : "DialogButton") ?? Ie("DialogButton"), d = /* @__PURE__ */ p(Z, { children: [
    t && /* @__PURE__ */ i(J, { name: t, size: 16 }),
    " ",
    e
  ] });
  return s ? /* @__PURE__ */ i(s, { ...l, className: `gx-native-button ${n ? "gx-native-button--primary" : ""} ${a}`, children: d }) : /* @__PURE__ */ i("button", { type: "button", ...l, className: `gx-button ${n ? "gx-button--primary" : ""} ${a}`, children: d });
}
function ie({ icon: e, label: t, ...n }) {
  const a = Ie("DialogButton");
  return a ? /* @__PURE__ */ i(a, { ...n, className: `gx-icon-button ${n.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ i(J, { name: e, size: 18 }) }) : /* @__PURE__ */ i("button", { type: "button", ...n, className: `gx-icon-button ${n.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ i(J, { name: e, size: 18 }) });
}
function be({ value: e, onChange: t, options: n, label: a, disabled: l }) {
  const s = Ie("Dropdown");
  return s ? /* @__PURE__ */ i("div", { className: "gx-native-select", children: /* @__PURE__ */ i(s, { disabled: l, menuLabel: a, strDefaultLabel: a, rgOptions: n.map((d) => ({ data: d.value, label: d.label })), selectedOption: e, contextMenuPositionOptions: { bMatchWidth: !0 }, onChange: (d) => t(d.data) }) }) : /* @__PURE__ */ i("select", { "aria-label": a, value: e, disabled: l, onChange: (d) => t(typeof e == "number" ? Number(d.target.value) : d.target.value), children: n.map((d) => /* @__PURE__ */ i("option", { value: d.value, children: d.label }, d.value)) });
}
function Ue({ checked: e, onChange: t, label: n, disabled: a }) {
  const l = Ie("DialogCheckbox");
  return l ? /* @__PURE__ */ i(l, { controlled: !0, checked: e, disabled: a, "aria-label": n, onChange: t }) : /* @__PURE__ */ i("input", { className: "gx-checkbox", type: "checkbox", "aria-label": n, checked: e, disabled: a, onChange: (s) => t(s.target.checked) });
}
function ot({ checked: e, onChange: t, label: n, disabled: a }) {
  const l = Ie("Toggle");
  return l ? /* @__PURE__ */ i("div", { className: "gx-toggle", role: "group", "aria-label": n, children: /* @__PURE__ */ i(l, { value: e, disabled: a, onChange: t }) }) : /* @__PURE__ */ p("label", { className: "gx-toggle", children: [
    /* @__PURE__ */ i("input", { type: "checkbox", role: "switch", "aria-label": n, checked: e, disabled: a, onChange: (s) => t(s.target.checked) }),
    /* @__PURE__ */ i("span", { "aria-hidden": "true" })
  ] });
}
function Ln({ label: e, description: t, className: n = "", ...a }) {
  const l = Ie("TextField");
  return l ? /* @__PURE__ */ i(l, { ...a, label: e, description: t, className: `gx-native-input ${n}` }) : /* @__PURE__ */ i("input", { ...a, className: `gx-input ${n}` });
}
function ke({ title: e, children: t, onClose: n, footer: a }) {
  const l = bt(), s = qe(null), d = qe(n);
  return d.current = n, q(() => {
    Zt(l);
    const g = l.activeElement, m = s.current, v = () => Array.from(m?.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]') ?? []);
    (m?.querySelector("input,select,textarea") ?? v()[0])?.focus();
    const c = (u) => {
      if (u.key === "Escape" && (u.stopPropagation(), d.current()), u.key === "Tab") {
        const h = v(), L = h[0], S = h[h.length - 1];
        u.shiftKey && l.activeElement === L ? (u.preventDefault(), S?.focus()) : !u.shiftKey && l.activeElement === S && (u.preventDefault(), L?.focus());
      }
    };
    return m?.addEventListener("keydown", c), () => {
      m?.removeEventListener("keydown", c), g?.focus();
    };
  }, [l]), to(/* @__PURE__ */ i("div", { className: "galex gx-modal-backdrop", onMouseDown: (g) => {
    g.target === g.currentTarget && n();
  }, children: /* @__PURE__ */ p("div", { ref: s, className: "gx-modal DialogPopup_Generic", role: "dialog", "aria-modal": "true", "aria-label": e, children: [
    /* @__PURE__ */ p("header", { children: [
      /* @__PURE__ */ i("h2", { children: e }),
      /* @__PURE__ */ i(ie, { icon: "x", label: o("close"), onClick: n })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-modal-body", children: t }),
    a && /* @__PURE__ */ i("footer", { children: a })
  ] }) }), l.body);
}
function Dn({ title: e, children: t, onClose: n, onConfirm: a, busy: l, danger: s }) {
  return /* @__PURE__ */ i(ke, { title: e, onClose: n, footer: /* @__PURE__ */ p(Z, { children: [
    /* @__PURE__ */ i(M, { onClick: n, disabled: l, children: o("cancel") }),
    /* @__PURE__ */ i(M, { primary: !0, className: s ? "gx-danger" : "", onClick: a, disabled: l, children: o(l ? "working" : "confirm") })
  ] }), children: /* @__PURE__ */ i("div", { children: t }) });
}
function re({ children: e, error: t, onRetry: n }) {
  return /* @__PURE__ */ p("div", { className: `gx-notice ${t ? "gx-notice--error" : ""}`, role: t ? "alert" : "status", children: [
    /* @__PURE__ */ i(J, { name: t ? "warning" : "info", size: 17 }),
    /* @__PURE__ */ i("span", { children: e }),
    n && /* @__PURE__ */ i("button", { onClick: n, children: o("retry") })
  ] });
}
function Ne(e) {
  return e >= 1073741824 ? o("bytesGb", { value: (e / 1073741824).toFixed(1) }) : e >= 1048576 ? o("bytesMb", { value: (e / 1048576).toFixed(1) }) : o("bytesKb", { value: Math.round(e / 1024) });
}
function Kt(e) {
  try {
    const t = window.localStorage?.getItem(e);
    return t ? JSON.parse(t) : void 0;
  } catch {
    return;
  }
}
function Yt(e, t) {
  try {
    return window.localStorage ? (window.localStorage.setItem(e, JSON.stringify(t)), !0) : !1;
  } catch {
    return !1;
  }
}
function Ma(e) {
  try {
    window.localStorage?.removeItem(e);
  } catch {
  }
}
const ro = "galex:client-settings:v1", Ia = { version: 1, nonSteamOverrides: {}, autoLaunchOptions: !0 };
function lo(e) {
  if (!e || typeof e != "object") return { ...Ia, nonSteamOverrides: {} };
  const t = e, n = {};
  if (t.nonSteamOverrides && typeof t.nonSteamOverrides == "object")
    for (const [a, l] of Object.entries(t.nonSteamOverrides)) {
      const s = Number(a);
      Number.isSafeInteger(s) && s > 0 && s <= 4294967295 && typeof l == "string" && /^[a-z0-9-]{1,128}$/.test(l) && (n[String(s)] = l);
    }
  return { version: 1, nonSteamOverrides: n, autoLaunchOptions: t.autoLaunchOptions !== !1 };
}
let ve = lo(Kt(ro));
const Ot = /* @__PURE__ */ new Set();
function jt(e) {
  ve = lo(e), Yt(ro, ve), Ot.forEach((t) => t());
}
function ut() {
  return ve;
}
function so(e) {
  return Ot.add(e), () => {
    Ot.delete(e);
  };
}
function co() {
  return ht(so, ut, ut);
}
function Ga(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0 || e > 4294967295) throw new Error("invalid appid");
  jt({ ...ve, nonSteamOverrides: { ...ve.nonSteamOverrides, [String(e)]: t } });
}
function Pa(e) {
  const t = { ...ve.nonSteamOverrides };
  delete t[String(e)], jt({ ...ve, nonSteamOverrides: t });
}
function La(e) {
  jt({ ...ve, autoLaunchOptions: e });
}
const Da = 1073741824;
function Me(e) {
  if (typeof e == "string" && /^\d{1,10}$/.test(e.trim()) && (e = Number(e.trim())), typeof e != "number" || !Number.isSafeInteger(e)) return;
  const t = e < 0 ? e >>> 0 : e;
  return t > 0 && t <= 4294967295 ? t : void 0;
}
function _a(e) {
  return e >= 2147483648;
}
function po(e = typeof window > "u" ? void 0 : window) {
  return [e?.appStore, e?.parent?.appStore, e?.top?.appStore].filter(Boolean);
}
function uo(e, t) {
  const n = [t?.defaultView, typeof window > "u" ? void 0 : window];
  for (const a of n)
    for (const l of po(a))
      try {
        const s = l.GetAppOverviewByAppID?.(e) ?? l.m_mapApps?.get?.(e);
        if (s) return s;
      } catch {
      }
}
function vt(e, t) {
  const n = uo(e, t);
  try {
    if (typeof n?.BIsShortcut == "function" && n.BIsShortcut() || typeof n?.BIsModOrShortcut == "function" && n.BIsModOrShortcut() || typeof n?.app_type == "number" && n.app_type & Da) return !0;
  } catch {
  }
  return _a(e);
}
function go(e, t) {
  const n = uo(e, t), a = n?.display_name ?? n?.m_strDisplayName;
  return typeof a == "string" && a.length > 0 ? a : void 0;
}
function Ea() {
  const e = /* @__PURE__ */ new Map();
  for (const t of po())
    try {
      t.m_mapApps?.forEach?.((n, a) => {
        const l = Me(n?.appid ?? n?.m_unAppID ?? a);
        if (!l || !vt(l)) return;
        const s = go(l) ?? `AppID ${l}`;
        e.set(l, { appid: l, name: s });
      });
    } catch {
    }
  return Array.from(e.values()).sort((t, n) => t.name.localeCompare(n.name) || t.appid - n.appid);
}
function Ta(e, t, n, a) {
  const l = n[String(e)];
  if (l && vt(e, a)) {
    const s = t.find((d) => d.slug === l);
    if (s) return { ...s, steamAppId: e, nonSteam: !0 };
  }
  return t.find((s) => s.steamAppId === e);
}
const en = "galex:supported-games:v1", mo = 1024;
function fo(e) {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return !(typeof t.slug != "string" || !/^[a-z0-9-]{1,128}$/.test(t.slug) || typeof t.name != "string" || t.name.length === 0 || t.name.length > 256 || typeof t.modLoader != "string" || t.modLoader.length > 64 || !Array.isArray(t.backends) || t.backends.length > 8 || !t.backends.every((n) => typeof n == "string" && n.length <= 32) || t.steamAppId !== void 0 && (!Number.isSafeInteger(t.steamAppId) || t.steamAppId <= 0 || t.steamAppId >= 2147483648));
}
function Oa() {
  const e = Kt(en);
  if (!e || e.version !== 1 || !Array.isArray(e.games) || typeof e.updatedAt != "number" || !Number.isFinite(e.updatedAt)) return;
  const t = /* @__PURE__ */ new Set(), n = [];
  for (const a of e.games.slice(0, mo))
    !fo(a) || t.has(a.slug) || (t.add(a.slug), n.push({ slug: a.slug, name: a.name, modLoader: a.modLoader, steamAppId: a.steamAppId, backends: [...a.backends] }));
  return { version: 1, updatedAt: e.updatedAt, games: n };
}
function Ba(e) {
  const t = Date.now(), n = e.filter(fo).slice(0, mo).map((a) => ({
    slug: a.slug,
    name: a.name,
    modLoader: a.modLoader,
    steamAppId: a.steamAppId,
    backends: [...a.backends]
  }));
  return Yt(en, { version: 1, updatedAt: t, games: n }), t;
}
function $a() {
  Ma(en);
}
const Gt = Oa();
let le = {
  games: Gt?.games ?? [],
  cachedAt: Gt?.updatedAt,
  usingCache: !!Gt?.games.length,
  error: "",
  loading: !0
};
const Je = /* @__PURE__ */ new Set();
let tn, Ce = !0, lt = !1, Se = 0;
function st(e) {
  le = e, Je.forEach((t) => t());
}
async function nn() {
  if (Ce || lt) return;
  lt = !0;
  const e = Se;
  try {
    const t = await y.snapshot();
    if (Ce || e !== Se) return;
    if (t.ok && t.bridgeVersion === 2) {
      const n = t.games.length ? Ba(t.games) : le.cachedAt;
      st({ snapshot: t, games: t.games, cachedAt: n, usingCache: !1, error: "", loading: !1 });
    } else
      st({ ...le, error: o("incompatibleBridge"), errorCode: "incompatible_bridge", usingCache: !0, loading: !1 });
  } catch (t) {
    !Ce && e === Se && st({ ...le, error: F(t), errorCode: io(t), usingCache: !0, loading: !1 });
  } finally {
    lt = !1, !Ce && e === Se && (tn = setTimeout(() => void nn(), document.visibilityState === "hidden" ? 15e3 : 3e3));
  }
}
function Fa() {
  return Ce ? (Ce = !1, Se++, nn(), () => _n()) : () => _n();
}
function _n() {
  Ce = !0, Se++, clearTimeout(tn);
}
function Ke() {
  return clearTimeout(tn), lt = !1, Se++, nn();
}
function Bt() {
  return le;
}
function on() {
  return ht((e) => (Je.add(e), () => {
    Je.delete(e);
  }), Bt, Bt);
}
function za(e) {
  return Je.add(e), () => {
    Je.delete(e);
  };
}
function Ra() {
  $a(), st({ ...le, games: le.snapshot?.ok ? le.snapshot.games : [], cachedAt: void 0, usingCache: !le.snapshot?.ok });
}
function En(e, t = le.games, n = ut().nonSteamOverrides, a) {
  return Ta(e, t, n, a);
}
function xe({ title: e, hint: t, children: n }) {
  return /* @__PURE__ */ p("div", { className: "gx-setting", children: [
    /* @__PURE__ */ p("div", { children: [
      /* @__PURE__ */ i("strong", { children: e }),
      t && /* @__PURE__ */ i("small", { children: t })
    ] }),
    n
  ] });
}
function Ha({ demo: e = !1 }) {
  Te();
  const [t, n] = w(), [a, l] = w(), [s, d] = w(""), [g, m] = w(""), [v, c] = w(""), [u, h] = w(!1), L = on(), S = co(), G = L.snapshot?.ok ? L.snapshot.games : L.games, b = Ea(), [C, A] = w(""), [T, U] = w(""), [E, ne] = w(""), X = async () => {
    m("");
    try {
      const [x, O] = await Promise.all([y.snapshot(), y.global("prefs")]);
      l(x), n(O), e || d(await y.getConfig());
    } catch (x) {
      m(F(x));
    }
  };
  q(() => {
    X();
  }, []);
  const ae = async (x) => {
    if (!(!t || u)) {
      h(!0), m(""), c("");
      try {
        const O = { ...t, ...x };
        await y.global("set_prefs", { value: O }), n(O), c(o("savedInGale"));
      } catch (O) {
        m(F(O));
      } finally {
        h(!1);
      }
    }
  }, se = async () => {
    h(!0), m("");
    try {
      await y.setConfig(s.trim()), await y.restart(), c(o("pathSaved")), setTimeout(() => void X(), 2500);
    } catch (x) {
      m(F(x));
    } finally {
      h(!1);
    }
  }, Oe = async () => {
    h(!0), m("");
    try {
      const x = await y.global("clear_download_cache");
      c(o("cacheCleared", { size: Ne(x) }));
    } catch (x) {
      m(F(x));
    } finally {
      h(!1);
    }
  }, pe = () => {
    const x = Me(T.trim() || C);
    if (!x || !vt(x) || !E || !G.some((O) => O.slug === E)) {
      m(o("invalidAppId"));
      return;
    }
    try {
      Ga(x, E), m(""), c(o("overrideSaved")), U(""), A(""), ne("");
    } catch (O) {
      m(F(O));
    }
  }, ue = () => {
    Ra(), c(o("gameCacheCleared"));
  }, we = L.cachedAt ? new Date(L.cachedAt).toLocaleString(Et() === "ru" ? "ru-RU" : "en-US") : o("never");
  return /* @__PURE__ */ p("section", { className: "galex gx-global-settings", children: [
    /* @__PURE__ */ p("div", { className: "gx-settings-header", children: [
      /* @__PURE__ */ i("h1", { children: "GaleX" }),
      /* @__PURE__ */ p("span", { className: "gx-connection", children: [
        /* @__PURE__ */ i("span", { className: "gx-status-dot" }),
        a ? `Gale ${a.coreVersion}` : o("noConnection")
      ] }),
      /* @__PURE__ */ i(ie, { icon: "refresh", label: o("checkConnection"), disabled: u, onClick: () => void X() })
    ] }),
    /* @__PURE__ */ i("p", { className: "gx-settings-intro", children: o("settingsIntro") }),
    g && /* @__PURE__ */ i(re, { error: !0, onRetry: () => void X(), children: g }),
    v && /* @__PURE__ */ p("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ i(J, { name: "check", size: 15 }),
      v
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ i("h2", { children: o("connection") }),
      /* @__PURE__ */ i(xe, { title: o("headlessGale"), hint: o("headlessHint") }),
      !e && /* @__PURE__ */ p(Z, { children: [
        /* @__PURE__ */ i(Ln, { label: o("galePath"), value: s, disabled: u, onChange: (x) => d(x.target.value), placeholder: o("galePathPlaceholder") }),
        /* @__PURE__ */ i("div", { className: "gx-settings-actions", children: /* @__PURE__ */ i(M, { onClick: () => void se(), disabled: u, children: o("saveRestart") }) }),
        /* @__PURE__ */ i("p", { className: "gx-muted", children: o("galePathHint") })
      ] }),
      /* @__PURE__ */ i(xe, { title: o("dataDir"), hint: o("dataDirHint") }),
      /* @__PURE__ */ i("code", { className: "gx-path", children: a?.dataDir ?? "—" }),
      /* @__PURE__ */ i(xe, { title: o("cachedGames"), hint: G.length ? o("cachedGamesHint", { count: G.length, when: we }) : o("cachedGamesEmpty"), children: /* @__PURE__ */ i(M, { disabled: u, onClick: ue, children: o("clearGameCache") }) }),
      !!G.length && /* @__PURE__ */ p("details", { className: "gx-games", children: [
        /* @__PURE__ */ p("summary", { children: [
          o("galeGames"),
          " ",
          /* @__PURE__ */ i("span", { children: G.length })
        ] }),
        /* @__PURE__ */ i("p", { className: "gx-muted", children: o("galeGamesHint") }),
        /* @__PURE__ */ i("ul", { className: "gx-game-list", children: G.map((x) => /* @__PURE__ */ p("li", { children: [
          x.name,
          " ",
          /* @__PURE__ */ i("span", { children: x.steamAppId ?? "?" })
        ] }, x.slug)) })
      ] })
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ i("h2", { children: o("nonSteamOverrides") }),
      /* @__PURE__ */ i("p", { className: "gx-muted", children: o("nonSteamHint") }),
      /* @__PURE__ */ p("div", { className: "gx-override-form", children: [
        /* @__PURE__ */ p("label", { children: [
          o("shortcutAppId"),
          /* @__PURE__ */ i(be, { label: o("shortcutAppId"), value: C, onChange: A, options: [{ value: "", label: o("manualAppId") }, ...b.map((x) => ({ value: String(x.appid), label: `${x.name} (${x.appid})` }))] })
        ] }),
        /* @__PURE__ */ p("label", { children: [
          o("manualAppId"),
          /* @__PURE__ */ i(Ln, { "aria-label": o("manualAppId"), inputMode: "numeric", value: T, onChange: (x) => U(x.target.value), placeholder: "3422480235" })
        ] }),
        /* @__PURE__ */ p("label", { children: [
          o("galeGame"),
          /* @__PURE__ */ i(be, { label: o("galeGame"), value: E, onChange: ne, options: [{ value: "", label: "—" }, ...G.map((x) => ({ value: x.slug, label: x.name }))] })
        ] }),
        /* @__PURE__ */ i(M, { onClick: pe, disabled: !G.length, children: o("saveOverride") })
      ] }),
      !b.length && /* @__PURE__ */ i("p", { className: "gx-muted", children: o("noShortcuts") }),
      !!Object.keys(S.nonSteamOverrides).length && /* @__PURE__ */ i("ul", { className: "gx-override-list", children: Object.entries(S.nonSteamOverrides).map(([x, O]) => {
        const de = Number(x), Ge = G.find((B) => B.slug === O);
        return /* @__PURE__ */ p("li", { children: [
          /* @__PURE__ */ i("strong", { children: go(de) ?? `AppID ${x}` }),
          /* @__PURE__ */ p("span", { children: [
            x,
            " → ",
            Ge?.name ?? O
          ] }),
          /* @__PURE__ */ i(ie, { icon: "trash", label: o("removeOverride"), onClick: () => {
            Pa(de), c(o("overrideRemoved"));
          } })
        ] }, x);
      }) }),
      /* @__PURE__ */ i(xe, { title: o("autoLaunchOptions"), hint: o("autoLaunchOptionsHint"), children: /* @__PURE__ */ i(ot, { label: o("autoLaunchOptions"), checked: S.autoLaunchOptions, onChange: La }) })
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ i("h2", { children: o("galePreferences") }),
      /* @__PURE__ */ i("p", { className: "gx-muted", children: o("galePreferencesHint") }),
      t ? /* @__PURE__ */ p(Z, { children: [
        /* @__PURE__ */ i(xe, { title: o("fetchAuto"), hint: o("fetchAutoHint"), children: /* @__PURE__ */ i(ot, { label: o("fetchAuto"), checked: t.fetchModsAutomatically, disabled: u, onChange: (x) => void ae({ fetchModsAutomatically: x }) }) }),
        /* @__PURE__ */ i(xe, { title: o("pullBeforeLaunch"), hint: o("pullBeforeLaunchHint"), children: /* @__PURE__ */ i(ot, { label: o("pullBeforeLaunch"), checked: t.pullBeforeLaunch, disabled: u, onChange: (x) => void ae({ pullBeforeLaunch: x }) }) }),
        /* @__PURE__ */ i(xe, { title: o("skipBackendConfirm"), hint: o("skipBackendConfirmHint"), children: /* @__PURE__ */ i(ot, { label: o("skipBackendConfirm"), checked: t.backendSkipConfirm, disabled: u, onChange: (x) => void ae({ backendSkipConfirm: x }) }) })
      ] }) : /* @__PURE__ */ i("p", { className: "gx-muted", children: o("prefsLoading") })
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ i("h2", { children: o("downloads") }),
      /* @__PURE__ */ i(xe, { title: o("downloadCache"), hint: o("downloadCacheHint"), children: /* @__PURE__ */ i(M, { disabled: u || !t || a?.installing, onClick: () => void Oe(), children: o("clearCache") }) })
    ] }),
    /* @__PURE__ */ i("p", { className: "gx-settings-bottom", children: o("settingsBottom") })
  ] });
}
function Ua() {
  Te();
  const e = bt(), { snapshot: t } = on(), n = t?.pendingLinks[0], [a, l] = w(), [s, d] = w(), [g, m] = w(), [v, c] = w(""), [u, h] = w(!1), [L, S] = w(0);
  if (q(() => {
    if (!n) return;
    Zt(e);
    let C = !1;
    return l(void 0), c(""), d(void 0), (async () => {
      try {
        const [A, T] = await Promise.all([y.call("profiles", { slug: n.slug }), y.call("resolve_link", { slug: n.slug }, { url: n.url })]);
        C || (d(A), m(A.activeId), l(T));
      } catch (A) {
        C || c(F(A));
      }
    })(), () => {
      C = !0;
    };
  }, [n?.url, n?.slug, L]), !n) return null;
  const G = () => {
    u || y.dismissLink(n.url).then(() => Ke()).catch((C) => c(F(C)));
  }, b = () => void (async () => {
    h(!0), c("");
    try {
      await y.call("install_mod", { slug: n.slug, profileId: g }, { id: { packageUuid: a.uuid, versionUuid: a.versionUuid, backend: a.backend } }), await y.dismissLink(n.url), Ke();
    } catch (C) {
      c(F(C));
    } finally {
      h(!1);
    }
  })();
  return /* @__PURE__ */ p(ke, { title: o("linkTitle"), onClose: G, footer: /* @__PURE__ */ p(Z, { children: [
    /* @__PURE__ */ i(M, { disabled: u, onClick: G, children: o("cancel") }),
    /* @__PURE__ */ i(M, { primary: !0, disabled: u || !a || g === void 0, onClick: b, children: o(u ? "linkInstalling" : "linkInstall") })
  ] }), children: [
    /* @__PURE__ */ i("h3", { children: a?.name ?? n.url.split("/").slice(-2, -1)[0] }),
    /* @__PURE__ */ i("p", { className: "gx-muted", children: a ? `${a.author} · v${a.version}` : o("linkChecking") }),
    s && /* @__PURE__ */ p("label", { className: "gx-form-label", children: [
      o("linkProfile"),
      /* @__PURE__ */ i(be, { label: o("linkProfile"), value: g ?? s.activeId, options: s.profiles.map((C) => ({ value: C.id, label: C.name })), onChange: m })
    ] }),
    /* @__PURE__ */ i("p", { className: "gx-muted", children: o("linkDeps", { game: t?.games.find((C) => C.slug === n.slug)?.name ?? n.slug }) }),
    v && /* @__PURE__ */ i(re, { error: !0, onRetry: () => S((C) => C + 1), children: v })
  ] });
}
let gt = { error: "" };
const $t = /* @__PURE__ */ new Set();
let an, Ae = !0, Pt = !1, Ve = 0;
function Tn(e) {
  gt = e, $t.forEach((t) => t());
}
async function rn() {
  if (Ae || Pt) return;
  Pt = !0;
  const e = Ve;
  try {
    const t = await y.progress();
    !Ae && e === Ve && Tn({ snapshot: t, error: "" });
  } catch (t) {
    !Ae && e === Ve && Tn({ ...gt, error: F(t) });
  } finally {
    Pt = !1, Ae || (an = setTimeout(() => void rn(), gt.snapshot?.active ? 750 : 2e3));
  }
}
function Xa() {
  return Ae ? (Ae = !1, Ve++, rn(), () => On()) : () => On();
}
function On() {
  Ae = !0, Ve++, clearTimeout(an);
}
function Lt() {
  clearTimeout(an), rn();
}
function Bn() {
  return gt;
}
function ho() {
  return ht((e) => ($t.add(e), () => $t.delete(e)), Bn, Bn);
}
function Va(e) {
  return `${Ne(Math.max(0, e))}/s`;
}
function Wa(e) {
  const t = `task_${e.kind.replace(/-/g, "_")}`, n = o(t);
  return n === t ? o("task_install") : n;
}
function qa(e) {
  const n = `phase_${e.status === "done" ? "done" : e.status === "error" ? "error" : e.phase ?? "starting"}`, a = o(n);
  return a === n ? o("working") : a;
}
function Za(e) {
  if (e.totalBytes && e.totalBytes > 0) return Math.min(100, Math.round(e.completedBytes / e.totalBytes * 100));
  if (e.totalMods && e.totalMods > 0) return Math.min(100, Math.round(e.completedMods / e.totalMods * 100));
}
function $n({ history: e, field: t, label: n }) {
  const a = e.map((d) => d[t]), l = Math.max(1, ...a), s = a.map((d, g) => `${a.length > 1 ? g / (a.length - 1) * 100 : 0},${32 - d / l * 30}`).join(" ");
  return /* @__PURE__ */ p("div", { className: "gx-sparkline", "aria-label": n, children: [
    /* @__PURE__ */ i("span", { children: n }),
    /* @__PURE__ */ i("svg", { viewBox: "0 0 100 32", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ i("polyline", { points: s, fill: "none", stroke: "currentColor", strokeWidth: "1.5" }) }),
    /* @__PURE__ */ i("strong", { children: Va(a[a.length - 1] ?? 0) })
  ] });
}
function Qa({ task: e }) {
  const t = Za(e), n = window.MILLENNIUM_API?.ProgressBarWithInfo, a = qa(e), l = e.totalBytes ? `${Ne(e.completedBytes)} / ${Ne(e.totalBytes)}` : e.totalMods ? `${e.completedMods}/${e.totalMods}` : "";
  return /* @__PURE__ */ p("article", { className: `gx-download-card ${e.status === "error" ? "is-error" : ""}`, "data-appid": e.steamAppId, "data-galex-download": e.id, children: [
    e.steamAppId ? /* @__PURE__ */ i("img", { className: "gx-download-cover", src: `https://cdn.cloudflare.steamstatic.com/steam/apps/${e.steamAppId}/header.jpg`, alt: "", loading: "lazy" }) : /* @__PURE__ */ i("span", { className: "gx-download-cover gx-download-cover--fallback", children: /* @__PURE__ */ i(J, { name: "package", size: 24 }) }),
    /* @__PURE__ */ p("div", { className: "gx-download-body", children: [
      /* @__PURE__ */ p("header", { children: [
        /* @__PURE__ */ i("h3", { children: e.gameName }),
        /* @__PURE__ */ i("span", { className: "gx-muted", children: e.profileName ?? e.slug })
      ] }),
      /* @__PURE__ */ p("p", { className: "gx-download-task", children: [
        Wa(e),
        " · ",
        a,
        e.currentMod ? ` · ${e.currentMod}` : ""
      ] }),
      typeof n == "function" ? /* @__PURE__ */ i(n, { nProgress: t ?? 0, indeterminate: t === void 0 || e.status === "active" && t === 0, strOperationText: a, sTimeRemaining: l }) : /* @__PURE__ */ i("progress", { className: "gx-progress", max: 100, value: t ?? void 0, "aria-label": a }),
      /* @__PURE__ */ p("div", { className: "gx-download-meta", children: [
        /* @__PURE__ */ i("span", { children: l || o("working") }),
        t !== void 0 && /* @__PURE__ */ p("span", { children: [
          t,
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Ja() {
  Te();
  const { snapshot: e, error: t } = ho(), n = e?.tasks ?? [], a = n.some((s) => s.status === "active"), l = n.some((s) => s.status === "active" && (s.kind === "install" || s.kind === "update"));
  return !e || n.length === 0 && !t ? null : /* @__PURE__ */ p("section", { className: "galex gx-downloads", "aria-label": o("galeDownloads"), "aria-live": "polite", children: [
    /* @__PURE__ */ p("header", { className: "gx-downloads-header", children: [
      /* @__PURE__ */ p("h2", { children: [
        o("galeDownloads"),
        a ? ` (${n.filter((s) => s.status === "active").length})` : ""
      ] }),
      /* @__PURE__ */ p("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ i(ie, { icon: "refresh", label: o("refresh"), onClick: Lt }),
        l && /* @__PURE__ */ i(M, { icon: "x", onClick: () => void y.cancelInstalls().then(Lt).catch(() => {
        }), children: o("cancelDownloads") })
      ] })
    ] }),
    /* @__PURE__ */ i("p", { className: "gx-muted", children: o("galeDownloadsHint") }),
    t && /* @__PURE__ */ i(re, { error: !0, onRetry: Lt, children: t }),
    e && /* @__PURE__ */ p("div", { className: "gx-download-graphs", children: [
      /* @__PURE__ */ i($n, { history: e.history, field: "network", label: o("network") }),
      /* @__PURE__ */ i($n, { history: e.history, field: "disk", label: o("disk") })
    ] }),
    n.length ? n.map((s) => /* @__PURE__ */ i(Qa, { task: s }, s.id)) : /* @__PURE__ */ i("div", { className: "gx-empty", children: o(e ? "noGaleDownloads" : "loading") })
  ] });
}
function Ka({ children: e }) {
  return /* @__PURE__ */ p(Z, { children: [
    /* @__PURE__ */ i(Ja, {}),
    e
  ] });
}
const Ft = /* @__PURE__ */ new WeakMap();
function zt(e) {
  const t = Ft.get(e);
  Ft.delete(e);
  try {
    t?.Hide?.();
  } catch {
  }
}
function Ya(e) {
  const t = e?.findModuleExport;
  if (typeof t == "function")
    try {
      return t((n) => typeof n == "function" && typeof n.prototype?.ShowSubMenu == "function" && typeof n.prototype?.RenderSubMenu == "function");
    } catch {
      return;
    }
}
function Rt(e) {
  return /* @__PURE__ */ p(Z, { children: [
    e.icon && /* @__PURE__ */ i("span", { className: "gx-context-menu-icon", children: /* @__PURE__ */ i(J, { name: e.icon, size: 16 }) }),
    /* @__PURE__ */ i("span", { children: e.label })
  ] });
}
function xo(e, t, n) {
  return e.map((a) => a.children?.length ? Q(n, { key: a.id, label: Rt(a), disabled: a.disabled }, xo(a.children, t, n)) : Q(t, {
    key: a.id,
    disabled: a.disabled,
    tone: a.danger ? "destructive" : void 0,
    onSelected: a.disabled ? void 0 : () => a.onSelect?.()
  }, Rt(a)));
}
function ja(e, t, n, a) {
  const l = R(), s = l?.showContextMenu, d = l?.Menu, g = l?.MenuItem;
  if (typeof s != "function" || typeof d != "function" || typeof g != "function") return !1;
  const m = e.some((c) => c.children?.length) ? Ya(l) : void 0;
  if (e.some((c) => c.children?.length) && !m) return !1;
  const v = t.ownerDocument;
  zt(v);
  try {
    const c = Q(d, { label: n }, xo(e, g, m)), u = a ? {
      preventDefault() {
      },
      stopPropagation() {
      },
      currentTarget: t,
      clientX: a.x,
      clientY: a.y
    } : t, h = s(c, u, { bFitToWindow: !0, bShiftToFitWindow: !0, bOverlapHorizontal: !0, bOverlapVertical: !0 });
    return h && Ft.set(v, h), !0;
  } catch {
    return !1;
  }
}
function bo({ items: e, label: t, point: n, root: a = !1, onClose: l, onBack: s }) {
  const d = qe(null), [g, m] = w(null);
  sa(() => {
    const c = d.current;
    if (!c) return;
    const u = c.ownerDocument.defaultView;
    if (!u) return;
    const h = c.getBoundingClientRect();
    if (a)
      c.style.left = `${Math.max(8, Math.min(h.left, u.innerWidth - h.width - 8))}px`, c.style.top = `${Math.max(8, Math.min(h.top, u.innerHeight - h.height - 8))}px`;
    else {
      const L = c.parentElement?.getBoundingClientRect();
      h.right > u.innerWidth - 8 && (c.style.left = "auto", c.style.right = "calc(100% - 4px)"), L && h.bottom > u.innerHeight - 8 && (c.style.top = `${Math.max(8, u.innerHeight - h.height - 8) - L.top}px`);
    }
  }, [a, e]);
  const v = () => Array.from(d.current?.querySelectorAll(":scope > .gx-context-menu-item-wrap > button:not(:disabled)") ?? []);
  return q(() => {
    a && (v()[0] ?? d.current)?.focus();
  }, [a]), /* @__PURE__ */ i(
    "div",
    {
      ref: d,
      className: `galex gx-context-menu${a ? " gx-context-menu--root" : " gx-context-submenu"}${a && g ? " gx-context-menu--submenu-open" : ""}`,
      role: "menu",
      "aria-label": t,
      tabIndex: -1,
      style: a && n ? { left: n.x, top: n.y } : void 0,
      onKeyDown: (c) => {
        const u = c.target, h = v(), L = h.indexOf(u);
        if (c.key === "ArrowDown" || c.key === "ArrowUp") {
          c.preventDefault();
          const S = c.key === "ArrowDown" ? (L + 1) % h.length : (L - 1 + h.length) % h.length;
          h[S]?.focus();
        } else if (c.key === "Home")
          c.preventDefault(), h[0]?.focus();
        else if (c.key === "End")
          c.preventDefault(), h[h.length - 1]?.focus();
        else if (c.key === "ArrowRight" && u.getAttribute("aria-haspopup") === "menu") {
          c.preventDefault();
          const S = u.dataset.itemId ?? null;
          m(S), setTimeout(() => d.current?.querySelector(".gx-context-submenu button:not(:disabled)")?.focus(), 0);
        } else c.key === "ArrowLeft" && s ? (c.preventDefault(), s()) : c.key === "Escape" && s && (c.preventDefault(), c.stopPropagation(), s());
      },
      children: e.map((c) => {
        const u = !!c.children?.length, h = g === c.id;
        return /* @__PURE__ */ p("div", { className: "gx-context-menu-item-wrap", onMouseEnter: () => m(u ? c.id : null), children: [
          /* @__PURE__ */ p(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-item-id": c.id,
              className: `gx-context-menu-item${c.danger ? " gx-context-menu-item--danger" : ""}`,
              disabled: c.disabled,
              "aria-haspopup": u ? "menu" : void 0,
              "aria-expanded": u ? h : void 0,
              onFocus: () => {
                u && m(c.id);
              },
              onClick: () => {
                if (u) {
                  m(c.id);
                  return;
                }
                l(), c.onSelect?.();
              },
              children: [
                Rt(c),
                u && /* @__PURE__ */ i(J, { name: "chevron-right", size: 14, className: "gx-context-menu-arrow" })
              ]
            }
          ),
          u && h && /* @__PURE__ */ i(bo, { items: c.children, label: c.label, onClose: l, onBack: () => {
            m(null), d.current?.querySelector(`button[data-item-id="${c.id}"]`)?.focus();
          } })
        ] }, c.id);
      })
    }
  );
}
function ei({ items: e, label: t, point: n, anchor: a, onClose: l }) {
  const s = bt(), d = qe(l);
  return d.current = l, q(() => {
    const g = s.activeElement, m = (u) => {
      const h = u.target;
      !h || !(h instanceof s.defaultView.Node) || !s.body.contains(h) || h.closest?.(".gx-context-menu") || d.current();
    }, v = (u) => {
      u.key === "Escape" && (u.preventDefault(), d.current());
    }, c = (u) => {
      const h = u.target;
      h && h.closest?.(".gx-context-menu") || d.current();
    };
    return s.addEventListener("pointerdown", m, !0), s.addEventListener("keydown", v, !0), s.addEventListener("scroll", c, !0), s.defaultView?.addEventListener("resize", l), s.defaultView?.addEventListener("blur", l), () => {
      s.removeEventListener("pointerdown", m, !0), s.removeEventListener("keydown", v, !0), s.removeEventListener("scroll", c, !0), s.defaultView?.removeEventListener("resize", l), s.defaultView?.removeEventListener("blur", l), (g?.isConnected ? g : a.isConnected ? a : null)?.focus?.();
    };
  }, [s, a]), to(/* @__PURE__ */ i(bo, { items: e, label: t, point: n, root: !0, onClose: l }), s.body);
}
function ti(e, t) {
  const n = encodeURIComponent(t.author ?? ""), a = encodeURIComponent(t.name), l = encodeURIComponent(e);
  return t.backend === "Hexium" ? `https://${l}.hexium.gg/mods/${n}/${a}` : `https://thunderstore.io/c/${l}/p/${n}/${a}/`;
}
function Fn(e) {
  if (e)
    try {
      const t = new URL(e);
      return t.protocol === "http:" || t.protocol === "https:" ? t.href : void 0;
    } catch {
      return;
    }
}
function ni({ code: e, error: t, game: n, onRetry: a }) {
  Te();
  const [l, s] = w(!1), [d, g] = w(""), m = e === "gale_session_locked", v = async () => {
    if (!l) {
      s(!0), g("");
      try {
        await y.restart(), await Ke(), a?.();
      } catch (c) {
        g(F(c));
      } finally {
        s(!1);
      }
    }
  };
  return /* @__PURE__ */ p("section", { className: "galex gx-mods gx-connection-error", "aria-label": `${o("mods")} — ${n.name}`, "data-appid": n.steamAppId, role: "alert", children: [
    /* @__PURE__ */ p("div", { className: "gx-heading", children: [
      /* @__PURE__ */ i("h1", { children: o("mods") }),
      /* @__PURE__ */ i("div", { className: "gx-heading-meta", children: n.name })
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-error-screen", children: [
      /* @__PURE__ */ i(J, { name: m ? "lock" : "warning", size: 32 }),
      /* @__PURE__ */ i("h2", { children: o(m ? "sessionLockedTitle" : "connectionErrorTitle") }),
      /* @__PURE__ */ i("p", { children: m ? o("sessionLockedBody") : t || o("connectionErrorBody") }),
      d && /* @__PURE__ */ i(re, { error: !0, children: d }),
      /* @__PURE__ */ p("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ i(M, { primary: !0, icon: "refresh", disabled: l, onClick: () => void v(), children: o(l ? "working" : "retryConnection") }),
        /* @__PURE__ */ i(M, { icon: "sliders", disabled: l, onClick: Aa, children: o("openSettings") })
      ] })
    ] })
  ] });
}
const vo = "galex:launch-options:v1", dt = "%command%", at = /* @__PURE__ */ new Map();
function ln(e) {
  return e?.defaultView?.SteamClient?.Apps ?? window.SteamClient?.Apps ?? R()?.SteamClient?.Apps;
}
function ee(e) {
  return e.replace(/\s+/g, " ").trim();
}
function wo() {
  const e = Kt(vo);
  if (!e || typeof e != "object") return {};
  const t = {};
  for (const [n, a] of Object.entries(e))
    /^\d{1,10}$/.test(n) && a && typeof a.args == "string" && ["windows", "linux", "macos"].includes(a.platform) && (t[n] = { args: a.args, platform: a.platform });
  return t;
}
function oi(e, t) {
  const n = wo();
  t.args ? n[String(e)] = t : delete n[String(e)], Yt(vo, n);
}
function ai(e, t) {
  if (!t) return e;
  const n = e.indexOf(t);
  return n < 0 ? e : ee(`${e.slice(0, n)} ${e.slice(n + t.length)}`);
}
function ii(e, t) {
  if (!t) return !0;
  const n = ee(e), a = ee(t);
  return n === a || n.endsWith(` ${a}`) || n.includes(` ${a} `);
}
function zn(e) {
  const t = /(?:^|\s)%command%(?:\s|$)/i.exec(e);
  if (!t) return;
  const n = t.index + (t[0].startsWith(" ") ? 1 : 0);
  return { before: e.slice(0, n).trim(), after: e.slice(n + dt.length).trim() };
}
function ri(e, t, n, a = "") {
  const l = ai(ee(e), a), s = t.trim();
  if (!s) {
    if (n === "windows") return l;
    const g = zn(l);
    return g ? !g.before && !g.after ? "" : ee(`${g.before} ${dt} ${g.after}`) : l;
  }
  if (ii(l, s)) return l;
  if (n === "windows") return ee(`${l} ${s}`);
  const d = zn(l);
  return ee(d ? `${d.before} ${dt} ${d.after} ${s}` : `${dt} ${l} ${s}`);
}
function yo(e, t) {
  const n = t ? e?.strShortcutLaunchOptions : e?.strLaunchOptions;
  return typeof n == "string" ? n : "";
}
function ko(e, t, n) {
  if (typeof e?.RegisterForAppDetails != "function") throw new Error(o("launchOptionsUnavailable"));
  let a = !0, l;
  const s = () => {
    a = !1;
    try {
      l?.unregister?.();
    } catch {
    }
  };
  return l = e.RegisterForAppDetails(t, (d) => {
    a && n(d ?? {});
  }), a || s(), s;
}
function Co(e, t, n) {
  const a = ln(n);
  return new Promise((l, s) => {
    let d = !1, g = () => {
    };
    const m = setTimeout(() => v(new Error(o("launchOptionsUnavailable"))), 5e3), v = (c, u) => {
      d || (d = !0, clearTimeout(m), g(), c ? s(c instanceof Error ? c : new Error(String(c))) : l(u ?? ""));
    };
    try {
      g = ko(a, e, (c) => v(void 0, yo(c, t)));
    } catch (c) {
      v(c);
    }
  });
}
function li(e, t, n, a) {
  const l = ln(a);
  return new Promise((s, d) => {
    let g = !1, m = () => {
    };
    const v = setTimeout(() => c(new Error(o("launchOptionsUnavailable"))), 5e3), c = (u) => {
      g || (g = !0, clearTimeout(v), m(), u ? d(u instanceof Error ? u : new Error(String(u))) : s());
    };
    try {
      m = ko(l, e, (u) => {
        ee(yo(u, t)) === ee(n) && c();
      });
    } catch (u) {
      c(u);
    }
  });
}
async function si(e, t, n, a) {
  const l = ln(a), s = t ? l?.SetShortcutLaunchOptions : l?.SetAppLaunchOptions;
  if (typeof s != "function") throw new Error(o("launchOptionsUnavailable"));
  const d = await Co(e, t, a);
  if (ee(d) === ee(n)) return !1;
  const g = li(e, t, n, a);
  return s.call(l, e, n), await g, !0;
}
async function di(e, t) {
  if (!ut().autoLaunchOptions || !e.steamAppId) return;
  const n = e.steamAppId, a = !!e.nonSteam || vt(n, t), l = await y.launchPlan(e.slug), s = wo()[String(n)], d = await Co(n, a, t), g = ri(d, l.args, l.platform, s?.args ?? ""), m = await si(n, a, g, t);
  oi(n, { args: l.args.trim(), platform: l.platform }), m && y.log(`launch options applied appid=${n} nonSteam=${a}`).catch(() => {
  });
}
function Rn(e, t) {
  const n = e.steamAppId;
  if (!n) return Promise.resolve();
  const l = (at.get(n) ?? Promise.resolve()).catch(() => {
  }).then(() => di(e, t));
  return at.set(n, l), l.finally(() => {
    at.get(n) === l && at.delete(n);
  }).catch(() => {
  }), l;
}
function Hn(e) {
  return o("launchOptionsFailed", { error: F(e) });
}
const ci = { includeCategories: [], excludeCategories: [], includeNsfw: !1, includeDeprecated: !0, includeDisabled: !0, includeEnabled: !0, sortBy: "name", sortOrder: "ascending" }, Un = { mods: [], totalModCount: 0, updates: [], unknownMods: [] };
function pi(e) {
  if (e.type === "remote" && e.author && e.version) {
    if (e.backend === "Thunderstore") return `https://ccdn.thunderstore.io/live/repository/icons/${encodeURIComponent(`${e.author}-${e.name}-${e.version}`)}.png`;
    if (e.backend === "Hexium") return `https://cdn.hexium.gg/uploads/${encodeURIComponent(e.author)}/${encodeURIComponent(e.name)}/icon.png?${encodeURIComponent(e.version)}`;
  }
  if (e.icon && /^(https?:|data:)/i.test(e.icon)) return e.icon;
}
function ui({ mod: e }) {
  const [t, n] = w(!1), a = pi(e.data);
  return !a || t ? /* @__PURE__ */ i("span", { className: "gx-mod-avatar", "aria-hidden": "true", children: e.data.name.slice(0, 2).toUpperCase() }) : /* @__PURE__ */ i("img", { className: "gx-mod-avatar", src: a, alt: "", loading: "lazy", onError: () => n(!0) });
}
const Dt = (e) => e.replace(/_/g, " ");
function gi({ game: e, demo: t = !1, installing: n = !1, embedded: a = !1 }) {
  Te();
  const l = bt(), [s, d] = w({ activeId: 0, profiles: [] }), [g, m] = w(), [v, c] = w(Un), [u, h] = w(""), [L, S] = w(""), [G, b] = w("all"), [C, A] = w("name"), [T, U] = w(!0), [E, ne] = w(""), [X, ae] = w([]), [se, Oe] = w(!1), [pe, ue] = w(!0), [we, x] = w(""), [O, de] = w(""), [Ge, B] = w(""), [N, dn] = w(""), [cn, Go] = w(0), [Po, Lo] = w(0), [V, W] = w(null), [ce, oe] = w(""), [Ye, yt] = w(""), [K, Pe] = w(null), [Le, pn] = w("code"), [Be, $e] = w("new"), [un, Do] = w(!1), [gn, _o] = w(!1), [kt, Eo] = w(""), [ye, mn] = w(null), [fn, hn] = w([]), [xn, bn] = w(""), [To, vn] = w(!1), [Fe, Ct] = w([]), [ge, je] = w(null), [me, Oo] = w(null), [ze, et] = w(null), [tt, St] = w(null), nt = qe(!0), Re = on(), wn = co(), _ = { slug: e.slug, profileId: g }, fe = s.profiles.find((r) => r.id === g), H = () => Go((r) => r + 1), At = () => Lo((r) => r + 1);
  q(() => (nt.current = !0, () => {
    nt.current = !1, zt(l);
  }), [l]), q(() => {
    et(null), zt(l);
  }, [l, e.slug, g]), q(() => {
    const r = setTimeout(() => S(u), 220);
    return () => clearTimeout(r);
  }, [u]), q(() => {
    let r = !1;
    return ue(!0), x(""), m(void 0), c(Un), h(""), ne(""), ae([]), b("all"), y.call("profiles", { slug: e.slug }).then((f) => {
      r || (d(f), m(f.activeId));
    }).catch((f) => {
      r || (x(F(f)), ue(!1), io(f) === "gale_session_locked" && Ke());
    }), () => {
      r = !0;
    };
  }, [e.slug, Po]), q(() => {
    if (g === void 0) return;
    let r = !1;
    ue(!0);
    const f = { ...ci, searchTerm: L, includeEnabled: G !== "disabled", includeDisabled: G !== "enabled", includeCategories: E ? [E] : [], sortBy: C, sortOrder: T ? "ascending" : "descending" };
    return y.call("mods", { slug: e.slug, profileId: g }, { args: f }).then((k) => {
      r || (c(k), x(""), ae((I) => Array.from(/* @__PURE__ */ new Set([...I, ...k.mods.flatMap((z) => z.data.categories ?? [])])).sort()));
    }).catch((k) => {
      r || x(F(k));
    }).finally(() => {
      r || ue(!1);
    }), () => {
      r = !0;
    };
  }, [e.slug, g, L, G, C, T, E, cn]), q(() => {
    if (!Ge) return;
    const r = setTimeout(() => B(""), 4500);
    return () => clearTimeout(r);
  }, [Ge]), q(() => {
    if (t || g === void 0 || Re.error || !wn.autoLaunchOptions) return;
    let r = !1;
    return Rn(e, l).then(() => {
      r || de("");
    }).catch((f) => {
      r || de(Hn(f));
    }), () => {
      r = !0;
    };
  }, [e.slug, e.steamAppId, g, cn, Re.error, wn.autoLaunchOptions, t, l]), q(() => {
    V !== "export" || t || y.call("list_export_files", _).then(Ct).catch((r) => x(F(r)));
  }, [V, g]);
  const { snapshot: Bo } = ho(), $o = Bo?.tasks.find((r) => r.slug === e.slug && r.status === "active"), He = v.updates.filter((r) => !r.ignore), yn = G === "updates" ? v.mods.filter((r) => He.some((f) => f.updatedId.packageUuid === r.data.uuid)) : v.mods, Fo = v.mods.filter((r) => r.enabled).length, zo = eo(() => Fe.filter((r) => r.included).reduce((r, f) => r + f.size, 0), [Fe]), D = ra(async (r, f) => {
    if (!N) {
      et(null), dn(r), x("");
      try {
        await f();
      } catch (k) {
        nt.current && x(F(k));
      } finally {
        nt.current && dn("");
      }
    }
  }, [N]), Nt = async (r, f = {}) => {
    await y.call(r, _, f);
    const k = await y.call("profiles", { slug: e.slug }), I = r === "import_profile" ? ce.trim() : ce;
    let z = k.activeId;
    (r === "create_profile" || r === "duplicate_profile" || r === "import_profile") && (z = k.profiles.find(($) => $.name === I)?.id ?? k.activeId), r === "delete_profile" && (z = k.activeId), await y.call("activate_profile", { slug: e.slug, profileId: z }), d(k), m(z), W(null), oe(""), Pe(null), H(), B(o("profileSaved"));
  }, Ro = (r) => void D(r.data.uuid, async () => {
    const f = await y.call("toggle_mod", _, { uuid: r.data.uuid });
    f.type === "confirm" ? je({ title: o("disableMod", { name: r.data.name }), description: o("disableDependants"), uuids: [r.data.uuid, ...f.dependants.map((k) => k.uuid)], kind: "toggle" }) : H();
  }), kn = (r) => void D(r.data.uuid, async () => {
    const f = await y.call("remove_mod", _, { uuid: r.data.uuid });
    f.type === "confirm" ? je({ title: o("removeMod", { name: r.data.name }), description: o("removeDependants"), uuids: [r.data.uuid, ...f.dependants.map((k) => k.uuid)], kind: "remove" }) : (H(), B(o("modRemoved")));
  }), Ho = () => {
    ge && D("confirm", async () => {
      await y.call(ge.kind === "toggle" ? "force_toggle_mods" : "force_remove_mods", _, { uuids: [...new Set(ge.uuids)] }), je(null), H(), B(ge.kind === "toggle" ? o("stateChanged") : o("modRemoved"));
    });
  }, Cn = async (r, f) => {
    try {
      await Ca(r, l), B(f);
    } catch {
      x(o("clipboardError"));
    }
  }, Mt = (r) => void D("browser", async () => {
    if (t) {
      B(o("demoConfig"));
      return;
    }
    const f = await y.browserUrl({ ..._, lang: ma(), file: r?.configFile });
    Xe(f.url), B(o("configOpened"));
  }), It = (r, f, k = r.data.backend) => void D("version", async () => {
    await y.call("change_mod_version", _, { id: { packageUuid: r.data.uuid, versionUuid: f.uuid, backend: k } }), W(null), H(), B(o("versionQueued"));
  }), Uo = (r) => void D("folder", async () => {
    if (t) {
      B(o("demoFolder"));
      return;
    }
    const f = await y.call("mod_dir", _, { uuid: r.data.uuid });
    Sa(f, l) || await y.call("open_mod_dir", _, { uuid: r.data.uuid }), B(o("folderOpened"));
  }), Xo = (r) => void D("dependants", async () => {
    const f = await y.call("get_dependants", _, { uuid: r.data.uuid });
    St({ name: r.data.name, items: f });
  }), Vo = (r) => {
    const f = !!N, k = [{ id: "uninstall", label: o("uninstall"), icon: "trash", danger: !0, disabled: f, onSelect: () => kn(r) }];
    if (r.data.type === "remote" && k.push({ id: "versions", label: o("versions"), icon: "layers", disabled: f, onSelect: () => {
      Oo(r), W("versions");
    } }), r.data.versions.length > 1 && k.push({ id: "version", label: o("changeVersion"), icon: "layers", disabled: f, children: r.data.versions.filter(($) => $.uuid !== r.data.versionUuid).map(($) => ({ id: `version-${$.uuid}`, label: $.name, onSelect: () => It(r, $) })) }), r.alternateBackend) {
      const $ = r.alternateBackend;
      k.push({ id: "source", label: o("changeSource"), icon: "branch", disabled: f, children: [{ id: `source-${$.backend}`, label: `${$.backend} (${$.latestVersion})`, onSelect: () => It(r, { name: $.latestVersion, uuid: $.latestVersionUuid }, $.backend) }] });
    }
    k.push({ id: "dependants", label: o("showDependants"), icon: "branch", disabled: f, onSelect: () => Xo(r) }), k.push({ id: "folder", label: o("openFolder"), icon: "folder", disabled: f, onSelect: () => Uo(r) }), r.configFile && k.push({ id: "config", label: o("openConfig"), icon: "sliders", disabled: f, onSelect: () => Mt(r) });
    const I = Fn(r.data.websiteUrl);
    I && k.push({ id: "website", label: o("openWebsite"), icon: "external", disabled: f, onSelect: () => Xe(I) }), r.data.type === "remote" && k.push({ id: "link", label: o("copyLink"), icon: "link", disabled: f, onSelect: () => void Cn(ti(e.slug, r.data), o("linkCopied")) });
    const z = Fn(r.data.donateUrl);
    return z && k.push({ id: "donate", label: o("donate"), icon: "heart", disabled: f, onSelect: () => Xe(z) }), k;
  }, Sn = (r, f, k) => {
    const I = Vo(f), z = `${o("modActions")} — ${Dt(f.data.name)}`;
    if (ja(I, r, z, k)) return;
    const $ = r.getBoundingClientRect();
    et({ items: I, label: z, point: k ?? { x: $.left + 24, y: $.top + 24 }, anchor: r });
  }, Wo = () => void D("import", async () => {
    if (!Ye.trim()) throw new Error(o("importCodePlaceholder"));
    const r = await y.call("read_profile_code", _, { code: Ye.trim() });
    Pe(r), oe(r.manifest.profileName), $e(s.profiles.some((f) => f.name === r.manifest.profileName) ? "overwrite" : "new");
  }), qo = (r) => {
    if (r.size > 15 * 1024 * 1024) {
      x(o("fileTooLarge"));
      return;
    }
    const f = new FileReader();
    f.onload = () => void D("import", async () => {
      const k = String(f.result).split(",")[1] ?? "", I = await y.call("read_profile_base64", _, { base64: k });
      Pe(I), oe(I.manifest.profileName), $e(s.profiles.some((z) => z.name === I.manifest.profileName) ? "overwrite" : "new");
    }), f.onerror = () => x(o("fileReadError")), f.readAsDataURL(r);
  }, Zo = (r) => void D("import", async () => {
    const f = await y.call("read_profile_file", _, { path: r });
    Pe(f), oe(f.manifest.profileName), $e(s.profiles.some((k) => k.name === f.manifest.profileName) ? "overwrite" : "new");
  }), Qo = async () => {
    const r = await Pn(o("profileFileDialog"), o("profileFileFilter"), ["*.r2z", "*.zip"]);
    r && Zo(r);
  }, Jo = async () => {
    const r = await Pn(o("localFileDialog"), o("localFileFilter"), ["*.zip"]);
    r && D("local", async () => {
      await y.call("import_local_mod", _, { path: r }), W(null), H(), B(o("profileSaved"));
    });
  }, Ko = () => void D("import", async () => {
    if (!K) return;
    const r = { ...K, manifest: { ...K.manifest, profileName: ce.trim() || K.manifest.profileName } };
    await Nt("import_profile", { data: r, options: { importAll: un, merge: Be === "overwrite" && gn, ignoreMissingMods: K.missingMods.length > 0 } });
  }), Yo = () => void D("r2", async () => {
    const r = await y.call("get_r2modman_info", _, { path: kt.trim() || null });
    mn(r), hn(r?.profiles.map(() => !0) ?? []);
  }), jo = () => void D("r2", async () => {
    ye && (await y.call("import_r2modman", _, { path: ye.path, include: fn }), W(null), At(), H(), B(o("profileSaved")));
  }), ea = (r) => {
    if (r.size > 15 * 1024 * 1024) {
      x(o("fileTooLarge"));
      return;
    }
    const f = new FileReader();
    f.onload = () => void D("local", async () => {
      await y.call("import_local_mod_base64", _, { base64: String(f.result).split(",")[1] ?? "" }), W(null), H(), B(o("profileSaved"));
    }), f.onerror = () => x(o("fileReadError")), f.readAsDataURL(r);
  }, ta = () => void D("export", async () => {
    const r = await y.call("export_code", _);
    vn(r.type !== "success"), bn(r.code ?? ""), W("export");
  }), na = (r) => {
    if (t) {
      Ct(r);
      return;
    }
    D("export-files", async () => {
      await y.call("set_excluded_export_files", _, { excludedFiles: r.filter((f) => !f.included).map((f) => f.path) }), Ct(r), bn("");
    });
  }, oa = () => void D("export-file", async () => {
    const { url: r } = await y.browserUrl({ ..._, kind: "export" });
    ka(r);
  }), aa = () => void D("update", async () => {
    await y.call("update_mods", _, { uuids: He.map((r) => r.updatedId.packageUuid) }), B(o(t ? "demoUpdate" : "updateQueued")), H();
  }), he = () => {
    N || (W(null), Pe(null), oe(""), yt(""), mn(null), vn(!1));
  };
  return !t && Re.error ? /* @__PURE__ */ i(ni, { code: Re.errorCode, error: Re.error, game: e, onRetry: () => {
    x(""), At(), H();
  } }) : /* @__PURE__ */ p("section", { className: `galex gx-mods${a ? " gx-mods--embedded" : ""}`, "aria-label": `${o("mods")} — ${e.name}`, "data-appid": e.steamAppId, children: [
    !a && /* @__PURE__ */ p("div", { className: "gx-heading", children: [
      /* @__PURE__ */ i("h1", { children: o("mods") }),
      (n || t) && /* @__PURE__ */ i("div", { className: "gx-heading-meta", children: o(n ? "working" : "demo") })
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-toolbar", children: [
      /* @__PURE__ */ i(M, { onClick: () => Xe(`https://thunderstore.io/c/${encodeURIComponent(e.slug)}/`), children: o("openThunderstore") }),
      /* @__PURE__ */ p(M, { onClick: () => Oe((r) => !r), "aria-expanded": se, children: [
        o("advanced"),
        " ",
        /* @__PURE__ */ i(J, { name: "chevron-down", className: se ? "gx-chevron-open" : "", size: 13 })
      ] })
    ] }),
    se && /* @__PURE__ */ p("div", { className: "gx-advanced", children: [
      /* @__PURE__ */ p("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ p("div", { className: "gx-profile-line", children: [
          /* @__PURE__ */ i("span", { className: "gx-field-label", children: o("profile") }),
          /* @__PURE__ */ i(be, { label: o("profile"), value: g ?? 0, disabled: !!N || !s.profiles.length, options: s.profiles.map((r) => ({ value: r.id, label: r.name })), onChange: (r) => void D("profile", async () => {
            await y.call("activate_profile", { slug: e.slug, profileId: r }), m(r), H();
          }) })
        ] }),
        /* @__PURE__ */ p("div", { className: "gx-profile-actions", children: [
          /* @__PURE__ */ i(M, { icon: "plus", disabled: !!N, onClick: () => {
            oe(""), W("create");
          }, children: o("createProfile") }),
          /* @__PURE__ */ i(M, { disabled: !fe || !!N, onClick: () => {
            oe(fe?.name ?? ""), W("rename");
          }, children: o("renameProfile") }),
          /* @__PURE__ */ i(M, { disabled: !fe || !!N, onClick: () => {
            oe(`${fe?.name} copy`), W("duplicate");
          }, children: o("duplicateProfile") }),
          /* @__PURE__ */ i(M, { className: "gx-danger", disabled: s.profiles.length < 2 || !!N, onClick: () => W("delete"), children: o("deleteProfile") })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ i("div", { className: "gx-profile-line", children: /* @__PURE__ */ i("span", { className: "gx-field-label", children: o("profileTransfer") }) }),
        /* @__PURE__ */ p("div", { className: "gx-profile-actions", children: [
          /* @__PURE__ */ i(M, { icon: "download", disabled: !fe || !!N, onClick: () => {
            yt(""), Pe(null), pn("code"), W("import");
          }, children: o("import") }),
          /* @__PURE__ */ i(M, { icon: "external", disabled: !fe || !!N, onClick: ta, children: o("export") })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ i("div", { className: "gx-profile-line", children: /* @__PURE__ */ i("span", { className: "gx-field-label", children: o("modConfiguration") }) }),
        /* @__PURE__ */ i("div", { className: "gx-profile-actions", children: /* @__PURE__ */ i(M, { icon: "sliders", disabled: !fe || !!N, onClick: () => Mt(), children: o("config") }) })
      ] })
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-search-row", children: [
      /* @__PURE__ */ p("div", { className: "gx-filter-group", children: [
        /* @__PURE__ */ p("span", { className: "gx-field-label DialogLabel", children: [
          o("filter"),
          ":"
        ] }),
        /* @__PURE__ */ p("label", { className: "gx-search DialogInput_Wrapper", children: [
          /* @__PURE__ */ i("input", { className: "DialogInput DialogInputPlaceholder DialogTextInputBase", "aria-label": o("searchMods"), placeholder: o("searchMods"), value: u, onChange: (r) => h(r.target.value) }),
          u && /* @__PURE__ */ i("button", { "aria-label": o("clearSearch"), onClick: () => h(""), children: /* @__PURE__ */ i(J, { name: "x", size: 13 }) })
        ] })
      ] }),
      /* @__PURE__ */ i(be, { label: o("filter"), value: G, onChange: b, options: [{ value: "all", label: o("all") }, { value: "enabled", label: o("enabled") }, { value: "disabled", label: o("disabled") }, { value: "updates", label: o("updates") }] }),
      /* @__PURE__ */ p("div", { className: "gx-filter-group", children: [
        /* @__PURE__ */ p("span", { className: "gx-field-label DialogLabel", children: [
          o("sortBy"),
          ":"
        ] }),
        /* @__PURE__ */ i(be, { label: o("sortBy"), value: C, onChange: A, options: [{ value: "name", label: o("byName") }, { value: "author", label: o("byAuthor") }, { value: "installDate", label: o("byInstallDate") }, { value: "diskSpace", label: o("bySize") }, { value: "downloads", label: o("byDownloads") }] }),
        /* @__PURE__ */ i(ie, { className: "gx-sort-direction", icon: T ? "arrow-up" : "arrow-down", label: o(T ? "ascending" : "descending"), onClick: () => U((r) => !r), disabled: !!N })
      ] }),
      /* @__PURE__ */ i(be, { label: o("categories"), value: E, onChange: ne, options: [{ value: "", label: o("allCategories") }, ...X.map((r) => ({ value: r, label: r }))] })
    ] }),
    we && /* @__PURE__ */ i(re, { error: !0, onRetry: () => {
      x(""), H();
    }, children: we }),
    O && /* @__PURE__ */ i(re, { error: !0, onRetry: () => void Rn(e, l).then(() => de("")).catch((r) => de(Hn(r))), children: O }),
    Ge && /* @__PURE__ */ i(re, { children: Ge }),
    $o && /* @__PURE__ */ i(re, { children: /* @__PURE__ */ p("span", { children: [
      o("operationInProgress"),
      " ",
      /* @__PURE__ */ i("button", { className: "gx-update-link", onClick: ya, children: o("openDownloads") })
    ] }) }),
    /* @__PURE__ */ p("div", { className: "gx-list-heading", children: [
      /* @__PURE__ */ i("span", { children: o("modCount", { count: v.totalModCount }) }),
      /* @__PURE__ */ i("span", { children: o("enabledCount", { count: Fo }) }),
      !!He.length && /* @__PURE__ */ p("button", { className: "gx-update-link", disabled: !!N, onClick: aa, children: [
        /* @__PURE__ */ i(J, { name: "download", size: 13 }),
        o("updateAll", { count: He.length })
      ] }),
      /* @__PURE__ */ i(ie, { icon: "refresh", label: o("refresh"), onClick: () => {
        At(), H();
      }, disabled: !!N })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-mod-list", role: "list", tabIndex: 0, children: pe && !v.mods.length ? /* @__PURE__ */ i("div", { className: "gx-empty", children: o("loading") }) : yn.length ? yn.map((r, f) => {
      const k = He.find((I) => I.updatedId.packageUuid === r.data.uuid);
      return /* @__PURE__ */ p(
        "div",
        {
          className: `gx-mod-row ${r.enabled ? "" : "is-disabled"}`,
          role: "listitem",
          tabIndex: 0,
          "aria-haspopup": "menu",
          "data-mod-uuid": r.data.uuid,
          onContextMenu: (I) => {
            I.preventDefault(), I.stopPropagation(), Sn(I.currentTarget, r, { x: I.clientX, y: I.clientY });
          },
          onKeyDown: (I) => {
            I.target === I.currentTarget && (I.key === "ContextMenu" || I.shiftKey && I.key === "F10") && (I.preventDefault(), I.stopPropagation(), Sn(I.currentTarget, r));
          },
          children: [
            /* @__PURE__ */ i(Ue, { checked: r.enabled, disabled: !!N, label: Dt(r.data.name), onChange: () => Ro(r) }),
            /* @__PURE__ */ i("span", { className: "gx-mod-index", children: f + 1 }),
            /* @__PURE__ */ i(ui, { mod: r }),
            /* @__PURE__ */ p("div", { className: "gx-mod-info", children: [
              /* @__PURE__ */ p("div", { className: "gx-mod-title", children: [
                /* @__PURE__ */ i("h3", { children: Dt(r.data.name) }),
                k && /* @__PURE__ */ p("span", { className: "gx-badge gx-badge--update", children: [
                  k.old,
                  " → ",
                  k.new
                ] }),
                r.data.type === "local" && /* @__PURE__ */ i("span", { className: "gx-badge", children: o("local") })
              ] }),
              !!r.data.dependencies?.length && /* @__PURE__ */ p("p", { children: [
                o("dependsOn"),
                ": ",
                r.data.dependencies.join(", ")
              ] }),
              /* @__PURE__ */ p("div", { className: "gx-mod-byline", children: [
                /* @__PURE__ */ i("span", { children: r.data.author }),
                /* @__PURE__ */ p("span", { children: [
                  "v",
                  r.data.version
                ] }),
                !!r.data.categories?.length && /* @__PURE__ */ p("span", { children: [
                  o("tags"),
                  ": ",
                  r.data.categories.join(", ")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ i("span", { className: "gx-mod-size", children: Ne(r.data.fileSize) }),
            /* @__PURE__ */ p("div", { className: "gx-mod-actions", children: [
              r.configFile && /* @__PURE__ */ i(ie, { icon: "sliders", label: o("openConfig"), disabled: !!N, onClick: () => Mt(r) }),
              k && /* @__PURE__ */ i(ie, { icon: "download", label: o("update"), disabled: !!N, onClick: () => void D("update-one", async () => {
                await y.call("update_mods", _, { uuids: [r.data.uuid] }), H(), B(o("updateQueued"));
              }) }),
              /* @__PURE__ */ i(ie, { icon: "trash", label: o("remove"), disabled: !!N, onClick: () => kn(r) })
            ] })
          ]
        },
        r.data.uuid
      );
    }) : /* @__PURE__ */ i("div", { className: "gx-empty", children: o("noMods") }) }),
    ge && /* @__PURE__ */ i(Dn, { title: ge.title, onClose: () => je(null), onConfirm: Ho, busy: !!N, danger: ge.kind === "remove", children: /* @__PURE__ */ i("p", { children: ge.description }) }),
    (V === "create" || V === "rename" || V === "duplicate") && /* @__PURE__ */ i(ke, { title: o(V === "create" ? "createProfileTitle" : V === "rename" ? "renameProfileTitle" : "duplicateProfileTitle"), onClose: he, footer: /* @__PURE__ */ p(Z, { children: [
      /* @__PURE__ */ i(M, { onClick: he, disabled: !!N, children: o("cancel") }),
      /* @__PURE__ */ i(M, { primary: !0, disabled: !!N || !ce.trim(), onClick: () => void D("profile", () => Nt(V === "create" ? "create_profile" : V === "rename" ? "rename_profile" : "duplicate_profile", { name: ce.trim() })), children: o(N ? "working" : "save") })
    ] }), children: /* @__PURE__ */ p("label", { className: "gx-form-label", children: [
      o("profileName"),
      /* @__PURE__ */ i("input", { value: ce, onChange: (r) => oe(r.target.value), autoFocus: !0 })
    ] }) }),
    V === "delete" && /* @__PURE__ */ i(Dn, { title: o("deleteProfileTitle"), onClose: he, onConfirm: () => void D("profile", () => Nt("delete_profile", { id: g })), busy: !!N, danger: !0, children: /* @__PURE__ */ i("p", { children: o("deleteProfileBody", { name: fe?.name ?? "" }) }) }),
    V === "import" && /* @__PURE__ */ i(ke, { title: o(K ? "importPreview" : "importTitle"), onClose: he, footer: /* @__PURE__ */ p(Z, { children: [
      /* @__PURE__ */ i(M, { onClick: he, disabled: !!N, children: o("cancel") }),
      K ? /* @__PURE__ */ i(M, { primary: !0, onClick: Ko, disabled: !!N || !ce.trim(), children: o(N ? "importing" : "installProfile") }) : Le === "code" ? /* @__PURE__ */ i(M, { primary: !0, onClick: Wo, disabled: !!N || !Ye.trim(), children: o(N ? "working" : "continue") }) : Le === "r2" ? /* @__PURE__ */ i(M, { primary: !0, onClick: ye ? jo : Yo, disabled: !!N || !ye && !kt.trim(), children: o(N ? "working" : ye ? "import" : "r2Load") }) : null
    ] }), children: K ? /* @__PURE__ */ p(Z, { children: [
      /* @__PURE__ */ p("div", { className: "gx-tabs", children: [
        /* @__PURE__ */ i(M, { className: Be === "new" ? "gx-button--primary" : "", onClick: () => $e("new"), children: o("newProfile") }),
        /* @__PURE__ */ i(M, { className: Be === "overwrite" ? "gx-button--primary" : "", onClick: () => $e("overwrite"), children: o("overwriteProfile") })
      ] }),
      /* @__PURE__ */ p("label", { className: "gx-form-label", children: [
        o("profileName"),
        /* @__PURE__ */ i("input", { value: ce, onChange: (r) => oe(r.target.value) })
      ] }),
      Be === "overwrite" && /* @__PURE__ */ i(be, { label: o("overwriteProfile"), value: ce, onChange: oe, options: s.profiles.map((r) => ({ value: r.name, label: r.name })) }),
      /* @__PURE__ */ p("div", { className: "gx-import-summary", children: [
        /* @__PURE__ */ i("strong", { children: K.manifest.profileName }),
        /* @__PURE__ */ i("span", { children: o("modsToInstall", { count: K.manifest.mods.length }) })
      ] }),
      !!K.missingMods.length && /* @__PURE__ */ i(re, { error: !0, children: o("missingMods", { mods: K.missingMods.join(", ") }) }),
      /* @__PURE__ */ p("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ i(Ue, { checked: un, onChange: Do, label: o("importAllFiles") }),
        o("importAllFiles")
      ] }),
      Be === "overwrite" && /* @__PURE__ */ p("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ i(Ue, { checked: gn, onChange: _o, label: o("mergeProfiles") }),
        o("mergeProfiles")
      ] })
    ] }) : /* @__PURE__ */ p(Z, { children: [
      /* @__PURE__ */ i("div", { className: "gx-tabs", children: ["code", "r2", "local"].map((r) => /* @__PURE__ */ i(M, { className: Le === r ? "gx-button--primary" : "", onClick: () => pn(r), children: o(r === "code" ? "importCode" : r === "r2" ? "importR2" : "importLocal") }, r)) }),
      Le === "code" && /* @__PURE__ */ p(Z, { children: [
        /* @__PURE__ */ p("label", { className: "gx-form-label", children: [
          o("importCode"),
          /* @__PURE__ */ i("textarea", { value: Ye, onChange: (r) => yt(r.target.value), placeholder: o("importCodePlaceholder"), rows: 3 })
        ] }),
        /* @__PURE__ */ p("div", { className: "gx-form-label", children: [
          /* @__PURE__ */ i("span", { children: o("importFile") }),
          Gn() ? /* @__PURE__ */ i(M, { icon: "folder", disabled: !!N, onClick: () => void Qo(), children: o("importFileButton") }) : /* @__PURE__ */ i("input", { type: "file", accept: ".r2z,.zip", onChange: (r) => {
            const f = r.target.files?.[0];
            f && qo(f);
          } })
        ] })
      ] }),
      Le === "r2" && /* @__PURE__ */ p(Z, { children: [
        /* @__PURE__ */ p("label", { className: "gx-form-label", children: [
          o("r2Path"),
          /* @__PURE__ */ i("input", { value: kt, onChange: (r) => Eo(r.target.value), placeholder: "~/.config/r2modman" })
        ] }),
        ye && /* @__PURE__ */ p("div", { className: "gx-file-list", children: [
          /* @__PURE__ */ i("strong", { children: o("r2Profiles") }),
          ye.profiles.map((r, f) => /* @__PURE__ */ p("label", { children: [
            /* @__PURE__ */ i(Ue, { checked: !!fn[f], label: r, onChange: (k) => hn((I) => I.map((z, $) => $ === f ? k : z)) }),
            /* @__PURE__ */ i("span", { children: r })
          ] }, r))
        ] })
      ] }),
      Le === "local" && /* @__PURE__ */ p("div", { className: "gx-form-label", children: [
        /* @__PURE__ */ i("span", { children: o("importLocalFile") }),
        Gn() ? /* @__PURE__ */ i(M, { icon: "folder", disabled: !!N, onClick: () => void Jo(), children: o("importLocalFile") }) : /* @__PURE__ */ i("input", { type: "file", accept: ".zip", onChange: (r) => {
          const f = r.target.files?.[0];
          f && ea(f);
        } })
      ] })
    ] }) }),
    V === "export" && /* @__PURE__ */ p(ke, { title: o("exportTitle"), onClose: he, footer: /* @__PURE__ */ i(M, { primary: !0, onClick: he, children: o("done") }), children: [
      /* @__PURE__ */ i("p", { children: o("exportIntro") }),
      To ? /* @__PURE__ */ i(re, { error: !0, children: o("exportTooLarge") }) : /* @__PURE__ */ p("div", { className: "gx-export-code", children: [
        /* @__PURE__ */ i("code", { children: xn }),
        /* @__PURE__ */ i(ie, { icon: "copy", label: o("copyCode"), onClick: () => void Cn(xn, o("codeCopied")) })
      ] }),
      !t && /* @__PURE__ */ p("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ i(M, { icon: "download", disabled: !!N, onClick: oa, children: o("exportFile") }),
        /* @__PURE__ */ i(M, { icon: "copy", disabled: !!N, onClick: () => void D("deps", async () => {
          await y.call("copy_dependency_strings", _), B(o("dependenciesCopied"));
        }), children: o("copyDependencies") }),
        /* @__PURE__ */ i(M, { icon: "copy", disabled: !!N, onClick: () => void D("debug", async () => {
          await y.call("copy_debug_info", _), B(o("debugCopied"));
        }), children: o("copyDebug") })
      ] }),
      !!Fe.length && /* @__PURE__ */ p("details", { children: [
        /* @__PURE__ */ i("summary", { children: o("exportFiles") }),
        /* @__PURE__ */ i("p", { className: "gx-muted", children: o("exportFilesHint") }),
        /* @__PURE__ */ i("div", { className: "gx-file-list", children: Fe.map((r) => /* @__PURE__ */ p("label", { children: [
          /* @__PURE__ */ i(Ue, { checked: r.included, disabled: !!N, label: r.path, onChange: (f) => na(Fe.map((k) => k.path === r.path ? { ...k, included: f } : k)) }),
          /* @__PURE__ */ i("span", { children: r.path }),
          /* @__PURE__ */ i("small", { children: Ne(r.size) })
        ] }, r.path)) }),
        /* @__PURE__ */ i("p", { className: "gx-muted", children: o("totalSize", { size: Ne(zo) }) })
      ] })
    ] }),
    V === "versions" && me && /* @__PURE__ */ p(ke, { title: o("versionTitle", { name: me.data.name }), onClose: he, children: [
      /* @__PURE__ */ i("p", { children: o("currentVersion", { version: me.data.version ?? "" }) }),
      /* @__PURE__ */ i("div", { className: "gx-version-list", children: me.data.versions.map((r) => /* @__PURE__ */ p(M, { disabled: !!N || r.uuid === me.data.versionUuid, icon: r.uuid === me.data.versionUuid ? "check" : "layers", onClick: () => It(me, r), children: [
        r.name,
        r.uuid === me.data.versionUuid ? " · " + o("installed") : ""
      ] }, r.uuid)) })
    ] }),
    tt && /* @__PURE__ */ i(ke, { title: o("dependantsTitle", { name: tt.name }), onClose: () => St(null), footer: /* @__PURE__ */ i(M, { primary: !0, onClick: () => St(null), children: o("done") }), children: tt.items.length ? /* @__PURE__ */ i("div", { className: "gx-version-list gx-dependant-list", children: tt.items.map((r) => /* @__PURE__ */ p("div", { className: "gx-dependant", children: [
      /* @__PURE__ */ i("strong", { children: r.fullName }),
      r.preferredVersion && /* @__PURE__ */ i("span", { className: "gx-muted", children: o("preferredVersion", { version: r.preferredVersion }) })
    ] }, r.fullName)) }) : /* @__PURE__ */ i("p", { children: o("noDependants") }) }),
    ze && /* @__PURE__ */ i(ei, { items: ze.items, label: ze.label, point: ze.point, anchor: ze.anchor, onClose: () => et(null) })
  ] });
}
const We = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new Map();
function mi(e, t) {
  wt.set(e, t);
}
function te(e) {
  return (e ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
function Ut(e, t) {
  try {
    const n = window.LocalizationManager, a = n?.m_mapTokens?.get?.(e) ?? n?.m_mapFallbackTokens?.get?.(e);
    if (typeof a == "string" && a.length > 0) return a;
  } catch {
  }
  return t;
}
function fi() {
  const e = /* @__PURE__ */ new Set(["general", "общие", "allgemein", "général", "generale", "general ", "ogólny"]), t = /* @__PURE__ */ new Set([
    "local files",
    "installed files",
    "локальные файлы",
    "установленные файлы",
    "lokale dateien",
    "installierte dateien",
    "fichiers locaux",
    "fichiers installés",
    "updates",
    "обновления",
    "aktualisierungen",
    "mises à jour",
    "dlc",
    "betas",
    "бета-версии",
    "beta-versionen",
    "controller",
    "контроллер",
    "shortcut",
    "ярлык",
    "game recording",
    "запись игры",
    "customization",
    "настройка",
    "workshop",
    "мастерская"
  ]);
  for (const [n, a] of [["AppProperties_GeneralPage", "General"], ["AppProperties_General", "General"]]) e.add(te(Ut(n, a)));
  for (const [n, a] of [
    ["AppProperties_LocalFilesPage", "Local Files"],
    ["AppProperties_InstalledFilesPage", "Installed Files"],
    ["AppProperties_UpdatesPage", "Updates"],
    ["AppProperties_DLCPage", "DLC"],
    ["AppProperties_BetasPage", "Betas"],
    ["AppProperties_ControllerPage", "Controller"],
    ["AppProperties_ShortcutPage", "Shortcut"],
    ["AppProperties_GameRecording", "Game Recording"],
    ["AppProperties_Customization", "Customization"],
    ["AppProperties_WorkshopPage", "Workshop"]
  ]) t.add(te(Ut(n, a)));
  return { general: e, secondary: t };
}
function Xn(e, t, n) {
  Ht.get(e) !== t && (Ht.set(e, t), y.log(`properties: ${n}`).catch(() => {
  }));
}
function Vn(e) {
  if (!e || typeof e != "object") return;
  const t = [
    e.appid,
    e.appId,
    e.unAppID,
    e.m_unAppID,
    e.app,
    e.item?.appid,
    e.item?.appId,
    e.overview?.appid,
    e.overview?.m_unAppID,
    e.appOverview?.appid,
    e.appOverview?.m_unAppID,
    e.m_appOverview?.appid,
    e.m_appOverview?.m_unAppID,
    e.app?.appid,
    e.app?.m_unAppID,
    e.details?.appid,
    e.appDetails?.appid
  ];
  for (const n of t) {
    const a = Me(n);
    if (a) return a;
  }
}
function hi(e, t = []) {
  const n = [e, ...t, ...Array.from(e.querySelectorAll("*")).slice(0, 300)], a = /* @__PURE__ */ new Set();
  for (const m of n) {
    if (a.has(m)) continue;
    a.add(m);
    const v = Object.keys(m).find((u) => u.startsWith("__reactFiber$") || u.startsWith("__reactInternalInstance$"));
    let c = v ? m[v] : void 0;
    for (let u = 0; c && u < 40; u++, c = c.return) {
      const h = Vn(c.memoizedProps) ?? Vn(c.pendingProps);
      if (h) return h;
    }
  }
  const l = (e.matches("[data-appid]") ? e : e.querySelector("[data-appid]"))?.getAttribute("data-appid") ?? void 0, s = Me(l);
  if (s) return s;
  const g = (e.ownerDocument.defaultView?.location.pathname ?? "").match(/\/(?:library\/app|properties)\/(\d+)/);
  if (g) {
    const m = Me(g[1]);
    if (m) return m;
  }
  for (const m of Array.from(e.querySelectorAll("img"))) {
    const v = m.src.match(/\/(?:apps|assets)\/(\d{2,10})\//), c = Me(v?.[1]);
    if (c) return c;
  }
}
function xi(e, t) {
  const a = [wt.get(e)?.title, e.title, t.querySelector('h1,h2,[class*="Title"]')?.textContent], s = [Ut("AppProperties_Title", "Properties - %1$s"), "Properties - %1$s", "Properties: %1$s", "Свойства — %1$s", "Свойства: %1$s", "Eigenschaften – %1$s", "Eigenschaften: %1$s"], d = /* @__PURE__ */ new Set();
  for (const g of a) {
    const m = te(g);
    if (!m || m === "steam") continue;
    let v = !1;
    for (const c of s) {
      const u = c.split("%1$s");
      if (u.length < 2) continue;
      const h = u.map((S) => S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")), L = m.match(new RegExp("^\\s*" + h.join("\\s*(.+?)\\s*") + "\\s*$", "i"));
      if (L?.[1]) {
        d.add(te(L[1])), v = !0;
        break;
      }
    }
    !v && !/properties|свойства|eigenschaften/.test(m) && d.add(m);
  }
  if (d.size)
    try {
      const g = window.appStore?.m_mapApps;
      if (!g?.forEach) return;
      let m;
      return g.forEach((v, c) => {
        if (m) return;
        const u = Me(c ?? v?.appid ?? v?.m_unAppID);
        if (!u) return;
        const h = te(v?.display_name ?? v?.m_strDisplayName);
        h && d.has(h) && (m = u);
      }), m;
    } catch {
      return;
    }
}
function bi(e, t) {
  let n = e;
  for (; n.parentElement && n.parentElement !== t; ) n = n.parentElement;
  return n.parentElement === t ? n : e;
}
function vi(e) {
  const { general: t, secondary: n } = fi(), a = Array.from(e.querySelectorAll("*")).filter((s) => {
    const d = te(s.textContent);
    if (!t.has(d) && !n.has(d) || s.closest('[role="tabpanel"],[data-galex-properties],[class*="TabContent"],[class*="tab-content"]')) return !1;
    const g = s.parentElement;
    return !(g && te(g.textContent) === d);
  }), l = a.filter((s) => t.has(te(s.textContent)));
  for (const s of l) {
    let d = s;
    for (let g = 0; d && g < 8; g++, d = d.parentElement) {
      if (d.querySelectorAll("*").length > 300) continue;
      const m = a.filter((u) => d.contains(u));
      if (m.length < 2) continue;
      const v = Array.from(new Set(m.map((u) => bi(u, d)))), c = v.map((u) => te(u.textContent));
      if (c.some((u) => t.has(u)) && c.some((u) => n.has(u))) return { list: d, tabs: v };
    }
  }
}
function wi(e) {
  const t = new Set(Array.from(e.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"],[class*="DialogBody"]')));
  return wt.get(e)?.allowBodyFallback && e.body && t.add(e.body), Array.from(t);
}
function yi(e) {
  return Array.from(e.dialog.querySelectorAll('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"],[class*="TabContent"],[class*="tab-content"]')).filter((t) => t !== e.panel && !t.contains(e.panel) && !t.hasAttribute("data-galex-properties"));
}
function Xt(e) {
  const t = Array.from(e.querySelectorAll('[role="tabpanel"],[class*="DialogContent"]')).filter((n) => n.classList.contains("DialogContent") && !n.hasAttribute("data-galex-properties"));
  return t.find((n) => n.style.display !== "none" && !n.hidden) ?? t[0];
}
function ki(e) {
  return e.querySelector(".DialogBody") ?? e.querySelector(".DialogContent_InnerWidth") ?? e;
}
function sn(e) {
  const t = ki(e), n = e.querySelector(".DialogHeader");
  return { shell: e, body: t, header: n ?? null, headerText: n?.textContent ?? "", shellStyle: { display: e.style.display, hidden: e.hidden }, bodyStyle: { display: t.style.display, hidden: t.hidden }, labelledBy: e.getAttribute("aria-labelledby"), id: e.id, children: /* @__PURE__ */ new Map() };
}
function mt(e) {
  let t = e.adopted;
  if (!t) return;
  if (!t.shell.isConnected) {
    const a = Xt(e.dialog);
    if (!a) return;
    e.panel = a, e.adopted = t = sn(a);
  }
  t.shell.getAttribute("data-galex-properties") !== "panel" && t.shell.setAttribute("data-galex-properties", "panel"), t.shell.getAttribute("aria-labelledby") !== e.tab.id && t.shell.setAttribute("aria-labelledby", e.tab.id), t.shell.hidden && (t.shell.hidden = !1), t.shell.style.display === "none" && (t.shell.style.display = t.shellStyle.display);
  for (const a of Array.from(t.body.children)) {
    const l = a;
    l !== e.mount && (t.children.has(l) || t.children.set(l, { display: l.style.display, hidden: l.hidden }), l.style.display !== "none" && (l.style.display = "none"), l.hidden || (l.hidden = !0));
  }
  e.mount.parentElement !== t.body && t.body.appendChild(e.mount), e.mount.hidden && (e.mount.hidden = !1), t.header && t.header.textContent !== o("mods") && (t.header.textContent = o("mods"));
  const n = t.shell.id || e.tab.getAttribute("aria-controls");
  n && e.tab.getAttribute("aria-controls") !== n && (e.tab.setAttribute("aria-controls", n), e.tab.querySelectorAll("[aria-controls]").forEach((a) => {
    a.getAttribute("aria-controls") !== n && a.setAttribute("aria-controls", n);
  }));
}
function Ci(e) {
  const t = e.adopted;
  t && (t.children.forEach((n, a) => {
    a.isConnected && (a.style.display = n.display, a.hidden = n.hidden);
  }), t.children.clear(), t.header && t.header.isConnected && (t.header.textContent = t.headerText), e.mount.remove(), t.shell.isConnected && (t.shell.removeAttribute("data-galex-properties"), t.labelledBy === null ? t.shell.removeAttribute("aria-labelledby") : t.shell.setAttribute("aria-labelledby", t.labelledBy), t.shell.style.display = t.shellStyle.display, t.shell.hidden = t.shellStyle.hidden));
}
function Si(e, t) {
  const a = e.dialog.ownerDocument.createElement("div");
  a.className = "gx-adopted-mount", a.setAttribute("data-galex-mount", ""), a.hidden = !0;
  const l = e.active;
  So(e), e.resize?.disconnect(), e.resize = void 0;
  const s = e.panel, d = e.root;
  e.adopted = sn(t), e.panel = t, e.mount = a, e.root = ct(a), e.sizePanel = () => {
  };
  try {
    d.unmount();
  } catch {
  }
  s.remove(), l && (mt(e), ft(e));
}
function ft(e) {
  for (const t of yi(e))
    e.hidden.has(t) || e.hidden.set(t, { display: t.style.display, hidden: t.hidden }), t.style.display !== "none" && (t.style.display = "none");
}
function So(e) {
  e.hidden.forEach((t, n) => {
    n.style.display = t.display, n.hidden = t.hidden;
  }), e.hidden.clear();
}
function Ai(e) {
  return /Active|Selected|Current/.test(e) || /^(active|selected|current)$/i.test(e) || /[_-](active|selected|current)([_-]|$)/i.test(e);
}
function Vt(e, t, n = []) {
  for (const a of [e, ...Array.from(e.querySelectorAll("*"))]) {
    const l = a.getAttribute("class");
    if (!l) continue;
    const s = l.split(/\s+/).filter(Boolean), d = s.filter((g) => !Ai(g) && !n.includes(g));
    d.length !== s.length && (t && !t.has(a) && t.set(a, l), d.length ? a.setAttribute("class", d.join(" ")) : a.removeAttribute("class"));
  }
}
function Ao(e) {
  for (const t of e.nativeTabs) Vt(t, e.nativeClasses, e.selectedDelta);
  e.list.querySelectorAll('[role="tab"]').forEach((t) => {
    t !== e.tab && (Vt(t, e.nativeClasses, e.selectedDelta), t.setAttribute("aria-selected", "false"));
  });
}
function No(e, t) {
  const { tab: n, selectedDelta: a } = e, l = a.length > 0;
  n.classList.toggle("gx-tab-active", t && !l);
  for (const s of a) n.classList.toggle(s, t);
  for (const s of [n, ...Array.from(n.querySelectorAll('[role="tab"]'))]) s.setAttribute("aria-selected", t ? "true" : "false");
}
function Ni(e) {
  e.nativeClasses.forEach((t, n) => {
    n.isConnected && n.setAttribute("class", t);
  }), e.nativeClasses.clear();
}
function Mo(e) {
  e.active && (e.active = !1, e.adopted ? Ci(e) : e.panel.hidden = !0, No(e, !1), Ni(e), So(e));
}
function Mi(e) {
  if (e.active) {
    e.adopted ? mt(e) : e.panel.hidden = !1, ft(e);
    return;
  }
  e.adopted && mt(e), ft(e), Ao(e), e.active = !0, e.adopted || (e.panel.hidden = !1), e.sizePanel(), No(e, !0);
}
function Wn(e, t, n) {
  e.root.render(Q(Jt.Provider, { value: e.dialog.ownerDocument }, Q(Qt, null, Q(gi, { key: `${e.slug}-${e.appid}`, game: t, installing: n, embedded: !!e.adopted }))));
}
function Wt(e) {
  Mo(e), e.resize?.disconnect(), e.list.removeEventListener("click", e.onNativeClick, !0), We.delete(e.dialog);
  const { root: t, tab: n, panel: a, mount: l, adopted: s } = e;
  queueMicrotask(() => {
    try {
      t.unmount();
    } catch {
    }
    n.remove(), s ? l.remove() : a.remove();
  });
}
function Ii(e, t) {
  const n = te(t), a = o("mods"), l = Array.from(e.querySelectorAll("*")).filter((d) => te(d.textContent) === n), s = l[l.length - 1];
  s ? s.textContent = a : e.textContent = a;
}
function qn(e) {
  return (e.getAttribute("class") ?? "").split(/\s+/).filter(Boolean);
}
function Gi(e) {
  const t = e.find((l) => l.getAttribute("aria-selected") === "true"), n = e.find((l) => l.getAttribute("aria-selected") === "false");
  if (!t || !n) return [];
  const a = new Set(qn(n));
  return qn(t).filter((l) => !a.has(l));
}
function Io(e) {
  const t = Bt();
  for (const [s, d] of Array.from(We)) {
    if (!e.contains(s)) continue;
    if (!s.isConnected || !d.tab.isConnected || !d.list.isConnected) {
      Wt(d);
      continue;
    }
    const g = En(d.appid, t.games, void 0, e);
    if (!g) {
      Wt(d);
      continue;
    }
    if (!d.adopted) {
      const m = Xt(s);
      m && Si(d, m);
    }
    d.active && (d.adopted && mt(d), ft(d), Ao(d)), Wn(d, g, t.snapshot?.installing ?? !1);
  }
  if (!t.games.length) return;
  const n = wi(e), a = [];
  let l = 0;
  for (const s of n) {
    if (We.has(s) || s.querySelector("[data-galex-properties]")) continue;
    const d = vi(s);
    if (!d) {
      a.push("no-tablist");
      continue;
    }
    const g = hi(s, d.tabs) ?? xi(e, s);
    if (!g) {
      a.push("no-appid");
      continue;
    }
    const m = En(g, t.games, void 0, e);
    if (!m) {
      a.push(`unsupported:${g}`);
      continue;
    }
    const v = d.tabs.find((E) => /workshop|мастерская/i.test(E.textContent ?? "")) ?? d.tabs[0], c = te(v.textContent), u = Gi(d.tabs), h = v.cloneNode(!0);
    Vt(h, void 0, u), h.querySelectorAll("[id]").forEach((E) => E.removeAttribute("id")), h.querySelectorAll("[aria-controls]").forEach((E) => E.setAttribute("aria-controls", `galex-panel-${g}`)), h.removeAttribute("id"), h.removeAttribute("href"), h.setAttribute("role", "tab"), h.setAttribute("aria-selected", "false"), h.setAttribute("data-galex-properties", "tab"), h.id = `galex-tab-${g}`, h.setAttribute("aria-controls", `galex-panel-${g}`), Ii(h, c), h.tagName === "A" && h.setAttribute("href", "#galex-mods"), d.list.appendChild(h);
    const L = Xt(s);
    let S, G, b, C, A, T;
    L ? (G = e.createElement("div"), G.className = "gx-adopted-mount", G.setAttribute("data-galex-mount", ""), G.hidden = !0, b = sn(L), S = L, C = ct(G), A = () => {
    }) : (S = e.createElement("div"), S.id = `galex-panel-${g}`, S.setAttribute("role", "tabpanel"), S.setAttribute("aria-labelledby", h.id), S.setAttribute("data-galex-properties", "panel"), S.className = "gx-injected-panel", S.hidden = !0, S.style.flex = "1", S.style.minHeight = "0", S.style.overflow = "hidden", (s.querySelector('[role="tabpanel"],[class*="TabContent"],[class*="tab-content"]')?.parentElement ?? d.list.parentElement?.parentElement ?? d.list.parentElement)?.appendChild(S), G = S, C = ct(S), A = () => {
      const X = S.parentElement, ae = e.defaultView;
      if (!X || !ae) return;
      const se = ae.getComputedStyle(X), Oe = ae.getComputedStyle(s), pe = (de) => Number.parseFloat(de) || 0, ue = pe(se.paddingTop) + pe(se.paddingBottom), we = Math.max(0, X.clientHeight - ue), x = Math.floor(s.getBoundingClientRect().bottom - X.getBoundingClientRect().top - pe(se.paddingBottom) - pe(Oe.paddingBottom)), O = x > 0 ? Math.min(we || x, x) : we;
      O > 0 && (S.style.height = `${O}px`);
    }, typeof ResizeObserver == "function" && S.parentElement && (T = new ResizeObserver(A), T.observe(S.parentElement), T.observe(s), A()));
    const U = { dialog: s, list: d.list, tab: h, nativeTabs: d.tabs, panel: S, mount: G, adopted: b, root: C, appid: g, slug: m.slug, active: !1, hidden: /* @__PURE__ */ new Map(), nativeClasses: /* @__PURE__ */ new Map(), selectedDelta: u, resize: T, sizePanel: A, onNativeClick: (E) => {
      const ne = E.target;
      ne?.closest?.('[data-galex-properties="tab"]') || (ne?.closest?.('[role="tab"],button,a') || d.tabs.some((X) => ne && X.contains(ne))) && Mo(U);
    } };
    We.set(s, U), Wn(U, m, t.snapshot?.installing ?? !1), l++, h.addEventListener("click", (E) => {
      E.preventDefault(), E.stopPropagation(), Mi(U);
    }), d.list.addEventListener("click", U.onNativeClick, !0), Xn(e, `injected:${g}`, `tab injected appid=${g} slug=${m.slug}`);
  }
  if (n.length && wt.get(e)?.allowBodyFallback) {
    const s = `${n.length}/${l}/${a.slice(0, 4).join(",")}`;
    Xn(e, s, `dialogs=${n.length} injected=${l} skipped=${a.slice(0, 4).join(",") || "none"}`);
  }
}
function Zn(e) {
  const t = De.get(e);
  !t || t.timer || (t.timer = window.setTimeout(() => {
    t.timer = 0, Io(e);
  }, 180));
}
function Qn(e = document) {
  if (De.has(e)) return De.get(e).dispose;
  const t = new MutationObserver(() => Zn(e));
  t.observe(e.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["role", "data-appid", "src", "style", "hidden", "class"] });
  const n = () => {
    const a = De.get(e);
    a?.timer && clearTimeout(a.timer), t.disconnect();
    for (const [l, s] of Array.from(We))
      e.contains(l) && Wt(s);
    De.delete(e), Ht.delete(e);
  };
  return De.set(e, { observer: t, timer: 0, dispose: n }), Zn(e), n;
}
function Jn(e = document) {
  Io(e);
}
const Kn = "galex-styles";
function Yn(e, t = document) {
  if (typeof t > "u") return;
  const n = t.getElementById(Kn);
  if (n) {
    n.textContent = e;
    return;
  }
  const a = t.createElement("style");
  a.id = Kn, a.textContent = e, t.head.appendChild(a);
}
const jn = ".galex{--gx-text:var(--gpColor-White,#dfe3e8);--gx-muted:var(--gpColor-Neutral,#9ba8b5);--gx-line:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control-hover:var(--gpBackground-Color-Solid,rgba(255,255,255,.14));--gx-accent:var(--gpColor-Blue,#66c0f4);--gx-danger:var(--gpColor-Red,#d94b4b);color:var(--gx-text);font-family:inherit;font-size:14px;line-height:1.45;box-sizing:border-box;container-type:inline-size}.galex *,.galex *:before,.galex *:after{box-sizing:border-box}.galex h1,.galex h2,.galex h3,.galex p{margin:0}.galex button,.galex input,.galex select,.galex textarea{font:inherit;color:inherit}.galex button{cursor:pointer}.galex button:disabled{cursor:default;opacity:.45}.galex svg{flex-shrink:0;vertical-align:middle}.galex :focus-visible{outline:2px solid var(--gx-accent);outline-offset:2px}.gx-native-button{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;gap:6px;width:auto;min-width:0;max-width:100%;padding:0}.gx-native-button button,.gx-native-button>button{width:auto;min-width:0;min-height:32px;padding:6px 12px;white-space:nowrap}.galex [class*=DialogButton]:not(.gx-icon-button){flex:0 0 auto;margin:0;width:auto;min-width:0;max-width:100%}.galex [class*=DialogButton]:not(.gx-icon-button)>button{width:auto;min-width:0}.gx-native-select{flex:0 0 auto;min-width:120px;max-width:240px}.gx-native-select>div{min-width:0}.gx-native-input{width:100%}.gx-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:34px;padding:6px 14px;border:1px solid transparent;border-radius:3px;background:var(--gx-control);color:var(--gx-text);white-space:nowrap}.gx-button:hover:not(:disabled){background:var(--gx-control-hover)}.gx-button--primary{background:var(--gx-accent);color:#fff}.gx-button.gx-danger{background:var(--gx-danger);color:#fff}.gx-icon-button{display:inline-flex;flex:0 0 32px;align-items:center;justify-content:center;width:32px;min-width:32px;height:32px;padding:0;border:0;border-radius:3px;background:transparent;color:var(--gx-muted)}.gx-icon-button button,.gx-icon-button>button{width:32px;min-width:32px;height:32px;padding:0}.gx-icon-button:hover:not(:disabled){background:var(--gx-control);color:var(--gx-text)}.gx-muted{color:var(--gx-muted);font-size:12px}.gx-text-danger{color:var(--gx-danger)}.galex select,.gx-input,.galex input[type=text],.galex input[type=number],.galex textarea{min-height:32px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:4px 9px}.galex select{max-width:220px}.galex textarea{width:100%;resize:vertical}.gx-checkbox{width:18px;height:18px;margin:0;accent-color:var(--gx-accent);cursor:pointer}.gx-toggle{display:inline-flex;align-items:center}.gx-toggle input{width:18px;height:18px;accent-color:var(--gx-accent)}.gx-mods{display:flex;flex-direction:column;height:100%;min-height:0;min-width:0;padding:10px 24px 24px;overflow:hidden;--gx-text:var(--gpColor-White,#dfe3e6);--gx-muted:var(--gpColor-Neutral,#8b929a);--gx-control:var(--gpBackground-Color-Soft,rgba(59,63,72,.5));--gx-control-hover:var(--gpBackground-Color-Solid,#464d58);color:var(--gx-muted);font-size:14px;font-weight:400}.gx-heading{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:10px 0;flex-shrink:0}.gx-heading h1{font-size:22px;font-weight:700;line-height:28px;color:var(--gx-text)}.gx-heading-meta{font-size:12px;color:var(--gx-muted);white-space:nowrap}.gx-toolbar{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;align-items:stretch;min-width:0;flex-shrink:0}.gx-toolbar>.gx-button,.gx-toolbar>.gx-native-button{width:100%;min-width:0;max-width:100%;margin:0}.gx-toolbar>.gx-button{border:0;color:var(--gx-text)}.gx-toolbar>.gx-native-button{display:flex}.gx-mods .gx-toolbar [class*=DialogButton]:not(.gx-icon-button){width:100%;min-width:0;max-width:100%;margin:0;background:var(--gx-control);color:var(--gx-text)}.gx-toolbar>.gx-button,.gx-toolbar>.gx-native-button,.gx-toolbar>.gx-native-button>button,.gx-mods .gx-toolbar [class*=DialogButton]:not(.gx-icon-button){min-height:34px;padding:0;font-size:13px;line-height:18px;white-space:normal}.gx-chevron-open{transform:rotate(180deg)}.gx-advanced{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px 0 0;flex-shrink:0}.gx-profile-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;min-width:0;padding:12px;border-radius:2px;background:var(--gpBackground-Color-Medium,#23262e)}.gx-profile-line{display:flex;align-items:center;gap:12px;flex:1 1 220px;min-width:0}.gx-field-label{font-size:14px;line-height:18px;color:var(--gx-text)}.gx-profile-line select{flex:1;max-width:260px;min-width:120px}.gx-profile-actions{display:flex;flex:0 1 auto;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:4px;min-width:0;max-width:60%;margin-left:auto}.gx-profile-actions [class*=DialogButton]:not(.gx-danger){flex:0 1 auto;margin:0;width:auto;min-width:0;max-width:100%;background:var(--gx-control);color:var(--gx-text)}.gx-profile-actions [class*=DialogButton]>button{width:auto;min-width:0}.gx-profile-actions>.gx-native-button,.gx-profile-actions>.gx-button{flex:0 1 auto;width:auto;min-width:0}.gx-profile-actions .gx-danger{background:var(--gx-danger);color:#fff}.gx-profile-actions .gx-button,.gx-profile-actions>.gx-native-button,.gx-profile-actions .gx-native-button>button,.gx-profile-actions [class*=DialogButton]{min-height:34px;padding:8px 14px;font-size:13px;line-height:18px;white-space:normal}.gx-search-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding-top:8px;flex-shrink:0}.gx-filter-group{display:flex;align-items:center;gap:12px;flex:1 1 260px;min-width:0;max-width:400px}.gx-filter-group>.gx-field-label{margin:0;white-space:nowrap}.gx-filter-group>.gx-native-select{flex:1 1 0;min-width:0;max-width:none}.gx-search{display:flex;align-items:center;gap:0;flex:2 1 0;min-width:0;max-width:296px;height:auto;padding:0;border:0;border-radius:0;background:transparent;color:var(--gx-text)}.gx-search input{flex:1;min-width:0}.gx-mods .gx-search input.DialogInput{border:0;border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:8px;min-height:38px;font-size:14px;font-weight:300;line-height:22px}.gx-mods .gx-search input.DialogInput:focus{outline:none;background:var(--gx-control-hover);box-shadow:inset 1px 1px 8px #000000ab}.gx-search button{border:0;background:none;color:var(--gx-muted);padding:2px;margin-left:4px}.gx-sort-direction{flex:0 0 34px;width:34px;min-width:34px;padding:0}.gx-sort-direction button{width:34px;min-width:34px;padding:0}.gx-list-heading{display:flex;align-items:center;gap:12px;min-height:38px;color:var(--gx-muted);font-size:12px;flex-shrink:0}.gx-list-heading>.gx-icon-button{margin-left:auto}.gx-update-link{display:inline-flex;gap:5px;align-items:center;border:0;background:none;color:var(--gx-accent);font-size:12px;padding:2px 4px}.gx-update-link:hover{text-decoration:underline}.gx-mod-list{display:flex;flex-direction:column;gap:2px;flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--gpBackground-Color-Dark,#0e141b);box-shadow:inset 0 4px 4px #00000040;font-size:13px}.gx-mod-list::-webkit-scrollbar{height:12px;width:14px;background:transparent;z-index:12;overflow:visible}.gx-mod-list::-webkit-scrollbar-thumb{width:10px;background-color:#3d4450;border-radius:10px;border:4px solid transparent;background-clip:padding-box;transition:background-color .32s ease-in-out;margin:4px;min-height:32px;min-width:32px}.gx-mod-list::-webkit-scrollbar-thumb:hover{background-color:#464d58;background-clip:padding-box}.gx-mod-row{display:flex;flex:0 0 80px;align-items:center;justify-content:flex-start;height:80px;min-height:80px;padding:0;gap:0;background:var(--gpBackground-Color-Medium,#23262e);border-bottom:0}.gx-mod-row>[class*=DialogCheckbox],.gx-mod-row>.gx-checkbox{flex:0 0 22px;width:22px;height:22px;margin:8px}.gx-mod-index{display:flex;align-items:center;justify-content:center;flex:0 0 20px;width:20px;margin:4px;font-size:16px;line-height:20px;color:unset}.gx-mod-avatar{width:48px;height:48px;min-width:48px;max-width:84px;flex-shrink:0;margin:4px 7px 4px 4px;border-radius:0;object-fit:cover;background:#000;display:flex;align-items:center;justify-content:center;color:var(--gx-muted);font-weight:600}.gx-mod-row.is-disabled .gx-mod-avatar,.gx-mod-row.is-disabled .gx-mod-info{opacity:.55}.gx-mod-info{flex:1 1 0;min-width:0;padding-right:4px;overflow:hidden}.gx-mod-title{display:flex;align-items:center;gap:7px;min-width:0}.gx-mod-title h3{font-size:13px;line-height:16px;font-weight:400;color:var(--gx-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-info>p{font-size:12px;line-height:16px;color:#969696;padding-top:4px;margin:0;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-byline{display:flex;flex-wrap:nowrap;gap:4px;font-size:12px;line-height:16px;color:#969696;padding-top:4px;margin:0;overflow:hidden}.gx-mod-byline>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-badge{font-size:10px;padding:1px 5px;border-radius:2px;border:1px solid var(--gx-line);color:var(--gx-muted);white-space:nowrap}.gx-badge--update{color:var(--gx-accent);border-color:var(--gx-accent)}.gx-mod-size{display:flex;align-items:center;flex:0 1 auto;min-width:70px;margin:4px 16px 4px 4px;text-align:right;font-size:12px;line-height:16px;color:unset}.gx-mod-actions{display:flex;align-items:center;flex-shrink:0;padding:4px}.gx-mod-actions .gx-icon-button{width:36px;height:36px;min-width:36px;flex-basis:36px;margin:8px;padding:0;border-radius:2px;background:var(--gpBackground-Color-Solid,#3d4450);color:var(--gx-text)}.gx-mod-actions .gx-icon-button button,.gx-mod-actions .gx-icon-button>button{width:36px;height:36px;min-width:36px;padding:0}.gx-mod-actions .gx-icon-button svg{width:24px;height:24px}.gx-mod-actions .gx-icon-button:hover:not(:disabled){background:var(--gx-control-hover);color:#fff}.gx-context-menu{position:absolute;z-index:2147483647;min-width:184px;max-width:min(320px,calc(100vw - 16px));max-height:calc(100vh - 16px);overflow-y:auto;padding:4px;border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,#1b2838);box-shadow:0 8px 24px #00000080;font-size:13px}.gx-context-menu--root{position:fixed}.gx-context-menu--submenu-open{overflow:visible}.gx-context-menu-item-wrap{position:relative}.gx-context-menu-item{display:flex;align-items:center;gap:8px;width:100%;padding:6px 10px;border:0;border-radius:2px;background:transparent;color:var(--gx-text);text-align:left;white-space:nowrap}.gx-context-menu-item:hover:not(:disabled),.gx-context-menu-item:focus-visible{background:var(--gx-control-hover);outline:none}.gx-context-menu-item--danger{color:var(--gx-danger)}.gx-context-menu-icon{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;flex:0 0 16px}.gx-context-menu-arrow{margin-left:auto}.gx-context-submenu{position:absolute;left:calc(100% - 4px);top:-5px}.gx-dependant{display:flex;flex-direction:column;gap:2px;padding:6px 8px;background:var(--gx-control);border-radius:2px}.gx-notice{display:flex;align-items:center;gap:8px;padding:8px 10px;margin:8px 0;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:13px}.gx-notice--error{border-color:var(--gx-danger);color:var(--gx-danger)}.gx-notice button{margin-left:auto;border:0;background:none;color:var(--gx-accent)}.gx-empty{padding:32px 12px;text-align:center;color:var(--gx-muted)}.gx-modal-backdrop{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;background:#000000a6}.gx-modal{display:flex;flex-direction:column;width:min(580px,100%);max-height:min(84vh,760px);border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,#1b2838);box-shadow:0 8px 40px #00000080}.gx-modal>header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--gx-line)}.gx-modal h2{font-size:17px;font-weight:500}.gx-modal-body{padding:16px 18px;overflow-y:auto;min-height:0}.gx-modal>footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid var(--gx-line)}.gx-form-label{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--gx-muted);margin-bottom:12px}.gx-form-label input,.gx-form-label textarea,.gx-form-label select{color:var(--gx-text)}.gx-check-label{display:flex;align-items:center;gap:8px;font-size:13px;margin:8px 0}.gx-import-summary{display:flex;flex-direction:column;gap:4px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code{display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code code{flex:1;min-width:0;overflow-wrap:anywhere;font-family:monospace}.gx-version-list{display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto;margin-top:10px}.gx-file-list{max-height:220px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px;padding:6px;margin:8px 0}.gx-file-list label{display:flex;align-items:center;gap:8px;padding:3px 2px;font-size:12px}.gx-file-list span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}.gx-tabs button[aria-selected=true]{background:var(--gx-control-hover);border-color:var(--gx-accent)}.gx-global-settings{height:100%;min-height:0;overflow-y:auto;padding:0;font-size:14px}.MillenniumDesktopSidebar_EditorContent>.gx-global-settings{margin:-24px -20px -20px;padding:12px 16px 16px}.gx-settings-header{display:flex;align-items:center;gap:8px;margin-bottom:6px}.gx-settings-header h1{font-size:18px;font-weight:500;margin-right:auto}.gx-settings-section{margin:12px 0;padding-bottom:10px;border-bottom:1px solid var(--gx-line)}.gx-settings-section h2{font-size:15px;font-weight:500;margin-bottom:6px}.gx-setting{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:6px 0}.gx-setting>div{display:flex;flex-direction:column;gap:2px;min-width:0}.gx-setting strong{font-size:14px;font-weight:500}.gx-setting small{color:var(--gx-muted);font-size:12px}.gx-connection{display:inline-flex;align-items:center;gap:6px;color:var(--gx-muted);font-size:12px;white-space:nowrap}.gx-status-dot{width:7px;height:7px;border-radius:50%;background:var(--gpColor-Green,#5ba32b)}.gx-path{display:block;padding:6px 8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:12px;overflow-wrap:anywhere;color:var(--gx-muted)}.gx-settings-actions{display:flex;gap:8px;margin:8px 0}.gx-settings-bottom{color:var(--gx-muted);font-size:12px;margin-top:10px}.gx-success{display:flex;align-items:center;gap:6px;color:var(--gpColor-Green,#5ba32b);font-size:12px;margin:6px 0}.gx-settings-intro{color:var(--gx-muted);font-size:12px;margin-bottom:8px}.gx-games{margin-top:8px}.gx-games summary{cursor:pointer;font-size:13px}.gx-games summary span{color:var(--gx-muted);margin-left:6px}.gx-game-list{list-style:none;margin:6px 0 0;padding:0;max-height:180px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px}.gx-game-list li{display:flex;justify-content:space-between;gap:8px;padding:4px 8px;font-size:12px;border-bottom:1px solid var(--gx-line)}.gx-game-list li:last-child{border-bottom:0}.gx-game-list span{color:var(--gx-muted)}[data-galex-properties=tab]{cursor:pointer;user-select:none}[data-galex-properties=tab].gx-tab-active{color:var(--gpColor-White,#fff);background:var(--gpBackground-Color-Soft,rgba(255,255,255,.08))}.gx-injected-panel{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;height:100%;max-height:100%;overflow:hidden;color:var(--gx-text,#dfe3e8)}.gx-injected-panel[hidden]{display:none!important}.gx-adopted-mount{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0}.gx-adopted-mount[hidden]{display:none!important}.gx-mods.gx-mods--embedded{padding:0}@container (max-width:480px){.gx-mods:not(.gx-mods--embedded){padding:12px}.gx-toolbar{grid-template-columns:1fr}.gx-mod-index,.gx-mod-size{display:none}.gx-mod-info>p{display:none}.gx-profile-actions{flex-basis:100%;max-width:100%}.gx-profile-actions .gx-button,.gx-profile-actions .gx-native-button{flex:0 1 auto}.gx-filter-group{flex-basis:100%;max-width:none}.gx-search{max-width:none}}.gx-downloads{margin:0 0 16px;padding:14px 16px;border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,rgba(0,0,0,.2))}.gx-downloads-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:4px}.gx-downloads-header h2{font-size:18px;font-weight:500}.gx-download-graphs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:10px 0}.gx-sparkline{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:8px;font-size:12px;color:var(--gx-muted)}.gx-sparkline svg{width:100%;height:32px;color:var(--gx-accent);background:var(--gx-control);border-radius:2px}.gx-sparkline strong{color:var(--gx-text);font-weight:500;white-space:nowrap}.gx-download-card{display:flex;gap:12px;align-items:center;padding:10px;margin-top:8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control)}.gx-download-card.is-error{border-color:var(--gx-danger)}.gx-download-cover{width:92px;height:43px;flex:0 0 92px;object-fit:cover;border-radius:2px;background:var(--gx-control-hover)}.gx-download-cover--fallback{display:flex;align-items:center;justify-content:center;color:var(--gx-muted)}.gx-download-body{flex:1;min-width:0}.gx-download-body header{display:flex;align-items:baseline;gap:8px;min-width:0}.gx-download-body h3{font-size:15px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-task{font-size:12px;color:var(--gx-muted);margin:2px 0 6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-meta{display:flex;justify-content:space-between;gap:8px;font-size:12px;color:var(--gx-muted);margin-top:4px}.gx-progress{width:100%;height:8px;accent-color:var(--gx-accent)}@container (max-width:640px){.gx-download-graphs{grid-template-columns:1fr}.gx-download-cover{display:none}}.gx-connection-error{overflow-y:auto}.gx-error-screen{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;flex:1;min-height:220px;padding:32px 16px;text-align:center;color:var(--gx-muted)}.gx-error-screen h2{font-size:18px;font-weight:600;color:var(--gx-text)}.gx-error-screen p{max-width:520px;font-size:13px}.gx-error-screen .gx-profile-actions{justify-content:center;margin:8px 0 0;max-width:100%}.gx-error-screen>svg{color:var(--gx-danger)}.gx-override-form{display:flex;flex-wrap:wrap;align-items:flex-end;gap:8px;margin:8px 0}.gx-override-form label{display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--gx-muted);min-width:160px;flex:1 1 180px}.gx-override-form .gx-native-select,.gx-override-form select,.gx-override-form input{width:100%;max-width:none}.gx-override-list{list-style:none;margin:8px 0 0;padding:0;border:1px solid var(--gx-line);border-radius:3px}.gx-override-list li{display:flex;align-items:center;gap:8px;padding:6px 8px;border-bottom:1px solid var(--gx-line);font-size:12px}.gx-override-list li:last-child{border-bottom:0}.gx-override-list strong{font-weight:500;color:var(--gx-text)}.gx-override-list span{color:var(--gx-muted);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-override-list .gx-icon-button{margin-left:auto}", Y = "GaleX";
function Pi() {
  return { title: "GaleX", icon: Q(J, { name: "package", size: 18 }), content: Q(Qt, null, Q(Ha)), linkQueued: (e) => (Ke(), !0) };
}
async function Li() {
  window.__GALEX_STEAM__?.dispose(), va(), await fa();
  const e = [], t = [];
  let n = !1, a = !1;
  const l = Fa();
  e.push(l), e.push(so(() => Jn()));
  const s = Xa();
  e.push(s);
  const d = Pi(), g = window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[Y], m = window.PLUGIN_LIST?.[Y];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS ??= {})[Y] = d, (window.PLUGIN_LIST ??= {})[Y] = { ...m, ...d };
  const v = /* @__PURE__ */ new Set([document]);
  Yn(jn, document);
  const c = (b) => {
    if (n || a || !b.body) return;
    a = !0;
    const C = b.createElement("div");
    C.id = "galex-link-installer", b.body.appendChild(C);
    const A = ct(C);
    t.push(A), A.render(Q(Jt.Provider, { value: b }, Q(Qt, null, Q(Ua)))), e.push(() => C.remove());
  }, u = (b, C) => {
    if (n || v.has(b)) return;
    const A = String(C?.m_strName ?? C?.name ?? ""), T = String(C?.m_strTitle ?? C?.title ?? b.title ?? ""), U = A.includes("SP Desktop") && !A.includes("Login");
    mi(b, { name: A, title: T, allowBodyFallback: b !== document && !U }), v.add(b), Yn(jn, b), e.push(Qn(b)), U && c(b), y.log(`window observed name=${A || "?"} title=${T || "?"} body=${!!b.body} linkRoot=${a}`).catch(() => {
    });
  }, h = (b, C) => {
    if (n || !b) return;
    const A = () => {
      if (!n && b.document?.body)
        try {
          u(b.document, C);
        } catch (T) {
          console.warn("[GaleX] Cannot inspect property window", T), y.log(`window inspect failed: ${String(T)}`).catch(() => {
          });
        }
    };
    if (b.document?.body) {
      A();
      return;
    }
    b.addEventListener?.("DOMContentLoaded", A, { once: !0 }), b.addEventListener?.("load", A, { once: !0 }), e.push(() => {
      b.removeEventListener?.("DOMContentLoaded", A), b.removeEventListener?.("load", A);
    });
  };
  e.push(Qn(document));
  try {
    const b = R()?.routerHook;
    if (typeof b?.addPatch == "function") {
      const C = (A) => ({ ...A, children: Q(Ka, null, A.children) });
      b.addPatch("/library/downloads", C, 7), e.push(() => {
        try {
          b.removePatch?.("/library/downloads", C, 7);
        } catch {
        }
      });
    }
  } catch (b) {
    console.warn("[GaleX] Downloads route patch unavailable", b);
  }
  try {
    const b = R(), C = b?.Millennium?.AddWindowCreateHook ?? b?.AddWindowCreateHook ?? window.Millennium?.AddWindowCreateHook;
    typeof C == "function" ? C((A) => {
      h(A?.window ?? A?.document?.defaultView ?? A?.BrowserWindow ?? A?.m_popup?.window ?? A?.m_popup ?? A?.m_BrowserWindow, A);
    }) : console.warn("[GaleX] Window hook unavailable; observing the main Steam document only");
  } catch (b) {
    console.warn("[GaleX] Window hook unavailable", b);
  }
  const L = window.setTimeout(() => c(document), 3e3);
  e.push(() => window.clearTimeout(L)), e.push(za(() => {
    for (const b of v)
      if (!b.defaultView?.closed)
        try {
          Jn(b);
        } catch {
        }
  }));
  const S = () => {
    n || (n = !0, e.reverse().forEach((b) => {
      try {
        b();
      } catch {
      }
    }), t.forEach((b) => {
      try {
        b.unmount();
      } catch {
      }
    }), g === void 0 ? delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[Y] : window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS[Y] = g, m === void 0 ? delete window.PLUGIN_LIST?.[Y] : window.PLUGIN_LIST[Y] = m, delete window.__GALEX_STEAM__, window.GaleX?.dispose === S && delete window.GaleX);
  };
  window.__GALEX_STEAM__ = { dispose: S }, window.GaleX = { openSettings: () => {
    const b = R();
    b?.Millennium?.openQuickAccess?.({ plugin: Y }) ?? b?.openQuickAccess?.({ plugin: Y }) ?? window.Millennium?.openQuickAccess?.({ plugin: Y });
  }, openProperties: () => R()?.Navigation?.NavigateToAppProperties?.(), dispose: S }, console.info("[GaleX] frontend 0.3.8 mounted"), y.log(`frontend 0.3.8 mounted; url=${location.href}`).catch(() => {
  });
  const G = window.MILLENNIUM_BACKEND_IPC;
  return typeof G?.postMessage == "function" ? Promise.resolve(G.postMessage(1, { pluginName: Y })).then(() => console.info("[GaleX] backend notified that the frontend is loaded")).catch((b) => console.warn("[GaleX] Frontend-loaded notification failed", b)) : console.warn("[GaleX] Millennium backend IPC is unavailable"), d;
}
async function Di() {
  return document.body || await new Promise((e) => document.addEventListener("DOMContentLoaded", () => e(), { once: !0 })), Li();
}
let it;
function _i() {
  return it || (it = Di().catch((e) => {
    throw it = void 0, e;
  })), it;
}
_i().catch((e) => console.error("[GaleX] Startup failed", e));
export {
  _i as default
};
