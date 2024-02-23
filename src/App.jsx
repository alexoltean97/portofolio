import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  return (
    <ThemeProvider>
        <Router>
          <AppRoutes />
        </Router>
    </ThemeProvider>
  );
};

export default App;
