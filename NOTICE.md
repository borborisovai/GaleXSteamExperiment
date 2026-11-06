# Attribution & third-party code

## Gale — https://github.com/Kesomannen/gale

© Kesomannen, лицензия **GPL-3.0**. Полный текст: `backend/gale/LICENSE.gale.md`.

GaleX не копирует полное upstream-дерево в git; выбранные frontend-файлы конфигов лежат в
`frontend/src/gale-upstream/` с лицензией и README. `backend/prepare.py` скачивает pinned commit
`4d401b6cf9857a92c16e8c1a39ec51e7852415cb` (Gale 1.23.3), проверяет SHA-256
`d38c465bbe3bc1de19db49f2ce5c061d00d3b0198b46b80fa74538f10781e329` и накладывает минимальные патчи:

- `backend/gale/headless.rs` — loopback RPC/HTTP-мост поверх команд Gale, браузерные билеты, конфиг-UI,
  экспорт, watchdog;
- `backend/gale/session_lock.rs` — файловая блокировка общей сессии;
- `frontend/src/gale-upstream/` — выбранные upstream Svelte-компоненты конфигов, типы, API-обёртки и
  en/ru сообщения Gale (GPL-3.0, см. `frontend/src/gale-upstream/LICENSE`); собираются в `backend/gale/config-ui`
  для внутреннего браузера Steam;
- anchor-правки `lib.rs`, `state.rs`, `Cargo.toml` для скрытого окна, блокировки и зависимостей моста.

Собираемый бинарник `plugin/bin/gale` является производной работой Gale и распространяется под **GPL-3.0**.
Исходники адаптера в `backend/gale/` также GPL-3.0. Профили, база, настройки и кэш используются из установленного
Gale без миграции и без дублирования.

## Millennium — https://github.com/SteamClientHomebrew/Millennium

© Project Millennium, лицензия **LGPL-2.1**. Код Millennium в репозиторий не копируется. GaleX взаимодействует
с публичным API плагинов: `plugin.json`, Lua `millennium/http/utils/fs`, `callServerMethod`, React-шимы
`SP_REACT`/`SP_REACTDOM`/`SP_JSX_FACTORY`, settings panels, browser hooks, `Navigation.NavigateToSteamWeb`.
Проверено по исходникам Millennium v3.6.1.

## Thunderstore

Метаданные и архивы пакетов предоставляются https://thunderstore.io. GaleX не перераспространяет моды:
загрузка выполняется ядром Gale по запросу пользователя.

## Исходники GaleX

Интерфейс, Lua-бэкенд, скрипты и документация GaleX — MIT (см. `LICENSE`), если файл явно не помечен GPL-3.0.
При распространении собранного плагина вместе с бинарником Gale соблюдайте GPL-3.0 для этой части.
