import { mainNavLinks, topNavLinksLeft, topNavLinksRight } from "./menuLinks";
import MenuItems from "./MenuItems";
import navStyles from "../../styles/Nav.module.scss";
import SearchBar from "../SearchBar";
import Link from "next/link";
import logo from "../../../images/Links/costaattWhiteLogo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
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
        </div>
        <div className={navStyles.seacrhicon}>
          <SearchBar placeholder="Search Costaatt..." />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
