import React, { useState } from "react";
import Head from "../Head";
import { META } from "../../utils/constants";
import { ContentWrapper } from "../../style/shared";
import ProjectsFeaturedSection from "../ProjectsFeaturedSection";
import ProjectsListSection from "../ProjectsListSection";

export default function ProjectsContent({  data = {} }) {
  const projects = data.projects || { edges: [] };
  const edges = projects.edges || [];

  // Separate featured and other projects
  const featured = edges.filter(({ project }) => project.featured);
  const others = edges.filter(({ project }) => !project.featured);

  const [category, setCategory] = useState(null);

  const filterByCategory = (list) => {
    if (!category) return list;
    return list.filter(({ project }) => {
      const cats = project.category || [];
      return cats.map((c) => c.toLowerCase()).includes(category);
    });
  };

  return (
    <ContentWrapper>
      <Head {...META.projects} image={META.common.image} />
      <ProjectsFeaturedSection projects={filterByCategory(featured)} />
      <ProjectsListSection
        projects={filterByCategory(others)}
        category={category}
        setCategory={setCategory}
      />
    </ContentWrapper>
  );
}
