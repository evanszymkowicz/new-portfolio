// Migrate from old src/style/theme.js
export const colors = {
  darkGreen: "#013220",
  darkYellow: "#FDB813",
  darkRed: "#8B0000",
  silver: "#C0C0C0",
  grey: "#808080",
  white: "#FFFFFF",
  black: "#000000",
};

export const fonts = {
  sans: "'Roboto', -apple-system, sans-serif",
  mono: "'Roboto Mono', 'Courier New', monospace",
};

export const breakpoints = {
  xs: "320px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
};

export const media = {
  xs: `@media (max-width: ${breakpoints.xs})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xl: `@media (max-width: ${breakpoints.xl})`,
};

const rule = (d, v) => `${d}: ${v};`;

export const getOuterSpace = (p) =>
  css`
    ${rule(p, spaces.p500)}
    ${media.lg`
      ${rule(p, spaces.p300)}
    `}
    ${media.md`
      ${rule(p, spaces.p300)}
    `}
    ${media.sm`
      ${rule(p, spaces.p200)}
    `}
  `;
