const be = window.SP_REACT, Ue = window.SP_JSX_FACTORY;
function Ee(e, a, r) {
  const { children: o, ...l } = a ?? {};
  return r !== void 0 && (l.key = r), o === void 0 ? be.createElement(e, l) : Array.isArray(o) ? be.createElement(e, l, ...o) : be.createElement(e, l, o);
}
const te = typeof Ue?.jsx == "function" ? Ue : void 0, B = te?.Fragment ?? be.Fragment, t = te ? te.jsx : Ee, i = te?.jsxs ?? Ee;
te && te.jsx;
const Ke = '.galex{--gx-bg:var(--gpBackground-Dark-Medium,#1b2838);--gx-panel:var(--gpBackground-Medium,#233447);--gx-control:var(--gpBackground-Neutral-Light,#313d4e);--gx-border:var(--gpBackground-Neutral-Light,#35465b);--gx-text:var(--gpColor-White,#e5eaf0);--gx-muted:var(--gpColor-Neutral,#96a5b6);--gx-accent:var(--gpColor-Blue,#66c0f4);--gx-blue:var(--gpColor-Blue,#1a9fff);--gx-green:var(--gpColor-Green,#5ba32b);--gx-danger:var(--gpColor-Red,#d94b4b);color:var(--gx-text);font-family:Motiva Sans,Arial,Helvetica,sans-serif;font-size:13px;line-height:1.45;box-sizing:border-box;container-type:inline-size}.galex *,.galex *:before,.galex *:after{box-sizing:border-box}.galex h1,.galex h2,.galex h3,.galex p{margin:0}.galex button,.galex input,.galex select,.galex textarea{font:inherit}.galex button{cursor:pointer}.galex button:disabled{cursor:default;opacity:.42}.galex button:focus-visible,.galex input:focus-visible,.galex select:focus-visible,.galex textarea:focus-visible{outline:2px solid var(--gx-accent);outline-offset:3px}.galex svg{flex-shrink:0;vertical-align:middle}.galex button{color:inherit}.gx-toolbar-spacer{flex:1}.gx-muted{color:var(--gx-muted);font-size:12px;line-height:1.6}.gx-text-danger{color:#ff9993!important}.gx-dot{margin:0 7px;color:var(--gx-muted)}.gx-button{display:inline-flex!important;align-items:center;justify-content:center;gap:7px;min-height:34px;padding:7px 14px!important;border:1px solid color-mix(in srgb,var(--gx-border) 80%,transparent)!important;border-radius:3px!important;background:var(--gx-control)!important;color:var(--gx-text)!important;box-shadow:0 1px 2px #0002!important;font-size:12px!important;font-weight:500;line-height:1.4;white-space:nowrap;transition:filter .15s,background .15s}.gx-button:hover:not(:disabled){filter:brightness(1.22)}.gx-button--primary{background:linear-gradient(110deg,#1387b8,var(--gx-blue))!important;border-color:transparent!important;color:#fff!important;box-shadow:0 2px 8px #0078bd20!important}.gx-button.gx-danger{background:var(--gx-danger)!important;color:#fff!important}.gx-icon-button{border:0;background:transparent;display:inline-flex;align-items:center;justify-content:center;width:31px;height:31px;border-radius:3px;color:var(--gx-muted)!important;flex-shrink:0}.gx-icon-button:hover:not(:disabled){background:var(--gx-control);color:var(--gx-text)!important}.gx-mods{padding:25px 28px 0;min-width:0;display:flex;flex-direction:column;height:100%;overflow:hidden}.gx-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:22px}.gx-eyebrow{display:block;color:var(--gx-muted);font-size:9px;font-weight:600;letter-spacing:1.8px;margin-bottom:7px}.gx-heading h1{font-size:27px;font-weight:500;letter-spacing:-.4px;line-height:1.2}.gx-heading h1>span{font-size:12px;font-weight:400;color:var(--gx-muted);letter-spacing:0;margin-left:9px}.gx-heading-meta{font-size:10px;color:var(--gx-muted);white-space:nowrap;display:flex;gap:6px;align-items:center}.gx-status-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#79b74c;box-shadow:0 0 7px #79b74c25;flex-shrink:0}.gx-toolbar{display:flex;gap:9px;align-items:center;padding-bottom:19px;border-bottom:1px solid var(--gx-border)}.gx-toolbar .gx-button:nth-child(2){background:transparent!important}.gx-toolbar .gx-button:nth-child(2)>svg:last-child{margin-left:4px}.gx-advanced{background:color-mix(in srgb,var(--gx-bg) 80%,transparent);border:1px solid var(--gx-border);border-top:0;padding:13px 14px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;border-radius:0 0 3px 3px}.gx-profile-line{display:flex;align-items:center;gap:8px;min-width:230px;flex:1}.gx-field-label{font-size:11px;color:var(--gx-muted)}.gx-profile-select{flex:1;max-width:250px;min-width:130px}.gx-profile-actions{display:flex;gap:6px}.gx-profile-actions .gx-button{font-size:11px!important;padding:6px 10px!important;min-height:31px}.gx-search-row{display:flex;align-items:center;gap:9px;margin-top:18px}.gx-search{display:flex;align-items:center;gap:9px;min-width:120px;flex:1;background:color-mix(in srgb,var(--gx-bg) 75%,#000 15%);border:1px solid var(--gx-border);border-radius:3px;padding:0 11px;height:35px;color:var(--gx-muted)}.gx-search:focus-within{border-color:var(--gx-accent);box-shadow:0 0 0 1px color-mix(in srgb,var(--gx-accent) 20%,transparent)}.gx-search input{width:100%;min-width:0;color:var(--gx-text);background:transparent;border:0;outline:none!important;font-size:12px}.gx-search input::placeholder{color:var(--gx-muted);opacity:.8}.gx-search button{background:none;border:0;padding:2px;color:var(--gx-muted)}.galex select{height:35px;border:1px solid var(--gx-border);border-radius:3px;background:var(--gx-control);color:var(--gx-text);padding:0 29px 0 10px;font-size:11px;max-width:180px;min-width:115px}.gx-native-select{min-width:125px}.gx-native-select>div{font-size:12px!important}.gx-categories{display:flex;gap:6px;flex-wrap:wrap;margin-top:11px}.gx-categories button{background:transparent;color:var(--gx-muted);border:1px solid transparent;padding:3px 8px;border-radius:3px;font-size:10px}.gx-categories button:hover{color:var(--gx-text);background:var(--gx-control)}.gx-categories button.is-active{background:color-mix(in srgb,var(--gx-accent) 12%,transparent);color:var(--gx-accent);border-color:color-mix(in srgb,var(--gx-accent) 24%,transparent)}.gx-list-heading{display:flex;align-items:center;gap:8px;min-height:43px;color:var(--gx-muted);font-size:10px;letter-spacing:.1px}.gx-list-hint{font-size:10px;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-update-link{display:flex;gap:5px;align-items:center;color:var(--gx-accent);border:0;background:none;font-size:10px;padding:3px 5px}.gx-update-link:hover{text-decoration:underline}.gx-mod-list{flex:1;min-height:100px;overflow-y:auto;overscroll-behavior:contain;border-top:1px solid var(--gx-border);scrollbar-width:thin;scrollbar-color:var(--gx-control) transparent;padding-right:3px}.gx-mod-row{display:flex;align-items:center;gap:13px;padding:13px 6px 13px 3px;border-bottom:1px solid color-mix(in srgb,var(--gx-border) 65%,transparent);min-height:87px;transition:background .15s}.gx-mod-row:hover{background:color-mix(in srgb,var(--gx-control) 32%,transparent)}.gx-mod-row.is-disabled .gx-mod-avatar{filter:saturate(.25);opacity:.62}.gx-mod-row.is-disabled .gx-mod-title h3{color:var(--gx-muted)}.gx-toggle{width:34px;flex-shrink:0;display:flex;align-items:center;justify-content:center}.gx-toggle input{appearance:none;width:31px;height:17px;background:#4b5664;border:1px solid #687383;border-radius:20px;margin:0;cursor:pointer;position:relative;transition:background .16s}.gx-toggle input:after{content:"";position:absolute;left:2px;top:2px;width:11px;height:11px;border-radius:50%;background:#d4dce5;transition:transform .16s}.gx-toggle input:checked{background:var(--gx-blue);border-color:var(--gx-blue)}.gx-toggle input:checked:after{transform:translate(13px);background:#fff}.gx-toggle input:disabled{opacity:.45;cursor:default}.gx-mod-avatar{height:49px;width:49px;flex-shrink:0;border-radius:3px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:17px;font-weight:700;letter-spacing:-1px;color:#e4edf3;background:linear-gradient(145deg,#526776,#243440);border:1px solid #ffffff10;text-shadow:0 2px 6px #0005}.gx-mod-avatar:before{content:"";position:absolute;width:45px;height:45px;border:1px solid #ffffff18;transform:rotate(35deg);left:18px;top:17px}.gx-mod-avatar span{position:absolute;left:0;bottom:0;width:100%;height:3px;background:#ffffff20}.gx-avatar-1{background:linear-gradient(140deg,#536957,#263c37)}.gx-avatar-2{background:linear-gradient(140deg,#986b3d,#47382e)}.gx-avatar-3{background:linear-gradient(140deg,#476c87,#253441)}.gx-avatar-4{background:linear-gradient(140deg,#6c526e,#352f43)}.gx-avatar-5{background:linear-gradient(140deg,#547579,#293d48)}.gx-mod-info{flex:1;min-width:0}.gx-mod-title{display:flex;align-items:center;gap:7px}.gx-mod-title h3{font-size:13px;font-weight:500;color:var(--gx-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gx-mod-info>p{font-size:11px;color:var(--gx-muted);margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gx-mod-byline{font-size:10px;color:color-mix(in srgb,var(--gx-muted) 78%,transparent);margin-top:4px;display:flex;gap:6px}.gx-update-badge,.gx-local-badge{font-size:8px;color:#a9d481;background:#6da74419;border:1px solid #6da74433;padding:1px 5px;border-radius:2px;white-space:nowrap}.gx-local-badge{color:var(--gx-accent);background:#66c0f411;border-color:#66c0f433}.gx-version{text-align:right;min-width:63px;display:flex;flex-direction:column;gap:5px;font-size:11px;color:#c3ccd7}.gx-version small{font-size:10px;color:var(--gx-muted)}.gx-mod-row>.gx-icon-button{width:26px}.gx-footer{display:flex;justify-content:space-between;align-items:center;gap:8px;min-height:40px;font-size:9px;color:var(--gx-muted);border-top:1px solid var(--gx-border);margin-top:1px}.gx-footer>span{display:flex;align-items:center;gap:6px}.gx-footer button{background:none;border:0;color:var(--gx-muted);font-size:9px;padding:5px 0}.gx-footer button:hover{color:var(--gx-accent)}.gx-empty{min-height:240px;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:13px;text-align:center;color:var(--gx-muted);padding:30px}.gx-empty h3{font-size:17px;color:var(--gx-text);font-weight:400}.gx-empty p{font-size:12px;max-width:340px}.gx-notice{display:flex;align-items:flex-start;gap:9px;background:#66c0f40b;border:1px solid #66c0f42e;color:#b6d7ec;border-radius:3px;padding:10px 12px;font-size:11px;margin:8px 0;line-height:1.6}.gx-notice>svg{margin-top:2px}.gx-notice span{flex:1;overflow-wrap:anywhere}.gx-notice--error{background:#e05d5d0d;border-color:#e05d5d44;color:#f4aaa5}.gx-notice button{border:0;background:none;color:inherit;text-decoration:underline;font-size:11px}.gx-success{color:#a4ce86;display:flex;gap:7px;align-items:center;font-size:11px;padding:8px 0}.gx-install-progress{position:relative;display:flex;align-items:center;gap:8px;padding:11px;background:#1a9fff0e;color:var(--gx-accent);font-size:11px;overflow:hidden}.gx-install-progress>span{position:absolute;bottom:0;left:-30%;height:2px;width:30%;background:var(--gx-accent);animation:gx-progress 1.8s ease-in-out infinite}@keyframes gx-progress{to{left:100%}}.gx-modal-backdrop{position:fixed;inset:0;z-index:10000;background:#080d16b8;backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:24px}.gx-modal{width:490px;max-width:100%;max-height:90vh;display:flex;flex-direction:column;background:var(--gx-bg)!important;border:1px solid var(--gx-border);border-radius:5px;box-shadow:0 24px 100px #0009;overflow:hidden}.gx-modal>header{display:flex;align-items:center;justify-content:space-between;padding:18px 22px;border-bottom:1px solid var(--gx-border)}.gx-modal h2{font-size:18px;font-weight:500}.gx-modal-body{padding:22px;overflow-y:auto}.gx-modal>footer{padding:15px 22px;display:flex;justify-content:flex-end;align-items:center;gap:9px;border-top:1px solid var(--gx-border);background:#0000000d}.gx-modal>footer>.gx-muted{margin-right:auto;max-width:220px;font-size:10px}.gx-confirm-copy{font-size:13px;color:var(--gx-muted);line-height:1.7}.gx-confirm-copy p{margin-top:10px}.gx-form-label{display:flex;flex-direction:column;gap:9px;font-size:12px;color:#b7c3d0}.gx-form-label input,.gx-form-label textarea{width:100%;background:#0e172344;border:1px solid var(--gx-border);border-radius:3px;color:var(--gx-text);padding:10px 12px;resize:vertical;min-height:37px}.gx-form-label input::placeholder,.gx-form-label textarea::placeholder{color:var(--gx-muted);opacity:.65}.gx-context-menu{position:fixed;z-index:10001;width:224px;padding:5px;background:var(--gx-bg)!important;border:1px solid var(--gx-border);border-radius:4px;box-shadow:0 8px 35px #0008}.gx-context-menu>button{display:flex;gap:9px;align-items:center;text-align:left;width:100%;border:0;background:none;padding:10px;font-size:12px;border-radius:2px}.gx-context-menu>button:hover:not(:disabled),.gx-context-menu>button:focus{background:var(--gx-control);outline:none}.gx-import-summary{padding:16px;background:var(--gx-control);margin:16px 0;display:flex;justify-content:space-between;gap:12px;font-size:12px}.gx-import-summary span{color:var(--gx-muted)}.gx-or{text-align:center;color:var(--gx-muted);font-size:11px;margin:15px}.gx-file-button{display:flex;align-items:center;justify-content:center;gap:8px;border:1px dashed var(--gx-border);border-radius:3px;padding:17px;cursor:pointer;color:var(--gx-accent);position:relative}.gx-file-button input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%}.gx-export-code{display:flex;align-items:center;gap:9px;padding:13px;background:#0002;border:1px solid var(--gx-border);margin:18px 0}.gx-export-code code{font-size:11px;overflow-wrap:anywhere;flex:1;user-select:all}.gx-version-list{display:flex;flex-direction:column;gap:8px;margin-top:20px}.gx-version-list .gx-button{justify-content:flex-start}.gx-config-file{font-weight:500;margin:8px 0 16px!important}.gx-crash{padding:40px;color:#e5eaf0}.gx-crash h2{font-size:20px}.gx-crash p{margin:14px 0;color:#96a5b6}.gx-crash pre{white-space:pre-wrap;font-size:11px;max-height:150px;overflow:auto}.gx-global-settings{padding:28px 32px;overflow-y:auto;height:100%;scrollbar-width:thin}.gx-version-label{font-size:11px;color:var(--gx-muted)}.gx-settings-intro{font-size:12px;color:var(--gx-muted);margin:-8px 0 26px!important}.gx-settings-section{border-top:1px solid var(--gx-border);padding:18px 0 10px;margin-top:10px}.gx-settings-section>h2{font-size:11px;color:var(--gx-accent);font-weight:500;letter-spacing:.6px;text-transform:uppercase;margin-bottom:8px}.gx-setting{display:flex;align-items:center;justify-content:space-between;gap:25px;padding:13px 0}.gx-setting strong{font-size:12px;font-weight:500;display:block}.gx-setting small{font-size:10px;color:var(--gx-muted);display:block;margin-top:4px}.gx-setting .gx-toggle{width:40px}.gx-connection{display:flex;align-items:center;gap:7px;color:#a3c887;font-size:11px;white-space:nowrap}.gx-path{display:block;padding:10px 12px;background:#0002;border:1px solid var(--gx-border);font-size:11px;color:var(--gx-muted);overflow-wrap:anywhere}.gx-settings-actions{display:flex;justify-content:flex-end;margin:12px 0}.gx-settings-bottom{border-top:1px solid var(--gx-border);padding-top:20px;display:flex;align-items:center;justify-content:space-between;gap:15px;color:var(--gx-muted);font-size:10px}.gx-global-settings .gx-form-label{margin-top:8px}html,body,#root{margin:0;min-height:100%;background:#101923}button{font-family:inherit}.gx-preview{min-height:100vh;background:#111b27;color:#dfe3e8;font-family:Motiva Sans,Arial,sans-serif;font-size:13px}.gx-steam-top{height:70px;display:flex;align-items:center;padding:0 4%;gap:48px;background:#171a21;border-bottom:1px solid #ffffff06}.gx-steam-wordmark{font-size:24px;font-weight:700;letter-spacing:2px;color:#c7d1dc;position:relative}.gx-steam-wordmark span{font-size:8px;letter-spacing:0;position:absolute;right:-9px;bottom:4px}.gx-steam-top nav{display:flex;gap:29px;height:100%;align-items:center}.gx-steam-top nav button{height:100%;border:0;background:none;color:#a4a8af;font-size:13px;position:relative;padding:0 2px}.gx-steam-top nav button.active{color:#f1f5fa}.gx-steam-top nav button.active:after{content:"";position:absolute;bottom:14px;left:0;right:0;height:2px;background:#1a9fff}.gx-demo-account{margin-left:auto;display:flex;gap:10px;align-items:center;color:#b7c3d0;font-size:12px}.gx-demo-account small{display:block;color:#57a7da;font-size:10px;margin-top:2px}.gx-account-avatar{width:32px;height:32px;display:grid;place-items:center;background:linear-gradient(135deg,#48677f,#293846);border:1px solid #579bc3;color:#d8edfa}.gx-preview-subbar{height:46px;display:flex;align-items:center;gap:20px;padding:0 4%;background:#172331;border-bottom:1px solid #ffffff05}.gx-library-label{display:flex;align-items:center;gap:12px;font-size:10px;letter-spacing:.8px;color:#8796a7}.gx-library-label>span{color:#4d6073}.gx-demo-badge{margin-left:auto;font-size:8px;letter-spacing:1px;color:#8ea5b8;display:flex;align-items:center;gap:6px}.gx-demo-badge>span{width:5px;height:5px;background:#70a2bb;border-radius:50%}.gx-preview-subbar>button{display:flex;align-items:center;gap:7px;border:1px solid #354457;background:#263447;color:#abbacb;font-size:10px;border-radius:3px;padding:6px 10px}.gx-preview-stage{position:relative;isolation:isolate;min-height:calc(100vh - 116px);padding:43px 5% 20px;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;background:radial-gradient(ellipse at 50% 15%,#31404b 0,#1a2733 42%,#101923 85%)}.gx-game-background{position:absolute;inset:0;z-index:-1;opacity:.4;overflow:hidden;background:linear-gradient(0deg,#111b27 2%,transparent 70%)}.gx-game-wordmark{position:absolute;top:15px;left:7%;font-size:60px;font-weight:800;letter-spacing:8px;color:#75818a16;white-space:nowrap}.gx-moon{position:absolute;right:11%;top:35px;width:150px;height:150px;background:radial-gradient(circle at 35% 35%,#b4b4a4,#667476 65%,#465663);border-radius:50%;box-shadow:0 0 80px #d6d8b71a;opacity:.4}.gx-building{position:absolute;right:0;bottom:0;width:39%;height:60%;background:#0d1722;clip-path:polygon(0 70%,10% 70%,10% 40%,23% 40%,23% 20%,30% 20%,30% 0,34% 0,34% 35%,58% 35%,58% 55%,76% 55%,76% 20%,85% 20%,85% 60%,100% 60%,100% 100%,0 100%)}.gx-stage-repo{background:radial-gradient(ellipse at 50% 15%,#3c4544,#202d32 42%,#111b27 85%)}.gx-properties{width:min(1180px,100%);height:710px;max-height:calc(100vh - 195px);min-height:570px;background:#1b2838;border:1px solid #53627366;border-radius:6px;box-shadow:0 24px 80px #02081280,0 1px #ffffff08 inset;display:flex;flex-direction:column;overflow:hidden}.gx-properties-title{height:39px;flex-shrink:0;display:flex;align-items:center;gap:9px;padding:0 15px;background:#2b3746;border-bottom:1px solid #ffffff06;color:#b9c4d0;font-size:11px}.gx-property-app-icon{color:#94a9bc;display:flex}.gx-window-controls{margin-left:auto;word-spacing:12px;font-size:14px;color:#8390a0}.gx-properties-layout{display:grid;grid-template-columns:190px minmax(0,1fr);flex:1;min-height:0}.gx-properties-nav{background:linear-gradient(160deg,#202e3e,#1a2635);border-right:1px solid #35425366;display:flex;flex-direction:column;padding:23px 11px 15px}.gx-property-game{padding:0 10px 22px;margin-bottom:10px;border-bottom:1px solid #35425366}.gx-property-cover{height:50px;width:100%;background:linear-gradient(120deg,#657064,#303e3d 60%,#1b2a32);border:1px solid #ffffff08;margin-bottom:11px;display:flex;align-items:center;padding-left:13px;font-size:24px;font-weight:800;letter-spacing:-2px;color:#c9cfb5}.gx-property-game strong{display:block;font-size:12px;font-weight:500;color:#d7dfe8}.gx-property-game small{font-size:10px;color:#7e91a3;display:block;margin-top:4px}.gx-properties-nav nav{display:flex;flex-direction:column;gap:4px}.gx-properties-nav nav button{border:0;background:none;color:#96a5b6;display:flex;align-items:center;gap:7px;padding:10px 11px;font-size:11px;text-align:left;border-radius:3px;white-space:nowrap}.gx-properties-nav nav button:hover{background:#ffffff06;color:#dfe3e8}.gx-properties-nav nav button.active{background:linear-gradient(90deg,#364b61,#2c3e52);color:#fff}.gx-tab-dot{width:5px;height:5px;border-radius:50%;background:#66c0f4;margin-left:auto}.gx-property-nav-bottom{margin-top:auto;display:flex;align-items:center;gap:7px;padding:10px;color:#688096;font-size:9px}.gx-properties-content{min-width:0;min-height:0;background:linear-gradient(140deg,#24344755,transparent 70%);overflow:hidden}.gx-properties-content .galex{--gx-bg:#202f40;--gx-panel:#28394c;--gx-control:#34465a;--gx-border:#3a4b5d;--gx-muted:#93a4b7;--gx-text:#e0e7ef}.gx-preview-caption{width:min(1180px,100%);display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:17px;font-size:10px;color:#6e8498}.gx-preview-caption>span:first-child{color:#91a5b7}.gx-preview-caption>span>span{margin:0 8px;color:#52697d}.gx-preview-game-select{display:flex;align-items:center;gap:8px}.gx-preview-game-select .galex select{height:28px}.gx-native-placeholder{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:17px;color:#7e94a9}.gx-native-placeholder h2{font-size:25px;color:#c4d1df;font-weight:400;margin:0}.gx-native-placeholder p{font-size:12px;margin:0}.gx-native-placeholder>button{display:flex;gap:9px;align-items:center;background:none;border:0;color:#66c0f4;font-size:12px;margin-top:10px}.gx-native-placeholder .gx-preview-game-select{margin-top:20px}.gx-preview .gx-modal{--gx-bg:#202f40;--gx-control:#34465a;--gx-border:#3a4b5d}@container (max-width:720px){.gx-mods{padding:20px 18px 0}.gx-heading h1>span{display:none}.gx-search-row{flex-wrap:wrap}.gx-search{flex-basis:100%}.gx-search-row>.gx-native-select,.gx-search-row>select{flex:1;max-width:none}.gx-mod-row{gap:10px}.gx-mod-info>p{max-width:260px}.gx-list-hint{display:none}.gx-advanced{align-items:stretch}.gx-profile-line{flex-basis:100%}.gx-profile-select{max-width:none}.gx-profile-actions{width:100%}.gx-profile-actions .gx-button{flex:1}.gx-categories{max-height:54px;overflow:auto}.gx-global-settings{padding:22px 20px}.gx-heading-meta{font-size:9px}.gx-toolbar .gx-button{font-size:11px!important;padding:7px 10px!important}.gx-setting{gap:15px}}@container (max-width:460px){.gx-heading{margin-bottom:16px}.gx-heading-meta{display:none}.gx-toolbar{gap:6px}.gx-toolbar>.gx-toolbar-spacer{display:none}.gx-toolbar>.gx-icon-button{display:none}.gx-toolbar .gx-button{font-size:10px!important;padding:7px 9px!important}.gx-toolbar .gx-button:nth-child(2)>svg:last-child{display:none}.gx-mod-avatar{width:38px;height:42px;font-size:14px}.gx-mod-row{gap:8px;padding:11px 0}.gx-mod-title h3{font-size:12px}.gx-mod-info>p{display:none}.gx-mod-byline{font-size:9px}.gx-version{min-width:47px;font-size:10px}.gx-version small{font-size:9px}.gx-update-badge{display:none}.gx-footer{font-size:8px}.gx-profile-actions .gx-button{padding:6px!important}.gx-settings-bottom{align-items:flex-start;flex-direction:column}}@media (min-width:1500px){.gx-properties{height:780px}.gx-preview-stage{padding-top:55px}.gx-properties-layout{grid-template-columns:205px minmax(0,1fr)}}@media (max-width:950px){.gx-preview-stage{padding:25px 3% 18px}.gx-properties-layout{grid-template-columns:155px minmax(0,1fr)}.gx-properties-nav{padding:18px 7px 12px}.gx-properties-nav nav button{font-size:10px;padding:10px 8px}.gx-property-game{padding:0 8px 18px}.gx-demo-badge{display:none}.gx-preview-subbar>button{margin-left:auto}.gx-preview-caption>span:last-child{display:none}.gx-steam-top{gap:30px}.gx-steam-top nav{gap:20px}}@media (max-width:650px){.gx-steam-top{height:55px;padding:0 5%;gap:25px}.gx-steam-wordmark{font-size:19px}.gx-steam-top nav{gap:17px}.gx-steam-top nav button{font-size:11px}.gx-steam-top nav button:nth-child(n+3){display:none}.gx-demo-account{font-size:10px}.gx-account-avatar{width:27px;height:27px}.gx-preview-subbar{padding:0 4%;height:42px}.gx-library-label{font-size:8px;gap:7px}.gx-preview-subbar>button{font-size:0;padding:6px}.gx-preview-subbar>button svg{width:15px}.gx-properties-layout{grid-template-columns:minmax(0,1fr)}.gx-properties-nav{display:none}.gx-properties{height:calc(100dvh - 160px);max-height:none;min-height:580px}.gx-preview-stage{padding:16px 3% 14px}.gx-properties-title{font-size:10px}.gx-preview-caption{font-size:8px;gap:10px}.gx-preview-caption .gx-preview-game-select select{max-width:120px;min-width:95px;font-size:9px}.gx-modal-backdrop{padding:14px}.gx-modal>header,.gx-modal-body,.gx-modal>footer{padding:17px}.gx-modal h2{font-size:16px}}@media (prefers-reduced-motion:reduce){.galex *,.galex *:before,.galex *:after{animation:none!important;transition:none!important}}', Ze = "galex-styles";
function Ye(e, a = document) {
  if (typeof a > "u") return;
  const r = a.getElementById(Ze);
  if (r) {
    r.textContent = e;
    return;
  }
  const o = a.createElement("style");
  o.id = Ze, o.textContent = e, a.head.appendChild(o);
}
async function Ft() {
  Ye(Ke);
  {
    const { mountIntoSteam: e } = await Promise.resolve().then(() => qt);
    return e();
  }
}
const b = window.SP_REACT;
b || console.error("[GaleX] window.SP_REACT is missing — is Millennium loaded?");
const j = b.createElement;
b.cloneElement;
b.createContext;
b.createRef;
b.forwardRef;
b.memo;
const Nt = b.useCallback;
b.useContext;
b.useDebugValue;
b.useDeferredValue;
const V = b.useEffect;
b.useId;
b.useImperativeHandle;
b.useLayoutEffect;
const et = b.useMemo;
b.useReducer;
const se = b.useRef, m = b.useState, zt = b.useSyncExternalStore;
b.useTransition;
const Ct = b.Component;
b.PureComponent;
b.Fragment;
b.StrictMode;
b.Suspense;
b.Children;
b.isValidElement;
b.version;
const Y = window.SP_REACTDOM, tt = (e) => typeof Y?.createRoot == "function" ? Y.createRoot(e) : {
  render(a) {
    Y.render(a, e);
  },
  unmount() {
    Y.unmountComponentAtNode?.(e);
  }
}, at = Y.createPortal;
Y.flushSync;
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
function M({ name: e, size: a = 18, className: r, strokeWidth: o = 1.6 }) {
  const l = et(() => Oe[e] ?? Oe.info, [e]);
  return /* @__PURE__ */ t(
    "svg",
    {
      className: r,
      width: a,
      height: a,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ t("path", { d: l })
    }
  );
}
class Le extends Ct {
  state = {};
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  componentDidCatch(a, r) {
    console.error("[GaleX]", a, r.componentStack);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ i("div", { className: "galex gx-crash", role: "alert", children: [
      /* @__PURE__ */ t("h2", { children: "Не удалось отобразить раздел" }),
      /* @__PURE__ */ t("p", { children: "Файлы модов не изменялись. Попробуйте открыть раздел ещё раз." }),
      /* @__PURE__ */ t("pre", { children: this.state.error.message }),
      /* @__PURE__ */ t("button", { className: "gx-button", onClick: () => this.setState({ error: void 0 }), children: "Повторить" })
    ] }) : this.props.children;
  }
}
function W() {
  return window.MILLENNIUM_API;
}
let Ce;
function Mt(e) {
  Ce = e;
}
async function F(e, a = {}) {
  if (!Ce) throw new Error("Backend Millennium не подключён. Перезагрузите плагин GaleX.");
  const r = await Ce(e, a), o = typeof r == "string" ? JSON.parse(r) : r;
  if (!o?.ok) throw new Error(o?.error || "Мост Gale не ответил");
  return o.data;
}
function At() {
  Mt(async (e, a) => {
    const r = W();
    if (!r?.Millennium?.callServerMethod) throw new Error("Millennium API недоступен");
    return r.Millennium.callServerMethod("GaleX", e, { payload: JSON.stringify(a) });
  });
}
const h = {
  snapshot: () => F("snapshot"),
  call: (e, a, r = {}) => F("command", { method: e, args: { slug: a.slug, profileId: a.profileId, ...r } }),
  browserUrl: (e) => F("browser_url", { ...e }),
  dismissLink: (e) => F("dismiss_link", { url: e }),
  global: (e, a = {}) => F("command", { method: e, args: a }),
  getConfig: () => F("get_config"),
  setConfig: (e) => F("set_config", { path: e }),
  restart: () => F("restart")
};
function J(e) {
  const a = new URL(e);
  if (!["https:", "http:"].includes(a.protocol)) throw new Error("Недопустимый адрес браузера");
  const r = W()?.Navigation;
  r?.NavigateToSteamWeb ? r.NavigateToSteamWeb(e) : window.open(e, "_blank", "noopener,noreferrer");
}
function I(e) {
  return e instanceof Error ? e.message : String(e);
}
function z({ children: e, icon: a, primary: r, className: o = "", ...l }) {
  const d = W()?.DialogButton, s = /* @__PURE__ */ i(B, { children: [
    a && /* @__PURE__ */ t(M, { name: a, size: 16 }),
    " ",
    e
  ] }), u = `gx-button ${r ? "gx-button--primary" : ""} ${o}`;
  return d ? /* @__PURE__ */ t(d, { ...l, className: u, children: s }) : /* @__PURE__ */ t("button", { ...l, className: u, children: s });
}
function Me({ icon: e, label: a, ...r }) {
  return /* @__PURE__ */ t("button", { type: "button", ...r, className: `gx-icon-button ${r.className ?? ""}`, "aria-label": a, title: a, children: /* @__PURE__ */ t(M, { name: e, size: 17 }) });
}
function ve({ value: e, onChange: a, options: r, label: o, disabled: l }) {
  const d = W()?.Dropdown;
  return d ? /* @__PURE__ */ t("div", { className: "gx-native-select", children: /* @__PURE__ */ t(d, { disabled: l, menuLabel: o, strDefaultLabel: o, rgOptions: r.map((s) => ({ data: s.value, label: s.label })), selectedOption: e, onChange: (s) => a(s.data) }) }) : /* @__PURE__ */ t("select", { "aria-label": o, value: e, disabled: l, onChange: (s) => a(typeof e == "number" ? Number(s.target.value) : s.target.value), children: r.map((s) => /* @__PURE__ */ t("option", { value: s.value, children: s.label }, s.value)) });
}
function we({ checked: e, onChange: a, label: r, disabled: o }) {
  const l = W()?.Toggle;
  return l ? /* @__PURE__ */ t("div", { className: "gx-toggle", role: "group", "aria-label": r, children: /* @__PURE__ */ t(l, { value: e, onChange: a, disabled: o }) }) : /* @__PURE__ */ i("label", { className: "gx-toggle", children: [
    /* @__PURE__ */ t("input", { type: "checkbox", role: "switch", "aria-label": r, checked: e, disabled: o, onChange: (d) => a(d.target.checked) }),
    /* @__PURE__ */ t("span", { "aria-hidden": "true" })
  ] });
}
function ee({ title: e, children: a, onClose: r, footer: o }) {
  const l = se(null), d = se(r);
  return d.current = r, V(() => {
    const s = document.activeElement, u = l.current, p = () => Array.from(u?.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]') ?? []);
    (u?.querySelector("input,select,textarea") ?? p()[0])?.focus();
    const c = (f) => {
      if (f.key === "Escape" && (f.stopPropagation(), d.current()), f.key === "Tab") {
        const y = p(), g = y[0], x = y[y.length - 1];
        f.shiftKey && document.activeElement === g ? (f.preventDefault(), x?.focus()) : !f.shiftKey && document.activeElement === x && (f.preventDefault(), g?.focus());
      }
    };
    return u?.addEventListener("keydown", c), () => {
      u?.removeEventListener("keydown", c), s?.focus();
    };
  }, []), at(/* @__PURE__ */ t("div", { className: "galex gx-modal-backdrop", onMouseDown: (s) => {
    s.target === s.currentTarget && r();
  }, children: /* @__PURE__ */ i("div", { ref: l, className: "gx-modal DialogPopup_Generic", role: "dialog", "aria-modal": "true", "aria-label": e, children: [
    /* @__PURE__ */ i("header", { children: [
      /* @__PURE__ */ t("h2", { children: e }),
      /* @__PURE__ */ t(Me, { icon: "x", label: "Закрыть", onClick: r })
    ] }),
    /* @__PURE__ */ t("div", { className: "gx-modal-body", children: a }),
    o && /* @__PURE__ */ t("footer", { children: o })
  ] }) }), document.body);
}
function Ve({ title: e, children: a, onClose: r, onConfirm: o, busy: l, danger: d }) {
  return /* @__PURE__ */ t(ee, { title: e, onClose: r, footer: /* @__PURE__ */ i(B, { children: [
    /* @__PURE__ */ t(z, { onClick: r, disabled: l, children: "Отмена" }),
    /* @__PURE__ */ t(z, { primary: !0, className: d ? "gx-danger" : "", onClick: o, disabled: l, children: l ? "Выполняется…" : "Подтвердить" })
  ] }), children: /* @__PURE__ */ t("div", { className: "gx-confirm-copy", children: a }) });
}
function He({ label: e, items: a }) {
  const [r, o] = m(null), l = se(null), d = se(null);
  return V(() => {
    if (!r) return;
    d.current?.querySelector("button:not(:disabled)")?.focus();
    const s = (p) => {
      !d.current?.contains(p.target) && !l.current?.contains(p.target) && o(null);
    }, u = (p) => {
      if (p.key === "Escape" && (o(null), l.current?.focus()), p.key === "ArrowDown" || p.key === "ArrowUp") {
        p.preventDefault();
        const c = Array.from(d.current?.querySelectorAll("button:not(:disabled)") ?? []), f = c.indexOf(document.activeElement);
        c[(f + (p.key === "ArrowDown" ? 1 : -1) + c.length) % c.length]?.focus();
      }
    };
    return document.addEventListener("mousedown", s), document.addEventListener("keydown", u), () => {
      document.removeEventListener("mousedown", s), document.removeEventListener("keydown", u);
    };
  }, [r]), /* @__PURE__ */ i(B, { children: [
    /* @__PURE__ */ t("button", { ref: l, type: "button", className: "gx-icon-button", "aria-label": e, title: e, "aria-haspopup": "menu", "aria-expanded": !!r, onClick: () => {
      if (r) {
        o(null);
        return;
      }
      const s = l.current.getBoundingClientRect();
      o({ top: s.bottom + 5, left: Math.max(8, Math.min(s.right - 224, window.innerWidth - 236)) });
    }, children: /* @__PURE__ */ t(M, { name: "grid", size: 16 }) }),
    r && at(/* @__PURE__ */ t("div", { ref: d, role: "menu", "aria-label": e, className: "galex gx-context-menu", style: r, children: a.map((s) => /* @__PURE__ */ i("button", { role: "menuitem", disabled: s.disabled, className: s.danger ? "gx-text-danger" : "", onClick: () => {
      o(null), s.action();
    }, children: [
      s.icon && /* @__PURE__ */ t(M, { name: s.icon, size: 15 }),
      " ",
      s.label
    ] }, s.label)) }), document.body)
  ] });
}
function ie({ children: e, error: a, onRetry: r }) {
  return /* @__PURE__ */ i("div", { className: `gx-notice ${a ? "gx-notice--error" : ""}`, role: a ? "alert" : "status", children: [
    /* @__PURE__ */ t(M, { name: a ? "warning" : "info", size: 17 }),
    /* @__PURE__ */ t("span", { children: e }),
    r && /* @__PURE__ */ t("button", { onClick: r, children: "Повторить" })
  ] });
}
function _t(e) {
  return e >= 1073741824 ? `${(e / 1073741824).toFixed(1)} ГБ` : e >= 1048576 ? `${(e / 1048576).toFixed(1)} МБ` : `${Math.round(e / 1024)} КБ`;
}
function St({ demo: e = !1 }) {
  const [a, r] = m(), [o, l] = m(), [d, s] = m(""), [u, p] = m(""), [c, f] = m(""), [y, g] = m(!1), x = async () => {
    p("");
    try {
      const [k, A] = await Promise.all([h.snapshot(), h.global("prefs")]);
      l(k), r(A), e || s(await h.getConfig());
    } catch (k) {
      p(I(k));
    }
  };
  V(() => {
    x();
  }, []);
  const C = async (k) => {
    if (!(!a || y)) {
      g(!0), p(""), f("");
      try {
        const A = { ...a, ...k };
        await h.global("set_prefs", { value: A }), r(A), f("Сохранено в Gale");
      } catch (A) {
        p(I(A));
      } finally {
        g(!1);
      }
    }
  }, H = async () => {
    g(!0), p("");
    try {
      await h.setConfig(d.trim()), await h.restart(), f("Путь сохранён. Перезапуск запрошен."), setTimeout(() => void x(), 2500);
    } catch (k) {
      p(I(k));
    } finally {
      g(!1);
    }
  };
  return /* @__PURE__ */ i("section", { className: "galex gx-global-settings", children: [
    /* @__PURE__ */ i("div", { className: "gx-heading", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ t("span", { className: "gx-eyebrow", children: "НАСТРОЙКИ ПЛАГИНА" }),
        /* @__PURE__ */ t("h1", { children: "GaleX" })
      ] }),
      /* @__PURE__ */ t("span", { className: "gx-version-label", children: "Millennium × Gale" })
    ] }),
    /* @__PURE__ */ t("p", { className: "gx-settings-intro", children: "Моды в Steam. Профили, загрузки и конфигурации — в вашем установленном Gale." }),
    u && /* @__PURE__ */ t(ie, { error: !0, onRetry: () => void x(), children: u }),
    c && /* @__PURE__ */ i("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ t(M, { name: "check", size: 15 }),
      c
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ t("h2", { children: "Подключение" }),
      /* @__PURE__ */ i("div", { className: "gx-setting", children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ t("strong", { children: "Headless Gale" }),
          /* @__PURE__ */ t("small", { children: "Запускается и останавливается вместе с плагином" })
        ] }),
        /* @__PURE__ */ i("span", { className: "gx-connection", children: [
          /* @__PURE__ */ t("span", { className: "gx-status-dot" }),
          o ? `Gale ${o.coreVersion}` : "Нет подключения"
        ] })
      ] }),
      !e && /* @__PURE__ */ i(B, { children: [
        /* @__PURE__ */ i("label", { className: "gx-form-label", children: [
          "Путь к headless-сборке Gale",
          /* @__PURE__ */ t("input", { value: d, onChange: (k) => s(k.target.value), placeholder: "Оставьте пустым для сборки внутри плагина" })
        ] }),
        /* @__PURE__ */ t("div", { className: "gx-settings-actions", children: /* @__PURE__ */ t(z, { onClick: () => void H(), disabled: y, children: "Сохранить и перезапустить" }) }),
        /* @__PURE__ */ t("p", { className: "gx-muted", children: "Обычная сборка Gale не содержит мост. Используйте сборку из этого репозитория; она работает с существующими данными Gale." })
      ] }),
      /* @__PURE__ */ t("div", { className: "gx-setting", children: /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ t("strong", { children: "Папка данных Gale" }),
        /* @__PURE__ */ t("small", { children: "Общая база данных и профили. Перенос файлов выполняется в Gale." })
      ] }) }),
      /* @__PURE__ */ t("code", { className: "gx-path", children: o?.dataDir ?? "—" })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ t("h2", { children: "Поведение Gale" }),
      a ? /* @__PURE__ */ i(B, { children: [
        /* @__PURE__ */ i("div", { className: "gx-setting", children: [
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ t("strong", { children: "Загружать каталог автоматически" }),
            /* @__PURE__ */ t("small", { children: "Получать список модов при выборе игры" })
          ] }),
          /* @__PURE__ */ t(we, { label: "Загружать каталог автоматически", checked: a.fetchModsAutomatically, disabled: y, onChange: (k) => void C({ fetchModsAutomatically: k }) })
        ] }),
        /* @__PURE__ */ i("div", { className: "gx-setting", children: [
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ t("strong", { children: "Обновлять синхронизированный профиль перед запуском" }),
            /* @__PURE__ */ t("small", { children: "Использовать настройку pull before launch из Gale" })
          ] }),
          /* @__PURE__ */ t(we, { label: "Обновлять профиль перед запуском", checked: a.pullBeforeLaunch, disabled: y, onChange: (k) => void C({ pullBeforeLaunch: k }) })
        ] }),
        /* @__PURE__ */ i("div", { className: "gx-setting", children: [
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ t("strong", { children: "Пропускать подтверждение смены источника" }),
            /* @__PURE__ */ t("small", { children: "Thunderstore / Hexium — общая настройка Gale" })
          ] }),
          /* @__PURE__ */ t(we, { label: "Пропускать подтверждение источника", checked: a.backendSkipConfirm, disabled: y, onChange: (k) => void C({ backendSkipConfirm: k }) })
        ] })
      ] }) : /* @__PURE__ */ t("p", { className: "gx-muted", children: "Настройки появятся после подключения к Gale." })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-settings-section", children: [
      /* @__PURE__ */ t("h2", { children: "Загрузки" }),
      /* @__PURE__ */ i("div", { className: "gx-setting", children: [
        /* @__PURE__ */ i("div", { children: [
          /* @__PURE__ */ t("strong", { children: "Кэш загрузок" }),
          /* @__PURE__ */ t("small", { children: "Удалить только неиспользуемые файлы. Установленные моды останутся." })
        ] }),
        /* @__PURE__ */ t(z, { disabled: y || !a || o?.installing, onClick: () => void (async () => {
          g(!0);
          try {
            const k = await h.global("clear_download_cache");
            f(`Освобождено ${Math.round(k / 1048576)} МБ`);
          } catch (k) {
            p(I(k));
          } finally {
            g(!1);
          }
        })(), children: "Очистить кэш" })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-settings-bottom", children: [
      /* @__PURE__ */ t("span", { children: "Не запускайте настольный Gale одновременно с GaleX." }),
      /* @__PURE__ */ t(z, { icon: "refresh", disabled: y, onClick: () => void x(), children: "Проверить подключение" })
    ] })
  ] });
}
let Ie = { error: "", loading: !0 };
const de = /* @__PURE__ */ new Set();
let nt, X = !0, ze = !1, oe = 0;
function qe(e) {
  Ie = e, de.forEach((a) => a());
}
async function rt() {
  if (X || ze) return;
  ze = !0;
  const e = oe;
  try {
    const a = await h.snapshot();
    !X && e === oe && qe({ snapshot: a, error: a.ok ? "" : "Мост несовместимой версии", loading: !1 });
  } catch (a) {
    !X && e === oe && qe({ ...Ie, error: I(a), loading: !1 });
  } finally {
    ze = !1, X || (nt = setTimeout(() => void rt(), document.visibilityState === "hidden" ? 15e3 : 3e3));
  }
}
function Et() {
  return X ? (X = !1, oe++, rt(), () => Fe()) : () => Fe();
}
function Fe() {
  X = !0, oe++, clearTimeout(nt);
}
function Ae() {
  return Ie;
}
function Lt() {
  return zt((e) => (de.add(e), () => de.delete(e)), Ae, Ae);
}
function Xe(e, a) {
  return e?.games.find((r) => r.steamAppId === a);
}
function It(e) {
  return de.add(e), () => {
    de.delete(e);
  };
}
function Gt() {
  const { snapshot: e } = Lt(), a = e?.pendingLinks[0], [r, o] = m(), [l, d] = m(), [s, u] = m(), [p, c] = m(""), [f, y] = m(!1);
  if (V(() => {
    if (!a) return;
    let x = !1;
    return o(void 0), c(""), d(void 0), (async () => {
      try {
        const [C, H] = await Promise.all([h.call("profiles", { slug: a.slug }), h.call("resolve_link", { slug: a.slug }, { url: a.url })]);
        x || (d(C), u(C.activeId), o(H));
      } catch (C) {
        x || c(I(C));
      }
    })(), () => {
      x = !0;
    };
  }, [a?.url, a?.slug]), !a) return null;
  const g = () => {
    f || h.dismissLink(a.url).catch((x) => c(I(x)));
  };
  return /* @__PURE__ */ i(ee, { title: "Установка из Thunderstore", onClose: g, footer: /* @__PURE__ */ i(B, { children: [
    /* @__PURE__ */ t(z, { disabled: f, onClick: g, children: "Отмена" }),
    /* @__PURE__ */ t(z, { primary: !0, disabled: f || !r || s === void 0, onClick: () => void (async () => {
      y(!0);
      try {
        await h.call("install_mod", { slug: a.slug, profileId: s }, { id: { packageUuid: r.uuid, versionUuid: r.versionUuid, backend: r.backend } }), await h.dismissLink(a.url);
      } catch (x) {
        c(I(x));
      } finally {
        y(!1);
      }
    })(), children: f ? "Добавление…" : "Установить мод" })
  ] }), children: [
    /* @__PURE__ */ t("span", { className: "gx-eyebrow", children: "ПЕРЕХВАЧЕНА ССЫЛКА ROR2MM" }),
    /* @__PURE__ */ t("h3", { className: "gx-config-file", children: r?.name ?? a.url.split("/").slice(-2, -1)[0] }),
    /* @__PURE__ */ t("p", { className: "gx-muted", children: r ? `${r.author} · версия ${r.version}` : "Проверяем пакет в каталоге Gale…" }),
    l && /* @__PURE__ */ i("div", { className: "gx-import-summary", children: [
      /* @__PURE__ */ t("span", { children: "Профиль установки" }),
      /* @__PURE__ */ t(ve, { label: "Профиль установки", value: s ?? l.activeId, options: l.profiles.map((x) => ({ value: x.id, label: x.name })), onChange: u })
    ] }),
    /* @__PURE__ */ i("p", { className: "gx-muted", children: [
      "Зависимости установит Gale. Игра: ",
      e?.games.find((x) => x.slug === a.slug)?.name ?? a.slug,
      "."
    ] }),
    p && /* @__PURE__ */ t(ie, { error: !0, children: p })
  ] });
}
const Tt = { includeCategories: [], excludeCategories: [], includeNsfw: !1, includeDeprecated: !0, includeDisabled: !0, includeEnabled: !0, sortBy: "name", sortOrder: "ascending" }, je = { mods: [], totalModCount: 0, updates: [], unknownMods: [] };
function Pt({ game: e, demo: a = !1, installing: r = !1 }) {
  const [o, l] = m({ activeId: 0, profiles: [] }), [d, s] = m(), [u, p] = m(je), [c, f] = m(""), [y, g] = m(""), [x, C] = m("all"), [H, k] = m("name"), [A, ce] = m(""), [ye, st] = m(!1), [ke, pe] = m(!0), [Ge, U] = m(""), [ge, G] = m(""), [w, Te] = m(""), [dt, ct] = m(0), [pt, gt] = m(0), [E, T] = m(null), [ae, Q] = m(""), [xe, Ne] = m(""), [P, ne] = m(null), [Pe, xt] = m(""), [D, ue] = m(null), [Z, ut] = m(null), fe = se(!0), S = { slug: e.slug, profileId: d }, O = o.profiles.find((n) => n.id === d), $ = () => ct((n) => n + 1), ft = () => gt((n) => n + 1);
  V(() => (fe.current = !0, () => {
    fe.current = !1;
  }), []), V(() => {
    const n = setTimeout(() => g(c), 220);
    return () => clearTimeout(n);
  }, [c]), V(() => {
    let n = !1;
    return pe(!0), U(""), s(void 0), p(je), f(""), ce(""), C("all"), h.call("profiles", { slug: e.slug }).then((v) => {
      n || (l(v), s(v.activeId));
    }).catch((v) => {
      n || (U(I(v)), pe(!1));
    }), () => {
      n = !0;
    };
  }, [e.slug, pt]), V(() => {
    if (d === void 0) return;
    let n = !1;
    pe(!0);
    const v = { ...Tt, searchTerm: y, includeEnabled: x !== "disabled", includeDisabled: x !== "enabled", includeCategories: A ? [A] : [], sortBy: H, sortOrder: H === "diskSpace" ? "descending" : "ascending" };
    return h.call("mods", { slug: e.slug, profileId: d }, { args: v }).then((N) => {
      n || (p(N), U(""));
    }).catch((N) => {
      n || U(I(N));
    }).finally(() => {
      n || pe(!1);
    }), () => {
      n = !0;
    };
  }, [e.slug, d, y, x, H, A, dt]), V(() => {
    if (!ge) return;
    const n = setTimeout(() => G(""), 4500);
    return () => clearTimeout(n);
  }, [ge]);
  const re = u.updates.filter((n) => !n.ignore), De = x === "updates" ? u.mods.filter((n) => re.some((v) => v.updatedId.packageUuid === n.data.uuid)) : u.mods, $e = et(() => Array.from(new Set(u.mods.flatMap((n) => n.data.categories ?? []))).sort(), [u.mods]), mt = u.mods.filter((n) => n.enabled).length, _ = Nt(async (n, v) => {
    if (!w) {
      Te(n), U("");
      try {
        await v();
      } catch (N) {
        fe.current && U(I(N));
      } finally {
        fe.current && Te("");
      }
    }
  }, [w]), me = async (n, v = {}) => {
    await h.call(n, S, v);
    const N = await h.call("profiles", { slug: e.slug }), L = n === "create_profile" || n === "import_profile" ? N.profiles.reduce((he, Be) => Be.id > he.id ? Be : he, N.profiles[0]) : void 0;
    L && await h.call("activate_profile", { slug: e.slug, profileId: L.id }), l(N), s(L?.id ?? N.activeId), T(null), Q(""), ne(null), $(), G("Профиль сохранён");
  }, ht = (n) => void _(n.data.uuid, async () => {
    const v = await h.call("toggle_mod", S, { uuid: n.data.uuid });
    v.type === "confirm" ? ue({ title: `Отключить ${n.data.name}?`, description: "От этого мода зависят другие включённые моды. Они тоже могут перестать работать.", uuids: [n.data.uuid, ...v.dependants.map((N) => N.uuid)], kind: "toggle", force: !0 }) : $();
  }), bt = () => {
    D && _("confirm", async () => {
      await h.call(D.kind === "toggle" ? "force_toggle_mods" : "force_remove_mods", S, { uuids: [...new Set(D.uuids)] }), ue(null), $(), G(D.kind === "toggle" ? "Состояние модов изменено" : "Мод удалён");
    });
  }, Re = (n) => void _("browser", async () => {
    const v = await h.browserUrl(S);
    J(v.url);
  }), vt = () => {
    a ? window.dispatchEvent(new CustomEvent("galex:demo-config")) : Re();
  }, wt = () => void _("import", async () => {
    if (P) {
      await me("import_profile", { data: P });
      return;
    }
    if (!xe.trim()) throw new Error("Вставьте код профиля или выберите файл .r2z");
    const n = await h.call("read_profile_code", S, { code: xe.trim() });
    ne(n);
  }), yt = () => void _("export", async () => {
    const n = await h.call("export_code", S);
    if (n.type === "success" && n.code) {
      xt(n.code), T("export");
      return;
    }
    const v = await h.browserUrl({ ...S, kind: "export" });
    J(v.url), G("Большой профиль экспортируется файлом .r2z");
  }), kt = () => void _("update", async () => {
    await h.call("update_mods", S, { uuids: re.map((n) => n.updatedId.packageUuid) }), G(a ? "Демо: обновления установлены" : "Обновление добавлено в очередь Gale"), $();
  }), q = () => {
    w || (T(null), ne(null), Q(""), Ne(""));
  };
  return /* @__PURE__ */ i("section", { className: "galex gx-mods", "aria-label": "Моды", "data-appid": e.steamAppId, children: [
    /* @__PURE__ */ i("div", { className: "gx-heading", children: [
      /* @__PURE__ */ i("div", { children: [
        /* @__PURE__ */ t("span", { className: "gx-eyebrow", children: "МАСТЕРСКАЯ СООБЩЕСТВА" }),
        /* @__PURE__ */ i("h1", { children: [
          "Моды ",
          /* @__PURE__ */ t("span", { children: e.name })
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "gx-heading-meta", children: [
        /* @__PURE__ */ t("span", { className: "gx-status-dot" }),
        " Gale ",
        a ? "· демо" : "подключён"
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-toolbar", children: [
      /* @__PURE__ */ t(z, { primary: !0, icon: "external", onClick: () => J(`https://thunderstore.io/c/${encodeURIComponent(e.slug)}/`), children: "Открыть Thunderstore" }),
      /* @__PURE__ */ i(z, { icon: "settings", onClick: () => st((n) => !n), "aria-expanded": ye, children: [
        "Расширенные настройки ",
        /* @__PURE__ */ t(M, { name: ye ? "chevron-down" : "chevron-right", size: 13 })
      ] }),
      /* @__PURE__ */ t("span", { className: "gx-toolbar-spacer" }),
      /* @__PURE__ */ t(Me, { icon: "refresh", label: "Обновить список", onClick: () => {
        ft(), $();
      }, disabled: !!w })
    ] }),
    ye && /* @__PURE__ */ i("div", { className: "gx-advanced", children: [
      /* @__PURE__ */ i("div", { className: "gx-profile-line", children: [
        /* @__PURE__ */ t("span", { className: "gx-field-label", children: "Профиль" }),
        /* @__PURE__ */ t("div", { className: "gx-profile-select", children: /* @__PURE__ */ t(ve, { label: "Профиль", value: d ?? 0, disabled: !!w || !o.profiles.length, options: o.profiles.map((n) => ({ value: n.id, label: n.name })), onChange: (n) => void _("profile", async () => {
          await h.call("activate_profile", { slug: e.slug, profileId: n }), s(n), $();
        }) }) }),
        /* @__PURE__ */ t(He, { label: "Управление профилями", items: [
          { label: "Создать профиль", icon: "plus", action: () => {
            Q(""), T("create");
          } },
          { label: "Переименовать", icon: "sliders", disabled: !O, action: () => {
            Q(O?.name ?? ""), T("rename");
          } },
          { label: "Дублировать", icon: "copy", disabled: !O, action: () => {
            Q(`${O?.name} — копия`), T("duplicate");
          } },
          { label: "Удалить профиль", icon: "trash", danger: !0, disabled: o.profiles.length < 2, action: () => T("delete") }
        ] })
      ] }),
      /* @__PURE__ */ i("div", { className: "gx-profile-actions", children: [
        /* @__PURE__ */ t(z, { icon: "download", disabled: !O || !!w, onClick: () => {
          Ne(""), ne(null), T("import");
        }, children: "Импорт" }),
        /* @__PURE__ */ t(z, { icon: "external", disabled: !O || !!w, onClick: yt, children: "Экспорт" }),
        /* @__PURE__ */ t(z, { icon: "sliders", disabled: !O || !!w, onClick: vt, children: "Конфиг" })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-search-row", children: [
      /* @__PURE__ */ i("label", { className: "gx-search", children: [
        /* @__PURE__ */ t(M, { name: "search", size: 17 }),
        /* @__PURE__ */ t("input", { "aria-label": "Поиск модов", placeholder: "Поиск по названию или автору", value: c, onChange: (n) => f(n.target.value) }),
        c && /* @__PURE__ */ t("button", { "aria-label": "Очистить поиск", onClick: () => f(""), children: /* @__PURE__ */ t(M, { name: "x", size: 13 }) })
      ] }),
      /* @__PURE__ */ t(ve, { label: "Сортировка", value: H, onChange: k, options: [{ value: "name", label: "По названию" }, { value: "author", label: "По автору" }, { value: "installDate", label: "По дате установки" }, { value: "diskSpace", label: "По размеру" }] }),
      /* @__PURE__ */ t(ve, { label: "Фильтр модов", value: x, onChange: C, options: [{ value: "all", label: "Все моды" }, { value: "enabled", label: "Включённые" }, { value: "disabled", label: "Отключённые" }, { value: "updates", label: "Есть обновления" }] })
    ] }),
    $e.length > 0 && /* @__PURE__ */ i("div", { className: "gx-categories", children: [
      /* @__PURE__ */ t("button", { className: A ? "" : "is-active", onClick: () => ce(""), children: "Все категории" }),
      $e.map((n) => /* @__PURE__ */ t("button", { className: A === n ? "is-active" : "", onClick: () => ce(n), children: n }, n))
    ] }),
    /* @__PURE__ */ i("div", { className: "gx-list-heading", children: [
      /* @__PURE__ */ i("span", { children: [
        u.totalModCount,
        " модов ",
        /* @__PURE__ */ t("span", { className: "gx-dot", children: "·" }),
        " ",
        mt,
        " включено"
      ] }),
      !!re.length && /* @__PURE__ */ i("button", { className: "gx-update-link", disabled: !!w || r, onClick: kt, children: [
        /* @__PURE__ */ t(M, { name: "refresh", size: 13 }),
        w === "update" ? "Обновление…" : `Обновить все (${re.length})`
      ] }),
      /* @__PURE__ */ t("span", { className: "gx-toolbar-spacer" }),
      /* @__PURE__ */ i("span", { className: "gx-list-hint", children: [
        "Профиль: ",
        O?.name ?? "—"
      ] })
    ] }),
    Ge && /* @__PURE__ */ t(ie, { error: !0, onRetry: $, children: Ge }),
    ge && /* @__PURE__ */ i("div", { className: "gx-success", role: "status", children: [
      /* @__PURE__ */ t(M, { name: "check", size: 15 }),
      ge
    ] }),
    (r || w === "update") && /* @__PURE__ */ i("div", { className: "gx-install-progress", role: "status", children: [
      /* @__PURE__ */ t("span", {}),
      /* @__PURE__ */ t(M, { name: "download", size: 15 }),
      " Gale устанавливает моды. Не закрывайте Steam."
    ] }),
    !!u.unknownMods.length && /* @__PURE__ */ i(ie, { error: !0, children: [
      "Не найдены в кэше: ",
      u.unknownMods.map((n) => n.fullName).join(", "),
      ". Обновите каталог в расширенных настройках."
    ] }),
    /* @__PURE__ */ t("div", { className: `gx-mod-list ${ke ? "is-loading" : ""}`, "aria-busy": ke, children: ke && !u.mods.length ? /* @__PURE__ */ i("div", { className: "gx-empty", children: [
      /* @__PURE__ */ t(M, { name: "refresh", size: 26 }),
      /* @__PURE__ */ t("h3", { children: "Загружаем моды…" })
    ] }) : De.length ? De.map((n, v) => {
      const N = re.find((L) => L.updatedId.packageUuid === n.data.uuid);
      return /* @__PURE__ */ i("article", { className: `gx-mod-row ${n.enabled ? "" : "is-disabled"}`, children: [
        /* @__PURE__ */ t(we, { label: `Включить ${n.data.name}`, checked: n.enabled, disabled: !!w || r, onChange: () => ht(n) }),
        /* @__PURE__ */ i("div", { className: `gx-mod-avatar gx-avatar-${v % 6}`, "aria-hidden": "true", children: [
          n.data.name.split(" ").map((L) => L[0]).slice(0, 2).join(""),
          /* @__PURE__ */ t("span", {})
        ] }),
        /* @__PURE__ */ i("div", { className: "gx-mod-info", children: [
          /* @__PURE__ */ i("div", { className: "gx-mod-title", children: [
            /* @__PURE__ */ t("h3", { children: n.data.name }),
            N && /* @__PURE__ */ t("span", { className: "gx-update-badge", children: "Обновление" }),
            n.data.type === "local" && /* @__PURE__ */ t("span", { className: "gx-local-badge", children: "Локальный" })
          ] }),
          /* @__PURE__ */ t("p", { children: n.data.description }),
          /* @__PURE__ */ i("div", { className: "gx-mod-byline", children: [
            n.data.author ?? "Локальный мод",
            /* @__PURE__ */ t("span", { children: "·" }),
            n.data.categories?.[0] ?? "Мод"
          ] })
        ] }),
        /* @__PURE__ */ i("div", { className: "gx-version", children: [
          /* @__PURE__ */ i("span", { children: [
            "v",
            n.data.version ?? "—"
          ] }),
          /* @__PURE__ */ t("small", { children: _t(n.data.fileSize) })
        ] }),
        /* @__PURE__ */ t(He, { label: `Действия с ${n.data.name}`, items: [
          ...N ? [{ label: `Обновить до ${N.new}`, icon: "refresh", action: () => void _("update", async () => {
            await h.call("update_mods", S, { uuids: [n.data.uuid] }), $(), G("Обновление добавлено в очередь");
          }) }] : [],
          { label: "Настроить конфиг", icon: "sliders", disabled: !n.configFile, action: () => void Re() },
          { label: "Версия мода", icon: "layers", action: () => {
            ut(n), T("versions");
          } },
          { label: "Страница на Thunderstore", icon: "external", disabled: n.data.type === "local", action: () => J(`https://thunderstore.io/c/${e.slug}/p/${n.data.author}/${n.data.name.replace(/ /g, "_")}/`) },
          { label: "Удалить мод", icon: "trash", danger: !0, action: () => void _(n.data.uuid, async () => {
            const L = await h.call("remove_mod", S, { uuid: n.data.uuid });
            L.type === "confirm" ? ue({ title: `Удалить ${n.data.name}?`, description: "Мод и его файлы будут удалены из профиля. Зависимые моды могут перестать работать.", kind: "remove", force: !0, uuids: [n.data.uuid, ...L.dependants.map((he) => he.uuid)] }) : ($(), G("Мод удалён"));
          }) }
        ] })
      ] }, n.data.uuid);
    }) : /* @__PURE__ */ i("div", { className: "gx-empty", children: [
      /* @__PURE__ */ t(M, { name: "package", size: 32 }),
      /* @__PURE__ */ t("h3", { children: c || x !== "all" || A ? "Ничего не найдено" : "В этом профиле пока нет модов" }),
      /* @__PURE__ */ t("p", { children: c || x !== "all" || A ? "Попробуйте другой запрос или сбросьте фильтры." : "Найдите первый мод на Thunderstore и установите его в один клик." }),
      /* @__PURE__ */ t(z, { onClick: () => {
        c || x !== "all" || A ? (f(""), C("all"), ce("")) : J(`https://thunderstore.io/c/${e.slug}/`);
      }, children: c || x !== "all" || A ? "Сбросить фильтры" : "Открыть Thunderstore" })
    ] }) }),
    /* @__PURE__ */ i("footer", { className: "gx-footer", children: [
      /* @__PURE__ */ i("span", { children: [
        /* @__PURE__ */ t(M, { name: "layers", size: 13 }),
        " Общие профили и файлы Gale"
      ] }),
      /* @__PURE__ */ t("button", { onClick: () => void _("fetch", async () => {
        await h.call("fetch_mods", S), G("Обновление каталога запрошено");
      }), disabled: !!w, children: "Обновить каталог" })
    ] }),
    D && /* @__PURE__ */ i(Ve, { title: D.title, onClose: () => ue(null), onConfirm: bt, busy: !!w, danger: D.kind === "remove", children: [
      D.description,
      D.uuids.length > 1 && /* @__PURE__ */ i("p", { children: [
        "Будет затронуто модов: ",
        new Set(D.uuids).size,
        "."
      ] })
    ] }),
    E && ["create", "rename", "duplicate"].includes(E) && /* @__PURE__ */ t(ee, { title: E === "create" ? "Новый профиль" : E === "rename" ? "Переименовать профиль" : "Дублировать профиль", onClose: q, footer: /* @__PURE__ */ i(B, { children: [
      /* @__PURE__ */ t(z, { onClick: q, disabled: !!w, children: "Отмена" }),
      /* @__PURE__ */ t(z, { primary: !0, disabled: !ae.trim() || !!w, onClick: () => void _("profile", () => me(E === "create" ? "create_profile" : E === "rename" ? "rename_profile" : "duplicate_profile", { name: ae.trim() })), children: w ? "Сохранение…" : "Сохранить" })
    ] }), children: /* @__PURE__ */ i("label", { className: "gx-form-label", children: [
      "Название профиля",
      /* @__PURE__ */ t("input", { value: ae, maxLength: 80, onChange: (n) => Q(n.target.value), placeholder: "Например, Игра с друзьями", onKeyDown: (n) => {
        n.key === "Enter" && ae.trim() && !w && _("profile", () => me(E === "create" ? "create_profile" : E === "rename" ? "rename_profile" : "duplicate_profile", { name: ae.trim() }));
      } })
    ] }) }),
    E === "delete" && /* @__PURE__ */ i(Ve, { title: "Удалить профиль?", danger: !0, onClose: q, busy: !!w, onConfirm: () => void _("profile", () => me("delete_profile", { id: d })), children: [
      "Профиль «",
      O?.name,
      "» и его моды будут удалены. Это действие нельзя отменить."
    ] }),
    E === "import" && /* @__PURE__ */ t(ee, { title: P ? "Проверьте профиль" : "Импорт профиля", onClose: q, footer: /* @__PURE__ */ i(B, { children: [
      /* @__PURE__ */ t(z, { onClick: q, disabled: !!w, children: "Отмена" }),
      /* @__PURE__ */ t(z, { primary: !0, onClick: wt, disabled: !!w || !xe && !P, children: w ? "Импорт…" : P ? "Установить профиль" : "Продолжить" })
    ] }), children: P ? /* @__PURE__ */ i(B, { children: [
      /* @__PURE__ */ t("p", { children: "Будет создан отдельный профиль. Текущий профиль не изменится." }),
      /* @__PURE__ */ i("div", { className: "gx-import-summary", children: [
        /* @__PURE__ */ t("strong", { children: P.manifest.name || "Импортированный профиль" }),
        /* @__PURE__ */ i("span", { children: [
          P.manifest.mods.length,
          " модов"
        ] })
      ] }),
      !!P.missingMods.length && /* @__PURE__ */ i(ie, { error: !0, children: [
        "Не найдены: ",
        P.missingMods.join(", "),
        ". Эти моды будут пропущены."
      ] })
    ] }) : /* @__PURE__ */ i(B, { children: [
      /* @__PURE__ */ i("label", { className: "gx-form-label", children: [
        "Код профиля",
        /* @__PURE__ */ t("textarea", { value: xe, onChange: (n) => Ne(n.target.value), placeholder: "Вставьте код экспорта Gale / r2modman", rows: 3 })
      ] }),
      /* @__PURE__ */ t("div", { className: "gx-or", children: "или" }),
      /* @__PURE__ */ i("label", { className: "gx-file-button", children: [
        /* @__PURE__ */ t(M, { name: "folder", size: 17 }),
        " Выбрать файл .r2z",
        /* @__PURE__ */ t("input", { type: "file", accept: ".r2z,.zip", onChange: (n) => {
          const v = n.target.files?.[0];
          if (!v) return;
          if (v.size > 15 * 1024 * 1024) {
            U("Максимальный размер файла — 15 МиБ");
            return;
          }
          const N = new FileReader();
          N.onload = () => void _("import", async () => {
            const L = String(N.result).split(",")[1] ?? "";
            ne(await h.call("read_profile_base64", S, { base64: L }));
          }), N.onerror = () => U("Не удалось прочитать файл"), N.readAsDataURL(v);
        } })
      ] })
    ] }) }),
    E === "export" && /* @__PURE__ */ i(ee, { title: "Экспорт профиля", onClose: q, footer: /* @__PURE__ */ t(z, { primary: !0, onClick: q, children: "Готово" }), children: [
      /* @__PURE__ */ t("p", { children: "Поделитесь кодом, чтобы другой пользователь установил этот профиль." }),
      /* @__PURE__ */ i("div", { className: "gx-export-code", children: [
        /* @__PURE__ */ t("code", { children: Pe }),
        /* @__PURE__ */ t(Me, { icon: "copy", label: "Скопировать код", onClick: () => {
          navigator.clipboard.writeText(Pe).then(() => G("Код скопирован")).catch(() => U("Выделите код и скопируйте вручную"));
        } })
      ] }),
      !a && /* @__PURE__ */ t(z, { icon: "download", onClick: () => void _("export-file", async () => {
        const { url: n } = await h.browserUrl({ ...S, kind: "export" });
        J(n);
      }), children: "Скачать файл .r2z" })
    ] }),
    E === "versions" && Z && /* @__PURE__ */ i(ee, { title: `Версия · ${Z.data.name}`, onClose: q, children: [
      /* @__PURE__ */ i("p", { children: [
        "Текущая версия: ",
        Z.data.version,
        ". Смена версии использует установщик Gale."
      ] }),
      /* @__PURE__ */ t("div", { className: "gx-version-list", children: Z.data.versions.map((n) => /* @__PURE__ */ i(z, { disabled: !!w || n.uuid === Z.data.versionUuid, icon: n.uuid === Z.data.versionUuid ? "check" : "layers", onClick: () => void _("version", async () => {
        await h.call("change_mod_version", S, { id: { packageUuid: Z.data.uuid, versionUuid: n.uuid, backend: Z.data.backend } }), T(null), $(), G("Версия поставлена в очередь");
      }), children: [
        n.name,
        n.uuid === Z.data.versionUuid ? " · установлена" : ""
      ] }, n.uuid)) })
    ] })
  ] });
}
const Dt = ["general", "общие", "allgemein", "général"], $t = ["local files", "локальные файлы", "lokale dateien", "fichiers locaux", "dlc", "updates", "обновления"], le = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
function Rt(e) {
  const a = [e, ...Array.from(e.querySelectorAll("*")).slice(0, 80)];
  for (const d of a) {
    const s = Object.keys(d).find((p) => p.startsWith("__reactFiber$") || p.startsWith("__reactInternalInstance$"));
    let u = s ? d[s] : void 0;
    for (let p = 0; u && p < 30; p++, u = u.return) {
      const c = u.memoizedProps ?? u.pendingProps;
      for (const f of [c?.appid, c?.appId, c?.overview?.appid, c?.appOverview?.appid, c?.app?.appid, c?.m_appOverview?.appid, c?.m_appOverview?.m_unAppID])
        if (Number.isSafeInteger(f) && f > 0 && f < 1e8) return f;
    }
  }
  const r = (e.matches("[data-appid]") ? e : e.querySelector("[data-appid]"))?.getAttribute("data-appid") ?? void 0;
  if (r && /^\d+$/.test(r)) return Number(r);
  const l = (e.ownerDocument.defaultView?.location.pathname ?? "").match(/\/(?:library\/app|properties)\/(\d+)/);
  if (l) return Number(l[1]);
  for (const d of Array.from(e.querySelectorAll("img"))) {
    const s = d.src.match(/\/(?:apps|assets)\/(\d{2,9})\//);
    if (s) return Number(s[1]);
  }
}
function Bt(e) {
  const a = [...Array.from(e.querySelectorAll('[role="tablist"]')), ...Array.from(e.querySelectorAll('nav,aside,[class*="TabList"]'))];
  for (const r of a) {
    const o = Array.from(r.querySelectorAll('[role="tab"],button,a')).filter((d) => d.parentElement === r || d.parentElement?.parentElement === r), l = o.map((d) => d.textContent?.trim().toLowerCase() ?? "");
    if (o.length >= 3 && l.some((d) => Dt.includes(d)) && l.some((d) => $t.includes(d))) return { list: r, tabs: o };
  }
}
function Ut(e) {
  return Array.from(e.dialog.querySelectorAll('[role="tabpanel"],[class*="TabPanel"],[class*="tab-panel"]')).filter((a) => a !== e.panel && !a.contains(e.panel) && !a.hasAttribute("data-galex-properties"));
}
function _e(e) {
  for (const a of Ut(e))
    e.hidden.has(a) || e.hidden.set(a, { display: a.style.display, hidden: a.hidden }), a.style.display !== "none" && (a.style.display = "none");
}
function Zt(e) {
  e.hidden.forEach((a, r) => {
    r.style.display = a.display, r.hidden = a.hidden;
  }), e.hidden.clear();
}
function it(e) {
  e.active && (e.active = !1, e.panel.hidden = !0, e.tab.setAttribute("aria-selected", "false"), e.tab.classList.remove("gx-tab-active"), Zt(e));
}
function Ot(e) {
  if (e.active) {
    _e(e), e.panel.hidden = !1;
    return;
  }
  _e(e), e.dialog.querySelectorAll('[role="tab"]').forEach((a) => {
    a !== e.tab && a.setAttribute("aria-selected", "false");
  }), e.active = !0, e.panel.hidden = !1, e.tab.setAttribute("aria-selected", "true"), e.tab.classList.add("gx-tab-active");
}
function We(e, a, r) {
  e.root.render(j(Le, null, j(Pt, { key: `${e.slug}-${e.appid}`, game: a, installing: r })));
}
function Se(e) {
  it(e), e.list.removeEventListener("click", e.onNativeClick, !0), le.delete(e.dialog);
  const { root: a, tab: r, panel: o } = e;
  queueMicrotask(() => {
    try {
      a.unmount();
    } catch {
    }
    r.remove(), o.remove();
  });
}
function ot(e) {
  const { snapshot: a } = Ae();
  for (const [o, l] of Array.from(le)) {
    if (!e.contains(o)) continue;
    if (!o.isConnected || !l.tab.isConnected || !l.list.isConnected) {
      Se(l);
      continue;
    }
    const d = a?.ok ? Xe(a, l.appid) : void 0;
    if (!d) {
      Se(l);
      continue;
    }
    l.active && _e(l), We(l, d, a.installing);
  }
  if (!a?.ok) return;
  const r = Array.from(e.querySelectorAll('[role="dialog"],[class*="AppProperties"],[class*="app-properties"]'));
  for (const o of r) {
    if (le.has(o) || o.querySelector("[data-galex-properties]")) continue;
    const l = Bt(o);
    if (!l) continue;
    const d = Rt(o), s = Xe(a, d ?? -1);
    if (!s) continue;
    const p = (l.tabs.find((x) => /workshop|мастерская/i.test(x.textContent ?? "")) ?? l.tabs[0]).cloneNode(!0);
    p.removeAttribute("id"), p.removeAttribute("href"), p.setAttribute("role", "tab"), p.setAttribute("aria-selected", "false"), p.setAttribute("data-galex-properties", "tab"), p.id = `galex-tab-${d}`, p.setAttribute("aria-controls", `galex-panel-${d}`), p.textContent = "Моды", p.tagName === "A" && p.setAttribute("href", "#galex-mods"), l.list.appendChild(p);
    const c = e.createElement("div");
    c.id = `galex-panel-${d}`, c.setAttribute("role", "tabpanel"), c.setAttribute("aria-labelledby", p.id), c.setAttribute("data-galex-properties", "panel"), c.className = "gx-injected-panel", c.hidden = !0, c.style.flex = "1", c.style.minHeight = "0", c.style.overflow = "hidden";
    const f = o.querySelector('[role="tabpanel"]');
    f?.parentElement ? f.parentElement.appendChild(c) : l.list.parentElement?.appendChild(c);
    const y = tt(c), g = { dialog: o, list: l.list, tab: p, panel: c, root: y, appid: s.steamAppId, slug: s.slug, active: !1, hidden: /* @__PURE__ */ new Map(), onNativeClick: (x) => {
      const C = x.target;
      C?.closest?.('[data-galex-properties="tab"]') || C?.closest?.('[role="tab"],button,a') && it(g);
    } };
    le.set(o, g), We(g, s, a.installing), p.addEventListener("click", (x) => {
      x.preventDefault(), x.stopPropagation(), Ot(g);
    }), l.list.addEventListener("click", g.onNativeClick, !0);
  }
}
function Qe(e) {
  const a = K.get(e);
  !a || a.timer || (a.timer = window.setTimeout(() => {
    a.timer = 0, ot(e);
  }, 180));
}
function Je(e = document) {
  if (K.has(e)) return K.get(e).dispose;
  const a = new MutationObserver(() => Qe(e));
  a.observe(e.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["role", "data-appid", "src", "style", "hidden"] });
  const r = () => {
    const o = K.get(e);
    o?.timer && clearTimeout(o.timer), a.disconnect();
    for (const [l, d] of Array.from(le))
      e.contains(l) && Se(d);
    K.delete(e);
  };
  return K.set(e, { observer: a, timer: 0, dispose: r }), Qe(e), r;
}
function Vt(e = document) {
  ot(e);
}
const R = "GaleX";
function lt() {
  return { title: "GaleX", icon: j(M, { name: "package", size: 18 }), content: j(Le, null, j(St)) };
}
function Ht() {
  window.__GALEX_STEAM__ && window.__GALEX_STEAM__.dispose(), At();
  const e = [], a = [], r = Et();
  e.push(r);
  const o = lt(), l = window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[R], d = window.PLUGIN_LIST?.[R];
  (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS ??= {})[R] = o, (window.PLUGIN_LIST ??= {})[R] = { ...d, ...o };
  let s = !1;
  const u = document.createElement("div");
  u.id = "galex-steam-events", document.body.appendChild(u);
  const p = tt(u);
  a.push(p), p.render(j(Le, null, j(Gt)));
  const c = /* @__PURE__ */ new Set([document]), f = (g) => {
    c.has(g) || (c.add(g), Ye(Ke, g), e.push(Je(g)));
  };
  e.push(Je(document));
  try {
    window.Millennium?.AddWindowCreateHook?.((g) => {
      if (s) return;
      const x = g?.window?.document ?? g?.document ?? g?.BrowserWindow?.document ?? g?.m_popup?.window?.document ?? g?.m_popup?.document ?? g?.m_BrowserWindow?.document;
      if (x?.body)
        try {
          f(x);
        } catch (C) {
          console.warn("[GaleX] Cannot inspect property window", C);
        }
    });
  } catch (g) {
    console.warn("[GaleX] Window hook unavailable", g);
  }
  e.push(It(() => {
    for (const g of c)
      try {
        Vt(g);
      } catch {
      }
  }));
  const y = () => {
    s || (s = !0, e.reverse().forEach((g) => {
      try {
        g();
      } catch {
      }
    }), a.forEach((g) => g.unmount()), u.remove(), l === void 0 ? delete window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS?.[R] : window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS[R] = l, d === void 0 ? delete window.PLUGIN_LIST?.[R] : window.PLUGIN_LIST[R] = d, delete window.__GALEX_STEAM__);
  };
  return window.__GALEX_STEAM__ = { dispose: y }, window.GaleX = { openSettings: () => {
    W()?.openQuickAccess?.({ plugin: R }) ?? window.Millennium?.openQuickAccess?.({ plugin: R });
  }, openProperties: () => W()?.Navigation?.NavigateToAppProperties?.(), dispose: y }, o;
}
const qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  mountIntoSteam: Ht,
  pluginSettings: lt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ft as default
};
