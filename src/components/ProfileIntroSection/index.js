import React from "react";
import Intro from "../Intro";
import { Wrapper, InfoWrapper, Content } from "./style";

const ProfileIntroSection = ({ content }) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Intro fixed={false} />
        <Content>{content()}</Content>
      </InfoWrapper>
    </Wrapper>
  );
};

export default ProfileIntroSection;
