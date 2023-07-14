import React from "react";
import admissionStyles from "../../styles/Admissions.module.scss";
// import Image from "next/image";
import home5 from "../../../images/Links/home5.png";
import TopHeader from "@/components/TopHeader";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
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
import { Padding } from "@mui/icons-material";
const requirements = () => {
  return (
    <>
      <section className={admissionStyles.topHeader}>
        <TopHeader image={home5} color="royalblue" text="Requirements" />
      </section>
      <div className={admissionStyles.applicationInstructions}>
        <section>
          <div>
            <h1> MINIMUM ENTRY REQUIREMENTS</h1>
            <br />
            <p>
              Five (5) CSEC (CXC)/GCE O&#39;Level subjects, inclusive of English
              A and Mathematics, Grades 1,2,3* or A,B,C.
            </p>
            <p>&nbsp;</p>
            <p>*Grade 3 accepted if attained in June 1998 or beyond</p>
            <p>&nbsp;</p>
            <p>
              Applicants who possess CAPE or A&#39;Level qualiﬁcations may be
              considered for advanced standing (the award of credits towards
              your degree programme). <Link href="">Find out more.</Link>
            </p>
          </div>
          <div>IMAGE TO THE RIGHT HERE</div>
        </section>
        <br />
        <section>
          <div>
            <h1> MINIMUM ENTRY REQUIREMENTS</h1>
            <p>&nbsp;</p>
            <p>
              <strong>
                School of Nursing, Health and Environmental Sciences:
              </strong>
            </p>
            <p>&nbsp;</p>
            <p>
              Applicants to the BSc and AAS in Occupational Safety and Health
              programmes must be 16 years or older.
            </p>
            <p>&nbsp;</p>
            <p>
              Applicants to the Nursing programme must be between 17½ and 45
              years old.
            </p>
            <p>&nbsp;</p>
            <p>
              Applicants to programmes in the School of Nursing, Health and
              Environmental Sciences must possess one or more science subjects.
              See list below for more details.
            </p>
            <p>&nbsp;</p>
            <p>
              To be admitted to the following programmes, short-listed
              applicants must be successful at an admissions interview: Nursing,
              Medical Laboratory Technology, Radiography, Environmental Health.
            </p>
            <p>&nbsp;</p>
          </div>
          <div>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">
                  SUBJECT SPECIFIC PROGRAMMES
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <strong> Nursing</strong>
                </p>
                <p>at least one science subject</p>
                <p>
                  <strong>Radiography</strong>
                </p>
                <p>Biology and Physics</p>
                <p>
                  <strong>Medical Laboratory Technology</strong>
                </p>
                <p>Biology and/or Human and Social Biology and Chemistry</p>
                <p>
                  <strong>Environmental Health</strong>
                </p>
                <p>Biology or Human and Social Biology</p>
                <p>
                  <strong>Environmental Management</strong>
                </p>
                <p>Biology and Chemistry</p>
                <p>
                  <strong>Occupational Safety and Health</strong>
                </p>
                <p> Biology or Human and Social Biology</p>
                <p>
                  <strong>
                    Water and Wastewater Management, Services and Technology
                  </strong>
                </p>
                <p>Chemistry and Physics</p>
                <p>
                  <strong>Biology</strong>
                </p>
                <p>Biology and Chemistry</p>
                <p>
                  <strong>Biology Pre-Med</strong>
                </p>
                <p>Biology, Chemistry and Physics</p>
                <p></p>
              </AccordionDetails>
            </Accordion>
          </div>
          <br />
          <div>
            <p>
              <strong>School of Liberal Arts and Human Services:</strong>
            </p>
            <p>
              To be admitted to the music programme (bachelor’s and associate
              degree), short-listed applicants will be required to successfully
              complete the audition process.
            </p>
            <p>&nbsp;</p>
            <p>
              To be admitted to the following programmes, short-listed
              applicants must be successful at an admissions interview: BSW
              Social Work, Early Childhood Care and Education and BSc Applied
              Psychology.
            </p>
          </div>
          <br />
          <div>
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
                    <TableRow key={row.Natiionality}>
                      <TableCell>{row.Natiionality}</TableCell>
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
                    <TableCell>
                      Programme - Specific Suporting Documents
                    </TableCell>
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
          </div>
        </section>
        <br />
        <br />
        <section>
          <h1>ALTERNATE ROUTES</h1>
          <p>&nbsp;</p>
          <p>
            Applicants who do not possess the minimum requirements for entry
            into a degree programme may be eligible for admission via the
            following:
          </p>
          <p>&nbsp;</p>
          <p>
            Mature applicants (25 years and over) with relevant experience, who
            do not possess the minimum entry requirements, may be considered on
            the basis of experience and demonstrable competence.
          </p>
          <p>
            COMPASS is designed to help students gain the qualifications needed
            to access the degree programme of their choice at COSTAATT. The
            duration of study in COMPASS depends on students’ entry-level
            competencies; performance on the placement tests in English,
            mathematics and, where relevant, science; and the admission
            requirements of the programme they wish to pursue.
          </p>
          <p>&nbsp;</p>
          <p>
            To qualify for the COMPASS programme, applicants MUST have completed
            five years of secondary school and:
          </p>
          <p>&nbsp;</p>
          <ul>
            <li>Possess 3-4 CSEC (CXC)/GCE passes</li>
            <li>
              Possess 5 CSEC (CXC)/GCE passes without mathematics or English or
            </li>
            <li>
              Be 25 years or older (mature student) with academic literacy
              acquired through work or life experiences.
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            Upon successful completion of the COMPASS programme, students may
            apply to the college programme for which they would then have gained
            the necessary entry requirements.
          </p>
          <p>&nbsp;</p>
          <p>
            Persons interested in pursuing the Nursing programme must be guided
            by the registration requirements of the Nursing Council of Trinidad
            and Tobago.
          </p>
        </section>
        <br />
        <section>
          <h1>DEADLINES</h1>
          <p>&nbsp;</p>
          <p>
            It’s important to submit your application, test scores, and related
            materials as soon as possible — ideally, before the deadline. Your
            application materials will be reviewed once all of them have been
            received. Although deadlines vary by semester, here are some general
            deadlines to keep in mind:
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>
              SEMESTER I – SEPTEMBER <br /> Applications normally accepted:
            </strong>
            April – August
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>
              SEMESTER II – FEBRUARY <br /> Applications normally accepted:
            </strong>
            October – January
          </p>
          <p>&nbsp;</p>
          <div style={{ padding: "15px", background: "orange" }}>
            <p>
              <strong>
                APPLICATION DEADLINE FOR SEPTEMBER 2023 (Semester I)
              </strong>
            </p>
            <p>&nbsp;</p>
            <p>
              Early deadline: <strong>30th June 2023 </strong>
              <br /> Regular deadline (all programmes -
              <strong>*final deadline for Nursing applications</strong>) 14th
              July 2023 <br /> Late deadline (all programmes
              <strong> EXCEPT NURSING</strong>) - 11th August, 2023
            </p>
          </div>
          <p>&nbsp;</p>
          <p>
            <strong>DISCLAIMER:</strong> COSTAATT reserves the right to cancel
            or modify any programme advertised.
          </p>
        </section>
        <section></section>
      </div>
    </>
  );
};

export default requirements;
