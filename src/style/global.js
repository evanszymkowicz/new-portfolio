import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { colors, fonts, media } from "./theme";

export const GlobalStyle = createGlobalStyle`
  /* Fonts are injected into the initial HTML head by gatsby-ssr.js.
     Do not @import here to avoid double-loading and to enable SSR font loading. */

  ${reset}

  html, body {
    height: 100%;
    font-size: 16px;
    ${media.xl`
      font-size: 14px;
    `}
  }

  body {
    background: ${colors.darkGreen};
    color: #E4E6EC;
    /* use the theme key that actually exists */
    font-family: ${fonts.sans};
    backface-visibility: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    line-height: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ease-in .2s;
    
    &:hover {
      color: ${colors.silver};
    }
  }

  * {
    box-sizing: border-box;
    line-height: 1.4em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
  }

  ::selection {
    color: ${colors.darkYellow};
    background: transparent;
  }
`;
