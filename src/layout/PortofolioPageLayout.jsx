import React, { useState } from "react";
import Header from "./globals/Header";
import Footer from "../layout/globals/Footer";
import ReactPortal from "../components/utils/ReactPortal";
import Navigation from "../components/portofolio/Navigation";
import CardGrid from "./CardGrid";
import Pagination from "../components/portofolio/Pagination";
import SingleProduct from "./SingleProduct";
import TestimonialGrid1 from "./TestimonialGrid1";
import ThemeMenu from "../components/theme/ThemeMenu";
import ThemeButton from "../components/theme/ThemeButton";


const PortofolioPageLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <CardGrid />
      <Pagination />
      <SingleProduct />
      <TestimonialGrid1 />
      <ReactPortal head="Theme Settings" isOpen={isOpen} onClose={openModal}>
       <ThemeMenu />
      </ReactPortal>
      <ThemeButton openModal={openModal} />
      <Footer />
    </React.Fragment>
  );
};

export default PortofolioPageLayout;
