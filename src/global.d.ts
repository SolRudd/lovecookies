import type { LoveCookiesInitOptions } from "./types";

declare global {
  interface Window {
    LoveCookies: { init: (opts?: LoveCookiesInitOptions) => void };
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export {};
