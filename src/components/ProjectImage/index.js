import React, { useState } from "react";
import {ImageWrapper, StyledImage} from "./style";

const Image = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageWrapper {...props}>
      <StyledImage
        src={src}
        alt={alt}
        $loaded={loaded}
        onLoad={() => setLoaded(true)}
      />
    </ImageWrapper>
  );
};

export default Image;
