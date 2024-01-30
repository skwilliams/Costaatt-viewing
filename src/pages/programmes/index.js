import React from "react";
import ProgStyles from "../../styles/Programmes.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import HeadImage from "@/components/PageComponents/HeadImage";

import schoolImg from "../../../public/images/about/qualitycontrol1.jpg";
import headImg from "../../../public/images/about/qualitycontrol1.jpg";


import studyitems from "../../components/PageComponents/AreasStudyItems";

import topclass from "../../../public/images/schools/topclassLect.png";
import onlinelearnig from "../../../public/images/schools/onlineLearning.png";
import workReady from "../../../public/images/schools/workreadyGrads.png";
import creditTransfer from "../../../public/images/schools/creditTransfers.png";
import collegeCore from "../../../public/images/schools/collegeCore.png";
import affiliations from "../../../public/images/schools/affiliationsMou.png";
import accredited from "../../../public/images/schools/accreditedprog.png";
import standardStyles from "@/styles/main.module.scss";
import SchoolCard from "../../components/PageComponents/SchoolCard"


const progoverview = () => {
  console.log(studyitems);
  return (
    <>
      <Head>
        <title>Overview of Programmes </title>
      </Head>

      <HeadImage mainimage={headImg} />

      <p className={ProgStyles.headingprimarysub}>
        COSTAATT/Programmes/Overview{" "}
      </p>

      <section id="overview" className={ProgStyles.sectionoverview}>
        <div className={ProgStyles.umargintopsmall}>
          <h2
            className={`${standardStyles.newsHeading} ${standardStyles.centertext} `}
          >
            {" "}
            <span> Overview</span> of Programmes
          </h2>
          <p className={ProgStyles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo
            sed quae repellat blanditiis corrupti rerum quia voluptatem dolores,
            explicabo eius numquam, dolore incidunt reprehenderit aperiam, ad
            eos veniam unde. We are here for you Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia distinctio voluptatem a nemo
            quam, blanditiis quasi ipsa? Architecto aspernatur, esse eius id ut
            accusamus nihil ipsam nemo necessitatibus praesentium! Dolorem.
          </p>
        </div>
      </section>
      <section id="bynumbers" className={ProgStyles.sectionbythenumbers}>
        <div className={ProgStyles.umargintopsmall}>
          <h2
            className={`${standardStyles.newsHeading} ${standardStyles.centertext} ${standardStyles.whitefont}`}
          >
            By the<span> NUMBERS </span>{" "}
          </h2>
          <div className={ProgStyles.progGridCon}>
            <div className={ProgStyles.progGrid}>
              <h2 className={ProgStyles.bythenumbers}>20</h2>
              <p className={ProgStyles.bythenumbersheading}>Bachelors</p>
              <p className={ProgStyles.bythenumberstext}>
                In a wide range of areas
              </p>
              {/* <Link
                className={ProgStyles.explore}
                href="/programmes/allprogrammes"
              >
                {" "}
                View Bachelor Degrees →
              </Link> */}
            </div>
            <div className={ProgStyles.progGrid}>
              <h2 className={ProgStyles.bythenumbers}>24</h2>
              <p className={ProgStyles.bythenumbersheading}>Associates</p>
              <p className={ProgStyles.bythenumberstext}>
                Prepare you for Bachelor Degrees
              </p>
              {/* <Link
                className={ProgStyles.explore}
                href="/programmes/allprogrammes"
              >
                {" "}
                View Associate Degrees →
              </Link> */}
            </div>
            <div className={ProgStyles.progGrid}>
              <h2 className={ProgStyles.bythenumbers}>19</h2>
              <p className={ProgStyles.bythenumbersheading}>Certificates</p>
              <p className={ProgStyles.bythenumberstext}>
                {" "}
                A wide range available
              </p>
              {/* <Link
                className={ProgStyles.explore}
                href="/programmes/certificates"
              >
                {" "}
                View All Certificates →
              </Link> */}
            </div>
            <div className={ProgStyles.progGrid}>
              <h2 className={ProgStyles.bythenumbers}>7</h2>
              <p className={ProgStyles.bythenumbersheading}>Diplomas</p>
              <p className={ProgStyles.bythenumberstext}>
                {" "}
                knowledge packed & Quick
              </p>
              {/* <Link
                className={ProgStyles.explore}
                href=" /programmes/allprogrammes"
              >
                {" "}
                View All Diploma →
              </Link> */}
            </div>
          </div>
          <p />
        </div>
      </section>
      <section id="whychoose" className={ProgStyles.sectionwhychoose}>
        <div className={ProgStyles.umargintopsmall}>
          <h2
            className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
          >
            <span> WHY </span> Choose Us{" "}
          </h2>
          <div className={ProgStyles.progGridCon}>
            <div className={ProgStyles.progGrid}>
              <Image
                className={ProgStyles.whychooseimg}
                src={topclass}
                alt="page image"
              />
              <p className={ProgStyles.whychoosetext}>Top Class Lecturers</p>
            </div>
            <div className={ProgStyles.progGrid}>
              <Image
                className={ProgStyles.whychooseimg}
                src={accredited}
                alt="page image"
              />
              <p className={ProgStyles.whychoosetext}>Accredited Programmes</p>
            </div>
            <div className={ProgStyles.progGrid}>
              <Image
                className={ProgStyles.whychooseimg}
                src={workReady}
                alt="page image"
              />
              <p className={ProgStyles.whychoosetext}>Work Ready Graduates</p>
            </div>
            <div className={ProgStyles.progGrid}>
              <Image
                className={ProgStyles.whychooseimg}
                src={creditTransfer}
                alt="page image"
              />
              <p className={ProgStyles.whychoosetext}>Credit Transfers</p>
            </div>
          </div>
          <p />
        </div>
      </section>
      <section id="allschools" className={ProgStyles.sectionallschools}>
        <p className={ProgStyles.headingprimary}> All Schools</p>

        <SchoolCard
          image={schoolImg}
          schoolname="School of Business and Digital Technologies"
          intro="The School of Business and Digital Technologies provides access to a world-class and work-relevant education, focused on achieving institutional and national goals of workforce development. The School of Business and Digital Technologies comprises two (2) schools, the Department of ICTs and Digital Technologies and the Department of Management and Digital Entrepreneurship. These departments provide the public with a range of academic services to meet a growing number of careers and opportunities locally, regionally, and globally. 
                "
          linkpage="/programmes/schools/busIT"
          shortname="SBDT"
        />
        <SchoolCard
          image={schoolImg}
          schoolname=" School of Liberal Arts, Education and Digital Humanities "
          intro="The School of Liberal Arts, Education, and Digital Humanities produces a diverse range of graduates with varying skills and competencies in the disciplines of education, mathematics, psychology, social work, sociology, criminal justice, and in general, graduates who can make great contributions towards enhancing the social and behavioural development of the nation. To achieve this objective, we constantly scan the environment to ensure that our programmes are innovative and relevant to the needs of our society."
          // linkpage="/programmes/schools/liberal"
          linkpage="#"
          shortname="SLAEDH"
        />
        <SchoolCard
          image={schoolImg}
          schoolname="The School of Workforce Enhancement and Development  "
          intro="The School of Workforce Enhancement and Development (SWED) is committed to opening doors by providing expanded access to educational opportunities and experiences at COSTAATT.  With both credit and non-credit based options, SWED delivers a variety of short term, flexible programming focused on skill and professional development, academic preparation, and foreign language services.  The School serves a diverse population ranging from individuals seeking alternative paths to tertiary education, to individuals seeking to upskill themselves personally or professionally, and business enterprises seeking to support and develop their human resources. 
   "
          // linkpage="/programmes/schools/workF"
          linkpage="#"
          shortname="SWED"
        />
        <SchoolCard
          image={schoolImg}
          schoolname="School of Nursing, Health and Medical Technologies "
          intro="lorem ispsum isdf Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo sed
    quae repellat blanditiis corrupti rerum quia voluptatem dolores, explicabo
    eius numquam, dolore incidunt reprehenderit aperiam, ad eos veniam unde.
    We are here for you Lorem ipsum dolor sit amet consectetur adipisicing
   "
          // linkpage="/programmes/schools/nursing"
          linkpage="#"
          shortname="SNHM"
        />
        <SchoolCard
          image={schoolImg}
          schoolname="The Ken Gordon School of Communication, Creative and Digital Media "
          intro="Are you interested in journalism, corporate communications or public relations? Is graphic design,
            photography, advertising and promotions, or film and video production your passion? Do you want to become fluent in a foreign language, understand Latin American culture, communicate via music, play an instrument, write short stories or have a better understanding of our heritage and oral history?
The Ken Gordon School of Communication Creative and Digital Media's dedicated, qualified and experienced faculty will enlighten you and provide you with every opportunity to realise your dream or ambition. We train students to be innovative, responsible and knowledgeable consumers and creators of content.

   "
          // linkpage="/programmes/schools/kengord"
          linkpage="#"
          shortname="KGSC"
        />
        <SchoolCard
          image={schoolImg}
          schoolname="School of Environment, Circular Economy and Sustainability  "
          intro="Established in early 2023, the School of Environment, Circular Economy and Sustainability was created in response to the global necessity to prepare graduates to support a circular economy and be dynamic advocates of sustainability principles. Our students are equipped with the knowledge and skills to tackle climate change, conserve biodiversity, and foster economic resilience. With the collaborative efforts of our two departments, the Department of Environmental and Sustainability Studies and the Department of Natural and Life Sciences, we provide programmes, opportunities for research, and practical community experience that emphasize sustainable practices to reduce waste, optimize resource utilization and restore natural systems.
   "
          // linkpage="/programmes/schools/enviro"
          linkpage="#"
          shortname="SECE"
        />
      </section>
      {/* <section id="areastudy" className={ProgStyles.sectionareasofstudy}>
        <div className={ProgStyles.umargintopsmall}>
          <h2
            className={`${standardStyles.newsHeading} ${standardStyles.centertext} ${standardStyles.whitefont}`}
          >
            {" "}
            Areas of <span> STUDY </span>{" "}
          </h2>
          <p className={ProgStyles.umargintopsmall}></p>
          <div className={ProgStyles.row}>
            <div className={ProgStyles.col1of6}>
              <Link href="#">
                School of Nursing, Health and Medical Technologies
              </Link>

              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">District Health Visiting</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Medical Lab Technology</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Midwifery</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Nursing</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Pharmacy Assistant</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Phlebotomy</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Radiography</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Sonography for Midwives</Link>
                </li>
              </ul>
            </div>
            <div className={ProgStyles.col1of6}>
              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Criminal Justice</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Early Childhood Care and Education</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Mathematics</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Psychology</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Social Work</Link>{" "}
                </li>
              </ul>
            </div>
            <div className={ProgStyles.col1of6}>
              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Biology</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Emergency Care</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Environmental Health</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Natural and Life Science</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Occupational Safety and Health</Link>{" "}
                </li>
              </ul>
            </div>
            <div className={ProgStyles.col1of6}>
              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Advertising and Promotions</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Films and Video Production</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Graphic Design</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Journalism and PR</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Literatues in English</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Mass Communications</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Music</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Spanish</Link>
                </li>
              </ul>
            </div>
            <div className={ProgStyles.col1of6}>
              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Accounting</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Business Administration</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Entrepreneurship</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Human Resources</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Information Technology</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Library Studies</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Marketing</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Networking</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Supervisory Management</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Records Management</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Web Development</Link>
                </li>
              </ul>
            </div>
            <div className={ProgStyles.col1of6}>
              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Corporate and Upskilling Training</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">
                    Customized Workshops and Short Courses
                  </Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Professional Development</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Translation and Interpretation Services</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">CollegeStartTT Programme</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      <section id="highlight" className={ProgStyles.sectionhighlights}>
        <div className={ProgStyles.umargintopsmall}>
          <h2 className={standardStyles.newsHeading}> Highlights </h2>
          <div className={ProgStyles.threeColGridCon}>
            <div className={ProgStyles.threeColGrid}>
              <Image
                className={ProgStyles.whychooseimg}
                src={collegeCore}
                alt="page image"
              />

              <p className={ProgStyles.highlightheading}>College Core</p>
              <p className={ProgStyles.highlighttext}>
                In a wide range of areas
              </p>
              <Link
                className={ProgStyles.explore}
                href="/programmes/allprogrammes"
              >
                {" "}
                View All Programmes
              </Link>
            </div>
            <div className={ProgStyles.threeColGrid}>
              <Image
                className={ProgStyles.whychooseimg}
                src={affiliations}
                alt="page image"
              />

              <p className={ProgStyles.highlightheading}>
                Affiliations and MOU
              </p>
              <p className={ProgStyles.highlighttext}>
                Prepare you for Bachelor Degrees
              </p>
              <Link
                className={ProgStyles.explore}
                href="/programmes/allprogrammes"
              >
                {" "}
                View Associate Degrees →
              </Link>
            </div>
            <div className={ProgStyles.threeColGrid}>
              <Image
                className={ProgStyles.whychooseimg}
                src={onlinelearnig}
                alt="page image"
              />

              <p className={ProgStyles.highlightheading}>Online Learning </p>
              <p className={ProgStyles.highlighttext}>
                {" "}
                A wide range available
              </p>
              {/* <Link
                className={ProgStyles.explore}
                href="/programmes/allprogrammes"
              >
                {" "}
                More Info →
              </Link> */}
            </div>
          </div>
          <p />
        </div>
      </section>
    </>
  );
};

export default progoverview;
