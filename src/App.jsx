import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  // useEffect(() => {
  //   // Select the elements description
  //   const h1 = document.getElementById("education-subtitle");
  //   const p =  document.getElementById("education");

  //   // Get their positions
  //   const h1Rect = h1.getBoundingClientRect();
  //   const pRect = p.getBoundingClientRect();

  //   // Calculate distances
  //   const verticalDistance = Math.abs(pRect.top - h1Rect.bottom);
  //   const horizontalDistance = Math.abs(pRect.left - h1Rect.right);

  //   // Log the distances
  //   console.log(`Vertical distance: ${verticalDistance}px`);
  //   console.log(`Horizontal distance: ${horizontalDistance}px`);

  //   const work = document.getElementById("work-description").innerText.length;
  //   console.log(work);
  // }),
  //   [];

  return (
    <ThemeProvider>
        <Router>
          <AppRoutes />
        </Router>
    </ThemeProvider>
  );
};

export default App;
