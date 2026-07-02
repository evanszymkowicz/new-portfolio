# Remove stray .swp file and dead legacy Image component

**Priority:** Medium (cleanup)

## Issue

- `src/components/ProjectsContent/.index.tsx.swp` — a stray vim swap file checked into the component directory.
- `src/components/Image/index.js` — legacy class-based `<picture>` component, not imported anywhere (verified via grep); `ProfileIntroSection/style.js:2,17` imports it and defines an unused `StyledImage` export that nothing in `ProfileIntroSection/index.js` renders.
- `src/components/ProjectsListItem/index.js:17` — empty `<ProjectInfos></ProjectInfos>` element rendered with no content, dead markup.

## Fix

Delete the `.swp` file, remove the unused `Image`/`StyledImage` import and dead `ProjectInfos` markup. Matches the project's existing "retire migration artifacts" standard (same pattern as `*.legacy.js` cleanup already called out in `CLAUDE.md`).

## Found by

ui-reviewer
