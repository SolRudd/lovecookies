import type { LoveCookiesPublicAPI } from "./types";

declare global {
  interface Window {
    LoveCookies: LoveCookiesPublicAPI;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export {};
