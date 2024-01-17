import React from "react";
import Oa from "../components/homepage/oa";
import AboutMe from "../components/homepage/aboutme";
import Skills from "../components/homepage/Skills";
import Experience from "../components/homepage/Experience";
import Certificates from "../components/homepage/Certificates";
import Education from "../components/homepage/Education";
import ThemePicker from "../components/theme/ThemePicker";
import ThemeMenu from "../components/Theme/ThemeMenu";
import Footer from "../layout/globals/Footer";

const HomePageLayout = () => {
  return (
    <React.Fragment>
      <Oa/>
      <AboutMe />
      <Skills />
      <Experience />
      <Certificates />
      <Education />
      <ThemeMenu />
      <ThemePicker/>
      <Footer />
    </React.Fragment>
  );
};

export default HomePageLayout;
