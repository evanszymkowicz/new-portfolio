import React from "react";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Wrapper, ProjectFeatured, StyledCarousel } from "./style";
import ProjectImage from "../ProjectImage";

// Functional component
export default function ProjectsFeaturedSection({ projects }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // treat widths below 768px as "mobile" so only one card shows at a time
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    setIsLoaded(true);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderProject = ({ project }) => {
    const { title, image, url } = project;

    const hasImage =
      npm run devimage && (typeof image === "string" ? image.trim().length > 0 : !!image.src);

    // If image exists, render it (wrap it with link if url exists).
    if (hasImage) {
      const imageElement = <ProjectImage image={image} alt={title} />;
      return (
        <ProjectFeatured key={title}>
          {url ? (
            <a
              className="image-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <div className="image-wrap">
                  {imageElement}
                </div>
              </div>
            </a>
          ) : (
            <div className="card">
              <div className="image-wrap">
                {imageElement}
              </div>
            </div>
          )}
        </ProjectFeatured>
      );
    }

    // No image: show CTA button if there's a url, otherwise nothing.
    return (
      <ProjectFeatured key={title}>
        <div className="card">
          <div className="card-footer">
            {url ? (
              <a
                className="cta"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                More Info
              </a>
            ) : null}
          </div>
        </div>
      </ProjectFeatured>
    );
  };

  if (!isLoaded) return null;

  const projectsList = (projects || []).map(renderProject).filter(Boolean);

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
