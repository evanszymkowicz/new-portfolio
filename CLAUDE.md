# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Context Files

Read these for the full working context:

- @context/coding-standards.md — TypeScript, React, Gatsby, Styled Components, testing, and quality conventions
- @context/ai-interaction.md — how to collaborate, verification steps, and git/commit rules

## Commands

```bash
npm run dev             # Start dev server at localhost:8000
npm run build           # Production build
npm run serve           # Serve production build locally
npm run clean           # Clear Gatsby cache (run when seeing stale build issues)

npm run type-check      # TypeScript check (no emit)
npm run lint            # ESLint across src/
npm run lint:fix        # ESLint with auto-fix
npm run format          # Prettier format src/

npm test                # Run Jest tests
npm run test:watch      # Jest in watch mode
npm run test:coverage   # Jest with coverage report
npm run test:ci         # Jest for CI (--ci --coverage --maxWorkers=2)
```

To run a single test file:
```bash
npx jest src/components/__tests__/layout.test.tsx
```

## Architecture

**Framework**: Gatsby 5 with React 18 and TypeScript. The codebase is mid-migration — most components are `.js`, but new work should be `.tsx`/`.ts`. Pages are in `src/pages/`, components in `src/components/`.

**Data flow**: Content lives in `src/data/*.json` (jobs, projects, skills). Gatsby's `gatsby-transformer-json` exposes these as GraphQL at build time. Pages query GraphQL and pass typed data props down to content components. The canonical types are in `src/types/index.ts`.

**Styling**: Styled Components 6 with SSR enabled via `gatsby-plugin-styled-components`. Design tokens (colors, breakpoints, spacing, `media` helpers) live in `src/style/theme.js`. `GlobalStyle` (`src/style/global.js`) is rendered from `wrapPageElement` in both `gatsby-ssr.js` and `gatsby-browser.js` (the two must stay in sync to avoid hydration mismatches). `wrapPageElement` composes *inside* `gatsby-plugin-styled-components`'s `StyleSheetManager` (unlike `wrapRootElement`, which composes outside/after it — styles rendered there are silently dropped from the server-rendered HTML, causing a flash of unstyled text in production only) and sits at a stable position in Gatsby's route tree, so it isn't torn down on client-side page transitions the way a `GlobalStyle` nested inside per-page `Layout.tsx` usage would be (each page mounts `Layout` separately, so a `GlobalStyle` placed there gets unmounted and never reliably reinstated after the first client-side navigation). Do not move `GlobalStyle` into `wrapRootElement` or back into `Layout.tsx`. `src/style/shared.js` holds shared layout primitives like `ContentWrapper`.

**SEO**: Each page exports a `Head` function using the `<SEO>` component (`src/components/SEO/index.tsx`), which renders meta tags, Open Graph, Twitter Card, and JSON-LD structured data. Per-page metadata constants are in `src/utils/constants.ts` under the `META` object.

**Images**: `gatsby-plugin-image` + `gatsby-transformer-sharp` handle optimized images. Project images are stored in `static/images/projects/<ProjectName>/`. The `imageRelativePath` field in `projects.json` is matched against `childImageSharp.gatsbyImageData` inside `ProjectsContent/index.tsx` using a normalized path map.

**Projects page**: `ProjectsContent` splits projects into `featured` (carousel via `ProjectsFeaturedSection`) and non-featured list (filterable by category in `ProjectsListSection`). Category filter state is lifted into `ProjectsContent`.

**Layout**: `Layout.tsx` wraps every page with `Navigation` (bottom nav) and calls `promptInstall()` on mount for the PWA install prompt. Navigation uses `location.pathname` to highlight the active route.

**Testing**: Tests live in `__tests__/` subdirectories co-located with components, or in `src/components/__tests__/` for shared tests. Import from `src/test-utils/index.tsx` instead of `@testing-library/react` directly to get the custom render wrapper. Gatsby internals are mocked in `__mocks__/gatsby.js`.

**Deployment**: Cloudflare Pages via Wrangler CLI (`wrangler.toml`). GitHub Actions runs three workflows: CI (lint/type-check/test/build), Preview (PR preview URLs), and Deploy (push to `main`).

## Known state

- The codebase is ~94% JS / 6% TS. New components should be TypeScript.
