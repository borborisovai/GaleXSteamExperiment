# API моста GaleX

Старого демона `galexd` и `/api/v1` больше нет. Контракт состоит из двух уровней.

## 1. Millennium IPC (фронтенд → Lua)

Вызов: `Millennium.callServerMethod('GaleX', method, { payload: JSON.stringify(args) })`.
Lua возвращает JSON-строку `{ ok: true, data? }` или `{ ok: false, error }`. Millennium 3.6.x в
`callServerMethod` делает `JSON.stringify(returnJson)`, поэтому браузер получает **две** JSON-обёртки:
сначала строку Lua, затем объект envelope. `frontend/src/lib/ipc.ts` снимает до двух строковых слоёв,
принимает уже декодированный объект и отвергает всё, что не является `{ok: boolean,…}`.
Строковый ответ Lua нужен, чтобы пустые массивы (`mods: []`, `pendingLinks: []`) не превращались в `{}`
при native Lua-table → JSON конвертации Millennium. Lua использует встроенный модуль Millennium
`json` (lua-cjson), а не системный `cjson`.

| Метод | Аргументы | Назначение |
| --- | --- | --- |
| `snapshot` | — | Игры Gale, активная игра, dataDir, installing, pendingLinks |
| `command` | `{ method, args }` | Whitelist-команда Gale; `args.slug` обязателен кроме `prefs/set_prefs/clear_download_cache` |
| `browser_url` | `{ slug, profileId, kind?: 'config'\|'export', lang? }` | Одноразовый URL `http://steamloopback.host:<port>/open?ticket=…` для внутреннего браузера |
| `queue_link` | `{ url, slug }` | Поставить `ror2mm://` в очередь установки |
| `dismiss_link` | `{ url }` | Убрать ссылку из очереди |
| `get_config` / `set_config` | — / `{ path }` | Путь к headless-сборке в настройках Millennium |
| `restart` | — | Перезапустить headless Gale после смены пути |
| `frontend_log` | `{ message }` | Диагностика frontend в лог Steam (обрезается до 500 символов, без токенов) |

## 2. Loopback HTTP (Lua → headless Gale)

Адрес и токен берутся из session-файла. Заголовки: `Authorization: Bearer <token>` и
`X-GaleX-Client: millennium-lua`. Без второго заголовка bearer-эндпоинты возвращают `403`, чтобы
браузер не мог использовать RPC даже при утечке токена.

| Метод | Путь | Тело / параметры | Ответ |
| --- | --- | --- | --- |
| POST | `/rpc` | `{ method, args }` | `{ data }` или `{ error }` |
| POST | `/browser-url` | `{ slug, profileId, kind?, lang? }` | `{ url }` с одноразовым билетом и `steamloopback.host` |
| GET | `/open` | `?ticket=…` | 302 + HttpOnly cookie → `/config` или `/export` |
| GET | `/config` | `?slug&profileId&lang` | HTML upstream Gale config UI; cookie, Host `steamloopback.host:<port>`, CSS inline |
| GET | `/config/app.js`, `/config/app.css` | — | Собранные Svelte/Tailwind ассеты конфигов |
| POST | `/api/command` | `?slug&profileId`; `{ method, args }` | `{ data }` или `{ error }`; cookie + Origin |
| GET | `/export` | `?slug&profileId` | `profile.r2z` |
| POST | `/shutdown` | — | Ждёт очередь, удаляет session, выходит |

### Команды `/rpc`

`snapshot`, `profiles`, `mods`, `prefs`, `set_prefs`, `create_profile`, `rename_profile`,
`duplicate_profile`, `delete_profile`, `activate_profile`, `toggle_mod`, `force_toggle_mods`,
`remove_mod`, `force_remove_mods`, `set_all_mods_state`, `install_mod`, `cancel_installs`,
`update_mods`, `ignore_package_updates`, `change_mod_version`, `export_code`, `read_profile_code`,
`read_profile_base64`, `read_profile_file`, `import_profile`, `import_local_mod`, `import_local_mod_base64`, `get_r2modman_info`,
`import_r2modman`, `list_export_files`,
`set_excluded_export_files`, `copy_dependency_strings`, `copy_debug_info`, `config`, `set_config_entry`,
`reset_config_entry`, `reset_config_file`, `open_config_file`, `delete_config_file`,
`launch`, `fetch_mods`, `clear_download_cache`, `resolve_link`.

Типы DTO совпадают с `frontend/src/lib/types.ts` и upstream Gale. Менять контракт нужно синхронно:
Lua IPC → Rust dispatch/whitelist → TS types → demo transport → тесты.

Браузерные маршруты (`/open`, `/config*`, `/api/command`, `/export`) требуют Host
`steamloopback.host:<port>` и отклоняют прокси-заголовки (`Via`, `Forwarded`, `X-Forwarded-*`,
`X-Real-IP`). Прямой доступ через `127.0.0.1` или `localhost` возвращает `403`. `/config` и
`/api/command`/`/export` дополнительно требуют cookie из одноразового билета; Origin должен совпадать с
`http://steamloopback.host:<port>`. Браузерный `/api/command` принимает только команды конфигов;
установки/запуски доступны только через Lua `/rpc`. CSS редактора встраивается в `index.html`, чтобы
перехват субресурсов Steam/Millennium не оставлял интерфейс без стилей.
