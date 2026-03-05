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

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("meta",{
      name: "theme-color",
      content: "#013220",
      key: "theme-color",
    }),
    // Critical inline styles — background color only. No opacity gating.
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

// Optimize styled-components in SSR by moving critical styles to the head
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  headComponents.sort((a,b) => {
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