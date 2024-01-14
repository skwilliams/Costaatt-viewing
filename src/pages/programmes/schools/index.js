import React from "react";
import ProgStyles from "../../../styles/Programmes.module.scss";
import visitus from "../../../../images/Programmes/visit-home-v2.jpg";
import SchoolCard from "../../../components/PageComponents/SchoolCard";
import SchoolImage from "../../../../images/Links/campus 1.jpg";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import HeadImage from "@/components/PageComponents/HeadImage";
import headImg from "../../../../images/Programmes/tester2.jpg";

const schools = () => {
  return (
    <>
      <Head>
        <title>Schools</title>
      </Head>

      <HeadImage imagetext="Schools" mainimage={headImg} />

      <section id="overview" className={ProgStyles.sectionoverview}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}> Overview of Schools</p>
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

      <section id="allschools" className={ProgStyles.sectionallschools}>
        <p className={ProgStyles.headingprimary}> All Schools</p>

        <SchoolCard
          image={SchoolImage}
          schoolname="School of Business and Digital Technologies"
          intro="The School of Business and Digital Technologies provides access to a world-class and work-relevant education, focused on achieving institutional and national goals of workforce development. The School of Business and Digital Technologies comprises two (2) schools, the Department of ICTs and Digital Technologies and the Department of Management and Digital Entrepreneurship. These departments provide the public with a range of academic services to meet a growing number of careers and opportunities locally, regionally, and globally. 
                "
          linkpage="/programmes/schools/busIT"
          shortname="SBDT"
        />
        <SchoolCard
          image={SchoolImage}
          schoolname=" School of Liberal Arts, Education and Digital Humanities "
          intro="The School of Liberal Arts, Education, and Digital Humanities produces a diverse range of graduates with varying skills and competencies in the disciplines of education, mathematics, psychology, social work, sociology, criminal justice, and in general, graduates who can make great contributions towards enhancing the social and behavioural development of the nation. To achieve this objective, we constantly scan the environment to ensure that our programmes are innovative and relevant to the needs of our society."
          linkpage="/programmes/schools/liberal"
          shortname="SLAEDH"
        />
        <SchoolCard
          image={SchoolImage}
          schoolname="The School of Workforce Enhancement and Development  "
          intro="The School of Workforce Enhancement and Development (SWED) is committed to opening doors by providing expanded access to educational opportunities and experiences at COSTAATT.  With both credit and non-credit based options, SWED delivers a variety of short term, flexible programming focused on skill and professional development, academic preparation, and foreign language services.  The School serves a diverse population ranging from individuals seeking alternative paths to tertiary education, to individuals seeking to upskill themselves personally or professionally, and business enterprises seeking to support and develop their human resources. 
   "
          linkpage="/programmes/schools/workF"
          shortname="SWED"
        />
        <SchoolCard
          image={SchoolImage}
          schoolname="School of Nursing, Health and Medical Technologies "
          intro="lorem ispsum isdf Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo sed
    quae repellat blanditiis corrupti rerum quia voluptatem dolores, explicabo
    eius numquam, dolore incidunt reprehenderit aperiam, ad eos veniam unde.
    We are here for you Lorem ipsum dolor sit amet consectetur adipisicing
   "
          linkpage="/programmes/schools/nursing"
          shortname="SNHM"
        />
        <SchoolCard
          image={SchoolImage}
          schoolname="The Ken Gordon School of Communication, Creative and Digital Media "
          intro="Are you interested in journalism, corporate communications or public relations? Is graphic design,
            photography, advertising and promotions, or film and video production your passion? Do you want to become fluent in a foreign language, understand Latin American culture, communicate via music, play an instrument, write short stories or have a better understanding of our heritage and oral history?
The Ken Gordon School of Communication Creative and Digital Media's dedicated, qualified and experienced faculty will enlighten you and provide you with every opportunity to realise your dream or ambition. We train students to be innovative, responsible and knowledgeable consumers and creators of content.

   "
          linkpage="/programmes/schools/kengord"
          shortname="KGSC"
        />
        <SchoolCard
          image={SchoolImage}
          schoolname="School of Environment, Circular Economy and Sustainability  "
          intro="Established in early 2023, the School of Environment, Circular Economy and Sustainability was created in response to the global necessity to prepare graduates to support a circular economy and be dynamic advocates of sustainability principles. Our students are equipped with the knowledge and skills to tackle climate change, conserve biodiversity, and foster economic resilience. With the collaborative efforts of our two departments, the Department of Environmental and Sustainability Studies and the Department of Natural and Life Sciences, we provide programmes, opportunities for research, and practical community experience that emphasize sustainable practices to reduce waste, optimize resource utilization and restore natural systems.
   "
          linkpage="/programmes/schools/enviro"
          shortname="SECE"
        />
      </section>
      <section id="areastudy" className={ProgStyles.sectionareasofstudy}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}> Areas of Study </p>
          <p className={ProgStyles.umargintopsmall}></p>
          <div className={ProgStyles.areasofSGridCon}>
            <div className={ProgStyles.areasofSGrid}>
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
            <div className={ProgStyles.areasofSGrid}>
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
            <div className={ProgStyles.areasofSGrid}>
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
            <div className={ProgStyles.areasofSGrid}>
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
            <div className={ProgStyles.areasofSGrid}>
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
            <div className={ProgStyles.areasofSGrid}>
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
      </section>

      <section id="apply" className={ProgStyles.sectionapply}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}> Apply Now </p>
          <div className={ProgStyles.threeColGridCon}>
            <div className={ProgStyles.threeColGrid}>
              <Image
                className={ProgStyles.applyimages}
                src={visitus}
                alt="page image"
              />

              <p className={ProgStyles.applyheading}>Visit us </p>
              <p className={ProgStyles.applytext}>Schedule a tour</p>
              <Link className={ProgStyles.goto} href="#">
                {" "}
                Make an appointment
              </Link>
            </div>
            <div className={ProgStyles.threeColGrid}>
              <Image
                className={ProgStyles.applyimages}
                src={visitus}
                alt="page image"
              />

              <p className={ProgStyles.applyheading}>Have Qeustions ?</p>
              <p className={ProgStyles.applytext}>
                Speak to an Admission Councillor
              </p>
              <Link className={ProgStyles.goto} href="#">
                {" "}
                Book an appointment with a councillor →
              </Link>
            </div>
            <div className={ProgStyles.threeColGrid}>
              <Image
                className={ProgStyles.applyimages}
                src={visitus}
                alt="page image"
              />

              <p className={ProgStyles.applyheading}>Apply Now </p>
              <p className={ProgStyles.applytext}>
                {" "}
                Ready to start your journey.
              </p>
              <Link className={ProgStyles.goto} href="/admissions/howtoapply">
                {" "}
                Apply Now →
              </Link>
            </div>
          </div>
          <p />
        </div>
      </section>
    </>
  );
};

// schools.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>
// }
export default schools;
