# Restore visible keyboard focus on interactive controls

**Priority:** High (a11y — WCAG 2.1 AA 2.4.7)

## Issue

`outline: 0` is set with no replacement focus style on:

- `src/components/ToggleMenu/style.js:59-61` — mobile menu hamburger button
- `src/components/ProjectsListSection/style.js:44-46` — category `FilterButton`s

Keyboard users tabbing through the mobile nav toggle or project filters get no visual indication of focus.

## Fix

Replace `outline: 0` with a visible focus style (e.g. an outline using a theme color, or a box-shadow ring) on both elements. Consider extracting a shared `focus-visible` styled-components helper to `src/style/shared.js` since the pattern repeats.

## Found by

ui-reviewer
