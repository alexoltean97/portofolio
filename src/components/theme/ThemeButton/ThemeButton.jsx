import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const ThemeButton = (props) => {
  return (
    <div className="theme-picker" onClick={props.openModal}>
      <FontAwesomeIcon icon={faGear} />
    </div>
  );
};

export default ThemeButton;
