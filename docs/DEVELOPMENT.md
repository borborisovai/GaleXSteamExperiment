# Разработка

## Дев-цикл без Steam

```bash
scripts/dev.sh
# → фикстурный бэкенд на :7788, Vite на :5173, /api проксируется на бэкенд
```

Фикстурный бэкенд (`devserver/src/server.js`) реализует весь контракт из `docs/HTTP-API.md` на данных из
`devserver/src/data.js` (10 игр, 21 пакет, профили, конфиги, обновления). Он специально написан без зависимостей:
`node devserver/src/server.js --port 7788`.

Что полезно знать про фикстуры:

* установка идёт по-настоящему: задача в очереди, SSE-события каждые 620 мс, по завершении мод добавляется в
  профиль и попадает в список обновлений/конфигов;
* «переключить мод» меняет состояние в памяти (файлов нет) — этого достаточно, чтобы проверять UI;
* состояние не сохраняется между перезапусками бэкенда; для чистого демо просто перезапустите процесс.

## Сборки фронтенда

```bash
cd frontend
npm run typecheck      # tsc --noEmit
npm run build          # веб-приложение → frontend/dist
npm run build:plugin    # плагин → plugin/.millennium/Dist/index.js
```

Два режима отличаются только алиасами React (`vite.config.ts`): в плагине `react`, `react/jsx-runtime` и
`react-dom/client` указывают на шимы в `src/plugin/`, которые берут объекты из `window.SP_REACT` / `SP_REACTDOM`.
Поэтому:

* **нельзя** импортировать `react-dom` напрямую (только `createPortal` из шима);
* **нельзя** использовать API React 19, которых нет в React 18 (Steam может отдать 18.x);
* всё, что нужно в плагине, должно собираться в один файл — динамические импорты инлайнятся
  (`inlineDynamicImports`).

## Живая работа внутри Steam

```bash
scripts/build-plugin.sh
scripts/install-plugin.sh --dev    # симлинк, дальше достаточно пересобирать бандл
```

1. `Ctrl+Shift+G` открывает оверлей, `Esc` закрывает.
2. Консоль CEF: `~/.config/steam/steamui/devtools` или Millennium → Settings → Developer → DevTools.
3. Логи плагина пишутся с префиксом `[GaleX]`.

## Как добавить эндпоинт

1. `backend/crates/galexd/src/model.rs` — DTO (`#[serde(rename_all = "camelCase")]`).
2. `backend/crates/galexd/src/routes.rs` — обработчик `Result<Json<T>, ApiError>`.
3. `backend/crates/galexd/src/main.rs` — регистрация в роутере.
4. `frontend/src/lib/api.ts` — метод клиента.
5. `frontend/src/lib/types.ts` — тип.
6. `devserver/src/server.js` — фикстура (иначе превью развалится).
7. `docs/HTTP-API.md` — строка в таблице.

## Автотесты (headless)

Интерфейс можно прогнать без браузера: jsdom-харнесс монтирует настоящий `App` и разговаривает с фикстурным
бэкендом по HTTP и SSE (то есть проверяется весь путь «клик → запрос → событие → перерисовка»).

```bash
node devserver/src/server.js --port 7788 &     # нужен запущенный бэкенд

cd frontend
npm run smoke            # рендер оболочки и всех экранов
npm run smoke:interact   # установка пакета, тумблер мода, конфиг, палитра, профили
npm run smoke:plugin     # бандл плагина так, как его грузит Steam (SP_REACT, Ctrl+Shift+G)
GALEX_JSX_FACTORY=1 node scripts/plugin-smoke.mjs   # ветка с SP_JSX_FACTORY Millennium
```

Что именно проверяется: оболочка и 6 экранов рендерятся без падения error boundary; клик по карточке пакета
открывает панель; кнопка Install отправляет `POST /install` (202) и мод реально появляется в профиле;
событие `mods.changed` обновляет список без перезагрузки; тумблер мода сохраняется на бэкенде; палитра
открывается по `Ctrl+K`; бандл плагина создаёт `#galex-steam-root`, рисует пилюлю **Mods**, открывает окно по
`Ctrl+Shift+G` и закрывает по `Esc`.

## CI

`.github/workflows/ci.yml` на каждый push делает три вещи:

| Job | Что проверяет |
| --- | --- |
| `galexd (Rust)` | `cargo build --all-targets` (блокирующий), `cargo fmt --check` и `cargo clippy` — пока как advisory-warning |
| `galexd smoke` | собирает демон, поднимает его на временном каталоге и прогоняет `scripts/smoke-daemon.sh`: `/health`, 240 сообществ, регистрация игры, создание профиля, моды, конфиги, экспорт кода профиля, запуск, `state.json`, логи, доступность Thunderstore |
| `UI + plugin` | `npm ci`, `tsc`, веб- и плагинная сборки, три headless-теста, синтаксис фикстурного бэкенда |

Дымовой тест демона можно запускать локально:

```bash
scripts/smoke-daemon.sh               # debug-сборка, порт 7799
GALEX_PORT=7801 scripts/smoke-daemon.sh
```

## Проверки перед PR

```bash
cd frontend && npm run typecheck && npm run build && npm run build:plugin
npm run smoke && npm run smoke:interact && npm run smoke:plugin
cargo fmt --manifest-path backend/Cargo.toml
cargo clippy --manifest-path backend/Cargo.toml -- -D warnings
cargo test --manifest-path backend/Cargo.toml
node --check devserver/src/server.js
```

Ручной чек-лист UI (на фикстурах):

- [ ] выбор игры в шапке меняет профили и список модов;
- [ ] установка пакета: очередь в шапке, прогресс, событие в Activity, мод появился в Installed;
- [ ] переключение мода меняет счётчик «enabled» в сайдбаре;
- [ ] удаление мода с зависимыми показывает предупреждение;
- [ ] Updates → Update all прогоняет очередь и обнуляет счётчик;
- [ ] Config: изменение значения пишет «saved», `rel="noreferrer"` ссылки в README работают;
- [ ] профили: создание/дублирование/активация/экспорт-импорт;
- [ ] отключение демона → экран «bridge is not running» → «Try again» после запуска;
- [ ] `Ctrl+K` открывает палитру, стрелки/Enter работают.
