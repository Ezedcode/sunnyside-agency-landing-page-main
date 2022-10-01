import React, { useState } from "react";
import Logo from "../../../assets/img/Logo";
import NavBar from "../navbar";
import * as Styles from "./styles";
import HamburgerBtn from "../../../assets/img/HamburgerBtn";
import ImageHeaderMobile from "../../../assets/img/mobile/image-header.jpg";
import ImageHeaderDesktop from "../../../assets/img/desktop/image-header.jpg";
import ArrowDown from "../../../assets/img/ArrowDown";
import ContactBtn from "../../button/ContactBtn";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [classActiveMenu, setClassActiveMenu] = useState();
  const [classActiveMenuBtn, setClassActiveMenuBtn] = useState();

  const ActiveMenu = () => {
    if (!showMenu) {
      setShowMenu(true);
      setClassActiveMenu("showMenu");
      setClassActiveMenuBtn("showMenuBtn");
    } else {
      setClassActiveMenu("hideMenu");

      setTimeout(() => {
        setShowMenu(false);
        setClassActiveMenu(undefined);
        setClassActiveMenuBtn(undefined);
      }, 1 * 1000);
    }
  };

  return (
    <Styles.Container>
      <div className="container">
        <div className="header">
          <Logo />
          <button
            className={`menuBtn ${classActiveMenuBtn}`}
            onClick={ActiveMenu}
          >
            <HamburgerBtn />
          </button>
          <div className={`menu ${classActiveMenu}`}>
            <div className="triangle">
              <div></div>
            </div>
            <div className="menu-container">
              <NavBar />
              <ContactBtn />
            </div>
          </div>
        </div>
        <h1>WE ARE CREATIVES</h1>
        <ArrowDown />
      </div>
      <picture>
        <source media="(max-width: 375px)" srcSet={ImageHeaderMobile} />
        <img src={ImageHeaderDesktop} alt="Image_header" />
      </picture>
      {showMenu && <Styles.GlobalStyle />}
    </Styles.Container>
  );
};

export default Header;
