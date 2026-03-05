import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { fonts, colors, media } from "../style/theme";

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Subtitle = styled.h1`
  text-align: center;
  font-size: 1.1rem;
  font-family: ${fonts.mono};
  color: ${colors.grey};
  margin: 1rem 0;

  span {
    color: ${colors.darkYellow};
  }
`;

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  text-align: center;
  ${media.sm`
    top: 45%;
  `}
`;

const BackToHome = styled(Link)`
  color: ${colors.darkYellow};
  font-family: ${fonts.mono};
  font-size: 0.9rem;
  border-bottom: 1px dotted ${colors.darkRed};
  padding: 0 0 0.1rem;
  display: inline-block;

  &:hover {
    color: ${colors.darkYellow};
  }
`;

export function Head() {
  return (
    <SEO
      title="404 - Page Not Found | Evan Szymkowicz"
      description="The page you're looking for doesn't exist."
    >
      <meta name="robots" content="noindex, nofollow" />
    </SEO>
  );
}

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Wrapper>
      <header>
        <Title>Sorry</Title>
        <Subtitle>You have reached a dead end</Subtitle>
        <BackToHome to="/">Go Home</BackToHome>
      </header>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
