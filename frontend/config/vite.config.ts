import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const here = dirname(fileURLToPath(import.meta.url));
const upstream = resolve(here, '../src/gale-upstream');
const lib = resolve(here, 'src/lib');
export default defineConfig({
  root: here,
  base: '/config/',
  plugins: [svelte(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@iconify/svelte', replacement: resolve(lib, 'OfflineIcon.svelte') },
      { find: '$lib/state/profile.svelte', replacement: resolve(lib, 'state/profile.svelte.ts') },
      { find: '$lib/state/misc.svelte', replacement: resolve(lib, 'state/misc.svelte.ts') },
      { find: '$lib/api', replacement: resolve(lib, 'api.ts') },
      { find: '$lib/invoke', replacement: resolve(lib, 'invoke.ts') },
      { find: '$lib/util', replacement: resolve(lib, 'util.ts') },
      { find: '$lib/i18n', replacement: resolve(lib, 'i18n.ts') },
      { find: '$lib/paraglide/messages', replacement: resolve(lib, 'paraglide/messages.ts') },
      { find: '$lib/paraglide/runtime', replacement: resolve(lib, 'paraglide/runtime.ts') },
      { find: '$app/navigation', replacement: resolve(lib, 'navigation.ts') },
      { find: '@tauri-apps/plugin-dialog', replacement: resolve(lib, 'tauri/dialog.ts') },
      { find: '@tauri-apps/plugin-clipboard-manager', replacement: resolve(lib, 'tauri/clipboard.ts') },
      { find: '@tauri-apps/plugin-shell', replacement: resolve(lib, 'tauri/shell.ts') },
      { find: '@tauri-apps/api/core', replacement: resolve(lib, 'tauri/core.ts') },
      { find: '$lib', replacement: upstream },
    ],
  },
  build: {
    target: 'chrome110',
    outDir: resolve(here, '../../backend/gale/config-ui'),
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: { entryFileNames: 'app.js', chunkFileNames: 'app-[name].js', assetFileNames: 'app[extname]' },
    },
  },
});
