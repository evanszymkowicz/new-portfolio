# Add accessible name and state to mobile menu hamburger button

**Priority:** High (a11y)

## Issue

`src/components/ToggleMenu/index.js:4-10` renders a `<button>` containing only three `<span>` bars with no `aria-label`. Screen readers announce a bare "button" with no purpose, and there's no `aria-expanded` state reflecting the open/closed menu.

## Fix

Add `aria-label="Toggle menu"` and `aria-expanded={$open}` to the button element.

## Found by

ui-reviewer
