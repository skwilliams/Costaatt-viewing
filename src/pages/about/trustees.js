import React from "react";
import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";
import SideNavOnlyLayout from "@/components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import Link from "next/link";
import DeptStyles from "../../styles/DepartCard.module.scss";


import FacultyStaffCard from "@/components/PageComponents/FacultyStaffDepCard";
import { officeofpresident } from "./leadershipdata"



const trustees = () => {
  return (
    <>
      <Head>
        <title>Trustees |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="Board of Trustees" />
      <SideNavOnlyLayout>
        <p
          className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
        >
          <Link href="/"> COSTAATT/ </Link>
          <Link href="/about">About/</Link>
          <Link href="/about/trustees">Trustees</Link>
        </p>{" "}
        <section
          id="overview"
          className={standardStyles.sectionWithSideNavFirst}
        >
          <h2 className={standardStyles.newsHeading}>
            <span> BOARD </span>of Trustees
          </h2>

          <p className={standardStyles.paragraph}>
            Welcome to the College of Science, Technology and Applied Arts of
            Trinidad and Tobago. At COSTAATT, we are strongly committed to the
            principle of 'transforming lives, transforming communities and
            transforming the nation …one student at a time'. Inherent in our
            institutional philosophy and a key component of our educational
            thrust is a commitment to community service. Now, more than ever,
            our nation requires a highly educated workforce comprising citizens
          </p>
        </section>
        <section id="resp" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            <span> Responsiblities </span>
          </h2>
        
          <div className={standardStyles.bullet}>
            <ul>
              <li>
                {" "}
                Approves The assumptions, principles, and
                values which guide the College;</li>
            
              <li>
                Approves The vision, mission, and
                strategic foci of the College;
              </li>
              <li>
                Approves  Broad policy affecting the entire
                College;
              </li>
              <li>
                Approves  The annual operating and capital budgets
              </li>


              <li>
                Assures The financial viability of the College</li>

              <li>Assures The fiduciary conduct of the College.</li> 

              <li>
                {" "}
                Evaluates the state of the College relevant to its vision and
                mission.
              </li>

              <li>
                Appoints, supports, and evaluates the President. Preserves the
                autonomy of the College and informs the community of its
                functions and accomplishments.
              </li>
              <li>
                Assures that the Institute has an effective system of
                governance.
              </li>
              <li>Provides for regular assessment of Board effectiveness.</li>
              <li>
                Advises the College of forces external to the College that may
                have an influence on its mission, goals, and administrative
                policies.
              </li>
              <li>
                Assumes responsibility (with administration support) for the
                on-going education and development of Board members
              </li>
            </ul>
          </div>
        </section>
        <section id="vision" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            <span> Vision </span>
          </h2>
          <p className={standardStyles.paragraph}>
            {" "}
            Fugiat qui nulla voluptate magna sunt deserunt aliquip ipsum cillum.
            Proident dolor reprehenderit cupidatat mollit minim. Aliqua id enim
            officia minim sunt nulla ex. Et id fugiat velit adipisicing. Amet do
            minim ad enim voluptate laborum reprehenderit magna. Pariatur
            proident eu sint laboris reprehenderit. Pariatur proident eu et
            veniam qui enim sunt. Consectetur veniam aliqua sint velit culpa
            exercitation proident adipisicing. Irure labore moll{" "}
          </p>
        </section>
        <section id="trustees" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.newsHeading}>
            <span> Trustees </span>
          </h2>
          <p className={standardStyles.paragraph}>
            The RIT Board of Trustees consists of 6 number active trustees (including the President of the College and representatives of the COSTAATT ...... Currently, the total number of active and emeriti trustees is ?.
          </p>
          <div className={DeptStyles.threeColGridCon}>
            <FacultyStaffCard staff={officeofpresident} />
          </div>
        </section>
      </SideNavOnlyLayout>
    </>
  );
};
trustees.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};














export default trustees