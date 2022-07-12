import React from "react";
import "../styles/variables.scss";
import "./Header.css";
import Header from "./header/index";
import HeaderMenubar from "./header/HeaderMenubar";

const HeaderContainer = () => {
  return (
    <Header>
      <Header.Main>
        <Header.Wrapper>
          <HeaderMenubar />
        </Header.Wrapper>
      </Header.Main>
    </Header>
  );
};

export default HeaderContainer;

