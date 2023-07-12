import { mainNavLinks, topNavLinksLeft, topNavLinksRight } from "./menuLinks";
import MenuItems from "./MenuItems";
import navStyles from "../../styles/Nav.module.scss";
import SearchBar from "../SearchBar";
import Link from "next/link";
import logo from "../../../images/Links/costaatLogoBlack.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className={navStyles.topNav}>
        <ul className={navStyles.navbarMenus}>
          {topNavLinksLeft.map((menu, index) => {
            return (
              <div key={index}>
                <MenuItems items={menu} class="hover-underline-animation" />
              </div>
            );
          })}
        </ul>
        <ul className={navStyles.navbarMenus}>
          {topNavLinksRight.map((menu, index) => {
            //a check for the last item and pass it as a prop to MenuItems
            const isLastItem = index === topNavLinksRight.length - 1;
            return (
              <div key={index}>
                <MenuItems items={menu} isLastItem={isLastItem} />
              </div>
            );
          })}
        </ul>
      </nav>
      <nav className={navStyles.centerNav}>
        <Image src={logo} alt="costaatt logo" height={70} />
        <h2>
          College of Science, Technology & Applied Arts of Trinidad and Tobago
        </h2>
        <p>news</p>
      </nav>

      <nav className={navStyles.bottomNav}>
        <ul className={navStyles.navbarMenus}>
          {mainNavLinks.map((menu, index) => {
            return (
              <div key={index}>
                <MenuItems items={menu} class="hover-underline-animation" />
              </div>
            );
          })}
        </ul>
        <div>
          <SearchBar placeholder="Search Costaatt..." />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
