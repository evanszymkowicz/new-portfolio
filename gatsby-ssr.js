import React from "react";
import { GlobalStyle } from "./src/style/global";

// Wrap the root element with global styles for SSR
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
};

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  // Add critical inline styles and theme color meta tag to prevent white flash
  setHeadComponents([
    // Critical theme color meta tag to prevent white flash before CSS loads
    React.createElement("meta", {
      name: "theme-color",
      content: "#013220",
      key: "theme-color",
    }),
    // Inline background color and hide body until fonts load to prevent FOUT
    React.createElement("style", {
      key: "critical-style",
      dangerouslySetInnerHTML: {
        __html: `
          html {
            background: #013220;
            color: #E4E6EC;
          }
          body {
            background: #013220;
            color: #E4E6EC;
            opacity: 0;
            transition: opacity 0.1s ease-in;
          }
          body.fonts-loaded {
            opacity: 1;
          }
        `,
      },
    }),
    // Preconnect to Google Fonts
    //  hook to prioritize styled components loading in the head
    React.createElement("link", {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
      key: "gf-preconnect-1",
    }),
    React.createElement("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
      key: "gf-preconnect-2",
    }),
    // Preload critical font files to start downloading immediately
    React.createElement("link", {
      rel: "preload",
      href: "https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
      key: "roboto-400-preload",
    }),
    React.createElement("link", {
      rel: "preload",
      href: "https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfAA.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
      key: "roboto-300-preload",
    }),
    React.createElement("link", {
      rel: "preload",
      href: "https://fonts.gstatic.com/s/roboto/v32/KFOiCnqEu92Fr1Mu51QAM25VFUg.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
      key: "roboto-700-preload",
    }),
    // Use display=block to prevent FOUT (flash of unstyled text)
    React.createElement("link", {
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Roboto+Mono:wght@300;400;700&display=block",
      rel: "stylesheet",
      key: "gf-stylesheet",
    }),
    // Font Loading API to detect when fonts are ready
    React.createElement("script", {
      key: "font-load-api",
      dangerouslySetInnerHTML: {
        __html: `
          if ('fonts' in document) {
            Promise.all([
              document.fonts.load('300 1em Roboto'),
              document.fonts.load('400 1em Roboto'),
              document.fonts.load('700 1em Roboto'),
            ]).then(function() {
              document.body.classList.add('fonts-loaded');
            });
          } else {
            // Fallback for browsers without Font Loading API
            window.addEventListener('load', function() {
              document.body.classList.add('fonts-loaded');
            });
          }
        `,
      },
    }),
  ]);
};

// Optimize styled-components in SSR by moving critical styles to the head
//  Needs a onPreRenderHTML hook to ensure styles are included in the head for better performance and to prevent FOUC
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  headComponents.sort((a, b) => {
    // Prioritize styled-components styles and critical inline styles at the top
    const aIsStyle =
      a.type === "style" || (a.props && a.props["data-styled"]);
    const bIsStyle =
      b.type === "style" || (b.props && b.props["data-styled"]);

    if (aIsStyle && !bIsStyle) return -1;
    if (!aIsStyle && bIsStyle) return 1;
    return 0;
  });
  replaceHeadComponents(headComponents);
};
