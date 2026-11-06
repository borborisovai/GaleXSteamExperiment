# Плагин GaleX для Millennium

```
plugin/
  plugin.json                 useBackend: true, backendType: lua
  backend/main.lua            запуск headless Gale, IPC, ссылки, настройки
  .millennium/Dist/index.js   React-фронтенд (собирается scripts/build-plugin.sh)
  .millennium/Dist/webkit.js  перехват ror2mm на Thunderstore
  .millennium/Dist/browser.css no-op URL marker для допуска webkit
  bin/gale(.exe)              headless Gale (собирается scripts/build-gale.*, в git не хранится)
  runtime/                    session-файлы и лог (создаётся при запуске, в git не хранится)
```

Плагин не содержит фикстур и не подключается к демо-бэкенду. Если `bin/gale` отсутствует, укажите путь к
собранной headless-сборке в настройках GaleX. Обычный настольный Gale нужно закрыть: данные общие.

Сборка: `scripts/build-plugin.sh` и `scripts/build-gale.sh`/`.ps1`. Установка: `scripts/install-plugin.sh`.

Lua-бэкенд использует встроенный модуль Millennium `json` (vendored lua-cjson), а не системный `cjson`.
Ответы IPC возвращаются JSON-строками, чтобы пустые массивы не превращались в `{}` при конвертации Lua-таблиц;
frontend учитывает дополнительную JSON-обёртку `callServerMethod` в Millennium 3.6.x.

`index.js` запускается при загрузке module script и повторно не монтируется при вызове `default()`
compiler-wrapper. После регистрации настроек он отправляет backend-уведомление о загрузке frontend.
Для диагностики ищите в логе Steam `GaleX 0.2.1: frontend loaded` и `headless snapshot received`.
