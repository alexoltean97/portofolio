import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import WorkBox from "../../layout/WorkBox";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div className="work-experience">
      <div className="container">
        <h2 id="work-title" className="h2-theme">
          {t("workExperience")}
        </h2>

        <div className="row">
          <WorkBox
            title={t("expTitlePlenty")}
            date={t("expDatePlenty")}
            description={t("expDescPlenty")}
            modalHeader="PlentyMarkets"
          >
            <p>{t('plentyIntro')}</p>
            <p>{t('plentyTeam')}</p>
            <ul>
              <li>{t('plentyListOne')}</li>
            </ul>
          </WorkBox>

          <WorkBox
            title={t("expTitleUpwork")}
            date={t("expDateUpwork")}
            description={t("expDescUpwork")}
            modalHeader="Upwork"
          >
            <p>{t("expDescUpwork")}</p>
          </WorkBox>

          <WorkBox
            title={t("expTitle123")}
            date={t("expDate123")}
            description={t("expDesc123")}
          >
            <p>Test</p>
          </WorkBox>

          <WorkBox
            title={t("expTitleBm")}
            date={t("expDateBm")}
            description={t("expDescBm")}
          >
            <p>Test</p>
          </WorkBox>

          <WorkBox
            title={t("expTitleDigital")}
            date={t("expTitleDigital")}
            description={t("expDescDigital")}
          >
            <p>Test</p>
          </WorkBox>
        </div>
      </div>
    </div>
  );
};

export default Experience;
