#!/usr/bin/env bash
# Builds the Millennium bundle into plugin/.millennium/Dist/index.js
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT/frontend"

echo "→ installing frontend dependencies"
npm install --no-audit --no-fund

echo "→ type-checking"
npx tsc --noEmit

echo "→ building plugin bundle"
npx vite build --mode plugin

BUNDLE="$ROOT/plugin/.millennium/Dist/index.js"
echo "✓ $BUNDLE ($(du -h "$BUNDLE" | cut -f1))"
