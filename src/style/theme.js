// Migrate from old src/style/theme.js
import { css } from "styled-components";

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
  lg: "1000px",
  xl: "1200px",
};

// Make media helpers that can be used as tagged template literals:
//   ${media.lg` ... `}
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const rule = (d, v) => `${d}: ${v};`;

export const spaces = {
  p500: "5rem",
  p400: "4rem",
  p300: "3rem",
  p200: "2rem",
  p100: "1rem",
  p50: ".5rem",
  p25: ".25rem",
};

export const getOuterSpace = (p) => css`
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
