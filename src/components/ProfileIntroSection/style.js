import styled from "styled-components";
import { colors, media } from "../../style/theme";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  position: relative;
  ${media.sm`
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
  `}
`;

export const InfoWrapper = styled.header`
  grid-row: 1 / 3;
  grid-column: 1 / 6;
  z-index: 3;
  ${media.md`
    grid-column: 1 / 7;
  `}
  ${media.sm`
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  `}
`;

export const Content = styled.main`
  line-height: 1.8em;
  color: ${colors.creamMuted};
  ${media.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }

  a {
    color: ${colors.cream};
    border-bottom: 1px dotted ${colors.darkRed};

    &:hover {
      border-bottom-color: ${colors.darkYellow};
    }
  }
`;
