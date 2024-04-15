import React from "react";
import Accordion from "react-bootstrap/Accordion";
import GigDescription from "../GigDescription/GigDescription";
import HowItWorks from "../HowItWorks/HowItWorks.jsx";
import Book from "../Book/Book.jsx";
import {
  featuresSmallBusiness,
  tableItems,
  processSteps,
} from "../GigsFeatures/GigsFeatures.js"; // Adjust the path to your data file
import WhyChoseGig from "../WhyChoseGig/WhyChoseGig";
import FeaturesTable from "../FeaturesTable/FeaturesTable";
const GigPlans = () => {
  return (
    <React.Fragment>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Front End - Small Business Package 40$ per hour
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

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Front End: Develop your Landing Page: 40$ per hour
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <p>
                We will gather your projects requirements and I will bring it
                live for you. From sketch, to design and then development.
              </p>
            </div>
            <div>
              <p>Extra Details</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </React.Fragment>
  );
};

export default GigPlans;
