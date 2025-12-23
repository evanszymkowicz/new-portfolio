import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProjectsContent from "../components/ProjectsContent";
import { SEO } from "../components/SEO";
import { META } from "../utils/constants";
import { ProjectsPageProps } from "../types";

export const query = graphql`
  query ProjectsQuery {
    projects: allProjectsJson {
      edges {
        project: node {
          title
          category
          year
          url
          featured
          image {
            src
            sources {
              media
              srcset
            }
          }
        }
      }
    }
  }
`;

export function Head() {
  return (
    <SEO
      title={META.projects.title}
      description={META.projects.description}
      pathname="/projects"
      keywords={["projects", "portfolio", "web development", "featured work"]}
    />
  );
}

export default function ProjectsPage({ data, location }: ProjectsPageProps) {
  return (
    <Layout location={location}>
      <ProjectsContent data={data} />
    </Layout>
  );
}
