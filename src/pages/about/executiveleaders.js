import React, { useState } from "react";
import Head from "next/head";
import standardStyles from "../../styles/main.module.scss";
import HeaderNoImage from "../../components/PageComponents/HeaderNoImage";
import Link from "next/link";
import { deans, vps, management, heads } from "./leadershipdata";
import FacultyStaffCard from "../../components/PageComponents/FacultyStaffDepCard";
import ExecutiveCard from "../../components/PageComponents/ExecutiveCard";

import DeptStyles from "../../styles/DepartCard.module.scss";

import AboutStyles from "../../styles/About.module.scss";
import awaitingbanner from "../../../public/images/about/leaders.jpg";

import HeadImage from "../../components/PageComponents/HeadImage";

const Executiveleaders = () => {
  return (
    <>
      <Head>
        <title>Executive |{""} COSTAATT</title>
      </Head>
      <HeadImage mainimage={awaitingbanner} wide={5445} high={3630} />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/executive">Executive Leaders</Link>
      </p>
      

      <header>
        <span className={standardStyles.heading_primary__main}>
          Executive Leadership
        </span>
        <span className={standardStyles.heading_primary__sub}>
          Experienced | Motivated | Professional
        </span>
      </header>

      <section
        id="vps"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.centertext}`}
      >
        <p className={standardStyles.paragraph}>
          Our Executive Leadership Team of highly experienced, motivated and
          professional administrators are committed to taking COSTAATT to higher
          levels of quality, service standards and global recognition.
        </p>
        <h2 className={standardStyles.heading_primary__secondary}>
          Executive Leaders
        </h2>
        <div className={AboutStyles.rows}>
          {vps.map((fe) => (
            <>
              <div key={fe.id} className={AboutStyles.col1of3s}>
                <ExecutiveCard exec={fe} />
              </div>
            </>
          ))}
        </div>
      </section>
      <section
        id="mgmt"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.centertext}`}
      >
        <h2
          className={`${standardStyles.heading_primary__secondary}  ${standardStyles.marginTopHuge} ${standardStyles.centertext}`}
        >
          Management Team
        </h2>
        <div className={DeptStyles.threeColGridCon}>
          <FacultyStaffCard staff={management} />
        </div>
      </section>
      <section
        id="deans"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.centertext}`}
      >
        <h2
          className={`${standardStyles.heading_primary__secondary}  ${standardStyles.marginTopHuge} ${standardStyles.centertext}`}
        >
          Deans
        </h2>
        <div className={DeptStyles.threeColGridCon}>
          <FacultyStaffCard staff={deans} />
        </div>
      </section>
      <section
        id="head"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.centertext}`}
      >
        <h2
          className={`${standardStyles.heading_primary__secondary}  ${standardStyles.marginTopHuge} ${standardStyles.centertext}`}
        >
          Heads of Department
        </h2>
        <div className={DeptStyles.threeColGridCon}>
          <FacultyStaffCard staff={heads} />
        </div>
      </section>
    </>
  );
};

export default Executiveleaders;
