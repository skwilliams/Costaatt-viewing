import DropDown from "./DropDown";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import navStyles from "../../styles/Nav.module.scss";
import { useState } from "react";
import Link from "next/link";

const MenuItems = ({ items, isLastItem, toggleClick }) => {
  const [dropdown, setDropdown] = useState(false);

  
  const handleClick = () => {
    setDropdown(!dropdown);
    toggleClick();
  };
  const itemStyle = isLastItem
    ? {
        backgroundColor: "#F58220",
        color: "blue",
        padding: "10px",
      }
    : {};

  return (
    <div>
      {items.submenu ? (
        <div className={navStyles.navBarLinks} onClick={handleClick}>
          <Link href={"#"}>{items.title}</Link>
          {dropdown ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      ) : (
        <div style={itemStyle}>
          <Link href={items.path}> {items.title} </Link>
        </div>
      )}
    </div>
  );
};

export default MenuItems;
