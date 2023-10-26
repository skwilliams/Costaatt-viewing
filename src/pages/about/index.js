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
import home2 from "../../../public/images/about/home2.png";
import home3 from "../../../public/images/about/home3.png";
import home5 from "../../../public/images/about/home5.png";
import home6 from "../../../public/images/about/home6.png";

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
        {/* <div className={AboutStyles.aboutbackColor}> */}
        <h2
          className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
        >
          <span> The Premier</span> Undergraduate College{" "}
        </h2>
        <p
          className={`${standardStyles.paragraph} ${AboutStyles.text2columns}`}
        >
          {" "}
          COSTAATT was established in October 2000 by an Act of Parliament (ACT
          No. 77 of 2000) with the purpose of contributing to national and
          regional development , social equity and the development of civil
          society by providing broad-based access to socially responsive and
          innovative educational programmes and by engaging in scholarly work
          and applied research. <br />
          COSTAATT is an accredited, multi-campus, undergraduate college with
          six academic schools. We have proudly graduated over 20,000 students
          in over 100 programmes ranging from bachelor's and associate degrees
          to diplomas and certificates.
          <br /> Approximately 66% of our programmes offering focus on applied
          and skills-based learning in contemporary disciplines. <br />
          The College has recently established an Upskilling Academy to boost
          entrepreneurial growth through specialized training, business
          incubation and acceleration services. The Tech Hub is also a new
          service area catering to prototyping, product commercialization,
          digital content creation and business coaching.
          <br /> Underpinning the College's commitment to excellence, innovation
          and global relevance are three key strategic imperatives, which shape
          its identity, propel growth and impact student lives, namely, Digital
          Transformation, Sustainable Futures and Global Pathways.
        </p>
        {/* </div> */}
      </section>
      <section id="vision" className={AboutStyles.aboutbackColor}>
        <div className={standardStyles.sectionNoSidenav}>
          {" "}
          <h2
            className={` ${standardStyles.newsHeading} ${standardStyles.newsHeadingWhite} ${standardStyles.centertext}`}
          >
            {" "}
            <span> Mission</span> and VISION{" "}
          </h2>
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
          </div>
          <div className={AboutStyles.gallery}>
            <>
              <figure className={AboutStyles.gallery__item}>
                <Image
                  src={home6}
                  width={300}
                  height={300}
                  alt="Photo of  Home6"
                  className={AboutStyles.gallery__photo}
                />
              </figure>
              <figure className={AboutStyles.gallery__item}>
                <Image
                  src={home3}
                  width={300}
                  height={300}
                  alt="Photo of hotel 2"
                  className={AboutStyles.gallery__photo}
                />
              </figure>
              <figure className={AboutStyles.gallery__item}>
                <Image
                  src={home5}
                  width={300}
                  height={300}
                  alt="Photo of hotel 3"
                  className={AboutStyles.gallery__photo}
                />
              </figure>
              <figure className={AboutStyles.gallery__item}>
                <Image
                  src={home2}
                  width={300}
                  height={300}
                  alt="Photo of hotel 3"
                  className={AboutStyles.gallery__photo}
                />
              </figure>
            </>
          </div>
          <div className={standardStyles.threeColGridCon1}>
            <div className={standardStyles.threeColGrid}>
              <div className={standardStyles.featurebox}>
                <h3 className={standardStyles.headingTertiary}>
                  Digital
                  <br /> Transformation{" "}
                </h3>
                <p
                  className={`${standardStyles.featurebox__text} ${standardStyles.leftalign}`}
                >
                  Adapting to the digital era is imperative to staying relevant
                  and competitive. COSTAATT's commitment to cutting-edge
                  technology enhances learning experiences, fosters innovative
                  teaching methods, and prepares our students for tech-driven
                  careers. Through this transformation, we empower learners to
                  navigate the digital landscape confidently and contribute to a
                  tech-savvy workforce.
                </p>
              </div>
            </div>
            <div className={standardStyles.threeColGrid}>
              <div className={standardStyles.featurebox}>
                <h3 className={standardStyles.headingTertiary}>
                  Sustainable <br /> Futures
                </h3>
                <p
                  className={`${standardStyles.featurebox__text} ${standardStyles.leftalign}`}
                >
                  Embracing sustainable practices in vital for COSTAATT's
                  enduring impact. By integrating eco-friendly initiatives into
                  curricula and operations, we cultivate environmentally
                  conscious graduates. This imperative ensures resource
                  efficiency, aligns with the United Nations Sustainable
                  Development Goals (SDGs), and equips our students to drive
                  positive change, securing a greener, more resilient future
                </p>
              </div>{" "}
            </div>
            <div className={standardStyles.threeColGrid}>
              <div className={standardStyles.featurebox}>
                <h3 className={standardStyles.headingTertiary}>
                  Global
                  <br /> Pathways
                </h3>
                <p
                  className={`${standardStyles.featurebox__text} ${standardStyles.leftalign}`}
                >
                  Enabling diverse global opportunities enriches the educational
                  journey for COSTAATT students. By continually fostering
                  international collaborations, cultural exchanges, and mobility
                  programmes, at COSTAATT, we equip students with broader
                  perspective and vital cross-cultural skills. This imperative
                  opens doors to varied career pathways and exclusively equips
                  our graduates to thrive in an interconnected, multicultural
                  world.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>{" "}
        {/*end of sidenav} */}
      </section>
      <section id="schools" className={`${standardStyles.sectionbackColor}`}>
        <h2
          className={`${AboutStyles.schoolHeading} ${standardStyles.centertext}`}
        >
          {" "}
          ACADEMIC <span> Schools</span>
        </h2>
        <p
          className={`${standardStyles.headingTertiary} ${standardStyles.centertext}`}
        >
          {" "}
          Bachelors Degrees | Associate Degrees | Diplomas | Certificates{" "}
        </p>
        <div className={AboutStyles.schoolflex}>
          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolsliberal}`}
            >
              <Link href="/programmes/schools/liberal">
                School of Liberal Arts, Education and Digital Humanities
              </Link>
            </div>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolskengord}`}
            >
              <Link href="/programmes/schools/kengord">
                Ken Gordon School of Communication, Creative and Digital Media{" "}
              </Link>
            </div>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolsnursing}`}
            >
              <Link href="/programmes/schools/nursing">
                School of Nursing, Health and Medical Technologies{" "}
              </Link>
            </div>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolsbusIT}`}
            >
              <Link href="/programmes/schools/busIT">
                School of Business and Digital Technologies{" "}
              </Link>
            </div>
          </div>

          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolsenviro}`}
            >
              <Link href="/programmes/schools/enviro">
                School of Environment, Circular Economy and Sustainability{" "}
              </Link>
            </div>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolsworkF}`}
            >
              <Link href="/programmes/schools/workF">
                School of Workforce, Enhancement and Development{" "}
              </Link>
            </div>
          </div>
        </div>

        <h2
          className={`${AboutStyles.schoolHeading} ${standardStyles.centertext}`}
        >
          {" "}
          UPSKILLING <span> Academy</span>
        </h2>
        <p
          className={`${standardStyles.headingTertiary} ${standardStyles.centertext}`}
        >
          {" "}
          Vocational Training | Incubation | Acceleration | Business Coaching |
          Mentorship | Start-ups Financing
        </p>
        <div className={AboutStyles.schoolflex}>
          <div className={AboutStyles.schoolflex__item}>
            <p
              className={`${AboutStyles.upskill} ${AboutStyles.schoolsliberal}`}
            >
              Tourism, Hospitality and Destination Management
            </p>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <p
              className={`${AboutStyles.upskill} ${AboutStyles.schoolskengord}`}
            >
              Creative Industries and New Media
            </p>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <p
              className={`${AboutStyles.upskill} ${AboutStyles.schoolsnursing}`}
            >
              Health and Med Tech{" "}
            </p>
          </div>

          <div className={AboutStyles.schoolflex__item}>
            <p className={`${AboutStyles.upskill} ${AboutStyles.schoolsbusIT}`}>
              Digital and Cyber Entrepreneurship
            </p>
          </div>

          <div className={AboutStyles.schoolflex__item}>
            <p
              className={`${AboutStyles.upskill} ${AboutStyles.schoolsenviro}`}
            >
              Sustainability and Climate Change
            </p>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <p className={`${AboutStyles.upskill} ${AboutStyles.schoolsworkF}`}>
              Food and Agri Entrepreneurship
            </p>
          </div>
        </div>
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

export default index;
