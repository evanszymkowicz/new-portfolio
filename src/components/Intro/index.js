import React from "react";
import { Wrapper, Title } from "./style";

const Intro = ({ fixed, ...props }) => {
  return (
    <Wrapper $fixed={fixed} {...props}>
      <Title>
        Evan Szymkowicz
        <span>Web Developer</span>
      </Title>
    </Wrapper>
  );
};

export default Intro;
