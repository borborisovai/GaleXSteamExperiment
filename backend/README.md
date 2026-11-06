# Backend GaleX

Здесь больше нет отдельного Rust-крейта `galexd` и нет `backend/Cargo.toml`.

Текущий бэкенд — это минимальный headless-адаптер для настоящего Gale:

| Файл | Роль |
| --- | --- |
| `prepare.py` | скачивает pinned Gale, проверяет SHA-256, безопасно распаковывает и накладывает anchor-патчи |
| `gale/headless.rs` | loopback RPC/HTTP-мост поверх команд Gale, браузерные билеты, конфиг-UI, экспорт, watchdog |
| `gale/session_lock.rs` | файловая блокировка общей сессии Gale |
| `gale/config.{html,js,css}` | интерфейс конфигов для внутреннего браузера Steam |
| `test_prepare.py` | guard-тесты распаковки/патчей |

## Сборка

Не запускайте `cargo build` из `backend/`: сборка выполняется внутри prepared upstream-дерева Gale.

```bash
scripts/build-gale.sh      # Linux → plugin/bin/gale
# или PowerShell:
scripts/build-gale.ps1     # Windows → plugin/bin/gale.exe
```

Скрипт вызывает `backend/prepare.py`, собирает фронтенд Gale через pnpm и затем
`cargo build --release --manifest-path src-tauri/Cargo.toml` в `backend/target/upstream/gale-*/`.
При повторной сборке адаптер (`headless.rs`, `session_lock.rs`, config UI) автоматически
обновляется в prepared-дереве через `prepare.py --refresh`, поэтому после `git pull`
не нужно удалять `backend/target/upstream` вручную. `scripts/build-gale.sh --check`
(или `build-gale.ps1 -Check`) выполняет только `cargo check` адаптера.

## Данные

GaleX использует существующий каталог данных Gale (`com.kesomannen.gale`): SQLite, профили,
настройки и кэш не дублируются. Обычный настольный Gale нужно закрыть перед запуском GaleX.
