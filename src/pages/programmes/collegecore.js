import React from "react";

import CardStyles from "../../styles/ProgCard.module.scss";
import Head from "next/head";

import Link from "next/link";
import Layout from "../../components/PageWithSideNavComponents/Layout";
import SearchCourse from "@/components/PageComponents/SearchCourse";
import ProgCard from "../../components/PageComponents/ProgCard";
import { collegecoredata } from "./collegecoredata";
import CollegeCoreCard from "@/components/PageComponents/CollegeCoreCard";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";

const collegecore = () => {


  return (
    <>
      <Head>
        <title>College Core</title>
      </Head>
      
      <HeaderNoImage caption="College Core" />
      {/* <p className={CardStyles.pheading}>College Core </p> */}
      <p className={CardStyles.urllayout}>
        COSTAATT / Programmes / College Core
      </p>
      <section className={CardStyles.sidenav}>
        <div className={CardStyles.sidenavtitlemain}> Filter By </div>

        <div>
          <SearchCourse />
        </div>
        <p className={CardStyles.sidenavtitle}> by Discipline</p>
        <Link className={CardStyles.sidenavlink} href="#progoverview">
          Continuing Education
        </Link>
        <Link className={CardStyles.sidenavlink} href="#careers">
          Social Sciences
        </Link>
        <Link className={CardStyles.sidenavlink} href="#featuredwork">
          Science
        </Link>
        <Link className={CardStyles.sidenavlink} href="#facultystaff">
          Music
        </Link>
        <Link className={CardStyles.sidenavlink} href="#programmes">
          Behavioual Science
        </Link>
        <Link className={CardStyles.sidenavlink} href="#fees">
          Mathematics
        </Link>
        <Link className={CardStyles.sidenavlink} href="#fees">
          Humanities
        </Link>

        {/* <p className={CardStyles.sidenavtitle}> by Levels</p>
        <div>
          <Link className={CardStyles.sidenavlink} href="#progoverview">
            Undergraduate
          </Link>
          <Link className={CardStyles.sidenavlink} href="#careers">
            Associate Degrees
          </Link>
          <Link className={CardStyles.sidenavlink} href="#featuredwork">
            Diplomas
          </Link>
          <Link className={CardStyles.sidenavlink} href="#facultystaff">
            Certificates
          </Link>
        </div> */}
      </section>

      <section className={CardStyles.main}>
        {collegecoredata.map((data, index) => {
          return (
            <li key={index}>
              <CollegeCoreCard course={data} />
            </li>
          );
        })}
      </section>
    </>
  );
};
// allcourses.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };

export default collegecore;
