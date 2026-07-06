# Reconcile critical-CSS text color with theme (supersedes 21)

**Priority:** Low

## Issue

The critical inline CSS injected by `gatsby-ssr.js:24,28` sets text color `#E4E6EC`, but `GlobalStyle` (`src/style/global.js`) sets `body { color: ${colors.cream} }` (`#F5E9C8`). On first paint, text renders in the off-white, then shifts to cream once the styled-components CSS applies — a subtle flash of mismatched color, and the only remaining home of the `#E4E6EC` magic hex.

This supersedes [[21-magic-hex-color-off-white]] — the four component call sites listed there no longer contain the hex.

## Fix

Pick one color as the canonical body text color. Either change the critical CSS to `#F5E9C8` (cream), or if `#E4E6EC` is preferred, add it to `theme.js` and use the token in `GlobalStyle`. `gatsby-ssr.js` can import from `src/style/theme.js` to keep the two in lockstep. Same consideration applies to the `#013220` background hex there (it matches `colors.darkGreen`, but is hand-copied).

## Found by

Fable 5 re-audit (2026-07-06)
