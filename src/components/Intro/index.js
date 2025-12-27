import React from "react";
import { Wrapper, Title } from "./style";

const Intro = ({ fixed, ...props }) => {
  return (
    <Wrapper $fixed={fixed} {...props}>
      <Title>
        <span>Evan Szymkowicz</span>
      </Title>
    </Wrapper>
  );
};

export default Intro;
