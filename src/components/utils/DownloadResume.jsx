import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cvPath from "../../assets/cv/CV_Oltean_Alexandru_en.pdf";

const DownloadResume = () => {
  return (
   
      <a href={cvPath} download="CV_Oltean_Alexandru_en.pdf">
        <FontAwesomeIcon icon={faDownload} />
      </a>
 
  );
};

export default DownloadResume;
