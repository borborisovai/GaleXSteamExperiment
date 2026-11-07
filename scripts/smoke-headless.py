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
                    req.add_header('X-GaleX-Client', 'millennium-lua')
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
            status, idle = rpc('progress')
            assert status == 200 and isinstance(idle['data']['tasks'], list) and isinstance(idle['data']['history'], list), 'progress telemetry is pollable without a game slug'
            assert isinstance(idle['data']['networkBytesPerSecond'], int) and isinstance(idle['data']['diskBytesPerSecond'], int)
            status, _ = rpc('cancel_installs')
            assert status == 200, 'cancel_installs is global and does not require a game slug'

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

            def request_status(client, request):
                try:
                    with client.open(request, timeout=30) as response:
                        return response.status, response.read()
                except urllib.error.HTTPError as error:
                    return error.code, error.read()
            # Steam resolves steamloopback.host to 127.0.0.1 inside CEF. The
            # smoke runs outside Steam, so assert the public hostname and then
            # dial the loopback port directly.
            def steam_url(url: str) -> str:
                parsed = urllib.parse.urlsplit(url)
                assert parsed.hostname == 'steamloopback.host', 'browser URLs hide the backend behind steamloopback.host'
                return urllib.parse.urlunsplit(('http', f"127.0.0.1:{session['port']}", parsed.path, parsed.query, ''))
            steam_host = f"steamloopback.host:{session['port']}"
            class SteamRedirect(urllib.request.HTTPRedirectHandler):
                def redirect_request(self, req, fp, code, msg, headers, newurl):
                    request = super().redirect_request(req, fp, code, msg, headers, newurl)
                    if request is not None:
                        request.add_header('Host', steam_host)
                    return request
            opener = urllib.request.build_opener(SteamRedirect, urllib.request.HTTPCookieProcessor(CookieJar()))
            def browser_request(url: str, data: bytes | None = None, method: str = 'GET') -> urllib.request.Request:
                request = urllib.request.Request(url, data=data, method=method)
                # Dial loopback directly, but present the Steam hostname the
                # bridge requires. Direct localhost/127 Host headers are tested
                # separately and must be rejected.
                request.add_header('Host', steam_host)
                return request
            def browser_ticket(kind: str = 'config', file: str | None = None) -> str:
                payload = {'slug': slug, 'profileId': pid, 'kind': kind, 'lang': 'english'}
                if file is not None:
                    payload['file'] = file
                req = urllib.request.Request(base + '/browser-url', data=json.dumps(payload).encode(), method='POST')
                req.add_header('Authorization', 'Bearer ' + token)
                req.add_header('X-GaleX-Client', 'millennium-lua')
                req.add_header('Content-Type', 'application/json')
                with urllib.request.urlopen(req, timeout=30) as response:
                    return json.loads(response.read())['url']
            with opener.open(browser_request(steam_url(browser_ticket())), timeout=30) as response:
                page = response.read().decode()
                assert response.status == 200 and '/config/app.js' in page and '<style>' in page, 'upstream Gale config UI is served with inline styles'
            deep_file = 'BepInEx/config/AinaVT-LethalConfig.cfg'
            with opener.open(browser_request(steam_url(browser_ticket(file=deep_file))), timeout=30) as response:
                assert response.status == 200
                final_query = urllib.parse.parse_qs(urllib.parse.urlsplit(response.geturl()).query)
                assert final_query.get('file') == [deep_file], 'Edit config ticket deep-links to the requested relative file'
            for invalid_file in ('/etc/passwd', '../secret.cfg', 'C:\\Windows\\win.ini', 'BepInEx//../secret.cfg'):
                status, _ = rpc('browser_url', {'slug': slug, 'profileId': pid, 'kind': 'config', 'file': invalid_file})
                assert status == 400, f'browser ticket rejects unsafe config path: {invalid_file}'
            ctx = urllib.parse.urlencode({'slug': slug, 'profileId': pid})
            req = browser_request(base + '/api/command?' + ctx, json.dumps({'method': 'config', 'args': {}}).encode(), 'POST')
            req.add_header('Content-Type', 'application/json')
            req.add_header('Origin', f"http://steamloopback.host:{session['port']}")
            with opener.open(req, timeout=30) as response:
                assert response.status == 200 and isinstance(json.loads(response.read())['data'], list)
            bad = browser_request(base + '/api/command?' + ctx, req.data, 'POST')
            bad.add_header('Content-Type', 'application/json')
            bad.add_header('Origin', 'https://evil.example')
            status, _ = request_status(opener, bad)
            assert status == 403, 'browser RPC rejects a foreign Origin'
            anonymous = browser_request(base + '/api/command?' + ctx, req.data, 'POST')
            anonymous.add_header('Content-Type', 'application/json')
            anonymous.add_header('Origin', f"http://steamloopback.host:{session['port']}")
            status, _ = request_status(urllib.request.build_opener(), anonymous)
            assert status == 401, 'browser RPC requires the ticket cookie'
            # Direct browser access through loopback aliases or a proxy is forbidden.
            for forbidden_host in (f"127.0.0.1:{session['port']}", f"localhost:{session['port']}"):
                direct = urllib.request.Request(base + '/config?' + ctx)
                direct.add_header('Host', forbidden_host)
                direct.add_header('Cookie', f'galex_session={token}')
                status, _ = request_status(opener, direct)
                assert status == 403, 'config UI rejects direct 127.0.0.1/localhost Host headers'
            proxied = browser_request(base + '/config?' + ctx)
            proxied.add_header('Cookie', f'galex_session={token}')
            proxied.add_header('X-Forwarded-For', '203.0.113.10')
            status, _ = request_status(opener, proxied)
            assert status == 403, 'config UI rejects forwarded/proxied requests'
            browser_rpc = urllib.request.Request(base + '/rpc', data=json.dumps({'method': 'snapshot', 'args': {}}).encode(), method='POST')
            browser_rpc.add_header('Authorization', 'Bearer ' + token)
            browser_rpc.add_header('Content-Type', 'application/json')
            status, _ = request_status(opener, browser_rpc)
            assert status == 403, 'bearer RPC is reserved for the Lua client header'
            with opener.open(browser_request(steam_url(browser_ticket('export'))), timeout=60) as response:
                payload = response.read()
                assert response.status == 200 and payload[:2] == b'PK', 'export ticket downloads a zip'
            status, progress = rpc('progress')
            assert status == 200
            exports = [task for task in progress['data']['tasks'] if task['kind'] == 'export']
            assert exports and exports[0]['status'] == 'done' and exports[0]['slug'] == slug, 'heavy browser export is measured as a finished Gale operation for the real game'
            assert exports[0]['steamAppId'] is None or isinstance(exports[0]['steamAppId'], int)

            req = urllib.request.Request(base + '/shutdown', data=b'{}', method='POST')
            req.add_header('Authorization', 'Bearer ' + token)
            req.add_header('X-GaleX-Client', 'millennium-lua')
            req.add_header('Content-Type', 'application/json')
            with urllib.request.urlopen(req, timeout=10) as response:
                assert response.status == 200
            proc.wait(timeout=30)
            assert not session_file.exists(), 'shutdown removes the session file'
            print('OK headless Gale: auth, snapshot, prefs, progress, profiles, mods, steamloopback config UI, measured export, shutdown')
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
