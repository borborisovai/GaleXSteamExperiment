# GaleX — менеджер модов Thunderstore внутри Steam

GaleX встраивает управление модами в **свойства игры** в клиенте Steam: отдельная категория **«Моды»** рядом с
обычными разделами Steam, в стиле «Мастерской». Бэкенд — настоящее ядро [Gale](https://github.com/Kesomannen/gale),
фронтенд — плагин [Millennium](https://github.com/SteamClientHomebrew/Millennium).

```
Steam (CEF)
 └─ Millennium
     ├─ plugin/.millennium/Dist/index.js   React-интерфейс, вкладка «Моды», настройки
     ├─ plugin/.millennium/Dist/webkit.js  перехват ror2mm:// на Thunderstore
     └─ plugin/backend/main.lua            Lua-бэкенд: запуск Gale, IPC, очередь ссылок
             │  loopback HTTP + Bearer token, session-файл
             ▼
        headless Gale (патченный backend/gale/headless.rs)
             ├─ общая база/профили/настройки установленного Gale
             ├─ очередь установки, зависимости, обновления, конфиги, экспорт
             └─ Thunderstore
```

## Что умеет

- Получает от Gale список игр, доступных для моддинга, и показывает «Моды» только для игр из библиотеки Steam
  (по AppID окна свойств).
- Строка 1: **Открыть Thunderstore** (внутренний браузер Steam) и **Расширенные настройки**.
- Расширенные настройки: профиль + бургер управления профилями, **Импорт**, **Экспорт**, **Конфиг**
  (интерфейс конфигов Gale открывается во внутреннем браузере Steam).
- Строка 2: поиск, сортировка, фильтры; список модов с чекбоксом вкл/выкл и бургером действий
  (обновить, конфиг, версия, страница Thunderstore, удалить).
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
scripts/build-plugin.sh       # index.js + webkit.js + browser.css
scripts/build-gale.sh         # Linux: plugin/bin/gale
# Windows PowerShell:
# scripts/build-gale.ps1      # plugin/bin/gale.exe
scripts/install-plugin.sh     # копия в каталог плагинов Millennium; --dev для симлинка
```

1. Закройте настольный Gale: GaleX использует **те же** данные и профили и не запускается параллельно с ним.
2. Перезапустите Steam или перезагрузите плагины Millennium.
3. Откройте свойства установленной поддерживаемой игры → **Моды**.

Подробнее: [docs/INSTALL.md](docs/INSTALL.md).

## Структура

```
backend/prepare.py        pinned Gale + SHA-256, безопасная распаковка, anchor-патчи
backend/gale/             headless-адаптер, session lock, браузерный конфиг-UI, лицензия Gale
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

- В этой среде проверены: TypeScript, production-сборки app/plugin/webkit, jsdom-тесты демо/плагина/webkit,
  Lua-тест на заглушках, guard-тесты `prepare.py`.
- **Rust-сборка Gale здесь не выполнялась** (нет тулчейна). Реальные Steam/Millennium/Gale также не запускались.
- Вкладка «Моды» внедряется семантическим DOM/React-fiber адаптером; после обновлений Steam может потребоваться
  уточнение селекторов. Темы Steam наследуются через CSS-переменные, но визуальная приёмка с темами не выполнена.
- Перехват `ror2mm://` работает для кликов по ссылкам и `window.open` в изолированном мире Millennium;
  программные `location.assign/replace` из основного мира страницы и системный обработчик протокола не перехватываются.
- Обычный Gale и GaleX не должны работать одновременно: используется общий каталог данных и файловая блокировка.

## Лицензии

Исходники GaleX — MIT ([LICENSE](LICENSE)). Адаптер и собираемый бинарник Gale — GPL-3.0
([backend/gale/LICENSE.gale.md](backend/gale/LICENSE.gale.md), [NOTICE.md](NOTICE.md)).
Millennium — LGPL-2.1; код Millennium в репозиторий не копируется.
