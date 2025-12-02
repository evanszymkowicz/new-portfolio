import styled from "styled-components";
import { colors } from "../../style/theme";

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${colors.darkGreen};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  opacity: ${(props) => (props.$loaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;