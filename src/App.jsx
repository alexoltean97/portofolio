import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import { CartContextProvider } from "./context/CartContext";
import useApplyTheme from "./hooks/useApplyTheme/useApplyTheme";
import Loader from "./components/utils/Loader/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const RouteChangeDetector = ({ setLoading }) => {
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false));

    return () => clearTimeout(timer);
  }, [location, setLoading]);

  return null;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  useApplyTheme();
  return (
    <ThemeProvider>
      <CartContextProvider>
        <Router>
          {loading && <Loader />}
          <RouteChangeDetector setLoading={setLoading} />
          <AppRoutes />
        </Router>
      </CartContextProvider>
    </ThemeProvider>
  );
};

export default App;
