import React, { useState } from "react";
import Header from "../globals/Header/Header";
import Footer from "../globals/Footer/Footer";
import ReactPortal from "../../components/utils/ReactPortal/ReactPortal";
import PortofolioTabs from "../../components/portofolio/PortofolioTabs/PortofolioTabs";
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
      <PortofolioTabs />
      <ReactPortal head="Theme Settings" isOpen={isOpen} onClose={openModal}>
       <ThemeMenu />
      </ReactPortal>
      <ThemeButton openModal={openModal} />
      <Footer />
    </React.Fragment>
  );
};

export default PortofolioPageLayout;
