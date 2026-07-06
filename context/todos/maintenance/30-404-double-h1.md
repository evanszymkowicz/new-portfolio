# 404 page renders two h1 elements

**Priority:** Low (a11y)

## Issue

`src/pages/404.jsx` — both `Title` ("Sorry") and `Subtitle` ("You have reached a dead end") are `styled.h1`. A page should have one `<h1>`; the subtitle is not a heading at all semantically.

## Fix

Change `Subtitle` to `styled.p` (or `styled.h2` if a heading is genuinely wanted). Also note the `BackToHome` hover rule sets `color: ${colors.darkYellow}` — identical to its base color, so it's a dead rule; either drop it or give hover a distinct color.

## Found by

Fable 5 re-audit (2026-07-06)
