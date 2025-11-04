// src/ui/Preferences.tsx
import { useState } from "react";


export default function Preferences() {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);
  const [personalization, setPersonalization] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-[90%] max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Cookie Preferences</h2>

        <label className="block mb-2">
          <input
            type="checkbox"
            checked={analytics}
            onChange={() => setAnalytics(!analytics)}
            className="mr-2"
          />
          Analytics Cookies
        </label>

        <label className="block mb-2">
          <input
            type="checkbox"
            checked={ads}
            onChange={() => setAds(!ads)}
            className="mr-2"
          />
          Advertising Cookies
        </label>

        <label className="block mb-2">
          <input
            type="checkbox"
            checked={personalization}
            onChange={() => setPersonalization(!personalization)}
            className="mr-2"
          />
          Personalization Cookies
        </label>

        <div className="flex justify-end mt-4 gap-2">
          <button
            className="px-4 py-2 border rounded-lg"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#00c471] text-white rounded-lg"
            onClick={() => setOpen(false)}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
