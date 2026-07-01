# Consolidate local Project types into canonical src/types/index.ts

**Priority:** High

## Issue

`src/types/index.ts` already defines `Project`, `ProjectEdge`, `ProjectsData`, but both `ProjectsContent/index.tsx` (lines 15-58: `BaseProject`, `ProjectWithImageData`, `ProjectEdge`, `ProjectsQueryData`) and `ProjectsFeaturedSection/index.tsx` (lines 7-19: `FeaturedProject`, `FeaturedProjectEdge`, `ProjectsFeaturedSectionProps`) redefine parallel, subtly different shapes — e.g. local `BaseProject.category?` is optional while the canonical `Project.category` is required, and `imageRelativePath` optionality differs too. These will keep drifting.

## Fix

Extract to `src/types/index.ts`: reuse `Project`/`ProjectEdge`, add the query-payload shape there as `ProjectsQueryData` (and a narrower `FeaturedProject = Pick<Project, "title" | "url" | "imageData">` type if genuinely needed). Update both components to import from `src/types` instead of redeclaring.

## Found by

refactor-scanner
