import React from "react";
import { useTranslation } from "react-i18next";

const Certificates = () => {
  const { t } = useTranslation();
  return (
    <div className="certificates">
      <div className="container">
        <h2 id="certificates-title" className="h2-theme">
          {t("certificates")}
        </h2>

        <div className="row">
          <div className="col-lg-6">
            <div className="certificates-box">
              <h5 id="certificates-subtitle">{t("scrum")}</h5>
              <span id="certificate">
                <strong>{t("scrumLk")}</strong>
              </span>
            </div>
          </div>
          <div className="col-lg-6">&nbsp;</div>

          <div className="col-lg-6">
            <div className="certificates-box">
              <h5>Agile Product Owner Role:Foundations</h5>
              <span>
                <strong>Agile LinkedIn Certificate</strong>
              </span>
            </div>
          </div>

          <div className="col-lg-6">&nbsp;</div>

          <div className="col-lg-6">
            <div className="certificates-box">
              <h5>ETC Training Center Agile Methodologies</h5>
              <span>
                <strong>
                  Certified in Agile Methodologies after finishing the training
                  at ETC Timisoara underthe trainer Daniel Bako.
                </strong>
              </span>
            </div>
          </div>

          <div className="col-lg-6">&nbsp;</div>
          <div className="col-lg-6">
            <div className="certificates-box">
              <h5>IT School PHP&MYSQL Course</h5>
              <span>
                <strong>PHP and MySql at IT SCHOOL TIMISOARA</strong>
              </span>
            </div>
          </div>

          <div className="col-lg-6">&nbsp;</div>

          <div className="col-lg-6">
            <div className="certificates-box">
              <h5>Cambridge FCE</h5>
              <strong>
                Took my Cambridge FCE diploma in high school. I was awarded
                level B at the FCE exam
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
