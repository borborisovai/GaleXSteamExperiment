import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Steam/Millennium can intercept steamloopback.host subresources. The config
// document must not depend on a separate stylesheet request: inline the built
// Tailwind CSS so the upstream Gale editor is styled even when /config/app.css
// is blocked or rewritten by a proxy. The CSS file is still emitted for guards.
const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, '../../backend/gale/config-ui');
const htmlPath = resolve(out, 'index.html');
const css = readFileSync(resolve(out, 'app.css'), 'utf8');
let html = readFileSync(htmlPath, 'utf8');
if (!/<link[^>]*rel=["']stylesheet["'][^>]*>/.test(html)) throw new Error('config index.html has no stylesheet link to inline');
html = html.replace(/<link[^>]*rel=["']stylesheet["'][^>]*>/, `<style>${css.replace(/<\/style/gi, '<\\/style')}</style>`);
html = html.replace(/\s+crossorigin(?:=["'][^"']*["'])?/g, '');
writeFileSync(htmlPath, html);
console.log('✓ config CSS inlined into index.html (no stylesheet subresource in Steam)');
