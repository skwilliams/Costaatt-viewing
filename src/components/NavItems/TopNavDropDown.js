// TopNavDropDown.js
import React from "react";
import navStyles from "../../styles/NavItems.module.scss";
import TopNavItems from "./TopNavItems";

const TopNavDropDown = ({ items, backgroundColor, left, position, width }) => {
  return (
    <div
      className={navStyles.topNavDropDownMain}
      style={{ backgroundColor, left, position, width }}
    >
      <div className={navStyles.topNavdropDownLinks}>
        {items.submenu.map((submenu, index) => (
          <div key={index}>
            <TopNavItems items={submenu} className={navStyles.dropDownLi} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNavDropDown;
