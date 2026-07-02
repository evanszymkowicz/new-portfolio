# Fix low-contrast grey text (WCAG 1.4.3)

**Priority:** High (a11y)

## Issue

`colors.grey = "#808080"` (`src/style/theme.js:9`) rendered on `colors.darkGreen` background computes to roughly 3.6:1 contrast, below the 4.5:1 AA minimum for normal-size text. Affects:

- Homepage intro copy: `src/components/ProfileIntroSection/style.js:70-72` (primary above-the-fold value-prop text)
- Job/skill list rows: `src/style/shared.js:25-30` (`ListItem`)
- Inactive nav links: `src/components/Menu/style.js:96`
- Inactive filter buttons and project year text: `src/components/ProjectsListSection/style.js:54`, `src/components/ProjectsListItem/style.js:41`

## Fix

Introduce a darker/lighter grey token in `src/style/theme.js` that meets 4.5:1 against `darkGreen`, and swap the affected usages to it.

## Found by

ui-reviewer
