# Replace install button cssText with a styled/GlobalStyle rule

**Priority:** Low

## Issue

`src/utils/serviceWorkerHelper.ts:43-56` — the PWA install button is styled via a raw `cssText` string assignment, inconsistent with the project's "no inline styles" convention.

## Fix

Use a static class name with corresponding rules in `GlobalStyle`, or move the button into a small React component if the imperative-DOM approach was only a stopgap.

## Found by

web-performance-auditor
