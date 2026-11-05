#!/usr/bin/env bash
# Development loop: fixture backend + Vite dev server (browser preview).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cleanup() { kill 0 2>/dev/null || true; }
trap cleanup EXIT INT TERM

echo "→ fixture backend on :7788"
node "$ROOT/devserver/src/server.js" --port 7788 &
sleep 1

echo "→ Vite on :5173 (UI proxies /api to :7788)"
cd "$ROOT/frontend"
npm install --no-audit --no-fund
npx vite --host 0.0.0.0
