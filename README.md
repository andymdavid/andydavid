# Andy David — personal site

A light-first personal index built with Astro. It connects Andy's work, ventures, profiles, and writing around a single canonical identity.

## Commands

```sh
npm install
npm run dev
npm run build
```

## Content

- Projects: `src/content/projects/`
- Reading list: `src/content/links.json`
- Homepage: `src/pages/index.astro`
- About page: `src/pages/about.astro`
- Identity and structured data: `src/layouts/BaseLayout.astro`
- Canonical domain: `astro.config.mjs`

Projects use `category: bits` for digital work and `category: atoms` for physical-world work. Each entry automatically receives its own page and appears in the homepage filter.

## Before publishing

1. Confirm the canonical domain in `astro.config.mjs` and `public/robots.txt`.
2. Review the Intelligence Snacks signup link and destination.
3. Review the seed project descriptions, roles, dates, and favorite links.
4. Add any additional personal profiles to the `sameAs` list in `BaseLayout.astro`.
5. Verify every owned domain in Google Search Console and submit its sitemap.

## GitHub activity

The homepage can render Andy's contribution calendar at build time using GitHub's GraphQL API. Copy `.env.example` to `.env` and set `GITHUB_TOKEN` to a read-only token. The token remains server-side and is not included in the generated site.

The GitHub Pages workflow rebuilds the site daily to refresh this data. For access to the same contribution data as local builds, create a repository Actions secret named `GH_ACTIVITY_TOKEN`. The workflow falls back to GitHub's automatic token when that secret is unavailable. If GitHub is unavailable, the activity section is omitted and the rest of the build continues normally.

## Deployment

`.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages whenever `main` changes, on manual dispatch, and once each day. GitHub Pages must use **GitHub Actions** as its publishing source. The custom domain is configured in the repository's Pages settings; Astro's canonical `site` remains `https://andydavid.com.au`.

## Intelligence Snacks signup

The homepage links to the signup area on Intelligence Snacks. This keeps the personal site completely static and compatible with GitHub Pages and GitHub Actions; no Beehiiv credentials are stored here.
