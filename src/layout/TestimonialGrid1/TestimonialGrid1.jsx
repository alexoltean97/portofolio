import React from "react";
import TestimonialBoxDemo1 from "../../components/portofolio/TestimonialBoxDemo1/TestimonialBoxDemo1";

const TestimonialGrid1 = () => {
  const nrOfDivs = [1, 2, 3];

  return (
    <React.Fragment>
      <div className="container">
        <h2>Testimonial Boxes</h2>
        <div className="testimonial-container d-flex flex-row">
          {nrOfDivs.map((div, index) => (
            <TestimonialBoxDemo1 key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TestimonialGrid1;
