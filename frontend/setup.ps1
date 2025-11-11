# Setup and Run Frontend
Write-Host "Setting up Next.js Frontend..." -ForegroundColor Green

# Create public directory if it doesn't exist
if (-Not (Test-Path "public")) {
    New-Item -ItemType Directory -Force -Path "public" | Out-Null
    Write-Host "Created public directory" -ForegroundColor Yellow
}

# Copy assets from admin to public
Write-Host "Copying assets to public folder..." -ForegroundColor Yellow
if (Test-Path "admin\assets") {
    Copy-Item -Path "admin\assets" -Destination "public\" -Recurse -Force
    Write-Host "Assets copied successfully!" -ForegroundColor Green
} else {
    Write-Host "Warning: admin\assets folder not found!" -ForegroundColor Red
}

# Install dependencies
Write-Host "`nInstalling npm packages..." -ForegroundColor Yellow
npm install

Write-Host "`n✓ Setup complete!" -ForegroundColor Green
Write-Host "`nTo start the development server, run:" -ForegroundColor Cyan
Write-Host "npm run dev" -ForegroundColor White
Write-Host "`nThe app will be available at http://localhost:3000" -ForegroundColor Cyan
