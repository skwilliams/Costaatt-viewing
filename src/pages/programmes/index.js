import React from "react";
import ProgStyles from "../../styles/Programmes.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import HeadImage from "@/components/PageComponents/HeadImage";
import headImg from "../../../public/images/schools/overviewProgrammes header.jpg";
import studyitems from "../../components/PageComponents/AreasStudyItems";

import topclass from "../../../public/images/schools/topclassLect.png";
import onlinelearnig from "../../../public/images/schools/onlineLearning.png";
import workReady from "../../../public/images/schools/workreadyGrads.png";
import creditTransfer from "../../../public/images/schools/creditTransfers.png";
import collegeCore from "../../../public/images/schools/collegeCore.png";
import affiliations from "../../../public/images/schools/affiliationsMou.png";
import accredited from "../../../public/images/schools/accreditedprog.png";
import standardStyles from "@/styles/main.module.scss";

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
              <Link
                className={ProgStyles.explore}
                href="/programmes/allprogrammes"
              >
                {" "}
                View Bachelor Degrees →
              </Link>
            </div>
            <div className={ProgStyles.progGrid}>
              <h2 className={ProgStyles.bythenumbers}>24</h2>
              <p className={ProgStyles.bythenumbersheading}>Associates</p>
              <p className={ProgStyles.bythenumberstext}>
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
            <div className={ProgStyles.progGrid}>
              <h2 className={ProgStyles.bythenumbers}>19</h2>
              <p className={ProgStyles.bythenumbersheading}>Certificates</p>
              <p className={ProgStyles.bythenumberstext}>
                {" "}
                A wide range available
              </p>
              <Link
                className={ProgStyles.explore}
                href="/programmes/certificates"
              >
                {" "}
                View All Certificates →
              </Link>
            </div>
            <div className={ProgStyles.progGrid}>
              <h2 className={ProgStyles.bythenumbers}>7</h2>
              <p className={ProgStyles.bythenumbersheading}>Diplomas</p>
              <p className={ProgStyles.bythenumberstext}>
                {" "}
                knowledge packed & Quick
              </p>
              <Link
                className={ProgStyles.explore}
                href=" /programmes/allprogrammes"
              >
                {" "}
                View All Diploma →
              </Link>
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
      <section id="areastudy" className={ProgStyles.sectionareasofstudy}>
        <div className={ProgStyles.umargintopsmall}>
          <h2
            className={`${standardStyles.newsHeading} ${standardStyles.centertext} ${standardStyles.whitefont}`}
          >
            {" "}
            Areas of <span> STUDY </span>{" "}
          </h2>
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
                View Bachelor Degrees →
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
              <Link
                className={ProgStyles.explore}
                href="/programmes/allprogrammes"
              >
                {" "}
                More Info →
              </Link>
            </div>
          </div>
          <p />
        </div>
      </section>
    </>
  );
};

export default progoverview;
