import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Show loading screen while app initializes
document.body.classList.add("loading");

createRoot(document.getElementById("root")!).render(<App />);

// Remove loading class after app is loaded
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.remove("loading");
  }, 500);
});
