import Link from "next/link";
import MenuItems from "../NavComponents/MenuItems";
import navStyles from "../../styles/NavItems.module.scss";
import dummyImg1 from "../../../images/Links/dummyImg1.jpg";
import dummyImg2 from "../../../images/Links/dummyImg2.jpg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import TopNavItems from "./TopNavItems";

const TopNavDropDown = ({ items, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  console.log(items);
  return (
    <div className={navStyles.topNavDropDownMain}>
      <div onClick={() => setDropdown((prev) => !prev)}>
        {items.submenu.submenu ? (
          <ul className={navStyles.topNavdropDownLinks}>
            {items.submenu.submenu.map((submenu, index) => (
              <div key={index}>
                {drp && (
                  <TopNavItems
                    items={submenu}
                    className={navStyles.dropDownLi}
                    key={index}
                    depthLevel={depthLevel}
                  />
                )}
                <div>Hello</div>
              </div>
            ))}
          </ul>
        ) : (
          <div className={navStyles.topNavdropDownLinks}>
            {items.submenu.map((submenu, index) => (
              <div key={index}>
                <TopNavItems items={submenu} className={navStyles.dropDownLi} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNavDropDown;
