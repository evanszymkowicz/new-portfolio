let hasRefreshedOnUpdate = false;

export const onServiceWorkerUpdateReady = () => {
  // Gatsby calls this when the new SW has installed.
  console.log("Service Worker update ready: activating and refreshing...");

  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  navigator.serviceWorker.ready
    .then((registration) => {
      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }

      // Ensure we refresh once the new SW takes control.
      navigator.serviceWorker.addEventListener("controllerchange",() => {
        if (hasRefreshedOnUpdate) return;
        hasRefreshedOnUpdate = true;
        window.location.reload();
      });

      // Fallback: if controllerchange doesn't fire quickly for some reason, reload anyway.
      setTimeout(() => {
        if (hasRefreshedOnUpdate) return;
        hasRefreshedOnUpdate = true;
        window.location.reload();
      },1000);
    })
    .catch((err) => {
      console.error("Service Worker ready() failed:",err);
      // If SW is in a weird state, a simple reload is often the best recovery.
      if (!hasRefreshedOnUpdate) {
        hasRefreshedOnUpdate = true;
        window.location.reload();
      }
    });
};

export const onServiceWorkerActive = () => {
  console.log("Service Worker: Now active");
};

export const onServiceWorkerInstalled = () => {
  console.log("Service Worker: Installed");
};

export const onServiceWorkerUpdateFound = () => {
  console.log("Service Worker: Update found");
};

export const onServiceWorkerRedundant = () => {
  console.log("Service Worker: Redundant");
};