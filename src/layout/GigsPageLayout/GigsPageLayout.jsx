import React from "react";
import Header from "../globals/Header/Header";
import Footer from "../globals/Footer/Footer";
import GigPlans from "../../components/gigs/GigPlans/GigPlans";
import CheckGig from "../../components/gigs/CheckGig/CheckGig";
const GigsPageLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <CheckGig />
      <div className="container">
        <GigPlans />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default GigsPageLayout;
