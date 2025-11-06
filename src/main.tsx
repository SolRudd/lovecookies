import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/**
 * 🍪 LoveCookies SDK — iframe loader (bulletproof)
 * - No global CSS/JS leaks
 * - Works with Next.js, WordPress, anything
 */

(function initLoveCookies() {
  if (typeof window === "undefined") return;

  // Prevent double mount
  if ((window as any).__loveCookiesMounted) return;
  (window as any).__loveCookiesMounted = true;

  // Read dataset from <script> tag
  const scriptTag = document.currentScript as HTMLScriptElement | null;
  const color = scriptTag?.dataset.color || "#00c471";
  const policyUrl = scriptTag?.dataset.policy || "/privacy-policy";
  const rawPosition = scriptTag?.dataset.position;
  const validPositions = ["bottom-left", "bottom-right", "bottom-center"] as const;
  type Pos = (typeof validPositions)[number];
  const position: Pos = (validPositions.includes(rawPosition as any)
    ? (rawPosition as Pos)
    : "bottom-center");

  // Host for positioning (no resets)
  const host = document.createElement("div");
  host.id = "lovecookies-root";
  host.style.position = "fixed";
  host.style.zIndex = "2147483647"; // max
  host.style.left =
    position === "bottom-left" ? "16px" :
    position === "bottom-right" ? "auto" : "0";
  host.style.right =
    position === "bottom-right" ? "16px" :
    position === "bottom-left" ? "auto" : "0";
  host.style.bottom = "16px";
  host.style.width = position === "bottom-center" ? "100%" : "auto";
  host.style.pointerEvents = "none"; // widget handles its own
  document.body.appendChild(host);

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.title = "LoveCookies";
  iframe.style.border = "0";
  iframe.style.width = position === "bottom-center" ? "100%" : "auto";
  iframe.style.maxWidth = "680px";
  iframe.style.pointerEvents = "auto";
  iframe.style.background = "transparent";
  iframe.setAttribute("aria-hidden", "false");
  host.appendChild(iframe);

  // Build iframe document via srcdoc
  const cssHref = "https://cdn.jsdelivr.net/gh/SolRudd/lovecookies@main/dist/index.css";
  const srcdoc = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="color-scheme" content="dark light" />
    <link rel="stylesheet" href="${cssHref}">
    <style>
      html,body{margin:0;padding:0;background:transparent;}
      /* prevent layout jumps */
      #mount{display:flex;justify-content:center;align-items:flex-end;min-height:0;}
    </style>
  </head>
  <body>
    <div id="mount"></div>
  </body>
</html>`;

  // Set srcdoc then render React inside iframe
  iframe.srcdoc = srcdoc;

  iframe.addEventListener("load", () => {
    try {
      const doc = iframe.contentDocument!;
      const mount = doc.getElementById("mount")!;
      // Inject a tiny UMD bridge so ReactDOM from parent can render inside child
      // (We just use the parent ReactDOM to keep bundle small)
      (iframe.contentWindow as any).React = React;
      (iframe.contentWindow as any).ReactDOM = ReactDOM;

      const root = (iframe.contentWindow as any).ReactDOM.createRoot(mount);
      root.render(
        <React.StrictMode>
          <App color={color} policyUrl={policyUrl} position={position} />
        </React.StrictMode>
      );

      // Resize to fit content
      const resize = () => {
        // optional: tweak if you want dynamic height
        iframe.style.height = mount.scrollHeight + "px";
      };
      resize();
      new MutationObserver(resize).observe(mount, { childList: true, subtree: true });
    } catch (e) {
      console.error("[LoveCookies] render failed:", e);
    }
  });

  console.log("✅ LoveCookies (iframe) mounted safely.", { color, policyUrl, position });
})();
