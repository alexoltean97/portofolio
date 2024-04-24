import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="company-contact" className="company-contact">
      <Link to="/gigs">{t("hireMe")}</Link>
      <Link to="/portofolio">{t("portofolioBtn")}</Link>
    </div>
  );
};

export default Contact;
