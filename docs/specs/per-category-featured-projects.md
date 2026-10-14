# Per-Category Featured Projects

**Status:** Draft
**Date:** 2026-09-08
**Scope:** Projects page featured grid

## Summary

The featured projects grid on the Projects page currently displays a static set of 4 "website" projects. This change makes the featured grid dynamic — when a user selects a category filter (code, email), the grid updates to show up to 4 featured projects from that category. Each category's featured set is manually curated via a new `featuredCategories` field in `projects.json`.

## Current Behavior

- 4 projects marked `featured: true` in `projects.json` (all `category: ["website"]`)
- `ProjectsContent` splits projects into `featured` and `others`, then calls `filterByCategory()` on both
- When "code" or "email" is selected, `filterByCategory(featured)` returns 0 items — the featured grid empties

## Desired Behavior

| Category filter | Featured grid content |
|---|---|
| All (no filter) | ACF, NHLBI, DocGuide, Washington Design Center (unchanged) |
| website | Same 4 (they all have `category: ["website"]`) |
| code | DevMemory (shows "More Info" CTA — no image yet) |
| email | 4 email projects (show CTAs until PNGs are added) |

## Data Model Change

Add optional `featuredCategories: string[]` to the `Project` type. This field indicates which category filters should cause this project to appear in the featured grid.

- A project with `featured: true` and no `featuredCategories` behaves exactly as today (appears in the "all" view).
- A project with `featuredCategories: ["email"]` appears in the featured grid only when "email" is selected.
- A project can have both `featured: true` and `featuredCategories` if it should appear in both the "all" view and a specific category view.

**projects.json additions:**

```json
{
  "title": "DevMemory: Store your Developer Knowledge",
  "category": ["website", "code"],
  "featuredCategories": ["code"],
  ...
}
```

```json
{
  "title": "Promotional Email Campaign",
  "category": ["email"],
  "featuredCategories": ["email"],
  ...
}
```

Same `featuredCategories: ["email"]` for Monthly Newsletter, Upcoming Schedule Email, and Weekly Promotional Email.

## Logic Change

In `ProjectsContent`, replace the current "split then filter" approach with category-aware featured list construction:

```
if category is null:
  featuredList = projects where featured === true
else:
  featuredList = projects where featuredCategories includes category
```

Both lists continue through `filterByCategory()` as before (though the category-aware branch already constrains by category, so the filter is a no-op there — it's fine to keep it for consistency).

## Files to Modify

1. **`src/types/index.ts`** — Add `featuredCategories?: string[]` to `Project` interface (~line 17)
2. **`src/data/projects.json`** — Add `featuredCategories` to DevMemory and 4 email projects
3. **`src/components/ProjectsContent/index.tsx`** — Rewrite lines 51-63 (featured list + filter logic)

No changes needed to `ProjectsFeaturedSection` — it already renders whatever `projects` array it receives, including empty/single-item grids.

## User Action Required (Post-Implementation)

Add PNGs for the 4 email projects:

| Project | Expected path |
|---|---|
| Promotional Email Campaign | `static/images/projects/PromotionalEmailCampaign/<name>.png` |
| Monthly Newsletter | `static/images/projects/MonthlyNewsletter/<name>.png` |
| Upcoming Schedule Email | `static/images/projects/UpcomingScheduleEmail/<name>.png` |
| Weekly Promotional Email | `static/images/projects/WeeklyPromotionalEmail/<name>.png` |

Then add `imageRelativePath` to each project in `projects.json` (e.g., `"imageRelativePath": "projects/PromotionalEmailCampaign/promotionalemail.png"`).

DevMemory remains without an image — it will show the "More Info" CTA fallback.

## Edge Cases

- **Category with 0 featured projects:** Grid renders empty (no crash).
- **Category with 1-3 featured projects:** Grid renders with fewer cards; empty cells are harmless (CSS grid handles it).
- **Category with 5+ featured projects:** All render; grid expands beyond 2x2. If a hard cap is desired, slice to 4 in the logic — but current data has max 4 per category.
- **Project with `featuredCategories` but no `imageRelativePath`:** Shows CTA fallback card (existing behavior in `ProjectsFeaturedSection`).

## Verification

1. `npm run type-check` — confirms type changes compile
2. `npm run lint` — no new lint errors
3. `npm test` — existing tests pass
4. Manual: load `/projects`, verify "all" view unchanged
5. Manual: select "code" — DevMemory appears in featured grid with CTA
6. Manual: select "email" — 4 email projects appear in featured grid with CTAs
7. Manual: select "website" — original 4 website projects appear
8. Manual: click "All" — returns to original 4
