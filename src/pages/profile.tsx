import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProfileContent from "../components/ProfileContent";
import { SEO } from "../components/SEO";
import { META } from "../utils/constants";
import { ProfilePageProps } from "../types";

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

export function Head() {
  return (
    <SEO
      title={META.profile.title}
      description={META.profile.description}
      pathname="/profile"
      keywords={["about", "experience", "skills", "developer profile"]}
    />
  );
}

export default function ProfilePage({ data, location }: ProfilePageProps) {
  return (
    <Layout location={location}>
      <ProfileContent data={data} />
    </Layout>
  );
}
