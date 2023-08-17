import {
  mainNavLinks,
  topNavLinksLeft,
  topNavLinksRight,
} from "../NavComponents/menuLinks";
import MenuItems from "../NavComponents/MenuItems";
import navStyles from "../../styles/Nav.module.scss";
import Link from "next/link";
import logo from "../../../images/Links/costaattWhiteLogo.png";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import SearchBarModal from "../SearchBarModal";
const BottomNav = () => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <nav className={navStyles.bottomNav}>
      <div className={navStyles.logo}>
        <Link href="/">
          <Image src={logo} alt="costaatt logo" height={100} />
        </Link>
      </div>
      <div className={navStyles.navbarMenusCon}>
        <ul className={navStyles.navbarMenus}>
          {mainNavLinks.map((menu, index) => {
            return (
              <li key={index}>
                <MenuItems items={menu} />
              </li>
            );
          })}
        </ul>
      </div>{" "}
      <div>
        {<BiSearch onClick={handleClick} className={navStyles.searchButton} />}
      </div>
      {modal && (
        <div>
          <SearchBarModal handleClose={handleClick} />
        </div>
      )}
    </nav>
  );
};

export default BottomNav;
