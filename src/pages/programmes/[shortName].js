import Head from 'next/head';
import SideNavWithTopNav_NoDropdown from '../../components/Layouts/SideNavWithTopNav_NoDropdown';
import CourseStyle from '../../styles/Course.module.scss';
import ProgStyles from '../../styles/Programmes.module.scss';
import time from "../../../public/images/schools/Programmes/time.svg"

import mode from "../../../public/images/schools/Programmes/mode.svg";
import location from "../../../public/images/schools/Programmes/location.svg";
import calendar from "../../../public/images/schools/Programmes/calendar.svg";
import gate from '../../../public/images/schools/Programmes/gate.png';
import ContactUs from '../../components/PageComponents/ContactUs';
import Featured from '../../components/PageComponents/Featured';
import {
  featured,
  gradspeak,
} from '../../components/PageComponents/featuresdata';
// import { gradspeak } from "../api/gradspeak"; //"../../../../api/gradspeak";

import GradStyle from '../../styles/GradsSpeak.module.scss';
import GradsSpeak from "../../components/PageComponents/GradsSpeak";
import Divider from '@mui/material/Divider';
import { institutionFees } from '../admissions/admissionsData';
import DegreeCourses from "../../components/PageComponents/DegreeCourses";
import PossibleSalary from "../../components/PageComponents/PossibleSalary";
import DeptStyles from '../../styles/Department.module.scss';
import StudentResources from "../../components/PageComponents/StudentResources";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstitutionFees from "../../components/PageComponents/InstiutionFees";
import image from '../../../public/images/schools/Programmes/ken.png';
import TuitionFees from "../../components/PageComponents/TuitionFees";
import Requirements from "../../components/PageComponents/Requirements";
import SupportDoc from "../../components/PageComponents/SupportDoc";
import SideNavOnlyLayout from "../../components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "../../components/Layouts/TopNavOnly_NoDropdown";

// DATA IMPORTS
import path from 'path';
import fs from 'fs/promises';
import {
  getProgStruct,
  getRequirements,
  getTuition,
  getCourses,
} from './programmesData';
import ProgOfferingDetails from "../../components/PageComponents/ProgOfferingDetails";
import HeaderNoImage from "../../components/PageComponents/HeaderNoImage";

const programme = (props) => {
  const { prog, progStruct } = props;

  return (
    <>
      <Head>
        <title>{prog.prog_name && prog.prog_name} </title>
      </Head>
      <HeaderNoImage caption={prog.prog_name && prog.prog_name} />
      <SideNavOnlyLayout>
      
        <section id="courseoverview" className={CourseStyle.sectionOverview}>
          <p className={CourseStyle.desc}>{prog.prog_description}</p>
          <div className={CourseStyle.iconsection}>
            <div className={CourseStyle.fiveColGridCon}>
              <ProgOfferingDetails
                txt={"duration"}
                detailIcon={calendar}
                data={progStruct.semester}
              />
              <ProgOfferingDetails
                txt={"location"}
                detailIcon={location}
                data={progStruct.campus}
              />
              <ProgOfferingDetails
                txt={"time"}
                detailIcon={time}
                data={progStruct.duration}
              />
              <ProgOfferingDetails
                txt={"mode"}
                detailIcon={mode}
                data={progStruct.mode}
              />
              <ProgOfferingDetails
                txt={"GATE"}
                detailIcon={gate}
                data={progStruct.GATE}
              />
            </div>
          </div>
        </section>
        <Divider />
        <section id="careers" className={CourseStyle.sectionCareers}>
          <p className={ProgStyles.headingprimaryleft}> Possible Careers</p>
          <PossibleSalary salaries={progStruct.salaries} />

          <p className={CourseStyle.footnote}>
            * Salaries are subject to years of experience, projects and
            professional certification{" "}
          </p>
        </section>
        <Divider />
        <section id="gradPortfolio" className={CourseStyle.sectionPortfolio}>
          <p className={ProgStyles.headingprimaryleft}> Graduates Portfolio</p>

          <Featured
            feat={featured.filter((item) =>
              item.tags.includes(prog.prog_shortname)
            )}
          />
        </section>
        <Divider />
        <section id="gradSpeak" className={CourseStyle.sectionGradSpeak}>
          <p className={ProgStyles.headingprimaryleft}> Graduates Speak</p>

          <div className={GradStyle.threeColGridCon}>
            <GradsSpeak
              graduate={gradspeak.filter((item) =>
                item.tags.includes(prog.prog_shortname)
              )}
            />
          </div>
        </section>
        <Divider />
        <section id="curriculum" className={CourseStyle.sectionCurriculum}>
          <p className={ProgStyles.headingprimaryleft}>
            {" "}
            Curriculum{" "}
            <a
              style={{ float: "right" }}
              className={ProgStyles.explore}
              href=" "
            >
              View Printable Curriculum →
            </a>
          </p>
          <Accordion sx={{ margin: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={900} fontSize={19}>
                Courses in Major
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DegreeCourses courses={getCourses(progStruct.majorcourses)} />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={900} fontSize={19}>
                Specialization Courses
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DegreeCourses courses={getCourses(progStruct.specialcourses)} />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: 2, color: "primary" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={19}>Core Curriculum Courses</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Core Curriculum Courses */}
              <DegreeCourses courses={getCourses(progStruct.corecourses)} />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={19}>Support Courses</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Support Courses*/}

              <DegreeCourses courses={getCourses(progStruct.supportcourses)} />
            </AccordionDetails>
          </Accordion>
          {
            <p className={CourseStyle.creditsummarytext}>
              {" "}
              Total Credits :{" "}
              <span className={CourseStyle.creditsummarynumber}>
                {progStruct.totalcredits}{" "}
              </span>
            </p>
          }
        </section>
        <Divider />
        <section id="feesfinancial" className={CourseStyle.sectionFinancial}>
          <p className={ProgStyles.headingprimaryleft}>
            {" "}
            Fees and Financial Aid
          </p>
          <Accordion sx={{ margin: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={18}>Tuition Fees</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TuitionFees fees={getTuition(progStruct)} />
              <br />

              <p className={CourseStyle.footnote}>
                Disclaimer: COSTAATT reserves the right to modify fees as may be
                necessary.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: 2, color: "primary" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={18}>College Fees</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <InstitutionFees fees={institutionFees} />
              <div>
                <p className={CourseStyle.footnote}>
                  Student insurance covers basic accident and injury. However,
                  CARICOM and international students are also required to secure
                  additional insurance to cover medical expenses. All students
                  of COSTAATT are required to pay an annual insurance fee of
                  $30.00. Completed student insurance forms must be submitted to
                  the College at the beginning of the first semester in which
                  students register for the academic year. Coverage is
                  restricted to students who are between ages 15 to 75.
                </p>
                <p className={CourseStyle.footnote}>
                  Institutional fees are non-refundable. Students who officially
                  withdraw from the College may be eligible for a refund of
                  tuition fees in accordance with the schedule outlined in the
                  Academic Calendar. Please note that students in receipt of
                  GATE funding are not eligible for tuition refunds.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={18}>Financial Aid</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={CourseStyle.text}>
                <p>
                  <strong>
                    The Government Assistance for Tuition Expenses (GATE)
                  </strong>
                </p>
                <p>
                  The Government Assistance for Tuition Expenses programme
                  (GATE) provides free tuition to all eligible citizens of
                  Trinidad and Tobago pursuing approved programmes at public and
                  private tertiary level institutions. Information on
                  eligibility and conditions for accessing GATE funding is
                  available at the Ministry of Education website{" "}
                  <a href="http://www.moe.gov.tt">www.moe.gov.tt</a>
                </p>
                <p>
                  <strong>
                    Important: <br />
                    Students must note that GATE funding is available for the
                    duration of their course of study and one year beyond.
                    Students who fail to complete their programme within the
                    stipulated time frame will be required to meet the cost of
                    programme completion.
                  </strong>
                </p>
                <p>
                  The Government Assistance for Tuition Expenses (GATE)
                  programme is a tuition fee funding programme offered by the
                  Government of Trinidad and Tobago. Only nationals of Trinidad
                  and Tobago are eligible to apply, and students must be
                  registered in a course of study leading to a tertiary level
                  qualification. For further information on the GATE programme
                  please visit the website of the{" "}
                  <a href="http://https://moe.gov.tt/">
                    {" "}
                    Ministry of Education
                  </a>
                  .
                  <br /> The vast majority of the College's programmes are
                  eligible for GATE. For a full list of these programmes please
                  contact the Admissions Department, Tel 625-5030 ext 5900
                </p>
                <br />
                <div>
                  <strong>Higher Education Loan Programme (HELP)</strong>
                  <p>
                    {" "}
                    The Higher Education Loan Programme (HELP) is a special loan
                    facility made available to citizens of Trinidad and Tobago
                    who are enrolled in an approved tertiary level programme at
                    a registered tertiary institution to meet the following
                    expenses:
                  </p>
                </div>
                <div className={CourseStyle.entryreq}>
                  <ul className={CourseStyle.list}>
                    <li className={CourseStyle.items}>tuition fees</li>
                    <li className={CourseStyle.items}>accommodation</li>
                    <li className={CourseStyle.items}>
                      airfare and other transportation costs
                    </li>
                    <li className={CourseStyle.items}>
                      personal maintenance costs and living expenses
                    </li>
                    <li className={CourseStyle.items}>
                      books and related materials
                    </li>
                    <li className={CourseStyle.items}>special equipment</li>
                    <li className={CourseStyle.items}>
                      other related tertiary expenses
                    </li>
                  </ul>
                </div>
                <p>
                  For further information on the Higher Education Loan Programme
                  (HELP) students can visit the Ministry of Education website :{" "}
                  <a className={CourseStyle.goto} href="https.www.moe.gov.tt">
                    www.moe.gov.tt
                  </a>
                </p>{" "}
                <br />
                <p>
                  <strong>Payment Plans</strong>
                </p>
                <p>
                  Payment plans are available, please contact the Office of the
                  Registrar for further details:{" "}
                  <a
                    className={CourseStyle.goto}
                    href="mailto:registrar@costaatt.edu.tt"
                  >
                    registrar@costaatt.edu.tt
                  </a>
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
        </section>{" "}
        <Divider />
        <section id="requirements" className={CourseStyle.sectionRequirements}>
          <p className={ProgStyles.headingprimaryleft}> Requirements</p>
          <Accordion sx={{ margin: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={18}>Minimum Entry Requirements</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Requirements
                reqs={getRequirements(progStruct).minrequirements}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: 2, color: "primary" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={18}>Alternative Routes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={CourseStyle.text}>
                Applicants who do not possess the minimum requirements for entry
                into a degree programme may be eligible for admission via the
                following: <br />{" "}
                <span className={CourseStyle.bold}> Mature applicants</span> (25
                years and over) with relevant experience, who do not possess the
                minimum entry requirements, may be considered on the basis of
                experience and demonstrable competence.
                <p>
                  {" "}
                  <span className={CourseStyle.bold}> COMPASS </span> is
                  designed to help students gain the qualifications needed to
                  access the degree programme of their choice at COSTAATT. The
                  duration of study in COMPASS depends on students' entry-level
                  competencies; performance on the placement tests in English,
                  Mathematics and, where relevant, Science; and the admission
                  requirements of the programme they wish to pursue.
                </p>
                <br />
                <div className={CourseStyle.entryreq}>
                  {" "}
                  To qualify for the{" "}
                  <span className={CourseStyle.bold}>COMPASS programme </span>,
                  applicants MUST have completed five years of secondary school
                  and:
                  <ul className={CourseStyle.list}>
                    <li className={CourseStyle.items}>
                      {" "}
                      Possess 3-4 CSEC (CXC)/GCE passes Possess
                    </li>
                    <li className={CourseStyle.items}>
                      {" "}
                      5 CSEC (CXC)/GCE passes without mathematics or English or{" "}
                    </li>
                    <li className={CourseStyle.items}>
                      {" "}
                      Be 25 years or older (mature student) with academic
                      literacy acquired through work or life experiences.
                    </li>
                  </ul>{" "}
                  Upon successful completion of the COMPASS programme, students
                  may apply to the college programme for which they would then
                  have gained the necessary entry requirements.{" "}
                </div>
              </div>{" "}
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={18}>Resource Requirements</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Requirements reqs={getRequirements(progStruct).resources} />
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ margin: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize={18}>
                Required Supporting Documents{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SupportDoc docs={getRequirements(progStruct).supportingDocs} />
            </AccordionDetails>
          </Accordion>
        </section>
        <Divider />
        <section id="applylink" className={CourseStyle.sectionStuResources}>
          <p className={ProgStyles.headingprimaryleft}> COSTAATT Wants You </p>
          <>
            <div className={CourseStyle.inquiryform}>
              <ContactUs />
            </div>

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
          </>
        </section>
      </SideNavOnlyLayout>
    </>
  );
};

programme.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout>{page}</TopNavOnlyLayout>;
};

export default programme;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
export async function getStaticProps(context) {

  

  const { params } = context;
  const { shortName } = params;

  // retrieve the entire programme object
  const data = await getProgData(shortName);
  

  const struct = getProgStruct(shortName);

  if (!(data && struct)) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        prog: data,
        progStruct: struct,

      },
    };
  }
}

const getProgData = async function (progKey) {
  const filepath = path.join(process.cwd(), 'public/data', 'schooldata.json');
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  let finalData = null;
  data.forEach((school) => {
    school.departments.forEach((dept) => {
      dept.programmes &&
        dept.programmes.length > 0 &&
        dept.programmes.forEach((prog) => {
          if (prog.prog_shortname === progKey) {
            finalData = prog;
            return;
          }
        });
    });
  });

  return finalData;
};
