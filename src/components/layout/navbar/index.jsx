import React from "react";
import { Link } from "react-router-dom";
import * as Styles from "./styles";

const NavBar = () => {
  return (
    <Styles.Container className="nav-bar">
      <ul className="nav-list">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
      </ul>
    </Styles.Container>
  );
};

export default NavBar;
