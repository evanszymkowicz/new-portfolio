import styled from "styled-components";
import { colors, media } from "../../style/theme";

export const Wrapper = styled.div`
  font-size: 1.7rem;
  max-width: 36rem;
  line-height: 1.3em;
  text-align: left;
  ${media.md`
    max-width: 32rem;
  `}
  ${media.sm`
    max-width: 100%;
    font-size: 1.5rem;
  `}
  ${media.xs`
    font-size: 1.35rem;
  `}
`;

export const Title = styled.h1`
  span {
    color: ${colors.darkYellow};
    display: block;
  }
`;
