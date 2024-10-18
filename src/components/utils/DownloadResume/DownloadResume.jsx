import React from "react";
import cvPath from "../../../assets/cv/CV_Oltean_Alexandru_en.pdf";
import { useTranslation } from "react-i18next";

const DownloadResume = (props) => {
  const { t } = useTranslation();
  return (
    <a className="resume" href={cvPath} download="CV_Oltean_Alexandru_en.pdf">
      {t("readMore")}
      {props.children}
    </a>
  );
};

export default DownloadResume;
