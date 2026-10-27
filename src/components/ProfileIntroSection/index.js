import Intro from "../Intro";
import { Wrapper, InfoWrapper, Content } from "./style";

const ProfileIntroSection = ({ content }) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Intro />
        <Content>{content}</Content>
      </InfoWrapper>
    </Wrapper>
  );
};

export default ProfileIntroSection;
