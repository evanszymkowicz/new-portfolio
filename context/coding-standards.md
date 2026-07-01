# Coding Standards

## TypeScript

- The codebase is mid-migration from JS to TS (~94% JS / 6% TS). **New work must be `.tsx`/`.ts`** — do not add new `.js`/`.jsx` files.
- Strict mode is enabled (`tsconfig.json`). No `any` — use proper typing or `unknown`.
- Canonical shared types live in `src/types/index.ts`. Reuse them; don't redefine parallel shapes.
- Use type inference where obvious, explicit types where they aid readability (component props, GraphQL query results).

## React

- Functional components only, hooks for state and side effects.
- One job per component; extract reusable logic into custom hooks or `src/style/shared.js` primitives.
- Guard against malformed or empty data (portfolio content comes from JSON via GraphQL — handle missing images/fields).
- Render explicit empty states rather than empty sections.
- `react/react-in-jsx-scope` and `react/prop-types` are off (React 18 + TypeScript) — do not add React imports solely for JSX or PropTypes.

## Gatsby

- Pages live in `src/pages/`, components in `src/components/`.
- Content lives in `src/data/*.json` and is exposed as GraphQL at build time via `gatsby-transformer-json`. Pages query GraphQL and pass typed data down as props — don't hardcode content in components.
- Each page exports a `Head` function using the `<SEO>` component (`src/components/SEO/index.tsx`). Per-page metadata constants belong in the `META` object in `src/utils/constants.ts`.
- Images use `gatsby-plugin-image` + `gatsby-transformer-sharp`. Project images live in `static/images/projects/<ProjectName>/`; match via `imageRelativePath` in `projects.json`.
- Run `npm run clean` when hitting stale-cache/build oddities.

## Styling (Styled Components)

- Styled Components 6 for all styling. Design tokens (colors, breakpoints, spacing, `media` helpers) live in `src/style/theme.js` — use them; no magic values.
- Shared layout primitives (e.g. `ContentWrapper`) live in `src/style/shared.js`.
- `GlobalStyle` is rendered from `Layout.tsx`, inside the page tree. **Do not** move it into `wrapRootElement` in `gatsby-browser.js` / `gatsby-ssr.js` — the site's own `wrapRootElement` composes outside `gatsby-plugin-styled-components`'s `StyleSheetManager` in Gatsby's plugin order, so styles rendered there never make it into the SSR'd HTML, causing FOUC in production only.
- No inline styles.

## File Organization & Naming

- Components: `src/components/<ComponentName>/index.tsx` (PascalCase directory + component name).
- Co-locate tests in `__tests__/` next to the component; shared tests in `src/components/__tests__/`.
- Functions: camelCase. Constants: SCREAMING_SNAKE_CASE. Types/Interfaces: PascalCase (no prefix).
- Prettier config is authoritative for formatting: semicolons, double quotes, 80-col width, `arrowParens: always`, `trailingComma: es5`. Run `npm run format`.

## DRY

- No copy-pasted constants, maps, or helpers across files — extract shared values to `src/utils/` or `src/style/`.
- `src/utils/constants.ts` is authoritative; the `.js` duplicate is a known leftover to remove, not a second source of truth.
- Resolve shared/derived data once and pass it down as props.

## Testing

- Jest + React Testing Library. Import from `src/test-utils/index.tsx` (custom render wrapper), **not** `@testing-library/react` directly.
- Gatsby internals are mocked in `__mocks__/gatsby.js`.
- Run a single file with `npx jest <path>`; full suite with `npm test`.

## Accessibility

- `jsx-a11y` is enforced by ESLint — keep it green. Alt text on all images, semantic elements, visible focus states, color never the sole indicator.

## Code Quality

- No commented-out code, unused imports, or unused variables (`@typescript-eslint/no-unused-vars` is an error; prefix intentional unused args with `_`).
- Keep the `npm run lint` and `npm run type-check` output clean for files you touch.
- Retire migration artifacts (`*.legacy.js`, duplicate `constants.js`) rather than extending them.
