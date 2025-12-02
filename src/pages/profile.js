import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProfileContent from "../components/ProfileContent";
import { META } from "../utils/constants";

// MODERN: Page query (REPLACES StaticQuery)
export const query = graphql`
  query ProfileQuery {
    jobs: allJobsJson {
      edges {
        job: node {
          company
          position
          year
        }
      }
    }
    skills: allSkillsJson {
      edges {
        skill: node {
          name
          url
        }
      }
    }
  }
`;

// MODERN: Head API (REPLACES react-helmet)
export function Head() {
  return (
    <>
      <title>{META.profile.title}</title>
      <meta name="description" content={META.profile.description} />
      <meta property="og:image" content={META.common.image} />
    </>
  );
}

// Data automatically passed as prop
export default function ProfilePage({ data, location }) {
  return (
    <Layout location={location}>
      <ProfileContent data={data} />
    </Layout>
  );
}
