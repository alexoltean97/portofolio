import React from "react";
import PlaceholderPortrait from "../assets/images/placeholder-oa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <div className="col-lg-6">&nbsp;</div>

            <div className="col-lg-6">
              <div className="work-box">
                <h5>Freelancer</h5>
                <span>
                  <strong>Upwork / Dec 2019 - Feb 2021</strong>
                </span>
                <p>
                  Product lead for the Digital New Card Application across 7
                  countries. Partnered with GFK Market Research to conduct
                  international user studies to determine core MVP features,
                  plus long-term optimizations... <a href="#">Read More</a>
                </p>
              </div>
            </div>

            <div className="col-lg-6">&nbsp;</div>

            <div className="col-lg-6">
              <div className="work-box">
                <h5>Front-end Engineer</h5>
                <span>
                  <strong>123FormBuilder / Aug 2018 - Dec 2019</strong>
                </span>
                <p>
                  Product lead for the Digital New Card Application across 7
                  countries. Partnered with GFK Market Research to conduct
                  international user studies to determine core MVP features,
                  plus long-term optimizations... <a href="#">Read More</a>
                </p>
              </div>
            </div>

            <div className="col-lg-6">&nbsp;</div>
            <div className="col-lg-6">
              <div className="work-box">
                <h5>Front-end Engineer</h5>
                <span>
                  <strong>BlueMatrix / Apr 2018 - Aug 2018</strong>
                </span>
                <p>
                  Product lead for the Digital New Card Application across 7
                  countries. Partnered with GFK Market Research to conduct
                  international user studies to determine core MVP features,
                  plus long-term optimizations... <a href="#">Read More</a>
                </p>
              </div>
            </div>

            <div className="col-lg-6">&nbsp;</div>

            <div className="col-lg-6">
              <div className="work-box">
                <h5>Front-end Engineer</h5>
                <span>
                  <strong>
                    Junior Web Developer / Junior QA Engineer / Dec 2016 - Mar
                    2018
                  </strong>
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

      <div className="certificates">
        <div className="container">
          <h2 className="h2-theme">Certificates</h2>

          <div className="row">
            <div className="col-lg-6">
              <div className="certificates-box">
                <h5>Scrum: The Basics</h5>
                <span>
                  <strong>Scrum Basics Linkedin Certificate</strong>
                </span>
              </div>
            </div>
            <div className="col-lg-6">&nbsp;</div>

            <div className="col-lg-6">
              <div className="certificates-box">
                <h5>Agile Product Owner Role:Foundations</h5>
                <span>
                  <strong>Agile LinkedIn Certificate</strong>
                </span>
              </div>
            </div>

            <div className="col-lg-6">&nbsp;</div>

            <div className="col-lg-6">
              <div className="certificates-box">
                <h5>ETC Training Center Agile Methodologies</h5>
                <span>
                  <strong>
                    Certified in Agile Methodologies after finishing the
                    training at ETC Timisoara underthe trainer Daniel Bako.
                  </strong>
                </span>
              </div>
            </div>

            <div className="col-lg-6">&nbsp;</div>
            <div className="col-lg-6">
              <div className="certificates-box">
                <h5>IT School PHP&MYSQL Course</h5>
                <span>
                  <strong>PHP and MySql at IT SCHOOL TIMISOARA</strong>
                </span>
              </div>
            </div>

            <div className="col-lg-6">&nbsp;</div>

            <div className="col-lg-6">
              <div className="certificates-box">
                <h5>Cambridge FCE</h5>
                <strong>
                  Took my Cambridge FCE diploma in high school. I was awarded
                  level B at the FCE exam
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="education">
        <div className="container">
          <h2 className="h2-theme">Education</h2>

          <div className="row">
            <div className="col-lg-6">
              <div className="education-box">
                <h5>Bachelor's degree - Universitatea Aurel Vlaicu</h5>
                <span>
                  <strong>Computer Science | Arad 2020 - 2023</strong>
                </span>
              </div>
            </div>
            <div className="col-lg-6">&nbsp;</div>
          </div>
        </div>
      </div>

      <footer className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="social-media">
                        <ul>
                           <li><a href="#"><i class="fab fa-github"></i></a></li>
                           <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                           <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default HomePageLayout;
