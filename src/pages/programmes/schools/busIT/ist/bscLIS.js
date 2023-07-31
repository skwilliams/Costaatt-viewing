import React from "react";
import Head from "next/head";
import Headimagesmall from "../../../../../components/PageComponents/Headimagesmall";
import headImg from "../../../../../../images/Programmes/tester2.jpg";
import Layout from "../../../../../components/PageWithSideNavComponents/Layout"
import CourseStyle from "../../../../../styles/Course.module.scss";
import ProgStyles from "../../../../../styles/Programmes.module.scss";
import time from "../../../../../../images/Programmes/time.svg";
import mode from "../../../../../../images/Programmes/mode.svg";
import location from "../../../../../../images/Programmes/location.svg";
import Image from "next/image";
import ContactUs from "@/components/PageComponents/ContactUs";
import Featured from '../../../../../components/PageComponents/Featured'
import {featuredLIS} from '../../busIT/ist/featuredwork'
import {gradsspeakLIS} from'../../busIT/ist/featuredwork'
import GradStyle from "../../../../../styles/GradsSpeak.module.scss";
import GradsSpeak from "@/components/PageComponents/GradsSpeak";
import Divider from "@mui/material/Divider";
import {bscLismajor, bscLissupport,bscLiscore} from "../../busIT/ist/bscLiscourses"
import {institutionFees} from "../../../../admissions/admissionsData"
import DegreeCourses from "@/components/PageComponents/DegreeCourses";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InstitutionFees from '@/components/PageComponents/InstiutionFees'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

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
              <p className={CourseStyle.iconfont}>
                {" "}
                &#10004; Part-time : 6 years
              </p>
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
      <Divider dark />
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
      <Divider dark />
      <section id="gradPortfolio" className={CourseStyle.sectionPortfolio}>
        <p className={ProgStyles.headingprimaryleft}> Graduates Portfolio</p>

        <Featured feat={featuredLIS} />
      </section>
      <Divider dark />
      {/* <section id="gradSpeak" className={CourseStyle.sectionGradSpeak}>
        <p className={ProgStyles.headingprimaryleft}> Graduates Speak</p>

        <div className={GradStyle.threeColGridCon}>
          <GradsSpeak graduate={gradsspeakLIS} />
        </div>
      </section>  */}
      <section id="curriculum" className={CourseStyle.sectionCurriculum}>
        <p className={ProgStyles.headingprimaryleft}> Curriculum</p>

        <Accordion sx={{ margin: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Courses in Major</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={bscLismajor} />
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ margin: 2, color: "primary" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Core Curriculum Courses</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={bscLismajor} />
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ margin: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Support Courses</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={bscLismajor} />
          </AccordionDetails>
        </Accordion>
      </section>
      <section id="feesfinancial" className={CourseStyle.sectionFinancial}>
        <p className={ProgStyles.headingprimaryleft}> Fees and Financial Aid</p>
        <Accordion sx={{ margin: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Tution Fees</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={bscLismajor} />
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ margin: 2, color: "primary" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>College Fees</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <InstitutionFees fees={institutionFees} />
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ margin: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Financial Aid</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={bscLismajor} />
          </AccordionDetails>
        </Accordion>
      </section>
      <section id="application" className={CourseStyle.sectionFinancial}>
        <p className={ProgStyles.headingprimaryleft}> Supporting Documents</p>
      </section>
      <section id="sturesource" className={CourseStyle.sectionFinancial}>
        <p className={ProgStyles.headingprimaryleft}> Student Resources</p>
      </section>
    </>
  );
};

bscLIS.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default bscLIS;
