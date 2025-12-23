import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

//  Custom render function that includes providers
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return children; // Add ThemeProvider here if needed
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
