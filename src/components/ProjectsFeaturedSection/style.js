import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { colors, media } from "../../style/theme";

export const Wrapper = styled.section`
  display: grid;
  /* two columns so featured items form a 2x2 grid (rows flow automatically) */
  grid-template-columns: repeat(2, 360px);
  gap: 3rem;
  margin: 2.5rem auto;
  justify-content: center;
  max-width: calc(360px * 2 + 3rem); /* two columns + gap */
  padding: 0 2rem;

  ${media.lg`
    grid-template-columns: repeat(2, 320px);
    gap: 2.5rem;
    max-width: calc(320px * 2 + 2.5rem);
  `}

  ${media.md`
    grid-template-columns: repeat(2, minmax(260px, 1fr));
    gap: 2rem;
    max-width: 1000px;
  `}

  ${media.sm`
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 100%;
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
    height: 360px;
    background: #0a0a0a;
    display: block;
  }

  /* optional bottom area for CTA when there's no image */
  .card-footer {
    padding: 1rem;
    background: transparent;
    text-align: center;
  }

  a.image-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  a.cta {
    display: inline-block;
    padding: 0.75rem 1.25rem;
    text-align: center;
    background-color: ${colors.darkYellow};
    color: ${colors.darkGreen};
    font-weight: 700;
    border-radius: 4px;
    margin: 0.5rem auto;
    transition: background-color 0.15s;
  }

  a.cta:hover {
    background-color: ${colors.silver};
  }
`;

export const StyledCarousel = styled(Carousel)`
  margin: 2rem 0;

  .carousel-status {
    display: none;
  }
`;
