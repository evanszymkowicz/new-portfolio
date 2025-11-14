import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProjectsContent from "../components/ProjectsContent";
import { META } from "../utils/constants";

// MODERN: Simplified page query (no image processing needed)
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
          image
        }
      }
    }
  }
`;

export function Head() {
  return (
    <>
      <title>{META.projects.title}</title>
      <meta name="description" content={META.projects.description} />
      <meta property="og:image" content={META.common.image} />
    </>
  );
}

export default function ProjectsPage({ data, location }) {
  return (
    <Layout location={location}>
      <ProjectsContent data={data} />
    </Layout>
  );
}
