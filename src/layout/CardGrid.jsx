import React from "react";
import CardModel from "../components/portofolio/CardModel";

const CardGrid = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h2>Cards</h2>
        <div className="d-flex flex-row justify-content-evenly">
          <CardModel
            identifier="effect scale-effect"
            title="Scale Efect"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin accumsan, quam eu pharetra maximus, neque sem mattis ex, vel iaculis metus tortor a nulla."
          />
          <CardModel
            identifier="effect shadow-effect"
            title="Shadow Efect"
            content="Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Proin accumsan, quam eu pharetra maximus, neque sem mattis ex, vel iaculis metus tortor a nulla."
          />
          <CardModel
            identifier="effect visibility-effect"
            title="Color Efect"
            content="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Proin accumsan, quam eu pharetra maximus, neque sem mattis ex, vel iaculis metus tortor a nulla."
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardGrid;
