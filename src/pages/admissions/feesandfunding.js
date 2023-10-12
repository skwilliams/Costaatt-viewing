import React from 'react'
import Head from 'next/head'
import AdminStyles from '../../styles/Admissions.module.scss'

import HeadImage from '@/components/PageComponents/HeadImage';
import headImg from '../../../public/images/admissions/feesandfunding.jpg'
import SchoolTile from '@/components/HomeComponents/SchoolTile';
import Link from "next/link"
import CourseStyles from '../../styles/Course.module.scss'
import SimpleCard from '../../components/PageComponents/SimpleCard'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import paymentplanpdf from "../../../public/lib/paymentplan.pdf"


import {

  TILES_INFO,

} from "../../components/HomeComponents/homeLinks"








const feesandfunding = () => {
  return (
    <>
      <Head>
        <title>Fees and Funding </title>
      </Head>

      <HeadImage imagetext="" mainimage={headImg} />

      <section id="intro" className={AdminStyles.sectionfeesintro}>
        <div className={AdminStyles.introtext}>
          Going to university is one of the biggest investments in your future
          you'll make. We are here to support your future success and make
          education reachable. We are committed to transforming lives and making
          education accessible. We will work with you and provide avenues to
          help you launch the career of your dreams
        </div>
      </section>

      <section id="tuition" className={AdminStyles.sectiontuition}>
        <p className={AdminStyles.sectiontext}>All about Fees</p>

        <div className={AdminStyles.threeColGridCon}>
          <div className={AdminStyles.threeColGrid}>
            <SimpleCard
              text=" Fees By Programmes "
              linkpage="/admissions/feesbyschool"
            />
          </div>
          <div className={AdminStyles.threeColGrid}>
            <SimpleCard
              text="Short Courses Fees"
              linkpage="/admissions/feesbyshortcourses"
            />
          </div>
          <div className={AdminStyles.threeColGrid}>
            <SimpleCard
              text="Institutional Fees"
              linkpage="/admissions/institutionalfees"
            />
          </div>
        </div>
      </section>
      <section
        id="methodsofpayment"
        className={AdminStyles.sectionmethodofpayment}
      >
        <p className={AdminStyles.sectiontext}>Methods of Payment</p>
        <div className={AdminStyles.twoColGridCon}>
          <div className={AdminStyles.twoGridCol}>
            <div className={AdminStyles.entryreq}>
              {" "}
              The College accepts the following methods of payment{" "}
              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>CASH</li>
                <li className={AdminStyles.items}>LINX</li>
                <li className={AdminStyles.items}>Visa/MasterCard</li>
                <li className={AdminStyles.items}>
                  Certified/Manager's cheque
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className={AdminStyles.twoGridCol}>
            <div>
              <SimpleCard text="How to Pay" linkpage="/admissions/howtopay" />
            </div>
          </div>
        </div>
      </section>

      <section id="finsupport" className={AdminStyles.sectionfinsupport}>
        <p className={AdminStyles.sectiontext}>Financial Support</p>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize="20px">
              The Government Assistance for Tuition Expenses (GATE){" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}>
              {" "}
              The Government Assistance for Tuition Expenses programme GATE
              provides free tuition to all eligible citizens of Trinidad and
              Tobago pursuing approved programmes at public and private tertiary
              level institutions. Information on eligibility and conditions for
              accessing GATE funding is available at the Ministry of Education
              website at: www.moe.gov.tt
            </p>

            <p className={AdminStyles.emphasis}>
              Important: Students must note that GATE funding is available for
              the duration of their course of study and one year beyond.
              Students who fail to complete their programme within the
              stipulated time frame will be required to meet the cost of
              programme completion.
            </p>
            <p className={AdminStyles.accordiantext}>
              The Government Assistance for Tuition Expenses (GATE) programme is
              a tuition fee funding programme offered by the Government of
              Trinidad and Tobago. Only nationals of Trinidad and Tobago are
              eligible to apply, and students must be registered in a course of
              study leading to a tertiary level qualification. For further
              information on the GATE programme please visit the website of the
              Ministry of Education. The vast majority of the College’s
              programmes are eligible for GATE. For a full list of these
              programmes please contact the Admissions Department, Tel 625-5030
              ext 5900
            </p>
          </AccordionDetails>
        </Accordion>
        {/* ......................................................... */}

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize="20px">
              Higher Education Loan Programme (HELP)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={AdminStyles.entryreq}>
              <p className={AdminStyles.accordiantext}>
                The Higher Education Loan Programme (HELP) is a special loan
                facility made available to citizens of Trinidad and Tobago who
                are enrolled in an approved tertiary level programme at a
                registered tertiary institution to meet the following expenses:
              </p>

              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}> tuition fees </li>
                <li className={AdminStyles.items}> accommodation</li>
                <li className={AdminStyles.items}>
                  {" "}
                  airfare and other transportation costs
                </li>
                <li className={AdminStyles.items}>
                  {" "}
                  personal maintenance costs
                </li>
                <li className={AdminStyles.items}> living expenses </li>
                <li className={AdminStyles.items}>
                  {" "}
                  books and related materials
                </li>
                <li className={AdminStyles.items}> special equipment</li>
                <li className={AdminStyles.items}>
                  {" "}
                  other related tertiary expenses
                </li>
              </ul>

              <p>
                {" "}
                For further information on the Higher Education Loan Programme
                (HELP) students can visit the Ministry of Education website at:
                www.moe.gov.tt{" "}
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* ......................................................... */}

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize="20px">
              Payment Plan
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
           <p className={AdminStyles.accordiantext}>  Payment Plan Details Payment plans are available, please contact the
            Office of the Registrar for further details:
            registrar@costaatt.edu.tt </p>
            <div className={AdminStyles.entryreq}>
              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>
                  {" "}
                  Students accessing the payment plan will be required to pay a
                  payment plan processing fee of $50.00 for each semester in
                  which a plan is accessed. This processing fee is
                  non-refundable.
                </li>
                <li className={AdminStyles.items}>
                  College fees will not be included in the payment plan.
                </li>
                <li className={AdminStyles.items}>
                  {" "}
                  Students accessing the payment plan are required to pay
                  college fees in full before submitting the payment plan
                  application.{" "}
                </li>
                <li className={AdminStyles.items}>
                  {" "}
                  Students wishing to access the College’s payment plan must
                  apply by completing the approved Payment Plan Application Form
                  available through authorised offices.{" "}
                </li>
                <li className={AdminStyles.items}>
                  Payment plans are not available to students on scholarship or
                  sponsorship for the semester in which the plan is being
                  accessed
                </li>
                <li className={AdminStyles.items}>
                  Eligible applicants for a payment plan will be entered on
                  Banner. Thereafter the payment plan agreement must be signed.
                </li>
                <li className={AdminStyles.items}>
                  Students entering into a payment plan agreement should do so
                  before the expiration of the fee payment deadline to avoid
                  late fee charges. Students who seek to apply for a plan after
                  the expiration of the fee payment deadline will be charged the
                  late fee.
                </li>
                <li className={AdminStyles.items}>
                  Students who have entered into a payment plan agreement with
                  the College will be placed on a financial hold for every
                  missed instalment.
                </li>
                <li className={AdminStyles.items}>
                  Students who fail to fulfil the conditions of a previous
                  payment plan agreement will not be permitted to access this
                  facility in subsequent semesters until such time that the
                  previous debt has been paid in full.
                </li>
                <li className={AdminStyles.items}>
                  The College accepts cash, manager's cheques, bank
                </li>
              </ul>
              <p>To insert payment plan pdf</p>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* ......................................................... */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize="20px">
              Scholarships and Bursaries{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}> </p>
            Scholarships
          </AccordionDetails>
        </Accordion>
      </section>
    </>
  );
}





export default feesandfunding