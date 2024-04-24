import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MenuTab from "../MenuTab/MenuTab";
import EcomTab from "../EcomTab/EcomTab";
import { useTranslation } from "react-i18next";


const PortofolioTabs = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="portofolio-tabs">
        <Tabs defaultActiveKey="ecommerce" id="theme-settings" className="mb-3">
          <Tab eventKey="ecommerce" title="E-commerce">
            <EcomTab />
          </Tab>

          <Tab eventKey="menus" title={t("menus")}>
            <MenuTab />
          </Tab>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default PortofolioTabs;
