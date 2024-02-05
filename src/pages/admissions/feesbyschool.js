import React from "react";
import admissionStyles from "../../styles/Admissions.module.scss";
import TopHeader from "../../components/TopHeader";
import CardStyles from "../../styles/ProgCard.module.scss";
import ButtonLink from "../../components/HomeComponents/ButtonLink";
// import Button from "../../components/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  institutionFees,
  deptOfInformation,
  deptOfNursingFees,
  deptOfHealth,
  dptOfManagementFees,
  dptOfNatSci,
  dptOfEnvStud,
  schoolOfCrimJus,
  dptOfMath,
  officeOfDean,
  dptOfSocBehSci,
  deptOfLang,
  dptofFineArts,
  comensentoryProg,
  continuingEduc,
  deptOFJour,
  deptOfComm,
} from "./admissionsData";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import HeaderNoImage from "../../components/PageComponents/HeaderNoImage";
import FeesAndFunding from "../../components/FeesAndFunding";
import { AdminPanelSettings } from "@mui/icons-material";
const feesandfunding = () => {
  return (
    <>
      <HeaderNoImage caption="Tution Fees by Programmes" />
      <p className={CardStyles.urllayout}>
        COSTAATT / Admissions and Aid/Tution School Fees
      </p>

      {/* <div className={admissionStyles.applicationInstructions}> */}
      <section className={admissionStyles.applicationInstructions}>
        <h1>ESTIMATE OF TOTAL TUITION BY PROGRAMME</h1> <p>&nbsp;</p>
        <p>
          <strong>
            IMPORTANT NOTE: Fees listed in the tables below are estimates ONLY
          </strong>
          and should be used as guidance. They do not include charges for
          developmental or repeated courses.
          <br /> All fees listed are in Trinidad and Tobago dollars (TTD)
        </p>
        <p>&nbsp;</p>
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                SCHOOL OF BUSINESS AND INFORMATION
              </Typography>
            </AccordionSummary>
            <AccordionSummary>
              <Typography>
                DEPARTMENT OF MANAGEMENT AND ENTREPRENEURSHIP
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={dptOfManagementFees} />
            </AccordionDetails>
            <AccordionSummary>
              <Typography>DEPARTMENT OF INFORMATION AND TECHNOLOGY</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={deptOfInformation} />
            </AccordionDetails>
          </Accordion>
          {/* ......................................................... */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                SCHOOL OF NURSING, HEALTH AND ENVIRONMENTAL SCIENCES
              </Typography>
            </AccordionSummary>
            <AccordionSummary>
              <Typography>DEPARTMENT OF NURSINGP</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={deptOfNursingFees} />
            </AccordionDetails>
            <AccordionSummary>
              <Typography>DEPARTMENT OF HEALTH SCIENCE TECHNOLOGIES</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={deptOfHealth} />
            </AccordionDetails>{" "}
            <AccordionSummary>
              <Typography>DEPARTMENT OF NATURAL AND LIFE SCIENCES</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={dptOfNatSci} />
            </AccordionDetails>{" "}
            <AccordionSummary>
              <Typography>DEPARTMENT OF ENVIRONMENTAL STUDIES</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={dptOfEnvStud} />
            </AccordionDetails>
          </Accordion>
          {/* ......................................................... */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                SCHOOL OF AND LIBERAL ARTS AND HUMAN SERVICES
              </Typography>
            </AccordionSummary>
            <AccordionSummary>
              <Typography>
                DEPARTMENT OF CRIMINAL JUSTICE AND LEGAL STUDIES
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* // <FeesAndFunding dept={dptOfManagementFees} /> */}
            </AccordionDetails>
            <AccordionSummary>
              <Typography>DEPARTMENT OF MATHEMATICS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={dptOfMath} />
            </AccordionDetails>
            <AccordionSummary>
              <Typography>OFFICE OF THE DEAN</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={officeOfDean} />
            </AccordionDetails>
            <AccordionSummary>
              <Typography>
                DEPARTMENT OF SOCIAL AND BEHAVIOURAL SCIENCES
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={dptOfSocBehSci} />
            </AccordionDetails>
            <AccordionSummary>
              <Typography>
                DEPARTMENT OF LANGUAGES, LITERATURE AND COMMUNICATION STUDIES
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={deptOfLang} />
            </AccordionDetails>
            <AccordionSummary>
              <Typography>DEPARTMENT OF FINE AND PERFORMING ARTS </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={dptofFineArts} />
            </AccordionDetails>
          </Accordion>
          {/* ......................................................... */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                SCHOOL OF CONTINUING EDUCATION AND LIFELONG LEARNING
              </Typography>
            </AccordionSummary>
            <AccordionSummary>
              <Typography>CONTINUING EDUCATION</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={continuingEduc} />
            </AccordionDetails>
          </Accordion>
          {/* ......................................................... */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                KEN GORDON SCHOOL OF JOURNALISM AND COMMUNICATION STUDIES
              </Typography>
            </AccordionSummary>
            <AccordionSummary>
              <Typography>DEPARTMENT OF JOURNALISM AND MEDIA </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={deptOFJour} />
            </AccordionDetails>
            <AccordionSummary>
              <Typography>DEPARTMENT OF COMMUNICATION STUDIES </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeesAndFunding dept={deptOfComm} />
            </AccordionDetails>
          </Accordion>
        </div>
        <br />
        <p className={admissionStyles.emphasis}>
          {" "}
          Institutional fees are non-refundable. Students who officially
          withdraw from the College may be eligible for a refund of tuition fees
          in accordance with the schedule outlined in the Academic Calendar.
          Please note that students in receipt of GATE funding are not eligible
          for tuition refunds.
        </p>
      </section>
      {/* <section>
          
          <div>
            <h1>METHOD OF PAYMENT</h1>
            <p>The College accepts the following methods of payment:</p>
            <ul>
              <li>Cash </li>
              <li>LINX</li>
              <li>Visa/Master card </li>
              <li>Certified/Manager&#39;s cheque</li>
            </ul>
            <p>
              Institutional fees are non-refundable. Students who officially
              withdraw from the College may be eligible for a refund of tuition
              fees in accordance with the schedule outlined in the Academic
              Calendar. Please note that students in receipt of GATE funding are
              not eligible for tuition refunds.
            </p>
          </div>
        </section> */}
      {/* <section>
          <h1>FINANCIAL AID</h1>
          <p>
            <strong>
              The Government Assistance for Tuition Expenses (GATE)
            </strong>
          </p>
          <p>
            The Government Assistance for Tuition Expenses programme (GATE)
            provides free tuition to all eligible citizens of Trinidad and
            Tobago pursuing approved programmes at public and private tertiary
            level institutions. Information on eligibility and conditions for
            accessing GATE funding is available at the Ministry of Education
            website <a href="http://www.moe.gov.tt">www.moe.gov.tt</a>
          </p>
          <p>
            <strong>
              Important: <br />
              Students must note that GATE funding is available for the duration
              of their course of study and one year beyond. Students who fail to
              complete their programme within the stipulated time frame will be
              required to meet the cost of programme completion.
            </strong>
          </p>
          <p>
            The Government Assistance for Tuition Expenses (GATE) programme is a
            tuition fee funding programme offered by the Government of Trinidad
            and Tobago. Only nationals of Trinidad and Tobago are eligible to
            apply, and students must be registered in a course of study leading
            to a tertiary level qualification. For further information on the
            GATE programme please visit the website of the{' '}
            <a href="http://https://moe.gov.tt/"> Ministry of Education</a>.
            <br /> The vast majority of the College’s programmes are eligible
            for GATE. For a full list of these programmes please contact the
            Admissions Department, Tel 625-5030 ext 5900
          </p>
          <p>
            <strong>Higher Education Loan Programme (HELP)</strong>
            The Higher Education Loan Programme (HELP) is a special loan
            facility made available to citizens of Trinidad and Tobago who are
            enrolled in an approved tertiary level programme at a registered
            tertiary institution to meet the following expenses:
          </p>
          <ul>
            <li>tuition fees</li>
            <li>accommodation</li>
            <li>airfare and other transportation costs</li>
            <li>personal maintenance costs and living expenses</li>
            <li>books and related materials</li>
            <li>special equipment</li>
            <li>other related tertiary expenses</li>
          </ul>
          <p>
            For further information on the Higher Education Loan Programme
            (HELP) students can visit the Ministry of Education website at:
            www.moe.gov.tt
          </p>
          <p>
            <strong>Payment Plans</strong>
          </p>
          <p>
            Payment plans are available, please contact the Office of the
            Registrar for further details:{' '}
            <a href="mailto:registrar@costaatt.edu.tt">
              registrar@costaatt.edu.tt
            </a>
          </p>
        </section> */}
      {/* </div> */}
    </>
  );
};
export default feesandfunding;
