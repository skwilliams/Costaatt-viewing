import Link from "next/link";
import navStyles from "../../styles/Nav.module.scss";
import dummyImg1 from "../../../images/Links/dummyImg1.jpg";
import dummyImg2 from "../../../images/Links/dummyImg2.jpg";
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
                <Link href={submenu.path}>{submenu.title}</Link>
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
          {items.submenuImage.map((submenu, index) => (
            <>
              <div>
                <Image
                  src={submenu.img}
                  className={navStyles.dummyImage}
                  alt="dummyimg"
                />

                <Link href={submenu.path}>{submenu.title}</Link>
              </div>
            </>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
