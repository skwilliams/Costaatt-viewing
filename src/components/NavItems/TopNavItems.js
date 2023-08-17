import DropDown from "../NavComponents/DropDown";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import navStyles from "../../styles/NavItems.module.scss";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import TopNavDropDown from "./TopNavDropDown";

const TopNavItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  // useEffect(() => {
  //   const handler = (event) => {
  //     if (dropdown && ref.current && !ref.current.contains(event.target)) {
  //       setDropdown(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   document.addEventListener("touchstart", handler);
  //   return () => {
  //     // Cleanup the event listener
  //     document.removeEventListener("mousedown", handler);
  //     document.removeEventListener("touchstart", handler);
  //   };
  // }, [dropdown]);

  // const onMouseEnter = () => {
  //   window.innerWidth > 960 && setDropdown(true);
  // };

  // const onMouseLeave = () => {
  //   window.innerWidth > 960 && setDropdown(false);
  // };

  // const closeDropdown = () => {
  //   dropdown && setDropdown(false);
  // };

  return (
    <div
      onClick={() => setDropdown((prev) => !prev)}
      className={navStyles.topBarLinks}
    >
      {items.submenu ? (
        <>
          <div className={navStyles.topNavDropDownTest}>
            {" "}
            {items.title}
            {/* Need to put correct path link of submenu and searchbar */}
            {dropdown ? <FaAngleUp /> : <FaAngleDown />}
            {/* if showdropdown is true display dropdown */}
            {dropdown && <TopNavDropDown items={items} />}
          </div>{" "}
        </>
      ) : (
        <div>
          <Link href={items.path}> {items.title} </Link>
        </div>
      )}
    </div>
  );
};

export default TopNavItems;
