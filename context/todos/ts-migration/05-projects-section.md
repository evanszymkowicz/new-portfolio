# Convert remaining projects-section files to TypeScript

**Priority:** Medium

## Scope

- `src/components/ProjectsListSection/index.js` + `style.js`
- `src/components/ProjectsListItem/index.js` + `style.js`
- `src/components/ProjectsFeaturedSection/style.js` → `style.ts` (the `index.tsx` is already TS)

## Details

- `ProjectsContent` and `ProjectsFeaturedSection/index.tsx` are already converted and already import `Project`/`ProjectEdge`/`FeaturedProject` etc. from `src/types/index.ts` — reuse those same types here rather than introducing new local ones, so `ProjectsListSection`/`ProjectsListItem` agree with the already-typed components they receive props from.
- `ProjectsListSection` holds the category filter state (`web`/`code`/`email`) lifted from `ProjectsContent` per `CLAUDE.md` — type the filter value as a union (`"web" | "code" | "email"` or derive it from `Project["category"]`) instead of `string`.
- Do not touch `src/components/ProjectsContent/style.js` here — it's dead/unused (flagged separately, not part of this migration) and should be deleted rather than converted.

## Verify

- `npm run type-check`, `npm run lint`, `npm test`.
- Browser check: `/projects` category filtering still works, featured carousel unaffected.
