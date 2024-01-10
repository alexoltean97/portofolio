import React from "react";
import PlaceholderPortrait from "../assets/images/placeholder-oa.png";
import "./HomePageLayout.css";

const HomePageLayout = () => {
    return(
        <React.Fragment>
        

                <div className="oa">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="company-name">
                                <h1>Oltean <span style={{display : "block"}}>Alexandru</span></h1>
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
                <h2 className="h2-theme">
                    About Me
                </h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tortor mi, ultricies blandit ante vitae, ornare facilisis lacus
                </p>

                <a href="https://www.linkedin.com/in/alexandru-oltean-96aba7159/">Linkedin Profile</a>
            </div>
        </div>
        
        </React.Fragment>
    );
}

export default HomePageLayout;