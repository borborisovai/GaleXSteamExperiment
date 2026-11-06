const P = window.SP_REACT;
P || console.error("[GaleX] window.SP_REACT is missing — is Millennium loaded?");
const Q = P.createElement;
P.cloneElement;
const qn = P.createContext;
P.createRef;
P.forwardRef;
P.memo;
const jn = P.useCallback, Qn = P.useContext;
P.useDebugValue;
P.useDeferredValue;
const te = P.useEffect;
P.useId;
P.useImperativeHandle;
P.useLayoutEffect;
const on = P.useMemo;
P.useReducer;
const Ke = P.useRef, x = P.useState, pt = P.useSyncExternalStore;
P.useTransition;
const Jn = P.Component;
P.PureComponent;
P.Fragment;
P.StrictMode;
P.Suspense;
P.Children;
P.isValidElement;
P.version;
const ye = window.SP_REACTDOM, ln = (e) => typeof ye?.createRoot == "function" ? ye.createRoot(e) : {
  render(t) {
    ye.render(t, e);
  },
  unmount() {
    ye.unmountComponentAtNode?.(e);
  }
}, Kn = ye.createPortal;
ye.flushSync;
const $e = window.SP_REACT, Lt = window.SP_JSX_FACTORY;
function gt(e, t, o) {
  const { children: l, ...r } = t ?? {};
  return o !== void 0 && (r.key = o), l === void 0 ? $e.createElement(e, r) : Array.isArray(l) ? $e.createElement(e, r, ...l) : $e.createElement(e, r, l);
}
const Ce = typeof Lt?.jsx == "function" ? Lt : void 0, U = Ce?.Fragment ?? $e.Fragment, a = Ce ? Ce.jsx : gt, s = Ce?.jsxs ?? gt;
Ce && Ce.jsx;
const Tt = {
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
  pin: "M12 15v6m0-6a4 4 0 0 0 4-4V4H8v7a4 4 0 0 0 4 4Zm-6-7h12"
}, Yn = {
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
  const r = window.MILLENNIUM_API?.IconsModule?.[Yn[e] ?? ""], c = on(() => Tt[e] ?? Tt.info, [e]);
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
      children: /* @__PURE__ */ a("path", { d: c })
    }
  );
}
function ea(e) {
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
const Et = {
  english: "en",
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  russian: "ru",
  ru: "ru",
  "ru-ru": "ru"
}, Ye = /* @__PURE__ */ new Set();
let Le = "en", rn = "english";
function sn(e) {
  return String(e ?? "").trim().toLowerCase().replace(/_/g, "-");
}
function ta(e) {
  const t = sn(e);
  return Et[t] ?? Et[t.split("-")[0]] ?? "en";
}
function na(e) {
  rn = sn(e) || "english";
  const t = ta(e);
  t !== Le && (Le = t, Ye.forEach((o) => o()));
}
function Bt() {
  return Le;
}
function aa() {
  return rn;
}
function et(e) {
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
function Ee() {
  return pt((e) => (Ye.add(e), () => Ye.delete(e)), Bt, Bt);
}
async function oa(e = window) {
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
  return na(t ?? "english"), Le;
}
const dn = {
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
}, ia = {
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
}, la = { en: dn, ru: ia };
function n(e, t) {
  let o = la[Le][e] ?? dn[e] ?? e;
  if (t) for (const [l, r] of Object.entries(t)) o = o.split(`{${l}}`).join(String(r));
  return o;
}
function Z() {
  return window.MILLENNIUM_API;
}
let tt;
function ra(e) {
  tt = e;
}
async function W(e, t = {}) {
  if (!tt) throw new Error(n("backendMissing"));
  const o = await tt(e, t);
  let l;
  try {
    l = ea(o);
  } catch (r) {
    throw new Error(et(r instanceof Error ? r.message : String(r)));
  }
  if (!l.ok) throw new Error(et(l.error || n("bridgeNoReply")));
  return l.data;
}
function sa() {
  ra(async (e, t) => {
    const o = Z();
    if (!o?.Millennium?.callServerMethod) throw new Error(n("millenniumMissing"));
    return o.Millennium.callServerMethod("GaleX", e, { payload: JSON.stringify(t) });
  });
}
const b = {
  snapshot: () => W("snapshot"),
  progress: () => W("progress"),
  cancelInstalls: () => W("command", { method: "cancel_installs", args: {} }),
  call: (e, t, o = {}) => W("command", { method: e, args: { slug: t.slug, profileId: t.profileId, ...o } }),
  browserUrl: (e) => W("browser_url", { ...e }),
  dismissLink: (e) => W("dismiss_link", { url: e }),
  global: (e, t = {}) => W("command", { method: e, args: t }),
  getConfig: () => W("get_config"),
  setConfig: (e) => W("set_config", { path: e }),
  restart: () => W("restart"),
  log: (e) => W("frontend_log", { message: e })
};
function nt(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(n("invalidBrowserUrl"));
  const o = Z()?.Navigation;
  o?.NavigateToSteamWeb ? o.NavigateToSteamWeb(e) : window.open(e, "_blank", "noopener,noreferrer");
}
function cn(e = document) {
  try {
    const t = e.defaultView?.SteamClient?.Window;
    t?.BringToFront?.(!0), t?.SetKeyFocus?.(!0), t?.MarkLastFocused?.(), e.defaultView?.focus();
  } catch {
  }
}
function da() {
  const e = Z()?.Navigation;
  if (e?.Navigate) {
    e.Navigate("/library/downloads");
    return;
  }
  const t = window.SteamClient?.URL ?? Z()?.SteamClient?.URL;
  t?.ExecuteSteamURL && t.ExecuteSteamURL("steam://nav/downloads");
}
function ca(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(n("invalidBrowserUrl"));
  const o = Z()?.Browser ?? window.SteamClient?.Browser;
  o?.StartDownload ? o.StartDownload(e) : nt(e);
}
function pn() {
  return window.SteamClient?.System ?? Z()?.SteamClient?.System;
}
function Ft() {
  return typeof pn()?.OpenFileDialog == "function";
}
async function zt(e, t, o) {
  const l = pn();
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
function E(e) {
  return et(e instanceof Error ? e.message : String(e));
}
function pa({ error: e, onRetry: t }) {
  return Ee(), /* @__PURE__ */ s("div", { className: "galex gx-crash", role: "alert", children: [
    /* @__PURE__ */ a("h2", { children: n("crashTitle") }),
    /* @__PURE__ */ a("p", { children: n("crashBody") }),
    /* @__PURE__ */ a("pre", { children: E(e) }),
    /* @__PURE__ */ a("button", { className: "gx-button", onClick: t, children: n("retry") })
  ] });
}
class ut extends Jn {
  state = {};
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, o) {
    console.error("[GaleX]", t, o.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ a(pa, { error: this.state.error, onRetry: () => this.setState({ error: void 0 }) }) : this.props.children;
  }
}
const mt = qn(document);
function gn() {
  return Qn(mt);
}
function ge(e) {
  const t = Z()?.[e];
  return typeof t == "function" || t && typeof t == "object" ? t : void 0;
}
function M({ children: e, icon: t, primary: o, className: l = "", ...r }) {
  const c = ge(o ? "DialogButtonPrimary" : "DialogButton") ?? ge("DialogButton"), d = /* @__PURE__ */ s(U, { children: [
    t && /* @__PURE__ */ a(J, { name: t, size: 16 }),
    " ",
    e
  ] });
  return c ? /* @__PURE__ */ a(c, { ...r, className: `gx-native-button ${o ? "gx-native-button--primary" : ""} ${l}`, children: d }) : /* @__PURE__ */ a("button", { type: "button", ...r, className: `gx-button ${o ? "gx-button--primary" : ""} ${l}`, children: d });
}
function ee({ icon: e, label: t, ...o }) {
  const l = ge("DialogButton");
  return l ? /* @__PURE__ */ a(l, { ...o, className: `gx-icon-button ${o.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ a(J, { name: e, size: 18 }) }) : /* @__PURE__ */ a("button", { type: "button", ...o, className: `gx-icon-button ${o.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ a(J, { name: e, size: 18 }) });
}
function ve({ value: e, onChange: t, options: o, label: l, disabled: r }) {
  const c = ge("Dropdown");
  return c ? /* @__PURE__ */ a("div", { className: "gx-native-select", children: /* @__PURE__ */ a(c, { disabled: r, menuLabel: l, strDefaultLabel: l, rgOptions: o.map((d) => ({ data: d.value, label: d.label })), selectedOption: e, contextMenuPositionOptions: { bMatchWidth: !0 }, onChange: (d) => t(d.data) }) }) : /* @__PURE__ */ a("select", { "aria-label": l, value: e, disabled: r, onChange: (d) => t(typeof e == "number" ? Number(d.target.value) : d.target.value), children: o.map((d) => /* @__PURE__ */ a("option", { value: d.value, children: d.label }, d.value)) });
}
function Ae({ checked: e, onChange: t, label: o, disabled: l }) {
  const r = ge("DialogCheckbox");
  return r ? /* @__PURE__ */ a(r, { controlled: !0, checked: e, disabled: l, "aria-label": o, onChange: t }) : /* @__PURE__ */ a("input", { className: "gx-checkbox", type: "checkbox", "aria-label": o, checked: e, disabled: l, onChange: (c) => t(c.target.checked) });
}
function je({ checked: e, onChange: t, label: o, disabled: l }) {
  const r = ge("Toggle");
  return r ? /* @__PURE__ */ a("div", { className: "gx-toggle", role: "group", "aria-label": o, children: /* @__PURE__ */ a(r, { value: e, disabled: l, onChange: t }) }) : /* @__PURE__ */ s("label", { className: "gx-toggle", children: [
    /* @__PURE__ */ a("input", { type: "checkbox", role: "switch", "aria-label": o, checked: e, disabled: l, onChange: (c) => t(c.target.checked) }),
    /* @__PURE__ */ a("span", { "aria-hidden": "true" })
  ] });
}
function ga({ label: e, description: t, className: o = "", ...l }) {
  const r = ge("TextField");
  return r ? /* @__PURE__ */ a(r, { ...l, label: e, description: t, className: `gx-native-input ${o}` }) : /* @__PURE__ */ a("input", { ...l, className: `gx-input ${o}` });
}
function ke({ title: e, children: t, onClose: o, footer: l }) {
  const r = gn(), c = Ke(null), d = Ke(o);
  return d.current = o, te(() => {
    cn(r);
    const g = r.activeElement, f = c.current, k = () => Array.from(f?.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]') ?? []);
    (f?.querySelector("input,select,textarea") ?? k()[0])?.focus();
    const N = (h) => {
      if (h.key === "Escape" && (h.stopPropagation(), d.current()), h.key === "Tab") {
        const w = k(), C = w[0], G = w[w.length - 1];
        h.shiftKey && r.activeElement === C ? (h.preventDefault(), G?.focus()) : !h.shiftKey && r.activeElement === G && (h.preventDefault(), C?.focus());
      }
    };
    return f?.addEventListener("keydown", N), () => {
      f?.removeEventListener("keydown", N), g?.focus();
    };
  }, [r]), Kn(/* @__PURE__ */ a("div", { className: "galex gx-modal-backdrop", onMouseDown: (g) => {
    g.target === g.currentTarget && o();
  }, children: /* @__PURE__ */ s("div", { ref: c, className: "gx-modal DialogPopup_Generic", role: "dialog", "aria-modal": "true", "aria-label": e, children: [
    /* @__PURE__ */ s("header", { children: [
      /* @__PURE__ */ a("h2", { children: e }),
      /* @__PURE__ */ a(ee, { icon: "x", label: n("close"), onClick: o })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-modal-body", children: t }),
    l && /* @__PURE__ */ a("footer", { children: l })
  ] }) }), r.body);
}
function Rt({ title: e, children: t, onClose: o, onConfirm: l, busy: r, danger: c }) {
  return /* @__PURE__ */ a(ke, { title: e, onClose: o, footer: /* @__PURE__ */ s(U, { children: [
    /* @__PURE__ */ a(M, { onClick: o, disabled: r, children: n("cancel") }),
    /* @__PURE__ */ a(M, { primary: !0, className: c ? "gx-danger" : "", onClick: l, disabled: r, children: n(r ? "working" : "confirm") })
  ] }), children: /* @__PURE__ */ a("div", { children: t }) });
}
function le({ children: e, error: t, onRetry: o }) {
  return /* @__PURE__ */ s("div", { className: `gx-notice ${t ? "gx-notice--error" : ""}`, role: t ? "alert" : "status", children: [
    /* @__PURE__ */ a(J, { name: t ? "warning" : "info", size: 17 }),
    /* @__PURE__ */ a("span", { children: e }),
    o && /* @__PURE__ */ a("button", { onClick: o, children: n("retry") })
  ] });
}
function pe(e) {
  return e >= 1073741824 ? n("bytesGb", { value: (e / 1073741824).toFixed(1) }) : e >= 1048576 ? n("bytesMb", { value: (e / 1048576).toFixed(1) }) : n("bytesKb", { value: Math.round(e / 1024) });
}
function be({ title: e, hint: t, children: o }) {
  return /* @__PURE__ */ s("div", { className: "gx-setting", children: [
    /* @__PURE__ */ s("div", { children: [
      /* @__PURE__ */ a("strong", { children: e }),
      t && /* @__PURE__ */ a("small", { children: t })
    ] }),
    o
  ] });
}
function ua({ demo: e = !1 }) {
  Ee();
  const [t, o] = x(), [l, r] = x(), [c, d] = x(""), [g, f] = x(""), [k, N] = x(""), [h, w] = x(!1), C = async () => {
    f("");
    try {
      const [p, v] = await Promise.all([b.snapshot(), b.global("prefs")]);
      r(p), o(v), e || d(await b.getConfig());
    } catch (p) {
      f(E(p));
    }
  };
  te(() => {
    C();
  }, []);
  const G = async (p) => {
    if (!(!t || h)) {
      w(!0), f(""), N("");
      try {
        const v = { ...t, ...p };
        await b.global("set_prefs", { value: v }), o(v), N(n("savedInGale"));
      } catch (v) {
        f(E(v));
      } finally {
        w(!1);
      }
    }
  }, R = async () => {
    w(!0), f("");
    try {
      await b.setConfig(c.trim()), await b.restart(), N(n("pathSaved")), setTimeout(() => void C(), 2500);
    } catch (p) {
      f(E(p));
    } finally {
      w(!1);
    }
  }, m = async () => {
    w(!0), f("");
    try {
      const p = await b.global("clear_download_cache");
      N(n("cacheCleared", { size: pe(p) }));
    } catch (p) {
      f(E(p));
    } finally {
      w(!1);
    }
  };
  return /* @__PURE__ */ s("section", { className: "galex gx-global-settings", children: [
    /* @__PURE__ */ s("div", { className: "gx-settings-header", children: [
      /* @__PURE__ */ a("h1", { children: "GaleX" }),
      /* @__PURE__ */ s("span", { className: "gx-connection", children: [
        /* @__PURE__ */ a("span", { className: "gx-status-dot" }),
        l ? `Gale ${l.coreVersion}` : n("noConnection")
      ] }),
      /* @__PURE__ */ a(ee, { icon: "refresh", label: n("checkConnection"), disabled: h, onClick: () => void C() })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-settings-intro", children: n("settingsIntro") }),
    g && /* @__PURE__ */ a(le, { error: !0, onRetry: () => void C(), children: g }),
    k && /* @__PURE__ */ s("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ a(J, { name: "check", size: 15 }),
      k
    ] }),
    /* @__PURE__ */ s("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("connection") }),
      /* @__PURE__ */ a(be, { title: n("headlessGale"), hint: n("headlessHint") }),
      !e && /* @__PURE__ */ s(U, { children: [
        /* @__PURE__ */ a(ga, { label: n("galePath"), value: c, disabled: h, onChange: (p) => d(p.target.value), placeholder: n("galePathPlaceholder") }),
        /* @__PURE__ */ a("div", { className: "gx-settings-actions", children: /* @__PURE__ */ a(M, { onClick: () => void R(), disabled: h, children: n("saveRestart") }) }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galePathHint") })
      ] }),
      /* @__PURE__ */ a(be, { title: n("dataDir"), hint: n("dataDirHint") }),
      /* @__PURE__ */ a("code", { className: "gx-path", children: l?.dataDir ?? "—" }),
      !!l?.games.length && /* @__PURE__ */ s("details", { className: "gx-games", children: [
        /* @__PURE__ */ s("summary", { children: [
          n("galeGames"),
          " ",
          /* @__PURE__ */ a("span", { children: l.games.length })
        ] }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galeGamesHint") }),
        /* @__PURE__ */ a("ul", { className: "gx-game-list", children: l.games.map((p) => /* @__PURE__ */ s("li", { children: [
          p.name,
          " ",
          /* @__PURE__ */ a("span", { children: p.steamAppId ?? "?" })
        ] }, p.slug)) })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("galePreferences") }),
      /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galePreferencesHint") }),
      t ? /* @__PURE__ */ s(U, { children: [
        /* @__PURE__ */ a(be, { title: n("fetchAuto"), hint: n("fetchAutoHint"), children: /* @__PURE__ */ a(je, { label: n("fetchAuto"), checked: t.fetchModsAutomatically, disabled: h, onChange: (p) => void G({ fetchModsAutomatically: p }) }) }),
        /* @__PURE__ */ a(be, { title: n("pullBeforeLaunch"), hint: n("pullBeforeLaunchHint"), children: /* @__PURE__ */ a(je, { label: n("pullBeforeLaunch"), checked: t.pullBeforeLaunch, disabled: h, onChange: (p) => void G({ pullBeforeLaunch: p }) }) }),
        /* @__PURE__ */ a(be, { title: n("skipBackendConfirm"), hint: n("skipBackendConfirmHint"), children: /* @__PURE__ */ a(je, { label: n("skipBackendConfirm"), checked: t.backendSkipConfirm, disabled: h, onChange: (p) => void G({ backendSkipConfirm: p }) }) })
      ] }) : /* @__PURE__ */ a("p", { className: "gx-muted", children: n("prefsLoading") })
    ] }),
    /* @__PURE__ */ s("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("downloads") }),
      /* @__PURE__ */ a(be, { title: n("downloadCache"), hint: n("downloadCacheHint"), children: /* @__PURE__ */ a(M, { disabled: h || !t || l?.installing, onClick: () => void m(), children: n("clearCache") }) })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-settings-bottom", children: n("settingsBottom") })
  ] });
}
let ht = { error: "", loading: !0 };
const Te = /* @__PURE__ */ new Set();
let ft, de = !0, Qe = !1, _e = 0;
function $t(e) {
  ht = e, Te.forEach((t) => t());
}
async function xt() {
  if (de || Qe) return;
  Qe = !0;
  const e = _e;
  try {
    const t = await b.snapshot();
    !de && e === _e && $t({ snapshot: t, error: t.ok ? "" : n("incompatibleBridge"), loading: !1 });
  } catch (t) {
    !de && e === _e && $t({ ...ht, error: E(t), loading: !1 });
  } finally {
    Qe = !1, de || (ft = setTimeout(() => void xt(), document.visibilityState === "hidden" ? 15e3 : 3e3));
  }
}
function ma() {
  return de ? (de = !1, _e++, xt(), () => Ht()) : () => Ht();
}
function Ht() {
  de = !0, _e++, clearTimeout(ft);
}
function at() {
  clearTimeout(ft), xt();
}
function ot() {
  return ht;
}
function ha() {
  return pt((e) => (Te.add(e), () => Te.delete(e)), ot, ot);
}
function Ut(e, t) {
  return e?.games.find((o) => o.steamAppId === t);
}
function fa(e) {
  return Te.add(e), () => {
    Te.delete(e);
  };
}
function xa() {
  Ee();
  const e = gn(), { snapshot: t } = ha(), o = t?.pendingLinks[0], [l, r] = x(), [c, d] = x(), [g, f] = x(), [k, N] = x(""), [h, w] = x(!1), [C, G] = x(0);
  if (te(() => {
    if (!o) return;
    cn(e);
    let p = !1;
    return r(void 0), N(""), d(void 0), (async () => {
      try {
        const [v, D] = await Promise.all([b.call("profiles", { slug: o.slug }), b.call("resolve_link", { slug: o.slug }, { url: o.url })]);
        p || (d(v), f(v.activeId), r(D));
      } catch (v) {
        p || N(E(v));
      }
    })(), () => {
      p = !0;
    };
  }, [o?.url, o?.slug, C]), !o) return null;
  const R = () => {
    h || b.dismissLink(o.url).then(() => at()).catch((p) => N(E(p)));
  }, m = () => void (async () => {
    w(!0), N("");
    try {
      await b.call("install_mod", { slug: o.slug, profileId: g }, { id: { packageUuid: l.uuid, versionUuid: l.versionUuid, backend: l.backend } }), await b.dismissLink(o.url), at();
    } catch (p) {
      N(E(p));
    } finally {
      w(!1);
    }
  })();
  return /* @__PURE__ */ s(ke, { title: n("linkTitle"), onClose: R, footer: /* @__PURE__ */ s(U, { children: [
    /* @__PURE__ */ a(M, { disabled: h, onClick: R, children: n("cancel") }),
    /* @__PURE__ */ a(M, { primary: !0, disabled: h || !l || g === void 0, onClick: m, children: n(h ? "linkInstalling" : "linkInstall") })
  ] }), children: [
    /* @__PURE__ */ a("h3", { children: l?.name ?? o.url.split("/").slice(-2, -1)[0] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: l ? `${l.author} · v${l.version}` : n("linkChecking") }),
    c && /* @__PURE__ */ s("label", { className: "gx-form-label", children: [
      n("linkProfile"),
      /* @__PURE__ */ a(ve, { label: n("linkProfile"), value: g ?? c.activeId, options: c.profiles.map((p) => ({ value: p.id, label: p.name })), onChange: f })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: n("linkDeps", { game: t?.games.find((p) => p.slug === o.slug)?.name ?? o.slug }) }),
    k && /* @__PURE__ */ a(le, { error: !0, onRetry: () => G((p) => p + 1), children: k })
  ] });
}
let He = { error: "" };
const it = /* @__PURE__ */ new Set();
let bt, ce = !0, Je = !1, Ge = 0;
function Ot(e) {
  He = e, it.forEach((t) => t());
}
async function vt() {
  if (ce || Je) return;
  Je = !0;
  const e = Ge;
  try {
    const t = await b.progress();
    !ce && e === Ge && Ot({ snapshot: t, error: "" });
  } catch (t) {
    !ce && e === Ge && Ot({ ...He, error: E(t) });
  } finally {
    Je = !1, ce || (bt = setTimeout(() => void vt(), He.snapshot?.active ? 750 : 2e3));
  }
}
function ba() {
  return ce ? (ce = !1, Ge++, vt(), () => Xt()) : () => Xt();
}
function Xt() {
  ce = !0, Ge++, clearTimeout(bt);
}
function va() {
  clearTimeout(bt), vt();
}
function Vt() {
  return He;
}
function un() {
  return pt((e) => (it.add(e), () => it.delete(e)), Vt, Vt);
}
function wa(e) {
  return `${pe(Math.max(0, e))}/s`;
}
function ya(e) {
  const t = `task_${e.kind.replace(/-/g, "_")}`, o = n(t);
  return o === t ? n("task_install") : o;
}
function ka(e) {
  const o = `phase_${e.status === "done" ? "done" : e.status === "error" ? "error" : e.phase ?? "starting"}`, l = n(o);
  return l === o ? n("working") : l;
}
function Ca(e) {
  if (e.totalBytes && e.totalBytes > 0) return Math.min(100, Math.round(e.completedBytes / e.totalBytes * 100));
  if (e.totalMods && e.totalMods > 0) return Math.min(100, Math.round(e.completedMods / e.totalMods * 100));
}
function Wt({ history: e, field: t, label: o }) {
  const l = e.map((d) => d[t]), r = Math.max(1, ...l), c = l.map((d, g) => `${l.length > 1 ? g / (l.length - 1) * 100 : 0},${32 - d / r * 30}`).join(" ");
  return /* @__PURE__ */ s("div", { className: "gx-sparkline", "aria-label": o, children: [
    /* @__PURE__ */ a("span", { children: o }),
    /* @__PURE__ */ a("svg", { viewBox: "0 0 100 32", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ a("polyline", { points: c, fill: "none", stroke: "currentColor", strokeWidth: "1.5" }) }),
    /* @__PURE__ */ a("strong", { children: wa(l[l.length - 1] ?? 0) })
  ] });
}
function Na({ task: e }) {
  const t = Ca(e), o = window.MILLENNIUM_API?.ProgressBarWithInfo, l = ka(e), r = e.totalBytes ? `${pe(e.completedBytes)} / ${pe(e.totalBytes)}` : e.totalMods ? `${e.completedMods}/${e.totalMods}` : "";
  return /* @__PURE__ */ s("article", { className: `gx-download-card ${e.status === "error" ? "is-error" : ""}`, "data-appid": e.steamAppId, "data-galex-download": e.id, children: [
    e.steamAppId ? /* @__PURE__ */ a("img", { className: "gx-download-cover", src: `https://cdn.cloudflare.steamstatic.com/steam/apps/${e.steamAppId}/header.jpg`, alt: "", loading: "lazy" }) : /* @__PURE__ */ a("span", { className: "gx-download-cover gx-download-cover--fallback", children: /* @__PURE__ */ a(J, { name: "package", size: 24 }) }),
    /* @__PURE__ */ s("div", { className: "gx-download-body", children: [
      /* @__PURE__ */ s("header", { children: [
        /* @__PURE__ */ a("h3", { children: e.gameName }),
        /* @__PURE__ */ a("span", { className: "gx-muted", children: e.profileName ?? e.slug })
      ] }),
      /* @__PURE__ */ s("p", { className: "gx-download-task", children: [
        ya(e),
        " · ",
        l,
        e.currentMod ? ` · ${e.currentMod}` : ""
      ] }),
      typeof o == "function" ? /* @__PURE__ */ a(o, { nProgress: t ?? 0, indeterminate: t === void 0 || e.status === "active" && t === 0, strOperationText: l, sTimeRemaining: r }) : /* @__PURE__ */ a("progress", { className: "gx-progress", max: 100, value: t ?? void 0, "aria-label": l }),
      /* @__PURE__ */ s("div", { className: "gx-download-meta", children: [
        /* @__PURE__ */ a("span", { children: r || n("working") }),
        t !== void 0 && /* @__PURE__ */ s("span", { children: [
          t,
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Ma() {
  Ee();
  const { snapshot: e, error: t } = un(), o = e?.tasks ?? [], l = o.some((r) => r.status === "active");
  return !e || o.length === 0 && !t ? null : /* @__PURE__ */ s("section", { className: "galex gx-downloads", "aria-label": n("galeDownloads"), children: [
    /* @__PURE__ */ s("header", { className: "gx-downloads-header", children: [
      /* @__PURE__ */ a("h2", { children: n("galeDownloads") }),
      l && /* @__PURE__ */ a(M, { icon: "x", onClick: () => void b.cancelInstalls().then(va).catch(() => {
      }), children: n("cancelDownloads") })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galeDownloadsHint") }),
    t && /* @__PURE__ */ a(le, { error: !0, children: t }),
    e && /* @__PURE__ */ s("div", { className: "gx-download-graphs", children: [
      /* @__PURE__ */ a(Wt, { history: e.history, field: "network", label: n("network") }),
      /* @__PURE__ */ a(Wt, { history: e.history, field: "disk", label: n("disk") })
    ] }),
    o.length ? o.map((r) => /* @__PURE__ */ a(Na, { task: r }, r.id)) : /* @__PURE__ */ a("div", { className: "gx-empty", children: n(e ? "noGaleDownloads" : "loading") })
  ] });
}
function Sa({ children: e }) {
  return /* @__PURE__ */ s(U, { children: [
    /* @__PURE__ */ a(Ma, {}),
    e
  ] });
}
const Pa = { includeCategories: [], excludeCategories: [], includeNsfw: !1, includeDeprecated: !0, includeDisabled: !0, includeEnabled: !0, sortBy: "name", sortOrder: "ascending" }, Zt = { mods: [], totalModCount: 0, updates: [], unknownMods: [] };
function Ia(e) {
  if (e.type === "remote" && e.author && e.version) {
    if (e.backend === "Thunderstore") return `https://ccdn.thunderstore.io/live/repository/icons/${encodeURIComponent(`${e.author}-${e.name}-${e.version}`)}.png`;
    if (e.backend === "Hexium") return `https://cdn.hexium.gg/uploads/${encodeURIComponent(e.author)}/${encodeURIComponent(e.name)}/icon.png?${encodeURIComponent(e.version)}`;
  }
  if (e.icon && /^(https?:|data:)/i.test(e.icon)) return e.icon;
}
function Aa({ mod: e }) {
  const [t, o] = x(!1), l = Ia(e.data);
  return !l || t ? /* @__PURE__ */ a("span", { className: "gx-mod-avatar", "aria-hidden": "true", children: e.data.name.slice(0, 2).toUpperCase() }) : /* @__PURE__ */ a("img", { className: "gx-mod-avatar", src: l, alt: "", loading: "lazy", onError: () => o(!0) });
}
const qt = (e) => e.replace(/_/g, " ");
function _a({ game: e, demo: t = !1, installing: o = !1 }) {
  Ee();
  const [l, r] = x({ activeId: 0, profiles: [] }), [c, d] = x(), [g, f] = x(Zt), [k, N] = x(""), [h, w] = x(""), [C, G] = x("all"), [R, m] = x("name"), [p, v] = x(!0), [D, A] = x(""), [q, ne] = x([]), [Ne, ue] = x(!1), [Oe, re] = x(!0), [me, L] = x(""), [he, T] = x(""), [y, wt] = x(""), [bn, vn] = x(0), [wn, yn] = x(0), [B, F] = x(null), [K, X] = x(""), [Be, Xe] = x(""), [$, fe] = x(null), [xe, yt] = x("code"), [Me, Se] = x("new"), [kt, kn] = x(!1), [Ct, Cn] = x(!1), [Ve, Nn] = x(""), [se, Nt] = x(null), [Mt, St] = x([]), [Pt, It] = x(""), [Mn, At] = x(!1), [Pe, We] = x([]), [ae, Fe] = x(null), [Y, Sn] = x(null), ze = Ke(!0), _ = { slug: e.slug, profileId: c }, oe = l.profiles.find((i) => i.id === c), z = () => vn((i) => i + 1), _t = () => yn((i) => i + 1);
  te(() => (ze.current = !0, () => {
    ze.current = !1;
  }), []), te(() => {
    const i = setTimeout(() => w(k), 220);
    return () => clearTimeout(i);
  }, [k]), te(() => {
    let i = !1;
    return re(!0), L(""), d(void 0), f(Zt), N(""), A(""), ne([]), G("all"), b.call("profiles", { slug: e.slug }).then((u) => {
      i || (r(u), d(u.activeId));
    }).catch((u) => {
      i || (L(E(u)), re(!1));
    }), () => {
      i = !0;
    };
  }, [e.slug, wn]), te(() => {
    if (c === void 0) return;
    let i = !1;
    re(!0);
    const u = { ...Pa, searchTerm: h, includeEnabled: C !== "disabled", includeDisabled: C !== "enabled", includeCategories: D ? [D] : [], sortBy: R, sortOrder: p ? "ascending" : "descending" };
    return b.call("mods", { slug: e.slug, profileId: c }, { args: u }).then((S) => {
      i || (f(S), L(""), ne((V) => Array.from(/* @__PURE__ */ new Set([...V, ...S.mods.flatMap((j) => j.data.categories ?? [])])).sort()));
    }).catch((S) => {
      i || L(E(S));
    }).finally(() => {
      i || re(!1);
    }), () => {
      i = !0;
    };
  }, [e.slug, c, h, C, R, p, D, bn]), te(() => {
    if (!he) return;
    const i = setTimeout(() => T(""), 4500);
    return () => clearTimeout(i);
  }, [he]), te(() => {
    B !== "export" || t || b.call("list_export_files", _).then(We).catch((i) => L(E(i)));
  }, [B, c]);
  const { snapshot: Pn } = un(), In = Pn?.tasks.find((i) => i.slug === e.slug && i.status === "active"), Ie = g.updates.filter((i) => !i.ignore), Gt = C === "updates" ? g.mods.filter((i) => Ie.some((u) => u.updatedId.packageUuid === i.data.uuid)) : g.mods, An = g.mods.filter((i) => i.enabled).length, _n = on(() => Pe.filter((i) => i.included).reduce((i, u) => i + u.size, 0), [Pe]), I = jn(async (i, u) => {
    if (!y) {
      wt(i), L("");
      try {
        await u();
      } catch (S) {
        ze.current && L(E(S));
      } finally {
        ze.current && wt("");
      }
    }
  }, [y]), Ze = async (i, u = {}) => {
    await b.call(i, _, u);
    const S = await b.call("profiles", { slug: e.slug }), V = i === "import_profile" ? K.trim() : K;
    let j = S.activeId;
    (i === "create_profile" || i === "duplicate_profile" || i === "import_profile") && (j = S.profiles.find((qe) => qe.name === V)?.id ?? S.activeId), i === "delete_profile" && (j = S.activeId), await b.call("activate_profile", { slug: e.slug, profileId: j }), r(S), d(j), F(null), X(""), fe(null), z(), T(n("profileSaved"));
  }, Gn = (i) => void I(i.data.uuid, async () => {
    const u = await b.call("toggle_mod", _, { uuid: i.data.uuid });
    u.type === "confirm" ? Fe({ title: n("disableMod", { name: i.data.name }), description: n("disableDependants"), uuids: [i.data.uuid, ...u.dependants.map((S) => S.uuid)], kind: "toggle" }) : z();
  }), Dn = (i) => void I(i.data.uuid, async () => {
    const u = await b.call("remove_mod", _, { uuid: i.data.uuid });
    u.type === "confirm" ? Fe({ title: n("removeMod", { name: i.data.name }), description: n("removeDependants"), uuids: [i.data.uuid, ...u.dependants.map((S) => S.uuid)], kind: "remove" }) : (z(), T(n("modRemoved")));
  }), Ln = () => {
    ae && I("confirm", async () => {
      await b.call(ae.kind === "toggle" ? "force_toggle_mods" : "force_remove_mods", _, { uuids: [...new Set(ae.uuids)] }), Fe(null), z(), T(ae.kind === "toggle" ? n("stateChanged") : n("modRemoved"));
    });
  }, Dt = () => void I("browser", async () => {
    if (t) {
      T(n("demoConfig"));
      return;
    }
    const i = await b.browserUrl({ ..._, lang: aa() });
    nt(i.url), T(n("configOpened"));
  }), Tn = () => void I("import", async () => {
    if (!Be.trim()) throw new Error(n("importCodePlaceholder"));
    const i = await b.call("read_profile_code", _, { code: Be.trim() });
    fe(i), X(i.manifest.profileName), Se(l.profiles.some((u) => u.name === i.manifest.profileName) ? "overwrite" : "new");
  }), En = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      L(n("fileTooLarge"));
      return;
    }
    const u = new FileReader();
    u.onload = () => void I("import", async () => {
      const S = String(u.result).split(",")[1] ?? "", V = await b.call("read_profile_base64", _, { base64: S });
      fe(V), X(V.manifest.profileName), Se(l.profiles.some((j) => j.name === V.manifest.profileName) ? "overwrite" : "new");
    }), u.onerror = () => L(n("fileReadError")), u.readAsDataURL(i);
  }, Bn = (i) => void I("import", async () => {
    const u = await b.call("read_profile_file", _, { path: i });
    fe(u), X(u.manifest.profileName), Se(l.profiles.some((S) => S.name === u.manifest.profileName) ? "overwrite" : "new");
  }), Fn = async () => {
    const i = await zt(n("profileFileDialog"), n("profileFileFilter"), ["*.r2z", "*.zip"]);
    i && Bn(i);
  }, zn = async () => {
    const i = await zt(n("localFileDialog"), n("localFileFilter"), ["*.zip"]);
    i && I("local", async () => {
      await b.call("import_local_mod", _, { path: i }), F(null), z(), T(n("profileSaved"));
    });
  }, Rn = () => void I("import", async () => {
    if (!$) return;
    const i = { ...$, manifest: { ...$.manifest, profileName: K.trim() || $.manifest.profileName } };
    await Ze("import_profile", { data: i, options: { importAll: kt, merge: Me === "overwrite" && Ct, ignoreMissingMods: $.missingMods.length > 0 } });
  }), $n = () => void I("r2", async () => {
    const i = await b.call("get_r2modman_info", _, { path: Ve.trim() || null });
    Nt(i), St(i?.profiles.map(() => !0) ?? []);
  }), Hn = () => void I("r2", async () => {
    se && (await b.call("import_r2modman", _, { path: se.path, include: Mt }), F(null), _t(), z(), T(n("profileSaved")));
  }), Un = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      L(n("fileTooLarge"));
      return;
    }
    const u = new FileReader();
    u.onload = () => void I("local", async () => {
      await b.call("import_local_mod_base64", _, { base64: String(u.result).split(",")[1] ?? "" }), F(null), z(), T(n("profileSaved"));
    }), u.onerror = () => L(n("fileReadError")), u.readAsDataURL(i);
  }, On = () => void I("export", async () => {
    const i = await b.call("export_code", _);
    At(i.type !== "success"), It(i.code ?? ""), F("export");
  }), Xn = (i) => {
    if (t) {
      We(i);
      return;
    }
    I("export-files", async () => {
      await b.call("set_excluded_export_files", _, { excludedFiles: i.filter((u) => !u.included).map((u) => u.path) }), We(i), It("");
    });
  }, Vn = () => void I("export-file", async () => {
    const { url: i } = await b.browserUrl({ ..._, kind: "export" });
    ca(i);
  }), Wn = () => void I("update", async () => {
    await b.call("update_mods", _, { uuids: Ie.map((i) => i.updatedId.packageUuid) }), T(n(t ? "demoUpdate" : "updateQueued")), z();
  }), ie = () => {
    y || (F(null), fe(null), X(""), Xe(""), Nt(null), At(!1));
  }, Zn = async (i, u) => {
    try {
      await navigator.clipboard.writeText(i), T(u);
    } catch {
      L(n("clipboardError"));
    }
  };
  return /* @__PURE__ */ s("section", { className: "galex gx-mods", "aria-label": `${n("mods")} — ${e.name}`, "data-appid": e.steamAppId, children: [
    /* @__PURE__ */ s("div", { className: "gx-heading", children: [
      /* @__PURE__ */ a("h1", { children: n("mods") }),
      (o || t) && /* @__PURE__ */ a("div", { className: "gx-heading-meta", children: n(o ? "working" : "demo") })
    ] }),
    /* @__PURE__ */ s("div", { className: "gx-toolbar", children: [
      /* @__PURE__ */ a(M, { onClick: () => nt(`https://thunderstore.io/c/${encodeURIComponent(e.slug)}/`), children: n("openThunderstore") }),
      /* @__PURE__ */ s(M, { onClick: () => ue((i) => !i), "aria-expanded": Ne, children: [
        n("advanced"),
        " ",
        /* @__PURE__ */ a(J, { name: "chevron-down", className: Ne ? "gx-chevron-open" : "", size: 13 })
      ] })
    ] }),
    Ne && /* @__PURE__ */ s("div", { className: "gx-advanced", children: [
      /* @__PURE__ */ s("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ s("div", { className: "gx-profile-line", children: [
          /* @__PURE__ */ a("span", { className: "gx-field-label", children: n("profile") }),
          /* @__PURE__ */ a(ve, { label: n("profile"), value: c ?? 0, disabled: !!y || !l.profiles.length, options: l.profiles.map((i) => ({ value: i.id, label: i.name })), onChange: (i) => void I("profile", async () => {
            await b.call("activate_profile", { slug: e.slug, profileId: i }), d(i), z();
          }) })
        ] }),
        /* @__PURE__ */ s("div", { className: "gx-profile-actions", children: [
          /* @__PURE__ */ a(M, { icon: "plus", disabled: !!y, onClick: () => {
            X(""), F("create");
          }, children: n("createProfile") }),
          /* @__PURE__ */ a(M, { disabled: !oe || !!y, onClick: () => {
            X(oe?.name ?? ""), F("rename");
          }, children: n("renameProfile") }),
          /* @__PURE__ */ a(M, { disabled: !oe || !!y, onClick: () => {
            X(`${oe?.name} copy`), F("duplicate");
          }, children: n("duplicateProfile") }),
          /* @__PURE__ */ a(M, { className: "gx-danger", disabled: l.profiles.length < 2 || !!y, onClick: () => F("delete"), children: n("deleteProfile") })
        ] })
      ] }),
      /* @__PURE__ */ s("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ a("div", { className: "gx-profile-line", children: /* @__PURE__ */ a("span", { className: "gx-field-label", children: n("profileTransfer") }) }),
        /* @__PURE__ */ s("div", { className: "gx-profile-actions", children: [
          /* @__PURE__ */ a(M, { icon: "download", disabled: !oe || !!y, onClick: () => {
            Xe(""), fe(null), yt("code"), F("import");
          }, children: n("import") }),
          /* @__PURE__ */ a(M, { icon: "external", disabled: !oe || !!y, onClick: On, children: n("export") })
        ] })
      ] }),
      /* @__PURE__ */ s("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ a("div", { className: "gx-profile-line", children: /* @__PURE__ */ a("span", { className: "gx-field-label", children: n("modConfiguration") }) }),
        /* @__PURE__ */ a("div", { className: "gx-profile-actions", children: /* @__PURE__ */ a(M, { icon: "sliders", disabled: !oe || !!y, onClick: Dt, children: n("config") }) })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "gx-search-row", children: [
      /* @__PURE__ */ s("div", { className: "gx-filter-group", children: [
        /* @__PURE__ */ s("span", { className: "gx-field-label DialogLabel", children: [
          n("filter"),
          ":"
        ] }),
        /* @__PURE__ */ s("label", { className: "gx-search DialogInput_Wrapper", children: [
          /* @__PURE__ */ a("input", { className: "DialogInput DialogInputPlaceholder DialogTextInputBase", "aria-label": n("searchMods"), placeholder: n("searchMods"), value: k, onChange: (i) => N(i.target.value) }),
          k && /* @__PURE__ */ a("button", { "aria-label": n("clearSearch"), onClick: () => N(""), children: /* @__PURE__ */ a(J, { name: "x", size: 13 }) })
        ] })
      ] }),
      /* @__PURE__ */ a(ve, { label: n("filter"), value: C, onChange: G, options: [{ value: "all", label: n("all") }, { value: "enabled", label: n("enabled") }, { value: "disabled", label: n("disabled") }, { value: "updates", label: n("updates") }] }),
      /* @__PURE__ */ s("div", { className: "gx-filter-group", children: [
        /* @__PURE__ */ s("span", { className: "gx-field-label DialogLabel", children: [
          n("sortBy"),
          ":"
        ] }),
        /* @__PURE__ */ a(ve, { label: n("sortBy"), value: R, onChange: m, options: [{ value: "name", label: n("byName") }, { value: "author", label: n("byAuthor") }, { value: "installDate", label: n("byInstallDate") }, { value: "diskSpace", label: n("bySize") }, { value: "downloads", label: n("byDownloads") }] }),
        /* @__PURE__ */ a(ee, { className: "gx-sort-direction", icon: p ? "arrow-up" : "arrow-down", label: n(p ? "ascending" : "descending"), onClick: () => v((i) => !i), disabled: !!y })
      ] }),
      /* @__PURE__ */ a(ve, { label: n("categories"), value: D, onChange: A, options: [{ value: "", label: n("allCategories") }, ...q.map((i) => ({ value: i, label: i }))] })
    ] }),
    me && /* @__PURE__ */ a(le, { error: !0, onRetry: () => {
      L(""), z();
    }, children: me }),
    he && /* @__PURE__ */ a(le, { children: he }),
    In && /* @__PURE__ */ a(le, { children: /* @__PURE__ */ s("span", { children: [
      n("operationInProgress"),
      " ",
      /* @__PURE__ */ a("button", { className: "gx-update-link", onClick: da, children: n("openDownloads") })
    ] }) }),
    /* @__PURE__ */ s("div", { className: "gx-list-heading", children: [
      /* @__PURE__ */ a("span", { children: n("modCount", { count: g.totalModCount }) }),
      /* @__PURE__ */ a("span", { children: n("enabledCount", { count: An }) }),
      !!Ie.length && /* @__PURE__ */ s("button", { className: "gx-update-link", disabled: !!y, onClick: Wn, children: [
        /* @__PURE__ */ a(J, { name: "download", size: 13 }),
        n("updateAll", { count: Ie.length })
      ] }),
      /* @__PURE__ */ a(ee, { icon: "refresh", label: n("refresh"), onClick: () => {
        _t(), z();
      }, disabled: !!y })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-mod-list", tabIndex: 0, children: Oe && !g.mods.length ? /* @__PURE__ */ a("div", { className: "gx-empty", children: n("loading") }) : Gt.length ? Gt.map((i, u) => {
      const S = Ie.find((V) => V.updatedId.packageUuid === i.data.uuid);
      return /* @__PURE__ */ s("div", { className: `gx-mod-row ${i.enabled ? "" : "is-disabled"}`, children: [
        /* @__PURE__ */ a(Ae, { checked: i.enabled, disabled: !!y, label: qt(i.data.name), onChange: () => Gn(i) }),
        /* @__PURE__ */ a("span", { className: "gx-mod-index", children: u + 1 }),
        /* @__PURE__ */ a(Aa, { mod: i }),
        /* @__PURE__ */ s("div", { className: "gx-mod-info", children: [
          /* @__PURE__ */ s("div", { className: "gx-mod-title", children: [
            /* @__PURE__ */ a("h3", { children: qt(i.data.name) }),
            S && /* @__PURE__ */ s("span", { className: "gx-badge gx-badge--update", children: [
              S.old,
              " → ",
              S.new
            ] }),
            i.data.type === "local" && /* @__PURE__ */ a("span", { className: "gx-badge", children: n("local") })
          ] }),
          !!i.data.dependencies?.length && /* @__PURE__ */ s("p", { children: [
            n("dependsOn"),
            ": ",
            i.data.dependencies.join(", ")
          ] }),
          /* @__PURE__ */ s("div", { className: "gx-mod-byline", children: [
            /* @__PURE__ */ a("span", { children: i.data.author }),
            /* @__PURE__ */ s("span", { children: [
              "v",
              i.data.version
            ] }),
            !!i.data.categories?.length && /* @__PURE__ */ s("span", { children: [
              n("tags"),
              ": ",
              i.data.categories.join(", ")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a("span", { className: "gx-mod-size", children: pe(i.data.fileSize) }),
        /* @__PURE__ */ s("div", { className: "gx-mod-actions", children: [
          i.configFile && /* @__PURE__ */ a(ee, { icon: "sliders", label: n("openConfig"), disabled: !!y, onClick: Dt }),
          i.data.type === "remote" && /* @__PURE__ */ a(ee, { icon: "layers", label: n("versions"), disabled: !!y, onClick: () => {
            Sn(i), F("versions");
          } }),
          S && /* @__PURE__ */ a(ee, { icon: "download", label: n("update"), disabled: !!y, onClick: () => void I("update-one", async () => {
            await b.call("update_mods", _, { uuids: [i.data.uuid] }), z(), T(n("updateQueued"));
          }) }),
          /* @__PURE__ */ a(ee, { icon: "trash", label: n("remove"), disabled: !!y, onClick: () => Dn(i) })
        ] })
      ] }, i.data.uuid);
    }) : /* @__PURE__ */ a("div", { className: "gx-empty", children: n("noMods") }) }),
    ae && /* @__PURE__ */ a(Rt, { title: ae.title, onClose: () => Fe(null), onConfirm: Ln, busy: !!y, danger: ae.kind === "remove", children: /* @__PURE__ */ a("p", { children: ae.description }) }),
    (B === "create" || B === "rename" || B === "duplicate") && /* @__PURE__ */ a(ke, { title: n(B === "create" ? "createProfileTitle" : B === "rename" ? "renameProfileTitle" : "duplicateProfileTitle"), onClose: ie, footer: /* @__PURE__ */ s(U, { children: [
      /* @__PURE__ */ a(M, { onClick: ie, disabled: !!y, children: n("cancel") }),
      /* @__PURE__ */ a(M, { primary: !0, disabled: !!y || !K.trim(), onClick: () => void I("profile", () => Ze(B === "create" ? "create_profile" : B === "rename" ? "rename_profile" : "duplicate_profile", { name: K.trim() })), children: n(y ? "working" : "save") })
    ] }), children: /* @__PURE__ */ s("label", { className: "gx-form-label", children: [
      n("profileName"),
      /* @__PURE__ */ a("input", { value: K, onChange: (i) => X(i.target.value), autoFocus: !0 })
    ] }) }),
    B === "delete" && /* @__PURE__ */ a(Rt, { title: n("deleteProfileTitle"), onClose: ie, onConfirm: () => void I("profile", () => Ze("delete_profile", { id: c })), busy: !!y, danger: !0, children: /* @__PURE__ */ a("p", { children: n("deleteProfileBody", { name: oe?.name ?? "" }) }) }),
    B === "import" && /* @__PURE__ */ a(ke, { title: n($ ? "importPreview" : "importTitle"), onClose: ie, footer: /* @__PURE__ */ s(U, { children: [
      /* @__PURE__ */ a(M, { onClick: ie, disabled: !!y, children: n("cancel") }),
      $ ? /* @__PURE__ */ a(M, { primary: !0, onClick: Rn, disabled: !!y || !K.trim(), children: n(y ? "importing" : "installProfile") }) : xe === "code" ? /* @__PURE__ */ a(M, { primary: !0, onClick: Tn, disabled: !!y || !Be.trim(), children: n(y ? "working" : "continue") }) : xe === "r2" ? /* @__PURE__ */ a(M, { primary: !0, onClick: se ? Hn : $n, disabled: !!y || !se && !Ve.trim(), children: n(y ? "working" : se ? "import" : "r2Load") }) : null
    ] }), children: $ ? /* @__PURE__ */ s(U, { children: [
      /* @__PURE__ */ s("div", { className: "gx-tabs", children: [
        /* @__PURE__ */ a(M, { className: Me === "new" ? "gx-button--primary" : "", onClick: () => Se("new"), children: n("newProfile") }),
        /* @__PURE__ */ a(M, { className: Me === "overwrite" ? "gx-button--primary" : "", onClick: () => Se("overwrite"), children: n("overwriteProfile") })
      ] }),
      /* @__PURE__ */ s("label", { className: "gx-form-label", children: [
        n("profileName"),
        /* @__PURE__ */ a("input", { value: K, onChange: (i) => X(i.target.value) })
      ] }),
      Me === "overwrite" && /* @__PURE__ */ a(ve, { label: n("overwriteProfile"), value: K, onChange: X, options: l.profiles.map((i) => ({ value: i.name, label: i.name })) }),
      /* @__PURE__ */ s("div", { className: "gx-import-summary", children: [
        /* @__PURE__ */ a("strong", { children: $.manifest.profileName }),
        /* @__PURE__ */ a("span", { children: n("modsToInstall", { count: $.manifest.mods.length }) })
      ] }),
      !!$.missingMods.length && /* @__PURE__ */ a(le, { error: !0, children: n("missingMods", { mods: $.missingMods.join(", ") }) }),
      /* @__PURE__ */ s("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ a(Ae, { checked: kt, onChange: kn, label: n("importAllFiles") }),
        n("importAllFiles")
      ] }),
      Me === "overwrite" && /* @__PURE__ */ s("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ a(Ae, { checked: Ct, onChange: Cn, label: n("mergeProfiles") }),
        n("mergeProfiles")
      ] })
    ] }) : /* @__PURE__ */ s(U, { children: [
      /* @__PURE__ */ a("div", { className: "gx-tabs", children: ["code", "r2", "local"].map((i) => /* @__PURE__ */ a(M, { className: xe === i ? "gx-button--primary" : "", onClick: () => yt(i), children: n(i === "code" ? "importCode" : i === "r2" ? "importR2" : "importLocal") }, i)) }),
      xe === "code" && /* @__PURE__ */ s(U, { children: [
        /* @__PURE__ */ s("label", { className: "gx-form-label", children: [
          n("importCode"),
          /* @__PURE__ */ a("textarea", { value: Be, onChange: (i) => Xe(i.target.value), placeholder: n("importCodePlaceholder"), rows: 3 })
        ] }),
        /* @__PURE__ */ s("div", { className: "gx-form-label", children: [
          /* @__PURE__ */ a("span", { children: n("importFile") }),
          Ft() ? /* @__PURE__ */ a(M, { icon: "folder", disabled: !!y, onClick: () => void Fn(), children: n("importFileButton") }) : /* @__PURE__ */ a("input", { type: "file", accept: ".r2z,.zip", onChange: (i) => {
            const u = i.target.files?.[0];
            u && En(u);
          } })
        ] })
      ] }),
      xe === "r2" && /* @__PURE__ */ s(U, { children: [
        /* @__PURE__ */ s("label", { className: "gx-form-label", children: [
          n("r2Path"),
          /* @__PURE__ */ a("input", { value: Ve, onChange: (i) => Nn(i.target.value), placeholder: "~/.config/r2modman" })
        ] }),
        se && /* @__PURE__ */ s("div", { className: "gx-file-list", children: [
          /* @__PURE__ */ a("strong", { children: n("r2Profiles") }),
          se.profiles.map((i, u) => /* @__PURE__ */ s("label", { children: [
            /* @__PURE__ */ a(Ae, { checked: !!Mt[u], label: i, onChange: (S) => St((V) => V.map((j, qe) => qe === u ? S : j)) }),
            /* @__PURE__ */ a("span", { children: i })
          ] }, i))
        ] })
      ] }),
      xe === "local" && /* @__PURE__ */ s("div", { className: "gx-form-label", children: [
        /* @__PURE__ */ a("span", { children: n("importLocalFile") }),
        Ft() ? /* @__PURE__ */ a(M, { icon: "folder", disabled: !!y, onClick: () => void zn(), children: n("importLocalFile") }) : /* @__PURE__ */ a("input", { type: "file", accept: ".zip", onChange: (i) => {
          const u = i.target.files?.[0];
          u && Un(u);
        } })
      ] })
    ] }) }),
    B === "export" && /* @__PURE__ */ s(ke, { title: n("exportTitle"), onClose: ie, footer: /* @__PURE__ */ a(M, { primary: !0, onClick: ie, children: n("done") }), children: [
      /* @__PURE__ */ a("p", { children: n("exportIntro") }),
      Mn ? /* @__PURE__ */ a(le, { error: !0, children: n("exportTooLarge") }) : /* @__PURE__ */ s("div", { className: "gx-export-code", children: [
        /* @__PURE__ */ a("code", { children: Pt }),
        /* @__PURE__ */ a(ee, { icon: "copy", label: n("copyCode"), onClick: () => void Zn(Pt, n("codeCopied")) })
      ] }),
      !t && /* @__PURE__ */ s("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ a(M, { icon: "download", disabled: !!y, onClick: Vn, children: n("exportFile") }),
        /* @__PURE__ */ a(M, { icon: "copy", disabled: !!y, onClick: () => void I("deps", async () => {
          await b.call("copy_dependency_strings", _), T(n("dependenciesCopied"));
        }), children: n("copyDependencies") }),
        /* @__PURE__ */ a(M, { icon: "copy", disabled: !!y, onClick: () => void I("debug", async () => {
          await b.call("copy_debug_info", _), T(n("debugCopied"));
        }), children: n("copyDebug") })
      ] }),
      !!Pe.length && /* @__PURE__ */ s("details", { children: [
        /* @__PURE__ */ a("summary", { children: n("exportFiles") }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("exportFilesHint") }),
        /* @__PURE__ */ a("div", { className: "gx-file-list", children: Pe.map((i) => /* @__PURE__ */ s("label", { children: [
          /* @__PURE__ */ a(Ae, { checked: i.included, disabled: !!y, label: i.path, onChange: (u) => Xn(Pe.map((S) => S.path === i.path ? { ...S, included: u } : S)) }),
          /* @__PURE__ */ a("span", { children: i.path }),
          /* @__PURE__ */ a("small", { children: pe(i.size) })
        ] }, i.path)) }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("totalSize", { size: pe(_n) }) })
      ] })
    ] }),
    B === "versions" && Y && /* @__PURE__ */ s(ke, { title: n("versionTitle", { name: Y.data.name }), onClose: ie, children: [
      /* @__PURE__ */ a("p", { children: n("currentVersion", { version: Y.data.version ?? "" }) }),
      /* @__PURE__ */ a("div", { className: "gx-version-list", children: Y.data.versions.map((i) => /* @__PURE__ */ s(M, { disabled: !!y || i.uuid === Y.data.versionUuid, icon: i.uuid === Y.data.versionUuid ? "check" : "layers", onClick: () => void I("version", async () => {
        await b.call("change_mod_version", _, { id: { packageUuid: Y.data.uuid, versionUuid: i.uuid, backend: Y.data.backend } }), F(null), z(), T(n("versionQueued"));
      }), children: [
        i.name,
        i.uuid === Y.data.versionUuid ? " · " + n("installed") : ""
      ] }, i.uuid)) })
    ] })
  ] });
}
const De = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new Map();
function Ga(e, t) {
  Ue.set(e, t);
}
function O(e) {
  return (e ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
function rt(e, t) {
  try {
    const o = window.LocalizationManager, l = o?.m_mapTokens?.get?.(e) ?? o?.m_mapFallbackTokens?.get?.(e);
    if (typeof l == "string" && l.length > 0) return l;
  } catch {
  }
  return t;
}
function Da() {
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
  for (const [o, l] of [["AppProperties_GeneralPage", "General"], ["AppProperties_General", "General"]]) e.add(O(rt(o, l)));
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
  ]) t.add(O(rt(o, l)));
  return { general: e, secondary: t };
}
function jt(e, t, o) {
  lt.get(e) !== t && (lt.set(e, t), b.log(`properties: ${o}`).catch(() => {
  }));
}
function Qt(e) {
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
function La(e, t = []) {
  const o = [e, ...t, ...Array.from(e.querySelectorAll("*")).slice(0, 300)], l = /* @__PURE__ */ new Set();
  for (const g of o) {
    if (l.has(g)) continue;
    l.add(g);
    const f = Object.keys(g).find((N) => N.startsWith("__reactFiber$") || N.startsWith("__reactInternalInstance$"));
    let k = f ? g[f] : void 0;
    for (let N = 0; k && N < 40; N++, k = k.return) {
      const h = Qt(k.memoizedProps) ?? Qt(k.pendingProps);
      if (h) return h;
    }
  }
  const r = (e.matches("[data-appid]") ? e : e.querySelector("[data-appid]"))?.getAttribute("data-appid") ?? void 0;
  if (r && /^\d+$/.test(r)) return Number(r);
  const d = (e.ownerDocument.defaultView?.location.pathname ?? "").match(/\/(?:library\/app|properties)\/(\d+)/);
  if (d) return Number(d[1]);
  for (const g of Array.from(e.querySelectorAll("img"))) {
    const f = g.src.match(/\/(?:apps|assets)\/(\d{2,9})\//);
    if (f) return Number(f[1]);
  }
}
function Ta(e, t) {
  const l = [Ue.get(e)?.title, e.title, t.querySelector('h1,h2,[class*="Title"]')?.textContent], c = [rt("AppProperties_Title", "Properties - %1$s"), "Properties - %1$s", "Properties: %1$s", "Свойства — %1$s", "Свойства: %1$s", "Eigenschaften – %1$s", "Eigenschaften: %1$s"], d = /* @__PURE__ */ new Set();
  for (const g of l) {
    const f = O(g);
    if (!f || f === "steam") continue;
    let k = !1;
    for (const N of c) {
      const h = N.split("%1$s");
      if (h.length < 2) continue;
      const w = h.map((G) => G.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")), C = f.match(new RegExp("^\\s*" + w.join("\\s*(.+?)\\s*") + "\\s*$", "i"));
      if (C?.[1]) {
        d.add(O(C[1])), k = !0;
        break;
      }
    }
    !k && !/properties|свойства|eigenschaften/.test(f) && d.add(f);
  }
  if (d.size)
    try {
      const g = window.appStore?.m_mapApps;
      if (!g?.forEach) return;
      let f;
      return g.forEach((k, N) => {
        if (f) return;
        const h = Number(N ?? k?.appid ?? k?.m_unAppID);
        if (!Number.isSafeInteger(h) || h <= 0 || h >= 2147483648) return;
        const w = O(k?.display_name ?? k?.m_strDisplayName);
        w && d.has(w) && (f = h);
      }), f;
    } catch {
      return;
    }
}
function Ea(e, t) {
  let o = e;
  for (; o.parentElement && o.parentElement !== t; ) o = o.parentElement;
  return o.parentElement === t ? o : e;
}
function Ba(e) {
  const { general: t, secondary: o } = Da(), l = Array.from(e.querySelectorAll("*")).filter((c) => {
    const d = O(c.textContent);
    if (!t.has(d) && !o.has(d) || c.closest('[role="tabpanel"],[data-galex-properties],[class*="TabContent"],[class*="tab-content"]')) return !1;
    const g = c.parentElement;
    return !(g && O(g.textContent) === d);
  }), r = l.filter((c) => t.has(O(c.textContent)));
  for (const c of r) {
    let d = c;
    for (let g = 0; d && g < 8; g++, d = d.parentElement) {
      if (d.querySelectorAll("*").length > 300) continue;
      const f = l.filter((h) => d.contains(h));
      if (f.length < 2) continue;
      const k = Array.from(new Set(f.map((h) => Ea(h, d)))), N = k.map((h) => O(h.textContent));
      if (N.some((h) => t.has(h)) && N.some((h) => o.has(h))) return { list: d, tabs: k };
    }
  }
}
function Fa(e) {
  const t = new Set(Array.from(e.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"],[class*="DialogBody"]')));
  return Ue.get(e)?.allowBodyFallback && e.body && t.add(e.body), Array.from(t);
}
function za(e) {
  return Array.from(e.dialog.querySelectorAll('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"],[class*="TabContent"],[class*="tab-content"]')).filter((t) => t !== e.panel && !t.contains(e.panel) && !t.hasAttribute("data-galex-properties"));
}
function st(e) {
  for (const t of za(e))
    e.hidden.has(t) || e.hidden.set(t, { display: t.style.display, hidden: t.hidden }), t.style.display !== "none" && (t.style.display = "none");
}
function Ra(e) {
  e.hidden.forEach((t, o) => {
    o.style.display = t.display, o.hidden = t.hidden;
  }), e.hidden.clear();
}
function $a(e) {
  return /Active|Selected|Current/.test(e) || /^(active|selected|current)$/i.test(e) || /[_-](active|selected|current)([_-]|$)/i.test(e);
}
function dt(e, t, o = []) {
  for (const l of [e, ...Array.from(e.querySelectorAll("*"))]) {
    const r = l.getAttribute("class");
    if (!r) continue;
    const c = r.split(/\s+/).filter(Boolean), d = c.filter((g) => !$a(g) && !o.includes(g));
    d.length !== c.length && (t && !t.has(l) && t.set(l, r), d.length ? l.setAttribute("class", d.join(" ")) : l.removeAttribute("class"));
  }
}
function mn(e) {
  for (const t of e.nativeTabs) dt(t, e.nativeClasses, e.selectedDelta);
  e.list.querySelectorAll('[role="tab"]').forEach((t) => {
    t !== e.tab && (dt(t, e.nativeClasses, e.selectedDelta), t.setAttribute("aria-selected", "false"));
  });
}
function hn(e, t) {
  const { tab: o, selectedDelta: l } = e, r = l.length > 0;
  o.classList.toggle("gx-tab-active", t && !r);
  for (const c of l) o.classList.toggle(c, t);
  for (const c of [o, ...Array.from(o.querySelectorAll('[role="tab"]'))]) c.setAttribute("aria-selected", t ? "true" : "false");
}
function Ha(e) {
  e.nativeClasses.forEach((t, o) => {
    o.isConnected && o.setAttribute("class", t);
  }), e.nativeClasses.clear();
}
function fn(e) {
  e.active && (e.active = !1, e.panel.hidden = !0, hn(e, !1), Ha(e), Ra(e));
}
function Ua(e) {
  if (e.active) {
    st(e), e.panel.hidden = !1;
    return;
  }
  st(e), mn(e), e.active = !0, e.panel.hidden = !1, e.sizePanel(), hn(e, !0);
}
function Jt(e, t, o) {
  e.root.render(Q(mt.Provider, { value: e.dialog.ownerDocument }, Q(ut, null, Q(_a, { key: `${e.slug}-${e.appid}`, game: t, installing: o }))));
}
function ct(e) {
  fn(e), e.resize?.disconnect(), e.list.removeEventListener("click", e.onNativeClick, !0), De.delete(e.dialog);
  const { root: t, tab: o, panel: l } = e;
  queueMicrotask(() => {
    try {
      t.unmount();
    } catch {
    }
    o.remove(), l.remove();
  });
}
function Oa(e, t) {
  const o = O(t), l = n("mods"), r = Array.from(e.querySelectorAll("*")).filter((d) => O(d.textContent) === o), c = r[r.length - 1];
  c ? c.textContent = l : e.textContent = l;
}
function Kt(e) {
  return (e.getAttribute("class") ?? "").split(/\s+/).filter(Boolean);
}
function Xa(e) {
  const t = e.find((r) => r.getAttribute("aria-selected") === "true"), o = e.find((r) => r.getAttribute("aria-selected") === "false");
  if (!t || !o) return [];
  const l = new Set(Kt(o));
  return Kt(t).filter((r) => !l.has(r));
}
function xn(e) {
  const { snapshot: t } = ot();
  for (const [c, d] of Array.from(De)) {
    if (!e.contains(c)) continue;
    if (!c.isConnected || !d.tab.isConnected || !d.list.isConnected) {
      ct(d);
      continue;
    }
    const g = t?.ok ? Ut(t, d.appid) : void 0;
    if (!g) {
      ct(d);
      continue;
    }
    d.active && (st(d), mn(d)), Jt(d, g, t.installing);
  }
  if (!t?.ok) return;
  const o = Fa(e), l = [];
  let r = 0;
  for (const c of o) {
    if (De.has(c) || c.querySelector("[data-galex-properties]")) continue;
    const d = Ba(c);
    if (!d) {
      l.push("no-tablist");
      continue;
    }
    const g = La(c, d.tabs) ?? Ta(e, c);
    if (!g) {
      l.push("no-appid");
      continue;
    }
    const f = Ut(t, g);
    if (!f) {
      l.push(`unsupported:${g}`);
      continue;
    }
    const k = d.tabs.find((A) => /workshop|мастерская/i.test(A.textContent ?? "")) ?? d.tabs[0], N = O(k.textContent), h = Xa(d.tabs), w = k.cloneNode(!0);
    dt(w, void 0, h), w.querySelectorAll("[id]").forEach((A) => A.removeAttribute("id")), w.querySelectorAll("[aria-controls]").forEach((A) => A.setAttribute("aria-controls", `galex-panel-${g}`)), w.removeAttribute("id"), w.removeAttribute("href"), w.setAttribute("role", "tab"), w.setAttribute("aria-selected", "false"), w.setAttribute("data-galex-properties", "tab"), w.id = `galex-tab-${g}`, w.setAttribute("aria-controls", `galex-panel-${g}`), Oa(w, N), w.tagName === "A" && w.setAttribute("href", "#galex-mods"), d.list.appendChild(w);
    const C = e.createElement("div");
    C.id = `galex-panel-${g}`, C.setAttribute("role", "tabpanel"), C.setAttribute("aria-labelledby", w.id), C.setAttribute("data-galex-properties", "panel"), C.className = "gx-injected-panel", C.hidden = !0, C.style.flex = "1", C.style.minHeight = "0", C.style.overflow = "hidden", (c.querySelector('[role="tabpanel"],[class*="TabContent"],[class*="tab-content"]')?.parentElement ?? d.list.parentElement?.parentElement ?? d.list.parentElement)?.appendChild(C);
    const m = ln(C), p = () => {
      const A = C.parentElement, q = e.defaultView;
      if (!A || !q) return;
      const ne = q.getComputedStyle(A), Ne = q.getComputedStyle(c), ue = (he) => Number.parseFloat(he) || 0, Oe = ue(ne.paddingTop) + ue(ne.paddingBottom), re = Math.max(0, A.clientHeight - Oe), me = Math.floor(c.getBoundingClientRect().bottom - A.getBoundingClientRect().top - ue(ne.paddingBottom) - ue(Ne.paddingBottom)), L = me > 0 ? Math.min(re || me, me) : re;
      L > 0 && (C.style.height = `${L}px`);
    };
    let v;
    typeof ResizeObserver == "function" && C.parentElement && (v = new ResizeObserver(p), v.observe(C.parentElement), v.observe(c), p());
    const D = { dialog: c, list: d.list, tab: w, nativeTabs: d.tabs, panel: C, root: m, appid: f.steamAppId, slug: f.slug, active: !1, hidden: /* @__PURE__ */ new Map(), nativeClasses: /* @__PURE__ */ new Map(), selectedDelta: h, resize: v, sizePanel: p, onNativeClick: (A) => {
      const q = A.target;
      q?.closest?.('[data-galex-properties="tab"]') || (q?.closest?.('[role="tab"],button,a') || d.tabs.some((ne) => q && ne.contains(q))) && fn(D);
    } };
    De.set(c, D), Jt(D, f, t.installing), r++, w.addEventListener("click", (A) => {
      A.preventDefault(), A.stopPropagation(), Ua(D);
    }), d.list.addEventListener("click", D.onNativeClick, !0), jt(e, `injected:${g}`, `tab injected appid=${g} slug=${f.slug}`);
  }
  if (o.length && Ue.get(e)?.allowBodyFallback) {
    const c = `${o.length}/${r}/${l.slice(0, 4).join(",")}`;
    jt(e, c, `dialogs=${o.length} injected=${r} skipped=${l.slice(0, 4).join(",") || "none"}`);
  }
}
function Yt(e) {
  const t = we.get(e);
  !t || t.timer || (t.timer = window.setTimeout(() => {
    t.timer = 0, xn(e);
  }, 180));
}
function en(e = document) {
  if (we.has(e)) return we.get(e).dispose;
  const t = new MutationObserver(() => Yt(e));
  t.observe(e.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["role", "data-appid", "src", "style", "hidden", "class"] });
  const o = () => {
    const l = we.get(e);
    l?.timer && clearTimeout(l.timer), t.disconnect();
    for (const [r, c] of Array.from(De))
      e.contains(r) && ct(c);
    we.delete(e), lt.delete(e);
  };
  return we.set(e, { observer: t, timer: 0, dispose: o }), Yt(e), o;
}
function Va(e = document) {
  xn(e);
}
const tn = "galex-styles";
function nn(e, t = document) {
  if (typeof t > "u") return;
  const o = t.getElementById(tn);
  if (o) {
    o.textContent = e;
    return;
  }
  const l = t.createElement("style");
  l.id = tn, l.textContent = e, t.head.appendChild(l);
}
const an = ".galex{--gx-text:var(--gpColor-White,#dfe3e8);--gx-muted:var(--gpColor-Neutral,#9ba8b5);--gx-line:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control-hover:var(--gpBackground-Color-Solid,rgba(255,255,255,.14));--gx-accent:var(--gpColor-Blue,#66c0f4);--gx-danger:var(--gpColor-Red,#d94b4b);color:var(--gx-text);font-family:inherit;font-size:14px;line-height:1.45;box-sizing:border-box;container-type:inline-size}.galex *,.galex *:before,.galex *:after{box-sizing:border-box}.galex h1,.galex h2,.galex h3,.galex p{margin:0}.galex button,.galex input,.galex select,.galex textarea{font:inherit;color:inherit}.galex button{cursor:pointer}.galex button:disabled{cursor:default;opacity:.45}.galex svg{flex-shrink:0;vertical-align:middle}.galex :focus-visible{outline:2px solid var(--gx-accent);outline-offset:2px}.gx-native-button{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;gap:6px;width:auto;min-width:0;max-width:100%}.gx-native-button button,.gx-native-button>button{width:auto;min-width:0;min-height:32px;padding:6px 12px;white-space:nowrap}.galex [class*=DialogButton]:not(.gx-icon-button){flex:0 0 auto;margin:0;width:auto;min-width:0;max-width:100%}.galex [class*=DialogButton]:not(.gx-icon-button)>button{width:auto;min-width:0}.gx-native-select{flex:0 0 auto;min-width:120px;max-width:240px}.gx-native-select>div{min-width:0}.gx-native-input{width:100%}.gx-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:34px;padding:6px 14px;border:1px solid transparent;border-radius:3px;background:var(--gx-control);color:var(--gx-text);white-space:nowrap}.gx-button:hover:not(:disabled){background:var(--gx-control-hover)}.gx-button--primary{background:var(--gx-accent);color:#fff}.gx-button.gx-danger{background:var(--gx-danger);color:#fff}.gx-icon-button{display:inline-flex;flex:0 0 32px;align-items:center;justify-content:center;width:32px;min-width:32px;height:32px;padding:0;border:0;border-radius:3px;background:transparent;color:var(--gx-muted)}.gx-icon-button button,.gx-icon-button>button{width:32px;min-width:32px;height:32px;padding:0}.gx-icon-button:hover:not(:disabled){background:var(--gx-control);color:var(--gx-text)}.gx-muted{color:var(--gx-muted);font-size:12px}.gx-text-danger{color:var(--gx-danger)}.galex select,.gx-input,.galex input[type=text],.galex input[type=number],.galex textarea{min-height:32px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:4px 9px}.galex select{max-width:220px}.galex textarea{width:100%;resize:vertical}.gx-checkbox{width:18px;height:18px;margin:0;accent-color:var(--gx-accent);cursor:pointer}.gx-toggle{display:inline-flex;align-items:center}.gx-toggle input{width:18px;height:18px;accent-color:var(--gx-accent)}.gx-mods{display:flex;flex-direction:column;height:100%;min-height:0;min-width:0;padding:10px 24px 24px;overflow:hidden;--gx-text:var(--gpColor-White,#dfe3e6);--gx-muted:var(--gpColor-Neutral,#8b929a);--gx-control:var(--gpBackground-Color-Soft,rgba(59,63,72,.5));--gx-control-hover:var(--gpBackground-Color-Solid,#464d58);color:var(--gx-muted);font-size:14px;font-weight:400}.gx-heading{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:10px 0;flex-shrink:0}.gx-heading h1{font-size:22px;font-weight:700;line-height:28px;color:var(--gx-text)}.gx-heading-meta{font-size:12px;color:var(--gx-muted);white-space:nowrap}.gx-toolbar{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;align-items:stretch;min-width:0;flex-shrink:0}.gx-toolbar>.gx-button,.gx-toolbar>.gx-native-button{width:100%;min-width:0;max-width:100%;margin:0}.gx-toolbar>.gx-button{border:0;color:var(--gx-text)}.gx-toolbar>.gx-native-button{display:flex}.gx-mods .gx-toolbar [class*=DialogButton]:not(.gx-icon-button){width:100%;min-width:0;max-width:100%;margin:0;background:var(--gx-control);color:var(--gx-text)}.gx-toolbar>.gx-button,.gx-toolbar>.gx-native-button,.gx-toolbar>.gx-native-button>button,.gx-mods .gx-toolbar [class*=DialogButton]:not(.gx-icon-button){min-height:34px;padding:8px 14px;font-size:13px;line-height:18px;white-space:normal}.gx-chevron-open{transform:rotate(180deg)}.gx-advanced{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px 0 0;flex-shrink:0}.gx-profile-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;min-width:0;padding:12px;border-radius:2px;background:var(--gpBackground-Color-Medium,#23262e)}.gx-profile-line{display:flex;align-items:center;gap:12px;flex:1 1 220px;min-width:0}.gx-field-label{font-size:14px;line-height:18px;color:var(--gx-text)}.gx-profile-line select{flex:1;max-width:260px;min-width:120px}.gx-profile-actions{display:flex;flex:0 1 auto;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:4px;min-width:0;max-width:60%;margin-left:auto}.gx-profile-actions [class*=DialogButton]:not(.gx-danger){flex:0 1 auto;margin:0;width:auto;min-width:0;max-width:100%;background:var(--gx-control);color:var(--gx-text)}.gx-profile-actions [class*=DialogButton]>button{width:auto;min-width:0}.gx-profile-actions>.gx-native-button,.gx-profile-actions>.gx-button{flex:0 1 auto;width:auto;min-width:0}.gx-profile-actions .gx-danger{background:var(--gx-danger);color:#fff}.gx-profile-actions .gx-button,.gx-profile-actions>.gx-native-button,.gx-profile-actions .gx-native-button>button,.gx-profile-actions [class*=DialogButton]{min-height:34px;padding:8px 14px;font-size:13px;line-height:18px;white-space:normal}.gx-search-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding-top:8px;flex-shrink:0}.gx-filter-group{display:flex;align-items:center;gap:12px;flex:1 1 260px;min-width:0;max-width:400px}.gx-filter-group>.gx-field-label{margin:0;white-space:nowrap}.gx-filter-group>.gx-native-select{flex:1 1 0;min-width:0;max-width:none}.gx-search{display:flex;align-items:center;gap:0;flex:2 1 0;min-width:0;max-width:296px;height:auto;padding:0;border:0;border-radius:0;background:transparent;color:var(--gx-text)}.gx-search input{flex:1;min-width:0}.gx-mods .gx-search input.DialogInput{border:0;border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:8px;min-height:38px;font-size:14px;font-weight:300;line-height:22px}.gx-mods .gx-search input.DialogInput:focus{outline:none;background:var(--gx-control-hover);box-shadow:inset 1px 1px 8px #000000ab}.gx-search button{border:0;background:none;color:var(--gx-muted);padding:2px;margin-left:4px}.gx-sort-direction{flex:0 0 34px;width:34px;min-width:34px;padding:0}.gx-sort-direction button{width:34px;min-width:34px;padding:0}.gx-list-heading{display:flex;align-items:center;gap:12px;min-height:38px;color:var(--gx-muted);font-size:12px;flex-shrink:0}.gx-list-heading>.gx-icon-button{margin-left:auto}.gx-update-link{display:inline-flex;gap:5px;align-items:center;border:0;background:none;color:var(--gx-accent);font-size:12px;padding:2px 4px}.gx-update-link:hover{text-decoration:underline}.gx-mod-list{display:flex;flex-direction:column;gap:2px;flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--gpBackground-Color-Dark,#0e141b);box-shadow:inset 0 4px 4px #00000040;font-size:13px;scrollbar-width:thin}.gx-mod-list::-webkit-scrollbar-thumb{background-color:#3d4450;background-clip:padding-box}.gx-mod-list::-webkit-scrollbar-thumb:hover{background-color:#464d58;background-clip:padding-box}.gx-mod-row{display:flex;flex:0 0 80px;align-items:center;justify-content:flex-start;height:80px;min-height:80px;padding:0;gap:0;background:var(--gpBackground-Color-Medium,#23262e);border-bottom:0}.gx-mod-row>[class*=DialogCheckbox],.gx-mod-row>.gx-checkbox{flex:0 0 22px;width:22px;height:22px;margin:8px}.gx-mod-index{display:flex;align-items:center;justify-content:center;flex:0 0 20px;width:20px;margin:4px;font-size:16px;line-height:20px;color:var(--gx-text)}.gx-mod-avatar{width:48px;height:48px;min-width:48px;max-width:84px;flex-shrink:0;margin:4px 7px 4px 4px;border-radius:0;object-fit:cover;background:#000;display:flex;align-items:center;justify-content:center;color:var(--gx-muted);font-weight:600}.gx-mod-row.is-disabled .gx-mod-avatar,.gx-mod-row.is-disabled .gx-mod-info{opacity:.55}.gx-mod-info{flex:1 1 0;min-width:0;padding-right:4px;overflow:hidden}.gx-mod-title{display:flex;align-items:center;gap:7px;min-width:0}.gx-mod-title h3{font-size:13px;line-height:16px;font-weight:400;color:var(--gx-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-info>p{font-size:12px;line-height:16px;color:#969696;padding-top:4px;margin:0;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-byline{display:flex;flex-wrap:nowrap;gap:4px;font-size:12px;line-height:16px;color:#969696;padding-top:4px;margin:0;overflow:hidden}.gx-mod-byline>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-badge{font-size:10px;padding:1px 5px;border-radius:2px;border:1px solid var(--gx-line);color:var(--gx-muted);white-space:nowrap}.gx-badge--update{color:var(--gx-accent);border-color:var(--gx-accent)}.gx-mod-size{display:flex;align-items:center;flex:0 1 auto;min-width:70px;margin:4px 16px 4px 4px;text-align:right;font-size:12px;line-height:16px;color:var(--gx-text)}.gx-mod-actions{display:flex;align-items:center;flex-shrink:0;padding:4px}.gx-mod-actions .gx-icon-button{width:44px;height:44px;min-width:44px;flex-basis:44px;margin:8px;padding:4px;border-radius:2px;background:var(--gpBackground-Color-Solid,#3d4450);color:var(--gx-text)}.gx-mod-actions .gx-icon-button button,.gx-mod-actions .gx-icon-button>button{width:44px;height:44px;min-width:44px;padding:4px}.gx-mod-actions .gx-icon-button svg{width:24px;height:24px}.gx-mod-actions .gx-icon-button:hover:not(:disabled){background:var(--gx-control-hover);color:#fff}.gx-notice{display:flex;align-items:center;gap:8px;padding:8px 10px;margin:8px 0;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:13px}.gx-notice--error{border-color:var(--gx-danger);color:var(--gx-danger)}.gx-notice button{margin-left:auto;border:0;background:none;color:var(--gx-accent)}.gx-empty{padding:32px 12px;text-align:center;color:var(--gx-muted)}.gx-modal-backdrop{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;background:#000000a6}.gx-modal{display:flex;flex-direction:column;width:min(580px,100%);max-height:min(84vh,760px);border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,#1b2838);box-shadow:0 8px 40px #00000080}.gx-modal>header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--gx-line)}.gx-modal h2{font-size:17px;font-weight:500}.gx-modal-body{padding:16px 18px;overflow-y:auto;min-height:0}.gx-modal>footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid var(--gx-line)}.gx-form-label{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--gx-muted);margin-bottom:12px}.gx-form-label input,.gx-form-label textarea,.gx-form-label select{color:var(--gx-text)}.gx-check-label{display:flex;align-items:center;gap:8px;font-size:13px;margin:8px 0}.gx-import-summary{display:flex;flex-direction:column;gap:4px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code{display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code code{flex:1;min-width:0;overflow-wrap:anywhere;font-family:monospace}.gx-version-list{display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto;margin-top:10px}.gx-file-list{max-height:220px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px;padding:6px;margin:8px 0}.gx-file-list label{display:flex;align-items:center;gap:8px;padding:3px 2px;font-size:12px}.gx-file-list span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}.gx-tabs button[aria-selected=true]{background:var(--gx-control-hover);border-color:var(--gx-accent)}.gx-global-settings{height:100%;min-height:0;overflow-y:auto;padding:0;font-size:14px}.MillenniumDesktopSidebar_EditorContent>.gx-global-settings{margin:-24px -20px -20px;padding:12px 16px 16px}.gx-settings-header{display:flex;align-items:center;gap:8px;margin-bottom:6px}.gx-settings-header h1{font-size:18px;font-weight:500;margin-right:auto}.gx-settings-section{margin:12px 0;padding-bottom:10px;border-bottom:1px solid var(--gx-line)}.gx-settings-section h2{font-size:15px;font-weight:500;margin-bottom:6px}.gx-setting{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:6px 0}.gx-setting>div{display:flex;flex-direction:column;gap:2px;min-width:0}.gx-setting strong{font-size:14px;font-weight:500}.gx-setting small{color:var(--gx-muted);font-size:12px}.gx-connection{display:inline-flex;align-items:center;gap:6px;color:var(--gx-muted);font-size:12px;white-space:nowrap}.gx-status-dot{width:7px;height:7px;border-radius:50%;background:var(--gpColor-Green,#5ba32b)}.gx-path{display:block;padding:6px 8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:12px;overflow-wrap:anywhere;color:var(--gx-muted)}.gx-settings-actions{display:flex;gap:8px;margin:8px 0}.gx-settings-bottom{color:var(--gx-muted);font-size:12px;margin-top:10px}.gx-success{display:flex;align-items:center;gap:6px;color:var(--gpColor-Green,#5ba32b);font-size:12px;margin:6px 0}.gx-settings-intro{color:var(--gx-muted);font-size:12px;margin-bottom:8px}.gx-games{margin-top:8px}.gx-games summary{cursor:pointer;font-size:13px}.gx-games summary span{color:var(--gx-muted);margin-left:6px}.gx-game-list{list-style:none;margin:6px 0 0;padding:0;max-height:180px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px}.gx-game-list li{display:flex;justify-content:space-between;gap:8px;padding:4px 8px;font-size:12px;border-bottom:1px solid var(--gx-line)}.gx-game-list li:last-child{border-bottom:0}.gx-game-list span{color:var(--gx-muted)}[data-galex-properties=tab]{cursor:pointer;user-select:none}[data-galex-properties=tab].gx-tab-active{color:var(--gpColor-White,#fff);background:var(--gpBackground-Color-Soft,rgba(255,255,255,.08))}.gx-injected-panel{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;height:100%;max-height:100%;overflow:hidden;color:var(--gx-text,#dfe3e8)}.gx-injected-panel[hidden]{display:none!important}@container (max-width:640px){.gx-mods{padding:12px}.gx-toolbar{grid-template-columns:1fr}.gx-mod-index,.gx-mod-size{display:none}.gx-mod-info>p{display:none}.gx-profile-actions{flex-basis:100%;max-width:100%}.gx-profile-actions .gx-button,.gx-profile-actions .gx-native-button{flex:0 1 auto}.gx-filter-group{flex-basis:100%;max-width:none}.gx-search{max-width:none}}.gx-downloads{margin:0 0 16px;padding:14px 16px;border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,rgba(0,0,0,.2))}.gx-downloads-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:4px}.gx-downloads-header h2{font-size:18px;font-weight:500}.gx-download-graphs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:10px 0}.gx-sparkline{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:8px;font-size:12px;color:var(--gx-muted)}.gx-sparkline svg{width:100%;height:32px;color:var(--gx-accent);background:var(--gx-control);border-radius:2px}.gx-sparkline strong{color:var(--gx-text);font-weight:500;white-space:nowrap}.gx-download-card{display:flex;gap:12px;align-items:center;padding:10px;margin-top:8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control)}.gx-download-card.is-error{border-color:var(--gx-danger)}.gx-download-cover{width:92px;height:43px;flex:0 0 92px;object-fit:cover;border-radius:2px;background:var(--gx-control-hover)}.gx-download-cover--fallback{display:flex;align-items:center;justify-content:center;color:var(--gx-muted)}.gx-download-body{flex:1;min-width:0}.gx-download-body header{display:flex;align-items:baseline;gap:8px;min-width:0}.gx-download-body h3{font-size:15px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-task{font-size:12px;color:var(--gx-muted);margin:2px 0 6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-meta{display:flex;justify-content:space-between;gap:8px;font-size:12px;color:var(--gx-muted);margin-top:4px}.gx-progress{width:100%;height:8px;accent-color:var(--gx-accent)}@container (max-width:640px){.gx-download-graphs{grid-template-columns:1fr}.gx-download-cover{display:none}}", H = "GaleX";
function Wa() {
  return { title: "GaleX", icon: Q(J, { name: "package", size: 18 }), content: Q(ut, null, Q(ua)), linkQueued: (e) => (at(), !0) };
}
async function Za() {
  window.__GALEX_STEAM__?.dispose(), sa(), await oa();
  const e = [], t = [];
  let o = !1, l = !1;
  const r = ma();
  e.push(r);
  const c = ba();
  e.push(c);
  const d = Wa(), g = window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[H], f = window.PLUGIN_LIST?.[H];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS ??= {})[H] = d, (window.PLUGIN_LIST ??= {})[H] = { ...f, ...d };
  const k = /* @__PURE__ */ new Set([document]);
  nn(an, document);
  const N = (m) => {
    if (o || l || !m.body) return;
    l = !0;
    const p = m.createElement("div");
    p.id = "galex-link-installer", m.body.appendChild(p);
    const v = ln(p);
    t.push(v), v.render(Q(mt.Provider, { value: m }, Q(ut, null, Q(xa)))), e.push(() => p.remove());
  }, h = (m, p) => {
    if (o || k.has(m)) return;
    const v = String(p?.m_strName ?? p?.name ?? ""), D = String(p?.m_strTitle ?? p?.title ?? m.title ?? ""), A = v.includes("SP Desktop") && !v.includes("Login");
    Ga(m, { name: v, title: D, allowBodyFallback: m !== document && !A }), k.add(m), nn(an, m), e.push(en(m)), A && N(m), b.log(`window observed name=${v || "?"} title=${D || "?"} body=${!!m.body} linkRoot=${l}`).catch(() => {
    });
  }, w = (m, p) => {
    if (o || !m) return;
    const v = () => {
      if (!o && m.document?.body)
        try {
          h(m.document, p);
        } catch (D) {
          console.warn("[GaleX] Cannot inspect property window", D), b.log(`window inspect failed: ${String(D)}`).catch(() => {
          });
        }
    };
    if (m.document?.body) {
      v();
      return;
    }
    m.addEventListener?.("DOMContentLoaded", v, { once: !0 }), m.addEventListener?.("load", v, { once: !0 }), e.push(() => {
      m.removeEventListener?.("DOMContentLoaded", v), m.removeEventListener?.("load", v);
    });
  };
  e.push(en(document));
  try {
    const m = Z()?.routerHook;
    if (typeof m?.addPatch == "function") {
      const p = (v) => ({ ...v, children: Q(Sa, null, v.children) });
      m.addPatch("/library/downloads", p, 7), e.push(() => {
        try {
          m.removePatch?.("/library/downloads", p, 7);
        } catch {
        }
      });
    }
  } catch (m) {
    console.warn("[GaleX] Downloads route patch unavailable", m);
  }
  try {
    const m = Z(), p = m?.Millennium?.AddWindowCreateHook ?? m?.AddWindowCreateHook ?? window.Millennium?.AddWindowCreateHook;
    typeof p == "function" ? p((v) => {
      w(v?.window ?? v?.document?.defaultView ?? v?.BrowserWindow ?? v?.m_popup?.window ?? v?.m_popup ?? v?.m_BrowserWindow, v);
    }) : console.warn("[GaleX] Window hook unavailable; observing the main Steam document only");
  } catch (m) {
    console.warn("[GaleX] Window hook unavailable", m);
  }
  const C = window.setTimeout(() => N(document), 3e3);
  e.push(() => window.clearTimeout(C)), e.push(fa(() => {
    for (const m of k)
      if (!m.defaultView?.closed)
        try {
          Va(m);
        } catch {
        }
  }));
  const G = () => {
    o || (o = !0, e.reverse().forEach((m) => {
      try {
        m();
      } catch {
      }
    }), t.forEach((m) => {
      try {
        m.unmount();
      } catch {
      }
    }), g === void 0 ? delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[H] : window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS[H] = g, f === void 0 ? delete window.PLUGIN_LIST?.[H] : window.PLUGIN_LIST[H] = f, delete window.__GALEX_STEAM__, window.GaleX?.dispose === G && delete window.GaleX);
  };
  window.__GALEX_STEAM__ = { dispose: G }, window.GaleX = { openSettings: () => {
    const m = Z();
    m?.Millennium?.openQuickAccess?.({ plugin: H }) ?? m?.openQuickAccess?.({ plugin: H }) ?? window.Millennium?.openQuickAccess?.({ plugin: H });
  }, openProperties: () => Z()?.Navigation?.NavigateToAppProperties?.(), dispose: G }, console.info("[GaleX] frontend 0.3.5 mounted"), b.log(`frontend 0.3.5 mounted; url=${location.href}`).catch(() => {
  });
  const R = window.MILLENNIUM_BACKEND_IPC;
  return typeof R?.postMessage == "function" ? Promise.resolve(R.postMessage(1, { pluginName: H })).then(() => console.info("[GaleX] backend notified that the frontend is loaded")).catch((m) => console.warn("[GaleX] Frontend-loaded notification failed", m)) : console.warn("[GaleX] Millennium backend IPC is unavailable"), d;
}
async function qa() {
  return document.body || await new Promise((e) => document.addEventListener("DOMContentLoaded", () => e(), { once: !0 })), Za();
}
let Re;
function ja() {
  return Re || (Re = qa().catch((e) => {
    throw Re = void 0, e;
  })), Re;
}
ja().catch((e) => console.error("[GaleX] Startup failed", e));
export {
  ja as default
};
