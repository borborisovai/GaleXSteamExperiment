#!/usr/bin/env bash
# Boots the real galexd binary on a throw-away data dir and probes the API.
#
#   scripts/smoke-daemon.sh                 # debug build
#   GALEX_PORT=7801 scripts/smoke-daemon.sh
#
# Checks that do not need the internet are hard failures; the Thunderstore
# probe only warns (CI runners occasionally have no egress to thunderstore.io).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${GALEX_PORT:-7799}"
DATA_DIR="$(mktemp -d)"
BIN="$ROOT/backend/target/debug/galexd"

if [[ ! -x "$BIN" ]]; then
	echo "→ building galexd"
	cargo build --manifest-path "$ROOT/backend/Cargo.toml"
fi

echo "→ starting $BIN on :$PORT (data: $DATA_DIR)"
"$BIN" --port "$PORT" --data-dir "$DATA_DIR" >"$DATA_DIR/galexd.log" 2>&1 &
PID=$!
cleanup() {
	kill "$PID" 2>/dev/null || true
	wait "$PID" 2>/dev/null || true
	rm -rf "$DATA_DIR"
}
trap cleanup EXIT INT TERM

for _ in $(seq 1 80); do
	if curl -sf "http://127.0.0.1:$PORT/api/v1/health" >/dev/null; then break; fi
	sleep 0.25
done

if ! curl -sf "http://127.0.0.1:$PORT/api/v1/health" >/dev/null; then
	echo "✗ daemon did not answer on :$PORT"
	sed -n '1,60p' "$DATA_DIR/galexd.log"
	exit 1
fi

python3 - "$PORT" "$DATA_DIR" <<'PY'
import json, os, sys, urllib.error, urllib.request

port, data_dir = sys.argv[1], sys.argv[2]
base = f"http://127.0.0.1:{port}/api/v1"
failures = []

def call(method, path, body=None):
    data = None if body is None else json.dumps(body).encode()
    request = urllib.request.Request(base + path, data=data, method=method)
    if data is not None:
        request.add_header("content-type", "application/json")
    with urllib.request.urlopen(request, timeout=20) as response:
        raw = response.read()
        return response.status, (json.loads(raw) if raw and response.headers.get_content_type() == "application/json" else raw)

def check(label, ok, extra=""):
    print(f"{'✓' if ok else '✗'} {label}{' — ' + str(extra) if extra else ''}")
    if not ok:
        failures.append(label)

status, health = call("GET", "/health")
check("health 200", status == 200, status)
check("health payload", health.get("ok") is True and "steamDetected" in health, health.get("version"))

status, games = call("GET", "/games")
check("games list", status == 200 and len(games) > 200, f"{len(games)} communities")
check("games carry slugs", all(g.get("slug") and g.get("name") for g in games[:50]))

status, game = call("POST", "/games/lethal-company/manage", {"path": os.path.join(data_dir, "lc")})
check("manage game", status == 200 and game.get("managed") is True, game.get("path"))

status, profiles = call("GET", "/games/lethal-company/profiles")
check("default profile created", status == 200 and len(profiles) == 1, [p.get("name") for p in profiles])
profile_id = profiles[0]["id"] if profiles else None

if profile_id is not None:
    status, mods = call("GET", f"/profiles/{profile_id}/mods")
    check("mods empty", status == 200 and mods == [], mods)

    status, renamed = call("PATCH", f"/profiles/{profile_id}", {"name": "Smoke profile"})
    check("rename profile", status == 200 and renamed.get("name") == "Smoke profile", renamed.get("name"))

    status, config = call("GET", f"/profiles/{profile_id}/config")
    check("config listing", status == 200 and isinstance(config, list), f"{len(config)} file(s)")

    status, exported = call("GET", f"/profiles/{profile_id}/export")
    check("export profile code", status == 200 and exported.get("code"), exported.get("fileCount"))

    status, launched = call("POST", f"/profiles/{profile_id}/launch", {"vanilla": True})
    check("launch returns a command", status == 200 and "steam" in launched.get("command", ""), launched.get("command"))

status, state_file = 200, os.path.exists(os.path.join(data_dir, "state.json"))
check("state.json written", state_file, data_dir)

status, logs = call("GET", "/logs")
check("logs recorded", status == 200 and len(logs) > 0, f"{len(logs)} entries")

try:
    status, categories = call("GET", "/store/lethal-company/categories")
    if status == 200 and categories:
        print(f"✓ thunderstore reachable — {len(categories)} categories")
    else:
        print("! thunderstore returned no categories (network?)")
except (urllib.error.URLError, TimeoutError) as error:
    print(f"! thunderstore unreachable, skipping online checks ({error})")

sys.exit(1 if failures else 0)
PY
