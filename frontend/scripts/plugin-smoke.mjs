// Steam-side smoke test: loads the built Millennium bundle the way the Steam
// client does (a side-effect ESM import with window.SP_REACT / SP_REACTDOM
// already published), then checks the launcher, the hotkey and the window.
//
//   node devserver/src/server.js --port 7788 &
//   npx vite build --mode plugin
//   node scripts/plugin-smoke.mjs

import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { JSDOM } from "jsdom";

const here = dirname(fileURLToPath(import.meta.url));
const backend = process.env.GALEX_API ?? "http://127.0.0.1:7788";
const bundle = process.env.GALEX_BUNDLE
  ? resolve(process.cwd(), process.env.GALEX_BUNDLE)
  : resolve(here, "../../plugin/.millennium/Dist/index.js");
const loadable = resolve(here, "../dist-ssr/plugin-bundle.mjs");

mkdirSync(dirname(loadable), { recursive: true });
copyFileSync(bundle, loadable); // .mjs so Node parses it as ESM

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: "http://localhost:5173/",
  pretendToBeVisual: true,
});
const { window } = dom;

window.Element.prototype.scrollIntoView = function scrollIntoView() {};
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
  dispatchEvent: () => false,
});

const nodeFetch = globalThis.fetch;
const fetchImpl = (input, init) => {
  const raw = typeof input === "string" ? input : input.url;
  return nodeFetch(new URL(raw, backend).toString(), init);
};

class QuietEventSource {
  constructor(url) {
    this.url = url;
    this.readyState = 1;
    this.onopen = null;
    this.onmessage = null;
    this.onerror = null;
    const controller = new AbortController();
    this.close = () => {
      this.readyState = 2;
      controller.abort();
    };
    void (async () => {
      try {
        const response = await fetchImpl(url, {
          headers: { accept: "text/event-stream" },
          signal: controller.signal,
        });
        if (!response.body) return;
        this.onopen?.({});
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          let boundary = buffer.indexOf("\n\n");
          while (boundary >= 0) {
            const frame = buffer.slice(0, boundary);
            buffer = buffer.slice(boundary + 2);
            const data = frame
              .split("\n")
              .filter((line) => line.startsWith("data:"))
              .map((line) => line.slice(5).trim())
              .join("\n");
            if (data) this.onmessage?.({ data });
            boundary = buffer.indexOf("\n\n");
          }
        }
      } catch {
        /* closed */
      }
    })();
  }
  addEventListener() {}
  removeEventListener() {}
}

const assign = (key, value) =>
  Object.defineProperty(globalThis, key, { value, configurable: true, writable: true });

assign("window", window);
assign("document", window.document);
assign("navigator", window.navigator);
assign("location", window.location);
assign("localStorage", window.localStorage);
assign("HTMLElement", window.HTMLElement);
assign("Element", window.Element);
assign("Node", window.Node);
assign("getComputedStyle", window.getComputedStyle.bind(window));
assign("requestAnimationFrame", (cb) => setTimeout(() => cb(Date.now()), 0));
assign("cancelAnimationFrame", (id) => clearTimeout(id));
assign("fetch", fetchImpl);
assign("EventSource", QuietEventSource);

// What Millennium's Bootstrap.injectLegacyReactGlobals() publishes in Steam.
const React = (await import("react")).default;
const ReactDOMClient = await import("react-dom/client");
const ReactDOM = (await import("react-dom")).default;
window.SP_REACT = React;
window.SP_REACTDOM = { ...ReactDOM, ...ReactDOMClient };
window.MILLENNIUM_API = {};

// Millennium >= 3 publishes its JSX factory too; GALEX_JSX_FACTORY=1 exercises
// that path so both branches of src/plugin/jsx-runtime.ts are covered.
if (process.env.GALEX_JSX_FACTORY === "1") {
  const runtime = await import("react/jsx-runtime");
  window.SP_JSX_FACTORY = { Fragment: React.Fragment, jsx: runtime.jsx, jsxs: runtime.jsxs };
  console.log("· using Steam-provided SP_JSX_FACTORY");
}

const errors = [];
const originalError = console.error;
console.error = (...args) => {
  errors.push(args.map(String).join(" "));
  originalError(...args);
};

// Millennium: await Promise.all(shims.map((shim) => import(shim)))
await import(loadable);
await new Promise((resolve) => setTimeout(resolve, 2000));

const doc = window.document;
const results = [];
const check = (label, ok, extra = "") => {
  results.push({ label, ok });
  console.log(`${ok ? "✓" : "✗"} ${label}${extra ? ` — ${extra}` : ""}`);
};

check("mount host created", Boolean(doc.getElementById("galex-steam-root")));
check("launcher pill rendered", /Mods/.test(doc.querySelector(".gx-launcher")?.textContent ?? ""));
check("styles injected", Boolean(doc.getElementById("galex-styles")));
check("window closed by default", !doc.querySelector(".gx-plugin-window"));

// Ctrl+Shift+G is what a user actually presses.
const hotkey = () =>
  doc.dispatchEvent(
    new window.KeyboardEvent("keydown", { key: "G", shiftKey: true, ctrlKey: true, bubbles: true }),
  );
hotkey();
await new Promise((resolve) => setTimeout(resolve, 1800));
check("hotkey opens the window", Boolean(doc.querySelector(".gx-plugin-window")));
check("app renders inside Steam", /Installed mods|Installed/i.test(doc.body.textContent ?? ""));

const escape = () =>
  doc.dispatchEvent(new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
escape();
await new Promise((resolve) => setTimeout(resolve, 500));
check("escape closes the window", !doc.querySelector(".gx-plugin-window"));

check("global API exposed", typeof window.GaleX?.open === "function");
window.GaleX?.open();
await new Promise((resolve) => setTimeout(resolve, 600));
check("window.GaleX.open works", Boolean(doc.querySelector(".gx-plugin-window")));

if (errors.length) {
  console.log(`\n--- console.error (${errors.length}) ---`);
  for (const error of errors.slice(0, 6)) console.log(error.slice(0, 300));
}

const failed = results.filter((result) => !result.ok);
if (failed.length) {
  console.log("\n--- html ---\n", doc.body.innerHTML.slice(0, 2000));
  console.log(`plugin-smoke: ${failed.length} failed of ${results.length}`);
  process.exit(1);
}
console.log(`\nplugin-smoke: OK (${results.length} checks)`);
process.exit(0);
