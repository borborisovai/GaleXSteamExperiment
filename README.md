# GaleX

GaleX adds Thunderstore mod management to **Steam game properties**. It injects a **Mods** tab next to the
native Steam sections, styled after the Workshop. The backend is the real [Gale](https://github.com/Kesomannen/gale)
core; the frontend is a [Millennium](https://github.com/SteamClientHomebrew/Millennium) plugin.

```text
Steam (CEF)
 └─ Millennium
     ├─ plugin/.millennium/Dist/index.js   React UI: Mods tab, settings, link installer
     ├─ plugin/.millennium/Dist/webkit.js  ror2mm:// interception on Thunderstore
     └─ plugin/backend/main.lua            Lua backend: spawns Gale, IPC, link queue
             │  loopback HTTP + bearer token, session file
             ▼
        headless Gale (patched via backend/gale/headless.rs)
             ├─ shared Gale database, profiles, preferences and cache
             ├─ Gale install queue, dependencies, updates, import/export
             ├─ upstream Gale config UI (Svelte) in the Steam internal browser
             └─ Thunderstore
```

## Features

- Shows **Mods** only for Steam library games supported by Gale, matched by the properties window AppID.
- Follows the Steam language. English and Russian catalogs are bundled; other languages fall back to English.
- Reuses the live native properties `DialogContent`/`DialogBody` instead of drawing a sibling panel.
- Uses Steam/Millennium controls and Workshop-like layout: 80px mod rows, 48px icons, 36×36 unpadded action
  buttons, muted size/index text and the native Steam scrollbar.
- Right-click a mod for Gale’s context menu: uninstall, change version/source, show dependants, open folder,
  edit that mod’s config, open website, copy link and donate. Conditional entries appear only when Gale has
  the required data.
- Profiles: create/rename/duplicate/delete, import from code/file/r2modman, export code or `.r2z`, exclude
  export files and copy dependency strings.
- Opens the real upstream Gale config editor in the Steam internal browser, including deep links to a mod’s
  own config file.
- Intercepts Thunderstore `ror2mm://` links and offers installation into the selected profile.
- Adds a measured Gale download card to Steam Downloads while Gale operations are running.
- Exposes global Gale preferences in the Millennium plugin settings.

## Browser demo

```bash
cd frontend
npm ci
npm run dev          # http://localhost:5173
```

The demo is an in-memory fixture preview of the properties UI. It is not used by the production plugin; if
the Lua backend is missing, the plugin shows an error instead of falling back to demo data.

## Build and install

Requirements: Node 22+, Python 3.9+, Rust 1.91+, corepack/pnpm, and the Tauri v2 dependencies for your OS.

```bash
scripts/build-plugin.sh       # index.js + webkit.js + browser.css + Gale config UI
scripts/build-gale.sh         # Linux: plugin/bin/gale
# Windows PowerShell:
# scripts/build-gale.ps1      # plugin/bin/gale.exe
scripts/install-plugin.sh     # copy into the Millennium plugins directory; --dev symlinks
```

1. Close desktop Gale. GaleX uses the **same** data directory and must not run alongside it.
2. Restart Steam or reload Millennium plugins.
3. Open properties for an installed supported game and select **Mods**.

Details: [docs/INSTALL.md](docs/INSTALL.md).

## Repository layout

```text
backend/prepare.py           pinned Gale download, SHA-256 verification, safe unpack, anchor patches
backend/gale/                headless adapter, progress counters, session lock, built config UI, Gale license
frontend/src/gale-upstream/  selected upstream Gale Svelte config components/types/messages (GPL-3.0)
frontend/config/             config UI build for the Steam internal browser
frontend/src/steam/          Mods tab, properties adapter, catalog, settings, link installer
frontend/src/plugin/         bootstrap, Steam React shims, webkit interceptor
frontend/src/demo/           browser demo
plugin/backend/main.lua      Millennium Lua backend
plugin/.millennium/Dist/     built index.js / webkit.js / browser.css
scripts/                     build, install and smoke tests
docs/                        installation, development, architecture, bridge API
```

## Checks

```bash
cd frontend && npm ci && npm run typecheck && npm test && npm run build
cd backend && python3 -m unittest test_prepare -v
luajit scripts/test-backend.lua
python3 scripts/smoke-headless.py    # after building Gale; Linux: xvfb-run -a python3 ...
```

## Limitations

- GaleX and desktop Gale share one data directory and session lock. Close desktop Gale before using GaleX.
- The properties adapter uses semantic DOM/React-fiber detection. Steam updates may require selector work.
- `ror2mm://` interception covers link clicks and `window.open` in Millennium’s isolated world. It does not
  cover main-world `location.assign/replace` or the OS protocol handler.
- Automated frontend tests use jsdom, not live Steam/CEF. Visual/theme acceptance must be done in Steam.

## Licenses

GaleX source is MIT ([LICENSE](LICENSE)). The Gale adapter, upstream config components and built Gale binary
are GPL-3.0 ([backend/gale/LICENSE.gale.md](backend/gale/LICENSE.gale.md), [NOTICE.md](NOTICE.md)).
Millennium is LGPL-2.1; its code is not copied into this repository.
