import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Wrapper, ProjectFeatured, StyledCarousel, PauseButton } from "./style";
import ProjectImage from "../ProjectImage";
import type { FeaturedProjectEdge } from "../../types";

type ProjectsFeaturedSectionProps = {
  projects?: FeaturedProjectEdge[];
};

export default function ProjectsFeaturedSection({
  projects = [],
}: ProjectsFeaturedSectionProps) {
  const [playing, setPlaying] = useState(true);

  const renderProjects = (keyPrefix: string) =>
    (projects || []).map(({ project }) => {
      const { title, imageData, url } = project;
      const imageElement = imageData ? (
        <ProjectImage imageData={imageData} alt={title} />
      ) : null;

      return (
        <ProjectFeatured key={`${keyPrefix}-${title}`}>
          {url ? (
            <a
              className="image-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer">
              <div className="card">
                <div className="image-wrap">{imageElement}</div>
              </div>
            </a>
          ) : (
            <div className="card">
              <div className="image-wrap">{imageElement}</div>
            </div>
          )}
        </ProjectFeatured>
      );
    });

  return (
    <>
      <Wrapper>{renderProjects("grid")}</Wrapper>
      <StyledCarousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        interval={10000}
        autoPlay={playing}>
        {renderProjects("carousel")}
      </StyledCarousel>
      <PauseButton
        type="button"
        onClick={() => setPlaying(!playing)}
        aria-label={
          playing ? "Pause project carousel" : "Play project carousel"
        }>
        {playing ? "Pause" : "Play"}
      </PauseButton>
    </>
  );
}
