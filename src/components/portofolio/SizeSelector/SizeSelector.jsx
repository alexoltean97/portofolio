import React from "react";

const SizeSelector = () => {
  return (
    <React.Fragment>
      <span className="size-select">Select size</span>
      <select className="size-selector">
        <option>XXL</option>
        <option>XL</option>
        <option>L</option>
        <option>M</option>
        <option>S</option>
        <option>XS</option>
        <option>XXS</option>
      </select>
    </React.Fragment>
  );
};

export default SizeSelector;
