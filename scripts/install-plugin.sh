#!/usr/bin/env bash
# Installs the GaleX plugin into Millennium.
#
#   scripts/install-plugin.sh          copy the plugin folder
#   scripts/install-plugin.sh --dev    symlink it instead (live edits)
#   MILLENNIUM_PLUGINS=/path scripts/install-plugin.sh
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MODE="copy"
if [[ "${1:-}" == "--dev" ]]; then MODE="link"; fi

find_plugins_dir() {
	if [[ -n "${MILLENNIUM_PLUGINS:-}" ]]; then
		echo "$MILLENNIUM_PLUGINS"
		return
	fi
	local candidates=(
		"${XDG_DATA_HOME:-$HOME/.local/share}/millennium/plugins"
		"$HOME/.steam/steam/millennium/plugins"
		"/usr/lib/millennium/plugins"
	)
	for candidate in "${candidates[@]}"; do
		if [[ -d "$candidate" ]]; then echo "$candidate"; return; fi
	done
	echo "${candidates[0]}"
}

PLUGINS_DIR="$(find_plugins_dir)"
TARGET="$PLUGINS_DIR/GaleX"

if [[ ! -f "$ROOT/plugin/.millennium/Dist/index.js" ]]; then
	echo "! plugin bundle missing — running build first"
	"$ROOT/scripts/build-plugin.sh"
fi

mkdir -p "$PLUGINS_DIR"
rm -rf "$TARGET"

if [[ "$MODE" == "link" ]]; then
	ln -s "$ROOT/plugin" "$TARGET"
	echo "✓ linked $TARGET → $ROOT/plugin"
else
	cp -R "$ROOT/plugin" "$TARGET"
	echo "✓ installed $TARGET"
fi

cat <<'NOTE'

Next steps:
  1. start the bridge:   galexd            (see scripts/install-daemon.sh)
  2. restart Steam (or Millennium → reload plugins)
  3. press Ctrl+Shift+G in the Steam client, or click the "Mods" pill
NOTE
