import React from "react";
import Logo from "../../../assets/img/Logo";
import NavBar from "../navbar";
import * as Styles from "./styles";
import HamburgerBtn from "../../../assets/img/HamburgerBtn";
import ImageHeaderMobile from "../../../assets/img/mobile/image-header.jpg";
import ImageHeaderDesktop from "../../../assets/img/desktop/image-header.jpg";

const Header = () => {
  return (
    <Styles.Container>
      <div className="header">
        <Logo />
        <NavBar />
        <button>
          <HamburgerBtn />
        </button>
      </div>
      <h1>WE ARE CREATIVES</h1>
      <picture>
        <source media="(max-width: 375px)" srcSet={ImageHeaderMobile} />
        <img src={ImageHeaderDesktop} alt="Image_header" />
      </picture>
    </Styles.Container>
  );
};

export default Header;
