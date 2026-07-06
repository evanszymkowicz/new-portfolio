# Delete dead default export in functions.js referencing undefined LAMBDA_ENDPOINT

**Priority:** Medium (latent runtime error, dead code)

## Issue

`src/utils/functions.js:13-18` — the default export does `fetch(LAMBDA_ENDPOINT)` when `IS_PROD`, but `LAMBDA_ENDPOINT` is not imported or defined anywhere. `.eslintrc` declares it as a readonly global "for webpack DefinePlugin", but there is no `gatsby-node.js` or DefinePlugin config in the repo, so calling this export in a production build would throw a `ReferenceError`. Nothing imports the default export (only `getCurrentYear` is used, by `Footer`).

Already noted as a side observation in `../ts-migration/02-shared-utils.md`, but it's a standalone cleanup regardless of the TS migration.

## Fix

Delete the default export, the now-unused `IS_PROD` import and `handleApiErrors` helper, and the `LAMBDA_ENDPOINT` global from `.eslintrc`. Leftover from the previous portfolio's contact-form lambda — carries no current functionality.

## Found by

Fable 5 re-audit (2026-07-06)
