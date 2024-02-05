import React from "react";
import admissionStyles from "../../styles/Admissions.module.scss";
import Image from "next/image";
import ButtonLink from "../../components/HomeComponents/ButtonLink";
import ProgStyles from "../../styles/Programmes.module.scss";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { supportDocA, supportDocB } from "./admissionsData";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

import time from "../../../public/images/time.svg";
import mode from "../../../public/images/mode.svg";
import location from "../../../public/images/location.svg";
import calendar from "../../../public/images/calendar.svg";
import ContactAdmissions from "../../components/PageComponents/ContactAdmissions";

const apply = () => {
  return (
    <>
      <section id="intro" className={admissionStyles.sectionIntro}>
        <p className={ProgStyles.headingprimary}> Apply Now</p>
        <p className={admissionStyles.text}>
          Prospective students have the option of applying online immediately,
          or completing a paper based application which can then be mailied or
          delivered to any of our campuses{" "}
        </p>
      </section>

      <section id="onlineapp" className={admissionStyles.sectionOnlineApp}>
        <p className={ProgStyles.headingprimary}> Online Application</p>
        <div className={admissionStyles.iconsection}>
          <div className={admissionStyles.fourColGridCon}>
            <div className={admissionStyles.fourColGrid}>
              {" "}
              <Image
                className={admissionStyles.icon}
                src={calendar}
                alt="duration icon"
              />
              <p className={admissionStyles.iconfont}> </p>
            </div>

            <div className={admissionStyles.fourColGrid}>
              {" "}
              <Image
                className={admissionStyles.icon}
                src={location}
                alt="duration icon"
              />
              <p className={admissionStyles.iconfont}> &#10004; City Campus</p>
              <p className={admissionStyles.iconfont}> &#10004; Online</p>
            </div>
            <div className={admissionStyles.fourColGrid}>
              <Image
                className={admissionStyles.icon}
                src={time}
                alt="duration icon"
              />
              <p className={admissionStyles.iconfont}>
                {" "}
                &#10004; Full-time : 4 years
              </p>
              <p className={admissionStyles.iconfont}>
                {" "}
                &#10004; Part-time : 6 years
              </p>
            </div>
            <div className={admissionStyles.fourColGrid}>
              {" "}
              <Image
                className={admissionStyles.icon}
                src={mode}
                alt="duration icon"
              />
              <p className={admissionStyles.iconfont}> &#10004; Blended</p>
              <p className={admissionStyles.iconfont}> &#10004; Online</p>
            </div>
          </div>
        </div>
        <div>
          <h1>BEFORE YOU APPLY</h1>
          <p>&nbsp;</p>
          <h3>APPLICATION PERIODS</h3>
          <p> SEMESTER I - SEPTEMBER</p>
          <p> Applications normally accepted: April - August</p>
          <p>
            Applications are currently open, you are welcome to submit your
            application now.
          </p>
          <p>&nbsp;</p>

          <p>SEMESTER II - FEBRUARY</p>
          <p> Applications normally accepted: October - January</p>
        </div>
        <p>&nbsp;</p>
        <div
          style={{
            padding: "15px",
            border: "2px solid orange",
            width: "fit-content",
          }}
        >
          <h3>APPLICATION DEADLINE FOR SEPTEMBER 2023 (Semester I)</h3>
          <p>Early deadline: 30th June 2023</p>
          <p>
            Regular deadline (all programmes - *final deadline for Nursing
            applications) 14th July 2023
          </p>
          <p>
            Late deadline (all programmes EXCEPT NURSING) - 11th August, 2023
          </p>
        </div>
        <p>&nbsp;</p>
        <div>
          <h3>SUBMISSION OF APPLICATIONS</h3> <p>&nbsp;</p>
          <p>New and Transfer Applicants </p>
          <p>All new, transfer and COMPASS applicants must apply online</p>
          <p>&nbsp;</p>
          <p> Applicants for Re-Admission</p>
          <p>
            Download the fillable PDF application, complete and email us at
            applications@costaatt.edu.tt.
          </p>
          <p>&nbsp;</p>
          <h3>APPLICATION FEES</h3>
          <p>Online applications: currently Free</p>
          <p>
            Electronic forms submitted via email: $10.00 TTD (re-admissions
            applicants only)
          </p>
          <p>Paper applications: $25.00 TT</p>
          <p>&nbsp;</p>
          <h3>LIST OF AVAILABLE PROGRAMMES</h3>
        </div>
        <p>&nbsp;</p>
        <ButtonLink
          text="september 2023 programmes"
          color="warning"
          size="large"
          href="/"
        />
        <p>&nbsp;</p>
        <p>
          DISCLAIMER: COSTAATT reserves the right to cancel or modify any
          programme advertised.
        </p>
        <p>&nbsp;</p>
        <h3>
          REQUIRED SUPPORTING DOCUMENTS (must be submitted along with your
          application)
        </h3>{" "}
        <p>&nbsp;</p>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "royalblue" }}>
              <TableRow>
                <TableCell>
                  Nationality - General Supporting Documents
                </TableCell>
                <TableCell>Valid TT ID card or Passport</TableCell>
                <TableCell>Valid Passport</TableCell>
                <TableCell>Birth Certificate</TableCell>
                <TableCell>Academic Certificates</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {supportDocA.map((row) => (
                <TableRow key={row.Nationality}>
                  <TableCell>{row.Nationality}</TableCell>
                  <TableCell>{row.Valid_ID}</TableCell>
                  <TableCell>{row.Valid_PassPort}</TableCell>
                  <TableCell>{row.Birth_Certificate}</TableCell>
                  <TableCell>{row.Academic_Certificate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ backgroundColor: "royalblue" }}>
              <TableRow>
                <TableCell>Programme - Specific Suporting Documents</TableCell>
                <TableCell>
                  Two Written Confidential Character References
                </TableCell>
                <TableCell>Police Certificate of Character</TableCell>
                <TableCell>Nursing Council Permit</TableCell>
                <TableCell>Personal Statement</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {supportDocB.map((row) => (
                <TableRow key={row.Programme}>
                  <TableCell>{row.Programme}</TableCell>
                  <TableCell>{row.References}</TableCell>
                  <TableCell>{row.Police_Cert}</TableCell>
                  <TableCell>{row.Council}</TableCell>
                  <TableCell>{row.Statement}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <p>&nbsp;</p>
        <h3>Submission of supporting documents</h3>
        <p>&nbsp;</p>
        <p>
          Once you have completed your application online, you must submit all
          relevant supporting documents in JPEG or PDF format within two (2)
          weeks to applications@costaatt.edu.tt. If you are unable to submit
          your documents within that time, you must advise us via email to
          applications@costaatt.edu.tt.
        </p>
        <p>&nbsp;</p>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>New Applicant</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              A student who has not completed any college-level courses and who
              wishes to enrol in a degree programme at COSTAATT. To download
              your paper application or apply online (only applicable to New,
              Transfer, CARICOM and International applicants)
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Transfer Applicant</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              TRANSFER A student who has completed college-level courses at a
              recognised higher education institution and who wishes to enrol in
              a degree programme at COSTAATT. The College evaluates the
              transcripts of transfer students to determine equivalency with its
              own programmes and requirements for graduation. Please note that,
              depending on the programme of study, there is a limit to the
              number of credits that may be transferred or the number of
              exemptions that may be granted. Transfer applicants must be in
              good academic standing at the previous institution. Please contact
              the Admissions Office for further information. Applicants wishing
              to transfer to COSTAATT with advanced standing* must submit the
              following: *Advanced standing acknowledges prior study through the
              award of credit Official transcripts of all subjects previously
              completed at a tertiary level institution Copies of
              syllabus/course outlines for courses completed A completed Request
              for Transfer Credit form, which is available at the Admissions
              Office Download your paper application or apply online (only
              applicable to New, Transfer, CARICOM and International applicants)
            </p>
          </AccordionDetails>
        </Accordion>{" "}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Returning Applicant</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Complete a re-admission form if you: Previously started a
              programme with COSTAATT, but have been absent for three or more
              consecutive semesters; Previously completed a programme with
              COSTAATT and wish to apply for another.{" "}
            </p>
            STEPS TO RE-APPLY
            <p>Step 1: Download the Re-admission Application Form</p>
            <p>Step 2: Fill-in all relevant information</p>
            <p>
              Step 3: Submit the completed form with all relevant supporting
              documents (see above) to the Admissions Department at
              applications@costaatt.edu.tt.
            </p>
            <p>
              The submission of a readmission form does not guarantee re-entry
              to the college.
            </p>
          </AccordionDetails>
        </Accordion>{" "}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Non-Matriculated</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              A student who is interested in earning credit for specific
              college-level courses without registering for a full diploma or
              degree programme. Such students enjoy the same privileges and
              responsibilities as other students and are also required to
              observe all college rules and regulations, including those
              governing student conduct.
            </p>
            <p>
              Non-matriculated students must satisfy relevant entry
              requirements.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Audit</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              A student who wishes to pursue discrete courses for personal
              enrichment (no examinations or credit is awarded).
            </p>
          </AccordionDetails>
        </Accordion>
        <p>&nbsp;</p>
        <div>
          <h2>CARICOM AND INTERNATIONAL APPLICANTS </h2>
          <p>&nbsp;</p>

          <p>
            CARICOM and international applicants must submit official copies of
            transcripts of all subjects completed at prior secondary and
            tertiary institutions. If these documents are not in English, a
            certified translation is required. It may also be necessary to have
            the qualifications assessed by the Accreditation Council of Trinidad
            & Tobago (ACTT) or the Curriculum Planning and Development Division
            (CPDD), Ministry of Education located at the Rudranath Capildeo
            Learning Resource Centre. Qualifications supplied will be assessed
            to determine equivalence to programme entry requirements. Applicants
            whose first language is not English must provide evidence of
            proficiency in English via an internationally recognized English
            Language test, such as the TOEFL (Test of English as a Foreign
            Language) or IELTS (International English Language Testing System).
            To obtain information on TOEFL please visit the ETS (Education
            Testing Service) website at www.ets.org or email toefl@ets.org. For
            information on IELTS tests please visit the IELTS website at
            www.ielts.org or alternatively contact the nearest British Council
            office for information Download the paper application or apply
            online (only applicable to New, Transfer, CARICOM and International
            applicants)
          </p>
          <p>&nbsp;</p>
        </div>
        <h1>START YOUR APPLICATION HERE</h1>
        <p>&nbsp;</p>
        <h2>NEW AND TRANSFER APPLICANTS</h2>
        <p>&nbsp;</p>
        <ButtonLink
          text="Online Application"
          color="warning"
          size="large"
          href="/"
        />
        <p>&nbsp;</p>
        <ButtonLink
          text="Downloadable Application Form"
          color="warning"
          size="large"
          href="/"
        />
        <p>&nbsp;</p>
        <h2>APPLICANTS FOR RE-ADMISSION</h2>
        <p>&nbsp;</p>
        <ButtonLink
          text="Re-Admission Application Form"
          color="warning"
          size="large"
          href="/"
        />
        <p>&nbsp;</p>
        <h2> NON-MATRICULATED AND AUDIT APPLICANTS</h2>
        <p>&nbsp;</p>
        <ButtonLink
          text="Non-Matriculated and Audit Application Form"
          color="warning"
          size="large"
          href="/"
        />{" "}
        <p>&nbsp;</p>
        <div>
          <h1>AFTER YOU HAVE APPLIED</h1> <p>&nbsp;</p>
          <p>
            It takes approximately 2 weeks after submission of your application
            to be processed, and 2 weeks after which an admissions decision can
            be made. Some programmes require:
          </p>
          <p>&nbsp;</p>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Interviews</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                To be admitted to the following programmes, short-listed
                applicants must be successful at an admissions interview:
              </p>
              <p>General Nursing (BSc, AAS)</p>
              <p>Psychiatric Nursing (BSc, AAS)</p> <p>Midwifery (BSc)</p>
              <p> Medical Laboratory Technology (BSc, AAS)</p>
              <p>Radiography (BSc)</p> <p>Social Work (BSW)</p>
              <p> Early Childhood Care and Education (BA)</p>
              <p>Applied Psychology (BSc)</p>
            </AccordionDetails>
          </Accordion>
          <p>&nbsp;</p>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Auditions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                To be admitted to the music programme (bachelor&#39;s and
                associate degree), short-listed applicants will be required to
                successfully complete the audition process.
              </p>
            </AccordionDetails>
          </Accordion>{" "}
          <p>&nbsp;</p>
          <h1>OFFERS OF ADMISSION</h1>
          <p>&nbsp;</p>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <p>OFFERS OF ADMISSION</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Formal offers of Admission to any programme shall be made, in
                writing, by the Director of Enrolment or designate.
              </p>
            </AccordionDetails>
          </Accordion>{" "}
          <p>&nbsp;</p>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Placement Tests</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Applicants who receive the offer of a place on a programme will
                receive a placement test invitation from the Admissions
                department. Do not be alarmed! If you do not pass a test or do
                as well as you expect, this will not affect your place on a
                programme.
              </p>
              <p>
                However, you may be exempt from taking tests in English language
                and mathematics if you already have the requisite level of
                achievement (see the exemptions below). The results of these
                tests tell us whether you may need help to strengthen your
                academic foundations. If you do need help, we will place you in
                the appropriate level course to help you succeed in your major.
              </p>
              <p>
                Please note that placement tests are online assessments. For
                applicants who do not have access to a laptop, computer or
                Internet, arrangements will be made to sit an
                &#39;in-person&#39; test at a campus.
              </p>
              <p>
                Remember, this is an important step towards your academic
                success!
              </p>
              <p>&nbsp;</p>
              <p>Exemptions</p>
              <p>
                Please note that the following persons are exempted from taking
                the placement test, as detailed below:-
              </p>
              <p>Exempt from English & Mathematics test:</p>
              <ul>
                <li>Persons who completed degree level studies at COSTAATT</li>
                <li>
                  Holders of bachelor&#39;s and associate degrees from other
                  recognised institutions
                </li>
                <li>Holders of recognised professional certification</li>
                Exempt from English test only:
                <li>
                  CAPE/GCE A&#39; Level graduates with grades 1, 2 or 3 / A, B
                  or C in Communication Studies or Literature
                </li>
                <li>
                  CSEC/GCE O&#39;Level graduates with grade 1 or A in English A
                </li>
                <li></li>
                <li></li>
              </ul>
              <p>Exempt from Mathematics test only:</p>
              <p>
                Please note that the qualifications listed below must have been
                attained no more than 5 years prior to applying to COSTAATT
              </p>
              <p>
                CAPE/ A&#39;Level graduates with grades 1, 2 or 3 / A, B or C in
                Mathematics or Physics CSEC/ GCE O&#39; Level graduates with
                grades 1, 2 or 3 / A, B or C in Additional Mathematics CSEC/ GCE
                O&#39; Level graduates with grade 1 or A in Mathematics
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
      <section id="paperapp" className={admissionStyles.sectionPaperApp}>
        <p className={ProgStyles.headingprimary}>Paper Based Application</p>
      </section>
      <section id="contact" className={admissionStyles.sectionContactAdm}>
        <p className={admissionStyles.sectiontext}> Contact Admissions</p>

        <ContactAdmissions />
      </section>
    </>
  );
};
export default apply;
