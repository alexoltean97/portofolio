import React from "react";
import Navigation from "../components/portofolio/Navigation";
import CardGrid from "./CardGrid";
import Pagination from "../components/portofolio/Pagination";
import SingleProduct from "./SingleProduct";
import TestimonialGrid1 from "./TestimonialGrid1";
import ThemeMenu from "../components/Theme/ThemeMenu";
import Header from "./globals/Header";
import Footer from "../layout/globals/Footer";

const PortofolioPageLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <CardGrid />
      <Pagination />
      <SingleProduct />
      <TestimonialGrid1 />
      <ThemeMenu />
      <Footer />
    </React.Fragment>
  );
};

export default PortofolioPageLayout;
