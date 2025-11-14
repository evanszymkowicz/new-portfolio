import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import Navigation from './Navigation';

// Modern functional component for Layout (replaces class component)
export default function Layout({ children, location }) {
  return (
    <>
      <GlobalStyle />
      <Navigation location={location} />
      <main>{children}</main>
    </>
  );
}