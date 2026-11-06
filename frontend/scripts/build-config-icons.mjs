import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getIconData } from '@iconify/utils';
import mdi from '@iconify-json/mdi/icons.json' with { type: 'json' };
import ph from '@iconify-json/ph/icons.json' with { type: 'json' };
const here = dirname(fileURLToPath(import.meta.url));
const upstream = resolve(here, '../src/gale-upstream');
const names = new Set();
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith('.svelte')) {
      const text = readFileSync(path, 'utf8');
      for (const match of text.matchAll(/icon=["']([a-z0-9-]+):([a-z0-9-]+)["']/g)) names.add(`${match[1]}:${match[2]}`);
      for (const match of text.matchAll(/icon=\{renderedIcon\}/g)) { names.add('ph:circle-notch'); }
    }
  }
}
walk(upstream);
names.add('mdi:question-mark-circle'); names.add('mdi:magnify'); names.add('mdi:close'); names.add('mdi:check'); names.add('mdi:minus'); names.add('mdi:refresh'); names.add('mdi:chevron-down'); names.add('mdi:open-in-new'); names.add('mdi:delete'); names.add('mdi:alert-circle'); names.add('mdi:lock'); names.add('mdi:config'); names.add('mdi:folder-open-outline'); names.add('ph:circle-notch');
const collections = { mdi, ph };
// Iconify removed/renamed some legacy names used by upstream Gale.
const fallbacks = { 'mdi:config': 'mdi:cog' };
const output = {};
for (const original of names) {
  const full = fallbacks[original] ?? original;
  const [prefix, name] = full.split(':');
  const collection = collections[prefix];
  if (!collection) continue;
  // getIconData does not resolve aliases (e.g. mdi:config -> mdi:cog), which
  // previously made Iconify fall back to its blocked HTTP API at runtime.
  let data = getIconData(collection, name);
  let alias = name;
  const seen = new Set();
  while (!data && collection.aliases?.[alias] && !seen.has(alias)) {
    seen.add(alias);
    alias = collection.aliases[alias].parent;
    data = getIconData(collection, alias);
  }
  if (!data) throw new Error(`Missing bundled icon: ${original}`);
  output[prefix] ??= { icons: {}, width: collection.width, height: collection.height };
  // Keep the name upstream actually requests (e.g. mdi:config), even when the
  // pinned collection only ships its replacement (mdi:cog).
  output[prefix].icons[original.split(':')[1]] = data;
}
writeFileSync(resolve(here, '../config/src/icons.json'), JSON.stringify(output));
console.log(`✓ bundled ${Object.values(output).reduce((n, c) => n + Object.keys(c.icons).length, 0)} Gale icons for offline Steam use`);
