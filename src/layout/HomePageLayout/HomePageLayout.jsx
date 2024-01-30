import React, { useState } from "react";
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

const HomePageLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Header />
      <Oa />
      <AboutMe />
      <Skills />
      <Experience />
      <Certificates />
      <Education />
      <ReactPortal head="Theme Settings" isOpen={isOpen} onClose={openModal}>
       <ThemeMenu />
      </ReactPortal>
      <ThemeButton openModal={openModal} />
      <Footer />
    </React.Fragment>
  );
};

export default HomePageLayout;
