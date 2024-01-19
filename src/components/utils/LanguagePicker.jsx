import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const LanguagePicker = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const openLangMenu = () => {
    setMenuToggle(prev => !prev);
  };

  return (
    <div className="language-parent dropdown">
      <a className="dropdown-toggle" onClick={openLangMenu}>
        <FontAwesomeIcon icon={faFlag} /> <span>EN</span>
      </a>

      <div className={`dropdown-menu-custom ${menuToggle ? "active-menu" : ""}`}>
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
  );
};

export default LanguagePicker;
