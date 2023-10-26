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

const profile = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const video = "";
  return (
    <>
      <Head>
        <title>Profile |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="Instiutional Profile" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/profile">Profile</Link>
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

      <section id="achieve" className={standardStyles.sectionbackColor}>
        <div className={standardStyles.marginTopSmall}>
          <h2
            className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
          >
            {" "}
            MILESTONE & <span> ACHIEVEMENTS</span>
          </h2>

          <div className={AboutStyles.timeline}>
            <div className={`${AboutStyles.container} ${AboutStyles.left}`}>
              <div className={AboutStyles.content}>
                <h2>1998 : The Early Years</h2>
                <p>
                  There was an emphasis on aligning all of the programme
                  offerings to the North American credit-based system to
                  facilitate horizontal transfer among the institutions. In
                  addition, the College worked towards introducing the associate
                  degree with its distinctive general education component to
                  enhance the quality of the existing technical diplomas. This
                  period also saw the introduction of the College Prep programme
                  which catered to students who needed additional support to
                  strengthen their academic foundations in English and
                  Mathematics, in order to pursue tertiary level studies.
                </p>
              </div>
            </div>
            <div className={`${AboutStyles.container} ${AboutStyles.right}`}>
              <div className={AboutStyles.content}>
                <h2>2000</h2>
                <p>
                  {" "}
                  When COSTAATT was formally established in 2000, its programmes
                  reflected the full spectrum of a comprehensive community
                  college, including engineering, agriculture, nursing and
                  allied health sciences, business and information technologies,
                  foreign languages, environmental studies, criminal justice,
                  social and behavioural sciences, and the performing arts.
                  Through the College Prep programme, the College had also
                  established a mechanism for the seamless movement from
                  vocational training in the trades to
                  technical/technologist/para-professional training at the
                  associate degree level. This mechanism was critical to
                  empowering the national education system to deliver on one of
                  its primary functions: to facilitate socio-economic mobility
                  for its citizens, a key recommendation of the Ministry of
                  Education's White Paper (1993-2003).
                </p>
              </div>
            </div>
            <div className={`${AboutStyles.container} ${AboutStyles.left}`}>
              <div className={AboutStyles.content}>
                <h2>2002</h2>

                <p>
                  {" "}
                  Although the College had been legally established as a body
                  corporate in October 2000, no Board of Trustees was appointed
                  to govern the College until September 2002. From 2000-2002
                  therefore, the nascent community college sought to maintain
                  its momentum in an environment of uncertainty. The CCIT,
                  continued its work in planning for the ongoing development of
                  the College, as several studies conducted then reflected the
                  need for the region to significantly expand its capacity to
                  produce graduates at the technician/para-professional
                  /technologist /mid-managerial level to drive economic
                  diversification and development.
                </p>
              </div>
            </div>
            <div className={`${AboutStyles.container} ${AboutStyles.right}`}>
              <div className={AboutStyles.content}>
                <h2>2004</h2>
                <p>
                  In the period following 2002 – early 2004, a new vision for
                  the development of the tertiary education sector in Trinidad
                  and Tobago resulted in the establishment of the University of
                  Trinidad and Tobago (UTT). In support of this initiative, the
                  John S. Donaldson Technical Institute, the San Fernando
                  Technical Institute and the Eastern Caribbean Institute of
                  Agriculture and Forestry (ECIAF) were transferred from
                  COSTAATT to the UTT. The Metal Industries Company Limited
                  (MIC) was not absorbed by either COSTAATT or UTT and therefore
                  operated independently, and the Government Vocational Centre
                  (GVC) was placed under the jurisdiction of MIC.
                  
                  </p>  <p> COSTAATT was
                  left with a reduced range of programme offerings, drawn from
                  the six NIHERST teaching colleges (Information Technology
                  College, College of Nursing, College of Health Sciences,
                  School of Languages, Business Management and General Education
                  Divisions) and the Joint Services Staff College.
                </p>
              </div>
            </div>
            <div className={`${AboutStyles.container} ${AboutStyles.left}`}>
              <div className={AboutStyles.content}>
                <h2>2011</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className={`${AboutStyles.container} ${AboutStyles.right}`}>
              <div className={AboutStyles.content}>
                <h2>2007</h2>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default profile;
