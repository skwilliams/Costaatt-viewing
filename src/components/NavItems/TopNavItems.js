// TopNavItems.js
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import navStyles from "../../styles/NavItems.module.scss";
import Link from "next/link";
import TopNavDropDown from "./TopNavDropDown";

const TopNavItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={navStyles.topBarLinks}>
      {items.submenu ? (
        <>
          <div
            onMouseEnter={() => setDropdown((prev) => !prev)}
            onMouseLeave={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {dropdown ? <FaAngleUp /> : <FaAngleDown />}
            {dropdown && (
              <TopNavDropDown
                items={items}
                // backgroundColor={items.backgroundColor}
                // left={items.left}
                // position={items.position}
                // width={items.width} // Pass the background color here
              />
            )}
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
