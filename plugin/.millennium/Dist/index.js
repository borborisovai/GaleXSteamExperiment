const P = window.SP_REACT;
P || console.error("[GaleX] window.SP_REACT is missing — is Millennium loaded?");
const J = P.createElement;
P.cloneElement;
const Yn = P.createContext;
P.createRef;
P.forwardRef;
P.memo;
const jn = P.useCallback, ea = P.useContext;
P.useDebugValue;
P.useDeferredValue;
const ae = P.useEffect;
P.useId;
P.useImperativeHandle;
P.useLayoutEffect;
const sn = P.useMemo;
P.useReducer;
const je = P.useRef, b = P.useState, mt = P.useSyncExternalStore;
P.useTransition;
const ta = P.Component;
P.PureComponent;
P.Fragment;
P.StrictMode;
P.Suspense;
P.Children;
P.isValidElement;
P.version;
const ye = window.SP_REACTDOM, et = (e) => typeof ye?.createRoot == "function" ? ye.createRoot(e) : {
  render(t) {
    ye.render(t, e);
  },
  unmount() {
    ye.unmountComponentAtNode?.(e);
  }
}, na = ye.createPortal;
ye.flushSync;
const He = window.SP_REACT, Bt = window.SP_JSX_FACTORY;
function ht(e, t, a) {
  const { children: l, ...r } = t ?? {};
  return a !== void 0 && (r.key = a), l === void 0 ? He.createElement(e, r) : Array.isArray(l) ? He.createElement(e, r, ...l) : He.createElement(e, r, l);
}
const Ce = typeof Bt?.jsx == "function" ? Bt : void 0, O = Ce?.Fragment ?? He.Fragment, o = Ce ? Ce.jsx : ht, d = Ce?.jsxs ?? ht;
Ce && Ce.jsx;
const Ft = {
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
}, aa = {
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
function K({ name: e, size: t = 18, className: a, strokeWidth: l = 1.6 }) {
  const r = window.MILLENNIUM_API?.IconsModule?.[aa[e] ?? ""], c = sn(() => Ft[e] ?? Ft.info, [e]);
  return typeof r == "function" ? /* @__PURE__ */ o(r, { width: t, height: t, className: a, "aria-hidden": "true", focusable: "false" }) : /* @__PURE__ */ o(
    "svg",
    {
      className: a,
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
      children: /* @__PURE__ */ o("path", { d: c })
    }
  );
}
function oa(e) {
  let t = e;
  for (let a = 0; a < 2 && typeof t == "string"; a++)
    try {
      t = JSON.parse(t);
    } catch {
      throw new Error("Invalid GaleX JSON reply from Millennium");
    }
  if (typeof t != "object" || t === null || Array.isArray(t) || typeof t.ok != "boolean")
    throw new Error("Invalid GaleX reply from Millennium");
  return t;
}
const zt = {
  english: "en",
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  russian: "ru",
  ru: "ru",
  "ru-ru": "ru"
}, tt = /* @__PURE__ */ new Set();
let Te = "en", dn = "english";
function cn(e) {
  return String(e ?? "").trim().toLowerCase().replace(/_/g, "-");
}
function ia(e) {
  const t = cn(e);
  return zt[t] ?? zt[t.split("-")[0]] ?? "en";
}
function la(e) {
  dn = cn(e) || "english";
  const t = ia(e);
  t !== Te && (Te = t, tt.forEach((a) => a()));
}
function Rt() {
  return Te;
}
function ra() {
  return dn;
}
function nt(e) {
  const a = {
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
  if (a) return n(a);
  if (e.startsWith("Не найдена headless-сборка Gale")) return n("missingBuild");
  const l = e.match(/^Некорректный ответ Gale \((\d+)\)$/);
  return l ? n("invalidGaleResponse", { status: l[1] }) : e.startsWith("Не удалось запустить headless Gale; см. ") ? n("launchFailed", { path: e.slice(40) }) : e;
}
function Ee() {
  return mt((e) => (tt.add(e), () => tt.delete(e)), Rt, Rt);
}
async function sa(e = window) {
  let t;
  try {
    const a = e.SteamClient?.Settings;
    typeof a?.GetCurrentLanguage == "function" && (t = await a.GetCurrentLanguage());
  } catch {
  }
  if (!t)
    try {
      const a = e.LocalizationManager;
      t = a?.m_rgLocalesToUse?.[0] ?? a?.m_strCurrentLanguage;
    } catch {
    }
  return la(t ?? "english"), Te;
}
const pn = {
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
}, da = {
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
}, ca = { en: pn, ru: da };
function n(e, t) {
  let a = ca[Te][e] ?? pn[e] ?? e;
  if (t) for (const [l, r] of Object.entries(t)) a = a.split(`{${l}}`).join(String(r));
  return a;
}
function Z() {
  return window.MILLENNIUM_API;
}
let at;
function pa(e) {
  at = e;
}
async function q(e, t = {}) {
  if (!at) throw new Error(n("backendMissing"));
  const a = await at(e, t);
  let l;
  try {
    l = oa(a);
  } catch (r) {
    throw new Error(nt(r instanceof Error ? r.message : String(r)));
  }
  if (!l.ok) throw new Error(nt(l.error || n("bridgeNoReply")));
  return l.data;
}
function ga() {
  pa(async (e, t) => {
    const a = Z();
    if (!a?.Millennium?.callServerMethod) throw new Error(n("millenniumMissing"));
    return a.Millennium.callServerMethod("GaleX", e, { payload: JSON.stringify(t) });
  });
}
const v = {
  snapshot: () => q("snapshot"),
  progress: () => q("progress"),
  cancelInstalls: () => q("command", { method: "cancel_installs", args: {} }),
  call: (e, t, a = {}) => q("command", { method: e, args: { slug: t.slug, profileId: t.profileId, ...a } }),
  browserUrl: (e) => q("browser_url", { ...e }),
  dismissLink: (e) => q("dismiss_link", { url: e }),
  global: (e, t = {}) => q("command", { method: e, args: t }),
  getConfig: () => q("get_config"),
  setConfig: (e) => q("set_config", { path: e }),
  restart: () => q("restart"),
  log: (e) => q("frontend_log", { message: e })
};
function ot(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(n("invalidBrowserUrl"));
  const a = Z()?.Navigation;
  a?.NavigateToSteamWeb ? a.NavigateToSteamWeb(e) : window.open(e, "_blank", "noopener,noreferrer");
}
function gn(e = document) {
  try {
    const t = e.defaultView?.SteamClient?.Window;
    t?.BringToFront?.(!0), t?.SetKeyFocus?.(!0), t?.MarkLastFocused?.(), e.defaultView?.focus();
  } catch {
  }
}
function ua() {
  const e = Z()?.Navigation;
  if (e?.Navigate) {
    e.Navigate("/library/downloads");
    return;
  }
  const t = window.SteamClient?.URL ?? Z()?.SteamClient?.URL;
  t?.ExecuteSteamURL && t.ExecuteSteamURL("steam://nav/downloads");
}
function ma(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(n("invalidBrowserUrl"));
  const a = Z()?.Browser ?? window.SteamClient?.Browser;
  a?.StartDownload ? a.StartDownload(e) : ot(e);
}
function un() {
  return window.SteamClient?.System ?? Z()?.SteamClient?.System;
}
function $t() {
  return typeof un()?.OpenFileDialog == "function";
}
async function Ht(e, t, a) {
  const l = un();
  if (typeof l?.OpenFileDialog != "function") return null;
  try {
    const r = await l.OpenFileDialog({
      strTitle: e,
      rgFilters: [
        { strFileTypeName: t, rFilePatterns: a, bUseAsDefault: !0 },
        { strFileTypeName: n("allFiles"), rFilePatterns: ["*"] }
      ]
    });
    return typeof r == "string" && r.length > 0 ? r : null;
  } catch {
    return null;
  }
}
function B(e) {
  return nt(e instanceof Error ? e.message : String(e));
}
function ha({ error: e, onRetry: t }) {
  return Ee(), /* @__PURE__ */ d("div", { className: "galex gx-crash", role: "alert", children: [
    /* @__PURE__ */ o("h2", { children: n("crashTitle") }),
    /* @__PURE__ */ o("p", { children: n("crashBody") }),
    /* @__PURE__ */ o("pre", { children: B(e) }),
    /* @__PURE__ */ o("button", { className: "gx-button", onClick: t, children: n("retry") })
  ] });
}
class ft extends ta {
  state = {};
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, a) {
    console.error("[GaleX]", t, a.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ o(ha, { error: this.state.error, onRetry: () => this.setState({ error: void 0 }) }) : this.props.children;
  }
}
const xt = Yn(document);
function mn() {
  return ea(xt);
}
function he(e) {
  const t = Z()?.[e];
  return typeof t == "function" || t && typeof t == "object" ? t : void 0;
}
function S({ children: e, icon: t, primary: a, className: l = "", ...r }) {
  const c = he(a ? "DialogButtonPrimary" : "DialogButton") ?? he("DialogButton"), s = /* @__PURE__ */ d(O, { children: [
    t && /* @__PURE__ */ o(K, { name: t, size: 16 }),
    " ",
    e
  ] });
  return c ? /* @__PURE__ */ o(c, { ...r, className: `gx-native-button ${a ? "gx-native-button--primary" : ""} ${l}`, children: s }) : /* @__PURE__ */ o("button", { type: "button", ...r, className: `gx-button ${a ? "gx-button--primary" : ""} ${l}`, children: s });
}
function ne({ icon: e, label: t, ...a }) {
  const l = he("DialogButton");
  return l ? /* @__PURE__ */ o(l, { ...a, className: `gx-icon-button ${a.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ o(K, { name: e, size: 18 }) }) : /* @__PURE__ */ o("button", { type: "button", ...a, className: `gx-icon-button ${a.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ o(K, { name: e, size: 18 }) });
}
function ve({ value: e, onChange: t, options: a, label: l, disabled: r }) {
  const c = he("Dropdown");
  return c ? /* @__PURE__ */ o("div", { className: "gx-native-select", children: /* @__PURE__ */ o(c, { disabled: r, menuLabel: l, strDefaultLabel: l, rgOptions: a.map((s) => ({ data: s.value, label: s.label })), selectedOption: e, contextMenuPositionOptions: { bMatchWidth: !0 }, onChange: (s) => t(s.data) }) }) : /* @__PURE__ */ o("select", { "aria-label": l, value: e, disabled: r, onChange: (s) => t(typeof e == "number" ? Number(s.target.value) : s.target.value), children: a.map((s) => /* @__PURE__ */ o("option", { value: s.value, children: s.label }, s.value)) });
}
function Ie({ checked: e, onChange: t, label: a, disabled: l }) {
  const r = he("DialogCheckbox");
  return r ? /* @__PURE__ */ o(r, { controlled: !0, checked: e, disabled: l, "aria-label": a, onChange: t }) : /* @__PURE__ */ o("input", { className: "gx-checkbox", type: "checkbox", "aria-label": a, checked: e, disabled: l, onChange: (c) => t(c.target.checked) });
}
function Je({ checked: e, onChange: t, label: a, disabled: l }) {
  const r = he("Toggle");
  return r ? /* @__PURE__ */ o("div", { className: "gx-toggle", role: "group", "aria-label": a, children: /* @__PURE__ */ o(r, { value: e, disabled: l, onChange: t }) }) : /* @__PURE__ */ d("label", { className: "gx-toggle", children: [
    /* @__PURE__ */ o("input", { type: "checkbox", role: "switch", "aria-label": a, checked: e, disabled: l, onChange: (c) => t(c.target.checked) }),
    /* @__PURE__ */ o("span", { "aria-hidden": "true" })
  ] });
}
function fa({ label: e, description: t, className: a = "", ...l }) {
  const r = he("TextField");
  return r ? /* @__PURE__ */ o(r, { ...l, label: e, description: t, className: `gx-native-input ${a}` }) : /* @__PURE__ */ o("input", { ...l, className: `gx-input ${a}` });
}
function ke({ title: e, children: t, onClose: a, footer: l }) {
  const r = mn(), c = je(null), s = je(a);
  return s.current = a, ae(() => {
    gn(r);
    const u = r.activeElement, h = c.current, N = () => Array.from(h?.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]') ?? []);
    (h?.querySelector("input,select,textarea") ?? N()[0])?.focus();
    const C = (f) => {
      if (f.key === "Escape" && (f.stopPropagation(), s.current()), f.key === "Tab") {
        const w = N(), _ = w[0], y = w[w.length - 1];
        f.shiftKey && r.activeElement === _ ? (f.preventDefault(), y?.focus()) : !f.shiftKey && r.activeElement === y && (f.preventDefault(), _?.focus());
      }
    };
    return h?.addEventListener("keydown", C), () => {
      h?.removeEventListener("keydown", C), u?.focus();
    };
  }, [r]), na(/* @__PURE__ */ o("div", { className: "galex gx-modal-backdrop", onMouseDown: (u) => {
    u.target === u.currentTarget && a();
  }, children: /* @__PURE__ */ d("div", { ref: c, className: "gx-modal DialogPopup_Generic", role: "dialog", "aria-modal": "true", "aria-label": e, children: [
    /* @__PURE__ */ d("header", { children: [
      /* @__PURE__ */ o("h2", { children: e }),
      /* @__PURE__ */ o(ne, { icon: "x", label: n("close"), onClick: a })
    ] }),
    /* @__PURE__ */ o("div", { className: "gx-modal-body", children: t }),
    l && /* @__PURE__ */ o("footer", { children: l })
  ] }) }), r.body);
}
function Ut({ title: e, children: t, onClose: a, onConfirm: l, busy: r, danger: c }) {
  return /* @__PURE__ */ o(ke, { title: e, onClose: a, footer: /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ o(S, { onClick: a, disabled: r, children: n("cancel") }),
    /* @__PURE__ */ o(S, { primary: !0, className: c ? "gx-danger" : "", onClick: l, disabled: r, children: n(r ? "working" : "confirm") })
  ] }), children: /* @__PURE__ */ o("div", { children: t }) });
}
function se({ children: e, error: t, onRetry: a }) {
  return /* @__PURE__ */ d("div", { className: `gx-notice ${t ? "gx-notice--error" : ""}`, role: t ? "alert" : "status", children: [
    /* @__PURE__ */ o(K, { name: t ? "warning" : "info", size: 17 }),
    /* @__PURE__ */ o("span", { children: e }),
    a && /* @__PURE__ */ o("button", { onClick: a, children: n("retry") })
  ] });
}
function me(e) {
  return e >= 1073741824 ? n("bytesGb", { value: (e / 1073741824).toFixed(1) }) : e >= 1048576 ? n("bytesMb", { value: (e / 1048576).toFixed(1) }) : n("bytesKb", { value: Math.round(e / 1024) });
}
function be({ title: e, hint: t, children: a }) {
  return /* @__PURE__ */ d("div", { className: "gx-setting", children: [
    /* @__PURE__ */ d("div", { children: [
      /* @__PURE__ */ o("strong", { children: e }),
      t && /* @__PURE__ */ o("small", { children: t })
    ] }),
    a
  ] });
}
function xa({ demo: e = !1 }) {
  Ee();
  const [t, a] = b(), [l, r] = b(), [c, s] = b(""), [u, h] = b(""), [N, C] = b(""), [f, w] = b(!1), _ = async () => {
    h("");
    try {
      const [p, x] = await Promise.all([v.snapshot(), v.global("prefs")]);
      r(p), a(x), e || s(await v.getConfig());
    } catch (p) {
      h(B(p));
    }
  };
  ae(() => {
    _();
  }, []);
  const y = async (p) => {
    if (!(!t || f)) {
      w(!0), h(""), C("");
      try {
        const x = { ...t, ...p };
        await v.global("set_prefs", { value: x }), a(x), C(n("savedInGale"));
      } catch (x) {
        h(B(x));
      } finally {
        w(!1);
      }
    }
  }, D = async () => {
    w(!0), h("");
    try {
      await v.setConfig(c.trim()), await v.restart(), C(n("pathSaved")), setTimeout(() => void _(), 2500);
    } catch (p) {
      h(B(p));
    } finally {
      w(!1);
    }
  }, g = async () => {
    w(!0), h("");
    try {
      const p = await v.global("clear_download_cache");
      C(n("cacheCleared", { size: me(p) }));
    } catch (p) {
      h(B(p));
    } finally {
      w(!1);
    }
  };
  return /* @__PURE__ */ d("section", { className: "galex gx-global-settings", children: [
    /* @__PURE__ */ d("div", { className: "gx-settings-header", children: [
      /* @__PURE__ */ o("h1", { children: "GaleX" }),
      /* @__PURE__ */ d("span", { className: "gx-connection", children: [
        /* @__PURE__ */ o("span", { className: "gx-status-dot" }),
        l ? `Gale ${l.coreVersion}` : n("noConnection")
      ] }),
      /* @__PURE__ */ o(ne, { icon: "refresh", label: n("checkConnection"), disabled: f, onClick: () => void _() })
    ] }),
    /* @__PURE__ */ o("p", { className: "gx-settings-intro", children: n("settingsIntro") }),
    u && /* @__PURE__ */ o(se, { error: !0, onRetry: () => void _(), children: u }),
    N && /* @__PURE__ */ d("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ o(K, { name: "check", size: 15 }),
      N
    ] }),
    /* @__PURE__ */ d("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ o("h2", { children: n("connection") }),
      /* @__PURE__ */ o(be, { title: n("headlessGale"), hint: n("headlessHint") }),
      !e && /* @__PURE__ */ d(O, { children: [
        /* @__PURE__ */ o(fa, { label: n("galePath"), value: c, disabled: f, onChange: (p) => s(p.target.value), placeholder: n("galePathPlaceholder") }),
        /* @__PURE__ */ o("div", { className: "gx-settings-actions", children: /* @__PURE__ */ o(S, { onClick: () => void D(), disabled: f, children: n("saveRestart") }) }),
        /* @__PURE__ */ o("p", { className: "gx-muted", children: n("galePathHint") })
      ] }),
      /* @__PURE__ */ o(be, { title: n("dataDir"), hint: n("dataDirHint") }),
      /* @__PURE__ */ o("code", { className: "gx-path", children: l?.dataDir ?? "—" }),
      !!l?.games.length && /* @__PURE__ */ d("details", { className: "gx-games", children: [
        /* @__PURE__ */ d("summary", { children: [
          n("galeGames"),
          " ",
          /* @__PURE__ */ o("span", { children: l.games.length })
        ] }),
        /* @__PURE__ */ o("p", { className: "gx-muted", children: n("galeGamesHint") }),
        /* @__PURE__ */ o("ul", { className: "gx-game-list", children: l.games.map((p) => /* @__PURE__ */ d("li", { children: [
          p.name,
          " ",
          /* @__PURE__ */ o("span", { children: p.steamAppId ?? "?" })
        ] }, p.slug)) })
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ o("h2", { children: n("galePreferences") }),
      /* @__PURE__ */ o("p", { className: "gx-muted", children: n("galePreferencesHint") }),
      t ? /* @__PURE__ */ d(O, { children: [
        /* @__PURE__ */ o(be, { title: n("fetchAuto"), hint: n("fetchAutoHint"), children: /* @__PURE__ */ o(Je, { label: n("fetchAuto"), checked: t.fetchModsAutomatically, disabled: f, onChange: (p) => void y({ fetchModsAutomatically: p }) }) }),
        /* @__PURE__ */ o(be, { title: n("pullBeforeLaunch"), hint: n("pullBeforeLaunchHint"), children: /* @__PURE__ */ o(Je, { label: n("pullBeforeLaunch"), checked: t.pullBeforeLaunch, disabled: f, onChange: (p) => void y({ pullBeforeLaunch: p }) }) }),
        /* @__PURE__ */ o(be, { title: n("skipBackendConfirm"), hint: n("skipBackendConfirmHint"), children: /* @__PURE__ */ o(Je, { label: n("skipBackendConfirm"), checked: t.backendSkipConfirm, disabled: f, onChange: (p) => void y({ backendSkipConfirm: p }) }) })
      ] }) : /* @__PURE__ */ o("p", { className: "gx-muted", children: n("prefsLoading") })
    ] }),
    /* @__PURE__ */ d("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ o("h2", { children: n("downloads") }),
      /* @__PURE__ */ o(be, { title: n("downloadCache"), hint: n("downloadCacheHint"), children: /* @__PURE__ */ o(S, { disabled: f || !t || l?.installing, onClick: () => void g(), children: n("clearCache") }) })
    ] }),
    /* @__PURE__ */ o("p", { className: "gx-settings-bottom", children: n("settingsBottom") })
  ] });
}
let bt = { error: "", loading: !0 };
const Le = /* @__PURE__ */ new Set();
let vt, ge = !0, Ke = !1, _e = 0;
function Ot(e) {
  bt = e, Le.forEach((t) => t());
}
async function wt() {
  if (ge || Ke) return;
  Ke = !0;
  const e = _e;
  try {
    const t = await v.snapshot();
    !ge && e === _e && Ot({ snapshot: t, error: t.ok ? "" : n("incompatibleBridge"), loading: !1 });
  } catch (t) {
    !ge && e === _e && Ot({ ...bt, error: B(t), loading: !1 });
  } finally {
    Ke = !1, ge || (vt = setTimeout(() => void wt(), document.visibilityState === "hidden" ? 15e3 : 3e3));
  }
}
function ba() {
  return ge ? (ge = !1, _e++, wt(), () => Xt()) : () => Xt();
}
function Xt() {
  ge = !0, _e++, clearTimeout(vt);
}
function it() {
  clearTimeout(vt), wt();
}
function lt() {
  return bt;
}
function va() {
  return mt((e) => (Le.add(e), () => Le.delete(e)), lt, lt);
}
function Vt(e, t) {
  return e?.games.find((a) => a.steamAppId === t);
}
function wa(e) {
  return Le.add(e), () => {
    Le.delete(e);
  };
}
function ya() {
  Ee();
  const e = mn(), { snapshot: t } = va(), a = t?.pendingLinks[0], [l, r] = b(), [c, s] = b(), [u, h] = b(), [N, C] = b(""), [f, w] = b(!1), [_, y] = b(0);
  if (ae(() => {
    if (!a) return;
    gn(e);
    let p = !1;
    return r(void 0), C(""), s(void 0), (async () => {
      try {
        const [x, L] = await Promise.all([v.call("profiles", { slug: a.slug }), v.call("resolve_link", { slug: a.slug }, { url: a.url })]);
        p || (s(x), h(x.activeId), r(L));
      } catch (x) {
        p || C(B(x));
      }
    })(), () => {
      p = !0;
    };
  }, [a?.url, a?.slug, _]), !a) return null;
  const D = () => {
    f || v.dismissLink(a.url).then(() => it()).catch((p) => C(B(p)));
  }, g = () => void (async () => {
    w(!0), C("");
    try {
      await v.call("install_mod", { slug: a.slug, profileId: u }, { id: { packageUuid: l.uuid, versionUuid: l.versionUuid, backend: l.backend } }), await v.dismissLink(a.url), it();
    } catch (p) {
      C(B(p));
    } finally {
      w(!1);
    }
  })();
  return /* @__PURE__ */ d(ke, { title: n("linkTitle"), onClose: D, footer: /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ o(S, { disabled: f, onClick: D, children: n("cancel") }),
    /* @__PURE__ */ o(S, { primary: !0, disabled: f || !l || u === void 0, onClick: g, children: n(f ? "linkInstalling" : "linkInstall") })
  ] }), children: [
    /* @__PURE__ */ o("h3", { children: l?.name ?? a.url.split("/").slice(-2, -1)[0] }),
    /* @__PURE__ */ o("p", { className: "gx-muted", children: l ? `${l.author} · v${l.version}` : n("linkChecking") }),
    c && /* @__PURE__ */ d("label", { className: "gx-form-label", children: [
      n("linkProfile"),
      /* @__PURE__ */ o(ve, { label: n("linkProfile"), value: u ?? c.activeId, options: c.profiles.map((p) => ({ value: p.id, label: p.name })), onChange: h })
    ] }),
    /* @__PURE__ */ o("p", { className: "gx-muted", children: n("linkDeps", { game: t?.games.find((p) => p.slug === a.slug)?.name ?? a.slug }) }),
    N && /* @__PURE__ */ o(se, { error: !0, onRetry: () => y((p) => p + 1), children: N })
  ] });
}
let Ue = { error: "" };
const rt = /* @__PURE__ */ new Set();
let yt, ue = !0, Ye = !1, De = 0;
function Wt(e) {
  Ue = e, rt.forEach((t) => t());
}
async function kt() {
  if (ue || Ye) return;
  Ye = !0;
  const e = De;
  try {
    const t = await v.progress();
    !ue && e === De && Wt({ snapshot: t, error: "" });
  } catch (t) {
    !ue && e === De && Wt({ ...Ue, error: B(t) });
  } finally {
    Ye = !1, ue || (yt = setTimeout(() => void kt(), Ue.snapshot?.active ? 750 : 2e3));
  }
}
function ka() {
  return ue ? (ue = !1, De++, kt(), () => qt()) : () => qt();
}
function qt() {
  ue = !0, De++, clearTimeout(yt);
}
function Ca() {
  clearTimeout(yt), kt();
}
function Zt() {
  return Ue;
}
function hn() {
  return mt((e) => (rt.add(e), () => rt.delete(e)), Zt, Zt);
}
function Na(e) {
  return `${me(Math.max(0, e))}/s`;
}
function Sa(e) {
  const t = `task_${e.kind.replace(/-/g, "_")}`, a = n(t);
  return a === t ? n("task_install") : a;
}
function Ma(e) {
  const a = `phase_${e.status === "done" ? "done" : e.status === "error" ? "error" : e.phase ?? "starting"}`, l = n(a);
  return l === a ? n("working") : l;
}
function Pa(e) {
  if (e.totalBytes && e.totalBytes > 0) return Math.min(100, Math.round(e.completedBytes / e.totalBytes * 100));
  if (e.totalMods && e.totalMods > 0) return Math.min(100, Math.round(e.completedMods / e.totalMods * 100));
}
function Qt({ history: e, field: t, label: a }) {
  const l = e.map((s) => s[t]), r = Math.max(1, ...l), c = l.map((s, u) => `${l.length > 1 ? u / (l.length - 1) * 100 : 0},${32 - s / r * 30}`).join(" ");
  return /* @__PURE__ */ d("div", { className: "gx-sparkline", "aria-label": a, children: [
    /* @__PURE__ */ o("span", { children: a }),
    /* @__PURE__ */ o("svg", { viewBox: "0 0 100 32", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ o("polyline", { points: c, fill: "none", stroke: "currentColor", strokeWidth: "1.5" }) }),
    /* @__PURE__ */ o("strong", { children: Na(l[l.length - 1] ?? 0) })
  ] });
}
function Aa({ task: e }) {
  const t = Pa(e), a = window.MILLENNIUM_API?.ProgressBarWithInfo, l = Ma(e), r = e.totalBytes ? `${me(e.completedBytes)} / ${me(e.totalBytes)}` : e.totalMods ? `${e.completedMods}/${e.totalMods}` : "";
  return /* @__PURE__ */ d("article", { className: `gx-download-card ${e.status === "error" ? "is-error" : ""}`, "data-appid": e.steamAppId, "data-galex-download": e.id, children: [
    e.steamAppId ? /* @__PURE__ */ o("img", { className: "gx-download-cover", src: `https://cdn.cloudflare.steamstatic.com/steam/apps/${e.steamAppId}/header.jpg`, alt: "", loading: "lazy" }) : /* @__PURE__ */ o("span", { className: "gx-download-cover gx-download-cover--fallback", children: /* @__PURE__ */ o(K, { name: "package", size: 24 }) }),
    /* @__PURE__ */ d("div", { className: "gx-download-body", children: [
      /* @__PURE__ */ d("header", { children: [
        /* @__PURE__ */ o("h3", { children: e.gameName }),
        /* @__PURE__ */ o("span", { className: "gx-muted", children: e.profileName ?? e.slug })
      ] }),
      /* @__PURE__ */ d("p", { className: "gx-download-task", children: [
        Sa(e),
        " · ",
        l,
        e.currentMod ? ` · ${e.currentMod}` : ""
      ] }),
      typeof a == "function" ? /* @__PURE__ */ o(a, { nProgress: t ?? 0, indeterminate: t === void 0 || e.status === "active" && t === 0, strOperationText: l, sTimeRemaining: r }) : /* @__PURE__ */ o("progress", { className: "gx-progress", max: 100, value: t ?? void 0, "aria-label": l }),
      /* @__PURE__ */ d("div", { className: "gx-download-meta", children: [
        /* @__PURE__ */ o("span", { children: r || n("working") }),
        t !== void 0 && /* @__PURE__ */ d("span", { children: [
          t,
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Ia() {
  Ee();
  const { snapshot: e, error: t } = hn(), a = e?.tasks ?? [], l = a.some((r) => r.status === "active");
  return !e || a.length === 0 && !t ? null : /* @__PURE__ */ d("section", { className: "galex gx-downloads", "aria-label": n("galeDownloads"), children: [
    /* @__PURE__ */ d("header", { className: "gx-downloads-header", children: [
      /* @__PURE__ */ o("h2", { children: n("galeDownloads") }),
      l && /* @__PURE__ */ o(S, { icon: "x", onClick: () => void v.cancelInstalls().then(Ca).catch(() => {
      }), children: n("cancelDownloads") })
    ] }),
    /* @__PURE__ */ o("p", { className: "gx-muted", children: n("galeDownloadsHint") }),
    t && /* @__PURE__ */ o(se, { error: !0, children: t }),
    e && /* @__PURE__ */ d("div", { className: "gx-download-graphs", children: [
      /* @__PURE__ */ o(Qt, { history: e.history, field: "network", label: n("network") }),
      /* @__PURE__ */ o(Qt, { history: e.history, field: "disk", label: n("disk") })
    ] }),
    a.length ? a.map((r) => /* @__PURE__ */ o(Aa, { task: r }, r.id)) : /* @__PURE__ */ o("div", { className: "gx-empty", children: n(e ? "noGaleDownloads" : "loading") })
  ] });
}
function _a({ children: e }) {
  return /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ o(Ia, {}),
    e
  ] });
}
const Da = { includeCategories: [], excludeCategories: [], includeNsfw: !1, includeDeprecated: !0, includeDisabled: !0, includeEnabled: !0, sortBy: "name", sortOrder: "ascending" }, Jt = { mods: [], totalModCount: 0, updates: [], unknownMods: [] };
function Ga(e) {
  if (e.type === "remote" && e.author && e.version) {
    if (e.backend === "Thunderstore") return `https://ccdn.thunderstore.io/live/repository/icons/${encodeURIComponent(`${e.author}-${e.name}-${e.version}`)}.png`;
    if (e.backend === "Hexium") return `https://cdn.hexium.gg/uploads/${encodeURIComponent(e.author)}/${encodeURIComponent(e.name)}/icon.png?${encodeURIComponent(e.version)}`;
  }
  if (e.icon && /^(https?:|data:)/i.test(e.icon)) return e.icon;
}
function Ta({ mod: e }) {
  const [t, a] = b(!1), l = Ga(e.data);
  return !l || t ? /* @__PURE__ */ o("span", { className: "gx-mod-avatar", "aria-hidden": "true", children: e.data.name.slice(0, 2).toUpperCase() }) : /* @__PURE__ */ o("img", { className: "gx-mod-avatar", src: l, alt: "", loading: "lazy", onError: () => a(!0) });
}
const Kt = (e) => e.replace(/_/g, " ");
function La({ game: e, demo: t = !1, installing: a = !1, embedded: l = !1 }) {
  Ee();
  const [r, c] = b({ activeId: 0, profiles: [] }), [s, u] = b(), [h, N] = b(Jt), [C, f] = b(""), [w, _] = b(""), [y, D] = b("all"), [g, p] = b("name"), [x, L] = b(!0), [F, E] = b(""), [de, Y] = b([]), [ce, Ne] = b(!1), [Xe, j] = b(!0), [Be, T] = b(""), [oe, G] = b(""), [k, Ct] = b(""), [kn, Cn] = b(0), [Nn, Sn] = b(0), [z, R] = b(null), [ee, V] = b(""), [Fe, Ve] = b(""), [H, fe] = b(null), [xe, Nt] = b("code"), [Se, Me] = b("new"), [St, Mn] = b(!1), [Mt, Pn] = b(!1), [We, An] = b(""), [pe, Pt] = b(null), [At, It] = b([]), [_t, Dt] = b(""), [In, Gt] = b(!1), [Pe, qe] = b([]), [ie, ze] = b(null), [te, _n] = b(null), Re = je(!0), I = { slug: e.slug, profileId: s }, le = r.profiles.find((i) => i.id === s), $ = () => Cn((i) => i + 1), Tt = () => Sn((i) => i + 1);
  ae(() => (Re.current = !0, () => {
    Re.current = !1;
  }), []), ae(() => {
    const i = setTimeout(() => _(C), 220);
    return () => clearTimeout(i);
  }, [C]), ae(() => {
    let i = !1;
    return j(!0), T(""), u(void 0), N(Jt), f(""), E(""), Y([]), D("all"), v.call("profiles", { slug: e.slug }).then((m) => {
      i || (c(m), u(m.activeId));
    }).catch((m) => {
      i || (T(B(m)), j(!1));
    }), () => {
      i = !0;
    };
  }, [e.slug, Nn]), ae(() => {
    if (s === void 0) return;
    let i = !1;
    j(!0);
    const m = { ...Da, searchTerm: w, includeEnabled: y !== "disabled", includeDisabled: y !== "enabled", includeCategories: F ? [F] : [], sortBy: g, sortOrder: x ? "ascending" : "descending" };
    return v.call("mods", { slug: e.slug, profileId: s }, { args: m }).then((M) => {
      i || (N(M), T(""), Y((W) => Array.from(/* @__PURE__ */ new Set([...W, ...M.mods.flatMap((Q) => Q.data.categories ?? [])])).sort()));
    }).catch((M) => {
      i || T(B(M));
    }).finally(() => {
      i || j(!1);
    }), () => {
      i = !0;
    };
  }, [e.slug, s, w, y, g, x, F, kn]), ae(() => {
    if (!oe) return;
    const i = setTimeout(() => G(""), 4500);
    return () => clearTimeout(i);
  }, [oe]), ae(() => {
    z !== "export" || t || v.call("list_export_files", I).then(qe).catch((i) => T(B(i)));
  }, [z, s]);
  const { snapshot: Dn } = hn(), Gn = Dn?.tasks.find((i) => i.slug === e.slug && i.status === "active"), Ae = h.updates.filter((i) => !i.ignore), Lt = y === "updates" ? h.mods.filter((i) => Ae.some((m) => m.updatedId.packageUuid === i.data.uuid)) : h.mods, Tn = h.mods.filter((i) => i.enabled).length, Ln = sn(() => Pe.filter((i) => i.included).reduce((i, m) => i + m.size, 0), [Pe]), A = jn(async (i, m) => {
    if (!k) {
      Ct(i), T("");
      try {
        await m();
      } catch (M) {
        Re.current && T(B(M));
      } finally {
        Re.current && Ct("");
      }
    }
  }, [k]), Ze = async (i, m = {}) => {
    await v.call(i, I, m);
    const M = await v.call("profiles", { slug: e.slug }), W = i === "import_profile" ? ee.trim() : ee;
    let Q = M.activeId;
    (i === "create_profile" || i === "duplicate_profile" || i === "import_profile") && (Q = M.profiles.find((Qe) => Qe.name === W)?.id ?? M.activeId), i === "delete_profile" && (Q = M.activeId), await v.call("activate_profile", { slug: e.slug, profileId: Q }), c(M), u(Q), R(null), V(""), fe(null), $(), G(n("profileSaved"));
  }, En = (i) => void A(i.data.uuid, async () => {
    const m = await v.call("toggle_mod", I, { uuid: i.data.uuid });
    m.type === "confirm" ? ze({ title: n("disableMod", { name: i.data.name }), description: n("disableDependants"), uuids: [i.data.uuid, ...m.dependants.map((M) => M.uuid)], kind: "toggle" }) : $();
  }), Bn = (i) => void A(i.data.uuid, async () => {
    const m = await v.call("remove_mod", I, { uuid: i.data.uuid });
    m.type === "confirm" ? ze({ title: n("removeMod", { name: i.data.name }), description: n("removeDependants"), uuids: [i.data.uuid, ...m.dependants.map((M) => M.uuid)], kind: "remove" }) : ($(), G(n("modRemoved")));
  }), Fn = () => {
    ie && A("confirm", async () => {
      await v.call(ie.kind === "toggle" ? "force_toggle_mods" : "force_remove_mods", I, { uuids: [...new Set(ie.uuids)] }), ze(null), $(), G(ie.kind === "toggle" ? n("stateChanged") : n("modRemoved"));
    });
  }, Et = () => void A("browser", async () => {
    if (t) {
      G(n("demoConfig"));
      return;
    }
    const i = await v.browserUrl({ ...I, lang: ra() });
    ot(i.url), G(n("configOpened"));
  }), zn = () => void A("import", async () => {
    if (!Fe.trim()) throw new Error(n("importCodePlaceholder"));
    const i = await v.call("read_profile_code", I, { code: Fe.trim() });
    fe(i), V(i.manifest.profileName), Me(r.profiles.some((m) => m.name === i.manifest.profileName) ? "overwrite" : "new");
  }), Rn = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      T(n("fileTooLarge"));
      return;
    }
    const m = new FileReader();
    m.onload = () => void A("import", async () => {
      const M = String(m.result).split(",")[1] ?? "", W = await v.call("read_profile_base64", I, { base64: M });
      fe(W), V(W.manifest.profileName), Me(r.profiles.some((Q) => Q.name === W.manifest.profileName) ? "overwrite" : "new");
    }), m.onerror = () => T(n("fileReadError")), m.readAsDataURL(i);
  }, $n = (i) => void A("import", async () => {
    const m = await v.call("read_profile_file", I, { path: i });
    fe(m), V(m.manifest.profileName), Me(r.profiles.some((M) => M.name === m.manifest.profileName) ? "overwrite" : "new");
  }), Hn = async () => {
    const i = await Ht(n("profileFileDialog"), n("profileFileFilter"), ["*.r2z", "*.zip"]);
    i && $n(i);
  }, Un = async () => {
    const i = await Ht(n("localFileDialog"), n("localFileFilter"), ["*.zip"]);
    i && A("local", async () => {
      await v.call("import_local_mod", I, { path: i }), R(null), $(), G(n("profileSaved"));
    });
  }, On = () => void A("import", async () => {
    if (!H) return;
    const i = { ...H, manifest: { ...H.manifest, profileName: ee.trim() || H.manifest.profileName } };
    await Ze("import_profile", { data: i, options: { importAll: St, merge: Se === "overwrite" && Mt, ignoreMissingMods: H.missingMods.length > 0 } });
  }), Xn = () => void A("r2", async () => {
    const i = await v.call("get_r2modman_info", I, { path: We.trim() || null });
    Pt(i), It(i?.profiles.map(() => !0) ?? []);
  }), Vn = () => void A("r2", async () => {
    pe && (await v.call("import_r2modman", I, { path: pe.path, include: At }), R(null), Tt(), $(), G(n("profileSaved")));
  }), Wn = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      T(n("fileTooLarge"));
      return;
    }
    const m = new FileReader();
    m.onload = () => void A("local", async () => {
      await v.call("import_local_mod_base64", I, { base64: String(m.result).split(",")[1] ?? "" }), R(null), $(), G(n("profileSaved"));
    }), m.onerror = () => T(n("fileReadError")), m.readAsDataURL(i);
  }, qn = () => void A("export", async () => {
    const i = await v.call("export_code", I);
    Gt(i.type !== "success"), Dt(i.code ?? ""), R("export");
  }), Zn = (i) => {
    if (t) {
      qe(i);
      return;
    }
    A("export-files", async () => {
      await v.call("set_excluded_export_files", I, { excludedFiles: i.filter((m) => !m.included).map((m) => m.path) }), qe(i), Dt("");
    });
  }, Qn = () => void A("export-file", async () => {
    const { url: i } = await v.browserUrl({ ...I, kind: "export" });
    ma(i);
  }), Jn = () => void A("update", async () => {
    await v.call("update_mods", I, { uuids: Ae.map((i) => i.updatedId.packageUuid) }), G(n(t ? "demoUpdate" : "updateQueued")), $();
  }), re = () => {
    k || (R(null), fe(null), V(""), Ve(""), Pt(null), Gt(!1));
  }, Kn = async (i, m) => {
    try {
      await navigator.clipboard.writeText(i), G(m);
    } catch {
      T(n("clipboardError"));
    }
  };
  return /* @__PURE__ */ d("section", { className: `galex gx-mods${l ? " gx-mods--embedded" : ""}`, "aria-label": `${n("mods")} — ${e.name}`, "data-appid": e.steamAppId, children: [
    !l && /* @__PURE__ */ d("div", { className: "gx-heading", children: [
      /* @__PURE__ */ o("h1", { children: n("mods") }),
      (a || t) && /* @__PURE__ */ o("div", { className: "gx-heading-meta", children: n(a ? "working" : "demo") })
    ] }),
    /* @__PURE__ */ d("div", { className: "gx-toolbar", children: [
      /* @__PURE__ */ o(S, { onClick: () => ot(`https://thunderstore.io/c/${encodeURIComponent(e.slug)}/`), children: n("openThunderstore") }),
      /* @__PURE__ */ d(S, { onClick: () => Ne((i) => !i), "aria-expanded": ce, children: [
        n("advanced"),
        " ",
        /* @__PURE__ */ o(K, { name: "chevron-down", className: ce ? "gx-chevron-open" : "", size: 13 })
      ] })
    ] }),
    ce && /* @__PURE__ */ d("div", { className: "gx-advanced", children: [
      /* @__PURE__ */ d("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ d("div", { className: "gx-profile-line", children: [
          /* @__PURE__ */ o("span", { className: "gx-field-label", children: n("profile") }),
          /* @__PURE__ */ o(ve, { label: n("profile"), value: s ?? 0, disabled: !!k || !r.profiles.length, options: r.profiles.map((i) => ({ value: i.id, label: i.name })), onChange: (i) => void A("profile", async () => {
            await v.call("activate_profile", { slug: e.slug, profileId: i }), u(i), $();
          }) })
        ] }),
        /* @__PURE__ */ d("div", { className: "gx-profile-actions", children: [
          /* @__PURE__ */ o(S, { icon: "plus", disabled: !!k, onClick: () => {
            V(""), R("create");
          }, children: n("createProfile") }),
          /* @__PURE__ */ o(S, { disabled: !le || !!k, onClick: () => {
            V(le?.name ?? ""), R("rename");
          }, children: n("renameProfile") }),
          /* @__PURE__ */ o(S, { disabled: !le || !!k, onClick: () => {
            V(`${le?.name} copy`), R("duplicate");
          }, children: n("duplicateProfile") }),
          /* @__PURE__ */ o(S, { className: "gx-danger", disabled: r.profiles.length < 2 || !!k, onClick: () => R("delete"), children: n("deleteProfile") })
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ o("div", { className: "gx-profile-line", children: /* @__PURE__ */ o("span", { className: "gx-field-label", children: n("profileTransfer") }) }),
        /* @__PURE__ */ d("div", { className: "gx-profile-actions", children: [
          /* @__PURE__ */ o(S, { icon: "download", disabled: !le || !!k, onClick: () => {
            Ve(""), fe(null), Nt("code"), R("import");
          }, children: n("import") }),
          /* @__PURE__ */ o(S, { icon: "external", disabled: !le || !!k, onClick: qn, children: n("export") })
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ o("div", { className: "gx-profile-line", children: /* @__PURE__ */ o("span", { className: "gx-field-label", children: n("modConfiguration") }) }),
        /* @__PURE__ */ o("div", { className: "gx-profile-actions", children: /* @__PURE__ */ o(S, { icon: "sliders", disabled: !le || !!k, onClick: Et, children: n("config") }) })
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: "gx-search-row", children: [
      /* @__PURE__ */ d("div", { className: "gx-filter-group", children: [
        /* @__PURE__ */ d("span", { className: "gx-field-label DialogLabel", children: [
          n("filter"),
          ":"
        ] }),
        /* @__PURE__ */ d("label", { className: "gx-search DialogInput_Wrapper", children: [
          /* @__PURE__ */ o("input", { className: "DialogInput DialogInputPlaceholder DialogTextInputBase", "aria-label": n("searchMods"), placeholder: n("searchMods"), value: C, onChange: (i) => f(i.target.value) }),
          C && /* @__PURE__ */ o("button", { "aria-label": n("clearSearch"), onClick: () => f(""), children: /* @__PURE__ */ o(K, { name: "x", size: 13 }) })
        ] })
      ] }),
      /* @__PURE__ */ o(ve, { label: n("filter"), value: y, onChange: D, options: [{ value: "all", label: n("all") }, { value: "enabled", label: n("enabled") }, { value: "disabled", label: n("disabled") }, { value: "updates", label: n("updates") }] }),
      /* @__PURE__ */ d("div", { className: "gx-filter-group", children: [
        /* @__PURE__ */ d("span", { className: "gx-field-label DialogLabel", children: [
          n("sortBy"),
          ":"
        ] }),
        /* @__PURE__ */ o(ve, { label: n("sortBy"), value: g, onChange: p, options: [{ value: "name", label: n("byName") }, { value: "author", label: n("byAuthor") }, { value: "installDate", label: n("byInstallDate") }, { value: "diskSpace", label: n("bySize") }, { value: "downloads", label: n("byDownloads") }] }),
        /* @__PURE__ */ o(ne, { className: "gx-sort-direction", icon: x ? "arrow-up" : "arrow-down", label: n(x ? "ascending" : "descending"), onClick: () => L((i) => !i), disabled: !!k })
      ] }),
      /* @__PURE__ */ o(ve, { label: n("categories"), value: F, onChange: E, options: [{ value: "", label: n("allCategories") }, ...de.map((i) => ({ value: i, label: i }))] })
    ] }),
    Be && /* @__PURE__ */ o(se, { error: !0, onRetry: () => {
      T(""), $();
    }, children: Be }),
    oe && /* @__PURE__ */ o(se, { children: oe }),
    Gn && /* @__PURE__ */ o(se, { children: /* @__PURE__ */ d("span", { children: [
      n("operationInProgress"),
      " ",
      /* @__PURE__ */ o("button", { className: "gx-update-link", onClick: ua, children: n("openDownloads") })
    ] }) }),
    /* @__PURE__ */ d("div", { className: "gx-list-heading", children: [
      /* @__PURE__ */ o("span", { children: n("modCount", { count: h.totalModCount }) }),
      /* @__PURE__ */ o("span", { children: n("enabledCount", { count: Tn }) }),
      !!Ae.length && /* @__PURE__ */ d("button", { className: "gx-update-link", disabled: !!k, onClick: Jn, children: [
        /* @__PURE__ */ o(K, { name: "download", size: 13 }),
        n("updateAll", { count: Ae.length })
      ] }),
      /* @__PURE__ */ o(ne, { icon: "refresh", label: n("refresh"), onClick: () => {
        Tt(), $();
      }, disabled: !!k })
    ] }),
    /* @__PURE__ */ o("div", { className: "gx-mod-list", tabIndex: 0, children: Xe && !h.mods.length ? /* @__PURE__ */ o("div", { className: "gx-empty", children: n("loading") }) : Lt.length ? Lt.map((i, m) => {
      const M = Ae.find((W) => W.updatedId.packageUuid === i.data.uuid);
      return /* @__PURE__ */ d("div", { className: `gx-mod-row ${i.enabled ? "" : "is-disabled"}`, children: [
        /* @__PURE__ */ o(Ie, { checked: i.enabled, disabled: !!k, label: Kt(i.data.name), onChange: () => En(i) }),
        /* @__PURE__ */ o("span", { className: "gx-mod-index", children: m + 1 }),
        /* @__PURE__ */ o(Ta, { mod: i }),
        /* @__PURE__ */ d("div", { className: "gx-mod-info", children: [
          /* @__PURE__ */ d("div", { className: "gx-mod-title", children: [
            /* @__PURE__ */ o("h3", { children: Kt(i.data.name) }),
            M && /* @__PURE__ */ d("span", { className: "gx-badge gx-badge--update", children: [
              M.old,
              " → ",
              M.new
            ] }),
            i.data.type === "local" && /* @__PURE__ */ o("span", { className: "gx-badge", children: n("local") })
          ] }),
          !!i.data.dependencies?.length && /* @__PURE__ */ d("p", { children: [
            n("dependsOn"),
            ": ",
            i.data.dependencies.join(", ")
          ] }),
          /* @__PURE__ */ d("div", { className: "gx-mod-byline", children: [
            /* @__PURE__ */ o("span", { children: i.data.author }),
            /* @__PURE__ */ d("span", { children: [
              "v",
              i.data.version
            ] }),
            !!i.data.categories?.length && /* @__PURE__ */ d("span", { children: [
              n("tags"),
              ": ",
              i.data.categories.join(", ")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o("span", { className: "gx-mod-size", children: me(i.data.fileSize) }),
        /* @__PURE__ */ d("div", { className: "gx-mod-actions", children: [
          i.configFile && /* @__PURE__ */ o(ne, { icon: "sliders", label: n("openConfig"), disabled: !!k, onClick: Et }),
          i.data.type === "remote" && /* @__PURE__ */ o(ne, { icon: "layers", label: n("versions"), disabled: !!k, onClick: () => {
            _n(i), R("versions");
          } }),
          M && /* @__PURE__ */ o(ne, { icon: "download", label: n("update"), disabled: !!k, onClick: () => void A("update-one", async () => {
            await v.call("update_mods", I, { uuids: [i.data.uuid] }), $(), G(n("updateQueued"));
          }) }),
          /* @__PURE__ */ o(ne, { icon: "trash", label: n("remove"), disabled: !!k, onClick: () => Bn(i) })
        ] })
      ] }, i.data.uuid);
    }) : /* @__PURE__ */ o("div", { className: "gx-empty", children: n("noMods") }) }),
    ie && /* @__PURE__ */ o(Ut, { title: ie.title, onClose: () => ze(null), onConfirm: Fn, busy: !!k, danger: ie.kind === "remove", children: /* @__PURE__ */ o("p", { children: ie.description }) }),
    (z === "create" || z === "rename" || z === "duplicate") && /* @__PURE__ */ o(ke, { title: n(z === "create" ? "createProfileTitle" : z === "rename" ? "renameProfileTitle" : "duplicateProfileTitle"), onClose: re, footer: /* @__PURE__ */ d(O, { children: [
      /* @__PURE__ */ o(S, { onClick: re, disabled: !!k, children: n("cancel") }),
      /* @__PURE__ */ o(S, { primary: !0, disabled: !!k || !ee.trim(), onClick: () => void A("profile", () => Ze(z === "create" ? "create_profile" : z === "rename" ? "rename_profile" : "duplicate_profile", { name: ee.trim() })), children: n(k ? "working" : "save") })
    ] }), children: /* @__PURE__ */ d("label", { className: "gx-form-label", children: [
      n("profileName"),
      /* @__PURE__ */ o("input", { value: ee, onChange: (i) => V(i.target.value), autoFocus: !0 })
    ] }) }),
    z === "delete" && /* @__PURE__ */ o(Ut, { title: n("deleteProfileTitle"), onClose: re, onConfirm: () => void A("profile", () => Ze("delete_profile", { id: s })), busy: !!k, danger: !0, children: /* @__PURE__ */ o("p", { children: n("deleteProfileBody", { name: le?.name ?? "" }) }) }),
    z === "import" && /* @__PURE__ */ o(ke, { title: n(H ? "importPreview" : "importTitle"), onClose: re, footer: /* @__PURE__ */ d(O, { children: [
      /* @__PURE__ */ o(S, { onClick: re, disabled: !!k, children: n("cancel") }),
      H ? /* @__PURE__ */ o(S, { primary: !0, onClick: On, disabled: !!k || !ee.trim(), children: n(k ? "importing" : "installProfile") }) : xe === "code" ? /* @__PURE__ */ o(S, { primary: !0, onClick: zn, disabled: !!k || !Fe.trim(), children: n(k ? "working" : "continue") }) : xe === "r2" ? /* @__PURE__ */ o(S, { primary: !0, onClick: pe ? Vn : Xn, disabled: !!k || !pe && !We.trim(), children: n(k ? "working" : pe ? "import" : "r2Load") }) : null
    ] }), children: H ? /* @__PURE__ */ d(O, { children: [
      /* @__PURE__ */ d("div", { className: "gx-tabs", children: [
        /* @__PURE__ */ o(S, { className: Se === "new" ? "gx-button--primary" : "", onClick: () => Me("new"), children: n("newProfile") }),
        /* @__PURE__ */ o(S, { className: Se === "overwrite" ? "gx-button--primary" : "", onClick: () => Me("overwrite"), children: n("overwriteProfile") })
      ] }),
      /* @__PURE__ */ d("label", { className: "gx-form-label", children: [
        n("profileName"),
        /* @__PURE__ */ o("input", { value: ee, onChange: (i) => V(i.target.value) })
      ] }),
      Se === "overwrite" && /* @__PURE__ */ o(ve, { label: n("overwriteProfile"), value: ee, onChange: V, options: r.profiles.map((i) => ({ value: i.name, label: i.name })) }),
      /* @__PURE__ */ d("div", { className: "gx-import-summary", children: [
        /* @__PURE__ */ o("strong", { children: H.manifest.profileName }),
        /* @__PURE__ */ o("span", { children: n("modsToInstall", { count: H.manifest.mods.length }) })
      ] }),
      !!H.missingMods.length && /* @__PURE__ */ o(se, { error: !0, children: n("missingMods", { mods: H.missingMods.join(", ") }) }),
      /* @__PURE__ */ d("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ o(Ie, { checked: St, onChange: Mn, label: n("importAllFiles") }),
        n("importAllFiles")
      ] }),
      Se === "overwrite" && /* @__PURE__ */ d("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ o(Ie, { checked: Mt, onChange: Pn, label: n("mergeProfiles") }),
        n("mergeProfiles")
      ] })
    ] }) : /* @__PURE__ */ d(O, { children: [
      /* @__PURE__ */ o("div", { className: "gx-tabs", children: ["code", "r2", "local"].map((i) => /* @__PURE__ */ o(S, { className: xe === i ? "gx-button--primary" : "", onClick: () => Nt(i), children: n(i === "code" ? "importCode" : i === "r2" ? "importR2" : "importLocal") }, i)) }),
      xe === "code" && /* @__PURE__ */ d(O, { children: [
        /* @__PURE__ */ d("label", { className: "gx-form-label", children: [
          n("importCode"),
          /* @__PURE__ */ o("textarea", { value: Fe, onChange: (i) => Ve(i.target.value), placeholder: n("importCodePlaceholder"), rows: 3 })
        ] }),
        /* @__PURE__ */ d("div", { className: "gx-form-label", children: [
          /* @__PURE__ */ o("span", { children: n("importFile") }),
          $t() ? /* @__PURE__ */ o(S, { icon: "folder", disabled: !!k, onClick: () => void Hn(), children: n("importFileButton") }) : /* @__PURE__ */ o("input", { type: "file", accept: ".r2z,.zip", onChange: (i) => {
            const m = i.target.files?.[0];
            m && Rn(m);
          } })
        ] })
      ] }),
      xe === "r2" && /* @__PURE__ */ d(O, { children: [
        /* @__PURE__ */ d("label", { className: "gx-form-label", children: [
          n("r2Path"),
          /* @__PURE__ */ o("input", { value: We, onChange: (i) => An(i.target.value), placeholder: "~/.config/r2modman" })
        ] }),
        pe && /* @__PURE__ */ d("div", { className: "gx-file-list", children: [
          /* @__PURE__ */ o("strong", { children: n("r2Profiles") }),
          pe.profiles.map((i, m) => /* @__PURE__ */ d("label", { children: [
            /* @__PURE__ */ o(Ie, { checked: !!At[m], label: i, onChange: (M) => It((W) => W.map((Q, Qe) => Qe === m ? M : Q)) }),
            /* @__PURE__ */ o("span", { children: i })
          ] }, i))
        ] })
      ] }),
      xe === "local" && /* @__PURE__ */ d("div", { className: "gx-form-label", children: [
        /* @__PURE__ */ o("span", { children: n("importLocalFile") }),
        $t() ? /* @__PURE__ */ o(S, { icon: "folder", disabled: !!k, onClick: () => void Un(), children: n("importLocalFile") }) : /* @__PURE__ */ o("input", { type: "file", accept: ".zip", onChange: (i) => {
          const m = i.target.files?.[0];
          m && Wn(m);
        } })
      ] })
    ] }) }),
    z === "export" && /* @__PURE__ */ d(ke, { title: n("exportTitle"), onClose: re, footer: /* @__PURE__ */ o(S, { primary: !0, onClick: re, children: n("done") }), children: [
      /* @__PURE__ */ o("p", { children: n("exportIntro") }),
      In ? /* @__PURE__ */ o(se, { error: !0, children: n("exportTooLarge") }) : /* @__PURE__ */ d("div", { className: "gx-export-code", children: [
        /* @__PURE__ */ o("code", { children: _t }),
        /* @__PURE__ */ o(ne, { icon: "copy", label: n("copyCode"), onClick: () => void Kn(_t, n("codeCopied")) })
      ] }),
      !t && /* @__PURE__ */ d("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ o(S, { icon: "download", disabled: !!k, onClick: Qn, children: n("exportFile") }),
        /* @__PURE__ */ o(S, { icon: "copy", disabled: !!k, onClick: () => void A("deps", async () => {
          await v.call("copy_dependency_strings", I), G(n("dependenciesCopied"));
        }), children: n("copyDependencies") }),
        /* @__PURE__ */ o(S, { icon: "copy", disabled: !!k, onClick: () => void A("debug", async () => {
          await v.call("copy_debug_info", I), G(n("debugCopied"));
        }), children: n("copyDebug") })
      ] }),
      !!Pe.length && /* @__PURE__ */ d("details", { children: [
        /* @__PURE__ */ o("summary", { children: n("exportFiles") }),
        /* @__PURE__ */ o("p", { className: "gx-muted", children: n("exportFilesHint") }),
        /* @__PURE__ */ o("div", { className: "gx-file-list", children: Pe.map((i) => /* @__PURE__ */ d("label", { children: [
          /* @__PURE__ */ o(Ie, { checked: i.included, disabled: !!k, label: i.path, onChange: (m) => Zn(Pe.map((M) => M.path === i.path ? { ...M, included: m } : M)) }),
          /* @__PURE__ */ o("span", { children: i.path }),
          /* @__PURE__ */ o("small", { children: me(i.size) })
        ] }, i.path)) }),
        /* @__PURE__ */ o("p", { className: "gx-muted", children: n("totalSize", { size: me(Ln) }) })
      ] })
    ] }),
    z === "versions" && te && /* @__PURE__ */ d(ke, { title: n("versionTitle", { name: te.data.name }), onClose: re, children: [
      /* @__PURE__ */ o("p", { children: n("currentVersion", { version: te.data.version ?? "" }) }),
      /* @__PURE__ */ o("div", { className: "gx-version-list", children: te.data.versions.map((i) => /* @__PURE__ */ d(S, { disabled: !!k || i.uuid === te.data.versionUuid, icon: i.uuid === te.data.versionUuid ? "check" : "layers", onClick: () => void A("version", async () => {
        await v.call("change_mod_version", I, { id: { packageUuid: te.data.uuid, versionUuid: i.uuid, backend: te.data.backend } }), R(null), $(), G(n("versionQueued"));
      }), children: [
        i.name,
        i.uuid === te.data.versionUuid ? " · " + n("installed") : ""
      ] }, i.uuid)) })
    ] })
  ] });
}
const Ge = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new Map();
function Ea(e, t) {
  Oe.set(e, t);
}
function X(e) {
  return (e ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
function dt(e, t) {
  try {
    const a = window.LocalizationManager, l = a?.m_mapTokens?.get?.(e) ?? a?.m_mapFallbackTokens?.get?.(e);
    if (typeof l == "string" && l.length > 0) return l;
  } catch {
  }
  return t;
}
function Ba() {
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
  for (const [a, l] of [["AppProperties_GeneralPage", "General"], ["AppProperties_General", "General"]]) e.add(X(dt(a, l)));
  for (const [a, l] of [
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
  ]) t.add(X(dt(a, l)));
  return { general: e, secondary: t };
}
function Yt(e, t, a) {
  st.get(e) !== t && (st.set(e, t), v.log(`properties: ${a}`).catch(() => {
  }));
}
function jt(e) {
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
  for (const a of t) if (Number.isSafeInteger(a) && a > 0 && a < 2147483648) return a;
}
function Fa(e, t = []) {
  const a = [e, ...t, ...Array.from(e.querySelectorAll("*")).slice(0, 300)], l = /* @__PURE__ */ new Set();
  for (const u of a) {
    if (l.has(u)) continue;
    l.add(u);
    const h = Object.keys(u).find((C) => C.startsWith("__reactFiber$") || C.startsWith("__reactInternalInstance$"));
    let N = h ? u[h] : void 0;
    for (let C = 0; N && C < 40; C++, N = N.return) {
      const f = jt(N.memoizedProps) ?? jt(N.pendingProps);
      if (f) return f;
    }
  }
  const r = (e.matches("[data-appid]") ? e : e.querySelector("[data-appid]"))?.getAttribute("data-appid") ?? void 0;
  if (r && /^\d+$/.test(r)) return Number(r);
  const s = (e.ownerDocument.defaultView?.location.pathname ?? "").match(/\/(?:library\/app|properties)\/(\d+)/);
  if (s) return Number(s[1]);
  for (const u of Array.from(e.querySelectorAll("img"))) {
    const h = u.src.match(/\/(?:apps|assets)\/(\d{2,9})\//);
    if (h) return Number(h[1]);
  }
}
function za(e, t) {
  const l = [Oe.get(e)?.title, e.title, t.querySelector('h1,h2,[class*="Title"]')?.textContent], c = [dt("AppProperties_Title", "Properties - %1$s"), "Properties - %1$s", "Properties: %1$s", "Свойства — %1$s", "Свойства: %1$s", "Eigenschaften – %1$s", "Eigenschaften: %1$s"], s = /* @__PURE__ */ new Set();
  for (const u of l) {
    const h = X(u);
    if (!h || h === "steam") continue;
    let N = !1;
    for (const C of c) {
      const f = C.split("%1$s");
      if (f.length < 2) continue;
      const w = f.map((y) => y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")), _ = h.match(new RegExp("^\\s*" + w.join("\\s*(.+?)\\s*") + "\\s*$", "i"));
      if (_?.[1]) {
        s.add(X(_[1])), N = !0;
        break;
      }
    }
    !N && !/properties|свойства|eigenschaften/.test(h) && s.add(h);
  }
  if (s.size)
    try {
      const u = window.appStore?.m_mapApps;
      if (!u?.forEach) return;
      let h;
      return u.forEach((N, C) => {
        if (h) return;
        const f = Number(C ?? N?.appid ?? N?.m_unAppID);
        if (!Number.isSafeInteger(f) || f <= 0 || f >= 2147483648) return;
        const w = X(N?.display_name ?? N?.m_strDisplayName);
        w && s.has(w) && (h = f);
      }), h;
    } catch {
      return;
    }
}
function Ra(e, t) {
  let a = e;
  for (; a.parentElement && a.parentElement !== t; ) a = a.parentElement;
  return a.parentElement === t ? a : e;
}
function $a(e) {
  const { general: t, secondary: a } = Ba(), l = Array.from(e.querySelectorAll("*")).filter((c) => {
    const s = X(c.textContent);
    if (!t.has(s) && !a.has(s) || c.closest('[role="tabpanel"],[data-galex-properties],[class*="TabContent"],[class*="tab-content"]')) return !1;
    const u = c.parentElement;
    return !(u && X(u.textContent) === s);
  }), r = l.filter((c) => t.has(X(c.textContent)));
  for (const c of r) {
    let s = c;
    for (let u = 0; s && u < 8; u++, s = s.parentElement) {
      if (s.querySelectorAll("*").length > 300) continue;
      const h = l.filter((f) => s.contains(f));
      if (h.length < 2) continue;
      const N = Array.from(new Set(h.map((f) => Ra(f, s)))), C = N.map((f) => X(f.textContent));
      if (C.some((f) => t.has(f)) && C.some((f) => a.has(f))) return { list: s, tabs: N };
    }
  }
}
function Ha(e) {
  const t = new Set(Array.from(e.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"],[class*="DialogBody"]')));
  return Oe.get(e)?.allowBodyFallback && e.body && t.add(e.body), Array.from(t);
}
function Ua(e) {
  return Array.from(e.dialog.querySelectorAll('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"],[class*="TabContent"],[class*="tab-content"]')).filter((t) => t !== e.panel && !t.contains(e.panel) && !t.hasAttribute("data-galex-properties"));
}
function fn(e) {
  const t = Array.from(e.querySelectorAll('[role="tabpanel"],[class*="DialogContent"]')).filter((a) => a.classList.contains("DialogContent") && !a.hasAttribute("data-galex-properties"));
  return t.find((a) => a.style.display !== "none" && !a.hidden) ?? t[0];
}
function Oa(e) {
  return e.querySelector(".DialogBody") ?? e.querySelector(".DialogContent_InnerWidth") ?? e;
}
function xn(e) {
  const t = Oa(e), a = e.querySelector(".DialogHeader");
  return { shell: e, body: t, header: a ?? null, headerText: a?.textContent ?? "", shellStyle: { display: e.style.display, hidden: e.hidden }, bodyStyle: { display: t.style.display, hidden: t.hidden }, labelledBy: e.getAttribute("aria-labelledby"), id: e.id, children: /* @__PURE__ */ new Map() };
}
function ct(e) {
  let t = e.adopted;
  if (!t) return;
  if (!t.shell.isConnected) {
    const l = fn(e.dialog);
    if (!l) return;
    e.panel = l, e.adopted = t = xn(l);
  }
  t.shell.getAttribute("data-galex-properties") !== "panel" && t.shell.setAttribute("data-galex-properties", "panel"), t.shell.getAttribute("aria-labelledby") !== e.tab.id && t.shell.setAttribute("aria-labelledby", e.tab.id), t.shell.hidden && (t.shell.hidden = !1), t.shell.style.display === "none" && (t.shell.style.display = t.shellStyle.display);
  for (const l of Array.from(t.body.children)) {
    const r = l;
    r !== e.mount && (t.children.has(r) || t.children.set(r, { display: r.style.display, hidden: r.hidden }), r.style.display !== "none" && (r.style.display = "none"), r.hidden || (r.hidden = !0));
  }
  e.mount.parentElement !== t.body && t.body.appendChild(e.mount), e.mount.hidden && (e.mount.hidden = !1), t.header && t.header.textContent !== n("mods") && (t.header.textContent = n("mods"));
  const a = t.shell.id || e.tab.getAttribute("aria-controls");
  a && e.tab.getAttribute("aria-controls") !== a && (e.tab.setAttribute("aria-controls", a), e.tab.querySelectorAll("[aria-controls]").forEach((l) => {
    l.getAttribute("aria-controls") !== a && l.setAttribute("aria-controls", a);
  }));
}
function Xa(e) {
  const t = e.adopted;
  t && (t.children.forEach((a, l) => {
    l.isConnected && (l.style.display = a.display, l.hidden = a.hidden);
  }), t.children.clear(), t.header && t.header.isConnected && (t.header.textContent = t.headerText), e.mount.remove(), t.shell.isConnected && (t.shell.removeAttribute("data-galex-properties"), t.labelledBy === null ? t.shell.removeAttribute("aria-labelledby") : t.shell.setAttribute("aria-labelledby", t.labelledBy), t.shell.style.display = t.shellStyle.display, t.shell.hidden = t.shellStyle.hidden));
}
function pt(e) {
  for (const t of Ua(e))
    e.hidden.has(t) || e.hidden.set(t, { display: t.style.display, hidden: t.hidden }), t.style.display !== "none" && (t.style.display = "none");
}
function Va(e) {
  e.hidden.forEach((t, a) => {
    a.style.display = t.display, a.hidden = t.hidden;
  }), e.hidden.clear();
}
function Wa(e) {
  return /Active|Selected|Current/.test(e) || /^(active|selected|current)$/i.test(e) || /[_-](active|selected|current)([_-]|$)/i.test(e);
}
function gt(e, t, a = []) {
  for (const l of [e, ...Array.from(e.querySelectorAll("*"))]) {
    const r = l.getAttribute("class");
    if (!r) continue;
    const c = r.split(/\s+/).filter(Boolean), s = c.filter((u) => !Wa(u) && !a.includes(u));
    s.length !== c.length && (t && !t.has(l) && t.set(l, r), s.length ? l.setAttribute("class", s.join(" ")) : l.removeAttribute("class"));
  }
}
function bn(e) {
  for (const t of e.nativeTabs) gt(t, e.nativeClasses, e.selectedDelta);
  e.list.querySelectorAll('[role="tab"]').forEach((t) => {
    t !== e.tab && (gt(t, e.nativeClasses, e.selectedDelta), t.setAttribute("aria-selected", "false"));
  });
}
function vn(e, t) {
  const { tab: a, selectedDelta: l } = e, r = l.length > 0;
  a.classList.toggle("gx-tab-active", t && !r);
  for (const c of l) a.classList.toggle(c, t);
  for (const c of [a, ...Array.from(a.querySelectorAll('[role="tab"]'))]) c.setAttribute("aria-selected", t ? "true" : "false");
}
function qa(e) {
  e.nativeClasses.forEach((t, a) => {
    a.isConnected && a.setAttribute("class", t);
  }), e.nativeClasses.clear();
}
function wn(e) {
  e.active && (e.active = !1, e.adopted ? Xa(e) : e.panel.hidden = !0, vn(e, !1), qa(e), Va(e));
}
function Za(e) {
  if (e.active) {
    e.adopted ? ct(e) : e.panel.hidden = !1, pt(e);
    return;
  }
  e.adopted && ct(e), pt(e), bn(e), e.active = !0, e.adopted || (e.panel.hidden = !1), e.sizePanel(), vn(e, !0);
}
function en(e, t, a) {
  e.root.render(J(xt.Provider, { value: e.dialog.ownerDocument }, J(ft, null, J(La, { key: `${e.slug}-${e.appid}`, game: t, installing: a, embedded: !!e.adopted }))));
}
function ut(e) {
  wn(e), e.resize?.disconnect(), e.list.removeEventListener("click", e.onNativeClick, !0), Ge.delete(e.dialog);
  const { root: t, tab: a, panel: l, mount: r, adopted: c } = e;
  queueMicrotask(() => {
    try {
      t.unmount();
    } catch {
    }
    a.remove(), c ? r.remove() : l.remove();
  });
}
function Qa(e, t) {
  const a = X(t), l = n("mods"), r = Array.from(e.querySelectorAll("*")).filter((s) => X(s.textContent) === a), c = r[r.length - 1];
  c ? c.textContent = l : e.textContent = l;
}
function tn(e) {
  return (e.getAttribute("class") ?? "").split(/\s+/).filter(Boolean);
}
function Ja(e) {
  const t = e.find((r) => r.getAttribute("aria-selected") === "true"), a = e.find((r) => r.getAttribute("aria-selected") === "false");
  if (!t || !a) return [];
  const l = new Set(tn(a));
  return tn(t).filter((r) => !l.has(r));
}
function yn(e) {
  const { snapshot: t } = lt();
  for (const [c, s] of Array.from(Ge)) {
    if (!e.contains(c)) continue;
    if (!c.isConnected || !s.tab.isConnected || !s.list.isConnected) {
      ut(s);
      continue;
    }
    const u = t?.ok ? Vt(t, s.appid) : void 0;
    if (!u) {
      ut(s);
      continue;
    }
    s.active && (s.adopted && ct(s), pt(s), bn(s)), en(s, u, t.installing);
  }
  if (!t?.ok) return;
  const a = Ha(e), l = [];
  let r = 0;
  for (const c of a) {
    if (Ge.has(c) || c.querySelector("[data-galex-properties]")) continue;
    const s = $a(c);
    if (!s) {
      l.push("no-tablist");
      continue;
    }
    const u = Fa(c, s.tabs) ?? za(e, c);
    if (!u) {
      l.push("no-appid");
      continue;
    }
    const h = Vt(t, u);
    if (!h) {
      l.push(`unsupported:${u}`);
      continue;
    }
    const N = s.tabs.find((E) => /workshop|мастерская/i.test(E.textContent ?? "")) ?? s.tabs[0], C = X(N.textContent), f = Ja(s.tabs), w = N.cloneNode(!0);
    gt(w, void 0, f), w.querySelectorAll("[id]").forEach((E) => E.removeAttribute("id")), w.querySelectorAll("[aria-controls]").forEach((E) => E.setAttribute("aria-controls", `galex-panel-${u}`)), w.removeAttribute("id"), w.removeAttribute("href"), w.setAttribute("role", "tab"), w.setAttribute("aria-selected", "false"), w.setAttribute("data-galex-properties", "tab"), w.id = `galex-tab-${u}`, w.setAttribute("aria-controls", `galex-panel-${u}`), Qa(w, C), w.tagName === "A" && w.setAttribute("href", "#galex-mods"), s.list.appendChild(w);
    const _ = fn(c);
    let y, D, g, p, x, L;
    _ ? (D = e.createElement("div"), D.className = "gx-adopted-mount", D.setAttribute("data-galex-mount", ""), D.hidden = !0, g = xn(_), y = _, p = et(D), x = () => {
    }) : (y = e.createElement("div"), y.id = `galex-panel-${u}`, y.setAttribute("role", "tabpanel"), y.setAttribute("aria-labelledby", w.id), y.setAttribute("data-galex-properties", "panel"), y.className = "gx-injected-panel", y.hidden = !0, y.style.flex = "1", y.style.minHeight = "0", y.style.overflow = "hidden", (c.querySelector('[role="tabpanel"],[class*="TabContent"],[class*="tab-content"]')?.parentElement ?? s.list.parentElement?.parentElement ?? s.list.parentElement)?.appendChild(y), D = y, p = et(y), x = () => {
      const Y = y.parentElement, ce = e.defaultView;
      if (!Y || !ce) return;
      const Ne = ce.getComputedStyle(Y), Xe = ce.getComputedStyle(c), j = (k) => Number.parseFloat(k) || 0, Be = j(Ne.paddingTop) + j(Ne.paddingBottom), T = Math.max(0, Y.clientHeight - Be), oe = Math.floor(c.getBoundingClientRect().bottom - Y.getBoundingClientRect().top - j(Ne.paddingBottom) - j(Xe.paddingBottom)), G = oe > 0 ? Math.min(T || oe, oe) : T;
      G > 0 && (y.style.height = `${G}px`);
    }, typeof ResizeObserver == "function" && y.parentElement && (L = new ResizeObserver(x), L.observe(y.parentElement), L.observe(c), x()));
    const F = { dialog: c, list: s.list, tab: w, nativeTabs: s.tabs, panel: y, mount: D, adopted: g, root: p, appid: h.steamAppId, slug: h.slug, active: !1, hidden: /* @__PURE__ */ new Map(), nativeClasses: /* @__PURE__ */ new Map(), selectedDelta: f, resize: L, sizePanel: x, onNativeClick: (E) => {
      const de = E.target;
      de?.closest?.('[data-galex-properties="tab"]') || (de?.closest?.('[role="tab"],button,a') || s.tabs.some((Y) => de && Y.contains(de))) && wn(F);
    } };
    Ge.set(c, F), en(F, h, t.installing), r++, w.addEventListener("click", (E) => {
      E.preventDefault(), E.stopPropagation(), Za(F);
    }), s.list.addEventListener("click", F.onNativeClick, !0), Yt(e, `injected:${u}`, `tab injected appid=${u} slug=${h.slug}`);
  }
  if (a.length && Oe.get(e)?.allowBodyFallback) {
    const c = `${a.length}/${r}/${l.slice(0, 4).join(",")}`;
    Yt(e, c, `dialogs=${a.length} injected=${r} skipped=${l.slice(0, 4).join(",") || "none"}`);
  }
}
function nn(e) {
  const t = we.get(e);
  !t || t.timer || (t.timer = window.setTimeout(() => {
    t.timer = 0, yn(e);
  }, 180));
}
function an(e = document) {
  if (we.has(e)) return we.get(e).dispose;
  const t = new MutationObserver(() => nn(e));
  t.observe(e.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["role", "data-appid", "src", "style", "hidden", "class"] });
  const a = () => {
    const l = we.get(e);
    l?.timer && clearTimeout(l.timer), t.disconnect();
    for (const [r, c] of Array.from(Ge))
      e.contains(r) && ut(c);
    we.delete(e), st.delete(e);
  };
  return we.set(e, { observer: t, timer: 0, dispose: a }), nn(e), a;
}
function Ka(e = document) {
  yn(e);
}
const on = "galex-styles";
function ln(e, t = document) {
  if (typeof t > "u") return;
  const a = t.getElementById(on);
  if (a) {
    a.textContent = e;
    return;
  }
  const l = t.createElement("style");
  l.id = on, l.textContent = e, t.head.appendChild(l);
}
const rn = ".galex{--gx-text:var(--gpColor-White,#dfe3e8);--gx-muted:var(--gpColor-Neutral,#9ba8b5);--gx-line:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control-hover:var(--gpBackground-Color-Solid,rgba(255,255,255,.14));--gx-accent:var(--gpColor-Blue,#66c0f4);--gx-danger:var(--gpColor-Red,#d94b4b);color:var(--gx-text);font-family:inherit;font-size:14px;line-height:1.45;box-sizing:border-box;container-type:inline-size}.galex *,.galex *:before,.galex *:after{box-sizing:border-box}.galex h1,.galex h2,.galex h3,.galex p{margin:0}.galex button,.galex input,.galex select,.galex textarea{font:inherit;color:inherit}.galex button{cursor:pointer}.galex button:disabled{cursor:default;opacity:.45}.galex svg{flex-shrink:0;vertical-align:middle}.galex :focus-visible{outline:2px solid var(--gx-accent);outline-offset:2px}.gx-native-button{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;gap:6px;width:auto;min-width:0;max-width:100%}.gx-native-button button,.gx-native-button>button{width:auto;min-width:0;min-height:32px;padding:6px 12px;white-space:nowrap}.galex [class*=DialogButton]:not(.gx-icon-button){flex:0 0 auto;margin:0;width:auto;min-width:0;max-width:100%}.galex [class*=DialogButton]:not(.gx-icon-button)>button{width:auto;min-width:0}.gx-native-select{flex:0 0 auto;min-width:120px;max-width:240px}.gx-native-select>div{min-width:0}.gx-native-input{width:100%}.gx-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:34px;padding:6px 14px;border:1px solid transparent;border-radius:3px;background:var(--gx-control);color:var(--gx-text);white-space:nowrap}.gx-button:hover:not(:disabled){background:var(--gx-control-hover)}.gx-button--primary{background:var(--gx-accent);color:#fff}.gx-button.gx-danger{background:var(--gx-danger);color:#fff}.gx-icon-button{display:inline-flex;flex:0 0 32px;align-items:center;justify-content:center;width:32px;min-width:32px;height:32px;padding:0;border:0;border-radius:3px;background:transparent;color:var(--gx-muted)}.gx-icon-button button,.gx-icon-button>button{width:32px;min-width:32px;height:32px;padding:0}.gx-icon-button:hover:not(:disabled){background:var(--gx-control);color:var(--gx-text)}.gx-muted{color:var(--gx-muted);font-size:12px}.gx-text-danger{color:var(--gx-danger)}.galex select,.gx-input,.galex input[type=text],.galex input[type=number],.galex textarea{min-height:32px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:4px 9px}.galex select{max-width:220px}.galex textarea{width:100%;resize:vertical}.gx-checkbox{width:18px;height:18px;margin:0;accent-color:var(--gx-accent);cursor:pointer}.gx-toggle{display:inline-flex;align-items:center}.gx-toggle input{width:18px;height:18px;accent-color:var(--gx-accent)}.gx-mods{display:flex;flex-direction:column;height:100%;min-height:0;min-width:0;padding:10px 24px 24px;overflow:hidden;--gx-text:var(--gpColor-White,#dfe3e6);--gx-muted:var(--gpColor-Neutral,#8b929a);--gx-control:var(--gpBackground-Color-Soft,rgba(59,63,72,.5));--gx-control-hover:var(--gpBackground-Color-Solid,#464d58);color:var(--gx-muted);font-size:14px;font-weight:400}.gx-heading{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:10px 0;flex-shrink:0}.gx-heading h1{font-size:22px;font-weight:700;line-height:28px;color:var(--gx-text)}.gx-heading-meta{font-size:12px;color:var(--gx-muted);white-space:nowrap}.gx-toolbar{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;align-items:stretch;min-width:0;flex-shrink:0}.gx-toolbar>.gx-button,.gx-toolbar>.gx-native-button{width:100%;min-width:0;max-width:100%;margin:0}.gx-toolbar>.gx-button{border:0;color:var(--gx-text)}.gx-toolbar>.gx-native-button{display:flex}.gx-mods .gx-toolbar [class*=DialogButton]:not(.gx-icon-button){width:100%;min-width:0;max-width:100%;margin:0;background:var(--gx-control);color:var(--gx-text)}.gx-toolbar>.gx-button,.gx-toolbar>.gx-native-button,.gx-toolbar>.gx-native-button>button,.gx-mods .gx-toolbar [class*=DialogButton]:not(.gx-icon-button){min-height:34px;padding:8px 14px;font-size:13px;line-height:18px;white-space:normal}.gx-chevron-open{transform:rotate(180deg)}.gx-advanced{display:flex;flex-direction:column;align-items:stretch;gap:6px;padding:8px 0 0;flex-shrink:0}.gx-profile-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;min-width:0;padding:12px;border-radius:2px;background:var(--gpBackground-Color-Medium,#23262e)}.gx-profile-line{display:flex;align-items:center;gap:12px;flex:1 1 220px;min-width:0}.gx-field-label{font-size:14px;line-height:18px;color:var(--gx-text)}.gx-profile-line select{flex:1;max-width:260px;min-width:120px}.gx-profile-actions{display:flex;flex:0 1 auto;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:4px;min-width:0;max-width:60%;margin-left:auto}.gx-profile-actions [class*=DialogButton]:not(.gx-danger){flex:0 1 auto;margin:0;width:auto;min-width:0;max-width:100%;background:var(--gx-control);color:var(--gx-text)}.gx-profile-actions [class*=DialogButton]>button{width:auto;min-width:0}.gx-profile-actions>.gx-native-button,.gx-profile-actions>.gx-button{flex:0 1 auto;width:auto;min-width:0}.gx-profile-actions .gx-danger{background:var(--gx-danger);color:#fff}.gx-profile-actions .gx-button,.gx-profile-actions>.gx-native-button,.gx-profile-actions .gx-native-button>button,.gx-profile-actions [class*=DialogButton]{min-height:34px;padding:8px 14px;font-size:13px;line-height:18px;white-space:normal}.gx-search-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding-top:8px;flex-shrink:0}.gx-filter-group{display:flex;align-items:center;gap:12px;flex:1 1 260px;min-width:0;max-width:400px}.gx-filter-group>.gx-field-label{margin:0;white-space:nowrap}.gx-filter-group>.gx-native-select{flex:1 1 0;min-width:0;max-width:none}.gx-search{display:flex;align-items:center;gap:0;flex:2 1 0;min-width:0;max-width:296px;height:auto;padding:0;border:0;border-radius:0;background:transparent;color:var(--gx-text)}.gx-search input{flex:1;min-width:0}.gx-mods .gx-search input.DialogInput{border:0;border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:8px;min-height:38px;font-size:14px;font-weight:300;line-height:22px}.gx-mods .gx-search input.DialogInput:focus{outline:none;background:var(--gx-control-hover);box-shadow:inset 1px 1px 8px #000000ab}.gx-search button{border:0;background:none;color:var(--gx-muted);padding:2px;margin-left:4px}.gx-sort-direction{flex:0 0 34px;width:34px;min-width:34px;padding:0}.gx-sort-direction button{width:34px;min-width:34px;padding:0}.gx-list-heading{display:flex;align-items:center;gap:12px;min-height:38px;color:var(--gx-muted);font-size:12px;flex-shrink:0}.gx-list-heading>.gx-icon-button{margin-left:auto}.gx-update-link{display:inline-flex;gap:5px;align-items:center;border:0;background:none;color:var(--gx-accent);font-size:12px;padding:2px 4px}.gx-update-link:hover{text-decoration:underline}.gx-mod-list{display:flex;flex-direction:column;gap:2px;flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--gpBackground-Color-Dark,#0e141b);box-shadow:inset 0 4px 4px #00000040;font-size:13px;scrollbar-width:thin}.gx-mod-list::-webkit-scrollbar-thumb{background-color:#3d4450;background-clip:padding-box}.gx-mod-list::-webkit-scrollbar-thumb:hover{background-color:#464d58;background-clip:padding-box}.gx-mod-row{display:flex;flex:0 0 80px;align-items:center;justify-content:flex-start;height:80px;min-height:80px;padding:0;gap:0;background:var(--gpBackground-Color-Medium,#23262e);border-bottom:0}.gx-mod-row>[class*=DialogCheckbox],.gx-mod-row>.gx-checkbox{flex:0 0 22px;width:22px;height:22px;margin:8px}.gx-mod-index{display:flex;align-items:center;justify-content:center;flex:0 0 20px;width:20px;margin:4px;font-size:16px;line-height:20px;color:var(--gx-text)}.gx-mod-avatar{width:48px;height:48px;min-width:48px;max-width:84px;flex-shrink:0;margin:4px 7px 4px 4px;border-radius:0;object-fit:cover;background:#000;display:flex;align-items:center;justify-content:center;color:var(--gx-muted);font-weight:600}.gx-mod-row.is-disabled .gx-mod-avatar,.gx-mod-row.is-disabled .gx-mod-info{opacity:.55}.gx-mod-info{flex:1 1 0;min-width:0;padding-right:4px;overflow:hidden}.gx-mod-title{display:flex;align-items:center;gap:7px;min-width:0}.gx-mod-title h3{font-size:13px;line-height:16px;font-weight:400;color:var(--gx-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-info>p{font-size:12px;line-height:16px;color:#969696;padding-top:4px;margin:0;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-byline{display:flex;flex-wrap:nowrap;gap:4px;font-size:12px;line-height:16px;color:#969696;padding-top:4px;margin:0;overflow:hidden}.gx-mod-byline>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-badge{font-size:10px;padding:1px 5px;border-radius:2px;border:1px solid var(--gx-line);color:var(--gx-muted);white-space:nowrap}.gx-badge--update{color:var(--gx-accent);border-color:var(--gx-accent)}.gx-mod-size{display:flex;align-items:center;flex:0 1 auto;min-width:70px;margin:4px 16px 4px 4px;text-align:right;font-size:12px;line-height:16px;color:var(--gx-text)}.gx-mod-actions{display:flex;align-items:center;flex-shrink:0;padding:4px}.gx-mod-actions .gx-icon-button{width:44px;height:44px;min-width:44px;flex-basis:44px;margin:8px;padding:4px;border-radius:2px;background:var(--gpBackground-Color-Solid,#3d4450);color:var(--gx-text)}.gx-mod-actions .gx-icon-button button,.gx-mod-actions .gx-icon-button>button{width:44px;height:44px;min-width:44px;padding:4px}.gx-mod-actions .gx-icon-button svg{width:24px;height:24px}.gx-mod-actions .gx-icon-button:hover:not(:disabled){background:var(--gx-control-hover);color:#fff}.gx-notice{display:flex;align-items:center;gap:8px;padding:8px 10px;margin:8px 0;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:13px}.gx-notice--error{border-color:var(--gx-danger);color:var(--gx-danger)}.gx-notice button{margin-left:auto;border:0;background:none;color:var(--gx-accent)}.gx-empty{padding:32px 12px;text-align:center;color:var(--gx-muted)}.gx-modal-backdrop{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;background:#000000a6}.gx-modal{display:flex;flex-direction:column;width:min(580px,100%);max-height:min(84vh,760px);border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,#1b2838);box-shadow:0 8px 40px #00000080}.gx-modal>header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--gx-line)}.gx-modal h2{font-size:17px;font-weight:500}.gx-modal-body{padding:16px 18px;overflow-y:auto;min-height:0}.gx-modal>footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid var(--gx-line)}.gx-form-label{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--gx-muted);margin-bottom:12px}.gx-form-label input,.gx-form-label textarea,.gx-form-label select{color:var(--gx-text)}.gx-check-label{display:flex;align-items:center;gap:8px;font-size:13px;margin:8px 0}.gx-import-summary{display:flex;flex-direction:column;gap:4px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code{display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code code{flex:1;min-width:0;overflow-wrap:anywhere;font-family:monospace}.gx-version-list{display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto;margin-top:10px}.gx-file-list{max-height:220px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px;padding:6px;margin:8px 0}.gx-file-list label{display:flex;align-items:center;gap:8px;padding:3px 2px;font-size:12px}.gx-file-list span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}.gx-tabs button[aria-selected=true]{background:var(--gx-control-hover);border-color:var(--gx-accent)}.gx-global-settings{height:100%;min-height:0;overflow-y:auto;padding:0;font-size:14px}.MillenniumDesktopSidebar_EditorContent>.gx-global-settings{margin:-24px -20px -20px;padding:12px 16px 16px}.gx-settings-header{display:flex;align-items:center;gap:8px;margin-bottom:6px}.gx-settings-header h1{font-size:18px;font-weight:500;margin-right:auto}.gx-settings-section{margin:12px 0;padding-bottom:10px;border-bottom:1px solid var(--gx-line)}.gx-settings-section h2{font-size:15px;font-weight:500;margin-bottom:6px}.gx-setting{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:6px 0}.gx-setting>div{display:flex;flex-direction:column;gap:2px;min-width:0}.gx-setting strong{font-size:14px;font-weight:500}.gx-setting small{color:var(--gx-muted);font-size:12px}.gx-connection{display:inline-flex;align-items:center;gap:6px;color:var(--gx-muted);font-size:12px;white-space:nowrap}.gx-status-dot{width:7px;height:7px;border-radius:50%;background:var(--gpColor-Green,#5ba32b)}.gx-path{display:block;padding:6px 8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:12px;overflow-wrap:anywhere;color:var(--gx-muted)}.gx-settings-actions{display:flex;gap:8px;margin:8px 0}.gx-settings-bottom{color:var(--gx-muted);font-size:12px;margin-top:10px}.gx-success{display:flex;align-items:center;gap:6px;color:var(--gpColor-Green,#5ba32b);font-size:12px;margin:6px 0}.gx-settings-intro{color:var(--gx-muted);font-size:12px;margin-bottom:8px}.gx-games{margin-top:8px}.gx-games summary{cursor:pointer;font-size:13px}.gx-games summary span{color:var(--gx-muted);margin-left:6px}.gx-game-list{list-style:none;margin:6px 0 0;padding:0;max-height:180px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px}.gx-game-list li{display:flex;justify-content:space-between;gap:8px;padding:4px 8px;font-size:12px;border-bottom:1px solid var(--gx-line)}.gx-game-list li:last-child{border-bottom:0}.gx-game-list span{color:var(--gx-muted)}[data-galex-properties=tab]{cursor:pointer;user-select:none}[data-galex-properties=tab].gx-tab-active{color:var(--gpColor-White,#fff);background:var(--gpBackground-Color-Soft,rgba(255,255,255,.08))}.gx-injected-panel{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;height:100%;max-height:100%;overflow:hidden;color:var(--gx-text,#dfe3e8)}.gx-injected-panel[hidden]{display:none!important}.gx-adopted-mount{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0}.gx-adopted-mount[hidden]{display:none!important}.gx-mods.gx-mods--embedded{padding:0}@container (max-width:480px){.gx-mods:not(.gx-mods--embedded){padding:12px}.gx-toolbar{grid-template-columns:1fr}.gx-mod-index,.gx-mod-size{display:none}.gx-mod-info>p{display:none}.gx-profile-actions{flex-basis:100%;max-width:100%}.gx-profile-actions .gx-button,.gx-profile-actions .gx-native-button{flex:0 1 auto}.gx-filter-group{flex-basis:100%;max-width:none}.gx-search{max-width:none}}.gx-downloads{margin:0 0 16px;padding:14px 16px;border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,rgba(0,0,0,.2))}.gx-downloads-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:4px}.gx-downloads-header h2{font-size:18px;font-weight:500}.gx-download-graphs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:10px 0}.gx-sparkline{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:8px;font-size:12px;color:var(--gx-muted)}.gx-sparkline svg{width:100%;height:32px;color:var(--gx-accent);background:var(--gx-control);border-radius:2px}.gx-sparkline strong{color:var(--gx-text);font-weight:500;white-space:nowrap}.gx-download-card{display:flex;gap:12px;align-items:center;padding:10px;margin-top:8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control)}.gx-download-card.is-error{border-color:var(--gx-danger)}.gx-download-cover{width:92px;height:43px;flex:0 0 92px;object-fit:cover;border-radius:2px;background:var(--gx-control-hover)}.gx-download-cover--fallback{display:flex;align-items:center;justify-content:center;color:var(--gx-muted)}.gx-download-body{flex:1;min-width:0}.gx-download-body header{display:flex;align-items:baseline;gap:8px;min-width:0}.gx-download-body h3{font-size:15px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-task{font-size:12px;color:var(--gx-muted);margin:2px 0 6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-meta{display:flex;justify-content:space-between;gap:8px;font-size:12px;color:var(--gx-muted);margin-top:4px}.gx-progress{width:100%;height:8px;accent-color:var(--gx-accent)}@container (max-width:640px){.gx-download-graphs{grid-template-columns:1fr}.gx-download-cover{display:none}}", U = "GaleX";
function Ya() {
  return { title: "GaleX", icon: J(K, { name: "package", size: 18 }), content: J(ft, null, J(xa)), linkQueued: (e) => (it(), !0) };
}
async function ja() {
  window.__GALEX_STEAM__?.dispose(), ga(), await sa();
  const e = [], t = [];
  let a = !1, l = !1;
  const r = ba();
  e.push(r);
  const c = ka();
  e.push(c);
  const s = Ya(), u = window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[U], h = window.PLUGIN_LIST?.[U];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS ??= {})[U] = s, (window.PLUGIN_LIST ??= {})[U] = { ...h, ...s };
  const N = /* @__PURE__ */ new Set([document]);
  ln(rn, document);
  const C = (g) => {
    if (a || l || !g.body) return;
    l = !0;
    const p = g.createElement("div");
    p.id = "galex-link-installer", g.body.appendChild(p);
    const x = et(p);
    t.push(x), x.render(J(xt.Provider, { value: g }, J(ft, null, J(ya)))), e.push(() => p.remove());
  }, f = (g, p) => {
    if (a || N.has(g)) return;
    const x = String(p?.m_strName ?? p?.name ?? ""), L = String(p?.m_strTitle ?? p?.title ?? g.title ?? ""), F = x.includes("SP Desktop") && !x.includes("Login");
    Ea(g, { name: x, title: L, allowBodyFallback: g !== document && !F }), N.add(g), ln(rn, g), e.push(an(g)), F && C(g), v.log(`window observed name=${x || "?"} title=${L || "?"} body=${!!g.body} linkRoot=${l}`).catch(() => {
    });
  }, w = (g, p) => {
    if (a || !g) return;
    const x = () => {
      if (!a && g.document?.body)
        try {
          f(g.document, p);
        } catch (L) {
          console.warn("[GaleX] Cannot inspect property window", L), v.log(`window inspect failed: ${String(L)}`).catch(() => {
          });
        }
    };
    if (g.document?.body) {
      x();
      return;
    }
    g.addEventListener?.("DOMContentLoaded", x, { once: !0 }), g.addEventListener?.("load", x, { once: !0 }), e.push(() => {
      g.removeEventListener?.("DOMContentLoaded", x), g.removeEventListener?.("load", x);
    });
  };
  e.push(an(document));
  try {
    const g = Z()?.routerHook;
    if (typeof g?.addPatch == "function") {
      const p = (x) => ({ ...x, children: J(_a, null, x.children) });
      g.addPatch("/library/downloads", p, 7), e.push(() => {
        try {
          g.removePatch?.("/library/downloads", p, 7);
        } catch {
        }
      });
    }
  } catch (g) {
    console.warn("[GaleX] Downloads route patch unavailable", g);
  }
  try {
    const g = Z(), p = g?.Millennium?.AddWindowCreateHook ?? g?.AddWindowCreateHook ?? window.Millennium?.AddWindowCreateHook;
    typeof p == "function" ? p((x) => {
      w(x?.window ?? x?.document?.defaultView ?? x?.BrowserWindow ?? x?.m_popup?.window ?? x?.m_popup ?? x?.m_BrowserWindow, x);
    }) : console.warn("[GaleX] Window hook unavailable; observing the main Steam document only");
  } catch (g) {
    console.warn("[GaleX] Window hook unavailable", g);
  }
  const _ = window.setTimeout(() => C(document), 3e3);
  e.push(() => window.clearTimeout(_)), e.push(wa(() => {
    for (const g of N)
      if (!g.defaultView?.closed)
        try {
          Ka(g);
        } catch {
        }
  }));
  const y = () => {
    a || (a = !0, e.reverse().forEach((g) => {
      try {
        g();
      } catch {
      }
    }), t.forEach((g) => {
      try {
        g.unmount();
      } catch {
      }
    }), u === void 0 ? delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[U] : window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS[U] = u, h === void 0 ? delete window.PLUGIN_LIST?.[U] : window.PLUGIN_LIST[U] = h, delete window.__GALEX_STEAM__, window.GaleX?.dispose === y && delete window.GaleX);
  };
  window.__GALEX_STEAM__ = { dispose: y }, window.GaleX = { openSettings: () => {
    const g = Z();
    g?.Millennium?.openQuickAccess?.({ plugin: U }) ?? g?.openQuickAccess?.({ plugin: U }) ?? window.Millennium?.openQuickAccess?.({ plugin: U });
  }, openProperties: () => Z()?.Navigation?.NavigateToAppProperties?.(), dispose: y }, console.info("[GaleX] frontend 0.3.6 mounted"), v.log(`frontend 0.3.6 mounted; url=${location.href}`).catch(() => {
  });
  const D = window.MILLENNIUM_BACKEND_IPC;
  return typeof D?.postMessage == "function" ? Promise.resolve(D.postMessage(1, { pluginName: U })).then(() => console.info("[GaleX] backend notified that the frontend is loaded")).catch((g) => console.warn("[GaleX] Frontend-loaded notification failed", g)) : console.warn("[GaleX] Millennium backend IPC is unavailable"), s;
}
async function eo() {
  return document.body || await new Promise((e) => document.addEventListener("DOMContentLoaded", () => e(), { once: !0 })), ja();
}
let $e;
function to() {
  return $e || ($e = eo().catch((e) => {
    throw $e = void 0, e;
  })), $e;
}
to().catch((e) => console.error("[GaleX] Startup failed", e));
export {
  to as default
};
