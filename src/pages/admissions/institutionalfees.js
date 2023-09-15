import React from 'react';
import admissionStyles from '../../styles/Admissions.module.scss';
import TopNavOnly_NoDropdown from '../../components/Layouts/TopNavOnly_NoDropdown'

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
                    fontSize: "1rem",
                  }}
                >
                  <TableRow className={admissionStyles.head}>
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
          <p className={admissionStyles.emphasis}>
            {" "}
            Institutional fees are non-refundable. Students who officially
            withdraw from the College may be eligible for a refund of tuition
            fees in accordance with the schedule outlined in the Academic
            Calendar. Please note that students in receipt of GATE funding are
            not eligible for tuition refunds.{" "}
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
              Technlogy fees includes use of lab facilities at any of our
              campuse, Use of printers.
            </p>
          </div>
        </section>
        
      </div>
    </>
  );
};
export default institutionalfees;

TopNavOnly_NoDropdown.getLayout = function getLayout(page) {
  return <TopNavOnly_NoDropdown>{page}</TopNavOnly_NoDropdown>;
};