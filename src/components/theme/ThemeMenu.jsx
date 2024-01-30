import React from "react";
import ThemeColor from "./ThemeColor";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const ThemeMenu = () => {
  return (
    <React.Fragment>
      <Tabs defaultActiveKey="color" id="theme-settings" className="mb-3">
        <Tab eventKey="color" title="color">
          <ThemeColor />
        </Tab>
        <Tab eventKey="cookies" title="cookies">
          Tab content for Profile
        </Tab>
      </Tabs>
    </React.Fragment>
  );
};

export default ThemeMenu;
