# GaleX — менеджер модов Thunderstore прямо в Steam

**GaleX** — это связка из двух частей: бэкенд на ядре [Gale](https://github.com/Kesomannen/gale) (Rust) и
фронтенд-плагин для [Millennium](https://github.com/SteamClientHomebrew/Millennium), который встраивает полноценный
интерфейс управления модами в клиент Steam. Не нужно закрывать Steam, не нужно держать открытым отдельное окно
менеджера — установка, обновления, профили, конфиги BepInEx и запуск игры доступны из самого клиента.

```
┌──────────────────────────── Steam (CEF) ────────────────────────────┐
│  Millennium                                                        │
│   └── плагин GaleX   .millennium/Dist/index.js  (React + TS)       │
│         ↓ fetch / EventSource (SSE)                                 │
└─────────┼───────────────────────────────────────────────────────────┘
          │  http://127.0.0.1:7788/api/v1/…      (loopback, CORS)
┌─────────▼───────────────────────────────────────────────────────────┐
│  galexd — мост Gale (Rust, axum)                                    │
│   • профили, очередь установки, BepInEx          ← ядро Gale        │
│   • клиент Thunderstore (индекс, download)       ← эндпоинты Gale   │
│   • games.json (240 сообществ)                   ← данные Gale      │
└─────────┬───────────────────────────────────────────────────────────┘
          │  https://thunderstore.io/…
          ▼
     Thunderstore
```

## Возможности

| Раздел | Что умеет |
| --- | --- |
| **Installed** | Список модов с иконками, версиями, размером и датой установки; включение/выключение, массовые операции, фильтры (включённые, отключённые, с обновлениями, локальные, «требует внимания»), сортировки, компактный режим |
| **Browse** | Каталог Thunderstore: поиск, категории, сортировка (рейтинг/загрузки/обновления/новизна), пагинация, карточки пакетов, панель с README, списком версий и деревом зависимостей |
| **Updates** | Обновления по одному или «Update all», changelog, «закрепить» версию (ignore update) |
| **Profiles** | Создание, дублирование, переименование, удаление, активация; импорт/экспорт кода профиля |
| **Config** | Редактор `.cfg` BepInEx с типизированными контролами: переключатели, слайдеры, enum-списки, захват горячих клавиш; кнопка сброса к дефолту |
| **Activity** | Живой лог через SSE + прогресс очереди установки с возможностью отмены |
| **Settings** | Адрес демона, состояние моста, папка данных, аргументы запуска, избранное, кэш загрузок |

Плюс: командная палитра `Ctrl+K`, панель очереди установки в шапке, тосты, скелетоны, экран «бэкенд не запущен»
с готовыми командами, error boundary (интерфейс не «умирает» целиком при ошибке рендера).

В Steam плагин добавляет кнопку-пилюлю **Mods** и горячую клавишу `Ctrl+Shift+G`; интерфейс открывается поверх
клиента в аккуратном модальном окне и использует собственный React Steam (`window.SP_REACT`), поэтому вторая копия
реконсилятора в клиент не попадает (бандл ~190 КБ, 41 КБ gzip).

## Быстрый старт

### 1. Посмотреть интерфейс в браузере (без Rust и без Steam)

```bash
node devserver/src/server.js --port 7788     # фикстурный бэкенд с демо-данными
cd frontend && npm install && npx vite       # http://localhost:5173
```

Vite проксирует `/api` на `127.0.0.1:7788`, поэтому интерфейс полностью живой: установка мод-пакетов, прогресс,
переключение профилей, правка конфигов.

### 2. Собрать и установить плагин в Millennium

```bash
scripts/build-plugin.sh          # → plugin/.millennium/Dist/index.js
scripts/install-plugin.sh        # копирует плагин в ~/.local/share/millennium/plugins/GaleX
# или для разработки: scripts/install-plugin.sh --dev   (симлинк)
```

Перезапустите Steam (или перезагрузите плагины в Millennium) и нажмите `Ctrl+Shift+G`.

### 3. Собрать и запустить мост Gale

```bash
cargo build --release --manifest-path backend/Cargo.toml -p galexd
./backend/target/release/galexd --port 7788
# Linux: скрипт соберёт и зарегистрирует systemd-юнит
scripts/install-daemon.sh
```

Проверка: `curl -s http://127.0.0.1:7788/api/v1/health`.

## Структура репозитория

```
backend/                 Rust-демон galexd (мост Gale)
  crates/galexd/src/
    main.rs              точка входа, роутер, состояние
    routes.rs            все HTTP-эндпоинты
    state.rs             профили, моды, переключение через .old
    install.rs           скачивание, распаковка, зависимости, очередь
    store.rs             клиент Thunderstore (индекс + download)
    config.rs            парсер/писатель BepInEx .cfg
    games.rs             games.json + поиск библиотек Steam
    model.rs             DTO, совпадающие с фронтендом 1:1
  assets/games.json      данные сообществ из Gale
frontend/                исходники интерфейса (React + TS + Vite)
  src/views/             экраны: Installed, Browse, Updates, Profiles, Config, Activity, Settings
  src/components/        UI-примитивы, палитра, drawers, тосты
  src/plugin/            шимы для Steam (SP_REACT, JSX, ReactDOM) + bootstrap плагина
  src/lib/               API-клиент, SSE, стор, actions, типы
plugin/                  готовый пакет плагина Millennium
  plugin.json            манифест
  .millennium/Dist/      собранный бандл
devserver/               фикстурный бэкенд (Node, без зависимостей)
docs/                    архитектура, API, установка, разработка
scripts/                 сборка/установка/дев-цикл
```

## Документация

* [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — как устроена интеграция со Steam, почему SSE, формат профилей.
* [docs/HTTP-API.md](docs/HTTP-API.md) — контракт `galexd` (все эндпоинты и типы).
* [docs/INSTALL.md](docs/INSTALL.md) — установка на Linux и Windows, автозапуск, диагностика.
* [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) — дев-цикл, сборки, как добавить эндпоинт.

## Статус и ограничения

* Интерфейс собран и проверен на фикстурном бэкенде тремя headless-тестами (`npm run smoke`, `smoke:interact`,
  `smoke:plugin`): рендер всех экранов, установка пакета с реальным `POST` и обновлением списка по SSE,
  тумблер модов, конфиги, палитра, а также загрузка бандла плагина так, как это делает Steam
  (`window.SP_REACT`, `Ctrl+Shift+G`, пилюля **Mods**). В реальном клиенте Steam глазами пока не проверялось.
* Rust-демон `galexd` написан целиком, но в песочнице разработки не было тулчейна Rust: `cargo build` нужно
  выполнить у себя. Синтаксис проверен парсером, типы — нет.
* Демон слушает только loopback. CORS открыт (`*`), потому что UI живёт на origin `steamloopback.host`;
  не публикуйте порт наружу.
* Синхронизация профилей Gale (облако) и Hexium-бэкенд пока не подключены — интерфейс к ним готов, API нет.

## Лицензии

Код GaleX — MIT (см. [LICENSE](LICENSE)). `backend/` использует данные и подходы Gale (GPL-3.0, © Kesomannen),
подробности в [NOTICE.md](NOTICE.md). Millennium распространяется под LGPL-2.1.
