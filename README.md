# Evan Szymkowicz Portfolio

[![CI/CD Pipeline](https://github.com/evanszymkowicz/new-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/evanszymkowicz/new-portfolio/actions/workflows/ci.yml)

Modern portfolio website built with Gatsby 5, React 18, and TypeScript.

## Tech Stack

- **Framework**: Gatsby 5.13
- **UI Library**: React 18.3
- **Styling**: Styled Components 6
- **Language**: TypeScript + JavaScript
- **Quality**: ESLint + Prettier + `tsc --noEmit`
- **CI/CD**: GitHub Actions + Cloudflare Pages + Wrangler CLI

## Installation Steps

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:8000)
npm run build        # Build for production
npm run serve        # Serve production build locally
npm run clean        # Clean Gatsby cache
```

## New in 2025:

- TypeScript 5.9 (type safety)
- GitHub Actions (automation)
- Cloudflare Pages (hosting)
- Wrangler CLI (deployment)
- Progressive Web App (PWA)

## 2025 Modernization Roadmap

### High Priority Items:

1. **Add TypeScript**:
   - Installed TypeScript 5.9+.
   - Created `tsconfig.json` with Gatsby-specific features.
   - Migrated three pages to TypeScript: (`index.tsx`, `profile.tsx`, `projects.tsx`)
   - Added type definitions (`@types/react`, `@types/node`)
   - Added `npm run type-check`
   - Integrated TypeScript checking to the new CI/CD pipleine
   - Configured path aliases (`@/*` to `src/*`)

   **Impact**:
   - Core infrastructure ready for migration
   - 94.2% JavaScript, 5.8% TypeScript
   - New components should be written in TypeScript

2. **Implement SEO Component**
   - Comprehensive meta tags
   - Structured data implementation:
     - Person scehma
     - Website schema
     - Profile page schema
   - Automatic sitemap generation via `gatsby-plugin-sitemap`
   - PWA manifest with proper metadata
   - Canonical URLs
   - Robots meta directives (bot prevention)
   - Social media optimization

   **Impact**:
   - Search engine ready
   - Social media/sharing previews

3. **CI/CD Pipeline**:
   - `CI` workflow
     - ESLint for code quality checks
     - Prettier for code formatting
     - TypeScript type checking
     - Build verification
     - Runs on push to `main` and on PRs
     - Deploys to Cloudflare Pages after a successful `main` build
   - `Preview Deployment` workflow
     - Automatic preview URLs for PRs
     - Branch preview environments
   - GitHub Automation:
     - Pull request template with checklist
     - Bug report issue template
     - Feature request issue template
     - Dependabot weekly npm updates and monthly GitHub Actions updates

   **Impact**:
   - CI/CD with two automated workflows

### Medium Priorty Items:

1.  **Migrate Content**:
    - Added `gatsby-transformer-json`
    - Type-safe queries with GraphQL
    - Easy to maintain and update

    **Impact**:
    - Migrate existing JSON-based content management

2.  **Update browserslist**:
    - Dropped IE11

    **Impact**:
    - No legacy polyfills

3.  **Deploy to Cloudfare**:
    - Automatic deployments on push to `main`
    - Preview deployments for PRs
    - Global edge locations
    - Automatic SSL/TLS
    - Wrangler CLI integration

    **Impact**:
    - Deployed with automation to `https::/ews-tech.pages.dev`
    - HTTPS by default
    - Global CDN distribution

### Low Priority Items:

~~1. **Implement Service Worker**:~~
- ~~Installed `gatsby-plugin-offline`~~
   - ~~Configured caching:~~
     - ~~`staleWhileRevalidate` for content~~
     - ~~`cacheFirst` for fonts~~
     - ~~Runtime caching for images and assets~~
   - ~~Created `serviceWorkerUpdate.tsx` component for update notifications~~
   - ~~Created `serviceWorkerHelper.ts` utility functions~~
     - ~~`promptInstall()` - PWA install prompt~~
     - ~~`cacheFirst` for fonts~~
     - ~~`isStandalone()` to detect installed app~~
     - ~~`checkForUpdates()` for update check~~
   - ~~Integrated into Layout.tsx~~
   - ~~Full offline support for visited pages~~
   - ~~Automatic background updates~~
   - ~~User-controlled update activation~~

   ~~**Impact**:~~
   - ~~PWA with offline support`~~
   - ~~Splash screen~~

### Future Items:

1. **Finish the TS migration**:
   - Remaining `.js` components → `.tsx`

2. **E2E Testing with Playwright**:
   - Test structure and CI integration

> Retired 2026-10: Jest/RTL, Lighthouse CI, CodeQL, the class-based `Image`
> component, the `/offline` page, and the `.js` duplicate of `constants.ts` — all
> removed as speculative or dead. Dependabot was reinstated with a weekly cadence.
> See `git log`.
