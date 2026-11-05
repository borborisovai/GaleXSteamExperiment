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


if __name__ == '__main__':
    unittest.main()
