import React, { useState } from "react";
import Header from "../globals/Header/Header";
import Footer from "../globals/Footer/Footer";
import ReactPortal from "../../components/utils/ReactPortal/ReactPortal";
import PortofolioTabs from "../../components/portofolio/PortofolioTabs/PortofolioTabs";
import ThemeMenu from "../../components/theme/ThemeMenu/ThemeMenu";
import ThemeButton from "../../components/theme/ThemeButton/ThemeButton";
import CartButton from "../../components/theme/CartButton/CartButton";
import Cart from "../../components/portofolio/Cart/Cart";

const PortofolioPageLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (contentType) => {
    setIsOpen(!isOpen);
    setModalContent(contentType);
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case "theme":
        return <ThemeMenu />;
      case "cart":
        return <Cart />;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <h2 className="main-portofolio-title">
          React Web Components Portofolio
        </h2>
        <PortofolioTabs />
        <ReactPortal
          head={modalContent === "theme" ? "Theme Settings" : "Shopping Cart"}
          mainClass={modalContent === "theme" ? "main-settings" : "main-cart"}
          isOpen={isOpen}
          onClose={() => openModal(null)}
        >
          {renderModalContent()}
        </ReactPortal>
        <CartButton openModal={() => openModal("cart")} />
        <ThemeButton openModal={() => openModal("theme")} />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PortofolioPageLayout;
