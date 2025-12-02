import styled, { css } from "styled-components";
import { colors, fonts, media, getOuterSpace } from "../../style/theme";

export const Wrapper = styled.div`
  ${media.md`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
  `}
`;

export const Header = styled.div`
  ${media.md`
    background: ${colors.darkGreen};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 3rem;
  `}

  ${media.sm`
    padding: 1.5rem 2rem;
  `}
`;

export const Shoable = styled.div`
  ${media.md`
    background: ${colors.darkGreen};
    overflow: hidden;
    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
    will-change: max-height;
    ${(props) =>
      props.$open
        ? css`
            max-height: 200px;
          `
        : css`
            max-height: 0;
          `}
    
    > div {
      padding: 0 3rem 3rem;
    }
  `}

  ${media.sm`
    > div {
      padding: 0 2rem 2rem;
    }
  `}
`;
