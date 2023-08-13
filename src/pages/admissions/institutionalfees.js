import React from 'react';
import admissionStyles from '../../styles/Admissions.module.scss';
import home5 from '../../../images/Links/home5.png';
import TopHeader from '@/components/TopHeader';
import ButtonLink from '@/components/HomeComponents/ButtonLink';
// import Button from "@/components/Button";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
} from './admissionsData';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
import FeesAndFunding from '@/components/FeesAndFunding';
const institutionalfees = () => {
  return (
    <>
      <HeaderNoImage caption="Institutional Fees" />

      <div className={admissionStyles.applicationInstructions}>
        <section>
          <h1> INSTITUTIONAL FEES</h1> <p>&nbsp;</p>
          <p>
            The table below provides a summary of fees payable to the College.
            Education Only nationals of Trinidad and Tobago are eligible to
            receive government&#39;s GATE funding for <span> tuition </span>
            expenses listed hereunder.
          </p>
          <p>&nbsp;</p>
          <div>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead
                  sx={{
                    backgroundColor: " rgb(67, 63, 64, 0.5) ",
                    color: "white",
                  }}
                >
                  <TableRow>
                    <TableCell>Fees</TableCell>
                    <TableCell>Citizens</TableCell>
                    <TableCell>Caricom</TableCell>
                    <TableCell>International</TableCell>
                    <TableCell> Per</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {institutionFees.map((row) => (
                    <TableRow key={row.Fees}>
                      <TableCell>{row.Fees}</TableCell>
                      <TableCell>{row.Citizens}</TableCell>
                      <TableCell>{row.Caricom}</TableCell>
                      <TableCell>{row.International}</TableCell>
                      <TableCell>{row.Per}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <br />
          <p className={admissionStyles.disclaimer}>
            Disclaimer: COSTAATT reserves the right to modify fees as may be
            necessary.
          </p>
        </section>
        <br />

        <section>
          <div>
            <h1 className={admissionStyles.secondaryheading}>
              Student Insurance{" "}
            </h1>
            <p className={admissionStyles.detailstext}>
              Included in the college fees, is basic insurance coverage for
              accident and injury. However, CARICOM and international students
              are also required to secure additional insurance to cover medical
              expenses. All students of COSTAATT are required to pay an annual
              insurance fee of $30.00. Completed student insurance forms must be
              submitted to the College at the beginning of the first semester in
              which students register for the academic year. Coverage is
              restricted to students who are between ages 15 to 75.
            </p>
          </div>
          <div>
            <h1 className={admissionStyles.secondaryheading}>
              Technology Fees
            </h1>
            <p className={admissionStyles.detailstext}>
              Included in the college fees, is basic insurance coverage for
              accident and injury. However, CARICOM and international students
              are also required to secure additional insurance to cover medical
              expenses. All students of COSTAATT are required to pay an annual
              insurance fee of $30.00. Completed student insurance forms must be
              submitted to the College at the beginning of the first semester in
              which students register for the academic year. Coverage is
              restricted to students who are between ages 15 to 75.
            </p>
          </div>
        </section>
        {/* 
            <h1>METHOD OF PAYMENT</h1>
            <p>The College accepts the following methods of payment:</p>
            <ul>
              <li> Cash </li>
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
        </section>
        <section>
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
      </div>
    </>
  );
};
export default institutionalfees;
