import React, { useRef } from "react";
import Footer from "./index";

const FooterBox = ({ items }) => {
  let ref = useRef();
  const { title, subItem } = items;

  // const renderSwitch = ({ title }) => {
  //   switch (title) {
  //     case "MOBILE":
  //       return (
  //         <>
  //           <Footer.Title>{title}</Footer.Title>
  //           <Footer.ListItems>
  //             {subItem.map((item, index) => {
  //               return (
  //                 <Footer.Item key={index}>
  //                   <Footer.Link>{item.icon}</Footer.Link>
  //                 </Footer.Item>
  //               );
  //             })}
  //           </Footer.ListItems>
  //         </>
  //       );
  //     default:
  //       return (
  //         <>
  //           <Footer.Title>{title}</Footer.Title>
  //           <Footer.ListItems>
  //             {subItem.map((item, index) => {
  //               return (
  //                 <Footer.Item key={index}>
  //                   <Footer.Link>{item.title}</Footer.Link>
  //                 </Footer.Item>
  //               );
  //             })}
  //           </Footer.ListItems>
  //         </>
  //       );
  //   }
  // };

  return (
    <div ref={ref}>
      <Footer.Title>{title}</Footer.Title>
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
