# Extract repeated dotted-underline CSS motif to a shared helper

**Priority:** Low

## Issue

The same dotted-underline decoration is hand-composed in five places (list expanded by the 2026-07-06 re-audit):

- `src/components/JobListItem/style.js:5` — `border-bottom: 1px dotted ${colors.darkRed}`
- `src/components/ProfileIntroSection/style.js` (`Content` link styles)
- `src/components/ProjectsListSection/style.js` (`StyledEmailMe`)
- `src/pages/404.jsx` (`BackToHome`)
- `src/components/ProjectsListItem/style.js` (`Wrapper`, dotted `colors.silver` variant)

with a hover variant in several of them.

## Fix

Extract to `src/style/shared.js`:

```js
export const dottedUnderline = css`
  border-bottom: 1px dotted ${colors.darkRed};
  &:hover { border-bottom-color: ${colors.darkYellow}; }
`;
```

## Found by

refactor-scanner
