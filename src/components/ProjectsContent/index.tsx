import React, { useMemo, useState } from "react";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import { ContentWrapper } from "../../style/shared";
import ProjectsFeaturedSection from "../ProjectsFeaturedSection";
import ProjectsListSection from "../ProjectsListSection";
import type { ProjectEdge, ProjectsQueryData } from "../../types";

//  Clean relative paths just in case there is an error.
function cleanRelativePath(path?: string | null): string {
  if (!path) return "";
  return path
    .replace(/^\/+/, "")
    .replace(/^images\//, "")
    .replace(/^static\//, "");
}

//  Component is now declared as ({ data = {} }: {data: ProjectsQueryData}) to provide a default empty object for data.
//  Prevent crashes when data is undefined and allows the component to render without data while still providing type safety.
//  Prevent mismatches
export default function ProjectsContent({
  data = {},
}: {
  data?: ProjectsQueryData;
}) {
  const [category, setCategory] = useState<string | null>(null);

  //  useMemo is used to compute the edges with image data only when the relevant parts of the data change.
  //  Use graceful checks data.projects?.edges ?? [] and gracefully check data.projectImages?.nodes ?? [] to handle cases where the data might be missing.
  //  Good defensive programming practice to prevent runtime errors and ensure the component can still render even if some data is missing.
  const edgesWithImages = useMemo<ProjectEdge[]>(() => {
    const rawEdges = data.projects?.edges ?? [];
    const imageNodes = data.projectImages?.nodes ?? [];
    //  Create a map of normalized relative paths to image data for efficient lookup.
    const imageMap = new Map<string, IGatsbyImageData>();
    //  For each project normalize imageRelativePath and look up matching image data.
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
  }, [data.projects?.edges, data.projectImages?.nodes]);

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

  //  Everything not in the current featured list goes to the grid/list below.
  const featuredTitles = new Set(featured.map(({ project }) => project.title));
  const others = edgesWithImages.filter(
    ({ project }) => !featuredTitles.has(project.title)
  );

  //  Type safe category filter.
  //  Explicit type (category: string | null).
  const filterByCategory = (list: ProjectEdge[]) => {
    if (!category) return list;
    return list.filter(({ project }) => project.category?.includes(category));
  };

  return (
    <ContentWrapper>
      <ProjectsFeaturedSection projects={filterByCategory(featured)} />
      <ProjectsListSection
        projects={filterByCategory(others)}
        category={category}
        setCategory={setCategory}
      />
    </ContentWrapper>
  );
}
