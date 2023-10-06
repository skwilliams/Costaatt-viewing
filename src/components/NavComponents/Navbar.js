import { mainNavLinks, topNavLinksLeft, topNavLinksRight } from "./menuLinks";
import MenuItems from "./MenuItems";
import navStyles from "../../styles/Nav.module.scss";
import Link from "next/link";
import logo from "../../../public/img/costaattWhiteLogo.png";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import SearchBarModal from "../SearchBarModal";
const Navbar = () => {
  return (
    <>
      <div className={navStyles.navContainer}>
        <nav className={navStyles.topNav}>
          <ul className={navStyles.navbarMenus}>
            {topNavLinksLeft.map((menu, index) => {
              return (
                <li key={index}>
                  <MenuItems items={menu} />
                </li>
              );
            })}
          </ul>
          <ul className={navStyles.navbarMenus}>
            {topNavLinksRight.map((menu, index) => {
              //a check for the last item and pass it as a prop to MenuItems
              const isLastItem = index === topNavLinksRight.length - 1;
              return (
                <li key={index}>
                  <MenuItems items={menu} isLastItem={isLastItem} />
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <nav className={navStyles.centerNav}>
        <Image className ={navStyles.logo}src={logo} alt="costaatt logo" height={90} />
        <p className={navStyles.costaattwords}> The College of Science Technology and Applied Arts of Trinidad and Tobago</p>
      </nav> */}
        <nav className={navStyles.bottomNav}>
          <div>
            <Link href="/">
              <Image src={logo} alt="costaatt logo" width={50} />
            </Link>
          </div>
          <ul className={navStyles.navbarMenus}>
            {mainNavLinks.map((menu, index) => {
              return (
                <li key={index}>
                  <MenuItems items={menu} />
                </li>
              );
            })}
          </ul>
          <div>
            {
              <BiSearch
                onClick={handleClick}
                className={navStyles.searchButton}
              />
            }
          </div>
        </nav>
        {modal && (
          <div>
            <SearchBarModal handleClose={handleClick} />
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default Navbar;
