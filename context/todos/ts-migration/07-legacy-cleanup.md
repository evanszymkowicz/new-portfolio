# Retire remaining migration artifacts once TS conversion lands

**Priority:** Low (do last, after sections 01-06)

## Scope

- `src/components/Image/index.js` — legacy class-based `<picture>` component, confirmed unused (no imports found anywhere in `src`); delete rather than convert.
- `prop-types` usage — after [[04-profile-section]] removes it from `EmailMe`, re-grep `src` for `from "prop-types"` to confirm no remaining usages before considering the dependency itself for removal (it's currently a transitive dependency, not a direct one in `package.json`, so there's likely nothing to uninstall — verify with `npm ls prop-types`).
- Re-run the JS/TS file count (`find src -name "*.js" -o -name "*.jsx" | grep -v __tests__ | grep -v __mocks__`) and update the "~94% JS / 6% TS" figure in `CLAUDE.md`'s "Known state" section once sections 01-06 are merged.

## Verify

- `npm run lint`, `npm run type-check`, full `npm test` after deletions.
- Confirm `npm run build` output has no missing-module errors from the deleted `Image` component.
