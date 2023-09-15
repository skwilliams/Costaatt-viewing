import React from "react";

import CardStyles from "../../styles/ProgCard.module.scss";
import Head from "next/head";

import Link from "next/link";
import Layout from "../../components/PageWithSideNavComponents/Layout";
import SearchCourse from "@/components/PageComponents/SearchCourse";
import ProgCard from "../../components/PageComponents/ProgCard";
import { allshortcourses } from "./shortcoursedata";
import CollegeCoreCard from "@/components/PageComponents/CollegeCoreCard";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import ShortCoursesCard from "@/components/PageComponents/ShortCoursesCard";

const shortcourses= () => {
  return (
    <>
      <Head>
        <title>Short Courses</title>
      </Head>

      <HeaderNoImage caption="Short Courses" />
      <p className={CardStyles.urllayout}>
        COSTAATT / Programmes / Short Courses
      </p>

      <section className={CardStyles.sidenav}>
        <div className={CardStyles.sidenavtitlemain}> Filter By </div>

        <div>
          <SearchCourse />
        </div>
        <p className={CardStyles.sidenavtitle}> by Discipline</p>
        <Link className={CardStyles.sidenavlink} href="#progoverview">
          Advertising and Social Media
        </Link>
        <Link className={CardStyles.sidenavlink} href="#careers">
          Communication Skills{" "}
        </Link>
        <Link className={CardStyles.sidenavlink} href="#featuredwork">
          Film and Production{" "}
        </Link>
        <Link className={CardStyles.sidenavlink} href="#facultystaff">
          Information Technology and Computer Skills
        </Link>
        <Link className={CardStyles.sidenavlink} href="#programmes">
          Journalism and Public Relations
        </Link>
        <Link className={CardStyles.sidenavlink} href="#fees">
          Management and Entrepreneurship
        </Link>
        <Link className={CardStyles.sidenavlink} href="#fees">
          Mathematics
        </Link>
        <Link className={CardStyles.sidenavlink} href="#fees">
          Psychology and Social Work
        </Link>
        <Link className={CardStyles.sidenavlink} href="#fees">
          Speical Needs Education{" "}
        </Link>
        <Link className={CardStyles.sidenavlink} href="#fees">
          Tourism
        </Link>
        <Link className={CardStyles.sidenavlink} href="#fees">
          Other
        </Link>
      </section>

      <section className={CardStyles.main}>
        {allshortcourses.map((data, index) => {
          return (
            <li key={index}>
              <ShortCoursesCard course={data} />
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

export default shortcourses;
