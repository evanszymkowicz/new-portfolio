import Intro from "../Intro";
import { Wrapper, InfoWrapper, Content, StyledImage } from "./style";
import { Loader } from "../../style/shared";

const ProfileIntroSection = ({ content }) => {
  const profileImage = "/images/profile/evan-szymkowicz.jpeg";
  
  return (
    <Wrapper>
      <InfoWrapper>
        <Intro fixed={false} />
        <Content>{content()}</Content>
      </InfoWrapper>
      <StyledImage
        src={profileImage}
        alt="Evan Szymkowicz - Website Developer"
        loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
        sources={[
          {
            media: "max-width: 40rem",
            srcset: [profileImage],
          },
          {
            srcset: [profileImage, profileImage, profileImage],
          },
        ]}
      />
    </Wrapper>
  );
};

export default ProfileIntroSection;