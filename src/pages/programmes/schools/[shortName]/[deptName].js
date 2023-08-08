import { txtToPara, getCoreValues } from "../../utilities";
import Head from "next/head";
import HeadImage from "../../../../components/PageComponents/HeadImage";
import Layout from "../../../../components/PageWithSideNavComponents/Layout";
import ProgStyles from "../../../../styles/Programmes.module.scss";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";

import Image from "next/image";

import ContactSideNav from "../../../../components/PageComponents/ContactSideNav";
import DeptStyles from "../../../../styles/Department.module.scss";
import EventCard from "../../../../components/PageComponents/EventsCard";
import NewsRow from "@/components/PageComponents/NewsRow";
import NewsCard from "@/components/PageComponents/NewsCard";
import BusImg from "../../../../../images/Links/home2.png";
import Link from "next/link";
import Featured from "@/components/PageComponents/Featured";
import { features } from "@/components/PageComponents/featuresdata";
import { staffdata } from "./facultystaffdata";
import FacultyStaffCard from "../../../../components/PageComponents/FacultyStaffDepCard";
import image from "../../../../../images/Programmes/visit-home-v2.jpg";
import StudentResources from "@/components/PageComponents/StudentResources";

const index = (props) => {
  const { foundDept, news } = props;
  const getDeptContacts = function () {
    return staffdata.filter((staff) =>
      foundDept.contacts.find((handle) => handle === staff.handle)
    );
  };
  return (
    <>
      <Head>
        <title>{foundDept.shortName}</title>
      </Head>
      <HeadImage imagetext={foundDept.name} mainimage={foundDept.headImage} />
      {/* Department Overview Section */}
      <section id="overview" className={DeptStyles.sectionOverview}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}>Our Mission</p>
          <p className={DeptStyles.maintext}>{foundDept.mission}</p>
          {/* <p className={DeptStyles.subheading}> Vision</p> */}
          {txtToPara(foundDept.summary, DeptStyles.subtext)}

          {foundDept.coreValues.length > 0 ? (
            <Accordion className={DeptStyles.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={DeptStyles.acoordiantext}>
                  Core Values
                </Typography>
              </AccordionSummary>
              {foundDept.coreValues.map((value) => {
                return (
                  <AccordionDetails key={value}>
                    <ul className={ProgStyles.degcourses}>
                      <li className={ProgStyles.degcoursesli}>
                        {value} - {getCoreValues(value)}
                      </li>
                    </ul>
                  </AccordionDetails>
                );
              })}
            </Accordion>
          ) : (
            <></>
          )}
        </div>
      </section>
      {/* Dept Contact Section */}
      <section id="contact" className={DeptStyles.sectionContact}>
        <div className={DeptStyles.contactcard}>
          <ContactSideNav
            btn1txt="Visit"
            btn2txt="Apply"
            btn3txt="Request Info"
            contacttype="Department Contacts"
            contactArr={getDeptContacts()}
          />
        </div>
      </section>
      {/* Department events Section */}
      <section id="happening" className={DeptStyles.sectionWhatsup}>
        <p className={ProgStyles.headingprimary}>
          {foundDept.shortName} Events
        </p>

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
      </section>{" "}
      {/* Department News Section */}
      <section id="schoolnews" className={ProgStyles.sectionschoolnews}>
        <p className={ProgStyles.headingprimary}>{foundDept.shortName} News</p>
        <NewsRow news={news.slice(0, 3)} />
        <div className={ProgStyles.goto}>
          <Link className={ProgStyles.goto} href="#">
            View More...
          </Link>
        </div>
      </section>
      <section id="featuredwork" className={DeptStyles.sectionFeaturedwork}>
        {/* <p className={ProgStyles.headingprimary}> Featured Work</p>

        <Featured feat={features} /> */}
      </section>
      <section id="facultystaff" className={DeptStyles.sectionFaculty}>
        <p className={ProgStyles.headingprimary}> Faculty and Staff</p>
        <div className={DeptStyles.fourGridCon}>
          <FacultyStaffCard staff={staffdata} />
        </div>
      </section>
      {/* Department Programmes Section */}
      <section id="programmes" className={DeptStyles.sectionProgrammes}>
        <p className={ProgStyles.headingprimary}> Department Programmes </p>

        <div className={ProgStyles.threeGridRowCon}>
          <div className={ProgStyles.threeGridRow}>
            <Accordion className={DeptStyles.courseaccordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={ProgStyles.acoordiantext}>
                  Bachelor Degrees
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className={ProgStyles.degcourses}>
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
          <div className={ProgStyles.threeGridRow}>
            <Accordion className={DeptStyles.courseaccordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={ProgStyles.acoordiantext}>
                  Associate Degrees
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={ProgStyles.bachelors}>
                <ul className={ProgStyles.degcourses}>
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
          <div className={ProgStyles.threeGridRow}>
            <Accordion className={DeptStyles.courseaccordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={ProgStyles.acoordiantext}>
                  Certificates
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={ProgStyles.bachelors}>
                <ul className={ProgStyles.degcourses}>
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
        </div>
      </section>
      <section id="sturesource" className={DeptStyles.sectionStuResources}>
        <p className={ProgStyles.headingprimary}> COSTAATT WANTS YOU </p>
        <div className={DeptStyles.threeGridCon}>
          <div className={DeptStyles.threeGridCol}>
            <StudentResources image={image} imagetxt="Apply Now" />{" "}
          </div>
          <div className={DeptStyles.threeGridCol}>
            {" "}
            <StudentResources
              image={image}
              imagetxt="See Admissions Counsellor"
            />
          </div>
          <div className={DeptStyles.threeGridCol}>
            {" "}
            <StudentResources image={image} imagetxt="Visit Us" />
          </div>
        </div>
      </section>
    </>
  );
};
// index.getLayout = function getLayout(page) {
//     return <Layout>{page}</Layout>
//   }

export default index;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  //   const router = useRouter();
  const { params } = context;
  const { shortName, deptName } = params;
  console.log(deptName);
  return {
    props: {
      // retrieve the entire department object
      foundDept: await getData(
        "data",
        "schooldata.json",
        shortName,
        "nameStump",
        deptName,
        "dept_code"
      ),
      // retrieve the latest news posts for this department
      news: await getData(
        "public/data",
        "newsdata.json",
        shortName,
        null,
        deptName,
        "dept_code"
      ),
    },
  };
}

const getData = async function (
  pathName,
  fileName,
  schName,
  key,
  deptName,
  deptKey
) {
  const filepath = path.join(process.cwd(), pathName, fileName);
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  const finalData =
    key === "nameStump"
      ? data
          .filter(
            (school) => school[key].toLowerCase() === schName.toLowerCase()
          )[0]
          .departments.find(
            (dept) => dept.dept_code.toLowerCase() === deptName.toLowerCase()
          )
      : data.filter(
          (newsPost) =>
            newsPost[deptKey].toLowerCase() === deptName.toLowerCase()
        );

  return finalData === undefined ? null : finalData;
};
