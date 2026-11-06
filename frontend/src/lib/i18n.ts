import { useSyncExternalStore } from 'react';

/** Steam client language names -> GaleX UI locales. Unsupported Steam
 * languages fall back to English instead of forcing Russian. */
export type Locale = 'en' | 'ru';
const steamToLocale: Record<string, Locale> = {
  english: 'en', en: 'en', 'en-us': 'en', 'en-gb': 'en',
  russian: 'ru', ru: 'ru', 'ru-ru': 'ru',
};
const listeners = new Set<() => void>();
let locale: Locale = 'en';
let steamLanguage = 'english';

export function normalizeSteamLanguage(value: unknown): string {
  return String(value ?? '').trim().toLowerCase().replace(/_/g, '-');
}
export function localeFromSteam(value: unknown): Locale {
  const raw = normalizeSteamLanguage(value);
  return steamToLocale[raw] ?? steamToLocale[raw.split('-')[0]!] ?? 'en';
}
export function setLocale(value: unknown) {
  steamLanguage = normalizeSteamLanguage(value) || 'english';
  const next = localeFromSteam(value);
  if (next !== locale) { locale = next; listeners.forEach(fn => fn()); }
}
export function getLocale(): Locale { return locale; }
export function getSteamLanguage(): string { return steamLanguage; }
/** Lua backend messages are stable Russian strings; render them in the Steam
 * locale instead of leaking hardcoded Russian into an English client. */
export function localizeBackendError(raw: string): string {
  const exact: Record<string, keyof typeof en> = {
    'Некорректная команда': 'invalidCommand', 'Не выбрана игра': 'noGame', 'Некорректный контекст': 'invalidContext',
    'Некорректная ссылка': 'invalidLink', 'Поддерживаются только ссылки установки Thunderstore': 'onlyThunderstore',
    'Слишком много ожидающих ссылок': 'tooManyLinks', 'Некорректный путь': 'invalidPath',
    'Не удалось сохранить настройки': 'saveSettingsFailed', 'Gale ещё завершает установки. Повторите перезапуск позже.': 'galeFinishing',
    'Не удалось определить процесс Millennium': 'millenniumPid', 'Millennium API недоступен': 'millenniumMissing',
    'Headless Gale запускается. Если запуск не завершается, проверьте путь к сборке GaleX и закройте настольный Gale.': 'bridgeStarting',
    'Нет связи с headless Gale': 'bridgeUnavailable', 'Invalid GaleX JSON reply from Millennium': 'invalidRpcJson', 'Invalid GaleX reply from Millennium': 'invalidRpcEnvelope', 'Некорректный JSON-ответ GaleX от Millennium': 'invalidRpcJson', 'Некорректный ответ GaleX от Millennium': 'invalidRpcEnvelope',
  };
  const key = exact[raw];
  if (key) return t(key);
  if (raw.startsWith('Не найдена headless-сборка Gale')) return t('missingBuild');
  const response = raw.match(/^Некорректный ответ Gale \((\d+)\)$/);
  if (response) return t('invalidGaleResponse', { status: response[1]! });
  if (raw.startsWith('Не удалось запустить headless Gale; см. ')) return t('launchFailed', { path: raw.slice('Не удалось запустить headless Gale; см. '.length) });
  return raw;
}

export function useLocale(): Locale {
  return useSyncExternalStore(fn => { listeners.add(fn); return () => listeners.delete(fn); }, getLocale, getLocale);
}

/** Read the language Steam itself is using. Settings.GetCurrentLanguage is the
 * same source Millennium's localization manager uses; LocalizationManager is a
 * fallback for older clients. Never use the OS locale or navigator.language. */
export async function initializeLocale(win: Window = window): Promise<Locale> {
  let raw: unknown;
  try {
    const settings = (win as any).SteamClient?.Settings;
    if (typeof settings?.GetCurrentLanguage === 'function') raw = await settings.GetCurrentLanguage();
  } catch { /* fall through to Steam localization tokens */ }
  if (!raw) {
    try {
      const lm = (win as any).LocalizationManager;
      raw = lm?.m_rgLocalesToUse?.[0] ?? lm?.m_strCurrentLanguage;
    } catch { /* optional */ }
  }
  setLocale(raw ?? 'english');
  return locale;
}

const en = {
  mods: 'Mods', workshop: 'Community workshop', connected: 'Gale connected', demo: 'demo',
  openThunderstore: 'Open Thunderstore', advanced: 'Advanced settings', refresh: 'Refresh list',
  profile: 'Profile', createProfile: 'Create profile', renameProfile: 'Rename', duplicateProfile: 'Duplicate', deleteProfile: 'Delete profile',
  import: 'Import', export: 'Export', config: 'Config', searchMods: 'Search by name or author', clearSearch: 'Clear search',
  filter: 'Filter', sortBy: 'Sort by', ascending: 'Ascending', descending: 'Descending', categories: 'Categories', allCategories: 'All categories',
  all: 'All mods', enabled: 'Enabled', disabled: 'Disabled', updates: 'Updates',
  byName: 'Name', byAuthor: 'Author', byInstallDate: 'Install date', bySize: 'Size', byDownloads: 'Downloads',
  modCount: '{count} mods', enabledCount: '{count} enabled', updateAll: 'Update all ({count})', loading: 'Loading mods…', noMods: 'No mods found',
  dependsOn: 'Depends on', tags: 'Tags', local: 'Local', update: 'Update', versions: 'Versions', remove: 'Remove', openConfig: 'Edit config',
  cancel: 'Cancel', confirm: 'Confirm', close: 'Close', done: 'Done', retry: 'Retry', working: 'Working…', save: 'Save',
  profileSaved: 'Profile saved', stateChanged: 'Mod state changed', modRemoved: 'Mod removed',
  disableMod: 'Disable {name}?', disableDependants: 'Other enabled mods depend on this one. They may stop working too.',
  removeMod: 'Remove {name}?', removeDependants: 'Other mods depend on this one. Remove them together?',
  deleteProfileTitle: 'Delete profile', deleteProfileBody: 'Profile “{name}” and its mods will be deleted. This cannot be undone.',
  createProfileTitle: 'Create profile', renameProfileTitle: 'Rename profile', duplicateProfileTitle: 'Duplicate profile', profileName: 'Profile name',
  importTitle: 'Import profile', importPreview: 'Review profile', importCode: 'Profile code', importCodePlaceholder: 'Paste a Gale / r2modman export code',
  importFile: 'Choose .r2z file', importR2: 'r2modman / TMM', importLocal: 'Local mod', importLocalFile: 'Choose mod .zip',
  r2Path: 'r2modman data folder', r2Load: 'Find profiles', r2Profiles: 'Profiles to import', importAllFiles: 'Import all files (trusted profiles only)', mergeProfiles: 'Merge with existing profile',
  overwriteProfile: 'Overwrite existing', newProfile: 'Create new', continue: 'Continue', installProfile: 'Install profile', importing: 'Importing…',
  missingMods: 'Not found: {mods}. They will be skipped.', modsToInstall: '{count} mods to install',
  exportTitle: 'Export profile', exportIntro: 'Share this code so another user can install the profile.', copyCode: 'Copy code', codeCopied: 'Code copied',
  exportFile: 'Download .r2z', exportFiles: 'Included config files', exportFilesHint: 'Unchecked files are omitted from codes and archives.', totalSize: 'Total size: {size}',
  copyDependencies: 'Copy dependency strings', dependenciesCopied: 'Dependency strings copied', copyDebug: 'Copy debug info', debugCopied: 'Debug info copied',
  exportTooLarge: 'The profile is too large for a code. Exclude files below or download a .r2z archive.',
  versionTitle: 'Version · {name}', currentVersion: 'Current version: {version}', installed: 'installed', versionQueued: 'Version change completed',
  updateQueued: 'Updates completed', configOpened: 'Config editor opened in Steam',
  linkTitle: 'Install from Thunderstore', linkChecking: 'Checking package in Gale…', linkProfile: 'Install to profile', linkInstall: 'Install mod', linkInstalling: 'Installing…',
  linkDeps: 'Gale will install dependencies. Game: {game}.', linkQueued: 'Link sent to Steam. Choose a profile to install.', linkOpenPackage: 'Open a package page on Thunderstore.',
  settingsTitle: 'Plugin settings', settingsIntro: 'Mods in Steam. Profiles, downloads and configs use your existing Gale data.',
  connection: 'Connection', headlessGale: 'Headless Gale', headlessHint: 'Starts and stops with the plugin', noConnection: 'Not connected',
  galePath: 'Path to headless Gale build', galePathPlaceholder: 'Leave empty to use the build inside the plugin', saveRestart: 'Save and restart',
  galePathHint: 'The regular Gale build has no bridge. Use the build from this repository; it shares existing Gale data.',
  dataDir: 'Gale data folder', dataDirHint: 'Shared database and profiles. Move files in Gale.', galeGames: 'Gale games', galeGamesHint: 'The Mods tab appears in properties of games with a matching Steam AppID.',
  behavior: 'Gale behavior', fetchAuto: 'Fetch catalog automatically', fetchAutoHint: 'Load the mod list when a game is selected',
  pullBeforeLaunch: 'Pull synced profile before launch', pullBeforeLaunchHint: 'Uses Gale’s pull-before-launch setting',
  skipBackendConfirm: 'Skip source-change confirmation', skipBackendConfirmHint: 'Thunderstore / Hexium — shared Gale setting',
  prefsLoading: 'Settings appear after connecting to Gale.', downloads: 'Downloads', downloadCache: 'Download cache', downloadCacheHint: 'Remove unused files only. Installed mods stay.', clearCache: 'Clear cache', cacheCleared: 'Freed {size}',
  settingsBottom: 'Do not run desktop Gale at the same time as GaleX.', checkConnection: 'Check connection', savedInGale: 'Saved in Gale', pathSaved: 'Path saved. Restart requested.',
  backendMissing: 'Gale backend is not connected. Reload the GaleX plugin.', bridgeNoReply: 'Gale bridge did not reply', invalidBrowserUrl: 'Invalid browser address',
  millenniumMissing: 'Millennium API is unavailable', bridgeStarting: 'Headless Gale is starting. If it does not finish, check the GaleX build path and close desktop Gale.', bridgeUnavailable: 'Cannot reach headless Gale', invalidGaleResponse: 'Invalid Gale response ({status})', invalidRpcJson: 'Invalid GaleX JSON reply from Millennium', invalidRpcEnvelope: 'Invalid GaleX reply from Millennium', incompatibleBridge: 'Incompatible Gale bridge version', crashTitle: 'Could not display this section', crashBody: 'Try opening the section again. If an operation was already running, check the list before retrying.', missingBuild: 'Headless Gale build not found. Build it with scripts/build-gale, or set the path in GaleX settings.', millenniumPid: 'Could not identify the Millennium process', launchFailed: 'Could not start headless Gale; see {path}', invalidCommand: 'Invalid command', noGame: 'No game selected', invalidContext: 'Invalid context', invalidLink: 'Invalid link', onlyThunderstore: 'Only Thunderstore install links are supported', tooManyLinks: 'Too many pending links', invalidPath: 'Invalid path', saveSettingsFailed: 'Could not save settings', galeFinishing: 'Gale is still finishing installs. Try restarting later.',
  fileTooLarge: 'Maximum file size is 15 MiB', fileReadError: 'Could not read file', clipboardError: 'Select the code and copy it manually',
  demoConfig: 'The config editor is the upstream Gale UI and opens in Steam.', demoUpdate: 'Demo: updates installed', demoLaunch: 'Game launch is unavailable in the browser demo.',
  bytesGb: '{value} GB', bytesMb: '{value} MB', bytesKb: '{value} KB',
};
const ru: typeof en = {
  mods: 'Моды', workshop: 'Мастерская сообщества', connected: 'Gale подключён', demo: 'демо',
  openThunderstore: 'Открыть Thunderstore', advanced: 'Расширенные настройки', refresh: 'Обновить список',
  profile: 'Профиль', createProfile: 'Создать профиль', renameProfile: 'Переименовать', duplicateProfile: 'Дублировать', deleteProfile: 'Удалить профиль',
  import: 'Импорт', export: 'Экспорт', config: 'Конфиг', searchMods: 'Поиск по названию или автору', clearSearch: 'Очистить поиск',
  filter: 'Фильтр', sortBy: 'Сортировка', ascending: 'По возрастанию', descending: 'По убыванию', categories: 'Категории', allCategories: 'Все категории',
  all: 'Все моды', enabled: 'Включённые', disabled: 'Отключённые', updates: 'Обновления',
  byName: 'По названию', byAuthor: 'По автору', byInstallDate: 'По дате установки', bySize: 'По размеру', byDownloads: 'По загрузкам',
  modCount: '{count} модов', enabledCount: '{count} включено', updateAll: 'Обновить все ({count})', loading: 'Загрузка модов…', noMods: 'Моды не найдены',
  dependsOn: 'Зависит от', tags: 'Теги', local: 'Локальный', update: 'Обновить', versions: 'Версии', remove: 'Удалить', openConfig: 'Изменить конфиг',
  cancel: 'Отмена', confirm: 'Подтвердить', close: 'Закрыть', done: 'Готово', retry: 'Повторить', working: 'Выполняется…', save: 'Сохранить',
  profileSaved: 'Профиль сохранён', stateChanged: 'Состояние модов изменено', modRemoved: 'Мод удалён',
  disableMod: 'Отключить {name}?', disableDependants: 'От этого мода зависят другие включённые моды. Они тоже могут перестать работать.',
  removeMod: 'Удалить {name}?', removeDependants: 'От этого мода зависят другие моды. Удалить их вместе?',
  deleteProfileTitle: 'Удалить профиль', deleteProfileBody: 'Профиль «{name}» и его моды будут удалены. Это действие нельзя отменить.',
  createProfileTitle: 'Создать профиль', renameProfileTitle: 'Переименовать профиль', duplicateProfileTitle: 'Дублировать профиль', profileName: 'Название профиля',
  importTitle: 'Импорт профиля', importPreview: 'Проверьте профиль', importCode: 'Код профиля', importCodePlaceholder: 'Вставьте код экспорта Gale / r2modman',
  importFile: 'Выбрать файл .r2z', importR2: 'r2modman / TMM', importLocal: 'Локальный мод', importLocalFile: 'Выбрать .zip мода',
  r2Path: 'Папка данных r2modman', r2Load: 'Найти профили', r2Profiles: 'Профили для импорта', importAllFiles: 'Импортировать все файлы (только доверенные профили)', mergeProfiles: 'Объединить с существующим профилем',
  overwriteProfile: 'Перезаписать существующий', newProfile: 'Создать новый', continue: 'Продолжить', installProfile: 'Установить профиль', importing: 'Импорт…',
  missingMods: 'Не найдены: {mods}. Они будут пропущены.', modsToInstall: '{count} модов к установке',
  exportTitle: 'Экспорт профиля', exportIntro: 'Поделитесь кодом, чтобы другой пользователь установил этот профиль.', copyCode: 'Скопировать код', codeCopied: 'Код скопирован',
  exportFile: 'Скачать .r2z', exportFiles: 'Включаемые файлы конфигов', exportFilesHint: 'Снимите отметку, чтобы исключить файл из кодов и архивов.', totalSize: 'Общий размер: {size}',
  copyDependencies: 'Скопировать строки зависимостей', dependenciesCopied: 'Строки зависимостей скопированы', copyDebug: 'Скопировать отладочную информацию', debugCopied: 'Отладочная информация скопирована',
  exportTooLarge: 'Профиль слишком большой для кода. Исключите файлы ниже или скачайте архив .r2z.',
  versionTitle: 'Версия · {name}', currentVersion: 'Текущая версия: {version}', installed: 'установлена', versionQueued: 'Смена версии завершена',
  updateQueued: 'Обновления завершены', configOpened: 'Редактор конфигов открыт в Steam',
  linkTitle: 'Установка из Thunderstore', linkChecking: 'Проверяем пакет в Gale…', linkProfile: 'Профиль установки', linkInstall: 'Установить мод', linkInstalling: 'Установка…',
  linkDeps: 'Зависимости установит Gale. Игра: {game}.', linkQueued: 'Ссылка передана в Steam. Выберите профиль для установки.', linkOpenPackage: 'Откройте страницу пакета на Thunderstore.',
  settingsTitle: 'Настройки плагина', settingsIntro: 'Моды в Steam. Профили, загрузки и конфигурации — в вашем установленном Gale.',
  connection: 'Подключение', headlessGale: 'Headless Gale', headlessHint: 'Запускается и останавливается вместе с плагином', noConnection: 'Нет подключения',
  galePath: 'Путь к headless-сборке Gale', galePathPlaceholder: 'Оставьте пустым для сборки внутри плагина', saveRestart: 'Сохранить и перезапустить',
  galePathHint: 'Обычная сборка Gale не содержит мост. Используйте сборку из этого репозитория; она работает с существующими данными Gale.',
  dataDir: 'Папка данных Gale', dataDirHint: 'Общая база данных и профили. Перенос файлов выполняется в Gale.', galeGames: 'Игры Gale', galeGamesHint: 'Вкладка «Моды» появляется в свойствах игры с совпадающим Steam AppID.',
  behavior: 'Поведение Gale', fetchAuto: 'Загружать каталог автоматически', fetchAutoHint: 'Получать список модов при выборе игры',
  pullBeforeLaunch: 'Обновлять синхронизированный профиль перед запуском', pullBeforeLaunchHint: 'Использовать настройку pull before launch из Gale',
  skipBackendConfirm: 'Пропускать подтверждение смены источника', skipBackendConfirmHint: 'Thunderstore / Hexium — общая настройка Gale',
  prefsLoading: 'Настройки появятся после подключения к Gale.', downloads: 'Загрузки', downloadCache: 'Кэш загрузок', downloadCacheHint: 'Удалить только неиспользуемые файлы. Установленные моды останутся.', clearCache: 'Очистить кэш', cacheCleared: 'Освобождено {size}',
  settingsBottom: 'Не запускайте настольный Gale одновременно с GaleX.', checkConnection: 'Проверить подключение', savedInGale: 'Сохранено в Gale', pathSaved: 'Путь сохранён. Перезапуск запрошен.',
  backendMissing: 'Backend Millennium не подключён. Перезагрузите плагин GaleX.', bridgeNoReply: 'Мост Gale не ответил', invalidBrowserUrl: 'Недопустимый адрес браузера',
  millenniumMissing: 'Millennium API недоступен', bridgeStarting: 'Headless Gale запускается. Если запуск не завершается, проверьте путь к сборке GaleX и закройте настольный Gale.', bridgeUnavailable: 'Нет связи с headless Gale', invalidGaleResponse: 'Некорректный ответ Gale ({status})', invalidRpcJson: 'Некорректный JSON-ответ GaleX от Millennium', invalidRpcEnvelope: 'Некорректный ответ GaleX от Millennium', incompatibleBridge: 'Мост несовместимой версии', crashTitle: 'Не удалось отобразить раздел', crashBody: 'Попробуйте открыть раздел ещё раз. Если операция уже выполнялась, проверьте список перед повтором.', missingBuild: 'Не найдена headless-сборка Gale. Соберите её scripts/build-gale или укажите путь в настройках GaleX.', millenniumPid: 'Не удалось определить процесс Millennium', launchFailed: 'Не удалось запустить headless Gale; см. {path}', invalidCommand: 'Некорректная команда', noGame: 'Не выбрана игра', invalidContext: 'Некорректный контекст', invalidLink: 'Некорректная ссылка', onlyThunderstore: 'Поддерживаются только ссылки установки Thunderstore', tooManyLinks: 'Слишком много ожидающих ссылок', invalidPath: 'Некорректный путь', saveSettingsFailed: 'Не удалось сохранить настройки', galeFinishing: 'Gale ещё завершает установки. Повторите перезапуск позже.',
  fileTooLarge: 'Максимальный размер файла — 15 МиБ', fileReadError: 'Не удалось прочитать файл', clipboardError: 'Выделите код и скопируйте вручную',
  demoConfig: 'Редактор конфигов — интерфейс Gale; он открывается в Steam.', demoUpdate: 'Демо: обновления установлены', demoLaunch: 'Запуск игр недоступен в браузерном демо.',
  bytesGb: '{value} ГБ', bytesMb: '{value} МБ', bytesKb: '{value} КБ',
};
export type MessageKey = keyof typeof en;
const catalogs: Record<Locale, typeof en> = { en, ru };
export function t(key: MessageKey, vars?: Record<string, string | number>): string {
  let text = catalogs[locale][key] ?? en[key] ?? key;
  if (vars) for (const [name, value] of Object.entries(vars)) text = text.split(`{${name}}`).join(String(value));
  return text;
}
