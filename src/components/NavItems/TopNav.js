import { topNavLinksLeft, topNavLinksRight } from "../NavComponents/menuLinks";
import TopNavItems from "../NavItems/TopNavItems";
import navStyles from "../../styles/NavItems.module.scss";

const TopNav = ({ onDropDownLink }) => {
  return (
    <nav className={navStyles.topNavMain}>
      <ul>
        {topNavLinksLeft.map((menu, index) => {
          return (
            <li key={index} onClick={onDropDownLink}>
              <TopNavItems items={menu} key={index} />
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
    </nav>
  );
};

export default TopNav;
