---
name: seo-image-prop-gap
description: Page-level Head() functions (index.tsx, profile.tsx, projects.tsx) never pass image= to <SEO>, so og:image/twitter:image always use SEO's internal fallback constant, which has a typo (space in filename) and duplicates META.common.image instead of reusing it.
metadata:
  type: false-positive-trap
---

As of PR #91 ("move global styles to SSR"), the old per-content-component `<SEO {...META.x} image={META.common.image} />` calls were removed from ProfileContent/ProjectsContent (correctly, since SEO now renders via page-level `Head()` exports). However none of `src/pages/index.tsx`, `profile.tsx`, `projects.tsx` `Head()` functions pass an `image` prop to `<SEO>`. This means:

1. `src/components/SEO/index.tsx` always falls back to its own hardcoded string
   `${siteUrl}/images/profile/evan-szymkowicz. jpeg` (note the literal space before
   "jpeg") instead of reusing `META.common.image` from `src/utils/constants.ts`
   (which has the correct filename, no space). Every page's og:image/twitter:image
   currently points at a 404.
2. Separately (pre-existing, not caused by #91): the Twitter meta tag is written as
   `<meta name="twitter: description" ...>` (space after colon) in
   `src/components/SEO/index.tsx` — wrong attribute name, so Twitter never sees the
   description.

`SEO.test.tsx` does not assert on image/twitter:description content, so this isn't
caught by tests. Re-check whether `image` prop has been wired into the page Head()
calls before re-flagging in future audits — if it has, this finding is resolved.
