import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/ui/Preferences.tsx
import { useState } from "react";
export default function Preferences() {
    const [open, setOpen] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    const [ads, setAds] = useState(false);
    const [personalization, setPersonalization] = useState(false);
    if (!open)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50", children: _jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl p-6 w-[90%] max-w-md shadow-lg", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Cookie Preferences" }), _jsxs("label", { className: "block mb-2", children: [_jsx("input", { type: "checkbox", checked: analytics, onChange: () => setAnalytics(!analytics), className: "mr-2" }), "Analytics Cookies"] }), _jsxs("label", { className: "block mb-2", children: [_jsx("input", { type: "checkbox", checked: ads, onChange: () => setAds(!ads), className: "mr-2" }), "Advertising Cookies"] }), _jsxs("label", { className: "block mb-2", children: [_jsx("input", { type: "checkbox", checked: personalization, onChange: () => setPersonalization(!personalization), className: "mr-2" }), "Personalization Cookies"] }), _jsxs("div", { className: "flex justify-end mt-4 gap-2", children: [_jsx("button", { className: "px-4 py-2 border rounded-lg", onClick: () => setOpen(false), children: "Cancel" }), _jsx("button", { className: "px-4 py-2 bg-[#00c471] text-white rounded-lg", onClick: () => setOpen(false), children: "Save Preferences" })] })] }) }));
}
