@echo off

cd /d "C:\Cosas\Proyectos\menu-digital\menu-digital-frontend"

if exist "dist" (
    echo Eliminando version anterior...
    rmdir /s /q "dist"
)

echo Compilando aplicacion...
call npm run build

if errorlevel 1 (
    echo.
    echo Error al compilar.
    pause
    exit /b
)

echo.
echo Iniciando servidor...
call npx serve dist -l 3000

pause
)


REM Servir la carpeta dist
echo Iniciando servidor...
npx serve dist -l 3000

pause