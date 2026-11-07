# Upstream Gale config UI (pinned)

Selected Svelte components, state, API wrappers, types and message catalogs are copied from Gale commit
[`4d401b6cf9857a92c16e8c1a39ec51e7852415cb`](https://github.com/Kesomannen/gale/tree/4d401b6cf9857a92c16e8c1a39ec51e7852415cb)
(v1.23.3). GaleX does not redesign the config editor: `routes/ConfigPage.svelte` is upstream
`src/routes/config/+page.svelte`, rendered by a small Vite/Svelte entry with HTTP/Tauri shims in
`frontend/config/src/lib`.

The upstream source edit is the profile-store import in `state/config.svelte.ts`: it points at the GaleX shim
in `frontend/config/src/lib/state/profile.svelte.ts` so the editor runs against one Steam-selected profile
without the desktop profile store. The config components themselves are unchanged.

GaleX-specific wrapper behavior lives outside this directory. In particular,
`frontend/config/src/ConfigShell.svelte` applies a validated `?file=` deep link after the upstream config
list refreshes.

License: GPL-3.0 (see LICENSE). GaleX shims and build entry points remain MIT unless combined into the GPL
config bundle/binary.
