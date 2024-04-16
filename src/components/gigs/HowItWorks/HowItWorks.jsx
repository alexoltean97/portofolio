import React from "react";

const HowItWorks = ({ steps }) => {
  return (
    <div>
      <h4>How It Works:</h4>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            <strong>{step.title}:</strong> {step.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowItWorks;
