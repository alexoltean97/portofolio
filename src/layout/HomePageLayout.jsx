import React, { useState } from "react";
import ReactPortal from "../components/utils/ReactPortal";
import Header from "./globals/Header";
import Footer from "../layout/globals/Footer";
import Oa from "../components/homepage/oa";
import AboutMe from "../components/homepage/aboutme";
import Skills from "../components/homepage/Skills";
import Experience from "../components/homepage/Experience";
import Certificates from "../components/homepage/Certificates";
import Education from "../components/homepage/Education";
import ThemeMenu from "../components/Theme/ThemeMenu";
import ThemeButton from "../components/theme/ThemeButton";

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
      <ReactPortal isOpen={isOpen} onClose={openModal}>
       <ThemeMenu />
      </ReactPortal>
      <ThemeButton openModal={openModal} />
      <Footer />
    </React.Fragment>
  );
};

export default HomePageLayout;
