import { updateConsent } from "../src/core/consentMode";
import { initBlocker } from "../src/core/blocker";

export function initLoveCookies() {
  console.log("Initializing LoveCookies SDK...");
  initBlocker(); // block 3rd-party scripts initially
  updateConsent("declined"); // default until user accepts
}
