# Attribution and third-party code

## Gale — https://github.com/Kesomannen/gale

© Kesomannen, licensed under **GPL-3.0**. Full text: `backend/gale/LICENSE.gale.md`.

GaleX does not store the full upstream tree in git. Selected config frontend files live in
`frontend/src/gale-upstream/` with their license and README. `backend/prepare.py` downloads pinned commit
`4d401b6cf9857a92c16e8c1a39ec51e7852415cb` (Gale 1.23.3), verifies SHA-256
`d38c465bbe3bc1de19db49f2ce5c061d00d3b0198b46b80fa74538f10781e329`, and applies minimal patches:

- `backend/gale/headless.rs` — loopback RPC/HTTP bridge over Gale commands, browser tickets, config UI,
  export and watchdog;
- `backend/gale/progress.rs` — measured operation progress for the Steam Downloads card;
- `backend/gale/session_lock.rs` — file lock for the shared Gale session;
- `frontend/src/gale-upstream/` — selected upstream Svelte config components, types, API wrappers and
  message catalogs (GPL-3.0; see `frontend/src/gale-upstream/LICENSE`), built into `backend/gale/config-ui`
  for the Steam internal browser;
- anchor edits in `lib.rs`, `state.rs`, `Cargo.toml` and progress call sites for the hidden window, session
  lock, bridge dependencies and measured operations.

The built `plugin/bin/gale` binary is a derivative work of Gale and is distributed under **GPL-3.0**.
Adapter sources in `backend/gale/` are also GPL-3.0. Profiles, database, preferences and cache are used from
the installed Gale data directory without migration or duplication.

## Millennium — https://github.com/SteamClientHomebrew/Millennium

© Project Millennium, licensed under **LGPL-2.1**. Millennium code is not copied into this repository.
GaleX interacts with the public plugin API: `plugin.json`, Lua `millennium/http/utils/fs`,
`callServerMethod`, React shims `SP_REACT` / `SP_REACTDOM` / `SP_JSX_FACTORY`, settings panels, browser hooks
and `Navigation.NavigateToSteamWeb`. The integration contract was checked against Millennium v3.6.1.

## Thunderstore

Package metadata and archives are provided by https://thunderstore.io. GaleX does not redistribute mods;
downloads are performed by the Gale core at the user’s request.

## GaleX source

GaleX UI, Lua backend, scripts and documentation are MIT (see `LICENSE`) unless a file is explicitly marked
GPL-3.0. When distributing a built plugin together with the Gale binary, comply with GPL-3.0 for that part.
