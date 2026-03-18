import React, { ReactNode, useEffect } from "react";
import Navigation from "./Navigation";
import styled from "styled-components";
import { promptInstall } from "../utils/serviceWorkerHelper";

// GlobalStyle is applied at the root level via gatsby-ssr.js and gatsby-browser.js.
// Do not apply it here to avoid duplicate injection and SSR/hydration class name mismatches.

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
