import { createLoveCookiesSDK } from "./runtime/LoveCookies";
import "./ui/banner.css";
import type {
  ConsentCategoryDefinition,
  ConsentSnapshot,
  ConsentState,
  LoveCookiesEventMap,
  LoveCookiesInitOptions,
  LoveCookiesPublicAPI,
  Position,
} from "./types";

const sdk = createLoveCookiesSDK();

export const LoveCookies: LoveCookiesPublicAPI = {
  init: (...args) => sdk.init(...args),
  saveConsent: (...args) => sdk.saveConsent(...args),
  getConsentStatus: (...args) => sdk.getConsentStatus(...args),
  clearConsent: (...args) => sdk.clearConsent(...args),
  openBanner: (...args) => sdk.openBanner(...args),
  canRun: (...args) => sdk.canRun(...args),
  getConsentCategories: (...args) => sdk.getConsentCategories(...args),
  on: (...args) => sdk.on(...args),
};

declare global {
  interface Window {
    LoveCookies?: LoveCookiesPublicAPI;
  }
}

if (typeof window !== "undefined") {
  window.LoveCookies = LoveCookies;
}

export default LoveCookies;
export type {
  ConsentCategoryDefinition,
  ConsentSnapshot,
  ConsentState,
  LoveCookiesEventMap,
  LoveCookiesInitOptions,
  Position,
};
