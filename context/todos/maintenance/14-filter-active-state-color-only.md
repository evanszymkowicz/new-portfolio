# Convey active project filter state beyond color, add aria-pressed

**Priority:** Medium (a11y)

## Issue

`src/components/ProjectsListSection/index.js:18-38` — the `web`/`code`/`email` category filter buttons only change text color (`FilterButton` `$active` prop, `src/components/ProjectsListSection/style.js` — active `colors.darkYellow`, inactive `colors.creamMuted`) with no `aria-pressed` state or non-color indicator. Compounded by the contrast issue in [[07-low-text-contrast]].

## Fix

Add `aria-pressed={$active}` to each `FilterButton`, and add a non-color indicator (underline, bold, or icon) for the active state.

## Found by

ui-reviewer
