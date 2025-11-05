import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import React from "react";
import Banner from "../ui/Banner";
(() => {
    const container = document.createElement("div");
    container.id = "lovecookies-root";
    document.body.appendChild(container);
    const root = createRoot(container);
    root.render(_jsx(Banner, {}));
})();
