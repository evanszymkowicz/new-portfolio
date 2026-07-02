# Debounce/passive-ize the ProjectsFeaturedSection resize listener

**Priority:** Medium (performance)

## Issue

`src/components/ProjectsFeaturedSection/index.tsx:31-34` — `handleResize` runs a synchronous `setState` on every `resize` event with no debounce/throttle and no `{ passive: true }`. On drag-resize or mobile orientation/keyboard-open events this can fire many times per second, each re-rendering the featured-projects tree.

## Fix

Debounce with `requestAnimationFrame` or a small timeout. Better: replace the JS breakpoint check with a CSS-only responsive layout (see [[17-featured-projects-layout-shift]]) so no `resize` listener is needed at all.

## Found by

web-performance-auditor
