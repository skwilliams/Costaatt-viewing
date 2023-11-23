import React from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import costlifeStyles from "@/styles/CostaattLife.module.css";
import DeanStyles from "@/styles/Dean.module.scss";
import AboutStyles from "@/styles/About.module.scss";
import { IconContext } from "react-icons";



import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import hours from "../../../public/images/admissions/businesshours.svg";

import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import { Button, Divider } from "@mui/material";

import Image, { StaticImageData } from "next/image";
import { FiBookOpen } from "react-icons/fi";

import { getEventsByDept } from "../../../public/data/eventsdata";
import EventCardOrig from "@/components/PageComponents/EventCardOrig";

import StudentCouncilRep from "@/components/PageComponents/StudentCouncilRep";
import ContactStudentLife from "@/components/PageComponents/ContactStudentLife";
import home2 from "../../../public/images/about/home2.png";
import home3 from "../../../public/images/about/home3.png";
import home5 from "../../../public/images/about/home5.png";
import home6 from "../../../public/images/about/home6.png";

import { useState } from "react";
import { useEffect } from "react";
import FacultyStaffCard from "@/components/PageComponents/FacultyStaffDepCard";
import DeanCard from "@/components/PageComponents/StaffCard";
import president from "../../../public/images/about/president.jpg"
import Expandable from "@/components/PageComponents/Expandable";

const history = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
















  return (
    <>
      <Head>
        <title>Profile |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="History" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/history">History</Link>
      </p>

      <section id="mission" className={standardStyles.sectionNoSidenavFirst}>
        {/* <h2
          className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
        >
          <span> VISION</span> & Mission{" "}
        </h2> */}
        <div className={standardStyles.twoGridCon}>
          <div className={standardStyles.twoGridCol}>
            <h3 className={standardStyles.headingSecondary}>Vision</h3>
            <p className={standardStyles.paragraph}>
              To be a student-cantered, dynamic and innovative, world-class
              multi-campus college, promoting excellence in teaching and
              learning, serving diverse communities and producing lifelong
              learners who can compete globally.
            </p>
          </div>
          <div className={standardStyles.twoGridCol}>
            <h3 className={standardStyles.headingSecondary}>Mission</h3>
            <p className={standardStyles.paragraph}>
              To be the premier educational institution in providing
              high-quality, affordable and accessible educational programmes
              serving the needs of business, industry and the diverse campus
              communities and facilitating the personal and professional
              development of its students, faculty and staff.
            </p>
          </div>
        </div>{" "}
        <p className={standardStyles.paragraph}>
          {" "}
          <b> The primary mandate of the College is to deliver: </b>
        </p>
        <div className={standardStyles.fourColGridCon}>
          <div className={standardStyles.fourColGrid}>
            <div
              className={`${standardStyles.featurebox} ${AboutStyles.upskillnursing} ${standardStyles.whitefont}`}
            >
              <h3 className={standardStyles.headingTertiary}>
                Career education <br />
              </h3>
              <p
                className={`${standardStyles.featurebox__text} ${standardStyles.leftalign}`}
              >
                Preparing students for employment at the paraprofessional,
                technologist and mid-managerial levels in a variety of
                disciplines.{" "}
              </p>
            </div>{" "}
          </div>
          <div className={standardStyles.fourColGrid}>
            <div
              className={`${standardStyles.featurebox} ${AboutStyles.upskillkengord} ${standardStyles.whitefont}`}
            >
              <h3 className={standardStyles.headingTertiary}>
                Transfer
                <br /> Education
              </h3>
              <p
                className={`${standardStyles.featurebox__text} ${standardStyles.leftalign}`}
              >
                Preparing students for future enrolment in undergraduate
                programmes of study.
              </p>
            </div>{" "}
          </div>
          <div className={standardStyles.fourColGrid}>
            <div
              className={`${standardStyles.featurebox} ${AboutStyles.upskillliberal} ${standardStyles.whitefont}`}
            >
              <h3 className={standardStyles.headingTertiary}>
                Developmental
                <br /> Education{" "}
              </h3>
              <p
                className={`${standardStyles.featurebox__text} ${standardStyles.leftalign}`}
              >
                Providing remedial education courses for academically
                underprepared students to create a bridge to post-secondary
                programmes{" "}
              </p>
            </div>
          </div>

          <div className={standardStyles.fourColGrid}>
            <div
              className={`${standardStyles.featurebox} ${AboutStyles.upskillworkF} ${standardStyles.whitefont}`}
            >
              <h3 className={standardStyles.headingTertiary}>
                Continuing & Community
                <br /> Education{" "}
              </h3>
              <p
                className={`${standardStyles.featurebox__text} ${standardStyles.leftalign}`}
              >
                Offering short-term programmes which correspond with the needs
                of the communities
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="national">
        <div className={standardStyles.sectionNoSidenavMar}>
          {" "}
          <h2
            className={` ${standardStyles.newsHeading}  ${standardStyles.centertext}`}
          >
            {" "}
            <span> NATIONAL</span> Community{" "}
          </h2>
          <p className={standardStyles.paragraph}>
            {" "}
            COSTAATT was established on October 27th 2000 by an Act of
            Parliament (Act No. 77 of 2000) as a multi-campus community college,
            based on the amalgamation of seven tertiary level institutions,
            namely the:
          </p>
          <div className={AboutStyles.schoolflex}>
            <div className={AboutStyles.schoolflex__item}>
              <div
                className={`${AboutStyles.joint} ${AboutStyles.jointcostaattCol}`}
              >
                NIHERST Colleges
              </div>
            </div>
            <div className={AboutStyles.schoolflex__item}>
              <p className={`${AboutStyles.joint} ${AboutStyles.jointliberal}`}>
                John S. Donaldson Technical Institute{" "}
              </p>
            </div>
            <div className={AboutStyles.schoolflex__item}>
              <p className={`${AboutStyles.joint} ${AboutStyles.jointkengord}`}>
                San Fernando Technical Institute{" "}
              </p>
            </div>
            <div className={AboutStyles.schoolflex__item}>
              <p className={`${AboutStyles.joint} ${AboutStyles.jointnursing}`}>
                Government Vocational Centre (Point Fortin){" "}
              </p>
            </div>

            <div className={AboutStyles.schoolflex__item}>
              <p className={`${AboutStyles.joint} ${AboutStyles.jointbusIT}`}>
                Eastern Caribbean Institute <br />
                of Agriculture and Forestry (ECIAF){" "}
              </p>
            </div>

            <div className={AboutStyles.schoolflex__item}>
              <p className={`${AboutStyles.joint} ${AboutStyles.jointenviro}`}>
                Joint Services Staff College{" "}
              </p>
            </div>
            <div className={AboutStyles.schoolflex__item}>
              <p className={`${AboutStyles.joint} ${AboutStyles.jointworkF}`}>
                Metal Industries Company Limited (MIC){" "}
              </p>
            </div>
          </div>
          <p className={standardStyles.footnote}>
            * NIHERST Colleges included: ( Information Technology College
            College of Nursing,College of Health Sciences , School of
            Languages,Business Management Division and General Education
            Divisions )
          </p>
        </div>

        <div className={standardStyles.sectionNoSidenav}>
          <p className={standardStyles.paragraph}>
            From 1998 to 2000, a Community College Implementation Team (CCIT)
            established under the jurisdiction of NIHERST, was assigned the
            primary responsibility of planning the establishment of the national
            community college. Given that the constituent campuses of the
            proposed community college had diverse and different educational
            mandates, programmes, systems and resources; the focus of the CCIT
            and the six technical teams which comprised representatives from all
            of the campuses, included assessment, rationalisation, harmonisation
            and planned upgrade of the academic programming, as well as, the
            physical, technological, and human resources of the constituent
            campuses.
          </p>
          <div className={standardStyles.bullet}>
            When the College was established in October 2000, its enabling
            legislation set out the following objects:
            <ul>
              <li>
                {" "}
                To contribute to national and regional development, social
                equity and the development of civil society by providing
                broad-based access to socially responsive and innovative
                educational programmes and by encouraging scholarly work and
                applied research;
              </li>
              <li>
                {" "}
                To provide programmes that meet internationally acceptable
                standards, to foster professional and personal development, to
                prepare students for careers and for advanced study in the areas
                of science, technology and applied arts;{" "}
              </li>
              <li>
                To promote a culture of excellence by creating and maintaining
                an academic climate that fosters innovation, discipline,
                tolerance of diversity, criticism, self-evaluation and peer
                assessment;{" "}
              </li>
              <li>
                {" "}
                To promote cross-cultural understanding and mutual respect among
                peoples; and{" "}
              </li>
              <li>
                To strive to be a centre of excellence for scholarly work and
                applied research.{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <section id="achieve">
        <div className={standardStyles.container}>
          <div className={standardStyles.timeline}>
            <div
              className={`${standardStyles.timeline_container} ${standardStyles.primary} `}
            >
              <div className={standardStyles.timeline_icon}></div>
              <div className={standardStyles.timeline_body}>
                <h4 className={standardStyles.timeline_title}>
                  <span className={standardStyles.badge}>Primary</span>
                </h4>
                <div className={standardStyles.bullet}>
                  <ul>
                    <li>
                      {" "}
                      COSTAATT focused on aligning its programs with the North
                      American credit-based system to facilitate horizontal
                      transfer among the institutions.
                    </li>
                    <li>
                      Introduced the associate degree with a general education
                      component to enhance the quality of the existing technical
                      diplomas.{" "}
                    </li>
                    <li>
                      {" "}
                      Launched the College Prep program for students needing
                      academic support in Mathematics and English in order to
                      pursue tertiary level education.
                    </li>
                    <li> </li>
                  </ul>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </div>
                <p className={standardStyles.timeline_subtitle}>1 Hours Ago</p>
              </div>
            </div>
            {/* <div className={`${standardStyles.timeline-container} ${standardStyles.danger}`}>
              <div className="timeline-icon">
                <i className="far fa-grin-hearts" />
              </div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Danger</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </p>
                <p className="timeline-subtitle">2 Hours Ago</p>
              </div>
            </div>
            <div className="timeline-container success">
              <div className="timeline-icon">
                <i className="far fa-grin-tears" />
              </div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Success</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </p>
                <p className="timeline-subtitle">6 Hours Ago</p>
              </div>
            </div>
            <div className="timeline-container warning">
              <div className="timeline-icon">
                <i className="far fa-grimace" />
              </div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Warning</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </p>
                <p className="timeline-subtitle">1 Day Ago</p>
              </div>
            </div>
            <div className="timeline-container">
              <div className="timeline-icon">
                <i className="far fa-grin-beam-sweat" />
              </div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Secondary</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </p>
                <p className="timeline-subtitle">3 Days Ago</p>
              </div>
            </div>
            <div className="timeline-container info">
              <div className="timeline-icon">
                <i className="far fa-grin" />
              </div>
              <div className="timeline-body">
                <h4 className="timeline-title">
                  <span className="badge">Info</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam necessitatibus numquam earum ipsa fugiat veniam
                  suscipit, officiis repudiandae, eum recusandae neque
                  dignissimos. Cum fugit laboriosam culpa, repellendus esse
                  commodi deserunt.
                </p>
                <p className="timeline-subtitle">4 Days Ago</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <secton id="achieve" className={standardStyles.sectiontimeline}>
        <div className={standardStyles.timeline}>
          <div className={standardStyles.entry}>
            <div className={standardStyles.title}>
              <h3>1998-2000</h3>
              <p>The Early Years </p>
            </div>
            <div className={`${standardStyles.bullet} ${standardStyles.body}`}>
              <ul>
                <li>
                  COSTAATT focused on aligning its programs with the North
                  American credit-based system to facilitate horizontal transfer
                  among the institutions.
                </li>
                <li>
                  Introduced the associate degree with a general education
                  component to enhance the quality of the existing technical
                  diplomas
                </li>
                <li>
                  Launched the College Prep program for students needing
                  academic support in Mathematics and English in order to pursue
                  tertiary level education
                </li>
              </ul>
            </div>
          </div>
          <div className={standardStyles.entry}>
            <div className={standardStyles.title}>
              <h3>2000-2002</h3>
              <p>COSTAATT was born </p>
            </div>
            <div className={`${standardStyles.bullet} ${standardStyles.body}`}>
              <ul>
                <li>
                  COSTAATT was established on October 27th 2000 by an Act of
                  Parliament (Act No. 77 of 2000) as a multi-campus community
                  college, based on the amalgamation of seven tertiary level
                  institutions.{" "}
                </li>
                <li> First Board of Trustees was appointed in 2002.</li>
              </ul>
            </div>
          </div>
          <div className={standardStyles.entry}>
            <div className={standardStyles.title}>
              <h3>2002-2004</h3>
              <p>Restructuring of The Tertiary Education Sector </p>
            </div>
            <div className={`${standardStyles.bullet} ${standardStyles.body}`}>
              <ul>
                <li>
                  A new vision led to the establishment of the University of
                  Trinidad and Tobago (UTT).
                </li>
                <li>
                  Several institutes were transferred from COSTAATT to UTT.
                </li>
                <li>COSTAATT had a reduced range of program offerings.</li>
              </ul>
            </div>
          </div>
          <div className={standardStyles.entry}>
            <div className={standardStyles.title}>
              <h3>2004-2008</h3>
              <p>Additional Sector Reforms </p>
            </div>
            <div className={`${standardStyles.bullet} ${standardStyles.body}`}>
              <ul>
                <li>
                  The Government Assistance for Tuition Expenses (GATE) program
                  removed financial barriers for post-secondary and university
                  education.
                </li>
                <li>
                  The Accreditation Council of Trinidad and Tobago (ACTT) was
                  established to regulate post-secondary and tertiary education
                  institutions.{" "}
                </li>
                <li>
                  National Training Agency (NTA) retained responsibility for
                  quality assurance of technical-vocational education.
                </li>
                <li>
                  {" "}
                  COSTAATT adjusted to changes while emphasizing its role as the
                  national community college.
                </li>
              </ul>
            </div>
          </div>
          <div className={standardStyles.entry}>
            <div className={standardStyles.title}>
              <h3>2008-2012</h3>
              <p> A Period of Growth and Expansion</p>
            </div>
            <div className={`${standardStyles.bullet} ${standardStyles.body}`}>
              <ul>
                <li>
                  Rapid growth in program offerings, student population, and
                  funding due to GATE
                </li>
                <li>
                  Introduction of the Compensatory Programmes and Academic
                  Support Services (COMPASS) program for academically
                  underprepared students.{" "}
                </li>
                <li>
                  Achieved institutional accreditation status from ACTT in 2010;
                  the first institution in the country to achieve this status
                </li>
                <li>
                  {" "}
                  Government approved funding for COSTAATT's first purpose-built
                  campus in Chaguanas in 2011.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </secton>
      <section id="enhance" className={standardStyles.sectionNoSidenav}>
        <h2
          className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
        >
          <span>ENHANCE</span> Teaching and Learning
        </h2>
        <div className={AboutStyles.bythenumbers}>
          <p
            className={`${standardStyles.headingTertiary} ${AboutStyles.headtext}`}
          >
            <span>Student Body </span>{" "}
          </p>
          <table>
            <tbody>
              {/* <tr>
                <td>Undergraduates</td>
                <td>2000 </td>
              </tr> */}
              <tr>
                <td className="studnet__type"> Male</td>
                <td className="cost">1500 </td>
              </tr>
              <tr>
                <td className="studnet__type">Female</td>
                <td className="cost">2500</td>
              </tr>
              <tr>
                <td className={AboutStyles.total}>Total from 2022-2023</td>
                <td className="cost">4000</td>
              </tr>
            </tbody>
          </table>

          <p
            className={`${standardStyles.headingTertiary} ${AboutStyles.headtext}`}
          >
            <span>Faculty and Staff </span>
          </p>
          <table className="about">
            <tbody>
              <tr>
                <td>Faculty (Full-time)</td>
                <td>2000 </td>
              </tr>
              <tr>
                <td className="studnet__type"> Faculty ( Part-time)</td>
                <td className="cost">1500 </td>
              </tr>
              <tr>
                <td className="studnet__type">Adjunct</td>
                <td className="cost">500</td>
              </tr>
              <tr>
                <td className={AboutStyles.total}>Total from 2022-2023</td>
                <td className="cost">300</td>
              </tr>
            </tbody>
          </table>
          <p
            className={`${standardStyles.headingTertiary} ${AboutStyles.headtext}`}
          >
            <span>Degrees Awarded</span>
          </p>
          <table className="about">
            <tbody>
              <tr>
                <td>Undergraduate</td>
                <td>2000 </td>
              </tr>
              <tr>
                <td className="studnet__type"> Associates</td>
                <td className="cost">1500 </td>
              </tr>
              <tr>
                <td className="studnet__type">Diploma</td>
                <td className="cost">500</td>
              </tr>
              <tr>
                <td className="studnet__type">Certificates</td>
                <td className="cost">500</td>
              </tr>
              <tr className={AboutStyles.total}>
                <td> Total as of 2022-2023</td>
                <td className="cost">300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default history;
