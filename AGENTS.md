# AGENTS.md

Guidance for AI agents working in this repository. Harness- and model-agnostic.

## Project

Evan Szymkowicz's portfolio site. A static Gatsby build: four pages, JSON content, styled
components, deployed to Cloudflare Pages.

## Read before starting work

- `context/coding-standards.md` — TypeScript, React, Gatsby, Styled Components, and quality conventions.
- `context/ai-interaction.md` — how to work in this repo: verification steps, git/commit rules.
- `context/todos/ts-migration/` — the unfinished JS→TS migration, broken out by section.
- `CHEATSHEET.md` — every command in this repo, deduplicated. Read it when you need to run something.

## Architecture

**Framework**: Gatsby 5 with React 18 and TypeScript. The codebase is mid-migration — 33 files are still `.js`/`.jsx` against 12 `.ts`/`.tsx`, but new work must be `.tsx`/`.ts`. Pages are in `src/pages/`, components in `src/components/`.

**Data flow**: Content lives in `src/data/*.json` (jobs, projects, skills). Gatsby's `gatsby-transformer-json` exposes these as GraphQL at build time. Pages query GraphQL and pass typed data props down to content components. The canonical types are in `src/types/index.ts`.

**Styling**: Styled Components 6 with SSR enabled via `gatsby-plugin-styled-components`. Design tokens (colors, breakpoints, spacing, `media` helpers) live in `src/style/theme.js`. `GlobalStyle` (`src/style/global.js`) is rendered from `wrapPageElement` in both `gatsby-ssr.js` and `gatsby-browser.js` (the two must stay in sync to avoid hydration mismatches). `wrapPageElement` composes *inside* `gatsby-plugin-styled-components`'s `StyleSheetManager` (unlike `wrapRootElement`, which composes outside/after it — styles rendered there are silently dropped from the server-rendered HTML, causing a flash of unstyled text in production only) and sits at a stable position in Gatsby's route tree, so it isn't torn down on client-side page transitions the way a `GlobalStyle` nested inside per-page `Layout.tsx` usage would be (each page mounts `Layout` separately, so a `GlobalStyle` placed there gets unmounted and never reliably reinstated after the first client-side navigation). Do not move `GlobalStyle` into `wrapRootElement` or back into `Layout.tsx`. `src/style/shared.js` holds shared layout primitives like `ContentWrapper`.

**SEO**: Each page exports a `Head` function using the `<SEO>` component (`src/components/SEO/index.tsx`), which renders meta tags, Open Graph, Twitter Card, and JSON-LD structured data. Per-page metadata constants are in `src/utils/constants.ts` under the `META` object.

**Images**: `gatsby-plugin-image` + `gatsby-transformer-sharp` handle optimized images. Project images are stored in `static/images/projects/<ProjectName>/`. The `imageRelativePath` field in `projects.json` is matched against `childImageSharp.gatsbyImageData` inside `ProjectsContent/index.tsx` using a normalized path map.

**Projects page**: `ProjectsContent` splits projects into `featured` and non-featured lists (filterable by category in `ProjectsListSection`). `ProjectsFeaturedSection` renders both a CSS grid and a `react-responsive-carousel` and lets a media query pick one — do not reintroduce JS resize state for this. Category filter state is lifted into `ProjectsContent`.

**Layout**: `Layout.tsx` wraps every page with `Navigation` (bottom nav) and calls `promptInstall()` on mount for the PWA install prompt. Navigation uses `location.pathname` to highlight the active route.

**Deployment**: Cloudflare Pages via Wrangler CLI (`wrangler.toml`). GitHub Actions runs CI (lint/type-check/build) on PRs and deploys on pushes to `main`; preview deployments run on PRs.

## Hooks

`.githooks/pre-commit` runs ESLint and a Prettier check against staged `src/` files. Enable once
per clone: `git config core.hooksPath .githooks`. No harness hook support is required.

## Known state

- The JS→TS migration is unfinished; see `context/todos/ts-migration/`. New components must be TypeScript.
- There is no test suite and no e2e suite. Verification is `npm run lint`, `npm run type-check`, `npm run build`, and a browser pass for UI changes.
