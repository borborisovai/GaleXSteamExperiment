# Installing GaleX

## Requirements

- Steam with Millennium 3.6+ and Lua backend support (`backendType: "lua"`).
- Node 22+, Python 3.9+, Rust 1.91+, corepack/pnpm.
- Linux: Tauri v2 dependencies (GTK 3, WebKitGTK 4.1, libsoup 3, OpenSSL, librsvg, appindicator).
- Windows: WebView2 Runtime, usually already present.
- Desktop Gale is not required for first launch. If it is installed, GaleX uses its existing data.

## Build

```bash
# Plugin frontend
scripts/build-plugin.sh

# Headless Gale; this also builds the frontend/config UI before cargo
scripts/build-gale.sh          # Linux -> plugin/bin/gale
# or in PowerShell:
scripts/build-gale.ps1         # Windows -> plugin/bin/gale.exe
```

`backend/prepare.py` downloads pinned Gale commit
`4d401b6cf9857a92c16e8c1a39ec51e7852415cb`, verifies its SHA-256, unpacks it safely and applies minimal
anchor patches. It refuses to prepare into an existing output directory. For a clean rebuild, remove
`backend/target/upstream` or pass a new `--output`. Normal rebuilds refresh adapter-owned files in place.

## Install the plugin

```bash
scripts/install-plugin.sh          # copy
scripts/install-plugin.sh --dev    # development symlink
MILLENNIUM_PLUGINS=/path scripts/install-plugin.sh
```

Plugin directory search order: `$MILLENNIUM_PLUGINS`,
`${XDG_DATA_HOME:-~/.local/share}/millennium/plugins`, `~/.steam/steam/millennium/plugins`,
`/usr/lib/millennium/plugins`.

On Windows, copy `plugin/` into the Millennium plugins directory manually, usually near `steamui` or under
`%LOCALAPPDATA%\millennium\plugins`.

## First run

1. **Close desktop Gale.** GaleX and Gale share the same database/profiles and must not write concurrently.
2. Restart Steam or reload plugins in Millennium.
3. Open properties for a game that is in your Steam library and supported by Gale, then select **Mods**.
   Global settings are available in the Millennium **GaleX** panel.
4. If the headless binary is not at `plugin/bin/gale(.exe)`, set its path in GaleX settings and save/restart.
5. In the Steam log, look for `GaleX <version>: frontend loaded`, then
   `GaleX <version>: headless snapshot received`. The first confirms UI load; the second confirms a Gale
   response. After opening game properties, look for `GaleX frontend: properties: tab injected ...` or a
   skip reason such as `no-tablist`, `no-appid` or `unsupported:<appid>`.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| “Headless Gale build not found” | `plugin/bin/gale(.exe)` exists; the path in plugin settings is correct |
| “Gale is already open” | Close desktop Gale; check `.gale-session.lock` in the Gale data directory |
| Mods tab missing | Plugin version/current build; `frontend loaded` and `GaleX frontend: properties: ...` in the Steam log; game listed in GaleX settings; Steam AppID matches |
| Thunderstore does not open inside Steam | `Navigation.NavigateToSteamWeb`, Millennium log |
| `ror2mm://` link not intercepted | Open the package page on `thunderstore.io/c/<game>/...`; this is not the OS protocol handler |
| Config changes do not save | Internal-browser cookie/Origin, headless Gale log at `plugin/runtime/gale.log` |
| Process remains after Steam closes | Parent-PID watchdog; session file under `plugin/runtime/` |

Logs: `plugin/runtime/gale.log`, Millennium logs, CEF DevTools. The bridge listens only on `127.0.0.1`;
do not expose it externally. Inside Steam, URLs look like `http://steamloopback.host:<port>/...`, which
resolves to loopback.

Steam/NVIDIA/Fontconfig warnings and Gale’s dynamic `curl_proxy protocols` warning are not by themselves
bridge failures. If Gale logs `setup done` but the UI is missing, first check `frontend loaded` /
`headless snapshot received` and the CEF console for `[GaleX]`.
