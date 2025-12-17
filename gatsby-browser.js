//  Register the service worker

export const onServiceWorkerUpdateReady = () => {
  console.log("A new Service Worker is ready: refreshing the page...");
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
