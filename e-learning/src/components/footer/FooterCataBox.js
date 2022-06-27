import React, { useRef } from "react";
import Footer from "./index";
import styles from "./FooterCataBox.module.css";

const FooterCataBox = ({ items }) => {
  let ref = useRef();
  const { title, subItem } = items;

  return (
    <div ref={ref} className={styles.box}>
      <h2>{title}</h2>
      <Footer.ListItems>
        {subItem.map((item, index) => {
          return (
            <Footer.ListItems key={index}>
              <Footer.Link>{item.title}</Footer.Link>
            </Footer.ListItems>
          );
        })}
      </Footer.ListItems>
    </div>
  );
};

export default FooterCataBox;
