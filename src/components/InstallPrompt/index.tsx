import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { fonts, breakpoints, colors } from "../../style/theme";
import { focusVisible } from "../../style/shared";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 24px;
  background: ${colors.cream};
  color: ${colors.darkGreen};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-family: ${fonts.sans};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  ${focusVisible}

  @media (max-width: ${breakpoints.md}) {
    top: 20px;
    bottom: auto;
  }
`;

export default function InstallPrompt() {
  const [visible, setVisible] = useState(false);
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e as BeforeInstallPromptEvent;
      setVisible(true);
    };

    const handleAppInstalled = () => {
      deferredPrompt.current = null;
      setVisible(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleClick = async () => {
    const promptEvent = deferredPrompt.current;
    if (!promptEvent) {
      return;
    }

    try {
      await promptEvent.prompt();
      await promptEvent.userChoice;
    } catch {
      // The browser may reject the prompt; hide the button so it doesn't stick.
    } finally {
      deferredPrompt.current = null;
      setVisible(false);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <Button type="button" onClick={handleClick} aria-label="Install this app">
      📱 Install App
    </Button>
  );
}
