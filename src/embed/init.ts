import { updateConsent } from "../core/consentMode";
import { initBlocker } from "../core/blocker";

(function autoInit() {
  initBlocker();
  updateConsent("declined");
  console.log("LoveCookies autoInit complete");
})();
