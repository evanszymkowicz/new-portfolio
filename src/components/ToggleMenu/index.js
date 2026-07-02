import React from "react";
import { Wrapper } from "./style";

const ToggleMenu = ({ $open, ...props }) => (
  <Wrapper
    $open={$open}
    aria-label="Toggle menu"
    aria-expanded={$open}
    {...props}
  >
    <span />
    <span />
    <span />
  </Wrapper>
);

export default ToggleMenu;
