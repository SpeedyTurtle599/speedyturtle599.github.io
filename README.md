# Benjamin Coveler Portfolio

Personal portfolio site built with [Astro](https://astro.build/) and [Preact](https://preactjs.com/), deployed to GitHub Pages.

**Live site:** [speedyturtle599.github.io](https://speedyturtle599.github.io)

## Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
```

## Build & Preview

```bash
npm run build        # Production build to ./dist
npm run preview      # Preview production build locally
```

## Deployment

The site automatically deploys to GitHub Pages when you push to `main` or `master`.

### How it works
1. Push changes to `main` branch
2. GitHub Actions workflow ([.github/workflows/deploy-site.yml](.github/workflows/deploy-site.yml)) triggers
3. Site builds with `npm run build`
4. Output in `./dist` deploys to GitHub Pages

### Manual deployment
Trigger a deploy manually via GitHub → Actions → "Deploy to GitHub Pages" → Run workflow.

## Project Structure

```
src/
├── content/
│   ├── cv/benjamin.yaml      # CV data (single source of truth)
│   └── pages/index.json      # Page layout configuration
├── components/
│   ├── blocks/               # Server-rendered sections (.astro)
│   └── islands/              # Interactive components (.tsx)
├── layouts/BaseLayout.astro  # HTML template with nav/footer
├── pages/index.astro         # Main page assembly
└── styles/global.css         # Design tokens & theme
```

## Editing Content

All CV content lives in `src/content/cv/benjamin.yaml`. Edit this file to update:
- Personal info (name, email, phone)
- Education history
- Work experience
- Projects
- Skills & certifications

Changes will reflect across the entire site after rebuild.

## Tech Stack

- **Astro 5.x** - Static site generator with islands architecture
- **Preact** - Lightweight React alternative for interactive components
- **GitHub Pages** - Hosting via GitHub Actions

## License

© Benjamin Coveler
