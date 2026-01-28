import styled from "styled-components";
import { media } from "../../style/theme";
import ProfileList from "../ProfileList";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  ${media.sm`
    grid-template-columns: 1fr;
    gap: 4rem;
  `}
`;

export const ListsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0;
  margin-top: 6rem;

  ${media.sm`
    gap: 3rem;
    padding: 0;
    margin-top: 0;
  `}
`;

export const SkillsList = styled(ProfileList)`
  ul {
    display: grid;
    grid-template-columns: max-content max-content max-content;
    grid-template-rows: repeat(6, 1fr);
    grid-auto-flow: column;
    grid-column-gap: 5rem;
    ${media.sm`
      grid-column-gap: 3rem;
    `}

    ${media.sm`
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
      grid-auto-flow: unset;
      grid-column-gap: 0;
    `}
  }
`;
