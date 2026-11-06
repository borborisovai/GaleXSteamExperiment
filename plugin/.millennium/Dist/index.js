const N = window.SP_REACT;
N || console.error("[GaleX] window.SP_REACT is missing — is Millennium loaded?");
const Y = N.createElement;
N.cloneElement;
const Gn = N.createContext;
N.createRef;
N.forwardRef;
N.memo;
const Ln = N.useCallback, _n = N.useContext;
N.useDebugValue;
N.useDeferredValue;
const K = N.useEffect;
N.useId;
N.useImperativeHandle;
N.useLayoutEffect;
const Vt = N.useMemo;
N.useReducer;
const Qe = N.useRef, x = N.useState, Zt = N.useSyncExternalStore;
N.useTransition;
const Tn = N.Component;
N.PureComponent;
N.Fragment;
N.StrictMode;
N.Suspense;
N.Children;
N.isValidElement;
N.version;
const fe = window.SP_REACTDOM, Wt = (e) => typeof fe?.createRoot == "function" ? fe.createRoot(e) : {
  render(t) {
    fe.render(t, e);
  },
  unmount() {
    fe.unmountComponentAtNode?.(e);
  }
}, En = fe.createPortal;
fe.flushSync;
const Fe = window.SP_REACT, St = window.SP_JSX_FACTORY;
function rt(e, t, o) {
  const { children: l, ...s } = t ?? {};
  return o !== void 0 && (s.key = o), l === void 0 ? Fe.createElement(e, s) : Array.isArray(l) ? Fe.createElement(e, s, ...l) : Fe.createElement(e, s, l);
}
const ve = typeof St?.jsx == "function" ? St : void 0, V = ve?.Fragment ?? Fe.Fragment, a = ve ? ve.jsx : rt, c = ve?.jsxs ?? rt;
ve && ve.jsx;
const Nt = {
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
}, Dn = {
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
function W({ name: e, size: t = 18, className: o, strokeWidth: l = 1.6 }) {
  const s = window.MILLENNIUM_API?.IconsModule?.[Dn[e] ?? ""], d = Vt(() => Nt[e] ?? Nt.info, [e]);
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
      children: /* @__PURE__ */ a("path", { d })
    }
  );
}
function Fn(e) {
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
const Pt = {
  english: "en",
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  russian: "ru",
  ru: "ru",
  "ru-ru": "ru"
}, Je = /* @__PURE__ */ new Set();
let Ae = "en", qt = "english";
function Qt(e) {
  return String(e ?? "").trim().toLowerCase().replace(/_/g, "-");
}
function zn(e) {
  const t = Qt(e);
  return Pt[t] ?? Pt[t.split("-")[0]] ?? "en";
}
function Rn(e) {
  qt = Qt(e) || "english";
  const t = zn(e);
  t !== Ae && (Ae = t, Je.forEach((o) => o()));
}
function At() {
  return Ae;
}
function Bn() {
  return qt;
}
function je(e) {
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
function Re() {
  return Zt((e) => (Je.add(e), () => Je.delete(e)), At, At);
}
async function $n(e = window) {
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
  return Rn(t ?? "english"), Ae;
}
const Jt = {
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
  bytesGb: "{value} GB",
  bytesMb: "{value} MB",
  bytesKb: "{value} KB"
}, Hn = {
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
  bytesGb: "{value} ГБ",
  bytesMb: "{value} МБ",
  bytesKb: "{value} КБ"
}, Un = { en: Jt, ru: Hn };
function n(e, t) {
  let o = Un[Ae][e] ?? Jt[e] ?? e;
  if (t) for (const [l, s] of Object.entries(t)) o = o.split(`{${l}}`).join(String(s));
  return o;
}
function oe() {
  return window.MILLENNIUM_API;
}
let Ke;
function On(e) {
  Ke = e;
}
async function J(e, t = {}) {
  if (!Ke) throw new Error(n("backendMissing"));
  const o = await Ke(e, t);
  let l;
  try {
    l = Fn(o);
  } catch (s) {
    throw new Error(je(s instanceof Error ? s.message : String(s)));
  }
  if (!l.ok) throw new Error(je(l.error || n("bridgeNoReply")));
  return l.data;
}
function Xn() {
  On(async (e, t) => {
    const o = oe();
    if (!o?.Millennium?.callServerMethod) throw new Error(n("millenniumMissing"));
    return o.Millennium.callServerMethod("GaleX", e, { payload: JSON.stringify(t) });
  });
}
const v = {
  snapshot: () => J("snapshot"),
  call: (e, t, o = {}) => J("command", { method: e, args: { slug: t.slug, profileId: t.profileId, ...o } }),
  browserUrl: (e) => J("browser_url", { ...e }),
  dismissLink: (e) => J("dismiss_link", { url: e }),
  global: (e, t = {}) => J("command", { method: e, args: t }),
  getConfig: () => J("get_config"),
  setConfig: (e) => J("set_config", { path: e }),
  restart: () => J("restart"),
  log: (e) => J("frontend_log", { message: e })
};
function Ye(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(n("invalidBrowserUrl"));
  const o = oe()?.Navigation;
  o?.NavigateToSteamWeb ? o.NavigateToSteamWeb(e) : window.open(e, "_blank", "noopener,noreferrer");
}
function Vn(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error(n("invalidBrowserUrl"));
  const o = oe()?.Browser ?? window.SteamClient?.Browser;
  o?.StartDownload ? o.StartDownload(e) : Ye(e);
}
function jt() {
  return window.SteamClient?.System ?? oe()?.SteamClient?.System;
}
function It() {
  return typeof jt()?.OpenFileDialog == "function";
}
async function Gt(e, t, o) {
  const l = jt();
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
function R(e) {
  return je(e instanceof Error ? e.message : String(e));
}
function Zn({ error: e, onRetry: t }) {
  return Re(), /* @__PURE__ */ c("div", { className: "galex gx-crash", role: "alert", children: [
    /* @__PURE__ */ a("h2", { children: n("crashTitle") }),
    /* @__PURE__ */ a("p", { children: n("crashBody") }),
    /* @__PURE__ */ a("pre", { children: R(e) }),
    /* @__PURE__ */ a("button", { className: "gx-button", onClick: t, children: n("retry") })
  ] });
}
class st extends Tn {
  state = {};
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, o) {
    console.error("[GaleX]", t, o.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ a(Zn, { error: this.state.error, onRetry: () => this.setState({ error: void 0 }) }) : this.props.children;
  }
}
const dt = Gn(document);
function Wn() {
  return _n(dt);
}
function de(e) {
  const t = oe()?.[e];
  return typeof t == "function" || t && typeof t == "object" ? t : void 0;
}
function S({ children: e, icon: t, primary: o, className: l = "", ...s }) {
  const d = de(o ? "DialogButtonPrimary" : "DialogButton") ?? de("DialogButton"), r = /* @__PURE__ */ c(V, { children: [
    t && /* @__PURE__ */ a(W, { name: t, size: 16 }),
    " ",
    e
  ] });
  return d ? /* @__PURE__ */ a(d, { ...s, className: `gx-native-button ${o ? "gx-native-button--primary" : ""} ${l}`, children: r }) : /* @__PURE__ */ a("button", { type: "button", ...s, className: `gx-button ${o ? "gx-button--primary" : ""} ${l}`, children: r });
}
function j({ icon: e, label: t, ...o }) {
  const l = de("DialogButton");
  return l ? /* @__PURE__ */ a(l, { ...o, className: `gx-icon-button ${o.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ a(W, { name: e, size: 18 }) }) : /* @__PURE__ */ a("button", { type: "button", ...o, className: `gx-icon-button ${o.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ a(W, { name: e, size: 18 }) });
}
function ge({ value: e, onChange: t, options: o, label: l, disabled: s }) {
  const d = de("Dropdown");
  return d ? /* @__PURE__ */ a("div", { className: "gx-native-select", children: /* @__PURE__ */ a(d, { disabled: s, menuLabel: l, strDefaultLabel: l, rgOptions: o.map((r) => ({ data: r.value, label: r.label })), selectedOption: e, contextMenuPositionOptions: { bMatchWidth: !0 }, onChange: (r) => t(r.data) }) }) : /* @__PURE__ */ a("select", { "aria-label": l, value: e, disabled: s, onChange: (r) => t(typeof e == "number" ? Number(r.target.value) : r.target.value), children: o.map((r) => /* @__PURE__ */ a("option", { value: r.value, children: r.label }, r.value)) });
}
function Se({ checked: e, onChange: t, label: o, disabled: l }) {
  const s = de("DialogCheckbox");
  return s ? /* @__PURE__ */ a(s, { controlled: !0, checked: e, disabled: l, "aria-label": o, onChange: t }) : /* @__PURE__ */ a("input", { className: "gx-checkbox", type: "checkbox", "aria-label": o, checked: e, disabled: l, onChange: (d) => t(d.target.checked) });
}
function We({ checked: e, onChange: t, label: o, disabled: l }) {
  const s = de("Toggle");
  return s ? /* @__PURE__ */ a("div", { className: "gx-toggle", role: "group", "aria-label": o, children: /* @__PURE__ */ a(s, { value: e, disabled: l, onChange: t }) }) : /* @__PURE__ */ c("label", { className: "gx-toggle", children: [
    /* @__PURE__ */ a("input", { type: "checkbox", role: "switch", "aria-label": o, checked: e, disabled: l, onChange: (d) => t(d.target.checked) }),
    /* @__PURE__ */ a("span", { "aria-hidden": "true" })
  ] });
}
function qn({ label: e, description: t, className: o = "", ...l }) {
  const s = de("TextField");
  return s ? /* @__PURE__ */ a(s, { ...l, label: e, description: t, className: `gx-native-input ${o}` }) : /* @__PURE__ */ a("input", { ...l, className: `gx-input ${o}` });
}
function he({ title: e, children: t, onClose: o, footer: l }) {
  const s = Wn(), d = Qe(null), r = Qe(o);
  return r.current = o, K(() => {
    const m = s.activeElement, h = d.current, b = () => Array.from(h?.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]') ?? []);
    (h?.querySelector("input,select,textarea") ?? b()[0])?.focus();
    const k = (p) => {
      if (p.key === "Escape" && (p.stopPropagation(), r.current()), p.key === "Tab") {
        const y = b(), P = y[0], _ = y[y.length - 1];
        p.shiftKey && s.activeElement === P ? (p.preventDefault(), _?.focus()) : !p.shiftKey && s.activeElement === _ && (p.preventDefault(), P?.focus());
      }
    };
    return h?.addEventListener("keydown", k), () => {
      h?.removeEventListener("keydown", k), m?.focus();
    };
  }, [s]), En(/* @__PURE__ */ a("div", { className: "galex gx-modal-backdrop", onMouseDown: (m) => {
    m.target === m.currentTarget && o();
  }, children: /* @__PURE__ */ c("div", { ref: d, className: "gx-modal DialogPopup_Generic", role: "dialog", "aria-modal": "true", "aria-label": e, children: [
    /* @__PURE__ */ c("header", { children: [
      /* @__PURE__ */ a("h2", { children: e }),
      /* @__PURE__ */ a(j, { icon: "x", label: n("close"), onClick: o })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-modal-body", children: t }),
    l && /* @__PURE__ */ a("footer", { children: l })
  ] }) }), s.body);
}
function Lt({ title: e, children: t, onClose: o, onConfirm: l, busy: s, danger: d }) {
  return /* @__PURE__ */ a(he, { title: e, onClose: o, footer: /* @__PURE__ */ c(V, { children: [
    /* @__PURE__ */ a(S, { onClick: o, disabled: s, children: n("cancel") }),
    /* @__PURE__ */ a(S, { primary: !0, className: d ? "gx-danger" : "", onClick: l, disabled: s, children: n(s ? "working" : "confirm") })
  ] }), children: /* @__PURE__ */ a("div", { children: t }) });
}
function xe({ children: e, error: t, onRetry: o }) {
  return /* @__PURE__ */ c("div", { className: `gx-notice ${t ? "gx-notice--error" : ""}`, role: t ? "alert" : "status", children: [
    /* @__PURE__ */ a(W, { name: t ? "warning" : "info", size: 17 }),
    /* @__PURE__ */ a("span", { children: e }),
    o && /* @__PURE__ */ a("button", { onClick: o, children: n("retry") })
  ] });
}
function ze(e) {
  return e >= 1073741824 ? n("bytesGb", { value: (e / 1073741824).toFixed(1) }) : e >= 1048576 ? n("bytesMb", { value: (e / 1048576).toFixed(1) }) : n("bytesKb", { value: Math.round(e / 1024) });
}
function ue({ title: e, hint: t, children: o }) {
  return /* @__PURE__ */ c("div", { className: "gx-setting", children: [
    /* @__PURE__ */ c("div", { children: [
      /* @__PURE__ */ a("strong", { children: e }),
      t && /* @__PURE__ */ a("small", { children: t })
    ] }),
    o
  ] });
}
function Qn({ demo: e = !1 }) {
  Re();
  const [t, o] = x(), [l, s] = x(), [d, r] = x(""), [m, h] = x(""), [b, k] = x(""), [p, y] = x(!1), P = async () => {
    h("");
    try {
      const [u, I] = await Promise.all([v.snapshot(), v.global("prefs")]);
      s(u), o(I), e || r(await v.getConfig());
    } catch (u) {
      h(R(u));
    }
  };
  K(() => {
    P();
  }, []);
  const _ = async (u) => {
    if (!(!t || p)) {
      y(!0), h(""), k("");
      try {
        const I = { ...t, ...u };
        await v.global("set_prefs", { value: I }), o(I), k(n("savedInGale"));
      } catch (I) {
        h(R(I));
      } finally {
        y(!1);
      }
    }
  }, f = async () => {
    y(!0), h("");
    try {
      await v.setConfig(d.trim()), await v.restart(), k(n("pathSaved")), setTimeout(() => void P(), 2500);
    } catch (u) {
      h(R(u));
    } finally {
      y(!1);
    }
  }, C = async () => {
    y(!0), h("");
    try {
      const u = await v.global("clear_download_cache");
      k(n("cacheCleared", { size: ze(u) }));
    } catch (u) {
      h(R(u));
    } finally {
      y(!1);
    }
  };
  return /* @__PURE__ */ c("section", { className: "galex gx-global-settings", children: [
    /* @__PURE__ */ c("div", { className: "gx-settings-header", children: [
      /* @__PURE__ */ a("h1", { children: "GaleX" }),
      /* @__PURE__ */ c("span", { className: "gx-connection", children: [
        /* @__PURE__ */ a("span", { className: "gx-status-dot" }),
        l ? `Gale ${l.coreVersion}` : n("noConnection")
      ] }),
      /* @__PURE__ */ a(j, { icon: "refresh", label: n("checkConnection"), disabled: p, onClick: () => void P() })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-settings-intro", children: n("settingsIntro") }),
    m && /* @__PURE__ */ a(xe, { error: !0, onRetry: () => void P(), children: m }),
    b && /* @__PURE__ */ c("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ a(W, { name: "check", size: 15 }),
      b
    ] }),
    /* @__PURE__ */ c("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("connection") }),
      /* @__PURE__ */ a(ue, { title: n("headlessGale"), hint: n("headlessHint") }),
      !e && /* @__PURE__ */ c(V, { children: [
        /* @__PURE__ */ a(qn, { label: n("galePath"), value: d, disabled: p, onChange: (u) => r(u.target.value), placeholder: n("galePathPlaceholder") }),
        /* @__PURE__ */ a("div", { className: "gx-settings-actions", children: /* @__PURE__ */ a(S, { onClick: () => void f(), disabled: p, children: n("saveRestart") }) }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galePathHint") })
      ] }),
      /* @__PURE__ */ a(ue, { title: n("dataDir"), hint: n("dataDirHint") }),
      /* @__PURE__ */ a("code", { className: "gx-path", children: l?.dataDir ?? "—" }),
      !!l?.games.length && /* @__PURE__ */ c("details", { className: "gx-games", children: [
        /* @__PURE__ */ c("summary", { children: [
          n("galeGames"),
          " ",
          /* @__PURE__ */ a("span", { children: l.games.length })
        ] }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galeGamesHint") }),
        /* @__PURE__ */ a("ul", { className: "gx-game-list", children: l.games.map((u) => /* @__PURE__ */ c("li", { children: [
          u.name,
          " ",
          /* @__PURE__ */ a("span", { children: u.steamAppId ?? "?" })
        ] }, u.slug)) })
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("galePreferences") }),
      /* @__PURE__ */ a("p", { className: "gx-muted", children: n("galePreferencesHint") }),
      t ? /* @__PURE__ */ c(V, { children: [
        /* @__PURE__ */ a(ue, { title: n("fetchAuto"), hint: n("fetchAutoHint"), children: /* @__PURE__ */ a(We, { label: n("fetchAuto"), checked: t.fetchModsAutomatically, disabled: p, onChange: (u) => void _({ fetchModsAutomatically: u }) }) }),
        /* @__PURE__ */ a(ue, { title: n("pullBeforeLaunch"), hint: n("pullBeforeLaunchHint"), children: /* @__PURE__ */ a(We, { label: n("pullBeforeLaunch"), checked: t.pullBeforeLaunch, disabled: p, onChange: (u) => void _({ pullBeforeLaunch: u }) }) }),
        /* @__PURE__ */ a(ue, { title: n("skipBackendConfirm"), hint: n("skipBackendConfirmHint"), children: /* @__PURE__ */ a(We, { label: n("skipBackendConfirm"), checked: t.backendSkipConfirm, disabled: p, onChange: (u) => void _({ backendSkipConfirm: u }) }) })
      ] }) : /* @__PURE__ */ a("p", { className: "gx-muted", children: n("prefsLoading") })
    ] }),
    /* @__PURE__ */ c("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: n("downloads") }),
      /* @__PURE__ */ a(ue, { title: n("downloadCache"), hint: n("downloadCacheHint"), children: /* @__PURE__ */ a(S, { disabled: p || !t || l?.installing, onClick: () => void C(), children: n("clearCache") }) })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-settings-bottom", children: n("settingsBottom") })
  ] });
}
let ct = { error: "", loading: !0 };
const Ie = /* @__PURE__ */ new Set();
let pt, se = !0, qe = !1, Ne = 0;
function _t(e) {
  ct = e, Ie.forEach((t) => t());
}
async function ut() {
  if (se || qe) return;
  qe = !0;
  const e = Ne;
  try {
    const t = await v.snapshot();
    !se && e === Ne && _t({ snapshot: t, error: t.ok ? "" : n("incompatibleBridge"), loading: !1 });
  } catch (t) {
    !se && e === Ne && _t({ ...ct, error: R(t), loading: !1 });
  } finally {
    qe = !1, se || (pt = setTimeout(() => void ut(), document.visibilityState === "hidden" ? 15e3 : 3e3));
  }
}
function Jn() {
  return se ? (se = !1, Ne++, ut(), () => Tt()) : () => Tt();
}
function Tt() {
  se = !0, Ne++, clearTimeout(pt);
}
function et() {
  clearTimeout(pt), ut();
}
function tt() {
  return ct;
}
function jn() {
  return Zt((e) => (Ie.add(e), () => Ie.delete(e)), tt, tt);
}
function Et(e, t) {
  return e?.games.find((o) => o.steamAppId === t);
}
function Kn(e) {
  return Ie.add(e), () => {
    Ie.delete(e);
  };
}
function Yn() {
  Re();
  const { snapshot: e } = jn(), t = e?.pendingLinks[0], [o, l] = x(), [s, d] = x(), [r, m] = x(), [h, b] = x(""), [k, p] = x(!1), [y, P] = x(0);
  if (K(() => {
    if (!t) return;
    let C = !1;
    return l(void 0), b(""), d(void 0), (async () => {
      try {
        const [u, I] = await Promise.all([v.call("profiles", { slug: t.slug }), v.call("resolve_link", { slug: t.slug }, { url: t.url })]);
        C || (d(u), m(u.activeId), l(I));
      } catch (u) {
        C || b(R(u));
      }
    })(), () => {
      C = !0;
    };
  }, [t?.url, t?.slug, y]), !t) return null;
  const _ = () => {
    k || v.dismissLink(t.url).then(() => et()).catch((C) => b(R(C)));
  }, f = () => void (async () => {
    p(!0), b("");
    try {
      await v.call("install_mod", { slug: t.slug, profileId: r }, { id: { packageUuid: o.uuid, versionUuid: o.versionUuid, backend: o.backend } }), await v.dismissLink(t.url), et();
    } catch (C) {
      b(R(C));
    } finally {
      p(!1);
    }
  })();
  return /* @__PURE__ */ c(he, { title: n("linkTitle"), onClose: _, footer: /* @__PURE__ */ c(V, { children: [
    /* @__PURE__ */ a(S, { disabled: k, onClick: _, children: n("cancel") }),
    /* @__PURE__ */ a(S, { primary: !0, disabled: k || !o || r === void 0, onClick: f, children: n(k ? "linkInstalling" : "linkInstall") })
  ] }), children: [
    /* @__PURE__ */ a("h3", { children: o?.name ?? t.url.split("/").slice(-2, -1)[0] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: o ? `${o.author} · v${o.version}` : n("linkChecking") }),
    s && /* @__PURE__ */ c("label", { className: "gx-form-label", children: [
      n("linkProfile"),
      /* @__PURE__ */ a(ge, { label: n("linkProfile"), value: r ?? s.activeId, options: s.profiles.map((C) => ({ value: C.id, label: C.name })), onChange: m })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: n("linkDeps", { game: e?.games.find((C) => C.slug === t.slug)?.name ?? t.slug }) }),
    h && /* @__PURE__ */ a(xe, { error: !0, onRetry: () => P((C) => C + 1), children: h })
  ] });
}
const ea = { includeCategories: [], excludeCategories: [], includeNsfw: !1, includeDeprecated: !0, includeDisabled: !0, includeEnabled: !0, sortBy: "name", sortOrder: "ascending" }, Dt = { mods: [], totalModCount: 0, updates: [], unknownMods: [] };
function ta(e) {
  if (e.type === "remote" && e.author && e.version) {
    if (e.backend === "Thunderstore") return `https://ccdn.thunderstore.io/live/repository/icons/${encodeURIComponent(`${e.author}-${e.name}-${e.version}`)}.png`;
    if (e.backend === "Hexium") return `https://cdn.hexium.gg/uploads/${encodeURIComponent(e.author)}/${encodeURIComponent(e.name)}/icon.png?${encodeURIComponent(e.version)}`;
  }
  if (e.icon && /^(https?:|data:)/i.test(e.icon)) return e.icon;
}
function na({ mod: e }) {
  const [t, o] = x(!1), l = ta(e.data);
  return !l || t ? /* @__PURE__ */ a("span", { className: "gx-mod-avatar", "aria-hidden": "true", children: e.data.name.slice(0, 2).toUpperCase() }) : /* @__PURE__ */ a("img", { className: "gx-mod-avatar", src: l, alt: "", loading: "lazy", onError: () => o(!0) });
}
const Ft = (e) => e.replace(/_/g, " ");
function aa({ game: e, demo: t = !1, installing: o = !1 }) {
  Re();
  const [l, s] = x({ activeId: 0, profiles: [] }), [d, r] = x(), [m, h] = x(Dt), [b, k] = x(""), [p, y] = x(""), [P, _] = x("all"), [f, C] = x("name"), [u, I] = x(!0), [L, U] = x(""), [le, Ge] = x([]), [ee, $e] = x(!1), [be, te] = x(!0), [ye, T] = x(""), [Le, E] = x(""), [w, gt] = x(""), [tn, nn] = x(0), [an, on] = x(0), [D, F] = x(null), [q, O] = x(""), [_e, He] = x(""), [$, ce] = x(null), [pe, mt] = x("code"), [we, Ce] = x("new"), [ft, ln] = x(!1), [ht, rn] = x(!1), [Ue, sn] = x(""), [re, xt] = x(null), [vt, bt] = x([]), [yt, wt] = x(""), [dn, Ct] = x(!1), [ke, Oe] = x([]), [ne, Te] = x(null), [Q, cn] = x(null), Ee = Qe(!0), G = { slug: e.slug, profileId: d }, ae = l.profiles.find((i) => i.id === d), z = () => nn((i) => i + 1), kt = () => on((i) => i + 1);
  K(() => (Ee.current = !0, () => {
    Ee.current = !1;
  }), []), K(() => {
    const i = setTimeout(() => y(b), 220);
    return () => clearTimeout(i);
  }, [b]), K(() => {
    let i = !1;
    return te(!0), T(""), r(void 0), h(Dt), k(""), U(""), Ge([]), _("all"), v.call("profiles", { slug: e.slug }).then((g) => {
      i || (s(g), r(g.activeId));
    }).catch((g) => {
      i || (T(R(g)), te(!1));
    }), () => {
      i = !0;
    };
  }, [e.slug, an]), K(() => {
    if (d === void 0) return;
    let i = !1;
    te(!0);
    const g = { ...ea, searchTerm: p, includeEnabled: P !== "disabled", includeDisabled: P !== "enabled", includeCategories: L ? [L] : [], sortBy: f, sortOrder: u ? "ascending" : "descending" };
    return v.call("mods", { slug: e.slug, profileId: d }, { args: g }).then((M) => {
      i || (h(M), T(""), Ge((X) => Array.from(/* @__PURE__ */ new Set([...X, ...M.mods.flatMap((Z) => Z.data.categories ?? [])])).sort()));
    }).catch((M) => {
      i || T(R(M));
    }).finally(() => {
      i || te(!1);
    }), () => {
      i = !0;
    };
  }, [e.slug, d, p, P, f, u, L, tn]), K(() => {
    if (!Le) return;
    const i = setTimeout(() => E(""), 4500);
    return () => clearTimeout(i);
  }, [Le]), K(() => {
    D !== "export" || t || v.call("list_export_files", G).then(Oe).catch((i) => T(R(i)));
  }, [D, d]);
  const Me = m.updates.filter((i) => !i.ignore), Xe = P === "updates" ? m.mods.filter((i) => Me.some((g) => g.updatedId.packageUuid === i.data.uuid)) : m.mods, pn = m.mods.filter((i) => i.enabled).length, un = Vt(() => ke.filter((i) => i.included).reduce((i, g) => i + g.size, 0), [ke]), A = Ln(async (i, g) => {
    if (!w) {
      gt(i), T("");
      try {
        await g();
      } catch (M) {
        Ee.current && T(R(M));
      } finally {
        Ee.current && gt("");
      }
    }
  }, [w]), Ve = async (i, g = {}) => {
    await v.call(i, G, g);
    const M = await v.call("profiles", { slug: e.slug }), X = i === "import_profile" ? q.trim() : q;
    let Z = M.activeId;
    (i === "create_profile" || i === "duplicate_profile" || i === "import_profile") && (Z = M.profiles.find((Ze) => Ze.name === X)?.id ?? M.activeId), i === "delete_profile" && (Z = M.activeId), await v.call("activate_profile", { slug: e.slug, profileId: Z }), s(M), r(Z), F(null), O(""), ce(null), z(), E(n("profileSaved"));
  }, gn = (i) => void A(i.data.uuid, async () => {
    const g = await v.call("toggle_mod", G, { uuid: i.data.uuid });
    g.type === "confirm" ? Te({ title: n("disableMod", { name: i.data.name }), description: n("disableDependants"), uuids: [i.data.uuid, ...g.dependants.map((M) => M.uuid)], kind: "toggle" }) : z();
  }), mn = (i) => void A(i.data.uuid, async () => {
    const g = await v.call("remove_mod", G, { uuid: i.data.uuid });
    g.type === "confirm" ? Te({ title: n("removeMod", { name: i.data.name }), description: n("removeDependants"), uuids: [i.data.uuid, ...g.dependants.map((M) => M.uuid)], kind: "remove" }) : (z(), E(n("modRemoved")));
  }), fn = () => {
    ne && A("confirm", async () => {
      await v.call(ne.kind === "toggle" ? "force_toggle_mods" : "force_remove_mods", G, { uuids: [...new Set(ne.uuids)] }), Te(null), z(), E(ne.kind === "toggle" ? n("stateChanged") : n("modRemoved"));
    });
  }, Mt = () => void A("browser", async () => {
    if (t) {
      E(n("demoConfig"));
      return;
    }
    const i = await v.browserUrl({ ...G, lang: Bn() });
    Ye(i.url), E(n("configOpened"));
  }), hn = () => void A("import", async () => {
    if (!_e.trim()) throw new Error(n("importCodePlaceholder"));
    const i = await v.call("read_profile_code", G, { code: _e.trim() });
    ce(i), O(i.manifest.profileName), Ce(l.profiles.some((g) => g.name === i.manifest.profileName) ? "overwrite" : "new");
  }), xn = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      T(n("fileTooLarge"));
      return;
    }
    const g = new FileReader();
    g.onload = () => void A("import", async () => {
      const M = String(g.result).split(",")[1] ?? "", X = await v.call("read_profile_base64", G, { base64: M });
      ce(X), O(X.manifest.profileName), Ce(l.profiles.some((Z) => Z.name === X.manifest.profileName) ? "overwrite" : "new");
    }), g.onerror = () => T(n("fileReadError")), g.readAsDataURL(i);
  }, vn = (i) => void A("import", async () => {
    const g = await v.call("read_profile_file", G, { path: i });
    ce(g), O(g.manifest.profileName), Ce(l.profiles.some((M) => M.name === g.manifest.profileName) ? "overwrite" : "new");
  }), bn = async () => {
    const i = await Gt(n("profileFileDialog"), n("profileFileFilter"), ["*.r2z", "*.zip"]);
    i && vn(i);
  }, yn = async () => {
    const i = await Gt(n("localFileDialog"), n("localFileFilter"), ["*.zip"]);
    i && A("local", async () => {
      await v.call("import_local_mod", G, { path: i }), F(null), z(), E(n("profileSaved"));
    });
  }, wn = () => void A("import", async () => {
    if (!$) return;
    const i = { ...$, manifest: { ...$.manifest, profileName: q.trim() || $.manifest.profileName } };
    await Ve("import_profile", { data: i, options: { importAll: ft, merge: we === "overwrite" && ht, ignoreMissingMods: $.missingMods.length > 0 } });
  }), Cn = () => void A("r2", async () => {
    const i = await v.call("get_r2modman_info", G, { path: Ue.trim() || null });
    xt(i), bt(i?.profiles.map(() => !0) ?? []);
  }), kn = () => void A("r2", async () => {
    re && (await v.call("import_r2modman", G, { path: re.path, include: vt }), F(null), kt(), z(), E(n("profileSaved")));
  }), Mn = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      T(n("fileTooLarge"));
      return;
    }
    const g = new FileReader();
    g.onload = () => void A("local", async () => {
      await v.call("import_local_mod_base64", G, { base64: String(g.result).split(",")[1] ?? "" }), F(null), z(), E(n("profileSaved"));
    }), g.onerror = () => T(n("fileReadError")), g.readAsDataURL(i);
  }, Sn = () => void A("export", async () => {
    const i = await v.call("export_code", G);
    Ct(i.type !== "success"), wt(i.code ?? ""), F("export");
  }), Nn = (i) => {
    if (t) {
      Oe(i);
      return;
    }
    A("export-files", async () => {
      await v.call("set_excluded_export_files", G, { excludedFiles: i.filter((g) => !g.included).map((g) => g.path) }), Oe(i), wt("");
    });
  }, Pn = () => void A("export-file", async () => {
    const { url: i } = await v.browserUrl({ ...G, kind: "export" });
    Vn(i);
  }), An = () => void A("update", async () => {
    await v.call("update_mods", G, { uuids: Me.map((i) => i.updatedId.packageUuid) }), E(n(t ? "demoUpdate" : "updateQueued")), z();
  }), ie = () => {
    w || (F(null), ce(null), O(""), He(""), xt(null), Ct(!1));
  }, In = async (i, g) => {
    try {
      await navigator.clipboard.writeText(i), E(g);
    } catch {
      T(n("clipboardError"));
    }
  };
  return /* @__PURE__ */ c("section", { className: "galex gx-mods", "aria-label": n("mods"), "data-appid": e.steamAppId, children: [
    /* @__PURE__ */ c("div", { className: "gx-heading", children: [
      /* @__PURE__ */ c("h1", { children: [
        n("mods"),
        " ",
        /* @__PURE__ */ a("span", { children: e.name })
      ] }),
      /* @__PURE__ */ a("div", { className: "gx-heading-meta", children: o ? n("working") : `Gale ${t ? "· " + n("demo") : n("connected")}` })
    ] }),
    /* @__PURE__ */ c("div", { className: "gx-toolbar", children: [
      /* @__PURE__ */ a(S, { icon: "external", onClick: () => Ye(`https://thunderstore.io/c/${encodeURIComponent(e.slug)}/`), children: n("openThunderstore") }),
      /* @__PURE__ */ c(S, { icon: "settings", onClick: () => $e((i) => !i), "aria-expanded": ee, children: [
        n("advanced"),
        " ",
        /* @__PURE__ */ a(W, { name: ee ? "chevron-down" : "chevron-right", size: 13 })
      ] }),
      /* @__PURE__ */ a("span", { className: "gx-toolbar-spacer" }),
      /* @__PURE__ */ a(j, { icon: "refresh", label: n("refresh"), onClick: () => {
        kt(), z();
      }, disabled: !!w })
    ] }),
    ee && /* @__PURE__ */ c("div", { className: "gx-advanced", children: [
      /* @__PURE__ */ c("div", { className: "gx-profile-line", children: [
        /* @__PURE__ */ a("span", { className: "gx-field-label", children: n("profile") }),
        /* @__PURE__ */ a(ge, { label: n("profile"), value: d ?? 0, disabled: !!w || !l.profiles.length, options: l.profiles.map((i) => ({ value: i.id, label: i.name })), onChange: (i) => void A("profile", async () => {
          await v.call("activate_profile", { slug: e.slug, profileId: i }), r(i), z();
        }) })
      ] }),
      /* @__PURE__ */ c("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ a(S, { icon: "plus", disabled: !!w, onClick: () => {
          O(""), F("create");
        }, children: n("createProfile") }),
        /* @__PURE__ */ a(S, { disabled: !ae || !!w, onClick: () => {
          O(ae?.name ?? ""), F("rename");
        }, children: n("renameProfile") }),
        /* @__PURE__ */ a(S, { disabled: !ae || !!w, onClick: () => {
          O(`${ae?.name} copy`), F("duplicate");
        }, children: n("duplicateProfile") }),
        /* @__PURE__ */ a(S, { className: "gx-danger", disabled: l.profiles.length < 2 || !!w, onClick: () => F("delete"), children: n("deleteProfile") }),
        /* @__PURE__ */ a(S, { icon: "download", disabled: !ae || !!w, onClick: () => {
          He(""), ce(null), mt("code"), F("import");
        }, children: n("import") }),
        /* @__PURE__ */ a(S, { icon: "external", disabled: !ae || !!w, onClick: Sn, children: n("export") }),
        /* @__PURE__ */ a(S, { icon: "sliders", disabled: !ae || !!w, onClick: Mt, children: n("config") })
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "gx-search-row", children: [
      /* @__PURE__ */ c("label", { className: "gx-search", children: [
        /* @__PURE__ */ a(W, { name: "search", size: 16 }),
        /* @__PURE__ */ a("input", { "aria-label": n("searchMods"), placeholder: n("searchMods"), value: b, onChange: (i) => k(i.target.value) }),
        b && /* @__PURE__ */ a("button", { "aria-label": n("clearSearch"), onClick: () => k(""), children: /* @__PURE__ */ a(W, { name: "x", size: 13 }) })
      ] }),
      /* @__PURE__ */ a(ge, { label: n("filter"), value: P, onChange: _, options: [{ value: "all", label: n("all") }, { value: "enabled", label: n("enabled") }, { value: "disabled", label: n("disabled") }, { value: "updates", label: n("updates") }] }),
      /* @__PURE__ */ a(ge, { label: n("sortBy"), value: f, onChange: C, options: [{ value: "name", label: n("byName") }, { value: "author", label: n("byAuthor") }, { value: "installDate", label: n("byInstallDate") }, { value: "diskSpace", label: n("bySize") }, { value: "downloads", label: n("byDownloads") }] }),
      /* @__PURE__ */ a(j, { className: "gx-sort-direction", icon: u ? "arrow-up" : "arrow-down", label: n(u ? "ascending" : "descending"), onClick: () => I((i) => !i), disabled: !!w }),
      /* @__PURE__ */ a(ge, { label: n("categories"), value: L, onChange: U, options: [{ value: "", label: n("allCategories") }, ...le.map((i) => ({ value: i, label: i }))] })
    ] }),
    ye && /* @__PURE__ */ a(xe, { error: !0, onRetry: () => {
      T(""), z();
    }, children: ye }),
    Le && /* @__PURE__ */ a(xe, { children: Le }),
    /* @__PURE__ */ c("div", { className: "gx-list-heading", children: [
      /* @__PURE__ */ a("span", { children: n("modCount", { count: m.totalModCount }) }),
      /* @__PURE__ */ a("span", { children: n("enabledCount", { count: pn }) }),
      !!Me.length && /* @__PURE__ */ c("button", { className: "gx-update-link", disabled: !!w, onClick: An, children: [
        /* @__PURE__ */ a(W, { name: "download", size: 13 }),
        n("updateAll", { count: Me.length })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-mod-list", tabIndex: 0, children: be && !m.mods.length ? /* @__PURE__ */ a("div", { className: "gx-empty", children: n("loading") }) : Xe.length ? Xe.map((i, g) => {
      const M = Me.find((X) => X.updatedId.packageUuid === i.data.uuid);
      return /* @__PURE__ */ c("div", { className: `gx-mod-row ${i.enabled ? "" : "is-disabled"}`, children: [
        /* @__PURE__ */ a(Se, { checked: i.enabled, disabled: !!w, label: Ft(i.data.name), onChange: () => gn(i) }),
        /* @__PURE__ */ a("span", { className: "gx-mod-index", children: g + 1 }),
        /* @__PURE__ */ a(na, { mod: i }),
        /* @__PURE__ */ c("div", { className: "gx-mod-info", children: [
          /* @__PURE__ */ c("div", { className: "gx-mod-title", children: [
            /* @__PURE__ */ a("h3", { children: Ft(i.data.name) }),
            M && /* @__PURE__ */ c("span", { className: "gx-badge gx-badge--update", children: [
              M.old,
              " → ",
              M.new
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
        /* @__PURE__ */ a("span", { className: "gx-mod-size", children: ze(i.data.fileSize) }),
        /* @__PURE__ */ c("div", { className: "gx-mod-actions", children: [
          i.configFile && /* @__PURE__ */ a(j, { icon: "sliders", label: n("openConfig"), disabled: !!w, onClick: Mt }),
          i.data.type === "remote" && /* @__PURE__ */ a(j, { icon: "layers", label: n("versions"), disabled: !!w, onClick: () => {
            cn(i), F("versions");
          } }),
          M && /* @__PURE__ */ a(j, { icon: "download", label: n("update"), disabled: !!w, onClick: () => void A("update-one", async () => {
            await v.call("update_mods", G, { uuids: [i.data.uuid] }), z(), E(n("updateQueued"));
          }) }),
          /* @__PURE__ */ a(j, { icon: "trash", label: n("remove"), disabled: !!w, onClick: () => mn(i) })
        ] })
      ] }, i.data.uuid);
    }) : /* @__PURE__ */ a("div", { className: "gx-empty", children: n("noMods") }) }),
    /* @__PURE__ */ c("div", { className: "gx-footer", children: [
      /* @__PURE__ */ c("span", { children: [
        e.name,
        " · Gale"
      ] }),
      /* @__PURE__ */ a("span", { children: be ? n("loading") : n("modCount", { count: Xe.length }) })
    ] }),
    ne && /* @__PURE__ */ a(Lt, { title: ne.title, onClose: () => Te(null), onConfirm: fn, busy: !!w, danger: ne.kind === "remove", children: /* @__PURE__ */ a("p", { children: ne.description }) }),
    (D === "create" || D === "rename" || D === "duplicate") && /* @__PURE__ */ a(he, { title: n(D === "create" ? "createProfileTitle" : D === "rename" ? "renameProfileTitle" : "duplicateProfileTitle"), onClose: ie, footer: /* @__PURE__ */ c(V, { children: [
      /* @__PURE__ */ a(S, { onClick: ie, disabled: !!w, children: n("cancel") }),
      /* @__PURE__ */ a(S, { primary: !0, disabled: !!w || !q.trim(), onClick: () => void A("profile", () => Ve(D === "create" ? "create_profile" : D === "rename" ? "rename_profile" : "duplicate_profile", { name: q.trim() })), children: n(w ? "working" : "save") })
    ] }), children: /* @__PURE__ */ c("label", { className: "gx-form-label", children: [
      n("profileName"),
      /* @__PURE__ */ a("input", { value: q, onChange: (i) => O(i.target.value), autoFocus: !0 })
    ] }) }),
    D === "delete" && /* @__PURE__ */ a(Lt, { title: n("deleteProfileTitle"), onClose: ie, onConfirm: () => void A("profile", () => Ve("delete_profile", { id: d })), busy: !!w, danger: !0, children: /* @__PURE__ */ a("p", { children: n("deleteProfileBody", { name: ae?.name ?? "" }) }) }),
    D === "import" && /* @__PURE__ */ a(he, { title: n($ ? "importPreview" : "importTitle"), onClose: ie, footer: /* @__PURE__ */ c(V, { children: [
      /* @__PURE__ */ a(S, { onClick: ie, disabled: !!w, children: n("cancel") }),
      $ ? /* @__PURE__ */ a(S, { primary: !0, onClick: wn, disabled: !!w || !q.trim(), children: n(w ? "importing" : "installProfile") }) : pe === "code" ? /* @__PURE__ */ a(S, { primary: !0, onClick: hn, disabled: !!w || !_e.trim(), children: n(w ? "working" : "continue") }) : pe === "r2" ? /* @__PURE__ */ a(S, { primary: !0, onClick: re ? kn : Cn, disabled: !!w || !re && !Ue.trim(), children: n(w ? "working" : re ? "import" : "r2Load") }) : null
    ] }), children: $ ? /* @__PURE__ */ c(V, { children: [
      /* @__PURE__ */ c("div", { className: "gx-tabs", children: [
        /* @__PURE__ */ a(S, { className: we === "new" ? "gx-button--primary" : "", onClick: () => Ce("new"), children: n("newProfile") }),
        /* @__PURE__ */ a(S, { className: we === "overwrite" ? "gx-button--primary" : "", onClick: () => Ce("overwrite"), children: n("overwriteProfile") })
      ] }),
      /* @__PURE__ */ c("label", { className: "gx-form-label", children: [
        n("profileName"),
        /* @__PURE__ */ a("input", { value: q, onChange: (i) => O(i.target.value) })
      ] }),
      we === "overwrite" && /* @__PURE__ */ a(ge, { label: n("overwriteProfile"), value: q, onChange: O, options: l.profiles.map((i) => ({ value: i.name, label: i.name })) }),
      /* @__PURE__ */ c("div", { className: "gx-import-summary", children: [
        /* @__PURE__ */ a("strong", { children: $.manifest.profileName }),
        /* @__PURE__ */ a("span", { children: n("modsToInstall", { count: $.manifest.mods.length }) })
      ] }),
      !!$.missingMods.length && /* @__PURE__ */ a(xe, { error: !0, children: n("missingMods", { mods: $.missingMods.join(", ") }) }),
      /* @__PURE__ */ c("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ a(Se, { checked: ft, onChange: ln, label: n("importAllFiles") }),
        n("importAllFiles")
      ] }),
      we === "overwrite" && /* @__PURE__ */ c("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ a(Se, { checked: ht, onChange: rn, label: n("mergeProfiles") }),
        n("mergeProfiles")
      ] })
    ] }) : /* @__PURE__ */ c(V, { children: [
      /* @__PURE__ */ a("div", { className: "gx-tabs", children: ["code", "r2", "local"].map((i) => /* @__PURE__ */ a(S, { className: pe === i ? "gx-button--primary" : "", onClick: () => mt(i), children: n(i === "code" ? "importCode" : i === "r2" ? "importR2" : "importLocal") }, i)) }),
      pe === "code" && /* @__PURE__ */ c(V, { children: [
        /* @__PURE__ */ c("label", { className: "gx-form-label", children: [
          n("importCode"),
          /* @__PURE__ */ a("textarea", { value: _e, onChange: (i) => He(i.target.value), placeholder: n("importCodePlaceholder"), rows: 3 })
        ] }),
        /* @__PURE__ */ c("div", { className: "gx-form-label", children: [
          /* @__PURE__ */ a("span", { children: n("importFile") }),
          It() ? /* @__PURE__ */ a(S, { icon: "folder", disabled: !!w, onClick: () => void bn(), children: n("importFileButton") }) : /* @__PURE__ */ a("input", { type: "file", accept: ".r2z,.zip", onChange: (i) => {
            const g = i.target.files?.[0];
            g && xn(g);
          } })
        ] })
      ] }),
      pe === "r2" && /* @__PURE__ */ c(V, { children: [
        /* @__PURE__ */ c("label", { className: "gx-form-label", children: [
          n("r2Path"),
          /* @__PURE__ */ a("input", { value: Ue, onChange: (i) => sn(i.target.value), placeholder: "~/.config/r2modman" })
        ] }),
        re && /* @__PURE__ */ c("div", { className: "gx-file-list", children: [
          /* @__PURE__ */ a("strong", { children: n("r2Profiles") }),
          re.profiles.map((i, g) => /* @__PURE__ */ c("label", { children: [
            /* @__PURE__ */ a(Se, { checked: !!vt[g], label: i, onChange: (M) => bt((X) => X.map((Z, Ze) => Ze === g ? M : Z)) }),
            /* @__PURE__ */ a("span", { children: i })
          ] }, i))
        ] })
      ] }),
      pe === "local" && /* @__PURE__ */ c("div", { className: "gx-form-label", children: [
        /* @__PURE__ */ a("span", { children: n("importLocalFile") }),
        It() ? /* @__PURE__ */ a(S, { icon: "folder", disabled: !!w, onClick: () => void yn(), children: n("importLocalFile") }) : /* @__PURE__ */ a("input", { type: "file", accept: ".zip", onChange: (i) => {
          const g = i.target.files?.[0];
          g && Mn(g);
        } })
      ] })
    ] }) }),
    D === "export" && /* @__PURE__ */ c(he, { title: n("exportTitle"), onClose: ie, footer: /* @__PURE__ */ a(S, { primary: !0, onClick: ie, children: n("done") }), children: [
      /* @__PURE__ */ a("p", { children: n("exportIntro") }),
      dn ? /* @__PURE__ */ a(xe, { error: !0, children: n("exportTooLarge") }) : /* @__PURE__ */ c("div", { className: "gx-export-code", children: [
        /* @__PURE__ */ a("code", { children: yt }),
        /* @__PURE__ */ a(j, { icon: "copy", label: n("copyCode"), onClick: () => void In(yt, n("codeCopied")) })
      ] }),
      !t && /* @__PURE__ */ c("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ a(S, { icon: "download", disabled: !!w, onClick: Pn, children: n("exportFile") }),
        /* @__PURE__ */ a(S, { icon: "copy", disabled: !!w, onClick: () => void A("deps", async () => {
          await v.call("copy_dependency_strings", G), E(n("dependenciesCopied"));
        }), children: n("copyDependencies") }),
        /* @__PURE__ */ a(S, { icon: "copy", disabled: !!w, onClick: () => void A("debug", async () => {
          await v.call("copy_debug_info", G), E(n("debugCopied"));
        }), children: n("copyDebug") })
      ] }),
      !!ke.length && /* @__PURE__ */ c("details", { children: [
        /* @__PURE__ */ a("summary", { children: n("exportFiles") }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("exportFilesHint") }),
        /* @__PURE__ */ a("div", { className: "gx-file-list", children: ke.map((i) => /* @__PURE__ */ c("label", { children: [
          /* @__PURE__ */ a(Se, { checked: i.included, disabled: !!w, label: i.path, onChange: (g) => Nn(ke.map((M) => M.path === i.path ? { ...M, included: g } : M)) }),
          /* @__PURE__ */ a("span", { children: i.path }),
          /* @__PURE__ */ a("small", { children: ze(i.size) })
        ] }, i.path)) }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: n("totalSize", { size: ze(un) }) })
      ] })
    ] }),
    D === "versions" && Q && /* @__PURE__ */ c(he, { title: n("versionTitle", { name: Q.data.name }), onClose: ie, children: [
      /* @__PURE__ */ a("p", { children: n("currentVersion", { version: Q.data.version ?? "" }) }),
      /* @__PURE__ */ a("div", { className: "gx-version-list", children: Q.data.versions.map((i) => /* @__PURE__ */ c(S, { disabled: !!w || i.uuid === Q.data.versionUuid, icon: i.uuid === Q.data.versionUuid ? "check" : "layers", onClick: () => void A("version", async () => {
        await v.call("change_mod_version", G, { id: { packageUuid: Q.data.uuid, versionUuid: i.uuid, backend: Q.data.backend } }), F(null), z(), E(n("versionQueued"));
      }), children: [
        i.name,
        i.uuid === Q.data.versionUuid ? " · " + n("installed") : ""
      ] }, i.uuid)) })
    ] })
  ] });
}
const Pe = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new Map();
function ia(e, t) {
  Be.set(e, t);
}
function B(e) {
  return (e ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
function at(e, t) {
  try {
    const o = window.LocalizationManager, l = o?.m_mapTokens?.get?.(e) ?? o?.m_mapFallbackTokens?.get?.(e);
    if (typeof l == "string" && l.length > 0) return l;
  } catch {
  }
  return t;
}
function oa() {
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
  for (const [o, l] of [["AppProperties_GeneralPage", "General"], ["AppProperties_General", "General"]]) e.add(B(at(o, l)));
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
  ]) t.add(B(at(o, l)));
  return { general: e, secondary: t };
}
function zt(e, t, o) {
  nt.get(e) !== t && (nt.set(e, t), v.log(`properties: ${o}`).catch(() => {
  }));
}
function Rt(e) {
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
  for (const m of o) {
    if (l.has(m)) continue;
    l.add(m);
    const h = Object.keys(m).find((k) => k.startsWith("__reactFiber$") || k.startsWith("__reactInternalInstance$"));
    let b = h ? m[h] : void 0;
    for (let k = 0; b && k < 40; k++, b = b.return) {
      const p = Rt(b.memoizedProps) ?? Rt(b.pendingProps);
      if (p) return p;
    }
  }
  const s = (e.matches("[data-appid]") ? e : e.querySelector("[data-appid]"))?.getAttribute("data-appid") ?? void 0;
  if (s && /^\d+$/.test(s)) return Number(s);
  const r = (e.ownerDocument.defaultView?.location.pathname ?? "").match(/\/(?:library\/app|properties)\/(\d+)/);
  if (r) return Number(r[1]);
  for (const m of Array.from(e.querySelectorAll("img"))) {
    const h = m.src.match(/\/(?:apps|assets)\/(\d{2,9})\//);
    if (h) return Number(h[1]);
  }
}
function ra(e, t) {
  const l = [Be.get(e)?.title, e.title, t.querySelector('h1,h2,[class*="Title"]')?.textContent], d = [at("AppProperties_Title", "Properties - %1$s"), "Properties - %1$s", "Properties: %1$s", "Свойства — %1$s", "Свойства: %1$s", "Eigenschaften – %1$s", "Eigenschaften: %1$s"], r = /* @__PURE__ */ new Set();
  for (const m of l) {
    const h = B(m);
    if (!h || h === "steam") continue;
    let b = !1;
    for (const k of d) {
      const p = k.split("%1$s");
      if (p.length < 2) continue;
      const y = p.map((_) => _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")), P = h.match(new RegExp("^\\s*" + y.join("\\s*(.+?)\\s*") + "\\s*$", "i"));
      if (P?.[1]) {
        r.add(B(P[1])), b = !0;
        break;
      }
    }
    !b && !/properties|свойства|eigenschaften/.test(h) && r.add(h);
  }
  if (r.size)
    try {
      const m = window.appStore?.m_mapApps;
      if (!m?.forEach) return;
      let h;
      return m.forEach((b, k) => {
        if (h) return;
        const p = Number(k ?? b?.appid ?? b?.m_unAppID);
        if (!Number.isSafeInteger(p) || p <= 0 || p >= 2147483648) return;
        const y = B(b?.display_name ?? b?.m_strDisplayName);
        y && r.has(y) && (h = p);
      }), h;
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
  const { general: t, secondary: o } = oa(), l = Array.from(e.querySelectorAll("*")).filter((d) => {
    const r = B(d.textContent);
    if (!t.has(r) && !o.has(r) || d.closest('[role="tabpanel"],[data-galex-properties],[class*="TabContent"],[class*="tab-content"]')) return !1;
    const m = d.parentElement;
    return !(m && B(m.textContent) === r);
  }), s = l.filter((d) => t.has(B(d.textContent)));
  for (const d of s) {
    let r = d;
    for (let m = 0; r && m < 8; m++, r = r.parentElement) {
      if (r.querySelectorAll("*").length > 300) continue;
      const h = l.filter((p) => r.contains(p));
      if (h.length < 2) continue;
      const b = Array.from(new Set(h.map((p) => sa(p, r)))), k = b.map((p) => B(p.textContent));
      if (k.some((p) => t.has(p)) && k.some((p) => o.has(p))) return { list: r, tabs: b };
    }
  }
}
function ca(e) {
  const t = new Set(Array.from(e.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"],[class*="DialogBody"]')));
  return Be.get(e)?.allowBodyFallback && e.body && t.add(e.body), Array.from(t);
}
function pa(e) {
  return Array.from(e.dialog.querySelectorAll('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"],[class*="TabContent"],[class*="tab-content"]')).filter((t) => t !== e.panel && !t.contains(e.panel) && !t.hasAttribute("data-galex-properties"));
}
function it(e) {
  for (const t of pa(e))
    e.hidden.has(t) || e.hidden.set(t, { display: t.style.display, hidden: t.hidden }), t.style.display !== "none" && (t.style.display = "none");
}
function ua(e) {
  e.hidden.forEach((t, o) => {
    o.style.display = t.display, o.hidden = t.hidden;
  }), e.hidden.clear();
}
function ga(e) {
  return /Active|Selected|Current/.test(e) || /^(active|selected|current)$/i.test(e) || /[_-](active|selected|current)([_-]|$)/i.test(e);
}
function ot(e, t) {
  for (const o of [e, ...Array.from(e.querySelectorAll("*"))]) {
    const l = o.getAttribute("class");
    if (!l) continue;
    const s = l.split(/\s+/).filter(Boolean), d = s.filter((r) => !ga(r));
    d.length !== s.length && (t && !t.has(o) && t.set(o, l), d.length ? o.setAttribute("class", d.join(" ")) : o.removeAttribute("class"));
  }
}
function Kt(e) {
  for (const t of e.nativeTabs) ot(t, e.nativeClasses);
  e.list.querySelectorAll('[role="tab"]').forEach((t) => {
    t !== e.tab && (ot(t, e.nativeClasses), t.setAttribute("aria-selected", "false"));
  });
}
function ma(e) {
  e.nativeClasses.forEach((t, o) => {
    o.isConnected && o.setAttribute("class", t);
  }), e.nativeClasses.clear();
}
function Yt(e) {
  e.active && (e.active = !1, e.panel.hidden = !0, e.tab.setAttribute("aria-selected", "false"), e.tab.classList.remove("gx-tab-active"), ma(e), ua(e));
}
function fa(e) {
  if (e.active) {
    it(e), e.panel.hidden = !1;
    return;
  }
  it(e), Kt(e), e.active = !0, e.panel.hidden = !1, e.sizePanel(), e.tab.setAttribute("aria-selected", "true"), e.tab.classList.add("gx-tab-active");
}
function Bt(e, t, o) {
  e.root.render(Y(dt.Provider, { value: e.dialog.ownerDocument }, Y(st, null, Y(aa, { key: `${e.slug}-${e.appid}`, game: t, installing: o }))));
}
function lt(e) {
  Yt(e), e.resize?.disconnect(), e.list.removeEventListener("click", e.onNativeClick, !0), Pe.delete(e.dialog);
  const { root: t, tab: o, panel: l } = e;
  queueMicrotask(() => {
    try {
      t.unmount();
    } catch {
    }
    o.remove(), l.remove();
  });
}
function ha(e, t) {
  const o = B(t), l = n("mods");
  if (B(e.textContent) === o) {
    e.textContent = l;
    return;
  }
  const s = Array.from(e.querySelectorAll("*")).filter((r) => B(r.textContent) === o), d = s[s.length - 1];
  d ? d.textContent = l : e.textContent = l;
}
function en(e) {
  const { snapshot: t } = tt();
  for (const [d, r] of Array.from(Pe)) {
    if (!e.contains(d)) continue;
    if (!d.isConnected || !r.tab.isConnected || !r.list.isConnected) {
      lt(r);
      continue;
    }
    const m = t?.ok ? Et(t, r.appid) : void 0;
    if (!m) {
      lt(r);
      continue;
    }
    r.active && (it(r), Kt(r)), Bt(r, m, t.installing);
  }
  if (!t?.ok) return;
  const o = ca(e), l = [];
  let s = 0;
  for (const d of o) {
    if (Pe.has(d) || d.querySelector("[data-galex-properties]")) continue;
    const r = da(d);
    if (!r) {
      l.push("no-tablist");
      continue;
    }
    const m = la(d, r.tabs) ?? ra(e, d);
    if (!m) {
      l.push("no-appid");
      continue;
    }
    const h = Et(t, m);
    if (!h) {
      l.push(`unsupported:${m}`);
      continue;
    }
    const b = r.tabs.find((L) => /workshop|мастерская/i.test(L.textContent ?? "")) ?? r.tabs[0], k = B(b.textContent), p = b.cloneNode(!0);
    ot(p), p.removeAttribute("id"), p.removeAttribute("href"), p.setAttribute("role", "tab"), p.setAttribute("aria-selected", "false"), p.setAttribute("data-galex-properties", "tab"), p.id = `galex-tab-${m}`, p.setAttribute("aria-controls", `galex-panel-${m}`), ha(p, k), p.tagName === "A" && p.setAttribute("href", "#galex-mods"), r.list.appendChild(p);
    const y = e.createElement("div");
    y.id = `galex-panel-${m}`, y.setAttribute("role", "tabpanel"), y.setAttribute("aria-labelledby", p.id), y.setAttribute("data-galex-properties", "panel"), y.className = "gx-injected-panel", y.hidden = !0, y.style.flex = "1", y.style.minHeight = "0", y.style.overflow = "hidden", (d.querySelector('[role="tabpanel"],[class*="TabContent"],[class*="tab-content"]')?.parentElement ?? r.list.parentElement?.parentElement ?? r.list.parentElement)?.appendChild(y);
    const f = Wt(y), C = () => {
      const L = y.parentElement, U = e.defaultView;
      if (!L || !U) return;
      const le = U.getComputedStyle(L), Ge = U.getComputedStyle(d), ee = (T) => Number.parseFloat(T) || 0, $e = ee(le.paddingTop) + ee(le.paddingBottom), be = Math.max(0, L.clientHeight - $e), te = Math.floor(d.getBoundingClientRect().bottom - L.getBoundingClientRect().top - ee(le.paddingBottom) - ee(Ge.paddingBottom)), ye = te > 0 ? Math.min(be || te, te) : be;
      ye > 0 && (y.style.height = `${ye}px`);
    };
    let u;
    typeof ResizeObserver == "function" && y.parentElement && (u = new ResizeObserver(C), u.observe(y.parentElement), u.observe(d), C());
    const I = { dialog: d, list: r.list, tab: p, nativeTabs: r.tabs, panel: y, root: f, appid: h.steamAppId, slug: h.slug, active: !1, hidden: /* @__PURE__ */ new Map(), nativeClasses: /* @__PURE__ */ new Map(), resize: u, sizePanel: C, onNativeClick: (L) => {
      const U = L.target;
      U?.closest?.('[data-galex-properties="tab"]') || (U?.closest?.('[role="tab"],button,a') || r.tabs.some((le) => U && le.contains(U))) && Yt(I);
    } };
    Pe.set(d, I), Bt(I, h, t.installing), s++, p.addEventListener("click", (L) => {
      L.preventDefault(), L.stopPropagation(), fa(I);
    }), r.list.addEventListener("click", I.onNativeClick, !0), zt(e, `injected:${m}`, `tab injected appid=${m} slug=${h.slug}`);
  }
  if (o.length && Be.get(e)?.allowBodyFallback) {
    const d = `${o.length}/${s}/${l.slice(0, 4).join(",")}`;
    zt(e, d, `dialogs=${o.length} injected=${s} skipped=${l.slice(0, 4).join(",") || "none"}`);
  }
}
function $t(e) {
  const t = me.get(e);
  !t || t.timer || (t.timer = window.setTimeout(() => {
    t.timer = 0, en(e);
  }, 180));
}
function Ht(e = document) {
  if (me.has(e)) return me.get(e).dispose;
  const t = new MutationObserver(() => $t(e));
  t.observe(e.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["role", "data-appid", "src", "style", "hidden", "class"] });
  const o = () => {
    const l = me.get(e);
    l?.timer && clearTimeout(l.timer), t.disconnect();
    for (const [s, d] of Array.from(Pe))
      e.contains(s) && lt(d);
    me.delete(e), nt.delete(e);
  };
  return me.set(e, { observer: t, timer: 0, dispose: o }), $t(e), o;
}
function xa(e = document) {
  en(e);
}
const Ut = "galex-styles";
function Ot(e, t = document) {
  if (typeof t > "u") return;
  const o = t.getElementById(Ut);
  if (o) {
    o.textContent = e;
    return;
  }
  const l = t.createElement("style");
  l.id = Ut, l.textContent = e, t.head.appendChild(l);
}
const Xt = ".galex{--gx-text:var(--gpColor-White,#dfe3e8);--gx-muted:var(--gpColor-Neutral,#9ba8b5);--gx-line:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control-hover:var(--gpBackground-Color-Solid,rgba(255,255,255,.14));--gx-accent:var(--gpColor-Blue,#66c0f4);--gx-danger:var(--gpColor-Red,#d94b4b);color:var(--gx-text);font-family:inherit;font-size:14px;line-height:1.45;box-sizing:border-box;container-type:inline-size}.galex *,.galex *:before,.galex *:after{box-sizing:border-box}.galex h1,.galex h2,.galex h3,.galex p{margin:0}.galex button,.galex input,.galex select,.galex textarea{font:inherit;color:inherit}.galex button{cursor:pointer}.galex button:disabled{cursor:default;opacity:.45}.galex svg{flex-shrink:0;vertical-align:middle}.galex :focus-visible{outline:2px solid var(--gx-accent);outline-offset:2px}.gx-native-button{display:inline-flex;align-items:center;justify-content:center;gap:6px}.gx-native-select{min-width:120px;max-width:240px}.gx-native-input{width:100%}.gx-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:34px;padding:6px 14px;border:1px solid transparent;border-radius:3px;background:var(--gx-control);color:var(--gx-text);white-space:nowrap}.gx-button:hover:not(:disabled){background:var(--gx-control-hover)}.gx-button--primary{background:var(--gx-accent);color:#fff}.gx-button.gx-danger{background:var(--gx-danger);color:#fff}.gx-icon-button{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:0;border-radius:3px;background:transparent;color:var(--gx-muted)}.gx-icon-button:hover:not(:disabled){background:var(--gx-control);color:var(--gx-text)}.gx-muted{color:var(--gx-muted);font-size:12px}.gx-text-danger{color:var(--gx-danger)}.gx-toolbar-spacer{flex:1}.galex select,.gx-input,.galex input[type=text],.galex input[type=number],.galex textarea{min-height:32px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:4px 9px}.galex select{max-width:220px}.galex textarea{width:100%;resize:vertical}.gx-checkbox{width:18px;height:18px;margin:0;accent-color:var(--gx-accent);cursor:pointer}.gx-toggle{display:inline-flex;align-items:center}.gx-toggle input{width:18px;height:18px;accent-color:var(--gx-accent)}.gx-mods{display:flex;flex-direction:column;height:100%;min-height:0;min-width:0;padding:16px 20px 0;overflow:hidden}.gx-heading{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:14px}.gx-heading h1{font-size:22px;font-weight:500}.gx-heading h1>span{font-size:13px;font-weight:400;color:var(--gx-muted);margin-left:8px}.gx-heading-meta{font-size:12px;color:var(--gx-muted);white-space:nowrap}.gx-toolbar{display:flex;gap:8px;align-items:center;padding-bottom:12px;border-bottom:1px solid var(--gx-line)}.gx-advanced{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid var(--gx-line)}.gx-profile-line{display:flex;align-items:center;gap:8px;flex:1 1 240px;min-width:0}.gx-field-label{font-size:12px;color:var(--gx-muted)}.gx-profile-line select{flex:1;max-width:260px;min-width:120px}.gx-profile-actions{display:flex;flex-wrap:wrap;gap:6px}.gx-search-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:12px}.gx-search{display:flex;align-items:center;gap:8px;flex:1 1 200px;min-width:150px;height:34px;padding:0 10px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);color:var(--gx-muted)}.gx-search input{flex:1;min-width:0;border:0;background:transparent;padding:0;min-height:0}.gx-search input:focus{outline:none}.gx-search button{border:0;background:none;color:var(--gx-muted);padding:2px}.gx-sort-direction{width:34px;padding:0}.gx-list-heading{display:flex;align-items:center;gap:12px;min-height:38px;color:var(--gx-muted);font-size:12px}.gx-update-link{display:inline-flex;gap:5px;align-items:center;border:0;background:none;color:var(--gx-accent);font-size:12px;padding:2px 4px}.gx-update-link:hover{text-decoration:underline}.gx-mod-list{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;border-top:1px solid var(--gx-line);scrollbar-width:thin}.gx-mod-row{display:flex;align-items:center;gap:12px;min-height:72px;padding:10px 8px;border-bottom:1px solid var(--gx-line)}.gx-mod-row:hover{background:var(--gx-control)}.gx-mod-index{width:26px;flex-shrink:0;text-align:right;color:var(--gx-muted);font-size:12px}.gx-mod-avatar{width:48px;height:48px;flex-shrink:0;border-radius:3px;object-fit:cover;background:var(--gx-control);display:flex;align-items:center;justify-content:center;color:var(--gx-muted);font-weight:600}.gx-mod-row.is-disabled .gx-mod-avatar,.gx-mod-row.is-disabled .gx-mod-info{opacity:.55}.gx-mod-info{flex:1;min-width:0}.gx-mod-title{display:flex;align-items:center;gap:7px;min-width:0}.gx-mod-title h3{font-size:15px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-info>p{font-size:12px;color:var(--gx-muted);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-byline{display:flex;flex-wrap:wrap;gap:6px;font-size:12px;color:var(--gx-muted);margin-top:3px}.gx-badge{font-size:10px;padding:1px 5px;border-radius:2px;border:1px solid var(--gx-line);color:var(--gx-muted);white-space:nowrap}.gx-badge--update{color:var(--gx-accent);border-color:var(--gx-accent)}.gx-mod-size{min-width:70px;text-align:right;font-size:12px;color:var(--gx-muted)}.gx-mod-actions{display:flex;gap:2px;flex-shrink:0}.gx-footer{display:flex;justify-content:space-between;align-items:center;gap:8px;min-height:36px;font-size:12px;color:var(--gx-muted);border-top:1px solid var(--gx-line)}.gx-notice{display:flex;align-items:center;gap:8px;padding:8px 10px;margin:8px 0;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:13px}.gx-notice--error{border-color:var(--gx-danger);color:var(--gx-danger)}.gx-notice button{margin-left:auto;border:0;background:none;color:var(--gx-accent)}.gx-empty{padding:32px 12px;text-align:center;color:var(--gx-muted)}.gx-modal-backdrop{position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:24px;background:#000000a6}.gx-modal{display:flex;flex-direction:column;width:min(580px,100%);max-height:min(84vh,760px);border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,#1b2838);box-shadow:0 8px 40px #00000080}.gx-modal>header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--gx-line)}.gx-modal h2{font-size:17px;font-weight:500}.gx-modal-body{padding:16px 18px;overflow-y:auto;min-height:0}.gx-modal>footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid var(--gx-line)}.gx-form-label{display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--gx-muted);margin-bottom:12px}.gx-form-label input,.gx-form-label textarea,.gx-form-label select{color:var(--gx-text)}.gx-check-label{display:flex;align-items:center;gap:8px;font-size:13px;margin:8px 0}.gx-import-summary{display:flex;flex-direction:column;gap:4px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code{display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code code{flex:1;min-width:0;overflow-wrap:anywhere;font-family:monospace}.gx-version-list{display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto;margin-top:10px}.gx-file-list{max-height:220px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px;padding:6px;margin:8px 0}.gx-file-list label{display:flex;align-items:center;gap:8px;padding:3px 2px;font-size:12px}.gx-file-list span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}.gx-tabs button[aria-selected=true]{background:var(--gx-control-hover);border-color:var(--gx-accent)}.gx-global-settings{height:100%;min-height:0;overflow-y:auto;padding:0;font-size:14px}.MillenniumDesktopSidebar_EditorContent>.gx-global-settings{margin:-24px -20px -20px;padding:12px 16px 16px}.gx-settings-header{display:flex;align-items:center;gap:8px;margin-bottom:6px}.gx-settings-header h1{font-size:18px;font-weight:500;margin-right:auto}.gx-settings-section{margin:12px 0;padding-bottom:10px;border-bottom:1px solid var(--gx-line)}.gx-settings-section h2{font-size:15px;font-weight:500;margin-bottom:6px}.gx-setting{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:6px 0}.gx-setting>div{display:flex;flex-direction:column;gap:2px;min-width:0}.gx-setting strong{font-size:14px;font-weight:500}.gx-setting small{color:var(--gx-muted);font-size:12px}.gx-connection{display:inline-flex;align-items:center;gap:6px;color:var(--gx-muted);font-size:12px;white-space:nowrap}.gx-status-dot{width:7px;height:7px;border-radius:50%;background:var(--gpColor-Green,#5ba32b)}.gx-path{display:block;padding:6px 8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:12px;overflow-wrap:anywhere;color:var(--gx-muted)}.gx-settings-actions{display:flex;gap:8px;margin:8px 0}.gx-settings-bottom{color:var(--gx-muted);font-size:12px;margin-top:10px}.gx-success{display:flex;align-items:center;gap:6px;color:var(--gpColor-Green,#5ba32b);font-size:12px;margin:6px 0}.gx-settings-intro{color:var(--gx-muted);font-size:12px;margin-bottom:8px}.gx-games{margin-top:8px}.gx-games summary{cursor:pointer;font-size:13px}.gx-games summary span{color:var(--gx-muted);margin-left:6px}.gx-game-list{list-style:none;margin:6px 0 0;padding:0;max-height:180px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px}.gx-game-list li{display:flex;justify-content:space-between;gap:8px;padding:4px 8px;font-size:12px;border-bottom:1px solid var(--gx-line)}.gx-game-list li:last-child{border-bottom:0}.gx-game-list span{color:var(--gx-muted)}[data-galex-properties=tab]{cursor:pointer;user-select:none}[data-galex-properties=tab].gx-tab-active{color:var(--gpColor-White,#fff);background:var(--gpBackground-Color-Soft,rgba(255,255,255,.08))}.gx-injected-panel{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;height:100%;max-height:100%;overflow:hidden;color:var(--gx-text,#dfe3e8)}.gx-injected-panel[hidden]{display:none!important}@container (max-width:640px){.gx-mods{padding:12px 12px 0}.gx-heading h1>span{display:none}.gx-mod-row{gap:8px}.gx-mod-index,.gx-mod-size{display:none}.gx-mod-info>p{display:none}.gx-profile-actions{width:100%}.gx-profile-actions .gx-button{flex:1}}", H = "GaleX";
function va() {
  return { title: "GaleX", icon: Y(W, { name: "package", size: 18 }), content: Y(st, null, Y(Qn)), linkQueued: (e) => (et(), !0) };
}
async function ba() {
  window.__GALEX_STEAM__?.dispose(), Xn(), await $n();
  const e = [], t = [];
  let o = !1, l = !1;
  const s = Jn();
  e.push(s);
  const d = va(), r = window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[H], m = window.PLUGIN_LIST?.[H];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS ??= {})[H] = d, (window.PLUGIN_LIST ??= {})[H] = { ...m, ...d };
  const h = /* @__PURE__ */ new Set([document]);
  Ot(Xt, document);
  const b = (f) => {
    if (o || l || !f.body) return;
    l = !0;
    const C = f.createElement("div");
    C.id = "galex-link-installer", f.body.appendChild(C);
    const u = Wt(C);
    t.push(u), u.render(Y(dt.Provider, { value: f }, Y(st, null, Y(Yn)))), e.push(() => C.remove());
  }, k = (f, C) => {
    if (o || h.has(f)) return;
    const u = String(C?.m_strName ?? C?.name ?? ""), I = String(C?.m_strTitle ?? C?.title ?? f.title ?? ""), L = u.includes("SP Desktop") && !u.includes("Login");
    ia(f, { name: u, title: I, allowBodyFallback: f !== document && !L }), h.add(f), Ot(Xt, f), e.push(Ht(f)), L && b(f), v.log(`window observed name=${u || "?"} title=${I || "?"} body=${!!f.body} linkRoot=${l}`).catch(() => {
    });
  }, p = (f, C) => {
    if (o || !f) return;
    const u = () => {
      if (!o && f.document?.body)
        try {
          k(f.document, C);
        } catch (I) {
          console.warn("[GaleX] Cannot inspect property window", I), v.log(`window inspect failed: ${String(I)}`).catch(() => {
          });
        }
    };
    if (f.document?.body) {
      u();
      return;
    }
    f.addEventListener?.("DOMContentLoaded", u, { once: !0 }), f.addEventListener?.("load", u, { once: !0 }), e.push(() => {
      f.removeEventListener?.("DOMContentLoaded", u), f.removeEventListener?.("load", u);
    });
  };
  e.push(Ht(document));
  try {
    const f = oe(), C = f?.Millennium?.AddWindowCreateHook ?? f?.AddWindowCreateHook ?? window.Millennium?.AddWindowCreateHook;
    typeof C == "function" ? C((u) => {
      p(u?.window ?? u?.document?.defaultView ?? u?.BrowserWindow ?? u?.m_popup?.window ?? u?.m_popup ?? u?.m_BrowserWindow, u);
    }) : console.warn("[GaleX] Window hook unavailable; observing the main Steam document only");
  } catch (f) {
    console.warn("[GaleX] Window hook unavailable", f);
  }
  const y = window.setTimeout(() => b(document), 3e3);
  e.push(() => window.clearTimeout(y)), e.push(Kn(() => {
    for (const f of h)
      if (!f.defaultView?.closed)
        try {
          xa(f);
        } catch {
        }
  }));
  const P = () => {
    o || (o = !0, e.reverse().forEach((f) => {
      try {
        f();
      } catch {
      }
    }), t.forEach((f) => {
      try {
        f.unmount();
      } catch {
      }
    }), r === void 0 ? delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[H] : window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS[H] = r, m === void 0 ? delete window.PLUGIN_LIST?.[H] : window.PLUGIN_LIST[H] = m, delete window.__GALEX_STEAM__, window.GaleX?.dispose === P && delete window.GaleX);
  };
  window.__GALEX_STEAM__ = { dispose: P }, window.GaleX = { openSettings: () => {
    const f = oe();
    f?.Millennium?.openQuickAccess?.({ plugin: H }) ?? f?.openQuickAccess?.({ plugin: H }) ?? window.Millennium?.openQuickAccess?.({ plugin: H });
  }, openProperties: () => oe()?.Navigation?.NavigateToAppProperties?.(), dispose: P }, console.info("[GaleX] frontend 0.3.1 mounted"), v.log(`frontend 0.3.1 mounted; url=${location.href}`).catch(() => {
  });
  const _ = window.MILLENNIUM_BACKEND_IPC;
  return typeof _?.postMessage == "function" ? Promise.resolve(_.postMessage(1, { pluginName: H })).then(() => console.info("[GaleX] backend notified that the frontend is loaded")).catch((f) => console.warn("[GaleX] Frontend-loaded notification failed", f)) : console.warn("[GaleX] Millennium backend IPC is unavailable"), d;
}
async function ya() {
  return document.body || await new Promise((e) => document.addEventListener("DOMContentLoaded", () => e(), { once: !0 })), ba();
}
let De;
function wa() {
  return De || (De = ya().catch((e) => {
    throw De = void 0, e;
  })), De;
}
wa().catch((e) => console.error("[GaleX] Startup failed", e));
export {
  wa as default
};
