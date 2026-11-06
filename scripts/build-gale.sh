#!/usr/bin/env bash
# Build the patched headless Gale and place it where the Lua backend expects it.
# Requires Rust >= 1.91, Node 22 + corepack/pnpm, and Tauri v2 Linux deps.
# Pass --check to run `cargo check` only (used for fast CI adapter verification).
set -euo pipefail
CHECK_ONLY=false
if [[ "${1:-}" == "--check" ]]; then
  CHECK_ONLY=true
elif [[ $# -gt 0 ]]; then
  echo "usage: $0 [--check]" >&2
  exit 2
fi
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
UPSTREAM="$ROOT/backend/target/upstream"
# Keep in sync with backend/prepare.py COMMIT.
SRC="$UPSTREAM/gale-4d401b6cf9857a92c16e8c1a39ec51e7852415cb"
if [[ ! -d "$SRC" ]]; then
  python3 "$ROOT/backend/prepare.py"
fi
# Always refresh adapter-owned files; a prepared tree from an older commit must
# not keep compiling a stale headless.rs after `git pull`.
python3 "$ROOT/backend/prepare.py" --refresh
[[ -d "$SRC" ]] || { echo "prepared Gale source not found: $SRC"; exit 1; }
cd "$SRC"
corepack enable
corepack prepare pnpm@11.7.0 --activate
pnpm install --frozen-lockfile
pnpm build
if [[ "$CHECK_ONLY" == true ]]; then
  cargo check --manifest-path src-tauri/Cargo.toml --lib
  echo "✓ headless Gale adapter typecheck"
  exit 0
fi
cargo build --release --manifest-path src-tauri/Cargo.toml
mkdir -p "$ROOT/plugin/bin"
BIN="$SRC/src-tauri/target/release/gale"
[[ -x "$BIN" ]] || { echo "binary not found: $BIN"; exit 1; }
cp "$BIN" "$ROOT/plugin/bin/gale"
echo "✓ plugin/bin/gale (GPL-3.0; shares the installed Gale data directory)"
