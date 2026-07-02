# Add off-white color token instead of repeated magic hex

**Priority:** Low

## Issue

The hardcoded color `#e4e6ec` (a near-white "bright text/hover" color) is repeated in four places, none referencing `theme.colors`:

- `src/components/Menu/style.js:47,105`
- `src/components/ProfileList/style.js:5`
- `src/components/ProjectsListSection/style.js:65`

Violates the "no magic values" coding standard.

## Fix

Add `colors.offWhite: "#E4E6EC"` to `src/style/theme.js` and reference it at all four call sites.

## Found by

refactor-scanner
