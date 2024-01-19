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

  const {t, i18n } = useTranslation()
  return (
    <React.Fragment>
      <div className="language-parent dropdown">
        <a className="dropdown-toggle" onClick={openLangMenu}>
          <FontAwesomeIcon icon={faFlag} /> <span>EN</span>
        </a>

        <div
          className={`dropdown-menu-custom ${menuToggle ? "active-menu" : ""}`}
        >
          <a className="dropdown-toggle">
            <span>RO</span>
          </a>
          <a className="dropdown-toggle">
            <span>DE</span>
          </a>
          <a className="dropdown-toggle">
            <span>EN</span>
          </a>
        </div>
      </div>

      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
};

export default LanguagePicker;
