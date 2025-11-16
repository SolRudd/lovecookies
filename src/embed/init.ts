import LoveCookies from "../index";

(function exposeSDK() {
  if (typeof window === "undefined") return;
  if (!window.LoveCookies) {
    window.LoveCookies = LoveCookies;
  }

  const script = document.currentScript as HTMLScriptElement | null;
  if (script) {
    window.dispatchEvent(
      new CustomEvent("LoveCookiesScriptReady", { detail: { dataset: script.dataset } })
    );
  }
})();
