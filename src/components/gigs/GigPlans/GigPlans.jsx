import React from "react";
import SmallBusiness from "../SmallBusiness/SmallBusiness.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";
import LandingBundle from "../LandingBundle/LandingBundle.jsx";
const GigPlans = () => {
  return (
    <React.Fragment>
      <div className="gigs">
        <SmallBusiness />
        <LandingPage />
        <LandingBundle />
      </div>
    </React.Fragment>
  );
};

export default GigPlans;
