import React from "react";
import Layout from "./src/components/Layout";

//  onRenderBody is called by Gatsby during SSR for each page.
//  Use this to inject critical styles and font loading tags as early as possible.
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("meta", {
      name: "theme-color",
      content: "#013220",
      key: "theme-color",
    }),
    //  Critical inline styles — background color only. No opacity gating.
    //  TypeError can't access property classList of null was caused by hydration running in <head> before <body> existed in the DOM.
    //  fonts-loaded was never added and the body stayed invisible on every reload.
    //  Background color and rules are kept to prevent white flash on first paint without blocking content visibility.
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
          }
        `,
      },
    }),
    // Preload the above-the-fold font weights (self-hosted) so they're
    // discovered before the CSSOM parse reaches the @font-face rules.
    React.createElement("link", {
      rel: "preload",
      href: "/fonts/Roboto-Regular.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
      key: "preload-roboto-regular",
    }),
    React.createElement("link", {
      rel: "preload",
      href: "/fonts/RobotoMono-Regular.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
      key: "preload-roboto-mono-regular",
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
  headComponents.sort((a, b) => {
    //  Prioritize styled-components styles and critical inline styles at the top
    const aIsStyle = a.type === "style" || (a.props && a.props["data-styled"]);
    const bIsStyle = b.type === "style" || (b.props && b.props["data-styled"]);

    if (aIsStyle && !bIsStyle) return -1;
    if (!aIsStyle && bIsStyle) return 1;
    return 0;
  });
  replaceHeadComponents(headComponents);
};

// Must mirror gatsby-browser.js's wrapPageElement exactly so the SSR'd
// markup matches what the client hydrates.
export const wrapPageElement = ({ element, props }) => (
  <Layout location={props.location}>{element}</Layout>
);
