# Development

## Demo without Steam

```bash
scripts/dev.sh
# or:
cd frontend && npm ci && npm run dev
```

The demo uses `frontend/src/demo/transport.ts` with in-memory data and a game-properties shell. Production
never connects to the demo transport; without the Lua backend the UI shows an error.

## Frontend builds

```bash
cd frontend
npm run typecheck
npm run build            # web demo -> frontend/dist
npm run build:plugin     # plugin/.millennium/Dist/index.js + browser.css + backend/gale/config-ui
npm run build:webkit     # plugin/.millennium/Dist/webkit.js
npm test                 # demo transport + jsdom plugin + webkit + upstream config UI
```

Vite modes are `app`, `plugin` and `webkit`. In `plugin` mode, React/ReactDOM alias to the Steam shims
`window.SP_REACT`, `SP_REACTDOM` and `SP_JSX_FACTORY`; everything is inlined into one ESM file. Millennium
3.6.x only adds the module script, so `plugin/entry.ts` starts the bundle itself and caches startup for a
later compiler-wrapper `default()` call.

`build:config` builds the upstream Gale Svelte config UI into `backend/gale/config-ui`; Rust embeds it with
`include_str!`. `browser.css` is a no-op URL eligibility marker copied after the plugin build so
`emptyOutDir` does not delete it. The webkit bundle contains no React.

Test coverage:

- `plugin-smoke.mjs` imports the built module without manual bootstrap and checks double-encoded FFI replies,
  handshake, settings, secondary properties popups, classic/modern/localized tab structures, late body mount,
  native `DialogContent` adoption, context-menu actions, cached-game/lock recovery, non-Steam overrides,
  automatic Steam launch options and cleanup.
- `config-smoke.mjs` mounts the built Svelte bundle in jsdom with a Steam locale, mock `/api/command`, offline
  icons and a `?file=` config deep link.
- `demo.test.ts` exercises the demo transport, error envelopes, launch-option composition and shortcut ID resolution.
- `webkit-smoke.mjs` checks Thunderstore `ror2mm://` interception and IPC envelopes.

## Mods UI

`frontend/src/styles/steam.css` contains scoped `gx-` layout rules and fallbacks only. It does not import a
full Steam stylesheet or hardcode hashed CSS-module classes. Controls come from Steam/Millennium when
available (`DialogButton`, `Dropdown`, `DialogCheckbox`, `DialogInput`, icons); HTML fallbacks are used in the
demo and older builds. Colors prefer Steam/theme variables with Workshop-snapshot fallbacks.

Current Workshop-parity metrics include 80px rows with a 2px gap, 48px icons, 36×36 unpadded row actions,
muted size/index text, a two-column toolbar, separate Profile / Import+Export / Config rows, and the native
Steam scrollbar geometry (14px track, 10px thumb with a 4px transparent border). The container-query
breakpoint is 480px so the toolbar remains two-column inside the native properties width.

### Native DialogContent adoption

`frontend/src/steam/properties.ts` reuses a live native `DialogContent` (`role=tabpanel`) when present.
React mounts into `div.gx-adopted-mount` inside the native `DialogBody`; the native `DialogHeader` becomes the
Mods title. Native children are hidden, not removed, and are restored when returning to a native tab or
unloading. If Steam replaces the content node, the adapter re-adopts the live shell. A bespoke
`gx-injected-panel` remains only as a fallback for DOM without `DialogContent`.

### Mod context menu

Right-click, `ContextMenu`, or `Shift+F10` on a focused mod row opens Gale’s mod actions.
`frontend/src/steam/ModContextMenu.tsx` first tries native Steam `Menu`/`MenuItem` through
`showContextMenu`. The submenu component is discovered through `findModuleExport` by component shape, not by
webpack id or CSS hash. If the native API is unavailable or incomplete, an accessible DOM fallback with
keyboard support and submenus is rendered.

Entries match desktop Gale: Uninstall, Change version, Change source, Show dependants, Open folder, Edit
config, Open website, Copy link and Donate. Conditional entries require the corresponding data:
`versions.length > 1`, `alternateBackend`, `configFile`, `websiteUrl`, remote mod type, or `donateUrl`.
“Edit config” passes a validated relative `file` to `browser_url`; `ConfigShell` selects it after the first
config refresh.

## Lua and Rust

```bash
luajit scripts/test-backend.lua
cd backend && python3 -m unittest test_prepare -v
scripts/build-gale.sh                 # frontend/config UI + pinned Gale + cargo build --release
xvfb-run -a python3 scripts/smoke-headless.py
```

Edit adapter sources in `backend/gale/*.rs`, not the generated upstream tree. `prepare.py` copies them into
the pinned Gale source and fails if an upstream anchor changes. `build-gale.*` refreshes adapter-owned files
on every run while preserving the Cargo target. For a fast type check use `build-gale.sh --check` or
`build-gale.ps1 -Check`.

## Adding a bridge command

1. Add the whitelist entry and Gale call in `backend/gale/headless.rs`.
2. Add a separate Lua IPC method only if needed in `plugin/backend/main.lua`.
3. Update DTOs/methods in `frontend/src/lib/types.ts` and `bridge.ts`.
4. Add demo behavior in `frontend/src/demo/transport.ts`.
5. Update tests: `demo.test.ts`, `plugin-smoke.mjs`, `scripts/test-backend.lua`, `smoke-headless.py`.
6. Document the contract in `docs/HTTP-API.md`.

## CI

`.github/workflows/ci.yml` runs frontend typecheck/build/tests, Python prepare guards, LuaJIT logic tests,
and a Linux/Windows matrix that builds headless Gale and runs the headless smoke test. The Rust build needs
Tauri dependencies; Linux smoke runs under xvfb.

## Manual Steam acceptance

Automated tests use jsdom, not live Steam/CEF. Before release, verify in Steam:

- [ ] Mods appears only for supported library games and follows the Steam language.
- [ ] Native properties sections still work; switching back restores native panels, header and children.
- [ ] Mods lives inside native `DialogContent`/`DialogBody`, inherits theme padding/background/scroll, and
      restores the native shell on deactivate/unload.
- [ ] Steam/Millennium themes: colors, radii, fonts, controls, mod-list scrollbar, 36×36 unpadded actions.
- [ ] Right-click opens the native Steam context menu with all applicable Gale actions; version/source
      submenus, dependants, folder and per-file config work.
- [ ] Big Picture and secondary properties windows.
- [ ] Thunderstore opens in the internal browser; `ror2mm://` click -> confirmation -> profile install.
- [ ] Config editor and `.r2z` export open in the internal browser.
- [ ] Closing Steam or unloading the plugin exits headless Gale without orphaned processes.
