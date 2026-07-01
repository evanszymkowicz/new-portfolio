# Centralize social/contact links in SITE_CONFIG.social

**Priority:** High

## Issue

GitHub URL is hardcoded in three places, LinkedIn in one, and the contact email address isn't centralized anywhere:

- `src/components/Menu/index.js:10,19` — GitHub, LinkedIn
- `src/components/ProfileContent/index.js:22` — GitHub
- `src/components/EmailMe/index.js:8` — mailto address

`SITE_CONFIG.social` exists in `src/utils/constants.ts` but isn't used for any of these.

## Fix

Add `email` to `SITE_CONFIG.social` in `constants.ts`, then import `SITE_CONFIG.social` in `Menu`, `ProfileContent`, and `EmailMe` instead of hand-typing the URLs/address.

## Found by

refactor-scanner
