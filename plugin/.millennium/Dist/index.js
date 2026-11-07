const P = window.SP_REACT;
P || console.error("[GaleX] window.SP_REACT is missing — is Millennium loaded?");
const Q = P.createElement;
P.cloneElement;
const aa = P.createContext;
P.createRef;
P.forwardRef;
P.memo;
const ia = P.useCallback, ra = P.useContext;
P.useDebugValue;
P.useDeferredValue;
const q = P.useEffect;
P.useId;
P.useImperativeHandle;
const la = P.useLayoutEffect, Jn = P.useMemo;
P.useReducer;
const qe = P.useRef, w = P.useState, mt = P.useSyncExternalStore;
P.useTransition;
const sa = P.Component;
P.PureComponent;
P.Fragment;
P.StrictMode;
P.Suspense;
P.Children;
P.isValidElement;
P.version;
const De = window.SP_REACTDOM, st = (e) => typeof De?.createRoot == "function" ? De.createRoot(e) : {
  render(t) {
    De.render(t, e);
  },
  unmount() {
    De.unmountComponentAtNode?.(e);
  }
}, Yn = De.createPortal;
De.flushSync;
const it = window.SP_REACT, Cn = window.SP_JSX_FACTORY;
function Wt(e, t, n) {
  const { children: a, ...l } = t ?? {};
  return n !== void 0 && (l.key = n), a === void 0 ? it.createElement(e, l) : Array.isArray(a) ? it.createElement(e, l, ...a) : it.createElement(e, l, a);
}
const _e = typeof Cn?.jsx == "function" ? Cn : void 0, Z = _e?.Fragment ?? it.Fragment, i = _e ? _e.jsx : Wt, p = _e?.jsxs ?? Wt;
_e && _e.jsx;
const Sn = {
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
}, da = {
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
function K({ name: e, size: t = 18, className: n, strokeWidth: a = 1.6 }) {
  const l = window.MILLENNIUM_API?.IconsModule?.[da[e] ?? ""], s = Jn(() => Sn[e] ?? Sn.info, [e]);
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
class dt extends Error {
  constructor(t, n, a) {
    super(t), this.code = n, this.details = a, this.name = "BridgeError";
  }
}
function ca(e) {
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
const An = {
  english: "en",
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  russian: "ru",
  ru: "ru",
  "ru-ru": "ru"
}, Lt = /* @__PURE__ */ new Set();
let Ze = "en", jn = "english";
function eo(e) {
  return String(e ?? "").trim().toLowerCase().replace(/_/g, "-");
}
function pa(e) {
  const t = eo(e);
  return An[t] ?? An[t.split("-")[0]] ?? "en";
}
function ua(e) {
  jn = eo(e) || "english";
  const t = pa(e);
  t !== Ze && (Ze = t, Lt.forEach((n) => n()));
}
function Dt() {
  return Ze;
}
function ga() {
  return jn;
}
function _t(e) {
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
function Ee() {
  return mt((e) => (Lt.add(e), () => Lt.delete(e)), Dt, Dt);
}
async function ma(e = window) {
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
  return ua(t ?? "english"), Ze;
}
const to = {
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
  clipboardError: "Select the code and copy it manually",
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
  clipboardError: "Выделите код и скопируйте вручную",
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
}, fa = { en: to, ru: ha };
function o(e, t) {
  let n = fa[Ze][e] ?? to[e] ?? e;
  if (t) for (const [a, l] of Object.entries(t)) n = n.split(`{${a}}`).join(String(l));
  return n;
}
function R() {
  return window.MILLENNIUM_API;
}
let Et;
function xa(e) {
  Et = e;
}
async function Y(e, t = {}) {
  if (!Et) throw new Error(o("backendMissing"));
  const n = await Et(e, t);
  let a;
  try {
    a = ca(n);
  } catch (l) {
    throw new dt(_t(l instanceof Error ? l.message : String(l)), "invalid_rpc");
  }
  if (!a.ok) throw new dt(_t(a.error || o("bridgeNoReply")), a.code, a.error);
  return a.data;
}
function ba() {
  xa(async (e, t) => {
    const n = R();
    if (!n?.Millennium?.callServerMethod) throw new Error(o("millenniumMissing"));
    return n.Millennium.callServerMethod("GaleX", e, { payload: JSON.stringify(t) });
  });
}
const y = {
  snapshot: () => Y("snapshot"),
  progress: () => Y("progress"),
  cancelInstalls: () => Y("command", { method: "cancel_installs", args: {} }),
  call: (e, t, n = {}) => Y("command", { method: e, args: { slug: t.slug, profileId: t.profileId, ...n } }),
  browserUrl: (e) => Y("browser_url", { ...e }),
  dismissLink: (e) => Y("dismiss_link", { url: e }),
  global: (e, t = {}) => Y("command", { method: e, args: t }),
  getConfig: () => Y("get_config"),
  setConfig: (e) => Y("set_config", { path: e }),
  restart: () => Y("restart"),
  launchPlan: (e) => Y("command", { method: "launch_plan", args: { slug: e } }),
  log: (e) => Y("frontend_log", { message: e })
};
function Ue(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(o("invalidBrowserUrl"));
  const n = R()?.Navigation;
  n?.NavigateToSteamWeb ? n.NavigateToSteamWeb(e) : window.open(e, "_blank", "noopener,noreferrer");
}
function no(e = document) {
  try {
    const t = e.defaultView?.SteamClient?.Window;
    t?.BringToFront?.(!0), t?.SetKeyFocus?.(!0), t?.MarkLastFocused?.(), e.defaultView?.focus();
  } catch {
  }
}
function va() {
  const e = R()?.Navigation;
  if (e?.Navigate) {
    e.Navigate("/library/downloads");
    return;
  }
  const t = window.SteamClient?.URL ?? R()?.SteamClient?.URL;
  t?.ExecuteSteamURL && t.ExecuteSteamURL("steam://nav/downloads");
}
function wa(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(o("invalidBrowserUrl"));
  const n = R()?.Browser ?? window.SteamClient?.Browser;
  n?.StartDownload ? n.StartDownload(e) : Ue(e);
}
function oo() {
  return window.SteamClient?.System ?? R()?.SteamClient?.System;
}
function Nn() {
  return typeof oo()?.OpenFileDialog == "function";
}
async function Mn(e, t, n) {
  const a = oo();
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
  return e instanceof dt ? e.message : _t(e instanceof Error ? e.message : String(e));
}
function ao(e) {
  if (e instanceof dt) return e.code;
  const t = e instanceof Error ? e.message : String(e);
  if (t.includes("GALEX_SESSION_LOCKED") || t.includes("Gale уже открыт") || t.includes("Gale session is locked")) return "gale_session_locked";
  if (t.startsWith("Не найдена headless-сборка Gale")) return "missing_build";
  if (t.startsWith("Headless Gale запускается")) return "bridge_starting";
  if (t === "Нет связи с headless Gale") return "bridge_unavailable";
}
function ya() {
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
function ka({ error: e, onRetry: t }) {
  return Ee(), /* @__PURE__ */ p("div", { className: "galex gx-crash", role: "alert", children: [
    /* @__PURE__ */ i("h2", { children: o("crashTitle") }),
    /* @__PURE__ */ i("p", { children: o("crashBody") }),
    /* @__PURE__ */ i("pre", { children: F(e) }),
    /* @__PURE__ */ i("button", { className: "gx-button", onClick: t, children: o("retry") })
  ] });
}
class qt extends sa {
  state = {};
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {
    console.error("[GaleX]", t, n.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ i(ka, { error: this.state.error, onRetry: () => this.setState({ error: void 0 }) }) : this.props.children;
  }
}
const Zt = aa(document);
function ht() {
  return ra(Zt);
}
function Me(e) {
  const t = R()?.[e];
  return typeof t == "function" || t && typeof t == "object" ? t : void 0;
}
function M({ children: e, icon: t, primary: n, className: a = "", ...l }) {
  const s = Me(n ? "DialogButtonPrimary" : "DialogButton") ?? Me("DialogButton"), d = /* @__PURE__ */ p(Z, { children: [
    t && /* @__PURE__ */ i(K, { name: t, size: 16 }),
    " ",
    e
  ] });
  return s ? /* @__PURE__ */ i(s, { ...l, className: `gx-native-button ${n ? "gx-native-button--primary" : ""} ${a}`, children: d }) : /* @__PURE__ */ i("button", { type: "button", ...l, className: `gx-button ${n ? "gx-button--primary" : ""} ${a}`, children: d });
}
function ae({ icon: e, label: t, ...n }) {
  const a = Me("DialogButton");
  return a ? /* @__PURE__ */ i(a, { ...n, className: `gx-icon-button ${n.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ i(K, { name: e, size: 18 }) }) : /* @__PURE__ */ i("button", { type: "button", ...n, className: `gx-icon-button ${n.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ i(K, { name: e, size: 18 }) });
}
function be({ value: e, onChange: t, options: n, label: a, disabled: l }) {
  const s = Me("Dropdown");
  return s ? /* @__PURE__ */ i("div", { className: "gx-native-select", children: /* @__PURE__ */ i(s, { disabled: l, menuLabel: a, strDefaultLabel: a, rgOptions: n.map((d) => ({ data: d.value, label: d.label })), selectedOption: e, contextMenuPositionOptions: { bMatchWidth: !0 }, onChange: (d) => t(d.data) }) }) : /* @__PURE__ */ i("select", { "aria-label": a, value: e, disabled: l, onChange: (d) => t(typeof e == "number" ? Number(d.target.value) : d.target.value), children: n.map((d) => /* @__PURE__ */ i("option", { value: d.value, children: d.label }, d.value)) });
}
function He({ checked: e, onChange: t, label: n, disabled: a }) {
  const l = Me("DialogCheckbox");
  return l ? /* @__PURE__ */ i(l, { controlled: !0, checked: e, disabled: a, "aria-label": n, onChange: t }) : /* @__PURE__ */ i("input", { className: "gx-checkbox", type: "checkbox", "aria-label": n, checked: e, disabled: a, onChange: (s) => t(s.target.checked) });
}
function nt({ checked: e, onChange: t, label: n, disabled: a }) {
  const l = Me("Toggle");
  return l ? /* @__PURE__ */ i("div", { className: "gx-toggle", role: "group", "aria-label": n, children: /* @__PURE__ */ i(l, { value: e, disabled: a, onChange: t }) }) : /* @__PURE__ */ p("label", { className: "gx-toggle", children: [
    /* @__PURE__ */ i("input", { type: "checkbox", role: "switch", "aria-label": n, checked: e, disabled: a, onChange: (s) => t(s.target.checked) }),
    /* @__PURE__ */ i("span", { "aria-hidden": "true" })
  ] });
}
function In({ label: e, description: t, className: n = "", ...a }) {
  const l = Me("TextField");
  return l ? /* @__PURE__ */ i(l, { ...a, label: e, description: t, className: `gx-native-input ${n}` }) : /* @__PURE__ */ i("input", { ...a, className: `gx-input ${n}` });
}
function ke({ title: e, children: t, onClose: n, footer: a }) {
  const l = ht(), s = qe(null), d = qe(n);
  return d.current = n, q(() => {
    no(l);
    const g = l.activeElement, m = s.current, v = () => Array.from(m?.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]') ?? []);
    (m?.querySelector("input,select,textarea") ?? v()[0])?.focus();
    const c = (u) => {
      if (u.key === "Escape" && (u.stopPropagation(), d.current()), u.key === "Tab") {
        const f = v(), L = f[0], S = f[f.length - 1];
        u.shiftKey && l.activeElement === L ? (u.preventDefault(), S?.focus()) : !u.shiftKey && l.activeElement === S && (u.preventDefault(), L?.focus());
      }
    };
    return m?.addEventListener("keydown", c), () => {
      m?.removeEventListener("keydown", c), g?.focus();
    };
  }, [l]), Yn(/* @__PURE__ */ i("div", { className: "galex gx-modal-backdrop", onMouseDown: (g) => {
    g.target === g.currentTarget && n();
  }, children: /* @__PURE__ */ p("div", { ref: s, className: "gx-modal DialogPopup_Generic", role: "dialog", "aria-modal": "true", "aria-label": e, children: [
    /* @__PURE__ */ p("header", { children: [
      /* @__PURE__ */ i("h2", { children: e }),
      /* @__PURE__ */ i(ae, { icon: "x", label: o("close"), onClick: n })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-modal-body", children: t }),
    a && /* @__PURE__ */ i("footer", { children: a })
  ] }) }), l.body);
}
function Gn({ title: e, children: t, onClose: n, onConfirm: a, busy: l, danger: s }) {
  return /* @__PURE__ */ i(ke, { title: e, onClose: n, footer: /* @__PURE__ */ p(Z, { children: [
    /* @__PURE__ */ i(M, { onClick: n, disabled: l, children: o("cancel") }),
    /* @__PURE__ */ i(M, { primary: !0, className: s ? "gx-danger" : "", onClick: a, disabled: l, children: o(l ? "working" : "confirm") })
  ] }), children: /* @__PURE__ */ i("div", { children: t }) });
}
function re({ children: e, error: t, onRetry: n }) {
  return /* @__PURE__ */ p("div", { className: `gx-notice ${t ? "gx-notice--error" : ""}`, role: t ? "alert" : "status", children: [
    /* @__PURE__ */ i(K, { name: t ? "warning" : "info", size: 17 }),
    /* @__PURE__ */ i("span", { children: e }),
    n && /* @__PURE__ */ i("button", { onClick: n, children: o("retry") })
  ] });
}
function Ae(e) {
  return e >= 1073741824 ? o("bytesGb", { value: (e / 1073741824).toFixed(1) }) : e >= 1048576 ? o("bytesMb", { value: (e / 1048576).toFixed(1) }) : o("bytesKb", { value: Math.round(e / 1024) });
}
function Qt(e) {
  try {
    const t = window.localStorage?.getItem(e);
    return t ? JSON.parse(t) : void 0;
  } catch {
    return;
  }
}
function Kt(e, t) {
  try {
    return window.localStorage ? (window.localStorage.setItem(e, JSON.stringify(t)), !0) : !1;
  } catch {
    return !1;
  }
}
function Ca(e) {
  try {
    window.localStorage?.removeItem(e);
  } catch {
  }
}
const io = "galex:client-settings:v1", Sa = { version: 1, nonSteamOverrides: {}, autoLaunchOptions: !0 };
function ro(e) {
  if (!e || typeof e != "object") return { ...Sa, nonSteamOverrides: {} };
  const t = e, n = {};
  if (t.nonSteamOverrides && typeof t.nonSteamOverrides == "object")
    for (const [a, l] of Object.entries(t.nonSteamOverrides)) {
      const s = Number(a);
      Number.isSafeInteger(s) && s > 0 && s <= 4294967295 && typeof l == "string" && /^[a-z0-9-]{1,128}$/.test(l) && (n[String(s)] = l);
    }
  return { version: 1, nonSteamOverrides: n, autoLaunchOptions: t.autoLaunchOptions !== !1 };
}
let ve = ro(Qt(io));
const Tt = /* @__PURE__ */ new Set();
function Jt(e) {
  ve = ro(e), Kt(io, ve), Tt.forEach((t) => t());
}
function ct() {
  return ve;
}
function lo(e) {
  return Tt.add(e), () => {
    Tt.delete(e);
  };
}
function so() {
  return mt(lo, ct, ct);
}
function Aa(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0 || e > 4294967295) throw new Error("invalid appid");
  Jt({ ...ve, nonSteamOverrides: { ...ve.nonSteamOverrides, [String(e)]: t } });
}
function Na(e) {
  const t = { ...ve.nonSteamOverrides };
  delete t[String(e)], Jt({ ...ve, nonSteamOverrides: t });
}
function Ma(e) {
  Jt({ ...ve, autoLaunchOptions: e });
}
const Ia = 1073741824;
function Ne(e) {
  if (typeof e == "string" && /^\d{1,10}$/.test(e.trim()) && (e = Number(e.trim())), typeof e != "number" || !Number.isSafeInteger(e)) return;
  const t = e < 0 ? e >>> 0 : e;
  return t > 0 && t <= 4294967295 ? t : void 0;
}
function Ga(e) {
  return e >= 2147483648;
}
function co(e = typeof window > "u" ? void 0 : window) {
  return [e?.appStore, e?.parent?.appStore, e?.top?.appStore].filter(Boolean);
}
function po(e, t) {
  const n = [t?.defaultView, typeof window > "u" ? void 0 : window];
  for (const a of n)
    for (const l of co(a))
      try {
        const s = l.GetAppOverviewByAppID?.(e) ?? l.m_mapApps?.get?.(e);
        if (s) return s;
      } catch {
      }
}
function ft(e, t) {
  const n = po(e, t);
  try {
    if (typeof n?.BIsShortcut == "function" && n.BIsShortcut() || typeof n?.BIsModOrShortcut == "function" && n.BIsModOrShortcut() || typeof n?.app_type == "number" && n.app_type & Ia) return !0;
  } catch {
  }
  return Ga(e);
}
function uo(e, t) {
  const n = po(e, t), a = n?.display_name ?? n?.m_strDisplayName;
  return typeof a == "string" && a.length > 0 ? a : void 0;
}
function Pa() {
  const e = /* @__PURE__ */ new Map();
  for (const t of co())
    try {
      t.m_mapApps?.forEach?.((n, a) => {
        const l = Ne(n?.appid ?? n?.m_unAppID ?? a);
        if (!l || !ft(l)) return;
        const s = uo(l) ?? `AppID ${l}`;
        e.set(l, { appid: l, name: s });
      });
    } catch {
    }
  return Array.from(e.values()).sort((t, n) => t.name.localeCompare(n.name) || t.appid - n.appid);
}
function La(e, t, n, a) {
  const l = n[String(e)];
  if (l && ft(e, a)) {
    const s = t.find((d) => d.slug === l);
    if (s) return { ...s, steamAppId: e, nonSteam: !0 };
  }
  return t.find((s) => s.steamAppId === e);
}
const Yt = "galex:supported-games:v1", go = 1024;
function mo(e) {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return !(typeof t.slug != "string" || !/^[a-z0-9-]{1,128}$/.test(t.slug) || typeof t.name != "string" || t.name.length === 0 || t.name.length > 256 || typeof t.modLoader != "string" || t.modLoader.length > 64 || !Array.isArray(t.backends) || t.backends.length > 8 || !t.backends.every((n) => typeof n == "string" && n.length <= 32) || t.steamAppId !== void 0 && (!Number.isSafeInteger(t.steamAppId) || t.steamAppId <= 0 || t.steamAppId >= 2147483648));
}
function Da() {
  const e = Qt(Yt);
  if (!e || e.version !== 1 || !Array.isArray(e.games) || typeof e.updatedAt != "number" || !Number.isFinite(e.updatedAt)) return;
  const t = /* @__PURE__ */ new Set(), n = [];
  for (const a of e.games.slice(0, go))
    !mo(a) || t.has(a.slug) || (t.add(a.slug), n.push({ slug: a.slug, name: a.name, modLoader: a.modLoader, steamAppId: a.steamAppId, backends: [...a.backends] }));
  return { version: 1, updatedAt: e.updatedAt, games: n };
}
function _a(e) {
  const t = Date.now(), n = e.filter(mo).slice(0, go).map((a) => ({
    slug: a.slug,
    name: a.name,
    modLoader: a.modLoader,
    steamAppId: a.steamAppId,
    backends: [...a.backends]
  }));
  return Kt(Yt, { version: 1, updatedAt: t, games: n }), t;
}
function Ea() {
  Ca(Yt);
}
const Nt = Da();
let le = {
  games: Nt?.games ?? [],
  cachedAt: Nt?.updatedAt,
  usingCache: !!Nt?.games.length,
  error: "",
  loading: !0
};
const Qe = /* @__PURE__ */ new Set();
let jt, Ce = !0, Mt = !1, Xe = 0;
function rt(e) {
  le = e, Qe.forEach((t) => t());
}
async function en() {
  if (Ce || Mt) return;
  Mt = !0;
  const e = Xe;
  try {
    const t = await y.snapshot();
    if (Ce || e !== Xe) return;
    if (t.ok && t.bridgeVersion === 2) {
      const n = t.games.length ? _a(t.games) : le.cachedAt;
      rt({ snapshot: t, games: t.games, cachedAt: n, usingCache: !1, error: "", loading: !1 });
    } else
      rt({ ...le, error: o("incompatibleBridge"), errorCode: "incompatible_bridge", usingCache: !0, loading: !1 });
  } catch (t) {
    !Ce && e === Xe && rt({ ...le, error: F(t), errorCode: ao(t), usingCache: !0, loading: !1 });
  } finally {
    Mt = !1, Ce || (jt = setTimeout(() => void en(), document.visibilityState === "hidden" ? 15e3 : 3e3));
  }
}
function Ta() {
  return Ce ? (Ce = !1, Xe++, en(), () => Pn()) : () => Pn();
}
function Pn() {
  Ce = !0, Xe++, clearTimeout(jt);
}
function Ke() {
  clearTimeout(jt), en();
}
function Ot() {
  return le;
}
function tn() {
  return mt((e) => (Qe.add(e), () => {
    Qe.delete(e);
  }), Ot, Ot);
}
function Oa(e) {
  return Qe.add(e), () => {
    Qe.delete(e);
  };
}
function Ba() {
  Ea(), rt({ ...le, games: le.snapshot?.ok ? le.snapshot.games : [], cachedAt: void 0, usingCache: !le.snapshot?.ok });
}
function Ln(e, t = le.games, n = ct().nonSteamOverrides, a) {
  return La(e, t, n, a);
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
function $a({ demo: e = !1 }) {
  Ee();
  const [t, n] = w(), [a, l] = w(), [s, d] = w(""), [g, m] = w(""), [v, c] = w(""), [u, f] = w(!1), L = tn(), S = so(), G = L.snapshot?.ok ? L.snapshot.games : L.games, b = Pa(), [C, A] = w(""), [T, U] = w(""), [E, ne] = w(""), X = async () => {
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
  const ie = async (x) => {
    if (!(!t || u)) {
      f(!0), m(""), c("");
      try {
        const O = { ...t, ...x };
        await y.global("set_prefs", { value: O }), n(O), c(o("savedInGale"));
      } catch (O) {
        m(F(O));
      } finally {
        f(!1);
      }
    }
  }, se = async () => {
    f(!0), m("");
    try {
      await y.setConfig(s.trim()), await y.restart(), c(o("pathSaved")), setTimeout(() => void X(), 2500);
    } catch (x) {
      m(F(x));
    } finally {
      f(!1);
    }
  }, Te = async () => {
    f(!0), m("");
    try {
      const x = await y.global("clear_download_cache");
      c(o("cacheCleared", { size: Ae(x) }));
    } catch (x) {
      m(F(x));
    } finally {
      f(!1);
    }
  }, pe = () => {
    const x = Ne(T.trim() || C);
    if (!x || !ft(x) || !E || !G.some((O) => O.slug === E)) {
      m(o("invalidAppId"));
      return;
    }
    try {
      Aa(x, E), m(""), c(o("overrideSaved")), U(""), A(""), ne("");
    } catch (O) {
      m(F(O));
    }
  }, ue = () => {
    Ba(), c(o("gameCacheCleared"));
  }, we = L.cachedAt ? new Date(L.cachedAt).toLocaleString(Dt() === "ru" ? "ru-RU" : "en-US") : o("never");
  return /* @__PURE__ */ p("section", { className: "galex gx-global-settings", children: [
    /* @__PURE__ */ p("div", { className: "gx-settings-header", children: [
      /* @__PURE__ */ i("h1", { children: "GaleX" }),
      /* @__PURE__ */ p("span", { className: "gx-connection", children: [
        /* @__PURE__ */ i("span", { className: "gx-status-dot" }),
        a ? `Gale ${a.coreVersion}` : o("noConnection")
      ] }),
      /* @__PURE__ */ i(ae, { icon: "refresh", label: o("checkConnection"), disabled: u, onClick: () => void X() })
    ] }),
    /* @__PURE__ */ i("p", { className: "gx-settings-intro", children: o("settingsIntro") }),
    g && /* @__PURE__ */ i(re, { error: !0, onRetry: () => void X(), children: g }),
    v && /* @__PURE__ */ p("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ i(K, { name: "check", size: 15 }),
      v
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ i("h2", { children: o("connection") }),
      /* @__PURE__ */ i(xe, { title: o("headlessGale"), hint: o("headlessHint") }),
      !e && /* @__PURE__ */ p(Z, { children: [
        /* @__PURE__ */ i(In, { label: o("galePath"), value: s, disabled: u, onChange: (x) => d(x.target.value), placeholder: o("galePathPlaceholder") }),
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
          /* @__PURE__ */ i(In, { "aria-label": o("manualAppId"), inputMode: "numeric", value: T, onChange: (x) => U(x.target.value), placeholder: "3422480235" })
        ] }),
        /* @__PURE__ */ p("label", { children: [
          o("galeGame"),
          /* @__PURE__ */ i(be, { label: o("galeGame"), value: E, onChange: ne, options: [{ value: "", label: "—" }, ...G.map((x) => ({ value: x.slug, label: x.name }))] })
        ] }),
        /* @__PURE__ */ i(M, { onClick: pe, disabled: !G.length, children: o("saveOverride") })
      ] }),
      !b.length && /* @__PURE__ */ i("p", { className: "gx-muted", children: o("noShortcuts") }),
      !!Object.keys(S.nonSteamOverrides).length && /* @__PURE__ */ i("ul", { className: "gx-override-list", children: Object.entries(S.nonSteamOverrides).map(([x, O]) => {
        const de = Number(x), Ie = G.find((B) => B.slug === O);
        return /* @__PURE__ */ p("li", { children: [
          /* @__PURE__ */ i("strong", { children: uo(de) ?? `AppID ${x}` }),
          /* @__PURE__ */ p("span", { children: [
            x,
            " → ",
            Ie?.name ?? O
          ] }),
          /* @__PURE__ */ i(ae, { icon: "trash", label: o("removeOverride"), onClick: () => {
            Na(de), c(o("overrideRemoved"));
          } })
        ] }, x);
      }) }),
      /* @__PURE__ */ i(xe, { title: o("autoLaunchOptions"), hint: o("autoLaunchOptionsHint"), children: /* @__PURE__ */ i(nt, { label: o("autoLaunchOptions"), checked: S.autoLaunchOptions, onChange: Ma }) })
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ i("h2", { children: o("galePreferences") }),
      /* @__PURE__ */ i("p", { className: "gx-muted", children: o("galePreferencesHint") }),
      t ? /* @__PURE__ */ p(Z, { children: [
        /* @__PURE__ */ i(xe, { title: o("fetchAuto"), hint: o("fetchAutoHint"), children: /* @__PURE__ */ i(nt, { label: o("fetchAuto"), checked: t.fetchModsAutomatically, disabled: u, onChange: (x) => void ie({ fetchModsAutomatically: x }) }) }),
        /* @__PURE__ */ i(xe, { title: o("pullBeforeLaunch"), hint: o("pullBeforeLaunchHint"), children: /* @__PURE__ */ i(nt, { label: o("pullBeforeLaunch"), checked: t.pullBeforeLaunch, disabled: u, onChange: (x) => void ie({ pullBeforeLaunch: x }) }) }),
        /* @__PURE__ */ i(xe, { title: o("skipBackendConfirm"), hint: o("skipBackendConfirmHint"), children: /* @__PURE__ */ i(nt, { label: o("skipBackendConfirm"), checked: t.backendSkipConfirm, disabled: u, onChange: (x) => void ie({ backendSkipConfirm: x }) }) })
      ] }) : /* @__PURE__ */ i("p", { className: "gx-muted", children: o("prefsLoading") })
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ i("h2", { children: o("downloads") }),
      /* @__PURE__ */ i(xe, { title: o("downloadCache"), hint: o("downloadCacheHint"), children: /* @__PURE__ */ i(M, { disabled: u || !t || a?.installing, onClick: () => void Te(), children: o("clearCache") }) })
    ] }),
    /* @__PURE__ */ i("p", { className: "gx-settings-bottom", children: o("settingsBottom") })
  ] });
}
function Fa() {
  Ee();
  const e = ht(), { snapshot: t } = tn(), n = t?.pendingLinks[0], [a, l] = w(), [s, d] = w(), [g, m] = w(), [v, c] = w(""), [u, f] = w(!1), [L, S] = w(0);
  if (q(() => {
    if (!n) return;
    no(e);
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
    f(!0), c("");
    try {
      await y.call("install_mod", { slug: n.slug, profileId: g }, { id: { packageUuid: a.uuid, versionUuid: a.versionUuid, backend: a.backend } }), await y.dismissLink(n.url), Ke();
    } catch (C) {
      c(F(C));
    } finally {
      f(!1);
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
let pt = { error: "" };
const Bt = /* @__PURE__ */ new Set();
let nn, Se = !0, It = !1, Ve = 0;
function Dn(e) {
  pt = e, Bt.forEach((t) => t());
}
async function on() {
  if (Se || It) return;
  It = !0;
  const e = Ve;
  try {
    const t = await y.progress();
    !Se && e === Ve && Dn({ snapshot: t, error: "" });
  } catch (t) {
    !Se && e === Ve && Dn({ ...pt, error: F(t) });
  } finally {
    It = !1, Se || (nn = setTimeout(() => void on(), pt.snapshot?.active ? 750 : 2e3));
  }
}
function za() {
  return Se ? (Se = !1, Ve++, on(), () => _n()) : () => _n();
}
function _n() {
  Se = !0, Ve++, clearTimeout(nn);
}
function Gt() {
  clearTimeout(nn), on();
}
function En() {
  return pt;
}
function ho() {
  return mt((e) => (Bt.add(e), () => Bt.delete(e)), En, En);
}
function Ra(e) {
  return `${Ae(Math.max(0, e))}/s`;
}
function Ha(e) {
  const t = `task_${e.kind.replace(/-/g, "_")}`, n = o(t);
  return n === t ? o("task_install") : n;
}
function Ua(e) {
  const n = `phase_${e.status === "done" ? "done" : e.status === "error" ? "error" : e.phase ?? "starting"}`, a = o(n);
  return a === n ? o("working") : a;
}
function Xa(e) {
  if (e.totalBytes && e.totalBytes > 0) return Math.min(100, Math.round(e.completedBytes / e.totalBytes * 100));
  if (e.totalMods && e.totalMods > 0) return Math.min(100, Math.round(e.completedMods / e.totalMods * 100));
}
function Tn({ history: e, field: t, label: n }) {
  const a = e.map((d) => d[t]), l = Math.max(1, ...a), s = a.map((d, g) => `${a.length > 1 ? g / (a.length - 1) * 100 : 0},${32 - d / l * 30}`).join(" ");
  return /* @__PURE__ */ p("div", { className: "gx-sparkline", "aria-label": n, children: [
    /* @__PURE__ */ i("span", { children: n }),
    /* @__PURE__ */ i("svg", { viewBox: "0 0 100 32", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ i("polyline", { points: s, fill: "none", stroke: "currentColor", strokeWidth: "1.5" }) }),
    /* @__PURE__ */ i("strong", { children: Ra(a[a.length - 1] ?? 0) })
  ] });
}
function Va({ task: e }) {
  const t = Xa(e), n = window.MILLENNIUM_API?.ProgressBarWithInfo, a = Ua(e), l = e.totalBytes ? `${Ae(e.completedBytes)} / ${Ae(e.totalBytes)}` : e.totalMods ? `${e.completedMods}/${e.totalMods}` : "";
  return /* @__PURE__ */ p("article", { className: `gx-download-card ${e.status === "error" ? "is-error" : ""}`, "data-appid": e.steamAppId, "data-galex-download": e.id, children: [
    e.steamAppId ? /* @__PURE__ */ i("img", { className: "gx-download-cover", src: `https://cdn.cloudflare.steamstatic.com/steam/apps/${e.steamAppId}/header.jpg`, alt: "", loading: "lazy" }) : /* @__PURE__ */ i("span", { className: "gx-download-cover gx-download-cover--fallback", children: /* @__PURE__ */ i(K, { name: "package", size: 24 }) }),
    /* @__PURE__ */ p("div", { className: "gx-download-body", children: [
      /* @__PURE__ */ p("header", { children: [
        /* @__PURE__ */ i("h3", { children: e.gameName }),
        /* @__PURE__ */ i("span", { className: "gx-muted", children: e.profileName ?? e.slug })
      ] }),
      /* @__PURE__ */ p("p", { className: "gx-download-task", children: [
        Ha(e),
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
function Wa() {
  Ee();
  const { snapshot: e, error: t } = ho(), n = e?.tasks ?? [], a = n.some((s) => s.status === "active"), l = n.some((s) => s.status === "active" && (s.kind === "install" || s.kind === "update"));
  return !e || n.length === 0 && !t ? null : /* @__PURE__ */ p("section", { className: "galex gx-downloads", "aria-label": o("galeDownloads"), "aria-live": "polite", children: [
    /* @__PURE__ */ p("header", { className: "gx-downloads-header", children: [
      /* @__PURE__ */ p("h2", { children: [
        o("galeDownloads"),
        a ? ` (${n.filter((s) => s.status === "active").length})` : ""
      ] }),
      /* @__PURE__ */ p("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ i(ae, { icon: "refresh", label: o("refresh"), onClick: Gt }),
        l && /* @__PURE__ */ i(M, { icon: "x", onClick: () => void y.cancelInstalls().then(Gt).catch(() => {
        }), children: o("cancelDownloads") })
      ] })
    ] }),
    /* @__PURE__ */ i("p", { className: "gx-muted", children: o("galeDownloadsHint") }),
    t && /* @__PURE__ */ i(re, { error: !0, onRetry: Gt, children: t }),
    e && /* @__PURE__ */ p("div", { className: "gx-download-graphs", children: [
      /* @__PURE__ */ i(Tn, { history: e.history, field: "network", label: o("network") }),
      /* @__PURE__ */ i(Tn, { history: e.history, field: "disk", label: o("disk") })
    ] }),
    n.length ? n.map((s) => /* @__PURE__ */ i(Va, { task: s }, s.id)) : /* @__PURE__ */ i("div", { className: "gx-empty", children: o(e ? "noGaleDownloads" : "loading") })
  ] });
}
function qa({ children: e }) {
  return /* @__PURE__ */ p(Z, { children: [
    /* @__PURE__ */ i(Wa, {}),
    e
  ] });
}
const $t = /* @__PURE__ */ new WeakMap();
function Ft(e) {
  const t = $t.get(e);
  $t.delete(e);
  try {
    t?.Hide?.();
  } catch {
  }
}
function Za(e) {
  const t = e?.findModuleExport;
  if (typeof t == "function")
    try {
      const n = t((a) => typeof a == "function" && typeof a.prototype?.ShowSubMenu == "function" && typeof a.prototype?.RenderSubMenu == "function");
      return n || t((a) => {
        if (typeof a != "function" || a.length !== 1) return !1;
        const l = Function.prototype.toString.call(a);
        return l.includes("bInGamepadUI:") && l.includes("return");
      });
    } catch {
      return;
    }
}
function zt(e) {
  return /* @__PURE__ */ p(Z, { children: [
    e.icon && /* @__PURE__ */ i("span", { className: "gx-context-menu-icon", children: /* @__PURE__ */ i(K, { name: e.icon, size: 16 }) }),
    /* @__PURE__ */ i("span", { children: e.label })
  ] });
}
function fo(e, t, n) {
  return e.map((a) => a.children?.length ? Q(n, { key: a.id, label: zt(a), disabled: a.disabled }, fo(a.children, t, n)) : Q(t, {
    key: a.id,
    disabled: a.disabled,
    tone: a.danger ? "destructive" : void 0,
    onSelected: a.disabled ? void 0 : () => a.onSelect?.()
  }, zt(a)));
}
function Qa(e, t, n, a) {
  const l = R(), s = l?.showContextMenu, d = l?.Menu, g = l?.MenuItem;
  if (typeof s != "function" || typeof d != "function" || typeof g != "function") return !1;
  const m = e.some((c) => c.children?.length) ? Za(l) : void 0;
  if (e.some((c) => c.children?.length) && !m) return !1;
  const v = t.ownerDocument;
  Ft(v);
  try {
    const c = Q(d, { label: n }, fo(e, g, m)), u = a ? {
      preventDefault() {
      },
      stopPropagation() {
      },
      currentTarget: t,
      clientX: a.x,
      clientY: a.y
    } : t, f = s(c, u, { bFitToWindow: !0, bShiftToFitWindow: !0, bOverlapHorizontal: !0, bOverlapVertical: !0 });
    return f && $t.set(v, f), !0;
  } catch {
    return !1;
  }
}
function xo({ items: e, label: t, point: n, root: a = !1, onClose: l, onBack: s }) {
  const d = qe(null), [g, m] = w(null);
  la(() => {
    const c = d.current;
    if (!c) return;
    const u = c.ownerDocument.defaultView;
    if (!u) return;
    const f = c.getBoundingClientRect();
    if (a)
      c.style.left = `${Math.max(8, Math.min(f.left, u.innerWidth - f.width - 8))}px`, c.style.top = `${Math.max(8, Math.min(f.top, u.innerHeight - f.height - 8))}px`;
    else {
      const L = c.parentElement?.getBoundingClientRect();
      f.right > u.innerWidth - 8 && (c.style.left = "auto", c.style.right = "calc(100% - 4px)"), L && f.bottom > u.innerHeight - 8 && (c.style.top = `${Math.max(8, u.innerHeight - f.height - 8) - L.top}px`);
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
        const u = c.target, f = v(), L = f.indexOf(u);
        if (c.key === "ArrowDown" || c.key === "ArrowUp") {
          c.preventDefault();
          const S = c.key === "ArrowDown" ? (L + 1) % f.length : (L - 1 + f.length) % f.length;
          f[S]?.focus();
        } else if (c.key === "Home")
          c.preventDefault(), f[0]?.focus();
        else if (c.key === "End")
          c.preventDefault(), f[f.length - 1]?.focus();
        else if (c.key === "ArrowRight" && u.getAttribute("aria-haspopup") === "menu") {
          c.preventDefault();
          const S = u.dataset.itemId ?? null;
          m(S), setTimeout(() => d.current?.querySelector(".gx-context-submenu button:not(:disabled)")?.focus(), 0);
        } else c.key === "ArrowLeft" && s ? (c.preventDefault(), s()) : c.key === "Escape" && s && (c.preventDefault(), c.stopPropagation(), s());
      },
      children: e.map((c) => {
        const u = !!c.children?.length, f = g === c.id;
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
              "aria-expanded": u ? f : void 0,
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
                zt(c),
                u && /* @__PURE__ */ i(K, { name: "chevron-right", size: 14, className: "gx-context-menu-arrow" })
              ]
            }
          ),
          u && f && /* @__PURE__ */ i(xo, { items: c.children, label: c.label, onClose: l, onBack: () => {
            m(null), d.current?.querySelector(`button[data-item-id="${c.id}"]`)?.focus();
          } })
        ] }, c.id);
      })
    }
  );
}
function Ka({ items: e, label: t, point: n, anchor: a, onClose: l }) {
  const s = ht(), d = qe(l);
  return d.current = l, q(() => {
    const g = s.activeElement, m = (u) => {
      const f = u.target;
      !f || !(f instanceof s.defaultView.Node) || !s.body.contains(f) || f.closest?.(".gx-context-menu") || d.current();
    }, v = (u) => {
      u.key === "Escape" && (u.preventDefault(), d.current());
    }, c = (u) => {
      const f = u.target;
      f && f.closest?.(".gx-context-menu") || d.current();
    };
    return s.addEventListener("pointerdown", m, !0), s.addEventListener("keydown", v, !0), s.addEventListener("scroll", c, !0), s.defaultView?.addEventListener("resize", l), s.defaultView?.addEventListener("blur", l), () => {
      s.removeEventListener("pointerdown", m, !0), s.removeEventListener("keydown", v, !0), s.removeEventListener("scroll", c, !0), s.defaultView?.removeEventListener("resize", l), s.defaultView?.removeEventListener("blur", l), (g?.isConnected ? g : a.isConnected ? a : null)?.focus?.();
    };
  }, [s, a]), Yn(/* @__PURE__ */ i(xo, { items: e, label: t, point: n, root: !0, onClose: l }), s.body);
}
function Ja(e, t) {
  const n = encodeURIComponent(t.author ?? ""), a = encodeURIComponent(t.name), l = encodeURIComponent(e);
  return t.backend === "Hexium" ? `https://${l}.hexium.gg/mods/${n}/${a}` : `https://thunderstore.io/c/${l}/p/${n}/${a}/`;
}
function On(e) {
  if (e)
    try {
      const t = new URL(e);
      return t.protocol === "http:" || t.protocol === "https:" ? t.href : void 0;
    } catch {
      return;
    }
}
function Ya({ code: e, error: t, game: n, onRetry: a }) {
  Ee();
  const [l, s] = w(!1), [d, g] = w(""), m = e === "gale_session_locked", v = async () => {
    if (!l) {
      s(!0), g("");
      try {
        await y.restart(), Ke(), a?.();
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
      /* @__PURE__ */ i(K, { name: m ? "lock" : "warning", size: 32 }),
      /* @__PURE__ */ i("h2", { children: o(m ? "sessionLockedTitle" : "connectionErrorTitle") }),
      /* @__PURE__ */ i("p", { children: m ? o("sessionLockedBody") : t || o("connectionErrorBody") }),
      d && /* @__PURE__ */ i(re, { error: !0, children: d }),
      /* @__PURE__ */ p("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ i(M, { primary: !0, icon: "refresh", disabled: l, onClick: () => void v(), children: o(l ? "working" : "retryConnection") }),
        /* @__PURE__ */ i(M, { icon: "sliders", disabled: l, onClick: ya, children: o("openSettings") })
      ] })
    ] })
  ] });
}
const bo = "galex:launch-options:v1", lt = "%command%", ot = /* @__PURE__ */ new Map();
function an(e) {
  return e?.defaultView?.SteamClient?.Apps ?? window.SteamClient?.Apps ?? R()?.SteamClient?.Apps;
}
function ee(e) {
  return e.replace(/\s+/g, " ").trim();
}
function vo() {
  const e = Qt(bo);
  if (!e || typeof e != "object") return {};
  const t = {};
  for (const [n, a] of Object.entries(e))
    /^\d{1,10}$/.test(n) && a && typeof a.args == "string" && ["windows", "linux", "macos"].includes(a.platform) && (t[n] = { args: a.args, platform: a.platform });
  return t;
}
function ja(e, t) {
  const n = vo();
  t.args ? n[String(e)] = t : delete n[String(e)], Kt(bo, n);
}
function ei(e, t) {
  if (!t) return e;
  const n = e.indexOf(t);
  return n < 0 ? e : ee(`${e.slice(0, n)} ${e.slice(n + t.length)}`);
}
function ti(e, t) {
  if (!t) return !0;
  const n = ee(e), a = ee(t);
  return n === a || n.endsWith(` ${a}`) || n.includes(` ${a} `);
}
function Bn(e) {
  const t = /(?:^|\s)%command%(?:\s|$)/i.exec(e);
  if (!t) return;
  const n = t.index + (t[0].startsWith(" ") ? 1 : 0);
  return { before: e.slice(0, n).trim(), after: e.slice(n + lt.length).trim() };
}
function ni(e, t, n, a = "") {
  const l = ei(ee(e), a), s = t.trim();
  if (!s) {
    if (n === "windows") return l;
    const g = Bn(l);
    return g ? !g.before && !g.after ? "" : ee(`${g.before} ${lt} ${g.after}`) : l;
  }
  if (ti(l, s)) return l;
  if (n === "windows") return ee(`${l} ${s}`);
  const d = Bn(l);
  return ee(d ? `${d.before} ${lt} ${d.after} ${s}` : `${lt} ${l} ${s}`);
}
function wo(e, t) {
  const n = t ? e?.strShortcutLaunchOptions : e?.strLaunchOptions;
  return typeof n == "string" ? n : "";
}
function yo(e, t, n) {
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
function ko(e, t, n) {
  const a = an(n);
  return new Promise((l, s) => {
    let d = !1, g = () => {
    };
    const m = setTimeout(() => v(new Error(o("launchOptionsUnavailable"))), 5e3), v = (c, u) => {
      d || (d = !0, clearTimeout(m), g(), c ? s(c instanceof Error ? c : new Error(String(c))) : l(u ?? ""));
    };
    try {
      g = yo(a, e, (c) => v(void 0, wo(c, t)));
    } catch (c) {
      v(c);
    }
  });
}
function oi(e, t, n, a) {
  const l = an(a);
  return new Promise((s, d) => {
    let g = !1, m = () => {
    };
    const v = setTimeout(() => c(new Error(o("launchOptionsUnavailable"))), 5e3), c = (u) => {
      g || (g = !0, clearTimeout(v), m(), u ? d(u instanceof Error ? u : new Error(String(u))) : s());
    };
    try {
      m = yo(l, e, (u) => {
        ee(wo(u, t)) === ee(n) && c();
      });
    } catch (u) {
      c(u);
    }
  });
}
async function ai(e, t, n, a) {
  const l = an(a), s = t ? l?.SetShortcutLaunchOptions : l?.SetAppLaunchOptions;
  if (typeof s != "function") throw new Error(o("launchOptionsUnavailable"));
  const d = await ko(e, t, a);
  if (ee(d) === ee(n)) return !1;
  const g = oi(e, t, n, a);
  return s.call(l, e, n), await g, !0;
}
async function ii(e, t) {
  if (!ct().autoLaunchOptions || !e.steamAppId) return;
  const n = e.steamAppId, a = !!e.nonSteam || ft(n, t), l = await y.launchPlan(e.slug), s = vo()[String(n)], d = await ko(n, a, t), g = ni(d, l.args, l.platform, s?.args ?? ""), m = await ai(n, a, g, t);
  ja(n, { args: l.args.trim(), platform: l.platform }), m && y.log(`launch options applied appid=${n} nonSteam=${a}`).catch(() => {
  });
}
function $n(e, t) {
  const n = e.steamAppId;
  if (!n) return Promise.resolve();
  const l = (ot.get(n) ?? Promise.resolve()).catch(() => {
  }).then(() => ii(e, t));
  return ot.set(n, l), l.finally(() => {
    ot.get(n) === l && ot.delete(n);
  }).catch(() => {
  }), l;
}
function Fn(e) {
  return o("launchOptionsFailed", { error: F(e) });
}
const ri = { includeCategories: [], excludeCategories: [], includeNsfw: !1, includeDeprecated: !0, includeDisabled: !0, includeEnabled: !0, sortBy: "name", sortOrder: "ascending" }, zn = { mods: [], totalModCount: 0, updates: [], unknownMods: [] };
function li(e) {
  if (e.type === "remote" && e.author && e.version) {
    if (e.backend === "Thunderstore") return `https://ccdn.thunderstore.io/live/repository/icons/${encodeURIComponent(`${e.author}-${e.name}-${e.version}`)}.png`;
    if (e.backend === "Hexium") return `https://cdn.hexium.gg/uploads/${encodeURIComponent(e.author)}/${encodeURIComponent(e.name)}/icon.png?${encodeURIComponent(e.version)}`;
  }
  if (e.icon && /^(https?:|data:)/i.test(e.icon)) return e.icon;
}
function si({ mod: e }) {
  const [t, n] = w(!1), a = li(e.data);
  return !a || t ? /* @__PURE__ */ i("span", { className: "gx-mod-avatar", "aria-hidden": "true", children: e.data.name.slice(0, 2).toUpperCase() }) : /* @__PURE__ */ i("img", { className: "gx-mod-avatar", src: a, alt: "", loading: "lazy", onError: () => n(!0) });
}
const Pt = (e) => e.replace(/_/g, " ");
function di({ game: e, demo: t = !1, installing: n = !1, embedded: a = !1 }) {
  Ee();
  const l = ht(), [s, d] = w({ activeId: 0, profiles: [] }), [g, m] = w(), [v, c] = w(zn), [u, f] = w(""), [L, S] = w(""), [G, b] = w("all"), [C, A] = w("name"), [T, U] = w(!0), [E, ne] = w(""), [X, ie] = w([]), [se, Te] = w(!1), [pe, ue] = w(!0), [we, x] = w(""), [O, de] = w(""), [Ie, B] = w(""), [N, ln] = w(""), [sn, Io] = w(0), [Go, Po] = w(0), [V, W] = w(null), [ce, oe] = w(""), [Je, bt] = w(""), [J, Ge] = w(null), [Pe, dn] = w("code"), [Oe, Be] = w("new"), [cn, Lo] = w(!1), [pn, Do] = w(!1), [vt, _o] = w(""), [ye, un] = w(null), [gn, mn] = w([]), [hn, fn] = w(""), [Eo, xn] = w(!1), [$e, wt] = w([]), [ge, Ye] = w(null), [me, To] = w(null), [Fe, je] = w(null), [et, yt] = w(null), tt = qe(!0), ze = tn(), bn = so(), _ = { slug: e.slug, profileId: g }, he = s.profiles.find((r) => r.id === g), H = () => Io((r) => r + 1), kt = () => Po((r) => r + 1);
  q(() => (tt.current = !0, () => {
    tt.current = !1, Ft(l);
  }), [l]), q(() => {
    je(null), Ft(l);
  }, [l, e.slug, g]), q(() => {
    const r = setTimeout(() => S(u), 220);
    return () => clearTimeout(r);
  }, [u]), q(() => {
    let r = !1;
    return ue(!0), x(""), m(void 0), c(zn), f(""), ne(""), ie([]), b("all"), y.call("profiles", { slug: e.slug }).then((h) => {
      r || (d(h), m(h.activeId));
    }).catch((h) => {
      r || (x(F(h)), ue(!1), ao(h) === "gale_session_locked" && Ke());
    }), () => {
      r = !0;
    };
  }, [e.slug, Go]), q(() => {
    if (g === void 0) return;
    let r = !1;
    ue(!0);
    const h = { ...ri, searchTerm: L, includeEnabled: G !== "disabled", includeDisabled: G !== "enabled", includeCategories: E ? [E] : [], sortBy: C, sortOrder: T ? "ascending" : "descending" };
    return y.call("mods", { slug: e.slug, profileId: g }, { args: h }).then((k) => {
      r || (c(k), x(""), ie((I) => Array.from(/* @__PURE__ */ new Set([...I, ...k.mods.flatMap((z) => z.data.categories ?? [])])).sort()));
    }).catch((k) => {
      r || x(F(k));
    }).finally(() => {
      r || ue(!1);
    }), () => {
      r = !0;
    };
  }, [e.slug, g, L, G, C, T, E, sn]), q(() => {
    if (!Ie) return;
    const r = setTimeout(() => B(""), 4500);
    return () => clearTimeout(r);
  }, [Ie]), q(() => {
    if (t || g === void 0 || ze.error || !bn.autoLaunchOptions) return;
    let r = !1;
    return $n(e, l).then(() => {
      r || de("");
    }).catch((h) => {
      r || de(Fn(h));
    }), () => {
      r = !0;
    };
  }, [e.slug, e.steamAppId, g, sn, ze.error, bn.autoLaunchOptions, t, l]), q(() => {
    V !== "export" || t || y.call("list_export_files", _).then(wt).catch((r) => x(F(r)));
  }, [V, g]);
  const { snapshot: Oo } = ho(), Bo = Oo?.tasks.find((r) => r.slug === e.slug && r.status === "active"), Re = v.updates.filter((r) => !r.ignore), vn = G === "updates" ? v.mods.filter((r) => Re.some((h) => h.updatedId.packageUuid === r.data.uuid)) : v.mods, $o = v.mods.filter((r) => r.enabled).length, Fo = Jn(() => $e.filter((r) => r.included).reduce((r, h) => r + h.size, 0), [$e]), D = ia(async (r, h) => {
    if (!N) {
      je(null), ln(r), x("");
      try {
        await h();
      } catch (k) {
        tt.current && x(F(k));
      } finally {
        tt.current && ln("");
      }
    }
  }, [N]), Ct = async (r, h = {}) => {
    await y.call(r, _, h);
    const k = await y.call("profiles", { slug: e.slug }), I = r === "import_profile" ? ce.trim() : ce;
    let z = k.activeId;
    (r === "create_profile" || r === "duplicate_profile" || r === "import_profile") && (z = k.profiles.find(($) => $.name === I)?.id ?? k.activeId), r === "delete_profile" && (z = k.activeId), await y.call("activate_profile", { slug: e.slug, profileId: z }), d(k), m(z), W(null), oe(""), Ge(null), H(), B(o("profileSaved"));
  }, zo = (r) => void D(r.data.uuid, async () => {
    const h = await y.call("toggle_mod", _, { uuid: r.data.uuid });
    h.type === "confirm" ? Ye({ title: o("disableMod", { name: r.data.name }), description: o("disableDependants"), uuids: [r.data.uuid, ...h.dependants.map((k) => k.uuid)], kind: "toggle" }) : H();
  }), wn = (r) => void D(r.data.uuid, async () => {
    const h = await y.call("remove_mod", _, { uuid: r.data.uuid });
    h.type === "confirm" ? Ye({ title: o("removeMod", { name: r.data.name }), description: o("removeDependants"), uuids: [r.data.uuid, ...h.dependants.map((k) => k.uuid)], kind: "remove" }) : (H(), B(o("modRemoved")));
  }), Ro = () => {
    ge && D("confirm", async () => {
      await y.call(ge.kind === "toggle" ? "force_toggle_mods" : "force_remove_mods", _, { uuids: [...new Set(ge.uuids)] }), Ye(null), H(), B(ge.kind === "toggle" ? o("stateChanged") : o("modRemoved"));
    });
  }, yn = async (r, h) => {
    try {
      await navigator.clipboard.writeText(r), B(h);
    } catch {
      x(o("clipboardError"));
    }
  }, St = (r) => void D("browser", async () => {
    if (t) {
      B(o("demoConfig"));
      return;
    }
    const h = await y.browserUrl({ ..._, lang: ga(), file: r?.configFile });
    Ue(h.url), B(o("configOpened"));
  }), At = (r, h, k = r.data.backend) => void D("version", async () => {
    await y.call("change_mod_version", _, { id: { packageUuid: r.data.uuid, versionUuid: h.uuid, backend: k } }), W(null), H(), B(o("versionQueued"));
  }), Ho = (r) => void D("folder", async () => {
    if (t) {
      B(o("demoFolder"));
      return;
    }
    await y.call("open_mod_dir", _, { uuid: r.data.uuid }), B(o("folderOpened"));
  }), Uo = (r) => void D("dependants", async () => {
    const h = await y.call("get_dependants", _, { uuid: r.data.uuid });
    yt({ name: r.data.name, items: h });
  }), Xo = (r) => {
    const h = !!N, k = [{ id: "uninstall", label: o("uninstall"), icon: "trash", danger: !0, disabled: h, onSelect: () => wn(r) }];
    if (r.data.versions.length > 1 && k.push({ id: "version", label: o("changeVersion"), icon: "layers", disabled: h, children: r.data.versions.filter(($) => $.uuid !== r.data.versionUuid).map(($) => ({ id: `version-${$.uuid}`, label: $.name, onSelect: () => At(r, $) })) }), r.alternateBackend) {
      const $ = r.alternateBackend;
      k.push({ id: "source", label: o("changeSource"), icon: "branch", disabled: h, children: [{ id: `source-${$.backend}`, label: `${$.backend} (${$.latestVersion})`, onSelect: () => At(r, { name: $.latestVersion, uuid: $.latestVersionUuid }, $.backend) }] });
    }
    k.push({ id: "dependants", label: o("showDependants"), icon: "branch", disabled: h, onSelect: () => Uo(r) }), k.push({ id: "folder", label: o("openFolder"), icon: "folder", disabled: h, onSelect: () => Ho(r) }), r.configFile && k.push({ id: "config", label: o("openConfig"), icon: "sliders", disabled: h, onSelect: () => St(r) });
    const I = On(r.data.websiteUrl);
    I && k.push({ id: "website", label: o("openWebsite"), icon: "external", disabled: h, onSelect: () => Ue(I) }), r.data.type === "remote" && k.push({ id: "link", label: o("copyLink"), icon: "link", disabled: h, onSelect: () => void yn(Ja(e.slug, r.data), o("linkCopied")) });
    const z = On(r.data.donateUrl);
    return z && k.push({ id: "donate", label: o("donate"), icon: "heart", disabled: h, onSelect: () => Ue(z) }), k;
  }, kn = (r, h, k) => {
    const I = Xo(h), z = `${o("modActions")} — ${Pt(h.data.name)}`;
    if (Qa(I, r, z, k)) return;
    const $ = r.getBoundingClientRect();
    je({ items: I, label: z, point: k ?? { x: $.left + 24, y: $.top + 24 }, anchor: r });
  }, Vo = () => void D("import", async () => {
    if (!Je.trim()) throw new Error(o("importCodePlaceholder"));
    const r = await y.call("read_profile_code", _, { code: Je.trim() });
    Ge(r), oe(r.manifest.profileName), Be(s.profiles.some((h) => h.name === r.manifest.profileName) ? "overwrite" : "new");
  }), Wo = (r) => {
    if (r.size > 15 * 1024 * 1024) {
      x(o("fileTooLarge"));
      return;
    }
    const h = new FileReader();
    h.onload = () => void D("import", async () => {
      const k = String(h.result).split(",")[1] ?? "", I = await y.call("read_profile_base64", _, { base64: k });
      Ge(I), oe(I.manifest.profileName), Be(s.profiles.some((z) => z.name === I.manifest.profileName) ? "overwrite" : "new");
    }), h.onerror = () => x(o("fileReadError")), h.readAsDataURL(r);
  }, qo = (r) => void D("import", async () => {
    const h = await y.call("read_profile_file", _, { path: r });
    Ge(h), oe(h.manifest.profileName), Be(s.profiles.some((k) => k.name === h.manifest.profileName) ? "overwrite" : "new");
  }), Zo = async () => {
    const r = await Mn(o("profileFileDialog"), o("profileFileFilter"), ["*.r2z", "*.zip"]);
    r && qo(r);
  }, Qo = async () => {
    const r = await Mn(o("localFileDialog"), o("localFileFilter"), ["*.zip"]);
    r && D("local", async () => {
      await y.call("import_local_mod", _, { path: r }), W(null), H(), B(o("profileSaved"));
    });
  }, Ko = () => void D("import", async () => {
    if (!J) return;
    const r = { ...J, manifest: { ...J.manifest, profileName: ce.trim() || J.manifest.profileName } };
    await Ct("import_profile", { data: r, options: { importAll: cn, merge: Oe === "overwrite" && pn, ignoreMissingMods: J.missingMods.length > 0 } });
  }), Jo = () => void D("r2", async () => {
    const r = await y.call("get_r2modman_info", _, { path: vt.trim() || null });
    un(r), mn(r?.profiles.map(() => !0) ?? []);
  }), Yo = () => void D("r2", async () => {
    ye && (await y.call("import_r2modman", _, { path: ye.path, include: gn }), W(null), kt(), H(), B(o("profileSaved")));
  }), jo = (r) => {
    if (r.size > 15 * 1024 * 1024) {
      x(o("fileTooLarge"));
      return;
    }
    const h = new FileReader();
    h.onload = () => void D("local", async () => {
      await y.call("import_local_mod_base64", _, { base64: String(h.result).split(",")[1] ?? "" }), W(null), H(), B(o("profileSaved"));
    }), h.onerror = () => x(o("fileReadError")), h.readAsDataURL(r);
  }, ea = () => void D("export", async () => {
    const r = await y.call("export_code", _);
    xn(r.type !== "success"), fn(r.code ?? ""), W("export");
  }), ta = (r) => {
    if (t) {
      wt(r);
      return;
    }
    D("export-files", async () => {
      await y.call("set_excluded_export_files", _, { excludedFiles: r.filter((h) => !h.included).map((h) => h.path) }), wt(r), fn("");
    });
  }, na = () => void D("export-file", async () => {
    const { url: r } = await y.browserUrl({ ..._, kind: "export" });
    wa(r);
  }), oa = () => void D("update", async () => {
    await y.call("update_mods", _, { uuids: Re.map((r) => r.updatedId.packageUuid) }), B(o(t ? "demoUpdate" : "updateQueued")), H();
  }), fe = () => {
    N || (W(null), Ge(null), oe(""), bt(""), un(null), xn(!1));
  };
  return !t && ze.error ? /* @__PURE__ */ i(Ya, { code: ze.errorCode, error: ze.error, game: e, onRetry: () => {
    kt(), H();
  } }) : /* @__PURE__ */ p("section", { className: `galex gx-mods${a ? " gx-mods--embedded" : ""}`, "aria-label": `${o("mods")} — ${e.name}`, "data-appid": e.steamAppId, children: [
    !a && /* @__PURE__ */ p("div", { className: "gx-heading", children: [
      /* @__PURE__ */ i("h1", { children: o("mods") }),
      (n || t) && /* @__PURE__ */ i("div", { className: "gx-heading-meta", children: o(n ? "working" : "demo") })
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-toolbar", children: [
      /* @__PURE__ */ i(M, { onClick: () => Ue(`https://thunderstore.io/c/${encodeURIComponent(e.slug)}/`), children: o("openThunderstore") }),
      /* @__PURE__ */ p(M, { onClick: () => Te((r) => !r), "aria-expanded": se, children: [
        o("advanced"),
        " ",
        /* @__PURE__ */ i(K, { name: "chevron-down", className: se ? "gx-chevron-open" : "", size: 13 })
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
          /* @__PURE__ */ i(M, { disabled: !he || !!N, onClick: () => {
            oe(he?.name ?? ""), W("rename");
          }, children: o("renameProfile") }),
          /* @__PURE__ */ i(M, { disabled: !he || !!N, onClick: () => {
            oe(`${he?.name} copy`), W("duplicate");
          }, children: o("duplicateProfile") }),
          /* @__PURE__ */ i(M, { className: "gx-danger", disabled: s.profiles.length < 2 || !!N, onClick: () => W("delete"), children: o("deleteProfile") })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ i("div", { className: "gx-profile-line", children: /* @__PURE__ */ i("span", { className: "gx-field-label", children: o("profileTransfer") }) }),
        /* @__PURE__ */ p("div", { className: "gx-profile-actions", children: [
          /* @__PURE__ */ i(M, { icon: "download", disabled: !he || !!N, onClick: () => {
            bt(""), Ge(null), dn("code"), W("import");
          }, children: o("import") }),
          /* @__PURE__ */ i(M, { icon: "external", disabled: !he || !!N, onClick: ea, children: o("export") })
        ] })
      ] }),
      /* @__PURE__ */ p("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ i("div", { className: "gx-profile-line", children: /* @__PURE__ */ i("span", { className: "gx-field-label", children: o("modConfiguration") }) }),
        /* @__PURE__ */ i("div", { className: "gx-profile-actions", children: /* @__PURE__ */ i(M, { icon: "sliders", disabled: !he || !!N, onClick: () => St(), children: o("config") }) })
      ] })
    ] }),
    /* @__PURE__ */ p("div", { className: "gx-search-row", children: [
      /* @__PURE__ */ p("div", { className: "gx-filter-group", children: [
        /* @__PURE__ */ p("span", { className: "gx-field-label DialogLabel", children: [
          o("filter"),
          ":"
        ] }),
        /* @__PURE__ */ p("label", { className: "gx-search DialogInput_Wrapper", children: [
          /* @__PURE__ */ i("input", { className: "DialogInput DialogInputPlaceholder DialogTextInputBase", "aria-label": o("searchMods"), placeholder: o("searchMods"), value: u, onChange: (r) => f(r.target.value) }),
          u && /* @__PURE__ */ i("button", { "aria-label": o("clearSearch"), onClick: () => f(""), children: /* @__PURE__ */ i(K, { name: "x", size: 13 }) })
        ] })
      ] }),
      /* @__PURE__ */ i(be, { label: o("filter"), value: G, onChange: b, options: [{ value: "all", label: o("all") }, { value: "enabled", label: o("enabled") }, { value: "disabled", label: o("disabled") }, { value: "updates", label: o("updates") }] }),
      /* @__PURE__ */ p("div", { className: "gx-filter-group", children: [
        /* @__PURE__ */ p("span", { className: "gx-field-label DialogLabel", children: [
          o("sortBy"),
          ":"
        ] }),
        /* @__PURE__ */ i(be, { label: o("sortBy"), value: C, onChange: A, options: [{ value: "name", label: o("byName") }, { value: "author", label: o("byAuthor") }, { value: "installDate", label: o("byInstallDate") }, { value: "diskSpace", label: o("bySize") }, { value: "downloads", label: o("byDownloads") }] }),
        /* @__PURE__ */ i(ae, { className: "gx-sort-direction", icon: T ? "arrow-up" : "arrow-down", label: o(T ? "ascending" : "descending"), onClick: () => U((r) => !r), disabled: !!N })
      ] }),
      /* @__PURE__ */ i(be, { label: o("categories"), value: E, onChange: ne, options: [{ value: "", label: o("allCategories") }, ...X.map((r) => ({ value: r, label: r }))] })
    ] }),
    we && /* @__PURE__ */ i(re, { error: !0, onRetry: () => {
      x(""), H();
    }, children: we }),
    O && /* @__PURE__ */ i(re, { error: !0, onRetry: () => void $n(e, l).then(() => de("")).catch((r) => de(Fn(r))), children: O }),
    Ie && /* @__PURE__ */ i(re, { children: Ie }),
    Bo && /* @__PURE__ */ i(re, { children: /* @__PURE__ */ p("span", { children: [
      o("operationInProgress"),
      " ",
      /* @__PURE__ */ i("button", { className: "gx-update-link", onClick: va, children: o("openDownloads") })
    ] }) }),
    /* @__PURE__ */ p("div", { className: "gx-list-heading", children: [
      /* @__PURE__ */ i("span", { children: o("modCount", { count: v.totalModCount }) }),
      /* @__PURE__ */ i("span", { children: o("enabledCount", { count: $o }) }),
      !!Re.length && /* @__PURE__ */ p("button", { className: "gx-update-link", disabled: !!N, onClick: oa, children: [
        /* @__PURE__ */ i(K, { name: "download", size: 13 }),
        o("updateAll", { count: Re.length })
      ] }),
      /* @__PURE__ */ i(ae, { icon: "refresh", label: o("refresh"), onClick: () => {
        kt(), H();
      }, disabled: !!N })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-mod-list", role: "list", tabIndex: 0, children: pe && !v.mods.length ? /* @__PURE__ */ i("div", { className: "gx-empty", children: o("loading") }) : vn.length ? vn.map((r, h) => {
      const k = Re.find((I) => I.updatedId.packageUuid === r.data.uuid);
      return /* @__PURE__ */ p(
        "div",
        {
          className: `gx-mod-row ${r.enabled ? "" : "is-disabled"}`,
          role: "listitem",
          tabIndex: 0,
          "aria-haspopup": "menu",
          "data-mod-uuid": r.data.uuid,
          onContextMenu: (I) => {
            I.preventDefault(), I.stopPropagation(), kn(I.currentTarget, r, { x: I.clientX, y: I.clientY });
          },
          onKeyDown: (I) => {
            I.target === I.currentTarget && (I.key === "ContextMenu" || I.shiftKey && I.key === "F10") && (I.preventDefault(), I.stopPropagation(), kn(I.currentTarget, r));
          },
          children: [
            /* @__PURE__ */ i(He, { checked: r.enabled, disabled: !!N, label: Pt(r.data.name), onChange: () => zo(r) }),
            /* @__PURE__ */ i("span", { className: "gx-mod-index", children: h + 1 }),
            /* @__PURE__ */ i(si, { mod: r }),
            /* @__PURE__ */ p("div", { className: "gx-mod-info", children: [
              /* @__PURE__ */ p("div", { className: "gx-mod-title", children: [
                /* @__PURE__ */ i("h3", { children: Pt(r.data.name) }),
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
            /* @__PURE__ */ i("span", { className: "gx-mod-size", children: Ae(r.data.fileSize) }),
            /* @__PURE__ */ p("div", { className: "gx-mod-actions", children: [
              r.configFile && /* @__PURE__ */ i(ae, { icon: "sliders", label: o("openConfig"), disabled: !!N, onClick: () => St(r) }),
              r.data.type === "remote" && /* @__PURE__ */ i(ae, { icon: "layers", label: o("versions"), disabled: !!N, onClick: () => {
                To(r), W("versions");
              } }),
              k && /* @__PURE__ */ i(ae, { icon: "download", label: o("update"), disabled: !!N, onClick: () => void D("update-one", async () => {
                await y.call("update_mods", _, { uuids: [r.data.uuid] }), H(), B(o("updateQueued"));
              }) }),
              /* @__PURE__ */ i(ae, { icon: "trash", label: o("remove"), disabled: !!N, onClick: () => wn(r) })
            ] })
          ]
        },
        r.data.uuid
      );
    }) : /* @__PURE__ */ i("div", { className: "gx-empty", children: o("noMods") }) }),
    ge && /* @__PURE__ */ i(Gn, { title: ge.title, onClose: () => Ye(null), onConfirm: Ro, busy: !!N, danger: ge.kind === "remove", children: /* @__PURE__ */ i("p", { children: ge.description }) }),
    (V === "create" || V === "rename" || V === "duplicate") && /* @__PURE__ */ i(ke, { title: o(V === "create" ? "createProfileTitle" : V === "rename" ? "renameProfileTitle" : "duplicateProfileTitle"), onClose: fe, footer: /* @__PURE__ */ p(Z, { children: [
      /* @__PURE__ */ i(M, { onClick: fe, disabled: !!N, children: o("cancel") }),
      /* @__PURE__ */ i(M, { primary: !0, disabled: !!N || !ce.trim(), onClick: () => void D("profile", () => Ct(V === "create" ? "create_profile" : V === "rename" ? "rename_profile" : "duplicate_profile", { name: ce.trim() })), children: o(N ? "working" : "save") })
    ] }), children: /* @__PURE__ */ p("label", { className: "gx-form-label", children: [
      o("profileName"),
      /* @__PURE__ */ i("input", { value: ce, onChange: (r) => oe(r.target.value), autoFocus: !0 })
    ] }) }),
    V === "delete" && /* @__PURE__ */ i(Gn, { title: o("deleteProfileTitle"), onClose: fe, onConfirm: () => void D("profile", () => Ct("delete_profile", { id: g })), busy: !!N, danger: !0, children: /* @__PURE__ */ i("p", { children: o("deleteProfileBody", { name: he?.name ?? "" }) }) }),
    V === "import" && /* @__PURE__ */ i(ke, { title: o(J ? "importPreview" : "importTitle"), onClose: fe, footer: /* @__PURE__ */ p(Z, { children: [
      /* @__PURE__ */ i(M, { onClick: fe, disabled: !!N, children: o("cancel") }),
      J ? /* @__PURE__ */ i(M, { primary: !0, onClick: Ko, disabled: !!N || !ce.trim(), children: o(N ? "importing" : "installProfile") }) : Pe === "code" ? /* @__PURE__ */ i(M, { primary: !0, onClick: Vo, disabled: !!N || !Je.trim(), children: o(N ? "working" : "continue") }) : Pe === "r2" ? /* @__PURE__ */ i(M, { primary: !0, onClick: ye ? Yo : Jo, disabled: !!N || !ye && !vt.trim(), children: o(N ? "working" : ye ? "import" : "r2Load") }) : null
    ] }), children: J ? /* @__PURE__ */ p(Z, { children: [
      /* @__PURE__ */ p("div", { className: "gx-tabs", children: [
        /* @__PURE__ */ i(M, { className: Oe === "new" ? "gx-button--primary" : "", onClick: () => Be("new"), children: o("newProfile") }),
        /* @__PURE__ */ i(M, { className: Oe === "overwrite" ? "gx-button--primary" : "", onClick: () => Be("overwrite"), children: o("overwriteProfile") })
      ] }),
      /* @__PURE__ */ p("label", { className: "gx-form-label", children: [
        o("profileName"),
        /* @__PURE__ */ i("input", { value: ce, onChange: (r) => oe(r.target.value) })
      ] }),
      Oe === "overwrite" && /* @__PURE__ */ i(be, { label: o("overwriteProfile"), value: ce, onChange: oe, options: s.profiles.map((r) => ({ value: r.name, label: r.name })) }),
      /* @__PURE__ */ p("div", { className: "gx-import-summary", children: [
        /* @__PURE__ */ i("strong", { children: J.manifest.profileName }),
        /* @__PURE__ */ i("span", { children: o("modsToInstall", { count: J.manifest.mods.length }) })
      ] }),
      !!J.missingMods.length && /* @__PURE__ */ i(re, { error: !0, children: o("missingMods", { mods: J.missingMods.join(", ") }) }),
      /* @__PURE__ */ p("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ i(He, { checked: cn, onChange: Lo, label: o("importAllFiles") }),
        o("importAllFiles")
      ] }),
      Oe === "overwrite" && /* @__PURE__ */ p("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ i(He, { checked: pn, onChange: Do, label: o("mergeProfiles") }),
        o("mergeProfiles")
      ] })
    ] }) : /* @__PURE__ */ p(Z, { children: [
      /* @__PURE__ */ i("div", { className: "gx-tabs", children: ["code", "r2", "local"].map((r) => /* @__PURE__ */ i(M, { className: Pe === r ? "gx-button--primary" : "", onClick: () => dn(r), children: o(r === "code" ? "importCode" : r === "r2" ? "importR2" : "importLocal") }, r)) }),
      Pe === "code" && /* @__PURE__ */ p(Z, { children: [
        /* @__PURE__ */ p("label", { className: "gx-form-label", children: [
          o("importCode"),
          /* @__PURE__ */ i("textarea", { value: Je, onChange: (r) => bt(r.target.value), placeholder: o("importCodePlaceholder"), rows: 3 })
        ] }),
        /* @__PURE__ */ p("div", { className: "gx-form-label", children: [
          /* @__PURE__ */ i("span", { children: o("importFile") }),
          Nn() ? /* @__PURE__ */ i(M, { icon: "folder", disabled: !!N, onClick: () => void Zo(), children: o("importFileButton") }) : /* @__PURE__ */ i("input", { type: "file", accept: ".r2z,.zip", onChange: (r) => {
            const h = r.target.files?.[0];
            h && Wo(h);
          } })
        ] })
      ] }),
      Pe === "r2" && /* @__PURE__ */ p(Z, { children: [
        /* @__PURE__ */ p("label", { className: "gx-form-label", children: [
          o("r2Path"),
          /* @__PURE__ */ i("input", { value: vt, onChange: (r) => _o(r.target.value), placeholder: "~/.config/r2modman" })
        ] }),
        ye && /* @__PURE__ */ p("div", { className: "gx-file-list", children: [
          /* @__PURE__ */ i("strong", { children: o("r2Profiles") }),
          ye.profiles.map((r, h) => /* @__PURE__ */ p("label", { children: [
            /* @__PURE__ */ i(He, { checked: !!gn[h], label: r, onChange: (k) => mn((I) => I.map((z, $) => $ === h ? k : z)) }),
            /* @__PURE__ */ i("span", { children: r })
          ] }, r))
        ] })
      ] }),
      Pe === "local" && /* @__PURE__ */ p("div", { className: "gx-form-label", children: [
        /* @__PURE__ */ i("span", { children: o("importLocalFile") }),
        Nn() ? /* @__PURE__ */ i(M, { icon: "folder", disabled: !!N, onClick: () => void Qo(), children: o("importLocalFile") }) : /* @__PURE__ */ i("input", { type: "file", accept: ".zip", onChange: (r) => {
          const h = r.target.files?.[0];
          h && jo(h);
        } })
      ] })
    ] }) }),
    V === "export" && /* @__PURE__ */ p(ke, { title: o("exportTitle"), onClose: fe, footer: /* @__PURE__ */ i(M, { primary: !0, onClick: fe, children: o("done") }), children: [
      /* @__PURE__ */ i("p", { children: o("exportIntro") }),
      Eo ? /* @__PURE__ */ i(re, { error: !0, children: o("exportTooLarge") }) : /* @__PURE__ */ p("div", { className: "gx-export-code", children: [
        /* @__PURE__ */ i("code", { children: hn }),
        /* @__PURE__ */ i(ae, { icon: "copy", label: o("copyCode"), onClick: () => void yn(hn, o("codeCopied")) })
      ] }),
      !t && /* @__PURE__ */ p("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ i(M, { icon: "download", disabled: !!N, onClick: na, children: o("exportFile") }),
        /* @__PURE__ */ i(M, { icon: "copy", disabled: !!N, onClick: () => void D("deps", async () => {
          await y.call("copy_dependency_strings", _), B(o("dependenciesCopied"));
        }), children: o("copyDependencies") }),
        /* @__PURE__ */ i(M, { icon: "copy", disabled: !!N, onClick: () => void D("debug", async () => {
          await y.call("copy_debug_info", _), B(o("debugCopied"));
        }), children: o("copyDebug") })
      ] }),
      !!$e.length && /* @__PURE__ */ p("details", { children: [
        /* @__PURE__ */ i("summary", { children: o("exportFiles") }),
        /* @__PURE__ */ i("p", { className: "gx-muted", children: o("exportFilesHint") }),
        /* @__PURE__ */ i("div", { className: "gx-file-list", children: $e.map((r) => /* @__PURE__ */ p("label", { children: [
          /* @__PURE__ */ i(He, { checked: r.included, disabled: !!N, label: r.path, onChange: (h) => ta($e.map((k) => k.path === r.path ? { ...k, included: h } : k)) }),
          /* @__PURE__ */ i("span", { children: r.path }),
          /* @__PURE__ */ i("small", { children: Ae(r.size) })
        ] }, r.path)) }),
        /* @__PURE__ */ i("p", { className: "gx-muted", children: o("totalSize", { size: Ae(Fo) }) })
      ] })
    ] }),
    V === "versions" && me && /* @__PURE__ */ p(ke, { title: o("versionTitle", { name: me.data.name }), onClose: fe, children: [
      /* @__PURE__ */ i("p", { children: o("currentVersion", { version: me.data.version ?? "" }) }),
      /* @__PURE__ */ i("div", { className: "gx-version-list", children: me.data.versions.map((r) => /* @__PURE__ */ p(M, { disabled: !!N || r.uuid === me.data.versionUuid, icon: r.uuid === me.data.versionUuid ? "check" : "layers", onClick: () => At(me, r), children: [
        r.name,
        r.uuid === me.data.versionUuid ? " · " + o("installed") : ""
      ] }, r.uuid)) })
    ] }),
    et && /* @__PURE__ */ i(ke, { title: o("dependantsTitle", { name: et.name }), onClose: () => yt(null), footer: /* @__PURE__ */ i(M, { primary: !0, onClick: () => yt(null), children: o("done") }), children: et.items.length ? /* @__PURE__ */ i("div", { className: "gx-version-list gx-dependant-list", children: et.items.map((r) => /* @__PURE__ */ p("div", { className: "gx-dependant", children: [
      /* @__PURE__ */ i("strong", { children: r.fullName }),
      r.preferredVersion && /* @__PURE__ */ i("span", { className: "gx-muted", children: o("preferredVersion", { version: r.preferredVersion }) })
    ] }, r.fullName)) }) : /* @__PURE__ */ i("p", { children: o("noDependants") }) }),
    Fe && /* @__PURE__ */ i(Ka, { items: Fe.items, label: Fe.label, point: Fe.point, anchor: Fe.anchor, onClose: () => je(null) })
  ] });
}
const We = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new Map();
function ci(e, t) {
  xt.set(e, t);
}
function te(e) {
  return (e ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
function Ht(e, t) {
  try {
    const n = window.LocalizationManager, a = n?.m_mapTokens?.get?.(e) ?? n?.m_mapFallbackTokens?.get?.(e);
    if (typeof a == "string" && a.length > 0) return a;
  } catch {
  }
  return t;
}
function pi() {
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
  for (const [n, a] of [["AppProperties_GeneralPage", "General"], ["AppProperties_General", "General"]]) e.add(te(Ht(n, a)));
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
  ]) t.add(te(Ht(n, a)));
  return { general: e, secondary: t };
}
function Rn(e, t, n) {
  Rt.get(e) !== t && (Rt.set(e, t), y.log(`properties: ${n}`).catch(() => {
  }));
}
function Hn(e) {
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
    const a = Ne(n);
    if (a) return a;
  }
}
function ui(e, t = []) {
  const n = [e, ...t, ...Array.from(e.querySelectorAll("*")).slice(0, 300)], a = /* @__PURE__ */ new Set();
  for (const m of n) {
    if (a.has(m)) continue;
    a.add(m);
    const v = Object.keys(m).find((u) => u.startsWith("__reactFiber$") || u.startsWith("__reactInternalInstance$"));
    let c = v ? m[v] : void 0;
    for (let u = 0; c && u < 40; u++, c = c.return) {
      const f = Hn(c.memoizedProps) ?? Hn(c.pendingProps);
      if (f) return f;
    }
  }
  const l = (e.matches("[data-appid]") ? e : e.querySelector("[data-appid]"))?.getAttribute("data-appid") ?? void 0, s = Ne(l);
  if (s) return s;
  const g = (e.ownerDocument.defaultView?.location.pathname ?? "").match(/\/(?:library\/app|properties)\/(\d+)/);
  if (g) {
    const m = Ne(g[1]);
    if (m) return m;
  }
  for (const m of Array.from(e.querySelectorAll("img"))) {
    const v = m.src.match(/\/(?:apps|assets)\/(\d{2,10})\//), c = Ne(v?.[1]);
    if (c) return c;
  }
}
function gi(e, t) {
  const a = [xt.get(e)?.title, e.title, t.querySelector('h1,h2,[class*="Title"]')?.textContent], s = [Ht("AppProperties_Title", "Properties - %1$s"), "Properties - %1$s", "Properties: %1$s", "Свойства — %1$s", "Свойства: %1$s", "Eigenschaften – %1$s", "Eigenschaften: %1$s"], d = /* @__PURE__ */ new Set();
  for (const g of a) {
    const m = te(g);
    if (!m || m === "steam") continue;
    let v = !1;
    for (const c of s) {
      const u = c.split("%1$s");
      if (u.length < 2) continue;
      const f = u.map((S) => S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")), L = m.match(new RegExp("^\\s*" + f.join("\\s*(.+?)\\s*") + "\\s*$", "i"));
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
        const u = Ne(c ?? v?.appid ?? v?.m_unAppID);
        if (!u) return;
        const f = te(v?.display_name ?? v?.m_strDisplayName);
        f && d.has(f) && (m = u);
      }), m;
    } catch {
      return;
    }
}
function mi(e, t) {
  let n = e;
  for (; n.parentElement && n.parentElement !== t; ) n = n.parentElement;
  return n.parentElement === t ? n : e;
}
function hi(e) {
  const { general: t, secondary: n } = pi(), a = Array.from(e.querySelectorAll("*")).filter((s) => {
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
      const v = Array.from(new Set(m.map((u) => mi(u, d)))), c = v.map((u) => te(u.textContent));
      if (c.some((u) => t.has(u)) && c.some((u) => n.has(u))) return { list: d, tabs: v };
    }
  }
}
function fi(e) {
  const t = new Set(Array.from(e.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"],[class*="DialogBody"]')));
  return xt.get(e)?.allowBodyFallback && e.body && t.add(e.body), Array.from(t);
}
function xi(e) {
  return Array.from(e.dialog.querySelectorAll('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"],[class*="TabContent"],[class*="tab-content"]')).filter((t) => t !== e.panel && !t.contains(e.panel) && !t.hasAttribute("data-galex-properties"));
}
function Ut(e) {
  const t = Array.from(e.querySelectorAll('[role="tabpanel"],[class*="DialogContent"]')).filter((n) => n.classList.contains("DialogContent") && !n.hasAttribute("data-galex-properties"));
  return t.find((n) => n.style.display !== "none" && !n.hidden) ?? t[0];
}
function bi(e) {
  return e.querySelector(".DialogBody") ?? e.querySelector(".DialogContent_InnerWidth") ?? e;
}
function rn(e) {
  const t = bi(e), n = e.querySelector(".DialogHeader");
  return { shell: e, body: t, header: n ?? null, headerText: n?.textContent ?? "", shellStyle: { display: e.style.display, hidden: e.hidden }, bodyStyle: { display: t.style.display, hidden: t.hidden }, labelledBy: e.getAttribute("aria-labelledby"), id: e.id, children: /* @__PURE__ */ new Map() };
}
function ut(e) {
  let t = e.adopted;
  if (!t) return;
  if (!t.shell.isConnected) {
    const a = Ut(e.dialog);
    if (!a) return;
    e.panel = a, e.adopted = t = rn(a);
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
function vi(e) {
  const t = e.adopted;
  t && (t.children.forEach((n, a) => {
    a.isConnected && (a.style.display = n.display, a.hidden = n.hidden);
  }), t.children.clear(), t.header && t.header.isConnected && (t.header.textContent = t.headerText), e.mount.remove(), t.shell.isConnected && (t.shell.removeAttribute("data-galex-properties"), t.labelledBy === null ? t.shell.removeAttribute("aria-labelledby") : t.shell.setAttribute("aria-labelledby", t.labelledBy), t.shell.style.display = t.shellStyle.display, t.shell.hidden = t.shellStyle.hidden));
}
function wi(e, t) {
  const a = e.dialog.ownerDocument.createElement("div");
  a.className = "gx-adopted-mount", a.setAttribute("data-galex-mount", ""), a.hidden = !0;
  const l = e.active;
  Co(e), e.resize?.disconnect(), e.resize = void 0;
  const s = e.panel, d = e.root;
  e.adopted = rn(t), e.panel = t, e.mount = a, e.root = st(a), e.sizePanel = () => {
  };
  try {
    d.unmount();
  } catch {
  }
  s.remove(), l && (ut(e), gt(e));
}
function gt(e) {
  for (const t of xi(e))
    e.hidden.has(t) || e.hidden.set(t, { display: t.style.display, hidden: t.hidden }), t.style.display !== "none" && (t.style.display = "none");
}
function Co(e) {
  e.hidden.forEach((t, n) => {
    n.style.display = t.display, n.hidden = t.hidden;
  }), e.hidden.clear();
}
function yi(e) {
  return /Active|Selected|Current/.test(e) || /^(active|selected|current)$/i.test(e) || /[_-](active|selected|current)([_-]|$)/i.test(e);
}
function Xt(e, t, n = []) {
  for (const a of [e, ...Array.from(e.querySelectorAll("*"))]) {
    const l = a.getAttribute("class");
    if (!l) continue;
    const s = l.split(/\s+/).filter(Boolean), d = s.filter((g) => !yi(g) && !n.includes(g));
    d.length !== s.length && (t && !t.has(a) && t.set(a, l), d.length ? a.setAttribute("class", d.join(" ")) : a.removeAttribute("class"));
  }
}
function So(e) {
  for (const t of e.nativeTabs) Xt(t, e.nativeClasses, e.selectedDelta);
  e.list.querySelectorAll('[role="tab"]').forEach((t) => {
    t !== e.tab && (Xt(t, e.nativeClasses, e.selectedDelta), t.setAttribute("aria-selected", "false"));
  });
}
function Ao(e, t) {
  const { tab: n, selectedDelta: a } = e, l = a.length > 0;
  n.classList.toggle("gx-tab-active", t && !l);
  for (const s of a) n.classList.toggle(s, t);
  for (const s of [n, ...Array.from(n.querySelectorAll('[role="tab"]'))]) s.setAttribute("aria-selected", t ? "true" : "false");
}
function ki(e) {
  e.nativeClasses.forEach((t, n) => {
    n.isConnected && n.setAttribute("class", t);
  }), e.nativeClasses.clear();
}
function No(e) {
  e.active && (e.active = !1, e.adopted ? vi(e) : e.panel.hidden = !0, Ao(e, !1), ki(e), Co(e));
}
function Ci(e) {
  if (e.active) {
    e.adopted ? ut(e) : e.panel.hidden = !1, gt(e);
    return;
  }
  e.adopted && ut(e), gt(e), So(e), e.active = !0, e.adopted || (e.panel.hidden = !1), e.sizePanel(), Ao(e, !0);
}
function Un(e, t, n) {
  e.root.render(Q(Zt.Provider, { value: e.dialog.ownerDocument }, Q(qt, null, Q(di, { key: `${e.slug}-${e.appid}`, game: t, installing: n, embedded: !!e.adopted }))));
}
function Vt(e) {
  No(e), e.resize?.disconnect(), e.list.removeEventListener("click", e.onNativeClick, !0), We.delete(e.dialog);
  const { root: t, tab: n, panel: a, mount: l, adopted: s } = e;
  queueMicrotask(() => {
    try {
      t.unmount();
    } catch {
    }
    n.remove(), s ? l.remove() : a.remove();
  });
}
function Si(e, t) {
  const n = te(t), a = o("mods"), l = Array.from(e.querySelectorAll("*")).filter((d) => te(d.textContent) === n), s = l[l.length - 1];
  s ? s.textContent = a : e.textContent = a;
}
function Xn(e) {
  return (e.getAttribute("class") ?? "").split(/\s+/).filter(Boolean);
}
function Ai(e) {
  const t = e.find((l) => l.getAttribute("aria-selected") === "true"), n = e.find((l) => l.getAttribute("aria-selected") === "false");
  if (!t || !n) return [];
  const a = new Set(Xn(n));
  return Xn(t).filter((l) => !a.has(l));
}
function Mo(e) {
  const t = Ot();
  for (const [s, d] of Array.from(We)) {
    if (!e.contains(s)) continue;
    if (!s.isConnected || !d.tab.isConnected || !d.list.isConnected) {
      Vt(d);
      continue;
    }
    const g = Ln(d.appid, t.games, void 0, e);
    if (!g) {
      Vt(d);
      continue;
    }
    if (!d.adopted) {
      const m = Ut(s);
      m && wi(d, m);
    }
    d.active && (d.adopted && ut(d), gt(d), So(d)), Un(d, g, t.snapshot?.installing ?? !1);
  }
  if (!t.games.length) return;
  const n = fi(e), a = [];
  let l = 0;
  for (const s of n) {
    if (We.has(s) || s.querySelector("[data-galex-properties]")) continue;
    const d = hi(s);
    if (!d) {
      a.push("no-tablist");
      continue;
    }
    const g = ui(s, d.tabs) ?? gi(e, s);
    if (!g) {
      a.push("no-appid");
      continue;
    }
    const m = Ln(g, t.games, void 0, e);
    if (!m) {
      a.push(`unsupported:${g}`);
      continue;
    }
    const v = d.tabs.find((E) => /workshop|мастерская/i.test(E.textContent ?? "")) ?? d.tabs[0], c = te(v.textContent), u = Ai(d.tabs), f = v.cloneNode(!0);
    Xt(f, void 0, u), f.querySelectorAll("[id]").forEach((E) => E.removeAttribute("id")), f.querySelectorAll("[aria-controls]").forEach((E) => E.setAttribute("aria-controls", `galex-panel-${g}`)), f.removeAttribute("id"), f.removeAttribute("href"), f.setAttribute("role", "tab"), f.setAttribute("aria-selected", "false"), f.setAttribute("data-galex-properties", "tab"), f.id = `galex-tab-${g}`, f.setAttribute("aria-controls", `galex-panel-${g}`), Si(f, c), f.tagName === "A" && f.setAttribute("href", "#galex-mods"), d.list.appendChild(f);
    const L = Ut(s);
    let S, G, b, C, A, T;
    L ? (G = e.createElement("div"), G.className = "gx-adopted-mount", G.setAttribute("data-galex-mount", ""), G.hidden = !0, b = rn(L), S = L, C = st(G), A = () => {
    }) : (S = e.createElement("div"), S.id = `galex-panel-${g}`, S.setAttribute("role", "tabpanel"), S.setAttribute("aria-labelledby", f.id), S.setAttribute("data-galex-properties", "panel"), S.className = "gx-injected-panel", S.hidden = !0, S.style.flex = "1", S.style.minHeight = "0", S.style.overflow = "hidden", (s.querySelector('[role="tabpanel"],[class*="TabContent"],[class*="tab-content"]')?.parentElement ?? d.list.parentElement?.parentElement ?? d.list.parentElement)?.appendChild(S), G = S, C = st(S), A = () => {
      const X = S.parentElement, ie = e.defaultView;
      if (!X || !ie) return;
      const se = ie.getComputedStyle(X), Te = ie.getComputedStyle(s), pe = (de) => Number.parseFloat(de) || 0, ue = pe(se.paddingTop) + pe(se.paddingBottom), we = Math.max(0, X.clientHeight - ue), x = Math.floor(s.getBoundingClientRect().bottom - X.getBoundingClientRect().top - pe(se.paddingBottom) - pe(Te.paddingBottom)), O = x > 0 ? Math.min(we || x, x) : we;
      O > 0 && (S.style.height = `${O}px`);
    }, typeof ResizeObserver == "function" && S.parentElement && (T = new ResizeObserver(A), T.observe(S.parentElement), T.observe(s), A()));
    const U = { dialog: s, list: d.list, tab: f, nativeTabs: d.tabs, panel: S, mount: G, adopted: b, root: C, appid: g, slug: m.slug, active: !1, hidden: /* @__PURE__ */ new Map(), nativeClasses: /* @__PURE__ */ new Map(), selectedDelta: u, resize: T, sizePanel: A, onNativeClick: (E) => {
      const ne = E.target;
      ne?.closest?.('[data-galex-properties="tab"]') || (ne?.closest?.('[role="tab"],button,a') || d.tabs.some((X) => ne && X.contains(ne))) && No(U);
    } };
    We.set(s, U), Un(U, m, t.snapshot?.installing ?? !1), l++, f.addEventListener("click", (E) => {
      E.preventDefault(), E.stopPropagation(), Ci(U);
    }), d.list.addEventListener("click", U.onNativeClick, !0), Rn(e, `injected:${g}`, `tab injected appid=${g} slug=${m.slug}`);
  }
  if (n.length && xt.get(e)?.allowBodyFallback) {
    const s = `${n.length}/${l}/${a.slice(0, 4).join(",")}`;
    Rn(e, s, `dialogs=${n.length} injected=${l} skipped=${a.slice(0, 4).join(",") || "none"}`);
  }
}
function Vn(e) {
  const t = Le.get(e);
  !t || t.timer || (t.timer = window.setTimeout(() => {
    t.timer = 0, Mo(e);
  }, 180));
}
function Wn(e = document) {
  if (Le.has(e)) return Le.get(e).dispose;
  const t = new MutationObserver(() => Vn(e));
  t.observe(e.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["role", "data-appid", "src", "style", "hidden", "class"] });
  const n = () => {
    const a = Le.get(e);
    a?.timer && clearTimeout(a.timer), t.disconnect();
    for (const [l, s] of Array.from(We))
      e.contains(l) && Vt(s);
    Le.delete(e), Rt.delete(e);
  };
  return Le.set(e, { observer: t, timer: 0, dispose: n }), Vn(e), n;
}
function qn(e = document) {
  Mo(e);
}
const Zn = "galex-styles";
function Qn(e, t = document) {
  if (typeof t > "u") return;
  const n = t.getElementById(Zn);
  if (n) {
    n.textContent = e;
    return;
  }
  const a = t.createElement("style");
  a.id = Zn, a.textContent = e, t.head.appendChild(a);
}
const Kn = ".galex{--gx-text:var(--gpColor-White,#dfe3e8);--gx-muted:var(--gpColor-Neutral,#9ba8b5);--gx-line:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control-hover:var(--gpBackground-Color-Solid,rgba(255,255,255,.14));--gx-accent:var(--gpColor-Blue,#66c0f4);--gx-danger:var(--gpColor-Red,#d94b4b);color:var(--gx-text);font-family:inherit;font-size:14px;line-height:1.45;box-sizing:border-box;container-type:inline-size}.galex *,.galex *:before,.galex *:after{box-sizing:border-box}.galex h1,.galex h2,.galex h3,.galex p{margin:0}.galex button,.galex input,.galex select,.galex textarea{font:inherit;color:inherit}.galex button{cursor:pointer}.galex button:disabled{cursor:default;opacity:.45}.galex svg{flex-shrink:0;vertical-align:middle}.galex :focus-visible{outline:2px solid var(--gx-accent);outline-offset:2px}.gx-native-button{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;gap:6px;width:auto;min-width:0;max-width:100%;padding:0}.gx-native-button button,.gx-native-button>button{width:auto;min-width:0;min-height:32px;padding:6px 12px;white-space:nowrap}.galex [class*=DialogButton]:not(.gx-icon-button){flex:0 0 auto;margin:0;width:auto;min-width:0;max-width:100%}.galex [class*=DialogButton]:not(.gx-icon-button)>button{width:auto;min-width:0}.gx-native-select{flex:0 0 auto;min-width:120px;max-width:240px}.gx-native-select>div{min-width:0}.gx-native-input{width:100%}.gx-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:34px;padding:6px 14px;border:1px solid transparent;border-radius:3px;background:var(--gx-control);color:var(--gx-text);white-space:nowrap}.gx-button:hover:not(:disabled){background:var(--gx-control-hover)}.gx-button--primary{background:var(--gx-accent);color:#fff}.gx-button.gx-danger{background:var(--gx-danger);color:#fff}.gx-icon-button{display:inline-flex;flex:0 0 32px;align-items:center;justify-content:center;width:32px;min-width:32px;height:32px;padding:0;border:0;border-radius:3px;background:transparent;color:var(--gx-muted)}.gx-icon-button button,.gx-icon-button>button{width:32px;min-width:32px;height:32px;padding:0}.gx-icon-button:hover:not(:disabled){background:var(--gx-control);color:var(--gx-text)}.gx-muted{color:var(--gx-muted);font-size:12px}.gx-text-danger{color:var(--gx-danger)}.galex select,.gx-input,.galex input[type=text],.galex input[type=number],.galex textarea{min-height:32px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:4px 9px}.galex select{max-width:220px}.galex textarea{width:100%;resize:vertical}.gx-checkbox{width:18px;height:18px;margin:0;accent-color:var(--gx-accent);cursor:pointer}.gx-toggle{display:inline-flex;align-items:center}.gx-toggle input{width:18px;height:18px;accent-color:var(--gx-accent)}.gx-mods{display:flex;flex-direction:column;height:100%;min-height:0;min-width:0;padding:10px 24px 24px;overflow:hidden;--gx-text:var(--gpColor-White,#dfe3e6);--gx-muted:var(--gpColor-Neutral,#8b929a);--gx-control:var(--gpBackground-Color-Soft,rgba(59,63,72,.5));--gx-control-hover:var(--gpBackground-Color-Solid,#464d58);color:var(--gx-muted);font-size:14px;font-weight:400}.gx-heading{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:10px 0;flex-shrink:0}.gx-heading h1{font-size:22px;font-weight:700;line-height:28px;color:var(--gx-text)}.gx-heading-meta{font-size:12px;color:var(--gx-muted);white-space:nowrap}.gx-toolbar{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;align-items:stretch;min-width:0;flex-shrink:0}.gx-toolbar>.gx-button,.gx-toolbar>.gx-native-button{width:100%;min-width:0;max-width:100%;margin:0}.gx-toolbar>.gx-button{border:0;color:var(--gx-text)}.gx-toolbar>.gx-native-button{display:flex}.gx-mods .gx-toolbar [class*=DialogButton]:not(.gx-icon-button){width:100%;min-width:0;max-width:100%;margin:0;background:var(--gx-control);color:var(--gx-text)}.gx-toolbar>.gx-button,.gx-toolbar>.gx-native-button,.gx-toolbar>.gx-native-button>button,.gx-mods .gx-toolbar [class*=DialogButton]:not(.gx-icon-button){min-height:34px;padding:8px 14px;font-size:13px;line-height:18px;white-space:normal}.gx-chevron-open{transform:rotate(180deg)}.gx-advanced{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px 0 0;flex-shrink:0}.gx-profile-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;min-width:0;padding:12px;border-radius:2px;background:var(--gpBackground-Color-Medium,#23262e)}.gx-profile-line{display:flex;align-items:center;gap:12px;flex:1 1 220px;min-width:0}.gx-field-label{font-size:14px;line-height:18px;color:var(--gx-text)}.gx-profile-line select{flex:1;max-width:260px;min-width:120px}.gx-profile-actions{display:flex;flex:0 1 auto;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:4px;min-width:0;max-width:60%;margin-left:auto}.gx-profile-actions [class*=DialogButton]:not(.gx-danger){flex:0 1 auto;margin:0;width:auto;min-width:0;max-width:100%;background:var(--gx-control);color:var(--gx-text)}.gx-profile-actions [class*=DialogButton]>button{width:auto;min-width:0}.gx-profile-actions>.gx-native-button,.gx-profile-actions>.gx-button{flex:0 1 auto;width:auto;min-width:0}.gx-profile-actions .gx-danger{background:var(--gx-danger);color:#fff}.gx-profile-actions .gx-button,.gx-profile-actions>.gx-native-button,.gx-profile-actions .gx-native-button>button,.gx-profile-actions [class*=DialogButton]{min-height:34px;padding:8px 14px;font-size:13px;line-height:18px;white-space:normal}.gx-search-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding-top:8px;flex-shrink:0}.gx-filter-group{display:flex;align-items:center;gap:12px;flex:1 1 260px;min-width:0;max-width:400px}.gx-filter-group>.gx-field-label{margin:0;white-space:nowrap}.gx-filter-group>.gx-native-select{flex:1 1 0;min-width:0;max-width:none}.gx-search{display:flex;align-items:center;gap:0;flex:2 1 0;min-width:0;max-width:296px;height:auto;padding:0;border:0;border-radius:0;background:transparent;color:var(--gx-text)}.gx-search input{flex:1;min-width:0}.gx-mods .gx-search input.DialogInput{border:0;border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:8px;min-height:38px;font-size:14px;font-weight:300;line-height:22px}.gx-mods .gx-search input.DialogInput:focus{outline:none;background:var(--gx-control-hover);box-shadow:inset 1px 1px 8px #000000ab}.gx-search button{border:0;background:none;color:var(--gx-muted);padding:2px;margin-left:4px}.gx-sort-direction{flex:0 0 34px;width:34px;min-width:34px;padding:0}.gx-sort-direction button{width:34px;min-width:34px;padding:0}.gx-list-heading{display:flex;align-items:center;gap:12px;min-height:38px;color:var(--gx-muted);font-size:12px;flex-shrink:0}.gx-list-heading>.gx-icon-button{margin-left:auto}.gx-update-link{display:inline-flex;gap:5px;align-items:center;border:0;background:none;color:var(--gx-accent);font-size:12px;padding:2px 4px}.gx-update-link:hover{text-decoration:underline}.gx-mod-list{display:flex;flex-direction:column;gap:2px;flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--gpBackground-Color-Dark,#0e141b);box-shadow:inset 0 4px 4px #00000040;font-size:13px}.gx-mod-list::-webkit-scrollbar{height:12px;width:14px;background:transparent;z-index:12;overflow:visible}.gx-mod-list::-webkit-scrollbar-thumb{width:10px;background-color:#3d4450;border-radius:10px;border:4px solid transparent;background-clip:padding-box;transition:background-color .32s ease-in-out;margin:4px;min-height:32px;min-width:32px}.gx-mod-list::-webkit-scrollbar-thumb:hover{background-color:#464d58;background-clip:padding-box}.gx-mod-row{display:flex;flex:0 0 80px;align-items:center;justify-content:flex-start;height:80px;min-height:80px;padding:0;gap:0;background:var(--gpBackground-Color-Medium,#23262e);border-bottom:0}.gx-mod-row>[class*=DialogCheckbox],.gx-mod-row>.gx-checkbox{flex:0 0 22px;width:22px;height:22px;margin:8px}.gx-mod-index{display:flex;align-items:center;justify-content:center;flex:0 0 20px;width:20px;margin:4px;font-size:16px;line-height:20px;color:unset}.gx-mod-avatar{width:48px;height:48px;min-width:48px;max-width:84px;flex-shrink:0;margin:4px 7px 4px 4px;border-radius:0;object-fit:cover;background:#000;display:flex;align-items:center;justify-content:center;color:var(--gx-muted);font-weight:600}.gx-mod-row.is-disabled .gx-mod-avatar,.gx-mod-row.is-disabled .gx-mod-info{opacity:.55}.gx-mod-info{flex:1 1 0;min-width:0;padding-right:4px;overflow:hidden}.gx-mod-title{display:flex;align-items:center;gap:7px;min-width:0}.gx-mod-title h3{font-size:13px;line-height:16px;font-weight:400;color:var(--gx-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-info>p{font-size:12px;line-height:16px;color:#969696;padding-top:4px;margin:0;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-byline{display:flex;flex-wrap:nowrap;gap:4px;font-size:12px;line-height:16px;color:#969696;padding-top:4px;margin:0;overflow:hidden}.gx-mod-byline>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-badge{font-size:10px;padding:1px 5px;border-radius:2px;border:1px solid var(--gx-line);color:var(--gx-muted);white-space:nowrap}.gx-badge--update{color:var(--gx-accent);border-color:var(--gx-accent)}.gx-mod-size{display:flex;align-items:center;flex:0 1 auto;min-width:70px;margin:4px 16px 4px 4px;text-align:right;font-size:12px;line-height:16px;color:unset}.gx-mod-actions{display:flex;align-items:center;flex-shrink:0;padding:4px}.gx-mod-actions .gx-icon-button{width:36px;height:36px;min-width:36px;flex-basis:36px;margin:8px;padding:0;border-radius:2px;background:var(--gpBackground-Color-Solid,#3d4450);color:var(--gx-text)}.gx-mod-actions .gx-icon-button button,.gx-mod-actions .gx-icon-button>button{width:36px;height:36px;min-width:36px;padding:0}.gx-mod-actions .gx-icon-button svg{width:24px;height:24px}.gx-mod-actions .gx-icon-button:hover:not(:disabled){background:var(--gx-control-hover);color:#fff}.gx-context-menu{position:absolute;z-index:2147483647;min-width:184px;max-width:min(320px,calc(100vw - 16px));max-height:calc(100vh - 16px);overflow-y:auto;padding:4px;border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,#1b2838);box-shadow:0 8px 24px #00000080;font-size:13px}.gx-context-menu--root{position:fixed}.gx-context-menu--submenu-open{overflow:visible}.gx-context-menu-item-wrap{position:relative}.gx-context-menu-item{display:flex;align-items:center;gap:8px;width:100%;padding:6px 10px;border:0;border-radius:2px;background:transparent;color:var(--gx-text);text-align:left;white-space:nowrap}.gx-context-menu-item:hover:not(:disabled),.gx-context-menu-item:focus-visible{background:var(--gx-control-hover);outline:none}.gx-context-menu-item--danger{color:var(--gx-danger)}.gx-context-menu-icon{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;flex:0 0 16px}.gx-context-menu-arrow{margin-left:auto}.gx-context-submenu{position:absolute;left:calc(100% - 4px);top:-5px}.gx-dependant{display:flex;flex-direction:column;gap:2px;padding:6px 8px;background:var(--gx-control);border-radius:2px}.gx-notice{display:flex;align-items:center;gap:8px;padding:8px 10px;margin:8px 0;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:13px}.gx-notice--error{border-color:var(--gx-danger);color:var(--gx-danger)}.gx-notice button{margin-left:auto;border:0;background:none;color:var(--gx-accent)}.gx-empty{padding:32px 12px;text-align:center;color:var(--gx-muted)}.gx-modal-backdrop{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;background:#000000a6}.gx-modal{display:flex;flex-direction:column;width:min(580px,100%);max-height:min(84vh,760px);border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,#1b2838);box-shadow:0 8px 40px #00000080}.gx-modal>header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--gx-line)}.gx-modal h2{font-size:17px;font-weight:500}.gx-modal-body{padding:16px 18px;overflow-y:auto;min-height:0}.gx-modal>footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid var(--gx-line)}.gx-form-label{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--gx-muted);margin-bottom:12px}.gx-form-label input,.gx-form-label textarea,.gx-form-label select{color:var(--gx-text)}.gx-check-label{display:flex;align-items:center;gap:8px;font-size:13px;margin:8px 0}.gx-import-summary{display:flex;flex-direction:column;gap:4px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code{display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code code{flex:1;min-width:0;overflow-wrap:anywhere;font-family:monospace}.gx-version-list{display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto;margin-top:10px}.gx-file-list{max-height:220px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px;padding:6px;margin:8px 0}.gx-file-list label{display:flex;align-items:center;gap:8px;padding:3px 2px;font-size:12px}.gx-file-list span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}.gx-tabs button[aria-selected=true]{background:var(--gx-control-hover);border-color:var(--gx-accent)}.gx-global-settings{height:100%;min-height:0;overflow-y:auto;padding:0;font-size:14px}.MillenniumDesktopSidebar_EditorContent>.gx-global-settings{margin:-24px -20px -20px;padding:12px 16px 16px}.gx-settings-header{display:flex;align-items:center;gap:8px;margin-bottom:6px}.gx-settings-header h1{font-size:18px;font-weight:500;margin-right:auto}.gx-settings-section{margin:12px 0;padding-bottom:10px;border-bottom:1px solid var(--gx-line)}.gx-settings-section h2{font-size:15px;font-weight:500;margin-bottom:6px}.gx-setting{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:6px 0}.gx-setting>div{display:flex;flex-direction:column;gap:2px;min-width:0}.gx-setting strong{font-size:14px;font-weight:500}.gx-setting small{color:var(--gx-muted);font-size:12px}.gx-connection{display:inline-flex;align-items:center;gap:6px;color:var(--gx-muted);font-size:12px;white-space:nowrap}.gx-status-dot{width:7px;height:7px;border-radius:50%;background:var(--gpColor-Green,#5ba32b)}.gx-path{display:block;padding:6px 8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:12px;overflow-wrap:anywhere;color:var(--gx-muted)}.gx-settings-actions{display:flex;gap:8px;margin:8px 0}.gx-settings-bottom{color:var(--gx-muted);font-size:12px;margin-top:10px}.gx-success{display:flex;align-items:center;gap:6px;color:var(--gpColor-Green,#5ba32b);font-size:12px;margin:6px 0}.gx-settings-intro{color:var(--gx-muted);font-size:12px;margin-bottom:8px}.gx-games{margin-top:8px}.gx-games summary{cursor:pointer;font-size:13px}.gx-games summary span{color:var(--gx-muted);margin-left:6px}.gx-game-list{list-style:none;margin:6px 0 0;padding:0;max-height:180px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px}.gx-game-list li{display:flex;justify-content:space-between;gap:8px;padding:4px 8px;font-size:12px;border-bottom:1px solid var(--gx-line)}.gx-game-list li:last-child{border-bottom:0}.gx-game-list span{color:var(--gx-muted)}[data-galex-properties=tab]{cursor:pointer;user-select:none}[data-galex-properties=tab].gx-tab-active{color:var(--gpColor-White,#fff);background:var(--gpBackground-Color-Soft,rgba(255,255,255,.08))}.gx-injected-panel{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;height:100%;max-height:100%;overflow:hidden;color:var(--gx-text,#dfe3e8)}.gx-injected-panel[hidden]{display:none!important}.gx-adopted-mount{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0}.gx-adopted-mount[hidden]{display:none!important}.gx-mods.gx-mods--embedded{padding:0}@container (max-width:480px){.gx-mods:not(.gx-mods--embedded){padding:12px}.gx-toolbar{grid-template-columns:1fr}.gx-mod-index,.gx-mod-size{display:none}.gx-mod-info>p{display:none}.gx-profile-actions{flex-basis:100%;max-width:100%}.gx-profile-actions .gx-button,.gx-profile-actions .gx-native-button{flex:0 1 auto}.gx-filter-group{flex-basis:100%;max-width:none}.gx-search{max-width:none}}.gx-downloads{margin:0 0 16px;padding:14px 16px;border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,rgba(0,0,0,.2))}.gx-downloads-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:4px}.gx-downloads-header h2{font-size:18px;font-weight:500}.gx-download-graphs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:10px 0}.gx-sparkline{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:8px;font-size:12px;color:var(--gx-muted)}.gx-sparkline svg{width:100%;height:32px;color:var(--gx-accent);background:var(--gx-control);border-radius:2px}.gx-sparkline strong{color:var(--gx-text);font-weight:500;white-space:nowrap}.gx-download-card{display:flex;gap:12px;align-items:center;padding:10px;margin-top:8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control)}.gx-download-card.is-error{border-color:var(--gx-danger)}.gx-download-cover{width:92px;height:43px;flex:0 0 92px;object-fit:cover;border-radius:2px;background:var(--gx-control-hover)}.gx-download-cover--fallback{display:flex;align-items:center;justify-content:center;color:var(--gx-muted)}.gx-download-body{flex:1;min-width:0}.gx-download-body header{display:flex;align-items:baseline;gap:8px;min-width:0}.gx-download-body h3{font-size:15px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-task{font-size:12px;color:var(--gx-muted);margin:2px 0 6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-meta{display:flex;justify-content:space-between;gap:8px;font-size:12px;color:var(--gx-muted);margin-top:4px}.gx-progress{width:100%;height:8px;accent-color:var(--gx-accent)}@container (max-width:640px){.gx-download-graphs{grid-template-columns:1fr}.gx-download-cover{display:none}}.gx-connection-error{overflow-y:auto}.gx-error-screen{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;flex:1;min-height:220px;padding:32px 16px;text-align:center;color:var(--gx-muted)}.gx-error-screen h2{font-size:18px;font-weight:600;color:var(--gx-text)}.gx-error-screen p{max-width:520px;font-size:13px}.gx-error-screen .gx-profile-actions{justify-content:center;margin:8px 0 0;max-width:100%}.gx-error-screen>svg{color:var(--gx-danger)}.gx-override-form{display:flex;flex-wrap:wrap;align-items:flex-end;gap:8px;margin:8px 0}.gx-override-form label{display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--gx-muted);min-width:160px;flex:1 1 180px}.gx-override-form .gx-native-select,.gx-override-form select,.gx-override-form input{width:100%;max-width:none}.gx-override-list{list-style:none;margin:8px 0 0;padding:0;border:1px solid var(--gx-line);border-radius:3px}.gx-override-list li{display:flex;align-items:center;gap:8px;padding:6px 8px;border-bottom:1px solid var(--gx-line);font-size:12px}.gx-override-list li:last-child{border-bottom:0}.gx-override-list strong{font-weight:500;color:var(--gx-text)}.gx-override-list span{color:var(--gx-muted);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-override-list .gx-icon-button{margin-left:auto}", j = "GaleX";
function Ni() {
  return { title: "GaleX", icon: Q(K, { name: "package", size: 18 }), content: Q(qt, null, Q($a)), linkQueued: (e) => (Ke(), !0) };
}
async function Mi() {
  window.__GALEX_STEAM__?.dispose(), ba(), await ma();
  const e = [], t = [];
  let n = !1, a = !1;
  const l = Ta();
  e.push(l), e.push(lo(() => qn()));
  const s = za();
  e.push(s);
  const d = Ni(), g = window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[j], m = window.PLUGIN_LIST?.[j];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS ??= {})[j] = d, (window.PLUGIN_LIST ??= {})[j] = { ...m, ...d };
  const v = /* @__PURE__ */ new Set([document]);
  Qn(Kn, document);
  const c = (b) => {
    if (n || a || !b.body) return;
    a = !0;
    const C = b.createElement("div");
    C.id = "galex-link-installer", b.body.appendChild(C);
    const A = st(C);
    t.push(A), A.render(Q(Zt.Provider, { value: b }, Q(qt, null, Q(Fa)))), e.push(() => C.remove());
  }, u = (b, C) => {
    if (n || v.has(b)) return;
    const A = String(C?.m_strName ?? C?.name ?? ""), T = String(C?.m_strTitle ?? C?.title ?? b.title ?? ""), U = A.includes("SP Desktop") && !A.includes("Login");
    ci(b, { name: A, title: T, allowBodyFallback: b !== document && !U }), v.add(b), Qn(Kn, b), e.push(Wn(b)), U && c(b), y.log(`window observed name=${A || "?"} title=${T || "?"} body=${!!b.body} linkRoot=${a}`).catch(() => {
    });
  }, f = (b, C) => {
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
  e.push(Wn(document));
  try {
    const b = R()?.routerHook;
    if (typeof b?.addPatch == "function") {
      const C = (A) => ({ ...A, children: Q(qa, null, A.children) });
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
      f(A?.window ?? A?.document?.defaultView ?? A?.BrowserWindow ?? A?.m_popup?.window ?? A?.m_popup ?? A?.m_BrowserWindow, A);
    }) : console.warn("[GaleX] Window hook unavailable; observing the main Steam document only");
  } catch (b) {
    console.warn("[GaleX] Window hook unavailable", b);
  }
  const L = window.setTimeout(() => c(document), 3e3);
  e.push(() => window.clearTimeout(L)), e.push(Oa(() => {
    for (const b of v)
      if (!b.defaultView?.closed)
        try {
          qn(b);
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
    }), g === void 0 ? delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[j] : window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS[j] = g, m === void 0 ? delete window.PLUGIN_LIST?.[j] : window.PLUGIN_LIST[j] = m, delete window.__GALEX_STEAM__, window.GaleX?.dispose === S && delete window.GaleX);
  };
  window.__GALEX_STEAM__ = { dispose: S }, window.GaleX = { openSettings: () => {
    const b = R();
    b?.Millennium?.openQuickAccess?.({ plugin: j }) ?? b?.openQuickAccess?.({ plugin: j }) ?? window.Millennium?.openQuickAccess?.({ plugin: j });
  }, openProperties: () => R()?.Navigation?.NavigateToAppProperties?.(), dispose: S }, console.info("[GaleX] frontend 0.3.8 mounted"), y.log(`frontend 0.3.8 mounted; url=${location.href}`).catch(() => {
  });
  const G = window.MILLENNIUM_BACKEND_IPC;
  return typeof G?.postMessage == "function" ? Promise.resolve(G.postMessage(1, { pluginName: j })).then(() => console.info("[GaleX] backend notified that the frontend is loaded")).catch((b) => console.warn("[GaleX] Frontend-loaded notification failed", b)) : console.warn("[GaleX] Millennium backend IPC is unavailable"), d;
}
async function Ii() {
  return document.body || await new Promise((e) => document.addEventListener("DOMContentLoaded", () => e(), { once: !0 })), Mi();
}
let at;
function Gi() {
  return at || (at = Ii().catch((e) => {
    throw at = void 0, e;
  })), at;
}
Gi().catch((e) => console.error("[GaleX] Startup failed", e));
export {
  Gi as default
};
