# Remove duplicate SkillsList styled-component and dead ProjectsContent/style.js

**Priority:** Medium

## Issue

`ProfileContent/style.js:31-49` and `ProjectsContent/style.js:21-39` contain a byte-for-byte identical `styled(ProfileList)` block (`SkillsList`), and `ListsSection` in both files overlaps heavily. Worse, `ProjectsContent/index.tsx` never imports `./style` at all — `ProjectsContent/style.js` is entirely dead code duplicating the live `ProfileContent` styles.

## Fix

Delete the unused `ProjectsContent/style.js`. If `SkillsList` is needed elsewhere in the future, promote it to a co-located export or `src/style/shared.js` instead of re-duplicating.

## Found by

refactor-scanner
