# Build the patched headless Gale on Windows. Requires Rust >= 1.91, Node 22,
# corepack/pnpm and the Tauri v2 Windows prerequisites (WebView2 is provided by Steam/Windows).
# Pass -Check to run `cargo check` only (used for fast CI adapter verification).
param([switch]$Check)
$ErrorActionPreference = 'Stop'
function Assert-NativeExit {
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}
$Root = Split-Path -Parent $PSScriptRoot
$Upstream = Join-Path $Root 'backend/target/upstream'
# Keep in sync with backend/prepare.py COMMIT.
$Src = Join-Path $Upstream 'gale-4d401b6cf9857a92c16e8c1a39ec51e7852415cb'
if (-not (Test-Path $Src)) {
    python (Join-Path $Root 'backend/prepare.py')
    Assert-NativeExit
}
# The Rust adapter embeds the GaleX Steam bundle and upstream Gale config UI.
npm --prefix (Join-Path $Root 'frontend') ci --no-audit --no-fund
Assert-NativeExit
npm --prefix (Join-Path $Root 'frontend') run build:plugin
Assert-NativeExit
npm --prefix (Join-Path $Root 'frontend') run build:webkit
Assert-NativeExit
# Refresh adapter-owned files after the config UI build so `git pull` or local
# frontend edits cannot leave a stale embedded bundle in the prepared tree.
python (Join-Path $Root 'backend/prepare.py') --refresh
Assert-NativeExit
if (-not (Test-Path $Src)) { throw "prepared Gale source not found: $Src" }
Set-Location $Src
corepack enable
Assert-NativeExit
corepack prepare pnpm@11.7.0 --activate
Assert-NativeExit
pnpm install --frozen-lockfile
Assert-NativeExit
pnpm build
Assert-NativeExit
if ($Check) {
    cargo check --manifest-path src-tauri/Cargo.toml --lib
    Assert-NativeExit
    Write-Host '✓ headless Gale adapter typecheck'
    exit 0
}
cargo build --release --manifest-path src-tauri/Cargo.toml
Assert-NativeExit
$Bin = Join-Path $Src 'src-tauri/target/release/gale.exe'
if (-not (Test-Path $Bin)) { throw "binary not found: $Bin" }
New-Item -ItemType Directory -Force (Join-Path $Root 'plugin/bin') | Out-Null
Copy-Item $Bin (Join-Path $Root 'plugin/bin/gale.exe') -Force
Write-Host '✓ plugin/bin/gale.exe'
