# Fix heading hierarchy on /projects page

**Priority:** Low (a11y)

## Issue

`ProjectsTitle` ("Other Work") is the page's only `<h1>` (`src/components/ProjectsListSection/style.js:17-20`), but it renders *after* `ProjectsFeaturedSection`'s carousel/grid, which has no heading at all. A screen-reader user landing on `/projects` encounters an unlabeled carousel before reaching the page's only heading — and that heading actually describes the secondary "Other Work" list rather than the page as a whole.

## Fix

Add a page-level `<h1>` (e.g. "Projects") ahead of `ProjectsFeaturedSection`, and demote `ProjectsTitle` to an `<h2>` describing the "Other Work" list specifically.

## Found by

ui-reviewer
