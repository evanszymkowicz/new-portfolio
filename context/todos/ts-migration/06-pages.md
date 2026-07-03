# Convert remaining pages to TypeScript

**Priority:** Low (isolated, no downstream imports)

## Scope

- `src/pages/404.jsx` → `404.tsx`
- `src/pages/offline.jsx` → `offline.tsx`

## Details

- Both are simple static pages, unlike `index.tsx`/`profile.tsx`/`projects.tsx` they likely take no GraphQL props — confirm via their current content before assuming a `PageProps` type is even needed.
- Each should still export a `Head` function using `<SEO>` per the project's SEO pattern (`CLAUDE.md`) — verify they already do, and if not, that's a pre-existing gap to flag separately rather than scope-creep into this conversion.

## Verify

- `npm run type-check`, `npm run lint`, `npm run build` (Gatsby's special-cased `404`/`offline` page generation should still work — check the production build output for both routes).
