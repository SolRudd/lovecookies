import Banner from "./ui/Banner";
import Preferences from "./ui/Preferences";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Banner always on top */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50">
        <Banner />
      </div>
      <div className="text-red-500 font-bold">Tailwind is working!</div>


      {/* Preferences (hidden until opened) */}
      <Preferences />

      {/* Page content */}
      <main className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-3">LoveCookies 🍪</h1>
        <p className="text-gray-500 text-lg">
          Lightweight, GDPR-friendly cookie consent manager.
        </p>
      </main>
    </div>
  );
}

export default App;
