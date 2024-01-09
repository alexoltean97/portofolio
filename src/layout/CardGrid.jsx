import React from "react";
import CardModel from "../components/portofolio/CardModel";

const CardGrid = () => {

    return(

        <React.Fragment>
            
            <h2>Cards</h2>
            <div className="d-flex flex-row justify-content-evenly">
                <CardModel identifier="effect scale-effect" title="Scale Efect" content="content" />
                <CardModel identifier="effect shadow-effect" title="Shadow Efect" content="content" />
                <CardModel identifier="effect visibility-effect" title="Color Efect" content="content" />
            </div>
           
        </React.Fragment>
    );
};

export default CardGrid;