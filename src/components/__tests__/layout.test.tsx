import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../layout";

//  Mock Navigation component
jest.mock("../Navigation", () => {
  return function Navigation() {
    return <nav data-testid="navigation">Navigation</nav>;
  };
});

//  Mock GlobalStyle
jest.mock("../../style/global", () => ({
  GlobalStyle: () => null,
}));

describe("Layout Component", () => {
  it("renders children and navigation", () => {
    render(
      <Layout location={{ pathname: "/" }}>
        <div>child-content</div>
      </Layout>
    );

    expect(screen.getByText("child-content")).toBeInTheDocument();
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });
});
