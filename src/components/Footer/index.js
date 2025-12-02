import React from "react";
import { getCurrentYear } from "../../utils/functions";
import { Wrapper, Item } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <Item $position="left">
        Evan Szymkowicz {getCurrentYear()}
      </Item>
    </Wrapper>
  );
};

export default Footer;