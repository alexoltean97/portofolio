import React from "react";
import LanguagePicker from "../../components/utils/LanguagePicker";

const Header = () => {
  return (
    <header className="main-header sticky-top">
      <div className="container">
            <LanguagePicker />
      </div>
    </header>
  );
};

export default Header;
