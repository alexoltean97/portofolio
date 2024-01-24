import React, { useState } from "react";
import ReactPortal from "../components/utils/ReactPortal";
import { useTranslation } from "react-i18next";

const WorkBox = (props) => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
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
            onClick={() => {
              setOpen(true);
            }}
            href="#"
          >
            {t("readMore")}
          </a>
        </p>

        <ReactPortal
          head={props.modalHeader}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
        >
          {props.children}
        </ReactPortal>
      </div>
    </div>
  );
};

export default WorkBox;
