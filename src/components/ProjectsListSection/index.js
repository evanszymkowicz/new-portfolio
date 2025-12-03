import React from "react";
import ProjectsListItem from "../ProjectsListItem";
import EmailMe from "../EmailMe";
import {
  Wrapper,
  ProjectsTitle,
  ButtonsWrapper,
  FilterButton,
  StyledDivider,
  StyledEmailMe,
} from "./style";

const ProjectsListSection = ({ projects, category, setCategory }) => {
  const categories = ["All", "Web", "Mobile", "Design"];

  return (
    <Wrapper>
      <ProjectsTitle>All Projects</ProjectsTitle>
      <ButtonsWrapper>
        {categories.map((cat) => (
          <FilterButton
            key={cat}
            $active={category === cat || (category === null && cat === "All")}
            onClick={() => setCategory(cat === "All" ? null : cat)}
          >
            {cat}
          </FilterButton>
        ))}
      </ButtonsWrapper>
      <div>
        {projects.map((project, index) => (
          <ProjectsListItem key={index} {...project} />
        ))}
      </div>
    </Wrapper>
  );
};

export default ProjectsListSection;
