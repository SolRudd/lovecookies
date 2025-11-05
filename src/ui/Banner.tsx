import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllConsent, setConsent, clearConsent } from "../core/store";
import { updateConsent } from "../core/consentMode";
import type { LoveCookiesInitOptions } from "../types";

const CookieIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <circle cx="8" cy="8" r="1" fill="currentColor" />
    <circle cx="16" cy="9" r="1" fill="currentColor" />
    <circle cx="9" cy="15" r="1" fill="currentColor" />
    <circle cx="15" cy="15" r="1" fill="currentColor" />
  </svg>
);

// 👇 add props so TypeScript knows about "options"
type BannerProps = {
  options?: LoveCookiesInitOptions;
};

const Banner: React.FC<BannerProps> = ({ options }) => {
  const accent = options?.color ?? "#00c471";
  const policyUrl = options?.policyUrl ?? "/privacy-policy";
  const position = options?.position ?? "bottom-center";

  const posClass =
    position === "bottom-left"
      ? "left-0 right-auto"
      : position === "bottom-right"
      ? "right-0 left-auto"
      : "left-0 right-0"; // center

  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = getAllConsent();
    if (!stored || Object.keys(stored).length === 0) {
      const timer = setTimeout(() => setShowBanner(true), 300);
      return () => clearTimeout(timer);
    } else {
      setPreferences((prev) => ({ ...prev, ...stored }));
    }
  }, []);

  const handleAcceptAll = () => {
    const prefs = { essential: true, analytics: true, marketing: true };
    for (const key in prefs) setConsent(key, prefs[key as keyof typeof prefs]);
    updateConsent("accepted");
    setPreferences(prefs);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const prefs = { essential: true, analytics: false, marketing: false };
    for (const key in prefs) setConsent(key, prefs[key as keyof typeof prefs]);
    updateConsent("declined");
    setPreferences(prefs);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    for (const key in preferences)
      setConsent(key, preferences[key as keyof typeof preferences]);
    updateConsent("accepted");
    setShowModal(false);
    setShowBanner(false);
  };

  return (
    <>
      {/* Dev-only reset button */}
      <button
        onClick={() => {
          clearConsent();
          window.location.reload();
        }}
        className="fixed top-4 right-4 text-xs text-gray-400 hover:text-gray-600 z-[999]"
      >
        Reset Cookies
      </button>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`fixed bottom-0 ${posClass} z-50 px-4 pb-safe`}
          >
            <div className="mx-auto w-full max-w-2xl bg-white border border-gray-200 rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start sm:items-center gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: accent }}
                >
                  <CookieIcon />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Cookie Settings
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1 sm:max-w-sm">
                    We use cookies to enhance your experience.{" "}
                    <a
                      href={policyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-600 hover:text-blue-800"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                <button
                  onClick={handleAcceptAll}
                  style={{ backgroundColor: accent }}
                  className="px-5 py-2 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                >
                  Accept All
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-5 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-400 focus:outline-none"
                >
                  Reject All
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-5 py-2 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-gray-300 focus:outline-none"
                >
                  Customize
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  Cookie Preferences
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Choose which cookies you want to accept
                </p>
              </div>

              <div className="p-6 space-y-4 overflow-y-auto max-h-[60vh]">
                {[
                  {
                    key: "essential",
                    label: "Essential",
                    desc: "Necessary for website functionality",
                    required: true,
                  },
                  {
                    key: "analytics",
                    label: "Analytics",
                    desc: "Help us understand site usage",
                  },
                  {
                    key: "marketing",
                    label: "Marketing",
                    desc: "Used to deliver personalized ads",
                  },
                ].map(({ key, label, desc, required }) => (
                  <div
                    key={key}
                    className={`flex items-start justify-between p-4 ${
                      required ? "bg-gray-50" : "border border-gray-200"
                    } rounded-xl`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{label}</h3>
                        {required && (
                          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{desc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={
                        preferences[key as keyof typeof preferences] ?? false
                      }
                      disabled={required}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          [key]: e.target.checked,
                        })
                      }
                      className="w-5 h-5 rounded accent-blue-600 mt-1 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100 flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  style={{ backgroundColor: accent }}
                  className="flex-1 px-4 py-2.5 text-white font-medium rounded-lg hover:opacity-90 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Banner;
