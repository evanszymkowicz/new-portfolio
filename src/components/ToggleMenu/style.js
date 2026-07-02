import styled, { css } from "styled-components";
import { colors, media } from "../../style/theme";
import { focusVisible } from "../../style/shared";

export const Wrapper = styled.button`
  display: none;
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;

  ${media.md`
    display: block;
  `}

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: ${colors.darkYellow};
    position: absolute;
    left: 0;
    transition: all 0.3s cubic-bezier(0.45, 0, 0.1, 1);

    &:nth-child(1) {
      top: 0;
      ${(props) =>
        props.$open &&
        css`
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        `}
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      ${(props) =>
        props.$open &&
        css`
          opacity: 0;
        `}
    }

    &:nth-child(3) {
      bottom: 0;
      ${(props) =>
        props.$open &&
        css`
          bottom: 50%;
          transform: translateY(50%) rotate(-45deg);
        `}
    }
  }

  ${focusVisible}
`;
