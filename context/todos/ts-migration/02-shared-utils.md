# Convert utils/functions.js to TypeScript

**Priority:** High (small, low-risk, unblocks anything that imports it)

## Scope

- `src/utils/functions.js` → `functions.ts`

## Details

- `getCurrentYear(): number` — trivial to type.
- The default export references `LAMBDA_ENDPOINT`, which is not imported or defined anywhere in the file — this is a latent `ReferenceError` if `IS_PROD` is ever true at runtime. Converting to TS with `strict` mode will surface this as a compile error (`Cannot find name 'LAMBDA_ENDPOINT'`), which is expected — this is not a migration regression, it's a pre-existing bug the type system will finally catch. Fix requires product input (where should the endpoint come from — `src/utils/constants.ts`'s `SITE_CONFIG`, an env var, or is this dead code that should be deleted?). Flag to the user rather than guessing.
- Type `handleApiErrors(response: Response): Response`.
- Type the default export's return as `Promise<unknown>` (or a real shape once the API response is known) rather than leaving it inferred as `any` from the empty-object fallback.

## Verify

- `npm run type-check`, `npm run lint`.
- Confirm nothing currently imports the default export in a way that would break if it's found to be dead code.
