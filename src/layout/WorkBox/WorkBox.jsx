import React from "react";
import ReactPortal from "../../components/utils/ReactPortal/ReactPortal";
import { useTranslation } from "react-i18next";

const WorkBox = (props) => {
  const { t } = useTranslation();
 
  return (
    <div className="col-lg-6">
      <div className="work-box">
        <h5 id="work-subtitle">{props.title}</h5>
        <span id="work-place">
          <strong>{props.date}</strong>
        </span>

        <p id="work-description">
          {props.description}{" "}
          <a
            href="/src/assets/cv/CV_Oltean_Alexandru_en.pdf"
            download="CV_Oltean_Alexandru_en.pdf"
            onClick={() => {
              setOpen(true);
            }}
          >
            {t("readMore")}
          </a>
        </p>

        <ReactPortal head={props.modalHeader} onClose={() => setOpen(false)}>
          {props.children}
        </ReactPortal>
      </div>
    </div>
  );
};

export default WorkBox;
