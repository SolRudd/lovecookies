// src/core/consentMode.ts

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type ConsentChoice = "accepted" | "declined";

export function updateConsent(consent: ConsentChoice) {
  if (typeof window.gtag !== "function") return;

  const granted = consent === "accepted";

  window.gtag("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
    functionality_storage: "granted",
    personalization_storage: granted ? "granted" : "denied",
    security_storage: "granted",
  });

  // Push to dataLayer for GTM triggers
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "lc_consent_update",
    consent,
  });

  console.log("LoveCookies: consent updated →", consent);
}
