import React, { ReactNode } from "react";
import { GlobalStyle } from "../style/global";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
  location: Location;
}

export default function Layout({ children, location }: LayoutProps) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      <Navigation location={location} />
    </>
  );
}
