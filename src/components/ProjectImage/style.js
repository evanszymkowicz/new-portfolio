import styled from "styled-components";
import { colors } from "../../style/theme";

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${colors.darkGreen};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  opacity: ${(props) => (props.$loaded ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;
`;
