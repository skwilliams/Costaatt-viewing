import React from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "../../styles/main.module.scss";
import costlifeStyles from "../../styles/CostaattLife.module.css";
import AdmisStyles from "../../styles/Admissions.module.scss";

import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import hours from "../../../public/images/admissions/businesshours.svg";

import HeadImage from "../../components/PageComponents/HeadImage";
import awaitingbanner from "../../../public/images/about/qualitycontrol1.jpg";

import Image from "next/image";

import gal1 from "../../../public/images/costaattlife/lab1.jpg";
import gal2 from "../../../public/images/costaattlife/lab2.jpg";
import gal3 from "../../../public/images/costaattlife/lab3.jpg";
import gal4 from "../../../public/images/costaattlife/lab4.jpg";

import { useState } from "react";
import { useEffect } from "react";

const Itfacilities = () => {
  const [setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow;
    }
  }, [setHasWindow]);
  // const video = "";
  return (
    <>
      <Head>
        <title>IT Facilities</title>
      </Head>
      <HeadImage mainimage={awaitingbanner} imagetext="" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/costaattlife">COSTAATTLIFE/</Link>
        <Link href="/costaattlife/Itfacilities">IT Facilites</Link>
      </p>

      <header>
        <span className={standardStyles.heading_primary__main}>
          IT Facilities
        </span>
        <span className={standardStyles.heading_primary__sub}>
          State-of-the-art computer lab facilities (MAC and PC) are available to
          students
        </span>
      </header>

      <section
        id="labs"
        className={`${costlifeStyles.sectionambasadoor}   ${standardStyles.marginTopHuge}  ${standardStyles.marginBottomBig}`}
      >
        {" "}
        <h2
          className={`${standardStyles.heading_primary__secondary} ${standardStyles.centertext}`}
        >
          Computer Labs
        </h2>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <p className={standardStyles.paragraph}>
              State-of-the-art computer lab facilities (MAC and PC) are
              available to students at all of the College's campuses and sites,
              for both instructional and open access purposes. All computer labs
              have Internet connectivity and are installed with the latest
              computer software. COSTAATT is currently a Microsoft Academic
              licensed institution and students may purchase Microsoft software
              from the College for their personal use, at a minimal fee. In
              addition, the College has outfitted several special purpose labs
              which are designed to ensure that students acquire the necessary
              discipline-specific practical skills for the workplace.
              <br />
            </p>

            {/* <p className={standardStyles.paragraph}>
              To become a Student Ambassador... </p>
              <div>   
              <button
                href="#contact"
                className={`${standardStyles.btn} ${standardStyles.btn__purple}`}
              >
                {" "}
                contact student life{" "}
              </button>{" "}</div> */}

            {/* <Link href="./transfercredits" className={standardStyles.btnText}>
              Learn more →
            </Link> */}
          </div>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.composition}>
              <>
                <Image
                  // srcSet="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 1"
                  width="250"
                  height="0"
                  className={`${standardStyles.composition__photo} ${standardStyles.composition__photo_p1} `}
                  src={gal1}
                />

                <Image
                  // srcSet="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 2"
                  width="250"
                  height="0"
                  className={` ${standardStyles.composition__photo} ${standardStyles.composition__photo_p2}`}
                  src={gal2}
                />

                <Image
                  // srcSet="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 3"
                  width="250"
                  height="0"
                  className={`${standardStyles.composition__photo} ${standardStyles.composition__photo_p3}`}
                  src={gal3}
                />
              </>
            </div>
          </div>
        </div>{" "}
      </section>

      <section
        id="services"
        className={`${costlifeStyles.sectionbackGreyColor}`}
      >
       
        <h2
          className={`${standardStyles.heading_primary__secondary} ${standardStyles.centertext}`}
        >
          IT Services
        </h2>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <h3 className={standardStyles.heading_primary__tertiary}>
              {" "}
              E Classroom
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
            <h3 className={standardStyles.heading_primary__tertiary}>
              {" "}
              Help Desk
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

      <section id="locations" className={standardStyles.sectionbackGreyColor}>
        <div
          className={`${standardStyles.sectionbackGreyColor} ${standardStyles.marginBottomBig} ${standardStyles.marginTopBig}`}
        >
          <h2
            className={`${standardStyles.heading_primary__secondary} ${standardStyles.centertext}`}
          >
            Locations
          </h2>{" "}
          <div className={standardStyles.row}>
            <div className={standardStyles.col1of4}>
              <h3 className={costlifeStyles.opening__campus}>
                <span> Chaguanas Campus </span>
              </h3>
              <br />
              <p className={costlifeStyles.opening__location}>
                Pierre Road Connector Chaguanas
              </p>
              <div className={standardStyles.marginBottomSmall}>
                <span className={costlifeStyles.opening__time}>
                  Level 1 <br />
                </span>
              </div>
            </div>

            <div className={standardStyles.col1of4}>
              <h3 className={costlifeStyles.opening__campus}>
                <span> City Campus </span>
              </h3>

              <p className={costlifeStyles.opening__location}>
                9-11 Melville Lane <br />
                Port of Spain
              </p>
              <div>
                <span className={costlifeStyles.opening__time}>
                  Level 2 <br />
                </span>
              </div>
              <br />
            </div>
            <div className={standardStyles.col1of4}>
              <h3 className={costlifeStyles.opening__campus}>
                <span> South Campus </span>
              </h3>

              <p className={costlifeStyles.opening__location}>
                40-44 Sutton Street <br />
                San Fernando{" "}
              </p>
              <div>
                <span className={costlifeStyles.opening__time}>
                  Level 3 <br />
                </span>
                <br />

                <br />
              </div>
            </div>
            <div className={standardStyles.col1of4}>
              <div>
                <h3 className={costlifeStyles.opening__campus}>
                  <span> North Learning Center </span>
                </h3>

                <p className={costlifeStyles.opening__location}>
                  6 Alcazar Street,
                  <br /> St. Clair <br />
                  Port of Spain <br />{" "}
                </p>

                <div>
                  <span className={costlifeStyles.opening__time}>
                    Level 2<br />
                  </span>
                </div>
              </div>
            </div>
          </div>{" "}
          {/*end of row*/}
        </div>
      </section>

      <section id="contact" className={standardStyles.sectionNoSidenav}>
        <h2
          className={`${standardStyles.heading_primary__secondary} ${standardStyles.centertext}`}
        >
          Contact IT Services
        </h2>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}>
            <h3 className={costlifeStyles.opening__campus}>
              <span> Telephone Contact </span>
            </h3>

            <div className={costlifeStyles.opening__contact}>
              <Image
                className={AdmisStyles.icon}
                src={telephone}
                alt="telephone icon"
              />
              <p className={AdmisStyles.iconfont}>
                {" "}
                (1-868) 625-5030 ext. 5288 / 5788 /5688 / 5888 / 5088 / 5388{" "}
              </p>
            </div>
          </div>{" "}
          {/*close col */}
          <div className={standardStyles.col1of3}>
            <h3 className={costlifeStyles.opening__campus}>
              <span> Business Hours </span>
            </h3>

            <div className={costlifeStyles.opening__contact}>
              <Image
                className={AdmisStyles.icon}
                src={hours}
                alt="hours icon"
              />
              <p className={AdmisStyles.iconfont}>
                Monday - Friday - Fri. 7:00 am to 9:00 pm <br />
                Saturday - 7:00 am to 5:00 pm <br />
                Sunday. 7:00 am to 5:00 pm
              </p>
            </div>
          </div>{" "}
          {/*close col */}
          <div className={standardStyles.col1of3}>
            <h3 className={costlifeStyles.opening__campus}>
              <span> Email </span>
            </h3>

            <div>
              <Image
                className={AdmisStyles.icon}
                src={email}
                alt="email icon"
              />
              <p className={AdmisStyles.iconfont}>
                {" "}
                <a href="mailto:ithelpdesk@costaatt.edu.tt">
                  {" "}
                  ithelpdesk@costaatt.edu.tt{" "}
                </a>{" "}
              </p>
            </div>
          </div>{" "}
          {/*close col */}
        </div>{" "}
        {/*close row */}
      </section>
    </>
  );
};

export default Itfacilities;
