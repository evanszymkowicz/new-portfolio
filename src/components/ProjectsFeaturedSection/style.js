import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { colors, media } from "../../style/theme";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 360px);
  gap: 3rem;
  margin: 2.5rem auto;
  justify-content: center;
  max-width: calc(360px * 2 + 3rem);
  padding: 0 2rem;

  ${media.lg`
    grid-template-columns: repeat(2, 320px);
    gap: 2.5rem;
    max-width: calc(320px * 2 + 2.5rem);
  `}

  ${media.md`
    display: none;
  `}
`;

/* Outer tile that centers the card */
export const ProjectFeatured = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* the white card */
  .card {
    width: 100%;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  /* image area inside the card (fixed height, same for all cards) */
  .image-wrap {
    width: 100%;
    aspect-ratio: 7/5;
    background: #0a0a0a;
    display: block;
  }

  a.image-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }
`;

export const StyledCarousel = styled(Carousel)`
  display: none;
  margin: 2rem 0;

  ${media.md`
    display: block;
  `}

  .carousel-status {
    display: none;
  }
`;
