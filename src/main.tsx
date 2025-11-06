import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/**
 * LoveCookies SDK
 * Universal loader — mounts safely inside Shadow DOM
 * Works with WordPress, React, Next.js, etc.
 * Includes visual + console debugging to detect any CSS leaks.
 */

(function initLoveCookies() {
  if (typeof window === "undefined") return;

  // 🔒 Prevent double initialization
  if ((window as any).__loveCookiesMounted) {
    console.warn("[LoveCookies] Attempted double initialization — aborted.");
    return;
  }
  (window as any).__loveCookiesMounted = true;

  // 🧠 Pre-mount Tailwind check (detects global style loss)
  const beforeFont = window.getComputedStyle(document.body).fontFamily;
  const beforeBg = window.getComputedStyle(document.body).backgroundColor;
  console.log("%c[LoveCookies] Pre-mount snapshot:", "color:#10b981", {
    fontFamily: beforeFont,
    background: beforeBg,
  });

  // ✅ Create root host (no CSS reset!)
  const host = document.createElement("div");
  host.id = "lovecookies-root";
  host.style.position = "fixed";
  host.style.zIndex = "999999";
  host.style.pointerEvents = "none"; // banner handles its own clicks
  host.style.isolation = "isolate"; // isolate stacking context only
  host.style.contain = "content"; // isolate layout + paint
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

  // ✅ Read dataset options from <script> tag
  const scriptTag = document.currentScript as HTMLScriptElement | null;
  const color = scriptTag?.dataset.color || "#00c471";
  const policyUrl = scriptTag?.dataset.policy || "/privacy-policy";
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

  // 🧩 Debug info
  console.groupCollapsed("%c🍪 LoveCookies SDK Mounted", "color:#10b981");
  console.log("Color:", color);
  console.log("Policy URL:", policyUrl);
  console.log("Position:", safePosition);
  console.log("Shadow root attached:", !!shadow);
  console.groupEnd();

  // ✅ Render app inside Shadow DOM
  try {
    const root = ReactDOM.createRoot(mount);
    root.render(
      <React.StrictMode>
        <App color={color} policyUrl={policyUrl} position={safePosition} />
      </React.StrictMode>
    );
    console.log("✅ LoveCookies rendered successfully inside Shadow DOM.");
  } catch (err) {
    console.error("❌ [LoveCookies] Render failed:", err);
  }

  // 🧠 Post-mount Tailwind check
  setTimeout(() => {
    const afterFont = window.getComputedStyle(document.body).fontFamily;
    const afterBg = window.getComputedStyle(document.body).backgroundColor;
    if (afterFont !== beforeFont || afterBg !== beforeBg) {
      console.warn("%c[LoveCookies] ⚠ Tailwind style drift detected!", "color:#f43f5e");
      console.log("Before:", beforeFont, beforeBg);
      console.log("After:", afterFont, afterBg);
    } else {
      console.log("%c[LoveCookies] ✅ Tailwind integrity preserved.", "color:#10b981");
    }
  }, 500);
})();
