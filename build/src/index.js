import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import Banner from "./ui/Banner";
// Attach to window for direct script use
(function initLoveCookies() {
    if (typeof window !== "undefined") {
        window.LoveCookies = {
            init: () => {
                let container = document.getElementById("lovecookies-root");
                if (!container) {
                    container = document.createElement("div");
                    container.id = "lovecookies-root";
                    document.body.appendChild(container);
                }
                const root = createRoot(container);
                root.render(_jsx(Banner, {}));
            },
        };
        // Auto-init on load
        window.LoveCookies.init();
    }
})();
