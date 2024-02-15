import React from "react";
import AsideMenuUser from "../AsideMenuUser/AsideMenuUser";
import AsideMenuSearch from "../AsideMenuSearch/AsideMenuSearch";
import AsideMenuList from "../AsideMenuList/AsideMenuList";
import AsideMenuFooter from "../AsideMenuFooter/AsideMenuFooter";

const SideMenu = () => {
  return (
    <React.Fragment>
      <aside className="aside-menu">
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
