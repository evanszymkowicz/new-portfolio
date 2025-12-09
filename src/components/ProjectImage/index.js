import React, { useState } from "react";
import { ImageWrapper, StyledImage } from "./style";

const Image = ({ image, src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  // Accept either a string src, or an image object { src, sources }, or nothing.
  const imgSrc =
    src || (image && (typeof image === "string" ? image : image.src)) || "";

  return (
    <ImageWrapper {...props}>
      <StyledImage
        src={imgSrc}
        alt={alt}
        $loaded={loaded}
        onLoad={() => setLoaded(true)}
      />
    </ImageWrapper>
  );
};

export default Image;
