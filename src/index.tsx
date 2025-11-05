import React from "react";
import { createRoot } from "react-dom/client";
import Banner from "./ui/Banner";

// Attach to window for direct script use
(function initLoveCookies() {
  if (typeof window !== "undefined") {
    (window as any).LoveCookies = {
      init: () => {
        let container = document.getElementById("lovecookies-root");
        if (!container) {
          container = document.createElement("div");
          container.id = "lovecookies-root";
          document.body.appendChild(container);
        }
        const root = createRoot(container);
        root.render(<Banner />);
      },
    };

    // Auto-init on load
    (window as any).LoveCookies.init();
  }
})();
