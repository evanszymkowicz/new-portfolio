import React from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import Navigation from "./Navigation";

// MODERN: Functional component (replaces class component)
export default function Layout({ children, location }) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      <Navigation location={location} />
    </>
  );
}
