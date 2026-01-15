import React from "react";
import Navigation from "./Navigation";

// GlobalStyle is now applied at root level via gatsby-browser.js and gatsby-ssr.js
export default function Layout({ children, location }) {
  return (
    <>
      <main>{children}</main>
      <Navigation location={location} />
    </>
  );
}
