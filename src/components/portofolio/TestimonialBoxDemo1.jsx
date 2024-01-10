import React from 'react';
import './TestimonialBoxDemo1.css'
import Desk from "../../assets/images/desk.png";
const TestimonialBoxDemo1 = () => {
        return(

            <React.Fragment>
             
                    <div className="testimonial-box-demo-1">

                       <div className="testimonial-box-text-1">
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Proin accumsan, quam eu pharetra maximus, neque sem mattis ex,
                              vel iaculis metus tortor a nulla.
                        </p>
                       </div>

                        <div className="testimonial-box-headline-1"> 
                            <img src={Desk} style={{width: "6rem"}} alt="product" />
                            <h3>Alex Oltean</h3>
                            <span>Web Developer</span>
                        </div>

                    </div>
        
            </React.Fragment>
           
            
        );
}

export default TestimonialBoxDemo1;