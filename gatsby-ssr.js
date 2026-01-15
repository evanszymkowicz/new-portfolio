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
    React.createElement("link", {
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Roboto+Mono:wght@300;400;700&display=swap",
      rel: "stylesheet",
      key: "gf-stylesheet",
    }),
  ]);
};
