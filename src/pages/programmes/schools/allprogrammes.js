import React from "react";

import CardStyles from "../../styles/ProgCard.module.scss";
import Head from "next/head";

import Link from "next/link";
import Layout from "../../components/PageWithSideNavComponents/Layout";
import SearchCourse from "@/components/PageComponents/SearchCourse";
import ProgCard from "../../components/PageComponents/ProgCard";
import { coursedata } from "./allprogrammedata";

const allprogrammes = () => {
  console.log(coursedata);

  return (
    <>
      <Head>
        <title>All Programmes </title>
      </Head>
      <p className={CardStyles.urllayout}>
        COSTAATT / Programmes / All Programmes
      </p>

      <p className={CardStyles.pheading}>All Programmes </p>

      <section className={CardStyles.sidenav}>
        <div className={CardStyles.sidenavtitlemain}> Filter By </div>

        <div>
          <SearchCourse />
        </div>
        <p className={CardStyles.sidenavtitle}> by Subject Area</p>
        <Link className={CardStyles.sidenavlink} href="#progoverview">
          Accounting
        </Link>
        <Link className={CardStyles.sidenavlink} href="#careers">
          Information Technology
        </Link>
        <Link className={CardStyles.sidenavlink} href="#featuredwork">
          Library Science
        </Link>
        <Link className={CardStyles.sidenavlink} href="#facultystaff">
          Music
        </Link>
        <Link className={CardStyles.sidenavlink} href="#programmes">
          Journalism
        </Link>
        <Link className={CardStyles.sidenavlink} href="#fees">
          Mathematics
        </Link>

        <p className={CardStyles.sidenavtitle}> by Levels</p>
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
        </div>
      </section>

      <section className={CardStyles.main}>
        {coursedata.map((courses, index) => {
          return (
            <li key={index}>
              <ProgCard course={courses} />
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

export default allprogrammes;
