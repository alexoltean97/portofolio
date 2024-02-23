import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import { CartContextProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  return (
    <ThemeProvider>
      <CartContextProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CartContextProvider>
    </ThemeProvider>
  );
};

export default App;
