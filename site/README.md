# Muhammad Abdullah - Portfolio

Personal portfolio for Muhammad Abdullah, Senior Backend Engineer. Built with Astro and Tailwind CSS v4.

## Stack

- [Astro](https://astro.build) v7 - static output, near-zero JS shipped
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- TypeScript
- pnpm

## Commands

| Command | Description |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start local dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview the production build locally |

## Project structure

```
site/
├── public/
│   ├── cv.pdf              # Drop your real CV PDF here
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Nav.astro       # Sticky nav with dark/light toggle + mobile menu
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Work.astro      # Experience + impact bullets
│   │   ├── Skills.astro    # Skill tag groups
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro    # HTML shell, SEO/OG tags, theme init
│   ├── pages/
│   │   ├── index.astro
│   │   └── og-image.svg.ts # Generated OG image
│   └── styles/
│       └── global.css      # Tailwind import, dark mode variant, font utilities
└── astro.config.mjs
```

## Editing content

All content is in the component files. Each is self-contained:

- **Hero** - `src/components/Hero.astro`
- **About** - `src/components/About.astro`
- **Work experience** - `src/components/Work.astro` (edit the `roles` array in frontmatter)
- **Skills** - `src/components/Skills.astro` (edit the `skillGroups` array)
- **Projects** - `src/components/Projects.astro` (edit the `projects` array)
- **Contact** - `src/components/Contact.astro`
- **SEO title and description** - `src/pages/index.astro`

## CV

Drop your real CV at `public/cv.pdf`. Both hero and contact "Download CV" buttons already point to `/cv.pdf`.

## Deploy to Vercel

No `vercel.json` needed. Astro's static output is zero-config on Vercel.

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Set **Root Directory** to `site`.
4. Vercel auto-detects Astro. Deploy.

Or via CLI:

```bash
pnpm build
npx vercel dist --prod
```

## Before going live

- [ ] Replace `public/cv.pdf` with your real CV
- [ ] Update the two placeholder GitHub URLs in `src/components/Projects.astro` (Distributed Microservices Platform and Todo Application)
- [ ] Set your real domain in `astro.config.mjs` (`site:` field) and `src/pages/og-image.svg.ts`
