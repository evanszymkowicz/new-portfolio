# Changelog

## 2026-07-01 — Fix flash of unstyled text (production build only)

Two independent bugs were compounding to cause a brief flash of unstyled text on page load, visible only in production builds (`gatsby build` / `gatsby serve`, not `gatsby develop`).

### Bug 1: duplicate SEO render caused a React hydration failure

`ProfileContent/index.js` and `ProjectsContent/index.tsx` each imported a legacy `Head`/`SEO` component (`src/components/Head`) and rendered it **inline in the page body**, in addition to the correct `Head()` export already used by `src/pages/index.tsx` and `src/pages/projects.tsx`. The legacy component rendered raw `<html>`, `<title>`, and `<meta>` tags as JSX children, producing invalid nested markup inside `<body>` in the server-rendered HTML. Browsers silently "correct" this while parsing the response, so the parsed DOM no longer matched what React expected to hydrate — causing React errors #418 (hydration mismatch) and #423 (fallback to a full client-side re-render of the root). That discard-and-rerender was the visible flash.

Verified with Playwright: `gatsby serve` consistently threw 3x error #418 + 1x error #423 in the console on every load; `gatsby develop` threw none.

**Fix:**
- Removed the inline `<SEO>`/`<Head>` renders and now-unused imports from `ProfileContent/index.js` and `ProjectsContent/index.tsx`.
- Deleted `src/components/Head/` (a stray, unused duplicate of `src/components/SEO`) once nothing imported it.

### Bug 2: `GlobalStyle` CSS never reached the server-rendered HTML

`GlobalStyle` (fonts, CSS reset, base body/color rules) was applied via `wrapRootElement` in both `gatsby-ssr.js` and `gatsby-browser.js`. Gatsby composes all plugins' `wrapRootElement` hooks in plugin-list order, and the site's own hook (`default-site-plugin`) runs *after* `gatsby-plugin-styled-components`, so it wraps **outside** that plugin's `StyleSheetManager`/`ServerStyleSheet`. As a result, `GlobalStyle`'s CSS was never captured by the SSR style-extraction pass and was completely absent from the built `public/index.html` — confirmed by grepping the build output for `@font-face`, the CSS reset, and base body rules, none of which were present anywhere in the file.

**Fix:**
- Moved `<GlobalStyle />` into `Layout.tsx`, rendered inside the page tree (and therefore inside the `StyleSheetManager`).
- Removed the `GlobalStyle` wrapping from `wrapRootElement` in `gatsby-browser.js` and `gatsby-ssr.js`.
- Updated the (previously incorrect) guidance in `CLAUDE.md` and `context/coding-standards.md` that told future contributors to keep `GlobalStyle` out of `Layout.tsx` — that guidance was based on a misdiagnosis and was itself the cause of this bug.

### Verification

- `npm run type-check`, `npm run lint`, `npm test` — all pass.
- Fresh `npm run build` + `gatsby serve`, checked with Playwright: `GlobalStyle`'s CSS is now present in the SSR'd HTML, the invalid nested `<html>` tag is gone, and zero console errors are thrown on `/` and `/projects/` (previously 4 hydration errors per load).
