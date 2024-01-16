import React from "react";
import PlaceholderPortrait from "../../assets/images/placeholder-oa.png";

const Oa = () => {
  return (
    <div className="oa">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <div className="company-name">
              <h1>
                Oltean <span>Alexandru</span>
              </h1>
              <p>Proficient web developer for your projects.</p>
            </div>

            <div className="company-contact">
              <a href="#">Contact Me</a>
              <a href="#">Portofolio</a>
            </div>
          </div>

          <div className="col-lg-6 col-xs-12">
            <div className="image">
              <img src={PlaceholderPortrait} alt="Placeholder Portrat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oa;
