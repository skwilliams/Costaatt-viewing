import { topNavLinksLeft, topNavLinksRight } from "../NavComponents/menuLinks";
import TopNavItems from "../NavItems/TopNavItems";
import navStyles from "../../styles/NavItems.module.scss";
import TopNavDropDown from "./TopNavDropDown";
import { useState } from "react";
const TopNav = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <nav
      className={`${navStyles.topNavMain} ${
        dropdown ? navStyles.topNavMainActive : ""
      }`}
    >
      {dropdown && <TopNavDropDown items={topNavLinksLeft[0]} />}
      <div className={navStyles.test2}>
        <ul>
          {topNavLinksLeft.map((menu, index) => {
            return (
              <li key={index}>
                <TopNavItems items={menu} toggleClick={toggleDropdown} />{" "}
              </li>
            );
          })}
        </ul>
        <ul>
          {topNavLinksRight.map((menu, index) => {
            //a check for the last item and pass it as a prop to MenuItems
            const isLastItem = index === topNavLinksRight.length - 1;
            return (
              <li key={index}>
                <TopNavItems items={menu} isLastItem={isLastItem} />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
