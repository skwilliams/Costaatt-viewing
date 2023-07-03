import Link from "next/link";
import navStyles from "../../styles/Nav.module.scss";
import logo from "../../../images/Links/costaatLogoBlack.png";
const DropDown = ({ items }) => {
  return (
    <div className={navStyles.dropDownMain}>
      <div className={navStyles.test}>
        <ul className={navStyles.dropDown}>
          {items.submenu.map((submenu, index) => (
            <li key={index} className={navStyles.dropDownLi}>
              <Link href={submenu.href}>{submenu.title}</Link>
            </li>
          ))}
        </ul>
        <div className={navStyles.dropDownNotices}>
          {items.notices ? (
            <>
              <Link href="/" className={navStyles.dropDownNoticesLink}>
                {items.notices.map((item, index) => (
                  <>
                    <div key={index}>
                      <h1>{item.heading}</h1>
                      <p>{item.text}</p>
                    </div>
                  </>
                ))}
              </Link>
              <div>
                <img src={logo} />
              </div>
            </>
          ) : (
            <h1>
              Costatt Logo <br />
              if nothing is shown
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
