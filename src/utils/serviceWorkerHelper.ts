export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw. js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);

        // Check for updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;

          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // New service worker is installed, show update notification
              showUpdateNotification();
            }
          });
        });
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });

    // Listen for controller change (new service worker activated)
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  }
};

export const unregisterServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
};

export const checkForUpdates = async () => {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.ready;
    registration.update();
  }
};

function showUpdateNotification() {
  // You can integrate with a toast notification library here
  const shouldUpdate = window.confirm(
    "A new version is available!  Click OK to update."
  );

  if (shouldUpdate) {
    navigator.serviceWorker.controller.postMessage({
      type: "SKIP_WAITING",
    });
  }
}

// Check if app is running standalone (installed as PWA)
export const isStandalone = () => {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone ||
    document.referrer.includes("android-app://")
  );
};

// Prompt user to install PWA
export const promptInstall = () => {
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show custom install button
    showInstallButton(deferredPrompt);
  });

  window.addEventListener("appinstalled", () => {
    console.log("PWA installed successfully");
    deferredPrompt = null;
  });
};

function showInstallButton(deferredPrompt) {
  // Create and show install button
  const installButton = document.createElement("button");
  installButton.textContent = "📱 Install App";
  installButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 24px;
    background: #0066cc;
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

  // Auto-hide after 10 second timeout
  setTimeout(() => {
    if (installButton.parentElement) {
      installButton.style.opacity = "0";
      setTimeout(() => installButton.remove(), 300);
    }
  }, 10000);
}
