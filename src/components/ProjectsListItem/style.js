import styled, { css } from "styled-components";
import { colors, fonts, media } from "../../style/theme";

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const Wrapper = styled.article`
  border-bottom: 1px dotted ${colors.silver};
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;

  ${(props) =>
    props.$hasLink &&
    css`
      cursor: pointer;
      &:hover {
        background: rgba(253, 184, 19, 0.05);
      }
    `}

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  color: ${colors.silver};
  margin: 0;
`;

export const ProjectInfos = styled.div`
  font-family: ${fonts.mono};
  font-size: 0.85rem;
  color: ${colors.grey};
`;

export const ProjectYear = styled.span`
  color: ${colors.silver};

  &::before {
    content: "—";
    color: ${colors.darkYellow};
    display: inline-block;
    margin-right: 0.75rem;
    vertical-align: middle;
  }
`;
