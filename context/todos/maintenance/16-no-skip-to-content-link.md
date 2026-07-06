# Add skip-to-content link

**Priority:** Medium (a11y)

## Issue

No skip link implementation exists anywhere in `src` (confirmed via grep).

**Correction (2026-07-06 re-audit):** the original rationale was inverted — `Layout.tsx` renders `<main>` *before* `<Navigation>` in the DOM, so keyboard users actually reach content first and hit the nav last. A skip link is still worthwhile (the visual layout implies nav-first, and it lets users jump *to* the nav landmark too), but it's a best-practice improvement, not a fix for a tab-order problem.

## Fix

Add a visually-hidden-until-focused "Skip to content" link as the first focusable element in `Layout.tsx`, targeting an `id` on the `<main>` element.

## Found by

ui-reviewer
