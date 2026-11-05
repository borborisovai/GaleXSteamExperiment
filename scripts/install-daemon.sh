#!/usr/bin/env bash
# Builds galexd and registers it as a user service (Linux).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${GALEX_PORT:-7788}"
BIN_DIR="${HOME}/.local/bin"
DATA_DIR="${XDG_DATA_HOME:-$HOME/.local/share}/GaleX"

echo "→ building the bridge (cargo build --release)"
cargo build --release --manifest-path "$ROOT/backend/Cargo.toml" -p galexd

mkdir -p "$BIN_DIR" "$DATA_DIR"
install -m 755 "$ROOT/backend/target/release/galexd" "$BIN_DIR/galexd"
echo "✓ installed $BIN_DIR/galexd"

if [[ "$(uname -s)" == "Linux" ]]; then
	UNIT_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/systemd/user"
	mkdir -p "$UNIT_DIR"
	cat > "$UNIT_DIR/galexd.service" <<UNIT
[Unit]
Description=GaleX mod manager bridge
After=network.target steam.target

[Service]
Type=simple
ExecStart=$BIN_DIR/galexd --port $PORT --data-dir $DATA_DIR
Restart=on-failure
RestartSec=3

[Install]
WantedBy=default.target
UNIT
	systemctl --user daemon-reload || true
	systemctl --user enable --now galexd.service || true
	echo "✓ systemd user unit: $UNIT_DIR/galexd.service"
	echo "  logs: journalctl --user -u galexd -f"
fi

echo "→ health check: curl -s http://127.0.0.1:$PORT/api/v1/health"
