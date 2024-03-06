import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPortal from "../../components/utils/ReactPortal/ReactPortal";
import Header from "../globals/Header/Header";
import Footer from "../globals/Footer/Footer";
import Oa from "../../components/homepage/Oa/Oa";
import AboutMe from "../../components/homepage/AboutMe/AboutMe";
import Skills from "../../components/homepage/Skills/Skills";
import Experience from "../../components/homepage/Experience/Experience";
import Certificates from "../../components/homepage/Certificates/Certificates";
import Education from "../../components/homepage/Education/Education";
import ThemeMenu from "../../components/theme/ThemeMenu/ThemeMenu";
import ThemeButton from "../../components/theme/ThemeButton/ThemeButton";
import CookiesModal from "../../components/portofolio/CookiesModal/CookiesModal";
import Cookies from "js-cookie";
import Loader from "../../components/utils/Loader/Loader";

const HomePageLayout = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (contentType) => {
    setIsOpen(!isOpen);
    setModalContent(contentType);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  useEffect(() => {
    const consent = Cookies.get("cookiesAccept");
    if (consent !== "true") {
      openModal("cookie");
    }
  }, []);
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
      {/* <Loader /> */}
      <Oa />
      <AboutMe />
      <Skills />
      <Experience />
      <Certificates />
      <Education />
      <ReactPortal
        head={modalContent === "theme" ? "Theme Settings" : t("cookiesPolicy")}
        mainClass={modalContent === "theme" ? "main-set" : "cookie-modal"}
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

export default HomePageLayout;
