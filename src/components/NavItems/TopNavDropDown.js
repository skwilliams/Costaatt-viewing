// TopNavDropDown.js
import React from "react";
import navStyles from "../../styles/NavItems.module.scss";
import TopNavItems from "./TopNavItems";

const TopNavDropDown = ({ items }) => {
  // depthlevel = depthlevel + 1;
  // const dropdownclass = depthlevel > 1 ? "drop-downsubmenu" : "";
  return (
    <div
      className={navStyles.topNavDropDownMain}
      //  style={{ backgroundColor, left, position, width }}
    >
      <div className={navStyles.topNavdropDownLinks}>
        {items.submenu.map((submenu, index) => (
          <div>
            <TopNavItems
              items={submenu}
              key={index}
              //    className={navStyles.dropdown}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNavDropDown;
