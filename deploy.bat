@echo off
rem ============================================================
rem One-click deploy: commits everything and pushes to GitHub.
rem Double-click this file, type a short message, done.
rem ============================================================
cd /d "%~dp0"

git add -A
git diff --cached --quiet && echo Nothing to deploy - no changes found. && pause && exit /b

set /p msg="What did you change? (Enter = 'Update site'): "
if "%msg%"=="" set msg=Update site

git commit -m "%msg%"
git push

echo.
echo Deployed! Live in ~1 minute at https://sidratul-m00ntaha.github.io
pause
