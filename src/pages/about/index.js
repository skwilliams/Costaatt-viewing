import React from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import costlifeStyles from "@/styles/CostaattLife.module.css";
import DeanStyles from "@/styles/Dean.module.scss";
import AboutStyles from "@/styles/About.module.scss";

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
import gal1 from "../../../public/images/costaattlife/lab1.jpg";
import gal2 from "../../../public/images/costaattlife/lab2.jpg";
import gal3 from "../../../public/images/costaattlife/lab3.jpg";
import gal4 from "../../../public/images/costaattlife/lab4.jpg";
import gal5 from "../../../public/images/costaattlife/lab5.jpg";
import gal6 from "../../../public/images/costaattlife/lab6.jpg";
import gal7 from "../../../public/images/costaattlife/lab7.jpg";
import gal8 from "../../../public/images/costaattlife/lab8.jpg";
import gal9 from "../../../public/images/costaattlife/lab9.jpg";
import gal10 from "../../../public/images/costaattlife/lab10.jpg";
import gal11 from "../../../public/images/costaattlife/lab11.jpg";
import gal12 from "../../../public/images/costaattlife/lab12.jpg";

import gal13 from "../../../public/images/costaattlife/lab13.jpg";
import gal14 from "../../../public/images/costaattlife/lab14.jpg";
import ReactPlayer from "react-player";

import GradStyle from "../../styles/GradsSpeak.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import FacultyStaffCard from "@/components/PageComponents/FacultyStaffDepCard";
import DeanCard from "@/components/PageComponents/StaffCard";
import president from "../../../public/images/about/president.jpg"

const index = () => {
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
        <title>About |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="Profile at a Glance" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about"></Link>
        <Link href="/about">About</Link>
      </p>

      <section id="glance" className={standardStyles.sectionNoSidenavFirst}>
       <div className={AboutStyles.aboutbackColor}>

 <h2 className={`${standardStyles.newsHeadingwhite} ${standardStyles.newsHeading}`}>
          
          <span> The Premier</span> Undergraduate College{" "}
        </h2>
        <p className={`${standardStyles.paragraph} ${standardStyles.text2columns}`}>
          {" "}
          COSTTAATT was established in October 2000 by an Acto of Parliament(Act No. 77 of 2000) with the purpose of contrib

        </p>


       </div>
       
       
       

  
      </section>
      <section id="schools" className={`${standardStyles.sectionNoSidenav}`}>
        <h2 className={standardStyles.newsHeading}>
          {" "}
          IT <span> Services</span>
        </h2>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <h3 className={standardStyles.headingTertiary}>
              {" "}
              E <span> CLASSROOM</span>{" "}
            </h3>

            <p className={standardStyles.paragraph}>
              COSTAATT is committed to embracing the best in technology in order
              to aid and improve classroom interaction and learning, and to
              expand access to students who may not be able to attend classes at
              one of our campuses or sites. The College's e-classroom allows
              lecturers to deliver instruction, manage student discussions,
              administer quizzes and examinations, and provide immediate
              feedback on performance to students in a secure internet-based
              environment.
              <br />
              Some faculty utilise the e-classroom to facilitate online class
              discussions or to post class notes to enhance face-to-face
              courses. Others use the environment to offer fully online or
              blended courses
            </p>

            <button
              className={`${standardStyles.btn} ${standardStyles.btn__purple}`}
              href="https://id.quicklaunch.io/authenticationendpoint/login.do?RelayState=https%3A%2F%2Fneo.costaatt.edu.tt%2Fmoodle%2Fauth%2Fsaml2%2Flogin.php%3Fwants%3Dhttps%253A%252F%252Fneo.costaatt.edu.tt%252Fmoodle%252F%26idp%3Db18b43740bff764c3f6d498fa8478bf8%26passive%3Doff&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=DslEDwRkOPfUoXi9kd5jk6d2vrSGY2hlB3B%2Fw1L6K13YH35gfdMIOns9t0h1EEUVc3z4LegTSPD%2F04f9lX5lLeNIt9c2uz%2B3kZfYdsqQf2Ooac69qG42%2FYIx9c%2FcUd6RY9b5l4y86auqGRFHtDQMCT9b0qXiPIMAN%2B%2FCqJLBja%2BFOr%2FPOJ8bHaPAx2pjRyUESgv7UxcbMBhIVZA7dEjBH5JFw0N62kVZDo8a2loOFxkEsQaAoa5npx2coFx5bEBEbNm0HwjyAjHfNPbPpiLoUonH7L6OAA6TfmzgbimyuyB%2BdxCRmzPKdaGSm%2FTShAKqZbAs3Kz7adWen8EYkObZhQ%3D%3D&commonAuthCallerPath=%2Fsamlsso&forceAuth=false&passiveAuth=false&tenantDomain=costaatt.edu.tt&sessionDataKey=5baa01b1-09ef-4fc9-9e06-a7cc2a9c6e4a&relyingParty=https%3A%2F%2Fneo.costaatt.edu.tt%2Fmoodle%2Fauth%2Fsaml2%2Fsp%2Fmetadata.php&type=samlsso&sp=Moodle+Prod&isSaaSApp=false&authenticators=BasicAuthenticator:LOCAL"
            >
              Access E-ClassRoom
            </button>
          </div>
          <div className={standardStyles.col1of2}>
            <h3 className={standardStyles.headingTertiary}>
              Help<span>DESK</span>
            </h3>
            <div
              className={`${standardStyles.featurebox__text} ${standardStyles.bullet}`}
            >
              <p className={standardStyles.paragraph}>
                As a student, the Information Technology Help Desk is the single
                point of contact for all enquiries and requests for assistance
                related to:
              </p>
              <ul>
                <li>
                  Password resets for Windows login (lab PC's) and the
                  myCOSTAATT web portal
                </li>
                <li>Lab and application support</li>
                <li>Printing support and maintenance</li>
                <li>Internet access</li>
                <li>Email accounts and access</li>
                <li>Scanning services</li>
                <li>Hardware and software installation</li>
              </ul>
            </div>
          </div>{" "}
          {/*close col 1 of 2 */}
        </div>{" "}
        {/* close row */}
      </section>

      <section id="president" className={DeanStyles.sectionmeetthedean}>
        <div className={standardStyles.marginTopSmall}>
          <h2
            className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
          >
            {" "}
            <span> MESSAGE</span> from the President{" "}
          </h2>
          <div className={DeanStyles.deanColGridCon}>
            <div className={DeanStyles.deanColGrid}>
              <Image
                className={DeanStyles.deanimg}
                src={president}
                alt="Picture of the president"
                width={300}
                height={200}
              />
            </div>

            <div className={DeanStyles.deanColGrid}>
              <p className={DeanStyles.deanwords}>
                <q>
                  Welcome to the College of Science, Technology and Applied Arts
                  of Trinidad and Tobago. At COSTAATT, we are strongly committed
                  to the principle of transforming lives, transforming
                  communities and transforming the nation …one student at a
                  time. Inherent in our institutional philosophy and a key
                  component of our educational.
                </q>
                Read more ...
              </p>
            </div>
            <div className={DeanStyles.deanColGrid}>
              <div className={DeanStyles.deancontact}>
                <p>
                  <span className={DeanStyles.standout}>Dr. Keith Nurse</span>{" "}
                  <br /> President, <br />
                  COSTAATT
                  <br />
                  <a
                    className={DeanStyles.standout}
                    href="mailto:knurse@costaatt.edu.tt"
                  >
                    knurse@costaatt.edu.tt
                  </a>{" "}
                  <br />
                  625-5030 ext 1111
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bythenumbers" className={standardStyles.sectionNoSidenav}>
        <h2
          className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
        >
          By the <span>NUMBERS</span>
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
                <td > Total as of 2022-2023</td>
                <td className="cost">300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default index;
