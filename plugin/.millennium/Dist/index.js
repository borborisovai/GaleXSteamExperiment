const be = window.SP_REACT, Re = window.SP_JSX_FACTORY;
function Ee(e, n, t) {
  const { children: r, ...o } = n ?? {};
  return t !== void 0 && (o.key = t), r === void 0 ? be.createElement(e, o) : Array.isArray(r) ? be.createElement(e, o, ...r) : be.createElement(e, o, r);
}
const ne = typeof Re?.jsx == "function" ? Re : void 0, E = ne?.Fragment ?? be.Fragment, a = ne ? ne.jsx : Ee, i = ne?.jsxs ?? Ee;
ne && ne.jsx;
const na = '.gx-app{--gx-bg: #0b0e13;--gx-bg-soft: #0f131a;--gx-panel: rgba(20, 25, 33, .88);--gx-panel-2: rgba(27, 33, 43, .72);--gx-panel-3: rgba(34, 41, 53, .6);--gx-border: rgba(255, 255, 255, .07);--gx-border-strong: rgba(255, 255, 255, .14);--gx-text: #e8edf5;--gx-dim: #a2acbd;--gx-mute: #6c7789;--gx-accent: #4fb3f0;--gx-accent-strong: #1b9bf0;--gx-accent-soft: rgba(79, 179, 240, .14);--gx-green: #5cc85c;--gx-green-soft: rgba(92, 200, 92, .14);--gx-amber: #e9b93b;--gx-amber-soft: rgba(233, 185, 59, .14);--gx-red: #ef5f5f;--gx-red-soft: rgba(239, 95, 95, .14);--gx-purple: #a98bfa;--gx-purple-soft: rgba(169, 139, 250, .16);--gx-radius: 14px;--gx-radius-sm: 10px;--gx-shadow: 0 24px 70px rgba(0, 0, 0, .55);--gx-font: "Motiva Sans", "Inter", "Segoe UI", system-ui, -apple-system, "Helvetica Neue", sans-serif;position:relative;display:grid;grid-template-columns:238px minmax(0,1fr);height:100vh;height:100dvh;overflow:hidden;background:radial-gradient(1200px 700px at 12% -10%,rgba(37,84,130,.28),transparent 60%),radial-gradient(900px 620px at 92% 110%,rgba(58,38,92,.24),transparent 62%),linear-gradient(180deg,#0c1016,#090c11);color:var(--gx-text);font-family:var(--gx-font);font-size:13.5px;line-height:1.45;letter-spacing:.01em;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.gx-app *,.gx-app *:before,.gx-app *:after{box-sizing:border-box}.gx-app ::-webkit-scrollbar{width:10px;height:10px}.gx-app ::-webkit-scrollbar-track{background:transparent}.gx-app ::-webkit-scrollbar-thumb{background:#ffffff1a;border-radius:20px;border:3px solid transparent;background-clip:content-box}.gx-app ::-webkit-scrollbar-thumb:hover{background:#fff3;background-clip:content-box}.gx-app button{font-family:inherit;font-size:inherit;color:inherit}.gx-app h1,.gx-app h2,.gx-app h3,.gx-app h4{margin:0;font-weight:600;letter-spacing:-.01em}.gx-app p{margin:0}.gx-app a{color:var(--gx-accent);text-decoration:none}.gx-app a:hover{text-decoration:underline}.gx-glow{position:absolute;width:460px;height:460px;border-radius:50%;filter:blur(120px);opacity:.35;pointer-events:none;z-index:0}.gx-glow--one{top:-180px;left:30%;background:#2b7aba80}.gx-glow--two{bottom:-220px;right:8%;background:#6a44b35c}.gx-sidebar{position:relative;z-index:2;display:flex;flex-direction:column;gap:14px;padding:16px 12px 12px;background:linear-gradient(180deg,#0d1117eb,#0a0d12d1);border-right:1px solid var(--gx-border);backdrop-filter:blur(18px)}.gx-brand{display:flex;align-items:center;gap:10px;padding:4px 8px 10px}.gx-brand__mark,.gx-splash__mark{position:relative;display:grid;place-items:center;width:34px;height:34px;border-radius:11px;background:linear-gradient(140deg,#2b8fd6,#1e5f9a 60%,#2a2d6b);box-shadow:0 8px 20px #1a7abe59,inset 0 1px #ffffff38}.gx-brand__mark span,.gx-splash__mark span{position:absolute;background:#eaf6ff;height:3px;border-radius:2px}.gx-brand__mark span:nth-child(1),.gx-splash__mark span:nth-child(1){width:14px;transform:translateY(-3px)}.gx-brand__mark span:nth-child(2),.gx-splash__mark span:nth-child(2){width:9px;transform:translateY(3px);opacity:.75}.gx-brand__text{display:flex;flex-direction:column;line-height:1.15}.gx-brand__text strong{font-size:15px;letter-spacing:.02em}.gx-brand__text small{color:var(--gx-mute);font-size:10.5px;text-transform:uppercase;letter-spacing:.14em}.gx-nav{display:flex;flex-direction:column;gap:2px}.gx-nav__item{display:flex;align-items:center;gap:11px;width:100%;padding:9px 11px;border:0;border-radius:var(--gx-radius-sm);background:transparent;color:var(--gx-dim);cursor:pointer;text-align:left;transition:background .14s ease,color .14s ease,transform .14s ease}.gx-nav__item:hover{background:#ffffff0d;color:var(--gx-text)}.gx-nav__item.is-active{background:linear-gradient(90deg,#2b8fd638,#2b8fd60f);color:#fff;box-shadow:inset 0 0 0 1px #5db8f038}.gx-nav__item.is-active svg{color:var(--gx-accent)}.gx-nav__label{flex:1;font-weight:500}.gx-nav__badge{min-width:22px;padding:1px 6px;border-radius:20px;background:#ffffff14;color:var(--gx-dim);font-size:11px;font-weight:600;text-align:center}.gx-nav__badge.is-accent{background:var(--gx-accent-soft);color:#8fd4ff}.gx-nav__item--sub{color:var(--gx-mute)}.gx-sidebar__spacer{flex:1}.gx-session{display:flex;flex-direction:column;gap:8px;padding:12px;border:1px solid var(--gx-border);border-radius:var(--gx-radius);background:linear-gradient(180deg,#1f2732b3,#131820b3)}.gx-session__head{display:flex;align-items:center;gap:7px;color:var(--gx-dim);font-size:11.5px;text-transform:uppercase;letter-spacing:.1em}.gx-session__meter{height:5px;border-radius:4px;background:#ffffff14;overflow:hidden}.gx-session__meter-fill{height:100%;border-radius:4px;background:linear-gradient(90deg,#2f9be0,#63d0a6);transition:width .3s ease}.gx-session__stats{display:flex;justify-content:space-between;color:var(--gx-mute);font-size:11.5px}.gx-session__stats strong{color:var(--gx-text)}.gx-session__warn{color:var(--gx-amber)}.gx-sidebar__foot{display:flex;flex-direction:column;gap:6px;padding-top:6px;border-top:1px solid var(--gx-border)}.gx-conn{display:flex;align-items:center;gap:7px;padding:2px 11px 4px;color:var(--gx-mute);font-size:11px}.gx-conn__dot{width:7px;height:7px;border-radius:50%;background:var(--gx-mute)}.gx-conn--online .gx-conn__dot{background:var(--gx-green);box-shadow:0 0 0 3px #5cc85c29}.gx-conn--offline .gx-conn__dot{background:var(--gx-red);box-shadow:0 0 0 3px #ef5f5f29}.gx-conn--booting .gx-conn__dot{background:var(--gx-amber);animation:gx-pulse 1.4s ease-in-out infinite}@keyframes gx-pulse{0%,to{opacity:1}50%{opacity:.35}}.gx-main{position:relative;z-index:1;display:flex;flex-direction:column;min-width:0;height:100%}.gx-topbar{display:flex;align-items:center;justify-content:space-between;gap:16px;height:62px;padding:0 22px;border-bottom:1px solid var(--gx-border);background:#0c1016a8;backdrop-filter:blur(20px);flex:0 0 auto}.gx-topbar__left,.gx-topbar__right{display:flex;align-items:center;gap:10px;min-width:0}.gx-topbar__right{flex:1;justify-content:flex-end}.gx-topbar__divider{width:1px;height:20px;background:var(--gx-border)}.gx-switcher{display:flex;align-items:center;gap:9px;padding:5px 10px 5px 6px;border:1px solid var(--gx-border);border-radius:12px;background:var(--gx-panel-2);cursor:pointer;transition:border-color .15s ease,background .15s ease;max-width:260px}.gx-switcher:hover,.gx-switcher.is-open{border-color:var(--gx-border-strong);background:var(--gx-panel-3)}.gx-switcher--ghost{background:transparent;border-color:transparent;padding:6px 9px}.gx-switcher--ghost:hover{background:#ffffff0d}.gx-switcher__label{font-weight:550;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gx-switcher__label+svg{color:var(--gx-mute)}.gx-updates-pill{display:flex;align-items:center;gap:5px;padding:4px 9px;border:1px solid rgba(233,185,59,.3);border-radius:20px;background:var(--gx-amber-soft);color:#f3cc6d;font-size:11.5px;font-weight:600;cursor:pointer}.gx-updates-pill:hover{background:#e9b93b3d}.gx-topbar__search{width:250px}.gx-queuebtn{position:relative;display:flex;align-items:center;gap:7px;padding:7px 11px;border:1px solid var(--gx-border);border-radius:10px;background:var(--gx-panel-2);color:var(--gx-dim);cursor:pointer;overflow:hidden;transition:border-color .15s ease,color .15s ease}.gx-queuebtn:hover,.gx-queuebtn.is-open{color:var(--gx-text);border-color:var(--gx-border-strong)}.gx-queuebtn.is-active{color:#bfe6ff;border-color:#4fb3f066;background:var(--gx-accent-soft)}.gx-queuebtn .gx-progress{position:absolute;left:0;right:0;bottom:0;height:2px;border-radius:0;background:transparent}.gx-launchgroup{display:flex;align-items:stretch;border-radius:10px;overflow:hidden}.gx-launchgroup .gx-btn--primary{border-top-right-radius:0;border-bottom-right-radius:0}.gx-launchgroup__more{display:grid;place-items:center;width:30px;border:0;border-left:1px solid rgba(0,0,0,.25);background:linear-gradient(180deg,#2ea6e8,#1b7fc0);color:#06121c;cursor:pointer}.gx-launchgroup__more:hover,.gx-launchgroup__more.is-open{filter:brightness(1.1)}.gx-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;border:1px solid transparent;border-radius:9px;font-weight:550;cursor:pointer;white-space:nowrap;transition:background .14s ease,border-color .14s ease,transform .1s ease,filter .14s ease}.gx-btn:active:not(:disabled){transform:translateY(1px)}.gx-btn:disabled{opacity:.45;cursor:not-allowed}.gx-btn--sm{padding:5px 10px;font-size:12px}.gx-btn--md{padding:8px 14px;font-size:13px}.gx-btn--lg{padding:11px 18px;font-size:14px}.gx-btn--full{width:100%}.gx-btn--primary{background:linear-gradient(180deg,#38b1f0,#1a86c8);color:#04121c;box-shadow:0 6px 16px #1a86c847,inset 0 1px #ffffff59}.gx-btn--primary:hover:not(:disabled){filter:brightness(1.08)}.gx-btn--secondary{background:#ffffff0f;border-color:var(--gx-border);color:var(--gx-text)}.gx-btn--secondary:hover:not(:disabled){background:#ffffff1a;border-color:var(--gx-border-strong)}.gx-btn--ghost{background:transparent;color:var(--gx-dim)}.gx-btn--ghost:hover:not(:disabled){background:#ffffff0f;color:var(--gx-text)}.gx-btn--danger{background:var(--gx-red-soft);border-color:#ef5f5f59;color:#ff9d9d}.gx-btn--danger:hover:not(:disabled){background:#ef5f5f3d}.gx-btn--success{background:var(--gx-green-soft);border-color:#5cc85c59;color:#a7e5a7}.gx-iconbtn{display:grid;place-items:center;width:28px;height:28px;border:1px solid transparent;border-radius:8px;background:transparent;color:var(--gx-mute);cursor:pointer;transition:background .14s ease,color .14s ease}.gx-iconbtn:hover:not(:disabled){background:#ffffff12;color:var(--gx-text)}.gx-iconbtn.is-active{background:var(--gx-accent-soft);color:#9fd8ff}.gx-iconbtn.is-danger:hover{background:var(--gx-red-soft);color:#ff9d9d}.gx-iconbtn.is-spinning svg{animation:gx-spin .9s linear infinite}@keyframes gx-spin{to{transform:rotate(360deg)}}.gx-toggle{position:relative;flex:0 0 auto;width:40px;height:22px;padding:0;border:1px solid var(--gx-border);border-radius:20px;background:#ffffff14;cursor:pointer;transition:background .18s ease,border-color .18s ease}.gx-toggle__knob{position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#cfd8e6;box-shadow:0 1px 3px #0006;transition:transform .18s cubic-bezier(.3,1.4,.6,1),background .18s ease}.gx-toggle.is-on{background:linear-gradient(180deg,#35abec,#1a86c8);border-color:#5abef580}.gx-toggle.is-on .gx-toggle__knob{transform:translate(18px);background:#fff}.gx-toggle--sm{width:34px;height:19px}.gx-toggle--sm .gx-toggle__knob{width:13px;height:13px}.gx-toggle--sm.is-on .gx-toggle__knob{transform:translate(15px)}.gx-toggle:disabled{opacity:.4;cursor:not-allowed}.gx-chip{display:inline-flex;align-items:center;gap:6px;padding:5px 11px;border:1px solid var(--gx-border);border-radius:20px;background:#ffffff0a;color:var(--gx-dim);font-size:12px;cursor:pointer;transition:all .14s ease}.gx-chip:hover:not(:disabled){color:var(--gx-text);border-color:var(--gx-border-strong)}.gx-chip.is-active{background:var(--gx-accent-soft);border-color:#4fb3f073;color:#a9dcff}.gx-chip.is-static{cursor:default}.gx-chip__count{padding:0 5px;border-radius:20px;background:#ffffff14;font-size:10.5px;font-weight:600}.gx-badge{display:inline-flex;align-items:center;gap:4px;padding:1px 7px;border-radius:6px;font-size:10.5px;font-weight:600;letter-spacing:.02em;text-transform:lowercase;white-space:nowrap}.gx-badge--neutral{background:#ffffff14;color:var(--gx-dim)}.gx-badge--blue{background:var(--gx-accent-soft);color:#9fd8ff}.gx-badge--green{background:var(--gx-green-soft);color:#a4e6a4}.gx-badge--amber{background:var(--gx-amber-soft);color:#f2cd77}.gx-badge--red{background:var(--gx-red-soft);color:#ffa3a3}.gx-badge--purple{background:var(--gx-purple-soft);color:#c9b6ff}.gx-tag{padding:1px 7px;border:1px solid var(--gx-border);border-radius:6px;color:var(--gx-mute);font-size:10.5px}.gx-spinner{display:inline-block;width:16px;height:16px;border:2px solid rgba(255,255,255,.16);border-top-color:var(--gx-accent);border-radius:50%;animation:gx-spin .8s linear infinite;flex:0 0 auto}.gx-spinner--sm{width:13px;height:13px;border-width:2px}.gx-spinner--xs{width:10px;height:10px;border-width:1.5px}.gx-progress{position:relative;height:6px;border-radius:6px;background:#ffffff14;overflow:hidden}.gx-progress__fill{height:100%;border-radius:6px;background:linear-gradient(90deg,#2f9be0,#63d0c6);transition:width .25s ease}.gx-progress__fill--success{background:linear-gradient(90deg,#4bb24b,#8fdc8f)}.gx-progress__fill--danger{background:linear-gradient(90deg,#d24c4c,#f08c8c)}.gx-skeleton{background:linear-gradient(90deg,#ffffff0d,#ffffff1a,#ffffff0d);background-size:200% 100%;animation:gx-shimmer 1.4s ease-in-out infinite;border-radius:6px}@keyframes gx-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}.gx-input{display:flex;align-items:center;gap:8px;padding:0 10px;height:34px;border:1px solid var(--gx-border);border-radius:9px;background:#090c11b8;color:var(--gx-mute);transition:border-color .15s ease,background .15s ease;min-width:0}.gx-input:focus-within{border-color:#4fb3f080;background:#090c11e6}.gx-input input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--gx-text);font-family:inherit;font-size:13px}.gx-input input::placeholder{color:var(--gx-mute)}.gx-input__clear{display:grid;place-items:center;width:18px;height:18px;border:0;border-radius:50%;background:#ffffff1a;color:var(--gx-dim);cursor:pointer}.gx-select{position:relative;display:inline-flex;align-items:center}.gx-select select{appearance:none;padding:7px 28px 7px 11px;border:1px solid var(--gx-border);border-radius:9px;background:var(--gx-panel-2);color:var(--gx-text);font-family:inherit;font-size:12.5px;cursor:pointer;outline:none}.gx-select select:focus{border-color:#4fb3f080}.gx-select>svg{position:absolute;right:9px;pointer-events:none;color:var(--gx-mute)}.gx-segmented{display:inline-flex;padding:2px;border:1px solid var(--gx-border);border-radius:9px;background:#ffffff08}.gx-segmented__item{display:flex;align-items:center;gap:5px;padding:4px 9px;border:0;border-radius:7px;background:transparent;color:var(--gx-mute);font-size:11.5px;cursor:pointer}.gx-segmented__item.is-active{background:#ffffff1a;color:var(--gx-text)}.gx-textarea{width:100%;padding:9px 11px;border:1px solid var(--gx-border);border-radius:9px;background:#090c11b8;color:var(--gx-text);font-family:inherit;font-size:13px;resize:vertical;outline:none}.gx-textarea:focus{border-color:#4fb3f080}.gx-field{display:flex;flex-direction:column;gap:7px;margin-bottom:14px}.gx-field>span{color:var(--gx-dim);font-size:11.5px;text-transform:uppercase;letter-spacing:.09em;font-weight:600}.gx-inlinefield{display:flex;align-items:center;gap:8px;color:var(--gx-dim);font-size:12.5px}.gx-inlinefield .gx-input{flex:1}.gx-number{width:84px;padding:5px 8px;border:1px solid var(--gx-border);border-radius:7px;background:#090c11b8;color:var(--gx-text);font-family:inherit;font-size:12.5px;text-align:right;outline:none}.gx-number--wide{width:190px;text-align:left}.gx-number:focus{border-color:#4fb3f080}.gx-numberfield,.gx-keyfield{display:flex;align-items:center;gap:8px}.gx-numberfield input[type=range]{width:110px;accent-color:var(--gx-accent)}.gx-radio{display:flex;flex-direction:column;gap:7px}.gx-radio__item{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border:1px solid var(--gx-border);border-radius:10px;background:#ffffff05;text-align:left;cursor:pointer;transition:all .14s ease}.gx-radio__item:hover{border-color:var(--gx-border-strong)}.gx-radio__item.is-active{border-color:#4fb3f080;background:var(--gx-accent-soft)}.gx-radio__item div{display:flex;flex-direction:column;gap:2px}.gx-radio__item span{color:var(--gx-mute);font-size:11.5px}.gx-pop{position:relative}.gx-pop__panel{position:absolute;top:calc(100% + 8px);left:0;z-index:60;min-width:220px;padding:6px;border:1px solid var(--gx-border-strong);border-radius:var(--gx-radius);background:#12171efa;box-shadow:var(--gx-shadow);backdrop-filter:blur(24px);animation:gx-pop-in .13s ease-out}.gx-pop__panel--end{left:auto;right:0}@keyframes gx-pop-in{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.gx-pop__panel--games{padding:8px}.gx-pop__search{padding:2px 2px 8px}.gx-pop__scroll{max-height:380px;overflow-y:auto;display:flex;flex-direction:column;gap:1px}.gx-pop__scroll--tasks{gap:8px;padding:2px}.gx-pop__head{display:flex;align-items:center;justify-content:space-between;padding:6px 8px 8px;color:var(--gx-dim);font-size:11.5px;text-transform:uppercase;letter-spacing:.1em}.gx-pop__foot{display:flex;align-items:center;gap:7px;margin-top:6px;padding:7px 8px 3px;border-top:1px solid var(--gx-border);color:var(--gx-mute);font-size:11px}.gx-pop__empty{padding:14px 10px;color:var(--gx-mute);font-size:12.5px;text-align:center}.gx-menuitem{display:flex;align-items:center;gap:9px;width:100%;padding:7px 9px;border:0;border-radius:8px;background:transparent;color:var(--gx-dim);font-size:12.5px;text-align:left;cursor:pointer}.gx-menuitem:hover:not(:disabled){background:#ffffff12;color:var(--gx-text)}.gx-menuitem:disabled{opacity:.4;cursor:not-allowed}.gx-menuitem.is-active{background:var(--gx-accent-soft);color:#a9dcff}.gx-menuitem__spacer{width:15px}.gx-menuitem__label{flex:1;display:flex;align-items:center;gap:6px}.gx-menuitem__trailing,.gx-menuitem__count{color:var(--gx-mute);font-size:11px}.gx-menuitem__tag{margin-left:6px;padding:0 5px;border-radius:5px;background:#ffffff1a;color:var(--gx-mute);font-size:9.5px;font-style:normal;text-transform:uppercase;letter-spacing:.06em}.gx-menu-sep{height:1px;margin:5px 4px;background:var(--gx-border)}.gx-menu-label{padding:8px 9px 4px;color:var(--gx-mute);font-size:10.5px;font-weight:600;text-transform:uppercase;letter-spacing:.12em}.gx-gamerow{display:flex;align-items:center;gap:10px;width:100%;padding:6px 8px;border:0;border-radius:9px;background:transparent;text-align:left;cursor:pointer}.gx-gamerow:hover{background:#ffffff0f}.gx-gamerow.is-active{background:var(--gx-accent-soft)}.gx-gamerow__text{flex:1;display:flex;flex-direction:column;min-width:0}.gx-gamerow__name{font-weight:550;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gx-gamerow__meta{color:var(--gx-mute);font-size:11px}.gx-gamerow__add{display:flex;align-items:center;gap:3px;color:var(--gx-accent);font-size:11px}.gx-task{padding:9px 10px;border:1px solid var(--gx-border);border-radius:10px;background:#ffffff05;display:flex;flex-direction:column;gap:7px}.gx-task.is-active{border-color:#4fb3f04d;background:#4fb3f00f}.gx-task__head{display:flex;align-items:center;gap:8px}.gx-task__status{display:grid;place-items:center;color:var(--gx-mute)}.gx-task__status.is-done{color:var(--gx-green)}.gx-task__status.is-failed{color:var(--gx-red)}.gx-task__title{flex:1;font-size:12.5px}.gx-task__time{color:var(--gx-mute);font-size:11px}.gx-task__meta{display:flex;justify-content:space-between;color:var(--gx-mute);font-size:11px}.gx-content{flex:1;overflow-y:auto;overflow-x:hidden;padding:22px 26px 48px}.gx-view{display:flex;flex-direction:column;gap:16px;max-width:1240px;margin:0 auto;animation:gx-fade .18s ease-out}@keyframes gx-fade{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.gx-view__head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;flex-wrap:wrap}.gx-view__head h1{display:flex;align-items:center;gap:10px;font-size:22px;letter-spacing:-.02em}.gx-view__head p{margin-top:4px;color:var(--gx-mute);font-size:12.5px;max-width:720px}.gx-view__tools{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.gx-count{padding:1px 8px;border-radius:20px;background:#ffffff12;color:var(--gx-dim);font-size:11.5px;font-weight:600}.gx-filterbar{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:9px 12px;border:1px solid var(--gx-border);border-radius:var(--gx-radius);background:#10151c99}.gx-filterbar--wrap{flex-wrap:wrap}.gx-filterbar__chips{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.gx-filterbar .gx-input{width:240px}.gx-muted{color:var(--gx-mute);font-size:12px}.gx-monospace{font-family:JetBrains Mono,Cascadia Code,ui-monospace,SF Mono,Consolas,monospace;font-size:11.5px;color:var(--gx-dim)}.gx-dot{width:3px;height:3px;border-radius:50%;background:var(--gx-mute);display:inline-block}.gx-saved{display:inline-flex;align-items:center;gap:4px;color:var(--gx-green);font-size:11.5px}.gx-link{display:inline-flex;align-items:center;gap:5px;font-size:12px}.gx-empty{display:flex;flex-direction:column;align-items:center;gap:9px;padding:54px 24px;border:1px dashed var(--gx-border-strong);border-radius:var(--gx-radius);background:#ffffff04;text-align:center}.gx-empty__icon{display:grid;place-items:center;width:54px;height:54px;border-radius:16px;background:var(--gx-accent-soft);color:#8fd4ff;margin-bottom:4px}.gx-empty h3{font-size:16px}.gx-empty p{max-width:420px;color:var(--gx-mute);font-size:12.5px}.gx-empty__action{margin-top:8px}.gx-callout{display:flex;gap:11px;padding:12px 14px;border:1px solid var(--gx-border);border-radius:12px;background:#ffffff08;color:var(--gx-dim)}.gx-callout>svg{flex:0 0 auto;margin-top:2px;color:var(--gx-mute)}.gx-callout strong{display:block;color:var(--gx-text);font-size:12.5px;margin-bottom:2px}.gx-callout p{color:var(--gx-mute);font-size:12px}.gx-callout--warn{border-color:#e9b93b47;background:var(--gx-amber-soft)}.gx-callout--warn>svg{color:var(--gx-amber)}.gx-callout__actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.gx-section{display:flex;flex-direction:column;gap:8px}.gx-section h3{display:flex;align-items:center;gap:8px;font-size:12px;text-transform:uppercase;letter-spacing:.11em;color:var(--gx-mute);margin-bottom:2px}.gx-modlist{display:flex;flex-direction:column;gap:6px}.gx-modrow{display:flex;align-items:center;gap:13px;padding:11px 14px;border:1px solid var(--gx-border);border-radius:12px;background:linear-gradient(180deg,#ffffff09,#ffffff04);cursor:pointer;transition:border-color .14s ease,background .14s ease,transform .14s ease}.gx-modrow:hover{border-color:var(--gx-border-strong);background:linear-gradient(180deg,#ffffff0f,#ffffff05)}.gx-modrow.has-update{border-left:2px solid rgba(233,185,59,.6)}.gx-modrow.is-disabled{opacity:.58}.gx-modrow.is-disabled:hover{opacity:.85}.gx-modrow__main{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}.gx-modrow__titleline{display:flex;align-items:center;gap:7px;min-width:0}.gx-modrow__name{font-weight:600;font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gx-modrow__sub{display:flex;align-items:center;gap:7px;color:var(--gx-mute);font-size:11.5px}.gx-modrow__author{color:var(--gx-dim)}.gx-modrow__update{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border:1px solid rgba(233,185,59,.35);border-radius:20px;background:var(--gx-amber-soft);color:#f3cc6d;font-size:11px;font-weight:600;cursor:pointer}.gx-modrow__update:hover{background:#e9b93b40}.gx-modrow__stats{display:flex;gap:12px;color:var(--gx-mute);font-size:11.5px;font-variant-numeric:tabular-nums}.gx-modrow__stats span{display:inline-flex;align-items:center;gap:4px}.gx-modlist--compact .gx-modrow{padding:7px 12px}.gx-pkggrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(288px,1fr));gap:10px;transition:opacity .15s ease}.gx-pkggrid.is-refreshing{opacity:.55}.gx-pkgcard{display:flex;flex-direction:column;gap:9px;padding:13px 14px;border:1px solid var(--gx-border);border-radius:var(--gx-radius);background:linear-gradient(180deg,#ffffff0a,#ffffff03);text-align:left;cursor:pointer;transition:border-color .15s ease,transform .15s ease,background .15s ease}.gx-pkgcard:hover{border-color:#4fb3f066;transform:translateY(-2px);background:linear-gradient(180deg,#4fb3f014,#ffffff05)}.gx-pkgcard.is-installed{border-color:#5cc85c47}.gx-pkgcard--skeleton{cursor:default;gap:10px}.gx-pkgcard__head{display:flex;align-items:center;gap:10px}.gx-pkgcard__titles{flex:1;display:flex;flex-direction:column;min-width:0}.gx-pkgcard__titles strong{font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gx-pkgcard__titles span{color:var(--gx-mute);font-size:11px}.gx-pkgcard__desc{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:var(--gx-dim);font-size:12px;line-height:1.45;min-height:34px}.gx-pkgcard__meta{display:flex;align-items:center;gap:11px;color:var(--gx-mute);font-size:11px}.gx-pkgcard__meta span{display:inline-flex;align-items:center;gap:4px}.gx-pkgcard__version{margin-left:auto;color:var(--gx-dim);font-variant-numeric:tabular-nums}.gx-pkgcard__tags{display:flex;gap:5px;flex-wrap:wrap}.gx-pager{display:flex;align-items:center;justify-content:center;gap:14px;padding:8px 0 4px;color:var(--gx-mute);font-size:12px}.gx-updatelist{display:flex;flex-direction:column;gap:8px}.gx-updatecard{border:1px solid var(--gx-border);border-radius:var(--gx-radius);background:linear-gradient(180deg,#ffffff0a,#ffffff03);overflow:hidden}.gx-updatecard.is-open{border-color:var(--gx-border-strong)}.gx-updatecard__head{display:flex;align-items:center;gap:12px;padding:12px 14px}.gx-updatecard__main{flex:1;display:flex;flex-direction:column;gap:3px;min-width:0}.gx-updatecard__title{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.gx-updatecard__title svg{color:var(--gx-mute)}.gx-updatecard__actions{display:flex;gap:6px}.gx-versionchip{padding:1px 7px;border-radius:6px;background:#ffffff12;color:var(--gx-dim);font-size:11px;font-variant-numeric:tabular-nums}.gx-versionchip.is-new{background:var(--gx-green-soft);color:#a4e6a4}.gx-updatecard__body{padding:12px 16px 14px;border-top:1px solid var(--gx-border)}.gx-updatecard__foot{margin-top:10px;padding-top:8px;border-top:1px dashed var(--gx-border)}.gx-profilegrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:10px}.gx-profilecard{display:flex;flex-direction:column;gap:11px;padding:15px;border:1px solid var(--gx-border);border-radius:var(--gx-radius);background:linear-gradient(180deg,#ffffff0a,#ffffff03)}.gx-profilecard.is-active{border-color:#5cc85c52;box-shadow:inset 0 0 0 1px #5cc85c14}.gx-profilecard__top{display:flex;align-items:center;gap:10px}.gx-profilecard__top div{display:flex;flex-direction:column;flex:1;min-width:0}.gx-profilecard__top strong{font-size:14px}.gx-profilecard__meter{height:5px;border-radius:4px;background:#ffffff12;overflow:hidden}.gx-profilecard__meter-fill{height:100%;background:linear-gradient(90deg,#2f9be0,#63d0a6)}.gx-profilecard__meta{display:flex;justify-content:space-between;gap:10px;color:var(--gx-mute);font-size:11px}.gx-profilecard__meta span{display:inline-flex;align-items:center;gap:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-profilecard__actions{display:flex;gap:6px;flex-wrap:wrap}.gx-config{display:grid;grid-template-columns:268px minmax(0,1fr);gap:12px;align-items:start}.gx-config__files{display:flex;flex-direction:column;gap:4px;padding:10px;border:1px solid var(--gx-border);border-radius:var(--gx-radius);background:#10151c99;max-height:calc(100vh - 220px);overflow-y:auto}.gx-config__files .gx-input{margin-bottom:6px}.gx-config__skeletons{display:flex;flex-direction:column;gap:6px}.gx-config__nofiles{padding:12px 6px;line-height:1.5}.gx-config__file{display:flex;align-items:center;gap:9px;padding:7px 9px;border:0;border-radius:9px;background:transparent;text-align:left;cursor:pointer}.gx-config__file:hover{background:#ffffff0d}.gx-config__file.is-active{background:var(--gx-accent-soft)}.gx-config__file div{flex:1;display:flex;flex-direction:column;min-width:0}.gx-config__file strong{font-size:12.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gx-config__file span{color:var(--gx-mute);font-size:10.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gx-config__body{padding:14px 16px;border:1px solid var(--gx-border);border-radius:var(--gx-radius);background:#10151c99;min-height:320px}.gx-config__filehead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-bottom:12px;margin-bottom:6px;border-bottom:1px solid var(--gx-border)}.gx-config__filehead div{display:flex;flex-direction:column;gap:2px;min-width:0}.gx-config__section{margin-top:14px}.gx-config__section h3{display:flex;align-items:center;gap:8px;margin-bottom:6px;color:var(--gx-mute);font-size:11px;text-transform:uppercase;letter-spacing:.12em}.gx-entry{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:8px 6px;border-bottom:1px solid rgba(255,255,255,.04)}.gx-entry.is-modified{background:linear-gradient(90deg,rgba(79,179,240,.06),transparent);border-radius:8px}.gx-entry__label{display:flex;flex-direction:column;gap:1px;min-width:0}.gx-entry__label strong{font-size:12.5px;font-weight:550}.gx-entry__label span{color:var(--gx-mute);font-size:11px;max-width:460px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gx-entry__control{display:flex;align-items:center;gap:6px;flex:0 0 auto}.gx-log{border:1px solid var(--gx-border);border-radius:var(--gx-radius);background:#080b0fbf;overflow-y:auto;max-height:calc(100vh - 300px);padding:8px;font-family:JetBrains Mono,Cascadia Code,ui-monospace,Consolas,monospace;font-size:11.5px}.gx-log__row{display:grid;grid-template-columns:78px 70px 96px 1fr;gap:10px;align-items:baseline;padding:3px 6px;border-radius:5px}.gx-log__row:hover{background:#ffffff08}.gx-log__row.is-error{background:#ef5f5f12}.gx-log__time{color:var(--gx-mute)}.gx-log__scope{color:#7fb6da;overflow:hidden;text-overflow:ellipsis}.gx-log__message{color:var(--gx-dim);word-break:break-word}.gx-log__foot{display:flex;align-items:center;gap:7px;color:var(--gx-mute);font-size:11.5px}.gx-queuestrip{display:flex;flex-direction:column;gap:8px}.gx-queuestrip__item{display:flex;flex-direction:column;gap:7px;padding:10px 12px;border:1px solid rgba(79,179,240,.28);border-radius:11px;background:#4fb3f012}.gx-queuestrip__head{display:flex;align-items:center;gap:9px;font-size:12.5px}.gx-queuestrip__head strong{flex:1}.gx-queuestrip__head span{color:var(--gx-mute);font-size:11.5px}.gx-settings{display:flex;flex-direction:column;gap:12px;max-width:900px}.gx-card{border:1px solid var(--gx-border);border-radius:var(--gx-radius);background:linear-gradient(180deg,#ffffff09,#ffffff03);padding:16px 18px}.gx-card__head{display:flex;align-items:flex-start;gap:11px;padding-bottom:14px;margin-bottom:14px;border-bottom:1px solid var(--gx-border)}.gx-card__head>svg{margin-top:2px;color:var(--gx-accent)}.gx-card__head div{flex:1}.gx-card__head h2{font-size:14.5px}.gx-card__head p{margin-top:2px;color:var(--gx-mute);font-size:12px}.gx-card__row{display:flex;flex-direction:column;gap:12px}.gx-card__actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}.gx-card--about{background:linear-gradient(140deg,#4fb3f012,#a98bfa0d)}.gx-kv{display:flex;flex-direction:column;gap:1px;border:1px solid var(--gx-border);border-radius:10px;overflow:hidden;background:#0003}.gx-kv__row{display:grid;grid-template-columns:190px minmax(0,1fr);gap:12px;padding:8px 12px;font-size:12.5px}.gx-kv__row:nth-child(odd){background:#ffffff05}.gx-kv__row>span{color:var(--gx-mute)}.gx-kv__row>strong{font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-settingrow{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:8px 0}.gx-settingrow div{display:flex;flex-direction:column;gap:2px}.gx-navchips{display:flex;gap:5px;flex-wrap:wrap}.gx-overlay{position:fixed;inset:0;z-index:200;display:grid;place-items:center;padding:24px;background:#040609a8;backdrop-filter:blur(6px);animation:gx-fade .14s ease-out}.gx-modal{max-width:calc(100vw - 40px);max-height:calc(100vh - 60px);display:flex;flex-direction:column;border:1px solid var(--gx-border-strong);border-radius:16px;background:linear-gradient(180deg,#171d26,#12171f);box-shadow:var(--gx-shadow);overflow:hidden;animation:gx-rise .18s cubic-bezier(.2,.9,.3,1)}@keyframes gx-rise{0%{opacity:0;transform:translateY(12px) scale(.985)}to{opacity:1;transform:translateY(0) scale(1)}}.gx-modal__head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--gx-border)}.gx-modal__head h2{font-size:15px}.gx-modal__body{padding:16px 18px;overflow-y:auto}.gx-modal__text{color:var(--gx-dim);font-size:13px;margin-bottom:10px}.gx-modal__foot{display:flex;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid var(--gx-border);background:#00000038}.gx-drawer-scrim{position:fixed;inset:0;z-index:180;display:flex;justify-content:flex-end;background:#0305088c;backdrop-filter:blur(4px);animation:gx-fade .14s ease-out}.gx-drawer{display:flex;flex-direction:column;max-width:94vw;height:100%;border-left:1px solid var(--gx-border-strong);background:linear-gradient(180deg,#131820,#0d1116);box-shadow:-30px 0 80px #00000080;animation:gx-slide .2s cubic-bezier(.2,.9,.3,1)}@keyframes gx-slide{0%{transform:translate(40px);opacity:.4}to{transform:translate(0);opacity:1}}.gx-drawer__head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;padding:16px 20px;border-bottom:1px solid var(--gx-border)}.gx-drawer__titlerow{display:flex;align-items:center;gap:11px}.gx-drawer__titles h2{display:flex;align-items:center;gap:8px;font-size:17px}.gx-drawer__subtitle{margin-top:3px;color:var(--gx-mute);font-size:12px}.gx-drawer__body{flex:1;overflow-y:auto;padding:16px 20px 28px}.gx-drawer__foot{padding:12px 20px;border-top:1px solid var(--gx-border);background:#00000040}.gx-drawer__actions{display:flex;align-items:center;gap:8px;justify-content:flex-end;flex-wrap:wrap}.gx-detail{display:flex;flex-direction:column;gap:16px}.gx-detail__hero{display:flex;flex-direction:column;gap:12px;padding:13px 15px;border:1px solid var(--gx-border);border-radius:12px;background:#ffffff06}.gx-detail__stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px}.gx-stat{display:flex;flex-direction:column;gap:2px;padding:8px 10px;border-radius:9px;background:#00000038}.gx-stat svg{color:var(--gx-mute)}.gx-stat strong{font-size:14px;font-variant-numeric:tabular-nums}.gx-stat span{color:var(--gx-mute);font-size:10.5px;text-transform:uppercase;letter-spacing:.08em}.gx-detail__switchrow{display:flex;align-items:center;justify-content:space-between;gap:12px;color:var(--gx-dim);font-size:12.5px}.gx-detail__about{max-height:none}.gx-detail__foot{display:flex;justify-content:space-between;gap:12px;padding-top:12px;border-top:1px solid var(--gx-border);color:var(--gx-mute);font-size:11.5px}.gx-detail__foot span{display:inline-flex;align-items:center;gap:5px;overflow:hidden;text-overflow:ellipsis}.gx-pkghero{display:flex;flex-direction:column;gap:11px}.gx-pkghero__stats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.gx-pkghero__stats div{display:flex;flex-direction:column;padding:9px 11px;border-radius:10px;background:#0000003d;border:1px solid var(--gx-border)}.gx-pkghero__stats strong{font-size:14px;font-variant-numeric:tabular-nums}.gx-pkghero__stats span{color:var(--gx-mute);font-size:10.5px;text-transform:uppercase;letter-spacing:.08em}.gx-pkghero__badges{display:flex;gap:6px;flex-wrap:wrap}.gx-tabs{display:flex;gap:2px;padding-bottom:2px;border-bottom:1px solid var(--gx-border)}.gx-tabs__item{padding:7px 12px;border:0;border-bottom:2px solid transparent;background:transparent;color:var(--gx-mute);font-size:12.5px;cursor:pointer}.gx-tabs__item:hover{color:var(--gx-text)}.gx-tabs__item.is-active{color:#9fd8ff;border-bottom-color:var(--gx-accent)}.gx-versionlist{display:flex;flex-direction:column;gap:6px}.gx-version{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 12px;border:1px solid var(--gx-border);border-radius:10px;background:#ffffff05}.gx-version.is-current{border-color:#5cc85c4d;background:var(--gx-green-soft)}.gx-version div{display:flex;flex-direction:column;gap:2px}.gx-changelog{margin-top:10px;padding:12px;border:1px solid var(--gx-border);border-radius:10px;background:#0003;max-height:260px;overflow-y:auto}.gx-deplist,.gx-dependencylist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:5px}.gx-depitem,.gx-deplist__item{display:flex;align-items:center;gap:10px;padding:9px 11px;border:1px solid var(--gx-border);border-radius:10px;background:#ffffff05}.gx-deplist__item.is-missing{border-color:#ef5f5f4d;background:var(--gx-red-soft)}.gx-deplist__item.is-ok{border-color:#5cc85c3d}.gx-deplist__item>svg{color:var(--gx-mute)}.gx-deplist__item div{flex:1;display:flex;flex-direction:column;gap:1px;min-width:0}.gx-deplist__item strong{font-size:12.5px}.gx-dependencylist li{display:flex;align-items:center;gap:6px;color:var(--gx-amber);font-size:12px}.gx-md{display:flex;flex-direction:column;gap:9px;color:var(--gx-dim);font-size:12.8px;line-height:1.6;overflow-wrap:break-word}.gx-md h3,.gx-md h4,.gx-md h5{color:var(--gx-text);margin-top:6px}.gx-md h3{font-size:15px}.gx-md h4{font-size:13.5px}.gx-md h5{font-size:12.5px;text-transform:uppercase;letter-spacing:.08em;color:var(--gx-mute)}.gx-md code{padding:1px 5px;border-radius:5px;background:#ffffff14;font-family:JetBrains Mono,ui-monospace,Consolas,monospace;font-size:11.5px;color:#c9e6ff}.gx-md pre{margin:0;padding:11px 13px;border-radius:9px;border:1px solid var(--gx-border);background:#00000059;overflow-x:auto}.gx-md pre code{background:transparent;padding:0;font-size:11.5px}.gx-md ul{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:3px}.gx-md blockquote{margin:0;padding:8px 12px;border-left:2px solid var(--gx-accent);background:#4fb3f012;border-radius:0 8px 8px 0;color:var(--gx-dim)}.gx-md hr{width:100%;height:1px;border:0;background:var(--gx-border)}.gx-md strong{color:var(--gx-text)}.gx-palette-scrim{position:fixed;inset:0;z-index:320;display:flex;justify-content:center;padding-top:12vh;background:#03050899;backdrop-filter:blur(5px);animation:gx-fade .12s ease-out}.gx-palette{width:min(620px,92vw);max-height:60vh;display:flex;flex-direction:column;border:1px solid var(--gx-border-strong);border-radius:16px;background:#12171ffc;box-shadow:var(--gx-shadow);overflow:hidden}.gx-palette__input{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid var(--gx-border)}.gx-palette__input .gx-input{flex:1;height:38px;border-color:transparent;background:transparent}.gx-palette__input kbd{padding:2px 6px;border:1px solid var(--gx-border);border-radius:5px;color:var(--gx-mute);font-size:10px;font-family:inherit}.gx-palette__list{overflow-y:auto;padding:6px}.gx-palette__item{display:flex;align-items:center;gap:10px;width:100%;padding:9px 10px;border:0;border-radius:9px;background:transparent;color:var(--gx-dim);text-align:left;cursor:pointer}.gx-palette__item.is-active{background:var(--gx-accent-soft);color:#eaf6ff}.gx-palette__label{flex:1}.gx-palette__hint{color:var(--gx-mute);font-size:11px}.gx-palette__group{color:var(--gx-mute);font-size:10px;text-transform:uppercase;letter-spacing:.1em}.gx-toasts{position:fixed;right:22px;bottom:22px;z-index:400;display:flex;flex-direction:column;gap:8px;max-width:360px}.gx-toast{display:flex;align-items:flex-start;gap:10px;padding:11px 12px;border:1px solid var(--gx-border-strong);border-radius:12px;background:#161c25fa;box-shadow:0 16px 40px #00000073;animation:gx-toast-in .2s cubic-bezier(.2,.9,.3,1)}@keyframes gx-toast-in{0%{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.gx-toast__icon{display:grid;place-items:center;width:24px;height:24px;border-radius:8px;background:#ffffff12;color:var(--gx-dim)}.gx-toast--success .gx-toast__icon{background:var(--gx-green-soft);color:var(--gx-green)}.gx-toast--error .gx-toast__icon{background:var(--gx-red-soft);color:var(--gx-red)}.gx-toast--info .gx-toast__icon{background:var(--gx-accent-soft);color:var(--gx-accent)}.gx-toast__body{flex:1;display:flex;flex-direction:column;gap:2px}.gx-toast__body strong{font-size:12.5px}.gx-toast__body span{color:var(--gx-mute);font-size:11.5px;overflow-wrap:break-word}.gx-toast__close{border:0;background:transparent;color:var(--gx-mute);cursor:pointer;padding:2px}.gx-app--splash,.gx-app--offline{display:flex;align-items:center;justify-content:center;grid-template-columns:1fr}.gx-splash{display:flex;flex-direction:column;align-items:center;gap:16px}.gx-splash__mark{width:54px;height:54px;border-radius:16px}.gx-splash__mark span:nth-child(1){width:22px;height:4px}.gx-splash__mark span:nth-child(2){width:14px;height:4px}.gx-splash__text{text-align:center}.gx-splash__text h1{font-size:20px;letter-spacing:.02em}.gx-splash__text p{color:var(--gx-mute);font-size:12.5px;margin-top:4px}.gx-splash__bars{display:flex;flex-direction:column;align-items:center;gap:7px;margin-top:6px}.gx-offline{width:100%;height:100%;display:grid;place-items:center;padding:30px;overflow-y:auto}.gx-offline__card{width:min(680px,100%);padding:30px 32px;border:1px solid var(--gx-border-strong);border-radius:20px;background:linear-gradient(160deg,#1a212ceb,#0e1218f2);box-shadow:var(--gx-shadow)}.gx-offline__badge{display:grid;place-items:center;width:48px;height:48px;margin-bottom:16px;border-radius:14px;background:var(--gx-red-soft);color:var(--gx-red)}.gx-offline__card h1{font-size:20px;margin-bottom:8px}.gx-offline__card>p{color:var(--gx-dim);font-size:13px;max-width:560px}.gx-offline__steps{display:flex;flex-direction:column;gap:12px;margin:20px 0}.gx-offline__step{display:flex;gap:12px}.gx-offline__num{display:grid;place-items:center;width:24px;height:24px;flex:0 0 auto;border-radius:50%;background:var(--gx-accent-soft);color:#9fd8ff;font-size:11.5px;font-weight:700}.gx-offline__step strong{display:block;font-size:13px;margin-bottom:4px}.gx-offline__step pre{margin:0 0 4px;padding:8px 11px;border:1px solid var(--gx-border);border-radius:8px;background:#0006;overflow-x:auto}.gx-offline__step code{font-family:JetBrains Mono,ui-monospace,Consolas,monospace;font-size:11.5px;color:#b7e3ff}.gx-offline__step small{color:var(--gx-mute);font-size:11.5px}.gx-offline__actions{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px}.gx-offline__manual{padding-top:16px;border-top:1px solid var(--gx-border)}.gx-offline__manual label>span{display:block;margin-bottom:7px;color:var(--gx-dim);font-size:11.5px;text-transform:uppercase;letter-spacing:.09em}.gx-offline__error{margin-top:9px;color:#ff9d9d;font-size:12px}.gx-offline__foot{display:flex;align-items:center;gap:7px;margin-top:18px;padding-top:14px;border-top:1px solid var(--gx-border);color:var(--gx-mute);font-size:11.5px}.gx-offline__foot code{padding:1px 5px;border-radius:5px;background:#ffffff14;font-size:11px}.gx-crash{display:grid;place-items:center;height:100%;padding:30px}.gx-crash__card{width:min(520px,100%);padding:26px;border:1px solid rgba(239,95,95,.3);border-radius:18px;background:linear-gradient(160deg,#28181ce6,#120e12f2)}.gx-crash__icon{display:grid;place-items:center;width:44px;height:44px;margin-bottom:14px;border-radius:13px;background:var(--gx-red-soft);color:var(--gx-red)}.gx-crash__card h2{font-size:17px;margin-bottom:6px}.gx-crash__card p{color:var(--gx-dim);font-size:12.5px}.gx-crash__card pre{margin:14px 0;padding:10px 12px;border-radius:9px;background:#0006;color:#ffb4b4;font-size:11.5px;overflow-x:auto;font-family:JetBrains Mono,ui-monospace,Consolas,monospace}.gx-crash__actions{display:flex;gap:8px}.gx-launcher{position:fixed;right:18px;bottom:18px;z-index:999998;display:flex;align-items:center;gap:7px;padding:8px 13px 8px 10px;border:1px solid rgba(255,255,255,.16);border-radius:999px;background:linear-gradient(140deg,#1f2937,#101820);color:#dbe7f5;font-family:var(--gx-font);font-size:12px;font-weight:600;letter-spacing:.04em;cursor:pointer;box-shadow:0 12px 30px #00000080,inset 0 1px #ffffff1f;transition:transform .15s ease,box-shadow .15s ease}.gx-launcher:hover{transform:translateY(-1px);box-shadow:0 16px 36px #0000008c,0 0 0 1px #4fb3f066}.gx-launcher__glyph{position:relative;display:grid;place-items:center;width:20px;height:20px;border-radius:6px;background:linear-gradient(140deg,#2b8fd6,#1e5f9a 60%,#2a2d6b)}.gx-launcher__glyph span{position:absolute;height:2px;border-radius:2px;background:#eaf6ff}.gx-launcher__glyph span:nth-child(1){width:9px;transform:translateY(-2px)}.gx-launcher__glyph span:nth-child(2){width:6px;transform:translateY(2px);opacity:.75}.gx-plugin-window{position:fixed;inset:0;z-index:999999;display:grid;place-items:center;padding:24px;background:#04060ab8;backdrop-filter:blur(8px);font-family:var(--gx-font)}.gx-plugin-shell{position:relative;width:min(1440px,96vw);height:min(920px,92vh);border:1px solid rgba(255,255,255,.12);border-radius:18px;overflow:hidden;box-shadow:0 40px 120px #000000b3;background:#0b0e13}.gx-plugin-shell .gx-app{height:100%}.gx-plugin-close{position:absolute;top:12px;right:12px;z-index:20;display:grid;place-items:center;width:26px;height:26px;border:1px solid rgba(255,255,255,.14);border-radius:8px;background:#0a0e14cc;color:#c4cfdd;cursor:pointer}.gx-plugin-close:hover{background:#ef5f5f40;color:#ffb4b4}@media (max-width: 1080px){.gx-app{grid-template-columns:200px minmax(0,1fr)}.gx-topbar__search{width:180px}.gx-modrow__stats{display:none}}@media (max-width: 860px){.gx-app{grid-template-columns:74px minmax(0,1fr)}.gx-nav__label,.gx-brand__text,.gx-session,.gx-conn span:last-child{display:none}.gx-nav__item{justify-content:center}.gx-config{grid-template-columns:1fr}.gx-topbar__search{display:none}}@media (prefers-reduced-motion: reduce){.gx-app *,.gx-app *:before,.gx-app *:after{animation-duration:.001ms!important;transition-duration:.001ms!important}}', Ue = "galex-styles";
function ta(e) {
  if (typeof document > "u" || document.getElementById(Ue)) return;
  const n = document.createElement("style");
  n.id = Ue, n.textContent = e, document.head.appendChild(n);
}
ta(na);
async function ra() {
  {
    const { mountIntoSteam: e } = await Promise.resolve().then(() => kn);
    e();
    return;
  }
}
ra();
const z = window.SP_REACT;
z || console.error("[GaleX] window.SP_REACT is missing — is Millennium loaded?");
z.createElement;
z.cloneElement;
z.createContext;
z.createRef;
z.forwardRef;
z.memo;
z.useCallback;
z.useContext;
z.useDebugValue;
z.useDeferredValue;
const I = z.useEffect, ia = z.useId;
z.useImperativeHandle;
z.useLayoutEffect;
const H = z.useMemo;
z.useReducer;
const te = z.useRef, b = z.useState, oa = z.useSyncExternalStore;
z.useTransition;
const la = z.Component;
z.PureComponent;
z.Fragment;
z.StrictMode;
z.Suspense;
z.Children;
z.isValidElement;
z.version;
const W = window.SP_REACTDOM, Be = (e) => typeof W?.createRoot == "function" ? W.createRoot(e) : {
  render(n) {
    W.render(n, e);
  },
  unmount() {
    W.unmountComponentAtNode?.(e);
  }
}, qe = W.createPortal;
W.flushSync;
const Z = 7788, sa = "/api/v1", Me = "galex.apiBase";
class $e extends Error {
  status;
  body;
  constructor(n, t, r) {
    super(n), this.name = "ApiError", this.status = t, this.body = r;
  }
  get isNetwork() {
    return this.status === 0;
  }
}
const da = "0.1.0";
function Ie() {
  const e = window.__GALEX_API_BASE__, n = ga(Me), t = e ?? n;
  return t ? t.replace(/\/+$/, "") : `http://127.0.0.1:${Z}`;
}
function ca(e) {
  e ? pa(Me, e.replace(/\/+$/, "")) : xa(Me);
}
function ga(e) {
  try {
    return window.localStorage.getItem(e);
  } catch {
    return null;
  }
}
function pa(e, n) {
  try {
    window.localStorage.setItem(e, n);
  } catch {
  }
}
function xa(e) {
  try {
    window.localStorage.removeItem(e);
  } catch {
  }
}
let Te = Ie();
function Ze() {
  return Te;
}
function He(e) {
  ca(e), Te = Ie();
}
function Ke(e) {
  return `${Te}${sa}${e}`;
}
function ua() {
  return Ke("/events");
}
async function C(e, n = {}) {
  const { method: t = "GET", body: r, timeoutMs: o = 2e4 } = n, d = new AbortController(), l = setTimeout(() => d.abort(), o), p = () => d.abort();
  n.signal?.addEventListener("abort", p);
  let c;
  try {
    c = await fetch(Ke(e), {
      method: t,
      headers: r === void 0 ? void 0 : { "content-type": "application/json" },
      body: r === void 0 ? void 0 : JSON.stringify(r),
      signal: d.signal,
      mode: "cors",
      credentials: "omit"
    });
  } catch (f) {
    throw new $e(
      d.signal.aborted ? "Backend did not answer in time" : "Cannot reach the Gale daemon",
      0,
      f
    );
  } finally {
    clearTimeout(l), n.signal?.removeEventListener("abort", p);
  }
  if (c.status === 204) return;
  const x = await c.text();
  let s;
  if (x)
    try {
      s = JSON.parse(x);
    } catch {
      s = x;
    }
  if (!c.ok) {
    const f = s?.error ?? s?.message ?? `Request failed (${c.status})`;
    throw new $e(f, c.status, s);
  }
  return s;
}
function fe(e) {
  const n = new URLSearchParams();
  for (const [r, o] of Object.entries(e))
    o == null || o === "" || n.set(r, String(o));
  const t = n.toString();
  return t ? `?${t}` : "";
}
const k = {
  health: (e) => C("/health", { signal: e, timeoutMs: 4e3 }),
  games: () => C("/games"),
  manageGame: (e, n) => C(`/games/${encodeURIComponent(e)}/manage`, { method: "POST", body: { path: n } }),
  toggleFavorite: (e, n) => C(`/games/${encodeURIComponent(e)}/favorite`, { method: "PATCH", body: { favorite: n } }),
  listProfiles: (e) => C(`/games/${encodeURIComponent(e)}/profiles`),
  createProfile: (e, n, t) => C(`/games/${encodeURIComponent(e)}/profiles`, {
    method: "POST",
    body: { name: n, duplicateOf: t }
  }),
  updateProfile: (e, n) => C(`/profiles/${e}`, { method: "PATCH", body: n }),
  deleteProfile: (e) => C(`/profiles/${e}`, { method: "DELETE" }),
  activateProfile: (e) => C(`/profiles/${e}/activate`, { method: "POST" }),
  exportProfile: (e) => C(`/profiles/${e}/export`),
  importProfile: (e, n) => C("/import", { method: "POST", body: { gameSlug: e, code: n }, timeoutMs: 12e4 }),
  mods: (e) => C(`/profiles/${e}/mods`),
  setModEnabled: (e, n, t) => C(`/profiles/${e}/mods/${n}`, { method: "PATCH", body: { enabled: t } }),
  removeMod: (e, n, t = !1) => C(`/profiles/${e}/mods/${n}${fe({ force: t })}`, { method: "DELETE" }),
  changeModVersion: (e, n, t) => C(`/profiles/${e}/mods/${n}/version`, { method: "PATCH", body: { versionId: t } }),
  setIgnoreUpdate: (e, n, t) => C(`/profiles/${e}/mods/${n}/ignore-update`, { method: "PATCH", body: { ignore: t } }),
  install: (e, n) => C(`/profiles/${e}/install`, {
    method: "POST",
    body: { versionIds: n },
    timeoutMs: 3e4
  }),
  updateMods: (e, n) => C(`/profiles/${e}/update`, { method: "POST", body: { uuids: n } }),
  cancelInstall: (e) => C(`/installs/${e}/cancel`, { method: "POST" }),
  installs: (e) => C(`/installs${fe({ gameSlug: e })}`),
  config: (e) => C(`/profiles/${e}/config`),
  setConfigEntry: (e, n, t, r, o) => C(`/profiles/${e}/config`, {
    method: "PATCH",
    body: { file: n, section: t, key: r, value: o }
  }),
  resetConfigEntry: (e, n, t, r) => C(`/profiles/${e}/config/reset`, {
    method: "POST",
    body: { file: n, section: t, key: r }
  }),
  launch: (e, n = !1) => C(`/profiles/${e}/launch`, {
    method: "POST",
    body: { vanilla: n }
  }),
  browse: (e, n) => C(
    `/store/${encodeURIComponent(e)}/packages${fe({
      search: n.search,
      category: n.category,
      sort: n.sort,
      deprecated: n.includeDeprecated ? "1" : void 0,
      page: n.page,
      pageSize: n.pageSize
    })}`
  ),
  categories: (e) => C(`/store/${encodeURIComponent(e)}/categories`),
  packageDetail: (e) => {
    const [n, t] = e.split("-");
    return C(
      `/store/packages/${encodeURIComponent(n ?? "")}/${encodeURIComponent(t ?? "")}`
    );
  },
  logs: (e = 200) => C(`/logs${fe({ limit: e })}`),
  clearCache: () => C("/cache/clear", { method: "POST", timeoutMs: 6e4 })
};
function fa({ onEvent: e, onStatus: n }) {
  let t = null, r = !1, o = 0, d;
  const l = () => {
    if (r) return;
    n?.("connecting");
    let c;
    try {
      c = new EventSource(ua());
    } catch {
      p();
      return;
    }
    t = c, c.onopen = () => {
      o = 0, n?.("open");
    }, c.onmessage = (x) => {
      if (x.data)
        try {
          e(JSON.parse(x.data));
        } catch {
        }
    }, c.onerror = () => {
      n?.("closed"), c.close(), t = null, p();
    };
  }, p = () => {
    if (r) return;
    const c = Math.min(15e3, 1e3 * 2 ** o);
    o += 1, d = setTimeout(l, c);
  };
  return l(), () => {
    r = !0, d && clearTimeout(d), t?.close(), t = null, n?.("closed");
  };
}
const ha = {
  connection: "booting",
  games: [],
  profiles: [],
  mods: [],
  modsLoading: !1,
  tasks: [],
  logs: [],
  view: "installed",
  search: "",
  toasts: [],
  paletteOpen: !1,
  compact: !1,
  busy: {},
  bootstrapped: !1
};
class ma {
  state = ha;
  listeners = /* @__PURE__ */ new Set();
  toastSeq = 1;
  getState = () => this.state;
  subscribe = (n) => (this.listeners.add(n), () => this.listeners.delete(n));
  set(n) {
    const t = typeof n == "function" ? n(this.state) : n;
    this.state = { ...this.state, ...t }, this.listeners.forEach((r) => r());
  }
  toast(n, t, r) {
    const o = { id: this.toastSeq++, kind: n, title: t, body: r };
    return this.set((d) => ({ toasts: [...d.toasts, o] })), n !== "error" ? setTimeout(() => this.dismissToast(o.id), 4200) : setTimeout(() => this.dismissToast(o.id), 9e3), o.id;
  }
  dismissToast(n) {
    this.set((t) => ({ toasts: t.toasts.filter((r) => r.id !== n) }));
  }
  pushLog(n) {
    this.set((t) => ({ logs: [...t.logs.slice(-399), n] }));
  }
  /** Marks a one-shot action as running so the UI can show spinners. */
  async withBusy(n, t) {
    this.set((r) => ({ busy: { ...r.busy, [n]: !0 } }));
    try {
      return await t();
    } finally {
      this.set((r) => {
        const o = { ...r.busy };
        return delete o[n], { busy: o };
      });
    }
  }
}
const u = new ma();
function P() {
  return oa(u.subscribe, u.getState, u.getState);
}
function re(e) {
  return e.games.find((n) => n.slug === e.gameSlug);
}
function X(e) {
  return e.profiles.find((n) => n.id === e.profileId);
}
function ba(e) {
  return e.mods.find((n) => n.uuid === e.selectedModUuid);
}
function Ne(e) {
  return e.filter((n) => n.update && !n.ignoredUpdate);
}
function va(e) {
  return e.filter((n) => n.status === "queued" || n.status === "downloading" || n.status === "extracting").length;
}
const Ye = "galex.prefs";
function ve() {
  try {
    const e = window.localStorage.getItem(Ye);
    return e ? JSON.parse(e) : {};
  } catch {
    return {};
  }
}
function oe(e) {
  try {
    const n = ve();
    window.localStorage.setItem(Ye, JSON.stringify({ ...n, ...e }));
  } catch {
  }
}
function le(e) {
  return e instanceof $e ? e.isNetwork ? "The Gale daemon is not reachable on this port." : e.message : e instanceof Error ? e.message : String(e);
}
function se(e, n, t) {
  u.pushLog({ id: Date.now() + Math.random(), at: (/* @__PURE__ */ new Date()).toISOString(), level: n, scope: e, message: t });
}
function $(e, n, t) {
  const r = le(n);
  se("ui", "error", `${e}: ${r}`), u.toast("error", e, r);
}
let ye = null, de = null, Ge, Ve;
function ce(e, n) {
  u.set({ connection: e, connectionError: n });
}
function _a() {
  ye?.(), ye = fa({
    onEvent: (e) => {
      switch (e.type) {
        case "daemon.hello":
          se("daemon", "info", `bridge v${e.version} connected`);
          break;
        case "install.queued":
        case "install.progress":
        case "install.settled":
          _e(e.task);
          break;
        case "mods.changed":
          e.profileId === u.getState().profileId && Xe();
          break;
        case "profiles.changed":
          e.gameSlug === u.getState().gameSlug && Je();
          break;
        case "log":
          u.pushLog(e.entry);
          break;
      }
    },
    onStatus: (e) => {
      e === "open" && u.getState().connection === "offline" && (ce("online"), g.refreshAll());
    }
  });
}
function wa() {
  de || (de = setInterval(() => {
    (async () => {
      try {
        const e = await k.health();
        u.getState().connection !== "online" && (ce("online"), g.refreshAll()), u.set({ health: e });
      } catch (e) {
        u.getState().connection === "online" && ce("offline", le(e));
      }
    })();
  }, 15e3));
}
function ya() {
  ye?.(), ye = null, de && (clearInterval(de), de = null);
}
function _e(e) {
  u.set((n) => ({ tasks: n.tasks.findIndex((o) => o.id === e.id) >= 0 ? n.tasks.map((o) => o.id === e.id ? e : o) : [e, ...n.tasks] })), (e.status === "done" || e.status === "failed" || e.status === "cancelled") && (e.status === "done" ? u.toast("success", "Installation finished", e.step || void 0) : e.status === "failed" && u.toast("error", "Installation failed", e.error), Xe(!0), Je(!0));
}
function Xe(e = !1) {
  clearTimeout(Ge), Ge = setTimeout(() => void g.refreshMods(), e ? 120 : 450);
}
function Je(e = !1) {
  clearTimeout(Ve), Ve = setTimeout(() => void g.refreshProfiles(), e ? 120 : 450);
}
const g = {
  async bootstrap() {
    ce("booting");
    const e = ve();
    u.set({ view: e.view ?? "installed", compact: !!e.compact });
    let n;
    try {
      n = await k.health();
    } catch (t) {
      ce("offline", le(t)), se("daemon", "error", `health check failed: ${le(t)}`);
      return;
    }
    u.set({ health: n, connection: "online", bootstrapped: !0 }), _a(), wa(), await g.refreshGames(e.gameSlug, e.profileId), await g.refreshInstalls(), await g.refreshLogs();
  },
  async reconnect() {
    await g.bootstrap();
  },
  async refreshGames(e, n) {
    let t;
    try {
      t = await k.games();
    } catch (l) {
      $("Could not load the game list", l);
      return;
    }
    u.set({ games: t });
    const r = u.getState(), o = t.filter((l) => l.managed), d = e ?? r.gameSlug ?? ve().gameSlug ?? o.find((l) => l.favorite)?.slug ?? o[0]?.slug ?? t.find((l) => l.popular)?.slug ?? t[0]?.slug;
    d ? await g.selectGame(d, n, !0) : u.set({ bootstrapped: !0 });
  },
  async selectGame(e, n, t = !1) {
    u.set({ gameSlug: e, mods: [], profileId: void 0, modsLoading: !0 }), oe({ gameSlug: e }), await g.refreshProfiles(n), await g.refreshMods(), t || se("ui", "info", `switched to game ${e}`);
  },
  async refreshProfiles(e) {
    const { gameSlug: n } = u.getState();
    if (n)
      try {
        const t = await k.listProfiles(n), r = u.getState(), o = e ?? r.profileId ?? ve().profileId, d = t.find((l) => l.id === o) ?? t.find((l) => l.active) ?? t[0];
        u.set({ profiles: t, profileId: d?.id }), d && d.id !== r.profileId && (oe({ profileId: d.id }), await g.refreshMods());
      } catch (t) {
        $("Could not load profiles", t);
      }
  },
  async selectProfile(e) {
    u.set({ profileId: e, modsLoading: !0 }), oe({ profileId: e }), await g.refreshMods();
  },
  async refreshMods() {
    const { profileId: e } = u.getState();
    if (!e) {
      u.set({ mods: [], modsLoading: !1 });
      return;
    }
    u.set({ modsLoading: u.getState().mods.length === 0, modsError: void 0 });
    try {
      const n = await k.mods(e);
      if (u.getState().profileId !== e) return;
      u.set({ mods: n, modsLoading: !1 });
    } catch (n) {
      u.set({ modsLoading: !1, modsError: le(n) }), $("Could not load installed mods", n);
    }
  },
  async refreshInstalls() {
    try {
      const e = await k.installs();
      u.set({ tasks: e });
    } catch {
    }
  },
  async refreshLogs() {
    try {
      const e = await k.logs(200);
      u.set({ logs: e });
    } catch {
    }
  },
  async refreshAll() {
    await g.refreshGames(), await g.refreshInstalls(), await g.refreshLogs();
  },
  setView(e) {
    u.set({ view: e, paletteOpen: !1 }), oe({ view: e });
  },
  setSearch(e) {
    u.set({ search: e });
  },
  setCompact(e) {
    u.set({ compact: e }), oe({ compact: e });
  },
  togglePalette(e) {
    u.set((n) => ({ paletteOpen: e ?? !n.paletteOpen }));
  },
  openMod(e) {
    u.set({ selectedModUuid: e, selectedPackage: void 0 });
  },
  closeMod() {
    u.set({ selectedModUuid: void 0 });
  },
  openPackage(e) {
    u.set({ selectedPackage: e, selectedModUuid: void 0 });
  },
  closePackage() {
    u.set({ selectedPackage: void 0 });
  },
  async manageGame(e) {
    try {
      await k.manageGame(e), u.toast("success", "Game added", "GaleX created a default profile."), await g.refreshGames(e), g.setView("installed");
    } catch (n) {
      $("Could not add game", n);
    }
  },
  async toggleFavorite(e, n) {
    try {
      await k.toggleFavorite(e, n), u.set((t) => ({ games: t.games.map((r) => r.slug === e ? { ...r, favorite: n } : r) }));
    } catch (t) {
      $("Could not update favourite", t);
    }
  },
  async toggleMod(e) {
    const { profileId: n } = u.getState();
    if (!n) return;
    const t = !e.enabled;
    u.set((r) => ({
      mods: r.mods.map((o) => o.uuid === e.uuid ? { ...o, enabled: t } : o)
    }));
    try {
      await k.setModEnabled(n, e.uuid, t), await g.refreshProfiles();
    } catch (r) {
      u.set((o) => ({
        mods: o.mods.map((d) => d.uuid === e.uuid ? { ...d, enabled: e.enabled } : d)
      })), $(`Could not ${t ? "enable" : "disable"} ${e.name}`, r);
    }
  },
  async setAllMods(e) {
    const { profileId: n, mods: t } = u.getState();
    if (!n) return;
    const r = t.filter((o) => o.enabled !== e);
    r.length !== 0 && (await u.withBusy("bulk-toggle", async () => {
      for (const o of r)
        try {
          await k.setModEnabled(n, o.uuid, e);
        } catch (d) {
          $(`Could not change ${o.name}`, d);
          break;
        }
    }), await g.refreshMods(), await g.refreshProfiles());
  },
  async removeMod(e, n = !1) {
    const { profileId: t } = u.getState();
    t && await u.withBusy(`remove:${e.uuid}`, async () => {
      try {
        await k.removeMod(t, e.uuid, n), u.set((r) => ({
          mods: r.mods.filter((o) => o.uuid !== e.uuid),
          selectedModUuid: r.selectedModUuid === e.uuid ? void 0 : r.selectedModUuid
        })), u.toast("success", "Removed", `${e.name} was removed from the profile.`), await g.refreshProfiles();
      } catch (r) {
        $(`Could not remove ${e.name}`, r);
      }
    });
  },
  async install(e) {
    const { profileId: n } = u.getState();
    if (!(!n || e.length === 0))
      try {
        const t = await k.install(n, e);
        _e(t), u.toast("info", "Queued", `${e.length} package(s) added to the install queue.`), g.setView("installed");
      } catch (t) {
        $("Installation could not be queued", t);
      }
  },
  async updateMods(e) {
    const { profileId: n, mods: t } = u.getState();
    if (!n) return;
    const r = e?.length ?? t.filter((o) => o.update && !o.ignoredUpdate).length;
    if (r === 0) {
      u.toast("info", "Everything is up to date");
      return;
    }
    try {
      const o = await k.updateMods(n, e);
      _e(o), u.toast("info", "Updating", `${r} mod(s) queued for update.`);
    } catch (o) {
      $("Update could not be queued", o);
    }
  },
  async changeVersion(e, n) {
    const { profileId: t } = u.getState();
    if (t)
      try {
        const r = await k.changeModVersion(t, e.uuid, n);
        _e(r), u.toast("info", "Changing version", `${e.name} → ${n.split("-").pop()}`);
      } catch (r) {
        $("Could not change version", r);
      }
  },
  async ignoreUpdate(e, n) {
    const { profileId: t } = u.getState();
    if (t)
      try {
        const r = await k.setIgnoreUpdate(t, e.uuid, n);
        u.set((o) => ({ mods: o.mods.map((d) => d.uuid === e.uuid ? r : d) })), u.toast("info", n ? "Update ignored" : "Update un-ignored", e.name);
      } catch (r) {
        $("Could not update preferences", r);
      }
  },
  async cancelInstall(e) {
    try {
      await k.cancelInstall(e);
    } catch (n) {
      $("Could not cancel the task", n);
    }
  },
  async launch(e = !1) {
    const { profileId: n } = u.getState();
    n && await u.withBusy("launch", async () => {
      try {
        const t = await k.launch(n, e);
        u.toast("success", "Launching", t.command);
      } catch (t) {
        $("Could not launch the game", t);
      }
    });
  },
  async createProfile(e, n) {
    const { gameSlug: t } = u.getState();
    if (t)
      try {
        const r = await k.createProfile(t, e, n);
        return await g.refreshProfiles(r.id), u.toast("success", "Profile created", e), r;
      } catch (r) {
        $("Could not create the profile", r);
      }
  },
  async renameProfile(e, n) {
    try {
      await k.updateProfile(e, { name: n }), await g.refreshProfiles(e), u.toast("success", "Profile renamed", n);
    } catch (t) {
      $("Could not rename the profile", t);
    }
  },
  async setCustomArgs(e, n) {
    try {
      await k.updateProfile(e, { customArgs: n }), await g.refreshProfiles(e);
    } catch (t) {
      $("Could not save launch arguments", t);
    }
  },
  async activateProfile(e) {
    try {
      await k.activateProfile(e), await g.refreshProfiles(e), u.toast("success", "Profile activated");
    } catch (n) {
      $("Could not activate the profile", n);
    }
  },
  async deleteProfile(e) {
    try {
      await k.deleteProfile(e), await g.refreshProfiles(), u.toast("success", "Profile deleted");
    } catch (n) {
      $("Could not delete the profile", n);
    }
  },
  async exportProfile(e) {
    return u.withBusy("export", async () => {
      try {
        const n = await k.exportProfile(e);
        return se("ui", "info", `exported profile ${e} (${n.fileCount} files)`), n.code;
      } catch (n) {
        $("Export failed", n);
        return;
      }
    });
  },
  async importCode(e) {
    const { gameSlug: n } = u.getState();
    if (n)
      return u.withBusy("import", async () => {
        try {
          const t = await k.importProfile(n, e);
          return await g.refreshProfiles(t.profile.id), u.toast(
            "success",
            "Profile imported",
            `${t.installed} mod(s) restored, ${t.skipped} skipped.`
          ), t;
        } catch (t) {
          $("Import failed", t);
          return;
        }
      });
  },
  async saveConfigEntry(e, n, t, r, o) {
    try {
      return await k.setConfigEntry(e, n, t, r, o);
    } catch (d) {
      $("Could not write the config value", d);
      return;
    }
  },
  async resetConfigEntry(e, n, t, r) {
    try {
      return await k.resetConfigEntry(e, n, t, r);
    } catch (o) {
      $("Could not reset the config value", o);
      return;
    }
  },
  async clearCache() {
    return u.withBusy("cache", async () => {
      try {
        const e = await k.clearCache();
        u.toast("success", "Download cache cleared", `Freed ${e.freedBytes} bytes.`);
      } catch (e) {
        $("Could not clear the cache", e);
      }
    });
  },
  currentApiBase: () => Ie(),
  stopAll: ya
};
function _(...e) {
  return e.filter(Boolean).join(" ");
}
function ae(e) {
  if (!e || e < 0) return "—";
  const n = ["B", "KB", "MB", "GB"];
  let t = e, r = 0;
  for (; t >= 1024 && r < n.length - 1; )
    t /= 1024, r += 1;
  const o = t >= 100 || r === 0 ? 0 : 1;
  return `${t.toFixed(o)} ${n[r]}`;
}
function B(e) {
  return e == null ? "—" : e < 1e3 ? String(e) : e < 1e6 ? `${(e / 1e3).toFixed(e < 1e4 ? 1 : 0)}k` : `${(e / 1e6).toFixed(1)}M`;
}
function O(e) {
  if (!e) return "—";
  const n = e instanceof Date ? e : new Date(e), t = Date.now() - n.getTime();
  if (Number.isNaN(t)) return "—";
  const r = Math.round(t / 1e3);
  if (r < 45) return "just now";
  const o = Math.round(r / 60);
  if (o < 60) return `${o} min ago`;
  const d = Math.round(o / 60);
  if (d < 24) return `${d} h ago`;
  const l = Math.round(d / 24);
  if (l < 31) return `${l} d ago`;
  const p = Math.round(l / 30);
  return p < 12 ? `${p} mo ago` : `${Math.round(p / 12)} y ago`;
}
function Pe(e) {
  if (!e) return "—";
  const n = e instanceof Date ? e : new Date(e);
  return Number.isNaN(n.getTime()) ? "—" : n.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
}
function ka(e) {
  if (!e) return "";
  const n = e instanceof Date ? e : new Date(e);
  return Number.isNaN(n.getTime()) ? "" : n.toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
function Na(e) {
  const n = e.replace(/[^A-Za-z0-9 ]/g, " ").trim();
  if (!n) return "??";
  const t = n.split(/\s+/).filter(Boolean);
  return t.length === 1 ? t[0].slice(0, 2).toUpperCase() : `${t[0][0] ?? ""}${t[1][0] ?? ""}`.toUpperCase();
}
function Ca(e) {
  let n = 0;
  for (let o = 0; o < e.length; o += 1)
    n = (n * 31 + e.charCodeAt(o)) % 360;
  const t = n, r = (n + 42) % 360;
  return `linear-gradient(135deg, hsl(${t} 62% 34%), hsl(${r} 58% 22%))`;
}
const Oe = {
  package: "M12 3 3 7.5v9L12 21l9-4.5v-9L12 3Zm0 0 9 4.5M12 3 3 7.5m9-4.5v18m9-13.5-9 4.5-9-4.5",
  store: "M3 9h18M5 9V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M4 9h16l1 6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3l1-6Zm5 3v2m6-2v2",
  download: "M12 4v10m0 0 4-4m-4 4-4-4M5 19h14",
  refresh: "M20 12a8 8 0 1 1-2.5-5.8M20 4v5h-5",
  trash: "M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M10 11v6m4-6v6",
  check: "M4 12.5 9 17.5 20 6.5",
  x: "M6 6l12 12M18 6 6 18",
  "chevron-down": "M6 9.5 12 15.5 18 9.5",
  "chevron-right": "M9.5 6 15.5 12 9.5 18",
  "chevron-left": "M14.5 6 8.5 12 14.5 18",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm6.5-1.5L22 22",
  settings: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8.4-3.5c0-.5 0-1-.1-1.5l2-1.5-2-3.4-2.3 1a8 8 0 0 0-2.6-1.5L14.9 2H9.1l-.5 2.6A8 8 0 0 0 6 6.1l-2.3-1-2 3.4 2 1.5a9 9 0 0 0 0 3l-2 1.5 2 3.4 2.3-1a8 8 0 0 0 2.6 1.5l.5 2.6h5.8l.5-2.6a8 8 0 0 0 2.6-1.5l2.3 1 2-3.4-2-1.5c.1-.5.1-1 .1-1.5Z",
  layers: "M12 3 3 8l9 5 9-5-9-5Zm-9 8 9 5 9-5M3 16l9 5 9-5",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2.5h6a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z",
  play: "M8 5.5 18.5 12 8 18.5v-13Z",
  warning: "M12 4 2.5 20h19L12 4Zm0 5v6m0 3v.5",
  info: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v.5m0 3.5v5",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3.5 2",
  star: "M12 3.5l2.7 5.6 6.1.8-4.5 4.2 1.2 6-5.5-3-5.5 3 1.2-6L3.2 9.9l6.1-.8L12 3.5Z",
  plus: "M12 5v14M5 12h14",
  copy: "M9 9V5.5a1.5 1.5 0 0 1 1.5-1.5H19a1.5 1.5 0 0 1 1.5 1.5V14a1.5 1.5 0 0 1-1.5 1.5h-3.5M4 10.5A1.5 1.5 0 0 1 5.5 9H14a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 14 21H5.5A1.5 1.5 0 0 1 4 19.5v-9Z",
  external: "M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
  sliders: "M4 8h9m4 0h3M4 16h3m4 0h9M13 5v6M8 13v6",
  terminal: "M4 5h16v14H4V5Zm3.5 4.5 3 2.5-3 2.5M12.5 15h4",
  grid: "M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z",
  list: "M4 6h16M4 12h16M4 18h16",
  "arrow-up": "M12 19V5m0 0-6 6m6-6 6 6",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.4 4 5.6 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.6-4-9s1.5-6.6 4-9Z",
  power: "M12 3v9m5.7-6.7a9 9 0 1 1-11.4 0",
  sparkles: "M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Zm7 10 .9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9L19 13Z",
  filter: "M4 6h16l-6 7v6l-4-2v-4L4 6Z",
  cart: "M3 5h2l2.4 10.4A2 2 0 0 0 9.3 17h8.4a2 2 0 0 0 2-1.6L21 8H6M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  "arrow-right": "M5 12h14m0 0-6-6m6 6-6 6",
  pin: "M12 15v6m0-6a4 4 0 0 0 4-4V4H8v7a4 4 0 0 0 4 4Zm-6-7h12"
};
function m({ name: e, size: n = 18, className: t, strokeWidth: r = 1.6 }) {
  const o = H(() => Oe[e] ?? Oe.info, [e]);
  return /* @__PURE__ */ a(
    "svg",
    {
      className: t,
      width: n,
      height: n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: r,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a("path", { d: o })
    }
  );
}
function h({
  children: e,
  onClick: n,
  variant: t = "secondary",
  size: r = "md",
  icon: o,
  iconRight: d,
  disabled: l,
  loading: p,
  title: c,
  full: x,
  type: s = "button",
  className: f
}) {
  return /* @__PURE__ */ i(
    "button",
    {
      type: s,
      className: _("gx-btn", `gx-btn--${t}`, `gx-btn--${r}`, x && "gx-btn--full", f),
      onClick: n,
      disabled: l || p,
      title: c,
      children: [
        p ? /* @__PURE__ */ a("span", { className: "gx-spinner gx-spinner--sm" }) : o ? /* @__PURE__ */ a(m, { name: o, size: r === "sm" ? 14 : 16 }) : null,
        e ? /* @__PURE__ */ a("span", { children: e }) : null,
        d ? /* @__PURE__ */ a(m, { name: d, size: r === "sm" ? 14 : 16 }) : null
      ]
    }
  );
}
function K({ icon: e, onClick: n, title: t, size: r = 16, disabled: o, active: d, danger: l, className: p }) {
  return /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      "aria-label": t,
      title: t,
      className: _("gx-iconbtn", d && "is-active", l && "is-danger", p),
      onClick: n,
      disabled: o,
      children: /* @__PURE__ */ a(m, { name: e, size: r })
    }
  );
}
function J({ checked: e, onChange: n, label: t, disabled: r, size: o = "md" }) {
  const d = (l) => {
    (l.key === " " || l.key === "Enter") && (l.preventDefault(), r || n(!e));
  };
  return /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": e,
      "aria-label": t,
      className: _("gx-toggle", e && "is-on", o === "sm" && "gx-toggle--sm"),
      disabled: r,
      onClick: (l) => {
        l.stopPropagation(), n(!e);
      },
      onKeyDown: d,
      children: /* @__PURE__ */ a("span", { className: "gx-toggle__knob" })
    }
  );
}
function V({ children: e, active: n, onClick: t, count: r, tone: o = "default" }) {
  return /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      className: _("gx-chip", n && "is-active", o === "accent" && "gx-chip--accent", !t && "is-static"),
      onClick: t,
      disabled: !t,
      children: [
        /* @__PURE__ */ a("span", { children: e }),
        r !== void 0 ? /* @__PURE__ */ a("span", { className: "gx-chip__count", children: r }) : null
      ]
    }
  );
}
function S({
  children: e,
  tone: n = "neutral",
  icon: t
}) {
  return /* @__PURE__ */ i("span", { className: _("gx-badge", `gx-badge--${n}`), children: [
    t ? /* @__PURE__ */ a(m, { name: t, size: 11 }) : null,
    e
  ] });
}
function za({ size: e = 18 }) {
  return /* @__PURE__ */ a("span", { className: "gx-spinner", style: { width: e, height: e } });
}
function Le({ value: e, tone: n = "accent" }) {
  const t = Math.max(0, Math.min(1, e)) * 100;
  return /* @__PURE__ */ a("div", { className: "gx-progress", role: "progressbar", "aria-valuenow": Math.round(t), "aria-valuemin": 0, "aria-valuemax": 100, children: /* @__PURE__ */ a("div", { className: _("gx-progress__fill", `gx-progress__fill--${n}`), style: { width: `${t}%` } }) });
}
function M({ height: e = 16, width: n = "100%", radius: t = 6 }) {
  return /* @__PURE__ */ a("div", { className: "gx-skeleton", style: { height: e, width: n, borderRadius: t } });
}
function T({
  icon: e = "package",
  title: n,
  body: t,
  action: r
}) {
  return /* @__PURE__ */ i("div", { className: "gx-empty", children: [
    /* @__PURE__ */ a("div", { className: "gx-empty__icon", children: /* @__PURE__ */ a(m, { name: e, size: 26 }) }),
    /* @__PURE__ */ a("h3", { children: n }),
    t ? /* @__PURE__ */ a("p", { children: t }) : null,
    r ? /* @__PURE__ */ a("div", { className: "gx-empty__action", children: r }) : null
  ] });
}
function j({ value: e, onChange: n, placeholder: t, icon: r, autoFocus: o, onSubmit: d, className: l, ariaLabel: p }) {
  return /* @__PURE__ */ i("div", { className: _("gx-input", l), children: [
    r ? /* @__PURE__ */ a(m, { name: r, size: 16 }) : null,
    /* @__PURE__ */ a(
      "input",
      {
        value: e,
        placeholder: t,
        "aria-label": p ?? t,
        autoFocus: o,
        onChange: (c) => n(c.target.value),
        onKeyDown: (c) => {
          c.key === "Enter" && d && d();
        }
      }
    ),
    e ? /* @__PURE__ */ a("button", { type: "button", className: "gx-input__clear", onClick: () => n(""), "aria-label": "Clear", children: /* @__PURE__ */ a(m, { name: "x", size: 13 }) }) : null
  ] });
}
function Ce({
  value: e,
  options: n,
  onChange: t,
  ariaLabel: r
}) {
  return /* @__PURE__ */ i("div", { className: "gx-select", children: [
    /* @__PURE__ */ a("select", { value: e, "aria-label": r, onChange: (o) => t(o.target.value), children: n.map((o) => /* @__PURE__ */ a("option", { value: o.value, children: o.label }, o.value)) }),
    /* @__PURE__ */ a(m, { name: "chevron-down", size: 13 })
  ] });
}
function Sa({
  value: e,
  options: n,
  onChange: t
}) {
  return /* @__PURE__ */ a("div", { className: "gx-segmented", children: n.map((r) => /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      className: _("gx-segmented__item", e === r.value && "is-active"),
      onClick: () => t(r.value),
      title: r.label,
      children: [
        r.icon ? /* @__PURE__ */ a(m, { name: r.icon, size: 14 }) : null,
        /* @__PURE__ */ a("span", { children: r.label })
      ]
    },
    r.value
  )) });
}
function Qe(e, n) {
  I(() => {
    const t = (r) => {
      r.key === "Escape" && (r.stopPropagation(), n());
    };
    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t);
  }, [e, n]);
}
function Ma({ onClose: e, children: n, className: t }) {
  return qe(
    /* @__PURE__ */ a("div", { className: _("gx-overlay", t), onMouseDown: e, children: /* @__PURE__ */ a("div", { onMouseDown: (r) => r.stopPropagation(), children: n }) }),
    document.body
  );
}
function ge({
  title: e,
  children: n,
  onClose: t,
  footer: r,
  width: o = 520
}) {
  Qe(!0, t);
  const d = ia();
  return /* @__PURE__ */ a(Ma, { onClose: t, children: /* @__PURE__ */ i("div", { className: "gx-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": d, style: { width: o }, children: [
    /* @__PURE__ */ i("header", { className: "gx-modal__head", children: [
      /* @__PURE__ */ a("h2", { id: d, children: e }),
      /* @__PURE__ */ a(K, { icon: "x", title: "Close", onClick: t })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-modal__body", children: n }),
    r ? /* @__PURE__ */ a("footer", { className: "gx-modal__foot", children: r }) : null
  ] }) });
}
function We({
  title: e,
  subtitle: n,
  children: t,
  onClose: r,
  footer: o,
  width: d = 560
}) {
  return Qe(!0, r), qe(
    /* @__PURE__ */ a("div", { className: "gx-drawer-scrim", onMouseDown: r, children: /* @__PURE__ */ i(
      "aside",
      {
        className: "gx-drawer",
        role: "dialog",
        "aria-modal": "true",
        style: { width: d },
        onMouseDown: (l) => l.stopPropagation(),
        children: [
          /* @__PURE__ */ i("header", { className: "gx-drawer__head", children: [
            /* @__PURE__ */ i("div", { className: "gx-drawer__titles", children: [
              /* @__PURE__ */ a("h2", { children: e }),
              n ? /* @__PURE__ */ a("div", { className: "gx-drawer__subtitle", children: n }) : null
            ] }),
            /* @__PURE__ */ a(K, { icon: "x", title: "Close", onClick: r })
          ] }),
          /* @__PURE__ */ a("div", { className: "gx-drawer__body", children: t }),
          o ? /* @__PURE__ */ a("footer", { className: "gx-drawer__foot", children: o }) : null
        ]
      }
    ) }),
    document.body
  );
}
function De({
  title: e,
  body: n,
  confirmLabel: t = "Confirm",
  danger: r,
  onConfirm: o,
  onCancel: d,
  children: l
}) {
  const p = te(null);
  return I(() => {
    p.current?.focus();
  }, []), /* @__PURE__ */ i(
    ge,
    {
      title: e,
      onClose: d,
      width: 440,
      footer: /* @__PURE__ */ i(E, { children: [
        /* @__PURE__ */ a(h, { onClick: d, children: "Cancel" }),
        /* @__PURE__ */ a(h, { variant: r ? "danger" : "primary", onClick: o, children: t })
      ] }),
      children: [
        n ? /* @__PURE__ */ a("p", { className: "gx-modal__text", children: n }) : null,
        l
      ]
    }
  );
}
function Q({
  name: e,
  src: n,
  size: t = 44,
  rounded: r = 10
}) {
  const [o, d] = b(!1);
  return n && !o ? /* @__PURE__ */ a(
    "img",
    {
      className: "gx-avatar gx-avatar--img",
      src: n,
      alt: "",
      style: { width: t, height: t, borderRadius: r },
      onError: () => d(!0),
      loading: "lazy"
    }
  ) : /* @__PURE__ */ a(
    "div",
    {
      className: "gx-avatar",
      style: {
        width: t,
        height: t,
        borderRadius: r,
        background: Ca(e),
        fontSize: Math.max(11, Math.round(t / 2.8))
      },
      "aria-hidden": "true",
      children: Na(e)
    }
  );
}
const $a = [
  { id: "installed", label: "Go to Installed mods", icon: "package" },
  { id: "browse", label: "Go to Browse Thunderstore", icon: "store" },
  { id: "updates", label: "Go to Updates", icon: "arrow-up" },
  { id: "profiles", label: "Go to Profiles", icon: "layers" },
  { id: "config", label: "Go to Config files", icon: "sliders" },
  { id: "logs", label: "Go to Activity", icon: "terminal" },
  { id: "settings", label: "Go to Settings", icon: "settings" }
];
function Pa() {
  const e = P(), [n, t] = b(""), [r, o] = b(0), d = te(null), l = H(() => {
    const c = $a.map((x) => ({
      id: `view:${x.id}`,
      label: x.label,
      icon: x.icon,
      group: "Navigate",
      run: () => g.setView(x.id)
    }));
    c.push(
      {
        id: "action:launch",
        label: "Launch game with mods",
        hint: "Enter",
        icon: "play",
        group: "Actions",
        run: () => void g.launch(!1)
      },
      {
        id: "action:launch-vanilla",
        label: "Launch vanilla",
        icon: "power",
        group: "Actions",
        run: () => void g.launch(!0)
      },
      {
        id: "action:update-all",
        label: "Update all packages",
        icon: "arrow-up",
        group: "Actions",
        run: () => void g.updateMods()
      },
      {
        id: "action:refresh",
        label: "Refresh profile",
        icon: "refresh",
        group: "Actions",
        run: () => void g.refreshAll()
      },
      {
        id: "action:compact",
        label: e.compact ? "Disable compact rows" : "Enable compact rows",
        icon: "grid",
        group: "Actions",
        run: () => g.setCompact(!e.compact)
      },
      {
        id: "action:clear-search",
        label: "Clear Thunderstore search",
        icon: "search",
        group: "Actions",
        run: () => g.setSearch("")
      }
    );
    for (const x of e.mods.slice(0, 60))
      c.push({
        id: `mod:${x.uuid}`,
        label: x.name,
        hint: `v${x.version} · ${x.author}`,
        icon: "package",
        group: "Installed mods",
        run: () => g.openMod(x.uuid)
      });
    return c;
  }, [e.mods, e.compact]), p = H(() => {
    const c = n.trim().toLowerCase();
    return c ? l.filter((x) => `${x.label} ${x.hint ?? ""}`.toLowerCase().includes(c)).slice(0, 12) : l.slice(0, 10);
  }, [l, n]);
  return I(() => {
    o(0);
  }, [n]), I(() => {
    const c = (x) => {
      if (x.key === "Escape")
        g.togglePalette(!1);
      else if (x.key === "ArrowDown")
        x.preventDefault(), o((s) => Math.min(p.length - 1, s + 1));
      else if (x.key === "ArrowUp")
        x.preventDefault(), o((s) => Math.max(0, s - 1));
      else if (x.key === "Enter") {
        const s = p[r];
        s && (x.preventDefault(), s.run(), g.togglePalette(!1));
      }
    };
    return window.addEventListener("keydown", c, !0), () => window.removeEventListener("keydown", c, !0);
  }, [p, r]), I(() => {
    d.current?.querySelector(".is-active")?.scrollIntoView?.({ block: "nearest" });
  }, [r]), e.paletteOpen ? /* @__PURE__ */ a("div", { className: "gx-palette-scrim", onMouseDown: () => g.togglePalette(!1), children: /* @__PURE__ */ i("div", { className: "gx-palette", onMouseDown: (c) => c.stopPropagation(), role: "dialog", "aria-modal": "true", children: [
    /* @__PURE__ */ i("div", { className: "gx-palette__input", children: [
      /* @__PURE__ */ a(
        j,
        {
          value: n,
          onChange: t,
          placeholder: "Search commands, mods…",
          icon: "search",
          autoFocus: !0,
          ariaLabel: "Command palette"
        }
      ),
      /* @__PURE__ */ a("kbd", { children: "esc" })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-palette__list", ref: d, children: p.length === 0 ? /* @__PURE__ */ a("p", { className: "gx-pop__empty", children: "No matching command." }) : p.map((c, x) => /* @__PURE__ */ i(
      "button",
      {
        type: "button",
        className: _("gx-palette__item", x === r && "is-active"),
        onMouseEnter: () => o(x),
        onClick: () => {
          c.run(), g.togglePalette(!1);
        },
        children: [
          /* @__PURE__ */ a(m, { name: c.icon, size: 15 }),
          /* @__PURE__ */ a("span", { className: "gx-palette__label", children: c.label }),
          c.hint ? /* @__PURE__ */ a("span", { className: "gx-palette__hint", children: c.hint }) : null,
          /* @__PURE__ */ a("span", { className: "gx-palette__group", children: c.group })
        ]
      },
      c.id
    )) })
  ] }) }) : null;
}
class ea extends la {
  state = {};
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  componentDidCatch(n, t) {
    console.error("[GaleX] render error", n, t.componentStack);
  }
  render() {
    const { error: n } = this.state;
    return n ? /* @__PURE__ */ a("div", { className: "gx-crash", children: /* @__PURE__ */ i("div", { className: "gx-crash__card", children: [
      /* @__PURE__ */ a("span", { className: "gx-crash__icon", children: /* @__PURE__ */ a(m, { name: "warning", size: 22 }) }),
      /* @__PURE__ */ a("h2", { children: "Something broke in the interface" }),
      /* @__PURE__ */ a("p", { children: "The mod manager hit an unexpected state. Your profile on disk is untouched." }),
      /* @__PURE__ */ a("pre", { children: n.message }),
      /* @__PURE__ */ i("div", { className: "gx-crash__actions", children: [
        /* @__PURE__ */ a(h, { variant: "primary", icon: "refresh", onClick: () => this.setState({ error: void 0 }), children: "Try again" }),
        /* @__PURE__ */ a(h, { onClick: () => window.location.reload(), children: "Reload interface" })
      ] })
    ] }) }) : this.props.children;
  }
}
const he = /* @__PURE__ */ new Map();
function aa(e) {
  const [n, t] = b({
    data: e ? he.get(e) : void 0,
    loading: !!e && !he.has(e ?? "")
  });
  return I(() => {
    if (!e) {
      t({ loading: !1 });
      return;
    }
    const r = he.get(e);
    if (r) {
      t({ data: r, loading: !1 });
      return;
    }
    let o = !1;
    return t({ loading: !0 }), k.packageDetail(e).then((d) => {
      he.set(e, d), o || t({ data: d, loading: !1 });
    }).catch((d) => {
      o || t({ loading: !1, error: d instanceof Error ? d.message : String(d) });
    }), () => {
      o = !0;
    };
  }, [e]), n;
}
function Ea(e, n = 250) {
  const [t, r] = b(e);
  return I(() => {
    const o = setTimeout(() => r(e), n);
    return () => clearTimeout(o);
  }, [e, n]), t;
}
function ze(e = 1600) {
  const [n, t] = b(!1), r = te(void 0);
  return I(() => () => clearTimeout(r.current), []), { copied: n, copy: async (d) => {
    try {
      return await navigator.clipboard.writeText(d), t(!0), clearTimeout(r.current), r.current = setTimeout(() => t(!1), e), !0;
    } catch {
      return !1;
    }
  } };
}
function ee(e, n) {
  const t = [];
  let r = e, o = 0;
  const d = (l) => {
    l && t.push(l);
  };
  for (; r.length > 0; ) {
    const l = /^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/.exec(r);
    if (l) {
      t.push(
        /* @__PURE__ */ a("a", { href: l[2], target: "_blank", rel: "noreferrer noopener", children: l[1] }, `${n}-l${o}`)
      ), r = r.slice(l[0].length), o += 1;
      continue;
    }
    const p = /^`([^`]+)`/.exec(r);
    if (p) {
      t.push(/* @__PURE__ */ a("code", { children: p[1] }, `${n}-c${o}`)), r = r.slice(p[0].length), o += 1;
      continue;
    }
    const c = /^(\*\*|__)(.+?)\1/.exec(r);
    if (c) {
      t.push(/* @__PURE__ */ a("strong", { children: ee(c[2] ?? "", `${n}b${o}`) }, `${n}-b${o}`)), r = r.slice(c[0].length), o += 1;
      continue;
    }
    const x = /^(\*|_)([^*_]+?)\1/.exec(r);
    if (x) {
      t.push(/* @__PURE__ */ a("em", { children: ee(x[2] ?? "", `${n}i${o}`) }, `${n}-i${o}`)), r = r.slice(x[0].length), o += 1;
      continue;
    }
    const s = r.slice(1).search(/[[\]`*_]/), f = s === -1 ? r : r.slice(0, s + 1);
    d(f), r = r.slice(f.length), o += 1;
  }
  return t;
}
function ke({ source: e, className: n }) {
  const t = e.replace(/\r\n/g, `
`).split(`
`), r = [];
  let o = [], d = [], l = !1, p = [];
  const c = () => {
    p.length !== 0 && (r.push(/* @__PURE__ */ a("p", { children: ee(p.join(" "), `p${r.length}`) }, `p${r.length}`)), p = []);
  }, x = () => {
    o.length !== 0 && (r.push(
      /* @__PURE__ */ a("ul", { children: o.map((s, f) => /* @__PURE__ */ a("li", { children: ee(s, `li${r.length}-${f}`) }, f)) }, `ul${r.length}`)
    ), o = []);
  };
  for (const s of t) {
    const f = s.trimEnd();
    if (f.trimStart().startsWith("```")) {
      l ? (r.push(
        /* @__PURE__ */ a("pre", { children: /* @__PURE__ */ a("code", { children: d.join(`
`) }) }, `pre${r.length}`)
      ), d = [], l = !1) : (c(), x(), l = !0);
      continue;
    }
    if (l) {
      d.push(s);
      continue;
    }
    if (!f.trim()) {
      c(), x();
      continue;
    }
    const v = /^(#{1,6})\s+(.*)$/.exec(f);
    if (v) {
      c(), x();
      const D = Math.min(4, v[1]?.length ?? 1), q = ee(v[2] ?? "", `h${r.length}`);
      r.push(
        D <= 1 ? /* @__PURE__ */ a("h3", { children: q }, `h${r.length}`) : D === 2 ? /* @__PURE__ */ a("h4", { children: q }, `h${r.length}`) : /* @__PURE__ */ a("h5", { children: q }, `h${r.length}`)
      );
      continue;
    }
    const L = /^[-*+]\s+(.*)$/.exec(f.trim());
    if (L) {
      c(), o.push(L[1] ?? "");
      continue;
    }
    const F = /^>\s?(.*)$/.exec(f.trim());
    if (F) {
      c(), x(), r.push(
        /* @__PURE__ */ a("blockquote", { children: ee(F[1] ?? "", `q${r.length}`) }, `q${r.length}`)
      );
      continue;
    }
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(f.trim())) {
      c(), x(), r.push(/* @__PURE__ */ a("hr", {}, `hr${r.length}`));
      continue;
    }
    p.push(f.trim());
  }
  return l && d.length && r.push(
    /* @__PURE__ */ a("pre", { children: /* @__PURE__ */ a("code", { children: d.join(`
`) }) }, `pre${r.length}`)
  ), c(), x(), /* @__PURE__ */ a("div", { className: n ? `gx-md ${n}` : "gx-md", children: r });
}
function Ia() {
  const e = P(), n = ba(e);
  return n ? /* @__PURE__ */ a(Ta, { mod: n }, n.uuid) : null;
}
function Ta({ mod: e }) {
  const n = P(), [t, r] = b("about"), [o, d] = b(!1), l = aa(e.fullName), p = e.dependantUuids.map((s) => n.mods.find((f) => f.uuid === s)).filter((s) => !!s), c = e.missingDependencies.filter((s) => !n.mods.some((f) => f.versionId === s)), x = !!e.update && !e.ignoredUpdate;
  return /* @__PURE__ */ i(E, { children: [
    /* @__PURE__ */ a(
      We,
      {
        onClose: () => g.closeMod(),
        width: 620,
        title: /* @__PURE__ */ i("span", { className: "gx-drawer__titlerow", children: [
          /* @__PURE__ */ a(Q, { name: e.name, src: e.iconUrl, size: 40, rounded: 10 }),
          /* @__PURE__ */ i("span", { children: [
            e.name,
            e.deprecated ? /* @__PURE__ */ a(S, { tone: "red", children: "deprecated" }) : null
          ] })
        ] }),
        subtitle: /* @__PURE__ */ i(E, { children: [
          e.author,
          " · v",
          e.version,
          " · ",
          ae(e.sizeBytes),
          " · installed ",
          O(e.installTime)
        ] }),
        footer: /* @__PURE__ */ i("div", { className: "gx-drawer__actions", children: [
          /* @__PURE__ */ a(
            h,
            {
              icon: e.enabled ? "x" : "check",
              variant: e.enabled ? "secondary" : "success",
              onClick: () => void g.toggleMod(e),
              children: e.enabled ? "Disable" : "Enable"
            }
          ),
          x && e.update ? /* @__PURE__ */ i(
            h,
            {
              variant: "primary",
              icon: "arrow-up",
              onClick: () => void g.changeVersion(e, e.update.versionId),
              children: [
                "Update to ",
                e.update.version
              ]
            }
          ) : null,
          /* @__PURE__ */ a(h, { icon: "trash", variant: "danger", onClick: () => d(!0), children: "Remove" })
        ] }),
        children: /* @__PURE__ */ i("div", { className: "gx-detail", children: [
          /* @__PURE__ */ i("div", { className: "gx-detail__hero", children: [
            /* @__PURE__ */ i("div", { className: "gx-detail__stats", children: [
              /* @__PURE__ */ a(me, { label: "Rating", value: B(e.ratingScore), icon: "star" }),
              /* @__PURE__ */ a(me, { label: "Downloads", value: B(e.totalDownloads), icon: "download" }),
              /* @__PURE__ */ a(me, { label: "Size", value: ae(e.sizeBytes), icon: "package" }),
              /* @__PURE__ */ a(me, { label: "Dependencies", value: String(e.dependencies.length), icon: "layers" })
            ] }),
            /* @__PURE__ */ i("div", { className: "gx-detail__switchrow", children: [
              /* @__PURE__ */ i("span", { children: [
                "Enabled in profile",
                e.ignoredUpdate ? /* @__PURE__ */ a("em", { className: "gx-muted", children: " · update ignored" }) : null
              ] }),
              /* @__PURE__ */ a(J, { checked: e.enabled, label: "Toggle mod", onChange: () => void g.toggleMod(e) })
            ] })
          ] }),
          c.length > 0 ? /* @__PURE__ */ i("div", { className: "gx-callout gx-callout--warn", children: [
            /* @__PURE__ */ a(m, { name: "warning", size: 15 }),
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ a("strong", { children: "Missing dependencies" }),
              /* @__PURE__ */ a("p", { children: "These packages are required but not installed in this profile." }),
              /* @__PURE__ */ a("div", { className: "gx-callout__actions", children: c.map((s) => /* @__PURE__ */ a(h, { size: "sm", icon: "download", onClick: () => void g.install([s]), children: s }, s)) })
            ] })
          ] }) : null,
          p.length > 0 ? /* @__PURE__ */ i("div", { className: "gx-callout", children: [
            /* @__PURE__ */ a(m, { name: "layers", size: 15 }),
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ i("strong", { children: [
                "Used by ",
                p.length,
                " mod(s)"
              ] }),
              /* @__PURE__ */ a("p", { children: p.map((s) => s.name).join(", ") })
            ] })
          ] }) : null,
          /* @__PURE__ */ a("div", { className: "gx-tabs", children: [
            ["about", "About"],
            ["versions", `Versions (${l.data?.versions.length ?? "…"})`],
            ["dependencies", `Dependencies (${e.dependencies.length})`]
          ].map(([s, f]) => /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: _("gx-tabs__item", t === s && "is-active"),
              onClick: () => r(s),
              children: f
            },
            s
          )) }),
          t === "about" ? /* @__PURE__ */ a("div", { className: "gx-detail__about", children: l.loading ? /* @__PURE__ */ i(E, { children: [
            /* @__PURE__ */ a(M, { height: 14 }),
            /* @__PURE__ */ a(M, { height: 14, width: "92%" }),
            /* @__PURE__ */ a(M, { height: 14, width: "76%" })
          ] }) : l.error ? /* @__PURE__ */ a("p", { className: "gx-muted", children: l.error }) : l.data?.markdown ? /* @__PURE__ */ a(ke, { source: l.data.markdown }) : /* @__PURE__ */ a("p", { className: "gx-muted", children: e.description }) }) : null,
          t === "versions" ? /* @__PURE__ */ i("div", { className: "gx-versionlist", children: [
            l.loading ? /* @__PURE__ */ a(M, { height: 48 }) : null,
            l.data?.versions.map((s) => {
              const f = s.versionId === e.versionId;
              return /* @__PURE__ */ i("div", { className: _("gx-version", f && "is-current"), children: [
                /* @__PURE__ */ i("div", { children: [
                  /* @__PURE__ */ i("strong", { children: [
                    "v",
                    s.version
                  ] }),
                  /* @__PURE__ */ i("span", { className: "gx-muted", children: [
                    Pe(s.dateCreated),
                    " · ",
                    ae(s.fileSize),
                    " ·",
                    " ",
                    B(s.downloads),
                    " downloads"
                  ] })
                ] }),
                f ? /* @__PURE__ */ a(S, { tone: "green", icon: "check", children: "installed" }) : /* @__PURE__ */ a(
                  h,
                  {
                    size: "sm",
                    icon: "download",
                    onClick: () => void g.changeVersion(e, s.versionId),
                    children: "Use this"
                  }
                )
              ] }, s.versionId);
            })
          ] }) : null,
          t === "dependencies" ? e.dependencies.length === 0 ? /* @__PURE__ */ a(T, { icon: "layers", title: "No dependencies", body: "This package is standalone." }) : /* @__PURE__ */ a("ul", { className: "gx-deplist", children: e.dependencies.map((s) => {
            const f = n.mods.find((v) => v.fullName === s.split("-").slice(0, -1).join("-"));
            return /* @__PURE__ */ i("li", { className: _("gx-deplist__item", !f && "is-missing"), children: [
              /* @__PURE__ */ a(m, { name: f ? f.enabled ? "check" : "x" : "warning", size: 14 }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ a("strong", { children: s.split("-").slice(0, -1).join("-") }),
                /* @__PURE__ */ a("span", { className: "gx-muted", children: s })
              ] }),
              f ? /* @__PURE__ */ a(S, { tone: f.enabled ? "green" : "amber", children: f.enabled ? "installed" : "disabled" }) : /* @__PURE__ */ a(h, { size: "sm", icon: "download", onClick: () => void g.install([s]), children: "Install" })
            ] }, s);
          }) }) : null,
          /* @__PURE__ */ i("div", { className: "gx-detail__foot", children: [
            /* @__PURE__ */ i("span", { children: [
              /* @__PURE__ */ a(m, { name: "clock", size: 12 }),
              " Install time ",
              O(e.installTime)
            ] }),
            e.kind === "local" && e.localPath ? /* @__PURE__ */ a("span", { className: "gx-monospace", children: e.localPath }) : /* @__PURE__ */ a("span", { className: "gx-monospace", children: e.versionId })
          ] })
        ] })
      }
    ),
    o ? /* @__PURE__ */ a(
      De,
      {
        title: `Remove ${e.name}?`,
        body: "Files are deleted from the profile folder. This cannot be undone.",
        confirmLabel: "Remove",
        danger: !0,
        onCancel: () => d(!1),
        onConfirm: () => {
          d(!1), g.removeMod(e, p.length > 0);
        }
      }
    ) : null
  ] });
}
function me({ label: e, value: n, icon: t }) {
  return /* @__PURE__ */ i("div", { className: "gx-stat", children: [
    /* @__PURE__ */ a(m, { name: t, size: 14 }),
    /* @__PURE__ */ a("strong", { children: n }),
    /* @__PURE__ */ a("span", { children: e })
  ] });
}
function La() {
  const n = P().selectedPackage;
  return n ? /* @__PURE__ */ a(Da, { fullName: n }, n) : null;
}
function Da({ fullName: e }) {
  const n = P(), t = aa(e), [r, o] = b(void 0), d = t.data?.versions ?? [], l = d.filter(
    (s, f) => d.findIndex((v) => v.versionId === s.versionId) === f
  ), p = l.find((s) => s.versionId === r) ?? l[0], c = n.mods.find((s) => s.fullName === e);
  I(() => {
    !r && l[0] && o(l[0].versionId);
  }, [r, l]);
  const x = !!n.tasks.find(
    (s) => (s.status === "queued" || s.status === "downloading" || s.status === "extracting") && s.current?.includes(t.data?.name ?? "\0")
  );
  return /* @__PURE__ */ a(
    We,
    {
      onClose: () => g.closePackage(),
      width: 640,
      title: t.data?.name ?? e,
      subtitle: t.data ? /* @__PURE__ */ i(E, { children: [
        t.data.owner,
        " · v",
        p?.version ?? "—",
        " · ",
        B(t.data.totalDownloads),
        " ",
        "downloads"
      ] }) : "Loading package…",
      footer: /* @__PURE__ */ a("div", { className: "gx-drawer__actions", children: p ? /* @__PURE__ */ i(E, { children: [
        /* @__PURE__ */ a(
          Ce,
          {
            value: p.versionId,
            options: l.map((s) => ({
              value: s.versionId,
              label: `v${s.version} · ${Pe(s.dateCreated)}`
            })),
            onChange: o,
            ariaLabel: "Package version"
          }
        ),
        /* @__PURE__ */ i(
          h,
          {
            variant: "primary",
            icon: "download",
            loading: x,
            onClick: () => void g.install([p.versionId]),
            children: [
              c ? "Reinstall" : "Install",
              " ",
              p.dependencies.length > 0 ? "+ deps" : ""
            ]
          }
        )
      ] }) : /* @__PURE__ */ a(h, { disabled: !0, children: "Nothing to install" }) }),
      children: t.loading ? /* @__PURE__ */ i("div", { className: "gx-detail", children: [
        /* @__PURE__ */ a(M, { height: 60, radius: 12 }),
        /* @__PURE__ */ a(M, { height: 14 }),
        /* @__PURE__ */ a(M, { height: 14, width: "85%" }),
        /* @__PURE__ */ a(M, { height: 14, width: "70%" })
      ] }) : t.error ? /* @__PURE__ */ a(T, { icon: "warning", title: "Could not load the package", body: t.error }) : t.data ? /* @__PURE__ */ i("div", { className: "gx-detail", children: [
        /* @__PURE__ */ i("div", { className: "gx-pkghero", children: [
          /* @__PURE__ */ i("div", { className: "gx-pkghero__stats", children: [
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ a("strong", { children: B(t.data.ratingScore) }),
              /* @__PURE__ */ a("span", { children: "rating" })
            ] }),
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ a("strong", { children: B(t.data.totalDownloads) }),
              /* @__PURE__ */ a("span", { children: "downloads" })
            ] }),
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ a("strong", { children: t.data.versions.length }),
              /* @__PURE__ */ a("span", { children: "versions" })
            ] }),
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ a("strong", { children: O(t.data.dateUpdated) }),
              /* @__PURE__ */ a("span", { children: "updated" })
            ] })
          ] }),
          /* @__PURE__ */ i("div", { className: "gx-pkghero__badges", children: [
            c ? /* @__PURE__ */ i(S, { tone: "green", icon: "check", children: [
              "installed v",
              c.version
            ] }) : null,
            t.data.deprecated ? /* @__PURE__ */ a(S, { tone: "red", children: "deprecated" }) : null,
            t.data.modpack ? /* @__PURE__ */ a(S, { tone: "purple", children: "modpack" }) : null,
            t.data.categories.slice(0, 4).map((s) => /* @__PURE__ */ a("span", { className: "gx-tag", children: s }, s))
          ] })
        ] }),
        t.data.dependencyPreview.length > 0 ? /* @__PURE__ */ i("section", { className: "gx-section", children: [
          /* @__PURE__ */ i("h3", { children: [
            "Dependencies ",
            /* @__PURE__ */ a("span", { className: "gx-count", children: t.data.dependencyPreview.length })
          ] }),
          /* @__PURE__ */ a("p", { className: "gx-muted", children: "Resolved automatically when installing. Installed ones are skipped." }),
          /* @__PURE__ */ a("ul", { className: "gx-deplist", children: t.data.dependencyPreview.map((s) => /* @__PURE__ */ i("li", { className: _("gx-deplist__item", s.installed && "is-ok"), children: [
            /* @__PURE__ */ a(m, { name: s.installed ? "check" : "download", size: 14 }),
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ a("strong", { children: s.name }),
              /* @__PURE__ */ a("span", { className: "gx-muted", children: s.versionId })
            ] }),
            /* @__PURE__ */ a(S, { tone: s.installed ? "green" : "blue", children: s.installed ? "installed" : "will install" })
          ] }, s.versionId)) })
        ] }) : null,
        p ? /* @__PURE__ */ i("section", { className: "gx-section", children: [
          /* @__PURE__ */ a("h3", { children: "Selected version" }),
          /* @__PURE__ */ i("div", { className: "gx-version is-current", children: [
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ i("strong", { children: [
                "v",
                p.version
              ] }),
              /* @__PURE__ */ i("span", { className: "gx-muted", children: [
                Pe(p.dateCreated),
                " · ",
                ae(p.fileSize),
                " ·",
                " ",
                B(p.downloads),
                " downloads · ",
                p.dependencies.length,
                " deps"
              ] })
            ] }),
            /* @__PURE__ */ a(S, { tone: "blue", children: p.versionId })
          ] }),
          p.changelog ? /* @__PURE__ */ a("div", { className: "gx-changelog", children: /* @__PURE__ */ a(ke, { source: p.changelog }) }) : null
        ] }) : null,
        /* @__PURE__ */ i("section", { className: "gx-section", children: [
          /* @__PURE__ */ a("h3", { children: "Readme" }),
          t.data.markdown ? /* @__PURE__ */ a(ke, { source: t.data.markdown }) : /* @__PURE__ */ a("p", { className: "gx-muted", children: t.data.description || "No description provided." })
        ] }),
        t.data.websiteUrl ? /* @__PURE__ */ i("a", { className: "gx-link", href: t.data.websiteUrl, target: "_blank", rel: "noreferrer noopener", children: [
          /* @__PURE__ */ a(m, { name: "external", size: 13 }),
          " Open on Thunderstore"
        ] }) : null
      ] }) : null
    }
  );
}
const Aa = [
  { id: "installed", label: "Installed", icon: "package" },
  { id: "browse", label: "Browse", icon: "store" },
  { id: "updates", label: "Updates", icon: "arrow-up" },
  { id: "profiles", label: "Profiles", icon: "layers" },
  { id: "config", label: "Config", icon: "sliders" },
  { id: "logs", label: "Activity", icon: "terminal" }
];
function Ra() {
  const e = P(), n = re(e), t = X(e), r = Ne(e.mods).length, o = e.mods.filter((l) => l.enabled).length, d = (l) => {
    if (l === "updates" && r > 0) return r;
    if (l === "installed" && e.mods.length > 0) return e.mods.length;
  };
  return /* @__PURE__ */ i("aside", { className: "gx-sidebar", children: [
    /* @__PURE__ */ i("div", { className: "gx-brand", children: [
      /* @__PURE__ */ i("div", { className: "gx-brand__mark", children: [
        /* @__PURE__ */ a("span", {}),
        /* @__PURE__ */ a("span", {})
      ] }),
      /* @__PURE__ */ i("div", { className: "gx-brand__text", children: [
        /* @__PURE__ */ a("strong", { children: "GaleX" }),
        /* @__PURE__ */ a("small", { children: "mod manager" })
      ] })
    ] }),
    /* @__PURE__ */ a("nav", { className: "gx-nav", children: Aa.map((l) => {
      const p = d(l.id);
      return /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          className: _("gx-nav__item", e.view === l.id && "is-active"),
          onClick: () => g.setView(l.id),
          children: [
            /* @__PURE__ */ a(m, { name: l.icon, size: 17 }),
            /* @__PURE__ */ a("span", { className: "gx-nav__label", children: l.label }),
            p !== void 0 ? /* @__PURE__ */ a("span", { className: _("gx-nav__badge", l.id === "updates" && "is-accent"), children: p }) : null
          ]
        },
        l.id
      );
    }) }),
    /* @__PURE__ */ a("div", { className: "gx-sidebar__spacer" }),
    n && t ? /* @__PURE__ */ i("div", { className: "gx-session", children: [
      /* @__PURE__ */ i("div", { className: "gx-session__head", children: [
        /* @__PURE__ */ a(m, { name: "layers", size: 13 }),
        /* @__PURE__ */ a("span", { children: t.name })
      ] }),
      /* @__PURE__ */ a("div", { className: "gx-session__meter", children: /* @__PURE__ */ a(
        "div",
        {
          className: "gx-session__meter-fill",
          style: { width: `${e.mods.length ? o / e.mods.length * 100 : 0}%` }
        }
      ) }),
      /* @__PURE__ */ i("div", { className: "gx-session__stats", children: [
        /* @__PURE__ */ i("span", { children: [
          /* @__PURE__ */ a("strong", { children: o }),
          "/",
          e.mods.length,
          " enabled"
        ] }),
        r > 0 ? /* @__PURE__ */ i("span", { className: "gx-session__warn", children: [
          r,
          " updates"
        ] }) : /* @__PURE__ */ a("span", { children: "up to date" })
      ] }),
      /* @__PURE__ */ a(
        h,
        {
          full: !0,
          size: "sm",
          variant: "primary",
          icon: "play",
          loading: !!e.busy.launch,
          onClick: () => void g.launch(!1),
          title: "Launch the game through Steam with this profile applied",
          children: "Launch"
        }
      )
    ] }) : null,
    /* @__PURE__ */ i("footer", { className: "gx-sidebar__foot", children: [
      /* @__PURE__ */ i("button", { type: "button", className: "gx-nav__item gx-nav__item--sub", onClick: () => g.setView("settings"), children: [
        /* @__PURE__ */ a(m, { name: "settings", size: 16 }),
        /* @__PURE__ */ a("span", { className: "gx-nav__label", children: "Settings" })
      ] }),
      /* @__PURE__ */ i("div", { className: _("gx-conn", `gx-conn--${e.connection}`), children: [
        /* @__PURE__ */ a("span", { className: "gx-conn__dot" }),
        /* @__PURE__ */ a("span", { children: e.connection === "online" ? `bridge v${e.health?.version ?? "?"}` : e.connection === "offline" ? "bridge offline" : "connecting…" })
      ] })
    ] })
  ] });
}
const Ua = {
  info: "info",
  success: "check",
  error: "warning"
};
function je() {
  const { toasts: e } = P();
  return e.length === 0 ? null : /* @__PURE__ */ a("div", { className: "gx-toasts", role: "status", "aria-live": "polite", children: e.map((n) => /* @__PURE__ */ i("div", { className: _("gx-toast", `gx-toast--${n.kind}`), children: [
    /* @__PURE__ */ a("span", { className: "gx-toast__icon", children: /* @__PURE__ */ a(m, { name: Ua[n.kind] ?? "info", size: 15 }) }),
    /* @__PURE__ */ i("div", { className: "gx-toast__body", children: [
      /* @__PURE__ */ a("strong", { children: n.title }),
      n.body ? /* @__PURE__ */ a("span", { children: n.body }) : null
    ] }),
    /* @__PURE__ */ a("button", { type: "button", className: "gx-toast__close", onClick: () => u.dismissToast(n.id), "aria-label": "Dismiss", children: /* @__PURE__ */ a(m, { name: "x", size: 12 }) })
  ] }, n.id)) });
}
function pe({ trigger: e, children: n, align: t = "start", width: r, panelClassName: o }) {
  const [d, l] = b(!1), p = te(null);
  return I(() => {
    if (!d) return;
    const c = (s) => {
      p.current?.contains(s.target) || l(!1);
    }, x = (s) => {
      s.key === "Escape" && l(!1);
    };
    return document.addEventListener("mousedown", c, !0), document.addEventListener("keydown", x, !0), () => {
      document.removeEventListener("mousedown", c, !0), document.removeEventListener("keydown", x, !0);
    };
  }, [d]), /* @__PURE__ */ i("div", { className: "gx-pop", ref: p, children: [
    e({ open: d, toggle: () => l((c) => !c) }),
    d ? /* @__PURE__ */ a(
      "div",
      {
        className: _("gx-pop__panel", t === "end" && "gx-pop__panel--end", o),
        style: r ? { width: r } : void 0,
        role: "menu",
        children: n(() => l(!1))
      }
    ) : null
  ] });
}
function G({
  icon: e,
  children: n,
  onClick: t,
  disabled: r,
  trailing: o,
  active: d
}) {
  return /* @__PURE__ */ i(
    "button",
    {
      type: "button",
      role: "menuitem",
      className: _("gx-menuitem", d && "is-active"),
      disabled: r,
      onClick: t,
      children: [
        e ? /* @__PURE__ */ a(m, { name: e, size: 15 }) : /* @__PURE__ */ a("span", { className: "gx-menuitem__spacer" }),
        /* @__PURE__ */ a("span", { className: "gx-menuitem__label", children: n }),
        o ? /* @__PURE__ */ a("span", { className: "gx-menuitem__trailing", children: o }) : null
      ]
    }
  );
}
function Ae() {
  return /* @__PURE__ */ a("div", { className: "gx-menu-sep", role: "separator" });
}
function we({ children: e }) {
  return /* @__PURE__ */ a("div", { className: "gx-menu-label", children: e });
}
function Se({ game: e, active: n, onPick: t }) {
  return /* @__PURE__ */ i("button", { type: "button", className: _("gx-gamerow", n && "is-active"), onClick: t, role: "menuitem", children: [
    /* @__PURE__ */ a(Q, { name: e.name, size: 30, rounded: 8 }),
    /* @__PURE__ */ i("div", { className: "gx-gamerow__text", children: [
      /* @__PURE__ */ a("span", { className: "gx-gamerow__name", children: e.name }),
      /* @__PURE__ */ a("span", { className: "gx-gamerow__meta", children: e.managed ? `${e.installedModCount} mods · ${e.modLoader}` : e.modLoader })
    ] }),
    e.managed ? e.activeProfileId ? /* @__PURE__ */ a(S, { tone: "blue", children: "profile" }) : null : /* @__PURE__ */ i("span", { className: "gx-gamerow__add", children: [
      /* @__PURE__ */ a(m, { name: "plus", size: 13 }),
      "add"
    ] })
  ] });
}
function Ba() {
  const e = P(), n = re(e), [t, r] = b(""), { favorites: o, managed: d, others: l } = H(() => {
    const p = t.trim().toLowerCase(), c = e.games.filter((x) => !p || x.name.toLowerCase().includes(p));
    return {
      favorites: c.filter((x) => x.managed && x.favorite),
      managed: c.filter((x) => x.managed && !x.favorite),
      others: c.filter((x) => !x.managed).slice(0, 40)
    };
  }, [e.games, t]);
  return /* @__PURE__ */ a(
    pe,
    {
      width: 340,
      panelClassName: "gx-pop__panel--games",
      trigger: ({ open: p, toggle: c }) => /* @__PURE__ */ i("button", { type: "button", className: _("gx-switcher", p && "is-open"), onClick: c, children: [
        n ? /* @__PURE__ */ a(Q, { name: n.name, size: 26, rounded: 7 }) : /* @__PURE__ */ a(za, { size: 16 }),
        /* @__PURE__ */ a("span", { className: "gx-switcher__label", children: n?.name ?? "Select a game" }),
        /* @__PURE__ */ a(m, { name: "chevron-down", size: 14 })
      ] }),
      children: (p) => /* @__PURE__ */ i(E, { children: [
        /* @__PURE__ */ a("div", { className: "gx-pop__search", children: /* @__PURE__ */ a(j, { value: t, onChange: r, placeholder: "Find a game…", icon: "search", autoFocus: !0 }) }),
        /* @__PURE__ */ i("div", { className: "gx-pop__scroll", children: [
          o.length > 0 ? /* @__PURE__ */ a(we, { children: "Favourites" }) : null,
          o.map((c) => /* @__PURE__ */ a(
            Se,
            {
              game: c,
              active: c.slug === e.gameSlug,
              onPick: () => {
                g.selectGame(c.slug), p();
              }
            },
            c.slug
          )),
          d.length > 0 ? /* @__PURE__ */ a(we, { children: "Your games" }) : null,
          d.map((c) => /* @__PURE__ */ a(
            Se,
            {
              game: c,
              active: c.slug === e.gameSlug,
              onPick: () => {
                g.selectGame(c.slug), p();
              }
            },
            c.slug
          )),
          l.length > 0 ? /* @__PURE__ */ a(Ae, {}) : null,
          l.length > 0 ? /* @__PURE__ */ a(we, { children: "Thunderstore communities" }) : null,
          l.map((c) => /* @__PURE__ */ a(
            Se,
            {
              game: c,
              active: c.slug === e.gameSlug,
              onPick: () => {
                g.manageGame(c.slug), p();
              }
            },
            c.slug
          )),
          Ga(o.length, d.length, l.length) ? /* @__PURE__ */ i("p", { className: "gx-pop__empty", children: [
            "No community matches “",
            t,
            "”."
          ] }) : null
        ] }),
        /* @__PURE__ */ i("div", { className: "gx-pop__foot", children: [
          /* @__PURE__ */ a(m, { name: "globe", size: 13 }),
          /* @__PURE__ */ i("span", { children: [
            e.games.length,
            " Thunderstore communities available"
          ] })
        ] })
      ] })
    }
  );
}
function Ga(e, n, t) {
  return e + n + t === 0;
}
function Va(e) {
  switch (e.status) {
    case "queued":
      return "Queued";
    case "downloading":
      return e.current ? `Downloading ${e.current}` : "Downloading";
    case "extracting":
      return e.current ? `Extracting ${e.current}` : "Extracting";
    case "done":
      return "Completed";
    case "failed":
      return e.error ?? "Failed";
    case "cancelled":
      return "Cancelled";
  }
}
function Oa({ task: e }) {
  const n = e.status === "queued" || e.status === "downloading" || e.status === "extracting";
  return /* @__PURE__ */ i("div", { className: _("gx-task", n && "is-active"), children: [
    /* @__PURE__ */ i("div", { className: "gx-task__head", children: [
      /* @__PURE__ */ i("span", { className: _("gx-task__status", `is-${e.status}`), children: [
        e.status === "done" ? /* @__PURE__ */ a(m, { name: "check", size: 12 }) : null,
        e.status === "failed" ? /* @__PURE__ */ a(m, { name: "warning", size: 12 }) : null,
        n ? /* @__PURE__ */ a("span", { className: "gx-spinner gx-spinner--xs" }) : null
      ] }),
      /* @__PURE__ */ a("span", { className: "gx-task__title", children: Va(e) }),
      n ? /* @__PURE__ */ a(
        K,
        {
          icon: "x",
          title: "Cancel",
          size: 13,
          onClick: () => void g.cancelInstall(e.id)
        }
      ) : /* @__PURE__ */ a("span", { className: "gx-task__time", children: O(e.finishedAt ?? e.startedAt) })
    ] }),
    n ? /* @__PURE__ */ i(E, { children: [
      /* @__PURE__ */ a(Le, { value: e.progress }),
      /* @__PURE__ */ i("div", { className: "gx-task__meta", children: [
        /* @__PURE__ */ i("span", { children: [
          e.completed,
          "/",
          e.total,
          " packages"
        ] }),
        /* @__PURE__ */ i("span", { children: [
          Math.round(e.progress * 100),
          "%"
        ] })
      ] })
    ] }) : null
  ] });
}
function ja() {
  const e = P(), n = va(e.tasks), t = e.tasks.slice(0, 6);
  return /* @__PURE__ */ a(
    pe,
    {
      align: "end",
      width: 340,
      trigger: ({ open: r, toggle: o }) => /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          className: _("gx-queuebtn", r && "is-open", n > 0 && "is-active"),
          onClick: o,
          title: "Install queue",
          children: [
            n > 0 ? /* @__PURE__ */ a("span", { className: "gx-spinner gx-spinner--sm" }) : /* @__PURE__ */ a(m, { name: "download", size: 16 }),
            /* @__PURE__ */ a("span", { children: n > 0 ? `${n} in queue` : "Queue" }),
            n > 0 ? /* @__PURE__ */ a(Le, { value: e.tasks.find((d) => d.status !== "done")?.progress ?? 0 }) : null
          ]
        }
      ),
      children: () => /* @__PURE__ */ i(E, { children: [
        /* @__PURE__ */ i("div", { className: "gx-pop__head", children: [
          /* @__PURE__ */ a("span", { children: "Install queue" }),
          /* @__PURE__ */ a(S, { tone: n > 0 ? "blue" : "neutral", children: n > 0 ? `${n} running` : "idle" })
        ] }),
        t.length === 0 ? /* @__PURE__ */ a("p", { className: "gx-pop__empty", children: "Nothing installed yet. Pick a mod in Browse to get started." }) : /* @__PURE__ */ a("div", { className: "gx-pop__scroll gx-pop__scroll--tasks", children: t.map((r) => /* @__PURE__ */ a(Oa, { task: r }, r.id)) }),
        /* @__PURE__ */ i("div", { className: "gx-pop__foot", children: [
          /* @__PURE__ */ a(m, { name: "info", size: 13 }),
          /* @__PURE__ */ i("span", { children: [
            "Cache: downloads are reused across profiles · ",
            ae(0)
          ] })
        ] })
      ] })
    }
  );
}
function Fa() {
  const e = P(), n = X(e);
  return /* @__PURE__ */ a(
    pe,
    {
      width: 290,
      trigger: ({ open: t, toggle: r }) => /* @__PURE__ */ i(
        "button",
        {
          type: "button",
          className: _("gx-switcher gx-switcher--ghost", t && "is-open"),
          onClick: r,
          title: "Switch profile",
          children: [
            /* @__PURE__ */ a(m, { name: "layers", size: 15 }),
            /* @__PURE__ */ a("span", { className: "gx-switcher__label", children: n?.name ?? "No profile" }),
            /* @__PURE__ */ a(m, { name: "chevron-down", size: 13 })
          ]
        }
      ),
      children: (t) => /* @__PURE__ */ i(E, { children: [
        /* @__PURE__ */ a(we, { children: "Profiles for this game" }),
        e.profiles.length === 0 ? /* @__PURE__ */ a("p", { className: "gx-pop__empty", children: "No profiles yet." }) : null,
        e.profiles.map((r) => /* @__PURE__ */ i(
          G,
          {
            icon: r.id === e.profileId ? "check" : "folder",
            active: r.id === e.profileId,
            onClick: () => {
              g.selectProfile(r.id), t();
            },
            trailing: /* @__PURE__ */ i("span", { className: "gx-menuitem__count", children: [
              r.enabledCount,
              "/",
              r.modCount
            ] }),
            children: [
              r.name,
              r.active ? /* @__PURE__ */ a("em", { className: "gx-menuitem__tag", children: "active" }) : null
            ]
          },
          r.id
        )),
        /* @__PURE__ */ a(Ae, {}),
        /* @__PURE__ */ a(
          G,
          {
            icon: "layers",
            onClick: () => {
              g.setView("profiles"), t();
            },
            children: "Manage profiles…"
          }
        ),
        /* @__PURE__ */ a(
          G,
          {
            icon: "plus",
            onClick: () => {
              g.setView("profiles"), t();
            },
            children: "New profile…"
          }
        )
      ] })
    }
  );
}
function qa() {
  const e = P(), n = X(e), t = Ne(e.mods).length, [r, o] = b(e.search);
  return I(() => {
    o(e.search);
  }, [e.search]), I(() => {
    if (r === e.search) return;
    const d = setTimeout(() => {
      g.setSearch(r), r.trim() && e.view !== "browse" && g.setView("browse");
    }, 280);
    return () => clearTimeout(d);
  }, [r, e.search, e.view]), /* @__PURE__ */ i("header", { className: "gx-topbar", children: [
    /* @__PURE__ */ i("div", { className: "gx-topbar__left", children: [
      /* @__PURE__ */ a(Ba, {}),
      /* @__PURE__ */ a("span", { className: "gx-topbar__divider" }),
      /* @__PURE__ */ a(Fa, {}),
      t > 0 ? /* @__PURE__ */ i("button", { type: "button", className: "gx-updates-pill", onClick: () => g.setView("updates"), children: [
        /* @__PURE__ */ a(m, { name: "arrow-up", size: 12 }),
        t,
        " update",
        t === 1 ? "" : "s"
      ] }) : null
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-topbar__right", children: [
      /* @__PURE__ */ a(
        j,
        {
          className: "gx-topbar__search",
          value: r,
          onChange: o,
          placeholder: "Search Thunderstore…",
          icon: "search",
          ariaLabel: "Search Thunderstore packages"
        }
      ),
      /* @__PURE__ */ a(ja, {}),
      /* @__PURE__ */ a(
        K,
        {
          icon: "refresh",
          title: "Refresh profile data",
          onClick: () => void g.refreshAll(),
          className: e.busy.refresh ? "is-spinning" : void 0
        }
      ),
      /* @__PURE__ */ i("div", { className: "gx-launchgroup", children: [
        /* @__PURE__ */ a(
          h,
          {
            variant: "primary",
            icon: "play",
            loading: !!e.busy.launch,
            onClick: () => void g.launch(!1),
            disabled: !n,
            children: "Launch"
          }
        ),
        /* @__PURE__ */ a(
          pe,
          {
            align: "end",
            width: 250,
            trigger: ({ open: d, toggle: l }) => /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: `gx-launchgroup__more${d ? " is-open" : ""}`,
                onClick: l,
                "aria-label": "More launch options",
                children: /* @__PURE__ */ a(m, { name: "chevron-down", size: 14 })
              }
            ),
            children: (d) => /* @__PURE__ */ i(E, { children: [
              /* @__PURE__ */ a(
                G,
                {
                  icon: "play",
                  onClick: () => {
                    g.launch(!1), d();
                  },
                  children: "Launch with mods"
                }
              ),
              /* @__PURE__ */ a(
                G,
                {
                  icon: "power",
                  onClick: () => {
                    g.launch(!0), d();
                  },
                  children: "Launch vanilla"
                }
              ),
              /* @__PURE__ */ a(
                G,
                {
                  icon: "sliders",
                  onClick: () => {
                    g.setView("settings"), d();
                  },
                  trailing: /* @__PURE__ */ a(S, { tone: "neutral", children: "args" }),
                  children: "Launch options"
                }
              )
            ] })
          }
        )
      ] })
    ] })
  ] });
}
const Za = [
  { value: "rating", label: "Top rated" },
  { value: "downloads", label: "Most downloaded" },
  { value: "updated", label: "Recently updated" },
  { value: "newest", label: "Newest" },
  { value: "name", label: "Name A–Z" }
];
function Ha({ pkg: e }) {
  return /* @__PURE__ */ i("button", { type: "button", className: _("gx-pkgcard", e.installed && "is-installed"), onClick: () => g.openPackage(e.fullName), children: [
    /* @__PURE__ */ i("div", { className: "gx-pkgcard__head", children: [
      /* @__PURE__ */ a(Q, { name: e.name, src: e.iconUrl, size: 46, rounded: 11 }),
      /* @__PURE__ */ i("div", { className: "gx-pkgcard__titles", children: [
        /* @__PURE__ */ a("strong", { children: e.name }),
        /* @__PURE__ */ a("span", { children: e.owner })
      ] }),
      e.installed ? /* @__PURE__ */ a(S, { tone: "green", icon: "check", children: e.installedVersion ?? "installed" }) : null
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-pkgcard__desc", children: e.description || "No description provided." }),
    /* @__PURE__ */ i("div", { className: "gx-pkgcard__meta", children: [
      /* @__PURE__ */ i("span", { title: "Rating", children: [
        /* @__PURE__ */ a(m, { name: "star", size: 12 }),
        " ",
        e.ratingScore
      ] }),
      /* @__PURE__ */ i("span", { title: "Downloads", children: [
        /* @__PURE__ */ a(m, { name: "download", size: 12 }),
        " ",
        B(e.totalDownloads)
      ] }),
      /* @__PURE__ */ i("span", { title: "Last update", children: [
        /* @__PURE__ */ a(m, { name: "clock", size: 12 }),
        " ",
        O(e.dateUpdated)
      ] }),
      /* @__PURE__ */ i("span", { className: "gx-pkgcard__version", children: [
        "v",
        e.version
      ] })
    ] }),
    e.categories.length > 0 ? /* @__PURE__ */ i("div", { className: "gx-pkgcard__tags", children: [
      e.deprecated ? /* @__PURE__ */ a(S, { tone: "red", children: "deprecated" }) : null,
      e.modpack ? /* @__PURE__ */ a(S, { tone: "purple", children: "modpack" }) : null,
      e.categories.slice(0, 3).map((n) => /* @__PURE__ */ a("span", { className: "gx-tag", children: n }, n))
    ] }) : null
  ] });
}
function Ka() {
  const e = P(), n = re(e), t = X(e), r = Ea(e.search, 260), [o, d] = b(void 0), [l, p] = b("rating"), [c, x] = b(!1), [s, f] = b(1), [v, L] = b(void 0), [F, D] = b([]), [q, xe] = b(!1), [ue, y] = b(void 0), w = n?.slug;
  I(() => {
    f(1);
  }, [r, o, l, c, w]), I(() => {
    if (!w) return;
    let N = !1;
    const Y = setTimeout(() => {
      xe(!0), k.browse(w, { search: r, category: o, sort: l, includeDeprecated: c, page: s, pageSize: 30 }).then((ie) => {
        N || (L(ie), y(void 0));
      }).catch((ie) => {
        N || y(ie instanceof Error ? ie.message : String(ie));
      }).finally(() => {
        N || xe(!1);
      });
    }, 60);
    return () => {
      N = !0, clearTimeout(Y);
    };
  }, [w, r, o, l, c, s]), I(() => {
    if (!w) return;
    let N = !1;
    return k.categories(w).then((Y) => {
      N || D(Y);
    }).catch(() => {
    }), () => {
      N = !0;
    };
  }, [w]);
  const A = H(() => [...F].sort((N, Y) => Y.count - N.count).slice(0, 12), [F]), R = v ? Math.max(1, Math.ceil(v.total / v.pageSize)) : 1;
  return n?.managed ? /* @__PURE__ */ i("div", { className: "gx-view", children: [
    /* @__PURE__ */ i("header", { className: "gx-view__head", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("h1", { children: [
          "Browse ",
          n.name,
          v ? /* @__PURE__ */ a("span", { className: "gx-count", children: v.total }) : null
        ] }),
        /* @__PURE__ */ i("p", { children: [
          "Thunderstore packages for ",
          /* @__PURE__ */ a("strong", { children: t?.name ?? "this profile" }),
          ". Dependencies install automatically."
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "gx-view__tools", children: /* @__PURE__ */ a(Ce, { value: l, options: Za, onChange: p, ariaLabel: "Sort packages" }) })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-filterbar gx-filterbar--wrap", children: [
      /* @__PURE__ */ i("div", { className: "gx-filterbar__chips", children: [
        /* @__PURE__ */ a(V, { active: !o, onClick: () => d(void 0), children: "All categories" }),
        A.map((N) => /* @__PURE__ */ a(
          V,
          {
            active: o === N.name,
            onClick: () => d(o === N.name ? void 0 : N.name),
            count: N.count,
            children: N.name
          },
          N.slug
        ))
      ] }),
      /* @__PURE__ */ i("label", { className: "gx-inlinefield", children: [
        /* @__PURE__ */ a(J, { size: "sm", checked: c, onChange: x, label: "Show deprecated" }),
        /* @__PURE__ */ a("span", { children: "Show deprecated" })
      ] })
    ] }),
    ue ? /* @__PURE__ */ i("div", { className: "gx-callout gx-callout--warn", children: [
      /* @__PURE__ */ a(m, { name: "warning", size: 15 }),
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ a("strong", { children: "Thunderstore request failed" }),
        /* @__PURE__ */ a("p", { children: ue })
      ] })
    ] }) : null,
    q && !v ? /* @__PURE__ */ a("div", { className: "gx-pkggrid", children: Array.from({ length: 9 }).map((N, Y) => /* @__PURE__ */ i("div", { className: "gx-pkgcard gx-pkgcard--skeleton", children: [
      /* @__PURE__ */ a(M, { height: 46, width: 46, radius: 11 }),
      /* @__PURE__ */ a(M, { height: 13, width: "70%" }),
      /* @__PURE__ */ a(M, { height: 11, width: "90%" }),
      /* @__PURE__ */ a(M, { height: 11, width: "60%" })
    ] }, Y)) }) : v && v.packages.length === 0 ? /* @__PURE__ */ a(
      T,
      {
        icon: "search",
        title: "No packages found",
        body: r ? `Nothing matches “${r}”.` : "Try a different category or sorting.",
        action: /* @__PURE__ */ a(
          h,
          {
            onClick: () => {
              g.setSearch("");
            },
            children: "Clear search"
          }
        )
      }
    ) : /* @__PURE__ */ i(E, { children: [
      /* @__PURE__ */ a("div", { className: _("gx-pkggrid", q && "is-refreshing"), children: v?.packages.map((N) => /* @__PURE__ */ a(Ha, { pkg: N }, N.fullName)) }),
      R > 1 ? /* @__PURE__ */ i("div", { className: "gx-pager", children: [
        /* @__PURE__ */ a(h, { size: "sm", icon: "chevron-left", disabled: s <= 1, onClick: () => f((N) => Math.max(1, N - 1)), children: "Previous" }),
        /* @__PURE__ */ i("span", { children: [
          "Page ",
          s,
          " of ",
          R
        ] }),
        /* @__PURE__ */ a(
          h,
          {
            size: "sm",
            iconRight: "chevron-right",
            disabled: s >= R,
            onClick: () => f((N) => N + 1),
            children: "Next"
          }
        )
      ] }) : null
    ] })
  ] }) : /* @__PURE__ */ a(
    T,
    {
      icon: "store",
      title: "Add the game first",
      body: "GaleX needs a profile to know where to install packages.",
      action: n ? /* @__PURE__ */ i(h, { variant: "primary", icon: "plus", onClick: () => void g.manageGame(n.slug), children: [
        "Add ",
        n.name
      ] }) : void 0
    }
  );
}
function Ya() {
  const e = P(), n = X(e), [t, r] = b(void 0), [o, d] = b(void 0), [l, p] = b(""), [c, x] = b(void 0), [s, f] = b(void 0), v = te(void 0), L = n?.id;
  I(() => {
    if (!L) {
      r([]);
      return;
    }
    let y = !1;
    return r(void 0), k.config(L).then((w) => {
      y || (r(w), d(w[0]?.path));
    }).catch((w) => {
      y || x(w instanceof Error ? w.message : String(w));
    }), () => {
      y = !0;
    };
  }, [L]);
  const F = H(() => {
    const y = l.trim().toLowerCase();
    return t ? y ? t.filter((w) => w.name.toLowerCase().includes(y) || w.plugin?.toLowerCase().includes(y)) : t : [];
  }, [t, l]), D = t?.find((y) => y.path === o), q = async (y) => {
    f(void 0);
    try {
      const w = await k.config(y);
      r(w), w.some((A) => A.path === o) || d(w[0]?.path);
    } catch (w) {
      x(w instanceof Error ? w.message : String(w));
    }
  }, xe = (y, w) => {
    !L || !D || (r(
      (A) => A?.map(
        (R) => R.path !== D.path ? R : {
          ...R,
          entries: R.entries.map(
            (N) => N.section === y.section && N.key === y.key ? { ...N, value: w, modified: w !== N.defaultValue } : N
          )
        }
      )
    ), clearTimeout(v.current), v.current = setTimeout(() => {
      g.saveConfigEntry(L, D.path, y.section, y.key, w).then(() => {
        f(Date.now());
      });
    }, 350));
  }, ue = (y) => {
    !L || !D || g.resetConfigEntry(L, D.path, y.section, y.key).then((w) => {
      w && (r((A) => A?.map((R) => R.path === w.path ? w : R)), f(Date.now()));
    });
  };
  return n ? c ? /* @__PURE__ */ a(T, { icon: "warning", title: "Config files are unavailable", body: c, action: /* @__PURE__ */ a(h, { onClick: () => x(void 0), children: "Retry" }) }) : /* @__PURE__ */ i("div", { className: "gx-view gx-view--config", children: [
    /* @__PURE__ */ i("header", { className: "gx-view__head", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("h1", { children: [
          "Configuration",
          /* @__PURE__ */ a("span", { className: "gx-count", children: t?.length ?? 0 })
        ] }),
        /* @__PURE__ */ i("p", { children: [
          "BepInEx and mod config files of ",
          /* @__PURE__ */ a("strong", { children: n.name }),
          ". Values are written on the fly."
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "gx-view__tools", children: [
        s ? /* @__PURE__ */ i("span", { className: "gx-saved", children: [
          /* @__PURE__ */ a(m, { name: "check", size: 12 }),
          " saved"
        ] }) : null,
        /* @__PURE__ */ a(h, { size: "sm", icon: "refresh", onClick: () => void q(n.id), children: "Reload" })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-config", children: [
      /* @__PURE__ */ i("aside", { className: "gx-config__files", children: [
        /* @__PURE__ */ a(j, { value: l, onChange: p, placeholder: "Filter files…", icon: "search" }),
        t ? F.length === 0 ? /* @__PURE__ */ a("p", { className: "gx-muted gx-config__nofiles", children: "No config files yet. Start the game once with a mod installed and BepInEx will generate them." }) : F.map((y) => /* @__PURE__ */ i(
          "button",
          {
            type: "button",
            className: _("gx-config__file", y.path === o && "is-active"),
            onClick: () => d(y.path),
            children: [
              /* @__PURE__ */ a(m, { name: "sliders", size: 14 }),
              /* @__PURE__ */ i("div", { children: [
                /* @__PURE__ */ a("strong", { children: y.plugin ?? y.name }),
                /* @__PURE__ */ a("span", { children: y.name })
              ] }),
              /* @__PURE__ */ a("span", { className: "gx-count", children: y.entries.length })
            ]
          },
          y.path
        )) : /* @__PURE__ */ i("div", { className: "gx-config__skeletons", children: [
          /* @__PURE__ */ a(M, { height: 34 }),
          /* @__PURE__ */ a(M, { height: 34 }),
          /* @__PURE__ */ a(M, { height: 34 })
        ] })
      ] }),
      /* @__PURE__ */ a("section", { className: "gx-config__body", children: D ? /* @__PURE__ */ i(E, { children: [
        /* @__PURE__ */ i("div", { className: "gx-config__filehead", children: [
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ a("strong", { children: D.name }),
            /* @__PURE__ */ a("span", { className: "gx-monospace gx-muted", children: D.path })
          ] }),
          /* @__PURE__ */ a(Xa, { path: D.path })
        ] }),
        Wa(D.entries).map(([y, w]) => /* @__PURE__ */ i("div", { className: "gx-config__section", children: [
          /* @__PURE__ */ i("h3", { children: [
            /* @__PURE__ */ a("span", { children: y }),
            /* @__PURE__ */ a(S, { tone: "neutral", children: w.length })
          ] }),
          w.map((A) => /* @__PURE__ */ a(
            Ja,
            {
              entry: A,
              onChange: (R) => xe(A, R),
              onReset: () => ue(A)
            },
            `${A.section}.${A.key}`
          ))
        ] }, y))
      ] }) : t === void 0 ? /* @__PURE__ */ a(M, { height: 220, radius: 12 }) : /* @__PURE__ */ a(
        T,
        {
          icon: "sliders",
          title: "Select a config file",
          body: "Every mod that ships a BepInEx config appears on the left."
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ a(T, { icon: "sliders", title: "No profile selected", body: "Pick a profile to edit its mod configuration." });
}
function Xa({ path: e }) {
  const { copied: n, copy: t } = ze();
  return /* @__PURE__ */ a(K, { icon: n ? "check" : "copy", title: "Copy path", onClick: () => void t(e), size: 14 });
}
function Ja({
  entry: e,
  onChange: n,
  onReset: t
}) {
  return /* @__PURE__ */ i("div", { className: _("gx-entry", e.modified && "is-modified"), children: [
    /* @__PURE__ */ i("div", { className: "gx-entry__label", children: [
      /* @__PURE__ */ a("strong", { children: e.key }),
      e.description ? /* @__PURE__ */ a("span", { title: e.description, children: e.description }) : null
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-entry__control", children: [
      /* @__PURE__ */ a(Qa, { entry: e, onChange: n }),
      e.modified ? /* @__PURE__ */ a(K, { icon: "refresh", title: "Reset to default", size: 13, onClick: t }) : null
    ] })
  ] });
}
function Qa({ entry: e, onChange: n }) {
  const [t, r] = b(String(e.value)), [o, d] = b(!1);
  switch (I(() => {
    r(String(e.value));
  }, [e.value]), I(() => {
    if (!o) return;
    const l = (p) => {
      p.preventDefault(), p.stopPropagation();
      const c = [];
      p.ctrlKey && c.push("LeftControl"), p.shiftKey && c.push("LeftShift"), p.altKey && c.push("LeftAlt");
      const x = p.key.length === 1 ? p.key.toUpperCase() : p.key;
      ["Control", "Shift", "Alt", "Meta"].includes(p.key) || c.push(x), c.length > 0 && (n(c.join(" + ")), d(!1));
    };
    return window.addEventListener("keydown", l, !0), () => window.removeEventListener("keydown", l, !0);
  }, [o, n]), e.type) {
    case "bool":
      return /* @__PURE__ */ a(J, { checked: !!e.value, onChange: (l) => n(l), label: e.key });
    case "enum":
      return /* @__PURE__ */ a(
        Ce,
        {
          value: String(e.value),
          options: (e.choices ?? []).map((l) => ({ value: l, label: l })),
          onChange: n,
          ariaLabel: e.key
        }
      );
    case "key":
      return /* @__PURE__ */ i("div", { className: "gx-keyfield", children: [
        /* @__PURE__ */ a("input", { className: "gx-number", value: String(e.value), onChange: (l) => n(l.target.value) }),
        /* @__PURE__ */ a(h, { size: "sm", variant: o ? "primary" : "secondary", onClick: () => d((l) => !l), children: o ? "Press a key…" : "Capture" })
      ] });
    case "int":
    case "float":
      return /* @__PURE__ */ i("div", { className: "gx-numberfield", children: [
        e.min !== void 0 && e.max !== void 0 ? /* @__PURE__ */ a(
          "input",
          {
            type: "range",
            min: e.min,
            max: e.max,
            step: e.type === "int" ? 1 : 0.01,
            value: Number(e.value),
            onChange: (l) => n(Number(l.target.value))
          }
        ) : null,
        /* @__PURE__ */ a(
          "input",
          {
            className: "gx-number",
            type: "number",
            value: t,
            step: e.type === "int" ? 1 : 0.01,
            onChange: (l) => {
              r(l.target.value);
              const p = Number(l.target.value);
              Number.isNaN(p) || n(p);
            }
          }
        )
      ] });
    default:
      return /* @__PURE__ */ a(
        "input",
        {
          className: "gx-number gx-number--wide",
          value: t,
          onChange: (l) => {
            r(l.target.value), n(l.target.value);
          }
        }
      );
  }
}
function Wa(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e) {
    const r = n.get(t.section) ?? [];
    r.push(t), n.set(t.section, r);
  }
  return [...n.entries()];
}
function en({ mod: e }) {
  const n = P(), [t, r] = b(!1), o = e.dependantUuids.map((l) => n.mods.find((p) => p.uuid === l)).filter((l) => !!l && !!l?.enabled), d = !!e.update && !e.ignoredUpdate;
  return /* @__PURE__ */ i(E, { children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: _("gx-modrow", !e.enabled && "is-disabled", d && "has-update"),
        onClick: () => g.openMod(e.uuid),
        role: "button",
        tabIndex: 0,
        onKeyDown: (l) => {
          l.key === "Enter" && g.openMod(e.uuid);
        },
        children: [
          /* @__PURE__ */ a(Q, { name: e.name, src: e.iconUrl, size: n.compact ? 34 : 42, rounded: 10 }),
          /* @__PURE__ */ i("div", { className: "gx-modrow__main", children: [
            /* @__PURE__ */ i("div", { className: "gx-modrow__titleline", children: [
              /* @__PURE__ */ a("span", { className: "gx-modrow__name", children: e.name }),
              e.deprecated ? /* @__PURE__ */ a(S, { tone: "red", children: "deprecated" }) : null,
              e.modpack ? /* @__PURE__ */ a(S, { tone: "purple", children: "modpack" }) : null,
              e.kind === "local" ? /* @__PURE__ */ a(S, { tone: "amber", children: "local" }) : null,
              e.missingDependencies.length > 0 ? /* @__PURE__ */ a(S, { tone: "red", icon: "warning", children: "missing deps" }) : null,
              !e.enabled && e.dependantUuids.length > 0 ? /* @__PURE__ */ a(S, { tone: "amber", icon: "warning", children: "in use" }) : null
            ] }),
            /* @__PURE__ */ i("div", { className: "gx-modrow__sub", children: [
              /* @__PURE__ */ a("span", { className: "gx-modrow__author", children: e.author }),
              /* @__PURE__ */ a("span", { className: "gx-dot" }),
              /* @__PURE__ */ i("span", { children: [
                "v",
                e.version
              ] }),
              n.compact ? null : /* @__PURE__ */ i(E, { children: [
                /* @__PURE__ */ a("span", { className: "gx-dot" }),
                /* @__PURE__ */ a("span", { children: ae(e.sizeBytes) }),
                /* @__PURE__ */ a("span", { className: "gx-dot" }),
                /* @__PURE__ */ a("span", { children: O(e.installTime) })
              ] })
            ] })
          ] }),
          d && e.update ? /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              className: "gx-modrow__update",
              onClick: (l) => {
                l.stopPropagation(), g.changeVersion(e, e.update.versionId);
              },
              title: `Update to ${e.update.version}`,
              children: [
                /* @__PURE__ */ a(m, { name: "arrow-up", size: 12 }),
                e.update.version
              ]
            }
          ) : null,
          n.compact ? null : /* @__PURE__ */ i("div", { className: "gx-modrow__stats", children: [
            /* @__PURE__ */ i("span", { title: `${B(e.totalDownloads)} downloads`, children: [
              /* @__PURE__ */ a(m, { name: "download", size: 12 }),
              B(e.totalDownloads)
            ] }),
            /* @__PURE__ */ i("span", { title: `${e.ratingScore} rating`, children: [
              /* @__PURE__ */ a(m, { name: "star", size: 12 }),
              e.ratingScore
            ] })
          ] }),
          /* @__PURE__ */ a(
            J,
            {
              size: "sm",
              checked: e.enabled,
              label: `Toggle ${e.name}`,
              onChange: () => void g.toggleMod(e)
            }
          ),
          /* @__PURE__ */ a(
            pe,
            {
              align: "end",
              width: 240,
              trigger: ({ toggle: l }) => /* @__PURE__ */ a(
                K,
                {
                  icon: "settings",
                  size: 15,
                  title: "Mod actions",
                  onClick: (p) => {
                    p.stopPropagation(), l();
                  }
                }
              ),
              children: (l) => /* @__PURE__ */ i(E, { children: [
                /* @__PURE__ */ a(
                  G,
                  {
                    icon: "info",
                    onClick: () => {
                      g.openMod(e.uuid), l();
                    },
                    children: "Details & versions"
                  }
                ),
                /* @__PURE__ */ a(
                  G,
                  {
                    icon: e.ignoredUpdate ? "sparkles" : "x",
                    disabled: !e.update,
                    onClick: () => {
                      g.ignoreUpdate(e, !e.ignoredUpdate), l();
                    },
                    children: e.ignoredUpdate ? "Un-ignore update" : "Ignore this update"
                  }
                ),
                /* @__PURE__ */ a(
                  G,
                  {
                    icon: e.enabled ? "x" : "check",
                    onClick: () => {
                      g.toggleMod(e), l();
                    },
                    children: e.enabled ? "Disable mod" : "Enable mod"
                  }
                ),
                /* @__PURE__ */ a(Ae, {}),
                /* @__PURE__ */ i(
                  G,
                  {
                    icon: "trash",
                    disabled: o.length > 0,
                    onClick: () => {
                      r(!0), l();
                    },
                    children: [
                      "Remove",
                      o.length > 0 ? /* @__PURE__ */ a("em", { className: "gx-menuitem__tag", children: "blocks deps" }) : null
                    ]
                  }
                )
              ] })
            }
          )
        ]
      }
    ),
    t ? /* @__PURE__ */ a(
      De,
      {
        title: `Remove ${e.name}?`,
        body: `The mod files will be deleted from the profile. ${o.length > 0 ? `${o.length} enabled mod(s) depend on it.` : ""}`,
        confirmLabel: o.length > 0 ? "Remove anyway" : "Remove",
        danger: !0,
        onCancel: () => r(!1),
        onConfirm: () => {
          r(!1), g.removeMod(e, o.length > 0);
        },
        children: o.length > 0 ? /* @__PURE__ */ a("ul", { className: "gx-dependencylist", children: o.map((l) => /* @__PURE__ */ i("li", { children: [
          /* @__PURE__ */ a(m, { name: "warning", size: 12 }),
          " ",
          l.name
        ] }, l.uuid)) }) : null
      }
    ) : null
  ] });
}
const an = [
  { value: "name", label: "Name A–Z" },
  { value: "installed", label: "Recently installed" },
  { value: "size", label: "Largest first" },
  { value: "downloads", label: "Most downloaded" }
];
function nn() {
  const e = P(), n = re(e), t = X(e), [r, o] = b("all"), [d, l] = b("name"), p = Ne(e.mods), c = e.mods.filter((s) => s.missingDependencies.length > 0), x = H(() => {
    let s = [...e.mods];
    switch (r) {
      case "enabled":
        s = s.filter((f) => f.enabled);
        break;
      case "disabled":
        s = s.filter((f) => !f.enabled);
        break;
      case "updates":
        s = s.filter((f) => f.update && !f.ignoredUpdate);
        break;
      case "problems":
        s = s.filter((f) => f.missingDependencies.length > 0);
        break;
      case "local":
        s = s.filter((f) => f.kind === "local");
        break;
    }
    return tn(s, d);
  }, [e.mods, r, d]);
  return n ? n.managed ? t ? /* @__PURE__ */ i("div", { className: "gx-view", children: [
    /* @__PURE__ */ i("header", { className: "gx-view__head", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("h1", { children: [
          "Installed mods",
          /* @__PURE__ */ a("span", { className: "gx-count", children: e.mods.length })
        ] }),
        /* @__PURE__ */ i("p", { children: [
          t.name,
          " · ",
          e.mods.filter((s) => s.enabled).length,
          " enabled",
          p.length > 0 ? ` · ${p.length} update${p.length === 1 ? "" : "s"} available` : ""
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "gx-view__tools", children: [
        e.mods.length > 0 ? /* @__PURE__ */ i(E, { children: [
          /* @__PURE__ */ a(h, { size: "sm", icon: "check", onClick: () => void g.setAllMods(!0), children: "Enable all" }),
          /* @__PURE__ */ a(h, { size: "sm", icon: "x", onClick: () => void g.setAllMods(!1), children: "Disable all" })
        ] }) : null,
        /* @__PURE__ */ a(K, { icon: "refresh", title: "Refresh", onClick: () => void g.refreshMods() }),
        /* @__PURE__ */ a(
          Sa,
          {
            value: e.compact ? "compact" : "cozy",
            options: [
              { value: "cozy", label: "Cozy", icon: "list" },
              { value: "compact", label: "Compact", icon: "grid" }
            ],
            onChange: (s) => g.setCompact(s === "compact")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-filterbar", children: [
      /* @__PURE__ */ i("div", { className: "gx-filterbar__chips", children: [
        /* @__PURE__ */ a(V, { active: r === "all", onClick: () => o("all"), count: e.mods.length, children: "All" }),
        /* @__PURE__ */ a(V, { active: r === "enabled", onClick: () => o("enabled"), children: "Enabled" }),
        /* @__PURE__ */ a(V, { active: r === "disabled", onClick: () => o("disabled"), children: "Disabled" }),
        /* @__PURE__ */ a(V, { active: r === "updates", onClick: () => o("updates"), tone: "accent", count: p.length, children: "Updates" }),
        /* @__PURE__ */ a(V, { active: r === "problems", onClick: () => o("problems"), count: c.length, children: "Needs attention" }),
        /* @__PURE__ */ a(V, { active: r === "local", onClick: () => o("local"), children: "Local" })
      ] }),
      /* @__PURE__ */ a(Ce, { value: d, options: an, onChange: l, ariaLabel: "Sort mods" })
    ] }),
    e.modsLoading ? /* @__PURE__ */ a("div", { className: "gx-modlist", children: Array.from({ length: 6 }).map((s, f) => /* @__PURE__ */ i("div", { className: "gx-modrow gx-modrow--skeleton", children: [
      /* @__PURE__ */ a(M, { height: 42, width: 42, radius: 10 }),
      /* @__PURE__ */ i("div", { className: "gx-modrow__main", children: [
        /* @__PURE__ */ a(M, { height: 13, width: "38%" }),
        /* @__PURE__ */ a(M, { height: 11, width: "24%" })
      ] }),
      /* @__PURE__ */ a(M, { height: 20, width: 38, radius: 10 })
    ] }, f)) }) : e.mods.length === 0 ? /* @__PURE__ */ a(
      T,
      {
        icon: "store",
        title: "This profile is empty",
        body: "Browse Thunderstore to install your first mod. Dependencies are resolved automatically.",
        action: /* @__PURE__ */ a(h, { variant: "primary", icon: "store", onClick: () => g.setView("browse"), children: "Browse Thunderstore" })
      }
    ) : x.length === 0 ? /* @__PURE__ */ a(
      T,
      {
        icon: "filter",
        title: "Nothing matches this filter",
        body: "Try another filter, or clear it to see every installed mod.",
        action: /* @__PURE__ */ a(h, { onClick: () => o("all"), children: "Show all mods" })
      }
    ) : /* @__PURE__ */ a("div", { className: _("gx-modlist", e.compact && "gx-modlist--compact"), children: x.map((s) => /* @__PURE__ */ a(en, { mod: s }, s.uuid)) }),
    e.modsError ? /* @__PURE__ */ i("div", { className: "gx-callout gx-callout--warn", children: [
      /* @__PURE__ */ a(m, { name: "warning", size: 15 }),
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ a("strong", { children: "The mod list could not be loaded" }),
        /* @__PURE__ */ a("p", { children: e.modsError })
      ] })
    ] }) : null
  ] }) : /* @__PURE__ */ a(
    T,
    {
      icon: "layers",
      title: "No profile yet",
      body: "Profiles keep separate mod setups for the same game.",
      action: /* @__PURE__ */ a(h, { variant: "primary", icon: "plus", onClick: () => g.setView("profiles"), children: "Create a profile" })
    }
  ) : /* @__PURE__ */ a("div", { className: "gx-view", children: /* @__PURE__ */ a(
    T,
    {
      icon: "plus",
      title: `Set up ${n.name}`,
      body: `GaleX will create a profile folder and install ${n.modLoader} on first install. Nothing is written to ${n.detectedPath ?? "the game folder"} until then.`,
      action: /* @__PURE__ */ i(h, { variant: "primary", icon: "plus", onClick: () => void g.manageGame(n.slug), children: [
        "Add ",
        n.name
      ] })
    }
  ) }) : /* @__PURE__ */ a(T, { icon: "globe", title: "No game selected", body: "Pick a Thunderstore community in the header to begin." });
}
function tn(e, n) {
  const t = [...e];
  switch (n) {
    case "installed":
      return t.sort((r, o) => Date.parse(o.installTime) - Date.parse(r.installTime));
    case "size":
      return t.sort((r, o) => o.sizeBytes - r.sizeBytes);
    case "downloads":
      return t.sort((r, o) => o.totalDownloads - r.totalDownloads);
    default:
      return t.sort((r, o) => r.name.localeCompare(o.name));
  }
}
const rn = [
  { value: "all", label: "Everything" },
  { value: "info", label: "Info" },
  { value: "warn", label: "Warnings" },
  { value: "error", label: "Errors" }
];
function on() {
  const e = P(), [n, t] = b("all"), [r, o] = b(""), [d, l] = b(!0), p = te(null), c = H(() => {
    const s = r.trim().toLowerCase();
    return e.logs.filter((f) => n !== "all" && f.level !== n ? !1 : s ? f.message.toLowerCase().includes(s) || f.scope.toLowerCase().includes(s) : !0);
  }, [e.logs, n, r]);
  I(() => {
    d && p.current?.scrollIntoView?.({ block: "end" });
  }, [c.length, d]);
  const x = e.tasks.filter((s) => s.status === "queued" || s.status === "downloading" || s.status === "extracting");
  return /* @__PURE__ */ i("div", { className: "gx-view", children: [
    /* @__PURE__ */ i("header", { className: "gx-view__head", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("h1", { children: [
          "Activity",
          /* @__PURE__ */ a("span", { className: "gx-count", children: c.length })
        ] }),
        /* @__PURE__ */ a("p", { children: "Live feed from the Gale bridge: downloads, installs, profile writes and errors." })
      ] }),
      /* @__PURE__ */ i("div", { className: "gx-view__tools", children: [
        /* @__PURE__ */ i("label", { className: "gx-inlinefield", children: [
          /* @__PURE__ */ a(J, { size: "sm", checked: d, onChange: l, label: "Follow output" }),
          /* @__PURE__ */ a("span", { children: "Follow" })
        ] }),
        /* @__PURE__ */ a(h, { size: "sm", icon: "refresh", onClick: () => void g.refreshLogs(), children: "Reload" })
      ] })
    ] }),
    x.length > 0 ? /* @__PURE__ */ a("div", { className: "gx-queuestrip", children: x.map((s) => /* @__PURE__ */ i("div", { className: "gx-queuestrip__item", children: [
      /* @__PURE__ */ i("div", { className: "gx-queuestrip__head", children: [
        /* @__PURE__ */ a("span", { className: "gx-spinner gx-spinner--xs" }),
        /* @__PURE__ */ a("strong", { children: s.current ?? s.step }),
        /* @__PURE__ */ i("span", { children: [
          s.completed,
          "/",
          s.total
        ] }),
        /* @__PURE__ */ a(h, { size: "sm", variant: "ghost", icon: "x", onClick: () => void g.cancelInstall(s.id), children: "Cancel" })
      ] }),
      /* @__PURE__ */ a(Le, { value: s.progress })
    ] }, s.id)) }) : null,
    /* @__PURE__ */ i("div", { className: "gx-filterbar", children: [
      /* @__PURE__ */ a("div", { className: "gx-filterbar__chips", children: rn.map((s) => /* @__PURE__ */ a(V, { active: n === s.value, onClick: () => t(s.value), children: s.label }, s.value)) }),
      /* @__PURE__ */ a(j, { value: r, onChange: o, placeholder: "Filter output…", icon: "search" })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-log", children: c.length === 0 ? /* @__PURE__ */ a(T, { icon: "terminal", title: "Nothing logged yet", body: "Install a mod or refresh a profile to see events here." }) : /* @__PURE__ */ i(E, { children: [
      c.map((s) => /* @__PURE__ */ i("div", { className: _("gx-log__row", `is-${s.level}`), children: [
        /* @__PURE__ */ a("span", { className: "gx-log__time", children: ka(s.at) }),
        /* @__PURE__ */ a(S, { tone: s.level === "error" ? "red" : s.level === "warn" ? "amber" : "neutral", children: s.level }),
        /* @__PURE__ */ a("span", { className: "gx-log__scope", children: s.scope }),
        /* @__PURE__ */ a("span", { className: "gx-log__message", children: s.message })
      ] }, s.id)),
      /* @__PURE__ */ a("div", { ref: p })
    ] }) }),
    /* @__PURE__ */ i("div", { className: "gx-log__foot", children: [
      /* @__PURE__ */ a(m, { name: "info", size: 13 }),
      /* @__PURE__ */ i("span", { children: [
        "Bridge log written to the daemon's data folder. Last event ",
        c.length > 0 ? O(c[c.length - 1]?.at) : "—",
        "."
      ] })
    ] })
  ] });
}
function ln() {
  const e = P(), [n, t] = b(Ze() || `http://127.0.0.1:${Z}`), { copied: r, copy: o } = ze();
  return /* @__PURE__ */ a("div", { className: "gx-offline", children: /* @__PURE__ */ i("div", { className: "gx-offline__card", children: [
    /* @__PURE__ */ a("div", { className: "gx-offline__badge", children: /* @__PURE__ */ a(m, { name: "power", size: 22 }) }),
    /* @__PURE__ */ a("h1", { children: "The Gale bridge is not running" }),
    /* @__PURE__ */ a("p", { children: "GaleX keeps all mod management in a small local daemon built on Gale's core. Start it once and the interface connects automatically." }),
    /* @__PURE__ */ i("div", { className: "gx-offline__steps", children: [
      /* @__PURE__ */ i("div", { className: "gx-offline__step", children: [
        /* @__PURE__ */ a("span", { className: "gx-offline__num", children: "1" }),
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ a("strong", { children: "Start the daemon" }),
          /* @__PURE__ */ a("pre", { children: /* @__PURE__ */ a("code", { children: "galexd" }) }),
          /* @__PURE__ */ a("small", { children: "Runs as a user service on Linux, or via the tray launcher on Windows." })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "gx-offline__step", children: [
        /* @__PURE__ */ a("span", { className: "gx-offline__num", children: "2" }),
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ a("strong", { children: "Keep it on loopback" }),
          /* @__PURE__ */ a("pre", { children: /* @__PURE__ */ i("code", { children: [
            "galexd --port ",
            Z
          ] }) }),
          /* @__PURE__ */ a("small", { children: "The interface talks to 127.0.0.1 only — nothing is exposed to the network." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-offline__actions", children: [
      /* @__PURE__ */ a(h, { icon: "refresh", variant: "primary", onClick: () => void g.reconnect(), children: "Try again" }),
      /* @__PURE__ */ a(h, { icon: r ? "check" : "copy", onClick: () => void o(`galexd --port ${Z}`), children: r ? "Copied" : "Copy command" })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-offline__manual", children: [
      /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ a("span", { children: "Custom daemon address" }),
        /* @__PURE__ */ i("div", { className: "gx-inlinefield", children: [
          /* @__PURE__ */ a(j, { value: n, onChange: t, placeholder: `http://127.0.0.1:${Z}` }),
          /* @__PURE__ */ a(
            h,
            {
              onClick: () => {
                He(n.trim() || null), g.reconnect();
              },
              children: "Use"
            }
          )
        ] })
      ] }),
      e.connectionError ? /* @__PURE__ */ a("p", { className: "gx-offline__error", children: e.connectionError }) : null
    ] }),
    /* @__PURE__ */ i("footer", { className: "gx-offline__foot", children: [
      /* @__PURE__ */ a(m, { name: "info", size: 13 }),
      /* @__PURE__ */ i("span", { children: [
        "Installed with ",
        /* @__PURE__ */ a("code", { children: "scripts/install.sh" }),
        "? The daemon is registered as a systemd user unit and starts with your session."
      ] })
    ] })
  ] }) });
}
function sn() {
  const e = P(), n = re(e), [t, r] = b(!1), [o, d] = b(!1), [l, p] = b(void 0), [c, x] = b(void 0), [s, f] = b(void 0);
  return n ? n.managed ? /* @__PURE__ */ i("div", { className: "gx-view", children: [
    /* @__PURE__ */ i("header", { className: "gx-view__head", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("h1", { children: [
          "Profiles",
          /* @__PURE__ */ a("span", { className: "gx-count", children: e.profiles.length })
        ] }),
        /* @__PURE__ */ i("p", { children: [
          "Separate mod setups for ",
          n.name,
          ". The active profile is what “Launch” starts."
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "gx-view__tools", children: [
        /* @__PURE__ */ a(h, { icon: "download", onClick: () => d(!0), children: "Import code" }),
        /* @__PURE__ */ a(h, { variant: "primary", icon: "plus", onClick: () => r(!0), children: "New profile" })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-profilegrid", children: [
      e.modsLoading && e.profiles.length === 0 ? /* @__PURE__ */ a(M, { height: 170, radius: 14 }) : null,
      e.profiles.map((v) => /* @__PURE__ */ i("div", { className: _("gx-profilecard", v.active && "is-active"), children: [
        /* @__PURE__ */ i("div", { className: "gx-profilecard__top", children: [
          /* @__PURE__ */ a(Q, { name: v.name, size: 38, rounded: 10 }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ a("strong", { children: v.name }),
            /* @__PURE__ */ i("span", { className: "gx-muted", children: [
              v.modCount,
              " mods · ",
              v.enabledCount,
              " enabled"
            ] })
          ] }),
          v.active ? /* @__PURE__ */ a(S, { tone: "green", children: "active" }) : null,
          v.updateCount > 0 ? /* @__PURE__ */ i(S, { tone: "amber", children: [
            v.updateCount,
            " updates"
          ] }) : null
        ] }),
        /* @__PURE__ */ a("div", { className: "gx-profilecard__meter", children: /* @__PURE__ */ a(
          "div",
          {
            className: "gx-profilecard__meter-fill",
            style: { width: `${v.modCount ? v.enabledCount / v.modCount * 100 : 0}%` }
          }
        ) }),
        /* @__PURE__ */ i("div", { className: "gx-profilecard__meta", children: [
          /* @__PURE__ */ i("span", { title: v.path, children: [
            /* @__PURE__ */ a(m, { name: "folder", size: 12 }),
            " ",
            xn(v.path)
          ] }),
          v.createdAt ? /* @__PURE__ */ a("span", { children: O(v.createdAt) }) : null
        ] }),
        /* @__PURE__ */ i("div", { className: "gx-profilecard__actions", children: [
          v.active ? /* @__PURE__ */ a(h, { size: "sm", variant: "secondary", icon: "folder", onClick: () => void g.selectProfile(v.id), children: "Open" }) : /* @__PURE__ */ a(
            h,
            {
              size: "sm",
              variant: "primary",
              icon: "check",
              onClick: () => void g.activateProfile(v.id),
              children: "Activate"
            }
          ),
          /* @__PURE__ */ a(
            h,
            {
              size: "sm",
              icon: "download",
              loading: !!e.busy.export,
              onClick: () => void g.exportProfile(v.id).then((L) => {
                L && f({ name: v.name, code: L });
              }),
              children: "Export"
            }
          ),
          /* @__PURE__ */ a(h, { size: "sm", icon: "copy", onClick: () => p(v), children: "Rename" }),
          /* @__PURE__ */ a(h, { size: "sm", icon: "plus", onClick: () => void g.createProfile(`${v.name} copy`, v.id), children: "Duplicate" }),
          /* @__PURE__ */ a(h, { size: "sm", variant: "danger", icon: "trash", onClick: () => x(v), children: "Delete" })
        ] })
      ] }, v.id))
    ] }),
    t ? /* @__PURE__ */ a(dn, { onClose: () => r(!1) }) : null,
    o ? /* @__PURE__ */ a(gn, { onClose: () => d(!1) }) : null,
    l ? /* @__PURE__ */ a(cn, { profile: l, onClose: () => p(void 0) }) : null,
    c ? /* @__PURE__ */ a(
      De,
      {
        title: `Delete “${c.name}”?`,
        body: "All mods inside this profile are deleted from disk. Exported codes stay valid.",
        confirmLabel: "Delete profile",
        danger: !0,
        onCancel: () => x(void 0),
        onConfirm: () => {
          g.deleteProfile(c.id), x(void 0);
        }
      }
    ) : null,
    s ? /* @__PURE__ */ a(pn, { name: s.name, code: s.code, onClose: () => f(void 0) }) : null
  ] }) : /* @__PURE__ */ a(
    T,
    {
      icon: "plus",
      title: `Set up ${n.name} first`,
      body: "Profiles live inside the game's Gale data folder.",
      action: /* @__PURE__ */ i(h, { variant: "primary", icon: "plus", onClick: () => void g.manageGame(n.slug), children: [
        "Add ",
        n.name
      ] })
    }
  ) : /* @__PURE__ */ a(T, { icon: "globe", title: "No game selected" });
}
function dn({ onClose: e }) {
  const n = P(), [t, r] = b(""), [o, d] = b(void 0);
  return /* @__PURE__ */ i(
    ge,
    {
      title: "New profile",
      onClose: e,
      footer: /* @__PURE__ */ i(E, { children: [
        /* @__PURE__ */ a(h, { onClick: e, children: "Cancel" }),
        /* @__PURE__ */ a(
          h,
          {
            variant: "primary",
            icon: "plus",
            disabled: !t.trim(),
            onClick: () => {
              g.createProfile(t.trim(), o), e();
            },
            children: "Create"
          }
        )
      ] }),
      children: [
        /* @__PURE__ */ i("label", { className: "gx-field", children: [
          /* @__PURE__ */ a("span", { children: "Profile name" }),
          /* @__PURE__ */ a(j, { value: t, onChange: r, placeholder: "e.g. Modded co-op", autoFocus: !0 })
        ] }),
        /* @__PURE__ */ i("label", { className: "gx-field", children: [
          /* @__PURE__ */ a("span", { children: "Start from" }),
          /* @__PURE__ */ i("div", { className: "gx-radio", children: [
            /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                className: _("gx-radio__item", o === void 0 && "is-active"),
                onClick: () => d(void 0),
                children: [
                  /* @__PURE__ */ a(m, { name: "sparkles", size: 15 }),
                  /* @__PURE__ */ i("div", { children: [
                    /* @__PURE__ */ a("strong", { children: "Empty profile" }),
                    /* @__PURE__ */ a("span", { children: "Start clean, nothing installed." })
                  ] })
                ]
              }
            ),
            n.profiles.map((l) => /* @__PURE__ */ i(
              "button",
              {
                type: "button",
                className: _("gx-radio__item", o === l.id && "is-active"),
                onClick: () => d(l.id),
                children: [
                  /* @__PURE__ */ a(m, { name: "copy", size: 15 }),
                  /* @__PURE__ */ i("div", { children: [
                    /* @__PURE__ */ i("strong", { children: [
                      "Copy of ",
                      l.name
                    ] }),
                    /* @__PURE__ */ i("span", { children: [
                      l.modCount,
                      " mods duplicated."
                    ] })
                  ] })
                ]
              },
              l.id
            ))
          ] })
        ] })
      ]
    }
  );
}
function cn({ profile: e, onClose: n }) {
  const [t, r] = b(e.name);
  return /* @__PURE__ */ i(
    ge,
    {
      title: "Rename profile",
      onClose: n,
      footer: /* @__PURE__ */ i(E, { children: [
        /* @__PURE__ */ a(h, { onClick: n, children: "Cancel" }),
        /* @__PURE__ */ a(
          h,
          {
            variant: "primary",
            disabled: !t.trim(),
            onClick: () => {
              g.renameProfile(e.id, t.trim()), n();
            },
            children: "Save"
          }
        )
      ] }),
      children: [
        /* @__PURE__ */ i("label", { className: "gx-field", children: [
          /* @__PURE__ */ a("span", { children: "Name" }),
          /* @__PURE__ */ a(j, { value: t, onChange: r, autoFocus: !0 })
        ] }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: "Renaming keeps the folder path, so nothing needs to be reinstalled." })
      ]
    }
  );
}
function gn({ onClose: e }) {
  const n = P(), [t, r] = b("");
  return /* @__PURE__ */ i(
    ge,
    {
      title: "Import a profile code",
      onClose: e,
      footer: /* @__PURE__ */ i(E, { children: [
        /* @__PURE__ */ a(h, { onClick: e, children: "Cancel" }),
        /* @__PURE__ */ a(
          h,
          {
            variant: "primary",
            icon: "download",
            loading: !!n.busy.import,
            disabled: !t.trim(),
            onClick: () => {
              g.importCode(t.trim()).then((o) => {
                o && e();
              });
            },
            children: "Import"
          }
        )
      ] }),
      children: [
        /* @__PURE__ */ i("label", { className: "gx-field", children: [
          /* @__PURE__ */ a("span", { children: "Profile code" }),
          /* @__PURE__ */ a(
            "textarea",
            {
              className: "gx-textarea",
              value: t,
              onChange: (o) => r(o.target.value),
              placeholder: "Paste a Gale, r2modman or Thunderstore profile code",
              rows: 5,
              autoFocus: !0
            }
          )
        ] }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: "Every package is downloaded from Thunderstore and installed into a new profile." })
      ]
    }
  );
}
function pn({ name: e, code: n, onClose: t }) {
  const { copied: r, copy: o } = ze();
  return /* @__PURE__ */ i(
    ge,
    {
      title: `Export “${e}”`,
      onClose: t,
      footer: /* @__PURE__ */ i(E, { children: [
        /* @__PURE__ */ a(h, { onClick: t, children: "Close" }),
        /* @__PURE__ */ a(h, { variant: "primary", icon: r ? "check" : "copy", onClick: () => void o(n), children: r ? "Copied" : "Copy code" })
      ] }),
      children: [
        /* @__PURE__ */ a("p", { className: "gx-muted", children: "Share this code to reproduce the exact mod list in Gale, r2modman or GaleX." }),
        /* @__PURE__ */ a("textarea", { className: "gx-textarea gx-monospace", value: n, readOnly: !0, rows: 6, onFocus: (d) => d.target.select() })
      ]
    }
  );
}
function xn(e) {
  const n = e.split(/[\\/]/).filter(Boolean);
  return n.length <= 3 ? e : `…/${n.slice(-2).join("/")}`;
}
const un = [
  "installed",
  "browse",
  "updates",
  "profiles",
  "config"
];
function fn() {
  const e = P(), n = re(e), t = X(e), [r, o] = b(Ze() || `http://127.0.0.1:${Z}`), [d, l] = b(t?.customArgs ?? ""), { copied: p, copy: c } = ze();
  return /* @__PURE__ */ i("div", { className: "gx-view gx-view--settings", children: [
    /* @__PURE__ */ a("header", { className: "gx-view__head", children: /* @__PURE__ */ i("div", { children: [
      /* @__PURE__ */ a("h1", { children: "Settings" }),
      /* @__PURE__ */ a("p", { children: "Bridge connection, launch behaviour and appearance of the in-Steam interface." })
    ] }) }),
    /* @__PURE__ */ i("div", { className: "gx-settings", children: [
      /* @__PURE__ */ i("section", { className: "gx-card", children: [
        /* @__PURE__ */ i("header", { className: "gx-card__head", children: [
          /* @__PURE__ */ a(m, { name: "globe", size: 16 }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ a("h2", { children: "Gale bridge" }),
            /* @__PURE__ */ a("p", { children: "The daemon that owns profiles, downloads and installs." })
          ] }),
          /* @__PURE__ */ a(S, { tone: e.connection === "online" ? "green" : e.connection === "offline" ? "red" : "neutral", children: e.connection })
        ] }),
        /* @__PURE__ */ a("div", { className: "gx-card__row", children: /* @__PURE__ */ i("label", { className: "gx-field", children: [
          /* @__PURE__ */ a("span", { children: "Daemon address" }),
          /* @__PURE__ */ i("div", { className: "gx-inlinefield", children: [
            /* @__PURE__ */ a(j, { value: r, onChange: o, placeholder: `http://127.0.0.1:${Z}` }),
            /* @__PURE__ */ a(
              h,
              {
                variant: "primary",
                onClick: () => {
                  He(r.trim() || null), g.reconnect();
                },
                children: "Connect"
              }
            )
          ] }),
          /* @__PURE__ */ a("small", { className: "gx-muted", children: "Inside Steam the UI runs in CEF, so the daemon must listen on loopback and allow CORS." })
        ] }) }),
        /* @__PURE__ */ i("div", { className: "gx-kv", children: [
          /* @__PURE__ */ a(U, { label: "Status", value: e.connection === "online" ? "connected" : e.connectionError ?? "connecting" }),
          /* @__PURE__ */ a(U, { label: "Bridge version", value: e.health?.version ?? "—" }),
          /* @__PURE__ */ a(U, { label: "Gale core", value: e.health?.core ?? "—" }),
          /* @__PURE__ */ a(U, { label: "Data folder", value: e.health?.dataDir ?? "—", mono: !0 }),
          /* @__PURE__ */ a(U, { label: "Steam detected", value: e.health?.steamDetected ? "yes" : "not found" }),
          /* @__PURE__ */ a(U, { label: "Uptime", value: e.health ? `${Math.round(e.health.uptimeSec / 60)} min` : "—" })
        ] }),
        /* @__PURE__ */ i("div", { className: "gx-card__actions", children: [
          /* @__PURE__ */ a(h, { icon: "refresh", onClick: () => void g.reconnect(), children: "Reconnect" }),
          /* @__PURE__ */ a(h, { icon: "trash", loading: !!e.busy.cache, onClick: () => void g.clearCache(), children: "Clear download cache" }),
          /* @__PURE__ */ a(
            h,
            {
              icon: p ? "check" : "copy",
              onClick: () => void c(`galexd --port ${Z}`),
              children: p ? "Copied" : "Copy start command"
            }
          )
        ] })
      ] }),
      n ? /* @__PURE__ */ i("section", { className: "gx-card", children: [
        /* @__PURE__ */ i("header", { className: "gx-card__head", children: [
          /* @__PURE__ */ a(m, { name: "package", size: 16 }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ a("h2", { children: n.name }),
            /* @__PURE__ */ a("p", { children: n.managed ? `${n.modLoader} · ${n.profileCount} profile(s)` : "Not managed by GaleX yet" })
          ] }),
          n.managed ? /* @__PURE__ */ a(S, { tone: "blue", children: n.slug }) : /* @__PURE__ */ a(h, { size: "sm", variant: "primary", icon: "plus", onClick: () => void g.manageGame(n.slug), children: "Add" })
        ] }),
        /* @__PURE__ */ i("div", { className: "gx-kv", children: [
          /* @__PURE__ */ a(U, { label: "Install folder", value: n.path ?? n.detectedPath ?? "not detected", mono: !0 }),
          /* @__PURE__ */ a(U, { label: "Mod loader", value: n.modLoader }),
          /* @__PURE__ */ a(U, { label: "Active profile", value: t?.name ?? "—" })
        ] }),
        /* @__PURE__ */ i("label", { className: "gx-field", children: [
          /* @__PURE__ */ a("span", { children: "Extra launch arguments" }),
          /* @__PURE__ */ a(
            "textarea",
            {
              className: "gx-textarea",
              rows: 2,
              value: d,
              onChange: (x) => l(x.target.value),
              placeholder: "-screen-width 1920 -screen-height 1080"
            }
          ),
          /* @__PURE__ */ a("small", { className: "gx-muted", children: "Passed after the mod loader arguments. Steam launch options are managed by Gale itself." })
        ] }),
        /* @__PURE__ */ i("div", { className: "gx-card__actions", children: [
          /* @__PURE__ */ a(
            h,
            {
              variant: "primary",
              disabled: !t || d === (t?.customArgs ?? ""),
              onClick: () => t && void g.setCustomArgs(t.id, d),
              children: "Save arguments"
            }
          ),
          /* @__PURE__ */ a(
            h,
            {
              icon: "star",
              onClick: () => void g.toggleFavorite(n.slug, !n.favorite),
              title: "Pin this game to the top of the switcher",
              children: n.favorite ? "Remove from favourites" : "Add to favourites"
            }
          )
        ] })
      ] }) : null,
      /* @__PURE__ */ i("section", { className: "gx-card", children: [
        /* @__PURE__ */ i("header", { className: "gx-card__head", children: [
          /* @__PURE__ */ a(m, { name: "grid", size: 16 }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ a("h2", { children: "Appearance" }),
            /* @__PURE__ */ a("p", { children: "Tune the density of lists and the default landing view." })
          ] })
        ] }),
        /* @__PURE__ */ i("div", { className: "gx-card__row", children: [
          /* @__PURE__ */ i("div", { className: "gx-settingrow", children: [
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ a("strong", { children: "Compact rows" }),
              /* @__PURE__ */ a("span", { className: "gx-muted", children: "Hide secondary metadata in the installed list." })
            ] }),
            /* @__PURE__ */ a(J, { checked: e.compact, onChange: g.setCompact, label: "Compact rows" })
          ] }),
          /* @__PURE__ */ i("div", { className: "gx-settingrow", children: [
            /* @__PURE__ */ i("div", { children: [
              /* @__PURE__ */ a("strong", { children: "Quick switch" }),
              /* @__PURE__ */ a("span", { className: "gx-muted", children: "Jump between the main views without leaving settings." })
            ] }),
            /* @__PURE__ */ a("div", { className: "gx-navchips", children: un.map((x) => /* @__PURE__ */ a(
              h,
              {
                size: "sm",
                variant: e.view === x ? "primary" : "secondary",
                onClick: () => g.setView(x),
                children: x
              },
              x
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i("section", { className: "gx-card gx-card--about", children: [
        /* @__PURE__ */ i("header", { className: "gx-card__head", children: [
          /* @__PURE__ */ a(m, { name: "sparkles", size: 16 }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ a("h2", { children: "About GaleX" }),
            /* @__PURE__ */ a("p", { children: "Thunderstore mod management, embedded in the Steam client." })
          ] }),
          /* @__PURE__ */ i(S, { tone: "neutral", children: [
            "v",
            da
          ] })
        ] }),
        /* @__PURE__ */ i("div", { className: "gx-kv", children: [
          /* @__PURE__ */ a(U, { label: "Interface", value: "Millennium plugin (React)" }),
          /* @__PURE__ */ a(U, { label: "Backend", value: "Gale core daemon (Rust)" }),
          /* @__PURE__ */ a(U, { label: "License", value: "GPL-3.0 — Gale © Kesomannen, Millennium © SteamClientHomebrew" })
        ] })
      ] })
    ] })
  ] });
}
function U({ label: e, value: n, mono: t }) {
  return /* @__PURE__ */ i("div", { className: "gx-kv__row", children: [
    /* @__PURE__ */ a("span", { children: e }),
    /* @__PURE__ */ a("strong", { className: t ? "gx-monospace" : void 0, title: n, children: n })
  ] });
}
function hn() {
  const e = P(), n = Ne(e.mods), t = e.mods.filter((c) => c.update && c.ignoredUpdate), [r, o] = b(void 0), [d, l] = b(!1), p = d ? t : n;
  return /* @__PURE__ */ i("div", { className: "gx-view", children: [
    /* @__PURE__ */ i("header", { className: "gx-view__head", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ i("h1", { children: [
          "Updates",
          n.length > 0 ? /* @__PURE__ */ a("span", { className: "gx-count", children: n.length }) : null
        ] }),
        /* @__PURE__ */ a("p", { children: n.length === 0 ? "Every installed package is on its latest version." : `${n.length} package${n.length === 1 ? "" : "s"} can be updated. Your profile is backed up before files are replaced.` })
      ] }),
      /* @__PURE__ */ i("div", { className: "gx-view__tools", children: [
        /* @__PURE__ */ i("label", { className: "gx-inlinefield", children: [
          /* @__PURE__ */ a(J, { size: "sm", checked: d, onChange: l, label: "Show ignored updates" }),
          /* @__PURE__ */ i("span", { children: [
            "Ignored (",
            t.length,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ a(
          h,
          {
            variant: "primary",
            icon: "arrow-up",
            disabled: n.length === 0,
            onClick: () => void g.updateMods(),
            children: "Update all"
          }
        )
      ] })
    ] }),
    e.modsLoading ? /* @__PURE__ */ i("div", { className: "gx-modlist", children: [
      /* @__PURE__ */ a(M, { height: 72, radius: 12 }),
      /* @__PURE__ */ a(M, { height: 72, radius: 12 })
    ] }) : p.length === 0 ? /* @__PURE__ */ a(
      T,
      {
        icon: d ? "pin" : "check",
        title: d ? "No ignored updates" : "Everything is up to date",
        body: d ? "Updates you pin are listed here so you can bring them back later." : "New releases appear here as soon as Thunderstore publishes them.",
        action: d ? /* @__PURE__ */ a(h, { onClick: () => l(!1), children: "Back to available updates" }) : /* @__PURE__ */ a(h, { icon: "refresh", onClick: () => void g.refreshMods(), children: "Check again" })
      }
    ) : /* @__PURE__ */ a("div", { className: "gx-updatelist", children: p.map((c) => /* @__PURE__ */ a(
      mn,
      {
        mod: c,
        expanded: r === c.uuid,
        onToggleExpand: () => o(r === c.uuid ? void 0 : c.uuid)
      },
      c.uuid
    )) })
  ] });
}
function mn({ mod: e, expanded: n, onToggleExpand: t }) {
  const r = e.update;
  return r ? /* @__PURE__ */ i("div", { className: _("gx-updatecard", n && "is-open"), children: [
    /* @__PURE__ */ i("div", { className: "gx-updatecard__head", children: [
      /* @__PURE__ */ a(Q, { name: e.name, src: e.iconUrl, size: 40, rounded: 10 }),
      /* @__PURE__ */ i("div", { className: "gx-updatecard__main", children: [
        /* @__PURE__ */ i("div", { className: "gx-updatecard__title", children: [
          /* @__PURE__ */ a("strong", { children: e.name }),
          /* @__PURE__ */ a("span", { className: "gx-versionchip", children: e.version }),
          /* @__PURE__ */ a(m, { name: "arrow-right", size: 13 }),
          /* @__PURE__ */ a("span", { className: "gx-versionchip is-new", children: r.version }),
          e.ignoredUpdate ? /* @__PURE__ */ a(S, { tone: "amber", children: "pinned" }) : null
        ] }),
        /* @__PURE__ */ i("span", { className: "gx-muted", children: [
          e.author,
          " · released ",
          O(r.publishedAt ?? (/* @__PURE__ */ new Date()).toISOString())
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "gx-updatecard__actions", children: [
        /* @__PURE__ */ a(h, { size: "sm", onClick: t, icon: n ? "chevron-down" : "chevron-right", children: "Changelog" }),
        /* @__PURE__ */ a(h, { size: "sm", icon: e.ignoredUpdate ? "sparkles" : "pin", onClick: () => void g.ignoreUpdate(e, !e.ignoredUpdate), children: e.ignoredUpdate ? "Unpin" : "Ignore" }),
        /* @__PURE__ */ a(h, { size: "sm", variant: "primary", icon: "arrow-up", onClick: () => void g.changeVersion(e, r.versionId), children: "Update" })
      ] })
    ] }),
    n ? /* @__PURE__ */ i("div", { className: "gx-updatecard__body", children: [
      r.changelog ? /* @__PURE__ */ a(ke, { source: r.changelog }) : /* @__PURE__ */ a("p", { className: "gx-muted", children: "The author did not publish a changelog for this version." }),
      /* @__PURE__ */ a("div", { className: "gx-updatecard__foot", children: /* @__PURE__ */ a("span", { className: "gx-monospace", children: r.versionId }) })
    ] }) : null
  ] }) : null;
}
function bn() {
  const { view: e } = P();
  switch (e) {
    case "browse":
      return /* @__PURE__ */ a(Ka, {});
    case "updates":
      return /* @__PURE__ */ a(hn, {});
    case "profiles":
      return /* @__PURE__ */ a(sn, {});
    case "config":
      return /* @__PURE__ */ a(Ya, {});
    case "logs":
      return /* @__PURE__ */ a(on, {});
    case "settings":
      return /* @__PURE__ */ a(fn, {});
    default:
      return /* @__PURE__ */ a(nn, {});
  }
}
function vn() {
  return /* @__PURE__ */ i("div", { className: "gx-splash", children: [
    /* @__PURE__ */ i("div", { className: "gx-splash__mark", children: [
      /* @__PURE__ */ a("span", {}),
      /* @__PURE__ */ a("span", {})
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-splash__text", children: [
      /* @__PURE__ */ a("h1", { children: "GaleX" }),
      /* @__PURE__ */ a("p", { children: "Connecting to the Gale bridge…" })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-splash__bars", children: [
      /* @__PURE__ */ a(M, { height: 10, width: 180, radius: 6 }),
      /* @__PURE__ */ a(M, { height: 10, width: 120, radius: 6 })
    ] })
  ] });
}
function _n() {
  const e = P();
  return I(() => (g.bootstrap(), () => g.stopAll()), []), I(() => {
    const n = (t) => {
      const r = t.ctrlKey || t.metaKey;
      r && t.key.toLowerCase() === "k" && (t.preventDefault(), g.togglePalette()), r && t.key.toLowerCase() === "r" && t.shiftKey && (t.preventDefault(), g.refreshAll());
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, []), e.connection === "booting" ? /* @__PURE__ */ a("div", { className: "gx-app gx-app--splash", children: /* @__PURE__ */ a(vn, {}) }) : e.connection === "offline" ? /* @__PURE__ */ i("div", { className: "gx-app gx-app--offline", children: [
    /* @__PURE__ */ a(ln, {}),
    /* @__PURE__ */ a(je, {})
  ] }) : /* @__PURE__ */ a(ea, { children: /* @__PURE__ */ i("div", { className: "gx-app", children: [
    /* @__PURE__ */ a("div", { className: "gx-glow gx-glow--one" }),
    /* @__PURE__ */ a("div", { className: "gx-glow gx-glow--two" }),
    /* @__PURE__ */ a(Ra, {}),
    /* @__PURE__ */ i("div", { className: "gx-main", children: [
      /* @__PURE__ */ a(qa, {}),
      /* @__PURE__ */ a("main", { className: "gx-content", children: /* @__PURE__ */ a(bn, {}) })
    ] }),
    /* @__PURE__ */ a(Ia, {}),
    /* @__PURE__ */ a(La, {}),
    /* @__PURE__ */ a(Pa, {}),
    /* @__PURE__ */ a(je, {})
  ] }) });
}
const wn = (e) => (e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "g";
function Fe() {
  const [e, n] = b(!1);
  return I(() => {
    const t = (r) => {
      wn(r) ? (r.preventDefault(), n((o) => !o)) : r.key === "Escape" && e && n(!1);
    };
    return window.addEventListener("keydown", t, !0), window.GaleX = {
      open: () => n(!0),
      close: () => n(!1),
      toggle: () => n((r) => !r)
    }, () => {
      window.removeEventListener("keydown", t, !0);
    };
  }, [e]), /* @__PURE__ */ i(E, { children: [
    e ? null : /* @__PURE__ */ i("button", { type: "button", className: "gx-launcher", onClick: () => n(!0), title: "GaleX mod manager (Ctrl+Shift+G)", children: [
      /* @__PURE__ */ i("span", { className: "gx-launcher__glyph", children: [
        /* @__PURE__ */ a("span", {}),
        /* @__PURE__ */ a("span", {})
      ] }),
      /* @__PURE__ */ a("span", { className: "gx-launcher__label", children: "Mods" })
    ] }),
    e ? /* @__PURE__ */ a("div", { className: "gx-plugin-window", role: "dialog", "aria-modal": "true", "aria-label": "GaleX mod manager", children: /* @__PURE__ */ i("div", { className: "gx-plugin-shell", children: [
      /* @__PURE__ */ a(ea, { children: /* @__PURE__ */ a(_n, {}) }),
      /* @__PURE__ */ a("button", { type: "button", className: "gx-plugin-close", onClick: () => n(!1), title: "Close (Esc)", children: /* @__PURE__ */ a(m, { name: "x", size: 15 }) })
    ] }) }) : null
  ] });
}
function yn() {
  if (document.getElementById("galex-steam-root")) return;
  const e = document.createElement("div");
  e.id = "galex-steam-root", document.body.appendChild(e), Be(e).render(/* @__PURE__ */ a(Fe, {})), window.Millennium?.AddWindowCreateHook?.(() => {
    if (!document.getElementById("galex-steam-root")) {
      const n = document.createElement("div");
      n.id = "galex-steam-root", document.body.appendChild(n), Be(n).render(/* @__PURE__ */ a(Fe, {}));
    }
  });
}
const kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  mountIntoSteam: yn
}, Symbol.toStringTag, { value: "Module" }));
