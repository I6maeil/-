@echo off
echo Creating folder: images\partenariat...
if not exist "images\partenariat" mkdir "images\partenariat"

echo Copying partnership photos...
copy /Y "C:\Users\benis\.gemini\antigravity\brain\d27ef339-127f-49f3-a508-2188a3347101\media__1779447059177.png" "images\partenariat\photo1.png"
copy /Y "C:\Users\benis\.gemini\antigravity\brain\d27ef339-127f-49f3-a508-2188a3347101\media__1779446621831.png" "images\partenariat\photo2.png"

echo.
echo Success! The images have been copied to the project.
echo Please refresh your browser to view the partnership card.
echo.
pause
