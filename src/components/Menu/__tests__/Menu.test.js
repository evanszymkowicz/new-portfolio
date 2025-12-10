import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "../index";

describe("Menu Component", () => {
  it("renders navigation links", () => {
    render(<Menu />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("renders external links", () => {
    render(<Menu />);

    const githubLink = screen.getByText("Github");
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/evanszymkowicz"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    const linkedinLink = screen.getByText("LinkedIn");
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/evanszymkowicz/"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  it("renders contact link", () => {
    render(<Menu />);

    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
