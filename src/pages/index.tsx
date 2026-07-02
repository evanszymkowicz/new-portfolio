import React from "react";
import { graphql } from "gatsby";
import ProfileContent from "../components/ProfileContent";
import { SEO } from "../components/SEO";
import { META } from "../utils/constants";
import { ProfilePageProps } from "../types";

export const query = graphql`
  query HomePageQuery {
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
      title={META.index.title}
      description={META.index.description}
      keywords={[
        "web developer",
        "software developer",
        "portfolio",
        "React",
        "Gatsby",
        "about",
        "experience",
        "skills",
      ]}
    />
  );
}

export default function IndexPage({ data }: ProfilePageProps) {
  return <ProfileContent data={data} />;
}
