import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../index";

//  Mock getCurrentYear utility
jest.mock("../../../utils/functions", () => ({
  getCurrentYear: jest.fn(() => 2025),
}));

describe("Footer Component", () => {
  it("renders the footer with author name and year", () => {
    render(<Footer />);

    expect(screen.getByText(/Evan Szymkowicz/i)).toBeInTheDocument();
    expect(screen.getByText(/2025/i)).toBeInTheDocument();
  });

  it("displays the complete copytright text", () => {
    render(<Footer />);

    expect(screen.getByText("Evan Szymkowicz 2025")).toBeInTheDocument();
  });
});
