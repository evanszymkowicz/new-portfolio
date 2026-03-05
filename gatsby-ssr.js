import React from "react";
import { GlobalStyle } from "./src/style/global";

//  Wrap the root element with global styles for SSR
//  Global style is injected here instead of Layout.tsx so that it is applied once at project root during SSR and on the client via gatsby-browser.js to avoid duplication and prevent hash mismatch.
//  Style flash was caused by server-rendered HTML and client hydration pass.
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
};

//  onRenderBody is called by Gatsby during SSR for each page.
//  Use this to inject critical styles and font loading tags as early as possible.
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("meta",{
      name: "theme-color",
      content: "#013220",
      key: "theme-color",
    }),
    //  Critical inline styles — background color only. No opacity gating.
    //  TypeError can't access property classList of null was caused by hydration running in <head> before <body> existed in the DOM.
    //  fonts-loaded was never added and the body stayed invisible on every reload.
    //  Background color and rules are kept to prevent white flash on first paint without blocking content visibility.
    React.createElement("style",{
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
          }
        `,
      },
    }),
    // Preconnect to Google Fonts servers to reduce latency
    React.createElement("link",{
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
      key: "gf-preconnect-1",
    }),
    React.createElement("link",{
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
      key: "gf-preconnect-2",
    }),
    // Google Fonts stylesheet: display=swap shows fallback font immediately,
    // swaps to Roboto when loaded. No blank page, no FOUT blocking.
    React.createElement("link",{
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Roboto+Mono:wght@300;400;700&display=swap",
      rel: "stylesheet",
      key: "gf-stylesheet",
    }),
  ]);
};

//  Optimize styled-components in SSR by moving critical styles to the head
//  Needs a onPreRenderHTML hook to ensure styles are included in the head for better performance and prevent FOUC
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  headComponents.sort((a,b) => {  //  Prioritize styled-components styles and critical inline styles at the top
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