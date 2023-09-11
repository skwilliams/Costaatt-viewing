import React from 'react';
import admissionStyles from '../../styles/Admissions.module.scss';
import Image from "next/image";
import ProgStyles from "../../styles/Programmes.module.scss";
import SideNavOnlyLayout from "@/components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";

import CourseStyle from "@/styles/Course.module.scss";
import Link from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { supportDocA, supportDocB } from './admissionsData';
import Head from "next/head"
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Divider,
} from '@mui/material';
import { Padding } from '@mui/icons-material';
import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
const requirements = () => {
  return (
    <>
      <Head>
        {" "}
        <title> Admissions Requirements</title>
      </Head>
      <HeaderNoImage caption="Requirements" />
      <p className={admissionStyles.toplinksnav}>
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/admissions">Admissions/</Link>
        <Link href="/admissions/requirements">Requirements</Link>
      </p>
      <SideNavOnlyLayout>
        <section id="minreq" className={admissionStyles.sectionforSideNav}>
          <h1 className={admissionStyles.sectiontextleft}>
            Mimimum Requirements
          </h1>
          <br />
          <div className={admissionStyles.entryreq}>
            <ul className={admissionStyles.list}>
              <li className={admissionStyles.items}>
                Five (5) CSEC (CXC)/GCE O&#39;Level subjects, inclusive of
                English A and Mathematics,
                <p className={CourseStyle.footnote}>
                  Grades 1,2,3* or A, B, C. *Grade 3 accepted if attained in
                  June 1998 and beyond
                </p>
              </li>

              <li className={admissionStyles.items}>
                Applicants who possess CAPE or A&#39;Level qualiﬁcations may be
                considered for advanced standing (the award of credits towards
                your degree programme). <Link href="">Find out more.</Link>
              </li>
            </ul>
          </div>
          <div></div>
        </section>
        <section id="minsSchreq" className={admissionStyles.sectionforSideNav}>
          <p className={admissionStyles.sectiontextleft}>
            School Specific Requirements
          </p>

          <p className={admissionStyles.schoolheading}>
            School of Nursing, Health and Medial Technologies
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
              <Accordion sx={{ my: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight="bold" fontSize={"1.15rem"}>
                    Sciences Required for specific programmes
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
              </Accordion>

              <li className={admissionStyles.items}>
                To be admitted to the following programmes, short-listed
                applicants must be successful at an admissions interview:
                Nursing, Medical Laboratory Technology, Radiography,
                Environmental Health.
              </li>
            </ul>
          </div>

          <div className={admissionStyles.entryreq}>
            <p className={admissionStyles.schoolheading}>
              School of Liberal Arts, Education and Digital Humanities
            </p>
            <ul className={admissionStyles.list}>
              <li className={admissionStyles.items}>
                To be admitted to the music programme (bachelor's and associate
                degree), short-listed applicants will be required to
                successfully complete the audition process.
              </li>

              <li className={admissionStyles.items}>
                To be admitted to the following programmes, short-listed
                applicants must be successful at an admissions interview: BSW
                Social Work, Early Childhood Care and Education and BSc Applied
                Psychology.
              </li>
            </ul>
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
        <section id="suppDocs" className={admissionStyles.sectionforSideNav}>
          <p className={admissionStyles.sectiontextleft}>
            Supporting Documents
          </p>
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
          </div>
        </section>
        <section id="suppAddDocs" className={admissionStyles.sectionforSideNav}>
          <p className={admissionStyles.sectiontextleft}>
            Supporting Documents
          </p>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "orange" }}>
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
        </section>
        <section id="alterRoutes" className={admissionStyles.sectionforSideNav}> 
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
            duration of study in COMPASS depends on students' entry-level
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
            It's important to submit your application, test scores, and related
            materials as soon as possible — ideally, before the deadline. Your
            application materials will be reviewed once all of them have been
            received. Although deadlines vary by semester, here are some general
            deadlines to keep in mind:
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>
              SEMESTER I - SEPTEMBER <br /> Applications normally accepted:
            </strong>
            April -August
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>
              SEMESTER II - FEBRUARY <br /> Applications normally accepted:
            </strong>
            October - January
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
        {/* </div> */}{" "}
      </SideNavOnlyLayout>
    </>
  );

};

requirements.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};
export default requirements;
