import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import { useState, useEffect } from "react";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if all critical resources are loaded
    const checkResourcesLoaded = () => {
      // In a real app, you might check for specific resources here
      // For now, we'll simulate a realistic loading time
      return new Promise((resolve) => {
        // Simulate loading time between 1.5 and 3 seconds
        const randomTime = Math.floor(Math.random() * 1500) + 1500;
        setTimeout(() => {
          resolve();
        }, randomTime);
      });
    };

    checkResourcesLoaded().then(() => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setLoading(false);
      }, 300);
    });
  }, []);

  return (
    <>
      <div className={loading ? "filter blur-sm brightness-50" : ""}>
        <App />
      </div>
      {loading && <LoadingSpinner />}
    </>
  );
};

createRoot(document.getElementById("root")).render(<Main />);