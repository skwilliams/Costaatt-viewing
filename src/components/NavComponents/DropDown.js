import Link from "next/link";
import MenuItems from "./MenuItems";
import navStyles from "../../styles/Nav.module.scss";
import dummyImg1 from "../../../images/Links/dummyImg1.jpg";
import dummyImg2 from "../../../images/Links/dummyImg2.jpg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
const DropDown = ({ items }) => {
  return (
    <div className={navStyles.dropDownMain}>
      <div className={navStyles.dropDown}>
        <div className={navStyles.dropDownLinksGrid}>
          {items.submenu.map((submenu, index) => (
            <div key={index} className={navStyles.dropDownLi}>
              <MenuItems items={submenu} />
            </div>
          ))}
        </div>
        <div className={navStyles.dropDownPictures}>
          {items.submenuImage.map((submenu, index) => (
            <div key={index}>
              <Image
                src={submenu.img}
                className={navStyles.dummyImage}
                alt="dummyimg"
              />

              <p href={submenu.path}>{submenu.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
