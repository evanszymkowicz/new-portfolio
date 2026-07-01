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

**Styling**: Styled Components 6 with SSR enabled via `gatsby-plugin-styled-components`. Design tokens (colors, breakpoints, spacing, `media` helpers) live in `src/style/theme.js`. Global styles are injected via `wrapRootElement` in `gatsby-browser.js` and `gatsby-ssr.js` — do not apply `GlobalStyle` inside `Layout.tsx` to avoid SSR hydration mismatches. `src/style/shared.js` holds shared layout primitives like `ContentWrapper`.

**SEO**: Each page exports a `Head` function using the `<SEO>` component (`src/components/SEO/index.tsx`), which renders meta tags, Open Graph, Twitter Card, and JSON-LD structured data. Per-page metadata constants are in `src/utils/constants.ts` under the `META` object.

**Images**: `gatsby-plugin-image` + `gatsby-transformer-sharp` handle optimized images. Project images are stored in `static/images/projects/<ProjectName>/`. The `imageRelativePath` field in `projects.json` is matched against `childImageSharp.gatsbyImageData` inside `ProjectsContent/index.tsx` using a normalized path map.

**Projects page**: `ProjectsContent` splits projects into `featured` (carousel via `ProjectsFeaturedSection`) and non-featured list (filterable by category in `ProjectsListSection`). Category filter state is lifted into `ProjectsContent`. The `index.legacy.js` files are kept as reference during the TS migration.

**Layout**: `Layout.tsx` wraps every page with `Navigation` (bottom nav) and calls `promptInstall()` on mount for the PWA install prompt. Navigation uses `location.pathname` to highlight the active route.

**Testing**: Tests live in `__tests__/` subdirectories co-located with components, or in `src/components/__tests__/` for shared tests. Import from `src/test-utils/index.tsx` instead of `@testing-library/react` directly to get the custom render wrapper. Gatsby internals are mocked in `__mocks__/gatsby.js`.

**Deployment**: Cloudflare Pages via Wrangler CLI (`wrangler.toml`). GitHub Actions runs three workflows: CI (lint/type-check/test/build), Preview (PR preview URLs), and Deploy (push to `main`).

## Known state

- `src/utils/constants.js` is a duplicate of `src/utils/constants.ts` — the `.ts` version is authoritative; the `.js` file is a known leftover to remove.
- `src/components/ProjectsContent/index.legacy.js` and `src/components/ProjectsFeaturedSection/index.legacy.js` are migration artifacts; they are not imported anywhere.
- The codebase is ~94% JS / 6% TS. New components should be TypeScript.
