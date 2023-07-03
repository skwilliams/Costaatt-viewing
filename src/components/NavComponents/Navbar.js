import { menuLinks } from "./menuLinks";
import MenuItems from "./MenuItems";
import navStyles from "../../styles/Nav.module.scss";
import SearchBar from "../SearchBar";

const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <ul className={navStyles.navbarMenus}>
        {menuLinks.map((menu, index) => {
          return (
            <div key={index}>
              <MenuItems items={menu} class="hover-underline-animation"/>
            </div>
          );
        })}
      </ul>
      <div>
        <SearchBar placeholder="Search Costaatt..." />
      </div>
    </nav>
  );
};

export default Navbar;
