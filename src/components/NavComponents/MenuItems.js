import DropDown from "./DropDown";
import { FaAngleDown } from "react-icons/fa";
import navStyles from "../../styles/Nav.module.scss";
import { useState } from "react";

const MenuItems = ({ items }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <li onClick={() => setShowDropDown((prev) => !prev)}>
      {items.submenu ? (
        <div className={navStyles.navBarLinks}>
          {/* Need to put correct href link of submenu and searchbar */}
          {items.title}
          <FaAngleDown />

          {/* if showdropdown is true display dropdown */}
          {showDropDown && <DropDown items={items} />}
        </div>
      ) : (
        <div className={navStyles.navBarLinks}>
          <a href={items.url}>{items.title}</a>
        </div>
      )}
    </li>
  );
};

export default MenuItems;
