# Remove closed mobile menu links from tab order

**Priority:** Medium (a11y)

## Issue

`src/components/Navigation/style.js` — the mobile drawer (`Shoable`) collapses with `max-height: 0; overflow: hidden`, which hides it visually but leaves its contents in the accessibility tree and tab order. With the menu closed on mobile, a keyboard user tabs through five invisible links (GitHub, LinkedIn, Contact, Home, Featured) with no visible focus.

Also, `ToggleMenu` sets `aria-expanded` but has no `aria-controls` relating it to the drawer.

## Fix

Add `visibility: hidden` to the closed state (with `transition: visibility 0s .6s` so it applies after the max-height animation) or set `inert` on the closed drawer. Add an `id` to `Shoable`'s content and `aria-controls` on the toggle button.

## Found by

Fable 5 re-audit (2026-07-06)
