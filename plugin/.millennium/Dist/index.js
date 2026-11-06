const P = window.SP_REACT;
P || console.error("[GaleX] window.SP_REACT is missing — is Millennium loaded?");
const K = P.createElement;
P.cloneElement;
const vn = P.createContext;
P.createRef;
P.forwardRef;
P.memo;
const bn = P.useCallback, yn = P.useContext;
P.useDebugValue;
P.useDeferredValue;
const j = P.useEffect;
P.useId;
P.useImperativeHandle;
P.useLayoutEffect;
const Bt = P.useMemo;
P.useReducer;
const Ze = P.useRef, x = P.useState, Ft = P.useSyncExternalStore;
P.useTransition;
const wn = P.Component;
P.PureComponent;
P.Fragment;
P.StrictMode;
P.Suspense;
P.Children;
P.isValidElement;
P.version;
const ue = window.SP_REACTDOM, Ht = (e) => typeof ue?.createRoot == "function" ? ue.createRoot(e) : {
  render(n) {
    ue.render(n, e);
  },
  unmount() {
    ue.unmountComponentAtNode?.(e);
  }
}, Cn = ue.createPortal;
ue.flushSync;
const Ee = window.SP_REACT, wt = window.SP_JSX_FACTORY;
function at(e, n, o) {
  const { children: l, ...u } = n ?? {};
  return o !== void 0 && (u.key = o), l === void 0 ? Ee.createElement(e, u) : Array.isArray(l) ? Ee.createElement(e, u, ...l) : Ee.createElement(e, u, l);
}
const fe = typeof wt?.jsx == "function" ? wt : void 0, Z = fe?.Fragment ?? Ee.Fragment, a = fe ? fe.jsx : at, r = fe?.jsxs ?? at;
fe && fe.jsx;
const Ct = {
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
};
function J({ name: e, size: n = 18, className: o, strokeWidth: l = 1.6 }) {
  const u = Bt(() => Ct[e] ?? Ct.info, [e]);
  return /* @__PURE__ */ a(
    "svg",
    {
      className: o,
      width: n,
      height: n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: l,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a("path", { d: u })
    }
  );
}
function kn(e) {
  let n = e;
  for (let o = 0; o < 2 && typeof n == "string"; o++)
    try {
      n = JSON.parse(n);
    } catch {
      throw new Error("Invalid GaleX JSON reply from Millennium");
    }
  if (typeof n != "object" || n === null || Array.isArray(n) || typeof n.ok != "boolean")
    throw new Error("Invalid GaleX reply from Millennium");
  return n;
}
const kt = {
  english: "en",
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  russian: "ru",
  ru: "ru",
  "ru-ru": "ru"
}, We = /* @__PURE__ */ new Set();
let Ne = "en", $t = "english";
function Ut(e) {
  return String(e ?? "").trim().toLowerCase().replace(/_/g, "-");
}
function Mn(e) {
  const n = Ut(e);
  return kt[n] ?? kt[n.split("-")[0]] ?? "en";
}
function Nn(e) {
  $t = Ut(e) || "english";
  const n = Mn(e);
  n !== Ne && (Ne = n, We.forEach((o) => o()));
}
function Mt() {
  return Ne;
}
function Pn() {
  return $t;
}
function qe(e) {
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
  if (o) return t(o);
  if (e.startsWith("Не найдена headless-сборка Gale")) return t("missingBuild");
  const l = e.match(/^Некорректный ответ Gale \((\d+)\)$/);
  return l ? t("invalidGaleResponse", { status: l[1] }) : e.startsWith("Не удалось запустить headless Gale; см. ") ? t("launchFailed", { path: e.slice(40) }) : e;
}
function ze() {
  return Ft((e) => (We.add(e), () => We.delete(e)), Mt, Mt);
}
async function Sn(e = window) {
  let n;
  try {
    const o = e.SteamClient?.Settings;
    typeof o?.GetCurrentLanguage == "function" && (n = await o.GetCurrentLanguage());
  } catch {
  }
  if (!n)
    try {
      const o = e.LocalizationManager;
      n = o?.m_rgLocalesToUse?.[0] ?? o?.m_strCurrentLanguage;
    } catch {
    }
  return Nn(n ?? "english"), Ne;
}
const Ot = {
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
}, An = {
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
}, Gn = { en: Ot, ru: An };
function t(e, n) {
  let o = Gn[Ne][e] ?? Ot[e] ?? e;
  if (n) for (const [l, u] of Object.entries(n)) o = o.split(`{${l}}`).join(String(u));
  return o;
}
function he() {
  return window.MILLENNIUM_API;
}
let Qe;
function In(e) {
  Qe = e;
}
async function Q(e, n = {}) {
  if (!Qe) throw new Error(t("backendMissing"));
  const o = await Qe(e, n);
  let l;
  try {
    l = kn(o);
  } catch (u) {
    throw new Error(qe(u instanceof Error ? u.message : String(u)));
  }
  if (!l.ok) throw new Error(qe(l.error || t("bridgeNoReply")));
  return l.data;
}
function Ln() {
  In(async (e, n) => {
    const o = he();
    if (!o?.Millennium?.callServerMethod) throw new Error(t("millenniumMissing"));
    return o.Millennium.callServerMethod("GaleX", e, { payload: JSON.stringify(n) });
  });
}
const b = {
  snapshot: () => Q("snapshot"),
  call: (e, n, o = {}) => Q("command", { method: e, args: { slug: n.slug, profileId: n.profileId, ...o } }),
  browserUrl: (e) => Q("browser_url", { ...e }),
  dismissLink: (e) => Q("dismiss_link", { url: e }),
  global: (e, n = {}) => Q("command", { method: e, args: n }),
  getConfig: () => Q("get_config"),
  setConfig: (e) => Q("set_config", { path: e }),
  restart: () => Q("restart"),
  log: (e) => Q("frontend_log", { message: e })
};
function je(e) {
  const n = new URL(e);
  if (!["https:", "http:"].includes(n.protocol)) throw new Error(t("invalidBrowserUrl"));
  const o = he()?.Navigation;
  o?.NavigateToSteamWeb ? o.NavigateToSteamWeb(e) : window.open(e, "_blank", "noopener,noreferrer");
}
function _n(e) {
  const n = new URL(e);
  if (!["https:", "http:"].includes(n.protocol)) throw new Error(t("invalidBrowserUrl"));
  const o = he()?.Browser;
  o?.StartDownload ? o.StartDownload(e) : je(e);
}
function z(e) {
  return qe(e instanceof Error ? e.message : String(e));
}
function Tn({ error: e, onRetry: n }) {
  return ze(), /* @__PURE__ */ r("div", { className: "galex gx-crash", role: "alert", children: [
    /* @__PURE__ */ a("h2", { children: t("crashTitle") }),
    /* @__PURE__ */ a("p", { children: t("crashBody") }),
    /* @__PURE__ */ a("pre", { children: z(e) }),
    /* @__PURE__ */ a("button", { className: "gx-button", onClick: n, children: t("retry") })
  ] });
}
class it extends wn {
  state = {};
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  componentDidCatch(n, o) {
    console.error("[GaleX]", n, o.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ a(Tn, { error: this.state.error, onRetry: () => this.setState({ error: void 0 }) }) : this.props.children;
  }
}
const ot = vn(document);
function En() {
  return yn(ot);
}
function M({ children: e, icon: n, primary: o, className: l = "", ...u }) {
  return /* @__PURE__ */ r("button", { type: "button", ...u, className: `gx-button ${o ? "gx-button--primary" : ""} ${l}`, children: [
    n && /* @__PURE__ */ a(J, { name: n, size: 16 }),
    " ",
    e
  ] });
}
function ie({ icon: e, label: n, ...o }) {
  return /* @__PURE__ */ a("button", { type: "button", ...o, className: `gx-icon-button ${o.className ?? ""}`, "aria-label": n, title: n, children: /* @__PURE__ */ a(J, { name: e, size: 17 }) });
}
function ce({ value: e, onChange: n, options: o, label: l, disabled: u }) {
  return /* @__PURE__ */ a("select", { "aria-label": l, value: e, disabled: u, onChange: (s) => n(typeof e == "number" ? Number(s.target.value) : s.target.value), children: o.map((s) => /* @__PURE__ */ a("option", { value: s.value, children: s.label }, s.value)) });
}
function oe({ checked: e, onChange: n, label: o, disabled: l }) {
  return /* @__PURE__ */ a("input", { className: "gx-checkbox", type: "checkbox", "aria-label": o, checked: e, disabled: l, onChange: (u) => n(u.target.checked) });
}
function ge({ title: e, children: n, onClose: o, footer: l }) {
  const u = En(), s = Ze(null), d = Ze(o);
  return d.current = o, j(() => {
    const g = u.activeElement, f = s.current, y = () => Array.from(f?.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]') ?? []);
    (f?.querySelector("input,select,textarea") ?? y()[0])?.focus();
    const k = (c) => {
      if (c.key === "Escape" && (c.stopPropagation(), d.current()), c.key === "Tab") {
        const w = y(), S = w[0], L = w[w.length - 1];
        c.shiftKey && u.activeElement === S ? (c.preventDefault(), L?.focus()) : !c.shiftKey && u.activeElement === L && (c.preventDefault(), S?.focus());
      }
    };
    return f?.addEventListener("keydown", k), () => {
      f?.removeEventListener("keydown", k), g?.focus();
    };
  }, [u]), Cn(/* @__PURE__ */ a("div", { className: "galex gx-modal-backdrop", onMouseDown: (g) => {
    g.target === g.currentTarget && o();
  }, children: /* @__PURE__ */ r("div", { ref: s, className: "gx-modal", role: "dialog", "aria-modal": "true", "aria-label": e, children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ a("h2", { children: e }),
      /* @__PURE__ */ a(ie, { icon: "x", label: t("close"), onClick: o })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-modal-body", children: n }),
    l && /* @__PURE__ */ a("footer", { children: l })
  ] }) }), u.body);
}
function Nt({ title: e, children: n, onClose: o, onConfirm: l, busy: u, danger: s }) {
  return /* @__PURE__ */ a(ge, { title: e, onClose: o, footer: /* @__PURE__ */ r(Z, { children: [
    /* @__PURE__ */ a(M, { onClick: o, disabled: u, children: t("cancel") }),
    /* @__PURE__ */ a(M, { primary: !0, className: s ? "gx-danger" : "", onClick: l, disabled: u, children: t(u ? "working" : "confirm") })
  ] }), children: /* @__PURE__ */ a("div", { children: n }) });
}
function me({ children: e, error: n, onRetry: o }) {
  return /* @__PURE__ */ r("div", { className: `gx-notice ${n ? "gx-notice--error" : ""}`, role: n ? "alert" : "status", children: [
    /* @__PURE__ */ a(J, { name: n ? "warning" : "info", size: 17 }),
    /* @__PURE__ */ a("span", { children: e }),
    o && /* @__PURE__ */ a("button", { onClick: o, children: t("retry") })
  ] });
}
function De(e) {
  return e >= 1073741824 ? t("bytesGb", { value: (e / 1073741824).toFixed(1) }) : e >= 1048576 ? t("bytesMb", { value: (e / 1048576).toFixed(1) }) : t("bytesKb", { value: Math.round(e / 1024) });
}
function Dn({ demo: e = !1 }) {
  ze();
  const [n, o] = x(), [l, u] = x(), [s, d] = x(""), [g, f] = x(""), [y, k] = x(""), [c, w] = x(!1), S = async () => {
    f("");
    try {
      const [p, v] = await Promise.all([b.snapshot(), b.global("prefs")]);
      u(p), o(v), e || d(await b.getConfig());
    } catch (p) {
      f(z(p));
    }
  };
  j(() => {
    S();
  }, []);
  const L = async (p) => {
    if (!(!n || c)) {
      w(!0), f(""), k("");
      try {
        const v = { ...n, ...p };
        await b.global("set_prefs", { value: v }), o(v), k(t("savedInGale"));
      } catch (v) {
        f(z(v));
      } finally {
        w(!1);
      }
    }
  }, h = async () => {
    w(!0), f("");
    try {
      await b.setConfig(s.trim()), await b.restart(), k(t("pathSaved")), setTimeout(() => void S(), 2500);
    } catch (p) {
      f(z(p));
    } finally {
      w(!1);
    }
  };
  return /* @__PURE__ */ r("section", { className: "galex gx-global-settings", children: [
    /* @__PURE__ */ r("div", { className: "gx-heading", children: [
      /* @__PURE__ */ a("h1", { children: "GaleX" }),
      /* @__PURE__ */ a("span", { className: "gx-heading-meta", children: "Millennium × Gale" })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-settings-intro", children: t("settingsIntro") }),
    g && /* @__PURE__ */ a(me, { error: !0, onRetry: () => void S(), children: g }),
    y && /* @__PURE__ */ r("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ a(J, { name: "check", size: 15 }),
      y
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: t("connection") }),
      /* @__PURE__ */ r("div", { className: "gx-setting", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ a("strong", { children: t("headlessGale") }),
          /* @__PURE__ */ a("small", { children: t("headlessHint") })
        ] }),
        /* @__PURE__ */ r("span", { className: "gx-connection", children: [
          /* @__PURE__ */ a("span", { className: "gx-status-dot" }),
          l ? `Gale ${l.coreVersion}` : t("noConnection")
        ] })
      ] }),
      !e && /* @__PURE__ */ r(Z, { children: [
        /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
          t("galePath"),
          /* @__PURE__ */ a("input", { value: s, onChange: (p) => d(p.target.value), placeholder: t("galePathPlaceholder") })
        ] }),
        /* @__PURE__ */ a("div", { className: "gx-settings-actions", children: /* @__PURE__ */ a(M, { onClick: () => void h(), disabled: c, children: t("saveRestart") }) }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: t("galePathHint") })
      ] }),
      /* @__PURE__ */ a("div", { className: "gx-setting", children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ a("strong", { children: t("dataDir") }),
        /* @__PURE__ */ a("small", { children: t("dataDirHint") })
      ] }) }),
      /* @__PURE__ */ a("code", { className: "gx-path", children: l?.dataDir ?? "—" }),
      /* @__PURE__ */ r("div", { className: "gx-setting", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ a("strong", { children: t("galeGames") }),
          /* @__PURE__ */ a("small", { children: t("galeGamesHint") })
        ] }),
        /* @__PURE__ */ a("span", { className: "gx-connection", children: l?.games.length ?? 0 })
      ] }),
      !!l?.games.length && /* @__PURE__ */ a("code", { className: "gx-path", children: l.games.slice(0, 30).map((p) => `${p.name} (${p.steamAppId ?? "?"})`).join("; ") })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: t("behavior") }),
      n ? /* @__PURE__ */ r(Z, { children: [
        /* @__PURE__ */ r("div", { className: "gx-setting", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ a("strong", { children: t("fetchAuto") }),
            /* @__PURE__ */ a("small", { children: t("fetchAutoHint") })
          ] }),
          /* @__PURE__ */ a(oe, { label: t("fetchAuto"), checked: n.fetchModsAutomatically, disabled: c, onChange: (p) => void L({ fetchModsAutomatically: p }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "gx-setting", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ a("strong", { children: t("pullBeforeLaunch") }),
            /* @__PURE__ */ a("small", { children: t("pullBeforeLaunchHint") })
          ] }),
          /* @__PURE__ */ a(oe, { label: t("pullBeforeLaunch"), checked: n.pullBeforeLaunch, disabled: c, onChange: (p) => void L({ pullBeforeLaunch: p }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "gx-setting", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ a("strong", { children: t("skipBackendConfirm") }),
            /* @__PURE__ */ a("small", { children: t("skipBackendConfirmHint") })
          ] }),
          /* @__PURE__ */ a(oe, { label: t("skipBackendConfirm"), checked: n.backendSkipConfirm, disabled: c, onChange: (p) => void L({ backendSkipConfirm: p }) })
        ] })
      ] }) : /* @__PURE__ */ a("p", { className: "gx-muted", children: t("prefsLoading") })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: t("downloads") }),
      /* @__PURE__ */ r("div", { className: "gx-setting", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ a("strong", { children: t("downloadCache") }),
          /* @__PURE__ */ a("small", { children: t("downloadCacheHint") })
        ] }),
        /* @__PURE__ */ a(M, { disabled: c || !n || l?.installing, onClick: () => void (async () => {
          w(!0);
          try {
            const p = await b.global("clear_download_cache");
            k(t("cacheCleared", { size: De(p) }));
          } catch (p) {
            f(z(p));
          } finally {
            w(!1);
          }
        })(), children: t("clearCache") })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-settings-bottom", children: [
      /* @__PURE__ */ a("span", { children: t("settingsBottom") }),
      /* @__PURE__ */ a(M, { icon: "refresh", disabled: c, onClick: () => void S(), children: t("checkConnection") })
    ] })
  ] });
}
let lt = { error: "", loading: !0 };
const Pe = /* @__PURE__ */ new Set();
let rt, se = !0, Ve = !1, ke = 0;
function Pt(e) {
  lt = e, Pe.forEach((n) => n());
}
async function st() {
  if (se || Ve) return;
  Ve = !0;
  const e = ke;
  try {
    const n = await b.snapshot();
    !se && e === ke && Pt({ snapshot: n, error: n.ok ? "" : t("incompatibleBridge"), loading: !1 });
  } catch (n) {
    !se && e === ke && Pt({ ...lt, error: z(n), loading: !1 });
  } finally {
    Ve = !1, se || (rt = setTimeout(() => void st(), document.visibilityState === "hidden" ? 15e3 : 3e3));
  }
}
function zn() {
  return se ? (se = !1, ke++, st(), () => St()) : () => St();
}
function St() {
  se = !0, ke++, clearTimeout(rt);
}
function Je() {
  clearTimeout(rt), st();
}
function Ke() {
  return lt;
}
function Rn() {
  return Ft((e) => (Pe.add(e), () => Pe.delete(e)), Ke, Ke);
}
function At(e, n) {
  return e?.games.find((o) => o.steamAppId === n);
}
function Bn(e) {
  return Pe.add(e), () => {
    Pe.delete(e);
  };
}
function Fn() {
  ze();
  const { snapshot: e } = Rn(), n = e?.pendingLinks[0], [o, l] = x(), [u, s] = x(), [d, g] = x(), [f, y] = x(""), [k, c] = x(!1), [w, S] = x(0);
  if (j(() => {
    if (!n) return;
    let p = !1;
    return l(void 0), y(""), s(void 0), (async () => {
      try {
        const [v, _] = await Promise.all([b.call("profiles", { slug: n.slug }), b.call("resolve_link", { slug: n.slug }, { url: n.url })]);
        p || (s(v), g(v.activeId), l(_));
      } catch (v) {
        p || y(z(v));
      }
    })(), () => {
      p = !0;
    };
  }, [n?.url, n?.slug, w]), !n) return null;
  const L = () => {
    k || b.dismissLink(n.url).then(() => Je()).catch((p) => y(z(p)));
  }, h = () => void (async () => {
    c(!0), y("");
    try {
      await b.call("install_mod", { slug: n.slug, profileId: d }, { id: { packageUuid: o.uuid, versionUuid: o.versionUuid, backend: o.backend } }), await b.dismissLink(n.url), Je();
    } catch (p) {
      y(z(p));
    } finally {
      c(!1);
    }
  })();
  return /* @__PURE__ */ r(ge, { title: t("linkTitle"), onClose: L, footer: /* @__PURE__ */ r(Z, { children: [
    /* @__PURE__ */ a(M, { disabled: k, onClick: L, children: t("cancel") }),
    /* @__PURE__ */ a(M, { primary: !0, disabled: k || !o || d === void 0, onClick: h, children: t(k ? "linkInstalling" : "linkInstall") })
  ] }), children: [
    /* @__PURE__ */ a("h3", { children: o?.name ?? n.url.split("/").slice(-2, -1)[0] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: o ? `${o.author} · v${o.version}` : t("linkChecking") }),
    u && /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
      t("linkProfile"),
      /* @__PURE__ */ a(ce, { label: t("linkProfile"), value: d ?? u.activeId, options: u.profiles.map((p) => ({ value: p.id, label: p.name })), onChange: g })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: t("linkDeps", { game: e?.games.find((p) => p.slug === n.slug)?.name ?? n.slug }) }),
    f && /* @__PURE__ */ a(me, { error: !0, onRetry: () => S((p) => p + 1), children: f })
  ] });
}
const Hn = { includeCategories: [], excludeCategories: [], includeNsfw: !1, includeDeprecated: !0, includeDisabled: !0, includeEnabled: !0, sortBy: "name", sortOrder: "ascending" }, Gt = { mods: [], totalModCount: 0, updates: [], unknownMods: [] };
function $n({ game: e, demo: n = !1, installing: o = !1 }) {
  ze();
  const [l, u] = x({ activeId: 0, profiles: [] }), [s, d] = x(), [g, f] = x(Gt), [y, k] = x(""), [c, w] = x(""), [S, L] = x("all"), [h, p] = x("name"), [v, _] = x(!0), [G, U] = x(""), [le, Se] = x([]), [Y, Be] = x(!1), [xe, ee] = x(!0), [ve, T] = x(""), [Ae, E] = x(""), [C, dt] = x(""), [Zt, Wt] = x(0), [qt, Qt] = x(0), [D, B] = x(null), [W, X] = x(""), [Ge, Fe] = x(""), [F, be] = x(null), [de, ct] = x("code"), [ye, Ie] = x("new"), [pt, jt] = x(!1), [ut, Jt] = x(!1), [He, Kt] = x(""), [re, gt] = x(null), [mt, ht] = x([]), [ft, xt] = x(""), [Yt, vt] = x(!1), [we, $e] = x([]), [te, Le] = x(null), [q, en] = x(null), _e = Ze(!0), I = { slug: e.slug, profileId: s }, ne = l.profiles.find((i) => i.id === s), H = () => Wt((i) => i + 1), bt = () => Qt((i) => i + 1);
  j(() => (_e.current = !0, () => {
    _e.current = !1;
  }), []), j(() => {
    const i = setTimeout(() => w(y), 220);
    return () => clearTimeout(i);
  }, [y]), j(() => {
    let i = !1;
    return ee(!0), T(""), d(void 0), f(Gt), k(""), U(""), Se([]), L("all"), b.call("profiles", { slug: e.slug }).then((m) => {
      i || (u(m), d(m.activeId));
    }).catch((m) => {
      i || (T(z(m)), ee(!1));
    }), () => {
      i = !0;
    };
  }, [e.slug, qt]), j(() => {
    if (s === void 0) return;
    let i = !1;
    ee(!0);
    const m = { ...Hn, searchTerm: c, includeEnabled: S !== "disabled", includeDisabled: S !== "enabled", includeCategories: G ? [G] : [], sortBy: h, sortOrder: v ? "ascending" : "descending" };
    return b.call("mods", { slug: e.slug, profileId: s }, { args: m }).then((N) => {
      i || (f(N), T(""), Se((O) => Array.from(/* @__PURE__ */ new Set([...O, ...N.mods.flatMap((V) => V.data.categories ?? [])])).sort()));
    }).catch((N) => {
      i || T(z(N));
    }).finally(() => {
      i || ee(!1);
    }), () => {
      i = !0;
    };
  }, [e.slug, s, c, S, h, v, G, Zt]), j(() => {
    if (!Ae) return;
    const i = setTimeout(() => E(""), 4500);
    return () => clearTimeout(i);
  }, [Ae]), j(() => {
    D !== "export" || n || b.call("list_export_files", I).then($e).catch((i) => T(z(i)));
  }, [D, s]);
  const Ce = g.updates.filter((i) => !i.ignore), Ue = S === "updates" ? g.mods.filter((i) => Ce.some((m) => m.updatedId.packageUuid === i.data.uuid)) : g.mods, tn = g.mods.filter((i) => i.enabled).length, nn = Bt(() => we.filter((i) => i.included).reduce((i, m) => i + m.size, 0), [we]), A = bn(async (i, m) => {
    if (!C) {
      dt(i), T("");
      try {
        await m();
      } catch (N) {
        _e.current && T(z(N));
      } finally {
        _e.current && dt("");
      }
    }
  }, [C]), Oe = async (i, m = {}) => {
    await b.call(i, I, m);
    const N = await b.call("profiles", { slug: e.slug }), O = i === "import_profile" ? W.trim() : W;
    let V = N.activeId;
    (i === "create_profile" || i === "duplicate_profile" || i === "import_profile") && (V = N.profiles.find((Xe) => Xe.name === O)?.id ?? N.activeId), i === "delete_profile" && (V = N.activeId), await b.call("activate_profile", { slug: e.slug, profileId: V }), u(N), d(V), B(null), X(""), be(null), H(), E(t("profileSaved"));
  }, an = (i) => void A(i.data.uuid, async () => {
    const m = await b.call("toggle_mod", I, { uuid: i.data.uuid });
    m.type === "confirm" ? Le({ title: t("disableMod", { name: i.data.name }), description: t("disableDependants"), uuids: [i.data.uuid, ...m.dependants.map((N) => N.uuid)], kind: "toggle" }) : H();
  }), on = (i) => void A(i.data.uuid, async () => {
    const m = await b.call("remove_mod", I, { uuid: i.data.uuid });
    m.type === "confirm" ? Le({ title: t("removeMod", { name: i.data.name }), description: t("removeDependants"), uuids: [i.data.uuid, ...m.dependants.map((N) => N.uuid)], kind: "remove" }) : (H(), E(t("modRemoved")));
  }), ln = () => {
    te && A("confirm", async () => {
      await b.call(te.kind === "toggle" ? "force_toggle_mods" : "force_remove_mods", I, { uuids: [...new Set(te.uuids)] }), Le(null), H(), E(te.kind === "toggle" ? t("stateChanged") : t("modRemoved"));
    });
  }, yt = () => void A("browser", async () => {
    if (n) {
      E(t("demoConfig"));
      return;
    }
    const i = await b.browserUrl({ ...I, lang: Pn() });
    je(i.url), E(t("configOpened"));
  }), rn = () => void A("import", async () => {
    if (!Ge.trim()) throw new Error(t("importCodePlaceholder"));
    const i = await b.call("read_profile_code", I, { code: Ge.trim() });
    be(i), X(i.manifest.profileName), Ie(l.profiles.some((m) => m.name === i.manifest.profileName) ? "overwrite" : "new");
  }), sn = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      T(t("fileTooLarge"));
      return;
    }
    const m = new FileReader();
    m.onload = () => void A("import", async () => {
      const N = String(m.result).split(",")[1] ?? "", O = await b.call("read_profile_base64", I, { base64: N });
      be(O), X(O.manifest.profileName), Ie(l.profiles.some((V) => V.name === O.manifest.profileName) ? "overwrite" : "new");
    }), m.onerror = () => T(t("fileReadError")), m.readAsDataURL(i);
  }, dn = () => void A("import", async () => {
    if (!F) return;
    const i = { ...F, manifest: { ...F.manifest, profileName: W.trim() || F.manifest.profileName } };
    await Oe("import_profile", { data: i, options: { importAll: pt, merge: ye === "overwrite" && ut, ignoreMissingMods: F.missingMods.length > 0 } });
  }), cn = () => void A("r2", async () => {
    const i = await b.call("get_r2modman_info", I, { path: He.trim() || null });
    gt(i), ht(i?.profiles.map(() => !0) ?? []);
  }), pn = () => void A("r2", async () => {
    re && (await b.call("import_r2modman", I, { path: re.path, include: mt }), B(null), bt(), H(), E(t("profileSaved")));
  }), un = (i) => {
    if (i.size > 15 * 1024 * 1024) {
      T(t("fileTooLarge"));
      return;
    }
    const m = new FileReader();
    m.onload = () => void A("local", async () => {
      await b.call("import_local_mod_base64", I, { base64: String(m.result).split(",")[1] ?? "" }), B(null), H(), E(t("profileSaved"));
    }), m.onerror = () => T(t("fileReadError")), m.readAsDataURL(i);
  }, gn = () => void A("export", async () => {
    const i = await b.call("export_code", I);
    vt(i.type !== "success"), xt(i.code ?? ""), B("export");
  }), mn = (i) => {
    if (n) {
      $e(i);
      return;
    }
    A("export-files", async () => {
      await b.call("set_excluded_export_files", I, { excludedFiles: i.filter((m) => !m.included).map((m) => m.path) }), $e(i), xt("");
    });
  }, hn = () => void A("export-file", async () => {
    const { url: i } = await b.browserUrl({ ...I, kind: "export" });
    _n(i);
  }), fn = () => void A("update", async () => {
    await b.call("update_mods", I, { uuids: Ce.map((i) => i.updatedId.packageUuid) }), E(t(n ? "demoUpdate" : "updateQueued")), H();
  }), ae = () => {
    C || (B(null), be(null), X(""), Fe(""), gt(null), vt(!1));
  }, xn = async (i, m) => {
    try {
      await navigator.clipboard.writeText(i), E(m);
    } catch {
      T(t("clipboardError"));
    }
  };
  return /* @__PURE__ */ r("section", { className: "galex gx-mods", "aria-label": t("mods"), "data-appid": e.steamAppId, children: [
    /* @__PURE__ */ r("div", { className: "gx-heading", children: [
      /* @__PURE__ */ r("h1", { children: [
        t("mods"),
        " ",
        /* @__PURE__ */ a("span", { children: e.name })
      ] }),
      /* @__PURE__ */ a("div", { className: "gx-heading-meta", children: o ? t("working") : `Gale ${n ? "· " + t("demo") : t("connected")}` })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-toolbar", children: [
      /* @__PURE__ */ a(M, { icon: "external", onClick: () => je(`https://thunderstore.io/c/${encodeURIComponent(e.slug)}/`), children: t("openThunderstore") }),
      /* @__PURE__ */ r(M, { icon: "settings", onClick: () => Be((i) => !i), "aria-expanded": Y, children: [
        t("advanced"),
        " ",
        /* @__PURE__ */ a(J, { name: Y ? "chevron-down" : "chevron-right", size: 13 })
      ] }),
      /* @__PURE__ */ a("span", { className: "gx-toolbar-spacer" }),
      /* @__PURE__ */ a(ie, { icon: "refresh", label: t("refresh"), onClick: () => {
        bt(), H();
      }, disabled: !!C })
    ] }),
    Y && /* @__PURE__ */ r("div", { className: "gx-advanced", children: [
      /* @__PURE__ */ r("div", { className: "gx-profile-line", children: [
        /* @__PURE__ */ a("span", { className: "gx-field-label", children: t("profile") }),
        /* @__PURE__ */ a(ce, { label: t("profile"), value: s ?? 0, disabled: !!C || !l.profiles.length, options: l.profiles.map((i) => ({ value: i.id, label: i.name })), onChange: (i) => void A("profile", async () => {
          await b.call("activate_profile", { slug: e.slug, profileId: i }), d(i), H();
        }) })
      ] }),
      /* @__PURE__ */ r("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ a(M, { icon: "plus", disabled: !!C, onClick: () => {
          X(""), B("create");
        }, children: t("createProfile") }),
        /* @__PURE__ */ a(M, { disabled: !ne || !!C, onClick: () => {
          X(ne?.name ?? ""), B("rename");
        }, children: t("renameProfile") }),
        /* @__PURE__ */ a(M, { disabled: !ne || !!C, onClick: () => {
          X(`${ne?.name} copy`), B("duplicate");
        }, children: t("duplicateProfile") }),
        /* @__PURE__ */ a(M, { className: "gx-danger", disabled: l.profiles.length < 2 || !!C, onClick: () => B("delete"), children: t("deleteProfile") }),
        /* @__PURE__ */ a(M, { icon: "download", disabled: !ne || !!C, onClick: () => {
          Fe(""), be(null), ct("code"), B("import");
        }, children: t("import") }),
        /* @__PURE__ */ a(M, { icon: "external", disabled: !ne || !!C, onClick: gn, children: t("export") }),
        /* @__PURE__ */ a(M, { icon: "sliders", disabled: !ne || !!C, onClick: yt, children: t("config") })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-search-row", children: [
      /* @__PURE__ */ r("label", { className: "gx-search", children: [
        /* @__PURE__ */ a(J, { name: "search", size: 16 }),
        /* @__PURE__ */ a("input", { "aria-label": t("searchMods"), placeholder: t("searchMods"), value: y, onChange: (i) => k(i.target.value) }),
        y && /* @__PURE__ */ a("button", { "aria-label": t("clearSearch"), onClick: () => k(""), children: /* @__PURE__ */ a(J, { name: "x", size: 13 }) })
      ] }),
      /* @__PURE__ */ a(ce, { label: t("filter"), value: S, onChange: L, options: [{ value: "all", label: t("all") }, { value: "enabled", label: t("enabled") }, { value: "disabled", label: t("disabled") }, { value: "updates", label: t("updates") }] }),
      /* @__PURE__ */ a(ce, { label: t("sortBy"), value: h, onChange: p, options: [{ value: "name", label: t("byName") }, { value: "author", label: t("byAuthor") }, { value: "installDate", label: t("byInstallDate") }, { value: "diskSpace", label: t("bySize") }, { value: "downloads", label: t("byDownloads") }] }),
      /* @__PURE__ */ a(ie, { className: "gx-sort-direction", icon: v ? "arrow-up" : "arrow-down", label: t(v ? "ascending" : "descending"), onClick: () => _((i) => !i), disabled: !!C }),
      /* @__PURE__ */ a(ce, { label: t("categories"), value: G, onChange: U, options: [{ value: "", label: t("allCategories") }, ...le.map((i) => ({ value: i, label: i }))] })
    ] }),
    ve && /* @__PURE__ */ a(me, { error: !0, onRetry: () => {
      T(""), H();
    }, children: ve }),
    Ae && /* @__PURE__ */ a(me, { children: Ae }),
    /* @__PURE__ */ r("div", { className: "gx-list-heading", children: [
      /* @__PURE__ */ a("span", { children: t("modCount", { count: g.totalModCount }) }),
      /* @__PURE__ */ a("span", { children: t("enabledCount", { count: tn }) }),
      !!Ce.length && /* @__PURE__ */ r("button", { className: "gx-update-link", disabled: !!C, onClick: fn, children: [
        /* @__PURE__ */ a(J, { name: "download", size: 13 }),
        t("updateAll", { count: Ce.length })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-mod-list", tabIndex: 0, children: xe && !g.mods.length ? /* @__PURE__ */ a("div", { className: "gx-empty", children: t("loading") }) : Ue.length ? Ue.map((i, m) => {
      const N = Ce.find((O) => O.updatedId.packageUuid === i.data.uuid);
      return /* @__PURE__ */ r("div", { className: `gx-mod-row ${i.enabled ? "" : "is-disabled"}`, children: [
        /* @__PURE__ */ a(oe, { checked: i.enabled, disabled: !!C, label: i.data.name, onChange: () => an(i) }),
        /* @__PURE__ */ a("span", { className: "gx-mod-index", children: m + 1 }),
        i.data.icon ? /* @__PURE__ */ a("img", { className: "gx-mod-avatar", src: i.data.icon, alt: "", loading: "lazy" }) : /* @__PURE__ */ a("span", { className: "gx-mod-avatar", children: i.data.name.slice(0, 2).toUpperCase() }),
        /* @__PURE__ */ r("div", { className: "gx-mod-info", children: [
          /* @__PURE__ */ r("div", { className: "gx-mod-title", children: [
            /* @__PURE__ */ a("h3", { children: i.data.name }),
            N && /* @__PURE__ */ r("span", { className: "gx-badge gx-badge--update", children: [
              N.old,
              " → ",
              N.new
            ] }),
            i.data.type === "local" && /* @__PURE__ */ a("span", { className: "gx-badge", children: t("local") })
          ] }),
          !!i.data.dependencies?.length && /* @__PURE__ */ r("p", { children: [
            t("dependsOn"),
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
              t("tags"),
              ": ",
              i.data.categories.join(", ")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a("span", { className: "gx-mod-size", children: De(i.data.fileSize) }),
        /* @__PURE__ */ r("div", { className: "gx-mod-actions", children: [
          i.configFile && /* @__PURE__ */ a(ie, { icon: "sliders", label: t("openConfig"), disabled: !!C, onClick: yt }),
          i.data.type === "remote" && /* @__PURE__ */ a(ie, { icon: "layers", label: t("versions"), disabled: !!C, onClick: () => {
            en(i), B("versions");
          } }),
          N && /* @__PURE__ */ a(ie, { icon: "download", label: t("update"), disabled: !!C, onClick: () => void A("update-one", async () => {
            await b.call("update_mods", I, { uuids: [i.data.uuid] }), H(), E(t("updateQueued"));
          }) }),
          /* @__PURE__ */ a(ie, { icon: "trash", label: t("remove"), disabled: !!C, onClick: () => on(i) })
        ] })
      ] }, i.data.uuid);
    }) : /* @__PURE__ */ a("div", { className: "gx-empty", children: t("noMods") }) }),
    /* @__PURE__ */ r("div", { className: "gx-footer", children: [
      /* @__PURE__ */ r("span", { children: [
        e.name,
        " · Gale"
      ] }),
      /* @__PURE__ */ a("span", { children: xe ? t("loading") : t("modCount", { count: Ue.length }) })
    ] }),
    te && /* @__PURE__ */ a(Nt, { title: te.title, onClose: () => Le(null), onConfirm: ln, busy: !!C, danger: te.kind === "remove", children: /* @__PURE__ */ a("p", { children: te.description }) }),
    (D === "create" || D === "rename" || D === "duplicate") && /* @__PURE__ */ a(ge, { title: t(D === "create" ? "createProfileTitle" : D === "rename" ? "renameProfileTitle" : "duplicateProfileTitle"), onClose: ae, footer: /* @__PURE__ */ r(Z, { children: [
      /* @__PURE__ */ a(M, { onClick: ae, disabled: !!C, children: t("cancel") }),
      /* @__PURE__ */ a(M, { primary: !0, disabled: !!C || !W.trim(), onClick: () => void A("profile", () => Oe(D === "create" ? "create_profile" : D === "rename" ? "rename_profile" : "duplicate_profile", { name: W.trim() })), children: t(C ? "working" : "save") })
    ] }), children: /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
      t("profileName"),
      /* @__PURE__ */ a("input", { value: W, onChange: (i) => X(i.target.value), autoFocus: !0 })
    ] }) }),
    D === "delete" && /* @__PURE__ */ a(Nt, { title: t("deleteProfileTitle"), onClose: ae, onConfirm: () => void A("profile", () => Oe("delete_profile", { id: s })), busy: !!C, danger: !0, children: /* @__PURE__ */ a("p", { children: t("deleteProfileBody", { name: ne?.name ?? "" }) }) }),
    D === "import" && /* @__PURE__ */ a(ge, { title: t(F ? "importPreview" : "importTitle"), onClose: ae, footer: /* @__PURE__ */ r(Z, { children: [
      /* @__PURE__ */ a(M, { onClick: ae, disabled: !!C, children: t("cancel") }),
      F ? /* @__PURE__ */ a(M, { primary: !0, onClick: dn, disabled: !!C || !W.trim(), children: t(C ? "importing" : "installProfile") }) : de === "code" ? /* @__PURE__ */ a(M, { primary: !0, onClick: rn, disabled: !!C || !Ge.trim(), children: t(C ? "working" : "continue") }) : de === "r2" ? /* @__PURE__ */ a(M, { primary: !0, onClick: re ? pn : cn, disabled: !!C || !re && !He.trim(), children: t(C ? "working" : re ? "import" : "r2Load") }) : null
    ] }), children: F ? /* @__PURE__ */ r(Z, { children: [
      /* @__PURE__ */ r("div", { className: "gx-tabs", children: [
        /* @__PURE__ */ a(M, { className: ye === "new" ? "gx-button--primary" : "", onClick: () => Ie("new"), children: t("newProfile") }),
        /* @__PURE__ */ a(M, { className: ye === "overwrite" ? "gx-button--primary" : "", onClick: () => Ie("overwrite"), children: t("overwriteProfile") })
      ] }),
      /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
        t("profileName"),
        /* @__PURE__ */ a("input", { value: W, onChange: (i) => X(i.target.value) })
      ] }),
      ye === "overwrite" && /* @__PURE__ */ a(ce, { label: t("overwriteProfile"), value: W, onChange: X, options: l.profiles.map((i) => ({ value: i.name, label: i.name })) }),
      /* @__PURE__ */ r("div", { className: "gx-import-summary", children: [
        /* @__PURE__ */ a("strong", { children: F.manifest.profileName }),
        /* @__PURE__ */ a("span", { children: t("modsToInstall", { count: F.manifest.mods.length }) })
      ] }),
      !!F.missingMods.length && /* @__PURE__ */ a(me, { error: !0, children: t("missingMods", { mods: F.missingMods.join(", ") }) }),
      /* @__PURE__ */ r("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ a(oe, { checked: pt, onChange: jt, label: t("importAllFiles") }),
        t("importAllFiles")
      ] }),
      ye === "overwrite" && /* @__PURE__ */ r("label", { className: "gx-check-label", children: [
        /* @__PURE__ */ a(oe, { checked: ut, onChange: Jt, label: t("mergeProfiles") }),
        t("mergeProfiles")
      ] })
    ] }) : /* @__PURE__ */ r(Z, { children: [
      /* @__PURE__ */ a("div", { className: "gx-tabs", children: ["code", "r2", "local"].map((i) => /* @__PURE__ */ a(M, { className: de === i ? "gx-button--primary" : "", onClick: () => ct(i), children: t(i === "code" ? "importCode" : i === "r2" ? "importR2" : "importLocal") }, i)) }),
      de === "code" && /* @__PURE__ */ r(Z, { children: [
        /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
          t("importCode"),
          /* @__PURE__ */ a("textarea", { value: Ge, onChange: (i) => Fe(i.target.value), placeholder: t("importCodePlaceholder"), rows: 3 })
        ] }),
        /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
          t("importFile"),
          /* @__PURE__ */ a("input", { type: "file", accept: ".r2z,.zip", onChange: (i) => {
            const m = i.target.files?.[0];
            m && sn(m);
          } })
        ] })
      ] }),
      de === "r2" && /* @__PURE__ */ r(Z, { children: [
        /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
          t("r2Path"),
          /* @__PURE__ */ a("input", { value: He, onChange: (i) => Kt(i.target.value), placeholder: "~/.config/r2modman" })
        ] }),
        re && /* @__PURE__ */ r("div", { className: "gx-file-list", children: [
          /* @__PURE__ */ a("strong", { children: t("r2Profiles") }),
          re.profiles.map((i, m) => /* @__PURE__ */ r("label", { children: [
            /* @__PURE__ */ a(oe, { checked: !!mt[m], label: i, onChange: (N) => ht((O) => O.map((V, Xe) => Xe === m ? N : V)) }),
            /* @__PURE__ */ a("span", { children: i })
          ] }, i))
        ] })
      ] }),
      de === "local" && /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
        t("importLocalFile"),
        /* @__PURE__ */ a("input", { type: "file", accept: ".zip", onChange: (i) => {
          const m = i.target.files?.[0];
          m && un(m);
        } })
      ] })
    ] }) }),
    D === "export" && /* @__PURE__ */ r(ge, { title: t("exportTitle"), onClose: ae, footer: /* @__PURE__ */ a(M, { primary: !0, onClick: ae, children: t("done") }), children: [
      /* @__PURE__ */ a("p", { children: t("exportIntro") }),
      Yt ? /* @__PURE__ */ a(me, { error: !0, children: t("exportTooLarge") }) : /* @__PURE__ */ r("div", { className: "gx-export-code", children: [
        /* @__PURE__ */ a("code", { children: ft }),
        /* @__PURE__ */ a(ie, { icon: "copy", label: t("copyCode"), onClick: () => void xn(ft, t("codeCopied")) })
      ] }),
      !n && /* @__PURE__ */ r("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ a(M, { icon: "download", disabled: !!C, onClick: hn, children: t("exportFile") }),
        /* @__PURE__ */ a(M, { icon: "copy", disabled: !!C, onClick: () => void A("deps", async () => {
          await b.call("copy_dependency_strings", I), E(t("dependenciesCopied"));
        }), children: t("copyDependencies") }),
        /* @__PURE__ */ a(M, { icon: "copy", disabled: !!C, onClick: () => void A("debug", async () => {
          await b.call("copy_debug_info", I), E(t("debugCopied"));
        }), children: t("copyDebug") })
      ] }),
      !!we.length && /* @__PURE__ */ r("details", { children: [
        /* @__PURE__ */ a("summary", { children: t("exportFiles") }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: t("exportFilesHint") }),
        /* @__PURE__ */ a("div", { className: "gx-file-list", children: we.map((i) => /* @__PURE__ */ r("label", { children: [
          /* @__PURE__ */ a(oe, { checked: i.included, disabled: !!C, label: i.path, onChange: (m) => mn(we.map((N) => N.path === i.path ? { ...N, included: m } : N)) }),
          /* @__PURE__ */ a("span", { children: i.path }),
          /* @__PURE__ */ a("small", { children: De(i.size) })
        ] }, i.path)) }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: t("totalSize", { size: De(nn) }) })
      ] })
    ] }),
    D === "versions" && q && /* @__PURE__ */ r(ge, { title: t("versionTitle", { name: q.data.name }), onClose: ae, children: [
      /* @__PURE__ */ a("p", { children: t("currentVersion", { version: q.data.version ?? "" }) }),
      /* @__PURE__ */ a("div", { className: "gx-version-list", children: q.data.versions.map((i) => /* @__PURE__ */ r(M, { disabled: !!C || i.uuid === q.data.versionUuid, icon: i.uuid === q.data.versionUuid ? "check" : "layers", onClick: () => void A("version", async () => {
        await b.call("change_mod_version", I, { id: { packageUuid: q.data.uuid, versionUuid: i.uuid, backend: q.data.backend } }), B(null), H(), E(t("versionQueued"));
      }), children: [
        i.name,
        i.uuid === q.data.versionUuid ? " · " + t("installed") : ""
      ] }, i.uuid)) })
    ] })
  ] });
}
const Me = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new Map();
function Un(e, n) {
  Re.set(e, n);
}
function R(e) {
  return (e ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
function et(e, n) {
  try {
    const o = window.LocalizationManager, l = o?.m_mapTokens?.get?.(e) ?? o?.m_mapFallbackTokens?.get?.(e);
    if (typeof l == "string" && l.length > 0) return l;
  } catch {
  }
  return n;
}
function On() {
  const e = /* @__PURE__ */ new Set(["general", "общие", "allgemein", "général", "generale", "general ", "ogólny"]), n = /* @__PURE__ */ new Set([
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
  for (const [o, l] of [["AppProperties_GeneralPage", "General"], ["AppProperties_General", "General"]]) e.add(R(et(o, l)));
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
  ]) n.add(R(et(o, l)));
  return { general: e, secondary: n };
}
function It(e, n, o) {
  Ye.get(e) !== n && (Ye.set(e, n), b.log(`properties: ${o}`).catch(() => {
  }));
}
function Lt(e) {
  if (!e || typeof e != "object") return;
  const n = [
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
  for (const o of n) if (Number.isSafeInteger(o) && o > 0 && o < 2147483648) return o;
}
function Xn(e, n = []) {
  const o = [e, ...n, ...Array.from(e.querySelectorAll("*")).slice(0, 300)], l = /* @__PURE__ */ new Set();
  for (const g of o) {
    if (l.has(g)) continue;
    l.add(g);
    const f = Object.keys(g).find((k) => k.startsWith("__reactFiber$") || k.startsWith("__reactInternalInstance$"));
    let y = f ? g[f] : void 0;
    for (let k = 0; y && k < 40; k++, y = y.return) {
      const c = Lt(y.memoizedProps) ?? Lt(y.pendingProps);
      if (c) return c;
    }
  }
  const u = (e.matches("[data-appid]") ? e : e.querySelector("[data-appid]"))?.getAttribute("data-appid") ?? void 0;
  if (u && /^\d+$/.test(u)) return Number(u);
  const d = (e.ownerDocument.defaultView?.location.pathname ?? "").match(/\/(?:library\/app|properties)\/(\d+)/);
  if (d) return Number(d[1]);
  for (const g of Array.from(e.querySelectorAll("img"))) {
    const f = g.src.match(/\/(?:apps|assets)\/(\d{2,9})\//);
    if (f) return Number(f[1]);
  }
}
function Vn(e, n) {
  const l = [Re.get(e)?.title, e.title, n.querySelector('h1,h2,[class*="Title"]')?.textContent], s = [et("AppProperties_Title", "Properties - %1$s"), "Properties - %1$s", "Properties: %1$s", "Свойства — %1$s", "Свойства: %1$s", "Eigenschaften – %1$s", "Eigenschaften: %1$s"], d = /* @__PURE__ */ new Set();
  for (const g of l) {
    const f = R(g);
    if (!f || f === "steam") continue;
    let y = !1;
    for (const k of s) {
      const c = k.split("%1$s");
      if (c.length < 2) continue;
      const w = c.map((L) => L.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")), S = f.match(new RegExp("^\\s*" + w.join("\\s*(.+?)\\s*") + "\\s*$", "i"));
      if (S?.[1]) {
        d.add(R(S[1])), y = !0;
        break;
      }
    }
    !y && !/properties|свойства|eigenschaften/.test(f) && d.add(f);
  }
  if (d.size)
    try {
      const g = window.appStore?.m_mapApps;
      if (!g?.forEach) return;
      let f;
      return g.forEach((y, k) => {
        if (f) return;
        const c = Number(k ?? y?.appid ?? y?.m_unAppID);
        if (!Number.isSafeInteger(c) || c <= 0 || c >= 2147483648) return;
        const w = R(y?.display_name ?? y?.m_strDisplayName);
        w && d.has(w) && (f = c);
      }), f;
    } catch {
      return;
    }
}
function Zn(e, n) {
  let o = e;
  for (; o.parentElement && o.parentElement !== n; ) o = o.parentElement;
  return o.parentElement === n ? o : e;
}
function Wn(e) {
  const { general: n, secondary: o } = On(), l = Array.from(e.querySelectorAll("*")).filter((s) => {
    const d = R(s.textContent);
    if (!n.has(d) && !o.has(d) || s.closest('[role="tabpanel"],[data-galex-properties],[class*="TabContent"],[class*="tab-content"]')) return !1;
    const g = s.parentElement;
    return !(g && R(g.textContent) === d);
  }), u = l.filter((s) => n.has(R(s.textContent)));
  for (const s of u) {
    let d = s;
    for (let g = 0; d && g < 8; g++, d = d.parentElement) {
      if (d.querySelectorAll("*").length > 300) continue;
      const f = l.filter((c) => d.contains(c));
      if (f.length < 2) continue;
      const y = Array.from(new Set(f.map((c) => Zn(c, d)))), k = y.map((c) => R(c.textContent));
      if (k.some((c) => n.has(c)) && k.some((c) => o.has(c))) return { list: d, tabs: y };
    }
  }
}
function qn(e) {
  const n = new Set(Array.from(e.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"],[class*="DialogBody"]')));
  return Re.get(e)?.allowBodyFallback && e.body && n.add(e.body), Array.from(n);
}
function Qn(e) {
  return Array.from(e.dialog.querySelectorAll('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"],[class*="TabContent"],[class*="tab-content"]')).filter((n) => n !== e.panel && !n.contains(e.panel) && !n.hasAttribute("data-galex-properties"));
}
function tt(e) {
  for (const n of Qn(e))
    e.hidden.has(n) || e.hidden.set(n, { display: n.style.display, hidden: n.hidden }), n.style.display !== "none" && (n.style.display = "none");
}
function jn(e) {
  e.hidden.forEach((n, o) => {
    o.style.display = n.display, o.hidden = n.hidden;
  }), e.hidden.clear();
}
function Xt(e) {
  e.active && (e.active = !1, e.panel.hidden = !0, e.tab.setAttribute("aria-selected", "false"), e.tab.classList.remove("gx-tab-active"), jn(e));
}
function Jn(e) {
  if (e.active) {
    tt(e), e.panel.hidden = !1;
    return;
  }
  tt(e), e.dialog.querySelectorAll('[role="tab"]').forEach((n) => {
    n !== e.tab && n.setAttribute("aria-selected", "false");
  }), e.active = !0, e.panel.hidden = !1, e.sizePanel(), e.tab.setAttribute("aria-selected", "true"), e.tab.classList.add("gx-tab-active");
}
function _t(e, n, o) {
  e.root.render(K(ot.Provider, { value: e.dialog.ownerDocument }, K(it, null, K($n, { key: `${e.slug}-${e.appid}`, game: n, installing: o }))));
}
function nt(e) {
  Xt(e), e.resize?.disconnect(), e.list.removeEventListener("click", e.onNativeClick, !0), Me.delete(e.dialog);
  const { root: n, tab: o, panel: l } = e;
  queueMicrotask(() => {
    try {
      n.unmount();
    } catch {
    }
    o.remove(), l.remove();
  });
}
function Kn(e, n) {
  const o = R(n), l = t("mods");
  if (R(e.textContent) === o) {
    e.textContent = l;
    return;
  }
  const u = Array.from(e.querySelectorAll("*")).filter((d) => R(d.textContent) === o), s = u[u.length - 1];
  s ? s.textContent = l : e.textContent = l;
}
function Vt(e) {
  const { snapshot: n } = Ke();
  for (const [s, d] of Array.from(Me)) {
    if (!e.contains(s)) continue;
    if (!s.isConnected || !d.tab.isConnected || !d.list.isConnected) {
      nt(d);
      continue;
    }
    const g = n?.ok ? At(n, d.appid) : void 0;
    if (!g) {
      nt(d);
      continue;
    }
    d.active && tt(d), _t(d, g, n.installing);
  }
  if (!n?.ok) return;
  const o = qn(e), l = [];
  let u = 0;
  for (const s of o) {
    if (Me.has(s) || s.querySelector("[data-galex-properties]")) continue;
    const d = Wn(s);
    if (!d) {
      l.push("no-tablist");
      continue;
    }
    const g = Xn(s, d.tabs) ?? Vn(e, s);
    if (!g) {
      l.push("no-appid");
      continue;
    }
    const f = At(n, g);
    if (!f) {
      l.push(`unsupported:${g}`);
      continue;
    }
    const y = d.tabs.find((G) => /workshop|мастерская/i.test(G.textContent ?? "")) ?? d.tabs[0], k = R(y.textContent), c = y.cloneNode(!0);
    c.removeAttribute("id"), c.removeAttribute("href"), c.setAttribute("role", "tab"), c.setAttribute("aria-selected", "false"), c.setAttribute("data-galex-properties", "tab"), c.id = `galex-tab-${g}`, c.setAttribute("aria-controls", `galex-panel-${g}`), Kn(c, k), c.tagName === "A" && c.setAttribute("href", "#galex-mods"), d.list.appendChild(c);
    const w = e.createElement("div");
    w.id = `galex-panel-${g}`, w.setAttribute("role", "tabpanel"), w.setAttribute("aria-labelledby", c.id), w.setAttribute("data-galex-properties", "panel"), w.className = "gx-injected-panel", w.hidden = !0, w.style.flex = "1", w.style.minHeight = "0", w.style.overflow = "hidden", (s.querySelector('[role="tabpanel"],[class*="TabContent"],[class*="tab-content"]')?.parentElement ?? d.list.parentElement?.parentElement ?? d.list.parentElement)?.appendChild(w);
    const h = Ht(w), p = () => {
      const G = w.parentElement, U = e.defaultView;
      if (!G || !U) return;
      const le = U.getComputedStyle(G), Se = U.getComputedStyle(s), Y = (T) => Number.parseFloat(T) || 0, Be = Y(le.paddingTop) + Y(le.paddingBottom), xe = Math.max(0, G.clientHeight - Be), ee = Math.floor(s.getBoundingClientRect().bottom - G.getBoundingClientRect().top - Y(le.paddingBottom) - Y(Se.paddingBottom)), ve = ee > 0 ? Math.min(xe || ee, ee) : xe;
      ve > 0 && (w.style.height = `${ve}px`);
    };
    let v;
    typeof ResizeObserver == "function" && w.parentElement && (v = new ResizeObserver(p), v.observe(w.parentElement), v.observe(s), p());
    const _ = { dialog: s, list: d.list, tab: c, nativeTabs: d.tabs, panel: w, root: h, appid: f.steamAppId, slug: f.slug, active: !1, hidden: /* @__PURE__ */ new Map(), resize: v, sizePanel: p, onNativeClick: (G) => {
      const U = G.target;
      U?.closest?.('[data-galex-properties="tab"]') || (U?.closest?.('[role="tab"],button,a') || d.tabs.some((le) => U && le.contains(U))) && Xt(_);
    } };
    Me.set(s, _), _t(_, f, n.installing), u++, c.addEventListener("click", (G) => {
      G.preventDefault(), G.stopPropagation(), Jn(_);
    }), d.list.addEventListener("click", _.onNativeClick, !0), It(e, `injected:${g}`, `tab injected appid=${g} slug=${f.slug}`);
  }
  if (o.length && Re.get(e)?.allowBodyFallback) {
    const s = `${o.length}/${u}/${l.slice(0, 4).join(",")}`;
    It(e, s, `dialogs=${o.length} injected=${u} skipped=${l.slice(0, 4).join(",") || "none"}`);
  }
}
function Tt(e) {
  const n = pe.get(e);
  !n || n.timer || (n.timer = window.setTimeout(() => {
    n.timer = 0, Vt(e);
  }, 180));
}
function Et(e = document) {
  if (pe.has(e)) return pe.get(e).dispose;
  const n = new MutationObserver(() => Tt(e));
  n.observe(e.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["role", "data-appid", "src", "style", "hidden", "class"] });
  const o = () => {
    const l = pe.get(e);
    l?.timer && clearTimeout(l.timer), n.disconnect();
    for (const [u, s] of Array.from(Me))
      e.contains(u) && nt(s);
    pe.delete(e), Ye.delete(e);
  };
  return pe.set(e, { observer: n, timer: 0, dispose: o }), Tt(e), o;
}
function Yn(e = document) {
  Vt(e);
}
const Dt = "galex-styles";
function zt(e, n = document) {
  if (typeof n > "u") return;
  const o = n.getElementById(Dt);
  if (o) {
    o.textContent = e;
    return;
  }
  const l = n.createElement("style");
  l.id = Dt, l.textContent = e, n.head.appendChild(l);
}
const Rt = ".galex{--gx-text:var(--gpColor-White,#dfe3e8);--gx-muted:var(--gpColor-Neutral,#9bA8b5);--gx-line:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control:var(--gpBackground-Color-Soft,rgba(255,255,255,.08));--gx-control-hover:var(--gpBackground-Color-Solid,rgba(255,255,255,.14));--gx-accent:var(--gpColor-Blue,#66c0f4);--gx-danger:var(--gpColor-Red,#d94b4b);color:var(--gx-text);font-family:inherit;font-size:13px;line-height:1.4;box-sizing:border-box;container-type:inline-size}.galex *,.galex *:before,.galex *:after{box-sizing:border-box}.galex h1,.galex h2,.galex h3,.galex p{margin:0}.galex button,.galex input,.galex select,.galex textarea{font:inherit;color:inherit}.galex button{cursor:pointer}.galex button:disabled{cursor:default;opacity:.45}.galex svg{flex-shrink:0;vertical-align:middle}.galex :focus-visible{outline:2px solid var(--gx-accent);outline-offset:2px}.gx-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:32px;padding:6px 14px;border:1px solid transparent;border-radius:3px;background:var(--gx-control);color:var(--gx-text);white-space:nowrap}.gx-button:hover:not(:disabled){background:var(--gx-control-hover)}.gx-button--primary{background:var(--gx-accent);color:#fff}.gx-button--primary:hover:not(:disabled){filter:brightness(1.1)}.gx-button.gx-danger{background:var(--gx-danger);color:#fff}.gx-icon-button{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border:0;border-radius:3px;background:transparent;color:var(--gx-muted)}.gx-icon-button:hover:not(:disabled){background:var(--gx-control);color:var(--gx-text)}.gx-muted{color:var(--gx-muted);font-size:12px}.gx-text-danger{color:var(--gx-danger)}.gx-toolbar-spacer{flex:1}.galex select,.galex input[type=text],.galex input[type=number],.galex textarea{min-height:30px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:4px 9px}.galex select{max-width:210px}.galex textarea{width:100%;resize:vertical}.gx-checkbox{width:17px;height:17px;margin:0;accent-color:var(--gx-accent);cursor:pointer}.gx-mods{display:flex;flex-direction:column;height:100%;min-height:0;min-width:0;padding:18px 22px 0;overflow:hidden}.gx-heading{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:14px}.gx-heading h1{font-size:20px;font-weight:500}.gx-heading h1>span{font-size:12px;font-weight:400;color:var(--gx-muted);margin-left:8px}.gx-heading-meta{font-size:11px;color:var(--gx-muted);white-space:nowrap}.gx-toolbar{display:flex;gap:8px;align-items:center;padding-bottom:12px;border-bottom:1px solid var(--gx-line)}.gx-toolbar .gx-button{flex:0 1 auto}.gx-advanced{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid var(--gx-line)}.gx-profile-line{display:flex;align-items:center;gap:8px;flex:1 1 240px;min-width:0}.gx-field-label{font-size:11px;color:var(--gx-muted)}.gx-profile-line select{flex:1;max-width:260px;min-width:120px}.gx-profile-actions{display:flex;flex-wrap:wrap;gap:6px}.gx-search-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:12px}.gx-search{display:flex;align-items:center;gap:8px;flex:1 1 180px;min-width:140px;height:32px;padding:0 10px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);color:var(--gx-muted)}.gx-search input{flex:1;min-width:0;border:0;background:transparent;padding:0;min-height:0}.gx-search input:focus{outline:none}.gx-search button{border:0;background:none;color:var(--gx-muted);padding:2px}.gx-sort-direction{width:32px;padding:0}.gx-list-heading{display:flex;align-items:center;gap:10px;min-height:36px;color:var(--gx-muted);font-size:11px}.gx-update-link{display:inline-flex;gap:5px;align-items:center;border:0;background:none;color:var(--gx-accent);font-size:11px;padding:2px 4px}.gx-update-link:hover{text-decoration:underline}.gx-mod-list{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;border-top:1px solid var(--gx-line);scrollbar-width:thin}.gx-mod-row{display:flex;align-items:center;gap:12px;min-height:68px;padding:9px 4px;border-bottom:1px solid var(--gx-line)}.gx-mod-row:hover{background:var(--gx-control)}.gx-mod-index{width:24px;flex-shrink:0;text-align:right;color:var(--gx-muted);font-size:11px}.gx-mod-avatar{width:46px;height:46px;flex-shrink:0;border-radius:3px;object-fit:cover;background:var(--gx-control);display:flex;align-items:center;justify-content:center;color:var(--gx-muted);font-weight:600}.gx-mod-row.is-disabled .gx-mod-avatar,.gx-mod-row.is-disabled .gx-mod-info{opacity:.55}.gx-mod-info{flex:1;min-width:0}.gx-mod-title{display:flex;align-items:center;gap:7px;min-width:0}.gx-mod-title h3{font-size:13px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-info>p{font-size:11px;color:var(--gx-muted);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-byline{display:flex;gap:6px;font-size:10px;color:var(--gx-muted);margin-top:3px}.gx-badge{font-size:9px;padding:1px 5px;border-radius:2px;border:1px solid var(--gx-line);color:var(--gx-muted);white-space:nowrap}.gx-badge--update{color:var(--gx-accent);border-color:var(--gx-accent)}.gx-mod-size{min-width:64px;text-align:right;font-size:11px;color:var(--gx-muted)}.gx-mod-actions{display:flex;gap:2px;flex-shrink:0}.gx-footer{display:flex;justify-content:space-between;align-items:center;gap:8px;min-height:34px;font-size:10px;color:var(--gx-muted);border-top:1px solid var(--gx-line)}.gx-notice{display:flex;align-items:center;gap:8px;padding:8px 10px;margin:8px 0;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:12px}.gx-notice--error{border-color:var(--gx-danger);color:var(--gx-danger)}.gx-notice button{margin-left:auto;border:0;background:none;color:var(--gx-accent)}.gx-empty{padding:32px 12px;text-align:center;color:var(--gx-muted)}.gx-modal-backdrop{position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:24px;background:#000000a6}.gx-modal{display:flex;flex-direction:column;width:min(560px,100%);max-height:min(82vh,720px);border:1px solid var(--gx-line);border-radius:4px;background:var(--gpBackground-Dark-Medium,#1b2838);box-shadow:0 8px 40px #00000080}.gx-modal>header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--gx-line)}.gx-modal h2{font-size:16px;font-weight:500}.gx-modal-body{padding:16px 18px;overflow-y:auto;min-height:0}.gx-modal>footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid var(--gx-line)}.gx-form-label{display:flex;flex-direction:column;gap:6px;font-size:12px;color:var(--gx-muted);margin-bottom:12px}.gx-form-label input,.gx-form-label textarea,.gx-form-label select{color:var(--gx-text)}.gx-check-label{display:flex;align-items:center;gap:8px;font-size:12px;margin:8px 0}.gx-import-summary{display:flex;flex-direction:column;gap:4px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code{display:flex;align-items:center;gap:8px;padding:10px;border:1px solid var(--gx-line);border-radius:3px;margin:10px 0}.gx-export-code code{flex:1;min-width:0;overflow-wrap:anywhere;font-family:monospace}.gx-version-list{display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto;margin-top:10px}.gx-file-list{max-height:220px;overflow-y:auto;border:1px solid var(--gx-line);border-radius:3px;padding:6px;margin:8px 0}.gx-file-list label{display:flex;align-items:center;gap:8px;padding:3px 2px;font-size:11px}.gx-file-list span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}.gx-tabs button[aria-selected=true]{background:var(--gx-control-hover);border-color:var(--gx-accent)}.gx-global-settings{height:100%;min-height:0;overflow-y:auto;padding:20px 24px}.gx-settings-section{margin:18px 0;padding-bottom:14px;border-bottom:1px solid var(--gx-line)}.gx-settings-section h2{font-size:14px;font-weight:500;margin-bottom:10px}.gx-setting{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:8px 0}.gx-setting>div{display:flex;flex-direction:column;gap:3px;min-width:0}.gx-setting small{color:var(--gx-muted);font-size:11px}.gx-connection{display:inline-flex;align-items:center;gap:6px;color:var(--gx-muted);font-size:12px;white-space:nowrap}.gx-status-dot{width:6px;height:6px;border-radius:50%;background:var(--gpColor-Green,#5ba32b)}.gx-path{display:block;padding:8px;border:1px solid var(--gx-line);border-radius:3px;background:var(--gx-control);font-size:11px;overflow-wrap:anywhere;color:var(--gx-muted)}.gx-settings-actions{display:flex;gap:8px;margin:8px 0}.gx-settings-bottom{display:flex;align-items:center;justify-content:space-between;gap:12px;color:var(--gx-muted);font-size:11px}.gx-success{display:flex;align-items:center;gap:6px;color:var(--gpColor-Green,#5ba32b);font-size:12px;margin:8px 0}.gx-settings-intro{color:var(--gx-muted);font-size:12px;margin-bottom:12px}[data-galex-properties=tab]{cursor:pointer;user-select:none}[data-galex-properties=tab].gx-tab-active{color:var(--gpColor-White,#fff);background:var(--gpBackground-Color-Soft,rgba(255,255,255,.08))}.gx-injected-panel{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;height:100%;max-height:100%;overflow:hidden;color:var(--gx-text,#dfe3e8)}.gx-injected-panel[hidden]{display:none!important}@container (max-width:640px){.gx-mods{padding:14px 14px 0}.gx-heading h1>span{display:none}.gx-mod-row{gap:8px}.gx-mod-index,.gx-mod-size{display:none}.gx-mod-info>p{display:none}.gx-profile-actions{width:100%}.gx-profile-actions .gx-button{flex:1}}", $ = "GaleX";
function ea() {
  return { title: "GaleX", icon: K(J, { name: "package", size: 18 }), content: K(it, null, K(Dn)), linkQueued: (e) => (Je(), !0) };
}
async function ta() {
  window.__GALEX_STEAM__?.dispose(), Ln(), await Sn();
  const e = [], n = [];
  let o = !1, l = !1;
  const u = zn();
  e.push(u);
  const s = ea(), d = window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[$], g = window.PLUGIN_LIST?.[$];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS ??= {})[$] = s, (window.PLUGIN_LIST ??= {})[$] = { ...g, ...s };
  const f = /* @__PURE__ */ new Set([document]);
  zt(Rt, document);
  const y = (h) => {
    if (o || l || !h.body) return;
    l = !0;
    const p = h.createElement("div");
    p.id = "galex-link-installer", h.body.appendChild(p);
    const v = Ht(p);
    n.push(v), v.render(K(ot.Provider, { value: h }, K(it, null, K(Fn)))), e.push(() => p.remove());
  }, k = (h, p) => {
    if (o || f.has(h)) return;
    const v = String(p?.m_strName ?? p?.name ?? ""), _ = String(p?.m_strTitle ?? p?.title ?? h.title ?? ""), G = v.includes("SP Desktop") && !v.includes("Login");
    Un(h, { name: v, title: _, allowBodyFallback: h !== document && !G }), f.add(h), zt(Rt, h), e.push(Et(h)), G && y(h), b.log(`window observed name=${v || "?"} title=${_ || "?"} body=${!!h.body} linkRoot=${l}`).catch(() => {
    });
  }, c = (h, p) => {
    if (o || !h) return;
    const v = () => {
      if (!o && h.document?.body)
        try {
          k(h.document, p);
        } catch (_) {
          console.warn("[GaleX] Cannot inspect property window", _), b.log(`window inspect failed: ${String(_)}`).catch(() => {
          });
        }
    };
    if (h.document?.body) {
      v();
      return;
    }
    h.addEventListener?.("DOMContentLoaded", v, { once: !0 }), h.addEventListener?.("load", v, { once: !0 }), e.push(() => {
      h.removeEventListener?.("DOMContentLoaded", v), h.removeEventListener?.("load", v);
    });
  };
  e.push(Et(document));
  try {
    const h = he(), p = h?.Millennium?.AddWindowCreateHook ?? h?.AddWindowCreateHook ?? window.Millennium?.AddWindowCreateHook;
    typeof p == "function" ? p((v) => {
      c(v?.window ?? v?.document?.defaultView ?? v?.BrowserWindow ?? v?.m_popup?.window ?? v?.m_popup ?? v?.m_BrowserWindow, v);
    }) : console.warn("[GaleX] Window hook unavailable; observing the main Steam document only");
  } catch (h) {
    console.warn("[GaleX] Window hook unavailable", h);
  }
  const w = window.setTimeout(() => y(document), 3e3);
  e.push(() => window.clearTimeout(w)), e.push(Bn(() => {
    for (const h of f)
      if (!h.defaultView?.closed)
        try {
          Yn(h);
        } catch {
        }
  }));
  const S = () => {
    o || (o = !0, e.reverse().forEach((h) => {
      try {
        h();
      } catch {
      }
    }), n.forEach((h) => {
      try {
        h.unmount();
      } catch {
      }
    }), d === void 0 ? delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[$] : window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS[$] = d, g === void 0 ? delete window.PLUGIN_LIST?.[$] : window.PLUGIN_LIST[$] = g, delete window.__GALEX_STEAM__, window.GaleX?.dispose === S && delete window.GaleX);
  };
  window.__GALEX_STEAM__ = { dispose: S }, window.GaleX = { openSettings: () => {
    const h = he();
    h?.Millennium?.openQuickAccess?.({ plugin: $ }) ?? h?.openQuickAccess?.({ plugin: $ }) ?? window.Millennium?.openQuickAccess?.({ plugin: $ });
  }, openProperties: () => he()?.Navigation?.NavigateToAppProperties?.(), dispose: S }, console.info("[GaleX] frontend 0.3.0 mounted"), b.log(`frontend 0.3.0 mounted; url=${location.href}`).catch(() => {
  });
  const L = window.MILLENNIUM_BACKEND_IPC;
  return typeof L?.postMessage == "function" ? Promise.resolve(L.postMessage(1, { pluginName: $ })).then(() => console.info("[GaleX] backend notified that the frontend is loaded")).catch((h) => console.warn("[GaleX] Frontend-loaded notification failed", h)) : console.warn("[GaleX] Millennium backend IPC is unavailable"), s;
}
async function na() {
  return document.body || await new Promise((e) => document.addEventListener("DOMContentLoaded", () => e(), { once: !0 })), ta();
}
let Te;
function aa() {
  return Te || (Te = na().catch((e) => {
    throw Te = void 0, e;
  })), Te;
}
aa().catch((e) => console.error("[GaleX] Startup failed", e));
export {
  aa as default
};
