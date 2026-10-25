import React, { ReactNode } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import InstallPrompt from "./InstallPrompt";
import { colors, fonts } from "../style/theme";

// GlobalStyle is rendered once from wrapPageElement (gatsby-ssr.js / gatsby-browser.js),
// not here. Layout is rendered through wrapPageElement, which sits at a stable position
// in Gatsby's route tree and survives client-side page transitions, so effects here run
// once per app lifecycle rather than on every navigation.

const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const SkipLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  background: ${colors.darkYellow};
  color: ${colors.darkGreen};
  padding: 0.5rem 1rem;
  z-index: 100;
  text-decoration: none;
  font-family: ${fonts.mono};

  &:focus {
    transform: translateY(0);
  }
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
  return (
    <LayoutWrapper>
      <SkipLink href="#main">Skip to content</SkipLink>
      <main id="main">{children}</main>
      <Navigation location={location} />
      <InstallPrompt />
    </LayoutWrapper>
  );
}
