# Extract shared ExternalLink component

**Priority:** Medium

## Issue

`target="_blank" rel="noopener noreferrer"` is hand-written in 7+ places:

- `src/components/Menu/index.js:11-12,20-21`
- `src/components/ProfileContent/index.js:23-24`
- `src/components/ProfileListItem/index.js:6`
- `src/components/ProjectsListItem/index.js:26`
- `src/components/ProjectsFeaturedSection/index.tsx:53-54,78-79`

One inconsistency already exists: `EmailMe` uses `rel="noopener"` only. Easy to forget `rel` and introduce a tabnabbing/a11y regression.

## Fix

Create `src/components/ExternalLink/index.tsx`:

```tsx
export default function ExternalLink({ href, children, className }: {
  href: string; children: ReactNode; className?: string;
}) {
  return <a className={className} href={href} target="_blank"
    rel="noopener noreferrer">{children}</a>;
}
```

Replace the 7+ call sites with it.

## Found by

refactor-scanner
