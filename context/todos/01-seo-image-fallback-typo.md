# Fix broken SEO image fallback and malformed twitter:description meta

**Priority:** High (live bug — breaks social share previews on every page)

## Issue

`src/components/SEO/index.tsx` has two typos that are currently shipping in production:

- Default OG/Twitter image fallback string is `"...evan-szymkowicz. jpeg"` (stray space before `jpeg`) — 404s. Should reuse `META.common.image` / `SITE_CONFIG.defaultImage` from `src/utils/constants.ts` instead of a hand-typed duplicate string.
- `<meta name="twitter: description" .../>` has a space after the colon, making the attribute name invalid — Twitter/X never receives the description.

Root cause: after PR #91 removed the old inline `<SEO image={...} />` calls, none of `src/pages/index.tsx`, `profile.tsx`, `projects.tsx` pass an explicit `image` to `Head()`, so every page falls through to the broken default.

## Fix

- Pass `image={META.common.image}` from each page's `Head()`, or better, default the `image` param inside `SEO` directly to `META.common.image` so there's one source of truth.
- Fix the `twitter: description` → `twitter:description` typo.

## Found by

code-scanner, ui-reviewer
