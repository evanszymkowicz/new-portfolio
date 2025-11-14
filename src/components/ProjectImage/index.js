import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";

// Simple styled img with loading state
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${colors.darkGreen};
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  opacity: ${(props) => (props.$loaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 3px solid ${colors.silver};
  border-top-color: ${colors.darkYellow};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  opacity: ${(props) => (props.$show ? 1 : 0)};

  @keyframes spin {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

// MODERN: Simple functional component (REPLACES complex Image component)
export default function ProjectImage({ image, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageWrapper>
      <Loader $show={!loaded} />
      <StyledImage
        src={image}
        alt={alt}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        $loaded={loaded}
      />
    </ImageWrapper>
  );
}
