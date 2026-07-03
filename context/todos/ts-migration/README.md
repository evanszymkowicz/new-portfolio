# TypeScript Modernization TODOs

Plan for finishing the JS → TS migration referenced in `CLAUDE.md` ("~94% JS / 6% TS ... new work should be TypeScript"). As of 2026-07-03, 33 source files are still `.js`/`.jsx` against 14 `.tsx`/`.ts`.

Sections are ordered by dependency: convert what everything else imports first (theme/style/utils), then leaf-out through chrome, content sections, pages, and finally cleanup. Each section is a self-contained PR-sized unit.

- [01-style-foundation.md](01-style-foundation.md) — `theme.js`, `global.js`, `shared.js` + styled-components `DefaultTheme` typing
- [02-shared-utils.md](02-shared-utils.md) — `utils/functions.js`
- [03-navigation-chrome.md](03-navigation-chrome.md) — `Navigation`, `Menu`, `ToggleMenu`, `Logo`, `Footer`
- [04-profile-section.md](04-profile-section.md) — `ProfileContent`, `ProfileIntroSection`, `ProfileList`, `ProfileListItem`, `Intro`, `JobListItem`, `EmailMe`
- [05-projects-section.md](05-projects-section.md) — `ProjectsListSection`, `ProjectsListItem`, `ProjectsFeaturedSection/style.js`
- [06-pages.md](06-pages.md) — `404.jsx`, `offline.jsx`
- [07-legacy-cleanup.md](07-legacy-cleanup.md) — drop dead `Image` component and `prop-types` usage once nothing needs it

## Ground rules for every section

- New filenames: `index.js` → `index.tsx` (if it returns JSX) or `index.ts`; `style.js` → `style.ts`.
- Type props with inline `interface`/`type` declarations, or import from `src/types/index.ts` if the shape is already canonical there (e.g. `Job`, `Skill`) — don't redeclare parallel shapes ([[03-local-project-types-duplicated]] was this exact mistake).
- No `any`; use `unknown` + narrowing where the shape is genuinely dynamic.
- `react/prop-types` is off — remove any `PropTypes` usage encountered along the way rather than typing both ways.
- After each file conversion: `npm run type-check` and `npm run lint` must stay clean, and the file's colocated test (if any) must still pass under its existing import path.
- Do not change component behavior/markup as part of the conversion — this is a mechanical typing pass, not a refactor. File genuine bugs found along the way as separate todos instead of fixing them inline.
