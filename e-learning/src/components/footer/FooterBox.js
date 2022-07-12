import React, { useRef } from "react";
import Footer from "./index";

const FooterBox = ({ items }) => {
  let ref = useRef();
  const { title, subItem } = items;
  return (
    <div ref={ref}>
      <Footer.Title >{title}</Footer.Title>
      <Footer.ListItems>
        {subItem.map((item, index) => {
          return (
            <Footer.Item key={index}>
              <Footer.Link href={item.path}>{item.title}</Footer.Link>
            </Footer.Item>
          );
        })}
      </Footer.ListItems>
    </div>
  );
};

export default FooterBox;
