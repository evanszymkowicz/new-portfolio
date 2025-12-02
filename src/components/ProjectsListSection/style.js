import styled, { css } from "styled-components";
import EmailMe from "../EmailMe";
import Divider from "./divider.svg";
import { colors, fonts, media } from "../../style/theme";

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

export const ProjectsTitle = styled.h1`
  font-size: 1.6rem;
  color: ${colors.darkYellow};
`;

export const ButtonsWrapper = styled.div`
  padding: 0.75rem 0 1.5rem;
`;

export const FilterButton = styled.button`
  color: ${colors.rookwoodAmber};
  border: 0;
  background: 0;
  padding: 0;
  margin: 0;
  appearance: none;
  font-size: 0.9rem;
  font-family: ${fonts.mono};
  cursor: pointer;

  &:not(:last-child)::after {
    content: "-";
    display: inline-block;
    margin: 0 0.5rem;
    color: ${colors.grey};
  }

  &:focus {
    outline: 0;
  }

  ${(props) =>
    props.active
      ? css`
          color: ${colors.darkYellow};
        `
      : css`
          color: ${colors.grey};
        `}
`;

export const NDAWrapper = styled.footer`
  padding-top: 4rem;
  text-align: center;

  h2 {
    font-size: 1.1rem;
    color: #e4e6ec;
    margin-bottom: 0.75rem;
    line-height: 1.4em;
  }
`;

export const StyledDivider = styled(Divider)`
  color: ${colors.darkRed};
  margin-bottom: 3rem;
`;

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
