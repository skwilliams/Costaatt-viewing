import React from "react";
import Head from "next/head";
import Headimagesmall from "../../../../../components/PageComponents/Headimagesmall";
import headImg from "../../../../../../images/Programmes/tester2.jpg";
import Layout from "../../../../../components/PageWithSideNavComponents/Layout";
import CourseStyle from "../../../../../styles/Course.module.scss";
import ProgStyles from "../../../../../styles/Programmes.module.scss";
import time from "../../../../../../images/Programmes/time.svg";
import mode from "../../../../../../images/Programmes/mode.svg";
import location from "../../../../../../images/Programmes/location.svg";
import Image from "next/image";
import ContactUs from "@/components/PageComponents/ContactUs";

const bscLIS = () => {
  return (
    <>
      <Head>
        <title>IST</title>
      </Head>
      {/* <Headimagesmall
        imagetext=""
        mainimage={headImg}
      /> */}
      <p className={CourseStyle.courseName}>
        BSC. Library and Information Science
      </p>
      <section id="courseoverview" className={CourseStyle.sectionOverview}>
        {/* <p className={ProgStyles.headingprimaryleft}> Description</p> */}
        <p className={CourseStyle.desc}>
          The Bachelor of Science in Information and Library Science allows
          graduates to qualify for employment in a variety of professional
          positions in schools, public, academic and special libraries or in any
          other organization engaged in information science and library-related
          activities. This degree prepares candidates who would like to pursue a
          masters' degree to easily transition to such a programme.
        </p>
        <div className={CourseStyle.entryreq}>
          <p className={CourseStyle.headingsecondary}> Entry Requirements</p>

          <ul className={CourseStyle.list}>
            <li className={CourseStyle.items}>
              Minimum five (5) CSEC/GCE O'Level subjects, inclusive of English A
              and Mathematics.{" "}
              <p className={CourseStyle.footnote}>
                Grades 1,2,3* or A, B, C. *Grade 3 accepted if attained in June
                1998 and beyond
              </p>
            </li>
            <li className={CourseStyle.items}>
              Prerequisites : College Matriculation requirements
            </li>
          </ul>
        </div>{" "}
        <div className={CourseStyle.iconsection}>
          <div className={CourseStyle.threeColGridCon}>
            <div className={CourseStyle.threeColGrid}>
              {" "}
              <Image
                className={CourseStyle.icon}
                src={location}
                alt="duration icon"
              />
              <p className={CourseStyle.iconfont}> &#10004; City Campus</p>
              {/* <p className={CourseStyle.iconfont}>
                {" "}
                &#10004; Part-time : 6 years
              </p> */}
            </div>
            <div className={CourseStyle.threeColGrid}>
              <Image
                className={CourseStyle.icon}
                src={time}
                alt="duration icon"
              />
              <p className={CourseStyle.iconfont}>
                {" "}
                &#10004; Full-time : 4 years
              </p>
              <p className={CourseStyle.iconfont}>
                {" "}
                &#10004; Part-time : 6 years
              </p>
              <p className={CourseStyle.footnote}>
                *Subject to change based on college Matriculation
              </p>{" "}
            </div>
            <div className={CourseStyle.threeColGrid}>
              {" "}
              <Image
                className={CourseStyle.icon}
                src={mode}
                alt="duration icon"
              />
              <p className={CourseStyle.iconfont}> &#10004; Blended</p>
              <p className={CourseStyle.iconfont}> &#10004; Online</p>
            </div>
          </div>
        </div>
        <div className={CourseStyle.inquiryform}>
          <ContactUs />
        </div>
      </section>
      <section id="careers" className={CourseStyle.sectionCareers}>
        <p className={ProgStyles.headingprimaryleft}> Possible Careers</p>
    
          <table className={CourseStyle.careerstable}>
            <thead>
              <tr>
                <th> Position</th>
                <th> Median Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Senior (Librarian, Information Specialist, others..) </td>
                <td>$11,000 -$15,000</td>
              </tr>
              <tr>
                <td>School Librarian </td>
                <td>$11,000 -$15,000</td>
              </tr>
              <tr>
                <td> Records Manager 1 </td>
                <td>$7,800 -$10,200</td>
              </tr>
            </tbody>
          </table>
          <p className={CourseStyle.footnote}>
           
              * Salaries are subject to years of experience, projects and
              professional certification{" "}
            
          </p>
        </section>
    
      <section id="gradPortfolio" className={CourseStyle.sectionPortfolio}>
        <p className={ProgStyles.headingprimaryleft}> Graduates Portfolio</p>
      </section>
      <section id="gradSpeak" className={CourseStyle.sectionGradSpeak}>
        <p className={ProgStyles.headingprimaryleft}> Graduates Speak</p>
      </section>
      <section id="curriculum" className={CourseStyle.sectionCurriculum}>
        <p className={ProgStyles.headingprimaryleft}> Curriculum</p>
      </section>
      <section id="feesfinancial" className={CourseStyle.sectionFinancial}>
        <p className={ProgStyles.headingprimaryleft}> Fees and Financial Aid</p>
      </section>
    </>
  );
};

bscLIS.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default bscLIS;
