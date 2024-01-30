import React, { useState } from "react";
import Header from "../globals/Header/Header";
import Footer from "../globals/Footer/Footer";
import ReactPortal from "../../components/utils/ReactPortal/ReactPortal";
import Navigation from "../../components/portofolio/Navigation/Navigation";
import CardGrid from "../CardGrid/CardGrid";
import Pagination from "../../components/portofolio/Pagination/Pagination";
import SingleProduct from "../SingleProduct/SingleProduct";
import TestimonialGrid1 from "../TestimonialGrid1/TestimonialGrid1";
import ThemeMenu from "../../components/theme/ThemeMenu/ThemeMenu";
import ThemeButton from "../../components/theme/ThemeButton/ThemeButton";


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
