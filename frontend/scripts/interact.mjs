// Interaction test: drives the real UI through the flows that matter
// (install from Browse, toggle a mod, edit a config value, palette, profiles)
// and fails on any React error / empty render.
//
//   node devserver/src/server.js --port 7788 &
//   npx vite build --ssr src/App.tsx --outDir dist-ssr --emptyOutDir
//   node scripts/interact.mjs

import { createEnv } from "./dom-env.mjs";

const env = await createEnv();
const { window, container, errors, requests, events, settle, waitFor, html, text, docText, clickByText, crashed } = env;

const results = [];
const check = (label, ok, extra = "") => {
  results.push({ label, ok, extra });
  console.log(`${ok ? "✓" : "✗"} ${label}${extra ? ` — ${extra}` : ""}`);
};
const log = (label, extra = "") => console.log(`· ${label}${extra ? ` — ${extra}` : ""}`);

const findByRoleSwitch = (label) =>
  container.querySelector(`[role="switch"][aria-label="${label}"]`);

// ---------------------------------------------------------------- 1. install
check("shell rendered", !crashed() && html().length > 2000);
clickByText("Browse");
await settle(1400);

const before = text();
const cards = container.querySelectorAll("button.gx-pkgcard");
check("browse shows package cards", cards.length > 3, `${cards.length} cards`);

const countMods = async () => {
  const response = await fetch("http://127.0.0.1:7788/api/v1/profiles/1/mods");
  return (await response.json()).length;
};

const modsBefore = await countMods();

if (cards.length) {
  const target = [...cards].find((card) => !card.classList.contains("is-installed")) ?? cards[0];
  target.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
  await settle(1200);
  const drawerText = docText();
  check("package drawer opens", /README|Dependencies|Versions|Install/i.test(drawerText));

  const installButton = [
    ...window.document.body.querySelectorAll(".gx-drawer button, .gx-drawer__actions button"),
  ].find((node) => /^(Install|Reinstall)(\s|\+|$)/.test((node.textContent ?? "").trim()));
  check("install button present", Boolean(installButton));
  if (installButton) {
    installButton.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
    await settle(2500);
    const post = requests.find((entry) => entry.method === "POST" && entry.url.includes("/install"));
    check("install request accepted", post?.status === 202, post ? `${post.status} ${post.body?.slice(0, 90)}` : "no POST /install");
    await settle(5000);
    const modsAfter = await countMods();
    check("mod lands in the profile", modsAfter > modsBefore, `${modsBefore} → ${modsAfter} mods`);

    // The queue finishes server-side; SSE ("install.settled") must refresh the UI
    // without a reload, otherwise the list would stay stale until the next poll.
    clickByText("Installed");
    const refreshed = await waitFor(
      () => container.querySelectorAll(".gx-modrow").length >= modsAfter,
      8000,
    );
    const rows = container.querySelectorAll(".gx-modrow").length;
    check("UI refreshes from SSE after install", refreshed, `${rows} rows, ${modsAfter} in profile`);
    log("after install", text().slice(0, 160));
  }
}

// ------------------------------------------------------------- 2. toggle mod
clickByText("Installed");
await settle(1000);
const firstToggle = container.querySelector('[role="switch"][aria-label^="Toggle "]');
check("mod toggle found", Boolean(firstToggle));
if (firstToggle) {
  const wasOn = firstToggle.getAttribute("aria-checked");
  firstToggle.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
  await settle(1200);
  const sameLabel = container.querySelector(
    `[role="switch"][aria-label="${firstToggle.getAttribute("aria-label")}"]`,
  );
  check("toggle flips state", sameLabel?.getAttribute("aria-checked") !== wasOn, `${wasOn} → ${sameLabel?.getAttribute("aria-checked")}`);
}

// ------------------------------------------------------------- 3. config edit
clickByText("Config");
await settle(1400);
const cfgText = text();
check("config files listed", /\.cfg/i.test(cfgText), cfgText.slice(0, 90));
const cfgInputs = container.querySelectorAll('input[type="text"], input[type="number"], textarea');
log("config inputs", String(cfgInputs.length));
const saveButton = [...container.querySelectorAll("button")].find((node) =>
  /^(Save|Apply)/.test((node.textContent ?? "").trim()),
);
if (saveButton) {
  saveButton.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
  await settle(1200);
  log("after save", text().slice(0, 120));
}

// ---------------------------------------------------------------- 4. palette
env.key("k", { ctrlKey: true, metaKey: true });
await settle(700);
const paletteOpen = /Jump to|Search|Type a command|Go to/i.test(text());
check("command palette opens", paletteOpen);
env.key("Escape");
await settle(400);

// --------------------------------------------------------------- 5. profiles
clickByText("Profiles");
await settle(1200);
check("profiles listed", /profile/i.test(text()), text().slice(0, 90));

// ---------------------------------------------------------- 6. updates view
clickByText("Updates");
await settle(1200);
check("updates view renders", /update/i.test(text()), text().slice(0, 90));

// --------------------------------------------------------------- diagnostics
console.log(`\n--- sse (${events.length} frames) ---`);
for (const event of events.slice(-6)) console.log((event.data ?? event.url ?? "").slice(0, 110));

console.log("\n--- writes ---");
for (const entry of requests.filter((item) => item.method !== "GET")) console.log(`${entry.method} ${entry.status} ${entry.url.replace("http://127.0.0.1:7788", "")} ${entry.body ?? ""}`);
if (errors.length) {
  console.log(`\n--- console.error (${errors.length}) ---`);
  for (const error of errors.slice(0, 6)) console.log(error.slice(0, 300));
}

const failed = results.filter((r) => !r.ok);
if (crashed() || failed.length) {
  console.log("\n--- html ---\n", html().slice(0, 2500));
  console.log(`interact: ${failed.length} failed of ${results.length}`);
  process.exit(1);
}
console.log(`\ninteract: OK (${results.length} checks)`);
process.exit(0);
