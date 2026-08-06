@echo off
echo Starting Village Healthcare (V-HAIN) Dashboard...
echo Please wait a moment for the server to start...

:: Open the browser
start http://localhost:3000

:: Start the local server serving the 'out' directory
npx serve out

pause
