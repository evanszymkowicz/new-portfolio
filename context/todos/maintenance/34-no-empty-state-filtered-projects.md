# Render explicit empty states when a project filter matches nothing

**Priority:** Low (UX, coding-standards conformance)

## Issue

`src/components/ProjectsContent/index.tsx` applies the active category filter to both the featured list and the "Other Work" list. If a category matches zero featured projects, `ProjectsFeaturedSection` silently collapses (empty grid/carousel); if it matches zero non-featured projects, `ProjectsListSection` renders a header and footer with nothing in between. The project's own coding standards call for explicit empty states rather than empty sections.

## Fix

When the filtered list is empty, render a short message (e.g. "No {category} projects — try another filter") in `ProjectsListSection`, and hide or message the featured section rather than rendering an empty wrapper.

## Found by

Fable 5 re-audit (2026-07-06)
