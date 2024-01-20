import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const LanguagePicker = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const openLangMenu = () => {
    setMenuToggle((prev) => !prev);
  };

  const lngs = {
    en: { nativeName: "English" },
    de: { nativeName: "Deutsch" },
  };

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuToggle(false);
  };

  return (
    <React.Fragment>
      <div className="language-parent dropdown">
        <a className="dropdown-toggle" onClick={openLangMenu}>
          <FontAwesomeIcon icon={faFlag} />{" "}
          <span>{i18n.resolvedLanguage.toUpperCase()}</span>
        </a>

        <div
          className={`dropdown-menu-custom ${menuToggle ? "active-menu" : ""}`}
        >
          {Object.keys(lngs).map((lng) => (
            <a
              key={lng}
              className="dropdown-toggle"
              onClick={() => changeLanguage(lng)}
            >
              <span>{lng.toUpperCase()}</span>
            </a>
          ))}
        </div>
      </div>

      <div>
   
      </div>
    </React.Fragment>
  );
};

export default LanguagePicker;
