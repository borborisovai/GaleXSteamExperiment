function s(n) {
  let t = n;
  for (let i = 0; i < 2 && typeof t == "string"; i++)
    try {
      t = JSON.parse(t);
    } catch {
      throw new Error("Invalid GaleX JSON reply from Millennium");
    }
  if (typeof t != "object" || t === null || Array.isArray(t) || typeof t.ok != "boolean")
    throw new Error("Invalid GaleX reply from Millennium");
  return t;
}
const l = window;
if (!l.__GALEX_BROWSER_HOOK__) {
  l.__GALEX_BROWSER_HOOK__ = !0;
  const n = (r, o = !1) => {
    let e = document.getElementById("galex-browser-toast");
    e || (e = document.createElement("div"), e.id = "galex-browser-toast", e.setAttribute("role", "status"), e.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:2147483647;max-width:360px;padding:14px 20px;background:#1b2838;color:#dfe3e8;border:1px solid #66c0f4;border-radius:4px;box-shadow:0 5px 30px #0008;font:13px Arial,sans-serif;", document.body.appendChild(e)), e.textContent = r, e.style.borderColor = o ? "#d94b4b" : "#66c0f4", setTimeout(() => e?.remove(), 5e3);
  }, t = async (r) => {
    if (!r.startsWith("ror2mm://")) return !1;
    const o = location.pathname.match(/^\/c\/([a-z0-9-]+)\//)?.[1];
    if (!o)
      return n("GaleX: open a package page on Thunderstore.", !0), !0;
    try {
      const e = await l.Millennium.callServerMethod("GaleX", "queue_link", { payload: JSON.stringify({ url: r, slug: o }) }), a = s(e);
      if (!a.ok) throw new Error(a.error || "Backend unavailable");
      n("GaleX: link sent to Steam. Choose a profile in the Steam window to install.");
    } catch (e) {
      n("GaleX: " + (e instanceof Error ? e.message : String(e)), !0);
    }
    return !0;
  };
  document.addEventListener("click", (r) => {
    const o = r.target?.closest?.("a[href]");
    o?.href.startsWith("ror2mm://") && (r.preventDefault(), r.stopImmediatePropagation(), t(o.href));
  }, !0);
  const i = window.open.bind(window);
  window.open = (r, o, e) => {
    const a = String(r ?? "");
    return a.startsWith("ror2mm://") ? (t(a), null) : i(r, o, e);
  };
}
