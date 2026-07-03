# Convert profile section components to TypeScript

**Priority:** Medium

## Scope

- `src/components/ProfileContent/index.js` + `style.js`
- `src/components/ProfileIntroSection/index.js` + `style.js`
- `src/components/ProfileList/index.js` + `style.js`
- `src/components/ProfileListItem/index.js`
- `src/components/Intro/index.js` + `style.js`
- `src/components/JobListItem/index.js` + `style.js`
- `src/components/EmailMe/index.js`

## Details

- `ProfileList`/`ProfileListItem`/`JobListItem` render `Job`/`Skill` data from `src/data/*.json` via GraphQL — use the canonical `Job`, `JobEdge`, `Skill` types already in `src/types/index.ts` rather than inferring shapes from the JSON or redeclaring them locally.
- `ProfileContent` is queried by `src/pages/profile.tsx` (already TS) — once converted, its props type should match what `profile.tsx` actually passes; check the existing GraphQL query result shape there first so the two agree instead of drifting.
- `EmailMe` currently imports `PropTypes` (`src/components/EmailMe/index.js:2`) — drop it and type props directly instead of keeping both.
- `ProfileIntroSection` is the homepage's above-the-fold content — no known behavior quirks, straightforward conversion.

## Verify

- `npm run type-check`, `npm run lint`, `npm test`.
- Browser check: `/profile` page renders jobs/skills lists correctly, email link works.
