#!/usr/bin/env python3
"""Unit tests for the pinned-source preparation guards (no network)."""
from __future__ import annotations

import hashlib
import io
import tarfile
import tempfile
import unittest
from pathlib import Path
from unittest import mock

import prepare


class PrepareGuards(unittest.TestCase):
    def test_replace_requires_unique_anchor(self) -> None:
        self.assertEqual(prepare.replace('a b', 'a', 'c'), 'c b')
        with self.assertRaises(RuntimeError):
            prepare.replace('a a', 'a', 'c')
        with self.assertRaises(RuntimeError):
            prepare.replace('b', 'a', 'c')

    def test_checksum_mismatch_refused(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            archive = Path(tmp) / 'bad.tar.gz'
            archive.write_bytes(b'not the pinned archive')
            with self.assertRaisesRegex(RuntimeError, 'checksum mismatch'):
                prepare.prepare(Path(tmp) / 'out', archive)

    def test_unsafe_archive_member_refused(self) -> None:
        buffer = io.BytesIO()
        with tarfile.open(fileobj=buffer, mode='w:gz') as tar:
            info = tarfile.TarInfo('../evil')
            info.size = 2
            tar.addfile(info, io.BytesIO(b'ok'))
        payload = buffer.getvalue()
        with tempfile.TemporaryDirectory() as tmp:
            archive = Path(tmp) / 'evil.tar.gz'
            archive.write_bytes(payload)
            with mock.patch.object(prepare, 'SHA256', hashlib.sha256(payload).hexdigest()):
                with self.assertRaisesRegex(RuntimeError, 'Unsafe archive entry'):
                    prepare.prepare(Path(tmp) / 'out', archive)

    def test_existing_output_refused(self) -> None:
        payload = b'pretend verified payload'
        with tempfile.TemporaryDirectory() as tmp:
            archive = Path(tmp) / 'source.tar.gz'
            archive.write_bytes(payload)
            output = Path(tmp) / 'out'
            (output / f'gale-{prepare.COMMIT}').mkdir(parents=True)
            with mock.patch.object(prepare, 'SHA256', hashlib.sha256(payload).hexdigest()):
                with self.assertRaisesRegex(RuntimeError, 'already exists'):
                    prepare.prepare(output, archive)

    def _prepared_tree(self, root: Path) -> Path:
        source = root / f'gale-{prepare.COMMIT}'
        rust = source / 'src-tauri/src'
        rust.mkdir(parents=True)
        (rust / 'lib.rs').write_text('mod headless;\nmod session_lock;\nheadless::start(app.handle())\n')
        (rust / 'state.rs').write_text('_session_lock: crate::session_lock::SessionLock\ncrate::session_lock::acquire()\n')
        (source / 'src-tauri/Cargo.toml').write_text('axum = "0.8"\nfs4 = { version = "0.13", features = ["sync"] }\npercent-encoding = "2"\n')
        return source

    def test_refresh_replaces_stale_adapter_and_writes_marker(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            source = self._prepared_tree(Path(tmp))
            rust = source / 'src-tauri/src'
            (rust / 'headless.rs').write_text('stale adapter')
            prepare.refresh(source)
            self.assertEqual((rust / 'headless.rs').read_bytes(), (prepare.ROOT / 'gale/headless.rs').read_bytes())
            for name in prepare.ADAPTER_FILES:
                self.assertTrue((rust / name).is_file())
            marker = (source / 'GALEX_HEADLESS.md').read_text()
            self.assertIn(prepare.COMMIT, marker)
            self.assertIn('Adapter SHA256:', marker)
            self.assertTrue((source / 'LICENSE.gale.md').is_file())

    def test_refresh_refuses_unpatched_tree(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            source = Path(tmp) / f'gale-{prepare.COMMIT}'
            (source / 'src-tauri/src').mkdir(parents=True)
            with self.assertRaisesRegex(RuntimeError, 'missing|not a GaleX-prepared tree'):
                prepare.refresh(source)

    def test_apply_minimal_upstream_anchors_then_refresh(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            source = Path(tmp) / f'gale-{prepare.COMMIT}'
            rust = source / 'src-tauri/src'
            rust.mkdir(parents=True)
            (rust / 'lib.rs').write_text(
                'mod cli;\n'
                'fn setup(app: &mut App) {\n'
                '    if let Err(err) = state::setup(app.handle()) {\n'
                '    }\n'
                '    if let Err(err) = app.deep_link().register("ror2mm") {\n'
                '    }\n'
                '        .plugin(tauri_plugin_single_instance::init(handle_single_instance))\n'
                '        .setup(setup)\n'
                '        .build(tauri::generate_context!())\n'
            )
            (rust / 'state.rs').write_text(
                'pub struct AppState {\n'
                'pub fn setup(app: &AppHandle) -> Result<()> {\n'
                '    let state = AppState {\n'
                '        db,\n'
            )
            (source / 'src-tauri/Cargo.toml').write_text('[dependencies]\n')
            prepare.apply(source)
            lib = (rust / 'lib.rs').read_text()
            self.assertIn('mod headless;', lib)
            self.assertIn('headless::start(app.handle())', lib)
            self.assertIn('_session_lock', (rust / 'state.rs').read_text())
            self.assertIn('axum = "0.8"', (source / 'src-tauri/Cargo.toml').read_text())
            before = (source / 'GALEX_HEADLESS.md').read_text()
            prepare.refresh(source)
            self.assertEqual(before, (source / 'GALEX_HEADLESS.md').read_text())


if __name__ == '__main__':
    unittest.main()
