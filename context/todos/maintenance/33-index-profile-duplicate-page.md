# Decide fate of /profile (identical to /)

**Priority:** Low (product decision needed — do not implement without direction)

## Issue

`src/pages/index.tsx` and `src/pages/profile.tsx` run identical GraphQL queries and both render `ProfileContent` — the only difference is `Head` metadata. Both pages are emitted to the sitemap with different canonical URLs, a duplicate-content smell for SEO. Neither the nav (`Menu` links only Home and Featured) nor anything else on the site links to `/profile`.

Related smaller DRY issues in the same files:

- All three pages hardcode inline keyword arrays in `Head` instead of using the `META.*.keywords` arrays that already exist in `src/utils/constants.ts` (index.tsx even merges profile keywords into its inline list).
- `src/utils/constants.ts` still has placeholder comments ("Update with your actual Twitter handle", "Update with actual URL") on `SITE_CONFIG.social` — verify those values are real, since `twitter:creator` meta is emitted from them.

## Fix

Ask the user: remove `/profile`, redirect it to `/`, or give it distinct content. Independently: switch the `Head` keyword props to `META.*.keywords` and resolve the placeholder comments.

## Found by

Fable 5 re-audit (2026-07-06)
