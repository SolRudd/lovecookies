import type { ConsentState } from "../types";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export function syncConsentMode(consent: ConsentState) {
  if (typeof window === "undefined") return;

  const granted = (category: string) => Boolean(consent[category]);

  const payload = {
    ad_storage: granted("marketing") || granted("advertising") ? "granted" : "denied",
    analytics_storage: granted("analytics") ? "granted" : "denied",
    functionality_storage: granted("functional") ? "granted" : "denied",
    security_storage: "granted",
    ad_user_data: granted("marketing") || granted("advertising") ? "granted" : "denied",
    ad_personalization: granted("personalization") ? "granted" : "denied",
  };

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", payload);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "lc_consent_update",
    consent,
    payload,
  });
}
