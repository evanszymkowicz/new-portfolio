# Consolidate to a single self-hosted font-loading strategy

**Priority:** High (performance)

## Issue

The site loads "Roboto" from `fonts.googleapis.com` as a render-blocking external stylesheet (`gatsby-ssr.js:31-49`, only `preconnect`-ed, not preloaded/inlined) *and* self-hosts a full 14-file "Roboto Mono" family via `@font-face` (`src/style/global.js:5-118`, see [[08-fonts-uncompressed-ttf]]). Two separate font origins/strategies both sit in the critical path for first text paint.

## Fix

Self-host "Roboto" alongside "Roboto Mono" (same WOFF2/subsetting pipeline) and drop the `fonts.googleapis.com` stylesheet link + its preconnect tags in `gatsby-ssr.js:31-49`, removing a third-party origin from the critical rendering path entirely.

## Found by

web-performance-auditor
