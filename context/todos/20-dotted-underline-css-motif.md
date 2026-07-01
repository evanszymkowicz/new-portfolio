# Extract repeated dotted-underline CSS motif to a shared helper

**Priority:** Low

## Issue

The same dotted-underline decoration is hand-composed in three styled files:

- `src/components/JobListItem/style.js:5` — `border-bottom: 1px dotted ${colors.darkRed}`
- `src/components/ProfileIntroSection/style.js:83`
- `src/components/ProjectsListSection/style.js:89`

with a hover variant in two of them.

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
