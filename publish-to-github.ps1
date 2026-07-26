param(
    [string]$RemoteUrl
)

# Ensure we are in the repository root
$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoPath

if (-not (Test-Path .git)) {
    git init
    git add .
    git commit -m 'Initial portfolio upload'
}

git branch -M main

if (-not $RemoteUrl) {
    $RemoteUrl = Read-Host 'Enter GitHub repo HTTPS URL (for example https://github.com/YOUR_USERNAME/YOUR_REPO.git)'
}

git remote remove origin 2>$null
git remote add origin $RemoteUrl

git push -u origin main
