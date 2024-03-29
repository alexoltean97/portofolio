import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import AsideMenuUser from "../AsideMenuUser/AsideMenuUser";
import AsideMenuSearch from "../AsideMenuSearch/AsideMenuSearch";
import AsideMenuList from "../AsideMenuList/AsideMenuList";
import AsideMenuFooter from "../AsideMenuFooter/AsideMenuFooter";

const SideMenu = () => {
  const { t } = useTranslation();
  const { currentTheme } = useTheme();

  return (
    <React.Fragment>
      <h2 className="aside-navigation">{t("sideMenu")}</h2>
      <aside
        className={`aside-menu ${currentTheme === "Dark" ? "dark-theme" : ""}`}
      >
        <AsideMenuUser />
        <AsideMenuSearch />
        <AsideMenuList />
        <div className="border-div"></div>
        <AsideMenuFooter />
      </aside>
    </React.Fragment>
  );
};

export default SideMenu;
