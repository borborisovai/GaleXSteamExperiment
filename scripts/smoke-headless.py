#!/usr/bin/env python3
"""Integration smoke test for a built GaleX headless Gale binary.

Uses a throw-away data directory; never touches the user's real Gale profiles.
On Linux run under xvfb-run if no display is available (Tauri still creates a
hidden WebView). Requires the binary produced by scripts/build-gale.sh/.ps1.
"""
from __future__ import annotations

import json
import os
import secrets
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
from http.cookiejar import CookieJar
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Windows runners may otherwise use a legacy console code page for redirected
# output; a Unicode log tail must not turn a successful smoke into an encoding
# error.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding='utf-8', errors='replace')
    except (AttributeError, ValueError):
        pass


def find_binary() -> Path:
    name = 'gale.exe' if os.name == 'nt' else 'gale'
    candidates = [ROOT / 'plugin' / 'bin' / name]
    candidates += sorted((ROOT / 'backend' / 'target' / 'upstream').glob(f'gale-*/src-tauri/target/release/{name}'))
    candidates += sorted((ROOT / 'backend' / 'target' / 'upstream').glob(f'gale-*/src-tauri/target/debug/{name}'))
    for candidate in candidates:
        if candidate.is_file():
            return candidate
    raise SystemExit('headless Gale binary not found; run scripts/build-gale.sh or scripts/build-gale.ps1')


def main() -> int:
    binary = find_binary()
    with tempfile.TemporaryDirectory(prefix='galex-smoke-') as tmp:
        data = Path(tmp) / 'data'
        data.mkdir()
        session_file = Path(tmp) / 'session.json'
        env = os.environ.copy()
        env.update({
            'GALEX_HEADLESS': '1',
            'GALEX_TOKEN': secrets.token_hex(32),
            'GALEX_SESSION_FILE': str(session_file),
            'GALEX_PARENT_PID': str(os.getpid()),
            'XDG_DATA_HOME': str(data),
            'APPDATA': str(data),
        })
        log = open(Path(tmp) / 'gale.log', 'wb')
        proc = subprocess.Popen([str(binary)], env=env, stdout=log, stderr=subprocess.STDOUT)
        try:
            deadline = time.time() + 120
            while time.time() < deadline and not session_file.exists():
                if proc.poll() is not None:
                    raise RuntimeError(f'Gale exited early ({proc.returncode}); see {tmp}/gale.log')
                time.sleep(0.25)
            if not session_file.exists():
                raise RuntimeError('session file was not created within 120s')
            session = json.loads(session_file.read_text())
            base = f"http://127.0.0.1:{session['port']}"
            token = session['token']
            assert session['bridgeVersion'] == 2 and len(token) >= 32

            def rpc(method: str, args: dict | None = None, auth: bool = True) -> tuple[int, object]:
                body = json.dumps({'method': method, 'args': args or {}}).encode()
                req = urllib.request.Request(base + '/rpc', data=body, method='POST')
                req.add_header('Content-Type', 'application/json')
                if auth:
                    req.add_header('Authorization', 'Bearer ' + token)
                try:
                    with urllib.request.urlopen(req, timeout=30) as response:
                        return response.status, json.loads(response.read())
                except urllib.error.HTTPError as error:
                    raw = error.read()
                    try:
                        return error.code, json.loads(raw)
                    except Exception:
                        return error.code, raw.decode(errors='replace')

            status, _ = rpc('snapshot', auth=False)
            assert status == 401, 'RPC must require authentication'
            status, snapshot = rpc('snapshot')
            assert status == 200 and snapshot['data']['bridgeVersion'] == 2
            games = snapshot['data']['games']
            assert isinstance(games, list) and games, 'Gale exposes moddable games'
            status, prefs = rpc('prefs')
            assert status == 200 and 'dataDir' in prefs['data'], 'global prefs need no game slug'

            slug = next((g['slug'] for g in games if g['slug'] == 'lethal-company'), games[0]['slug'])
            status, profiles = rpc('profiles', {'slug': slug})
            assert status == 200
            status, _ = rpc('create_profile', {'slug': slug, 'name': 'GaleX smoke'})
            assert status == 200
            status, profiles = rpc('profiles', {'slug': slug})
            profile = next(p for p in profiles['data']['profiles'] if p['name'] == 'GaleX smoke')
            pid = profile['id']
            status, _ = rpc('activate_profile', {'slug': slug, 'profileId': pid})
            assert status == 200
            query = {'includeCategories': [], 'excludeCategories': [], 'includeNsfw': False, 'includeDeprecated': True,
                     'includeDisabled': True, 'includeEnabled': True, 'sortBy': 'name', 'sortOrder': 'ascending'}
            status, mods = rpc('mods', {'slug': slug, 'profileId': pid, 'args': query})
            assert status == 200 and mods['data']['mods'] == []

            opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(CookieJar()))
            # browser_url is a top-level HTTP method, not a Gale command.
            req = urllib.request.Request(base + '/browser-url', data=json.dumps({'slug': slug, 'profileId': pid}).encode(), method='POST')
            req.add_header('Authorization', 'Bearer ' + token)
            req.add_header('Content-Type', 'application/json')
            with urllib.request.urlopen(req, timeout=30) as response:
                ticket = json.loads(response.read())
            with opener.open(ticket['url'], timeout=30) as response:
                page = response.read().decode()
                assert response.status == 200 and 'config' in page.lower()
            api = base + '/api/config?' + urllib.parse.urlencode({'slug': slug, 'profileId': pid})
            with opener.open(api, timeout=30) as response:
                assert response.status == 200 and isinstance(json.loads(response.read()), list)

            req = urllib.request.Request(base + '/browser-url', data=json.dumps({'slug': slug, 'profileId': pid, 'kind': 'export'}).encode(), method='POST')
            req.add_header('Authorization', 'Bearer ' + token)
            req.add_header('Content-Type', 'application/json')
            with urllib.request.urlopen(req, timeout=30) as response:
                export_ticket = json.loads(response.read())
            with opener.open(export_ticket['url'], timeout=60) as response:
                payload = response.read()
                assert response.status == 200 and payload[:2] == b'PK', 'export ticket downloads a zip'

            req = urllib.request.Request(base + '/shutdown', data=b'{}', method='POST')
            req.add_header('Authorization', 'Bearer ' + token)
            req.add_header('Content-Type', 'application/json')
            with urllib.request.urlopen(req, timeout=10) as response:
                assert response.status == 200
            proc.wait(timeout=30)
            assert not session_file.exists(), 'shutdown removes the session file'
            print('OK headless Gale: auth, snapshot, prefs, profiles, mods, config browser ticket, export, shutdown')
            return 0
        except Exception:
            log.flush()
            try:
                payload = (Path(tmp) / 'gale.log').read_bytes()[-6000:]
                print('--- gale.log tail ---', file=sys.stderr)
                print(payload.decode('utf-8', errors='replace'), file=sys.stderr)
            except OSError:
                pass
            raise
        finally:
            if proc.poll() is None:
                proc.terminate()
                try:
                    proc.wait(timeout=10)
                except subprocess.TimeoutExpired:
                    proc.kill()
            log.close()


if __name__ == '__main__':
    sys.exit(main())
