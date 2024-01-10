import React from 'react';
import './TestimonialBoxDemo1.css'
import Desk from "../../assets/images/portrait.png";
const TestimonialBoxDemo1 = () => {
        return(

            <React.Fragment>
             
                    <div className="testimonial-box">

                       <div className="testimonial-text">
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Proin accumsan, quam eu pharetra maximus, neque sem mattis ex,
                              vel iaculis metus tortor a nulla.
                        </p>
                       </div>

                       <img src={Desk} style={{width: "4rem"}} alt="product" />

                        <div className="testimonial-headlines"> 
                            
                            <h3>Alex Oltean</h3>
                            <span>Web Developer</span>
                        </div>

                    </div>
        
            </React.Fragment>
           
            
        );
}

export default TestimonialBoxDemo1;