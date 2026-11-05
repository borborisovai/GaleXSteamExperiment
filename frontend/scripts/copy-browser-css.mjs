import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const target = resolve(here, '../../plugin/.millennium/Dist/browser.css');
mkdirSync(dirname(target), { recursive: true });
copyFileSync(resolve(here, '../src/plugin/browser.css'), target);
console.log('✓ browser.css eligibility marker copied');
