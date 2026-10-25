import styled, { css } from "styled-components";
import EmailMe from "../EmailMe";
import DividerImage from "./divider.svg";
import { colors, fonts, media } from "../../style/theme";
import { focusVisible } from "../../style/shared";

export const Wrapper = styled.section`
  max-width: 80%;
  margin: 8rem auto 0;
  ${media.lg`
    max-width: 100%;
  `}
  ${media.sm`
    margin: 4rem auto 0;
  `}
`;

export const ProjectsTitle = styled.h2`
  font-size: 1.6rem;
  color: ${colors.darkYellow};
`;

export const ButtonsWrapper = styled.div`
  padding: 0.75rem 0 1.5rem;
`;

export const FilterButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0.5rem 0;
  margin: -0.5rem 0;
  appearance: none;
  font-size: 0.9rem;
  font-family: ${fonts.mono};
  cursor: pointer;
  min-height: 44px;

  &:not(:last-child)::after {
    content: "-";
    display: inline-block;
    margin: 0 0.5rem;
    color: ${colors.creamMuted};
  }

  ${focusVisible}

  ${(props) =>
    props.$active
      ? css`
          color: ${colors.darkYellow};
        `
      : css`
          color: ${colors.creamMuted};
        `}
`;

export const QuestionWrapper = styled.footer`
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center;

  h2 {
    font-size: 1.1rem;
    color: ${colors.cream};
    margin-bottom: 0.75rem;
    line-height: 1.4em;
  }
`;

/* Changed: use an <img> instead of setting background-image.
   This avoids invalid characters if DividerImage is raw SVG content. */
export const StyledDivider = styled.img.attrs({
  src: DividerImage,
  alt: "",
})`
  width: 38px;
  height: 5px;
  margin: 0 auto 3rem;
  display: block;
  object-fit: contain;
`;

/* Email me button styling */
export const StyledEmailMe = styled(EmailMe)`
  color: ${colors.darkYellow};
  font-family: ${fonts.mono};
  font-size: 0.9rem;
  border-bottom: 1px dotted ${colors.darkRed};
  padding: 0 0 0.1rem;
  display: inline-block;

  &:hover {
    color: ${colors.darkYellow};
  }
`;
