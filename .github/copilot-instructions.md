# Copilot Instructions for Portfolio Site

## Architecture Overview

This is an **Astro 5.x portfolio site** with Preact islands for interactivity, deployed to GitHub Pages.

### Content-Driven Architecture
- **CV data**: `src/content/cv/benjamin.yaml` - single source of truth for resume content
- **Page layout**: `src/content/pages/index.json` - defines block-based page structure
- **Schema validation**: `src/content.config.mjs` - Zod schemas for type-safe content

Content flows: YAML/JSON → Astro Content Collections → Page components → Rendered HTML

### Component Pattern: Blocks vs Islands
- **`components/blocks/*.astro`**: Server-rendered sections (Hero, Experience, Projects, Education, Skills, Awards, Contact)
- **`components/islands/*.tsx`**: Preact components for client-side interactivity (Navigation, ThemeToggle, ContactForm, SkillsGrid)

Islands use `client:load` or `client:visible` directives for selective hydration:
```astro
<Navigation client:load />          <!-- Immediate hydration -->
<ContactForm client:visible />      <!-- Hydrates when visible -->
```

## Key Conventions

### Preact TSX Files
Always include the JSX pragma at the top:
```tsx
/** @jsxImportSource preact */
import { useState, useEffect } from 'preact/hooks';
```

### Styling Pattern
- **Global CSS variables** in `src/styles/global.css` using `--color-*`, `--space-*`, `--text-*` tokens
- **Theme support**: `data-theme="light|dark"` on `<html>` element
- **Component styles**: Scoped `<style>` blocks in Astro, inline `<style>{``}` in Preact islands
- Use existing design tokens rather than hardcoded values

### Content Schema (YAML)
Dates support multiple formats - the schema accepts `string | number`:
```yaml
start_date: 2024-06        # ISO format
end_date: 2025             # Year only
```

Highlights support markdown-style formatting (stripped in display):
```yaml
highlights:
  - '**Bold text:** Regular text'
```

## Developer Workflow

### Environment Setup
Load the Node.js module before running any npm commands:
```bash
module load node         # Required on HPC/Lmod systems
```

### Commands
```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Production build to ./dist
npm run preview  # Preview production build
```

### Adding a New Section Block
1. Create `src/components/blocks/NewSection.astro` with Props interface
2. Add section schema to `src/content.config.mjs` if needed
3. Import and use in `src/pages/index.astro`
4. Add navigation link in `src/components/islands/Navigation.tsx` navLinks array

## File Reference

| Purpose | Location |
|---------|----------|
| CV content | `src/content/cv/benjamin.yaml` |
| Page metadata | `src/content/pages/index.json` |
| Content schemas | `src/content.config.mjs` |
| Design tokens | `src/styles/global.css` |
| Base HTML template | `src/layouts/BaseLayout.astro` |
| Main page assembly | `src/pages/index.astro` |
