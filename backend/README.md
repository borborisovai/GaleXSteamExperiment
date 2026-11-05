# galexd — мост Gale

Локальный демон, который превращает ядро Gale в HTTP/SSE-сервис для плагина Millennium.

```bash
cargo build --release -p galexd          # из backend/
./target/release/galexd --help
./target/release/galexd --port 7788 --data-dir ~/.local/share/GaleX
```

## Модули

| Файл | Роль |
| --- | --- |
| `main.rs` | аргументы, состояние, роутер, graceful shutdown |
| `routes.rs` | обработчики всех эндпоинтов (`docs/HTTP-API.md`) |
| `state.rs` | модель профилей, сохранение `state.json`, композиция `Mod` для UI, `.old`-переключение |
| `install.rs` | резолв зависимостей, очередь, скачивание, распаковка zip |
| `store.rs` | клиент Thunderstore с кэшем индексов (15 мин) |
| `config.rs` | чтение/запись BepInEx `.cfg` с сохранением комментариев |
| `games.rs` | `games.json`, поиск библиотек Steam, `steam -applaunch` |
| `events.rs` | шина событий (broadcast → SSE) |
| `model.rs` | DTO, 1:1 с `frontend/src/lib/types.ts` |
| `error.rs` | `ApiError` → JSON `{ "error": … }` |

## Каталог данных

```
~/.local/share/GaleX/
  state.json                     игры, профили, установленные моды
  profiles/<slug>/<name>-<id>/   содержимое профилей (BepInEx/…)
  games/<slug>/                  запасной путь для игр без библиотеки Steam
```

## Заметки по реализации

* Скачивание — `reqwest` + rustls; распаковка — `zip` в `spawn_blocking`, чтобы не блокировать рантайм.
* Все блокировки `std::sync::Mutex` берутся коротко и никогда не удерживаются через `await`.
* Uuid мода детерминирован: `uuid_v5("galex:<profile>:<fullName>")` — фронтенд получает стабильные ключи.
* Логи одновременно уходят в `tracing` и в SSE-поток (`log`), поэтому раздел Activity в UI показывает то же,
  что и `journalctl`.
