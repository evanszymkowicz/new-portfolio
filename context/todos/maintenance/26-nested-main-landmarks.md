# Fix nested `<main>` landmarks (invalid HTML on every page)

**Priority:** High (a11y, invalid HTML)

## Issue

`src/components/Layout.tsx:41` renders `<main>{children}</main>` around every page. Inside it:

- `src/components/ProjectsListSection/index.js:38` renders a literal `<main>` for the project list → `/projects` has a `<main>` nested inside a `<main>`.
- `src/components/ProfileIntroSection/style.js` defines `Content = styled.main`, rendered inside `InfoWrapper = styled.header` → `/` and `/profile` have `main > header > main`. `<main>` is not permitted as a descendant of `<header>` at all.

A document must have a single `<main>` landmark; screen readers use it to jump to primary content. Nested mains are invalid HTML and break that navigation.

Related: `jest.setup.js:8-14` suppresses React's `validateDOMNesting` and "React does not recognize" warnings in tests — that suppression is hiding exactly this class of bug (see fix step 3).

## Fix

1. Keep the single `<main>` in `Layout.tsx` (it's also the natural target for the skip link in [[16-no-skip-to-content-link]]).
2. Change `ProjectsListSection`'s `<main>` to a `<div>` or `<section>`, and `ProfileIntroSection`'s `Content` from `styled.main` to `styled.div`.
3. Remove the `validateDOMNesting` (and ideally the whole) console.error suppression from `jest.setup.js` so future nesting bugs surface in tests.

## Found by

Fable 5 re-audit (2026-07-06)
