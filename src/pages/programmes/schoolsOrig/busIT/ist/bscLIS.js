import React from "react";
import Head from "next/head";
import Headimagesmall from "../../../../../components/PageComponents/Headimagesmall";
import headImg from "../../../../../../images/Programmes/tester2.jpg";
import Layout from "../../../../../components/PageWithSideNavComponents/Layout"
import SideNavWithTopNav_NoDropdown from '../../../../../components/Layouts/SideNavWithTopNav_NoDropdown'

import CourseStyle from "../../../../../styles/Course.module.scss";
import ProgStyles from "../../../../../styles/Programmes.module.scss";
import time from "../../../../../../images/Programmes/time.svg";
import mode from "../../../../../../images/Programmes/mode.svg";
import location from "../../../../../../images/Programmes/location.svg";
import Image from "next/image";
import ContactUs from "@/components/PageComponents/ContactUs";
import Featured from '../../../../../components/PageComponents/Featured'
import {featured} from '../../../../../components/PageComponents/featuresdata'
import { gradspeak}  from "../../../../api/gradspeak";


import GradStyle from "../../../../../styles/GradsSpeak.module.scss"
import GradsSpeak from "@/components/PageComponents/GradsSpeak"
import Divider from "@mui/material/Divider";
import {bscLismajor, bscLissupport,bscLiscore} from "../../busIT/ist/bscLiscourses"
import {institutionFees} from "../../../../admissions/admissionsData"
import DegreeCourses from "@/components/PageComponents/DegreeCourses"

import DeptStyles from "../../../../../styles/Department.module.scss"
import StudentResources from "@/components/PageComponents/StudentResources";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InstitutionFees from '@/components/PageComponents/InstiutionFees'
import image from "../../../../../../images/Programmes/visit-home-v2.jpg";


const bscLIS = () => {
  return (
    <>
      <Head>
        <title>BSC LIS</title>
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
      </section>
      <Divider dark />
      <section id="careers" className={CourseStyle.sectionCareers}>
        <p className={ProgStyles.headingprimaryleft}> Possible Careers</p>
        {/*to change to a copoonent */}
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

        <Featured feat={featured} />
      </section>
      <Divider dark />
      <section id="gradSpeak" className={CourseStyle.sectionGradSpeak}>
        <p className={ProgStyles.headingprimaryleft}> Graduates Speak</p>

        <div className={GradStyle.threeColGridCon}>
          <GradsSpeak graduate={gradspeak} />
        </div>
      </section>
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
            {/* Core Curriculum Courses */}
            <DegreeCourses courses={bscLiscore} />
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ margin: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Support Courses</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Support Courses */}

            <DegreeCourses courses={bscLissupport} />
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

      <section id="requirements" className={CourseStyle.sectionRequirements}>
        <p className={ProgStyles.headingprimaryleft}> Requirements</p>
        <Accordion sx={{ margin: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Minimum Entry Requirements</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={bscLismajor} />
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ margin: 2, color: "primary" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Alternative Routes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={CourseStyle.text}>
              Applicants who do not possess the minimum requirements for entry
              into a degree programme may be eligible for admission via the
              following: Mature applicants (25 years and over) with relevant
              experience, who do not possess the minimum entry requirements, may
              be considered on the basis of experience and demonstrable
              competence.
              <p>
                {" "}
                COMPASS is designed to help students gain the qualifications
                needed to access the degree programme of their choice at
                COSTAATT. The duration of study in COMPASS depends on students'
                entry-level competencies; performance on the placement tests in
                English, Mathematics and, where relevant, Science; and the
                admission requirements of the programme they wish to pursue.
              </p>
              <p>
                {" "}
                To qualify for the COMPASS programme, applicants MUST have
                completed five years of secondary school and: Possess 3-4 CSEC
                (CXC)/GCE passes Possess 5 CSEC (CXC)/GCE passes without
                mathematics or English or Be 25 years or older (mature student)
                with academic literacy acquired through work or life
                experiences. Upon successful completion of the COMPASS
                programme, students may apply to the college programme for which
                they would then have gained the necessary entry requirements.{" "}
              </p>
            </div>{" "}
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ margin: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Resource Requirements</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={CourseStyle.text}>
              Access to a mid range computer and internet access
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ margin: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Required Supporting Documents </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className={CourseStyle.text}>
              <li> </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </section>

      <div className={CourseStyle.inquiryform}>
        <ContactUs />
      </div>
      <section id="applylink" className={DeptStyles.sectionStuResources}>
        <p className={ProgStyles.headingprimaryleft}> COSTAATT WANTS YOU </p>

        <div className={DeptStyles.threeGridCon}>
          <div className={DeptStyles.threeGridCol}>
            <StudentResources image={image} imagetxt="Apply Now" />{" "}
          </div>
          <div className={DeptStyles.threeGridCol}>
            {" "}
            <StudentResources
              image={image}
              imagetxt="See Admissions Counsellor"
            />
          </div>
          <div className={DeptStyles.threeGridCol}>
            {" "}
            <StudentResources image={image} imagetxt="Visit Us" />
          </div>
        </div>
      </section>
    </>
  );
};

bscLIS.getLayout = function getLayout(page) {
  return <SideNavWithTopNav_NoDropdown>{page}</SideNavWithTopNav_NoDropdown>;
};


export default bscLIS;
