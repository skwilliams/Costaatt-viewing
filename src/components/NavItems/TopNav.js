// TopNav.js
import React, { useState } from "react";
import { topNavLinksLeft, topNavLinksRight } from "../NavComponents/menuLinks";
import TopNavItems from "../NavItems/TopNavItems";
import TopNavDropDown from "./TopNavDropDown";
import navStyles from "../../styles/NavItems.module.scss";

const TopNav = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };
  const closeDropdown = () => {
    setDropdown(false); // Function to close the dropdown
  };
  return (
    <nav className={navStyles.topNavContainer}>
      <div
        className={`${navStyles.topNavMain} ${
          dropdown ? navStyles.topNavMainActive : ""
        }`}
      >
        {" "}
        {dropdown && (
          <TopNavDropDown
            items={topNavLinksLeft[0]}
            closeDropdown={closeDropdown}
          />
        )}
        <div className={navStyles.test2}>
          <ul>
            {topNavLinksLeft.map((menu, index) => (
              <li key={index}>
                <TopNavItems items={menu} toggleClick={toggleDropdown} />
              </li>
            ))}
          </ul>
          <ul>
            {topNavLinksRight.map((menu, index) => {
              const isLastItem = index === topNavLinksRight.length - 1;
              return (
                <li key={index}>
                  <TopNavItems items={menu} isLastItem={isLastItem} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
