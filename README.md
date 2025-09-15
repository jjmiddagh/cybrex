# Cybrex Corporate Website

This repository contains the source code and assets for **Cybrex** – a modern, luxury‑inspired technology company that offers **CertifAI**, a Retrieval‑Augmented Generation (RAG) verification tool. The site is fully static and does not require a backend to run.

## Structure

test again

```
website/
├── index.html        – Home page introducing Cybrex and CertifAI
├── product.html      – Detailed information about the CertifAI platform
├── about.html        – Company story, mission, vision and values
├── contact.html      – Contact information and enquiry form
├── assets/
│   ├── css/
│   │   └── style.css  – Theme and layout styling
│   ├── js/
│   │   └── script.js  – Interactivity (navigation toggle, year update)
│   └── images/
│       ├── Cybrex_symbol.png    – Abstract emblem used as the logo icon
│       └── hero_bg_cropped.png    – Background image for the hero section
└── README.md         – This file
```

## Previewing the Site Locally

You can open the HTML files directly in your browser using the `file:///` protocol. However, for best results (especially if you intend to build upon this project), serve the site using a local HTTP server. For example:

```bash
cd website
# Using Python 3
python -m http.server 8080
# Then visit http://localhost:8080 in your browser
```

## Deployment Options

The site is 100 % static, so it can be hosted for free using popular platforms such as **GitHub Pages**, **Netlify** or **Vercel**. Below are high‑level instructions for deploying on GitHub Pages.

### GitHub Pages

1. Create a new repository on GitHub (e.g. `Cybrex-site`).
2. Upload the contents of the `website/` directory to the repository root (or commit and push via Git).
3. In the repository Settings → Pages, choose the `main` branch and set the root (`/`) folder as the source.
4. Save the changes – GitHub will build and publish your site at `https://<your‑username>.github.io/<repository‑name>/` in a few minutes.

### Netlify or Vercel

1. Sign up for a free account on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
2. Connect your GitHub repository containing the website.
3. Choose the project. For Netlify, set the build command to `none` and publish directory to `/` (the site is already built). For Vercel, accept the defaults (framework = “Other”).
4. Deploy – your site will be accessible at a generated subdomain like `https://Cybrex.netlify.app`.

Both services provide automatic HTTPS and continuous deployment whenever you push changes to your repository.

## Custom Domain (Optional)

If you would like to use a custom domain (e.g. `certifai.io`), configure a DNS `CNAME` record pointing to your hosting provider’s domain. Follow the provider’s documentation for connecting custom domains.

## Notes

- The contact form uses a `mailto:` action to open the user’s email client. In production, you may integrate with a service like Formspree, Getform or Netlify Forms to handle submissions.
- All fonts are served via Google Fonts. An internet connection is required to load them; you can self‑host the fonts by downloading them and linking locally if desired.
- The logo symbol (`Cybrex_symbol.png`) and hero background (`hero_bg_cropped.png`) are included in the `assets/images` folder. Replace these with your own artwork to customize the brand.

Enjoy building with Cybrex!
