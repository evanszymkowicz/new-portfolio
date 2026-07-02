---
name: pr91-globalstyle-fix-verified
description: Confirms GlobalStyle now correctly lives only in Layout.tsx (PR #91), not in wrapRootElement — do not flag this placement as wrong.
metadata:
  type: convention
---

PR #91 ("fix: move global styles to SSR to eliminate FOUT") intentionally removed
`GlobalStyle` from `wrapRootElement` in `gatsby-browser.js`/`gatsby-ssr.js` and
moved it into `src/components/Layout.tsx` (rendered inside `LayoutWrapper`, once,
at the top of every page tree). This matches the current CLAUDE.md/coding-standards
docs. Do NOT flag `<GlobalStyle />` usage inside `Layout.tsx` as wrong — that used to
be flagged as an anti-pattern before PR #91 but is now the correct, documented
pattern. Only flag if GlobalStyle reappears in wrapRootElement (gatsby-browser.js /
gatsby-ssr.js) or is duplicated in both places.

Also confirmed as part of this PR: the legacy `src/components/Head/index.js`
duplicate SEO component was deleted cleanly (no dangling imports left in
ProfileContent or ProjectsContent) — this was a good cleanup, not an issue.
