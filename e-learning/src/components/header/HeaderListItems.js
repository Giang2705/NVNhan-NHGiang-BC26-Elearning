import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Header from "./index";
import styled from "./HeaderListItems.module.css";

const HeaderListItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <Header.ListItems
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      itemType={items.type ? "auto" : "0.5rem"}
    >
      {items.submenu ? (
        <>
          <Header.Button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            <span className="arrow" />
          </Header.Button>
          <Dropdown dropdown={dropdown} submenus={items.submenu} />
        </>
      ) : (
        <a href={items.path} className={styled.LinkHeader}>
          {items.title}
        </a>
      )}
    </Header.ListItems>
  );
};

export default HeaderListItems;
