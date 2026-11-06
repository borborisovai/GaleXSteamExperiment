const ye = window.SP_REACT, Xe = window.SP_JSX_FACTORY;
function Ge(e, t, n) {
  const { children: l, ...c } = t ?? {};
  return n !== void 0 && (c.key = n), l === void 0 ? ye.createElement(e, c) : Array.isArray(l) ? ye.createElement(e, c, ...l) : ye.createElement(e, c, l);
}
const ne = typeof Xe?.jsx == "function" ? Xe : void 0, F = ne?.Fragment ?? ye.Fragment, a = ne ? ne.jsx : Ge, r = ne?.jsxs ?? Ge;
ne && ne.jsx;
const it = '.galex{--gx-bg:var(--gpBackground-Dark-Medium,#1b2838);--gx-panel:var(--gpBackground-Medium,#233447);--gx-control:var(--gpBackground-Neutral-Light,#313d4e);--gx-border:var(--gpBackground-Neutral-Light,#35465b);--gx-text:var(--gpColor-White,#e5eaf0);--gx-muted:var(--gpColor-Neutral,#96a5b6);--gx-accent:var(--gpColor-Blue,#66c0f4);--gx-blue:var(--gpColor-Blue,#1a9fff);--gx-green:var(--gpColor-Green,#5ba32b);--gx-danger:var(--gpColor-Red,#d94b4b);color:var(--gx-text);font-family:Motiva Sans,Arial,Helvetica,sans-serif;font-size:13px;line-height:1.45;box-sizing:border-box;container-type:inline-size}.galex *,.galex *:before,.galex *:after{box-sizing:border-box}.galex h1,.galex h2,.galex h3,.galex p{margin:0}.galex button,.galex input,.galex select,.galex textarea{font:inherit}.galex button{cursor:pointer}.galex button:disabled{cursor:default;opacity:.42}.galex button:focus-visible,.galex input:focus-visible,.galex select:focus-visible,.galex textarea:focus-visible{outline:2px solid var(--gx-accent);outline-offset:3px}.galex svg{flex-shrink:0;vertical-align:middle}.galex button{color:inherit}.gx-toolbar-spacer{flex:1}.gx-muted{color:var(--gx-muted);font-size:12px;line-height:1.6}.gx-text-danger{color:#ff9993!important}.gx-dot{margin:0 7px;color:var(--gx-muted)}.gx-button{display:inline-flex!important;align-items:center;justify-content:center;gap:7px;min-height:34px;padding:7px 14px!important;border:1px solid color-mix(in srgb,var(--gx-border) 80%,transparent)!important;border-radius:3px!important;background:var(--gx-control)!important;color:var(--gx-text)!important;box-shadow:0 1px 2px #0002!important;font-size:12px!important;font-weight:500;line-height:1.4;white-space:nowrap;transition:filter .15s,background .15s}.gx-button:hover:not(:disabled){filter:brightness(1.22)}.gx-button--primary{background:linear-gradient(110deg,#1387b8,var(--gx-blue))!important;border-color:transparent!important;color:#fff!important;box-shadow:0 2px 8px #0078bd20!important}.gx-button.gx-danger{background:var(--gx-danger)!important;color:#fff!important}.gx-icon-button{border:0;background:transparent;display:inline-flex;align-items:center;justify-content:center;width:31px;height:31px;border-radius:3px;color:var(--gx-muted)!important;flex-shrink:0}.gx-icon-button:hover:not(:disabled){background:var(--gx-control);color:var(--gx-text)!important}.gx-mods{padding:25px 28px 0;min-width:0;display:flex;flex-direction:column;height:100%;overflow:hidden}.gx-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:22px}.gx-eyebrow{display:block;color:var(--gx-muted);font-size:9px;font-weight:600;letter-spacing:1.8px;margin-bottom:7px}.gx-heading h1{font-size:27px;font-weight:500;letter-spacing:-.4px;line-height:1.2}.gx-heading h1>span{font-size:12px;font-weight:400;color:var(--gx-muted);letter-spacing:0;margin-left:9px}.gx-heading-meta{font-size:10px;color:var(--gx-muted);white-space:nowrap;display:flex;gap:6px;align-items:center}.gx-status-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#79b74c;box-shadow:0 0 7px #79b74c25;flex-shrink:0}.gx-toolbar{display:flex;gap:9px;align-items:center;padding-bottom:19px;border-bottom:1px solid var(--gx-border)}.gx-toolbar .gx-button:nth-child(2){background:transparent!important}.gx-toolbar .gx-button:nth-child(2)>svg:last-child{margin-left:4px}.gx-advanced{background:color-mix(in srgb,var(--gx-bg) 80%,transparent);border:1px solid var(--gx-border);border-top:0;padding:13px 14px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;border-radius:0 0 3px 3px}.gx-profile-line{display:flex;align-items:center;gap:8px;min-width:230px;flex:1}.gx-field-label{font-size:11px;color:var(--gx-muted)}.gx-profile-select{flex:1;max-width:250px;min-width:130px}.gx-profile-actions{display:flex;gap:6px}.gx-profile-actions .gx-button{font-size:11px!important;padding:6px 10px!important;min-height:31px}.gx-search-row{display:flex;align-items:center;gap:9px;margin-top:18px}.gx-search{display:flex;align-items:center;gap:9px;min-width:120px;flex:1;background:color-mix(in srgb,var(--gx-bg) 75%,#000 15%);border:1px solid var(--gx-border);border-radius:3px;padding:0 11px;height:35px;color:var(--gx-muted)}.gx-search:focus-within{border-color:var(--gx-accent);box-shadow:0 0 0 1px color-mix(in srgb,var(--gx-accent) 20%,transparent)}.gx-search input{width:100%;min-width:0;color:var(--gx-text);background:transparent;border:0;outline:none!important;font-size:12px}.gx-search input::placeholder{color:var(--gx-muted);opacity:.8}.gx-search button{background:none;border:0;padding:2px;color:var(--gx-muted)}.galex select{height:35px;border:1px solid var(--gx-border);border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:0 29px 0 10px;font-size:11px;max-width:180px;min-width:115px}.gx-native-select{min-width:125px}.gx-native-select>div{font-size:12px!important}.gx-categories{display:flex;gap:6px;flex-wrap:wrap;margin-top:11px}.gx-categories button{background:transparent;color:var(--gx-muted);border:1px solid transparent;padding:3px 8px;border-radius:3px;font-size:10px}.gx-categories button:hover{color:var(--gx-text);background:var(--gx-control)}.gx-categories button.is-active{background:color-mix(in srgb,var(--gx-accent) 12%,transparent);color:var(--gx-accent);border-color:color-mix(in srgb,var(--gx-accent) 24%,transparent)}.gx-list-heading{display:flex;align-items:center;gap:8px;min-height:43px;color:var(--gx-muted);font-size:10px;letter-spacing:.1px}.gx-list-hint{font-size:10px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-update-link{display:flex;gap:5px;align-items:center;color:var(--gx-accent);border:0;background:none;font-size:10px;padding:3px 5px}.gx-update-link:hover{text-decoration:underline}.gx-mod-list{flex:1;min-height:100px;overflow-y:auto;overscroll-behavior:contain;border-top:1px solid var(--gx-border);scrollbar-width:thin;scrollbar-color:var(--gx-control) transparent;padding-right:3px}.gx-mod-row{display:flex;align-items:center;gap:13px;padding:13px 6px 13px 3px;border-bottom:1px solid color-mix(in srgb,var(--gx-border) 65%,transparent);min-height:87px;transition:background .15s}.gx-mod-row:hover{background:color-mix(in srgb,var(--gx-control) 32%,transparent)}.gx-mod-row.is-disabled .gx-mod-avatar{filter:saturate(.25);opacity:.62}.gx-mod-row.is-disabled .gx-mod-title h3{color:var(--gx-muted)}.gx-toggle{width:34px;flex-shrink:0;display:flex;align-items:center;justify-content:center}.gx-toggle input{appearance:none;width:31px;height:17px;background:#4b5664;border:1px solid #687383;border-radius:20px;margin:0;cursor:pointer;position:relative;transition:background .16s}.gx-toggle input:after{content:"";position:absolute;left:2px;top:2px;width:11px;height:11px;border-radius:50%;background:#d4dce5;transition:transform .16s}.gx-toggle input:checked{background:var(--gx-blue);border-color:var(--gx-blue)}.gx-toggle input:checked:after{transform:translate(13px);background:#fff}.gx-toggle input:disabled{opacity:.45;cursor:default}.gx-mod-avatar{height:49px;width:49px;flex-shrink:0;border-radius:3px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:700;letter-spacing:-1px;color:#e4edf3;background:linear-gradient(145deg,#526776,#243440);border:1px solid #ffffff10;text-shadow:0 2px 6px #0005}.gx-mod-avatar:before{content:"";position:absolute;width:45px;height:45px;border:1px solid #ffffff18;transform:rotate(35deg);left:18px;top:17px}.gx-mod-avatar span{position:absolute;left:0;bottom:0;width:100%;height:3px;background:#ffffff20}.gx-avatar-1{background:linear-gradient(140deg,#536957,#263c37)}.gx-avatar-2{background:linear-gradient(140deg,#986b3d,#47382e)}.gx-avatar-3{background:linear-gradient(140deg,#476c87,#253441)}.gx-avatar-4{background:linear-gradient(140deg,#6c526e,#352f43)}.gx-avatar-5{background:linear-gradient(140deg,#547579,#293d48)}.gx-mod-info{flex:1;min-width:0}.gx-mod-title{display:flex;align-items:center;gap:7px}.gx-mod-title h3{font-size:13px;font-weight:500;color:var(--gx-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-info>p{font-size:11px;color:var(--gx-muted);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gx-mod-byline{font-size:10px;color:color-mix(in srgb,var(--gx-muted) 78%,transparent);margin-top:4px;display:flex;gap:6px}.gx-update-badge,.gx-local-badge{font-size:8px;color:#a9d481;background:#6da74419;border:1px solid #6da74433;padding:1px 5px;border-radius:2px;white-space:nowrap}.gx-local-badge{color:var(--gx-accent);background:#66c0f411;border-color:#66c0f433}.gx-version{text-align:right;min-width:63px;display:flex;flex-direction:column;gap:5px;font-size:11px;color:#c3ccd7}.gx-version small{font-size:10px;color:var(--gx-muted)}.gx-mod-row>.gx-icon-button{width:26px}.gx-footer{display:flex;justify-content:space-between;align-items:center;gap:8px;min-height:40px;font-size:9px;color:var(--gx-muted);border-top:1px solid var(--gx-border);margin-top:1px}.gx-footer>span{display:flex;align-items:center;gap:6px}.gx-footer button{background:none;border:0;color:var(--gx-muted);font-size:9px;padding:5px 0}.gx-footer button:hover{color:var(--gx-accent)}.gx-empty{min-height:240px;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:13px;text-align:center;color:var(--gx-muted);padding:30px}.gx-empty h3{font-size:17px;color:var(--gx-text);font-weight:400}.gx-empty p{font-size:12px;max-width:340px}.gx-notice{display:flex;align-items:flex-start;gap:9px;background:#66c0f40b;border:1px solid #66c0f42e;color:#b6d7ec;border-radius:3px;padding:10px 12px;font-size:11px;margin:8px 0;line-height:1.6}.gx-notice>svg{margin-top:2px}.gx-notice span{flex:1;overflow-wrap:anywhere}.gx-notice--error{background:#e05d5d0d;border-color:#e05d5d44;color:#f4aaa5}.gx-notice button{border:0;background:none;color:inherit;text-decoration:underline;font-size:11px}.gx-success{color:#a4ce86;display:flex;gap:7px;align-items:center;font-size:11px;padding:8px 0}.gx-install-progress{position:relative;display:flex;align-items:center;gap:8px;padding:11px;background:#1a9fff0e;color:var(--gx-accent);font-size:11px;overflow:hidden}.gx-install-progress>span{position:absolute;bottom:0;left:-30%;height:2px;width:30%;background:var(--gx-accent);animation:gx-progress 1.8s ease-in-out infinite}@keyframes gx-progress{to{left:100%}}.gx-modal-backdrop{position:fixed;inset:0;z-index:10000;background:#080d16b8;backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:24px}.gx-modal{width:490px;max-width:100%;max-height:90vh;display:flex;flex-direction:column;background:var(--gx-bg)!important;border:1px solid var(--gx-border);border-radius:5px;box-shadow:0 24px 100px #0009;overflow:hidden}.gx-modal>header{display:flex;align-items:center;justify-content:space-between;padding:18px 22px;border-bottom:1px solid var(--gx-border)}.gx-modal h2{font-size:18px;font-weight:500}.gx-modal-body{padding:22px;overflow-y:auto}.gx-modal>footer{padding:15px 22px;display:flex;justify-content:flex-end;align-items:center;gap:9px;border-top:1px solid var(--gx-border);background:#0000000d}.gx-modal>footer>.gx-muted{margin-right:auto;max-width:220px;font-size:10px}.gx-confirm-copy{font-size:13px;color:var(--gx-muted);line-height:1.7}.gx-confirm-copy p{margin-top:10px}.gx-form-label{display:flex;flex-direction:column;gap:9px;font-size:12px;color:#b7c3d0}.gx-form-label input,.gx-form-label textarea{width:100%;background:#0e172344;border:1px solid var(--gx-border);border-radius:3px;color:var(--gx-text);padding:10px 12px;resize:vertical;min-height:37px}.gx-form-label input::placeholder,.gx-form-label textarea::placeholder{color:var(--gx-muted);opacity:.65}.gx-context-menu{position:fixed;z-index:10001;width:224px;padding:5px;background:var(--gx-bg)!important;border:1px solid var(--gx-border);border-radius:4px;box-shadow:0 8px 35px #0008}.gx-context-menu>button{display:flex;gap:9px;align-items:center;text-align:left;width:100%;border:0;background:none;padding:10px;font-size:12px;border-radius:2px}.gx-context-menu>button:hover:not(:disabled),.gx-context-menu>button:focus{background:var(--gx-control);outline:none}.gx-import-summary{padding:16px;background:var(--gx-control);margin:16px 0;display:flex;justify-content:space-between;gap:12px;font-size:12px}.gx-import-summary span{color:var(--gx-muted)}.gx-or{text-align:center;color:var(--gx-muted);font-size:11px;margin:15px}.gx-file-button{display:flex;align-items:center;justify-content:center;gap:8px;border:1px dashed var(--gx-border);border-radius:3px;padding:17px;cursor:pointer;color:var(--gx-accent);position:relative}.gx-file-button input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%}.gx-export-code{display:flex;align-items:center;gap:9px;padding:13px;background:#0002;border:1px solid var(--gx-border);margin:18px 0}.gx-export-code code{font-size:11px;overflow-wrap:anywhere;flex:1;user-select:all}.gx-version-list{display:flex;flex-direction:column;gap:8px;margin-top:20px}.gx-version-list .gx-button{justify-content:flex-start}.gx-config-file{font-weight:500;margin:8px 0 16px!important}.gx-crash{padding:40px;color:#e5eaf0}.gx-crash h2{font-size:20px}.gx-crash p{margin:14px 0;color:#96a5b6}.gx-crash pre{white-space:pre-wrap;font-size:11px;max-height:150px;overflow:auto}.gx-global-settings{padding:28px 32px;overflow-y:auto;height:100%;scrollbar-width:thin}.gx-version-label{font-size:11px;color:var(--gx-muted)}.gx-settings-intro{font-size:12px;color:var(--gx-muted);margin:-8px 0 26px!important}.gx-settings-section{border-top:1px solid var(--gx-border);padding:18px 0 10px;margin-top:10px}.gx-settings-section>h2{font-size:11px;color:var(--gx-accent);font-weight:500;letter-spacing:.6px;text-transform:uppercase;margin-bottom:8px}.gx-setting{display:flex;align-items:center;justify-content:space-between;gap:25px;padding:13px 0}.gx-setting strong{font-size:12px;font-weight:500;display:block}.gx-setting small{font-size:10px;color:var(--gx-muted);display:block;margin-top:4px}.gx-setting .gx-toggle{width:40px}.gx-connection{display:flex;align-items:center;gap:7px;color:#a3c887;font-size:11px;white-space:nowrap}.gx-path{display:block;padding:10px 12px;background:#0002;border:1px solid var(--gx-border);font-size:11px;color:var(--gx-muted);overflow-wrap:anywhere}.gx-settings-actions{display:flex;justify-content:flex-end;margin:12px 0}.gx-settings-bottom{border-top:1px solid var(--gx-border);padding-top:20px;display:flex;align-items:center;justify-content:space-between;gap:15px;color:var(--gx-muted);font-size:10px}.gx-global-settings .gx-form-label{margin-top:8px}html,body,#root{margin:0;min-height:100%;background:#101923}button{font-family:inherit}.gx-preview{min-height:100vh;background:#111b27;color:#dfe3e8;font-family:Motiva Sans,Arial,sans-serif;font-size:13px}.gx-steam-top{height:70px;display:flex;align-items:center;padding:0 4%;gap:48px;background:#171a21;border-bottom:1px solid #ffffff06}.gx-steam-wordmark{font-size:24px;font-weight:700;letter-spacing:2px;color:#c7d1dc;position:relative}.gx-steam-wordmark span{font-size:8px;letter-spacing:0;position:absolute;right:-9px;bottom:4px}.gx-steam-top nav{display:flex;gap:29px;height:100%;align-items:center}.gx-steam-top nav button{height:100%;border:0;background:none;color:#a4a8af;font-size:13px;position:relative;padding:0 2px}.gx-steam-top nav button.active{color:#f1f5fa}.gx-steam-top nav button.active:after{content:"";position:absolute;bottom:14px;left:0;right:0;height:2px;background:#1a9fff}.gx-demo-account{margin-left:auto;display:flex;gap:10px;align-items:center;color:#b7c3d0;font-size:12px}.gx-demo-account small{display:block;color:#57a7da;font-size:10px;margin-top:2px}.gx-account-avatar{width:32px;height:32px;display:grid;place-items:center;background:linear-gradient(135deg,#48677f,#293846);border:1px solid #579bc3;color:#d8edfa}.gx-preview-subbar{height:46px;display:flex;align-items:center;gap:20px;padding:0 4%;background:#172331;border-bottom:1px solid #ffffff05}.gx-library-label{display:flex;align-items:center;gap:12px;font-size:10px;letter-spacing:.8px;color:#8796a7}.gx-library-label>span{color:#4d6073}.gx-demo-badge{margin-left:auto;font-size:8px;letter-spacing:1px;color:#8ea5b8;display:flex;align-items:center;gap:6px}.gx-demo-badge>span{width:5px;height:5px;background:#70a2bb;border-radius:50%}.gx-preview-subbar>button{display:flex;align-items:center;gap:7px;border:1px solid #354457;background:#263447;color:#abbacb;font-size:10px;border-radius:3px;padding:6px 10px}.gx-preview-stage{position:relative;isolation:isolate;min-height:calc(100vh - 116px);padding:43px 5% 20px;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;background:radial-gradient(ellipse at 50% 15%,#31404b 0,#1a2733 42%,#101923 85%)}.gx-game-background{position:absolute;inset:0;z-index:-1;opacity:.4;overflow:hidden;background:linear-gradient(0deg,#111b27 2%,transparent 70%)}.gx-game-wordmark{position:absolute;top:15px;left:7%;font-size:60px;font-weight:800;letter-spacing:8px;color:#75818a16;white-space:nowrap}.gx-moon{position:absolute;right:11%;top:35px;width:150px;height:150px;background:radial-gradient(circle at 35% 35%,#b4b4a4,#667476 65%,#465663);border-radius:50%;box-shadow:0 0 80px #d6d8b71a;opacity:.4}.gx-building{position:absolute;right:0;bottom:0;width:39%;height:60%;background:#0d1722;clip-path:polygon(0 70%,10% 70%,10% 40%,23% 40%,23% 20%,30% 20%,30% 0,34% 0,34% 35%,58% 35%,58% 55%,76% 55%,76% 20%,85% 20%,85% 60%,100% 60%,100% 100%,0 100%)}.gx-stage-repo{background:radial-gradient(ellipse at 50% 15%,#3c4544,#202d32 42%,#111b27 85%)}.gx-properties{width:min(1180px,100%);height:710px;max-height:calc(100vh - 195px);min-height:570px;background:#1b2838;border:1px solid #53627366;border-radius:6px;box-shadow:0 24px 80px #02081280,0 1px #ffffff08 inset;display:flex;flex-direction:column;overflow:hidden}.gx-properties-title{height:39px;flex-shrink:0;display:flex;align-items:center;gap:9px;padding:0 15px;background:#2b3746;border-bottom:1px solid #ffffff06;color:#b9c4d0;font-size:11px}.gx-property-app-icon{color:#94a9bc;display:flex}.gx-window-controls{margin-left:auto;word-spacing:12px;font-size:14px;color:#8390a0}.gx-properties-layout{display:grid;grid-template-columns:190px minmax(0,1fr);flex:1;min-height:0}.gx-properties-nav{background:linear-gradient(160deg,#202e3e,#1a2635);border-right:1px solid #35425366;display:flex;flex-direction:column;padding:23px 11px 15px}.gx-property-game{padding:0 10px 22px;margin-bottom:10px;border-bottom:1px solid #35425366}.gx-property-cover{height:50px;width:100%;background:linear-gradient(120deg,#657064,#303e3d 60%,#1b2a32);border:1px solid #ffffff08;margin-bottom:11px;display:flex;align-items:center;padding-left:13px;font-size:24px;font-weight:800;letter-spacing:-2px;color:#c9cfb5}.gx-property-game strong{display:block;font-size:12px;font-weight:500;color:#d7dfe8}.gx-property-game small{font-size:10px;color:#7e91a3;display:block;margin-top:4px}.gx-properties-nav nav{display:flex;flex-direction:column;gap:4px}.gx-properties-nav nav button{border:0;background:none;color:#96a5b6;display:flex;align-items:center;gap:7px;padding:10px 11px;font-size:11px;text-align:left;border-radius:3px;white-space:nowrap}.gx-properties-nav nav button:hover{background:#ffffff06;color:#dfe3e8}.gx-properties-nav nav button.active{background:linear-gradient(90deg,#364b61,#2c3e52);color:#fff}.gx-tab-dot{width:5px;height:5px;border-radius:50%;background:#66c0f4;margin-left:auto}.gx-property-nav-bottom{margin-top:auto;display:flex;align-items:center;gap:7px;padding:10px;color:#688096;font-size:9px}.gx-properties-content{min-width:0;min-height:0;background:linear-gradient(140deg,#24344755,transparent 70%);overflow:hidden}.gx-properties-content .galex{--gx-bg:#202f40;--gx-panel:#28394c;--gx-control:#34465a;--gx-border:#3a4b5d;--gx-muted:#93a4b7;--gx-text:#e0e7ef}.gx-preview-caption{width:min(1180px,100%);display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:17px;font-size:10px;color:#6e8498}.gx-preview-caption>span:first-child{color:#91a5b7}.gx-preview-caption>span>span{margin:0 8px;color:#52697d}.gx-preview-game-select{display:flex;align-items:center;gap:8px}.gx-preview-game-select .galex select{height:28px}.gx-native-placeholder{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:17px;color:#7e94a9}.gx-native-placeholder h2{font-size:25px;color:#c4d1df;font-weight:400;margin:0}.gx-native-placeholder p{font-size:12px;margin:0}.gx-native-placeholder>button{display:flex;gap:9px;align-items:center;background:none;border:0;color:#66c0f4;font-size:12px;margin-top:10px}.gx-native-placeholder .gx-preview-game-select{margin-top:20px}.gx-preview .gx-modal{--gx-bg:#202f40;--gx-control:#34465a;--gx-border:#3a4b5d}@container (max-width:720px){.gx-mods{padding:20px 18px 0}.gx-heading h1>span{display:none}.gx-search-row{flex-wrap:wrap}.gx-search{flex-basis:100%}.gx-search-row>.gx-native-select,.gx-search-row>select{flex:1;max-width:none}.gx-mod-row{gap:10px}.gx-mod-info>p{max-width:260px}.gx-list-hint{display:none}.gx-advanced{align-items:stretch}.gx-profile-line{flex-basis:100%}.gx-profile-select{max-width:none}.gx-profile-actions{width:100%}.gx-profile-actions .gx-button{flex:1}.gx-categories{max-height:54px;overflow:auto}.gx-global-settings{padding:22px 20px}.gx-heading-meta{font-size:9px}.gx-toolbar .gx-button{font-size:11px!important;padding:7px 10px!important}.gx-setting{gap:15px}}@container (max-width:460px){.gx-heading{margin-bottom:16px}.gx-heading-meta{display:none}.gx-toolbar{gap:6px}.gx-toolbar>.gx-toolbar-spacer{display:none}.gx-toolbar>.gx-icon-button{display:none}.gx-toolbar .gx-button{font-size:10px!important;padding:7px 9px!important}.gx-toolbar .gx-button:nth-child(2)>svg:last-child{display:none}.gx-mod-avatar{width:38px;height:42px;font-size:14px}.gx-mod-row{gap:8px;padding:11px 0}.gx-mod-title h3{font-size:12px}.gx-mod-info>p{display:none}.gx-mod-byline{font-size:9px}.gx-version{min-width:47px;font-size:10px}.gx-version small{font-size:9px}.gx-update-badge{display:none}.gx-footer{font-size:8px}.gx-profile-actions .gx-button{padding:6px!important}.gx-settings-bottom{align-items:flex-start;flex-direction:column}}@media (min-width:1500px){.gx-properties{height:780px}.gx-preview-stage{padding-top:55px}.gx-properties-layout{grid-template-columns:205px minmax(0,1fr)}}@media (max-width:950px){.gx-preview-stage{padding:25px 3% 18px}.gx-properties-layout{grid-template-columns:155px minmax(0,1fr)}.gx-properties-nav{padding:18px 7px 12px}.gx-properties-nav nav button{font-size:10px;padding:10px 8px}.gx-property-game{padding:0 8px 18px}.gx-demo-badge{display:none}.gx-preview-subbar>button{margin-left:auto}.gx-preview-caption>span:last-child{display:none}.gx-steam-top{gap:30px}.gx-steam-top nav{gap:20px}}@media (max-width:650px){.gx-steam-top{height:55px;padding:0 5%;gap:25px}.gx-steam-wordmark{font-size:19px}.gx-steam-top nav{gap:17px}.gx-steam-top nav button{font-size:11px}.gx-steam-top nav button:nth-child(n+3){display:none}.gx-demo-account{font-size:10px}.gx-account-avatar{width:27px;height:27px}.gx-preview-subbar{padding:0 4%;height:42px}.gx-library-label{font-size:8px;gap:7px}.gx-preview-subbar>button{font-size:0;padding:6px}.gx-preview-subbar>button svg{width:15px}.gx-properties-layout{grid-template-columns:minmax(0,1fr)}.gx-properties-nav{display:none}.gx-properties{height:calc(100dvh - 160px);max-height:none;min-height:580px}.gx-preview-stage{padding:16px 3% 14px}.gx-properties-title{font-size:10px}.gx-preview-caption{font-size:8px;gap:10px}.gx-preview-caption .gx-preview-game-select select{max-width:120px;min-width:95px;font-size:9px}.gx-modal-backdrop{padding:14px}.gx-modal>header,.gx-modal-body,.gx-modal>footer{padding:17px}.gx-modal h2{font-size:16px}}@media (prefers-reduced-motion:reduce){.galex *,.galex *:before,.galex *:after{animation:none!important;transition:none!important}}[data-galex-properties=tab]{cursor:pointer;user-select:none}[data-galex-properties=tab].gx-tab-active{color:var(--gpColor-White,#fff);background:var(--gpBackground-Color-Soft,rgba(255,255,255,.08))}.gx-injected-panel{display:flex;flex-direction:column;flex:1 1 auto;min-width:0;min-height:0;overflow:hidden;container-type:inline-size;color:var(--gx-text,#dfe3e8)}.gx-injected-panel[hidden]{display:none!important}', He = "galex-styles";
function rt(e, t = document) {
  if (typeof t > "u") return;
  const n = t.getElementById(He);
  if (n) {
    n.textContent = e;
    return;
  }
  const l = t.createElement("style");
  l.id = He, l.textContent = e, t.head.appendChild(l);
}
async function Et() {
  document.body || await new Promise((e) => document.addEventListener("DOMContentLoaded", () => e(), { once: !0 })), rt(it);
  {
    const { mountIntoSteam: e } = await Promise.resolve().then(() => ia);
    return e();
  }
}
let we;
function Lt() {
  return we || (we = Et().catch((e) => {
    throw we = void 0, e;
  })), we;
}
Lt().catch((e) => console.error("[GaleX] Startup failed", e));
const k = window.SP_REACT;
k || console.error("[GaleX] window.SP_REACT is missing — is Millennium loaded?");
const J = k.createElement;
k.cloneElement;
k.createContext;
k.createRef;
k.forwardRef;
k.memo;
const It = k.useCallback;
k.useContext;
k.useDebugValue;
k.useDeferredValue;
const V = k.useEffect;
k.useId;
k.useImperativeHandle;
k.useLayoutEffect;
const lt = k.useMemo;
k.useReducer;
const pe = k.useRef, w = k.useState, Pt = k.useSyncExternalStore;
k.useTransition;
const $t = k.Component;
k.PureComponent;
k.Fragment;
k.StrictMode;
k.Suspense;
k.Children;
k.isValidElement;
k.version;
const te = window.SP_REACTDOM, st = (e) => typeof te?.createRoot == "function" ? te.createRoot(e) : {
  render(t) {
    te.render(t, e);
  },
  unmount() {
    te.unmountComponentAtNode?.(e);
  }
}, dt = te.createPortal;
te.flushSync;
const Ve = {
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
function _({ name: e, size: t = 18, className: n, strokeWidth: l = 1.6 }) {
  const c = lt(() => Ve[e] ?? Ve.info, [e]);
  return /* @__PURE__ */ a(
    "svg",
    {
      className: n,
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: l,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a("path", { d: c })
    }
  );
}
class Te extends $t {
  state = {};
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {
    console.error("[GaleX]", t, n.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ r("div", { className: "galex gx-crash", role: "alert", children: [
      /* @__PURE__ */ a("h2", { children: "Не удалось отобразить раздел" }),
      /* @__PURE__ */ a("p", { children: "Файлы модов не изменялись. Попробуйте открыть раздел ещё раз." }),
      /* @__PURE__ */ a("pre", { children: this.state.error.message }),
      /* @__PURE__ */ a("button", { className: "gx-button", onClick: () => this.setState({ error: void 0 }), children: "Повторить" })
    ] }) : this.props.children;
  }
}
function Gt(e) {
  let t = e;
  for (let n = 0; n < 2 && typeof t == "string"; n++)
    try {
      t = JSON.parse(t);
    } catch {
      throw new Error("Некорректный JSON-ответ GaleX от Millennium");
    }
  if (typeof t != "object" || t === null || Array.isArray(t) || typeof t.ok != "boolean")
    throw new Error("Некорректный ответ GaleX от Millennium");
  return t;
}
function W() {
  return window.MILLENNIUM_API;
}
let _e;
function Tt(e) {
  _e = e;
}
async function H(e, t = {}) {
  if (!_e) throw new Error("Backend Millennium не подключён. Перезагрузите плагин GaleX.");
  const n = await _e(e, t), l = Gt(n);
  if (!l.ok) throw new Error(l.error || "Мост Gale не ответил");
  return l.data;
}
function Dt() {
  Tt(async (e, t) => {
    const n = W();
    if (!n?.Millennium?.callServerMethod) throw new Error("Millennium API недоступен");
    return n.Millennium.callServerMethod("GaleX", e, { payload: JSON.stringify(t) });
  });
}
const v = {
  snapshot: () => H("snapshot"),
  call: (e, t, n = {}) => H("command", { method: e, args: { slug: t.slug, profileId: t.profileId, ...n } }),
  browserUrl: (e) => H("browser_url", { ...e }),
  dismissLink: (e) => H("dismiss_link", { url: e }),
  global: (e, t = {}) => H("command", { method: e, args: t }),
  getConfig: () => H("get_config"),
  setConfig: (e) => H("set_config", { path: e }),
  restart: () => H("restart"),
  log: (e) => H("frontend_log", { message: e })
};
function Y(e) {
  const t = new URL(e);
  if (!["https:", "http:"].includes(t.protocol)) throw new Error("Недопустимый адрес браузера");
  const n = W()?.Navigation;
  n?.NavigateToSteamWeb ? n.NavigateToSteamWeb(e) : window.open(e, "_blank", "noopener,noreferrer");
}
function G(e) {
  return e instanceof Error ? e.message : String(e);
}
function A({ children: e, icon: t, primary: n, className: l = "", ...c }) {
  const s = W()?.DialogButton, i = /* @__PURE__ */ r(F, { children: [
    t && /* @__PURE__ */ a(_, { name: t, size: 16 }),
    " ",
    e
  ] }), d = `gx-button ${n ? "gx-button--primary" : ""} ${l}`;
  return s ? /* @__PURE__ */ a(s, { ...c, className: d, children: i }) : /* @__PURE__ */ a("button", { ...c, className: d, children: i });
}
function Se({ icon: e, label: t, ...n }) {
  return /* @__PURE__ */ a("button", { type: "button", ...n, className: `gx-icon-button ${n.className ?? ""}`, "aria-label": t, title: t, children: /* @__PURE__ */ a(_, { name: e, size: 17 }) });
}
function ke({ value: e, onChange: t, options: n, label: l, disabled: c }) {
  const s = W()?.Dropdown;
  return s ? /* @__PURE__ */ a("div", { className: "gx-native-select", children: /* @__PURE__ */ a(s, { disabled: c, menuLabel: l, strDefaultLabel: l, rgOptions: n.map((i) => ({ data: i.value, label: i.label })), selectedOption: e, onChange: (i) => t(i.data) }) }) : /* @__PURE__ */ a("select", { "aria-label": l, value: e, disabled: c, onChange: (i) => t(typeof e == "number" ? Number(i.target.value) : i.target.value), children: n.map((i) => /* @__PURE__ */ a("option", { value: i.value, children: i.label }, i.value)) });
}
function Ne({ checked: e, onChange: t, label: n, disabled: l }) {
  const c = W()?.Toggle;
  return c ? /* @__PURE__ */ a("div", { className: "gx-toggle", role: "group", "aria-label": n, children: /* @__PURE__ */ a(c, { value: e, onChange: t, disabled: l }) }) : /* @__PURE__ */ r("label", { className: "gx-toggle", children: [
    /* @__PURE__ */ a("input", { type: "checkbox", role: "switch", "aria-label": n, checked: e, disabled: l, onChange: (s) => t(s.target.checked) }),
    /* @__PURE__ */ a("span", { "aria-hidden": "true" })
  ] });
}
function ae({ title: e, children: t, onClose: n, footer: l }) {
  const c = pe(null), s = pe(n);
  return s.current = n, V(() => {
    const i = document.activeElement, d = c.current, g = () => Array.from(d?.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]') ?? []);
    (d?.querySelector("input,select,textarea") ?? g()[0])?.focus();
    const u = (m) => {
      if (m.key === "Escape" && (m.stopPropagation(), s.current()), m.key === "Tab") {
        const p = g(), b = p[0], h = p[p.length - 1];
        m.shiftKey && document.activeElement === b ? (m.preventDefault(), h?.focus()) : !m.shiftKey && document.activeElement === h && (m.preventDefault(), b?.focus());
      }
    };
    return d?.addEventListener("keydown", u), () => {
      d?.removeEventListener("keydown", u), i?.focus();
    };
  }, []), dt(/* @__PURE__ */ a("div", { className: "galex gx-modal-backdrop", onMouseDown: (i) => {
    i.target === i.currentTarget && n();
  }, children: /* @__PURE__ */ r("div", { ref: c, className: "gx-modal DialogPopup_Generic", role: "dialog", "aria-modal": "true", "aria-label": e, children: [
    /* @__PURE__ */ r("header", { children: [
      /* @__PURE__ */ a("h2", { children: e }),
      /* @__PURE__ */ a(Se, { icon: "x", label: "Закрыть", onClick: n })
    ] }),
    /* @__PURE__ */ a("div", { className: "gx-modal-body", children: t }),
    l && /* @__PURE__ */ a("footer", { children: l })
  ] }) }), document.body);
}
function qe({ title: e, children: t, onClose: n, onConfirm: l, busy: c, danger: s }) {
  return /* @__PURE__ */ a(ae, { title: e, onClose: n, footer: /* @__PURE__ */ r(F, { children: [
    /* @__PURE__ */ a(A, { onClick: n, disabled: c, children: "Отмена" }),
    /* @__PURE__ */ a(A, { primary: !0, className: s ? "gx-danger" : "", onClick: l, disabled: c, children: c ? "Выполняется…" : "Подтвердить" })
  ] }), children: /* @__PURE__ */ a("div", { className: "gx-confirm-copy", children: t }) });
}
function We({ label: e, items: t }) {
  const [n, l] = w(null), c = pe(null), s = pe(null);
  return V(() => {
    if (!n) return;
    s.current?.querySelector("button:not(:disabled)")?.focus();
    const i = (g) => {
      !s.current?.contains(g.target) && !c.current?.contains(g.target) && l(null);
    }, d = (g) => {
      if (g.key === "Escape" && (l(null), c.current?.focus()), g.key === "ArrowDown" || g.key === "ArrowUp") {
        g.preventDefault();
        const u = Array.from(s.current?.querySelectorAll("button:not(:disabled)") ?? []), m = u.indexOf(document.activeElement);
        u[(m + (g.key === "ArrowDown" ? 1 : -1) + u.length) % u.length]?.focus();
      }
    };
    return document.addEventListener("mousedown", i), document.addEventListener("keydown", d), () => {
      document.removeEventListener("mousedown", i), document.removeEventListener("keydown", d);
    };
  }, [n]), /* @__PURE__ */ r(F, { children: [
    /* @__PURE__ */ a("button", { ref: c, type: "button", className: "gx-icon-button", "aria-label": e, title: e, "aria-haspopup": "menu", "aria-expanded": !!n, onClick: () => {
      if (n) {
        l(null);
        return;
      }
      const i = c.current.getBoundingClientRect();
      l({ top: i.bottom + 5, left: Math.max(8, Math.min(i.right - 224, window.innerWidth - 236)) });
    }, children: /* @__PURE__ */ a(_, { name: "grid", size: 16 }) }),
    n && dt(/* @__PURE__ */ a("div", { ref: s, role: "menu", "aria-label": e, className: "galex gx-context-menu", style: n, children: t.map((i) => /* @__PURE__ */ r("button", { role: "menuitem", disabled: i.disabled, className: i.danger ? "gx-text-danger" : "", onClick: () => {
      l(null), i.action();
    }, children: [
      i.icon && /* @__PURE__ */ a(_, { name: i.icon, size: 15 }),
      " ",
      i.label
    ] }, i.label)) }), document.body)
  ] });
}
function se({ children: e, error: t, onRetry: n }) {
  return /* @__PURE__ */ r("div", { className: `gx-notice ${t ? "gx-notice--error" : ""}`, role: t ? "alert" : "status", children: [
    /* @__PURE__ */ a(_, { name: t ? "warning" : "info", size: 17 }),
    /* @__PURE__ */ a("span", { children: e }),
    n && /* @__PURE__ */ a("button", { onClick: n, children: "Повторить" })
  ] });
}
function Rt(e) {
  return e >= 1073741824 ? `${(e / 1073741824).toFixed(1)} ГБ` : e >= 1048576 ? `${(e / 1048576).toFixed(1)} МБ` : `${Math.round(e / 1024)} КБ`;
}
function Bt({ demo: e = !1 }) {
  const [t, n] = w(), [l, c] = w(), [s, i] = w(""), [d, g] = w(""), [u, m] = w(""), [p, b] = w(!1), h = async () => {
    g("");
    try {
      const [f, y] = await Promise.all([v.snapshot(), v.global("prefs")]);
      c(f), n(y), e || i(await v.getConfig());
    } catch (f) {
      g(G(f));
    }
  };
  V(() => {
    h();
  }, []);
  const x = async (f) => {
    if (!(!t || p)) {
      b(!0), g(""), m("");
      try {
        const y = { ...t, ...f };
        await v.global("set_prefs", { value: y }), n(y), m("Сохранено в Gale");
      } catch (y) {
        g(G(y));
      } finally {
        b(!1);
      }
    }
  }, M = async () => {
    b(!0), g("");
    try {
      await v.setConfig(s.trim()), await v.restart(), m("Путь сохранён. Перезапуск запрошен."), setTimeout(() => void h(), 2500);
    } catch (f) {
      g(G(f));
    } finally {
      b(!1);
    }
  };
  return /* @__PURE__ */ r("section", { className: "galex gx-global-settings", children: [
    /* @__PURE__ */ r("div", { className: "gx-heading", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ a("span", { className: "gx-eyebrow", children: "НАСТРОЙКИ ПЛАГИНА" }),
        /* @__PURE__ */ a("h1", { children: "GaleX" })
      ] }),
      /* @__PURE__ */ a("span", { className: "gx-version-label", children: "Millennium × Gale" })
    ] }),
    /* @__PURE__ */ a("p", { className: "gx-settings-intro", children: "Моды в Steam. Профили, загрузки и конфигурации — в вашем установленном Gale." }),
    d && /* @__PURE__ */ a(se, { error: !0, onRetry: () => void h(), children: d }),
    u && /* @__PURE__ */ r("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ a(_, { name: "check", size: 15 }),
      u
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: "Подключение" }),
      /* @__PURE__ */ r("div", { className: "gx-setting", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ a("strong", { children: "Headless Gale" }),
          /* @__PURE__ */ a("small", { children: "Запускается и останавливается вместе с плагином" })
        ] }),
        /* @__PURE__ */ r("span", { className: "gx-connection", children: [
          /* @__PURE__ */ a("span", { className: "gx-status-dot" }),
          l ? `Gale ${l.coreVersion}` : "Нет подключения"
        ] })
      ] }),
      !e && /* @__PURE__ */ r(F, { children: [
        /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
          "Путь к headless-сборке Gale",
          /* @__PURE__ */ a("input", { value: s, onChange: (f) => i(f.target.value), placeholder: "Оставьте пустым для сборки внутри плагина" })
        ] }),
        /* @__PURE__ */ a("div", { className: "gx-settings-actions", children: /* @__PURE__ */ a(A, { onClick: () => void M(), disabled: p, children: "Сохранить и перезапустить" }) }),
        /* @__PURE__ */ a("p", { className: "gx-muted", children: "Обычная сборка Gale не содержит мост. Используйте сборку из этого репозитория; она работает с существующими данными Gale." })
      ] }),
      /* @__PURE__ */ a("div", { className: "gx-setting", children: /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ a("strong", { children: "Папка данных Gale" }),
        /* @__PURE__ */ a("small", { children: "Общая база данных и профили. Перенос файлов выполняется в Gale." })
      ] }) }),
      /* @__PURE__ */ a("code", { className: "gx-path", children: l?.dataDir ?? "—" }),
      /* @__PURE__ */ r("div", { className: "gx-setting", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ a("strong", { children: "Игры Gale" }),
          /* @__PURE__ */ a("small", { children: "Вкладка «Моды» появляется в свойствах игры с совпадающим Steam AppID." })
        ] }),
        /* @__PURE__ */ a("span", { className: "gx-connection", children: l?.games.length ?? 0 })
      ] }),
      !!l?.games.length && /* @__PURE__ */ a("code", { className: "gx-path", children: l.games.slice(0, 30).map((f) => `${f.name} (${f.steamAppId ?? "?"})`).join("; ") })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: "Поведение Gale" }),
      t ? /* @__PURE__ */ r(F, { children: [
        /* @__PURE__ */ r("div", { className: "gx-setting", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ a("strong", { children: "Загружать каталог автоматически" }),
            /* @__PURE__ */ a("small", { children: "Получать список модов при выборе игры" })
          ] }),
          /* @__PURE__ */ a(Ne, { label: "Загружать каталог автоматически", checked: t.fetchModsAutomatically, disabled: p, onChange: (f) => void x({ fetchModsAutomatically: f }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "gx-setting", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ a("strong", { children: "Обновлять синхронизированный профиль перед запуском" }),
            /* @__PURE__ */ a("small", { children: "Использовать настройку pull before launch из Gale" })
          ] }),
          /* @__PURE__ */ a(Ne, { label: "Обновлять профиль перед запуском", checked: t.pullBeforeLaunch, disabled: p, onChange: (f) => void x({ pullBeforeLaunch: f }) })
        ] }),
        /* @__PURE__ */ r("div", { className: "gx-setting", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ a("strong", { children: "Пропускать подтверждение смены источника" }),
            /* @__PURE__ */ a("small", { children: "Thunderstore / Hexium — общая настройка Gale" })
          ] }),
          /* @__PURE__ */ a(Ne, { label: "Пропускать подтверждение источника", checked: t.backendSkipConfirm, disabled: p, onChange: (f) => void x({ backendSkipConfirm: f }) })
        ] })
      ] }) : /* @__PURE__ */ a("p", { className: "gx-muted", children: "Настройки появятся после подключения к Gale." })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ a("h2", { children: "Загрузки" }),
      /* @__PURE__ */ r("div", { className: "gx-setting", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ a("strong", { children: "Кэш загрузок" }),
          /* @__PURE__ */ a("small", { children: "Удалить только неиспользуемые файлы. Установленные моды останутся." })
        ] }),
        /* @__PURE__ */ a(A, { disabled: p || !t || l?.installing, onClick: () => void (async () => {
          b(!0);
          try {
            const f = await v.global("clear_download_cache");
            m(`Освобождено ${Math.round(f / 1048576)} МБ`);
          } catch (f) {
            g(G(f));
          } finally {
            b(!1);
          }
        })(), children: "Очистить кэш" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-settings-bottom", children: [
      /* @__PURE__ */ a("span", { children: "Не запускайте настольный Gale одновременно с GaleX." }),
      /* @__PURE__ */ a(A, { icon: "refresh", disabled: p, onClick: () => void h(), children: "Проверить подключение" })
    ] })
  ] });
}
let De = { error: "", loading: !0 };
const ge = /* @__PURE__ */ new Set();
let ct, Q = !0, Ae = !1, de = 0;
function Qe(e) {
  De = e, ge.forEach((t) => t());
}
async function pt() {
  if (Q || Ae) return;
  Ae = !0;
  const e = de;
  try {
    const t = await v.snapshot();
    !Q && e === de && Qe({ snapshot: t, error: t.ok ? "" : "Мост несовместимой версии", loading: !1 });
  } catch (t) {
    !Q && e === de && Qe({ ...De, error: G(t), loading: !1 });
  } finally {
    Ae = !1, Q || (ct = setTimeout(() => void pt(), document.visibilityState === "hidden" ? 15e3 : 3e3));
  }
}
function Ut() {
  return Q ? (Q = !1, de++, pt(), () => Je()) : () => Je();
}
function Je() {
  Q = !0, de++, clearTimeout(ct);
}
function Ee() {
  return De;
}
function Ft() {
  return Pt((e) => (ge.add(e), () => ge.delete(e)), Ee, Ee);
}
function Ke(e, t) {
  return e?.games.find((n) => n.steamAppId === t);
}
function Ot(e) {
  return ge.add(e), () => {
    ge.delete(e);
  };
}
function jt() {
  const { snapshot: e } = Ft(), t = e?.pendingLinks[0], [n, l] = w(), [c, s] = w(), [i, d] = w(), [g, u] = w(""), [m, p] = w(!1);
  if (V(() => {
    if (!t) return;
    let h = !1;
    return l(void 0), u(""), s(void 0), (async () => {
      try {
        const [x, M] = await Promise.all([v.call("profiles", { slug: t.slug }), v.call("resolve_link", { slug: t.slug }, { url: t.url })]);
        h || (s(x), d(x.activeId), l(M));
      } catch (x) {
        h || u(G(x));
      }
    })(), () => {
      h = !0;
    };
  }, [t?.url, t?.slug]), !t) return null;
  const b = () => {
    m || v.dismissLink(t.url).catch((h) => u(G(h)));
  };
  return /* @__PURE__ */ r(ae, { title: "Установка из Thunderstore", onClose: b, footer: /* @__PURE__ */ r(F, { children: [
    /* @__PURE__ */ a(A, { disabled: m, onClick: b, children: "Отмена" }),
    /* @__PURE__ */ a(A, { primary: !0, disabled: m || !n || i === void 0, onClick: () => void (async () => {
      p(!0);
      try {
        await v.call("install_mod", { slug: t.slug, profileId: i }, { id: { packageUuid: n.uuid, versionUuid: n.versionUuid, backend: n.backend } }), await v.dismissLink(t.url);
      } catch (h) {
        u(G(h));
      } finally {
        p(!1);
      }
    })(), children: m ? "Добавление…" : "Установить мод" })
  ] }), children: [
    /* @__PURE__ */ a("span", { className: "gx-eyebrow", children: "ПЕРЕХВАЧЕНА ССЫЛКА ROR2MM" }),
    /* @__PURE__ */ a("h3", { className: "gx-config-file", children: n?.name ?? t.url.split("/").slice(-2, -1)[0] }),
    /* @__PURE__ */ a("p", { className: "gx-muted", children: n ? `${n.author} · версия ${n.version}` : "Проверяем пакет в каталоге Gale…" }),
    c && /* @__PURE__ */ r("div", { className: "gx-import-summary", children: [
      /* @__PURE__ */ a("span", { children: "Профиль установки" }),
      /* @__PURE__ */ a(ke, { label: "Профиль установки", value: i ?? c.activeId, options: c.profiles.map((h) => ({ value: h.id, label: h.name })), onChange: d })
    ] }),
    /* @__PURE__ */ r("p", { className: "gx-muted", children: [
      "Зависимости установит Gale. Игра: ",
      e?.games.find((h) => h.slug === t.slug)?.name ?? t.slug,
      "."
    ] }),
    g && /* @__PURE__ */ a(se, { error: !0, children: g })
  ] });
}
const Zt = { includeCategories: [], excludeCategories: [], includeNsfw: !1, includeDeprecated: !0, includeDisabled: !0, includeEnabled: !0, sortBy: "name", sortOrder: "ascending" }, Ye = { mods: [], totalModCount: 0, updates: [], unknownMods: [] };
function Xt({ game: e, demo: t = !1, installing: n = !1 }) {
  const [l, c] = w({ activeId: 0, profiles: [] }), [s, i] = w(), [d, g] = w(Ye), [u, m] = w(""), [p, b] = w(""), [h, x] = w("all"), [M, f] = w("name"), [y, O] = w(""), [oe, ft] = w(!1), [ze, xe] = w(!0), [Re, j] = w(""), [ue, T] = w(""), [C, Be] = w(""), [mt, ht] = w(0), [bt, vt] = w(0), [I, D] = w(null), [ie, K] = w(""), [fe, Me] = w(""), [R, re] = w(null), [Ue, wt] = w(""), [B, me] = w(null), [Z, yt] = w(null), he = pe(!0), E = { slug: e.slug, profileId: s }, X = l.profiles.find((o) => o.id === s), U = () => ht((o) => o + 1), kt = () => vt((o) => o + 1);
  V(() => (he.current = !0, () => {
    he.current = !1;
  }), []), V(() => {
    const o = setTimeout(() => b(u), 220);
    return () => clearTimeout(o);
  }, [u]), V(() => {
    let o = !1;
    return xe(!0), j(""), i(void 0), g(Ye), m(""), O(""), x("all"), v.call("profiles", { slug: e.slug }).then((N) => {
      o || (c(N), i(N.activeId));
    }).catch((N) => {
      o || (j(G(N)), xe(!1));
    }), () => {
      o = !0;
    };
  }, [e.slug, bt]), V(() => {
    if (s === void 0) return;
    let o = !1;
    xe(!0);
    const N = { ...Zt, searchTerm: p, includeEnabled: h !== "disabled", includeDisabled: h !== "enabled", includeCategories: y ? [y] : [], sortBy: M, sortOrder: M === "diskSpace" ? "descending" : "ascending" };
    return v.call("mods", { slug: e.slug, profileId: s }, { args: N }).then((z) => {
      o || (g(z), j(""));
    }).catch((z) => {
      o || j(G(z));
    }).finally(() => {
      o || xe(!1);
    }), () => {
      o = !0;
    };
  }, [e.slug, s, p, h, M, y, mt]), V(() => {
    if (!ue) return;
    const o = setTimeout(() => T(""), 4500);
    return () => clearTimeout(o);
  }, [ue]);
  const le = d.updates.filter((o) => !o.ignore), Fe = h === "updates" ? d.mods.filter((o) => le.some((N) => N.updatedId.packageUuid === o.data.uuid)) : d.mods, Oe = lt(() => Array.from(new Set(d.mods.flatMap((o) => o.data.categories ?? []))).sort(), [d.mods]), Nt = d.mods.filter((o) => o.enabled).length, S = It(async (o, N) => {
    if (!C) {
      Be(o), j("");
      try {
        await N();
      } catch (z) {
        he.current && j(G(z));
      } finally {
        he.current && Be("");
      }
    }
  }, [C]), be = async (o, N = {}) => {
    await v.call(o, E, N);
    const z = await v.call("profiles", { slug: e.slug }), P = o === "create_profile" || o === "import_profile" ? z.profiles.reduce((ve, Ze) => Ze.id > ve.id ? Ze : ve, z.profiles[0]) : void 0;
    P && await v.call("activate_profile", { slug: e.slug, profileId: P.id }), c(z), i(P?.id ?? z.activeId), D(null), K(""), re(null), U(), T("Профиль сохранён");
  }, Ct = (o) => void S(o.data.uuid, async () => {
    const N = await v.call("toggle_mod", E, { uuid: o.data.uuid });
    N.type === "confirm" ? me({ title: `Отключить ${o.data.name}?`, description: "От этого мода зависят другие включённые моды. Они тоже могут перестать работать.", uuids: [o.data.uuid, ...N.dependants.map((z) => z.uuid)], kind: "toggle", force: !0 }) : U();
  }), zt = () => {
    B && S("confirm", async () => {
      await v.call(B.kind === "toggle" ? "force_toggle_mods" : "force_remove_mods", E, { uuids: [...new Set(B.uuids)] }), me(null), U(), T(B.kind === "toggle" ? "Состояние модов изменено" : "Мод удалён");
    });
  }, je = (o) => void S("browser", async () => {
    const N = await v.browserUrl(E);
    Y(N.url);
  }), Mt = () => {
    t ? window.dispatchEvent(new CustomEvent("galex:demo-config")) : je();
  }, At = () => void S("import", async () => {
    if (R) {
      await be("import_profile", { data: R });
      return;
    }
    if (!fe.trim()) throw new Error("Вставьте код профиля или выберите файл .r2z");
    const o = await v.call("read_profile_code", E, { code: fe.trim() });
    re(o);
  }), _t = () => void S("export", async () => {
    const o = await v.call("export_code", E);
    if (o.type === "success" && o.code) {
      wt(o.code), D("export");
      return;
    }
    const N = await v.browserUrl({ ...E, kind: "export" });
    Y(N.url), T("Большой профиль экспортируется файлом .r2z");
  }), St = () => void S("update", async () => {
    await v.call("update_mods", E, { uuids: le.map((o) => o.updatedId.packageUuid) }), T(t ? "Демо: обновления установлены" : "Обновление добавлено в очередь Gale"), U();
  }), q = () => {
    C || (D(null), re(null), K(""), Me(""));
  };
  return /* @__PURE__ */ r("section", { className: "galex gx-mods", "aria-label": "Моды", "data-appid": e.steamAppId, children: [
    /* @__PURE__ */ r("div", { className: "gx-heading", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ a("span", { className: "gx-eyebrow", children: "МАСТЕРСКАЯ СООБЩЕСТВА" }),
        /* @__PURE__ */ r("h1", { children: [
          "Моды ",
          /* @__PURE__ */ a("span", { children: e.name })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "gx-heading-meta", children: [
        /* @__PURE__ */ a("span", { className: "gx-status-dot" }),
        " Gale ",
        t ? "· демо" : "подключён"
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-toolbar", children: [
      /* @__PURE__ */ a(A, { primary: !0, icon: "external", onClick: () => Y(`https://thunderstore.io/c/${encodeURIComponent(e.slug)}/`), children: "Открыть Thunderstore" }),
      /* @__PURE__ */ r(A, { icon: "settings", onClick: () => ft((o) => !o), "aria-expanded": oe, children: [
        "Расширенные настройки ",
        /* @__PURE__ */ a(_, { name: oe ? "chevron-down" : "chevron-right", size: 13 })
      ] }),
      /* @__PURE__ */ a("span", { className: "gx-toolbar-spacer" }),
      /* @__PURE__ */ a(Se, { icon: "refresh", label: "Обновить список", onClick: () => {
        kt(), U();
      }, disabled: !!C })
    ] }),
    oe && /* @__PURE__ */ r("div", { className: "gx-advanced", children: [
      /* @__PURE__ */ r("div", { className: "gx-profile-line", children: [
        /* @__PURE__ */ a("span", { className: "gx-field-label", children: "Профиль" }),
        /* @__PURE__ */ a("div", { className: "gx-profile-select", children: /* @__PURE__ */ a(ke, { label: "Профиль", value: s ?? 0, disabled: !!C || !l.profiles.length, options: l.profiles.map((o) => ({ value: o.id, label: o.name })), onChange: (o) => void S("profile", async () => {
          await v.call("activate_profile", { slug: e.slug, profileId: o }), i(o), U();
        }) }) }),
        /* @__PURE__ */ a(We, { label: "Управление профилями", items: [
          { label: "Создать профиль", icon: "plus", action: () => {
            K(""), D("create");
          } },
          { label: "Переименовать", icon: "sliders", disabled: !X, action: () => {
            K(X?.name ?? ""), D("rename");
          } },
          { label: "Дублировать", icon: "copy", disabled: !X, action: () => {
            K(`${X?.name} — копия`), D("duplicate");
          } },
          { label: "Удалить профиль", icon: "trash", danger: !0, disabled: l.profiles.length < 2, action: () => D("delete") }
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ a(A, { icon: "download", disabled: !X || !!C, onClick: () => {
          Me(""), re(null), D("import");
        }, children: "Импорт" }),
        /* @__PURE__ */ a(A, { icon: "external", disabled: !X || !!C, onClick: _t, children: "Экспорт" }),
        /* @__PURE__ */ a(A, { icon: "sliders", disabled: !X || !!C, onClick: Mt, children: "Конфиг" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-search-row", children: [
      /* @__PURE__ */ r("label", { className: "gx-search", children: [
        /* @__PURE__ */ a(_, { name: "search", size: 17 }),
        /* @__PURE__ */ a("input", { "aria-label": "Поиск модов", placeholder: "Поиск по названию или автору", value: u, onChange: (o) => m(o.target.value) }),
        u && /* @__PURE__ */ a("button", { "aria-label": "Очистить поиск", onClick: () => m(""), children: /* @__PURE__ */ a(_, { name: "x", size: 13 }) })
      ] }),
      /* @__PURE__ */ a(ke, { label: "Сортировка", value: M, onChange: f, options: [{ value: "name", label: "По названию" }, { value: "author", label: "По автору" }, { value: "installDate", label: "По дате установки" }, { value: "diskSpace", label: "По размеру" }] }),
      /* @__PURE__ */ a(ke, { label: "Фильтр модов", value: h, onChange: x, options: [{ value: "all", label: "Все моды" }, { value: "enabled", label: "Включённые" }, { value: "disabled", label: "Отключённые" }, { value: "updates", label: "Есть обновления" }] })
    ] }),
    Oe.length > 0 && /* @__PURE__ */ r("div", { className: "gx-categories", children: [
      /* @__PURE__ */ a("button", { className: y ? "" : "is-active", onClick: () => O(""), children: "Все категории" }),
      Oe.map((o) => /* @__PURE__ */ a("button", { className: y === o ? "is-active" : "", onClick: () => O(o), children: o }, o))
    ] }),
    /* @__PURE__ */ r("div", { className: "gx-list-heading", children: [
      /* @__PURE__ */ r("span", { children: [
        d.totalModCount,
        " модов ",
        /* @__PURE__ */ a("span", { className: "gx-dot", children: "·" }),
        " ",
        Nt,
        " включено"
      ] }),
      !!le.length && /* @__PURE__ */ r("button", { className: "gx-update-link", disabled: !!C || n, onClick: St, children: [
        /* @__PURE__ */ a(_, { name: "refresh", size: 13 }),
        C === "update" ? "Обновление…" : `Обновить все (${le.length})`
      ] }),
      /* @__PURE__ */ a("span", { className: "gx-toolbar-spacer" }),
      /* @__PURE__ */ r("span", { className: "gx-list-hint", children: [
        "Профиль: ",
        X?.name ?? "—"
      ] })
    ] }),
    Re && /* @__PURE__ */ a(se, { error: !0, onRetry: U, children: Re }),
    ue && /* @__PURE__ */ r("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ a(_, { name: "check", size: 15 }),
      ue
    ] }),
    (n || C === "update") && /* @__PURE__ */ r("div", { className: "gx-install-progress", role: "status", children: [
      /* @__PURE__ */ a("span", {}),
      /* @__PURE__ */ a(_, { name: "download", size: 15 }),
      " Gale устанавливает моды. Не закрывайте Steam."
    ] }),
    !!d.unknownMods.length && /* @__PURE__ */ r(se, { error: !0, children: [
      "Не найдены в кэше: ",
      d.unknownMods.map((o) => o.fullName).join(", "),
      ". Обновите каталог в расширенных настройках."
    ] }),
    /* @__PURE__ */ a("div", { className: `gx-mod-list ${ze ? "is-loading" : ""}`, "aria-busy": ze, children: ze && !d.mods.length ? /* @__PURE__ */ r("div", { className: "gx-empty", children: [
      /* @__PURE__ */ a(_, { name: "refresh", size: 26 }),
      /* @__PURE__ */ a("h3", { children: "Загружаем моды…" })
    ] }) : Fe.length ? Fe.map((o, N) => {
      const z = le.find((P) => P.updatedId.packageUuid === o.data.uuid);
      return /* @__PURE__ */ r("article", { className: `gx-mod-row ${o.enabled ? "" : "is-disabled"}`, children: [
        /* @__PURE__ */ a(Ne, { label: `Включить ${o.data.name}`, checked: o.enabled, disabled: !!C || n, onChange: () => Ct(o) }),
        /* @__PURE__ */ r("div", { className: `gx-mod-avatar gx-avatar-${N % 6}`, "aria-hidden": "true", children: [
          o.data.name.split(" ").map((P) => P[0]).slice(0, 2).join(""),
          /* @__PURE__ */ a("span", {})
        ] }),
        /* @__PURE__ */ r("div", { className: "gx-mod-info", children: [
          /* @__PURE__ */ r("div", { className: "gx-mod-title", children: [
            /* @__PURE__ */ a("h3", { children: o.data.name }),
            z && /* @__PURE__ */ a("span", { className: "gx-update-badge", children: "Обновление" }),
            o.data.type === "local" && /* @__PURE__ */ a("span", { className: "gx-local-badge", children: "Локальный" })
          ] }),
          /* @__PURE__ */ a("p", { children: o.data.description }),
          /* @__PURE__ */ r("div", { className: "gx-mod-byline", children: [
            o.data.author ?? "Локальный мод",
            /* @__PURE__ */ a("span", { children: "·" }),
            o.data.categories?.[0] ?? "Мод"
          ] })
        ] }),
        /* @__PURE__ */ r("div", { className: "gx-version", children: [
          /* @__PURE__ */ r("span", { children: [
            "v",
            o.data.version ?? "—"
          ] }),
          /* @__PURE__ */ a("small", { children: Rt(o.data.fileSize) })
        ] }),
        /* @__PURE__ */ a(We, { label: `Действия с ${o.data.name}`, items: [
          ...z ? [{ label: `Обновить до ${z.new}`, icon: "refresh", action: () => void S("update", async () => {
            await v.call("update_mods", E, { uuids: [o.data.uuid] }), U(), T("Обновление добавлено в очередь");
          }) }] : [],
          { label: "Настроить конфиг", icon: "sliders", disabled: !o.configFile, action: () => void je() },
          { label: "Версия мода", icon: "layers", action: () => {
            yt(o), D("versions");
          } },
          { label: "Страница на Thunderstore", icon: "external", disabled: o.data.type === "local", action: () => Y(`https://thunderstore.io/c/${e.slug}/p/${o.data.author}/${o.data.name.replace(/ /g, "_")}/`) },
          { label: "Удалить мод", icon: "trash", danger: !0, action: () => void S(o.data.uuid, async () => {
            const P = await v.call("remove_mod", E, { uuid: o.data.uuid });
            P.type === "confirm" ? me({ title: `Удалить ${o.data.name}?`, description: "Мод и его файлы будут удалены из профиля. Зависимые моды могут перестать работать.", kind: "remove", force: !0, uuids: [o.data.uuid, ...P.dependants.map((ve) => ve.uuid)] }) : (U(), T("Мод удалён"));
          }) }
        ] })
      ] }, o.data.uuid);
    }) : /* @__PURE__ */ r("div", { className: "gx-empty", children: [
      /* @__PURE__ */ a(_, { name: "package", size: 32 }),
      /* @__PURE__ */ a("h3", { children: u || h !== "all" || y ? "Ничего не найдено" : "В этом профиле пока нет модов" }),
      /* @__PURE__ */ a("p", { children: u || h !== "all" || y ? "Попробуйте другой запрос или сбросьте фильтры." : "Найдите первый мод на Thunderstore и установите его в один клик." }),
      /* @__PURE__ */ a(A, { onClick: () => {
        u || h !== "all" || y ? (m(""), x("all"), O("")) : Y(`https://thunderstore.io/c/${e.slug}/`);
      }, children: u || h !== "all" || y ? "Сбросить фильтры" : "Открыть Thunderstore" })
    ] }) }),
    /* @__PURE__ */ r("footer", { className: "gx-footer", children: [
      /* @__PURE__ */ r("span", { children: [
        /* @__PURE__ */ a(_, { name: "layers", size: 13 }),
        " Общие профили и файлы Gale"
      ] }),
      /* @__PURE__ */ a("button", { onClick: () => void S("fetch", async () => {
        await v.call("fetch_mods", E), T("Обновление каталога запрошено");
      }), disabled: !!C, children: "Обновить каталог" })
    ] }),
    B && /* @__PURE__ */ r(qe, { title: B.title, onClose: () => me(null), onConfirm: zt, busy: !!C, danger: B.kind === "remove", children: [
      B.description,
      B.uuids.length > 1 && /* @__PURE__ */ r("p", { children: [
        "Будет затронуто модов: ",
        new Set(B.uuids).size,
        "."
      ] })
    ] }),
    I && ["create", "rename", "duplicate"].includes(I) && /* @__PURE__ */ a(ae, { title: I === "create" ? "Новый профиль" : I === "rename" ? "Переименовать профиль" : "Дублировать профиль", onClose: q, footer: /* @__PURE__ */ r(F, { children: [
      /* @__PURE__ */ a(A, { onClick: q, disabled: !!C, children: "Отмена" }),
      /* @__PURE__ */ a(A, { primary: !0, disabled: !ie.trim() || !!C, onClick: () => void S("profile", () => be(I === "create" ? "create_profile" : I === "rename" ? "rename_profile" : "duplicate_profile", { name: ie.trim() })), children: C ? "Сохранение…" : "Сохранить" })
    ] }), children: /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
      "Название профиля",
      /* @__PURE__ */ a("input", { value: ie, maxLength: 80, onChange: (o) => K(o.target.value), placeholder: "Например, Игра с друзьями", onKeyDown: (o) => {
        o.key === "Enter" && ie.trim() && !C && S("profile", () => be(I === "create" ? "create_profile" : I === "rename" ? "rename_profile" : "duplicate_profile", { name: ie.trim() }));
      } })
    ] }) }),
    I === "delete" && /* @__PURE__ */ r(qe, { title: "Удалить профиль?", danger: !0, onClose: q, busy: !!C, onConfirm: () => void S("profile", () => be("delete_profile", { id: s })), children: [
      "Профиль «",
      X?.name,
      "» и его моды будут удалены. Это действие нельзя отменить."
    ] }),
    I === "import" && /* @__PURE__ */ a(ae, { title: R ? "Проверьте профиль" : "Импорт профиля", onClose: q, footer: /* @__PURE__ */ r(F, { children: [
      /* @__PURE__ */ a(A, { onClick: q, disabled: !!C, children: "Отмена" }),
      /* @__PURE__ */ a(A, { primary: !0, onClick: At, disabled: !!C || !fe && !R, children: C ? "Импорт…" : R ? "Установить профиль" : "Продолжить" })
    ] }), children: R ? /* @__PURE__ */ r(F, { children: [
      /* @__PURE__ */ a("p", { children: "Будет создан отдельный профиль. Текущий профиль не изменится." }),
      /* @__PURE__ */ r("div", { className: "gx-import-summary", children: [
        /* @__PURE__ */ a("strong", { children: R.manifest.name || "Импортированный профиль" }),
        /* @__PURE__ */ r("span", { children: [
          R.manifest.mods.length,
          " модов"
        ] })
      ] }),
      !!R.missingMods.length && /* @__PURE__ */ r(se, { error: !0, children: [
        "Не найдены: ",
        R.missingMods.join(", "),
        ". Эти моды будут пропущены."
      ] })
    ] }) : /* @__PURE__ */ r(F, { children: [
      /* @__PURE__ */ r("label", { className: "gx-form-label", children: [
        "Код профиля",
        /* @__PURE__ */ a("textarea", { value: fe, onChange: (o) => Me(o.target.value), placeholder: "Вставьте код экспорта Gale / r2modman", rows: 3 })
      ] }),
      /* @__PURE__ */ a("div", { className: "gx-or", children: "или" }),
      /* @__PURE__ */ r("label", { className: "gx-file-button", children: [
        /* @__PURE__ */ a(_, { name: "folder", size: 17 }),
        " Выбрать файл .r2z",
        /* @__PURE__ */ a("input", { type: "file", accept: ".r2z,.zip", onChange: (o) => {
          const N = o.target.files?.[0];
          if (!N) return;
          if (N.size > 15 * 1024 * 1024) {
            j("Максимальный размер файла — 15 МиБ");
            return;
          }
          const z = new FileReader();
          z.onload = () => void S("import", async () => {
            const P = String(z.result).split(",")[1] ?? "";
            re(await v.call("read_profile_base64", E, { base64: P }));
          }), z.onerror = () => j("Не удалось прочитать файл"), z.readAsDataURL(N);
        } })
      ] })
    ] }) }),
    I === "export" && /* @__PURE__ */ r(ae, { title: "Экспорт профиля", onClose: q, footer: /* @__PURE__ */ a(A, { primary: !0, onClick: q, children: "Готово" }), children: [
      /* @__PURE__ */ a("p", { children: "Поделитесь кодом, чтобы другой пользователь установил этот профиль." }),
      /* @__PURE__ */ r("div", { className: "gx-export-code", children: [
        /* @__PURE__ */ a("code", { children: Ue }),
        /* @__PURE__ */ a(Se, { icon: "copy", label: "Скопировать код", onClick: () => {
          navigator.clipboard.writeText(Ue).then(() => T("Код скопирован")).catch(() => j("Выделите код и скопируйте вручную"));
        } })
      ] }),
      !t && /* @__PURE__ */ a(A, { icon: "download", onClick: () => void S("export-file", async () => {
        const { url: o } = await v.browserUrl({ ...E, kind: "export" });
        Y(o);
      }), children: "Скачать файл .r2z" })
    ] }),
    I === "versions" && Z && /* @__PURE__ */ r(ae, { title: `Версия · ${Z.data.name}`, onClose: q, children: [
      /* @__PURE__ */ r("p", { children: [
        "Текущая версия: ",
        Z.data.version,
        ". Смена версии использует установщик Gale."
      ] }),
      /* @__PURE__ */ a("div", { className: "gx-version-list", children: Z.data.versions.map((o) => /* @__PURE__ */ r(A, { disabled: !!C || o.uuid === Z.data.versionUuid, icon: o.uuid === Z.data.versionUuid ? "check" : "layers", onClick: () => void S("version", async () => {
        await v.call("change_mod_version", E, { id: { packageUuid: Z.data.uuid, versionUuid: o.uuid, backend: Z.data.backend } }), D(null), U(), T("Версия поставлена в очередь");
      }), children: [
        o.name,
        o.uuid === Z.data.versionUuid ? " · установлена" : ""
      ] }, o.uuid)) })
    ] })
  ] });
}
const ce = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new WeakMap(), Le = /* @__PURE__ */ new Map();
function Ht(e, t) {
  Ce.set(e, t);
}
function L(e) {
  return (e ?? "").replace(/\s+/g, " ").trim().toLowerCase();
}
function Ie(e, t) {
  try {
    const n = window.LocalizationManager, l = n?.m_mapTokens?.get?.(e) ?? n?.m_mapFallbackTokens?.get?.(e);
    if (typeof l == "string" && l.length > 0) return l;
  } catch {
  }
  return t;
}
function Vt() {
  const e = /* @__PURE__ */ new Set(["general", "общие", "allgemein", "général", "generale", "general ", "ogólny"]), t = /* @__PURE__ */ new Set([
    "local files",
    "installed files",
    "локальные файлы",
    "установленные файлы",
    "lokale dateien",
    "installierte dateien",
    "fichiers locaux",
    "fichiers installés",
    "updates",
    "обновления",
    "aktualisierungen",
    "mises à jour",
    "dlc",
    "betas",
    "бета-версии",
    "beta-versionen",
    "controller",
    "контроллер",
    "shortcut",
    "ярлык",
    "game recording",
    "запись игры",
    "customization",
    "настройка",
    "workshop",
    "мастерская"
  ]);
  for (const [n, l] of [["AppProperties_GeneralPage", "General"], ["AppProperties_General", "General"]]) e.add(L(Ie(n, l)));
  for (const [n, l] of [
    ["AppProperties_LocalFilesPage", "Local Files"],
    ["AppProperties_InstalledFilesPage", "Installed Files"],
    ["AppProperties_UpdatesPage", "Updates"],
    ["AppProperties_DLCPage", "DLC"],
    ["AppProperties_BetasPage", "Betas"],
    ["AppProperties_ControllerPage", "Controller"],
    ["AppProperties_ShortcutPage", "Shortcut"],
    ["AppProperties_GameRecording", "Game Recording"],
    ["AppProperties_Customization", "Customization"],
    ["AppProperties_WorkshopPage", "Workshop"]
  ]) t.add(L(Ie(n, l)));
  return { general: e, secondary: t };
}
function et(e, t, n) {
  Le.get(e) !== t && (Le.set(e, t), v.log(`properties: ${n}`).catch(() => {
  }));
}
function tt(e) {
  if (!e || typeof e != "object") return;
  const t = [
    e.appid,
    e.appId,
    e.unAppID,
    e.m_unAppID,
    e.app,
    e.item?.appid,
    e.item?.appId,
    e.overview?.appid,
    e.overview?.m_unAppID,
    e.appOverview?.appid,
    e.appOverview?.m_unAppID,
    e.m_appOverview?.appid,
    e.m_appOverview?.m_unAppID,
    e.app?.appid,
    e.app?.m_unAppID,
    e.details?.appid,
    e.appDetails?.appid
  ];
  for (const n of t) if (Number.isSafeInteger(n) && n > 0 && n < 2147483648) return n;
}
function qt(e, t = []) {
  const n = [e, ...t, ...Array.from(e.querySelectorAll("*")).slice(0, 300)], l = /* @__PURE__ */ new Set();
  for (const d of n) {
    if (l.has(d)) continue;
    l.add(d);
    const g = Object.keys(d).find((m) => m.startsWith("__reactFiber$") || m.startsWith("__reactInternalInstance$"));
    let u = g ? d[g] : void 0;
    for (let m = 0; u && m < 40; m++, u = u.return) {
      const p = tt(u.memoizedProps) ?? tt(u.pendingProps);
      if (p) return p;
    }
  }
  const c = (e.matches("[data-appid]") ? e : e.querySelector("[data-appid]"))?.getAttribute("data-appid") ?? void 0;
  if (c && /^\d+$/.test(c)) return Number(c);
  const i = (e.ownerDocument.defaultView?.location.pathname ?? "").match(/\/(?:library\/app|properties)\/(\d+)/);
  if (i) return Number(i[1]);
  for (const d of Array.from(e.querySelectorAll("img"))) {
    const g = d.src.match(/\/(?:apps|assets)\/(\d{2,9})\//);
    if (g) return Number(g[1]);
  }
}
function Wt(e, t) {
  const l = [Ce.get(e)?.title, e.title, t.querySelector('h1,h2,[class*="Title"]')?.textContent], s = [Ie("AppProperties_Title", "Properties - %1$s"), "Properties - %1$s", "Properties: %1$s", "Свойства — %1$s", "Свойства: %1$s", "Eigenschaften – %1$s", "Eigenschaften: %1$s"], i = /* @__PURE__ */ new Set();
  for (const d of l) {
    const g = L(d);
    if (!g || g === "steam") continue;
    let u = !1;
    for (const m of s) {
      const p = m.split("%1$s");
      if (p.length < 2) continue;
      const b = p.map((x) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+")), h = g.match(new RegExp("^\\s*" + b.join("\\s*(.+?)\\s*") + "\\s*$", "i"));
      if (h?.[1]) {
        i.add(L(h[1])), u = !0;
        break;
      }
    }
    !u && !/properties|свойства|eigenschaften/.test(g) && i.add(g);
  }
  if (i.size)
    try {
      const d = window.appStore?.m_mapApps;
      if (!d?.forEach) return;
      let g;
      return d.forEach((u, m) => {
        if (g) return;
        const p = Number(m ?? u?.appid ?? u?.m_unAppID);
        if (!Number.isSafeInteger(p) || p <= 0 || p >= 2147483648) return;
        const b = L(u?.display_name ?? u?.m_strDisplayName);
        b && i.has(b) && (g = p);
      }), g;
    } catch {
      return;
    }
}
function Qt(e, t) {
  let n = e;
  for (; n.parentElement && n.parentElement !== t; ) n = n.parentElement;
  return n.parentElement === t ? n : e;
}
function Jt(e) {
  const { general: t, secondary: n } = Vt(), l = Array.from(e.querySelectorAll("*")).filter((s) => {
    const i = L(s.textContent);
    if (!t.has(i) && !n.has(i) || s.closest('[role="tabpanel"],[data-galex-properties],[class*="TabContent"],[class*="tab-content"]')) return !1;
    const d = s.parentElement;
    return !(d && L(d.textContent) === i);
  }), c = l.filter((s) => t.has(L(s.textContent)));
  for (const s of c) {
    let i = s;
    for (let d = 0; i && d < 8; d++, i = i.parentElement) {
      if (i.querySelectorAll("*").length > 300) continue;
      const g = l.filter((p) => i.contains(p));
      if (g.length < 2) continue;
      const u = Array.from(new Set(g.map((p) => Qt(p, i)))), m = u.map((p) => L(p.textContent));
      if (m.some((p) => t.has(p)) && m.some((p) => n.has(p))) return { list: i, tabs: u };
    }
  }
}
function Kt(e) {
  const t = new Set(Array.from(e.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"],[class*="DialogBody"]')));
  return Ce.get(e)?.allowBodyFallback && e.body && t.add(e.body), Array.from(t);
}
function Yt(e) {
  return Array.from(e.dialog.querySelectorAll('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"],[class*="TabContent"],[class*="tab-content"]')).filter((t) => t !== e.panel && !t.contains(e.panel) && !t.hasAttribute("data-galex-properties"));
}
function Pe(e) {
  for (const t of Yt(e))
    e.hidden.has(t) || e.hidden.set(t, { display: t.style.display, hidden: t.hidden }), t.style.display !== "none" && (t.style.display = "none");
}
function ea(e) {
  e.hidden.forEach((t, n) => {
    n.style.display = t.display, n.hidden = t.hidden;
  }), e.hidden.clear();
}
function gt(e) {
  e.active && (e.active = !1, e.panel.hidden = !0, e.tab.setAttribute("aria-selected", "false"), e.tab.classList.remove("gx-tab-active"), ea(e));
}
function ta(e) {
  if (e.active) {
    Pe(e), e.panel.hidden = !1;
    return;
  }
  Pe(e), e.dialog.querySelectorAll('[role="tab"]').forEach((t) => {
    t !== e.tab && t.setAttribute("aria-selected", "false");
  }), e.active = !0, e.panel.hidden = !1, e.tab.setAttribute("aria-selected", "true"), e.tab.classList.add("gx-tab-active");
}
function at(e, t, n) {
  e.root.render(J(Te, null, J(Xt, { key: `${e.slug}-${e.appid}`, game: t, installing: n })));
}
function $e(e) {
  gt(e), e.list.removeEventListener("click", e.onNativeClick, !0), ce.delete(e.dialog);
  const { root: t, tab: n, panel: l } = e;
  queueMicrotask(() => {
    try {
      t.unmount();
    } catch {
    }
    n.remove(), l.remove();
  });
}
function aa(e, t) {
  const n = L(t);
  if (L(e.textContent) === n) {
    e.textContent = "Моды";
    return;
  }
  const l = Array.from(e.querySelectorAll("*")).filter((s) => L(s.textContent) === n), c = l[l.length - 1];
  c ? c.textContent = "Моды" : e.textContent = "Моды";
}
function xt(e) {
  const { snapshot: t } = Ee();
  for (const [s, i] of Array.from(ce)) {
    if (!e.contains(s)) continue;
    if (!s.isConnected || !i.tab.isConnected || !i.list.isConnected) {
      $e(i);
      continue;
    }
    const d = t?.ok ? Ke(t, i.appid) : void 0;
    if (!d) {
      $e(i);
      continue;
    }
    i.active && Pe(i), at(i, d, t.installing);
  }
  if (!t?.ok) return;
  const n = Kt(e), l = [];
  let c = 0;
  for (const s of n) {
    if (ce.has(s) || s.querySelector("[data-galex-properties]")) continue;
    const i = Jt(s);
    if (!i) {
      l.push("no-tablist");
      continue;
    }
    const d = qt(s, i.tabs) ?? Wt(e, s);
    if (!d) {
      l.push("no-appid");
      continue;
    }
    const g = Ke(t, d);
    if (!g) {
      l.push(`unsupported:${d}`);
      continue;
    }
    const u = i.tabs.find((y) => /workshop|мастерская/i.test(y.textContent ?? "")) ?? i.tabs[0], m = L(u.textContent), p = u.cloneNode(!0);
    p.removeAttribute("id"), p.removeAttribute("href"), p.setAttribute("role", "tab"), p.setAttribute("aria-selected", "false"), p.setAttribute("data-galex-properties", "tab"), p.id = `galex-tab-${d}`, p.setAttribute("aria-controls", `galex-panel-${d}`), aa(p, m), p.tagName === "A" && p.setAttribute("href", "#galex-mods"), i.list.appendChild(p);
    const b = e.createElement("div");
    b.id = `galex-panel-${d}`, b.setAttribute("role", "tabpanel"), b.setAttribute("aria-labelledby", p.id), b.setAttribute("data-galex-properties", "panel"), b.className = "gx-injected-panel", b.hidden = !0, b.style.flex = "1", b.style.minHeight = "0", b.style.overflow = "hidden", (s.querySelector('[role="tabpanel"],[class*="TabContent"],[class*="tab-content"]')?.parentElement ?? i.list.parentElement?.parentElement ?? i.list.parentElement)?.appendChild(b);
    const M = st(b), f = { dialog: s, list: i.list, tab: p, nativeTabs: i.tabs, panel: b, root: M, appid: g.steamAppId, slug: g.slug, active: !1, hidden: /* @__PURE__ */ new Map(), onNativeClick: (y) => {
      const O = y.target;
      O?.closest?.('[data-galex-properties="tab"]') || (O?.closest?.('[role="tab"],button,a') || i.tabs.some((oe) => O && oe.contains(O))) && gt(f);
    } };
    ce.set(s, f), at(f, g, t.installing), c++, p.addEventListener("click", (y) => {
      y.preventDefault(), y.stopPropagation(), ta(f);
    }), i.list.addEventListener("click", f.onNativeClick, !0), et(e, `injected:${d}`, `tab injected appid=${d} slug=${g.slug}`);
  }
  if (n.length && Ce.get(e)?.allowBodyFallback) {
    const s = `${n.length}/${c}/${l.slice(0, 4).join(",")}`;
    et(e, s, `dialogs=${n.length} injected=${c} skipped=${l.slice(0, 4).join(",") || "none"}`);
  }
}
function nt(e) {
  const t = ee.get(e);
  !t || t.timer || (t.timer = window.setTimeout(() => {
    t.timer = 0, xt(e);
  }, 180));
}
function ot(e = document) {
  if (ee.has(e)) return ee.get(e).dispose;
  const t = new MutationObserver(() => nt(e));
  t.observe(e.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["role", "data-appid", "src", "style", "hidden", "class"] });
  const n = () => {
    const l = ee.get(e);
    l?.timer && clearTimeout(l.timer), t.disconnect();
    for (const [c, s] of Array.from(ce))
      e.contains(c) && $e(s);
    ee.delete(e), Le.delete(e);
  };
  return ee.set(e, { observer: t, timer: 0, dispose: n }), nt(e), n;
}
function na(e = document) {
  xt(e);
}
const $ = "GaleX";
function ut() {
  return { title: "GaleX", icon: J(_, { name: "package", size: 18 }), content: J(Te, null, J(Bt)) };
}
function oa() {
  window.__GALEX_STEAM__?.dispose(), Dt();
  const e = [], t = [];
  let n = !1;
  const l = Ut();
  e.push(l);
  const c = ut(), s = window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[$], i = window.PLUGIN_LIST?.[$];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS ??= {})[$] = c, (window.PLUGIN_LIST ??= {})[$] = { ...i, ...c };
  const d = document.createElement("div");
  d.id = "galex-steam-events", document.body.appendChild(d);
  const g = st(d);
  t.push(g), g.render(J(Te, null, J(jt)));
  const u = /* @__PURE__ */ new Set([document]), m = (x, M) => {
    if (n || u.has(x)) return;
    const f = String(M?.m_strName ?? M?.name ?? ""), y = String(M?.m_strTitle ?? M?.title ?? x.title ?? "");
    Ht(x, { name: f, title: y, allowBodyFallback: x !== document && !f.includes("SP Desktop") }), u.add(x), rt(it, x), e.push(ot(x)), v.log(`window observed name=${f || "?"} title=${y || "?"} body=${!!x.body}`).catch(() => {
    });
  }, p = (x, M) => {
    if (n || !x) return;
    const f = () => {
      if (!n && x.document?.body)
        try {
          m(x.document, M);
        } catch (y) {
          console.warn("[GaleX] Cannot inspect property window", y), v.log(`window inspect failed: ${String(y)}`).catch(() => {
          });
        }
    };
    if (x.document?.body) {
      f();
      return;
    }
    x.addEventListener?.("DOMContentLoaded", f, { once: !0 }), x.addEventListener?.("load", f, { once: !0 }), e.push(() => {
      x.removeEventListener?.("DOMContentLoaded", f), x.removeEventListener?.("load", f);
    });
  };
  e.push(ot(document));
  try {
    const x = W(), M = x?.Millennium?.AddWindowCreateHook ?? x?.AddWindowCreateHook ?? window.Millennium?.AddWindowCreateHook;
    typeof M == "function" ? M((f) => {
      p(f?.window ?? f?.document?.defaultView ?? f?.BrowserWindow ?? f?.m_popup?.window ?? f?.m_popup ?? f?.m_BrowserWindow, f);
    }) : console.warn("[GaleX] Window hook unavailable; observing the main Steam document only");
  } catch (x) {
    console.warn("[GaleX] Window hook unavailable", x);
  }
  e.push(Ot(() => {
    for (const x of u)
      if (!x.defaultView?.closed)
        try {
          na(x);
        } catch {
        }
  }));
  const b = () => {
    n || (n = !0, e.reverse().forEach((x) => {
      try {
        x();
      } catch {
      }
    }), t.forEach((x) => {
      try {
        x.unmount();
      } catch {
      }
    }), d.remove(), s === void 0 ? delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[$] : window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS[$] = s, i === void 0 ? delete window.PLUGIN_LIST?.[$] : window.PLUGIN_LIST[$] = i, delete window.__GALEX_STEAM__, window.GaleX?.dispose === b && delete window.GaleX);
  };
  window.__GALEX_STEAM__ = { dispose: b }, window.GaleX = { openSettings: () => {
    const x = W();
    x?.Millennium?.openQuickAccess?.({ plugin: $ }) ?? x?.openQuickAccess?.({ plugin: $ }) ?? window.Millennium?.openQuickAccess?.({ plugin: $ });
  }, openProperties: () => W()?.Navigation?.NavigateToAppProperties?.(), dispose: b }, console.info("[GaleX] frontend 0.2.2 mounted"), v.log(`frontend 0.2.2 mounted; url=${location.href}`).catch(() => {
  });
  const h = window.MILLENNIUM_BACKEND_IPC;
  return typeof h?.postMessage == "function" ? Promise.resolve(h.postMessage(1, { pluginName: $ })).then(() => console.info("[GaleX] backend notified that the frontend is loaded")).catch((x) => console.warn("[GaleX] Frontend-loaded notification failed", x)) : console.warn("[GaleX] Millennium backend IPC is unavailable"), c;
}
const ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  mountIntoSteam: oa,
  pluginSettings: ut
}, Symbol.toStringTag, { value: "Module" }));
export {
  Lt as default
};
