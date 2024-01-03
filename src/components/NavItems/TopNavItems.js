// TopNavItems.js
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import navStyles from "../../styles/NavItems.module.scss";
import Link from "next/link";

const TopNavItems = ({ items, toggleClick }) => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    // setDropdown(!dropdown);
    toggleClick(items.title); // Toggle the dropdown in TopNav
  };
  return (
    <div
      onClick={handleClick}
      className={navStyles.topBarLinks}
      // className={`${navStyles.topBarLinks} ${
      //   dropdown ? navStyles.topBarLinks : navStyles.topBarLinksActive
      // } `}
    >
      {items.submenu ? (
        <>
          {" "}
          <div>
            {items.title}
            {dropdown ? <FaAngleUp /> : <FaAngleDown />}{" "}
          </div>
        </>
      ) : (
        <div>
          <Link href={items.path}>{items.title}</Link>
        </div>
      )}
    </div>
  );
};

export default TopNavItems;
