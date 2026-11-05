#!/usr/bin/env bash
# Install GaleX into Millennium. Build the frontend and headless Gale first.
#   scripts/install-plugin.sh          copy the plugin folder
#   scripts/install-plugin.sh --dev    symlink it instead (live edits)
#   MILLENNIUM_PLUGINS=/path scripts/install-plugin.sh
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MODE="copy"
if [[ "${1:-}" == "--dev" ]]; then MODE="link"; fi

find_plugins_dir() {
  if [[ -n "${MILLENNIUM_PLUGINS:-}" ]]; then echo "$MILLENNIUM_PLUGINS"; return; fi
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
for f in .millennium/Dist/index.js .millennium/Dist/webkit.js .millennium/Dist/browser.css backend/main.lua plugin.json; do
  [[ -f "$ROOT/plugin/$f" ]] || { echo "missing plugin/$f — run scripts/build-plugin.sh"; exit 1; }
done
if [[ ! -x "$ROOT/plugin/bin/gale" ]]; then
  echo "! plugin/bin/gale missing — run scripts/build-gale.sh (or set galePath in GaleX settings)"
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
  1. close the desktop Gale app (GaleX shares its database/profiles)
  2. restart Steam, or reload plugins in Millennium
  3. open a supported game's Properties → Моды
NOTE
