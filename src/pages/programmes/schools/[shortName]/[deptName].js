import { txtToPara, getCoreValues, getProgrammes } from '../../utilities';
import Head from 'next/head';
import HeadImage from '../../../../components/PageComponents/HeadImage';
import ProgStyles from '../../../../styles/Programmes.module.scss';


import standardStyles from "../../../../styles/main.module.scss";



import path from 'path';
import fs from 'fs/promises';
import ContactSideNav from '../../../../components/PageComponents/ContactSideNav';
import DeptStyles from '../../../../styles/Department.module.scss';
import NewsRow from '@/components/PageComponents/NewsRow';
import EventsRow from '@/components/PageComponents/EventsRow';
import Link from 'next/link';
import Featured from '@/components/PageComponents/Featured';
import { featured } from '@/components/PageComponents/featuresdata';
import { getEventsByDept } from '../../../../../public/data/eventsdata';
import { staffdata } from './facultystaffdata';
import FacultyStaffCard from '../../../../components/PageComponents/FacultyStaffDepCard';



const index = (props) => {
  const { foundDept, news } = props;
  const deptProgrammes = getProgrammes('department', foundDept);
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
      {/* imagetext={foundDept.name}  */}
      <HeadImage mainimage={foundDept.headImage} />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/"> Department/</Link>
        <Link href="/">{foundDept.shortName}</Link>
      </p>
      <header>
        <span className={standardStyles.heading_primary__main}>
          {foundDept.name}
        </span>
        <span className={standardStyles.heading_primary__sub}>
          {foundDept.coreValues[0]} | {foundDept.coreValues[1]} |{" "}
          {foundDept.coreValues[2]} | {foundDept.coreValues[3]}
          {/* {foundDept.coreValues.map((value[]) => {
            return (
              <div key={value}>
                <ul>
                  <li className={ProgStyles.degcoursesli}> 
                 
                    <span> {value} </span> - {getCoreValues(value)}
                  </li>
                </ul>
              </div>
            );
          })} */}
        </span>
      </header>
      {/* <SideNavOnlyLayout> */}
      {/* Department Overview Section */}
      <section id="overview" className={DeptStyles.sectionOverview}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={DeptStyles.maintext}>{foundDept.mission}</p>
          {/* <p className={DeptStyles.subheading}> Vision</p> */}
          {/* {txtToPara(foundDept.summary, DeptStyles.subtext)} */}
          {/* Department's Core Values */}
        </div>
        <div className={DeptStyles.corevalues}>
          <h2
            className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
          >
            Core <span>VALUES</span>
          </h2>
          {foundDept.coreValues.length > 0 ? (
            <div className={DeptStyles.corevalues}>
              {foundDept.coreValues.map((value) => {
                return (
                  <div key={value}>
                    <ul>
                      <li className={ProgStyles.degcoursesli}>
                        <span> {value} </span> - {getCoreValues(value)}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
      {/* Department Programmes Section */}
      {/* <h2
        classname={`${standardStyles.newsHeading} ${standardStyles.centertext} ${standardStyles.whitefont}`}
      >
        <span> FIND </span>your Degree
      </h2> */}
      <section id="programmes" className={DeptStyles.sectionProgrammes}>
        <h2
          className={`${standardStyles.newsHeading} ${standardStyles.centertext} ${standardStyles.whitefont}`}
        >
          {" "}
          <span> {foundDept.dept_code} </span> PROGRAMMES
        </h2>

        {/* <div className={ProgStyles.threeGridRowCon}>
          {/* Show accordion for only the type/level of programmes available in this department.  return empty fragment otherwise
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
                                  <Link
                                    href={`/programmes/${levelProgs.prog_shortname}`}
                                  >
                                    {" "}
                                    {levelProgs.prog_name}{" "}
                                  </Link>
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
        {/* </div> */}

        <div className={ProgStyles.progGridCon}>
          {/* Show accordion for only the type/level of programmes available.  return empty fragment otherwise*/}
          {Object.entries(deptProgrammes).map((level) => {
            return (
              <>
                {level[1].length > 0 ? (
                  <>
                    <div className={ProgStyles.progGrid} key={level[0]}>
                      <p className={DeptStyles.degreecategory}> {level[0]} </p>

                      <ul className={ProgStyles.degcourses}>
                        {level[1].map((levelProgs) => {
                          return (
                            <li
                              key={levelProgs.prog_code}
                              className={ProgStyles.degcoursesli}
                            >
                              <Link href={`../../${levelProgs.prog_shortname}`}>
                                {" "}
                                {levelProgs.prog_name}{" "}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
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
        <h2
          className={`${standardStyles.newsHeading} ${standardStyles.centertext} ${standardStyles.paddingTopBig}`}
        >
          Department <span> CONTACT </span>
        </h2>
        <div
          className={`${DeptStyles.contactcard} ${standardStyles.paddingBottomBig}`}
        >
          <ContactSideNav
            btn1txt="Visit"
            btn2txt="Apply"
            btn3txt="Request Info"
            // contacttype="Department Contacts"
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
      <section id="featuredwork" className={DeptStyles.sectionFeaturedwork}>
        <h2
          className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
        >
          <span>FEATURED </span> Work
        </h2>

        <Featured feat={featured} />
      </section>
      <section id="schoolnews" className={ProgStyles.sectionschoolnews}>
        <NewsRow label="Latest" news={news.slice(0, 3)} />
      </section>
      {/* Department Faculty and Staff Section */}
      <section id="facultystaff" className={DeptStyles.sectionFaculty}>
        <h2
          className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
        >
          <span>OUR</span> Faculty and Staff
        </h2>
        <div className={DeptStyles.fourGridCon}>
          <FacultyStaffCard staff={staffdata} dept={foundDept.dept_code} />
        </div>
      </section>
      {/* Shoutout Section- COSTAATT wants YOU!!! */}
      {/* <section id="sturesource" className={DeptStyles.sectionStuResources}>
        <h2
          className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
        >
          Costaatt <span>WANTS</span> You
        </h2>{" "}
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}>
            <StudentResources image={imageapplyNow} imagetxt="" />{" "}
          </div>
          <div className={standardStyles.col1of3}>
            {" "}
            <StudentResources image={imagecounsellor} imagetxt="" />
          </div>
          <div className={standardStyles.col1of3}>
            {" "}
            <StudentResources image={imagevisitUS} imagetxt="" />
          </div>
        </div>
      </section> */}
      {/* </SideNavOnlyLayout> */}
    </>
  );
};
// index.getLayout = function getLayout(page) {
//   return <TopNavOnlyLayout>{page}</TopNavOnlyLayout>;
// };
export default index;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const { shortName, deptName } = params;

  // retrieve the entire department object
  const data = await getDeptData(shortName, 'nameStump', deptName);

  if (!data) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        foundDept: data,
        // retrieve the latest news posts for this department
        news: await getDeptNewsData(deptName, 'dept_code'),
      },
    };
  }
}

const getDeptNewsData = async function (deptName, deptKey) {
  const filepath = path.join(process.cwd(), 'public/data', 'newsdata.json');
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  const finalData = data.filter(
    (newsPost) => newsPost[deptKey].toLowerCase() === deptName.toLowerCase()
  );
  return finalData === undefined ? null : finalData;
};

const getDeptData = async function (schName, key, deptName) {
  const filepath = path.join(process.cwd(), 'public/data', 'schooldata.json');
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  const finalData = data
    .filter((school) => school[key].toLowerCase() === schName.toLowerCase())[0]
    .departments.find(
      (dept) => dept.dept_code.toLowerCase() === deptName.toLowerCase()
    );
  return finalData === undefined ? null : finalData;
};
