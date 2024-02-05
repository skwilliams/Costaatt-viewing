import React from "react";
import HeadImage from "../../components/PageComponents/HeadImage";
import Head from "next/head";
import headImg from "../../../public/images/admissions/transferExemption header.jpg";
import ProgStyles from "../../styles/Programmes.module.scss";

import SideNavOnlyLayout from "../../components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "../../components/Layouts/TopNavOnly_NoDropdown";
import AdminStyles from "../../styles/Admissions.module.scss";
import { Accordion, Divider } from "@mui/material/";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DegreeCourses from "../../components/PageComponents/DegreeCourses";
import SimpleStep from "../../components/PageComponents/SimpleStep";

import {
  gce_Economics,
  gce_Geography,
  gce_Biology,
  gce_Accounting,
  gce_ICT,
  gce_MOB,
  gce_Physics,
  gce_Chemistry,
  cape_Accounting_Unit1,
  cape_Economics_Unit1,
  cape_Accounting_Unit2,
  cape_AppliedMath_Unit1,
  cape_AppliedMath_Unit2,
  cape_ArtDesign_Unit1,
  cape_Biology_Unit1_2,
  cape_Chemistry_Unit1,
  cape_Chemistry_Unit2,
  cape_Communication,
  cape_lit_Unit1or2,
  cape_puremath_Unit2,
  cape_spanish_Unit1_2,
  cape_spanish_Unit2,
  cape_socio_Unit2,
  cape_EntrepUnit1_2,
  cape_Economics_Unit2,
  cape_spanish_Unit1,
  cape_puremath_Unit1,
  cape_law_Unit1,
  cape_phy_Unit2,
  cape_mob_1,
  ca,
  pe_law_Unit1or2,
  cape_phy_Unit1,
  cape_ITUnit2,
  cape_ITUnit1,
  cape_HistoryUnit1,
  cape_Geography1_2,
  cape_lit_Unit1_2,
  cape_performArts_drama_Unit2,
} from "./exemptionCoursesData";

const transfercredits = () => {
  return (
    <>
      <Head>
        <title>Transfer Credit and Exemptions</title>
      </Head>

      <HeadImage mainimage={headImg} />
      <section id="intro" className={AdminStyles.sectionIntrotransfer}>
        <p className={AdminStyles.introtext}>
          We are excited that you have chosen COSTAATT to continue your studies!
          We know that you may be wondering about the possibility of obtaining
          transfer credit and/or exemptions for your prior learning. Please be
          sure to read the information below for helpful guidelines.
        </p>
      </section>
      <section id="frequestions" className={AdminStyles.sectionQuestions}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              What is Transfer Credit{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}>
              {" "}
              <b>Transfer credit </b> usually describes prior learning from a
              recognized institution which is accepted towards a course /
              qualification in another college or university. For example, if
              you have completed prior studies at post-secondary (e.g. CAPE or A
              Levels) or tertiary level, which may be equivalent to a course(s)
              within one of our programmes (associate or bachelor's degrees,
              diplomas or certificates), you may be eligible to receive transfer
              credit and accelerate your studies. Or if you have acquired
              relevant life or work experience, you may also be able to request
              transfer credit to one of our programmes, through our prior
              learning assessment programme.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              Who Can Obtain Transfer Credit and/or Exemption{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div className={AdminStyles.entryreq}>
              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>
                  CAPE / GCE A Level Graduates* *Credits / Exemptions may be
                  awarded to students who have completed CAPE examinations –
                  Units I and II, with grades I, II or III; or GCE Advanced
                  Levels, with grades A, B or C
                </li>
                <li className={AdminStyles.items}>
                  Holders of undergraduate degrees, postgraduate qualifications,
                  professional licensure or qualifications
                </li>
                <li className={AdminStyles.items}>
                  Persons with relevant life or work experience, should ask to
                  speak to an admissions counsellor
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              How Do I apply for Transfer Credit and/or Exemption?{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}>
              {" "}
              <b>
                If you are applying for admission to the college and would like
                to request transfer credit, please be sure to request a transfer
                credit / exemption form.
              </b>{" "}
            </p>

            <p className={AdminStyles.accordiantext}>
              STEP 1: Submit your application for admission <br />
              STEP 2: Discuss the nature of your transfer credit request with an
              admissions counsellor (CAPE, A Levels, Associate degree, other
              tertiary course(s)) <br />
              STEP 3: Complete and submit your transfer credit / exemption form
              along with the following supporting documents:
            </p>
            <div className={AdminStyles.entryreq}>
              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>
                  Academic certificate(s) (original and copy) for all
                  qualifications for which you are seeking transfer credit /
                  exemption
                </li>
                <li className={AdminStyles.items}>
                  Course outlines for qualifications other than CAPE (Caribbean
                  Advanced Proficiency Examination) or A Level subjects
                </li>
                <li className={AdminStyles.items}>
                  Official transcript (must be submitted in a sealed envelope
                  from the awarding institution)
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              How Many Credits can I Transfer{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}>
              {" "}
              <b>Applicants to Certificate or Diploma Programmes</b>
              <br />
              Students may transfer no more than thirty percent (30%) of the
              required credits into certificate or diploma programmes.
            </p>

            <div className={AdminStyles.entryreq}>
              <p className={AdminStyles.accordiantext}>
                <b>Applicants to Associate or Bachelor's Degrees</b> <br />
                Students may transfer no more than fifty percent (50%) of
                college level credits towards an associate and bachelor's degree
                at either programme level, of which:
              </p>

              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>
                  {" "}
                  no more than fifty percent (50%) of credits may be in the
                  major area of study; and
                </li>
                <li className={AdminStyles.items}>
                  {" "}
                  no more than fifty percent (50%) of credits may be in the core
                  curriculum or approved electives within the programme{" "}
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              Do I have to obatin a particular grade to qualify for Transfer
              Credit and/or Exemption?{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div className={AdminStyles.entryreq}>
              <p className={AdminStyles.accordiantext}>
                Transfer credits/exemptions may be awarded to students who have:
              </p>
              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>
                  CAPE qualifications - Units I and II, with grades I, II or
                  III; or
                </li>
                <li className={AdminStyles.items}>
                  GCE Advanced Levels, with grades A, B or C; or
                </li>
                <li className={AdminStyles.items}>
                  a level of achievement deemed equivalent to COSTAATT's 75%
                  grade score or above.
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              What are Some of the Criteria used to Assess Courses for Transfer
              Credit and/or Exemption{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div className={AdminStyles.entryreq}>
              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>
                  If the course objectives are deemed to be comparable or
                  equivalent to the target course at the College;
                </li>
                <li className={AdminStyles.items}>
                  Students' level of achievement{" "}
                  <i> refer to previous question </i>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              Can Courses that I transferred into my Last Institution be
              Considered for your Institution{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}>
              {" "}
              Unfortunately, we cannot consider credits represented as
              “Transfer” on an official transcript of another institution
              towards one of our programmes/courses.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              How recent should my courses be to qulity for Transfer Credit
              and/or Exemption{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}>
              {" "}
              Courses completed at a recognized post-secondary institution more
              than five (5) years prior to the date of application for transfer
              credit/exemption may not be considered.
            </p>
          </AccordionDetails>
        </Accordion>
      </section>

      <section
        id="exemptionlistgce"
        className={AdminStyles.sectionExemptionListGce}
      >
        <p className={ProgStyles.headingprimary}> GCE Course Exemptions </p>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Accounting{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={gce_Accounting} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Biology{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={gce_Biology} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Chemistry{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={gce_Chemistry} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Physics{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={gce_Physics} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Management of Business{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={gce_MOB} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Information Science Technology{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={gce_ICT} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Geography{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={gce_Geography} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Economics{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={gce_Economics} />
          </AccordionDetails>
        </Accordion>

        {/* <table className={ProgStyles.academiccalendar}>
          <thead>
            <tr>
              <th>GCE Subjects</th>
              <th>COSTAATT Courses Exemptions/Transfer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span style={{ color: "orangered" }}>
                  <b>Accounting </b>
                </span>
              </td>
              <td>
                <table className="publicholidays-table">
                  <tbody>
                    <tr>
                      <td>ACCT 126</td>
                      <td> Fundamentals of Accounting </td>
                    </tr>
                    <tr>
                      <td>ACCT 215</td>
                      <td>Intermediate Accounting II</td>
                    </tr>
                    <tr>
                      <td>ACCT 210</td>
                      <td> Cost and Managemnt Accounting</td>
                    </tr>
                    <tr>
                      <td>ACCT 204</td>
                      <td>Financial Procedures and Budgeting</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table> */}
      </section>

      <section
        id="exemptionlistcape"
        className={AdminStyles.sectionExemptionListCape}
      >
        <p className={ProgStyles.headingprimary}> CAPE Course Exemptions </p>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Accounting{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={AdminStyles.twoColGridCon}>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 1 : Financial Accounting
                </p>

                <DegreeCourses courses={cape_Accounting_Unit1} />
              </div>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 2 : Cost and Management Accounting
                </p>{" "}
                <DegreeCourses courses={gce_Accounting} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Applied Mathematics{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={AdminStyles.twoColGridCon}>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 1 :Statistical Analysis{" "}
                </p>

                <DegreeCourses courses={cape_AppliedMath_Unit1} />
              </div>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 2 : Mathematical Applications
                </p>{" "}
                <DegreeCourses courses={cape_AppliedMath_Unit2} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Art and Design{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={AdminStyles.secondheading}>
              Unit 1 :Foundations of Art and Design & Unit 2 : Applications of
              Art and Design
            </p>

            <DegreeCourses courses={cape_ArtDesign_Unit1} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Biology{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={AdminStyles.twoColGridCon}>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 1 : Biomolecules, Reproduction and Development{" "}
                </p>

                <DegreeCourses courses={cape_Biology_Unit1_2} />
              </div>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 2 : Bioenergetics, Biosystems and Applications
                </p>{" "}
                <DegreeCourses courses={cape_Biology_Unit1_2} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Chemistry{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={AdminStyles.twoColGridCon}>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 1 : Chemical Principles and Applications I{" "}
                </p>

                <DegreeCourses courses={cape_Chemistry_Unit1} />
              </div>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 2 : Chemical Principles and Applications II{" "}
                </p>{" "}
                <DegreeCourses courses={cape_Chemistry_Unit2} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Communication Studies{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DegreeCourses courses={cape_Communication} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Economics{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={AdminStyles.twoColGridCon}>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 1 (Microeconomics){" "}
                </p>

                <DegreeCourses courses={cape_Economics_Unit1} />
              </div>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 2 : Macroeconomics
                </p>{" "}
                <DegreeCourses courses={cape_Economics_Unit2} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Entrepreneurship{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={AdminStyles.secondheading}>
              Unit 1 : Entrepreneurship Theory <br /> Unit 2 : Entrepreneurship
              Practice <br />
              <span className={AdminStyles.emphasis}>
                {" "}
                **Both Unit 1 and 2 must be passed to gain exemptions
              </span>
            </p>

            <DegreeCourses courses={cape_EntrepUnit1_2} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Geography{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={AdminStyles.secondheading}>
              Unit 1 : Population Geography, Geomorphic Processes & Hazards{" "}
              <br /> {"  "}
              Unit 2 : Climate, Economic Activity and Development <br />{" "}
              {"      "}
              <span className={AdminStyles.emphasis}>
                {" "}
                **Both Unit 1 and 2 must be passed to gain exemptions
              </span>
            </p>

            <DegreeCourses courses={cape_Geography1_2} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              History{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={AdminStyles.secondheading}>
              Unit 1 : The Caribbean in the Atlantic World{" "}
            </p>

            <DegreeCourses courses={cape_HistoryUnit1} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Information Technology{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={AdminStyles.twoColGridCon}>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 1 : Information Technology Theory{" "}
                </p>

                <DegreeCourses courses={cape_ITUnit1} />
              </div>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 2 : Application and Implication{" "}
                </p>{" "}
                <DegreeCourses courses={cape_ITUnit2} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Law{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={AdminStyles.secondheading}>Unit 1 : Public Law </p>

            <DegreeCourses courses={cape_law_Unit1} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Literatures in English{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={AdminStyles.twoColGridCon}>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>Unit 1 and Unit 2</p>

                <DegreeCourses courses={cape_lit_Unit1_2} />
              </div>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>Unit 1 or Unit 2</p>{" "}
                <DegreeCourses courses={cape_lit_Unit1or2} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Management of Business{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={AdminStyles.secondheading}>
              Unit 1 : Management Principles and Processes{" "}
            </p>

            <DegreeCourses courses={cape_mob_1} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Performing Arts{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={AdminStyles.secondheading}>
              Unit 2 : Theory, Practice and Innovation Option C (Drama)
            </p>

            <DegreeCourses courses={cape_performArts_drama_Unit2} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Physics{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={AdminStyles.twoColGridCon}>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 1 : Mechanics, Waves, Properties of Matter{" "}
                </p>

                <DegreeCourses courses={cape_phy_Unit1} />
              </div>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 2 : Electricity and Magnetism, A.C. Theory and Atomic and
                  Nuclear Physics{" "}
                </p>{" "}
                <DegreeCourses courses={cape_phy_Unit2} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Pure Mathematics{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={AdminStyles.twoColGridCon}>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 1: Algebra, Geometry and Calculus
                </p>

                <DegreeCourses courses={cape_puremath_Unit1} />
              </div>
              <div className={AdminStyles.twoColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 2 : Complex Numbers, Analysis and Matrices{" "}
                </p>{" "}
                <DegreeCourses courses={cape_puremath_Unit2} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Sociology{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={AdminStyles.secondheading}>
              Unit 2 :Development and Social Change
            </p>

            <DegreeCourses courses={cape_socio_Unit2} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={900} fontSize={19}>
              Spanish{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={AdminStyles.threeColGridCon}>
              <div className={AdminStyles.threeColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 1 <br /> La familia, la sociedad y el medio ambiente{" "}
                </p>

                <DegreeCourses courses={cape_spanish_Unit1} />
              </div>

              <div className={AdminStyles.threeColGrid}>
                <p className={AdminStyles.secondheading}>
                  Unit 2 <br /> Las actualidades, la tecnología y la economía{" "}
                </p>{" "}
                <DegreeCourses courses={cape_spanish_Unit2} />
              </div>

              <div className={AdminStyles.threeColGrid}>
                <Divider orientation="vertical" flexItem />
                <p className={AdminStyles.secondheading}>
                  Units 1 & 2
                  <br /> <br />
                  <br />{" "}
                </p>{" "}
                <DegreeCourses courses={cape_spanish_Unit1_2} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </section>

      <section id="howtoapply" className={AdminStyles.sectionHowTo}>
        <p className={ProgStyles.headingprimary}>How to apply for Exemptions</p>
        <SimpleStep />
      </section>
    </>
  );
};

export default transfercredits;
