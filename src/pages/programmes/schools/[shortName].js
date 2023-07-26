import React from "react";
import Head from "next/head";
import HeadImage from "@/components/PageComponents/HeadImage";
import deanimg from "../../../../images/Links/home1.png";
import headImg from "../../../../images/Programmes/sobdt header.jpg";
import Layout from "../../../components/Layout";
import ProgStyles from "../../../styles/Programmes.module.scss";
import DepartCard from "@/components/PageComponents/DepartCard";
import DeanStyles from "../../../styles/Dean.module.scss";
import BusImg from "../../../../images/Links/home2.png";

import { usePathname } from "next/navigation";
import { schools } from "./schooldata"; //*******/
import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";

import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/components/PageComponents/NewsCard";
import Divider from "@mui/material/Divider";

//School of Business and Digital Technologies
const school = (props) => {
  const { _school } = props;

  //{ school } destructured param for getStaticProps fn

  // const router = useRouter();
  // console.log(router.query.param);

  // const _school = schools.find(
  //   (school) => school.nameStump === router.query.param
  // );
  console.log(_school);

  //// PERHAPS it will not work because in essence we are awaiting user data via the URL to build the page.
  // console.log("params are " + params);
  // console.log(_school);

  return (
    <>
      <Head>
        <title>Business & Digital Technologies</title>
        {/* <title>{_school.shortName || "School"}</title> */}
        {/* <title>{test.tname || "School"}</title> */}
      </Head>
      <HeadImage imagetext="" mainimage={headImg} />
      <p className={ProgStyles.headingprimarysub}>
        COSTAATT/Programmes/Business & Digital Technologies{" "}
      </p>
      <section id="overview" className={ProgStyles.sectionoverview}>
        <p className={ProgStyles.headingprimary}> Overview of School</p>
        {/* <p className={ProgStyles.text}> {school.sectionoverview} </p> */}
        <p className={ProgStyles.text}>
          {" "}
          Dynamic school overview to go here for the school{" "}
        </p>
      </section>{" "}
      <Divider light />
      {/* <section id="depart" className={ProgStyles.sectiondepart}>
        <p className={ProgStyles.headingprimary}> Departments </p>
        <div className={ProgStyles.progGridContwo}>
          <div className={ProgStyles.progGridtwo}>
            {_school.departments.map((dept) => {
              <DepartCard
                image={dept.image}
                departname={dept.name}
                intro={dept.summary}
                linkpage={`/programmes/schools/${_school.nameStump}/{dept.shortName}`}
                shortname="dept.shortName"
              />;
            })}
          </div>
        </div>
      </section> */}
      <section id="depcourses" className={ProgStyles.sectiondeptcourses}>
        <p className={ProgStyles.headingprimary}>Find your Degree</p>

        <div className={ProgStyles.progGridCon}>
          <div className={ProgStyles.progGrid}>
            <Accordion className={ProgStyles.courseaccordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={ProgStyles.acoordiantext}>
                  Bachelor Degrees
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className={ProgStyles.degcourses}>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href=""> Accounting </Link>
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href="">Management and Entrepreneurship</Link>
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href=""> Human Resource Management</Link>{" "}
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href=""> Marketing</Link>
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href=""> Information Technology </Link>
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href="">Networking</Link>
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href=""> Web Development</Link>
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href="">Library and Information Science</Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={ProgStyles.progGrid}>
            <Accordion className={ProgStyles.courseaccordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={ProgStyles.acoordiantext}>
                  Associate Degrees
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={ProgStyles.bachelors}>
                <ul className={ProgStyles.degcourses}>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href="">Business Administration</Link>
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href="">
                      Management Studies for the Protective Services
                    </Link>
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href="">Information Technology</Link>{" "}
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href="">Web Development</Link>
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href="">Library and Information Studies</Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={ProgStyles.progGrid}>
            <Accordion className={ProgStyles.courseaccordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={ProgStyles.acoordiantext}>
                  Certificates
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={ProgStyles.bachelors}>
                <ul className={ProgStyles.degcourses}>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href=""> Supervisory Management</Link>
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href=""> Records Management</Link>
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href=""> CISCO-CCNA</Link>{" "}
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href=""> Web Development</Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={ProgStyles.progGrid}>
            <Accordion className={ProgStyles.courseaccordion}>
              <AccordionSummary
                className={ProgStyles.arrow}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={ProgStyles.acoordiantext}>
                  Diploma
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className={ProgStyles.degcourses}>
                  <li className={ProgStyles.degcoursesli}>
                    <Link href="">Supervisory Management</Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
      <section id="meetthedean" className={DeanStyles.sectionmeetthedean}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}> Meet the Dean </p>
          <div className={DeanStyles.deanColGridCon}>
            <div className={DeanStyles.deanColGrid}>
              <Image className={DeanStyles.deanimg} src={deanimg} alt="" />
            </div>
            <div className={DeanStyles.deanColGrid}>
              <p className={DeanStyles.deanwords}>
                <q>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur quaerat possimus, at iure soluta sequi eaque
                  doloribus ex fugit aliquid quidem dolores non nisi optio
                  adipisci dolore numquam laudantium quis.
                </q>
              </p>
            </div>
            <div className={DeanStyles.deanColGrid}>
              <div className={DeanStyles.deancontact}>
                <p>
                  <span className={DeanStyles.standout}>
                    {" "}
                    Lalita Ramlal-Chirckoot{" "}
                  </span>{" "}
                  <br /> Dean, <br />
                  WorkForce Enhancement and Development <br />
                  <span className={DeanStyles.standout}>
                    ltchirkoot@costaatt.edu.tt
                  </span>{" "}
                  <br />
                  868-625-5030 ext 1111{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider dark />
      <section id="schoolnews" className={ProgStyles.sectionschoolnews}>
        <p className={ProgStyles.headingprimary}> Business and IT News </p>

        <div className={ProgStyles.threeColGridCon}>
          <div className={ProgStyles.threeColGrid}>
            <NewsCard
              mainimage={BusImg}
              title="Graduation"
              text="Get ready Graduates !!, submit your documents to ensure you walk across the stage, along with a team behind the Cosmic Evolution Early Release Science (CEERS) Survey, have used new observations from the James Webb Space Telescope to confirm the existence of the most distant active supermassive black hole ever found"
              link="https:www.google.com"
              schoolcolor="rgb(187,41,187)"
            />
          </div>
          <div className={ProgStyles.threeColGrid}>
            <NewsCard
              mainimage={BusImg}
              title="New Faculty "
              text="Business & Digital Technologies, welcome Mr.Jim James to the faculty of Business in the School of Physics and Astronomy, along with a team behind the Cosmic Evolution Early Release Science (CEERS) Survey, have used new observations from the James Webb Space Telescope to confirm the existence of the most distant active supermassive black hole ever found"
              link="https:www.google.com"
              schoolcolor="rgb(187,41,187)"
            />
          </div>
          <div className={ProgStyles.threeColGrid}>
            <NewsCard
              mainimage={BusImg}
              title="Advisement"
              text="associate professor in the School of Physics and Astronomy, along with a team behind the Cosmic Evolution Early Release Science (CEERS) Survey, have used new observations from the James Webb Space Telescope to confirm the existence of the most distant active supermassive black hole ever found"
              link="https:www.google.com"
              schoolcolor="rgb(187,41,187)"
            />
          </div>
        </div>
        <div className={ProgStyles.goto}>
          <Link className={ProgStyles.goto} href="#">
            {" "}
            View More..
          </Link>
        </div>
      </section>
    </>
  );
};

export default school;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { shortName: "busIT" } },
      { params: { shortName: "liberal" } },
      { params: { shortName: "enviro" } },
      { params: { shortName: "kengord" } },
      { params: { shortName: "nursing" } },
      { params: { shortName: "workF" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const schName = params.shortName;
  // const router = useRouter();
  // console.log(`the param is ${router.query.param}`);

  const filepath = path.join(process.cwd(), "data", "schooldata.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  const sch = data.find((school) => school.nameStump === schName);
  console.log(sch);
  return {
    props: {
      _school: sch,
    },
  };
}
