import DropDown from "./DropDown";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import navStyles from "../../styles/Nav.module.scss";
import { useState } from "react";
import Link from "next/link";
const MenuItems = ({ items, isLastItem }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  //pass this itemStyle to component
  const itemStyle = isLastItem
    ? {
        backgroundColor: "#F58220",
        color: "white",
        padding: "10px",
        
      }
    : {};

  return (
    <div onClick={() => setShowDropDown((prev) => !prev)}>
      {items.submenu ? (
        <div className={navStyles.navBarLinks}>
          {/* Need to put correct path link of submenu and searchbar */}
          {items.title}
          {showDropDown ? <FaAngleUp /> : <FaAngleDown />}

          {/* if showdropdown is true display dropdown */}
          {showDropDown && <DropDown items={items} />}
        </div>
      ) : (
        <div className={navStyles.navBarLinks} style={itemStyle}>
          <Link href={items.path}> {items.title} </Link>
        </div>
      )}
    </div>
  );
};

export default MenuItems;
