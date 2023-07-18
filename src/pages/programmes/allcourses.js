import React from "react";

import CardStyles from "../../styles/ProgCard.module.scss";
import Head from "next/head";

import Link from "next/link";
import Layout from '../../components/PageWithSideNavComponents/Layout'
import SearchCourse from "@/components/PageComponents/SearchCourse";
import ProgCard from "../../components/PageComponents/ProgCard";
import { coursedata } from "../programmes/allcoursesdata";

const allcourses = () => {
  console.log(coursedata);

  return (
    <>
      <Head>
        <title>All Courses </title>
      </Head>
      <p className={CardStyles.urllayout}>COSTAATT / Academics / All Courses</p>

      <p className={CardStyles.pheading}>ALL COURSES </p>

      <div>
        <SearchCourse />
      </div>
      <section className={CardStyles.sidenav}>
        <p className={CardStyles.sidenavtitlemain}> Filter By </p>

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
       
      <section className={CardStyles.main} >
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


export default allcourses;
