import React from "react";
import Layout from "./src/components/Layout";
import { GlobalStyle } from "./src/style/global";

let hasRefreshedOnUpdate = false;
let controllerListenerAdded = false;

export const onServiceWorkerUpdateReady = () => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  navigator.serviceWorker.ready
    .then((registration) => {
      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }

      if (controllerListenerAdded) {
        return;
      }
      controllerListenerAdded = true;

      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (hasRefreshedOnUpdate) return;
        hasRefreshedOnUpdate = true;
        window.location.reload();
      });

      // Fallback: if controllerchange doesn't fire, reload anyway.
      setTimeout(() => {
        if (hasRefreshedOnUpdate) return;
        hasRefreshedOnUpdate = true;
        window.location.reload();
      }, 1000);
    })
    .catch(() => {
      // Ignore: the browser will handle a broken service worker state.
    });
};

export const wrapPageElement = ({ element, props }) => (
  <>
    <GlobalStyle />
    <Layout location={props.location}>{element}</Layout>
  </>
);
