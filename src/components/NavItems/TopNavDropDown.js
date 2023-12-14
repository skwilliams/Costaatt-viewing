// TopNavDropDown.js
import React, { useEffect, useState } from "react";
import navStyles from "../../styles/NavItems.module.scss";
import TopNavItems from "./TopNavItems";
import Link from "next/link";
import { GrClose } from "react-icons/gr";

const TopNavDropDown = ({ items }) => {
  const [modal, setModal] = useState([]);

  return (
    <div className={navStyles.topNavDropDownMain}>
      <div className={navStyles.dropDownHeading}>
        Schools and Departments{" "}
        {modal && (
          <div>
            <GrClose
              style={{
                position: "relative",
                top: "10px",
                right: "-50px",
                cursor: "pointer",
              }}
              color="white"
              // onClick={handleExit}
            />
          </div>
        )}
      </div>
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
