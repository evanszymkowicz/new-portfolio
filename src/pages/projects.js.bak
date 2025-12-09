import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import ProjectsContent from "../components/ProjectsContent";

const projectsQuery = graphql`
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

export default ({ location }) => (
  <Layout location={location}>
    <StaticQuery
      query={projectsQuery}
      render={(data) => <ProjectsContent data={data} />}
    />
  </Layout>
);
