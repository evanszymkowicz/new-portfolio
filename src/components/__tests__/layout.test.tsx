import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../Layout";

// Mock Navigation component
jest.mock("../Navigation", () => {
  return function Navigation() {
    return <nav data-testid="navigation">Navigation</nav>;
  };
});

// Mock ServiceWorkerUpdate component
jest.mock("../ServiceWorkerUpdate", () => {
  return function ServiceWorkerUpdate() {
    return null;
  };
});

// Mock promptInstall utility
jest.mock("../../utils/serviceWorkerHelper", () => ({
  promptInstall: jest.fn(),
}));

describe("Layout Component", () => {
  it("renders children and navigation", () => {
    render(
      // CHANGED: { pathname: "/" } now satisfies the LocationProp type since
      // Layout.tsx was updated to use a minimal location interface instead of the full browser Location type, which required ancestorOrigins, hash,
      <Layout location={{ pathname: "/" }}>
        <div>child-content</div>
      </Layout>
    );

    expect(screen.getByText("child-content")).toBeInTheDocument();
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });
});
