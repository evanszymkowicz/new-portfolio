# AI Interaction Guidelines

## Communication

- Be concise and direct.
- Explain non-obvious decisions briefly.
- Ask before large refactors or architectural changes.
- Don't add features or content not requested.
- Never delete files without clarification (especially data JSON and images).

## Code Changes

- Make minimal changes to accomplish the task.
- Don't refactor unrelated code unless asked.
- Preserve existing patterns in the codebase (Gatsby GraphQL data flow, Styled Components tokens, `Head`/`SEO` pattern).
- New components are TypeScript (`.tsx`/`.ts`) — see @context/coding-standards.md.

## Verify Before Handing Off

Before considering a change done, for the files you touched:

- `npm run type-check` — no new TypeScript errors.
- `npm run lint` — clean (the PostToolUse hook lints edited files automatically; fix what it surfaces).
- `npm test` — affected tests pass.
- For UI/behavior changes, verify in the browser (`npm run dev` → `localhost:8000`); the `ui-reviewer` agent can do a visual/responsive/a11y pass.
- CI (`ci.yml`, `lighthouse.yml`, CodeQL) runs on PRs — don't hand off changes you expect to fail those gates.

## Git — the user owns commits and merges

This project uses a PR-per-change workflow (numbered PRs, squash-merged into `main`).

- **Do NOT commit, push, or merge** — the user handles all git operations.
- **Never** add a "Co-Authored-By: Claude" / "Generated with Claude Code" tag or any AI attribution to commits or PRs.
- When suggesting a commit/PR message, use a short descriptive title (conventional-commit style — `feat:`, `fix:`, `refactor:`, `chore:` — is welcome but match existing history).
- Keep changes focused: one logical concern per PR; don't mix formatting-only churn with behavior changes.
- Branch naming: `feature/<desc>` or `fix/<desc>`.

> Note: this overrides the "commit early / agent commits freely" guidance in the
> installed `git-workflow-and-versioning` skill. The commit *discipline* from that
> skill (atomic, descriptive, separated concerns) still applies — but the user,
> not the agent, performs the commits.

## When Stuck

- If something isn't working after 2–3 attempts, stop and explain the issue rather than trying random fixes.
- Ask for clarification when requirements are unclear.
