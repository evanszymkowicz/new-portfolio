import React, { useMemo, useState } from "react";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import Head from "../Head";
import { META } from "../../utils/constants";
import { ContentWrapper } from "../../style/shared";
import ProjectsFeaturedSection from "../ProjectsFeaturedSection";
import ProjectsListSection from "../ProjectsListSection";

type BaseProject = {
  title: string;
  category?: string[];
  year?: string;
  url?: string;
  featured?: boolean;
  imageRelativePath?: string | null;
};

type ProjectWithImageData = BaseProject & {
  imageData?: IGatsbyImageData;
};

type ProjectEdge = {
  project: ProjectWithImageData;
};

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

function normalizeRelativePath(path?: string | null): string {
  if (!path) return "";
  return path
    .replace(/^\/+/, "")
    .replace(/^images\//, "")
    .replace(/^static\//, "");
}

export default function ProjectsContent({ data = {} }: { data?: ProjectsQueryData }) {
  const [category, setCategory] = useState<string | null>(null);

  const edgesWithImages = useMemo<ProjectEdge[]>(() => {
    const rawEdges = data.projects?.edges ?? [];
    const imageNodes = data.projectImages?.nodes ?? [];

    const imageMap = new Map<string, IGatsbyImageData>();

    for (const node of imageNodes) {
      const normalized = normalizeRelativePath(node.relativePath);
      const imageData = node.childImageSharp?.gatsbyImageData;
      if (normalized && imageData) {
        imageMap.set(normalized, imageData);
      }
    }

    return rawEdges.map(({ project }) => {
      const rel = normalizeRelativePath(project.imageRelativePath);
      const imageData = rel ? imageMap.get(rel) : undefined;
      return { project: { ...project, imageData } };
    });
  }, [data.projects?.edges, data.projectImages?.nodes]);

  const featured = edgesWithImages.filter((e) => Boolean(e.project.featured));
  const others = edgesWithImages.filter((e) => !e.project.featured);

  const filterByCategory = (list: ProjectEdge[]) => {
    if (!category) return list;
    return list.filter(({ project }) => {
      const cats = project.category ?? [];
      return cats.map((c: string) => c.toLowerCase()).includes(category);
    });
  };

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