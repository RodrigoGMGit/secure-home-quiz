# scripts/deploy-dev.ps1 - Deploy to Azure Static Web Apps (dev/staging)
$ErrorActionPreference = "Stop"

# Load env: .env.dev (App Insights, etc.) then .env (SWA deployment token)
$loadEnv = {
  param($path)
  Get-Content $path | ForEach-Object {
    if ($_ -match "^\s*#") { return }
    if ($_ -match "^\s*$") { return }
    $parts = $_.Split("=", 2)
    if ($parts.Count -eq 2) {
      [System.Environment]::SetEnvironmentVariable($parts[0].Trim(), $parts[1].Trim())
    }
  }
}
if (Test-Path ".env.dev") { & $loadEnv ".env.dev" }
if (-not (Test-Path ".env")) {
  throw "Missing .env in repo root. Add SWA_TOKEN=<your-deployment-token>"
}
& $loadEnv ".env"

if (-not $env:SWA_TOKEN) {
  throw "SWA_TOKEN not set in .env. Get it from Azure Portal: Static Web App -> Manage deployment token"
}

# So Vite picks up App Insights etc. when building with --mode development
if (Test-Path ".env.dev") {
  Copy-Item ".env.dev" -Destination ".env.development" -Force
}

# Clean install (avoids Windows ENOTEMPTY when npm ci tries to rm node_modules)
if (Test-Path "node_modules") {
  Remove-Item -Recurse -Force "node_modules"
}
npm ci

# Build (use npx so local vite is used even if PATH is not set)
npx vite build --mode development

if (-not (Test-Path "dist")) {
  throw "Build failed: dist/ was not created."
}

# SWA needs staticwebapp.config.json in the deploy folder (Vite does not copy it from root)
if (Test-Path "staticwebapp.config.json") {
  Copy-Item "staticwebapp.config.json" -Destination "dist/staticwebapp.config.json"
}

# Deploy dist/ to Azure SWA staging (dev) using npx so global CLI is not required
npx -y @azure/static-web-apps-cli deploy ./dist --deployment-token $env:SWA_TOKEN --env staging
