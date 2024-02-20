import React, { useState } from "react";
import Header from "../globals/Header/Header";
import Footer from "../globals/Footer/Footer";
import ReactPortal from "../../components/utils/ReactPortal/ReactPortal";
import PortofolioTabs from "../../components/portofolio/PortofolioTabs/PortofolioTabs";
import ThemeMenu from "../../components/theme/ThemeMenu/ThemeMenu";
import ThemeButton from "../../components/theme/ThemeButton/ThemeButton";
import CartButton from "../../components/theme/CartButton/CartButton";

const PortofolioPageLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="container">
      <h2 className="main-portofolio-title">React Web Components Portofolio</h2>
      <PortofolioTabs />
      <ReactPortal head="Theme Settings" isOpen={isOpen} onClose={openModal}>
       <ThemeMenu />
      </ReactPortal>
      <CartButton />
      <ThemeButton openModal={openModal} />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PortofolioPageLayout;
