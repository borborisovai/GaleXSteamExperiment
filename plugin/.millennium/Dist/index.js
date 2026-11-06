const S = window.SP_REACT;
S || console.error("[GaleX] window.SP_REACT is missing — is Millennium loaded?");
const Q = S.createElement;
S.cloneElement;
const Wn = S.createContext;
S.createRef;
S.forwardRef;
S.memo;
const Zn = S.useCallback, qn = S.useContext;
S.useDebugValue;
S.useDeferredValue;
const ee = S.useEffect;
S.useId;
S.useImperativeHandle;
S.useLayoutEffect;
const an = S.useMemo;
S.useReducer;
const Ke = S.useRef, x = S.useState, pt = S.useSyncExternalStore;
S.useTransition;
const jn = S.Component;
S.PureComponent;
S.Fragment;
S.StrictMode;
S.Suspense;
S.Children;
S.isValidElement;
S.version;
const ve = window.SP_REACTDOM, on = (e) => typeof ve?.createRoot == "function" ? ve.createRoot(e) : {
  render(t) {
    ve.render(t, e);
  },
  unmount() {
    ve.unmountComponentAtNode?.(e);
  }
}, Qn = ve.createPortal;
ve.flushSync;
const $e = window.SP_REACT, Tt = window.SP_JSX_FACTORY;
function ut(e, t, o) {
  const { children: l, ...s } = t ?? {};
  return o !== void 0 && (s.key = o), l === void 0 ? $e.createElement(e, s) : Array.isArray(l) ? $e.createElement(e, s, ...l) : $e.createElement(e, s, l);
}
const we = typeof Tt?.jsx == "function" ? Tt : void 0, O = we?.Fragment ?? $e.Fragment, a = we ? we.jsx : ut, r = we?.jsxs ?? ut;
we && we.jsx;
const Dt = {
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
}, Jn = {
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
function Z({ name: e, size: t = 18, className: o, strokeWidth: l = 1.6 }) {
  const s = window.MILLENNIUM_API?.IconsModule?.[Jn[e] ?? ""], c = an(() => Dt[e] ?? Dt.info, [e]);
  return typeof s == "function" ? /* @__PURE__ */ a(s, { width: t, height: t, className: o, "aria-hidden": "true", focusable: "false" }) : /* @__PURE__ */ a(
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
function Kn(e) {
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
let Ae = "en", ln = "english";
function rn(e) {
  return String(e ?? "").trim().toLowerCase().replace(/_/g, "-");
}
function Yn(e) {
  const t = rn(e);
  return Et[t] ?? Et[t.split("-")[0]] ?? "en";
}
function ea(e) {
  ln = rn(e) || "english";
  const t = Yn(e);
  t !== Ae && (Ae = t, Ye.forEach((o) => o()));
}
function Ft() {
  return Ae;
}
function ta() {
  return ln;
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
function Le() {
  return pt((e) => (Ye.add(e), () => Ye.delete(e)), Ft, Ft);
}
async function na(e = window) {
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
  return ea(t ?? "english"), Ae;
}
const sn = {
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
}, aa = {
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
}, oa = { en: sn, ru: aa };
function n(e, t) {
  let o = oa[Ae][e] ?? sn[e] ?? e;
  if (t) for (const [l, s] of Object.entries(t)) o = o.split(`{${l}}`).join(String(s));
  return o;
}
function q() {
  return window.MILLENNIUM_API;
}
let tt;
function ia(e) {
  tt = e;
}
async function W(e, t = {}) {
  if (!tt) throw new Error(n("backendMissing"));
  const o = await tt(e, t);
  let l;
  try {
    l = Kn(o);
  } catch (s) {
    throw new Error(et(s instanceof Error ? s.message : String(s)));
  }
  if (!l.ok) throw new Error(et(l.error || n("bridgeNoReply")));
  return l.data;
}
function la() {
  ia(async (e, t) => {
    const o = q();
    if (!o?.Millennium?.callServerMethod) throw new Error(n("millenniumMissing"));
    return o.Millennium.callServerMethod("GaleX", e, { payload: JSON.stringify(t) });
  });
}
const v = {
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
  const o = q()?.Navigation;
  o?.NavigateToSteamWeb ? o.NavigateToSteamWeb(e) : window.open(e, "_blank", "noopener,noreferrer");
}
function dn(e = document) {
  try {
    const t = e.defaultView?.SteamClient?.Window;
    t?.BringToFront?.(!0), t?.SetKeyFocus?.(!0), t?.MarkLastFocused?.(), e.defaultView?.focus();
  } catch {
  }
}
function ra() {
  const e = q()?.Navigation;
  if (e?.Navigate) {
    e.Navigate("/library/downloads");
    return;
  }
  const t = window.SteamClient?.URL ?? q()?.SteamClient?.URL;
  t?.ExecuteSteamURL && t.ExecuteSteamURL("steam://nav/downloads");
}
function sa(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(n("invalidBrowserUrl"));
  const o = q()?.Browser ?? window.SteamClient?.Browser;
  o?.StartDownload ? o.StartDownload(e) : nt(e);
}
function cn() {
  return window.SteamClient?.System ?? q()?.SteamClient?.System;
}
function zt() {
  return typeof cn()?.OpenFileDialog == "function";
}
async function Rt(e, t, o) {
  const l = cn();
  if (typeof l?.OpenFileDialog != "function") return null;
  try {
    const s = await l.OpenFileDialog({
      strTitle: e,
      rgFilters: [
        { strFileTypeName: t, rFilePatterns: o, bUseAsDefault: !0 },
        { strFileTypeName: n("allFiles"), rFilePatterns: ["*"] }
      ]
    });
    return typeof s == "string" && s.length > 0 ? s : null;
  } catch {
    return null;
  }
}
function E(e) {
  return et(e instanceof Error ? e.message : String(e));
}
function da({ error: e, onRetry: t }) {
  return Le(), /* @__PURE__ */ r("div", { className: "galex gx-crash", role: "alert", children: [
    /* @__PURE__ */ a("h2", { children: n("crashTitle") }),
    /* @__PURE__ */ a("p", { children: n("crashBody") }),
    /* @__PURE__ */ a("pre", { children: E(e) }),
    /* @__PURE__ */ a("button", { className: "gx-button", onClick: t, children: n("retry") })
  ] });
}
class gt extends jn {
  state = {};
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, o) {
    console.error("[GaleX]", t, o.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ a(da, { error: this.state.error, onRetry: () => this.setState({ error: void 0 }) }) : this.props.children;
  }
}
const mt = Wn(document);
function pn() {
  return qn(mt);
}
function ue(e) {
  const t = q()?.[e];
  return typeof t == "function" || t && typeof t == "object" ? t : void 0;
}
function N({ children: e, icon: t, primary: o, className: l = "", ...s }) {
  const c = ue(o ? "DialogButtonPrimary" : "DialogButton") ?? ue("DialogButton"), d = /* @__PURE__ */ r(O, { children: [
    t && /* @__PURE__ */ a(Z, { name: t, size: 16 }),
    " ",
    e
  ] });
  return c ? /* @__PURE__ */ a(c, { ...s, className: `gx-native-button ${o ? "gx-native-button--primary" : ""} ${l}`, children: d }) : /* @__PURE__ */ a("button", { type: "button", ...s, className: `gx-button ${o ? "gx-button--primary" : ""} ${l}`, children: d });
}
function Y({ icon: e, label: t, ...o }) {
  const l = ue("DialogButton");
  return l ? /* @__PURE__ */ a(l, { ...o, className: `gx-icon-button ${o.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ a(Z, { name: e, size: 18 }) }) : /* @__PURE__ */ a("button", { type: "button", ...o, className: `gx-icon-button ${o.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ a(Z, { name: e, size: 18 }) });
}
function fe({ value: e, onChange: t, options: o, label: l, disabled: s }) {
  const c = ue("Dropdown");
  return c ? /* @__PURE__ */ a("div", { className: "gx-native-select", children: /* @__PURE__ */ a(c, { disabled: s, menuLabel: l, strDefaultLabel: l, rgOptions: o.map((d) => ({ data: d.value, label: d.label })), selectedOption: e, contextMenuPositionOptions: { bMatchWidth: !0 }, onChange: (d) => t(d.data) }) }) : /* @__PURE__ */ a("select", { "aria-label": l, value: e, disabled: s, onChange: (d) => t(typeof e == "number" ? Number(d.target.value) : d.target.value), children: o.map((d) => /* @__PURE__ */ a("option", { value: d.value, children: d.label }, d.value)) });
}
function Se({ checked: e, onChange: t, label: o, disabled: l }) {
  const s = ue("DialogCheckbox");
  return s ? /* @__PURE__ */ a(s, { controlled: !0, checked: e, disabled: l, "aria-label": o, onChange: t }) : /* @__PURE__ */ a("input", { className: "gx-checkbox", type: "checkbox", "aria-label": o, checked: e, disabled: l, onChange: (c) => t(c.target.checked) });
}
function je({ checked: e, onChange: t, label: o, disabled: l }) {
  const s = ue("Toggle");
  return s ? /* @__PURE__ */ a("div", { className: "gx-toggle", role: "group", "aria-label": o, children: /* @__PURE__ */ a(s, { value: e, disabled: l, onChange: t }) }) : /* @__PURE__ */ r("label", { className: "gx-toggle", children: [
    /* @__PURE__ */ a("input", { type: "checkbox", role: "switch", "aria-label": o, checked: e, disabled: l, onChange: (c) => t(c.target.checked) }),
    /* @__PURE__ */ a("span", { "aria-hidden": "true" })
  ] });
}
function ca({ label: e, description: t, className: o = "", ...l }) {
  const s = ue("TextField");
  return s ? /* @__PURE__ */ a(s, { ...l, label: e, description: t, className: `gx-native-input ${o}` }) : /* @__PURE__ */ a("input", { ...l, className: `gx-input ${o}` });
}
function be({ title: e, children: t, onClose: o, footer: l }) {
  const s = pn(), c = Ke(null), d = Ke(o);
  return d.current = o, ee(() => {
    dn(s);
    const h = s.activeElement, f = c.current, k = () => Array.from(f?.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]') ?? []);
    (f?.querySelector("input,select,textarea") ?? k()[0])?.focus();
    const C = (u) => {
      if (u.key === "Escape" && (u.stopPropagation(), d.current()), u.key === "Tab") {
        const w = k(), _ = w[0], G = w[w.length - 1];
        u.shiftKey && s.activeElement === _ ? (u.preventDefault(), G?.focus()) : !u.shiftKey && s.activeElement === G && (u.preventDefault(), _?.focus());
      }
    };
    return f?.addEventListener("keydown", C), () => {
      f?.removeEventListener("keydown", C), h?.focus();
    };
  }, [s]), Qn(/* @__PURE__ */ a("div", { className: "galex gx-modal-backdrop", onMouseDown: (h) => {
    h.target === h.currentTarget && o();
  }, children: /* @__PURE__ */ r("div", { ref: c, className: "gx-modal DialogPopup_Generic", role: "dialog", "aria-modal": "true", "aria-label": e, children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ a("h2", { children: e }),
      /* @__PURE__ */ a(Y, { icon: "x", label: n("close"), onClick: o })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-modal-body", children: t }),
    l && /* @__PURE__ */ a("footer", { children: l })
  ] }) }), s.body);
}
function Bt({ title: e, children: t, onClose: o, onConfirm: l, busy: s, danger: c }) {
  return /* @__PURE__ */ a(be, { title: e, onClose: o, footer: /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ a(N, { onClick: o, disabled: s, children: n("cancel") }),
    /* @__PURE__ */ a(N, { primary: !0, className: c ? "gx-danger" : "", onClick: l, disabled: s, children: n(s ? "working" : "confirm") })
  ] }), children: /* @__PURE__ */ a("div", { children: t }) });
}
function le({ children: e, error: t, onRetry: o }) {
  return /* @__PURE__ */ r("div", { className: `gx-notice ${t ? "gx-notice--error" : ""}`, role: t ? "alert" : "status", children: [
    /* @__PURE__ */ a(Z, { name: t ? "warning" : "info", size: 17 }),
    /* @__PURE__ */ a("span", { children: e }),
    o && /* @__PURE__ */ a("button", { onClick: o, children: n("retry") })
  ] });
}
function pe(e) {
  return e >= 1073741824 ? n("bytesGb", { value: (e / 1073741824).toFixed(1) }) : e >= 1048576 ? n("bytesMb", { value: (e / 1048576).toFixed(1) }) : n("bytesKb", { value: Math.round(e / 1024) });
}
function he({ title: e, hint: t, children: o }) {
  return /* @__PURE__ */ r("div", { className: "gx-setting", children: [
    /* @__PURE__ */ r("div", { children: [
      /* @__PURE__ */ a("strong", { children: e }),
      t && /* @__PURE__ */ a("small", { children: t })
    ] }),
    o
  ] });
}
function pa({ demo: e = !1 }) {
  Le();
  const [t, o] = x(), [l, s] = x(), [c, d] = x(""), [h, f] = x(""), [k, C] = x(""), [u, w] = x(!1), _ = async () => {
    f("");
    try {
      const [p, b] = await Promise.all([v.snapshot(), v.global("prefs")]);
      s(p), o(b), e || d(await v.getConfig());
    } catch (p) {
      f(E(p));
    }
  };
  ee(() => {
    _();
  }, []);
  const G = async (p) => {
    if (!(!t || u)) {
      w(!0), f(""), C("");
      try {
        const b = { ...t, ...p };
        await v.global("set_prefs", { value: b }), o(b), C(n("savedInGale"));
      } catch (b) {
        f(E(b));
      } finally {
        w(!1);
      }
    }
  }, F = async () => {
    w(!0), f("");
    try {
      await v.setConfig(c.trim()), await v.restart(), C(n("pathSaved")), setTimeout(() => void _(), 2500);
    } catch (p) {
      f(E(p));
    } finally {
      w(!1);
    }
  }, g = async () => {
    w(!0), f("");
    try {
      const p = await v.global("clear_download_cache");
      C(n("cacheCleared", { size: pe(p) }));
    } catch (p) {
      f(E(p));
    } finally {
      w(!1);
    }
  };
  return /* @__PURE__ */ r("section", { className: "galex gx-global-settings", children: [
    /* @__PURE__ */ r("div", { className: "gx-settings-header", children: [
      /* @__PURE__ */ a("h1", { children: "GaleX" }),
      /* @__PURE__ */ r("span", { className: "gx-connection", children: [
        /* @__PURE__ */ a("span", { className: "gx-status-dot" }),
        l ? `Gale ${l.coreVersion}` : n("noConnection")
      ] }),
      /* @__PURE__ */ a(Y, { icon: "refresh", label: n("checkConnection"), disabled: u, onClick: () => void _() })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-settings-intro", children: n("settingsIntro") }),
    h && /* @__PURE__ */ a(le, { error: !0, onRetry: () => void _(), children: h }),
    k && /* @__PURE__ */ r("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ a(Z, { name: "check", size: 15 }),
      k
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("connection") }),
      /* @__PURE__ */ a(he, { title: n("headlessGale"), hint: n("headlessHint") }),
      !e && /* @__PURE__ */ r(O, { children: [
        /* @__PURE__ */ a(ca, { label: n("galePath"), value: c, disabled: u, onChange: (p) => d(p.target.value), placeholder: n("galePathPlaceholder") }),
        /* @__PURE__ */ a("div", { className: "gx-settings-actions", children: /* @__PURE__ */ a(N, { onClick: () => void F(), disabled: u, children: n("saveRestart") }) }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galePathHint") })
      ] }),
      /* @__PURE__ */ a(he, { title: n("dataDir"), hint: n("dataDirHint") }),
      /* @__PURE__ */ a("code", { className: "gx-path", children: l?.dataDir ?? "—" }),
      !!l?.games.length && /* @__PURE__ */ r("details", { className: "gx-games", children: [
        /* @__PURE__ */ r("summary", { children: [
          n("galeGames"),
          " ",
          /* @__PURE__ */ a("span", { children: l.games.length })
        ] }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galeGamesHint") }),
        /* @__PURE__ */ a("ul", { className: "gx-game-list", children: l.games.map((p) => /* @__PURE__ */ r("li", { children: [
          p.name,
          " ",
          /* @__PURE__ */ a("span", { children: p.steamAppId ?? "?" })
        ] }, p.slug)) })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("galePreferences") }),
      /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galePreferencesHint") }),
      t ? /* @__PURE__ */ r(O, { children: [
        /* @__PURE__ */ a(he, { title: n("fetchAuto"), hint: n("fetchAutoHint"), children: /* @__PURE__ */ a(je, { label: n("fetchAuto"), checked: t.fetchModsAutomatically, disabled: u, onChange: (p) => void G({ fetchModsAutomatically: p }) }) }),
        /* @__PURE__ */ a(he, { title: n("pullBeforeLaunch"), hint: n("pullBeforeLaunchHint"), children: /* @__PURE__ */ a(je, { label: n("pullBeforeLaunch"), checked: t.pullBeforeLaunch, disabled: u, onChange: (p) => void G({ pullBeforeLaunch: p }) }) }),
        /* @__PURE__ */ a(he, { title: n("skipBackendConfirm"), hint: n("skipBackendConfirmHint"), children: /* @__PURE__ */ a(je, { label: n("skipBackendConfirm"), checked: t.backendSkipConfirm, disabled: u, onChange: (p) => void G({ backendSkipConfirm: p }) }) })
      ] }) : /* @__PURE__ */ a("p", { className: "gx-muted", children: n("prefsLoading") })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("downloads") }),
      /* @__PURE__ */ a(he, { title: n("downloadCache"), hint: n("downloadCacheHint"), children: /* @__PURE__ */ a(N, { disabled: u || !t || l?.installing, onClick: () => void g(), children: n("clearCache") }) })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-settings-bottom", children: n("settingsBottom") })
  ] });
}
let ht = { error: "", loading: !0 };
const Ge = /* @__PURE__ */ new Set();
let ft, de = !0, Qe = !1, Pe = 0;
function $t(e) {
  ht = e, Ge.forEach((t) => t());
}
async function xt() {
  if (de || Qe) return;
  Qe = !0;
  const e = Pe;
  try {
    const t = await v.snapshot();
    !de && e === Pe && $t({ snapshot: t, error: t.ok ? "" : n("incompatibleBridge"), loading: !1 });
  } catch (t) {
    !de && e === Pe && $t({ ...ht, error: E(t), loading: !1 });
  } finally {
    Qe = !1, de || (ft = setTimeout(() => void xt(), document.visibilityState === "hidden" ? 15e3 : 3e3));
  }
}
function ua() {
  return de ? (de = !1, Pe++, xt(), () => Ht()) : () => Ht();
}
function Ht() {
  de = !0, Pe++, clearTimeout(ft);
}
function at() {
  clearTimeout(ft), xt();
}
function ot() {
  return ht;
}
function ga() {
  return pt((e) => (Ge.add(e), () => Ge.delete(e)), ot, ot);
}
function Ut(e, t) {
  return e?.games.find((o) => o.steamAppId === t);
}
function ma(e) {
  return Ge.add(e), () => {
    Ge.delete(e);
  };
}
function ha() {
  Le();
  const e = pn(), { snapshot: t } = ga(), o = t?.pendingLinks[0], [l, s] = x(), [c, d] = x(), [h, f] = x(), [k, C] = x(""), [u, w] = x(!1), [_, G] = x(0);
  if (ee(() => {
    if (!o) return;
    dn(e);
    let p = !1;
    return s(void 0), C(""), d(void 0), (async () => {
      try {
        const [b, P] = await Promise.all([v.call("profiles", { slug: o.slug }), v.call("resolve_link", { slug: o.slug }, { url: o.url })]);
        p || (d(b), f(b.activeId), s(P));
      } catch (b) {
        p || C(E(b));
      }
    })(), () => {
      p = !0;
    };
  }, [o?.url, o?.slug, _]), !o) return null;
  const F = () => {
    u || v.dismissLink(o.url).then(() => at()).catch((p) => C(E(p)));
  }, g = () => void (async () => {
    w(!0), C("");
    try {
      await v.call("install_mod", { slug: o.slug, profileId: h }, { id: { packageUuid: l.uuid, versionUuid: l.versionUuid, backend: l.backend } }), await v.dismissLink(o.url), at();
    } catch (p) {
      C(E(p));
    } finally {
      w(!1);
    }
  })();
  return /* @__PURE__ */ r(be, { title: n("linkTitle"), onClose: F, footer: /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ a(N, { disabled: u, onClick: F, children: n("cancel") }),
    /* @__PURE__ */ a(N, { primary: !0, disabled: u || !l || h === void 0, onClick: g, children: n(u ? "linkInstalling" : "linkInstall") })
  ] }), children: [
    /* @__PURE__ */ a("h3", { children: l?.name ?? o.url.split("/").slice(-2, -1)[0] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: l ? `${l.author} · v${l.version}` : n("linkChecking") }),
    c && /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
      n("linkProfile"),
      /* @__PURE__ */ a(fe, { label: n("linkProfile"), value: h ?? c.activeId, options: c.profiles.map((p) => ({ value: p.id, label: p.name })), onChange: f })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: n("linkDeps", { game: t?.games.find((p) => p.slug === o.slug)?.name ?? o.slug }) }),
    k && /* @__PURE__ */ a(le, { error: !0, onRetry: () => G((p) => p + 1), children: k })
  ] });
}
let He = { error: "" };
const it = /* @__PURE__ */ new Set();
let vt, ce = !0, Je = !1, Ie = 0;
function Ot(e) {
  He = e, it.forEach((t) => t());
}
async function bt() {
  if (ce || Je) return;
  Je = !0;
  const e = Ie;
  try {
    const t = await v.progress();
    !ce && e === Ie && Ot({ snapshot: t, error: "" });
  } catch (t) {
    !ce && e === Ie && Ot({ ...He, error: E(t) });
  } finally {
    Je = !1, ce || (vt = setTimeout(() => void bt(), He.snapshot?.active ? 750 : 2e3));
  }
}
function fa() {
  return ce ? (ce = !1, Ie++, bt(), () => Xt()) : () => Xt();
}
function Xt() {
  ce = !0, Ie++, clearTimeout(vt);
}
function xa() {
  clearTimeout(vt), bt();
}
function Vt() {
  return He;
}
function un() {
  return pt((e) => (it.add(e), () => it.delete(e)), Vt, Vt);
}
function va(e) {
  return `${pe(Math.max(0, e))}/s`;
}
function ba(e) {
  const t = `task_${e.kind.replace(/-/g, "_")}`, o = n(t);
  return o === t ? n("task_install") : o;
}
function wa(e) {
  const o = `phase_${e.status === "done" ? "done" : e.status === "error" ? "error" : e.phase ?? "starting"}`, l = n(o);
  return l === o ? n("working") : l;
}
function ya(e) {
  if (e.totalBytes && e.totalBytes > 0) return Math.min(100, Math.round(e.completedBytes / e.totalBytes * 100));
  if (e.totalMods && e.totalMods > 0) return Math.min(100, Math.round(e.completedMods / e.totalMods * 100));
}
function Wt({ history: e, field: t, label: o }) {
  const l = e.map((d) => d[t]), s = Math.max(1, ...l), c = l.map((d, h) => `${l.length > 1 ? h / (l.length - 1) * 100 : 0},${32 - d / s * 30}`).join(" ");
  return /* @__PURE__ */ r("div", { className: "gx-sparkline", "aria-label": o, children: [
    /* @__PURE__ */ a("span", { children: o }),
    /* @__PURE__ */ a("svg", { viewBox: "0 0 100 32", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ a("polyline", { points: c, fill: "none", stroke: "currentColor", strokeWidth: "1.5" }) }),
    /* @__PURE__ */ a("strong", { children: va(l[l.length - 1] ?? 0) })
  ] });
}
function ka({ task: e }) {
  const t = ya(e), o = window.MILLENNIUM_API?.ProgressBarWithInfo, l = wa(e), s = e.totalBytes ? `${pe(e.completedBytes)} / ${pe(e.totalBytes)}` : e.totalMods ? `${e.completedMods}/${e.totalMods}` : "";
  return /* @__PURE__ */ r("article", { className: `gx-download-card ${e.status === "error" ? "is-error" : ""}`, "data-appid": e.steamAppId, "data-galex-download": e.id, children: [
    e.steamAppId ? /* @__PURE__ */ a("img", { className: "gx-download-cover", src: `https://cdn.cloudflare.steamstatic.com/steam/apps/${e.steamAppId}/header.jpg`, alt: "", loading: "lazy" }) : /* @__PURE__ */ a("span", { className: "gx-download-cover gx-download-cover--fallback", children: /* @__PURE__ */ a(Z, { name: "package", size: 24 }) }),
    /* @__PURE__ */ r("div", { className: "gx-download-body", children: [
      /* @__PURE__ */ r("header", { children: [
        /* @__PURE__ */ a("h3", { children: e.gameName }),
        /* @__PURE__ */ a("span", { className: "gx-muted", children: e.profileName ?? e.slug })
      ] }),
      /* @__PURE__ */ r("p", { className: "gx-download-task", children: [
        ba(e),
        " · ",
        l,
        e.currentMod ? ` · ${e.currentMod}` : ""
      ] }),
      typeof o == "function" ? /* @__PURE__ */ a(o, { nProgress: t ?? 0, indeterminate: t === void 0 || e.status === "active" && t === 0, strOperationText: l, sTimeRemaining: s }) : /* @__PURE__ */ a("progress", { className: "gx-progress", max: 100, value: t ?? void 0, "aria-label": l }),
      /* @__PURE__ */ r("div", { className: "gx-download-meta", children: [
        /* @__PURE__ */ a("span", { children: s || n("working") }),
        t !== void 0 && /* @__PURE__ */ r("span", { children: [
          t,
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Ca() {
  Le();
  const { snapshot: e, error: t } = un(), o = e?.tasks ?? [], l = o.some((s) => s.status === "active");
  return !e || o.length === 0 && !t ? null : /* @__PURE__ */ r("section", { className: "galex gx-downloads", "aria-label": n("galeDownloads"), children: [
    /* @__PURE__ */ r("header", { className: "gx-downloads-header", children: [
      /* @__PURE__ */ a("h2", { children: n("galeDownloads") }),
      l && /* @__PURE__ */ a(N, { icon: "x", onClick: () => void v.cancelInstalls().then(xa).catch(() => {
      }), children: n("cancelDownloads") })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galeDownloadsHint") }),
    t && /* @__PURE__ */ a(le, { error: !0, children: t }),
    e && /* @__PURE__ */ r("div", { className: "gx-download-graphs", children: [
      /* @__PURE__ */ a(Wt, { history: e.history, field: "network", label: n("network") }),
      /* @__PURE__ */ a(Wt, { history: e.history, field: "disk", label: n("disk") })
    ] }),
    o.length ? o.map((s) => /* @__PURE__ */ a(ka, { task: s }, s.id)) : /* @__PURE__ */ a("div", { className: "gx-empty", children: n(e ? "noGaleDownloads" : "loading") })
  ] });
}
function Na({ children: e }) {
  return /* @__PURE__ */ r(O, { children: [
    /* @__PURE__ */ a(Ca, {}),
    e
  ] });
}
const Ma = { includeCategories: [], excludeCategories: [], includeNsfw: !1, includeDeprecated: !0, includeDisabled: !0, includeEnabled: !0, sortBy: "name", sortOrder: "ascending" }, Zt = { mods: [], totalModCount: 0, updates: [], unknownMods: [] };
function Sa(e) {
  if (e.type === "remote" && e.author && e.version) {
    if (e.backend === "Thunderstore") return `https://ccdn.thunderstore.io/live/repository/icons/${encodeURIComponent(`${e.author}-${e.name}-${e.version}`)}.png`;
    if (e.backend === "Hexium") return `https://cdn.hexium.gg/uploads/${encodeURIComponent(e.author)}/${encodeURIComponent(e.name)}/icon.png?${encodeURIComponent(e.version)}`;
  }
  if (e.icon && /^(https?:|data:)/i.test(e.icon)) return e.icon;
}
function Pa({ mod: e }) {
  const [t, o] = x(!1), l = Sa(e.data);
  return !l || t ? /* @__PURE__ */ a("span", { className: "gx-mod-avatar", "aria-hidden": "true", children: e.data.name.slice(0, 2).toUpperCase() }) : /* @__PURE__ */ a("img", { className: "gx-mod-avatar", src: l, alt: "", loading: "lazy", onError: () => o(!0) });
}
const qt = (e) => e.replace(/_/g, " ");
function Ia({ game: e, demo: t = !1, installing: o = !1 }) {
  Le();
  const [l, s] = x({ activeId: 0, profiles: [] }), [c, d] = x(), [h, f] = x(Zt), [k, C] = x(""), [u, w] = x(""), [_, G] = x("all"), [F, g] = x("name"), [p, b] = x(!0), [P, D] = x(""), [re, Te] = x([]), [te, Oe] = x(!1), [De, ne] = x(!0), [ye, L] = x(""), [Ee, T] = x(""), [y, wt] = x(""), [fn, xn] = x(0), [vn, bn] = x(0), [z, R] = x(null), [J, X] = x(""), [Fe, Xe] = x(""), [H, ge] = x(null), [me, yt] = x("code"), [ke, Ce] = x("new"), [kt, wn] = x(!1), [Ct, yn] = x(!1), [Ve, kn] = x(""), [se, Nt] = x(null), [Mt, St] = x([]), [Pt, It] = x(""), [Cn, _t] = x(!1), [Ne, We] = x([]), [ae, ze] = x(null), [K, Nn] = x(null), Re = Ke(!0), A = { slug: e.slug, profileId: c }, oe = l.profiles.find((i) => i.id === c), B = () => xn((i) => i + 1), At = () => bn((i) => i + 1);
  ee(() => (Re.current = !0, () => {
    Re.current = !1;
  }), []), ee(() => {
    const i = setTimeout(() => w(k), 220);
    return () => clearTimeout(i);
  }, [k]), ee(() => {
    let i = !1;
    return ne(!0), L(""), d(void 0), f(Zt), C(""), D(""), Te([]), G("all"), v.call("profiles", { slug: e.slug }).then((m) => {
      i || (s(m), d(m.activeId));
    }).catch((m) => {
      i || (L(E(m)), ne(!1));
    }), () => {
      i = !0;
    };
  }, [e.slug, vn]), ee(() => {
    if (c === void 0) return;
    let i = !1;
    ne(!0);
    const m = { ...Ma, searchTerm: u, includeEnabled: _ !== "disabled", includeDisabled: _ !== "enabled", includeCategories: P ? [P] : [], sortBy: F, sortOrder: p ? "ascending" : "descending" };
    return v.call("mods", { slug: e.slug, profileId: c }, { args: m }).then((M) => {
      i || (f(M), L(""), Te((V) => Array.from(/* @__PURE__ */ new Set([...V, ...M.mods.flatMap((j) => j.data.categories ?? [])])).sort()));
    }).catch((M) => {
      i || L(E(M));
    }).finally(() => {
      i || ne(!1);
    }), () => {
      i = !0;
    };
  }, [e.slug, c, u, _, F, p, P, fn]), ee(() => {
    if (!Ee) return;
    const i = setTimeout(() => T(""), 4500);
    return () => clearTimeout(i);
  }, [Ee]), ee(() => {
    z !== "export" || t || v.call("list_export_files", A).then(We).catch((i) => L(E(i)));
  }, [z, c]);
  const { snapshot: Mn } = un(), Sn = Mn?.tasks.find((i) => i.slug === e.slug && i.status === "active"), Me = h.updates.filter((i) => !i.ignore), Gt = _ === "updates" ? h.mods.filter((i) => Me.some((m) => m.updatedId.packageUuid === i.data.uuid)) : h.mods, Pn = h.mods.filter((i) => i.enabled).length, In = an(() => Ne.filter((i) => i.included).reduce((i, m) => i + m.size, 0), [Ne]), I = Zn(async (i, m) => {
    if (!y) {
      wt(i), L("");
      try {
        await m();
      } catch (M) {
        Re.current && L(E(M));
      } finally {
        Re.current && wt("");
      }
    }
  }, [y]), Ze = async (i, m = {}) => {
    await v.call(i, A, m);
    const M = await v.call("profiles", { slug: e.slug }), V = i === "import_profile" ? J.trim() : J;
    let j = M.activeId;
    (i === "create_profile" || i === "duplicate_profile" || i === "import_profile") && (j = M.profiles.find((qe) => qe.name === V)?.id ?? M.activeId), i === "delete_profile" && (j = M.activeId), await v.call("activate_profile", { slug: e.slug, profileId: j }), s(M), d(j), R(null), X(""), ge(null), B(), T(n("profileSaved"));
  }, _n = (i) => void I(i.data.uuid, async () => {
    const m = await v.call("toggle_mod", A, { uuid: i.data.uuid });
    m.type === "confirm" ? ze({ title: n("disableMod", { name: i.data.name }), description: n("disableDependants"), uuids: [i.data.uuid, ...m.dependants.map((M) => M.uuid)], kind: "toggle" }) : B();
  }), An = (i) => void I(i.data.uuid, async () => {
    const m = await v.call("remove_mod", A, { uuid: i.data.uuid });
    m.type === "confirm" ? ze({ title: n("removeMod", { name: i.data.name }), description: n("removeDependants"), uuids: [i.data.uuid, ...m.dependants.map((M) => M.uuid)], kind: "remove" }) : (B(), T(n("modRemoved")));
  }), Gn = () => {
    ae && I("confirm", async () => {
      await v.call(ae.kind === "toggle" ? "force_toggle_mods" : "force_remove_mods", A, { uuids: [...new Set(ae.uuids)] }), ze(null), B(), T(ae.kind === "toggle" ? n("stateChanged") : n("modRemoved"));
    });
  }, Lt = () => void I("browser", async () => {
    if (t) {
      T(n("demoConfig"));
      return;
    }
    const i = await v.browserUrl({ ...A, lang: ta() });
    nt(i.url), T(n("configOpened"));
  }), Ln = () => void I("import", async () => {
    if (!Fe.trim()) throw new Error(n("importCodePlaceholder"));
    const i = await v.call("read_profile_code", A, { code: Fe.trim() });
    ge(i), X(i.manifest.profileName), Ce(l.profiles.some((m) => m.name === i.manifest.profileName) ? "overwrite" : "new");
  }), Tn = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      L(n("fileTooLarge"));
      return;
    }
    const m = new FileReader();
    m.onload = () => void I("import", async () => {
      const M = String(m.result).split(",")[1] ?? "", V = await v.call("read_profile_base64", A, { base64: M });
      ge(V), X(V.manifest.profileName), Ce(l.profiles.some((j) => j.name === V.manifest.profileName) ? "overwrite" : "new");
    }), m.onerror = () => L(n("fileReadError")), m.readAsDataURL(i);
  }, Dn = (i) => void I("import", async () => {
    const m = await v.call("read_profile_file", A, { path: i });
    ge(m), X(m.manifest.profileName), Ce(l.profiles.some((M) => M.name === m.manifest.profileName) ? "overwrite" : "new");
  }), En = async () => {
    const i = await Rt(n("profileFileDialog"), n("profileFileFilter"), ["*.r2z", "*.zip"]);
    i && Dn(i);
  }, Fn = async () => {
    const i = await Rt(n("localFileDialog"), n("localFileFilter"), ["*.zip"]);
    i && I("local", async () => {
      await v.call("import_local_mod", A, { path: i }), R(null), B(), T(n("profileSaved"));
    });
  }, zn = () => void I("import", async () => {
    if (!H) return;
    const i = { ...H, manifest: { ...H.manifest, profileName: J.trim() || H.manifest.profileName } };
    await Ze("import_profile", { data: i, options: { importAll: kt, merge: ke === "overwrite" && Ct, ignoreMissingMods: H.missingMods.length > 0 } });
  }), Rn = () => void I("r2", async () => {
    const i = await v.call("get_r2modman_info", A, { path: Ve.trim() || null });
    Nt(i), St(i?.profiles.map(() => !0) ?? []);
  }), Bn = () => void I("r2", async () => {
    se && (await v.call("import_r2modman", A, { path: se.path, include: Mt }), R(null), At(), B(), T(n("profileSaved")));
  }), $n = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      L(n("fileTooLarge"));
      return;
    }
    const m = new FileReader();
    m.onload = () => void I("local", async () => {
      await v.call("import_local_mod_base64", A, { base64: String(m.result).split(",")[1] ?? "" }), R(null), B(), T(n("profileSaved"));
    }), m.onerror = () => L(n("fileReadError")), m.readAsDataURL(i);
  }, Hn = () => void I("export", async () => {
    const i = await v.call("export_code", A);
    _t(i.type !== "success"), It(i.code ?? ""), R("export");
  }), Un = (i) => {
    if (t) {
      We(i);
      return;
    }
    I("export-files", async () => {
      await v.call("set_excluded_export_files", A, { excludedFiles: i.filter((m) => !m.included).map((m) => m.path) }), We(i), It("");
    });
  }, On = () => void I("export-file", async () => {
    const { url: i } = await v.browserUrl({ ...A, kind: "export" });
    sa(i);
  }), Xn = () => void I("update", async () => {
    await v.call("update_mods", A, { uuids: Me.map((i) => i.updatedId.packageUuid) }), T(n(t ? "demoUpdate" : "updateQueued")), B();
  }), ie = () => {
    y || (R(null), ge(null), X(""), Xe(""), Nt(null), _t(!1));
  }, Vn = async (i, m) => {
    try {
      await navigator.clipboard.writeText(i), T(m);
    } catch {
      L(n("clipboardError"));
    }
  };
  return /* @__PURE__ */ r("section", { className: "galex gx-mods", "aria-label": n("mods"), "data-appid": e.steamAppId, children: [
    /* @__PURE__ */ r("div", { className: "gx-heading", children: [
      /* @__PURE__ */ r("h1", { children: [
        n("mods"),
        " ",
        /* @__PURE__ */ a("span", { children: e.name })
      ] }),
      (o || t) && /* @__PURE__ */ a("div", { className: "gx-heading-meta", children: n(o ? "working" : "demo") })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-toolbar", children: [
      /* @__PURE__ */ a(N, { icon: "external", onClick: () => nt(`https://thunderstore.io/c/${encodeURIComponent(e.slug)}/`), children: n("openThunderstore") }),
      /* @__PURE__ */ r(N, { icon: "settings", onClick: () => Oe((i) => !i), "aria-expanded": te, children: [
        n("advanced"),
        " ",
        /* @__PURE__ */ a(Z, { name: te ? "chevron-down" : "chevron-right", size: 13 })
      ] }),
      /* @__PURE__ */ a("span", { className: "gx-toolbar-spacer" }),
      /* @__PURE__ */ a(Y, { icon: "refresh", label: n("refresh"), onClick: () => {
        At(), B();
      }, disabled: !!y })
    ] }),
    te && /* @__PURE__ */ r("div", { className: "gx-advanced", children: [
      /* @__PURE__ */ r("div", { className: "gx-profile-row", children: [
        /* @__PURE__ */ r("div", { className: "gx-profile-line", children: [
          /* @__PURE__ */ a("span", { className: "gx-field-label", children: n("profile") }),
          /* @__PURE__ */ a(fe, { label: n("profile"), value: c ?? 0, disabled: !!y || !l.profiles.length, options: l.profiles.map((i) => ({ value: i.id, label: i.name })), onChange: (i) => void I("profile", async () => {
            await v.call("activate_profile", { slug: e.slug, profileId: i }), d(i), B();
          }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "gx-profile-actions", children: [
          /* @__PURE__ */ a(N, { icon: "plus", disabled: !!y, onClick: () => {
            X(""), R("create");
          }, children: n("createProfile") }),
          /* @__PURE__ */ a(N, { disabled: !oe || !!y, onClick: () => {
            X(oe?.name ?? ""), R("rename");
          }, children: n("renameProfile") }),
          /* @__PURE__ */ a(N, { disabled: !oe || !!y, onClick: () => {
            X(`${oe?.name} copy`), R("duplicate");
          }, children: n("duplicateProfile") }),
          /* @__PURE__ */ a(N, { className: "gx-danger", disabled: l.profiles.length < 2 || !!y, onClick: () => R("delete"), children: n("deleteProfile") })
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "gx-profile-row", children: /* @__PURE__ */ r("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ a(N, { icon: "download", disabled: !oe || !!y, onClick: () => {
          Xe(""), ge(null), yt("code"), R("import");
        }, children: n("import") }),
        /* @__PURE__ */ a(N, { icon: "external", disabled: !oe || !!y, onClick: Hn, children: n("export") })
      ] }) }),
      /* @__PURE__ */ a("div", { className: "gx-profile-row", children: /* @__PURE__ */ a("div", { className: "gx-profile-actions", children: /* @__PURE__ */ a(N, { icon: "sliders", disabled: !oe || !!y, onClick: Lt, children: n("config") }) }) })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-search-row", children: [
      /* @__PURE__ */ r("label", { className: "gx-search", children: [
        /* @__PURE__ */ a(Z, { name: "search", size: 16 }),
        /* @__PURE__ */ a("input", { "aria-label": n("searchMods"), placeholder: n("searchMods"), value: k, onChange: (i) => C(i.target.value) }),
        k && /* @__PURE__ */ a("button", { "aria-label": n("clearSearch"), onClick: () => C(""), children: /* @__PURE__ */ a(Z, { name: "x", size: 13 }) })
      ] }),
      /* @__PURE__ */ a(fe, { label: n("filter"), value: _, onChange: G, options: [{ value: "all", label: n("all") }, { value: "enabled", label: n("enabled") }, { value: "disabled", label: n("disabled") }, { value: "updates", label: n("updates") }] }),
      /* @__PURE__ */ a(fe, { label: n("sortBy"), value: F, onChange: g, options: [{ value: "name", label: n("byName") }, { value: "author", label: n("byAuthor") }, { value: "installDate", label: n("byInstallDate") }, { value: "diskSpace", label: n("bySize") }, { value: "downloads", label: n("byDownloads") }] }),
      /* @__PURE__ */ a(Y, { className: "gx-sort-direction", icon: p ? "arrow-up" : "arrow-down", label: n(p ? "ascending" : "descending"), onClick: () => b((i) => !i), disabled: !!y }),
      /* @__PURE__ */ a(fe, { label: n("categories"), value: P, onChange: D, options: [{ value: "", label: n("allCategories") }, ...re.map((i) => ({ value: i, label: i }))] })
    ] }),
    ye && /* @__PURE__ */ a(le, { error: !0, onRetry: () => {
      L(""), B();
    }, children: ye }),
    Ee && /* @__PURE__ */ a(le, { children: Ee }),
    Sn && /* @__PURE__ */ a(le, { children: /* @__PURE__ */ r("span", { children: [
      n("operationInProgress"),
      " ",
      /* @__PURE__ */ a("button", { className: "gx-update-link", onClick: ra, children: n("openDownloads") })
    ] }) }),
    /* @__PURE__ */ r("div", { className: "gx-list-heading", children: [
      /* @__PURE__ */ a("span", { children: n("modCount", { count: h.totalModCount }) }),
      /* @__PURE__ */ a("span", { children: n("enabledCount", { count: Pn }) }),
      !!Me.length && /* @__PURE__ */ r("button", { className: "gx-update-link", disabled: !!y, onClick: Xn, children: [
        /* @__PURE__ */ a(Z, { name: "download", size: 13 }),
        n("updateAll", { count: Me.length })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-mod-list", tabIndex: 0, children: De && !h.mods.length ? /* @__PURE__ */ a("div", { className: "gx-empty", children: n("loading") }) : Gt.length ? Gt.map((i, m) => {
      const M = Me.find((V) => V.updatedId.packageUuid === i.data.uuid);
      return /* @__PURE__ */ r("div", { className: `gx-mod-row ${i.enabled ? "" : "is-disabled"}`, children: [
        /* @__PURE__ */ a(Se, { checked: i.enabled, disabled: !!y, label: qt(i.data.name), onChange: () => _n(i) }),
        /* @__PURE__ */ a("span", { className: "gx-mod-index", children: m + 1 }),
        /* @__PURE__ */ a(Pa, { mod: i }),
        /* @__PURE__ */ r("div", { className: "gx-mod-info", children: [
          /* @__PURE__ */ r("div", { className: "gx-mod-title", children: [
            /* @__PURE__ */ a("h3", { children: qt(i.data.name) }),
            M && /* @__PURE__ */ r("span", { className: "gx-badge gx-badge--update", children: [
              M.old,
              " → ",
              M.new
            ] }),
            i.data.type === "local" && /* @__PURE__ */ a("span", { className: "gx-badge", children: n("local") })
          ] }),
          !!i.data.dependencies?.length && /* @__PURE__ */ r("p", { children: [
            n("dependsOn"),
            ": ",
            i.data.dependencies.join(", ")
          ] }),
          /* @__PURE__ */ r("div", { className: "gx-mod-byline", children: [
            /* @__PURE__ */ a("span", { children: i.data.author }),
            /* @__PURE__ */ r("span", { children: [
              "v",
              i.data.version
            ] }),
            !!i.data.categories?.length && /* @__PURE__ */ r("span", { children: [
              n("tags"),
              ": ",
              i.data.categories.join(", ")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a("span", { className: "gx-mod-size", children: pe(i.data.fileSize) }),
        /* @__PURE__ */ r("div", { className: "gx-mod-actions", children: [
          i.configFile && /* @__PURE__ */ a(Y, { icon: "sliders", label: n("openConfig"), disabled: !!y, onClick: Lt }),
          i.data.type === "remote" && /* @__PURE__ */ a(Y, { icon: "layers", label: n("versions"), disabled: !!y, onClick: () => {
            Nn(i), R("versions");
          } }),
          M && /* @__PURE__ */ a(Y, { icon: "download", label: n("update"), disabled: !!y, onClick: () => void I("update-one", async () => {
            await v.call("update_mods", A, { uuids: [i.data.uuid] }), B(), T(n("updateQueued"));
          }) }),
          /* @__PURE__ */ a(Y, { icon: "trash", label: n("remove"), disabled: !!y, onClick: () => An(i) })
        ] })
      ] }, i.data.uuid);
    }) : /* @__PURE__ */ a("div", { className: "gx-empty", children: n("noMods") }) }),
    ae && /* @__PURE__ */ a(Bt, { title: ae.title, onClose: () => ze(null), onConfirm: Gn, busy: !!y, danger: ae.kind === "remove", children: /* @__PURE__ */ a("p", { children: ae.description }) }),
    (z === "create" || z === "rename" || z === "duplicate") && /* @__PURE__ */ a(be, { title: n(z === "create" ? "createProfileTitle" : z === "rename" ? "renameProfileTitle" : "duplicateProfileTitle"), onClose: ie, footer: /* @__PURE__ */ r(O, { children: [
      /* @__PURE__ */ a(N, { onClick: ie, disabled: !!y, children: n("cancel") }),
      /* @__PURE__ */ a(N, { primary: !0, disabled: !!y || !J.trim(), onClick: () => void I("profile", () => Ze(z === "create" ? "create_profile" : z === "rename" ? "rename_profile" : "duplicate_profile", { name: J.trim() })), children: n(y ? "working" : "save") })
    ] }), children: /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
      n("profileName"),
      /* @__PURE__ */ a("input", { value: J, onChange: (i) => X(i.target.value), autoFocus: !0 })
    ] }) }),
    z === "delete" && /* @__PURE__ */ a(Bt, { title: n("deleteProfileTitle"), onClose: ie, onConfirm: () => void I("profile", () => Ze("delete_profile", { id: c })), busy: !!y, danger: !0, children: /* @__PURE__ */ a("p", { children: n("deleteProfileBody", { name: oe?.name ?? "" }) }) }),
    z === "import" && /* @__PURE__ */ a(be, { title: n(H ? "importPreview" : "importTitle"), onClose: ie, footer: /* @__PURE__ */ r(O, { children: [
      /* @__PURE__ */ a(N, { onClick: ie, disabled: !!y, children: n("cancel") }),
      H ? /* @__PURE__ */ a(N, { primary: !0, onClick: zn, disabled: !!y || !J.trim(), children: n(y ? "importing" : "installProfile") }) : me === "code" ? /* @__PURE__ */ a(N, { primary: !0, onClick: Ln, disabled: !!y || !Fe.trim(), children: n(y ? "working" : "continue") }) : me === "r2" ? /* @__PURE__ */ a(N, { primary: !0, onClick: se ? Bn : Rn, disabled: !!y || !se && !Ve.trim(), children: n(y ? "working" : se ? "import" : "r2Load") }) : null
    ] }), children: H ? /* @__PURE__ */ r(O, { children: [
      /* @__PURE__ */ r("div", { className: "gx-tabs", children: [
        /* @__PURE__ */ a(N, { className: ke === "new" ? "gx-button--primary" : "", onClick: () => Ce("new"), children: n("newProfile") }),
        /* @__PURE__ */ a(N, { className: ke === "overwrite" ? "gx-button--primary" : "", onClick: () => Ce("overwrite"), children: n("overwriteProfile") })
      ] }),
      /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
        n("profileName"),
        /* @__PURE__ */ a("input", { value: J, onChange: (i) => X(i.target.value) })
      ] }),
      ke === "overwrite" && /* @__PURE__ */ a(fe, { label: n("overwriteProfile"), value: J, onChange: X, options: l.profiles.map((i) => ({ value: i.name, label: i.name })) }),
      /* @__PURE__ */ r("div", { className: "gx-import-summary", children: [
        /* @__PURE__ */ a("strong", { children: H.manifest.profileName }),
        /* @__PURE__ */ a("span", { children: n("modsToInstall", { count: H.manifest.mods.length }) })
      ] }),
      !!H.missingMods.length && /* @__PURE__ */ a(le, { error: !0, children: n("missingMods", { mods: H.missingMods.join(", ") }) }),
      /* @__PURE__ */ r("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ a(Se, { checked: kt, onChange: wn, label: n("importAllFiles") }),
        n("importAllFiles")
      ] }),
      ke === "overwrite" && /* @__PURE__ */ r("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ a(Se, { checked: Ct, onChange: yn, label: n("mergeProfiles") }),
        n("mergeProfiles")
      ] })
    ] }) : /* @__PURE__ */ r(O, { children: [
      /* @__PURE__ */ a("div", { className: "gx-tabs", children: ["code", "r2", "local"].map((i) => /* @__PURE__ */ a(N, { className: me === i ? "gx-button--primary" : "", onClick: () => yt(i), children: n(i === "code" ? "importCode" : i === "r2" ? "importR2" : "importLocal") }, i)) }),
      me === "code" && /* @__PURE__ */ r(O, { children: [
        /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
          n("importCode"),
          /* @__PURE__ */ a("textarea", { value: Fe, onChange: (i) => Xe(i.target.value), placeholder: n("importCodePlaceholder"), rows: 3 })
        ] }),
        /* @__PURE__ */ r("div", { className: "gx-form-label", children: [
          /* @__PURE__ */ a("span", { children: n("importFile") }),
          zt() ? /* @__PURE__ */ a(N, { icon: "folder", disabled: !!y, onClick: () => void En(), children: n("importFileButton") }) : /* @__PURE__ */ a("input", { type: "file", accept: ".r2z,.zip", onChange: (i) => {
            const m = i.target.files?.[0];
            m && Tn(m);
          } })
        ] })
      ] }),
      me === "r2" && /* @__PURE__ */ r(O, { children: [
        /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
          n("r2Path"),
          /* @__PURE__ */ a("input", { value: Ve, onChange: (i) => kn(i.target.value), placeholder: "~/.config/r2modman" })
        ] }),
        se && /* @__PURE__ */ r("div", { className: "gx-file-list", children: [
          /* @__PURE__ */ a("strong", { children: n("r2Profiles") }),
          se.profiles.map((i, m) => /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ a(Se, { checked: !!Mt[m], label: i, onChange: (M) => St((V) => V.map((j, qe) => qe === m ? M : j)) }),
            /* @__PURE__ */ a("span", { children: i })
          ] }, i))
        ] })
      ] }),
      me === "local" && /* @__PURE__ */ r("div", { className: "gx-form-label", children: [
        /* @__PURE__ */ a("span", { children: n("importLocalFile") }),
        zt() ? /* @__PURE__ */ a(N, { icon: "folder", disabled: !!y, onClick: () => void Fn(), children: n("importLocalFile") }) : /* @__PURE__ */ a("input", { type: "file", accept: ".zip", onChange: (i) => {
          const m = i.target.files?.[0];
          m && $n(m);
        } })
      ] })
    ] }) }),
    z === "export" && /* @__PURE__ */ r(be, { title: n("exportTitle"), onClose: ie, footer: /* @__PURE__ */ a(N, { primary: !0, onClick: ie, children: n("done") }), children: [
      /* @__PURE__ */ a("p", { children: n("exportIntro") }),
      Cn ? /* @__PURE__ */ a(le, { error: !0, children: n("exportTooLarge") }) : /* @__PURE__ */ r("div", { className: "gx-export-code", children: [
        /* @__PURE__ */ a("code", { children: Pt }),
        /* @__PURE__ */ a(Y, { icon: "copy", label: n("copyCode"), onClick: () => void Vn(Pt, n("codeCopied")) })
      ] }),
      !t && /* @__PURE__ */ r("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ a(N, { icon: "download", disabled: !!y, onClick: On, children: n("exportFile") }),
        /* @__PURE__ */ a(N, { icon: "copy", disabled: !!y, onClick: () => void I("deps", async () => {
          await v.call("copy_dependency_strings", A), T(n("dependenciesCopied"));
        }), children: n("copyDependencies") }),
        /* @__PURE__ */ a(N, { icon: "copy", disabled: !!y, onClick: () => void I("debug", async () => {
          await v.call("copy_debug_info", A), T(n("debugCopied"));
        }), children: n("copyDebug") })
      ] }),
      !!Ne.length && /* @__PURE__ */ r("details", { children: [
        /* @__PURE__ */ a("summary", { children: n("exportFiles") }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("exportFilesHint") }),
        /* @__PURE__ */ a("div", { className: "gx-file-list", children: Ne.map((i) => /* @__PURE__ */ r("label", { children: [
          /* @__PURE__ */ a(Se, { checked: i.included, disabled: !!y, label: i.path, onChange: (m) => Un(Ne.map((M) => M.path === i.path ? { ...M, included: m } : M)) }),
          /* @__PURE__ */ a("span", { children: i.path }),
          /* @__PURE__ */ a("small", { children: pe(i.size) })
        ] }, i.path)) }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("totalSize", { size: pe(In) }) })
      ] })
    ] }),
    z === "versions" && K && /* @__PURE__ */ r(be, { title: n("versionTitle", { name: K.data.name }), onClose: ie, children: [
      /* @__PURE__ */ a("p", { children: n("currentVersion", { version: K.data.version ?? "" }) }),
      /* @__PURE__ */ a("div", { className: "gx-version-list", children: K.data.versions.map((i) => /* @__PURE__ */ r(N, { disabled: !!y || i.uuid === K.data.versionUuid, icon: i.uuid === K.data.versionUuid ? "check" : "layers", onClick: () => void I("version", async () => {
        await v.call("change_mod_version", A, { id: { packageUuid: K.data.uuid, versionUuid: i.uuid, backend: K.data.backend } }), R(null), B(), T(n("versionQueued"));
      }), children: [
        i.name,
        i.uuid === K.data.versionUuid ? " · " + n("installed") : ""
      ] }, i.uuid)) })
    ] })
  ] });
}
const _e = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new Map();
function _a(e, t) {
  Ue.set(e, t);
}
function $(e) {
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
function Aa() {
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
  for (const [o, l] of [["AppProperties_GeneralPage", "General"], ["AppProperties_General", "General"]]) e.add($(rt(o, l)));
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
  ]) t.add($(rt(o, l)));
  return { general: e, secondary: t };
}
function jt(e, t, o) {
  lt.get(e) !== t && (lt.set(e, t), v.log(`properties: ${o}`).catch(() => {
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
function Ga(e, t = []) {
  const o = [e, ...t, ...Array.from(e.querySelectorAll("*")).slice(0, 300)], l = /* @__PURE__ */ new Set();
  for (const h of o) {
    if (l.has(h)) continue;
    l.add(h);
    const f = Object.keys(h).find((C) => C.startsWith("__reactFiber$") || C.startsWith("__reactInternalInstance$"));
    let k = f ? h[f] : void 0;
    for (let C = 0; k && C < 40; C++, k = k.return) {
      const u = Qt(k.memoizedProps) ?? Qt(k.pendingProps);
      if (u) return u;
    }
  }
  const s = (e.matches("[data-appid]") ? e : e.querySelector("[data-appid]"))?.getAttribute("data-appid") ?? void 0;
  if (s && /^\d+$/.test(s)) return Number(s);
  const d = (e.ownerDocument.defaultView?.location.pathname ?? "").match(/\/(?:library\/app|properties)\/(\d+)/);
  if (d) return Number(d[1]);
  for (const h of Array.from(e.querySelectorAll("img"))) {
    const f = h.src.match(/\/(?:apps|assets)\/(\d{2,9})\//);
    if (f) return Number(f[1]);
  }
}
function La(e, t) {
  const l = [Ue.get(e)?.title, e.title, t.querySelector('h1,h2,[class*="Title"]')?.textContent], c = [rt("AppProperties_Title", "Properties - %1$s"), "Properties - %1$s", "Properties: %1$s", "Свойства — %1$s", "Свойства: %1$s", "Eigenschaften – %1$s", "Eigenschaften: %1$s"], d = /* @__PURE__ */ new Set();
  for (const h of l) {
    const f = $(h);
    if (!f || f === "steam") continue;
    let k = !1;
    for (const C of c) {
      const u = C.split("%1$s");
      if (u.length < 2) continue;
      const w = u.map((G) => G.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")), _ = f.match(new RegExp("^\\s*" + w.join("\\s*(.+?)\\s*") + "\\s*$", "i"));
      if (_?.[1]) {
        d.add($(_[1])), k = !0;
        break;
      }
    }
    !k && !/properties|свойства|eigenschaften/.test(f) && d.add(f);
  }
  if (d.size)
    try {
      const h = window.appStore?.m_mapApps;
      if (!h?.forEach) return;
      let f;
      return h.forEach((k, C) => {
        if (f) return;
        const u = Number(C ?? k?.appid ?? k?.m_unAppID);
        if (!Number.isSafeInteger(u) || u <= 0 || u >= 2147483648) return;
        const w = $(k?.display_name ?? k?.m_strDisplayName);
        w && d.has(w) && (f = u);
      }), f;
    } catch {
      return;
    }
}
function Ta(e, t) {
  let o = e;
  for (; o.parentElement && o.parentElement !== t; ) o = o.parentElement;
  return o.parentElement === t ? o : e;
}
function Da(e) {
  const { general: t, secondary: o } = Aa(), l = Array.from(e.querySelectorAll("*")).filter((c) => {
    const d = $(c.textContent);
    if (!t.has(d) && !o.has(d) || c.closest('[role="tabpanel"],[data-galex-properties],[class*="TabContent"],[class*="tab-content"]')) return !1;
    const h = c.parentElement;
    return !(h && $(h.textContent) === d);
  }), s = l.filter((c) => t.has($(c.textContent)));
  for (const c of s) {
    let d = c;
    for (let h = 0; d && h < 8; h++, d = d.parentElement) {
      if (d.querySelectorAll("*").length > 300) continue;
      const f = l.filter((u) => d.contains(u));
      if (f.length < 2) continue;
      const k = Array.from(new Set(f.map((u) => Ta(u, d)))), C = k.map((u) => $(u.textContent));
      if (C.some((u) => t.has(u)) && C.some((u) => o.has(u))) return { list: d, tabs: k };
    }
  }
}
function Ea(e) {
  const t = new Set(Array.from(e.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"],[class*="DialogBody"]')));
  return Ue.get(e)?.allowBodyFallback && e.body && t.add(e.body), Array.from(t);
}
function Fa(e) {
  return Array.from(e.dialog.querySelectorAll('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"],[class*="TabContent"],[class*="tab-content"]')).filter((t) => t !== e.panel && !t.contains(e.panel) && !t.hasAttribute("data-galex-properties"));
}
function st(e) {
  for (const t of Fa(e))
    e.hidden.has(t) || e.hidden.set(t, { display: t.style.display, hidden: t.hidden }), t.style.display !== "none" && (t.style.display = "none");
}
function za(e) {
  e.hidden.forEach((t, o) => {
    o.style.display = t.display, o.hidden = t.hidden;
  }), e.hidden.clear();
}
function Ra(e) {
  return /Active|Selected|Current/.test(e) || /^(active|selected|current)$/i.test(e) || /[_-](active|selected|current)([_-]|$)/i.test(e);
}
function dt(e, t) {
  for (const o of [e, ...Array.from(e.querySelectorAll("*"))]) {
    const l = o.getAttribute("class");
    if (!l) continue;
    const s = l.split(/\s+/).filter(Boolean), c = s.filter((d) => !Ra(d));
    c.length !== s.length && (t && !t.has(o) && t.set(o, l), c.length ? o.setAttribute("class", c.join(" ")) : o.removeAttribute("class"));
  }
}
function gn(e) {
  for (const t of e.nativeTabs) dt(t, e.nativeClasses);
  e.list.querySelectorAll('[role="tab"]').forEach((t) => {
    t !== e.tab && (dt(t, e.nativeClasses), t.setAttribute("aria-selected", "false"));
  });
}
function Ba(e) {
  e.nativeClasses.forEach((t, o) => {
    o.isConnected && o.setAttribute("class", t);
  }), e.nativeClasses.clear();
}
function mn(e) {
  e.active && (e.active = !1, e.panel.hidden = !0, e.tab.setAttribute("aria-selected", "false"), e.tab.classList.remove("gx-tab-active"), Ba(e), za(e));
}
function $a(e) {
  if (e.active) {
    st(e), e.panel.hidden = !1;
    return;
  }
  st(e), gn(e), e.active = !0, e.panel.hidden = !1, e.sizePanel(), e.tab.setAttribute("aria-selected", "true"), e.tab.classList.add("gx-tab-active");
}
function Jt(e, t, o) {
  e.root.render(Q(mt.Provider, { value: e.dialog.ownerDocument }, Q(gt, null, Q(Ia, { key: `${e.slug}-${e.appid}`, game: t, installing: o }))));
}
function ct(e) {
  mn(e), e.resize?.disconnect(), e.list.removeEventListener("click", e.onNativeClick, !0), _e.delete(e.dialog);
  const { root: t, tab: o, panel: l } = e;
  queueMicrotask(() => {
    try {
      t.unmount();
    } catch {
    }
    o.remove(), l.remove();
  });
}
function Ha(e, t) {
  const o = $(t), l = n("mods");
  if ($(e.textContent) === o) {
    e.textContent = l;
    return;
  }
  const s = Array.from(e.querySelectorAll("*")).filter((d) => $(d.textContent) === o), c = s[s.length - 1];
  c ? c.textContent = l : e.textContent = l;
}
function hn(e) {
  const { snapshot: t } = ot();
  for (const [c, d] of Array.from(_e)) {
    if (!e.contains(c)) continue;
    if (!c.isConnected || !d.tab.isConnected || !d.list.isConnected) {
      ct(d);
      continue;
    }
    const h = t?.ok ? Ut(t, d.appid) : void 0;
    if (!h) {
      ct(d);
      continue;
    }
    d.active && (st(d), gn(d)), Jt(d, h, t.installing);
  }
  if (!t?.ok) return;
  const o = Ea(e), l = [];
  let s = 0;
  for (const c of o) {
    if (_e.has(c) || c.querySelector("[data-galex-properties]")) continue;
    const d = Da(c);
    if (!d) {
      l.push("no-tablist");
      continue;
    }
    const h = Ga(c, d.tabs) ?? La(e, c);
    if (!h) {
      l.push("no-appid");
      continue;
    }
    const f = Ut(t, h);
    if (!f) {
      l.push(`unsupported:${h}`);
      continue;
    }
    const k = d.tabs.find((P) => /workshop|мастерская/i.test(P.textContent ?? "")) ?? d.tabs[0], C = $(k.textContent), u = k.cloneNode(!0);
    dt(u), u.removeAttribute("id"), u.removeAttribute("href"), u.setAttribute("role", "tab"), u.setAttribute("aria-selected", "false"), u.setAttribute("data-galex-properties", "tab"), u.id = `galex-tab-${h}`, u.setAttribute("aria-controls", `galex-panel-${h}`), Ha(u, C), u.tagName === "A" && u.setAttribute("href", "#galex-mods"), d.list.appendChild(u);
    const w = e.createElement("div");
    w.id = `galex-panel-${h}`, w.setAttribute("role", "tabpanel"), w.setAttribute("aria-labelledby", u.id), w.setAttribute("data-galex-properties", "panel"), w.className = "gx-injected-panel", w.hidden = !0, w.style.flex = "1", w.style.minHeight = "0", w.style.overflow = "hidden", (c.querySelector('[role="tabpanel"],[class*="TabContent"],[class*="tab-content"]')?.parentElement ?? d.list.parentElement?.parentElement ?? d.list.parentElement)?.appendChild(w);
    const F = on(w), g = () => {
      const P = w.parentElement, D = e.defaultView;
      if (!P || !D) return;
      const re = D.getComputedStyle(P), Te = D.getComputedStyle(c), te = (L) => Number.parseFloat(L) || 0, Oe = te(re.paddingTop) + te(re.paddingBottom), De = Math.max(0, P.clientHeight - Oe), ne = Math.floor(c.getBoundingClientRect().bottom - P.getBoundingClientRect().top - te(re.paddingBottom) - te(Te.paddingBottom)), ye = ne > 0 ? Math.min(De || ne, ne) : De;
      ye > 0 && (w.style.height = `${ye}px`);
    };
    let p;
    typeof ResizeObserver == "function" && w.parentElement && (p = new ResizeObserver(g), p.observe(w.parentElement), p.observe(c), g());
    const b = { dialog: c, list: d.list, tab: u, nativeTabs: d.tabs, panel: w, root: F, appid: f.steamAppId, slug: f.slug, active: !1, hidden: /* @__PURE__ */ new Map(), nativeClasses: /* @__PURE__ */ new Map(), resize: p, sizePanel: g, onNativeClick: (P) => {
      const D = P.target;
      D?.closest?.('[data-galex-properties="tab"]') || (D?.closest?.('[role="tab"],button,a') || d.tabs.some((re) => D && re.contains(D))) && mn(b);
    } };
    _e.set(c, b), Jt(b, f, t.installing), s++, u.addEventListener("click", (P) => {
      P.preventDefault(), P.stopPropagation(), $a(b);
    }), d.list.addEventListener("click", b.onNativeClick, !0), jt(e, `injected:${h}`, `tab injected appid=${h} slug=${f.slug}`);
  }
  if (o.length && Ue.get(e)?.allowBodyFallback) {
    const c = `${o.length}/${s}/${l.slice(0, 4).join(",")}`;
    jt(e, c, `dialogs=${o.length} injected=${s} skipped=${l.slice(0, 4).join(",") || "none"}`);
  }
}
function Kt(e) {
  const t = xe.get(e);
  !t || t.timer || (t.timer = window.setTimeout(() => {
    t.timer = 0, hn(e);
  }, 180));
}
function Yt(e = document) {
  if (xe.has(e)) return xe.get(e).dispose;
  const t = new MutationObserver(() => Kt(e));
  t.observe(e.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["role", "data-appid", "src", "style", "hidden", "class"] });
  const o = () => {
    const l = xe.get(e);
    l?.timer && clearTimeout(l.timer), t.disconnect();
    for (const [s, c] of Array.from(_e))
      e.contains(s) && ct(c);
    xe.delete(e), lt.delete(e);
  };
  return xe.set(e, { observer: t, timer: 0, dispose: o }), Kt(e), o;
}
function Ua(e = document) {
  hn(e);
}
const en = "galex-styles";
function tn(e, t = document) {
  if (typeof t > "u") return;
  const o = t.getElementById(en);
  if (o) {
    o.textContent = e;
    return;
  }
  const l = t.createElement("style");
  l.id = en, l.textContent = e, t.head.appendChild(l);
}
const nn = ".galex{--gx-text:var(--gpColor-White,#dfe3e8);--gx-muted:var(--gpColor-Neutral,#9ba8b5);--gx-line:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control-hover:var(--gpBackground-Color-Solid,rgba(255,255,255,.14));--gx-accent:var(--gpColor-Blue,#66c0f4);--gx-danger:var(--gpColor-Red,#d94b4b);color:var(--gx-text);font-family:inherit;font-size:14px;line-height:1.45;box-sizing:border-box;container-type:inline-size}.galex *,.galex *:before,.galex *:after{box-sizing:border-box}.galex h1,.galex h2,.galex h3,.galex p{margin:0}.galex button,.galex input,.galex select,.galex textarea{font:inherit;color:inherit}.galex button{cursor:pointer}.galex button:disabled{cursor:default;opacity:.45}.galex svg{flex-shrink:0;vertical-align:middle}.galex :focus-visible{outline:2px solid var(--gx-accent);outline-offset:2px}.gx-native-button{display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;gap:6px;width:auto;min-width:0;max-width:100%}.gx-native-button button,.gx-native-button>button{width:auto;min-width:0;min-height:32px;padding:6px 12px;white-space:nowrap}.galex [class*=DialogButton]:not(.gx-icon-button){flex:0 0 auto;margin:0;width:auto;min-width:0;max-width:100%}.galex [class*=DialogButton]:not(.gx-icon-button)>button{width:auto;min-width:0}.gx-native-select{flex:0 0 auto;min-width:120px;max-width:240px}.gx-native-select>div{min-width:0}.gx-native-input{width:100%}.gx-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:34px;padding:6px 14px;border:1px solid transparent;border-radius:3px;background:var(--gx-control);color:var(--gx-text);white-space:nowrap}.gx-button:hover:not(:disabled){background:var(--gx-control-hover)}.gx-button--primary{background:var(--gx-accent);color:#fff}.gx-button.gx-danger{background:var(--gx-danger);color:#fff}.gx-icon-button{display:inline-flex;flex:0 0 32px;align-items:center;justify-content:center;width:32px;min-width:32px;height:32px;padding:0;border:0;border-radius:3px;background:transparent;color:var(--gx-muted)}.gx-icon-button button,.gx-icon-button>button{width:32px;min-width:32px;height:32px;padding:0}.gx-icon-button:hover:not(:disabled){background:var(--gx-control);color:var(--gx-text)}.gx-muted{color:var(--gx-muted);font-size:12px}.gx-text-danger{color:var(--gx-danger)}.gx-toolbar-spacer{flex:1}.galex select,.gx-input,.galex input[type=text],.galex input[type=number],.galex textarea{min-height:32px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:4px 9px}.galex select{max-width:220px}.galex textarea{width:100%;resize:vertical}.gx-checkbox{width:18px;height:18px;margin:0;accent-color:var(--gx-accent);cursor:pointer}.gx-toggle{display:inline-flex;align-items:center}.gx-toggle input{width:18px;height:18px;accent-color:var(--gx-accent)}.gx-mods{display:flex;flex-direction:column;height:100%;min-height:0;min-width:0;padding:16px 20px;overflow:hidden}.gx-heading{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:14px}.gx-heading h1{font-size:22px;font-weight:500}.gx-heading h1>span{font-size:13px;font-weight:400;color:var(--gx-muted);margin-left:8px}.gx-heading-meta{font-size:12px;color:var(--gx-muted);white-space:nowrap}.gx-toolbar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;min-width:0;padding-bottom:12px;border-bottom:1px solid var(--gx-line)}.gx-advanced{display:flex;flex-direction:column;align-items:stretch;gap:8px;padding:10px 0;border-bottom:1px solid var(--gx-line)}.gx-profile-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-width:0}.gx-profile-line{display:flex;align-items:center;gap:8px;flex:0 1 auto;min-width:0}.gx-field-label{font-size:12px;color:var(--gx-muted)}.gx-profile-line select{flex:1;max-width:260px;min-width:120px}.gx-profile-actions{display:flex;flex:0 1 auto;flex-wrap:wrap;align-items:center;gap:6px;min-width:0}.gx-profile-actions [class*=DialogButton]{flex:0 0 auto;margin:0;width:auto;min-width:0}.gx-profile-actions [class*=DialogButton]>button{width:auto;min-width:0}.gx-profile-actions>.gx-native-button,.gx-profile-actions>.gx-button{flex:0 0 auto;width:auto;min-width:0}.gx-search-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:12px}.gx-search{display:flex;align-items:center;gap:8px;flex:1 1 200px;min-width:150px;height:34px;padding:0 10px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);color:var(--gx-muted)}.gx-search input{flex:1;min-width:0;border:0;background:transparent;padding:0;min-height:0}.gx-search input:focus{outline:none}.gx-search button{border:0;background:none;color:var(--gx-muted);padding:2px}.gx-sort-direction{flex:0 0 34px;width:34px;min-width:34px;padding:0}.gx-sort-direction button{width:34px;min-width:34px;padding:0}.gx-list-heading{display:flex;align-items:center;gap:12px;min-height:38px;color:var(--gx-muted);font-size:12px}.gx-update-link{display:inline-flex;gap:5px;align-items:center;border:0;background:none;color:var(--gx-accent);font-size:12px;padding:2px 4px}.gx-update-link:hover{text-decoration:underline}.gx-mod-list{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;border-top:1px solid var(--gx-line);scrollbar-width:thin}.gx-mod-row{display:flex;align-items:center;gap:12px;min-height:72px;padding:10px 8px;border-bottom:1px solid var(--gx-line)}.gx-mod-row:hover{background:var(--gx-control)}.gx-mod-index{width:26px;flex-shrink:0;text-align:right;color:var(--gx-muted);font-size:12px}.gx-mod-avatar{width:48px;height:48px;flex-shrink:0;border-radius:3px;object-fit:cover;background:var(--gx-control);display:flex;align-items:center;justify-content:center;color:var(--gx-muted);font-weight:600}.gx-mod-row.is-disabled .gx-mod-avatar,.gx-mod-row.is-disabled .gx-mod-info{opacity:.55}.gx-mod-info{flex:1;min-width:0}.gx-mod-title{display:flex;align-items:center;gap:7px;min-width:0}.gx-mod-title h3{font-size:15px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-info>p{font-size:12px;color:var(--gx-muted);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-byline{display:flex;flex-wrap:wrap;gap:6px;font-size:12px;color:var(--gx-muted);margin-top:3px}.gx-badge{font-size:10px;padding:1px 5px;border-radius:2px;border:1px solid var(--gx-line);color:var(--gx-muted);white-space:nowrap}.gx-badge--update{color:var(--gx-accent);border-color:var(--gx-accent)}.gx-mod-size{min-width:70px;text-align:right;font-size:12px;color:var(--gx-muted)}.gx-mod-actions{display:flex;gap:2px;flex-shrink:0}.gx-notice{display:flex;align-items:center;gap:8px;padding:8px 10px;margin:8px 0;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:13px}.gx-notice--error{border-color:var(--gx-danger);color:var(--gx-danger)}.gx-notice button{margin-left:auto;border:0;background:none;color:var(--gx-accent)}.gx-empty{padding:32px 12px;text-align:center;color:var(--gx-muted)}.gx-modal-backdrop{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;background:#000000a6}.gx-modal{display:flex;flex-direction:column;width:min(580px,100%);max-height:min(84vh,760px);border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,#1b2838);box-shadow:0 8px 40px #00000080}.gx-modal>header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--gx-line)}.gx-modal h2{font-size:17px;font-weight:500}.gx-modal-body{padding:16px 18px;overflow-y:auto;min-height:0}.gx-modal>footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid var(--gx-line)}.gx-form-label{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--gx-muted);margin-bottom:12px}.gx-form-label input,.gx-form-label textarea,.gx-form-label select{color:var(--gx-text)}.gx-check-label{display:flex;align-items:center;gap:8px;font-size:13px;margin:8px 0}.gx-import-summary{display:flex;flex-direction:column;gap:4px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code{display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code code{flex:1;min-width:0;overflow-wrap:anywhere;font-family:monospace}.gx-version-list{display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto;margin-top:10px}.gx-file-list{max-height:220px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px;padding:6px;margin:8px 0}.gx-file-list label{display:flex;align-items:center;gap:8px;padding:3px 2px;font-size:12px}.gx-file-list span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}.gx-tabs button[aria-selected=true]{background:var(--gx-control-hover);border-color:var(--gx-accent)}.gx-global-settings{height:100%;min-height:0;overflow-y:auto;padding:0;font-size:14px}.MillenniumDesktopSidebar_EditorContent>.gx-global-settings{margin:-24px -20px -20px;padding:12px 16px 16px}.gx-settings-header{display:flex;align-items:center;gap:8px;margin-bottom:6px}.gx-settings-header h1{font-size:18px;font-weight:500;margin-right:auto}.gx-settings-section{margin:12px 0;padding-bottom:10px;border-bottom:1px solid var(--gx-line)}.gx-settings-section h2{font-size:15px;font-weight:500;margin-bottom:6px}.gx-setting{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:6px 0}.gx-setting>div{display:flex;flex-direction:column;gap:2px;min-width:0}.gx-setting strong{font-size:14px;font-weight:500}.gx-setting small{color:var(--gx-muted);font-size:12px}.gx-connection{display:inline-flex;align-items:center;gap:6px;color:var(--gx-muted);font-size:12px;white-space:nowrap}.gx-status-dot{width:7px;height:7px;border-radius:50%;background:var(--gpColor-Green,#5ba32b)}.gx-path{display:block;padding:6px 8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:12px;overflow-wrap:anywhere;color:var(--gx-muted)}.gx-settings-actions{display:flex;gap:8px;margin:8px 0}.gx-settings-bottom{color:var(--gx-muted);font-size:12px;margin-top:10px}.gx-success{display:flex;align-items:center;gap:6px;color:var(--gpColor-Green,#5ba32b);font-size:12px;margin:6px 0}.gx-settings-intro{color:var(--gx-muted);font-size:12px;margin-bottom:8px}.gx-games{margin-top:8px}.gx-games summary{cursor:pointer;font-size:13px}.gx-games summary span{color:var(--gx-muted);margin-left:6px}.gx-game-list{list-style:none;margin:6px 0 0;padding:0;max-height:180px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px}.gx-game-list li{display:flex;justify-content:space-between;gap:8px;padding:4px 8px;font-size:12px;border-bottom:1px solid var(--gx-line)}.gx-game-list li:last-child{border-bottom:0}.gx-game-list span{color:var(--gx-muted)}[data-galex-properties=tab]{cursor:pointer;user-select:none}[data-galex-properties=tab].gx-tab-active{color:var(--gpColor-White,#fff);background:var(--gpBackground-Color-Soft,rgba(255,255,255,.08))}.gx-injected-panel{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;height:100%;max-height:100%;overflow:hidden;color:var(--gx-text,#dfe3e8)}.gx-injected-panel[hidden]{display:none!important}@container (max-width:640px){.gx-mods{padding:12px}.gx-heading h1>span{display:none}.gx-mod-row{gap:8px}.gx-mod-index,.gx-mod-size{display:none}.gx-mod-info>p{display:none}.gx-profile-actions{flex-basis:100%}.gx-profile-actions .gx-button,.gx-profile-actions .gx-native-button{flex:0 1 auto}}.gx-downloads{margin:0 0 16px;padding:14px 16px;border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,rgba(0,0,0,.2))}.gx-downloads-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:4px}.gx-downloads-header h2{font-size:18px;font-weight:500}.gx-download-graphs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:10px 0}.gx-sparkline{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:8px;font-size:12px;color:var(--gx-muted)}.gx-sparkline svg{width:100%;height:32px;color:var(--gx-accent);background:var(--gx-control);border-radius:2px}.gx-sparkline strong{color:var(--gx-text);font-weight:500;white-space:nowrap}.gx-download-card{display:flex;gap:12px;align-items:center;padding:10px;margin-top:8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control)}.gx-download-card.is-error{border-color:var(--gx-danger)}.gx-download-cover{width:92px;height:43px;flex:0 0 92px;object-fit:cover;border-radius:2px;background:var(--gx-control-hover)}.gx-download-cover--fallback{display:flex;align-items:center;justify-content:center;color:var(--gx-muted)}.gx-download-body{flex:1;min-width:0}.gx-download-body header{display:flex;align-items:baseline;gap:8px;min-width:0}.gx-download-body h3{font-size:15px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-task{font-size:12px;color:var(--gx-muted);margin:2px 0 6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-download-meta{display:flex;justify-content:space-between;gap:8px;font-size:12px;color:var(--gx-muted);margin-top:4px}.gx-progress{width:100%;height:8px;accent-color:var(--gx-accent)}@container (max-width:640px){.gx-download-graphs{grid-template-columns:1fr}.gx-download-cover{display:none}}", U = "GaleX";
function Oa() {
  return { title: "GaleX", icon: Q(Z, { name: "package", size: 18 }), content: Q(gt, null, Q(pa)), linkQueued: (e) => (at(), !0) };
}
async function Xa() {
  window.__GALEX_STEAM__?.dispose(), la(), await na();
  const e = [], t = [];
  let o = !1, l = !1;
  const s = ua();
  e.push(s);
  const c = fa();
  e.push(c);
  const d = Oa(), h = window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[U], f = window.PLUGIN_LIST?.[U];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS ??= {})[U] = d, (window.PLUGIN_LIST ??= {})[U] = { ...f, ...d };
  const k = /* @__PURE__ */ new Set([document]);
  tn(nn, document);
  const C = (g) => {
    if (o || l || !g.body) return;
    l = !0;
    const p = g.createElement("div");
    p.id = "galex-link-installer", g.body.appendChild(p);
    const b = on(p);
    t.push(b), b.render(Q(mt.Provider, { value: g }, Q(gt, null, Q(ha)))), e.push(() => p.remove());
  }, u = (g, p) => {
    if (o || k.has(g)) return;
    const b = String(p?.m_strName ?? p?.name ?? ""), P = String(p?.m_strTitle ?? p?.title ?? g.title ?? ""), D = b.includes("SP Desktop") && !b.includes("Login");
    _a(g, { name: b, title: P, allowBodyFallback: g !== document && !D }), k.add(g), tn(nn, g), e.push(Yt(g)), D && C(g), v.log(`window observed name=${b || "?"} title=${P || "?"} body=${!!g.body} linkRoot=${l}`).catch(() => {
    });
  }, w = (g, p) => {
    if (o || !g) return;
    const b = () => {
      if (!o && g.document?.body)
        try {
          u(g.document, p);
        } catch (P) {
          console.warn("[GaleX] Cannot inspect property window", P), v.log(`window inspect failed: ${String(P)}`).catch(() => {
          });
        }
    };
    if (g.document?.body) {
      b();
      return;
    }
    g.addEventListener?.("DOMContentLoaded", b, { once: !0 }), g.addEventListener?.("load", b, { once: !0 }), e.push(() => {
      g.removeEventListener?.("DOMContentLoaded", b), g.removeEventListener?.("load", b);
    });
  };
  e.push(Yt(document));
  try {
    const g = q()?.routerHook;
    if (typeof g?.addPatch == "function") {
      const p = (b) => ({ ...b, children: Q(Na, null, b.children) });
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
    const g = q(), p = g?.Millennium?.AddWindowCreateHook ?? g?.AddWindowCreateHook ?? window.Millennium?.AddWindowCreateHook;
    typeof p == "function" ? p((b) => {
      w(b?.window ?? b?.document?.defaultView ?? b?.BrowserWindow ?? b?.m_popup?.window ?? b?.m_popup ?? b?.m_BrowserWindow, b);
    }) : console.warn("[GaleX] Window hook unavailable; observing the main Steam document only");
  } catch (g) {
    console.warn("[GaleX] Window hook unavailable", g);
  }
  const _ = window.setTimeout(() => C(document), 3e3);
  e.push(() => window.clearTimeout(_)), e.push(ma(() => {
    for (const g of k)
      if (!g.defaultView?.closed)
        try {
          Ua(g);
        } catch {
        }
  }));
  const G = () => {
    o || (o = !0, e.reverse().forEach((g) => {
      try {
        g();
      } catch {
      }
    }), t.forEach((g) => {
      try {
        g.unmount();
      } catch {
      }
    }), h === void 0 ? delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[U] : window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS[U] = h, f === void 0 ? delete window.PLUGIN_LIST?.[U] : window.PLUGIN_LIST[U] = f, delete window.__GALEX_STEAM__, window.GaleX?.dispose === G && delete window.GaleX);
  };
  window.__GALEX_STEAM__ = { dispose: G }, window.GaleX = { openSettings: () => {
    const g = q();
    g?.Millennium?.openQuickAccess?.({ plugin: U }) ?? g?.openQuickAccess?.({ plugin: U }) ?? window.Millennium?.openQuickAccess?.({ plugin: U });
  }, openProperties: () => q()?.Navigation?.NavigateToAppProperties?.(), dispose: G }, console.info("[GaleX] frontend 0.3.3 mounted"), v.log(`frontend 0.3.3 mounted; url=${location.href}`).catch(() => {
  });
  const F = window.MILLENNIUM_BACKEND_IPC;
  return typeof F?.postMessage == "function" ? Promise.resolve(F.postMessage(1, { pluginName: U })).then(() => console.info("[GaleX] backend notified that the frontend is loaded")).catch((g) => console.warn("[GaleX] Frontend-loaded notification failed", g)) : console.warn("[GaleX] Millennium backend IPC is unavailable"), d;
}
async function Va() {
  return document.body || await new Promise((e) => document.addEventListener("DOMContentLoaded", () => e(), { once: !0 })), Xa();
}
let Be;
function Wa() {
  return Be || (Be = Va().catch((e) => {
    throw Be = void 0, e;
  })), Be;
}
Wa().catch((e) => console.error("[GaleX] Startup failed", e));
export {
  Wa as default
};
