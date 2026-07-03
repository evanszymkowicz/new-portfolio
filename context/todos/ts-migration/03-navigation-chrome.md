# Convert navigation/chrome components to TypeScript

**Priority:** High (rendered on every page via `Layout.tsx`)

## Scope

- `src/components/Navigation/index.js` + `style.js`
- `src/components/Menu/index.js` + `style.js`
- `src/components/ToggleMenu/index.js` + `style.js`
- `src/components/Logo/index.js` + `style.js`
- `src/components/Footer/index.js` + `style.js`

## Details

- `Navigation` reads `location.pathname` to highlight the active route (per `CLAUDE.md`) — type its props against whatever Gatsby passes in (`PageProps["location"]` or a narrowed `{ pathname: string }`), don't accept `any`.
- `Menu`/`Footer` consume `SITE_CONFIG.social` (already typed in `src/utils/constants.ts`) — no new types needed there, just fix the import path/extension.
- `ToggleMenu` takes an `$open` transient prop and fires a toggle callback — type as `{ $open: boolean; onToggle: () => void }` (confirm actual prop names against current usage before typing).
- `Logo` is a simple link-wrapped image — low risk, type any `href`/`className` props.
- These five components are the most interdependent of the remaining JS (`Layout` → `Navigation` → `Menu`/`ToggleMenu`/`Logo`), so convert together in one PR to avoid a half-typed import graph.

## Verify

- `npm run type-check`, `npm run lint`, `npm test` (check `__tests__/` for any of these five, plus shared tests in `src/components/__tests__/`).
- Manually verify in the browser: mobile menu open/close, active nav highlighting, logo link, footer links.
