import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "../index";
import { SITE_CONFIG } from "../../../utils/constants";

describe("Menu Component", () => {
  it("renders navigation links", () => {
    render(<Menu />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();
  });

  it("renders external links", () => {
    render(<Menu />);

    const githubLink = screen.getByText("GitHub");
    expect(githubLink).toHaveAttribute("href", SITE_CONFIG.social.github);
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    const linkedinLink = screen.getByText("LinkedIn");
    expect(linkedinLink).toHaveAttribute("href", SITE_CONFIG.social.linkedin);
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  it("renders contact link", () => {
    render(<Menu />);

    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
