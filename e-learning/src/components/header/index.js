import React from "react";
import {
  Container,
  Main,
  Wrapper,
  Menubar,
  ListItems,
  Button,
  Dropdown,
  ContentContaier,
} from "./styles";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Header.Main = function HeaderMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};
Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Header.Menubar = function HeaderMenubar({ children, ...restProps }) {
  return <Menubar {...restProps}>{children}</Menubar>;
};
Header.ListItems = function HeaderListItems({ children, ...restProps }) {
  return <ListItems {...restProps}>{children}</ListItems>;
};
Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.ContentContaier = function HeaderContentContaier({
  children,
  ...restProps
}) {
  return <ContentContaier {...restProps}>{children}</ContentContaier>;
};
