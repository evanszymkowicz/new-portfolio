# Convert self-hosted fonts from TTF to subsetted, preloaded WOFF2

**Priority:** High (performance — LCP/CLS risk)

## Issue

All 14 "Roboto Mono" weight/style `@font-face` rules in `src/style/global.js:1-118` point at uncompressed `.ttf` files in `static/fonts/` (~87-95KB each), none subsetted (`unicode-range`) or preloaded. TTF is typically 30-50% larger than WOFF2 for the same glyphs, and un-preloaded fonts are discovered late in the CSSOM parse, which can shift LCP/CLS timing for any mono-font text.

## Fix

- Convert `.ttf` → `.woff2` (e.g. via `fonttools`/`glyphhanger`), list `.woff2` first in each `src`.
- Preload the weights used above the fold:
  ```html
  <link rel="preload" href="/fonts/RobotoMono-Regular.woff2" as="font" type="font/woff2" crossorigin>
  ```

## Found by

web-performance-auditor
