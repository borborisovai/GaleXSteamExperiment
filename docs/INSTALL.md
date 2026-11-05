# Установка GaleX

## Требования

- Steam + Millennium 3.6+ (Lua-бэкенды, `backendType: "lua"`).
- Node 22+, Python 3.9+, Rust ≥ 1.91, corepack/pnpm 11.7.0.
- Linux: зависимости Tauri v2 (GTK 3, WebKitGTK 4.1, libsoup 3, OpenSSL, librsvg, appindicator).
- Windows: WebView2 Runtime (обычно уже есть вместе со Steam/Windows).
- Установленный Gale не обязателен для первого запуска, но если он есть — GaleX использует его данные.

## Сборка

```bash
# фронтенд плагина
scripts/build-plugin.sh

# headless Gale
scripts/build-gale.sh          # Linux → plugin/bin/gale
# или в PowerShell:
scripts/build-gale.ps1         # Windows → plugin/bin/gale.exe
```

`backend/prepare.py` скачивает pinned Gale `4d401b6cf9857a92c16e8c1a39ec51e7852415cb`, проверяет SHA-256,
безопасно распаковывает и накладывает минимальные anchor-патчи. Повторный запуск в тот же output запрещён;
для пересборки удалите `backend/target/upstream` или укажите новый `--output`.

## Установка плагина

```bash
scripts/install-plugin.sh          # копия
scripts/install-plugin.sh --dev    # симлинк для разработки
MILLENNIUM_PLUGINS=/path scripts/install-plugin.sh
```

Поиск каталога плагинов: `$MILLENNIUM_PLUGINS`, `${XDG_DATA_HOME:-~/.local/share}/millennium/plugins`,
`~/.steam/steam/millennium/plugins`, `/usr/lib/millennium/plugins`. На Windows скопируйте `plugin/` в каталог
плагинов Millennium вручную (обычно рядом с `steamui` или в `%LOCALAPPDATA%\millennium\plugins`).

## Первый запуск

1. **Закройте настольный Gale.** GaleX и Gale используют одну базу/профили и не должны писать одновременно.
2. Перезапустите Steam или перезагрузите плагины в Millennium.
3. Откройте свойства игры, которая есть в библиотеке Steam и поддерживается Gale → категория **Моды**.
4. Если сборка лежит не в `plugin/bin/gale`, укажите путь в настройках GaleX и нажмите «Сохранить и перезапустить».

## Диагностика

| Симптом | Проверка |
| --- | --- |
| «Не найдена headless-сборка Gale» | `plugin/bin/gale(.exe)` существует; путь в настройках плагина |
| «Gale уже открыт» | Закройте обычный Gale; проверьте `.gale-session.lock` в data dir Gale |
| Вкладка «Моды» не появилась | Игра поддерживается Gale? Окно свойств имеет AppID? Логи Millennium/CEF |
| Thunderstore не открывается внутри Steam | `Navigation.NavigateToSteamWeb`, лог Millennium |
| Ссылка ror2mm не перехватилась | Откройте пакет на `thunderstore.io/c/<game>/…`; не системный обработчик протокола |
| Конфиг не сохраняется | Cookie/Origin внутреннего браузера, лог headless Gale в `plugin/runtime/gale.log` |
| Процесс висит после закрытия Steam | Watchdog по PID; session-файл в `plugin/runtime/` |

Логи: `plugin/runtime/gale.log`, логи Millennium, DevTools CEF. Порт слушает только `127.0.0.1`; наружу открывать не нужно.
