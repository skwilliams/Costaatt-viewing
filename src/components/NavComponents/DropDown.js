import Link from "next/link";
import navStyles from "../../styles/Nav.module.scss";
import logo from "../../../images/Links/costaatLogoBlack.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
const DropDown = ({ items }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className={navStyles.dropDownMain}>
      <div
        className={navStyles.dropDown}
        onClick={() => setShowDropDown((prev) => !prev)}
      >
        <div className={navStyles.dropDownLinksGrid}>
          {items.submenu.map((submenu, index) => (
            <>
              <div className={navStyles.dropDownLi}>
                <Link href={submenu.href}>{submenu.title}</Link>
              </div>
              {/* <li key={index} className={navStyles.dropDownInner}>
                {showDropDown && submenu.innerMenu
                  ? submenu.innerMenu.map((menu) => (
                      <Link href={submenu.href}>{menu.title}</Link>
                    ))
                  : ""}
              </li> */}
            </>
          ))}
        </div>
        <div className={navStyles.dropDownPictures}>
          <div>
            <div className={navStyles.tempSquare}></div>
            <p>Academic Calendar</p>
          </div>
          <div>
            <div className={navStyles.tempSquare}></div>
            <p>Areas of Study</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
