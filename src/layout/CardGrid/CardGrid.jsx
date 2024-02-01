import React from "react";
import CardModel from "../../components/portofolio/CardModel/CardModel";

const CardGrid = () => {
  return (
    <React.Fragment>

      <div className="cards-grid container">
        <h2>Cards</h2>
        <p>Some simple cards that you can use for your landing page</p>
        <div className="card-model-1 d-flex flex-row justify-content-between">
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
