import MenuItems from "./MenuItems";
import navStyles from "../../styles/Nav.module.scss";
import Image from "next/image";
import Link from "next/link";

const DropDown = ({ items, closeDropDown }) => {
  const handleLinkClick = () => {
    closeDropDown();
  };
  return (
    <div className={navStyles.dropDownMain}>
      <div className={navStyles.dropDown}>
        <div className={navStyles.dropDownLinksGrid}>
          {items.submenu &&
            items.submenu.map((sub, index) => (
              <div key={index} className={navStyles.dropDownLi}>
                <Link href={sub.path} passHref>
                  <div onClick={handleLinkClick}>{sub.title}</div>
                </Link>
              </div>
            ))}
        </div>
        <div className={navStyles.dropDownPictures}>
          {items.submenu &&
            items.submenuImage.map((sub, index) => (
              <div key={index}>
                <Link href={sub.path}>
                  <Image
                    src={sub.img}
                    className={navStyles.dummyImage}
                    alt="dummyimg"
                  />
                </Link>
                <Link href={sub.path} passHref>
                  <div onClick={handleLinkClick}>{sub.title}</div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
