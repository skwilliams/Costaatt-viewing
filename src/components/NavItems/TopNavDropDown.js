// TopNavDropDown.js
import React, { useState } from "react";
import navStyles from "../../styles/NavItems.module.scss";
import Link from "next/link";

const TopNavDropDown = ({ items, closeDropdown }) => {
  const handleLinkClick = () => {
    closeDropdown(); // Close the dropdown when a link is clicked
  };

  return (
    <div className={navStyles.topNavDropDownContainer}>
      <div className={navStyles.topNavDropDownMain}>
        <div className={navStyles.topNavdropDownMenu}>
          {items.submenu &&
            items.submenu.map((submenu, index) => (
              <div key={index} className={navStyles.topNavdropDownSchoolMenu}>
                <div className={navStyles.topNavdropDownSchoolLink}>
                  <Link href={submenu.path} passHref>
                    {/* Attach an onClick event to close the dropdown */}
                    <div onClick={handleLinkClick}>{submenu.title}</div>
                  </Link>
                </div>
                {submenu.submenu && (
                  <div className={navStyles.topNavdropDownDeptLink}>
                    {submenu.submenu.map((subSubMenu, subIndex) => (
                      <Link href={subSubMenu.path} key={subIndex}>
                        <div onClick={handleLinkClick}>{subSubMenu.title}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopNavDropDown;
