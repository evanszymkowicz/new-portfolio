import React, { useMemo, useState } from "react";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import Head from "../Head";
import { META } from "../../utils/constants";
import { ContentWrapper } from "../../style/shared";
import ProjectsFeaturedSection from "../ProjectsFeaturedSection";
import ProjectsListSection from "../ProjectsListSection";

//  New index.tsx with image data handling.
//  Replaces the previous version that only had direct access to image paths.
//  This version normalizes image paths and creates a map for efficient lookup.

//  Base project type with with raw data from GraphQL query excluding image data.
//  Required fields is title. Optional fields is category, year, url, featured, and imageRelativePath (the new field that holds the relative path to the image).
//  Update scehema fields here first when adding new fields to the project schema in GraphQL query. This type is used for the projects data before image data is added.
//  One canonical source of truth for project content
type BaseProject = {
  title: string;
  category?: string[];
  year?: string;
  url?: string;
  featured?: boolean;
  imageRelativePath?: string | null;
};

//  UI data
//  Extends BaseProject with Gatsby image payload for use with image rendering components.
//  The imageData field is optional because not all projects have an image. 
//  The component should be able to handle cases where image data is missing without breaking. 
//  This type is used for after image data is added.
type ProjectWithImageData = BaseProject & {
  imageData?: IGatsbyImageData;
};

//  Collection wrapper
//  GraphQl lists are commonly wrapped in an edges/node structure. This type represents a single edge.
//  Used to avoid ahhoc edges array and to provide a clear structure for the project data as it flows through the component.
type ProjectEdge = {
  project: ProjectWithImageData;
};

//  Query payload
//  Models full response shape for Projects page query.
//  Creates a clear contract for the data prop passed into the ProjectsContent component.
//  Fewer runtime errors and better experience working with the data prop. The shape is defined and documented in one place.
type ProjectsQueryData = {
  projects?: {
    edges?: {
      project: BaseProject;
    }[];
  };
  projectImages?: {
    nodes: {
      relativePath: string;
      childImageSharp?: {
        gatsbyImageData: IGatsbyImageData;
      } | null;
    }[];
  };
};

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

  //  Split projects into featured vs non-featured.
  const featured = edgesWithImages.filter((e) => Boolean(e.project.featured));
  const others = edgesWithImages.filter((e) => !e.project.featured);

  //  Type safe category filter.
  //  Explicit type (category: string | null).
  const filterByCategory = (list: ProjectEdge[]) => {
    if (!category) return list;
    return list.filter(({ project }) => {
      const cats = project.category ?? [];
      return cats.map((c: string) => c.toLowerCase()).includes(category);
    });
  };

  //  Now passes required pathname="/projects" to the Head component.
  //  Fix missing required prop error in TypeScript.
  //  Render order is Head, ProjectsFeaturedSection, ProjectsListSection.
  return (
    <ContentWrapper>
      <Head {...META.projects} image={META.common.image} pathname="/projects" />
      <ProjectsFeaturedSection projects={filterByCategory(featured)} />
      <ProjectsListSection
        projects={filterByCategory(others)}
        category={category}
        setCategory={setCategory}
      />
    </ContentWrapper>
  );
}
