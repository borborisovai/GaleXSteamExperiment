# GaleX — менеджер модов Thunderstore внутри Steam

GaleX встраивает управление модами в **свойства игры** в клиенте Steam: отдельная категория **Mods / Моды** (язык следует Steam) рядом с
обычными разделами Steam, в стиле «Мастерской». Бэкенд — настоящее ядро [Gale](https://github.com/Kesomannen/gale),
фронтенд — плагин [Millennium](https://github.com/SteamClientHomebrew/Millennium).

```
Steam (CEF)
 └─ Millennium
     ├─ plugin/.millennium/Dist/index.js   React-интерфейс, вкладка Mods/Моды, настройки
     ├─ plugin/.millennium/Dist/webkit.js  перехват ror2mm:// на Thunderstore
     └─ plugin/backend/main.lua            Lua-бэкенд: запуск Gale, IPC, очередь ссылок
             │  loopback HTTP + Bearer token, session-файл
             ▼
        headless Gale (патченный backend/gale/headless.rs)
             ├─ общая база/профили/настройки установленного Gale
             ├─ очередь установки, зависимости, обновления, импорт/экспорт Gale
             ├─ upstream Gale config UI (Svelte) во внутреннем браузере Steam
             └─ Thunderstore
```

## Что умеет

- Получает от Gale список игр, доступных для моддинга, и показывает «Моды» только для игр из библиотеки Steam
  (по AppID окна свойств).
- Язык интерфейса берётся из Steam (`SteamClient.Settings.GetCurrentLanguage`), English по умолчанию, русский при русском Steam.
- Нативные кнопки/dropdown/checkbox Steam, минимум собственного CSS; контекстные меню заменены кнопками,
  категории выбираются dropdown, сортировка имеет явное направление, список модов скроллится.
- Профили: создание/переименование/дублирование/удаление, импорт кода/файла/r2modman, экспорт кода/файла `.r2z`,
  исключение файлов экспорта и копирование строк зависимостей — готовыми командами Gale.
- **Конфиг** открывает во внутреннем браузере Steam настоящий upstream-интерфейс конфигов Gale (Svelte),
  а не самодельную страницу; бэкенд скрыт за `steamloopback.host`.
- Ссылки `ror2mm://` с Thunderstore перехватываются и предлагаются к установке в выбранный профиль.
- Глобальные настройки Gale продублированы в настройках плагина Millennium.

## Быстрый просмотр без Steam и Rust

```bash
cd frontend
npm ci
npm run dev          # http://localhost:5173 — демо с данными в памяти
```

Демо не притворяется реальным Steam: оно показывает оболочку свойств игры и живой интерфейс на фикстурах.
В боевом плагине демо-данные не используются.

## Сборка и установка

Нужны: Node 22+, Python 3.9+, Rust ≥ 1.91, pnpm через corepack, зависимости Tauri v2 для вашей ОС.

```bash
scripts/build-plugin.sh       # index.js + webkit.js + browser.css + Gale config UI
scripts/build-gale.sh         # Linux: plugin/bin/gale
# Windows PowerShell:
# scripts/build-gale.ps1      # plugin/bin/gale.exe
scripts/install-plugin.sh     # копия в каталог плагинов Millennium; --dev для симлинка
```

1. Закройте настольный Gale: GaleX использует **те же** данные и профили и не запускается параллельно с ним.
2. Перезапустите Steam или перезагрузите плагины Millennium.
3. Откройте свойства установленной поддерживаемой игры → **Mods / Моды**.

Подробнее: [docs/INSTALL.md](docs/INSTALL.md).

## Структура

```
backend/prepare.py        pinned Gale + SHA-256, безопасная распаковка, anchor-патчи
backend/gale/             headless-адаптер, session lock, собранный Gale config UI, лицензия Gale
frontend/src/gale-upstream/  upstream Svelte-компоненты конфигов/типы/сообщения Gale (GPL-3.0)
frontend/config/          сборка конфиг-UI для внутреннего браузера Steam
plugin/backend/main.lua   Lua-бэкенд Millennium
plugin/.millennium/Dist/  собранные index.js / webkit.js / browser.css
frontend/src/steam/       вкладка «Моды», адаптер свойств, каталог, настройки, установщик ссылок
frontend/src/plugin/      bootstrap, React-шимы Steam, webkit-перехватчик
frontend/src/demo/        браузерное демо
scripts/                  сборка, установка, smoke-тесты
docs/                     архитектура, API моста, установка, разработка
```

## Проверки

```bash
cd frontend && npm ci && npm run typecheck && npm test && npm run build
cd backend && python3 -m unittest test_prepare -v
luajit scripts/test-backend.lua                 # логика Lua-бэкенда на заглушках
python3 scripts/smoke-headless.py               # после сборки Gale; Linux: xvfb-run -a …
```

## Статус и ограничения

- Локально проверяются TypeScript, production-сборки app/plugin/webkit/config, jsdom-тесты демо/плагина/webkit/config,
  Lua-тест на заглушках и guard-тесты `prepare.py`. CI дополнительно собирает headless Gale и прогоняет
  headless-smoke на Linux/Windows; в этой среде Rust-тулчейна нет.
- Контракт загрузки frontend сверен с исходниками Millennium **v3.6.1**: module script сам запускает плагин,
  отправляет handshake и декодирует IPC. Базовая вкладка подтверждена в реальном Steam на 0.2.2; изменения 0.3.6 требуют повторной приёмки.
- Вкладка «Моды» внедряется семантическим DOM/React-fiber адаптером; после обновлений Steam может потребоваться
  уточнение селекторов. Используются компоненты/иконки Steam через Millennium, нативный выбор `.r2z`,
   CDN-иконки модов, сброс выделения предыдущей вкладки, офлайн-иконки конфига и виртуальная карточка
   загрузки Gale в панели загрузок Steam с правдивыми графиками сети/диска; профиль/импорт-экспорт/конфиг
   разнесены по отдельным строкам, тулбар выполнен в две колонки Workshop и не выводит кнопку за экран,
   лишняя надпись подключения убрана. Оформление Mods приближено к Steam Workshop по приложенным
   `sp.css`/`library.css`/`workshop.html`. Начиная с 0.3.6 вкладка Mods переиспользует живой нативный
   `DialogContent` страницы свойств (React монтируется в нативный `DialogBody`, заголовок берётся из
   нативного `DialogHeader`, нативные дети скрываются и восстанавливаются при возврате на родную вкладку);
   собственная sibling-панель остаётся только fallback для DOM без `DialogContent`. Визуальная приёмка
   в реальном Steam для 0.3.6 не выполнена.
- Перехват `ror2mm://` работает для кликов по ссылкам и `window.open` в изолированном мире Millennium;
  программные `location.assign/replace` из основного мира страницы и системный обработчик протокола не перехватываются.
- Обычный Gale и GaleX не должны работать одновременно: используется общий каталог данных и файловая блокировка.

## Лицензии

Исходники GaleX — MIT ([LICENSE](LICENSE)). Адаптер и собираемый бинарник Gale — GPL-3.0
([backend/gale/LICENSE.gale.md](backend/gale/LICENSE.gale.md), [NOTICE.md](NOTICE.md)).
Millennium — LGPL-2.1; код Millennium в репозиторий не копируется.
