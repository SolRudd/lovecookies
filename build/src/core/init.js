import { updateConsent } from "./consentMode";
import { initBlocker } from "./blocker";
export function initLoveCookies() {
    console.log("Initializing LoveCookies SDK...");
    initBlocker(); // block 3rd-party scripts initially
    updateConsent("declined"); // default until user accepts
}
