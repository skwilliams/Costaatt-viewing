// TopNavDropDown.js
import React from "react";
import navStyles from "../../styles/NavItems.module.scss";
import TopNavItems from "./TopNavItems";
import Link from "next/link";

const TopNavDropDown = ({ items }) => {
  return (
    <div className={navStyles.topNavDropDownMain}>
      <div className={navStyles.dropDownHeading}>Schools and Departments</div>
      <div className={navStyles.topNavdropDownMenu}>
        {items.submenu.map((submenu, index) => (
          <div key={index} className={navStyles.topNavdropDownSchoolMenu}>
            <div className={navStyles.topNavdropDownSchoolLink}>
              {submenu.title}
            </div>
            {submenu.submenu && (
              <div className={navStyles.topNavdropDownDeptLink}>
                {submenu.submenu.map((subSubMenu, subIndex) => (
                  <Link href="#" key={subIndex}>
                    {subSubMenu.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default TopNavDropDown;
