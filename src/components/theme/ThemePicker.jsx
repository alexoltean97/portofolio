import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const ThemePicker = () => {
    return(
        <div className="theme-picker">
          <FontAwesomeIcon icon={faGear} />
        </div>
    );
}

export default ThemePicker;