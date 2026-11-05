# HTTP API моста `galexd`

Базовый адрес: `http://127.0.0.1:7788/api/v1`
Формат: JSON, `camelCase`. Ошибки — `{ "error": "текст" }` с соответствующим HTTP-статусом.
Поток событий — `text/event-stream` на `/events`.

Типы полностью описаны в `frontend/src/lib/types.ts`; DTO демона — в `backend/crates/galexd/src/model.rs`.
Этот документ — третья сторона контракта, менять нужно все три одновременно.

## Служебные

| Метод | Путь | Описание |
| --- | --- | --- |
| GET | `/health` | `{ ok, version, core, dataDir, platform, uptimeSec, steamDetected }` |
| GET | `/events` | SSE-поток `GaleEvent` |
| GET | `/logs?limit=200` | последние записи лога |
| POST | `/cache/clear` | сброс кэша индексов Thunderstore |

Пример события:

```
data: {"type":"install.progress","task":{"id":"…","profileId":1,"status":"downloading","progress":0.42,"step":"Installing into “Modded co-op”","total":3,"completed":1,"current":"Evaisa-LethalLib v0.21.2","startedAt":"…"}}
```

## Игры и профили

| Метод | Путь | Тело / параметры | Ответ |
| --- | --- | --- | --- |
| GET | `/games` | — | `Game[]` (240 сообществ, `managed` = зарегистрировано) |
| POST | `/games/:slug/manage` | `{ path?: string }` | `Game` (создаёт профиль `Default`) |
| PATCH | `/games/:slug/favorite` | `{ favorite: boolean }` | `204` |
| GET | `/games/:slug/profiles` | — | `Profile[]` |
| POST | `/games/:slug/profiles` | `{ name?: string, duplicateOf?: number }` | `201 Profile` |
| PATCH | `/profiles/:id` | `{ name?, customArgs? }` | `Profile` |
| DELETE | `/profiles/:id` | — | `204` |
| POST | `/profiles/:id/activate` | — | `Profile` |
| GET | `/profiles/:id/export` | — | `{ code: string, fileCount: number }` |
| POST | `/import` | `{ gameSlug: string, code: string }` | `201 { profile, installed, skipped }` |

`Profile.code` — base64 от `{ name, gameSlug, mods: ["Owner-Name-1.2.3", …] }`; такой же формат принимает импорт.

## Моды

| Метод | Путь | Тело | Ответ |
| --- | --- | --- | --- |
| GET | `/profiles/:id/mods` | — | `Mod[]` |
| PATCH | `/profiles/:id/mods/:uuid` | `{ enabled: boolean }` | `Mod` |
| DELETE | `/profiles/:id/mods/:uuid?force=true` | — | `204` |
| PATCH | `/profiles/:id/mods/:uuid/version` | `{ versionId: string }` | `202 InstallTask` |
| PATCH | `/profiles/:id/mods/:uuid/ignore-update` | `{ ignore: boolean }` | `Mod` |

`Mod` содержит вычисленные на бэкенде поля: `update` (последняя версия, если новее установленной),
`ignoredUpdate`, `missingDependencies` (version-id отсутствующих зависимостей), `dependantUuids` (кто зависит
от этого мода — нужно для защиты от удаления).

## Установка и обновления

| Метод | Путь | Тело | Ответ |
| --- | --- | --- | --- |
| POST | `/profiles/:id/install` | `{ versionIds: string[] }` | `202 InstallTask` |
| POST | `/profiles/:id/update` | `{ uuids?: string[] }` | `202 InstallTask` |
| GET | `/installs?gameSlug=` | — | `InstallTask[]` |
| POST | `/installs/:id/cancel` | — | `204` |

`InstallTask.status`: `queued` → `downloading` → `extracting` → `done` | `failed` | `cancelled`.
Зависимости резолвит бэкенд: клиент передаёт только выбранные пакеты.

## Конфигурация BepInEx

| Метод | Путь | Тело | Ответ |
| --- | --- | --- | --- |
| GET | `/profiles/:id/config` | — | `ConfigFile[]` |
| PATCH | `/profiles/:id/config` | `{ file, section, key, value }` | `ConfigFile` |
| POST | `/profiles/:id/config/reset` | `{ file, section, key }` | `ConfigFile` |

`ConfigEntry.type` ∈ `bool | int | float | string | enum | key | raw`; для `enum` приходит `choices`,
для чисел — `min`/`max` (из подсказок BepInEx), `defaultValue` и `modified` считаются на бэкенде.

## Thunderstore (прокси с кэшем)

| Метод | Путь | Параметры | Ответ |
| --- | --- | --- | --- |
| GET | `/store/:slug/packages` | `search, category, sort (rating\|downloads\|updated\|newest\|name), deprecated=1, page, pageSize` | `BrowseResult` |
| GET | `/store/:slug/categories` | — | `Category[]` |
| GET | `/store/packages/:owner/:name` | — | `PackageDetail` |

`PackageDetail.dependencyPreview` — плоский список зависимостей (включая транзитивные второго уровня) с флагом
`installed`, чтобы интерфейс показал, что именно приедет вместе с пакетом.

## Запуск игры

| Метод | Путь | Тело | Ответ |
| --- | --- | --- | --- |
| POST | `/profiles/:id/launch` | `{ vanilla?: boolean }` | `{ ok: true, command: "steam -applaunch 1966720" }` |

Демон активирует профиль, собирает команду (`steam -applaunch <appid>` + `customArgs`, либо
`xdg-open steam://rungameid/<slug>` если appid неизвестен) и пытается её выполнить. В ответе всегда возвращается
строка команды — её можно запустить вручную, если Steam не подхватил запрос.

## Коды ошибок

| Статус | Когда |
| --- | --- |
| 400 | некорректное тело, битый профиль-код, пустой `versionIds` |
| 404 | неизвестная игра/профиль/мод/пакет |
| 409 | обновлять нечего |
| 500 | внутренняя ошибка (в лог демона пишется трейс) |
