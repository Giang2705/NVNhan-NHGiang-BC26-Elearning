import React from "react";
import FooterCatalog from "./footer/FooterCatalog";
import FooterLeft from "./footer/FooterLeft";
import Footer from "./footer/index";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Grid>
          <Footer.Column>
            <FooterLeft />
          </Footer.Column>
          <Footer.Column>
            <FooterCatalog />
          </Footer.Column>
        </Footer.Grid>
      </Footer.Wrapper>
    </Footer>
  );
};

export default FooterContainer;
