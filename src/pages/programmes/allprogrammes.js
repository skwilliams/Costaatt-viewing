import React from "react";

import CardStyles from "../../styles/ProgCard.module.scss";
import Head from "next/head";

import Link from "next/link";
import Layout from '../../components/PageWithSideNavComponents/Layout'
import SearchCourse from "@/components/PageComponents/SearchCourse";
import ProgCard from "../../components/PageComponents/ProgCard";
import { coursedata } from "./allprogrammedata";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";

const allcourses = () => {
  console.log(coursedata);

  return (
    <>
      <Head>
        <title>All Programmes </title>
      </Head>
      <HeaderNoImage caption="All Porgrammes" />
      <p className={CardStyles.urllayout}>
        COSTAATT Programmes/ All Programmes
      </p>

      <section className={CardStyles.sidenav}>
        <div className={CardStyles.sidenavtitlemain}> Filter By </div>
        <div>
          <SearchCourse />
        </div>
        <p className={CardStyles.sidenavtitle}> by Schools</p>{" "}
        <Link className={CardStyles.sidenavlink} href="#programmes">
          Business and Digital Technologies
        </Link>
        <Link className={CardStyles.sidenavlink} href="#careers">
          Environment, Circular Economy and Sustainability
        </Link>
        <Link className={CardStyles.sidenavlink} href="#progoverview">
          Ken Gordon School of Communication Creative and Digital Media
        </Link>
        <Link className={CardStyles.sidenavlink} href="#featuredwork">
          Liberal Arts, Education and Digital Humanities
        </Link>
        <Link className={CardStyles.sidenavlink} href="#facultystaff">
          Nursing, Health and Medical Technologies
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


export default allcourses;
