import React from "react";
import { useTranslation } from "react-i18next";

const AsideMenuSearch = () => {
  const { t } = useTranslation();

  return (
    <div className="search">
      <input type="text" placeholder={t("inputSearchDot")}/>
    </div>
  );
};

export default AsideMenuSearch;
