import React from "react";
import {
  Link,
  Wrapper,
  ProjectTitle,
  ProjectInfos,
  ProjectYear,
} from "./style";

const ProjectsListItem = ({ project }) => {
  const { title, year, url } = project || {};

  const content = (
    <Wrapper $hasLink={!!url}>
      <header>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectInfos></ProjectInfos>
      </header>
      <ProjectInfos>
        <ProjectYear>{year}</ProjectYear>
      </ProjectInfos>
    </Wrapper>
  );

  return url ? (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      {content}
    </Link>
  ) : (
    content
  );
};

export default ProjectsListItem;
