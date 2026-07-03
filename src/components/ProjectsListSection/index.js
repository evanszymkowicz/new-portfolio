import React from "react";
import ProjectsListItem from "../ProjectsListItem";
import {
  Wrapper,
  ProjectsTitle,
  ButtonsWrapper,
  FilterButton,
  QuestionWrapper,
  StyledDivider,
  StyledEmailMe,
} from "./style";

const ProjectsListSection = ({ projects, category, setCategory }) => (
  <Wrapper>
    <header>
      <ProjectsTitle>Other Work</ProjectsTitle>
      <ButtonsWrapper>
        <FilterButton
          $active={category === "website"}
          onClick={() => setCategory("website")}>
          web
        </FilterButton>
        <FilterButton
          $active={category === "code"}
          onClick={() => setCategory("code")}>
          code
        </FilterButton>
        <FilterButton
          $active={category === "email"}
          onClick={() => setCategory("email")}>
          email
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
    <QuestionWrapper>
      <StyledDivider height={6} width={43} />
      <h2>Want to know more?</h2>
      <StyledEmailMe text="Email me" />
    </QuestionWrapper>
  </Wrapper>
);

export default ProjectsListSection;
