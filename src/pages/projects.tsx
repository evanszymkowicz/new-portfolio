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
          imageRelativePath
        }
      }
    }

    projectImages: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { regex: "/^projects\\//" }
        extension: { in: ["png", "jpg", "jpeg", "webp", "avif"] }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO, AVIF, WEBP]
            quality: 80
          )
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
