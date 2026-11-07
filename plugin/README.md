# GaleX Millennium plugin

```text
plugin/
  plugin.json                  useBackend: true, backendType: lua
  backend/main.lua             headless Gale spawn, IPC, links, settings
  .millennium/Dist/index.js    React frontend, built by scripts/build-plugin.sh
  .millennium/Dist/webkit.js   Thunderstore ror2mm interceptor
  .millennium/Dist/browser.css no-op URL marker for webkit eligibility
  bin/gale(.exe)               headless Gale, built by scripts/build-gale.*; not stored in git
  runtime/                     session files and log, created at runtime; not stored in git
```

The plugin contains no fixtures and never connects to the demo backend. If `bin/gale` is missing, set the
path to a built headless binary in GaleX settings. Close desktop Gale before using GaleX: they share data.

Build: `scripts/build-plugin.sh` and `scripts/build-gale.sh` / `.ps1`.
Install: `scripts/install-plugin.sh`.

The Lua backend uses Millennium’s built-in `json` module (vendored lua-cjson), not system `cjson`. IPC replies
are JSON strings so empty arrays remain arrays during Lua-table conversion; the frontend accounts for the
extra `callServerMethod` JSON wrapper in Millennium 3.6.x.

`index.js` starts when the module script loads and does not mount again when the compiler-wrapper calls
`default()`. After registering settings it notifies the backend that the frontend loaded. For diagnostics,
look in the Steam log for `GaleX <version>: frontend loaded`, `headless snapshot received` and
`GaleX frontend: properties: ...`.

The properties adapter understands “Local Files” / “Installed Files”, localized section names and tabs
without ARIA roles. The game must be present in Gale’s supported list and have a matching Steam AppID.
