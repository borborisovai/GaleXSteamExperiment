# Attribution & third-party code

GaleX не был бы возможен без двух открытых проектов.

## Gale — https://github.com/Kesomannen/gale

© Kesomannen, лицензия **GPL-3.0**.

Используется в `backend/`:

* `backend/assets/games.json` — файл взят из репозитория Gale без изменений (240 сообществ Thunderstore,
  их mod loader и имя папки в `steamapps/common`);
* модель профиля (`ProfileMod` с `enabled` / `installTime` / `fullName`), подход к отключению модов через
  расширение `.old`, конвейер «индекс → зависимости → download → extract», эндпоинты Thunderstore
  (`/c/{slug}/api/v1/package-listing-index/`, `/package/download/{owner}/{name}/{version}`);
* принципы парсинга BepInEx `.cfg` (подсказки `# Setting type:` / `# Default value:`).

Код в `backend/` является производной работой в смысле GPL-3.0 и распространяется под **GPL-3.0**.
Полный текст лицензии: https://www.gnu.org/licenses/gpl-3.0.txt

## Millennium — https://github.com/SteamClientHomebrew/Millennium

© Project Millennium, лицензия **LGPL-2.1**.

GaleX — плагин для Millennium: используется API плагинов (`plugin.json`, `.millennium/Dist/index.js`,
`window.SP_REACT` / `SP_REACTDOM`, `Millennium.AddWindowCreateHook`). Код Millennium в репозиторий не копируется,
плагин только взаимодействует с его публичным API.

## Thunderstore

Метаданные и архивы пакетов предоставляются Thunderstore (https://thunderstore.io). GaleX не перераспространяет
моды: всё скачивается напрямую с Thunderstore по запросу пользователя.
