# Remove unused Loader primitive and isStandalone helper

**Priority:** Low (cleanup)

## Issue

- `src/style/shared.js` — `Loader` is exported but imported nowhere (verified via grep). It also uses a non-transient `isLoaded` prop (would leak to the DOM as an unknown attribute if ever used with styled-components 6) and hardcodes `background: #013220` instead of `colors.darkGreen`.
- `src/utils/serviceWorkerHelper.ts:9` — `isStandalone` is exported and never used.

Companion to [[19-stray-swp-file-and-dead-legacy-image]]; same "retire migration artifacts" standard.

## Fix

Delete both. If a loader is ever needed again, rebuild it with a `$isLoaded` transient prop and theme tokens.

## Found by

Fable 5 re-audit (2026-07-06)
