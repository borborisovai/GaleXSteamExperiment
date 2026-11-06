const A = window.SP_REACT;
A || console.error("[GaleX] window.SP_REACT is missing — is Millennium loaded?");
const V = A.createElement;
A.cloneElement;
const xo = A.createContext;
A.createRef;
A.forwardRef;
A.memo;
const bo = A.useCallback, vo = A.useContext;
A.useDebugValue;
A.useDeferredValue;
const q = A.useEffect;
A.useId;
A.useImperativeHandle;
const wo = A.useLayoutEffect, Mn = A.useMemo;
A.useReducer;
const ze = A.useRef, v = A.useState, Pt = A.useSyncExternalStore;
A.useTransition;
const yo = A.Component;
A.PureComponent;
A.Fragment;
A.StrictMode;
A.Suspense;
A.Children;
A.isValidElement;
A.version;
const Se = window.SP_REACTDOM, Qe = (e) => typeof Se?.createRoot == "function" ? Se.createRoot(e) : {
  render(t) {
    Se.render(t, e);
  },
  unmount() {
    Se.unmountComponentAtNode?.(e);
  }
}, Sn = Se.createPortal;
Se.flushSync;
const Ze = window.SP_REACT, Yt = window.SP_JSX_FACTORY;
function At(e, t, o) {
  const { children: l, ...r } = t ?? {};
  return o !== void 0 && (r.key = o), l === void 0 ? Ze.createElement(e, r) : Array.isArray(l) ? Ze.createElement(e, r, ...l) : Ze.createElement(e, r, l);
}
const Ne = typeof Yt?.jsx == "function" ? Yt : void 0, O = Ne?.Fragment ?? Ze.Fragment, a = Ne ? Ne.jsx : At, c = Ne?.jsxs ?? At;
Ne && Ne.jsx;
const jt = {
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
}, ko = {
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
function J({ name: e, size: t = 18, className: o, strokeWidth: l = 1.6 }) {
  const r = window.MILLENNIUM_API?.IconsModule?.[ko[e] ?? ""], s = Mn(() => jt[e] ?? jt.info, [e]);
  return typeof r == "function" ? /* @__PURE__ */ a(r, { width: t, height: t, className: o, "aria-hidden": "true", focusable: "false" }) : /* @__PURE__ */ a(
    "svg",
    {
      className: o,
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: l,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a("path", { d: s })
    }
  );
}
function Co(e) {
  let t = e;
  for (let o = 0; o < 2 && typeof t == "string"; o++)
    try {
      t = JSON.parse(t);
    } catch {
      throw new Error("Invalid GaleX JSON reply from Millennium");
    }
  if (typeof t != "object" || t === null || Array.isArray(t) || typeof t.ok != "boolean")
    throw new Error("Invalid GaleX reply from Millennium");
  return t;
}
const en = {
  english: "en",
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  russian: "ru",
  ru: "ru",
  "ru-ru": "ru"
}, gt = /* @__PURE__ */ new Set();
let Re = "en", Nn = "english";
function Pn(e) {
  return String(e ?? "").trim().toLowerCase().replace(/_/g, "-");
}
function Mo(e) {
  const t = Pn(e);
  return en[t] ?? en[t.split("-")[0]] ?? "en";
}
function So(e) {
  Nn = Pn(e) || "english";
  const t = Mo(e);
  t !== Re && (Re = t, gt.forEach((o) => o()));
}
function tn() {
  return Re;
}
function No() {
  return Nn;
}
function mt(e) {
  const o = {
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
    "Invalid GaleX JSON reply from Millennium": "invalidRpcJson",
    "Invalid GaleX reply from Millennium": "invalidRpcEnvelope",
    "Некорректный JSON-ответ GaleX от Millennium": "invalidRpcJson",
    "Некорректный ответ GaleX от Millennium": "invalidRpcEnvelope"
  }[e];
  if (o) return n(o);
  if (e.startsWith("Не найдена headless-сборка Gale")) return n("missingBuild");
  const l = e.match(/^Некорректный ответ Gale \((\d+)\)$/);
  return l ? n("invalidGaleResponse", { status: l[1] }) : e.startsWith("Не удалось запустить headless Gale; см. ") ? n("launchFailed", { path: e.slice(40) }) : e;
}
function Ue() {
  return Pt((e) => (gt.add(e), () => gt.delete(e)), tn, tn);
}
async function Po(e = window) {
  let t;
  try {
    const o = e.SteamClient?.Settings;
    typeof o?.GetCurrentLanguage == "function" && (t = await o.GetCurrentLanguage());
  } catch {
  }
  if (!t)
    try {
      const o = e.LocalizationManager;
      t = o?.m_rgLocalesToUse?.[0] ?? o?.m_strCurrentLanguage;
    } catch {
    }
  return So(t ?? "english"), Re;
}
const An = {
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
}, Ao = {
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
}, Do = { en: An, ru: Ao };
function n(e, t) {
  let o = Do[Re][e] ?? An[e] ?? e;
  if (t) for (const [l, r] of Object.entries(t)) o = o.split(`{${l}}`).join(String(r));
  return o;
}
function Z() {
  return window.MILLENNIUM_API;
}
let ht;
function Io(e) {
  ht = e;
}
async function Y(e, t = {}) {
  if (!ht) throw new Error(n("backendMissing"));
  const o = await ht(e, t);
  let l;
  try {
    l = Co(o);
  } catch (r) {
    throw new Error(mt(r instanceof Error ? r.message : String(r)));
  }
  if (!l.ok) throw new Error(mt(l.error || n("bridgeNoReply")));
  return l.data;
}
function _o() {
  Io(async (e, t) => {
    const o = Z();
    if (!o?.Millennium?.callServerMethod) throw new Error(n("millenniumMissing"));
    return o.Millennium.callServerMethod("GaleX", e, { payload: JSON.stringify(t) });
  });
}
const y = {
  snapshot: () => Y("snapshot"),
  progress: () => Y("progress"),
  cancelInstalls: () => Y("command", { method: "cancel_installs", args: {} }),
  call: (e, t, o = {}) => Y("command", { method: e, args: { slug: t.slug, profileId: t.profileId, ...o } }),
  browserUrl: (e) => Y("browser_url", { ...e }),
  dismissLink: (e) => Y("dismiss_link", { url: e }),
  global: (e, t = {}) => Y("command", { method: e, args: t }),
  getConfig: () => Y("get_config"),
  setConfig: (e) => Y("set_config", { path: e }),
  restart: () => Y("restart"),
  log: (e) => Y("frontend_log", { message: e })
};
function Ge(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(n("invalidBrowserUrl"));
  const o = Z()?.Navigation;
  o?.NavigateToSteamWeb ? o.NavigateToSteamWeb(e) : window.open(e, "_blank", "noopener,noreferrer");
}
function Dn(e = document) {
  try {
    const t = e.defaultView?.SteamClient?.Window;
    t?.BringToFront?.(!0), t?.SetKeyFocus?.(!0), t?.MarkLastFocused?.(), e.defaultView?.focus();
  } catch {
  }
}
function Lo() {
  const e = Z()?.Navigation;
  if (e?.Navigate) {
    e.Navigate("/library/downloads");
    return;
  }
  const t = window.SteamClient?.URL ?? Z()?.SteamClient?.URL;
  t?.ExecuteSteamURL && t.ExecuteSteamURL("steam://nav/downloads");
}
function To(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(n("invalidBrowserUrl"));
  const o = Z()?.Browser ?? window.SteamClient?.Browser;
  o?.StartDownload ? o.StartDownload(e) : Ge(e);
}
function In() {
  return window.SteamClient?.System ?? Z()?.SteamClient?.System;
}
function nn() {
  return typeof In()?.OpenFileDialog == "function";
}
async function on(e, t, o) {
  const l = In();
  if (typeof l?.OpenFileDialog != "function") return null;
  try {
    const r = await l.OpenFileDialog({
      strTitle: e,
      rgFilters: [
        { strFileTypeName: t, rFilePatterns: o, bUseAsDefault: !0 },
        { strFileTypeName: n("allFiles"), rFilePatterns: ["*"] }
      ]
    });
    return typeof r == "string" && r.length > 0 ? r : null;
  } catch {
    return null;
  }
}
function R(e) {
  return mt(e instanceof Error ? e.message : String(e));
}
function Go({ error: e, onRetry: t }) {
  return Ue(), /* @__PURE__ */ c("div", { className: "galex gx-crash", role: "alert", children: [
    /* @__PURE__ */ a("h2", { children: n("crashTitle") }),
    /* @__PURE__ */ a("p", { children: n("crashBody") }),
    /* @__PURE__ */ a("pre", { children: R(e) }),
    /* @__PURE__ */ a("button", { className: "gx-button", onClick: t, children: n("retry") })
  ] });
}
class Dt extends yo {
  state = {};
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, o) {
    console.error("[GaleX]", t, o.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ a(Go, { error: this.state.error, onRetry: () => this.setState({ error: void 0 }) }) : this.props.children;
  }
}
const It = xo(document);
function je() {
  return vo(It);
}
function fe(e) {
  const t = Z()?.[e];
  return typeof t == "function" || t && typeof t == "object" ? t : void 0;
}
function N({ children: e, icon: t, primary: o, className: l = "", ...r }) {
  const s = fe(o ? "DialogButtonPrimary" : "DialogButton") ?? fe("DialogButton"), d = /* @__PURE__ */ c(O, { children: [
    t && /* @__PURE__ */ a(J, { name: t, size: 16 }),
    " ",
    e
  ] });
  return s ? /* @__PURE__ */ a(s, { ...r, className: `gx-native-button ${o ? "gx-native-button--primary" : ""} ${l}`, children: d }) : /* @__PURE__ */ a("button", { type: "button", ...r, className: `gx-button ${o ? "gx-button--primary" : ""} ${l}`, children: d });
}
function te({ icon: e, label: t, ...o }) {
  const l = fe("DialogButton");
  return l ? /* @__PURE__ */ a(l, { ...o, className: `gx-icon-button ${o.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ a(J, { name: e, size: 18 }) }) : /* @__PURE__ */ a("button", { type: "button", ...o, className: `gx-icon-button ${o.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ a(J, { name: e, size: 18 }) });
}
function Ce({ value: e, onChange: t, options: o, label: l, disabled: r }) {
  const s = fe("Dropdown");
  return s ? /* @__PURE__ */ a("div", { className: "gx-native-select", children: /* @__PURE__ */ a(s, { disabled: r, menuLabel: l, strDefaultLabel: l, rgOptions: o.map((d) => ({ data: d.value, label: d.label })), selectedOption: e, contextMenuPositionOptions: { bMatchWidth: !0 }, onChange: (d) => t(d.data) }) }) : /* @__PURE__ */ a("select", { "aria-label": l, value: e, disabled: r, onChange: (d) => t(typeof e == "number" ? Number(d.target.value) : d.target.value), children: o.map((d) => /* @__PURE__ */ a("option", { value: d.value, children: d.label }, d.value)) });
}
function Te({ checked: e, onChange: t, label: o, disabled: l }) {
  const r = fe("DialogCheckbox");
  return r ? /* @__PURE__ */ a(r, { controlled: !0, checked: e, disabled: l, "aria-label": o, onChange: t }) : /* @__PURE__ */ a("input", { className: "gx-checkbox", type: "checkbox", "aria-label": o, checked: e, disabled: l, onChange: (s) => t(s.target.checked) });
}
function dt({ checked: e, onChange: t, label: o, disabled: l }) {
  const r = fe("Toggle");
  return r ? /* @__PURE__ */ a("div", { className: "gx-toggle", role: "group", "aria-label": o, children: /* @__PURE__ */ a(r, { value: e, disabled: l, onChange: t }) }) : /* @__PURE__ */ c("label", { className: "gx-toggle", children: [
    /* @__PURE__ */ a("input", { type: "checkbox", role: "switch", "aria-label": o, checked: e, disabled: l, onChange: (s) => t(s.target.checked) }),
    /* @__PURE__ */ a("span", { "aria-hidden": "true" })
  ] });
}
function Eo({ label: e, description: t, className: o = "", ...l }) {
  const r = fe("TextField");
  return r ? /* @__PURE__ */ a(r, { ...l, label: e, description: t, className: `gx-native-input ${o}` }) : /* @__PURE__ */ a("input", { ...l, className: `gx-input ${o}` });
}
function ue({ title: e, children: t, onClose: o, footer: l }) {
  const r = je(), s = ze(null), d = ze(o);
  return d.current = o, q(() => {
    Dn(r);
    const h = r.activeElement, f = s.current, w = () => Array.from(f?.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]') ?? []);
    (f?.querySelector("input,select,textarea") ?? w()[0])?.focus();
    const p = (u) => {
      if (u.key === "Escape" && (u.stopPropagation(), d.current()), u.key === "Tab") {
        const m = w(), D = m[0], M = m[m.length - 1];
        u.shiftKey && r.activeElement === D ? (u.preventDefault(), M?.focus()) : !u.shiftKey && r.activeElement === M && (u.preventDefault(), D?.focus());
      }
    };
    return f?.addEventListener("keydown", p), () => {
      f?.removeEventListener("keydown", p), h?.focus();
    };
  }, [r]), Sn(/* @__PURE__ */ a("div", { className: "galex gx-modal-backdrop", onMouseDown: (h) => {
    h.target === h.currentTarget && o();
  }, children: /* @__PURE__ */ c("div", { ref: s, className: "gx-modal DialogPopup_Generic", role: "dialog", "aria-modal": "true", "aria-label": e, children: [
    /* @__PURE__ */ c("header", { children: [
      /* @__PURE__ */ a("h2", { children: e }),
      /* @__PURE__ */ a(te, { icon: "x", label: n("close"), onClick: o })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-modal-body", children: t }),
    l && /* @__PURE__ */ a("footer", { children: l })
  ] }) }), r.body);
}
function an({ title: e, children: t, onClose: o, onConfirm: l, busy: r, danger: s }) {
  return /* @__PURE__ */ a(ue, { title: e, onClose: o, footer: /* @__PURE__ */ c(O, { children: [
    /* @__PURE__ */ a(N, { onClick: o, disabled: r, children: n("cancel") }),
    /* @__PURE__ */ a(N, { primary: !0, className: s ? "gx-danger" : "", onClick: l, disabled: r, children: n(r ? "working" : "confirm") })
  ] }), children: /* @__PURE__ */ a("div", { children: t }) });
}
function se({ children: e, error: t, onRetry: o }) {
  return /* @__PURE__ */ c("div", { className: `gx-notice ${t ? "gx-notice--error" : ""}`, role: t ? "alert" : "status", children: [
    /* @__PURE__ */ a(J, { name: t ? "warning" : "info", size: 17 }),
    /* @__PURE__ */ a("span", { children: e }),
    o && /* @__PURE__ */ a("button", { onClick: o, children: n("retry") })
  ] });
}
function he(e) {
  return e >= 1073741824 ? n("bytesGb", { value: (e / 1073741824).toFixed(1) }) : e >= 1048576 ? n("bytesMb", { value: (e / 1048576).toFixed(1) }) : n("bytesKb", { value: Math.round(e / 1024) });
}
function ke({ title: e, hint: t, children: o }) {
  return /* @__PURE__ */ c("div", { className: "gx-setting", children: [
    /* @__PURE__ */ c("div", { children: [
      /* @__PURE__ */ a("strong", { children: e }),
      t && /* @__PURE__ */ a("small", { children: t })
    ] }),
    o
  ] });
}
function Fo({ demo: e = !1 }) {
  Ue();
  const [t, o] = v(), [l, r] = v(), [s, d] = v(""), [h, f] = v(""), [w, p] = v(""), [u, m] = v(!1), D = async () => {
    f("");
    try {
      const [x, C] = await Promise.all([y.snapshot(), y.global("prefs")]);
      r(x), o(C), e || d(await y.getConfig());
    } catch (x) {
      f(R(x));
    }
  };
  q(() => {
    D();
  }, []);
  const M = async (x) => {
    if (!(!t || u)) {
      m(!0), f(""), p("");
      try {
        const C = { ...t, ...x };
        await y.global("set_prefs", { value: C }), o(C), p(n("savedInGale"));
      } catch (C) {
        f(R(C));
      } finally {
        m(!1);
      }
    }
  }, L = async () => {
    m(!0), f("");
    try {
      await y.setConfig(s.trim()), await y.restart(), p(n("pathSaved")), setTimeout(() => void D(), 2500);
    } catch (x) {
      f(R(x));
    } finally {
      m(!1);
    }
  }, b = async () => {
    m(!0), f("");
    try {
      const x = await y.global("clear_download_cache");
      p(n("cacheCleared", { size: he(x) }));
    } catch (x) {
      f(R(x));
    } finally {
      m(!1);
    }
  };
  return /* @__PURE__ */ c("section", { className: "galex gx-global-settings", children: [
    /* @__PURE__ */ c("div", { className: "gx-settings-header", children: [
      /* @__PURE__ */ a("h1", { children: "GaleX" }),
      /* @__PURE__ */ c("span", { className: "gx-connection", children: [
        /* @__PURE__ */ a("span", { className: "gx-status-dot" }),
        l ? `Gale ${l.coreVersion}` : n("noConnection")
      ] }),
      /* @__PURE__ */ a(te, { icon: "refresh", label: n("checkConnection"), disabled: u, onClick: () => void D() })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-settings-intro", children: n("settingsIntro") }),
    h && /* @__PURE__ */ a(se, { error: !0, onRetry: () => void D(), children: h }),
    w && /* @__PURE__ */ c("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ a(J, { name: "check", size: 15 }),
      w
    ] }),
    /* @__PURE__ */ c("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("connection") }),
      /* @__PURE__ */ a(ke, { title: n("headlessGale"), hint: n("headlessHint") }),
      !e && /* @__PURE__ */ c(O, { children: [
        /* @__PURE__ */ a(Eo, { label: n("galePath"), value: s, disabled: u, onChange: (x) => d(x.target.value), placeholder: n("galePathPlaceholder") }),
        /* @__PURE__ */ a("div", { className: "gx-settings-actions", children: /* @__PURE__ */ a(N, { onClick: () => void L(), disabled: u, children: n("saveRestart") }) }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galePathHint") })
      ] }),
      /* @__PURE__ */ a(ke, { title: n("dataDir"), hint: n("dataDirHint") }),
      /* @__PURE__ */ a("code", { className: "gx-path", children: l?.dataDir ?? "—" }),
      !!l?.games.length && /* @__PURE__ */ c("details", { className: "gx-games", children: [
        /* @__PURE__ */ c("summary", { children: [
          n("galeGames"),
          " ",
          /* @__PURE__ */ a("span", { children: l.games.length })
        ] }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galeGamesHint") }),
        /* @__PURE__ */ a("ul", { className: "gx-game-list", children: l.games.map((x) => /* @__PURE__ */ c("li", { children: [
          x.name,
          " ",
          /* @__PURE__ */ a("span", { children: x.steamAppId ?? "?" })
        ] }, x.slug)) })
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("galePreferences") }),
      /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galePreferencesHint") }),
      t ? /* @__PURE__ */ c(O, { children: [
        /* @__PURE__ */ a(ke, { title: n("fetchAuto"), hint: n("fetchAutoHint"), children: /* @__PURE__ */ a(dt, { label: n("fetchAuto"), checked: t.fetchModsAutomatically, disabled: u, onChange: (x) => void M({ fetchModsAutomatically: x }) }) }),
        /* @__PURE__ */ a(ke, { title: n("pullBeforeLaunch"), hint: n("pullBeforeLaunchHint"), children: /* @__PURE__ */ a(dt, { label: n("pullBeforeLaunch"), checked: t.pullBeforeLaunch, disabled: u, onChange: (x) => void M({ pullBeforeLaunch: x }) }) }),
        /* @__PURE__ */ a(ke, { title: n("skipBackendConfirm"), hint: n("skipBackendConfirmHint"), children: /* @__PURE__ */ a(dt, { label: n("skipBackendConfirm"), checked: t.backendSkipConfirm, disabled: u, onChange: (x) => void M({ backendSkipConfirm: x }) }) })
      ] }) : /* @__PURE__ */ a("p", { className: "gx-muted", children: n("prefsLoading") })
    ] }),
    /* @__PURE__ */ c("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("downloads") }),
      /* @__PURE__ */ a(ke, { title: n("downloadCache"), hint: n("downloadCacheHint"), children: /* @__PURE__ */ a(N, { disabled: u || !t || l?.installing, onClick: () => void b(), children: n("clearCache") }) })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-settings-bottom", children: n("settingsBottom") })
  ] });
}
let _t = { error: "", loading: !0 };
const $e = /* @__PURE__ */ new Set();
let Lt, ge = !0, ct = !1, Ee = 0;
function ln(e) {
  _t = e, $e.forEach((t) => t());
}
async function Tt() {
  if (ge || ct) return;
  ct = !0;
  const e = Ee;
  try {
    const t = await y.snapshot();
    !ge && e === Ee && ln({ snapshot: t, error: t.ok ? "" : n("incompatibleBridge"), loading: !1 });
  } catch (t) {
    !ge && e === Ee && ln({ ..._t, error: R(t), loading: !1 });
  } finally {
    ct = !1, ge || (Lt = setTimeout(() => void Tt(), document.visibilityState === "hidden" ? 15e3 : 3e3));
  }
}
function Bo() {
  return ge ? (ge = !1, Ee++, Tt(), () => rn()) : () => rn();
}
function rn() {
  ge = !0, Ee++, clearTimeout(Lt);
}
function ft() {
  clearTimeout(Lt), Tt();
}
function xt() {
  return _t;
}
function zo() {
  return Pt((e) => ($e.add(e), () => $e.delete(e)), xt, xt);
}
function sn(e, t) {
  return e?.games.find((o) => o.steamAppId === t);
}
function Ro(e) {
  return $e.add(e), () => {
    $e.delete(e);
  };
}
function $o() {
  Ue();
  const e = je(), { snapshot: t } = zo(), o = t?.pendingLinks[0], [l, r] = v(), [s, d] = v(), [h, f] = v(), [w, p] = v(""), [u, m] = v(!1), [D, M] = v(0);
  if (q(() => {
    if (!o) return;
    Dn(e);
    let x = !1;
    return r(void 0), p(""), d(void 0), (async () => {
      try {
        const [C, E] = await Promise.all([y.call("profiles", { slug: o.slug }), y.call("resolve_link", { slug: o.slug }, { url: o.url })]);
        x || (d(C), f(C.activeId), r(E));
      } catch (C) {
        x || p(R(C));
      }
    })(), () => {
      x = !0;
    };
  }, [o?.url, o?.slug, D]), !o) return null;
  const L = () => {
    u || y.dismissLink(o.url).then(() => ft()).catch((x) => p(R(x)));
  }, b = () => void (async () => {
    m(!0), p("");
    try {
      await y.call("install_mod", { slug: o.slug, profileId: h }, { id: { packageUuid: l.uuid, versionUuid: l.versionUuid, backend: l.backend } }), await y.dismissLink(o.url), ft();
    } catch (x) {
      p(R(x));
    } finally {
      m(!1);
    }
  })();
  return /* @__PURE__ */ c(ue, { title: n("linkTitle"), onClose: L, footer: /* @__PURE__ */ c(O, { children: [
    /* @__PURE__ */ a(N, { disabled: u, onClick: L, children: n("cancel") }),
    /* @__PURE__ */ a(N, { primary: !0, disabled: u || !l || h === void 0, onClick: b, children: n(u ? "linkInstalling" : "linkInstall") })
  ] }), children: [
    /* @__PURE__ */ a("h3", { children: l?.name ?? o.url.split("/").slice(-2, -1)[0] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: l ? `${l.author} · v${l.version}` : n("linkChecking") }),
    s && /* @__PURE__ */ c("label", { className: "gx-form-label", children: [
      n("linkProfile"),
      /* @__PURE__ */ a(Ce, { label: n("linkProfile"), value: h ?? s.activeId, options: s.profiles.map((x) => ({ value: x.id, label: x.name })), onChange: f })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: n("linkDeps", { game: t?.games.find((x) => x.slug === o.slug)?.name ?? o.slug }) }),
    w && /* @__PURE__ */ a(se, { error: !0, onRetry: () => M((x) => x + 1), children: w })
  ] });
}
let Je = { error: "" };
const bt = /* @__PURE__ */ new Set();
let Gt, me = !0, pt = !1, Fe = 0;
function dn(e) {
  Je = e, bt.forEach((t) => t());
}
async function Et() {
  if (me || pt) return;
  pt = !0;
  const e = Fe;
  try {
    const t = await y.progress();
    !me && e === Fe && dn({ snapshot: t, error: "" });
  } catch (t) {
    !me && e === Fe && dn({ ...Je, error: R(t) });
  } finally {
    pt = !1, me || (Gt = setTimeout(() => void Et(), Je.snapshot?.active ? 750 : 2e3));
  }
}
function Uo() {
  return me ? (me = !1, Fe++, Et(), () => cn()) : () => cn();
}
function cn() {
  me = !0, Fe++, clearTimeout(Gt);
}
function Ho() {
  clearTimeout(Gt), Et();
}
function pn() {
  return Je;
}
function _n() {
  return Pt((e) => (bt.add(e), () => bt.delete(e)), pn, pn);
}
function Oo(e) {
  return `${he(Math.max(0, e))}/s`;
}
function Vo(e) {
  const t = `task_${e.kind.replace(/-/g, "_")}`, o = n(t);
  return o === t ? n("task_install") : o;
}
function Xo(e) {
  const o = `phase_${e.status === "done" ? "done" : e.status === "error" ? "error" : e.phase ?? "starting"}`, l = n(o);
  return l === o ? n("working") : l;
}
function Wo(e) {
  if (e.totalBytes && e.totalBytes > 0) return Math.min(100, Math.round(e.completedBytes / e.totalBytes * 100));
  if (e.totalMods && e.totalMods > 0) return Math.min(100, Math.round(e.completedMods / e.totalMods * 100));
}
function un({ history: e, field: t, label: o }) {
  const l = e.map((d) => d[t]), r = Math.max(1, ...l), s = l.map((d, h) => `${l.length > 1 ? h / (l.length - 1) * 100 : 0},${32 - d / r * 30}`).join(" ");
  return /* @__PURE__ */ c("div", { className: "gx-sparkline", "aria-label": o, children: [
    /* @__PURE__ */ a("span", { children: o }),
    /* @__PURE__ */ a("svg", { viewBox: "0 0 100 32", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ a("polyline", { points: s, fill: "none", stroke: "currentColor", strokeWidth: "1.5" }) }),
    /* @__PURE__ */ a("strong", { children: Oo(l[l.length - 1] ?? 0) })
  ] });
}
function qo({ task: e }) {
  const t = Wo(e), o = window.MILLENNIUM_API?.ProgressBarWithInfo, l = Xo(e), r = e.totalBytes ? `${he(e.completedBytes)} / ${he(e.totalBytes)}` : e.totalMods ? `${e.completedMods}/${e.totalMods}` : "";
  return /* @__PURE__ */ c("article", { className: `gx-download-card ${e.status === "error" ? "is-error" : ""}`, "data-appid": e.steamAppId, "data-galex-download": e.id, children: [
    e.steamAppId ? /* @__PURE__ */ a("img", { className: "gx-download-cover", src: `https://cdn.cloudflare.steamstatic.com/steam/apps/${e.steamAppId}/header.jpg`, alt: "", loading: "lazy" }) : /* @__PURE__ */ a("span", { className: "gx-download-cover gx-download-cover--fallback", children: /* @__PURE__ */ a(J, { name: "package", size: 24 }) }),
    /* @__PURE__ */ c("div", { className: "gx-download-body", children: [
      /* @__PURE__ */ c("header", { children: [
        /* @__PURE__ */ a("h3", { children: e.gameName }),
        /* @__PURE__ */ a("span", { className: "gx-muted", children: e.profileName ?? e.slug })
      ] }),
      /* @__PURE__ */ c("p", { className: "gx-download-task", children: [
        Vo(e),
        " · ",
        l,
        e.currentMod ? ` · ${e.currentMod}` : ""
      ] }),
      typeof o == "function" ? /* @__PURE__ */ a(o, { nProgress: t ?? 0, indeterminate: t === void 0 || e.status === "active" && t === 0, strOperationText: l, sTimeRemaining: r }) : /* @__PURE__ */ a("progress", { className: "gx-progress", max: 100, value: t ?? void 0, "aria-label": l }),
      /* @__PURE__ */ c("div", { className: "gx-download-meta", children: [
        /* @__PURE__ */ a("span", { children: r || n("working") }),
        t !== void 0 && /* @__PURE__ */ c("span", { children: [
          t,
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Zo() {
  Ue();
  const { snapshot: e, error: t } = _n(), o = e?.tasks ?? [], l = o.some((r) => r.status === "active");
  return !e || o.length === 0 && !t ? null : /* @__PURE__ */ c("section", { className: "galex gx-downloads", "aria-label": n("galeDownloads"), children: [
    /* @__PURE__ */ c("header", { className: "gx-downloads-header", children: [
      /* @__PURE__ */ a("h2", { children: n("galeDownloads") }),
      l && /* @__PURE__ */ a(N, { icon: "x", onClick: () => void y.cancelInstalls().then(Ho).catch(() => {
      }), children: n("cancelDownloads") })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galeDownloadsHint") }),
    t && /* @__PURE__ */ a(se, { error: !0, children: t }),
    e && /* @__PURE__ */ c("div", { className: "gx-download-graphs", children: [
      /* @__PURE__ */ a(un, { history: e.history, field: "network", label: n("network") }),
      /* @__PURE__ */ a(un, { history: e.history, field: "disk", label: n("disk") })
    ] }),
    o.length ? o.map((r) => /* @__PURE__ */ a(qo, { task: r }, r.id)) : /* @__PURE__ */ a("div", { className: "gx-empty", children: n(e ? "noGaleDownloads" : "loading") })
  ] });
}
function Qo({ children: e }) {
  return /* @__PURE__ */ c(O, { children: [
    /* @__PURE__ */ a(Zo, {}),
    e
  ] });
}
const vt = /* @__PURE__ */ new WeakMap();
function wt(e) {
  const t = vt.get(e);
  vt.delete(e);
  try {
    t?.Hide?.();
  } catch {
  }
}
function Jo(e) {
  const t = e?.findModuleExport;
  if (typeof t == "function")
    try {
      const o = t((l) => typeof l == "function" && typeof l.prototype?.ShowSubMenu == "function" && typeof l.prototype?.RenderSubMenu == "function");
      return o || t((l) => {
        if (typeof l != "function" || l.length !== 1) return !1;
        const r = Function.prototype.toString.call(l);
        return r.includes("bInGamepadUI:") && r.includes("return");
      });
    } catch {
      return;
    }
}
function yt(e) {
  return /* @__PURE__ */ c(O, { children: [
    e.icon && /* @__PURE__ */ a("span", { className: "gx-context-menu-icon", children: /* @__PURE__ */ a(J, { name: e.icon, size: 16 }) }),
    /* @__PURE__ */ a("span", { children: e.label })
  ] });
}
function Ln(e, t, o) {
  return e.map((l) => l.children?.length ? V(o, { key: l.id, label: yt(l), disabled: l.disabled }, Ln(l.children, t, o)) : V(t, {
    key: l.id,
    disabled: l.disabled,
    tone: l.danger ? "destructive" : void 0,
    onSelected: l.disabled ? void 0 : () => l.onSelect?.()
  }, yt(l)));
}
function Ko(e, t, o, l) {
  const r = Z(), s = r?.showContextMenu, d = r?.Menu, h = r?.MenuItem;
  if (typeof s != "function" || typeof d != "function" || typeof h != "function") return !1;
  const f = e.some((p) => p.children?.length) ? Jo(r) : void 0;
  if (e.some((p) => p.children?.length) && !f) return !1;
  const w = t.ownerDocument;
  wt(w);
  try {
    const p = V(d, { label: o }, Ln(e, h, f)), u = l ? {
      preventDefault() {
      },
      stopPropagation() {
      },
      currentTarget: t,
      clientX: l.x,
      clientY: l.y
    } : t, m = s(p, u, { bFitToWindow: !0, bShiftToFitWindow: !0, bOverlapHorizontal: !0, bOverlapVertical: !0 });
    return m && vt.set(w, m), !0;
  } catch {
    return !1;
  }
}
function Tn({ items: e, label: t, point: o, root: l = !1, onClose: r, onBack: s }) {
  const d = ze(null), [h, f] = v(null);
  wo(() => {
    const p = d.current;
    if (!p) return;
    const u = p.ownerDocument.defaultView;
    if (!u) return;
    const m = p.getBoundingClientRect();
    if (l)
      p.style.left = `${Math.max(8, Math.min(m.left, u.innerWidth - m.width - 8))}px`, p.style.top = `${Math.max(8, Math.min(m.top, u.innerHeight - m.height - 8))}px`;
    else {
      const D = p.parentElement?.getBoundingClientRect();
      m.right > u.innerWidth - 8 && (p.style.left = "auto", p.style.right = "calc(100% - 4px)"), D && m.bottom > u.innerHeight - 8 && (p.style.top = `${Math.max(8, u.innerHeight - m.height - 8) - D.top}px`);
    }
  }, [l, e]);
  const w = () => Array.from(d.current?.querySelectorAll(":scope > .gx-context-menu-item-wrap > button:not(:disabled)") ?? []);
  return q(() => {
    l && (w()[0] ?? d.current)?.focus();
  }, [l]), /* @__PURE__ */ a(
    "div",
    {
      ref: d,
      className: `galex gx-context-menu${l ? " gx-context-menu--root" : " gx-context-submenu"}${l && h ? " gx-context-menu--submenu-open" : ""}`,
      role: "menu",
      "aria-label": t,
      tabIndex: -1,
      style: l && o ? { left: o.x, top: o.y } : void 0,
      onKeyDown: (p) => {
        const u = p.target, m = w(), D = m.indexOf(u);
        if (p.key === "ArrowDown" || p.key === "ArrowUp") {
          p.preventDefault();
          const M = p.key === "ArrowDown" ? (D + 1) % m.length : (D - 1 + m.length) % m.length;
          m[M]?.focus();
        } else if (p.key === "Home")
          p.preventDefault(), m[0]?.focus();
        else if (p.key === "End")
          p.preventDefault(), m[m.length - 1]?.focus();
        else if (p.key === "ArrowRight" && u.getAttribute("aria-haspopup") === "menu") {
          p.preventDefault();
          const M = u.dataset.itemId ?? null;
          f(M), setTimeout(() => d.current?.querySelector(".gx-context-submenu button:not(:disabled)")?.focus(), 0);
        } else p.key === "ArrowLeft" && s ? (p.preventDefault(), s()) : p.key === "Escape" && s && (p.preventDefault(), p.stopPropagation(), s());
      },
      children: e.map((p) => {
        const u = !!p.children?.length, m = h === p.id;
        return /* @__PURE__ */ c("div", { className: "gx-context-menu-item-wrap", onMouseEnter: () => f(u ? p.id : null), children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-item-id": p.id,
              className: `gx-context-menu-item${p.danger ? " gx-context-menu-item--danger" : ""}`,
              disabled: p.disabled,
              "aria-haspopup": u ? "menu" : void 0,
              "aria-expanded": u ? m : void 0,
              onFocus: () => {
                u && f(p.id);
              },
              onClick: () => {
                if (u) {
                  f(p.id);
                  return;
                }
                r(), p.onSelect?.();
              },
              children: [
                yt(p),
                u && /* @__PURE__ */ a(J, { name: "chevron-right", size: 14, className: "gx-context-menu-arrow" })
              ]
            }
          ),
          u && m && /* @__PURE__ */ a(Tn, { items: p.children, label: p.label, onClose: r, onBack: () => {
            f(null), d.current?.querySelector(`button[data-item-id="${p.id}"]`)?.focus();
          } })
        ] }, p.id);
      })
    }
  );
}
function Yo({ items: e, label: t, point: o, anchor: l, onClose: r }) {
  const s = je(), d = ze(r);
  return d.current = r, q(() => {
    const h = s.activeElement, f = (u) => {
      const m = u.target;
      !m || !(m instanceof s.defaultView.Node) || !s.body.contains(m) || m.closest?.(".gx-context-menu") || d.current();
    }, w = (u) => {
      u.key === "Escape" && (u.preventDefault(), d.current());
    }, p = (u) => {
      const m = u.target;
      m && m.closest?.(".gx-context-menu") || d.current();
    };
    return s.addEventListener("pointerdown", f, !0), s.addEventListener("keydown", w, !0), s.addEventListener("scroll", p, !0), s.defaultView?.addEventListener("resize", r), s.defaultView?.addEventListener("blur", r), () => {
      s.removeEventListener("pointerdown", f, !0), s.removeEventListener("keydown", w, !0), s.removeEventListener("scroll", p, !0), s.defaultView?.removeEventListener("resize", r), s.defaultView?.removeEventListener("blur", r), (h?.isConnected ? h : l.isConnected ? l : null)?.focus?.();
    };
  }, [s, l]), Sn(/* @__PURE__ */ a(Tn, { items: e, label: t, point: o, root: !0, onClose: r }), s.body);
}
function jo(e, t) {
  const o = encodeURIComponent(t.author ?? ""), l = encodeURIComponent(t.name), r = encodeURIComponent(e);
  return t.backend === "Hexium" ? `https://${r}.hexium.gg/mods/${o}/${l}` : `https://thunderstore.io/c/${r}/p/${o}/${l}/`;
}
function gn(e) {
  if (e)
    try {
      const t = new URL(e);
      return t.protocol === "http:" || t.protocol === "https:" ? t.href : void 0;
    } catch {
      return;
    }
}
const ea = { includeCategories: [], excludeCategories: [], includeNsfw: !1, includeDeprecated: !0, includeDisabled: !0, includeEnabled: !0, sortBy: "name", sortOrder: "ascending" }, mn = { mods: [], totalModCount: 0, updates: [], unknownMods: [] };
function ta(e) {
  if (e.type === "remote" && e.author && e.version) {
    if (e.backend === "Thunderstore") return `https://ccdn.thunderstore.io/live/repository/icons/${encodeURIComponent(`${e.author}-${e.name}-${e.version}`)}.png`;
    if (e.backend === "Hexium") return `https://cdn.hexium.gg/uploads/${encodeURIComponent(e.author)}/${encodeURIComponent(e.name)}/icon.png?${encodeURIComponent(e.version)}`;
  }
  if (e.icon && /^(https?:|data:)/i.test(e.icon)) return e.icon;
}
function na({ mod: e }) {
  const [t, o] = v(!1), l = ta(e.data);
  return !l || t ? /* @__PURE__ */ a("span", { className: "gx-mod-avatar", "aria-hidden": "true", children: e.data.name.slice(0, 2).toUpperCase() }) : /* @__PURE__ */ a("img", { className: "gx-mod-avatar", src: l, alt: "", loading: "lazy", onError: () => o(!0) });
}
const ut = (e) => e.replace(/_/g, " ");
function oa({ game: e, demo: t = !1, installing: o = !1, embedded: l = !1 }) {
  Ue();
  const r = je(), [s, d] = v({ activeId: 0, profiles: [] }), [h, f] = v(), [w, p] = v(mn), [u, m] = v(""), [D, M] = v(""), [L, b] = v("all"), [x, C] = v("name"), [E, j] = v(!0), [B, ne] = v(""), [oe, xe] = v([]), [de, tt] = v(!1), [be, ve] = v(!0), [Pe, F] = v(""), [ce, T] = v(""), [S, Bt] = v(""), [Rn, $n] = v(0), [Un, Hn] = v(0), [$, U] = v(null), [ee, K] = v(""), [He, nt] = v(""), [X, we] = v(null), [ye, zt] = v("code"), [Ae, De] = v("new"), [Rt, On] = v(!1), [$t, Vn] = v(!1), [ot, Xn] = v(""), [pe, Ut] = v(null), [Ht, Ot] = v([]), [Vt, Xt] = v(""), [Wn, Wt] = v(!1), [Ie, at] = v([]), [ae, Oe] = v(null), [ie, qn] = v(null), [_e, Ve] = v(null), [Xe, it] = v(null), We = ze(!0), _ = { slug: e.slug, profileId: h }, le = s.profiles.find((i) => i.id === h), H = () => $n((i) => i + 1), qt = () => Hn((i) => i + 1);
  q(() => (We.current = !0, () => {
    We.current = !1, wt(r);
  }), [r]), q(() => {
    Ve(null), wt(r);
  }, [r, e.slug, h]), q(() => {
    const i = setTimeout(() => M(u), 220);
    return () => clearTimeout(i);
  }, [u]), q(() => {
    let i = !1;
    return ve(!0), F(""), f(void 0), p(mn), m(""), ne(""), xe([]), b("all"), y.call("profiles", { slug: e.slug }).then((g) => {
      i || (d(g), f(g.activeId));
    }).catch((g) => {
      i || (F(R(g)), ve(!1));
    }), () => {
      i = !0;
    };
  }, [e.slug, Un]), q(() => {
    if (h === void 0) return;
    let i = !1;
    ve(!0);
    const g = { ...ea, searchTerm: D, includeEnabled: L !== "disabled", includeDisabled: L !== "enabled", includeCategories: B ? [B] : [], sortBy: x, sortOrder: E ? "ascending" : "descending" };
    return y.call("mods", { slug: e.slug, profileId: h }, { args: g }).then((k) => {
      i || (p(k), F(""), xe((P) => Array.from(/* @__PURE__ */ new Set([...P, ...k.mods.flatMap((z) => z.data.categories ?? [])])).sort()));
    }).catch((k) => {
      i || F(R(k));
    }).finally(() => {
      i || ve(!1);
    }), () => {
      i = !0;
    };
  }, [e.slug, h, D, L, x, E, B, Rn]), q(() => {
    if (!ce) return;
    const i = setTimeout(() => T(""), 4500);
    return () => clearTimeout(i);
  }, [ce]), q(() => {
    $ !== "export" || t || y.call("list_export_files", _).then(at).catch((i) => F(R(i)));
  }, [$, h]);
  const { snapshot: Zn } = _n(), Qn = Zn?.tasks.find((i) => i.slug === e.slug && i.status === "active"), Le = w.updates.filter((i) => !i.ignore), Zt = L === "updates" ? w.mods.filter((i) => Le.some((g) => g.updatedId.packageUuid === i.data.uuid)) : w.mods, Jn = w.mods.filter((i) => i.enabled).length, Kn = Mn(() => Ie.filter((i) => i.included).reduce((i, g) => i + g.size, 0), [Ie]), I = bo(async (i, g) => {
    if (!S) {
      Ve(null), Bt(i), F("");
      try {
        await g();
      } catch (k) {
        We.current && F(R(k));
      } finally {
        We.current && Bt("");
      }
    }
  }, [S]), lt = async (i, g = {}) => {
    await y.call(i, _, g);
    const k = await y.call("profiles", { slug: e.slug }), P = i === "import_profile" ? ee.trim() : ee;
    let z = k.activeId;
    (i === "create_profile" || i === "duplicate_profile" || i === "import_profile") && (z = k.profiles.find((G) => G.name === P)?.id ?? k.activeId), i === "delete_profile" && (z = k.activeId), await y.call("activate_profile", { slug: e.slug, profileId: z }), d(k), f(z), U(null), K(""), we(null), H(), T(n("profileSaved"));
  }, Yn = (i) => void I(i.data.uuid, async () => {
    const g = await y.call("toggle_mod", _, { uuid: i.data.uuid });
    g.type === "confirm" ? Oe({ title: n("disableMod", { name: i.data.name }), description: n("disableDependants"), uuids: [i.data.uuid, ...g.dependants.map((k) => k.uuid)], kind: "toggle" }) : H();
  }), Qt = (i) => void I(i.data.uuid, async () => {
    const g = await y.call("remove_mod", _, { uuid: i.data.uuid });
    g.type === "confirm" ? Oe({ title: n("removeMod", { name: i.data.name }), description: n("removeDependants"), uuids: [i.data.uuid, ...g.dependants.map((k) => k.uuid)], kind: "remove" }) : (H(), T(n("modRemoved")));
  }), jn = () => {
    ae && I("confirm", async () => {
      await y.call(ae.kind === "toggle" ? "force_toggle_mods" : "force_remove_mods", _, { uuids: [...new Set(ae.uuids)] }), Oe(null), H(), T(ae.kind === "toggle" ? n("stateChanged") : n("modRemoved"));
    });
  }, Jt = async (i, g) => {
    try {
      await navigator.clipboard.writeText(i), T(g);
    } catch {
      F(n("clipboardError"));
    }
  }, rt = (i) => void I("browser", async () => {
    if (t) {
      T(n("demoConfig"));
      return;
    }
    const g = await y.browserUrl({ ..._, lang: No(), file: i?.configFile });
    Ge(g.url), T(n("configOpened"));
  }), st = (i, g, k = i.data.backend) => void I("version", async () => {
    await y.call("change_mod_version", _, { id: { packageUuid: i.data.uuid, versionUuid: g.uuid, backend: k } }), U(null), H(), T(n("versionQueued"));
  }), eo = (i) => void I("folder", async () => {
    if (t) {
      T(n("demoFolder"));
      return;
    }
    await y.call("open_mod_dir", _, { uuid: i.data.uuid }), T(n("folderOpened"));
  }), to = (i) => void I("dependants", async () => {
    const g = await y.call("get_dependants", _, { uuid: i.data.uuid });
    it({ name: i.data.name, items: g });
  }), no = (i) => {
    const g = !!S, k = [{ id: "uninstall", label: n("uninstall"), icon: "trash", danger: !0, disabled: g, onSelect: () => Qt(i) }];
    if (i.data.versions.length > 1 && k.push({ id: "version", label: n("changeVersion"), icon: "layers", disabled: g, children: i.data.versions.filter((G) => G.uuid !== i.data.versionUuid).map((G) => ({ id: `version-${G.uuid}`, label: G.name, onSelect: () => st(i, G) })) }), i.alternateBackend) {
      const G = i.alternateBackend;
      k.push({ id: "source", label: n("changeSource"), icon: "branch", disabled: g, children: [{ id: `source-${G.backend}`, label: `${G.backend} (${G.latestVersion})`, onSelect: () => st(i, { name: G.latestVersion, uuid: G.latestVersionUuid }, G.backend) }] });
    }
    k.push({ id: "dependants", label: n("showDependants"), icon: "branch", disabled: g, onSelect: () => to(i) }), k.push({ id: "folder", label: n("openFolder"), icon: "folder", disabled: g, onSelect: () => eo(i) }), i.configFile && k.push({ id: "config", label: n("openConfig"), icon: "sliders", disabled: g, onSelect: () => rt(i) });
    const P = gn(i.data.websiteUrl);
    P && k.push({ id: "website", label: n("openWebsite"), icon: "external", disabled: g, onSelect: () => Ge(P) }), i.data.type === "remote" && k.push({ id: "link", label: n("copyLink"), icon: "link", disabled: g, onSelect: () => void Jt(jo(e.slug, i.data), n("linkCopied")) });
    const z = gn(i.data.donateUrl);
    return z && k.push({ id: "donate", label: n("donate"), icon: "heart", disabled: g, onSelect: () => Ge(z) }), k;
  }, Kt = (i, g, k) => {
    const P = no(g), z = `${n("modActions")} — ${ut(g.data.name)}`;
    if (Ko(P, i, z, k)) return;
    const G = i.getBoundingClientRect();
    Ve({ items: P, label: z, point: k ?? { x: G.left + 24, y: G.top + 24 }, anchor: i });
  }, oo = () => void I("import", async () => {
    if (!He.trim()) throw new Error(n("importCodePlaceholder"));
    const i = await y.call("read_profile_code", _, { code: He.trim() });
    we(i), K(i.manifest.profileName), De(s.profiles.some((g) => g.name === i.manifest.profileName) ? "overwrite" : "new");
  }), ao = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      F(n("fileTooLarge"));
      return;
    }
    const g = new FileReader();
    g.onload = () => void I("import", async () => {
      const k = String(g.result).split(",")[1] ?? "", P = await y.call("read_profile_base64", _, { base64: k });
      we(P), K(P.manifest.profileName), De(s.profiles.some((z) => z.name === P.manifest.profileName) ? "overwrite" : "new");
    }), g.onerror = () => F(n("fileReadError")), g.readAsDataURL(i);
  }, io = (i) => void I("import", async () => {
    const g = await y.call("read_profile_file", _, { path: i });
    we(g), K(g.manifest.profileName), De(s.profiles.some((k) => k.name === g.manifest.profileName) ? "overwrite" : "new");
  }), lo = async () => {
    const i = await on(n("profileFileDialog"), n("profileFileFilter"), ["*.r2z", "*.zip"]);
    i && io(i);
  }, ro = async () => {
    const i = await on(n("localFileDialog"), n("localFileFilter"), ["*.zip"]);
    i && I("local", async () => {
      await y.call("import_local_mod", _, { path: i }), U(null), H(), T(n("profileSaved"));
    });
  }, so = () => void I("import", async () => {
    if (!X) return;
    const i = { ...X, manifest: { ...X.manifest, profileName: ee.trim() || X.manifest.profileName } };
    await lt("import_profile", { data: i, options: { importAll: Rt, merge: Ae === "overwrite" && $t, ignoreMissingMods: X.missingMods.length > 0 } });
  }), co = () => void I("r2", async () => {
    const i = await y.call("get_r2modman_info", _, { path: ot.trim() || null });
    Ut(i), Ot(i?.profiles.map(() => !0) ?? []);
  }), po = () => void I("r2", async () => {
    pe && (await y.call("import_r2modman", _, { path: pe.path, include: Ht }), U(null), qt(), H(), T(n("profileSaved")));
  }), uo = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      F(n("fileTooLarge"));
      return;
    }
    const g = new FileReader();
    g.onload = () => void I("local", async () => {
      await y.call("import_local_mod_base64", _, { base64: String(g.result).split(",")[1] ?? "" }), U(null), H(), T(n("profileSaved"));
    }), g.onerror = () => F(n("fileReadError")), g.readAsDataURL(i);
  }, go = () => void I("export", async () => {
    const i = await y.call("export_code", _);
    Wt(i.type !== "success"), Xt(i.code ?? ""), U("export");
  }), mo = (i) => {
    if (t) {
      at(i);
      return;
    }
    I("export-files", async () => {
      await y.call("set_excluded_export_files", _, { excludedFiles: i.filter((g) => !g.included).map((g) => g.path) }), at(i), Xt("");
    });
  }, ho = () => void I("export-file", async () => {
    const { url: i } = await y.browserUrl({ ..._, kind: "export" });
    To(i);
  }), fo = () => void I("update", async () => {
    await y.call("update_mods", _, { uuids: Le.map((i) => i.updatedId.packageUuid) }), T(n(t ? "demoUpdate" : "updateQueued")), H();
  }), re = () => {
    S || (U(null), we(null), K(""), nt(""), Ut(null), Wt(!1));
  };
  return /* @__PURE__ */ c("section", { className: `galex gx-mods${l ? " gx-mods--embedded" : ""}`, "aria-label": `${n("mods")} — ${e.name}`, "data-appid": e.steamAppId, children: [
    !l && /* @__PURE__ */ c("div", { className: "gx-heading", children: [
      /* @__PURE__ */ a("h1", { children: n("mods") }),
      (o || t) && /* @__PURE__ */ a("div", { className: "gx-heading-meta", children: n(o ? "working" : "demo") })
    ] }),
    /* @__PURE__ */ c("div", { className: "gx-toolbar", children: [
      /* @__PURE__ */ a(N, { onClick: () => Ge(`https://thunderstore.io/c/${encodeURIComponent(e.slug)}/`), children: n("openThunderstore") }),
      /* @__PURE__ */ c(N, { onClick: () => tt((i) => !i), "aria-expanded": de, children: [
        n("advanced"),
        " ",
        /* @__PURE__ */ a(J, { name: "chevron-down", className: de ? "gx-chevron-open" : "", size: 13 })
      ] })
    ] }),
    de && /* @__PURE__ */ c("div", { className: "gx-advanced", children: [
      /* @__PURE__ */ c("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ c("div", { className: "gx-profile-line", children: [
          /* @__PURE__ */ a("span", { className: "gx-field-label", children: n("profile") }),
          /* @__PURE__ */ a(Ce, { label: n("profile"), value: h ?? 0, disabled: !!S || !s.profiles.length, options: s.profiles.map((i) => ({ value: i.id, label: i.name })), onChange: (i) => void I("profile", async () => {
            await y.call("activate_profile", { slug: e.slug, profileId: i }), f(i), H();
          }) })
        ] }),
        /* @__PURE__ */ c("div", { className: "gx-profile-actions", children: [
          /* @__PURE__ */ a(N, { icon: "plus", disabled: !!S, onClick: () => {
            K(""), U("create");
          }, children: n("createProfile") }),
          /* @__PURE__ */ a(N, { disabled: !le || !!S, onClick: () => {
            K(le?.name ?? ""), U("rename");
          }, children: n("renameProfile") }),
          /* @__PURE__ */ a(N, { disabled: !le || !!S, onClick: () => {
            K(`${le?.name} copy`), U("duplicate");
          }, children: n("duplicateProfile") }),
          /* @__PURE__ */ a(N, { className: "gx-danger", disabled: s.profiles.length < 2 || !!S, onClick: () => U("delete"), children: n("deleteProfile") })
        ] })
      ] }),
      /* @__PURE__ */ c("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ a("div", { className: "gx-profile-line", children: /* @__PURE__ */ a("span", { className: "gx-field-label", children: n("profileTransfer") }) }),
        /* @__PURE__ */ c("div", { className: "gx-profile-actions", children: [
          /* @__PURE__ */ a(N, { icon: "download", disabled: !le || !!S, onClick: () => {
            nt(""), we(null), zt("code"), U("import");
          }, children: n("import") }),
          /* @__PURE__ */ a(N, { icon: "external", disabled: !le || !!S, onClick: go, children: n("export") })
        ] })
      ] }),
      /* @__PURE__ */ c("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ a("div", { className: "gx-profile-line", children: /* @__PURE__ */ a("span", { className: "gx-field-label", children: n("modConfiguration") }) }),
        /* @__PURE__ */ a("div", { className: "gx-profile-actions", children: /* @__PURE__ */ a(N, { icon: "sliders", disabled: !le || !!S, onClick: () => rt(), children: n("config") }) })
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "gx-search-row", children: [
      /* @__PURE__ */ c("div", { className: "gx-filter-group", children: [
        /* @__PURE__ */ c("span", { className: "gx-field-label DialogLabel", children: [
          n("filter"),
          ":"
        ] }),
        /* @__PURE__ */ c("label", { className: "gx-search DialogInput_Wrapper", children: [
          /* @__PURE__ */ a("input", { className: "DialogInput DialogInputPlaceholder DialogTextInputBase", "aria-label": n("searchMods"), placeholder: n("searchMods"), value: u, onChange: (i) => m(i.target.value) }),
          u && /* @__PURE__ */ a("button", { "aria-label": n("clearSearch"), onClick: () => m(""), children: /* @__PURE__ */ a(J, { name: "x", size: 13 }) })
        ] })
      ] }),
      /* @__PURE__ */ a(Ce, { label: n("filter"), value: L, onChange: b, options: [{ value: "all", label: n("all") }, { value: "enabled", label: n("enabled") }, { value: "disabled", label: n("disabled") }, { value: "updates", label: n("updates") }] }),
      /* @__PURE__ */ c("div", { className: "gx-filter-group", children: [
        /* @__PURE__ */ c("span", { className: "gx-field-label DialogLabel", children: [
          n("sortBy"),
          ":"
        ] }),
        /* @__PURE__ */ a(Ce, { label: n("sortBy"), value: x, onChange: C, options: [{ value: "name", label: n("byName") }, { value: "author", label: n("byAuthor") }, { value: "installDate", label: n("byInstallDate") }, { value: "diskSpace", label: n("bySize") }, { value: "downloads", label: n("byDownloads") }] }),
        /* @__PURE__ */ a(te, { className: "gx-sort-direction", icon: E ? "arrow-up" : "arrow-down", label: n(E ? "ascending" : "descending"), onClick: () => j((i) => !i), disabled: !!S })
      ] }),
      /* @__PURE__ */ a(Ce, { label: n("categories"), value: B, onChange: ne, options: [{ value: "", label: n("allCategories") }, ...oe.map((i) => ({ value: i, label: i }))] })
    ] }),
    Pe && /* @__PURE__ */ a(se, { error: !0, onRetry: () => {
      F(""), H();
    }, children: Pe }),
    ce && /* @__PURE__ */ a(se, { children: ce }),
    Qn && /* @__PURE__ */ a(se, { children: /* @__PURE__ */ c("span", { children: [
      n("operationInProgress"),
      " ",
      /* @__PURE__ */ a("button", { className: "gx-update-link", onClick: Lo, children: n("openDownloads") })
    ] }) }),
    /* @__PURE__ */ c("div", { className: "gx-list-heading", children: [
      /* @__PURE__ */ a("span", { children: n("modCount", { count: w.totalModCount }) }),
      /* @__PURE__ */ a("span", { children: n("enabledCount", { count: Jn }) }),
      !!Le.length && /* @__PURE__ */ c("button", { className: "gx-update-link", disabled: !!S, onClick: fo, children: [
        /* @__PURE__ */ a(J, { name: "download", size: 13 }),
        n("updateAll", { count: Le.length })
      ] }),
      /* @__PURE__ */ a(te, { icon: "refresh", label: n("refresh"), onClick: () => {
        qt(), H();
      }, disabled: !!S })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-mod-list", role: "list", tabIndex: 0, children: be && !w.mods.length ? /* @__PURE__ */ a("div", { className: "gx-empty", children: n("loading") }) : Zt.length ? Zt.map((i, g) => {
      const k = Le.find((P) => P.updatedId.packageUuid === i.data.uuid);
      return /* @__PURE__ */ c(
        "div",
        {
          className: `gx-mod-row ${i.enabled ? "" : "is-disabled"}`,
          role: "listitem",
          tabIndex: 0,
          "aria-haspopup": "menu",
          "data-mod-uuid": i.data.uuid,
          onContextMenu: (P) => {
            P.preventDefault(), P.stopPropagation(), Kt(P.currentTarget, i, { x: P.clientX, y: P.clientY });
          },
          onKeyDown: (P) => {
            P.target === P.currentTarget && (P.key === "ContextMenu" || P.shiftKey && P.key === "F10") && (P.preventDefault(), P.stopPropagation(), Kt(P.currentTarget, i));
          },
          children: [
            /* @__PURE__ */ a(Te, { checked: i.enabled, disabled: !!S, label: ut(i.data.name), onChange: () => Yn(i) }),
            /* @__PURE__ */ a("span", { className: "gx-mod-index", children: g + 1 }),
            /* @__PURE__ */ a(na, { mod: i }),
            /* @__PURE__ */ c("div", { className: "gx-mod-info", children: [
              /* @__PURE__ */ c("div", { className: "gx-mod-title", children: [
                /* @__PURE__ */ a("h3", { children: ut(i.data.name) }),
                k && /* @__PURE__ */ c("span", { className: "gx-badge gx-badge--update", children: [
                  k.old,
                  " → ",
                  k.new
                ] }),
                i.data.type === "local" && /* @__PURE__ */ a("span", { className: "gx-badge", children: n("local") })
              ] }),
              !!i.data.dependencies?.length && /* @__PURE__ */ c("p", { children: [
                n("dependsOn"),
                ": ",
                i.data.dependencies.join(", ")
              ] }),
              /* @__PURE__ */ c("div", { className: "gx-mod-byline", children: [
                /* @__PURE__ */ a("span", { children: i.data.author }),
                /* @__PURE__ */ c("span", { children: [
                  "v",
                  i.data.version
                ] }),
                !!i.data.categories?.length && /* @__PURE__ */ c("span", { children: [
                  n("tags"),
                  ": ",
                  i.data.categories.join(", ")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ a("span", { className: "gx-mod-size", children: he(i.data.fileSize) }),
            /* @__PURE__ */ c("div", { className: "gx-mod-actions", children: [
              i.configFile && /* @__PURE__ */ a(te, { icon: "sliders", label: n("openConfig"), disabled: !!S, onClick: () => rt(i) }),
              i.data.type === "remote" && /* @__PURE__ */ a(te, { icon: "layers", label: n("versions"), disabled: !!S, onClick: () => {
                qn(i), U("versions");
              } }),
              k && /* @__PURE__ */ a(te, { icon: "download", label: n("update"), disabled: !!S, onClick: () => void I("update-one", async () => {
                await y.call("update_mods", _, { uuids: [i.data.uuid] }), H(), T(n("updateQueued"));
              }) }),
              /* @__PURE__ */ a(te, { icon: "trash", label: n("remove"), disabled: !!S, onClick: () => Qt(i) })
            ] })
          ]
        },
        i.data.uuid
      );
    }) : /* @__PURE__ */ a("div", { className: "gx-empty", children: n("noMods") }) }),
    ae && /* @__PURE__ */ a(an, { title: ae.title, onClose: () => Oe(null), onConfirm: jn, busy: !!S, danger: ae.kind === "remove", children: /* @__PURE__ */ a("p", { children: ae.description }) }),
    ($ === "create" || $ === "rename" || $ === "duplicate") && /* @__PURE__ */ a(ue, { title: n($ === "create" ? "createProfileTitle" : $ === "rename" ? "renameProfileTitle" : "duplicateProfileTitle"), onClose: re, footer: /* @__PURE__ */ c(O, { children: [
      /* @__PURE__ */ a(N, { onClick: re, disabled: !!S, children: n("cancel") }),
      /* @__PURE__ */ a(N, { primary: !0, disabled: !!S || !ee.trim(), onClick: () => void I("profile", () => lt($ === "create" ? "create_profile" : $ === "rename" ? "rename_profile" : "duplicate_profile", { name: ee.trim() })), children: n(S ? "working" : "save") })
    ] }), children: /* @__PURE__ */ c("label", { className: "gx-form-label", children: [
      n("profileName"),
      /* @__PURE__ */ a("input", { value: ee, onChange: (i) => K(i.target.value), autoFocus: !0 })
    ] }) }),
    $ === "delete" && /* @__PURE__ */ a(an, { title: n("deleteProfileTitle"), onClose: re, onConfirm: () => void I("profile", () => lt("delete_profile", { id: h })), busy: !!S, danger: !0, children: /* @__PURE__ */ a("p", { children: n("deleteProfileBody", { name: le?.name ?? "" }) }) }),
    $ === "import" && /* @__PURE__ */ a(ue, { title: n(X ? "importPreview" : "importTitle"), onClose: re, footer: /* @__PURE__ */ c(O, { children: [
      /* @__PURE__ */ a(N, { onClick: re, disabled: !!S, children: n("cancel") }),
      X ? /* @__PURE__ */ a(N, { primary: !0, onClick: so, disabled: !!S || !ee.trim(), children: n(S ? "importing" : "installProfile") }) : ye === "code" ? /* @__PURE__ */ a(N, { primary: !0, onClick: oo, disabled: !!S || !He.trim(), children: n(S ? "working" : "continue") }) : ye === "r2" ? /* @__PURE__ */ a(N, { primary: !0, onClick: pe ? po : co, disabled: !!S || !pe && !ot.trim(), children: n(S ? "working" : pe ? "import" : "r2Load") }) : null
    ] }), children: X ? /* @__PURE__ */ c(O, { children: [
      /* @__PURE__ */ c("div", { className: "gx-tabs", children: [
        /* @__PURE__ */ a(N, { className: Ae === "new" ? "gx-button--primary" : "", onClick: () => De("new"), children: n("newProfile") }),
        /* @__PURE__ */ a(N, { className: Ae === "overwrite" ? "gx-button--primary" : "", onClick: () => De("overwrite"), children: n("overwriteProfile") })
      ] }),
      /* @__PURE__ */ c("label", { className: "gx-form-label", children: [
        n("profileName"),
        /* @__PURE__ */ a("input", { value: ee, onChange: (i) => K(i.target.value) })
      ] }),
      Ae === "overwrite" && /* @__PURE__ */ a(Ce, { label: n("overwriteProfile"), value: ee, onChange: K, options: s.profiles.map((i) => ({ value: i.name, label: i.name })) }),
      /* @__PURE__ */ c("div", { className: "gx-import-summary", children: [
        /* @__PURE__ */ a("strong", { children: X.manifest.profileName }),
        /* @__PURE__ */ a("span", { children: n("modsToInstall", { count: X.manifest.mods.length }) })
      ] }),
      !!X.missingMods.length && /* @__PURE__ */ a(se, { error: !0, children: n("missingMods", { mods: X.missingMods.join(", ") }) }),
      /* @__PURE__ */ c("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ a(Te, { checked: Rt, onChange: On, label: n("importAllFiles") }),
        n("importAllFiles")
      ] }),
      Ae === "overwrite" && /* @__PURE__ */ c("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ a(Te, { checked: $t, onChange: Vn, label: n("mergeProfiles") }),
        n("mergeProfiles")
      ] })
    ] }) : /* @__PURE__ */ c(O, { children: [
      /* @__PURE__ */ a("div", { className: "gx-tabs", children: ["code", "r2", "local"].map((i) => /* @__PURE__ */ a(N, { className: ye === i ? "gx-button--primary" : "", onClick: () => zt(i), children: n(i === "code" ? "importCode" : i === "r2" ? "importR2" : "importLocal") }, i)) }),
      ye === "code" && /* @__PURE__ */ c(O, { children: [
        /* @__PURE__ */ c("label", { className: "gx-form-label", children: [
          n("importCode"),
          /* @__PURE__ */ a("textarea", { value: He, onChange: (i) => nt(i.target.value), placeholder: n("importCodePlaceholder"), rows: 3 })
        ] }),
        /* @__PURE__ */ c("div", { className: "gx-form-label", children: [
          /* @__PURE__ */ a("span", { children: n("importFile") }),
          nn() ? /* @__PURE__ */ a(N, { icon: "folder", disabled: !!S, onClick: () => void lo(), children: n("importFileButton") }) : /* @__PURE__ */ a("input", { type: "file", accept: ".r2z,.zip", onChange: (i) => {
            const g = i.target.files?.[0];
            g && ao(g);
          } })
        ] })
      ] }),
      ye === "r2" && /* @__PURE__ */ c(O, { children: [
        /* @__PURE__ */ c("label", { className: "gx-form-label", children: [
          n("r2Path"),
          /* @__PURE__ */ a("input", { value: ot, onChange: (i) => Xn(i.target.value), placeholder: "~/.config/r2modman" })
        ] }),
        pe && /* @__PURE__ */ c("div", { className: "gx-file-list", children: [
          /* @__PURE__ */ a("strong", { children: n("r2Profiles") }),
          pe.profiles.map((i, g) => /* @__PURE__ */ c("label", { children: [
            /* @__PURE__ */ a(Te, { checked: !!Ht[g], label: i, onChange: (k) => Ot((P) => P.map((z, G) => G === g ? k : z)) }),
            /* @__PURE__ */ a("span", { children: i })
          ] }, i))
        ] })
      ] }),
      ye === "local" && /* @__PURE__ */ c("div", { className: "gx-form-label", children: [
        /* @__PURE__ */ a("span", { children: n("importLocalFile") }),
        nn() ? /* @__PURE__ */ a(N, { icon: "folder", disabled: !!S, onClick: () => void ro(), children: n("importLocalFile") }) : /* @__PURE__ */ a("input", { type: "file", accept: ".zip", onChange: (i) => {
          const g = i.target.files?.[0];
          g && uo(g);
        } })
      ] })
    ] }) }),
    $ === "export" && /* @__PURE__ */ c(ue, { title: n("exportTitle"), onClose: re, footer: /* @__PURE__ */ a(N, { primary: !0, onClick: re, children: n("done") }), children: [
      /* @__PURE__ */ a("p", { children: n("exportIntro") }),
      Wn ? /* @__PURE__ */ a(se, { error: !0, children: n("exportTooLarge") }) : /* @__PURE__ */ c("div", { className: "gx-export-code", children: [
        /* @__PURE__ */ a("code", { children: Vt }),
        /* @__PURE__ */ a(te, { icon: "copy", label: n("copyCode"), onClick: () => void Jt(Vt, n("codeCopied")) })
      ] }),
      !t && /* @__PURE__ */ c("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ a(N, { icon: "download", disabled: !!S, onClick: ho, children: n("exportFile") }),
        /* @__PURE__ */ a(N, { icon: "copy", disabled: !!S, onClick: () => void I("deps", async () => {
          await y.call("copy_dependency_strings", _), T(n("dependenciesCopied"));
        }), children: n("copyDependencies") }),
        /* @__PURE__ */ a(N, { icon: "copy", disabled: !!S, onClick: () => void I("debug", async () => {
          await y.call("copy_debug_info", _), T(n("debugCopied"));
        }), children: n("copyDebug") })
      ] }),
      !!Ie.length && /* @__PURE__ */ c("details", { children: [
        /* @__PURE__ */ a("summary", { children: n("exportFiles") }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("exportFilesHint") }),
        /* @__PURE__ */ a("div", { className: "gx-file-list", children: Ie.map((i) => /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ a(Te, { checked: i.included, disabled: !!S, label: i.path, onChange: (g) => mo(Ie.map((k) => k.path === i.path ? { ...k, included: g } : k)) }),
          /* @__PURE__ */ a("span", { children: i.path }),
          /* @__PURE__ */ a("small", { children: he(i.size) })
        ] }, i.path)) }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("totalSize", { size: he(Kn) }) })
      ] })
    ] }),
    $ === "versions" && ie && /* @__PURE__ */ c(ue, { title: n("versionTitle", { name: ie.data.name }), onClose: re, children: [
      /* @__PURE__ */ a("p", { children: n("currentVersion", { version: ie.data.version ?? "" }) }),
      /* @__PURE__ */ a("div", { className: "gx-version-list", children: ie.data.versions.map((i) => /* @__PURE__ */ c(N, { disabled: !!S || i.uuid === ie.data.versionUuid, icon: i.uuid === ie.data.versionUuid ? "check" : "layers", onClick: () => st(ie, i), children: [
        i.name,
        i.uuid === ie.data.versionUuid ? " · " + n("installed") : ""
      ] }, i.uuid)) })
    ] }),
    Xe && /* @__PURE__ */ a(ue, { title: n("dependantsTitle", { name: Xe.name }), onClose: () => it(null), footer: /* @__PURE__ */ a(N, { primary: !0, onClick: () => it(null), children: n("done") }), children: Xe.items.length ? /* @__PURE__ */ a("div", { className: "gx-version-list gx-dependant-list", children: Xe.items.map((i) => /* @__PURE__ */ c("div", { className: "gx-dependant", children: [
      /* @__PURE__ */ a("strong", { children: i.fullName }),
      i.preferredVersion && /* @__PURE__ */ a("span", { className: "gx-muted", children: n("preferredVersion", { version: i.preferredVersion }) })
    ] }, i.fullName)) }) : /* @__PURE__ */ a("p", { children: n("noDependants") }) }),
    _e && /* @__PURE__ */ a(Yo, { items: _e.items, label: _e.label, point: _e.point, anchor: _e.anchor, onClose: () => Ve(null) })
  ] });
}
const Be = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new Map();
function aa(e, t) {
  et.set(e, t);
}
function Q(e) {
  return (e ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
function Ct(e, t) {
  try {
    const o = window.LocalizationManager, l = o?.m_mapTokens?.get?.(e) ?? o?.m_mapFallbackTokens?.get?.(e);
    if (typeof l == "string" && l.length > 0) return l;
  } catch {
  }
  return t;
}
function ia() {
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
  for (const [o, l] of [["AppProperties_GeneralPage", "General"], ["AppProperties_General", "General"]]) e.add(Q(Ct(o, l)));
  for (const [o, l] of [
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
  ]) t.add(Q(Ct(o, l)));
  return { general: e, secondary: t };
}
function hn(e, t, o) {
  kt.get(e) !== t && (kt.set(e, t), y.log(`properties: ${o}`).catch(() => {
  }));
}
function fn(e) {
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
  for (const o of t) if (Number.isSafeInteger(o) && o > 0 && o < 2147483648) return o;
}
function la(e, t = []) {
  const o = [e, ...t, ...Array.from(e.querySelectorAll("*")).slice(0, 300)], l = /* @__PURE__ */ new Set();
  for (const h of o) {
    if (l.has(h)) continue;
    l.add(h);
    const f = Object.keys(h).find((p) => p.startsWith("__reactFiber$") || p.startsWith("__reactInternalInstance$"));
    let w = f ? h[f] : void 0;
    for (let p = 0; w && p < 40; p++, w = w.return) {
      const u = fn(w.memoizedProps) ?? fn(w.pendingProps);
      if (u) return u;
    }
  }
  const r = (e.matches("[data-appid]") ? e : e.querySelector("[data-appid]"))?.getAttribute("data-appid") ?? void 0;
  if (r && /^\d+$/.test(r)) return Number(r);
  const d = (e.ownerDocument.defaultView?.location.pathname ?? "").match(/\/(?:library\/app|properties)\/(\d+)/);
  if (d) return Number(d[1]);
  for (const h of Array.from(e.querySelectorAll("img"))) {
    const f = h.src.match(/\/(?:apps|assets)\/(\d{2,9})\//);
    if (f) return Number(f[1]);
  }
}
function ra(e, t) {
  const l = [et.get(e)?.title, e.title, t.querySelector('h1,h2,[class*="Title"]')?.textContent], s = [Ct("AppProperties_Title", "Properties - %1$s"), "Properties - %1$s", "Properties: %1$s", "Свойства — %1$s", "Свойства: %1$s", "Eigenschaften – %1$s", "Eigenschaften: %1$s"], d = /* @__PURE__ */ new Set();
  for (const h of l) {
    const f = Q(h);
    if (!f || f === "steam") continue;
    let w = !1;
    for (const p of s) {
      const u = p.split("%1$s");
      if (u.length < 2) continue;
      const m = u.map((M) => M.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")), D = f.match(new RegExp("^\\s*" + m.join("\\s*(.+?)\\s*") + "\\s*$", "i"));
      if (D?.[1]) {
        d.add(Q(D[1])), w = !0;
        break;
      }
    }
    !w && !/properties|свойства|eigenschaften/.test(f) && d.add(f);
  }
  if (d.size)
    try {
      const h = window.appStore?.m_mapApps;
      if (!h?.forEach) return;
      let f;
      return h.forEach((w, p) => {
        if (f) return;
        const u = Number(p ?? w?.appid ?? w?.m_unAppID);
        if (!Number.isSafeInteger(u) || u <= 0 || u >= 2147483648) return;
        const m = Q(w?.display_name ?? w?.m_strDisplayName);
        m && d.has(m) && (f = u);
      }), f;
    } catch {
      return;
    }
}
function sa(e, t) {
  let o = e;
  for (; o.parentElement && o.parentElement !== t; ) o = o.parentElement;
  return o.parentElement === t ? o : e;
}
function da(e) {
  const { general: t, secondary: o } = ia(), l = Array.from(e.querySelectorAll("*")).filter((s) => {
    const d = Q(s.textContent);
    if (!t.has(d) && !o.has(d) || s.closest('[role="tabpanel"],[data-galex-properties],[class*="TabContent"],[class*="tab-content"]')) return !1;
    const h = s.parentElement;
    return !(h && Q(h.textContent) === d);
  }), r = l.filter((s) => t.has(Q(s.textContent)));
  for (const s of r) {
    let d = s;
    for (let h = 0; d && h < 8; h++, d = d.parentElement) {
      if (d.querySelectorAll("*").length > 300) continue;
      const f = l.filter((u) => d.contains(u));
      if (f.length < 2) continue;
      const w = Array.from(new Set(f.map((u) => sa(u, d)))), p = w.map((u) => Q(u.textContent));
      if (p.some((u) => t.has(u)) && p.some((u) => o.has(u))) return { list: d, tabs: w };
    }
  }
}
function ca(e) {
  const t = new Set(Array.from(e.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"],[class*="DialogBody"]')));
  return et.get(e)?.allowBodyFallback && e.body && t.add(e.body), Array.from(t);
}
function pa(e) {
  return Array.from(e.dialog.querySelectorAll('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"],[class*="TabContent"],[class*="tab-content"]')).filter((t) => t !== e.panel && !t.contains(e.panel) && !t.hasAttribute("data-galex-properties"));
}
function Mt(e) {
  const t = Array.from(e.querySelectorAll('[role="tabpanel"],[class*="DialogContent"]')).filter((o) => o.classList.contains("DialogContent") && !o.hasAttribute("data-galex-properties"));
  return t.find((o) => o.style.display !== "none" && !o.hidden) ?? t[0];
}
function ua(e) {
  return e.querySelector(".DialogBody") ?? e.querySelector(".DialogContent_InnerWidth") ?? e;
}
function Ft(e) {
  const t = ua(e), o = e.querySelector(".DialogHeader");
  return { shell: e, body: t, header: o ?? null, headerText: o?.textContent ?? "", shellStyle: { display: e.style.display, hidden: e.hidden }, bodyStyle: { display: t.style.display, hidden: t.hidden }, labelledBy: e.getAttribute("aria-labelledby"), id: e.id, children: /* @__PURE__ */ new Map() };
}
function Ke(e) {
  let t = e.adopted;
  if (!t) return;
  if (!t.shell.isConnected) {
    const l = Mt(e.dialog);
    if (!l) return;
    e.panel = l, e.adopted = t = Ft(l);
  }
  t.shell.getAttribute("data-galex-properties") !== "panel" && t.shell.setAttribute("data-galex-properties", "panel"), t.shell.getAttribute("aria-labelledby") !== e.tab.id && t.shell.setAttribute("aria-labelledby", e.tab.id), t.shell.hidden && (t.shell.hidden = !1), t.shell.style.display === "none" && (t.shell.style.display = t.shellStyle.display);
  for (const l of Array.from(t.body.children)) {
    const r = l;
    r !== e.mount && (t.children.has(r) || t.children.set(r, { display: r.style.display, hidden: r.hidden }), r.style.display !== "none" && (r.style.display = "none"), r.hidden || (r.hidden = !0));
  }
  e.mount.parentElement !== t.body && t.body.appendChild(e.mount), e.mount.hidden && (e.mount.hidden = !1), t.header && t.header.textContent !== n("mods") && (t.header.textContent = n("mods"));
  const o = t.shell.id || e.tab.getAttribute("aria-controls");
  o && e.tab.getAttribute("aria-controls") !== o && (e.tab.setAttribute("aria-controls", o), e.tab.querySelectorAll("[aria-controls]").forEach((l) => {
    l.getAttribute("aria-controls") !== o && l.setAttribute("aria-controls", o);
  }));
}
function ga(e) {
  const t = e.adopted;
  t && (t.children.forEach((o, l) => {
    l.isConnected && (l.style.display = o.display, l.hidden = o.hidden);
  }), t.children.clear(), t.header && t.header.isConnected && (t.header.textContent = t.headerText), e.mount.remove(), t.shell.isConnected && (t.shell.removeAttribute("data-galex-properties"), t.labelledBy === null ? t.shell.removeAttribute("aria-labelledby") : t.shell.setAttribute("aria-labelledby", t.labelledBy), t.shell.style.display = t.shellStyle.display, t.shell.hidden = t.shellStyle.hidden));
}
function ma(e, t) {
  const l = e.dialog.ownerDocument.createElement("div");
  l.className = "gx-adopted-mount", l.setAttribute("data-galex-mount", ""), l.hidden = !0;
  const r = e.active;
  Gn(e), e.resize?.disconnect(), e.resize = void 0;
  const s = e.panel, d = e.root;
  e.adopted = Ft(t), e.panel = t, e.mount = l, e.root = Qe(l), e.sizePanel = () => {
  };
  try {
    d.unmount();
  } catch {
  }
  s.remove(), r && (Ke(e), Ye(e));
}
function Ye(e) {
  for (const t of pa(e))
    e.hidden.has(t) || e.hidden.set(t, { display: t.style.display, hidden: t.hidden }), t.style.display !== "none" && (t.style.display = "none");
}
function Gn(e) {
  e.hidden.forEach((t, o) => {
    o.style.display = t.display, o.hidden = t.hidden;
  }), e.hidden.clear();
}
function ha(e) {
  return /Active|Selected|Current/.test(e) || /^(active|selected|current)$/i.test(e) || /[_-](active|selected|current)([_-]|$)/i.test(e);
}
function St(e, t, o = []) {
  for (const l of [e, ...Array.from(e.querySelectorAll("*"))]) {
    const r = l.getAttribute("class");
    if (!r) continue;
    const s = r.split(/\s+/).filter(Boolean), d = s.filter((h) => !ha(h) && !o.includes(h));
    d.length !== s.length && (t && !t.has(l) && t.set(l, r), d.length ? l.setAttribute("class", d.join(" ")) : l.removeAttribute("class"));
  }
}
function En(e) {
  for (const t of e.nativeTabs) St(t, e.nativeClasses, e.selectedDelta);
  e.list.querySelectorAll('[role="tab"]').forEach((t) => {
    t !== e.tab && (St(t, e.nativeClasses, e.selectedDelta), t.setAttribute("aria-selected", "false"));
  });
}
function Fn(e, t) {
  const { tab: o, selectedDelta: l } = e, r = l.length > 0;
  o.classList.toggle("gx-tab-active", t && !r);
  for (const s of l) o.classList.toggle(s, t);
  for (const s of [o, ...Array.from(o.querySelectorAll('[role="tab"]'))]) s.setAttribute("aria-selected", t ? "true" : "false");
}
function fa(e) {
  e.nativeClasses.forEach((t, o) => {
    o.isConnected && o.setAttribute("class", t);
  }), e.nativeClasses.clear();
}
function Bn(e) {
  e.active && (e.active = !1, e.adopted ? ga(e) : e.panel.hidden = !0, Fn(e, !1), fa(e), Gn(e));
}
function xa(e) {
  if (e.active) {
    e.adopted ? Ke(e) : e.panel.hidden = !1, Ye(e);
    return;
  }
  e.adopted && Ke(e), Ye(e), En(e), e.active = !0, e.adopted || (e.panel.hidden = !1), e.sizePanel(), Fn(e, !0);
}
function xn(e, t, o) {
  e.root.render(V(It.Provider, { value: e.dialog.ownerDocument }, V(Dt, null, V(oa, { key: `${e.slug}-${e.appid}`, game: t, installing: o, embedded: !!e.adopted }))));
}
function Nt(e) {
  Bn(e), e.resize?.disconnect(), e.list.removeEventListener("click", e.onNativeClick, !0), Be.delete(e.dialog);
  const { root: t, tab: o, panel: l, mount: r, adopted: s } = e;
  queueMicrotask(() => {
    try {
      t.unmount();
    } catch {
    }
    o.remove(), s ? r.remove() : l.remove();
  });
}
function ba(e, t) {
  const o = Q(t), l = n("mods"), r = Array.from(e.querySelectorAll("*")).filter((d) => Q(d.textContent) === o), s = r[r.length - 1];
  s ? s.textContent = l : e.textContent = l;
}
function bn(e) {
  return (e.getAttribute("class") ?? "").split(/\s+/).filter(Boolean);
}
function va(e) {
  const t = e.find((r) => r.getAttribute("aria-selected") === "true"), o = e.find((r) => r.getAttribute("aria-selected") === "false");
  if (!t || !o) return [];
  const l = new Set(bn(o));
  return bn(t).filter((r) => !l.has(r));
}
function zn(e) {
  const { snapshot: t } = xt();
  for (const [s, d] of Array.from(Be)) {
    if (!e.contains(s)) continue;
    if (!s.isConnected || !d.tab.isConnected || !d.list.isConnected) {
      Nt(d);
      continue;
    }
    const h = t?.ok ? sn(t, d.appid) : void 0;
    if (!h) {
      Nt(d);
      continue;
    }
    if (!d.adopted) {
      const f = Mt(s);
      f && ma(d, f);
    }
    d.active && (d.adopted && Ke(d), Ye(d), En(d)), xn(d, h, t.installing);
  }
  if (!t?.ok) return;
  const o = ca(e), l = [];
  let r = 0;
  for (const s of o) {
    if (Be.has(s) || s.querySelector("[data-galex-properties]")) continue;
    const d = da(s);
    if (!d) {
      l.push("no-tablist");
      continue;
    }
    const h = la(s, d.tabs) ?? ra(e, s);
    if (!h) {
      l.push("no-appid");
      continue;
    }
    const f = sn(t, h);
    if (!f) {
      l.push(`unsupported:${h}`);
      continue;
    }
    const w = d.tabs.find((B) => /workshop|мастерская/i.test(B.textContent ?? "")) ?? d.tabs[0], p = Q(w.textContent), u = va(d.tabs), m = w.cloneNode(!0);
    St(m, void 0, u), m.querySelectorAll("[id]").forEach((B) => B.removeAttribute("id")), m.querySelectorAll("[aria-controls]").forEach((B) => B.setAttribute("aria-controls", `galex-panel-${h}`)), m.removeAttribute("id"), m.removeAttribute("href"), m.setAttribute("role", "tab"), m.setAttribute("aria-selected", "false"), m.setAttribute("data-galex-properties", "tab"), m.id = `galex-tab-${h}`, m.setAttribute("aria-controls", `galex-panel-${h}`), ba(m, p), m.tagName === "A" && m.setAttribute("href", "#galex-mods"), d.list.appendChild(m);
    const D = Mt(s);
    let M, L, b, x, C, E;
    D ? (L = e.createElement("div"), L.className = "gx-adopted-mount", L.setAttribute("data-galex-mount", ""), L.hidden = !0, b = Ft(D), M = D, x = Qe(L), C = () => {
    }) : (M = e.createElement("div"), M.id = `galex-panel-${h}`, M.setAttribute("role", "tabpanel"), M.setAttribute("aria-labelledby", m.id), M.setAttribute("data-galex-properties", "panel"), M.className = "gx-injected-panel", M.hidden = !0, M.style.flex = "1", M.style.minHeight = "0", M.style.overflow = "hidden", (s.querySelector('[role="tabpanel"],[class*="TabContent"],[class*="tab-content"]')?.parentElement ?? d.list.parentElement?.parentElement ?? d.list.parentElement)?.appendChild(M), L = M, x = Qe(M), C = () => {
      const oe = M.parentElement, xe = e.defaultView;
      if (!oe || !xe) return;
      const de = xe.getComputedStyle(oe), tt = xe.getComputedStyle(s), be = (T) => Number.parseFloat(T) || 0, ve = be(de.paddingTop) + be(de.paddingBottom), Pe = Math.max(0, oe.clientHeight - ve), F = Math.floor(s.getBoundingClientRect().bottom - oe.getBoundingClientRect().top - be(de.paddingBottom) - be(tt.paddingBottom)), ce = F > 0 ? Math.min(Pe || F, F) : Pe;
      ce > 0 && (M.style.height = `${ce}px`);
    }, typeof ResizeObserver == "function" && M.parentElement && (E = new ResizeObserver(C), E.observe(M.parentElement), E.observe(s), C()));
    const j = { dialog: s, list: d.list, tab: m, nativeTabs: d.tabs, panel: M, mount: L, adopted: b, root: x, appid: f.steamAppId, slug: f.slug, active: !1, hidden: /* @__PURE__ */ new Map(), nativeClasses: /* @__PURE__ */ new Map(), selectedDelta: u, resize: E, sizePanel: C, onNativeClick: (B) => {
      const ne = B.target;
      ne?.closest?.('[data-galex-properties="tab"]') || (ne?.closest?.('[role="tab"],button,a') || d.tabs.some((oe) => ne && oe.contains(ne))) && Bn(j);
    } };
    Be.set(s, j), xn(j, f, t.installing), r++, m.addEventListener("click", (B) => {
      B.preventDefault(), B.stopPropagation(), xa(j);
    }), d.list.addEventListener("click", j.onNativeClick, !0), hn(e, `injected:${h}`, `tab injected appid=${h} slug=${f.slug}`);
  }
  if (o.length && et.get(e)?.allowBodyFallback) {
    const s = `${o.length}/${r}/${l.slice(0, 4).join(",")}`;
    hn(e, s, `dialogs=${o.length} injected=${r} skipped=${l.slice(0, 4).join(",") || "none"}`);
  }
}
function vn(e) {
  const t = Me.get(e);
  !t || t.timer || (t.timer = window.setTimeout(() => {
    t.timer = 0, zn(e);
  }, 180));
}
function wn(e = document) {
  if (Me.has(e)) return Me.get(e).dispose;
  const t = new MutationObserver(() => vn(e));
  t.observe(e.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["role", "data-appid", "src", "style", "hidden", "class"] });
  const o = () => {
    const l = Me.get(e);
    l?.timer && clearTimeout(l.timer), t.disconnect();
    for (const [r, s] of Array.from(Be))
      e.contains(r) && Nt(s);
    Me.delete(e), kt.delete(e);
  };
  return Me.set(e, { observer: t, timer: 0, dispose: o }), vn(e), o;
}
function wa(e = document) {
  zn(e);
}
const yn = "galex-styles";
function kn(e, t = document) {
  if (typeof t > "u") return;
  const o = t.getElementById(yn);
  if (o) {
    o.textContent = e;
    return;
  }
  const l = t.createElement("style");
  l.id = yn, l.textContent = e, t.head.appendChild(l);
}
const Cn = ".galex{--gx-text:var(--gpColor-White,#dfe3e8);--gx-muted:var(--gpColor-Neutral,#9ba8b5);--gx-line:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control-hover:var(--gpBackground-Color-Solid,rgba(255,255,255,.14));--gx-accent:var(--gpColor-Blue,#66c0f4);--gx-danger:var(--gpColor-Red,#d94b4b);color:var(--gx-text);font-family:inherit;font-size:14px;line-height:1.45;box-sizing:border-box;container-type:inline-size}.galex *,.galex *:before,.galex *:after{box-sizing:border-box}.galex h1,.galex h2,.galex h3,.galex p{margin:0}.galex button,.galex input,.galex select,.galex textarea{font:inherit;color:inherit}.galex button{cursor:pointer}.galex button:disabled{cursor:default;opacity:.45}.galex svg{flex-shrink:0;vertical-align:middle}.galex :focus-visible{outline:2px solid var(--gx-accent);outline-offset:2px}.gx-native-button{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;gap:6px;width:auto;min-width:0;max-width:100%;padding:0}.gx-native-button button,.gx-native-button>button{width:auto;min-width:0;min-height:32px;padding:6px 12px;white-space:nowrap}.galex [class*=DialogButton]:not(.gx-icon-button){flex:0 0 auto;margin:0;width:auto;min-width:0;max-width:100%}.galex [class*=DialogButton]:not(.gx-icon-button)>button{width:auto;min-width:0}.gx-native-select{flex:0 0 auto;min-width:120px;max-width:240px}.gx-native-select>div{min-width:0}.gx-native-input{width:100%}.gx-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:34px;padding:6px 14px;border:1px solid transparent;border-radius:3px;background:var(--gx-control);color:var(--gx-text);white-space:nowrap}.gx-button:hover:not(:disabled){background:var(--gx-control-hover)}.gx-button--primary{background:var(--gx-accent);color:#fff}.gx-button.gx-danger{background:var(--gx-danger);color:#fff}.gx-icon-button{display:inline-flex;flex:0 0 32px;align-items:center;justify-content:center;width:32px;min-width:32px;height:32px;padding:0;border:0;border-radius:3px;background:transparent;color:var(--gx-muted)}.gx-icon-button button,.gx-icon-button>button{width:32px;min-width:32px;height:32px;padding:0}.gx-icon-button:hover:not(:disabled){background:var(--gx-control);color:var(--gx-text)}.gx-muted{color:var(--gx-muted);font-size:12px}.gx-text-danger{color:var(--gx-danger)}.galex select,.gx-input,.galex input[type=text],.galex input[type=number],.galex textarea{min-height:32px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:4px 9px}.galex select{max-width:220px}.galex textarea{width:100%;resize:vertical}.gx-checkbox{width:18px;height:18px;margin:0;accent-color:var(--gx-accent);cursor:pointer}.gx-toggle{display:inline-flex;align-items:center}.gx-toggle input{width:18px;height:18px;accent-color:var(--gx-accent)}.gx-mods{display:flex;flex-direction:column;height:100%;min-height:0;min-width:0;padding:10px 24px 24px;overflow:hidden;--gx-text:var(--gpColor-White,#dfe3e6);--gx-muted:var(--gpColor-Neutral,#8b929a);--gx-control:var(--gpBackground-Color-Soft,rgba(59,63,72,.5));--gx-control-hover:var(--gpBackground-Color-Solid,#464d58);color:var(--gx-muted);font-size:14px;font-weight:400}.gx-heading{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:10px 0;flex-shrink:0}.gx-heading h1{font-size:22px;font-weight:700;line-height:28px;color:var(--gx-text)}.gx-heading-meta{font-size:12px;color:var(--gx-muted);white-space:nowrap}.gx-toolbar{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;align-items:stretch;min-width:0;flex-shrink:0}.gx-toolbar>.gx-button,.gx-toolbar>.gx-native-button{width:100%;min-width:0;max-width:100%;margin:0}.gx-toolbar>.gx-button{border:0;color:var(--gx-text)}.gx-toolbar>.gx-native-button{display:flex}.gx-mods .gx-toolbar [class*=DialogButton]:not(.gx-icon-button){width:100%;min-width:0;max-width:100%;margin:0;background:var(--gx-control);color:var(--gx-text)}.gx-toolbar>.gx-button,.gx-toolbar>.gx-native-button,.gx-toolbar>.gx-native-button>button,.gx-mods .gx-toolbar [class*=DialogButton]:not(.gx-icon-button){min-height:34px;padding:8px 14px;font-size:13px;line-height:18px;white-space:normal}.gx-chevron-open{transform:rotate(180deg)}.gx-advanced{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px 0 0;flex-shrink:0}.gx-profile-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;min-width:0;padding:12px;border-radius:2px;background:var(--gpBackground-Color-Medium,#23262e)}.gx-profile-line{display:flex;align-items:center;gap:12px;flex:1 1 220px;min-width:0}.gx-field-label{font-size:14px;line-height:18px;color:var(--gx-text)}.gx-profile-line select{flex:1;max-width:260px;min-width:120px}.gx-profile-actions{display:flex;flex:0 1 auto;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:4px;min-width:0;max-width:60%;margin-left:auto}.gx-profile-actions [class*=DialogButton]:not(.gx-danger){flex:0 1 auto;margin:0;width:auto;min-width:0;max-width:100%;background:var(--gx-control);color:var(--gx-text)}.gx-profile-actions [class*=DialogButton]>button{width:auto;min-width:0}.gx-profile-actions>.gx-native-button,.gx-profile-actions>.gx-button{flex:0 1 auto;width:auto;min-width:0}.gx-profile-actions .gx-danger{background:var(--gx-danger);color:#fff}.gx-profile-actions .gx-button,.gx-profile-actions>.gx-native-button,.gx-profile-actions .gx-native-button>button,.gx-profile-actions [class*=DialogButton]{min-height:34px;padding:8px 14px;font-size:13px;line-height:18px;white-space:normal}.gx-search-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding-top:8px;flex-shrink:0}.gx-filter-group{display:flex;align-items:center;gap:12px;flex:1 1 260px;min-width:0;max-width:400px}.gx-filter-group>.gx-field-label{margin:0;white-space:nowrap}.gx-filter-group>.gx-native-select{flex:1 1 0;min-width:0;max-width:none}.gx-search{display:flex;align-items:center;gap:0;flex:2 1 0;min-width:0;max-width:296px;height:auto;padding:0;border:0;border-radius:0;background:transparent;color:var(--gx-text)}.gx-search input{flex:1;min-width:0}.gx-mods .gx-search input.DialogInput{border:0;border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:8px;min-height:38px;font-size:14px;font-weight:300;line-height:22px}.gx-mods .gx-search input.DialogInput:focus{outline:none;background:var(--gx-control-hover);box-shadow:inset 1px 1px 8px #000000ab}.gx-search button{border:0;background:none;color:var(--gx-muted);padding:2px;margin-left:4px}.gx-sort-direction{flex:0 0 34px;width:34px;min-width:34px;padding:0}.gx-sort-direction button{width:34px;min-width:34px;padding:0}.gx-list-heading{display:flex;align-items:center;gap:12px;min-height:38px;color:var(--gx-muted);font-size:12px;flex-shrink:0}.gx-list-heading>.gx-icon-button{margin-left:auto}.gx-update-link{display:inline-flex;gap:5px;align-items:center;border:0;background:none;color:var(--gx-accent);font-size:12px;padding:2px 4px}.gx-update-link:hover{text-decoration:underline}.gx-mod-list{display:flex;flex-direction:column;gap:2px;flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--gpBackground-Color-Dark,#0e141b);box-shadow:inset 0 4px 4px #00000040;font-size:13px}.gx-mod-list::-webkit-scrollbar{height:12px;width:14px;background:transparent;z-index:12;overflow:visible}.gx-mod-list::-webkit-scrollbar-thumb{width:10px;background-color:#3d4450;border-radius:10px;border:4px solid transparent;background-clip:padding-box;transition:background-color .32s ease-in-out;margin:4px;min-height:32px;min-width:32px}.gx-mod-list::-webkit-scrollbar-thumb:hover{background-color:#464d58;background-clip:padding-box}.gx-mod-row{display:flex;flex:0 0 80px;align-items:center;justify-content:flex-start;height:80px;min-height:80px;padding:0;gap:0;background:var(--gpBackground-Color-Medium,#23262e);border-bottom:0}.gx-mod-row>[class*=DialogCheckbox],.gx-mod-row>.gx-checkbox{flex:0 0 22px;width:22px;height:22px;margin:8px}.gx-mod-index{display:flex;align-items:center;justify-content:center;flex:0 0 20px;width:20px;margin:4px;font-size:16px;line-height:20px;color:unset}.gx-mod-avatar{width:48px;height:48px;min-width:48px;max-width:84px;flex-shrink:0;margin:4px 7px 4px 4px;border-radius:0;object-fit:cover;background:#000;display:flex;align-items:center;justify-content:center;color:var(--gx-muted);font-weight:600}.gx-mod-row.is-disabled .gx-mod-avatar,.gx-mod-row.is-disabled .gx-mod-info{opacity:.55}.gx-mod-info{flex:1 1 0;min-width:0;padding-right:4px;overflow:hidden}.gx-mod-title{display:flex;align-items:center;gap:7px;min-width:0}.gx-mod-title h3{font-size:13px;line-height:16px;font-weight:400;color:var(--gx-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-info>p{font-size:12px;line-height:16px;color:#969696;padding-top:4px;margin:0;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-byline{display:flex;flex-wrap:nowrap;gap:4px;font-size:12px;line-height:16px;color:#969696;padding-top:4px;margin:0;overflow:hidden}.gx-mod-byline>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-badge{font-size:10px;padding:1px 5px;border-radius:2px;border:1px solid var(--gx-line);color:var(--gx-muted);white-space:nowrap}.gx-badge--update{color:var(--gx-accent);border-color:var(--gx-accent)}.gx-mod-size{display:flex;align-items:center;flex:0 1 auto;min-width:70px;margin:4px 16px 4px 4px;text-align:right;font-size:12px;line-height:16px;color:unset}.gx-mod-actions{display:flex;align-items:center;flex-shrink:0;padding:4px}.gx-mod-actions .gx-icon-button{width:36px;height:36px;min-width:36px;flex-basis:36px;margin:8px;padding:0;border-radius:2px;background:var(--gpBackground-Color-Solid,#3d4450);color:var(--gx-text)}.gx-mod-actions .gx-icon-button button,.gx-mod-actions .gx-icon-button>button{width:36px;height:36px;min-width:36px;padding:0}.gx-mod-actions .gx-icon-button svg{width:24px;height:24px}.gx-mod-actions .gx-icon-button:hover:not(:disabled){background:var(--gx-control-hover);color:#fff}.gx-context-menu{position:absolute;z-index:2147483647;min-width:184px;max-width:min(320px,calc(100vw - 16px));max-height:calc(100vh - 16px);overflow-y:auto;padding:4px;border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,#1b2838);box-shadow:0 8px 24px #00000080;font-size:13px}.gx-context-menu--root{position:fixed}.gx-context-menu--submenu-open{overflow:visible}.gx-context-menu-item-wrap{position:relative}.gx-context-menu-item{display:flex;align-items:center;gap:8px;width:100%;padding:6px 10px;border:0;border-radius:2px;background:transparent;color:var(--gx-text);text-align:left;white-space:nowrap}.gx-context-menu-item:hover:not(:disabled),.gx-context-menu-item:focus-visible{background:var(--gx-control-hover);outline:none}.gx-context-menu-item--danger{color:var(--gx-danger)}.gx-context-menu-icon{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;flex:0 0 16px}.gx-context-menu-arrow{margin-left:auto}.gx-context-submenu{position:absolute;left:calc(100% - 4px);top:-5px}.gx-dependant{display:flex;flex-direction:column;gap:2px;padding:6px 8px;background:var(--gx-control);border-radius:2px}.gx-notice{display:flex;align-items:center;gap:8px;padding:8px 10px;margin:8px 0;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:13px}.gx-notice--error{border-color:var(--gx-danger);color:var(--gx-danger)}.gx-notice button{margin-left:auto;border:0;background:none;color:var(--gx-accent)}.gx-empty{padding:32px 12px;text-align:center;color:var(--gx-muted)}.gx-modal-backdrop{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;background:#000000a6}.gx-modal{display:flex;flex-direction:column;width:min(580px,100%);max-height:min(84vh,760px);border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,#1b2838);box-shadow:0 8px 40px #00000080}.gx-modal>header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--gx-line)}.gx-modal h2{font-size:17px;font-weight:500}.gx-modal-body{padding:16px 18px;overflow-y:auto;min-height:0}.gx-modal>footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid var(--gx-line)}.gx-form-label{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--gx-muted);margin-bottom:12px}.gx-form-label input,.gx-form-label textarea,.gx-form-label select{color:var(--gx-text)}.gx-check-label{display:flex;align-items:center;gap:8px;font-size:13px;margin:8px 0}.gx-import-summary{display:flex;flex-direction:column;gap:4px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code{display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code code{flex:1;min-width:0;overflow-wrap:anywhere;font-family:monospace}.gx-version-list{display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto;margin-top:10px}.gx-file-list{max-height:220px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px;padding:6px;margin:8px 0}.gx-file-list label{display:flex;align-items:center;gap:8px;padding:3px 2px;font-size:12px}.gx-file-list span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}.gx-tabs button[aria-selected=true]{background:var(--gx-control-hover);border-color:var(--gx-accent)}.gx-global-settings{height:100%;min-height:0;overflow-y:auto;padding:0;font-size:14px}.MillenniumDesktopSidebar_EditorContent>.gx-global-settings{margin:-24px -20px -20px;padding:12px 16px 16px}.gx-settings-header{display:flex;align-items:center;gap:8px;margin-bottom:6px}.gx-settings-header h1{font-size:18px;font-weight:500;margin-right:auto}.gx-settings-section{margin:12px 0;padding-bottom:10px;border-bottom:1px solid var(--gx-line)}.gx-settings-section h2{font-size:15px;font-weight:500;margin-bottom:6px}.gx-setting{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:6px 0}.gx-setting>div{display:flex;flex-direction:column;gap:2px;min-width:0}.gx-setting strong{font-size:14px;font-weight:500}.gx-setting small{color:var(--gx-muted);font-size:12px}.gx-connection{display:inline-flex;align-items:center;gap:6px;color:var(--gx-muted);font-size:12px;white-space:nowrap}.gx-status-dot{width:7px;height:7px;border-radius:50%;background:var(--gpColor-Green,#5ba32b)}.gx-path{display:block;padding:6px 8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:12px;overflow-wrap:anywhere;color:var(--gx-muted)}.gx-settings-actions{display:flex;gap:8px;margin:8px 0}.gx-settings-bottom{color:var(--gx-muted);font-size:12px;margin-top:10px}.gx-success{display:flex;align-items:center;gap:6px;color:var(--gpColor-Green,#5ba32b);font-size:12px;margin:6px 0}.gx-settings-intro{color:var(--gx-muted);font-size:12px;margin-bottom:8px}.gx-games{margin-top:8px}.gx-games summary{cursor:pointer;font-size:13px}.gx-games summary span{color:var(--gx-muted);margin-left:6px}.gx-game-list{list-style:none;margin:6px 0 0;padding:0;max-height:180px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px}.gx-game-list li{display:flex;justify-content:space-between;gap:8px;padding:4px 8px;font-size:12px;border-bottom:1px solid var(--gx-line)}.gx-game-list li:last-child{border-bottom:0}.gx-game-list span{color:var(--gx-muted)}[data-galex-properties=tab]{cursor:pointer;user-select:none}[data-galex-properties=tab].gx-tab-active{color:var(--gpColor-White,#fff);background:var(--gpBackground-Color-Soft,rgba(255,255,255,.08))}.gx-injected-panel{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;height:100%;max-height:100%;overflow:hidden;color:var(--gx-text,#dfe3e8)}.gx-injected-panel[hidden]{display:none!important}.gx-adopted-mount{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0}.gx-adopted-mount[hidden]{display:none!important}.gx-mods.gx-mods--embedded{padding:0}@container (max-width:480px){.gx-mods:not(.gx-mods--embedded){padding:12px}.gx-toolbar{grid-template-columns:1fr}.gx-mod-index,.gx-mod-size{display:none}.gx-mod-info>p{display:none}.gx-profile-actions{flex-basis:100%;max-width:100%}.gx-profile-actions .gx-button,.gx-profile-actions .gx-native-button{flex:0 1 auto}.gx-filter-group{flex-basis:100%;max-width:none}.gx-search{max-width:none}}.gx-downloads{margin:0 0 16px;padding:14px 16px;border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,rgba(0,0,0,.2))}.gx-downloads-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:4px}.gx-downloads-header h2{font-size:18px;font-weight:500}.gx-download-graphs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:10px 0}.gx-sparkline{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:8px;font-size:12px;color:var(--gx-muted)}.gx-sparkline svg{width:100%;height:32px;color:var(--gx-accent);background:var(--gx-control);border-radius:2px}.gx-sparkline strong{color:var(--gx-text);font-weight:500;white-space:nowrap}.gx-download-card{display:flex;gap:12px;align-items:center;padding:10px;margin-top:8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control)}.gx-download-card.is-error{border-color:var(--gx-danger)}.gx-download-cover{width:92px;height:43px;flex:0 0 92px;object-fit:cover;border-radius:2px;background:var(--gx-control-hover)}.gx-download-cover--fallback{display:flex;align-items:center;justify-content:center;color:var(--gx-muted)}.gx-download-body{flex:1;min-width:0}.gx-download-body header{display:flex;align-items:baseline;gap:8px;min-width:0}.gx-download-body h3{font-size:15px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-task{font-size:12px;color:var(--gx-muted);margin:2px 0 6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-meta{display:flex;justify-content:space-between;gap:8px;font-size:12px;color:var(--gx-muted);margin-top:4px}.gx-progress{width:100%;height:8px;accent-color:var(--gx-accent)}@container (max-width:640px){.gx-download-graphs{grid-template-columns:1fr}.gx-download-cover{display:none}}", W = "GaleX";
function ya() {
  return { title: "GaleX", icon: V(J, { name: "package", size: 18 }), content: V(Dt, null, V(Fo)), linkQueued: (e) => (ft(), !0) };
}
async function ka() {
  window.__GALEX_STEAM__?.dispose(), _o(), await Po();
  const e = [], t = [];
  let o = !1, l = !1;
  const r = Bo();
  e.push(r);
  const s = Uo();
  e.push(s);
  const d = ya(), h = window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[W], f = window.PLUGIN_LIST?.[W];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS ??= {})[W] = d, (window.PLUGIN_LIST ??= {})[W] = { ...f, ...d };
  const w = /* @__PURE__ */ new Set([document]);
  kn(Cn, document);
  const p = (b) => {
    if (o || l || !b.body) return;
    l = !0;
    const x = b.createElement("div");
    x.id = "galex-link-installer", b.body.appendChild(x);
    const C = Qe(x);
    t.push(C), C.render(V(It.Provider, { value: b }, V(Dt, null, V($o)))), e.push(() => x.remove());
  }, u = (b, x) => {
    if (o || w.has(b)) return;
    const C = String(x?.m_strName ?? x?.name ?? ""), E = String(x?.m_strTitle ?? x?.title ?? b.title ?? ""), j = C.includes("SP Desktop") && !C.includes("Login");
    aa(b, { name: C, title: E, allowBodyFallback: b !== document && !j }), w.add(b), kn(Cn, b), e.push(wn(b)), j && p(b), y.log(`window observed name=${C || "?"} title=${E || "?"} body=${!!b.body} linkRoot=${l}`).catch(() => {
    });
  }, m = (b, x) => {
    if (o || !b) return;
    const C = () => {
      if (!o && b.document?.body)
        try {
          u(b.document, x);
        } catch (E) {
          console.warn("[GaleX] Cannot inspect property window", E), y.log(`window inspect failed: ${String(E)}`).catch(() => {
          });
        }
    };
    if (b.document?.body) {
      C();
      return;
    }
    b.addEventListener?.("DOMContentLoaded", C, { once: !0 }), b.addEventListener?.("load", C, { once: !0 }), e.push(() => {
      b.removeEventListener?.("DOMContentLoaded", C), b.removeEventListener?.("load", C);
    });
  };
  e.push(wn(document));
  try {
    const b = Z()?.routerHook;
    if (typeof b?.addPatch == "function") {
      const x = (C) => ({ ...C, children: V(Qo, null, C.children) });
      b.addPatch("/library/downloads", x, 7), e.push(() => {
        try {
          b.removePatch?.("/library/downloads", x, 7);
        } catch {
        }
      });
    }
  } catch (b) {
    console.warn("[GaleX] Downloads route patch unavailable", b);
  }
  try {
    const b = Z(), x = b?.Millennium?.AddWindowCreateHook ?? b?.AddWindowCreateHook ?? window.Millennium?.AddWindowCreateHook;
    typeof x == "function" ? x((C) => {
      m(C?.window ?? C?.document?.defaultView ?? C?.BrowserWindow ?? C?.m_popup?.window ?? C?.m_popup ?? C?.m_BrowserWindow, C);
    }) : console.warn("[GaleX] Window hook unavailable; observing the main Steam document only");
  } catch (b) {
    console.warn("[GaleX] Window hook unavailable", b);
  }
  const D = window.setTimeout(() => p(document), 3e3);
  e.push(() => window.clearTimeout(D)), e.push(Ro(() => {
    for (const b of w)
      if (!b.defaultView?.closed)
        try {
          wa(b);
        } catch {
        }
  }));
  const M = () => {
    o || (o = !0, e.reverse().forEach((b) => {
      try {
        b();
      } catch {
      }
    }), t.forEach((b) => {
      try {
        b.unmount();
      } catch {
      }
    }), h === void 0 ? delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[W] : window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS[W] = h, f === void 0 ? delete window.PLUGIN_LIST?.[W] : window.PLUGIN_LIST[W] = f, delete window.__GALEX_STEAM__, window.GaleX?.dispose === M && delete window.GaleX);
  };
  window.__GALEX_STEAM__ = { dispose: M }, window.GaleX = { openSettings: () => {
    const b = Z();
    b?.Millennium?.openQuickAccess?.({ plugin: W }) ?? b?.openQuickAccess?.({ plugin: W }) ?? window.Millennium?.openQuickAccess?.({ plugin: W });
  }, openProperties: () => Z()?.Navigation?.NavigateToAppProperties?.(), dispose: M }, console.info("[GaleX] frontend 0.3.7 mounted"), y.log(`frontend 0.3.7 mounted; url=${location.href}`).catch(() => {
  });
  const L = window.MILLENNIUM_BACKEND_IPC;
  return typeof L?.postMessage == "function" ? Promise.resolve(L.postMessage(1, { pluginName: W })).then(() => console.info("[GaleX] backend notified that the frontend is loaded")).catch((b) => console.warn("[GaleX] Frontend-loaded notification failed", b)) : console.warn("[GaleX] Millennium backend IPC is unavailable"), d;
}
async function Ca() {
  return document.body || await new Promise((e) => document.addEventListener("DOMContentLoaded", () => e(), { once: !0 })), ka();
}
let qe;
function Ma() {
  return qe || (qe = Ca().catch((e) => {
    throw qe = void 0, e;
  })), qe;
}
Ma().catch((e) => console.error("[GaleX] Startup failed", e));
export {
  Ma as default
};
