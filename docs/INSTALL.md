# Установка

## Требования

| Что | Версия |
| --- | --- |
| Steam (desktop или Big Picture) | актуальная |
| [Millennium](https://github.com/SteamClientHomebrew/Millennium) | 3.x |
| Rust (только для сборки демона) | 1.82+ |
| Node.js (только для сборки плагина) | 20+ |

Предсобранный бандл плагина лежит в `plugin/.millennium/Dist/index.js`, поэтому для обычной установки Node.js не
нужен — только Rust для демона.

## Linux

```bash
git clone https://github.com/borborisovai/GaleXSteamExperiment.git
cd GaleXSteamExperiment

# 1. плагин
scripts/build-plugin.sh          # если хотите пересобрать (нужен Node.js)
scripts/install-plugin.sh        # → ~/.local/share/millennium/plugins/GaleX

# 2. демон + systemd-юнит
scripts/install-daemon.sh
```

Скрипт `install-plugin.sh` ищет каталог плагинов здесь (по порядку):

1. `$MILLENNIUM_PLUGINS`, если переменная задана;
2. `${XDG_DATA_HOME:-~/.local/share}/millennium/plugins`;
3. `~/.steam/steam/millennium/plugins`;
4. `/usr/lib/millennium/plugins`.

Перезапустите Steam. В клиенте появится пилюля **Mods** справа снизу, горячая клавиша — `Ctrl+Shift+G`.

Юнит systemd (`~/.config/systemd/user/galexd.service`) поднимает мост при входе в систему:

```bash
systemctl --user status galexd
journalctl --user -u galexd -f
```

Демон можно запустить и вручную: `~/.local/bin/galexd --port 7788`.

## Windows

1. Соберите демон: `cargo build --release --manifest-path backend/Cargo.toml -p galexd`
   → `backend\target\release\galexd.exe`.
2. Скопируйте `galexd.exe` в удобное место, например `%LOCALAPPDATA%\GaleX\galexd.exe`.
3. Автозапуск — ярлык в `shell:startup` с аргументами `--port 7788`, либо задача в Task Scheduler
   («При входе в систему», «Скрыть окно»).
4. Плагин: скопируйте папку `plugin` в каталог плагинов Millennium
   (обычно `C:\Program Files\Millennium\plugins\GaleX`, точный путь Millennium показывает в своих настройках).
   Если Millennium установлен в другую папку — используйте `MILLENNIUM_PLUGINS` в WSL/Git Bash либо просто
   скопируйте вручную.
5. Перезапустите Steam, нажмите `Ctrl+Shift+G`.

Демон по умолчанию слушает `127.0.0.1:7788`; при первом запуске Windows может спросить разрешение фаервола —
отказывать можно, наружу порт не нужен.

## Первый запуск

1. В шапке интерфейса выберите игру из списка сообществ Thunderstore.
2. Нажмите **Add …** — демон создаст папку профиля и запомнит путь к игре
   (путь определяется автоматически по библиотекам Steam; при необходимости его можно задать вручную в
   `POST /api/v1/games/:slug/manage`).
3. Раздел **Browse** → выберите мод → **Install**: зависимости приедут сами.
4. **Launch** в шапке (или в левом нижнем углу) запускает игру через Steam с активированным профилем.

## Диагностика

| Симптом | Что проверить |
| --- | --- |
| Экран «The Gale bridge is not running» | `curl http://127.0.0.1:7788/api/v1/health`, `journalctl --user -u galexd -f` |
| Плагин не появился в Steam | лог Millennium (`~/.local/state/millennium/logs`), наличие `plugin.json` и `.millennium/Dist/index.js` |
| Пустой каталог Browse | нет доступа к `thunderstore.io` (корпоративный прокси/фаервол) |
| Моды установились, но игра их не видит | проверьте, что профиль активирован и игра запущена через **Launch**, а не напрямую из Steam |
| `Ctrl+Shift+G` не срабатывает | конфликт с другим плагином/оверлеем; откройте через пилюлю **Mods** |

Нужен другой порт? Запустите `galexd --port 7800` и укажите `http://127.0.0.1:7800` в
**Settings → Daemon address → Connect** (адрес сохраняется в localStorage интерфейса).
