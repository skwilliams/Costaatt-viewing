import { txtToPara, getCoreValues, getProgrammes } from "../../utilities";
import Head from "next/head";
import HeadImage from "../../../../components/PageComponents/HeadImage";
import ProgStyles from "../../../../styles/Programmes.module.scss";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import path from "path";
import fs from "fs/promises";
import ContactSideNav from "../../../../components/PageComponents/ContactSideNav";
import DeptStyles from "../../../../styles/Department.module.scss";
import NewsRow from "@/components/PageComponents/NewsRow";
import EventsRow from "@/components/PageComponents/EventsRow";
import Link from "next/link";
import Featured from "@/components/PageComponents/Featured";
import { features } from "@/components/PageComponents/featuresdata";
import { getEventsByDept } from "../../../../../public/data/eventsdata";
import { staffdata } from "./facultystaffdata";
import FacultyStaffCard from "../../../../components/PageComponents/FacultyStaffDepCard";
import imagevisitUS from "../../../../../public/images/schools/departments/costaatt wants you images/visitUs.png";
import imageapplyNow from "../../../../../public/images/schools/departments/costaatt wants you images/applyNow.png";
import imagecounsellor from "../../../../../public/images/schools/departments/costaatt wants you images/counsellor.png";
import StudentResources from "@/components/PageComponents/StudentResources";

const index = (props) => {
  const { foundDept, news } = props;
  const deptProgrammes = getProgrammes("department", foundDept);
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
          {/* Department's Core Values */}
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
      {/* Department Programmes Section */}
      <section id="programmes" className={DeptStyles.sectionProgrammes}>
        <p className={ProgStyles.headingprimary}>
          {" "}
          {foundDept.shortName} Programmes
        </p>
        <div className={ProgStyles.threeGridRowCon}>
          {/* Show accordion for only the type/level of programmes available in this department.  return empty fragment otherwise*/}
          {Object.entries(deptProgrammes).map((level) => {
            return (
              <>
                {level[1].length > 0 ? (
                  <>
                    <div className={ProgStyles.threeGridRow} key={level[0]}>
                      <Accordion className={DeptStyles.courseaccordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className={ProgStyles.acoordiantext}>
                            {level[0]}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ul className={ProgStyles.degcourses}>
                            {level[1].map((levelProgs) => {
                              return (
                                <li
                                  key={levelProgs.prog_code}
                                  className={ProgStyles.degcoursesli}
                                >
                                  <Link href=""> {levelProgs.prog_name} </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            );
          })}
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
        <EventsRow
          label="Upcoming"
          events={getEventsByDept(foundDept.dept_code)}
        />
      </section>{" "}
      {/* Department News Section */}
      <section id="schoolnews" className={ProgStyles.sectionschoolnews}>
        <NewsRow label="Latest" news={news.slice(0, 3)} />
      </section>
      <section id="featuredwork" className={DeptStyles.sectionFeaturedwork}>
        {/* <p className={ProgStyles.headingprimary}> Featured Work</p>

        <Featured feat={features} /> */}
      </section>
      {/* Department Faculty and Staff Section */}
      <section id="facultystaff" className={DeptStyles.sectionFaculty}>
        <p className={ProgStyles.headingprimary}>Our Faculty and Staff</p>
        <div className={DeptStyles.fourGridCon}>
          <FacultyStaffCard staff={staffdata} dept={foundDept.dept_code} />
        </div>
      </section>
      {/* Shoutout Section- COSTAATT wants YOU!!! */}
      <section id="sturesource" className={DeptStyles.sectionStuResources}>
        <p className={ProgStyles.headingprimary}> COSTAATT WANTS YOU </p>
        <div className={DeptStyles.threeGridCon}>
          <div className={DeptStyles.threeGridCol}>
            <StudentResources image={imageapplyNow} imagetxt="" />{" "}
          </div>
          <div className={DeptStyles.threeGridCol}>
            {" "}
            <StudentResources image={imagecounsellor} imagetxt="" />
          </div>
          <div className={DeptStyles.threeGridCol}>
            {" "}
            <StudentResources image={imagevisitUS} imagetxt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const { shortName, deptName } = params;
  return {
    props: {
      // retrieve the entire department object
      foundDept: await getDeptData(shortName, "nameStump", deptName),
      // retrieve the latest news posts for this department
      news: await getDeptNewsData(deptName, "dept_code"),
    },
  };
}

const getDeptNewsData = async function (deptName, deptKey) {
  const filepath = path.join(process.cwd(), "public/data", "newsdata.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  const finalData = data.filter(
    (newsPost) => newsPost[deptKey].toLowerCase() === deptName.toLowerCase()
  );
  return finalData === undefined ? null : finalData;
};

const getDeptData = async function (schName, key, deptName) {
  const filepath = path.join(process.cwd(), "data", "schooldata.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  const finalData = data
    .filter((school) => school[key].toLowerCase() === schName.toLowerCase())[0]
    .departments.find(
      (dept) => dept.dept_code.toLowerCase() === deptName.toLowerCase()
    );
  return finalData === undefined ? null : finalData;
};
