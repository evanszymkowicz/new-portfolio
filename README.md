# Evan Szymkowicz Portfolio

[![CI/CD Pipeline](https://github.com/evanszymkowicz/new-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/evanszymkowicz/new-portfolio/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/evanszymkowicz/new-portfolio/branch/main/graph/badge.svg)](https://codecov.io/gh/evanszymkowicz/new-portfolio)

Modern portfolio website built with Gatsby 5, React 18, and TypeScript.

## Tech Stack

- **Framework**: Gatsby 5.13
- **UI Library**: React 18.3
- **Styling**: Styled Components 6
- **Language**: TypeScript + JavaScript
- **Testing**: Jest + React Testing Library
- **CI/CD**: GitHub Actions + Cloudfare pages + Wranger CLI + Dependabot

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
- Jest 30 (unit testing)
- GitHub Actions (automation)
- Cloudflare Pages (hosting)
- Wrangler CLI (deployment)
- Dependabot (dependency management)
- Progressive Web App (PWA)

## 2025 Modernization Roadmap

### High Priority Items:

1. **Add TypeScript**:
   - Installed TypeScript 5.9+.
   - Created `tsconfig.json` with Gatsby-specific features.
   - Migrated three pages to TypeScript: (`index.tsx`, `profile.tsx`, `projects.tsx`)
   - Added three type definitions (`@types/react`, `@types/node`, `@types/jest`)
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

3. **Set Up Testing**:
   - Configured Jest 30.2.0
   - Installed React Testing Library 16.3.0
   - JSDOM
   - Coverage reporting (HTML/JSON)
   - Created testing scripts:
     - `npm test`
     - `npm run test:watch`
     - `npm run test:coverage`
     - `npm run test:ci`
   - CSS module mocking
   - Static asset mocking

   **Impact**: New testing infrastructure

4. **CI/CI Pipeline**:
   - `Workflow No. 1`: CI Pipeline
     - ESlint for code quality checks
     - Prettier for code formatting
     - TypeScript type checking
     - Jest unit tests
     - Coverage reporting
     - Build verification
     - Runs on push to `main`
     - Runs on all PRs
   - `Workflow No. 2`: Preview Deployment
     - Automatic preview URLs for PRs
     - Branch preview enviornments
   - `Workflow No. 3`: Deployment
     - Automated deployment to Cloudfare
     - Wranger CLI integration
     - Commit tracking
     - Manual triggers
     - Deployment summaries
     - Runs on push to `main`
   - GitHub Automation:
     - Pull request template with checklist
     - Bug report issue template
     - Feature request issue template
     - Dependabot weekly updates (GitHub Actions)

   **Impact**:
   - CI/CD with three automated workflows

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

3.  **Add Lighthouse Checks**:
    - Site optimized for Lightouse
    - `gatsby-plugin-image` for optimized images
    - Created PWA manifest
    - Service worker for offline support
    - Sitemap for SEO
    - Structured data
    - Automated Lighthouse CI in GitHub actions

4.  **Deploy to Cloudfare**:
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

1. **Implement Service Worker**:
   - Installed `gatsby-plugin-offline
   - Configured caching:
     - `staleWhileRevalidate` for content
     - `cacheFirst` for fonts
     - Runtime caching for images and assets
   - Created `serviceWorkerUpdate.tsx` component for update notifications
   - Created `serviceWorkerHelper.ts` utility functions
     - `promptInstall()` - PWA install prompt
     - `cacheFirst` for fonts
     - `isStandalone()` to detect installed app
     - `checkForUpdates()` for update check
   - Integrated into Layout.tsx
   - Full offline support for visited pages
   - Automatic background updates
   - User-controlled update activation

   **Impact**:
   - PWA with offline support
   - Splash screen

### Future Items:
