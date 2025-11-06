import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/**
 * LoveCookies SDK
 * Universal loader — mounts safely inside Shadow DOM
 * Works with WordPress, React, Next.js, etc.
 * Keeps host styles sandboxed (no Tailwind breakage).
 */

(function initLoveCookies() {
  if (typeof window === "undefined") return;

  // ✅ Prevent double initialization
  if ((window as any).__loveCookiesMounted) return;
  (window as any).__loveCookiesMounted = true;

  // ✅ Create root host
  const host = document.createElement("div");
  host.id = "lovecookies-root";
  // ⚡ SAFER isolation: don’t nuke Tailwind globals
  host.style.position = "fixed";
  host.style.zIndex = "999999";
  host.style.contain = "content"; // isolates layout & style
  host.style.fontFamily = "inherit"; // keep same font
  host.style.all = "unset"; // just resets local props, not the page
  document.body.appendChild(host);

  // ✅ Create Shadow DOM for full isolation
  const shadow = host.attachShadow({ mode: "open" });
  const mount = document.createElement("div");
  shadow.appendChild(mount);

  // ✅ Load Tailwind styles inside Shadow DOM (not globally)
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/gh/SolRudd/lovecookies@main/dist/index.css";
  shadow.appendChild(styleLink);

  // ✅ Read dataset options from the <script> tag
  const scriptTag = document.currentScript as HTMLScriptElement | null;
  const color = scriptTag?.dataset.color || "#00c471";
  const policyUrl = scriptTag?.dataset.policy || "/privacy-policy";

  // ✅ Validate and normalize position safely
  const rawPosition = scriptTag?.dataset.position;
  const validPositions = ["bottom-left", "bottom-right", "bottom-center"] as const;
  type ValidPosition = (typeof validPositions)[number];
  const safePosition: ValidPosition = validPositions.includes(rawPosition as any)
    ? (rawPosition as ValidPosition)
    : "bottom-center";

  if (!validPositions.includes(rawPosition as any) && rawPosition) {
    console.warn(
      `[LoveCookies] Invalid data-position="${rawPosition}". Falling back to "bottom-center".`
    );
  }

  // ✅ Debug info for developers
  console.log(
    "%c🍪 LoveCookies SDK Loaded",
    "color:#10b981;font-weight:bold;font-size:14px;"
  );
  console.log(
    "→ Source: https://github.com/SolRudd/lovecookies/tree/main/sdk"
  );

  // ✅ Render app inside the Shadow DOM
  const root = ReactDOM.createRoot(mount);
  root.render(
    <React.StrictMode>
      <App color={color} policyUrl={policyUrl} position={safePosition} />
    </React.StrictMode>
  );

  console.log("✅ LoveCookies SDK initialized safely.");
})();
