# AGENTS.md

## Project Overview

This is the documentation site for [Scrypted](https://scrypted.app), an open source video integration platform and NVR. The site is built with [VitePress](https://vitepress.dev) and deployed to [docs.scrypted.app](https://docs.scrypted.app).

The main Scrypted application repository is at [github.com/koush/scrypted](https://github.com/koush/scrypted).

## Build & Dev Commands

| Command | Description |
| - | - |
| `npm install` | Install dependencies |
| `npm run docs:dev` | Start the local dev server with hot reload |
| `npm run docs:build` | Build the static site into `.vitepress/dist/` |
| `npm run docs:preview` | Preview the production build locally |

## Architecture

```
.vitepress/config.ts   # VitePress configuration: sidebar, nav, head, plugins
.vitepress/theme/      # Custom theme (extends default VitePress theme)
src/                   # Vue components and TypeScript helpers used in Markdown
parts/                 # Reusable Markdown partials (included via <!--@include:-->)
install/               # Installation guide pages
scrypted-nvr/          # Scrypted NVR documentation
detection/             # Vision and AI plugin docs
buyers-guide/          # Hardware buyer's guide
maintenance/           # Server maintenance docs
home-assistant/        # Home Assistant integration docs
public/                # Static assets (images, icons)
```

### Content Conventions

- All documentation pages are Markdown files (`.md`).
- Pages can include Vue `<script setup>` blocks for interactivity (e.g., importing components from `src/`).
- Reusable content snippets live in `parts/` and are embedded into pages using VitePress's `<!--@include: ./parts/file.md-->` directive.
- Custom Vue components (e.g., `ImagePopup.vue`) are imported from `../src/` relative to the page.
- VitePress containers (`::: tip`, `::: warning`, `::: details`) are used for callouts.
- Mermaid diagrams are supported via `vitepress-plugin-mermaid`.
- The `vitepress-plugin-llms` plugin generates `llms.txt` and `llms-full.txt` for LLM consumption.

### Sidebar and Navigation

The sidebar structure is defined entirely in `.vitepress/config.ts`. When adding a new page, also add a corresponding entry to the sidebar config so it appears in navigation.

### Image and Asset References

Static assets (images, icons) live in `public/` and are referenced with absolute paths (e.g., `/img/logo.png`).

## Deployment

The site is deployed via GitHub Pages. The `CNAME` file at the repo root sets the custom domain to `docs.scrypted.app`.

## Editing Guidelines

- Write in clear, concise prose. The audience ranges from home automation enthusiasts to IT professionals.
- Use relative links between documentation pages (e.g., `[Camera Configuration](/camera-preparation)`).
- Test changes with `npm run docs:dev` before submitting.
- Run `npm run docs:build` to verify the site builds without errors.
- Keep page frontmatter minimal; VitePress config handles titles and navigation.
