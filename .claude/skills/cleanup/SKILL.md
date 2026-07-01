---
name: cleanup
description: Clean up project housekeeping tasks (add "run" to execute fixes)
argument-hint: run|check
---

Review the codebase for cleanup tasks:

1. Find unnecessary `console.log` / `console.debug` statements in `src/`
2. Find unused imports and unused variables (beyond what `npm run lint` already catches)
3. Check for stale TODOs / FIXMEs
4. Find orphaned or unused files — especially JS→TS migration artifacts:
   - `*.legacy.js` files that are no longer imported anywhere (e.g. `ProjectsContent/index.legacy.js`, `ProjectsFeaturedSection/index.legacy.js`)
   - Duplicate modules where a `.ts` version is authoritative but a `.js` copy lingers (e.g. `src/utils/constants.js` vs `constants.ts`)
5. Check that `CLAUDE.md` still matches the actual project state (commands, architecture notes, "Known state" list)
6. Find stale `@ts-ignore` / `@ts-expect-error` comments that no longer suppress a real error
7. Flag new components authored as `.js`/`.jsx` where the standard is `.tsx`/`.ts` (new work should be TypeScript)

**Mode: $ARGUMENTS**

If no argument or argument is "check":

- Only report findings, don't modify anything
- List what would be cleaned up

If the argument is "run" or "fix":

- First, report all findings with numbered items
- Then ask: "Which items would you like me to fix? (enter numbers like 1,3,5 or 'all' or 'none')"
- Wait for user response before making any changes
- Only fix the items the user specifies
- Report what you changed
