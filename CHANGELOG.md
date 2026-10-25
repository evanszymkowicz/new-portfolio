# Changelog

## [Unreleased]

### Added
- `InstallPrompt` component for PWA install prompt with `beforeinstallprompt` handling.
- Pause/play button for the featured-projects carousel.
- Skip-to-content link in `Layout`.
- `global.d.ts` for ambient type declarations.
- Dependabot configuration (`.github/dependabot.yml`).

### Changed
- `Layout` now renders `<InstallPrompt />` instead of calling the old service-worker helper.
- `ProjectsFeaturedSection` toggles carousel autoplay via React state.
- Various components cleaned up by removing redundant `import React` statements.
- README updated; `AGENTS.md` kept in sync.

### Fixed
- `gatsby-browser.js` cleaned up to match SSR style rendering.
- `ProfileContent` safely handles missing skills data.
- `ProjectsContent` featured filter no longer includes non-featured projects.
- Nested `<main>` landmark in `ProjectsListSection` removed.
- `InstallPrompt` hides on prompt failure and avoids overlapping the mobile nav menu.
- Category filter buttons meet minimum touch-target size.
- Focus indicators added to `InstallPrompt`, carousel pause button, and project list links.
- Category filter buttons expose pressed state via `aria-pressed`.
- Decorative divider image hidden from screen readers with empty `alt`.
- `ProfileContent` and `Layout` skip link use theme font token.
- `ProjectsFeaturedSection` grid and carousel items use distinct React keys.
- `Layout` uses `100dvh` fallback for mobile dynamic viewport height.
- Skip link positioning changed to `transform: translateY(-100%)` for robustness.

## 2026-10-23

### Added
- Batch push of low-risk items (PWA prompt prep, style fixes, type updates).

## 2026-10-22

### Changed
- Simplified/optimized PNG assets for email and featured project images.

## 2026-10-14

### Added
- Per-category filtering on the projects page.
- Featured projects can now be grouped by category.

### Changed
- `ProjectsFeaturedSection` renders both the CSS grid and the carousel; visibility is controlled by media queries instead of JS resize state.
- Removed `useEffect` resize listener, `isMobile`, and `isLoaded` state from `ProjectsFeaturedSection`.
- Removed unused no-image CTA branch in `ProjectsFeaturedSection`.

## 2026-07-03

### Changed
- UI polish pass on spacing, typography, and layout details.

## 2026-07-02

### Fixed
- Systemic style and hydration issues across pages.

## 2026-07-01

### Changed
- Homepage text updated.
- Global styles moved to `wrapPageElement` in `gatsby-ssr.js` and `gatsby-browser.js` to eliminate flash-of-unstyled-content (FOUT).

### Added
- Claude integration.

## 2026-03-22

### Changed
- General code cleanup.

## 2026-03-20

### Added
- Email category and related projects.
- New favicon.

## 2026-03-19

### Changed
- Dependency update.

## 2026-03-18

### Removed
- Custom service worker in favor of `gatsby-plugin-offline` defaults.
