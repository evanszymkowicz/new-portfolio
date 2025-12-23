import React from "react";
import Layout from "../components/layout";
import Intro from "../components/Intro";
import { SEO } from "../components/SEO";
import { META } from "../utils/constants";
import { PageProps } from "../types";

// MODERN:  Use Gatsby Head API with reusable SEO component
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
      ]}
    />
  );
}

export default function IndexPage({ location }: PageProps) {
  return (
    <Layout location={location}>
      <Intro fixed={true} />
    </Layout>
  );
}
