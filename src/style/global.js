import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { colors, fonts, media } from "./theme";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Roboto-Light'), url('/fonts/Roboto-Light.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto-Regular'), url('/fonts/Roboto-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto-Bold'), url('/fonts/Roboto-Bold.woff2') format('woff2');
  }

 @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('RobotoMono-Thin'), url('/fonts/RobotoMono-Thin.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: local('RobotoMono-ThinItalic'), url('/fonts/RobotoMono-ThinItalic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local('RobotoMono-ExtraLight'), url('/fonts/RobotoMono-ExtraLight.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: local('RobotoMono-ExtraLightItalic'), url('/fonts/RobotoMono-ExtraLightItalic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('RobotoMono-Light'), url('/fonts/RobotoMono-Light.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: local('RobotoMono-LightItalic'), url('/fonts/RobotoMono-LightItalic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('RobotoMono-Regular'), url('/fonts/RobotoMono-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local('RobotoMono-Italic'), url('/fonts/RobotoMono-Italic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('RobotoMono-Medium'), url('/fonts/RobotoMono-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: local('RobotoMono-MediumItalic'), url('/fonts/RobotoMono-MediumItalic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('RobotoMono-SemiBold'), url('/fonts/RobotoMono-SemiBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: local('RobotoMono-SemiBoldItalic'), url('/fonts/RobotoMono-SemiBoldItalic.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('RobotoMono-Bold'), url('/fonts/RobotoMono-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: local('RobotoMono-BoldItalic'), url('/fonts/RobotoMono-BoldItalic.woff2') format('woff2');
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
    color: ${colors.cream};
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
