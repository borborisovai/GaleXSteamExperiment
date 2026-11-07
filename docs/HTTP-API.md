# GaleX bridge API

The contract has two layers: Millennium IPC from the frontend to Lua, and loopback HTTP from Lua to headless
Gale.

## 1. Millennium IPC: frontend -> Lua

Call shape:

```ts
Millennium.callServerMethod('GaleX', method, { payload: JSON.stringify(args) })
```

Lua returns a JSON string envelope: `{ ok: true, data? }` or `{ ok: false, error }`. Millennium 3.6.x
`callServerMethod` serializes the return value again, so the browser can receive two JSON layers.
`frontend/src/lib/ipc.ts` unwraps up to two string layers, accepts an already-decoded object, and rejects
anything that is not an `{ ok: boolean, ... }` envelope.

Lua replies are strings so empty arrays such as `mods: []` and `pendingLinks: []` do not become `{}` during
Millennium’s Lua-table conversion. Lua uses Millennium’s built-in `json` module (vendored lua-cjson), not a
system `cjson` module.

| Method | Arguments | Purpose |
| --- | --- | --- |
| `snapshot` | — | Gale games, active game, dataDir, installing, pendingLinks |
| `progress` | — | Heavy-operation telemetry: tasks, network/disk bytes/s, history |
| `command` | `{ method, args }` | Whitelisted Gale command; `args.slug` is required except for global commands |
| `browser_url` | `{ slug, profileId, kind?: 'config' \| 'export', lang?, file? }` | Single-use internal-browser URL |
| `queue_link` | `{ url, slug }` | Queue a `ror2mm://` install link |
| `dismiss_link` | `{ url }` | Remove a queued link |
| `get_config` / `set_config` | — / `{ path }` | Headless binary path in Millennium settings |
| `restart` | — | Restart headless Gale after changing the path |
| `frontend_log` | `{ message }` | Frontend diagnostics to the Steam log, truncated and token-free |

Global commands that do not require a slug: `prefs`, `set_prefs`, `clear_download_cache`, `cancel_installs`,
`snapshot`, `progress`.

## 2. Loopback HTTP: Lua -> headless Gale

Address and token come from the session file. Required headers:

```http
Authorization: Bearer <token>
X-GaleX-Client: millennium-lua
```

Without the client header, bearer endpoints return `403` so a browser cannot use RPC even if a token leaks.

| Method | Path | Body / parameters | Response |
| --- | --- | --- | --- |
| POST | `/rpc` | `{ method, args }` | `{ data }` or `{ error }` |
| POST | `/browser-url` | `{ slug, profileId, kind?, lang?, file? }` | `{ url }` with a single-use ticket and `steamloopback.host` |
| GET | `/open` | `?ticket=...` | 302 + HttpOnly cookie -> `/config` or `/export` |
| GET | `/config` | `?slug&profileId&lang&file?` | Upstream Gale config UI HTML; cookie, Steam host, inline CSS |
| GET | `/config/app.js`, `/config/app.css` | — | Built Svelte/Tailwind config assets |
| POST | `/api/command` | `?slug&profileId`; `{ method, args }` | `{ data }` or `{ error }`; cookie + Origin |
| GET | `/export` | `?slug&profileId` | `profile.r2z` |
| POST | `/shutdown` | — | Wait for queue, remove session, exit |

### `/rpc` commands

Profiles and mods:

```text
profiles, mods, create_profile, rename_profile, duplicate_profile, delete_profile, activate_profile,
toggle_mod, force_toggle_mods, remove_mod, force_remove_mods, set_all_mods_state,
get_dependants, open_mod_dir
```

Install/update:

```text
install_mod, cancel_installs, update_mods, ignore_package_updates, change_mod_version, fetch_mods
```

Import/export:

```text
export_code, list_export_files, set_excluded_export_files, copy_dependency_strings, copy_debug_info,
read_profile_code, read_profile_base64, read_profile_file, import_profile,
import_local_mod, import_local_mod_base64, get_r2modman_info, import_r2modman
```

Config, preferences and misc:

```text
config, set_config_entry, reset_config_entry, reset_config_file, open_config_file, delete_config_file,
prefs, set_prefs, clear_download_cache, launch, resolve_link, snapshot, progress
```

`get_dependants` and `open_mod_dir` accept `{ slug, profileId?, uuid }` and operate on the selected profile.

`browser_url.file` is an optional relative config path for the mod-row “Edit config” action. Absolute paths,
`..`, empty segments, `:` and NUL are rejected with `400`. The ticket redirects to
`/config?...&file=<percent-encoded>`, and the config shell selects the file after its first refresh.

`progress` does not require a slug and does not take the command lock, so it can be polled during installs.
Response shape:

```ts
{ active, tasks: ProgressTask[], networkBytesPerSecond, diskBytesPerSecond, history: [{ at, network, disk }] }
```

`ProgressTask` is tied to a real Gale game (`slug`, `gameName`, `steamAppId`) and profile. Percentages come
from Gale install-queue bytes/mod counts. Network is measured at reqwest chunk boundaries; disk is measured
from bytes actually written during extraction/copying (hardlinks count as zero). The Steam Downloads card is
a virtual Gale operation card, not a Steam game update; `SteamClient.Downloads.QueueAppUpdate` is not called.

DTOs match `frontend/src/lib/types.ts` and upstream Gale. Change the contract synchronously across Lua IPC,
Rust dispatch/whitelist, TypeScript types, demo transport and tests.

## Browser route security

Browser routes (`/open`, `/config*`, `/api/command`, `/export`) require Host `steamloopback.host:<port>` and
reject proxy headers (`Via`, `Forwarded`, `X-Forwarded-*`, `X-Real-IP`). Direct `127.0.0.1` or `localhost`
access returns `403`.

`/config`, `/api/command` and `/export` also require the ticket cookie. Origin must match
`http://steamloopback.host:<port>`. Browser `/api/command` accepts only config commands:

```text
config, set_config_entry, reset_config_entry, reset_config_file, open_config_file, delete_config_file
```

Installs and launches are available only through Lua `/rpc`. Config CSS is inlined into `index.html` so
Steam/Millennium subresource interception cannot leave the editor unstyled.
