# Upstream Gale config UI (pinned)

Selected Svelte components, state, API wrappers, types and message catalogs are
copied from Gale commit
[`4d401b6cf9857a92c16e8c1a39ec51e7852415cb`](https://github.com/Kesomannen/gale/tree/4d401b6cf9857a92c16e8c1a39ec51e7852415cb)
(v1.23.3). GaleX does not redesign the config editor: `routes/ConfigPage.svelte`
is upstream `src/routes/config/+page.svelte`, rendered by a small Vite/Svelte
entry with HTTP/Tauri shims in `frontend/config/src/lib`.

The only source edit is the profile-store import in `state/config.svelte.ts`:
it points at the GaleX shim in `frontend/config/src/lib/state/profile.svelte.ts`
so the upstream editor runs against one Steam-selected profile without the
desktop profile store. The config components themselves are unchanged.

License: GPL-3.0 (see LICENSE). The GaleX shims/build entry remain MIT unless
combined into the GPL config bundle/binary.
