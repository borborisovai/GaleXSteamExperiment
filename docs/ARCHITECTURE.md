# Архитектура GaleX

## 1. Зачем три компонента

Steam не даёт плагину запускать процессы и работать с файловой системой: фронтенд плагина исполняется в CEF
(Chromium Embedded Framework) как обычный веб-код. Поэтому вся «тяжёлая» работа вынесена в отдельный локальный
демон, а плагин остаётся тонким клиентом.

| Компонент | Технологии | Ответственность |
| --- | --- | --- |
| **Плагин GaleX** | Millennium, React 18 (тот, что уже есть в Steam), TypeScript, Vite | Рендер интерфейса, навигация, ввод, отображение прогресса |
| **Мост `galexd`** | Rust, axum, tokio, reqwest, zip | Профили, скачивание, распаковка, зависимости, конфиги, запуск игры |
| **Thunderstore** | HTTP API v1 | Метаданные пакетов и архивы |

## 2. Почему Millennium, а не свой оверлей

Millennium — это загрузчик плагинов для Steam, который патчит CEF и публикует в `window` уже загруженный клиентом
React (`SP_REACT`), ReactDOM (`SP_REACTDOM`) и JSX-фабрику. Плагин получает:

* ES-модуль `plugin/.millennium/Dist/index.js`, который Millennium импортирует в контексте клиента;
* `Millennium.AddWindowCreateHook` — колбэк, вызываемый при создании нового окна клиента (в т.ч. при переключении
  между обычным режимом и Big Picture), что позволяет возвращать точку входа на место;
* общий React, за счёт чего бандл остаётся маленьким и не ломает порядок хуков Steam.

Фронтенд собирается в двух режимах (см. `frontend/vite.config.ts`):

* `app` — обычное веб-приложение для разработки и просмотра в браузере, React из `node_modules`;
* `plugin` — `react`, `react/jsx-runtime` и `react-dom/client` подменяются на шимы из `src/plugin/`, которые читают
  `window.SP_REACT` / `SP_REACTDOM`. Всё остальное (наш код + CSS строкой) попадает в один ESM-файл.

Стили подключаются как `?inline` и инжектируются в `<head>` тегом `<style id="galex-styles">` — так мы не зависим
от того, поддерживает ли CEF внешние CSS-файлы, и не рискуем конфликтом с CSS Steam: все селекторы начинаются
с `gx-`.

## 3. Транспорт: HTTP + SSE

* **HTTP/JSON** — запросы-команды (установить, переключить, сохранить значение конфига).
* **SSE (`/api/v1/events`)** — поток событий от демона: прогресс установки, изменения профилей, лог.

SSE выбран вместо WebSocket осознанно: он односторонний (нам достаточно), переподключается браузером сам,
не требует рукопожатия и одинаково просто реализуется в axum (`Sse<Stream<…>>`) и в фикстурном Node-бэкенде.
Клиент дополнительно делает exponential backoff (`src/lib/events.ts`) и опрашивает `/health` каждые 15 секунд,
чтобы отличить «демон упал» от «сеть моргнула».

Типы событий: `daemon.hello`, `install.queued`, `install.progress`, `install.settled`, `mods.changed`,
`profiles.changed`, `log`.

## 4. Модель данных

Состояние демона — один JSON-файл `state.json` в data-каталоге (`~/.local/share/GaleX` по умолчанию):

```json
{
  "activeGame": "lethal-company",
  "games": {
    "lethal-company": {
      "slug": "lethal-company",
      "path": "/home/user/.local/share/Steam/steamapps/common/Lethal Company",
      "favorite": true,
      "activeProfileId": 1,
      "nextProfileId": 4,
      "profiles": [
        {
          "id": 1,
          "gameSlug": "lethal-company",
          "name": "Modded co-op",
          "path": "/home/user/.local/share/GaleX/profiles/lethal-company/Modded co-op-1",
          "customArgs": "",
          "createdAt": "2026-09-02T18:11:04Z",
          "ignoredUpdates": ["AinaVT-LethalConfig"],
          "mods": [
            {
              "uuid": "3f7c1a9e-…",
              "enabled": true,
              "installTime": "2026-09-02T18:11:05Z",
              "fullName": "Evaisa-LethalLib",
              "version": "0.21.2",
              "files": ["BepInEx/plugins/LethalLib/LethalLib.dll"]
            }
          ]
        }
      ]
    }
  }
}
```

Формат намеренно близок к Gale: `ProfileMod` хранит `enabled`, `installTime` и идентификатор пакета `fullName`;
локальные моды лежат в отдельном варианте (`name` + `version` + `localPath`). Благодаря этому папка профиля
читается обоими менеджерами.

### Включение и выключение модов

Gale отключает мод, добавляя `.old` к каждому его файлу. Повторяем один в один: список установленных файлов
хранится в `files`, при выключении `X.dll` → `X.dll.old`, при включении — обратно. Плюс подхода: файлы остаются
на месте (быстрый тумблер), минус — при выключении важно не забыть, что часть файлов могла быть перезаписана
другим пакетом; поэтому при удалении мода файлы удаляются по списку, а при смене версии старый набор снимается.

## 5. Конвейер установки

```
POST /profiles/:id/install { versionIds: ["Owner-Name-1.2.3"] }
        │
        ├─ 1. индекс сообщества (кэш 15 мин, Arc<Vec<Listing>>)
        ├─ 2. resolve(): обход зависимостей по version_id, уже установленные пропускаются
        ├─ 3. задача в очередь + событие install.queued
        └─ 4. tokio::spawn(worker)
                 для каждого пакета:
                   download  https://thunderstore.io/package/download/{owner}/{name}/{version}
                   extract   (spawn_blocking) → профиль
                   запись ProfileMod + state.json
                   событие install.progress
                 финал: install.settled + mods.changed + profiles.changed
```

Распаковка (`install::extract_archive`) учитывает реалии Thunderstore:

1. если все файлы архива лежат внутри одной верхней папки (`BepInExPack_5.4.2100/…`), она срезается;
2. если у мода-лоадера BepInEx-раскладка (`BepInEx/`, `plugins/`, `patchers/`, `config/`), пути сохраняются;
   иначе файлы уходят в `BepInEx/plugins/`;
3. пути, выходящие за пределы профиля (`..`), отбрасываются;
4. список реально записанных файлов возвращается в `ProfileMod.files`.

## 6. Конфиги BepInEx

BepInEx пишет `.cfg` в почти-INI формате с комментариями-подсказками:

```ini
[Lighting]

## How thick the fog should be.
# Setting type: Single
# Default value: 0.35
FogDensity = 0.42
```

`backend/crates/galexd/src/config.rs` разбирает файл в список строк (`Raw` / `Section` / `Entry`), достаёт из
комментариев тип, дефолт и допустимые значения, а при сохранении меняет **только** нужную строку — остальной файл
остаётся байт-в-байт, включая комментарии мода. Фронтенд по полю `type` выбирает контрол: `bool` → переключатель,
`int`/`float` → число (+слайдер, если известны границы), `enum` → выпадающий список, `key` → захват клавиши.

## 7. Безопасность

* Демон слушает `127.0.0.1` по умолчанию; наружу ничего не публикуется.
* CORS открыт, потому что origin интерфейса — `steamloopback.host`; это осознанный компромисс для loopback-сервиса.
  Любое локальное приложение всё равно может обратиться к порту, поэтому демон не даёт доступа к произвольным путям:
  все файловые операции ограничены каталогом профиля и проверяются на выход за его пределы.
* Никаких токенов Thunderstore в первой версии не используется (нужны только для загрузки модпаков).

## 8. Что дальше

* Синхронизация профилей Gale (socket/account API) и бэкенд Hexium.
* Установка модпаков одним кликом (сейчас — через профиль-код).
* Быстрый доступ (Quick Access) в Big Picture: компонент для `Millennium.openQuickAccess`.
* Скриншоты и e2e-тесты в реальном клиенте Steam.
