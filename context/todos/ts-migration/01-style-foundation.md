# Convert style foundation to TypeScript

**Priority:** High (everything else in the migration imports these)

## Scope

- `src/style/theme.js` → `theme.ts`
- `src/style/global.js` → `global.ts`
- `src/style/shared.js` → `shared.ts`

## Details

- `theme.js` exports `colors`, `fonts`, `breakpoints`, `media`, `spaces`, `getOuterSpace`. Define a `Theme` type (or reuse the individual exported const types) and add the styled-components module augmentation so `props.theme` is typed everywhere a styled component reads it:

  ```ts
  // src/style/styled.d.ts
  import "styled-components";
  import { colors, fonts, spaces } from "./theme";

  declare module "styled-components" {
    export interface DefaultTheme {
      colors: typeof colors;
      fonts: typeof fonts;
      spaces: typeof spaces;
    }
  }
  ```

  Check whether `ThemeProvider` is actually wired up anywhere (`grep -r ThemeProvider src gatsby-*.js`) — if theme values are only ever imported directly (not read via `props.theme`), the module augmentation may be unnecessary; confirm before adding it.
- `media` is built with `Object.keys(breakpoints).reduce(...)` into an object of tagged-template functions — type it as `Record<keyof typeof breakpoints, (strings: TemplateStringsArray, ...args: unknown[]) => ReturnType<typeof css>>` rather than leaving it implicitly `any`.
- `shared.js` holds shared layout primitives (e.g. `ContentWrapper`, `ListItem`) — type any props they accept (e.g. `ListItem`'s consumers pass `$active`-style transient props per styled-components 6 convention).
- `global.js` is rendered from `wrapPageElement` in both `gatsby-ssr.js`/`gatsby-browser.js` — after renaming, update both import paths and confirm `npm run build` still SSRs without a FOUC regression (see `CLAUDE.md` note on `GlobalStyle` placement).

## Verify

- `npm run type-check`, `npm run lint`, `npm run build` (SSR is where a broken `GlobalStyle` import would surface).
