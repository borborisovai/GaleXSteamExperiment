import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body><a id="install" href="ror2mm://v1/install/thunderstore.io/Test/Mod/1.0.0/">Install</a></body></html>', {
  url: 'https://thunderstore.io/c/lethal-company/p/Test/Mod/',
  pretendToBeVisual: true,
});
const { window } = dom;
for (const key of ['window', 'document', 'location', 'HTMLElement', 'Element', 'Node', 'CustomEvent', 'Event', 'MouseEvent']) globalThis[key] = window[key];
const queued = [];
let reject = false;
window.Millennium = {
  async callServerMethod(plugin, method, args) {
    assert.equal(plugin, 'GaleX');
    assert.equal(method, 'queue_link');
    if (reject) return JSON.stringify(JSON.stringify({ ok: false, error: 'test rejection' }));
    queued.push(JSON.parse(args.payload));
    // Same double JSON layer as Millennium 3.6.1 FFI + Lua string replies.
    return JSON.stringify(JSON.stringify({ ok: true }));
  },
};
await import(pathToFileURL(resolve('../plugin/.millennium/Dist/webkit.js')).href);
const anchor = document.getElementById('install');
const event = new window.MouseEvent('click', { bubbles: true, cancelable: true });
anchor.dispatchEvent(event);
await new Promise(r => setTimeout(r, 50));
assert.equal(event.defaultPrevented, true, 'ror2mm anchor navigation prevented');
assert.equal(queued.length, 1);
assert.equal(queued[0].slug, 'lethal-company');
assert.match(queued[0].url, /^ror2mm:\/\/v1\/install\/thunderstore\.io\//);
assert.match(document.getElementById('galex-browser-toast')?.textContent ?? '', /ссылка передана в Steam/, 'double-encoded success decoded');
const result = window.open('ror2mm://v1/install/thunderstore.io/Test/Other/2.0.0/');
await new Promise(r => setTimeout(r, 50));
assert.equal(result, null);
assert.equal(queued.length, 2, 'window.open ror2mm intercepted in isolated world');
reject = true;
window.open('ror2mm://v1/install/thunderstore.io/Test/Rejected/3.0.0/');
await new Promise(r => setTimeout(r, 50));
assert.match(document.getElementById('galex-browser-toast')?.textContent ?? '', /test rejection/, 'double-encoded error envelope surfaced');
console.log('✓ webkit bundle: Thunderstore ror2mm interception and Millennium IPC envelopes');
console.log('  (main-world programmatic location changes and OS protocol handlers are out of scope)');
window.close();
process.exit(0);
