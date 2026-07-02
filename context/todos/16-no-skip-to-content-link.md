# Add skip-to-content link

**Priority:** Medium (a11y)

## Issue

No skip link implementation exists anywhere in `src` (confirmed via grep). `src/components/Layout.tsx` renders `<main>` directly after `GlobalStyle`/nav; a keyboard user must tab through the whole header/nav before reaching content on every page.

## Fix

Add a visually-hidden-until-focused "Skip to content" link as the first focusable element in `Layout.tsx`, targeting an `id` on the `<main>` element.

## Found by

ui-reviewer
