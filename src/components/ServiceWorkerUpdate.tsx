export const registerServiceWorker = (): void => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("Service Worker registered:", registration);

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;

        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              showUpdateNotification();
            }
          });
        }
      });
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    window.location.reload();
  });
};

export const unregisterServiceWorker = async (): Promise<void> => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  const registration = await navigator.serviceWorker.ready;
  registration.unregister();
};

export const checkForUpdates = async (): Promise<void> => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  const registration = await navigator.serviceWorker.ready;
  registration.update();
};

function showUpdateNotification(): void {
  const shouldUpdate = window.confirm(
    "A new version is available! Click OK to update."
  );

  if (shouldUpdate && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: "SKIP_WAITING",
    });
  }
}

export const isStandalone = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as any).standalone ||
    document.referrer.includes("android-app://")
  );
};

export const promptInstall = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  let deferredPrompt: any;

  window.addEventListener("beforeinstallprompt", (e: Event) => {
    e.preventDefault();
    deferredPrompt = e;

    showInstallButton(deferredPrompt);
  });

  window.addEventListener("appinstalled", () => {
    console.log("PWA installed successfully");
    deferredPrompt = null;
  });
};

function showInstallButton(deferredPrompt: any): void {
  const installButton = document.createElement("button");
  installButton.textContent = "📱 Install App";
  installButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 24px;
    background: #013220;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    transition: transform 0.2s;
  `;

  installButton.addEventListener("mouseenter", () => {
    installButton.style.transform = "translateY(-2px)";
  });

  installButton.addEventListener("mouseleave", () => {
    installButton.style.transform = "translateY(0)";
  });

  installButton.addEventListener("click", async () => {
    installButton.style.display = "none";

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to install prompt: ${outcome}`);
      deferredPrompt = null;
    }
  });

  document.body.appendChild(installButton);

  setTimeout(() => {
    if (installButton.parentElement) {
      installButton.style.opacity = "0";
      setTimeout(() => installButton.remove(), 300);
    }
  }, 10000);
}
