import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n/i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener("DOMContentLoaded", () => {
  let userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.split("-")[0];
});
