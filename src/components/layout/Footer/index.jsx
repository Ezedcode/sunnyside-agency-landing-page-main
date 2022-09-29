import React from "react";
import Facebook from "../../../assets/img/Facebook";
import Instagram from "../../../assets/img/Instagram";
import Logo from "../../../assets/img/Logo";
import Pinterest from "../../../assets/img/Pinterest";
import Twitter from "../../../assets/img/Twitter";
import NavBar from "../navbar";
import { Link } from "react-router-dom";
import * as Styles from "./styles";

const Footer = () => {
  return (
    <Styles.Container>
      <Logo />
      <NavBar />
      <div className="socialNetworks">
        <li>
          <Link to="/">
            <Facebook />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Instagram />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Twitter />
          </Link>
        </li>
        <li>
          <Link to="/">
            <Pinterest />
          </Link>
        </li>
      </div>
    </Styles.Container>
  );
};

export default Footer;
