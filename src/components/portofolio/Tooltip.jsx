import React from "react";

const Tooltip = (props) => {
  return (
    <div className="tooltip">
      <p>{props.title}</p>
    </div>
  );
};

export default Tooltip;
