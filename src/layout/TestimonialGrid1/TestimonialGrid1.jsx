import React from "react";
import TestimonialBoxDemo1 from "../../components/portofolio/TestimonialBoxDemo1/TestimonialBoxDemo1";

const TestimonialGrid1 = () => {
  const nrOfDivs = [1, 2, 3];

  return (
    <React.Fragment>
      <div className="test-grid-1 container">
        <h2>Testimonial Boxes</h2>
        <p>A testimonial grid for your website</p>
        <div className="testimonial-container d-flex flex-row">
          {nrOfDivs.map((index) => (
            <TestimonialBoxDemo1 key={index} />
          ))}
        </div>
      </div>

      
    </React.Fragment>
  );
};

export default TestimonialGrid1;
