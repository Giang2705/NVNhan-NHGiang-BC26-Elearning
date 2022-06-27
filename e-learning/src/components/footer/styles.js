import styled from "styled-components";

export const Container = styled.footer`
  border-top: 1px solid #000;
  background: transparent;
  display: block;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and (min-width: 1200px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media only screen and (min-width: 480px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const Grid = styled.div`
  grid-template-columns: repeat(12, minmax(0, 1fr));
  display: grid;
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding: 2rem 0;
  }
`;

export const Column = styled.div`
  grid-column-end: span 12;
  grid-template-columns: minmax(0, 1fr);
  display: grid;
  grid-column-end: span 12;
  @media only screen and (min-width: 1024px) {
    grid-column-end: span 6;
  }
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Box = styled.div``;

export const Title = styled.h2`
  font-weight: 400;
  line-height: 1.5;
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    margin-top: 0;
  }
`;

export const ListItems = styled.ul`
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  font-size: 0.875rem;
  margin: 0.5rem 0;

  @media only screen and (min-width: 1024px) {
    margin: 0.15rem 0;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    margin: 0.25rem 0;
  }
`;

export const Link = styled.a`
  cursor: pointer;

  border: none;
  padding: 0;
  box-shadow: none;

  font-size: inherit;
  text-decoration: none;
  -webkit-text-decoration: none;
  white-space: initial;

  display: inline-block;
  position: relative;

  color: #000;
  background: none;
  background-color: transparent;
  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    margin: 0.25rem 0;
  }
`;
