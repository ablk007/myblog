# Setup script for Blog Admin Frontend
# This script copies assets from the admin folder to the public folder

Write-Host "Setting up Blog Admin Frontend..." -ForegroundColor Green

# Create public/assets directory structure
$publicPath = "public/assets"
$directories = @("css", "js", "images", "vendor", "fonts")

foreach ($dir in $directories) {
    $fullPath = Join-Path $publicPath $dir
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
        Write-Host "Created: $fullPath" -ForegroundColor Cyan
    }
}

# Copy assets from admin folder to public folder
Write-Host "`nCopying assets..." -ForegroundColor Green

# Copy CSS files
if (Test-Path "admin/assets/css") {
    Copy-Item -Path "admin/assets/css/*" -Destination "public/assets/css/" -Recurse -Force
    Write-Host "✓ Copied CSS files" -ForegroundColor Green
}

# Copy JS files
if (Test-Path "admin/assets/js") {
    Copy-Item -Path "admin/assets/js/*" -Destination "public/assets/js/" -Recurse -Force
    Write-Host "✓ Copied JS files" -ForegroundColor Green
}

# Copy images
if (Test-Path "admin/assets/images") {
    Copy-Item -Path "admin/assets/images/*" -Destination "public/assets/images/" -Recurse -Force
    Write-Host "✓ Copied images" -ForegroundColor Green
}

# Copy vendor files
if (Test-Path "admin/assets/vendor") {
    Copy-Item -Path "admin/assets/vendor/*" -Destination "public/assets/vendor/" -Recurse -Force
    Write-Host "✓ Copied vendor files" -ForegroundColor Green
}

Write-Host "`nSetup completed successfully!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Run: npm install" -ForegroundColor White
Write-Host "2. Run: npm run dev" -ForegroundColor White
Write-Host "3. Open: http://localhost:3000/admin" -ForegroundColor White
