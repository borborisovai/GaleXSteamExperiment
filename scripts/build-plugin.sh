#!/usr/bin/env bash
# Build the Steam frontend and the isolated Thunderstore webkit module.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT/frontend"
echo "→ installing frontend dependencies"
npm ci --no-audit --no-fund
echo "→ type-checking + building app / plugin / webkit"
npm run build
npm run build:plugin
npm run build:webkit
for f in index.js webkit.js browser.css; do
  test -s "$ROOT/plugin/.millennium/Dist/$f" || { echo "missing $f"; exit 1; }
done
test -s "$ROOT/backend/gale/config-ui/index.html" && test -s "$ROOT/backend/gale/config-ui/app.js" || { echo "missing upstream Gale config UI"; exit 1; }
echo "✓ plugin/.millennium/Dist + upstream Gale config UI ready"
