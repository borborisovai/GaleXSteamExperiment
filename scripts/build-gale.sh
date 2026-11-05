#!/usr/bin/env bash
# Build the patched headless Gale and place it where the Lua backend expects it.
# Requires Rust >= 1.91, Node 22 + corepack/pnpm, and Tauri v2 Linux deps.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
UPSTREAM="$ROOT/backend/target/upstream"
if [[ ! -d "$UPSTREAM" ]]; then
  python3 "$ROOT/backend/prepare.py"
fi
SRC="$(find "$UPSTREAM" -maxdepth 1 -type d -name 'gale-*' | head -1)"
[[ -n "$SRC" ]] || { echo "prepared Gale source not found"; exit 1; }
cd "$SRC"
corepack enable
corepack prepare pnpm@11.7.0 --activate
pnpm install --frozen-lockfile
pnpm build
cargo build --release --manifest-path src-tauri/Cargo.toml
mkdir -p "$ROOT/plugin/bin"
BIN="$SRC/src-tauri/target/release/gale"
[[ -x "$BIN" ]] || { echo "binary not found: $BIN"; exit 1; }
cp "$BIN" "$ROOT/plugin/bin/gale"
echo "✓ plugin/bin/gale (GPL-3.0; shares the installed Gale data directory)"
