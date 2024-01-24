import React, { useState } from 'react'
import Header from "./globals/Header";
import Footer from "../layout/globals/Footer";
import Oa from "../components/homepage/oa";
import AboutMe from "../components/homepage/aboutme";
import Skills from "../components/homepage/Skills";
import Experience from "../components/homepage/Experience";
import Certificates from "../components/homepage/Certificates";
import Education from "../components/homepage/Education";
import ThemeMenu from "../components/Theme/ThemeMenu";
import ReactPortal from "../components/utils/ReactPortal";
 

const HomePageLayout = () => {
  const [isOpen, setOpen]= useState(false);
  return (
    <React.Fragment>
      <Header />
      <Oa/>
      <AboutMe />
      <Skills />
      <Experience />
      <Certificates />
      <button onClick={() => {setOpen(true)}}>show</button>
      <ReactPortal isOpen={isOpen} onClose={() => setOpen(false)}>
        <p>test</p>
      </ReactPortal>
      <Education />
      <ThemeMenu />
      <Footer />
    </React.Fragment>
  );
};

export default HomePageLayout;
