import { Wrapper, Title } from "./style";

const Intro = (props) => {
  return (
    <Wrapper {...props}>
      <Title>
        Evan Szymkowicz
        <span>Web Developer</span>
      </Title>
    </Wrapper>
  );
};

export default Intro;
