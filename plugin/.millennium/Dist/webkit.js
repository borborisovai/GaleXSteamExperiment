const a = window;
if (!a.__GALEX_BROWSER_HOOK__) {
  a.__GALEX_BROWSER_HOOK__ = !0;
  const n = (e, r = !1) => {
    let t = document.getElementById("galex-browser-toast");
    t || (t = document.createElement("div"), t.id = "galex-browser-toast", t.setAttribute("role", "status"), t.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:2147483647;max-width:360px;padding:14px 20px;background:#1b2838;color:#dfe3e8;border:1px solid #66c0f4;border-radius:4px;box-shadow:0 5px 30px #0008;font:13px Arial,sans-serif;", document.body.appendChild(t)), t.textContent = e, t.style.borderColor = r ? "#d94b4b" : "#66c0f4", setTimeout(() => t?.remove(), 5e3);
  }, i = async (e) => {
    if (!e.startsWith("ror2mm://")) return !1;
    const r = location.pathname.match(/^\/c\/([a-z0-9-]+)\//)?.[1];
    if (!r)
      return n("GaleX: откройте пакет в сообществе Thunderstore.", !0), !0;
    try {
      const t = await a.Millennium.callServerMethod("GaleX", "queue_link", { payload: JSON.stringify({ url: e, slug: r }) }), o = typeof t == "string" ? JSON.parse(t) : t;
      if (!o?.ok) throw new Error(o?.error || "Backend unavailable");
      n("GaleX: ссылка передана в Steam. Выберите профиль для установки.");
    } catch (t) {
      n("GaleX: " + (t instanceof Error ? t.message : String(t)), !0);
    }
    return !0;
  };
  document.addEventListener("click", (e) => {
    const r = e.target?.closest?.("a[href]");
    r?.href.startsWith("ror2mm://") && (e.preventDefault(), e.stopImmediatePropagation(), i(r.href));
  }, !0);
  const s = window.open.bind(window);
  window.open = (e, r, t) => {
    const o = String(e ?? "");
    return o.startsWith("ror2mm://") ? (i(o), null) : s(e, r, t);
  };
}
