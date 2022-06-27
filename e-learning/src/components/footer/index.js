import React from 'react';
import { Container, Wrapper, Grid, Column, GridBox, Link, Title, ListItems, Item } from './styles';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Grid = function FooterGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.GridBox = function FooterGridBox({ children, ...restProps }) {
  return <GridBox {...restProps}>{children}</GridBox>;
};

Footer.ListItems = function FooterListItems({ children, ...restProps }) {
  return <ListItems {...restProps}>{children}</ListItems>;
};

Footer.Item = function FooterItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};