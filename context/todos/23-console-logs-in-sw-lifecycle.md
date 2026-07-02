# Strip console.log/error from production service worker lifecycle code

**Priority:** Low

## Issue

`gatsby-browser.js:5,32,33,42,46,50,54` — six `console.log`/`console.error` calls fire on every service worker lifecycle event in production. No build-time stripping is configured.

## Fix

Strip via a Babel plugin (`babel-plugin-transform-remove-console`) or gate behind `process.env.NODE_ENV !== "production"`.

## Found by

web-performance-auditor
