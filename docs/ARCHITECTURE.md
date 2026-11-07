# GaleX architecture

## Components

| Component | Runs in | Responsibility |
| --- | --- | --- |
| `plugin/.millennium/Dist/index.js` | Steam CEF client context | Mods tab in game properties, plugin settings, link installer |
| `plugin/.millennium/Dist/webkit.js` | Isolated world of Steam’s internal browser on Thunderstore | Intercept `ror2mm://`, forward links to Lua |
| `plugin/backend/main.lua` | Millennium LuaJIT backend | Non-blocking headless Gale spawn, session file, HTTP IPC, link queue |
| `backend/gale/headless.rs` | Patched Gale (Rust/Tauri) | RPC over Gale commands, browser tickets, config UI, export, watchdog |
| `backend/gale/progress.rs` | Patched Gale | Measured network/disk progress for Gale operations |
| Gale data directory | User filesystem | SQLite, profiles, preferences, cache — **shared with desktop Gale** |

## Lifecycle

1. Millennium loads `main.lua` and calls `M.on_load()`.
2. Lua resolves the Steam process PID through LuaJIT FFI, creates a private session file and token, spawns
   `plugin/bin/gale` (`nohup` / `start /B`) and calls `millennium.ready()`.
3. Gale hides its window, takes the session file lock, initializes normal Gale state, starts a loopback HTTP
   server on a random port and writes `{pid, port, token, bridgeVersion: 2}`. If the lock is held, the child
   publishes `runtime/startup-error.json` with `code: "gale_session_locked"` and exits; Lua surfaces that code
   instead of a generic starting error.
4. Millennium adds `.millennium/Dist/index.js` as a module script. The Millennium 3.6.x loose-file loader does
   not call `default()` itself, so the bundle starts on module load, caches the startup promise and remains
   compatible with the compiler-wrapper. After registering settings it sends
   `MILLENNIUM_BACKEND_IPC.postMessage(1, {pluginName:'GaleX'})`, which reaches Lua `on_frontend_loaded()`.
5. The frontend polls `snapshot` (3s in visible windows, 15s in hidden contexts), receives Gale games and
   matches `steamAppId` to Steam properties windows. A validated `localStorage` cache keeps the last supported
   game list available when the backend fails, so the Mods tab can render a connection/lock recovery screen. Lua replies are JSON strings; Millennium 3.6.x FFI
   serializes them again, so `lib/ipc.ts` unwraps up to two JSON layers and validates the `{ok, ...}` envelope.
6. On plugin unload Lua calls `/shutdown`. Gale waits for the install queue to drain, removes the session file
   and exits. A parent-PID watchdog cleans up after Steam crashes.

## Data and profiles

There is no second database or profile copy. GaleX calls Gale’s existing profile, install, update, config,
prefs, export and import commands. The active profile is selected by persistent `id`, not index. A
`command_lock` serializes game/profile selection and commands so an operation cannot be switched mid-flight.
Installs, updates and version changes use Gale’s queue and wait for completion; `cancel_installs` bypasses the
lock so cancellation is not blocked.

## Mods tab

`frontend/src/steam/properties.ts` finds properties dialogs semantically: `role=dialog`, `DialogBody`,
tablists and localized section names from Steam’s `LocalizationManager` with fallback strings. This covers
“Local Files”, “Installed Files”, localized equivalents and div-based tabs without ARIA roles. The AppID is
resolved from React fiber, URL, attributes, assets, window title and `appStore`.

The adapter clones an existing native tab as Mods. When a live native `DialogContent` exists, that element
becomes the Mods surface: React mounts into `gx-adopted-mount` inside `DialogBody`, the native `DialogHeader`
is reused, and native children are hidden without deletion and restored on native-tab return or unload. A
manual sibling panel is only a fallback for DOM without `DialogContent`. No Steam CSS hashes are hardcoded.
The adapter also runs in secondary CEF windows; skip reasons (`no-tablist`, `no-appid`,
`unsupported:<appid>`) are logged through `frontend_log`.

## Connection recovery, shortcuts and launch options

`steam/catalog.ts` publishes live games or the persistent cache from `steam/gameCache.ts`. The cache contains
only supported-game metadata (slug, name, loader, Steam AppID, backends); never profiles, tokens or installing
state. `ModsView` renders `ConnectionError` for a locked/unavailable session with Retry and plugin-settings
actions. Retry restarts the headless child; it never bypasses `.gale-session.lock`.

`lib/clientSettings.ts` stores non-Steam overrides (`shortcut AppID → Gale slug`) and the automatic
launch-options toggle. `steam/apps.ts` normalizes unsigned 32-bit shortcut IDs and accepts an override only
for an actual Steam shortcut and a known/cached Gale slug.

`steam/launchOptions.ts` asks Gale for `launch_plan` (resolved mod-loader/custom game arguments plus platform),
reads Steam app details, removes only the exact argument segment GaleX previously applied, composes the new
string and writes it with `SetAppLaunchOptions` / `SetShortcutLaunchOptions`. Linux/macOS use a single
`%command%` separator; Windows uses plain game arguments. The write is confirmed through
`RegisterForAppDetails` before the applied segment is persisted.

## Downloads

`bootstrap.tsx` patches Steam’s `/library/downloads` route (Desktop UI mode 7) and renders Gale operation
cards above the native children. Progress comes from `backend/gale/progress.rs`, not from Steam’s update
queue. `SteamClient.Downloads.QueueAppUpdate` is never called for mods. Active install/update tasks expose
cancellation; import/export tasks are shown without a misleading cancel button.

## Styles and mod actions

One small `steam.css` with `gx-` prefixed rules is injected per document. Steam/Millennium components are used
when available; HTML fallbacks serve the demo and older builds. The active Mods tab removes Steam selection
classes from the previous tab and restores them on return.

The mod list uses Workshop-like metrics and the native Steam scrollbar. Row actions are 36×36 with no padding;
size and index inherit the muted row color. Right-clicking a mod opens Gale’s context menu through native
Steam `Menu`/`MenuItem` when available, otherwise through an accessible DOM fallback. Actions include
uninstall, version/source changes, dependants, folder, per-mod config, website, copy link and donate.

## Thunderstore and ror2mm

Lua registers a no-op `browser.css` with URL regex `^https://thunderstore\.io/.*` so Millennium allows
`webkit.js` on the external domain. The interceptor catches clicks on `a[href^="ror2mm://"]` and `window.open`
in the isolated world, sends `queue_link` and shows a toast. The Steam frontend then shows confirmation and
profile selection, followed by `install_mod` through Gale’s queue. Lua also pushes `linkQueued` to the visible
Steam window so the dialog appears immediately instead of waiting for hidden-context polling.

## Configs and export in the internal browser

`browser_url` creates a single-use ticket (60s TTL, maximum 32 tickets) and returns
`http://steamloopback.host:<port>/open`. `/open` sets an HttpOnly SameSite=Strict cookie and redirects to
`/config` or `/export`.

The config UI is built from upstream Gale Svelte components (`frontend/src/gale-upstream`, `frontend/config`).
Language comes from Steam via the ticket. RPC uses `/api/command` with cookie + Origin and CSP self. The
mod-row “Edit config” action adds a validated relative `file` to the ticket; `/open` redirects to
`/config?...&file=...`, and `ConfigShell` selects that file after the first refresh. Large profiles export as
`.r2z` files through `/export`, not base64 over IPC.

## Security

- The server listens only on `127.0.0.1:0`; port and token come from the session file (Unix mode 0600,
  create-new).
- RPC requires `Authorization: Bearer` and `X-GaleX-Client: millennium-lua`. Browser pages use cookie + Origin
  for writes.
- Commands are whitelisted; body limit is 24 MiB, import limit is 15 MiB, tickets are single-use.
- `.gale-session.lock` prevents two GaleX/patched Gale processes from writing the same data. Desktop upstream
  Gale does not take this lock, so it must be closed manually.

## Verification boundaries

Automated checks cover TypeScript/builds, jsdom demo/plugin/webkit/config tests, Lua stubs, prepare guards and
headless Gale smoke tests. They do not replace live Steam/CEF acceptance: themes, native shell restoration,
internal-browser flows, Big Picture/secondary windows and Windows Steam startup still need manual checks.
