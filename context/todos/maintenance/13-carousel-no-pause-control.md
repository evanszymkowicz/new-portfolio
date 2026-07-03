# Add pause/stop control to auto-advancing featured projects carousel

**Priority:** Medium (a11y — WCAG 2.2.2)

## Issue

`src/components/ProjectsFeaturedSection/index.tsx:97-106` — on mobile (<768px), the featured projects render as a `react-responsive-carousel` with `autoPlay` and a 10s interval, `showArrows={false}`, `showStatus={false}`. There is no visible way to pause or stop it.

## Fix

Expose a pause/stop control (visible button, or pause-on-hover/focus plus a toggle), or disable `autoPlay` and let users advance manually via arrows/dots.

## Found by

ui-reviewer
