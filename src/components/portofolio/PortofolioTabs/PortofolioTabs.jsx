import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LandingTab from "../LandingTab/LandingTab";
import MenuTab from "../MenuTab/MenuTab";
import UtilsTab from "../UtilsTab/UtilsTab";
import EcomTab from "../EcomTab/EcomTab";

const PortofolioTabs = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Tabs defaultActiveKey="landing" id="theme-settings" className="mb-3">
          <Tab eventKey="landing" title="Landing">
            <LandingTab />
          </Tab>

          <Tab eventKey="menus" title="Menus">
            <MenuTab />
          </Tab>

          <Tab eventKey="utils" title="Utils">
           <UtilsTab />
          </Tab>

          <Tab eventKey="ecommerce" title="E-commerce">
            <EcomTab />
          </Tab>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default PortofolioTabs;
