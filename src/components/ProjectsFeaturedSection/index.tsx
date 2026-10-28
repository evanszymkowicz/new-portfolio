import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Wrapper, ProjectFeatured, StyledCarousel } from "./style";
import ProjectImage from "../ProjectImage";
import type { FeaturedProjectEdge } from "../../types";

type ProjectsFeaturedSectionProps = {
  projects?: FeaturedProjectEdge[];
};

export default function ProjectsFeaturedSection({
  projects = [],
}: ProjectsFeaturedSectionProps) {
  const renderProjects = (keyPrefix: string) =>
    (projects || [])
      .filter(
        (
          edge
        ): edge is FeaturedProjectEdge & {
          project: {
            imageData: NonNullable<FeaturedProjectEdge["project"]["imageData"]>;
          };
        } => !!edge.project.imageData
      )
      .map(({ project }) => {
        const { title, imageData, url } = project;
        const imageElement = <ProjectImage imageData={imageData} alt={title} />;

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
        autoPlay={true}>
        {renderProjects("carousel")}
      </StyledCarousel>
    </>
  );
}
