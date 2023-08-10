import React from "react";
import { useRouter } from "next/router";
import navStyles from "../../styles/Nav.module.scss";
import Image from "next/image";
import logo from "../../../images/Links/costaattWhiteLogo.png";
import Link from "next/link";
import { subHeaderSections } from "./subHeaderSections";
import Progressbar from "./progressBar";
import { Link as RSLink } from "react-scroll";

const Subheader = ({ show }) => {
  const router = useRouter();
  const pathnameArr = router.pathname.split("/");
  const currentPath = pathnameArr[pathnameArr.length - 1] || "home";
  const sections = subHeaderSections[currentPath] || {};
  const sectionTitles = Object.keys(sections) || [];

  return (
    <header
      className={navStyles.header}
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <Progressbar />
      <div className={navStyles.subheaderContainer}>
        <Link href="/">
          <Image src={logo} alt="costaatt-logo" height={60} />
        </Link>

        <div className={navStyles.subheader}>
          {sectionTitles.map((section) => (
            <RSLink
              className={navStyles.rslink}
              key={section}
              activeClass={navStyles.activeSubsection}
              to={sections[section]}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {section}
            </RSLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Subheader;
