# Shaurya Kumar – portfolio site

Static site (HTML, CSS, JS). No build step, no dependencies.

## Files
- `index.html` – the page
- `style.css`, `script.js` – styles and small script
- `assets/shaurya.jpg`, `assets/favicon.svg` – images
- `404.html`, `robots.txt`

## Before you deploy
Open `script.js` and set `PORTFOLIO_URL` to your portfolio link. Until you do, the "View portfolio" button stays hidden.

## Deploy
Upload the contents of this folder (not the folder itself) so `index.html` sits at the site root.
- **Netlify:** app.netlify.com/drop, then drag the folder in.
- **Vercel:** `vercel --prod` from this folder, or import it as a static project.
- **GitHub Pages:** push to a repo, then Settings > Pages > deploy from branch (root).
- **Cloudflare Pages / shared hosting:** upload the files to the web root (`public_html`).

Fonts load from Google Fonts; the site falls back to system fonts if they are blocked.
