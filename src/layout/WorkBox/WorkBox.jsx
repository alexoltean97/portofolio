import React from "react";

const WorkBox = (props) => {
  return (
    <div className="col-lg-6">
      <div className="work-box">
        <h5 id="work-subtitle">{props.title}</h5>
        <span id="work-place">
          <strong>{props.date}</strong>
        </span>

        <p id="work-description">{props.description} </p>
      </div>
    </div>
  );
};

export default WorkBox;
