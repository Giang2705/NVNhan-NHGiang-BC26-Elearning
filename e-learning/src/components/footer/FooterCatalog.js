import React from "react";

import { courseCatalog } from "utils/courseCatalog";
import Footer from "./index";
import FooterCataBox from "./FooterCataBox";
import catalogStyles from "./FooterCatalog.module.css";

const FooterCatalog = () => {
  return (
    <>
      <div className={catalogStyles.Container}>
        <Footer.Title>COURSE CATALOG</Footer.Title>
        <div className={catalogStyles.CataBox}>
          {courseCatalog.map((item, index) => {
            return (
              <FooterCataBox
                items={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FooterCatalog;
