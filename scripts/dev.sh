#!/usr/bin/env bash
# Browser-only demo of the Steam properties UI. No Gale/Steam required.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT/frontend"
npm install --no-audit --no-fund
npx vite --host 0.0.0.0
