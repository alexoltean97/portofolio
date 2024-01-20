import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const LanguagePicker = () => {


useEffect(() => {
  getLanguageFromCookie();
},[])
  
  const [menuToggle, setMenuToggle] = useState(false);

  const openLangMenu = () => {
    setMenuToggle((prev) => !prev);
  };

  const lngs = {
    en: { nativeName: "English" },
    de: { nativeName: "Deutsch" },
  };

  const { i18n } = useTranslation();

  const setLanguageCookie = (language) => {
    const daysToExpire = 30;
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = "expires=" + expiryDate.toUTCString();
    document.cookie = "language=" + language + ";" + expires + ";path=/";
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuToggle(false);
    setLanguageCookie(lng)
  };

  function getLanguageFromCookie() {
    const name = "language=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return ""; 
  }
  

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
