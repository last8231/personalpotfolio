# Last Editor Portfolio

This is a static portfolio website ready for GitHub Pages or any static host.

## What is included

- `index.html` — main site page
- `images/` — image and video assets used by the page
- `css/`, `js/`, and other assets necessary for the site

## How to publish

### Option 1: GitHub Pages

1. Create a GitHub repository named `last-editor-portfolio` (public is fine).
2. Copy the repo HTTPS URL.
3. Open PowerShell in this folder and run:

```powershell
.\publish-to-github.ps1 https://github.com/YOUR_USERNAME/last-editor-portfolio.git
```

4. On GitHub, go to the repository Settings > Pages.
5. Set the source to the `main` branch and the root `/` folder.
6. Save the settings and wait a few minutes for the site to become live.

### Option 2: Drag and drop deploy

- Use Netlify, Vercel, or another static host.
- Upload the whole project folder or the ZIP archive `last-editor-portfolio.zip`.

## Local preview

You can preview the site locally with a simple static server:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.
