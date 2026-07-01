# Move promptInstall() to wrapPageElement to stop listener re-registration

**Priority:** High (performance / correctness)

## Issue

`Layout` is imported directly into each page rather than mounted once via `wrapPageElement`, so Gatsby's client-side router fully unmounts/remounts `Layout` on every route change, re-running `useEffect(() => promptInstall(), [])` (`src/components/Layout.tsx:26-29`) each time. `promptInstall()` (`src/utils/serviceWorkerHelper.ts:18-33`) adds `beforeinstallprompt`/`appinstalled` window listeners with no removal and no dedupe guard, so listeners accumulate per navigation, and `showInstallButton` could append duplicate install buttons via `document.body.appendChild`.

## Fix

- Move page chrome (`Layout`/`Navigation`) to `wrapPageElement` in `gatsby-browser.js`/`gatsby-ssr.js` so it persists across route changes and only `children` swap. Must stay compatible with the PR #91 FOUC fix — keep `GlobalStyle` rendered inside the SSR'd tree, not in `wrapRootElement`.
- Add a guard in `promptInstall()` (e.g. module-level `let installed = false`) so listeners attach once regardless of where it's called from.

## Found by

web-performance-auditor
