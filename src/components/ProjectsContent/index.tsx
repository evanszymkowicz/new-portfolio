import React, { useMemo, useState } from "react";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import Head from "../Head";
import { META } from "../../utils/constants";
import { ContentWrapper } from "../../style/shared";
import ProjectsFeaturedSection from "../ProjectsFeaturedSection";
import ProjectsListSection from "../ProjectsListSection";

//  New TypeScript projects content implemenatation
//  Ongoing TS migration, this is a work in progress, expect some changes in the future
//  PNG files for featired images were data.projects now project.imageData

type ProjectsQueryData = {
  projects: {
    edges: Array<{
      project: {
        title: string;
        category?: string[];
        year?: string;
        url?: string;
        featured?: boolean;
        imageRelativePath?: string | null; //   result or null
      };
    }>;
  };
  projectImages: {
    nodes: Array<{
      relativePath: string;
      childImageSharp?: {
        gatsbyImageData: IGatsbyImageData; //   result or null
      } | null;
    }>;
  };
};

type ProjectWithImageData =
  ProjectsQueryData["projects"]["edges"][number]["project"] & {
    imageData?: IGatsbyImageData;
  };

type EdgeWithImageData = {
  project: ProjectWithImageData;
};

export default function ProjectsContent({ data }: { data: ProjectsQueryData }) {
  const edges = data?.projects?.edges ?? [];

  //  1: useMemo() to map "projects/project-name/image.png" to GatsbyImageData
  const imageDataByRelativePath = useMemo(() => {
    const map = new Map<string, IGatsbyImageData>();
    const nodes = data?.projectImages?.nodes ?? [];

    for (const node of nodes) {
      const key = node?.relativePath;
      const imageData = node?.childImageSharp?.gatsbyImageData;
      if (key && imageData) map.set(key, imageData);
    }

    return map;
  }, [data]);

  //  2: Attach imageData to each project
  const edgesWithImages: EdgeWithImageData[] = useMemo(() => {
    return edges.map((edge) => {
      const project = edge.project;
      const key = project.imageRelativePath ?? undefined;

      return {
        project: {
          ...project,
          imageData: key ? imageDataByRelativePath.get(key) : undefined,
        },
      };
    });
  }, [edges, imageDataByRelativePath]);

  // 3) Separate featured + others
  const featured = edgesWithImages.filter((e) => !!e.project.featured);
  const others = edgesWithImages.filter((e) => !e.project.featured);

  const [category, setCategory] = useState<string | null>(null);

  const filterByCategory = (list: EdgeWithImageData[]) => {
    if (!category) return list;
    return list.filter(({ project }) => {
      const cats = project.category ?? [];
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
