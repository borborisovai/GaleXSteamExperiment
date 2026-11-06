# Разработка

## Демо без Steam

```bash
scripts/dev.sh           # или: cd frontend && npm ci && npm run dev
```

Демо использует `frontend/src/demo/transport.ts` (данные в памяти) и оболочку свойств игры. Боевой транспорт
демо не подключает: при отсутствии Lua-бэкенда интерфейс показывает ошибку.

## Сборки фронтенда

```bash
cd frontend
npm run typecheck
npm run build            # веб-демо → frontend/dist
npm run build:plugin     # plugin/.millennium/Dist/index.js + browser.css + backend/gale/config-ui
npm run build:webkit     # plugin/.millennium/Dist/webkit.js
npm test                 # demo transport + jsdom plugin + webkit + upstream config UI
```

Режимы Vite: `app`, `plugin`, `webkit`. В `plugin` React/ReactDOM алиасятся на шимы `window.SP_REACT`,
`SP_REACTDOM`, `SP_JSX_FACTORY`; всё инлайнится в один ESM. Millennium 3.6.x только добавляет module script,
поэтому `plugin/entry.ts` сам запускает bundle и кэширует startup для повторного `default()` из compiler-wrapper.
`build:config` собирает upstream Svelte-интерфейс конфигов Gale в `backend/gale/config-ui` (Rust встраивает его
через `include_str!`). `plugin-smoke.mjs` проверяет именно загрузку модуля без ручного bootstrap, двойную JSON-кодировку FFI,
handshake, настройки и вкладку во вторичных popup: классический ARIA/tablist, актуальный Steam с
`Installed Files`/`div`-вкладками и AppID из заголовка, русские названия разделов, отложенный `<body>` и cleanup. `webkit` не содержит React.
`config-smoke.mjs` монтирует собранный Svelte bundle в jsdom с русским `lang` и mock `/api/command`.
`browser.css` — no-op маркер допуска URL, копируется после сборки, чтобы `emptyOutDir` его не удалил.

## Mods и Workshop CSS

Панель `Mods` сравнивается с нативным Steam Workshop по приложенным `sp.css`, `library.css`, `mods.html` и
`workshop.html`. В `frontend/src/styles/steam.css` перенесены только scoped layout-метрики Workshop, а не весь
5.1 MB stylesheet и не хэшированные CSS-module классы: заголовок 22/700, двухколоночный тулбар, Field-строки
с padding 12px, фильтры с DialogInput, список с строками 80px и шагом 82px, иконки 48px, кнопки действий
36×36 без padding (как Unsubscribe), размер/индекс наследуют приглушённый цвет строки, скроллбар списка
повторяет нативные правила Steam (14px track, 10px thumb с 4px transparent border). Контролы остаются Steam/Millennium (`DialogButton`, `Dropdown`, `DialogCheckbox`,
`DialogInput`); цвета предпочитают Steam/theme variables и имеют fallback из Workshop-снимка.
`plugin-smoke.mjs` фиксирует эти метрики и три отдельные строки Profile / Import+Export / Config.
Демо объединяет `steam.css` и `demo.css` в один `#galex-styles`, чтобы оболочка демо не затирала правила Mods.

### Нативный DialogContent (0.3.6)

`frontend/src/steam/properties.ts` больше не прячет нативный `DialogContent _DialogLayout …` и не рисует
меню рядом: если в DOM есть живой `DialogContent` (`role=tabpanel`), адаптер **переиспользует его** как
panel Mods. React-root монтируется в `div.gx-adopted-mount` внутри нативного `DialogBody`, нативный
`DialogHeader` получает текст `t('mods')`, а нативные дети `DialogBody` скрываются (`display:none` +
`hidden`) **без удаления**, чтобы Steam React сохранил свои узлы. При возврате на нативную вкладку
`hideAdopted()` возвращает детей, текст заголовка, `aria-labelledby`/`display`/`hidden` оболочки и снимает
маркер `data-galex-properties`; mount удаляется. Паддинги/фон/скролл/переходы наследуются от нативной
цепочки `DialogContentTransition → DialogContent → InnerWidth → DialogBody`, поэтому в embedded-режиме
`.gx-mods--embedded{padding:0}` и свой `.gx-heading` не рендерится. Хэши CSS-модулей не хардкодятся:
оболочка ищется по стабильным токенам `DialogContent`/`DialogBody`/`DialogHeader`. Если Steam меняет
узел `DialogContent` при ре-рендере маршрута, `showAdopted()` пере-находит живую оболочку; все записи
guarded, чтобы не зациклить MutationObserver. Собственная `div.gx-injected-panel` с ручным сайзингом и
ResizeObserver остаётся **только fallback** для DOM без `DialogContent` (старые билды/semantic-моки).
Container-query порог снижен до 480px, потому что нативный `DialogContent_InnerWidth` ограничен 600px и
на реальной ширине ~588px тулбар должен оставаться двухколоночным, как в Workshop.

### Контекстное меню Mods (0.3.7)

ПКМ (и `ContextMenu`/`Shift+F10` с фокуса на строке) открывает меню действий Gale для конкретного мода.
`frontend/src/steam/ModContextMenu.tsx` сначала пробует нативные Steam `Menu`/`MenuItem` через
`showContextMenu`; submenu ищется через `findModuleExport` по форме компонента, без webpack id и CSS-хэшей.
Если API нет или оно не может показать полный список, рисуется доступный DOM-fallback с клавиатурой и
submenu. Пункты совпадают с desktop Gale: Uninstall, Change version, Change source, Show dependants,
Open folder, Edit config, Open website, Copy link, Donate — условные пункты показываются только при наличии
данных (`versions.length > 1`, `alternateBackend`, `configFile`, `websiteUrl`, remote-мод, `donateUrl`).
Backend добавляет `get_dependants`/`open_mod_dir`; «Edit config» передаёт относительный `file` в
`browser_url`, а `ConfigShell` выбирает этот файл после первого refresh. `plugin-smoke.mjs` прогоняет все
пункты, submenu, native-path и очистку меню при выгрузке; `config-smoke.mjs` проверяет deep-link файла.

## Lua и Rust

```bash
luajit scripts/test-backend.lua       # заглушки Millennium API
cd backend && python3 -m unittest test_prepare -v
scripts/build-gale.sh                 # frontend/config UI + pinned Gale + cargo build --release
xvfb-run -a python3 scripts/smoke-headless.py
```

Rust-адаптер копируется в pinned upstream скриптом `prepare.py`; править нужно `backend/gale/*.rs`, а не
generated-дерево. Если upstream-anchor изменился, prepare падает — обновите патч осознанно.
`build-gale.*` при каждом запуске обновляет adapter-owned файлы в prepared-дереве (`prepare.py --refresh`),
сохраняя Cargo target; для быстрой проверки типов есть `build-gale.sh --check` / `build-gale.ps1 -Check`.

## Как добавить команду

1. `backend/gale/headless.rs` — whitelist + вызов команды Gale.
2. `plugin/backend/main.lua` — если нужен отдельный IPC-метод или глобальная команда без slug.
3. `frontend/src/lib/types.ts` и `bridge.ts` — DTO/метод.
4. `frontend/src/demo/transport.ts` — демо-поведение и error envelope.
5. Тесты: `frontend/scripts/demo.test.ts`, `plugin-smoke.mjs`, `scripts/test-backend.lua`, `smoke-headless.py`.
6. `docs/HTTP-API.md`.

## CI

`.github/workflows/ci.yml`: frontend build/test, Python prepare guards, LuaJIT logic test, матрица Linux/Windows
сборки headless Gale и headless-smoke. Rust-сборка требует Tauri-зависимостей; на Linux smoke запускается под xvfb.

## Ручная приёмка в Steam (ещё не выполнена)

Контракт загрузки сверен с исходниками Millennium **v3.6.1**; jsdom заменяет CEF, поэтому визуальная и
интеграционная приёмка ниже остаётся обязательной. В логе Steam ожидаются строки `GaleX 0.3.7: frontend loaded`
и `GaleX 0.3.7: headless snapshot received`; их отсутствие помогает отличить проблему загрузки UI от IPC/Gale.
Диагностика вкладки пишется как `GaleX frontend: properties: …`.

- [ ] Вкладка Mods/Моды появляется только у поддерживаемых игр из библиотеки и следует языку Steam.
- [ ] Нативные разделы свойств не ломаются, переключение туда-обратно восстанавливает панели.
- [ ] Mods живёт внутри нативного `DialogContent`/`DialogBody` (не sibling-панель): наследует паддинги/фон/скролл темы, заголовок из `DialogHeader`, при возврате на нативную вкладку дети и заголовок восстанавливаются.
- [ ] Темы Steam/Millennium: цвета, скругления, шрифты, контролы; скролл списка модов; кнопки действий 36×36 без padding.
- [ ] ПКМ по моду открывает нативное контекстное меню Steam со всеми пунктами Gale; submenu версий/источника, зависимые моды, папка и конфиг конкретного файла работают.
- [ ] Big Picture / вторичные окна свойств.
- [ ] Thunderstore во внутреннем браузере, клик ror2mm → подтверждение → установка в профиль.
- [ ] Конфиг и экспорт `.r2z` открываются во внутреннем браузере.
- [ ] Закрытие Steam/выгрузка плагина завершает headless Gale без осиротевших процессов.
