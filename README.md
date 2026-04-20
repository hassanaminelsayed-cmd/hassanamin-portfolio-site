# Hassan Amin Portfolio Website

Modern, fast, static portfolio website designed to compete with senior product design portfolios.

## Files

- `index.html` - main site content
- `styles.css` - layout and visual styling
- `netlify.toml` - Netlify static publishing config
- `vercel.json` - Vercel static publishing config

## Local preview

You can preview this site by opening `index.html` directly in your browser.

For a local server (recommended), run one of:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Best low-cost hosting options

### 1) Netlify (Free, easiest)

1. Create a GitHub repository and push this project.
2. Log in to Netlify and click **Add new site** -> **Import an existing project**.
3. Connect your GitHub repo.
4. Publish directory: `.`
5. Build command: leave empty (not required for static site).
6. Deploy.

### 2) Vercel (Free hobby tier)

1. Push project to GitHub.
2. Import repo in Vercel.
3. Framework preset: **Other**.
4. No build command needed.
5. Output directory: `.`
6. Deploy.

### 3) GitHub Pages (Free)

1. Push files to a GitHub repo.
2. In repo settings -> **Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)`.
5. Save and wait for publish URL.

## Connect to your custom domain

After deployment on your chosen host:

1. Add domain `hassanamin.net` in host dashboard.
2. Update your DNS records at your domain registrar:
   - Add A/ALIAS/CNAME records based on host instructions.
3. Enable HTTPS (automatic on Netlify/Vercel/GitHub Pages with proper DNS).

## Content personalization checklist

Before sharing with recruiters/hiring managers, replace:

- Placeholder metrics with real project data.
- Case study project details with real company/project names (or anonymized versions).
- Contact email in `index.html` (`hello@hassanamin.net`) with your preferred inbox.
- LinkedIn URL placeholder with your real profile.
- Optional Open Graph image URL with your actual preview image.
