import styled from "styled-components";
import "../../styles/variables.scss";

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const Main = styled.nav`
  height: 5rem;
  display: none;
  width: 100%;
  top: 0;
  z-index: 2;

  transition: background-color 150ms ease-in-out,
    border-bottom-color 150ms ease-in-out;

  border-bottom: 1px solid #10162f;
  //border-color: #ffffff;
  background-color: transparent;
  @media only screen and (min-width: 1200px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  max-width: 1440px;

  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
  box-shadow: none;

  z-index: 15;

  @media only screen and (min-width: 480px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media only screen and (min-width: 1200px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`;

export const Menubar = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;

  margin: 0;
  padding: 0;
`;

export const ListItems = styled.li`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;

  margin-right: 0.5rem;
  margin-left: ${(props) => props.itemType || "0.5rem"};
`;

export const Button = styled.button`
  cursor: pointer;

  background: none;
  padding: 0.5rem 0;
  border: none;
  box-shadow: none;

  position: relative;
  align-items: center;
  display: flex;

  text-decoration: none;
  color: inherit;
  background-color: transparent;
  text-align: center;
  white-space: nowrap;
`;

export const Dropdown = styled.div`
  top: 3rem;
  width: 192.141px;
  border-width: 0px;
  height: auto;

  border-style: solid;
  border-color: #c3c5cb;
  overflow: hidden;
  position: absolute;
  background-color: #ffffff;
`;

export const ContentContaier = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  padding-left: 0;
  padding-right: 0;
  max-width: 1440px;
`;
