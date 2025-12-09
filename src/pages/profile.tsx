import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import ProfileContent from "../components/ProfileContent";
import { META } from "../utils/constants";
import { ProfileData } from "../types";

// Page query
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

// Head API with typed metadata
export function Head() {
  return (
    <>
      <title>{META.profile.title}</title>
      <meta name="description" content={META.profile.description} />
      <meta property="og:image" content={META.common.image} />
    </>
  );
}

// Typed page component
export default function ProfilePage({
  data,
  location,
}: PageProps<ProfileData>) {
  return (
    <Layout location={location}>
      <ProfileContent data={data} />
    </Layout>
  );
}
