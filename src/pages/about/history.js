import React from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import AboutStyles from "@/styles/About.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
// import { useState } from "react";
// import { useEffect } from "react";


const history = () => {

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
        <div className={standardStyles.centertext}>
          <h3 className={standardStyles.headingSecondary}>
            {" "}
            <span>Our Motto </span>
          </h3>
          <p className={standardStyles.paragraph}>
            Transforming lives, Transforming communities,Transforming the
            Nation, One studnet at a time
          </p>
        </div>
        <div className={standardStyles.twoGridCon}>
          <div className={standardStyles.twoGridCol}>
            <h3 className={standardStyles.headingSecondary}> Our Mission</h3>
            <p className={standardStyles.paragraph}>
              To be the premier educational institution in providing
              high-quality, affordable and accessible educational programmes
              serving the needs of business, industry and the diverse campus
              communities and facilitating the personal and professional
              development of its students, faculty and staff.
            </p>
          </div>
          <div className={standardStyles.twoGridCol}>
            <h3 className={standardStyles.headingSecondary}> Our Vision</h3>
            <p className={standardStyles.paragraph}>
              To be a student-cantered, dynamic and innovative, world-class
              multi-campus college, promoting excellence in teaching and
              learning, serving diverse communities and producing lifelong
              learners who can compete globally.
            </p>
          </div>
        </div>{" "}
      </section>
      <section id="core" className={standardStyles.sectionNoSidenavFirst}>
        <div className={standardStyles.centertext}>
          <h3 className={standardStyles.headingSecondary}>Our Core Values</h3>
        </div>

        <div className={standardStyles.threeColGridCon}>
          <div className={standardStyles.threeColGrid}>
            <div className={standardStyles.bullet}>
              <ul>
                <li>Student-centerdness</li>
                <li>Excellence in teaching and learning</li>
                <li>Commitment to service excellence and customer care</li>
              </ul>
            </div>
          </div>
          <div className={standardStyles.threeColGrid}>
            <div className={standardStyles.bullet}>
              <ul>
                <li>Innovation and creativity</li>
                <li>Respect for others,teamwork and partnership</li>
                <li>Integrity,ethics and professionalism</li>
              </ul>
            </div>
          </div>
          <div className={standardStyles.threeColGrid}>
            <div className={standardStyles.bullet}>
              <ul>
                <li>Transparency and fairness in college operations</li>
                <li>Continuous learning and improvement</li>
                <li>Responsibility and Accountability</li>
              </ul>
            </div>
          </div>
        </div>

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

    
      </section>

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
          <span>Our</span> NUMBERS
        </h2>
        <div className={AboutStyles.bythenumbers}>
          <p
            className={`${standardStyles.headingTertiary} ${AboutStyles.headtext}`}
          >
            <span>Student Body </span>{" "}
          </p>


          
          <table>
            <tbody>
              <tr>
                <td> Male</td>
                <td> 1500 </td>
              </tr>
              <tr>
                <td>Female</td>
                <td>2500</td>
              </tr>
              <tr>
                <td className={AboutStyles.total}>Total from 2022-2023</td>
                <td>4000</td>
              </tr>
            </tbody>
          </table>

          <p
            className={`${standardStyles.headingTertiary} ${AboutStyles.headtext}`}
          >
            <span>Faculty and Staff </span>
          </p>
          <table>
            <tbody>
              <tr>
                <td>Faculty (Full-time)</td>
                <td>2000 </td>
              </tr>
              <tr>
                <td> Faculty ( Part-time)</td>
                <td>500 </td>
              </tr>
              <tr>
                <td>Adjunct</td>
                <td>250</td>
              </tr>
              <tr>
                <td className={AboutStyles.total}>Total from 2022-2023</td>
                <td>750</td>
              </tr>
            </tbody>
          </table>
          <p
            className={`${standardStyles.headingTertiary} ${AboutStyles.headtext}`}
          >
            <span>Degrees Awarded</span>
          </p>
          <table className={AboutStyles.numberstable}>
            <tbody>
              <tr>
                <td>Undergraduate</td>
                <td>2000 </td>
              </tr>
              <tr>
                <td> Associates</td>
                <td>1500 </td>
              </tr>
              <tr>
                <td>Diploma</td>
                <td>500</td>
              </tr>
              <tr>
                <td>Certificates</td>
                <td>500</td>
              </tr>
              <tr className={AboutStyles.total}>
                <td> Total as of 2022-2023</td>
                <td>300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default history;
