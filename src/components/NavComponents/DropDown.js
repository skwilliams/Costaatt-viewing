import MenuItems from "./MenuItems";
import navStyles from "../../styles/Nav.module.scss";
import Image from "next/image";
import Link from "next/link";

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
              <Link href={submenu.path}>
                <Image
                  src={submenu.img}
                  className={navStyles.dummyImage}
                  alt="dummyimg"
                />
              </Link>
              <MenuItems items={submenu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
