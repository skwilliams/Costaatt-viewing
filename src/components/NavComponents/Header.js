import React from "react";
import Navbar from "./Navbar";
import navStyles from "../../styles/Nav.module.scss";
import Image from "next/image";
import logo from "../../../images/Links/costaatLogoBlack.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <header className={navStyles.header}>
      <div className={navStyles.headerStyles}>
        <div>
          <GiHamburgerMenu className={navStyles.hamburger} />
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
