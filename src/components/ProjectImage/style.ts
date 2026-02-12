import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { colors } from "../../style/theme";

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${colors.darkGreen};
`;

/**
 * GatsbyImage renders wrapper elements so ensure it and its internal wrappers fill the parent (.image-wrap sets the overall box).
 * GatsbyImage also handles lazy-loading and placeholder images internally
*/

export const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  display: block;

  /* Ensure internal wrapper fills height as well */
  > div {
    width: 100%;
    height: 100%;
  }
`;
