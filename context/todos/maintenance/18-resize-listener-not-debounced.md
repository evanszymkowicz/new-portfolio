# Debounce/passive-ize the ProjectsFeaturedSection resize listener

**Priority:** Medium (performance)

## Issue

`src/components/ProjectsFeaturedSection/index.tsx:31-34` — `handleResize` runs a synchronous `setState` on every `resize` event with no debounce/throttle. On drag-resize or mobile orientation/keyboard-open events this can fire many times per second, each re-rendering the featured-projects tree.

**Correction (2026-07-06 re-audit):** dropped the `{ passive: true }` suggestion — it has no effect on `resize` (it only matters for cancelable scroll-class events).

## Fix

Replace the `resize` listener with a `window.matchMedia("(max-width: 767px)").addEventListener("change", …)` listener — it fires only when the breakpoint is crossed, needs no debouncing, and pairs with the placeholder fix in [[17-featured-projects-layout-shift]]. A CSS-only responsive layout remains the ideal end state (no JS breakpoint check at all).

## Found by

web-performance-auditor
