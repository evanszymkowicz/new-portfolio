# ~~Add off-white color token instead of repeated magic hex~~ (STALE — superseded)

**Priority:** ~~Low~~ Stale as of 2026-07-06 re-audit

## Status

**Resolved/stale.** The four component call sites originally listed (`Menu/style.js`, `ProfileList/style.js`, `ProjectsListSection/style.js`) no longer contain `#e4e6ec` — they now use theme tokens. The hex survives only in `gatsby-ssr.js`'s critical inline CSS, where it *mismatches* the theme's body color. That remaining issue is tracked in [[29-first-paint-text-color-mismatch]].

## Original issue (for reference)

The hardcoded color `#e4e6ec` was repeated in four places, none referencing `theme.colors`, violating the "no magic values" coding standard.

## Found by

refactor-scanner; marked stale by Fable 5 re-audit (2026-07-06)
