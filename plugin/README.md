# Плагин GaleX для Millennium

```
plugin/
  plugin.json              манифест (name, common_name, version, useBackend: false)
  .millennium/Dist/index.js  собранный ESM-бандл (React берётся из Steam)
```

Установка: `scripts/install-plugin.sh` (копирование) или `scripts/install-plugin.sh --dev` (симлинк для разработки).

После установки:

* пилюля **Mods** в правом нижнем углу клиента открывает менеджер;
* `Ctrl+Shift+G` — открыть/закрыть;
* `Esc` — закрыть;
* `window.GaleX.open() / close() / toggle()` — доступно из консоли CEF и другим плагинам.

Как Millennium загружает плагин: `import('<plugins>/GaleX/.millennium/Dist/index.js')` — обычный импорт
модуля ради побочного эффекта, поэтому точка входа сама монтирует React-дерево в `#galex-steam-root`
(повторный импорт безопасен: хост уже существует — выходим). React, ReactDOM и JSX-фабрика берутся из
`window.SP_REACT`, `window.SP_REACTDOM` и `window.SP_JSX_FACTORY`, поэтому второй копии React в клиенте
не появляется.

Плагин не содержит своего бэкенда (`useBackend: false`): вся работа с файлами и сетью — в демоне `galexd`,
к которому интерфейс обращается по `http://127.0.0.1:7788` (адрес меняется в Settings).
