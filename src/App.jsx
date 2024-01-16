import React from "react";
import Navigation from "./components/portofolio/Navigation";
import CardGrid from "./layout/CardGrid";
import Pagination from "./components/portofolio/Pagination";
import SingleProduct from "./layout/SingleProduct";
import TestimonialGrid1 from "./layout/TestimonialGrid1";
import TestimonialBox2 from "./components/portofolio/TestimonialBox2";
import HomePageLayout from "./layout/HomePageLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* <Navigation />
      <CardGrid />
      <Pagination />
      <SingleProduct />
      <TestimonialGrid1 />
      <TestimonialBox2 /> */}
      <HomePageLayout />
    </React.Fragment>
  );
}

export default App;
