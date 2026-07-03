# Increase mobile touch target sizes to 44px minimum

**Priority:** Medium (a11y)

## Issue

Several interactive elements are below the 44x44px recommended touch target size:

- `ToggleMenu` wrapper is 1.5rem × 1.5rem (24×24px): `src/components/ToggleMenu/style.js:11-12`
- Mobile drawer nav links have only 0.5rem vertical padding around ~14px text (~30px total tap height): `src/components/Menu/style.js:71-78`
- `Logo` link wraps only a 22×22px image with no extra padding on the hit area: `src/components/Logo/index.js:11`, `src/components/Logo/style.js:19-29`

## Fix

Increase padding/hit-area on each of these to reach ~44px minimum without necessarily growing the visual icon size (e.g. padding on the clickable wrapper).

## Found by

ui-reviewer
