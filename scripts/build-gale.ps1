# Build the patched headless Gale on Windows. Requires Rust >= 1.91, Node 22,
# corepack/pnpm and the Tauri v2 Windows prerequisites (WebView2 is provided by Steam/Windows).
$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $PSScriptRoot
$Upstream = Join-Path $Root 'backend/target/upstream'
if (-not (Test-Path $Upstream)) { python (Join-Path $Root 'backend/prepare.py') }
$Src = Get-ChildItem $Upstream -Directory -Filter 'gale-*' | Select-Object -First 1
if (-not $Src) { throw 'prepared Gale source not found' }
Set-Location $Src.FullName
corepack enable
corepack prepare pnpm@11.7.0 --activate
pnpm install --frozen-lockfile
pnpm build
cargo build --release --manifest-path src-tauri/Cargo.toml
$Bin = Join-Path $Src.FullName 'src-tauri/target/release/gale.exe'
if (-not (Test-Path $Bin)) { throw "binary not found: $Bin" }
New-Item -ItemType Directory -Force (Join-Path $Root 'plugin/bin') | Out-Null
Copy-Item $Bin (Join-Path $Root 'plugin/bin/gale.exe') -Force
Write-Host '✓ plugin/bin/gale.exe'
