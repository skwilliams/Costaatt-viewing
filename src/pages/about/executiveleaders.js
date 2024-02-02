
import React , {useState} from "react";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import Link from "next/link";
import { deans,vps,management,heads } from "./leadershipdata";
import FacultyStaffCard from "@/components/PageComponents/FacultyStaffDepCard";
import ExecutiveCard from "@/components/PageComponents/ExecutiveCard";


import DeptStyles from "../../styles/DepartCard.module.scss";





 const Executiveleaders = () => {


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

        {vps.map((fe) => (
          <>
            <div className={standardStyles.row}>
              {/* Naseem Koylass */}

              {/* <div className={standardStyles.col1of2}> */}
                <ExecutiveCard exec={fe} />

               
       
              {/* </div> */}
           
            </div>
          </>
        ))}

        {/* <div className={standardStyles.row}>
          <BioCard staff={vps} />
        </div> */}
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

export default Executiveleaders