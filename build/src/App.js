import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Banner from "./ui/Banner";
import Preferences from "./ui/Preferences";
import "./index.css";
function App() {
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100", children: [_jsx("div", { className: "fixed bottom-6 left-0 right-0 flex justify-center z-50", children: _jsx(Banner, {}) }), _jsx("div", { className: "text-red-500 font-bold", children: "Tailwind is working!" }), _jsx(Preferences, {}), _jsxs("main", { className: "text-center mt-10", children: [_jsx("h1", { className: "text-4xl font-bold mb-3", children: "LoveCookies \uD83C\uDF6A" }), _jsx("p", { className: "text-gray-500 text-lg", children: "Lightweight, GDPR-friendly cookie consent manager." })] })] }));
}
export default App;
