import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/**
 * 🍪 LoveCookies SDK — iframe loader (bulletproof)
 * - Sandboxed: no CSS/JS leaking to host (Next.js/Tailwind safe)
 * - Works on any site (WordPress, Shopify, Webflow, etc.)
 */

(function initLoveCookies() {
  if (typeof window === "undefined") return;

  // prevent duplicate init
  if ((window as any).__loveCookiesMounted) return;
  (window as any).__loveCookiesMounted = true;

  // robust script tag detection (fallback if currentScript is null)
  function getSelfScript(): HTMLScriptElement | null {
    const cs = document.currentScript as HTMLScriptElement | null;
    if (cs) return cs;
    const scripts = Array.from(document.getElementsByTagName("script"));
    return scripts.reverse().find(s => /lovecookies\.(umd|iife)\.js/.test(s.src)) || null;
  }

  const scriptTag = getSelfScript();
  const color = scriptTag?.dataset.color || "#00c471";
  const policyUrl = scriptTag?.dataset.policy || "/privacy-policy";
  const rawPosition = scriptTag?.dataset.position;
  const validPositions = ["bottom-left", "bottom-right", "bottom-center"] as const;
  type Pos = (typeof validPositions)[number];
  const position: Pos = (validPositions.includes(rawPosition as any)
    ? (rawPosition as Pos)
    : "bottom-center");

  // host container
  const host = document.createElement("div");
  host.id = "lovecookies-root";
  host.style.position = "fixed";
  host.style.zIndex = "2147483647";
  host.style.left = position === "bottom-left" ? "16px" : position === "bottom-right" ? "auto" : "0";
  host.style.right = position === "bottom-right" ? "16px" : position === "bottom-left" ? "auto" : "0";
  host.style.bottom = "16px";
  host.style.width = position === "bottom-center" ? "100%" : "auto";
  host.style.pointerEvents = "none";
  document.body.appendChild(host);

  // iframe sandbox
  const iframe = document.createElement("iframe");
  iframe.title = "LoveCookies";
  iframe.style.border = "0";
  iframe.style.width = position === "bottom-center" ? "100%" : "auto";
  iframe.style.maxWidth = "680px";
  iframe.style.pointerEvents = "auto";
  iframe.style.background = "transparent";
  iframe.setAttribute("aria-hidden", "false");
  host.appendChild(iframe);

  // link to the CSS your build emits (your CDN or same-origin path in dev)
  const cssHref = "https://cdn.jsdelivr.net/gh/SolRudd/lovecookies@main/dist/index.css";

  const srcdoc = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="color-scheme" content="dark light" />
    <link rel="stylesheet" href="${cssHref}">
    <style>
      html,body{margin:0;padding:0;background:transparent;}
      #mount{display:flex;justify-content:center;align-items:flex-end;min-height:0;}
    </style>
  </head>
  <body>
    <div id="mount"></div>
  </body>
</html>`;

  iframe.srcdoc = srcdoc;

  iframe.addEventListener("load", () => {
    try {
      const doc = iframe.contentDocument!;
      const mount = doc.getElementById("mount")!;

      // render React app INSIDE iframe (React is bundled with SDK)
      const root = (iframe.contentWindow as any).ReactDOM
        ? (iframe.contentWindow as any).ReactDOM.createRoot(mount)
        : ReactDOM.createRoot(mount);

      root.render(
        <React.StrictMode>
          <App color={color} policyUrl={policyUrl} position={position} />
        </React.StrictMode>
      );

      // auto-resize
      const resize = () => {
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
