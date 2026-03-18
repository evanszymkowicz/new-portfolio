import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { colors, fonts, media } from "./theme";

export const GlobalStyle = createGlobalStyle`
  /* Roboto Mono — self-hosted TTF files from static/fonts/ */

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('RobotoMono-Thin'),
         url('/fonts/RobotoMono-Thin.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: local('RobotoMono-ThinItalic'),
         url('/fonts/RobotoMono-ThinItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local('RobotoMono-ExtraLight'),
         url('/fonts/RobotoMono-ExtraLight.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: local('RobotoMono-ExtraLightItalic'),
         url('/fonts/RobotoMono-ExtraLightItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('RobotoMono-Light'),
         url('/fonts/RobotoMono-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: local('RobotoMono-LightItalic'),
         url('/fonts/RobotoMono-LightItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('RobotoMono-Regular'),
         url('/fonts/RobotoMono-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local('RobotoMono-Italic'),
         url('/fonts/RobotoMono-Italic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('RobotoMono-Medium'),
         url('/fonts/RobotoMono-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: local('RobotoMono-MediumItalic'),
         url('/fonts/RobotoMono-MediumItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('RobotoMono-SemiBold'),
         url('/fonts/RobotoMono-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: local('RobotoMono-SemiBoldItalic'),
         url('/fonts/RobotoMono-SemiBoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('RobotoMono-Bold'),
         url('/fonts/RobotoMono-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: local('RobotoMono-BoldItalic'),
         url('/fonts/RobotoMono-BoldItalic.ttf') format('truetype');
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
