@echo off
REM Vercel Pre-Deployment Verification Script (Windows)

echo.
echo ==================================================================
echo Devi Ahilyabai Holkar Smarak -- Pre-Deployment Verification
echo ==================================================================
echo.

REM Check Node version
echo [1/5] Checking Node.js version...
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo   Current: %NODE_VERSION%
echo   (Vercel supports 18.x, 20.x)
echo.

REM Check dependencies
echo [2/5] Checking npm packages...
if exist "node_modules\" (
    echo   [OK] Dependencies installed
) else (
    echo   [ERROR] Dependencies NOT installed - run: npm install
    pause
    exit /b 1
)
echo.

REM Type check
echo [3/5] Running TypeScript type check...
call npx tsc --noEmit >nul 2>&1
if %errorlevel% equ 0 (
    echo   [OK] No TypeScript errors
) else (
    echo   [ERROR] TypeScript errors found - fix them first
    npx tsc --noEmit
    pause
    exit /b 1
)
echo.

REM Build
echo [4/5] Building project...
call npm run build >nul 2>&1
if %errorlevel% equ 0 (
    echo   [OK] Build successful
    if exist "dist\" (
        echo   [OK] Output folder created (dist/)
    )
) else (
    echo   [ERROR] Build failed
    call npm run build
    pause
    exit /b 1
)
echo.

REM Git status
echo [5/5] Checking Git status...
git status --short >nul 2>&1
if %errorlevel% neq 0 (
    echo   [WARNING] Not a Git repository
) else (
    for /f %%i in ('git status --short ^| find /c /v ""') do set CHANGES=%%i
    if %CHANGES% equ 0 (
        echo   [OK] Clean working tree - ready to deploy
    ) else (
        echo   [WARNING] Uncommitted changes found (%CHANGES% files)
        echo   - Commit or stash before deploying
        git status --short
    )
)
echo.

echo ==================================================================
echo [SUCCESS] All checks passed!
echo ==================================================================
echo.
echo Next steps:
echo   1. git push origin main
echo   2. Vercel will auto-deploy
echo   3. Check dashboard at https://vercel.com/dashboard
echo.
pause
