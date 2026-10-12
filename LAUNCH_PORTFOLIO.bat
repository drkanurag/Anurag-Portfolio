@echo off
title Anurag Podder Portfolio — Local Dev & Preview Server
echo ===============================================================================
echo   ANURAG PODDER — AI ^& DATA SCIENCE ENGINEERING PORTFOLIO
echo ===============================================================================
echo.
set "NODE_DIR=C:\Users\anura\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
if exist "%NODE_DIR%\node.exe" (
    set "PATH=%NODE_DIR%;%PATH%"
)

where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [1/2] Starting Vite Development Server on http://localhost:5173 ...
    start "" "http://localhost:5173"
    node "%~dp0node_modules\vite\bin\vite.js" --port 5173 --host
) else (
    echo [Fallback] Opening standalone pre-compiled portfolio in browser...
    start "" "%~dp0launch.html"
)
pause

