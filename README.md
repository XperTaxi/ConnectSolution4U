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

1. Business name, email, phone and service area are already set. Update them in `index.html` if anything changes.
2. Quote requests are delivered by Web3Forms (see Quote form below).
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

The form sends requests to 4Uconnectsolutions@gmail.com through [Web3Forms](https://web3forms.com). The access key in `index.html` is public by design and can only deliver messages to that inbox. To change where requests go, update the email on your Web3Forms dashboard (or create a new form there and replace the `access_key` value).

## License

MIT, or choose your own.
