# Reserve space for featured projects placeholder to avoid layout shift

**Priority:** Medium (performance — CLS)

## Issue

`src/components/ProjectsFeaturedSection/index.tsx:24-35` — `isLoaded` starts `false` on both server and first client render (to avoid a hydration mismatch), but `<Wrapper />` alone has no reserved height and collapses to near-zero. Once `useEffect` (line 32) sets `isLoaded: true`, the full 2×2 grid of image cards (`aspect-ratio: 7/5`, `style.js:53-58`) pops in, shifting everything below it on `/projects` right after hydration.

## Fix

Reserve space on the empty-state `Wrapper` (e.g. `min-height` computed from card `aspect-ratio` and expected column count). Consider computing `isMobile` from a CSS media query instead of JS state so the placeholder step isn't needed at all.

## Found by

web-performance-auditor
