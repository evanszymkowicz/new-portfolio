import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { colors, media } from "../../style/theme";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  ${media.md`
    grid-template-columns: 1fr;
  `}
`;

export const ProjectFeatured = styled.div`
  position: relative;
  background-color: ${colors.black};
  border-radius: 4px;
  overflow: hidden;

  a {
    display: block;
    padding: 1rem;
    text-align: center;
    background-color: ${colors.darkYellow};
    color: ${colors.darkGreen};
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${colors.silver};
    }
  }
`;

export const StyledCarousel = styled(Carousel)`
  margin: 2rem 0;

  .carousel-status {
    display: none;
  }
`;
