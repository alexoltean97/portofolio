import React, { useState } from "react";
import Header from "../globals/Header/Header";
import Footer from "../globals/Footer/Footer";
import GigPlans from "../../components/gigs/GigPlans/GigPlans";
import CheckGig from "../../components/gigs/CheckGig/CheckGig";
import ReactPortal from "../../components/utils/ReactPortal/ReactPortal";
import ThemeButton from "../../components/theme/ThemeButton/ThemeButton";
import ThemeMenu from "../../components/theme/ThemeMenu/ThemeMenu";

const GigsPageLayout = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (contentType) => {
    setIsOpen(!isOpen);
    setModalContent(contentType);
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case "theme":
        return <ThemeMenu />;
      case "cookie":
        return <CookiesModal onClose={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <Header />
      <CheckGig />
      <div className="container">
        <GigPlans />
      </div>
      <ReactPortal
        head={modalContent === "theme" ? "Theme Settings" : "Shopping Cart"}
        mainClass={modalContent === "theme" ? "main-set" : "main-cart"}
        isOpen={isOpen}
        onClose={() => openModal(null)}
      >
        {renderModalContent()}
      </ReactPortal>
      <ThemeButton openModal={() => openModal("theme")} />

      <Footer />
    </React.Fragment>
  );
};

export default GigsPageLayout;
