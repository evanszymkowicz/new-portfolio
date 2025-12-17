import React, { ReactNode, useEffect } from "react";
import { GlobalStyle } from "../style/global";
import Navigation from "./Navigation";
import styled from "styled-components";
import ServiceWorkerUpdate from "./ServiceWorkerUpdate";
import { promptInstall } from "../utils/serviceWorkerHelper";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

interface LayoutProps {
  children: ReactNode;
  location: Location;
}

export default function Layout({ children, location }: LayoutProps) {
  useEffect(() => {
    // install prompt
    promptInstall();
  }, []);

  return (
    <LayoutWrapper>
      <GlobalStyle />
      <main>{children}</main>
      <Navigation location={location} />
      <ServiceWorkerUpdate />
    </LayoutWrapper>
  );
}
