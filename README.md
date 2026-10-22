# Connect Solutions 4U – IT & Security Services Website

A fast, static, mobile-friendly website for a business offering **networking, server installation, CCTV installation and intrusion systems**. No build step, no dependencies: plain HTML, CSS and JavaScript.

## Structure

```
index.html     Page content
style.css      Styling (colors are variables at the top)
script.js      Mobile menu, footer year, quote form
images/        Service illustrations and gallery placeholders
```

## Customize

1. Business name, email, phone and service area are already set. Update them in `index.html` and `script.js` if anything changes.
2. The quote form sends to the address in `BUSINESS_EMAIL` in `script.js`.
3. Replace the placeholder images:
   - Put your own photos in `images/` (JPG or WebP, ideally under 300 KB each).
   - Update the `src` and `alt` text in `index.html`. Example: `images/work-1.svg` becomes `images/rack-install.jpg`.
4. Edit the text under About us, and add or remove services by copying one `<article class="service">` block.

## Run locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Publish free on GitHub Pages

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**. The site goes live at `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a minute or two.

## Quote form

The form opens the visitor's email app with their details filled in, which works on any static host. For submissions that arrive in your inbox without the visitor's email app, sign up for a form service such as Formspree or Web3Forms and point the form's `action` at it.

## License

MIT, or choose your own.
