import Header from "./index";
import styled from "./Dropdown.module.css";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <Header.Dropdown className={`dropdown ${dropdown ? "show" : ""}`}>
      <ul className={styled.LinkSection}>
        {submenus.map((submenu, index) => (
          <li key={index}>
            <a href={submenu.path} className={styled.LinkItem}>
              {submenu.title}
            </a>
          </li>
        ))}
      </ul>
    </Header.Dropdown>
  );
};

export default Dropdown;
