import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../globals/Header/Header";
import Footer from "../globals/Footer/Footer";
import PortofolioTabs from "../../components/portofolio/PortofolioTabs/PortofolioTabs";
import ReactPortal from "../../components/utils/ReactPortal/ReactPortal";
import ThemeMenu from "../../components/theme/ThemeMenu/ThemeMenu";
import ThemeButton from "../../components/theme/ThemeButton/ThemeButton";
import CartButton from "../../components/theme/CartButton/CartButton";
import Cart from "../../components/portofolio/Cart/Cart";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation/useScrollAnimation";
const PortofolioPageLayout = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { ref, controls, variants } = useScrollAnimation();
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

      <motion.div
        className="container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h2 className="main-portofolio-title">
          {t("webComponentsPortofolio")}
        </h2>
        <PortofolioTabs />
        <ReactPortal
          head={modalContent === "theme" ? "Theme Settings" : "Shopping Cart"}
          mainClass={modalContent === "theme" ? "main-set" : "main-cart"}
          isOpen={isOpen}
          onClose={() => openModal(null)}
        >
          {renderModalContent()}
        </ReactPortal>
      </motion.div>
      <CartButton openModal={() => openModal("cart")} />
      <ThemeButton openModal={() => openModal("theme")} />
      <Footer />
    </React.Fragment>
  );
};

export default PortofolioPageLayout;
