import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

/**
 * GaleX has three build targets:
 *
 *  - `app`    (default) — a normal web app used for development and the live
 *               preview. React comes from node_modules; data is an in-memory demo.
 *  - `webkit` — isolated-world Thunderstore link interceptor (no React).
 *  - `plugin` — the bundle that Millennium injects into the Steam client.
 *               React/ReactDOM are aliased to the copies that Steam's own CEF
 *               already exposes (`window.SP_REACT`), so we never ship a second
 *               reconciler into the Steam UI. Everything is emitted as a single
 *               ESM file at `plugin/.millennium/Dist/index.js`.
 */
export default defineConfig(({ mode }) => {
	const isPlugin = mode === 'plugin' || mode === 'webkit';

	const pluginAliases = [
		{ find: /^react$/, replacement: resolve(here, 'src/plugin/react-external.ts') },
		{ find: /^react\/jsx-runtime$/, replacement: resolve(here, 'src/plugin/jsx-runtime.ts') },
		{ find: /^react\/jsx-dev-runtime$/, replacement: resolve(here, 'src/plugin/jsx-runtime.ts') },
		{ find: /^react-dom$/, replacement: resolve(here, 'src/plugin/react-dom-external.ts') },
		{ find: /^react-dom\/client$/, replacement: resolve(here, 'src/plugin/react-dom-external.ts') },
	];

	return {
		plugins: [react()],
		define: {
			__GALEX_MODE__: JSON.stringify(isPlugin ? 'plugin' : 'app'),
			__GALEX_VERSION__: JSON.stringify(process.env.npm_package_version ?? '0.1.0'),
		},
		resolve: {
			alias: isPlugin ? pluginAliases : [],
		},
		server: {
			host: '0.0.0.0',
			port: 5173,
			strictPort: false,
			// The Arena preview proxies the dev server under a public hostname,
			// so host filtering has to be open.
			allowedHosts: true,
			hmr: { clientPort: 443 },

		},
		build: isPlugin
			? {
					target: 'chrome110',
					cssCodeSplit: false,
					emptyOutDir: mode !== 'webkit',
					outDir: resolve(here, '../plugin/.millennium/Dist'),
					lib: {
						entry: resolve(here, mode === 'webkit' ? 'src/plugin/webkit.ts' : 'src/main.tsx'),
						formats: ['es'],
						fileName: () => mode === 'webkit' ? 'webkit.js' : 'index.js',
					},
					rollupOptions: {
						output: { inlineDynamicImports: true, assetFileNames: 'assets/[name][extname]' },
					},
					minify: 'esbuild',
				}
			: {
					target: 'chrome110',
					outDir: 'dist',
					sourcemap: true,
				},
	};
});
