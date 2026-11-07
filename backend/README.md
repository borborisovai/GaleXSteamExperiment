# GaleX backend

The backend is a minimal headless adapter for upstream Gale. There is no standalone backend crate and no
`backend/Cargo.toml`; builds happen inside the prepared Gale source tree.

| File | Role |
| --- | --- |
| `prepare.py` | Download pinned Gale, verify SHA-256, unpack safely, apply anchor patches |
| `gale/headless.rs` | Loopback RPC/HTTP bridge over Gale commands, browser tickets, config UI, export, watchdog |
| `gale/progress.rs` | Measured network/disk progress and operation guards |
| `gale/session_lock.rs` | File lock for the shared Gale session |
| `gale/config-ui/` | Built config UI for the Steam internal browser |
| `test_prepare.py` | Guard tests for unpacking and patch anchors |

## Build

Do not run `cargo build` from `backend/`. Use the repository scripts:

```bash
scripts/build-gale.sh      # Linux -> plugin/bin/gale
# or PowerShell:
scripts/build-gale.ps1     # Windows -> plugin/bin/gale.exe
```

The script calls `backend/prepare.py`, builds the Gale frontend with pnpm, then runs
`cargo build --release --manifest-path src-tauri/Cargo.toml` inside
`backend/target/upstream/gale-*/`.

On repeated builds, adapter-owned files (`headless.rs`, `progress.rs`, `session_lock.rs`, config UI) are
refreshed in the prepared tree through `prepare.py --refresh`, so after `git pull` you do not need to delete
`backend/target/upstream` manually. `scripts/build-gale.sh --check` or `build-gale.ps1 -Check` runs only
`cargo check` for the adapter.

## Data

GaleX uses the existing Gale data directory (`com.kesomannen.gale`): SQLite, profiles, preferences and cache
are not duplicated. Close desktop Gale before running GaleX.
