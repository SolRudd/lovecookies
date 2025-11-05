import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import Banner from "./ui/Banner";
// src/index.tsx
import "./index.css"; // includes Tailwind directives
// Immediately attach LoveCookies to the window
(function initLoveCookies() {
    if (typeof window !== "undefined") {
        window.LoveCookies = {
            init: () => {
                let container = document.getElementById("lovecookies-root");
                // If container doesn’t exist, create it
                if (!container) {
                    container = document.createElement("div");
                    container.id = "lovecookies-root";
                    document.body.appendChild(container);
                }
                // Mount the banner
                const root = createRoot(container);
                root.render(_jsx(Banner, {}));
            },
        };
        // Optional auto-init (comment this line if you want manual init only)
        window.LoveCookies.init();
    }
})();
