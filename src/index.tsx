import React from "react";
import { createRoot } from "react-dom/client";
import Banner from "./ui/Banner";
import "./index.css";
import type { LoveCookiesInitOptions } from "./types";

const defaultOptions: LoveCookiesInitOptions = {
  color: "#00c471",
  position: "bottom-center",
  policyUrl: "/privacy-policy",
  autoShow: true,
};

(function initLoveCookies() {
  if (typeof window === "undefined") return;

  (window as any).LoveCookies = {
    init: (userOptions: LoveCookiesInitOptions = {}) => {
      const options = { ...defaultOptions, ...userOptions };

      let container = document.getElementById("lovecookies-root");
      if (!container) {
        container = document.createElement("div");
        container.id = "lovecookies-root";
        document.body.appendChild(container);
      }

      const root = createRoot(container);
      root.render(<Banner options={options} />);
    },
  };

  if (defaultOptions.autoShow) (window as any).LoveCookies.init();
})();
