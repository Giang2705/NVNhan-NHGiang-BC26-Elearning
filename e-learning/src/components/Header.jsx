import React from "react";
import "../styles/variables.scss";
import "./Header.css";
//import SearchIcon from "./icons/SearchIcon";
import Navbar from "./header/Navbar";
import LogoIcon from "./icons/LogoIcon";
import SearchIcon from "./icons/SearchIcon";

const Header = () => {
  return (
    <header>
      <section className="nav container">
        <section className="nav-area">
        <section className="nav-left">
          <a href="/#" className="logo">
            <LogoIcon className="h-1 w-1" fill="none" stokeWidth="1px" />
            <span>Try-code</span>
          </a>
          <Navbar />
        </section>
        <section className="nav-right">
          <button className="search-btn">
            <SearchIcon className="h-1 w-1" fill="none" stokeWidth="1px" />
          </button>
          <button className="login-btn">Log in</button>
        </section>
      </section>
      </section>
    </header>
  );
};

export default Header;

