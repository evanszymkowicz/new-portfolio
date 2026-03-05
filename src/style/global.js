import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { colors,fonts,media } from "./theme";

export const GlobalStyle = createGlobalStyle`
  /* Self-hosted fonts served from /static/fonts/.
     Using local() first tells the browser to use the font if it is already
     installed on the user's system. The woff2 src is the fallback for when it is not installed locally.
     font-display: swap ensures text is always immediately visible using the system fallback font, swapping to Roboto when it is ready.
     There is no cross-origin DNS lookup or TLS handshake — the font loads as fast as any other static asset on the page. */

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Roboto Light'), local('Roboto-Light'),
         url('/fonts/roboto-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'),
         url('/fonts/roboto-400.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto Bold'), local('Roboto-Bold'),
         url('/fonts/roboto-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Roboto Mono Light'), local('RobotoMono-Light'),
         url('/fonts/roboto-mono-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto Mono'), local('RobotoMono-Regular'),
         url('/fonts/roboto-mono-400.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto Mono Bold'), local('RobotoMono-Bold'),
         url('/fonts/roboto-mono-700.woff2') format('woff2');
  }

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