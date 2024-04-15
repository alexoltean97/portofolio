import React from "react";
import Accordion from "react-bootstrap/Accordion";
import GigDescription from "../GigDescription/GigDescription.jsx";
import WhyChoseGig from "../WhyChoseGig/WhyChoseGig.jsx";
import FeaturesTable from "../FeaturesTable/FeaturesTable.jsx";
import HowItWorks from "../HowItWorks/HowItWorks.jsx";
import Book from "../Book/Book.jsx";
import {
  featuresSmallBusiness,
  tableItems,
  processSteps,
} from "../GigsFeatures/SmallBusinessFeatures.js";

const SmallBusiness = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Front End - Small Business Package - 40$ per hour
        </Accordion.Header>
        <Accordion.Body>
          <GigDescription
            description="🚀 Boost Your Business with Professional Front-End Development! Welcome
        to the Front End - Small Business Package. Are you ready to take your
        business to the next level with a stunning, user-friendly website? Look
        no further!"
          ></GigDescription>
          <WhyChoseGig features={featuresSmallBusiness} />
          <FeaturesTable items={tableItems} />
          <HowItWorks steps={processSteps} />
          <Book />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SmallBusiness;
