// src/core/store.ts

export interface ConsentState {
  [category: string]: boolean;
}

// Keep an in-memory copy
const state: ConsentState = {};

// Save consent to localStorage and cookies
export function setConsent(category: string, value: boolean) {
  state[category] = value;
  document.cookie = `lovecookies_${category}=${value};path=/;max-age=${
    365 * 24 * 60 * 60
  }`;

  const stored = JSON.parse(localStorage.getItem("cookieConsent") || "{}");
  stored[category] = value;
  localStorage.setItem("cookieConsent", JSON.stringify(stored));
}

// Retrieve consent from memory, localStorage, or cookies
export function getConsent(category: string): boolean | undefined {
  if (state[category] !== undefined) return state[category];

  const stored = JSON.parse(localStorage.getItem("cookieConsent") || "{}");
  if (stored[category] !== undefined) return stored[category];

  const match = document.cookie.match(
    new RegExp(`(?:^| )lovecookies_${category}=([^;]*)`)
  );
  return match ? match[1] === "true" : undefined;
}

// Get all consent states
export function getAllConsent(): ConsentState {
  return JSON.parse(localStorage.getItem("cookieConsent") || "{}");
}

// Clear all consent (for dev/testing)
export function clearConsent() {
  localStorage.removeItem("cookieConsent");
  document.cookie
    .split(";")
    .forEach((c) => {
      if (c.trim().startsWith("lovecookies_")) {
        document.cookie = `${c.split("=")[0]}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
      }
    });
  for (const key in state) delete state[key];
}
