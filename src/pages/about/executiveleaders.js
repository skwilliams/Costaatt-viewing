
import React from "react";
import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import Link from "next/link";
import { deans,vps,management,heads } from "./leadershipdata";
import FacultyStaffCard from "@/components/PageComponents/FacultyStaffDepCard";
import DeptStyles from "../../styles/DepartCard.module.scss";
import BioCard from "@/components/PageComponents/BioCard";



const executiveleaders = () => {
  return (
    <>
      <Head>
        <title>Executive |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="College Leadership" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/executive">Executive</Link>
      </p>

      <section
        id="vps"
        className={`${standardStyles.sectionNoSidenavMar} ${standardStyles.centertext}`}
      >
        <p className={standardStyles.paragraph}>
          Our Executive Leadership Team of highly experienced, motivated and
          professional administrators are committed to taking COSTAATT to higher
          levels of quality, service standards and global recognition.
        </p>
        <h2 className={standardStyles.newsHeading}>Executive Leaders</h2>
        <div className={standardStyles.row}>
        
          <BioCard staff={vps} />
        </div>
      </section>
      <section
        id="mgmt"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.centertext}`}
      >
        <h2 className={standardStyles.newsHeading}>Management Team</h2>
        <div className={DeptStyles.threeColGridCon}>
          <FacultyStaffCard staff={management} />
        </div>
      </section>
      <section
        id="deans"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.centertext}`}
      >
        <h2 className={standardStyles.newsHeading}>Deans</h2>
        <div className={DeptStyles.threeColGridCon}>
          <FacultyStaffCard staff={deans} />
        </div>
      </section>
      <section
        id="head"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.centertext}`}
      >
        <h2 className={standardStyles.newsHeading}>Heads of Department</h2>
        <div className={DeptStyles.threeColGridCon}>
          <FacultyStaffCard staff={heads} />
        </div>
      </section>
    </>
  );
}

export default executiveleaders