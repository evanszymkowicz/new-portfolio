import React from "react";
import ProjectsListItem from "../ProjectsListItem";
import { Wrapper, ProjectsTitle, ButtonsWrapper, FilterButton, NDAWrapper, StyledDivider, StyledEmailMe } from "./style";

const ProjectsListSection = ({ projects, category, setCategory }) => {
    return (
      <Wrapper>
        <header>
          <ProjectsTitle>Other projects</ProjectsTitle>
          <ButtonsWrapper>
            <FilterButton
              active={category === "website"}
              onClick={() => setCategory("website")}
            >
              web
            </FilterButton>
            <FilterButton
              active={category === "code"}
              onClick={() => setCategory("code")}
            >
              code
            </FilterButton>
            <FilterButton
              active={category === "marketing"}
              onClick={() => setCategory("marketing")}
            >
              marketing
            </FilterButton>
            {category && (
              <FilterButton onClick={() => setCategory(null)}>all</FilterButton>
            )}
          </ButtonsWrapper>
        </header>
        <main>
          {projects.map(({ project }, i) => (
            <ProjectsListItem key={i} project={project} />
          ))}
        </main>
        <NDAWrapper>
          <StyledDivider height={6} width={43} />
          <h2>Want to know more?</h2>
          <StyledEmailMe text="Email me" />
        </NDAWrapper>
      </Wrapper>
    );
}

export default ProjectsListSection;