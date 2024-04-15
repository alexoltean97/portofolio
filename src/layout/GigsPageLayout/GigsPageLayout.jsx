import React from "react";
import Header from "../globals/Header/Header";
import Footer from "../globals/Footer/Footer";
import GigPlans from "../../components/gigs/GigPlans/GigPlans";
const GigsPageLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
      <h2>Available Gigs</h2>
      <GigPlans />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default GigsPageLayout;
