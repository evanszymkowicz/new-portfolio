import React from "react";
import styled from "styled-components";

const OfflineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const OfflineIcon = styled.div`
  font-size: 5rem;
  margin-bottom: 2rem;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const OfflineTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const OfflineMessage = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const RetryButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.125rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CachedPagesInfo = styled.div`
  margin-top: 3rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

const CachedPagesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;

  li {
    margin: 0.5rem 0;

    a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      display: inline-block;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.1);
      transition: background 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

const OfflinePage = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <OfflineContainer>
      <OfflineIcon>📡</OfflineIcon>
      <OfflineTitle>You&apos;re Offline</OfflineTitle>
      <OfflineMessage>
        It looks like you&apos;ve lost your internet connection. You can still
        browse previously visited pages.
      </OfflineMessage>
      <RetryButton onClick={handleRetry}>Try Again</RetryButton>
      <CachedPagesInfo>
        <h3>Available Offline: </h3>
        <CachedPagesList>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/profile/">Profile</a>
          </li>
          <li>
            <a href="/projects/">Projects</a>
          </li>
        </CachedPagesList>
      </CachedPagesInfo>
    </OfflineContainer>
  );
};

export default OfflinePage;

export const Head = () => (
  <>
    <title>Offline - Evan Szymkowicz's Portfolio</title>
    <meta name="robots" content="noindex, nofollow" />
  </>
);
