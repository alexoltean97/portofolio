import React from "react";
import Desk from "../../assets/images/portrait.png";

const TestimonialBox2 = () => {
  return (
    <React.Fragment>
      <h2>Testimonial Box 2</h2>

      <div className="testimonial-box2">
        <div className="box2-contents">
          <img style={{ width: "4rem" }} src={Desk} alt="Desk" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tortor mi, ultricies blandit ante vitae, ornare facilisis lacus
          </p>

          <hr />

          <h3>Alex Oltean</h3>
          <span>Web Developer - PlentyMarkets</span>

          <div className="stars-component"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TestimonialBox2;
