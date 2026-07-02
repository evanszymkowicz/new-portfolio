# Route SEO component through SITE_CONFIG/META instead of hardcoded values

**Priority:** High

## Issue

`src/components/SEO/index.tsx` hardcodes `siteUrl`, `author`, default title/description, and the Twitter handle (`@evanszymkowicz`) even though `SITE_CONFIG` (`siteUrl`, `author`, `defaultImage`, `social.twitter`) and `META` already define these in `src/utils/constants.ts`. This is the root cause behind [[01-seo-image-fallback-typo]] — duplicated constants drift out of sync.

## Fix

Import and consume `SITE_CONFIG`/`META` inside `SEO/index.tsx` rather than redefining parallel values:

```tsx
import { SITE_CONFIG } from "../../utils/constants";
const { siteUrl, author: defaultAuthor, defaultImage, social } = SITE_CONFIG;
```

## Found by

refactor-scanner
