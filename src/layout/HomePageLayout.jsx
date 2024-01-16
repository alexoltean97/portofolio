import React from "react";
import PlaceholderPortrait from "../assets/images/placeholder-oa.png";
import "./HomePageLayout.css";

const HomePageLayout = () => {
  return (
    <React.Fragment>
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

      <div className="about-me">
        <div className="container">
          <h2 className="h2-theme">About Me</h2>

          <div className="p-holder">
            <p>
              I’m a digital product leader with over 8 years of experience,
              driven by real world challenges, working in a fast-paced,
              digitally-oriented environment related to consumer services.
              Operating in an environment driven by KPIs where I have the
              accountability to determine the best course of action to meet
              goals.
            </p>
          </div>

          <div className="btn-holder">
            <a href="https://www.linkedin.com/in/alexandru-oltean-96aba7159/">
              Linkedin Profile
            </a>
          </div>
        </div>
      </div>

      <div className="my-skills">
        <div className="container">
          <h2 className="h2-theme">My skills</h2>

          <div className="row skill-row">
            <div className="col-lg-6 col-sm-12">
              <div className="skills-box">
                <h5>Front-end Development</h5>
                <p>
                  In business and engineering, new product development covers
                  the complete process of bringing a new product to market.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="skills-box">
                <h5>Quality assurance</h5>
                <p>
                  In business and engineering, new product development covers
                  the complete process of bringing a new product to market.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="skills-box">
                <h5>Product Management</h5>
                <p>
                  In business and engineering, new product development covers
                  the complete process of bringing a new product to market.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="skills-box">
                <h5>Agile workflow assurance</h5>
                <p>
                  In business and engineering, new product development covers
                  the complete process of bringing a new product to market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work-experience">
        <div className="container">
          <h2 className="h2-theme">Work Experience</h2>

          <div className="row">
            <div className="col-lg-6">
              <div className="work-box">
                <h5>Front-end Engineer</h5>
                <span>
                  <strong>Plenty Markets / Feb 20 - Present</strong>
                </span>
                <p>
                  Product lead for the Digital New Card Application across 7
                  countries. Partnered with GFK Market Research to conduct
                  international user studies to determine core MVP features,
                  plus long-term optimizations... <a href="#">Read More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePageLayout;
