#!/usr/bin/env python3
"""Reproducible, pinned Gale source + minimal headless adapter. No data migration.

Downloads only from codeload.github.com; verifies SHA-256. Refuses drifting
upstream anchors instead of silently patching the wrong code. Never touches
Gale's database, profiles or preferences. Python 3.9+, no dependencies.
"""
from __future__ import annotations

from pathlib import Path
import argparse
import hashlib
import io
import json
import shutil
import tarfile
import urllib.request

COMMIT = '4d401b6cf9857a92c16e8c1a39ec51e7852415cb'
SHA256 = 'd38c465bbe3bc1de19db49f2ce5c061d00d3b0198b46b80fa74538f10781e329'
ROOT = Path(__file__).resolve().parent
URL = f'https://codeload.github.com/Kesomannen/gale/tar.gz/{COMMIT}'
ADAPTER_FILES = ('headless.rs', 'session_lock.rs', 'config.html', 'config.js', 'config.css')


def replace(text: str, old: str, new: str) -> str:
    if text.count(old) != 1:
        raise RuntimeError(f'Upstream anchor changed or is ambiguous: {old[:100]!r}')
    return text.replace(old, new, 1)


def copy_adapter(source: Path) -> None:
    rust = source / 'src-tauri/src'
    digest = hashlib.sha256()
    for name in ADAPTER_FILES:
        payload = (ROOT / 'gale' / name).read_bytes()
        digest.update(payload)
        (rust / name).write_bytes(payload)
    shutil.copyfile(ROOT / 'gale/LICENSE.gale.md', source / 'LICENSE.gale.md')
    (source / 'GALEX_HEADLESS.md').write_text(
        f'Gale {COMMIT} + GaleX bridge v2. GPL-3.0. See LICENSE.gale.md.\n'
        'Run via the Millennium plugin. GALEX_HEADLESS=1 requires a private session file, token and parent PID.\n'
        f'Adapter SHA256: {digest.hexdigest()}\n'
    )


def refresh(source: Path) -> None:
    """Refresh adapter-owned files in an already prepared, patched tree.

    The upstream checkout and Cargo target directory are left in place, so
    `git pull` + build does not keep compiling a stale headless.rs. Refuse trees
    that do not carry the integration anchors instead of half-patching them.
    """
    rust = source / 'src-tauri/src'
    required = {
        rust / 'lib.rs': ('mod headless;', 'mod session_lock;', 'headless::start(app.handle())'),
        rust / 'state.rs': ('_session_lock: crate::session_lock::SessionLock', 'crate::session_lock::acquire()'),
        source / 'src-tauri/Cargo.toml': ('axum = "0.8"', 'fs4 = { version = "0.13"', 'percent-encoding = "2"'),
    }
    for path, needles in required.items():
        if not path.is_file():
            raise RuntimeError(f'{path} is missing; prepare a fresh Gale source tree')
        text = path.read_text()
        for needle in needles:
            if needle not in text:
                raise RuntimeError(f'{path} is not a GaleX-prepared tree (missing {needle!r}); use a fresh build directory')
    copy_adapter(source)


def apply(source: Path) -> None:
    rust = source / 'src-tauri/src'
    lib = (rust / 'lib.rs').read_text()
    lib = replace(lib, 'mod cli;', 'mod cli;\nmod headless;\nmod session_lock;')
    lib = replace(lib, '    if let Err(err) = state::setup(app.handle()) {',
                  '    if headless::enabled() {\n        if let Some(window) = tauri::Manager::get_webview_window(app, "main") { window.hide().ok(); }\n        if let Err(error) = headless::start(app.handle()) { tracing::error!("GaleX headless startup: {error:#}"); app.handle().exit(1); }\n    }\n\n    if let Err(err) = state::setup(app.handle()) {')
    # headless::start only uses the already initialized app handle and config;
    # begin listening after Gale state setup, before CLI processing.
    start = '    if headless::enabled() {\n        if let Some(window) = tauri::Manager::get_webview_window(app, "main") { window.hide().ok(); }\n        if let Err(error) = headless::start(app.handle()) { tracing::error!("GaleX headless startup: {error:#}"); app.handle().exit(1); }\n    }\n\n'
    lib = lib.replace(start, '    if headless::enabled() {\n        if let Some(window) = tauri::Manager::get_webview_window(app, "main") { window.hide().ok(); }\n    }\n\n', 1)
    lib = replace(lib, '    if let Err(err) = app.deep_link().register("ror2mm") {',
                  '    if headless::enabled() {\n        if let Err(error) = headless::start(app.handle()) { tracing::error!("GaleX headless startup: {error:#}"); app.handle().exit(1); return Ok(()); }\n    }\n\n    if let Err(err) = app.deep_link().register("ror2mm") {')
    # A separate headless process must not hand its arguments to the GUI and
    # exit. The shared file lock, not single-instance IPC, arbitrates writers.
    lib = replace(lib, '        .plugin(tauri_plugin_single_instance::init(handle_single_instance))',
                  '        .plugin(tauri_plugin_single_instance::init(|app, args, cwd| { if !headless::enabled() { handle_single_instance(app, args, cwd); } }))')
    lib = replace(lib, '        .setup(setup)\n        .build(tauri::generate_context!())',
                  '        .setup(setup)\n        .build({ let mut context = tauri::generate_context!(); if headless::enabled() { for window in &mut context.config_mut().app.windows { window.visible = false; } } context })')
    (rust / 'lib.rs').write_text(lib)
    state = (rust / 'state.rs').read_text()
    state = replace(state, 'pub struct AppState {', 'pub struct AppState {\n    _session_lock: crate::session_lock::SessionLock,')
    state = replace(state, 'pub fn setup(app: &AppHandle) -> Result<()> {', 'pub fn setup(app: &AppHandle) -> Result<()> {\n    let session_lock = crate::session_lock::acquire()?;')
    state = replace(state, '    let state = AppState {\n        db,', '    let state = AppState {\n        _session_lock: session_lock,\n        db,')
    (rust / 'state.rs').write_text(state)
    cargo = source / 'src-tauri/Cargo.toml'
    text = cargo.read_text()
    text = replace(text, '[dependencies]', '[dependencies]\naxum = "0.8"\nfs4 = { version = "0.13", features = ["sync"] }\npercent-encoding = "2"')
    cargo.write_text(text)
    # Gale's --no-gui is a one-shot CLI, not a server. GaleX uses its own env
    # switch; leave the upstream flag's semantics completely untouched.
    copy_adapter(source)


def prepare(output: Path, archive: Path | None = None) -> Path:
    if archive:
        payload = archive.read_bytes()
    else:
        with urllib.request.urlopen(URL, timeout=120) as response:
            payload = response.read()
    if hashlib.sha256(payload).hexdigest() != SHA256:
        raise RuntimeError('Gale archive checksum mismatch; refusing to build')
    output.mkdir(parents=True, exist_ok=True)
    source = output / f'gale-{COMMIT}'
    if source.exists():
        raise RuntimeError(f'{source} already exists; use a fresh build directory')
    with tarfile.open(fileobj=io.BytesIO(payload), mode='r:gz') as tar:
        for member in tar.getmembers():
            path = Path(member.name)
            if path.is_absolute() or '..' in path.parts or not (member.isdir() or member.isfile()):
                raise RuntimeError(f'Unsafe archive entry: {member.name}')
        tar.extractall(output)
    apply(source)
    return source


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path, default=ROOT / 'target/upstream')
    parser.add_argument('--archive', type=Path, help='Use an already downloaded, checksum-verified source archive')
    parser.add_argument('--refresh', action='store_true', help='Refresh adapter-owned files in an existing prepared tree')
    args = parser.parse_args()
    if args.refresh and args.archive:
        parser.error('--refresh cannot be combined with --archive')
    output = args.output.resolve()
    if args.refresh:
        source = output / f'gale-{COMMIT}'
        refresh(source)
        print(source)
    else:
        print(prepare(output, args.archive))
