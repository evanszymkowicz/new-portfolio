import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface UpdateBannerProps {
  $show: boolean;
}

const UpdateBanner = styled.div<UpdateBannerProps>`
  position: fixed;
  bottom: ${(props) => (props.$show ? "20px" : "-100px")};
  left: 50%;
  transform: translateX(-50%);
  background: #013220;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 9999;
  transition: bottom 0.3s ease;
  max-width: 90%;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const UpdateMessage = styled.span`
  flex: 1;
  font-size: 0.95rem;
`;

const UpdateButton = styled.button`
  background: white;
  color: #013220;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CloseButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const ServiceWorkerUpdate: React.FC = () => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker.ready.then((reg) => {
      setRegistration(reg);

      reg.addEventListener("updatefound", () => {
        const newWorker = reg.installing;

        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              setShowUpdate(true);
            }
          });
        }
      });
    });

    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }, []);

  const handleUpdate = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  };

  const handleDismiss = () => {
    setShowUpdate(false);
  };

  return (
    <UpdateBanner $show={showUpdate}>
      <UpdateMessage>🎉 A new version is available!</UpdateMessage>
      <UpdateButton onClick={handleUpdate}>Update Now</UpdateButton>
      <CloseButton onClick={handleDismiss} aria-label="Dismiss">
        ×
      </CloseButton>
    </UpdateBanner>
  );
};

export default ServiceWorkerUpdate;
