import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledGatsbyImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;

  /* Important: GatsbyImage wraps the actual <img> in a few divs.
     Setting height/width here ensures it fills .image-wrap. */
  > div {
    width: 100%;
    height: 100%;
  }
`;