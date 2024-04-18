import React from "react";

const WhyChooseGig = ({ features }) => {
  return (
    <div>
      <h4>Why Choose This Gig?</h4>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <strong>{feature.title}:</strong> {feature.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseGig;
