import React from "react";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Wrapper, ProjectFeatured, StyledCarousel } from "./style";
import ProjectImage from "../ProjectImage";

// MODERN: Functional component (REPLACES class with lifecycle methods)
export default function ProjectsFeaturedSection({ projects }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // REPLACES componentDidMount and componentWillUnmount
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    handleResize(); // Initial check
    setIsLoaded(true);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderProject = ({ project }) => {
    const { title, image, url } = project;

    // Skip if no image
    if (!image) return null;

    return (
      <ProjectFeatured key={title}>
        <ProjectImage image={image} alt={title} />
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        )}
      </ProjectFeatured>
    );
  };

  if (!isLoaded) return null;

  const projectsList = projects.map(renderProject).filter(Boolean);

  return isMobile ? (
    <StyledCarousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      interval={10000}
      autoPlay
    >
      {projectsList}
    </StyledCarousel>
  ) : (
    <Wrapper>{projectsList}</Wrapper>
  );
}
