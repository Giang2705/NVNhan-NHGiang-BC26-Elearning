import React from "react";
import { headerMenuItems } from "utils/headerMenuItems";
import Header from ".";
import HeaderListItems from "./HeaderListItems";

const HeaderMenubar = () => {
  return (
    <Header.Menubar>
      {headerMenuItems.map((item, index) => {
        return <HeaderListItems items={item} key={index} />;
      })}
    </Header.Menubar>
  );
};

export default HeaderMenubar;
