# Архитектура GaleX

## Компоненты

| Компонент | Где исполняется | Ответственность |
| --- | --- | --- |
| `plugin/.millennium/Dist/index.js` | CEF Steam, контекст клиента | Вкладка «Моды» в свойствах игры, настройки плагина, установщик ссылок |
| `plugin/.millennium/Dist/webkit.js` | Изолированный мир внутреннего браузера Steam на Thunderstore | Перехват `ror2mm://`, передача ссылки в Lua |
| `plugin/backend/main.lua` | LuaJIT-бэкенд Millennium | Неблокирующий запуск headless Gale, session-файл, HTTP IPC, очередь ссылок |
| `backend/gale/headless.rs` | Патченный Gale (Rust/Tauri) | RPC поверх команд Gale, браузерные билеты, конфиг-UI, экспорт, watchdog |
| Gale data dir | Файловая система пользователя | SQLite, профили, настройки, кэш — **общие с установленным Gale** |

## Жизненный цикл

1. Millennium загружает `main.lua`, вызывает `M.on_load()`.
2. Lua определяет PID текущего процесса Steam через LuaJIT FFI, создаёт приватный session-файл и токен,
   запускает `plugin/bin/gale` (`nohup` / `start /B`) и сразу вызывает `millennium.ready()`.
3. Gale скрывает окно, берёт файловую блокировку сессии, инициализирует обычное состояние Gale, поднимает
   loopback HTTP-сервер на случайном порту и записывает `{pid,port,token,bridgeVersion:2}`.
4. Millennium добавляет `.millennium/Dist/index.js` как `<script type="module">`. Loose-file загрузчик 3.6.x
   **не вызывает** `default()` сам; поэтому bundle запускается при загрузке модуля, кэширует promise и остаётся
   совместимым с compiler-wrapper, который тоже вызывает `default()`. После регистрации настроек отправляется
   `MILLENNIUM_BACKEND_IPC.postMessage(1, {pluginName:'GaleX'})` → Lua `on_frontend_loaded()`.
5. Фронтенд опрашивает `snapshot` (3 с в видимом окне, 15 с в скрытом), получает игры Gale и сопоставляет
   `steamAppId` с окном свойств Steam. Ответ Lua — JSON-строка; FFI Millennium 3.6.x сериализует её ещё раз,
   поэтому `lib/ipc.ts` снимает до двух JSON-слоёв и проверяет envelope `{ok,…}`.
6. При выгрузке плагина Lua отправляет `/shutdown`; Gale ждёт пустую очередь установок, удаляет session-файл
   и выходит. Watchdog по родительскому PID очищает процесс после падения Steam.

## Данные и профили

Никакой второй базы или копии профилей нет. Используются команды Gale: `profile`, `install`, `update`,
`config`, `prefs`, `export`, `import`. Активный профиль выбирается по постоянному `id`, а не по индексу.
Перед каждой командой мост сериализуется `command_lock`, чтобы не переключить игру/профиль посреди операции.
Установки и обновления ставятся в очередь Gale с захваченным `profile_id` и не держат RPC-лок на время скачивания.

## Вкладка «Моды»

`frontend/src/steam/properties.ts` ищет диалог свойств по семантике (`role=dialog`, `DialogBody`, tablist,
названия разделов), причём названия берутся из `LocalizationManager` Steam с fallback-строками. Это покрывает
старое «Local Files»/«Локальные файлы» и актуальное «Installed Files»/«Установленные файлы», а также вкладки,
свёрстанные `div`-ами без ARIA-ролей. AppID определяется из React fiber / URL / атрибутов / ассетов / заголовка
окна и `appStore`; вкладка клонирует существующую нативную вкладку как «Моды». Нативные панели скрываются только
пока активна наша панель; при клике по родной вкладке и при выгрузке всё восстанавливается. Хардкод CSS-хэшей
Steam не используется. Адаптер работает и во вторичных CEF-окнах, а причины пропуска (`no-tablist`, `no-appid`,
`unsupported:<appid>`) пишутся в лог Steam через `frontend_log`.

## Стили

Все классы имеют префикс `gx-`, стили инжектируются в каждый документ отдельно. Цвета берутся из переменных
Steam/Millennium (`--gp*`, SystemColors/GlobalColors) с fallback. Нативные `DialogButton`, `Dropdown`, `Toggle`
используются, если Millennium их предоставляет; иначе — доступные HTML-контролы.

## Thunderstore и ror2mm

Lua регистрирует no-op `browser.css` с URL-regex `^https://thunderstore\.io/.*`, чтобы Millennium допустил
`webkit.js` на внешний домен. Перехватчик ловит клик по `a[href^="ror2mm://"]` и `window.open` в изолированном
мире, отправляет `queue_link`, показывает toast. Фронтенд Steam показывает подтверждение и выбор профиля,
затем `install_mod` через очередь Gale.

## Конфиги и экспорт во внутреннем браузере

`browser_url` создаёт одноразовый билет (TTL 60 с, максимум 32). `/open` ставит HttpOnly SameSite=Strict cookie
и редиректит на `/config` или `/export`. Конфиг-UI использует DTO Gale (`/api/config`), CSP self и проверку Origin.
Большой профиль экспортируется файлом `.r2z` через `/export`, а не base64 в IPC.

## Безопасность

- Сервер слушает только `127.0.0.1:0`; порт и токен узнаются из session-файла (Unix mode 0600, create_new).
- Все RPC требуют `Authorization: Bearer`; браузерные страницы — cookie + Origin для записи.
- Whitelist команд, лимит тела 24 МиБ, лимит импорта 15 МиБ, билеты одноразовые.
- Файловая блокировка `.gale-session.lock` не даёт двум GaleX/патченным Gale писать одни данные. Обычный
  upstream-Gale блокировку не берёт, поэтому его нужно закрывать вручную.

## Проверено и не проверено

Проверено в песочнице: TS/build, jsdom-тесты, Lua-заглушки, guard-тесты prepare. Не проверено: компиляция Rust,
реальный Steam/Millennium, темы, внутренний браузер, Windows-запуск. CI собирает Linux/Windows и гоняет
headless-smoke, но визуальная приёмка в Steam остаётся ручной.
