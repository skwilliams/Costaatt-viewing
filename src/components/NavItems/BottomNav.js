import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNavLinks } from "../NavComponents/menuLinks";
import MenuItems from "../NavComponents/MenuItems";
import navStyles from "../../styles/Nav.module.scss";
import logo from "../../../images/Links/costaattWhiteLogo.png";
import { BiSearch } from "react-icons/bi";
import SearchBarModal from "../SearchBarModal";
import DropDown from "../NavComponents/DropDown";

const BottomNav = () => {
  const [modal, setModal] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleClick = () => {
    setModal(!modal);
  };

  const toggleDropdown = (index) => {
    setDropdownIndex(index === dropdownIndex ? null : index);
  };

  const closeDropDown = () => {
    setDropdownIndex(null);
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
          {mainNavLinks.map((menu, index) => (
            <li key={index}>
              <MenuItems
                items={menu}
                toggleClick={() => toggleDropdown(index)}
                closeDropdown={closeDropDown}
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <BiSearch onClick={handleClick} className={navStyles.searchButton} />
      </div>
      {modal && (
        <div>
          <SearchBarModal handleClose={handleClick} />
        </div>
      )}
      {dropdownIndex !== null && (
        <DropDown
          items={mainNavLinks[dropdownIndex]}
          closeDropDown={closeDropDown}
        />
      )}
    </nav>
  );
};

export default BottomNav;
