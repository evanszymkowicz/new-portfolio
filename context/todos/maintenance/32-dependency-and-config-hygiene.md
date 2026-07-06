# Prune unused dependencies and dead offline-caching config

**Priority:** Low (cleanup)

## Issue

- `package.json` lists `jsdom` and `schema-dts` in production `dependencies`; neither is imported anywhere in `src` or the gatsby files (verified via grep). Jest's jsdom environment comes from `jest-environment-jsdom` (devDependencies), which bundles its own jsdom.
- `gatsby-config.js` (gatsby-plugin-offline `runtimeCaching`) has rules for `fonts.googleapis.com` and `fonts.gstatic.com`, but all fonts are self-hosted under `static/fonts/` — those cache rules never match.

## Fix

Remove `jsdom` and `schema-dts` from dependencies (`schema-dts` could alternatively be put to use typing the JSON-LD object in `src/components/SEO/index.tsx` — currently a plain untyped object — if that's preferred over removal). Drop the two Google Fonts `runtimeCaching` entries.

## Found by

Fable 5 re-audit (2026-07-06)
