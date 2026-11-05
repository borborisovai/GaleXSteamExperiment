// Shared jsdom harness: mounts the real App against the fixture backend so the
// UI can be exercised headlessly (npm run smoke / npm run smoke:interact).
import { JSDOM } from "jsdom";

const BACKEND = process.env.GALEX_API ?? "http://127.0.0.1:7788";

export async function createEnv({ settleMs = 900 } = {}) {
  const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
    url: "http://localhost:5173/",
    pretendToBeVisual: true,
  });
  const { window } = dom;

  window.Element.prototype.scrollIntoView = function scrollIntoView() {};
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent: () => false,
  });

  // Real SSE over fetch: the fixture backend streams install progress, so the
  // harness exercises the same event pipeline the plugin uses in Steam.
  class StreamingEventSource {
    constructor(url) {
      this.url = new URL(url, BACKEND).toString();
      this.readyState = 0;
      this.onopen = null;
      this.onmessage = null;
      this.onerror = null;
      this.listeners = new Map();
      this.controller = new AbortController();
      events.push({ type: "sse.open", url: this.url });
      void this.open();
    }

    addEventListener(type, fn) {
      this.listeners.set(type, [...(this.listeners.get(type) ?? []), fn]);
    }

    removeEventListener() {}

    async open() {
      let response;
      try {
        response = await fetchImpl(this.url, {
          headers: { accept: "text/event-stream" },
          signal: this.controller.signal,
        });
      } catch {
        this.fail();
        return;
      }
      if (!response.ok || !response.body) {
        this.fail();
        return;
      }
      this.readyState = 1;
      this.onopen?.({});
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      try {
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
            if (data) {
              events.push({ type: "sse.frame", data });
              this.onmessage?.({ data });
              for (const fn of this.listeners.get("message") ?? []) fn({ data });
            }
            boundary = buffer.indexOf("\n\n");
          }
        }
      } catch {
        /* aborted */
      }
      if (this.readyState !== 2) this.fail();
    }

    fail() {
      this.readyState = 2;
      this.onerror?.({});
    }

    close() {
      this.readyState = 2;
      this.controller.abort();
      void this.listeners;
    }
  }

  const nodeFetch = globalThis.fetch;
  const requests = [];
  const events = [];
  const fetchImpl = async (input, init) => {
    const raw = typeof input === "string" ? input : input.url;
    const url = new URL(raw, BACKEND).toString();
    const method = String(init?.method ?? (typeof input === "object" ? input.method : "GET")).toUpperCase();
    const response = await nodeFetch(url, init);
    requests.push({ method, url, status: response.status, body: typeof init?.body === "string" ? init.body : undefined });
    return response;
  };

  globalThis.window = window;
  globalThis.document = window.document;
  Object.defineProperty(globalThis, "navigator", { value: window.navigator, configurable: true });
  Object.defineProperty(globalThis, "location", { value: window.location, configurable: true });
  globalThis.localStorage = window.localStorage;
  globalThis.HTMLElement = window.HTMLElement;
  globalThis.Element = window.Element;
  globalThis.Node = window.Node;
  globalThis.getComputedStyle = window.getComputedStyle.bind(window);
  globalThis.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 0);
  globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
  globalThis.fetch = fetchImpl;
  window.fetch = fetchImpl;
  globalThis.EventSource = StreamingEventSource;
  window.EventSource = StreamingEventSource;

  const errors = [];
  const originalError = console.error;
  console.error = (...args) => {
    errors.push(args.map(String).join(" "));
    originalError(...args);
  };

  const React = (await import("react")).default;
  const { createRoot } = await import("react-dom/client");
  const { App } = await import("../dist-ssr/App.js");

  const container = window.document.getElementById("root");
  createRoot(container).render(React.createElement(App));

  const settle = (ms = settleMs) => new Promise((resolve) => setTimeout(resolve, ms));
  await settle(2200);

  const waitFor = async (predicate, timeoutMs = 6000, stepMs = 150) => {
    const deadline = Date.now() + timeoutMs;
    for (;;) {
      if (predicate()) return true;
      if (Date.now() > deadline) return false;
      await new Promise((resolve) => setTimeout(resolve, stepMs));
    }
  };

  const html = () => container.innerHTML;
  const text = () => (container.textContent ?? "").replace(/\s+/g, " ").trim();
  // Portals (drawers, palette, toasts) mount on document.body, so look there.
  const docText = () => (window.document.body.textContent ?? "").replace(/\s+/g, " ").trim();
  const clickByText = (label, { exact = false } = {}) => {
    const nodes = [...window.document.body.querySelectorAll("button, a, [role=button]")];
    const el = nodes.find((node) => {
      const value = (node.textContent ?? "").trim();
      return exact ? value === label : value.startsWith(label);
    });
    if (!el) return false;
    el.dispatchEvent(new window.MouseEvent("click", { bubbles: true, cancelable: true }));
    return true;
  };
  const type = (el, value) => {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
    setter?.call(el, value);
    el.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
  const key = (keyName, init = {}) => {
    window.document.dispatchEvent(
      new window.KeyboardEvent("keydown", { key: keyName, bubbles: true, cancelable: true, ...init }),
    );
  };
  const crashed = () => /Minified React error|Cannot read propert|is not a function|undefined is not/i.test(html());

  return { window, container, errors, requests, events, settle, waitFor, html, text, docText, clickByText, type, key, crashed };
}
