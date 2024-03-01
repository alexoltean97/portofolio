import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const CookiesModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [cookiesAccept, setCookiesAccept] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookiesAccept");
    if (consent === "true") {
      onClose();
    }
  }, [onClose]);

  const handleAccept = () => {
    setCookiesAccept(true);
    Cookies.set("cookiesAccept", true, { expires: 365 });
    onClose();
  };

  return (
    <div className="cookie-body">
      <FontAwesomeIcon icon={faCookieBite} />
      <div className="cookie-content">
        <h2>{t("cookiesConsent")}</h2>
        <p>{t("cookiesThisWebsite")}</p>
        <button className="btn btn-cookie" onClick={handleAccept}>
          {t("understand")}
        </button>
      </div>
    </div>
  );
};

export default CookiesModal;
