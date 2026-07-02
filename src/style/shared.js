import styled, { css } from "styled-components";
import { media, colors } from "./theme";

export const ContentWrapper = styled.div`
  max-width: 68rem;
  width: calc(100% - 9.25rem * 2);
  margin: 11rem auto 5rem;
  ${media.lg`
    margin: 8rem auto 3rem;
    width: calc(100% - 11rem * 2);
  `}

  ${media.md`
    width: 100%;
    margin: 4rem auto 0;
    padding: 0 3rem 6rem;
  `}
  
  ${media.sm`
    margin: 2rem auto 0;
    padding: 0 2rem 6rem;
  `}
`;

export const focusVisible = css`
  &:focus {
    outline: 0;
  }

  &:focus-visible {
    outline: 2px solid ${colors.darkYellow};
    outline-offset: 2px;
  }
`;

export const ListItem = styled.li`
  font-size: 1rem;
  color: ${colors.grey};
  padding: 0.3rem 0;
  line-height: 1.6em;
`;

export const Loader = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #013220;
  z-index: 2;
  ${(props) =>
    props.isLoaded
      ? css`
          transform: scale(1.05);
          opacity: 0;
        `
      : css`
          transform: scale(1);
          opacity: 1;
        `}
  transition: .6s cubic-bezier(.45, 0, .07, 1) transform, .6s cubic-bezier(.45, 0, .07, 1) opacity;
  will-change: transform;
`;
