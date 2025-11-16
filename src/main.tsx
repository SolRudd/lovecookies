import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import LoveCookies from "./index";

function DevHarness() {
  useEffect(() => {
    LoveCookies.init({
      policyUrl: "/privacy-policy",
      position: "bottom-center",
    });
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        gap: "24px",
      }}
    >
      <h1 style={{ fontSize: "32px", fontWeight: 800 }}>LoveCookies SDK Dev</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={() => LoveCookies.openBanner()}>Open banner</button>
        <button onClick={() => LoveCookies.clearConsent()}>Clear consent</button>
      </div>
      <pre
        style={{
          background: "#f3f4f6",
          padding: "16px",
          borderRadius: "12px",
          maxWidth: "420px",
        }}
      >
{JSON.stringify(LoveCookies.getConsentStatus(), null, 2)}
      </pre>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <DevHarness />
  </React.StrictMode>
);
