// Render smoke test: mounts App into jsdom against the fixture backend and walks
// every view. Fails if the shell renders nothing, a view stays empty or React throws.
//
//   node devserver/src/server.js --port 7788 &
//   npx vite build --ssr src/App.tsx --outDir dist-ssr --emptyOutDir
//   node scripts/smoke.mjs

import { createEnv } from "./dom-env.mjs";

const env = await createEnv();
const { container, errors, settle, html, text, clickByText, crashed } = env;

const checks = [
  ["renders markup", html().length > 2000],
  ["shows shell", /gx-/.test(html())],
  ["has mod rows", /BepInExPack|LethalLib|Lethal Company/i.test(text())],
  ["no react crash", !crashed()],
];

const views = [
  ["Browse", /Category|All packages|Search Thunderstore|deprecated|Install|Thunderstore/i],
  ["Updates", /update/i],
  ["Profiles", /Profile|Default|New profile|Duplicate/i],
  ["Config", /\.cfg|Settings|Save|Reset|Enable/i],
  ["Activity", /Log|Activity|queue|Install/i],
  ["Installed", /Installed mods/i],
];

console.log("--- navigation ---");
for (const [label, pattern] of views) {
  if (!clickByText(label)) {
    checks.push([`nav ${label}`, false]);
    continue;
  }
  await settle();
  const viewText = text();
  checks.push([`nav ${label}`, viewText.length > 400 && pattern.test(viewText) && !crashed()]);
}

let failed = false;
for (const [label, ok] of checks) {
  console.log(`${ok ? "✓" : "✗"} ${label}`);
  if (!ok) failed = true;
}

console.log(`\n--- text (${text().length} chars) ---\n${text().slice(0, 900)}\n`);
if (errors.length) {
  console.log(`--- console.error (${errors.length}) ---`);
  for (const error of errors.slice(0, 8)) console.log(error.slice(0, 400));
}

if (failed || crashed()) {
  console.log("\n--- html ---\n", html().slice(0, 3000));
  process.exit(1);
}
console.log("smoke: OK");
process.exit(0);
