# Remove dead/inconsistent color rule in FilterButton

**Priority:** Low

## Issue

`src/components/ProjectsListSection/style.js:27` sets `color: $active ? "#f2b211" : "#7c9a8f"` (raw hexes), then lines 48-55 override with `$active ? colors.darkYellow (#FDB813) : colors.grey`. The line-27 values are dead and use different hexes than the tokens — confusing and a latent bug if the override is ever removed.

## Fix

Collapse into a single token-based rule; drop the `#f2b211`/`#7c9a8f` literals.

## Found by

refactor-scanner
