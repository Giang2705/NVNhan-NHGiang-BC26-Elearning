import React from "react";
import Footer from "./index";
import { footerItems } from "utils/footerItem";
import FooterBox from "./FooterBox";

const FooterLeft = () => {
  return (
    <Footer.GridBox>
      {footerItems.map((box, index) => {
        return <FooterBox items={box} key={index} />;
      })}
    </Footer.GridBox>
  );
};

export default FooterLeft;
