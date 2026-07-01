import React, { ReactNode, useEffect } from "react";
import Navigation from "./Navigation";
import styled from "styled-components";
import { promptInstall } from "../utils/serviceWorkerHelper";

// GlobalStyle is rendered once from wrapPageElement (gatsby-ssr.js / gatsby-browser.js),
// not here. Layout is re-mounted on every client-side page transition (each page
// nests it separately), so a GlobalStyle instance placed here gets torn down and
// never reliably reinstated after the first client-side navigation. wrapPageElement
// sits at a stable position in Gatsby's route tree that survives page swaps, while
// still composing inside gatsby-plugin-styled-components' StyleSheetManager so SSR
// output is unaffected.

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Uses a minimal location type rather than the full browser Location interface.
// Only pathname is consumed by this component and its children (Navigation).
// This keeps the type honest and allows tests to pass a simple { pathname: string }
interface LocationProp {
  pathname: string;
}

interface LayoutProps {
  children: ReactNode;
  location: LocationProp;
}

export default function Layout({ children, location }: LayoutProps) {
  useEffect(() => {
    // install prompt
    promptInstall();
  }, []);

  return (
    <LayoutWrapper>
      <main>{children}</main>
      <Navigation location={location} />
    </LayoutWrapper>
  );
}
