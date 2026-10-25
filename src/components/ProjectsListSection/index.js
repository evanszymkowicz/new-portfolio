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

/**
 * @param {Object} props
 * @param {import("../../types").ProjectEdge[]} props.projects
 * @param {string[]} [props.categories]
 * @param {string | null} props.category
 * @param {(category: string | null) => void} props.setCategory
 */
const ProjectsListSection = ({
  projects,
  categories = [],
  category,
  setCategory,
}) => (
  <Wrapper>
    <header>
      <ProjectsTitle>Other Work</ProjectsTitle>
      <ButtonsWrapper>
        {categories.map((cat) => (
          <FilterButton
            key={cat}
            $active={category === cat}
            onClick={() => setCategory(cat)}>
            {cat}
          </FilterButton>
        ))}
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
