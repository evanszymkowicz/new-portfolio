import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import { ImageWrapper, StyledGatsbyImage } from "./style";

export type ProjectImageProps = {
  imageData?: IGatsbyImageData;
  alt?: string;
  className?: string;
};

export default function ProjectImage({
  imageData,
  alt = "",
  className,
}: ProjectImageProps) {
  if (!imageData) return null;

  return (
    <ImageWrapper className={className}>
      <StyledGatsbyImage
        image={imageData}
        alt={alt}
        objectFit="cover"
        objectPosition="center"
      />
    </ImageWrapper>
  );
}