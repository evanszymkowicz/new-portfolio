import React, { useState, useMemo } from "react";
import { ContentWrapper } from "../../styles/shared";
import ProjectsListSection from "../ProjectsListSection";
import ProjectsFeaturedSection from "../ProjectsFeaturedSection";

// MODERN: Functional component with hooks (REPLACES class component)
export default function ProjectsContent({ data }) {
  const [category, setCategory] = useState(null);

  // Memoized data processing
  const projects = useMemo(() => {
    return data?.projects?.edges || [];
  }, [data]);

  const featuredProjects = useMemo(() => {
    return projects.filter(({ project }) => project.featured);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(({ project }) => {
      if (project.featured) return false;
      if (!category) return true;
      return project.category.includes(category);
    });
  }, [projects, category]);

  return (
    <ContentWrapper>
      <ProjectsFeaturedSection projects={featuredProjects} />
      <ProjectsListSection
        projects={filteredProjects}
        category={category}
        setCategory={setCategory}
      />
    </ContentWrapper>
  );
}
