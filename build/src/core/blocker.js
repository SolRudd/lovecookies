// src/core/blocker.ts
export function blockScripts() {
    const scripts = document.querySelectorAll("script[src]");
    scripts.forEach((script) => {
        const src = script.getAttribute("src") || "";
        if (src.includes("googletagmanager") || src.includes("analytics")) {
            script.setAttribute("type", "text/plain");
            script.setAttribute("data-blocked", "true");
            console.log("Blocked third-party script:", src);
        }
    });
}
export function initBlocker() {
    console.log("LoveCookies blocker active");
    blockScripts();
}
