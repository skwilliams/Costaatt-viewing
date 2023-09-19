import SideNavOnlyLayout from "@/components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";
import React from "react";
import Head from "next/head";
import ButtonLink from "@/components/HomeComponents/ButtonLink";

import standardStyles from "@/styles/main.module.scss";
import AdmisStyles from "@/styles/Admissions.module.scss";
import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import counsellor from "../../../public/images/admissions/contact.svg";
import Image from "next/image";
import Link from "next/link";
import HeadImage from "@/components/PageComponents/HeadImage";
import headImg from "../../../public/images/admissions/applynow.jpg";
import SimpleCard from "@/components/PageComponents/SimpleCard";
import tick from "../../../public/images/admissions/tick.svg";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import { Accordion, Divider, Button } from "@mui/material/";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon, { Stadium } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import increase from "../../../public/images/admissions/increase.png";
import ProgStyles from "../../styles/Programmes.module.scss";
import admissionStyles from "@/styles/Admissions.module.scss";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import imagedummy from "../../../public/images/schools/affiliationsMou.png"

const howtoapply = () => {
  const CustomHome = () => {
    return <AddCircleTwoToneIcon style={{ color: "rgb(245,130,32)" }} />;
  };

  return (
    <>
      <Head>
        <title>How to Apply</title>
      </Head>
      <HeaderNoImage caption="How to apply" />
      <p className={ProgStyles.headingprimarysub}>
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/admissions">Admissions/</Link>
        <Link href="/admissions/howtoapply">How to Apply</Link>
      </p>
      <SideNavOnlyLayout>
        <section id="intro" className={standardStyles.secionWithSideNav}>
          {" "}
          <p className={AdmisStyles.introtext}>
            We are so excited that you have choosen COSTAATT to furthur your
            education.
            <br />
            COSTAATT offers a unique learning experience.
            <br />
          </p>
          <p className={AdmisStyles.sectiontext}>
            What impact will COSTAATT have on you{" "}
          </p>
          <div className={admissionStyles.iconsection}>
            <div className={standardStyles.row}>
              <div className={standardStyles.col1of3}>
                {" "}
                <Image
                  className={admissionStyles.icon}
                  src={increase}
                  alt="increase"
                />
                <p className={admissionStyles.iconfontemp}> Marketabilty </p>
              </div>

              <div className={standardStyles.col1of3}>
                {" "}
                <Image
                  className={admissionStyles.icon}
                  src={increase}
                  alt="increase"
                />
                <p className={admissionStyles.iconfontemp}>Earnings</p>
              </div>
              <div className={standardStyles.pink}>
                <Image
                  className={admissionStyles.icon}
                  src={increase}
                  alt="increase"
                />
                <p className={admissionStyles.iconfontemp}>Influence</p>
              </div>
            </div>
          </div>
        </section>
        <section id="firststeps" className={standardStyles.secionWithSideNav}>
          <h2 className={standardStyles.headingPrimarysub}>
            Steps in Applying{" "}
          </h2>
          <div className={AdmisStyles.steps}>
            <div className={AdmisStyles.stepstext}>
              <span className={AdmisStyles.stepsnum}> 1. </span>{" "}
              <Link
                href="/programmes/allprogrammes"
                className={AdmisStyles.anchortag}
              >
                {" "}
                Find your programme{" "}
              </Link>{" "}
              and determine if it's right for you
            </div>
            <div className={AdmisStyles.stepstext}>
              <span className={AdmisStyles.stepsnum}> 2. </span>{" "}
              <Link href="#require" className={AdmisStyles.anchortag}>
                {" "}
                Explore the requirements
              </Link>{" "}
              and whether you possess them{" "}
            </div>
            <div className={AdmisStyles.stepstext}>
              <span className={AdmisStyles.stepsnum}> 3. </span>{" "}
              <Link href="#supportingDocs" className={AdmisStyles.anchortag}>
                {" "}
                Acquire Supporting Documents
              </Link>{" "}
              scan and have ready to upload{" "}
            </div>
            <div className={AdmisStyles.stepstext}>
              <span className={AdmisStyles.stepsnum}> 4. </span>
              Determine what type of applicant you are{" "}
              <Accordion sx={{ mx: 7, my: 2 }}>
                <AccordionSummary expandIcon={<CustomHome />}>
                  <Typography fontWeight="bold" fontSize={"1.15rem"}>
                    New Applicant
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <p className={AdmisStyles.text}>
                    A student who has not completed any college-level courses
                    and who wishes to enrol in a degree programme at COSTAATT.
                  </p>{" "}
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ mx: 7, my: 2 }}>
                <AccordionSummary expandIcon={<CustomHome />}>
                  <Typography fontWeight="bold" fontSize={"1.15rem"}>
                    Transfer Applicant
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <p className={AdmisStyles.text}>
                    A student who has completed college-level courses at a
                    recognised higher education institution and who wishes to
                    enrol in a degree programme at COSTAATT. The College
                    evaluates the transcripts of transfer students to determine
                    equivalency with its own programmes and requirements for
                    graduation.
                    <Link
                      href="./transfercredits"
                      className={standardStyles.btnText}
                    >
                      Learn more →
                    </Link>
                  </p>{" "}
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ mx: 7, my: 2 }}>
                <AccordionSummary expandIcon={<CustomHome />}>
                  <Typography fontWeight="bold" fontSize={"1.15rem"}>
                    Returning Applicant
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <p className={AdmisStyles.text}>
                    A student who has previously started a programme with
                    COSTAATT, but have been absent for three or more consecutive
                    semesters; Previously completed a programme with COSTAATT
                    and wish to apply for another.{" "}
                  </p>{" "}
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ mx: 7, my: 2 }}>
                <AccordionSummary expandIcon={<CustomHome />}>
                  <Typography fontWeight="bold" fontSize={"1.15rem"}>
                    Non-Matriculated
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <p className={AdmisStyles.text}>
                    A student who is interested in earning credit for specific
                    college-level courses without registering for a full diploma
                    or degree programme. Such students enjoy the same privileges
                    and responsibilities as other students and are also required
                    to observe all college rules and regulations, including
                    those governing student conduct.
                  </p>{" "}
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ mx: 7, my: 2 }}>
                <AccordionSummary expandIcon={<CustomHome />}>
                  <Typography fontWeight="bold" fontSize={"1.15rem"}>
                    Audit
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <p className={AdmisStyles.text}>
                    A student who wishes to pursue discrete courses for personal
                    enrichment (no examinations or credit is awarded).
                  </p>{" "}
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={AdmisStyles.stepstext}>
              <span className={AdmisStyles.stepsnum}> 5. </span> Start
              application <br />
              Select which applicant you are and start your applicatoin
              <div className={standardStyles.row}>
                <div
                  className={standardStyles.col1of3}
                  New
                  and
                  Transfer
                  Studetnts
                >
                  <SimpleCard
                    text="New and Transfer Applicant"
                    linkpage="admissions/apply"
                  />
                </div>
                <div className={standardStyles.col1of3}>
                  <SimpleCard
                    text="Returning Student "
                    linkpage="admissions/apply"
                  />
                </div>
                <div className={standardStyles.col1of3}>
                  <SimpleCard
                    text="Non-matriculation and audit"
                    linkpage="admissions/apply"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" className={standardStyles.sectionWithSideNav}>
          <h2 className={AdmisStyles.sectiontextleft}>Timeline </h2>

          <table className={standardStyles.simple}>
            <thead>
              <tr>
                <th className={standardStyles.paragraph}>Timeline</th>
                <th className={standardStyles.paragraph}>
                  Semester 1 September{" "}
                </th>
                <th className={standardStyles.paragraph}>
                  Semester 2 February{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={standardStyles.paragraph}>
                  Application Accepted{" "}
                </td>
                <td className={standardStyles.paragraph}>April to August </td>{" "}
                <td></td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}> Early Deadline </td>
                <td className={standardStyles.paragraph}> 30th June </td>
                <td></td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}>Regular Deadline</td>
                <td className={standardStyles.paragraph}> 14th July </td>
                <td className={standardStyles.paragraph}> 20th August </td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}> Late Deadline</td>
                <td className={standardStyles.paragraph}> 20th August </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p className={standardStyles.footnote}>
            There would be no late accptance for Nursing
          </p>
        </section>
        <section id="require" className={standardStyles.sectionWithSideNav}>
          <p className={AdmisStyles.sectiontextleft}>
            Application Requirements{" "}
          </p>{" "}
          <div className={standardStyles.bullets}>
            <p className={standardStyles.headingTertiary}>
              Minimum Requirements{" "}
            </p>
            <ul className={standardStyles.list}>
              <li className={standardStyles.items}>
                Five (5) CSEC (CXC)/GCE O&#39;Level subjects, inclusive of
                English A and Mathematics,
                <p className={standardStyles.footnote}>
                  Grades 1,2,3* or A, B, C. *Grade 3 accepted if attained in
                  June 1998 and beyond
                </p>
              </li>

              <li className={standardStyles.items}>
                Applicants who possess CAPE or A&#39;Level qualiﬁcations may be
                considered for advanced standing (the award of credits towards
                your degree programme).{" "}
                <Link href="/admissions/transftercredits">Find out more.</Link>
              </li>
            </ul>
          </div>
          {/* <p className={standardStyles.headingSecondary}>
            School Specific Requirements
          </p> */}
          <p className={standardStyles.headingTertiary}>
            School of Nursing, Health and Medial Technologies Requirements
          </p>
          <div className={admissionStyles.entryreq}>
            <ul className={admissionStyles.list}>
              <li className={admissionStyles.items}>
                Applicants to the BSc and AAS in Occupational Safety and Health
                programmes must be 16 years or older.
              </li>

              <li className={admissionStyles.items}>
                Applicants to the Nursing programme must be between 17½ and 45
                years old.
              </li>

              <li className={admissionStyles.items}>
                Applicants to programmes in the School of Nursing, Health and
                Environmental Sciences must possess one or more science
                subjects. See list below for more details.
              </li>

              <div className={admissionStyles.entryreq}>
                <ul className={admissionStyles.list}>
                  <li className={admissionStyles.items}>
                    <span>
                      <strong> Nursing </strong>{" "}
                    </span>{" "}
                    : at least one science subject
                  </li>
                  <li className={admissionStyles.items}>
                    <span>
                      <strong>Radiography</strong>
                    </span>{" "}
                    : Biology and Physics
                  </li>

                  <li className={admissionStyles.items}>
                    <span>
                      {" "}
                      <strong>Medical Laboratory Technology</strong>{" "}
                    </span>
                    : Biology and/or Human and Social Biology and Chemistry
                  </li>

                  <li className={admissionStyles.items}>
                    <span>
                      {" "}
                      <strong>Environmental Health</strong>{" "}
                    </span>
                    : Biology or Human and Social Biology
                  </li>

                  <li className={admissionStyles.items}>
                    <span>
                      {" "}
                      <strong>Environmental Management</strong>
                    </span>
                    : Biology and Chemistry
                  </li>
                  <li className={admissionStyles.items}>
                    <span>
                      {" "}
                      <strong>Occupational Safety and Health</strong>
                    </span>
                    :Biology or Human and Social Biology
                  </li>
                  <li className={admissionStyles.items}>
                    <span>
                      {" "}
                      <strong>Biology</strong>{" "}
                    </span>
                    - Biology and Chemistry
                  </li>
                  <li className={admissionStyles.items}>
                    <span>
                      <strong>Biology Pre-Med</strong>{" "}
                    </span>
                    - Biology, Chemistry and Physics
                  </li>
                </ul>
              </div>

              <li className={admissionStyles.items}>
                To be admitted to the following programmes, short-listed
                applicants must be successful at an admissions interview:
                Nursing, Medical Laboratory Technology, Radiography,
                Environmental Health.
              </li>
            </ul>
          </div>
          <div className={standardStyles.bullets}>
            <p className={standardStyles.headingTertiary}>
              School of Liberal Arts, Education and Digital Humanities
              Requierments
            </p>
            <ul className={standardStyles.list}>
              <li className={standardStyles.items}>
                To be admitted to the music programme (bachelor's and associate
                degree), short-listed applicants will be required to
                successfully complete the audition process.
              </li>

              <li className={standardStyles.items}>
                To be admitted to the following programmes, short-listed
                applicants must be successful at an admissions interview: BSW
                Social Work, Early Childhood Care and Education and BSc Applied
                Psychology.
              </li>
            </ul>
          </div>
        </section>
        <section id="alterRoutes" className={standardStyles.sectionforSideNav}>
          <h2 className={standardStyles.headingPrimarysub}>
            Alternative Entry Routes{" "}
          </h2>{" "}
          <p className={standardStyles.paragraph}>
            Applicants who do not possess the minimum requirements for entry
            into a degree programme may be eligible for admission via the
            following:
          </p>
          <div className={standardStyles.bullets}>
            <ul className={standardStyles.list}>
              <li className={standardStyles.items}>
                Mature applicants (25 years and over) with relevant experience,
                who do not possess the minimum entry requirements, may be
                considered on the basis of experience and demonstrable
                competence.
              </li>
              <li className={standardStyles.items}>
                COMPASS is designed to help students gain the qualifications
                needed to access the degree programme of their choice at
                COSTAATT. The duration of study in COMPASS depends on students'
                entry-level competencies; performance on the placement tests in
                English, mathematics and, where relevant, science; and the
                admission requirements of the programme they wish to pursue.
              </li>
              <ul className={standardStyles.list}>
                <p className={standardStyles.text}>
                  To qualify for the COMPASS programme, applicants MUST have
                  completed five years of secondary school and:
                </p>
                <li className={standardStyles.items}>
                  Possess 3-4 CSEC (CXC)/GCE passes
                </li>

                <li className={standardStyles.items}>
                  {" "}
                  Possess 5 CSEC (CXC)/GCE passes without mathematics or English
                  or
                </li>
                <li className={standardStyles.items}>
                  {" "}
                  Be 25 years or older (mature student) with academic literacy
                  acquired through work or life experiences.
                </li>
              </ul>

              {/* style differntly  */}
              <p className={standardStyles.paragraph}>
                {" "}
                Upon successful completion of the COMPASS programme, students
                may apply to the college programme for which they would then
                have gained the necessary entry requirements.
              </p>

              <p className={standardStyles.paragraph}>
                Persons interested in pursuing the Nursing programme must be
                guided by the registration requirements of the Nursing Council
                of Trinidad and Tobago.
              </p>
            </ul>{" "}
            {/*close of first list  */}
          </div>
        </section>
        <section
          id="supportingDocs"
          className={standardStyles.secionWithSideNav}
        >
          <h2 className={standardStyles.headingPrimarysub}>
            General Supporting Documents{" "}
          </h2>
          <table className={standardStyles.simple}>
            <thead>
              <tr>
                <th className={standardStyles.paragraph}>Documents</th>
                <th className={standardStyles.paragraph}>TT Nationals </th>
                <th className={standardStyles.paragraph}>Non-Nationals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={standardStyles.paragraph}>Valid TT Id Card </td>
                <td className={standardStyles.paragraph}>Yes </td>{" "}
                <td className={standardStyles.paragraph}>N/A</td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}> Valid Passport </td>
                <td className={standardStyles.paragraph}> N/A </td>
                <td className={standardStyles.paragraph}>Yes</td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}>Birth Certificate</td>
                <td className={standardStyles.paragraph}> Yes </td>
                <td className={standardStyles.paragraph}> No </td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}>
                  {" "}
                  Academic Certificates
                </td>
                <td className={standardStyles.paragraph}> Yes </td>
                <td className={standardStyles.paragraph}>Yes</td>
              </tr>
            </tbody>
          </table>
          <div className={standardStyles.marginTopBig}></div>
          <h2 className={standardStyles.headingPrimarysub}>
            Nursing Supporting Documents{" "}
          </h2>
          <table className={standardStyles.simple}>
            <thead>
              <tr>
                <th className={standardStyles.paragraph}>Programme</th>
                <th className={standardStyles.paragraph}>
                  Two Written Confidential Character References{" "}
                </th>
                <th className={standardStyles.paragraph}>
                  Police Certificate of Character
                </th>
                <th className={standardStyles.paragraph}>
                  Nursing Council Permit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={standardStyles.paragraph}>
                  General Nursing (AAS, BSC){" "}
                </td>
                <td className={standardStyles.paragraph}>Yes </td>{" "}
                <td className={standardStyles.paragraph}>Yes</td>
                <td className={standardStyles.paragraph}>Yes</td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}>
                  {" "}
                  Psychiatric Nursing(AAS, BSC){" "}
                </td>
                <td className={standardStyles.paragraph}>Yes </td>
                <td className={standardStyles.paragraph}>Yes</td>
                <td className={standardStyles.paragraph}>Yes</td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}>Midwifery (BSC)</td>
                <td className={standardStyles.paragraph}> Yes </td>
                <td className={standardStyles.paragraph}> Yes </td>
                <td className={standardStyles.paragraph}> Yes </td>
              </tr>
            </tbody>
          </table>
          <div className={standardStyles.marginTopBig}></div>
          <h2 className={standardStyles.headingPrimarysub}>
            Health and Medical Supporting Documents{" "}
          </h2>
          <table className={standardStyles.simple}>
            <thead>
              <tr>
                <th className={standardStyles.paragraph}>Programme</th>
                <th className={standardStyles.paragraph}>
                  Two Written Confidential Character References{" "}
                </th>
                <th className={standardStyles.paragraph}>
                  Personal Statements{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={standardStyles.paragraph}>
                  Medical Laboratory Technology (AAS, BSC){" "}
                </td>
                <td className={standardStyles.paragraph}>Yes </td>{" "}
                <td className={standardStyles.paragraph}>No</td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}>
                  {" "}
                  Medical Ultrasound (AdvDip){" "}
                </td>
                <td className={standardStyles.paragraph}> </td>
                <td className={standardStyles.paragraph}>Yes</td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}>Radiography (BSC)</td>
                <td className={standardStyles.paragraph}> Yes </td>
                <td className={standardStyles.paragraph}> </td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}>
                  Enviornmental Health (AAS,BSC)
                </td>
                <td className={standardStyles.paragraph}> Yes </td>
                <td className={standardStyles.paragraph}> </td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}>
                  Occupational Safety and Health (AAS,BSC) (BSC)
                </td>
                <td className={standardStyles.paragraph}> Yes </td>
                <td className={standardStyles.paragraph}> </td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}>Social Work (BSC)</td>
                <td className={standardStyles.paragraph}> Yes </td>
                <td className={standardStyles.paragraph}> </td>
              </tr>
              <tr>
                <td className={standardStyles.paragraph}>
                  Early Childhood Care and Education(BA)
                </td>
                <td className={standardStyles.paragraph}> Yes </td>
                <td className={standardStyles.paragraph}> Yes</td>
              </tr>
            </tbody>
          </table>
<div className={standardStyles.marginTopBig}></div>
          <p className={standardStyles.headingTertiary}>  
          DEADLINE FOR SUPPORTING DOCUMENTS  </p>
          
          <p className={standardStyles.paragraph}>

          You must submit supporting documents
          within 2 weeks of submitting your online application. If you are
          unable to submit supporting documents within the stipulated time, you
          must advise us via email to applications@costaatt.edu.tt. Please note
          that we may not be able to process your application without required
          evidence. 

          </p>
        </section>

        <section id="checklist" className={standardStyles.sectionWithSideNav}>
          {" "}
          <p className={standardStyles.headingPrimarysub}>
            Applicant Checklist{" "}
          </p>
          <div className={AdmisStyles.checklist}>
            <Image className={AdmisStyles.imgtick} src={tick} />
            <span className={standardStyles.headingTertiary}>
              {" "}
              Apply Online{" "}
            </span>
            <p className={AdmisStyles.text}>
              You have choosen your programme and this is your first time
              applying to COSTAATT!!
              <br />
              You need to complete the online application form
            </p>{" "}
            <p className={AdmisStyles.text}>
              <Link href="/admissions/applynow">
                {" "}
                Online application &rarr;
              </Link>
            </p>
            <ButtonLink
              text="Start Application"
              color="warning"
              size="large"
              path="/admissions/applynow"
            />
            <Divider />
          </div>
          <div className={AdmisStyles.checklist}>
            <Image className={AdmisStyles.imgtick} src={tick} />
            <span className={standardStyles.headingTertiary}>
              Submit supporting documents
            </span>{" "}
            <br />
            <p className={AdmisStyles.text}>
              {" "}
              Once you have completed your application online, you must submit
              all relevant supporting documents in JPEG or PDF format within two
              (2) weeks to{" "}
              <a
                className={AdmisStyles.anchortag}
                href="mailto:applications@costaatt.edu.tt."
              >
                applications@costaatt.edu.tt.{" "}
              </a>
              If you are unable to submit your documents within that time, you
              must advise us via email to{" "}
              <a
                className={AdmisStyles.anchortag}
                href="mailto:applications@costaatt.edu.tt."
              >
                applications@costaatt.edu.tt.{" "}
              </a>{" "}
            </p>
            <Divider />
          </div>
          <div className={AdmisStyles.checklist}>
            <Image className={AdmisStyles.imgtick} src={tick} />
            <span className={standardStyles.headingTertiary}>
              after you have applied
            </span>
            <br />
            <p className={AdmisStyles.text}>
              {" "}
              It takes approximately 2 weeks after submission of your
              application to be processed, and 2 weeks after which an admissions
              decision can be made. Some programmes require: <br />
            </p>
            {/* To Move arrow to the left */}
            <Accordion sx={{ margin: 2 }}>
              <AccordionSummary expandIcon={<CustomHome />}>
                <Typography fontWeight="bold" fontSize={"1.15rem"}>
                  INTERVIEWS
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <p className={AdmisStyles.text}>
                  <b>
                    {" "}
                    To be admitted to the following programmes, short-listed
                    applicants must be successful at an admissions interview
                  </b>
                </p>{" "}
                <div className={AdmisStyles.entryreq}>
                  <ul className={AdmisStyles.list}>
                    <li className={AdmisStyles.items}>
                      {" "}
                      General Nursing (BSc, AAS)
                    </li>
                    <li className={AdmisStyles.items}>
                      Psychiatric Nursing (BSc, AAS)
                    </li>
                    <li className={AdmisStyles.items}> Midwifery (BSc)</li>
                    <li className={AdmisStyles.items}>
                      Medical Laboratory Technology (BSc, AAS)
                    </li>
                    <li className={AdmisStyles.items}> Radiography (BSc)</li>
                    <li className={AdmisStyles.items}> Social Work (BSW)</li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      Early Childhood Care and Education (BA)
                    </li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      Applied Psychology (BSc)
                    </li>
                  </ul>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: 2 }}>
              <AccordionSummary expandIcon={<CustomHome />}>
                <Typography fontWeight="bold" fontSize={"1.15rem"}>
                  AUDITIONS
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <p className={AdmisStyles.text}>
                  To be admitted to the music programme (bachelor's and
                  associate degree), short-listed applicants will be required to
                  successfully complete the audition process.
                </p>{" "}
              </AccordionDetails>
            </Accordion>

            <Divider />
          </div>
          <div className={AdmisStyles.checklist}>
            <Image className={AdmisStyles.imgtick} src={tick} />
            <span className={standardStyles.headingTertiary}>Offers</span>

            {/* To Move arrow to the left */}
            <Accordion sx={{ margin: 2 }}>
              <AccordionSummary expandIcon={<CustomHome />}>
                <Typography fontWeight="bold" fontSize={"1.15rem"}>
                  OFFERS OF ADMISSIONS
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <p className={AdmisStyles.text}>
                  Formal offers of Admission to any programme shall be made, in
                  writing, by the Director of Enrolment or designate.
                </p>{" "}
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: 2 }}>
              <AccordionSummary expandIcon={<CustomHome />}>
                <Typography fontWeight="bold" fontSize={"1.15rem"}>
                  PLACEMENT TEST
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <p className={AdmisStyles.text}>
                  Applicants who receive the offer of a place on a programme
                  will receive a placement test invitation from the Admissions
                  department. Do not be alarmed! If you do not pass a test or do
                  as well as you expect, this will not affect your place on a
                  programme.
                  <br /> However, you may be exempt from taking tests in
                  <b> English language</b> and <b>Mathematics</b> if you already
                  have the requisite level of achievement (see the exemptions
                  below). The results of these tests tell us whether you may
                  need help to strengthen your academic foundations. If you do
                  need help, we will place you in the appropriate level course
                  to help you succeed in your major.
                  <br />
                  Please note that placement tests are
                  <u> online </u> assessments. For applicants who do not have
                  access to a laptop, computer or Internet, arrangements will be
                  made to sit an 'in-person' test at a campus. Remember, this is
                  an important step towards your academic success! <br />
                  <b>Exemptions </b> <br />
                  Please note that the following persons are exempted from
                  taking the placement test, as detailed below: -
                  <br /> <b> Exempt from English & Mathematics test:</b>
                </p>
                <div className={AdmisStyles.entryreq}>
                  <ul className={AdmisStyles.list}>
                    <li className={AdmisStyles.items}>
                      {" "}
                      Persons who completed degree level studies at COSTAATT
                      institutions
                    </li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      Holders of bachelor's and associate degrees from other
                      recognised
                    </li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      Holders of recognised professional certification
                    </li>
                  </ul>
                </div>{" "}
                <p className={AdmisStyles.text}>
                  <b>Exempt from English test only:</b>{" "}
                </p>
                <div className={AdmisStyles.entryreq}>
                  <ul className={AdmisStyles.list}>
                    <li className={AdmisStyles.items}>
                      {" "}
                      CAPE/GCE A' Level graduates with grades 1, 2 or 3 / A, B
                      or C in Communication Studies or Literature
                    </li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      CSEC/GCE O'Level graduates with grade 1 or A in English A
                    </li>
                  </ul>
                </div>{" "}
                <p className={AdmisStyles.text}>
                  {" "}
                  <b>Exempt from Mathematics test only: </b>
                  <br />
                  Please note that the qualifications listed below must have
                  been attained no more than 5 years prior to applying to
                  COSTAATT CSEC/GCE O'Level graduates with grade 1 or A in
                  English A
                </p>
                <div className={AdmisStyles.entryreq}>
                  <ul className={AdmisStyles.list}>
                    <li className={AdmisStyles.items}>
                      {" "}
                      CAPE/ A'Level graduates with grades 1, 2 or 3 / A, B or C
                      in Mathematics or Physics{" "}
                    </li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      CSEC/ GCE O'Level graduates with grades 1, 2 or 3 / A, B
                      or C in Additional Mathematics
                    </li>
                    <li className={AdmisStyles.items}>
                      CSEC/ GCE O' Level graduates with grade 1 or A in
                      Mathematics{" "}
                    </li>
                  </ul>
                </div>{" "}
                {/* see if we can get the pdf to place on our servers */}
                <p className={AdmisStyles.text}>
                  <a
                    className={AdmisStyles.anchortag}
                    Link
                    href="/pdfs/English-Placement-Test-Sample-2019.pdf"
                    target="_blank"
                  >
                    Sample English Placement Test
                  </a>
                  <br />{" "}
                  <a
                    className={AdmisStyles.anchortag}
                    Link
                    href="/pdfs/Mathematics-Placement-Test-Sample-2019.pdf"
                    target="_blank"
                  >
                    Sample Mathematics Placement Test
                  </a>
                </p>
              </AccordionDetails>
            </Accordion>

            <Divider />
          </div>
          {/* <div className={AdmisStyles.checklist}>
            <Image className={AdmisStyles.imgtick} src={tick} />
            <span className={AdmisStyles.heading}> Registration </span>
            <p className={AdmisStyles.text}>
              You have been accepted, now it's time to Register !!
            </p>{" "}
            <ButtonLink
              text="How to Register"
              color="warning"
              size="large"
              path="/admissions/howtoregister"
            />
            <Divider />
          </div> */}
        </section>
        <section id="accepted" className={standardStyles.sectionWithSideNav}>
          <h2 className={standardStyles.headingSecondary}>
            {" "}
            Accepted Students{" "}
          </h2>
          <div className={standardStyles.row}>
            <div className={standardStyles.col1of3}>
              Welcome to Change Makers Place an image here.
              <Image src={imagedummy} width="200"></Image>
            </div>
            <div className={standardStyles.col2of3}>
              <p className={standardStyles.paragraph}>
                You've been accepted, now it's time to start your new adventure.
                Here's what to do next..
              </p>
              <div className={standardStyles.bullets}>
                <ul className={standardStyles.list}>
                  <li className={standardStyles.items}>Receive Advisement </li>
                  <li className={standardStyles.items}>Register for Courses</li>
                  <li className={standardStyles.items}>
                    Apply for Gate (if eligible)
                  </li>
                  <li className={standardStyles.items}>Paying Fees</li>
                  <li className={standardStyles.items}>Collect Student Id</li>
                  <Link
                    href="./howtoregister"
                    className={standardStyles.btnText}
                  >
                    Learn more →
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className={standardStyles.sectionWithSideNav}>
          {" "}
          <p className={AdmisStyles.sectiontextleft}> Contact Admissions</p>
          <div className={standardStyles.row}>
            <div className={standardStyles.col1of3}>
              <Image
                className={AdmisStyles.icon}
                src={telephone}
                alt="telephone icon"
              />
              <p className={AdmisStyles.icontext}> 625-5030 ext 5900</p>
            </div>
            <div className={standardStyles.col1of3}>
              <Image
                className={AdmisStyles.icon}
                src={email}
                alt="email icon"
              />
              <p className={AdmisStyles.icontext}>
                {" "}
                <a href="mailto:applications@costaatt.edu.tt">
                  {" "}
                  applications@costaatt.edu.tt{" "}
                </a>{" "}
              </p>
            </div>
            <div className={standardStyles.col1of3}>
              <Image
                className={AdmisStyles.icon}
                src={counsellor}
                alt="contact icon"
              />
              <p className={AdmisStyles.icontext}>
                {" "}
                <Link href="admissioncounsellors">
                  {" "}
                  Admissions Counsellor Directory{" "}
                </Link>
              </p>
            </div>
          </div>
        </section>
      </SideNavOnlyLayout>
    </>
  );
};

howtoapply.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default howtoapply;
