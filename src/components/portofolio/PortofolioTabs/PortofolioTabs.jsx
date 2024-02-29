import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MenuTab from "../MenuTab/MenuTab";
import EcomTab from "../EcomTab/EcomTab";

const PortofolioTabs = () => {
  return (
    <React.Fragment>
      <div className="portofolio-tabs">
        <Tabs defaultActiveKey="ecommerce" id="theme-settings" className="mb-3">
          <Tab eventKey="ecommerce" title="E-commerce">
            <EcomTab />
          </Tab>

          <Tab eventKey="menus" title="Menus">
            <MenuTab />
          </Tab>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default PortofolioTabs;
