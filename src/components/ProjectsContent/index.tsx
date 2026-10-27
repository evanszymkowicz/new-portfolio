import { useState } from "react";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import { ContentWrapper } from "../../style/shared";
import ProjectsFeaturedSection from "../ProjectsFeaturedSection";
import ProjectsListSection from "../ProjectsListSection";
import type { ProjectEdge, ProjectsData } from "../../types";

function cleanRelativePath(path?: string | null): string {
  if (!path) return "";
  return path
    .replace(/^\/+/, "")
    .replace(/^images\//, "")
    .replace(/^static\//, "");
}

function buildEdges(data: ProjectsData = {}): ProjectEdge[] {
  const rawEdges = data.projects?.edges ?? [];
  const imageNodes = data.projectImages?.nodes ?? [];
  const imageMap = new Map<string, IGatsbyImageData>();

  for (const node of imageNodes) {
    const normalized = cleanRelativePath(node.relativePath);
    const imageData = node.childImageSharp?.gatsbyImageData;
    if (normalized && imageData) {
      imageMap.set(normalized, imageData);
    }
  }

  return rawEdges.map(({ project }) => {
    const rel = cleanRelativePath(project.imageRelativePath);
    const imageData = rel ? imageMap.get(rel) : undefined;
    return { project: { ...project, imageData } };
  });
}

export default function ProjectsContent({
  data = {},
}: {
  data?: ProjectsData;
}) {
  const [category, setCategory] = useState<string | null>(null);
  const edgesWithImages = buildEdges(data);

  const categories = Array.from(
    new Set(edgesWithImages.flatMap(({ project }) => project.category ?? []))
  ).sort();

  const featured = edgesWithImages.filter(({ project }) => {
    const featuredCats = project.featuredCategories ?? [];
    if (!category) {
      return project.featured && featuredCats.length === 0;
    }
    if (featuredCats.includes(category)) {
      return true;
    }
    return (
      project.featured &&
      featuredCats.length === 0 &&
      project.category?.includes(category)
    );
  });

  const others = edgesWithImages.filter(({ project }) => !project.featured);

  const filterByCategory = (list: ProjectEdge[]) => {
    if (category === null) return list;
    return list.filter(({ project }) => project.category?.includes(category));
  };

  return (
    <ContentWrapper>
      <ProjectsFeaturedSection projects={filterByCategory(featured)} />
      <ProjectsListSection
        projects={filterByCategory(others)}
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
    </ContentWrapper>
  );
}
