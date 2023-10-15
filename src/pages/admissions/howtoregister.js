import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
import React from 'react'
import Head from 'next/head';
import AdmisStyles from "@/styles/Admissions.module.scss"
import SideNavOnlyLayout from '@/components/Layouts/SideNavOnly_NoTopOrDropdown';
import standardStyles from "@/styles/main.module.scss";

import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";
import { AdminPanelSettings, StayCurrentLandscape } from '@mui/icons-material';
import Image from "next/image"
import downloadicon from "../../../public/images/admissions/downloadnoteicon.svg";

import Link from "next/link"
import { Divider } from '@mui/material';

const howtoregister = () => {
    return (
      <>
        <Head>
          {" "}
          <title> How to register </title>
        </Head>
        <HeaderNoImage caption={"How to register"} />
        <SideNavOnlyLayout>
          <section
            id="checklist"
            className={`${AdmisStyles.sectionregChecklist}  ${standardStyles.marginBottomBig}`}
          >
            {/* <p className={AdmisStyles.sectiontextleft}> Registration Steps</p> */}

            <div className={AdmisStyles.entryreq}>
              <p className={AdmisStyles.introtext}>
                We are so excited that you have joined the COSTAATT family
                <br />
                We look forward to meeting and engaging with you <br />
              </p>
              <p className={AdmisStyles.sectiontext}>
                You are almost ready to start your journey{" "}
              </p>
              <p className={AdmisStyles.bannerSub}>
                Here's what's left to be done{" "}
              </p>

              <ul className={AdmisStyles.list}>
                <li className={AdmisStyles.items}>Receive Advisement </li>
                <li className={AdmisStyles.items}>Register for Courses</li>
                <li className={AdmisStyles.items}>
                  Apply for Gate(if eligible)
                </li>
                <li className={AdmisStyles.items}>Pay Fees</li>
                <li className={AdmisStyles.items}>Collect Student Id</li>
              </ul>
            </div>
          </section>

          <seciton
            id="advising"
            className={`${AdmisStyles.sectionAdvising} ${standardStyles.marginBottomBig}`}
          >
            <h2 className={standardStyles.newsHeading}>
              <span> ACADEMIC</span> Advisement
            </h2>

            <p className={AdmisStyles.bannerSub}>
              Meet your Academic Advisor Online{" "}
            </p>
            <p className={AdmisStyles.text}>
              Your <b> academic department</b> will contact you to make and
              appointment for <b>online </b>advisement
            </p>
            <p className={AdmisStyles.text}>
              Your <b>advisor</b> will <b>assign</b> and approve the courses for
              which you must register{" "}
            </p>
            <p className={AdmisStyles.text}>
              {" "}
              <b>Registration</b> for new students opens on{" "}
              <b>28 August,2023</b>
            </p>
            <p className={AdmisStyles.text}>
              <b>If </b>you do not hear from your academic department by{" "}
              <u>21 August 2023,</u> please send and email to your{" "}
              <a>department contacts</a>
            </p>
          </seciton>
          <section
            id="register"
            className={`${AdmisStyles.sectionRegister}   ${standardStyles.marginTopBig} ${standardStyles.marginBottomBig}`}
          >
            <h2 className={standardStyles.newsHeading}>
              <span> REGISTRATION</span>
            </h2>

            <p className={AdmisStyles.bannerSub}>
              Using Banner for Self-Registration Online
            </p>
            <div className={AdmisStyles.entryreq}>
              <ol className={AdmisStyles.list}>
                <li className={AdmisStyles.items}>
                  Login to{" "}
                  <a
                    className={AdmisStyles.anchortag}
                    href="https://ssb-prod.ec.costaatt.edu.tt/"
                  >
                    Self Service Banner{" "}
                  </a>
                  ( See{" "}
                  <a
                    className={AdmisStyles.anchortag}
                    href="https://ssb-prod.ec.costaatt.edu.tt/"
                  >
                    {" "}
                    video{" "}
                  </a>
                  for instructions.)
                </li>{" "}
                <li className={AdmisStyles.items}>
                  Enter your username found at top left of your acceptance
                  letter e.g. 00099999.
                </li>
                <li className={AdmisStyles.items}>
                  {" "}
                  Your PIN/password is your date of birth in the format DDMMYY
                  e.g. 061204.{" "}
                </li>{" "}
                <li className={AdmisStyles.items}>
                  Follow the prompts to create a new password and security
                  profile for yourself.{" "}
                </li>
                <li className={AdmisStyles.items}>
                  Using your Course Approval Form, register only for approved
                  courses.
                </li>{" "}
                <li className={AdmisStyles.items}>
                  Download and save your Student Invoice and Week at a Glance
                  schedule for future reference.
                </li>{" "}
                {/* <p className={AdmisStyles.anchortag}> */}{" "}
                <Link
                  href="/pdfs/FINAL Online Payment Manual 15.08.18 v1.0.pdf"
                  target="_blank"
                  className={AdmisStyles.anchortag}
                >
                  {/* {" "} */}
                  You can refer to Banner Online Payment Manual to use our
                  mobile app
                </Link>{" "}
                {/* </p> */}
              </ol>
            </div>
          </section>
          <section
            id="gate"
            className={`${AdmisStyles.sectionGate} ${standardStyles.marginBottomBig}`}
          >
            <h2 className={standardStyles.newsHeading}>
              <span> GATE</span> Application
            </h2>
            <p className={AdmisStyles.bannerSub}>
              {" "}
              <b> Trinidad and Tobago Nationals Only </b>
            </p>
            <div className={AdmisStyles.entryreq}>
              <ul className={AdmisStyles.list}>
                <li className={AdmisStyles.items}>
                  In order to apply for GATE funding, you will need a GATE
                  e-Service registration number. If you do not yet have an
                  e-GATE ID, you may contact any{" "}
                  <a href="https://www.ttconnect.gov.tt/index.php/ttconnect-service-centres/">
                    {" "}
                  </a>
                  TT Connect Service Centre .{" "}
                </li>
                <li className={AdmisStyles.items}>
                  Following the generation of your GATE ID, you are required to
                  submit an application for GATE funding for this semester via
                  the e-GATE web portal.
                </li>
              </ul>

              <div className={AdmisStyles.threeColGridCon}>
                <div className={AdmisStyles.threeColGrid}>
                  <p className={AdmisStyles.text}>
                    <b>Website : </b>
                    <a
                      className={AdmisStyles.anchortag}
                      href="http://e-gate.gov.tt/gate-app/index"
                    >
                      http://e-gate.gov.tt/gate-app/index
                    </a>
                  </p>
                </div>
                <div className={AdmisStyles.threeColGrid}>
                  {" "}
                  <p className={AdmisStyles.text}>
                    {" "}
                    <b>HOTLINE</b>{" "}
                    <span className={AdmisStyles.anchortag}>
                      800-GATE (4283)
                    </span>
                  </p>
                </div>
                <div className={AdmisStyles.threeColGrid}>
                  {" "}
                  <p className={AdmisStyles.text}>
                    <b> EMAIL </b>{" "}
                    <a
                      className={AdmisStyles.anchortag}
                      href="mailto:gate.info@moe.gov.tt"
                    >
                      gate.info@moe.gov.tt
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <p className={AdmisStyles.secondheading}> Please note</p>
            <div className={AdmisStyles.entryreq}>
              <ol className={AdmisStyles.list}>
                <li className={AdmisStyles.items}>
                  All applications for GATE funding must be submitted within the
                  academic year for which funding is requested. Failure to do so
                  may result in your having to pay tuition fees using personal
                  funds.
                </li>
                <li className={AdmisStyles.items}>
                  The student copy of the GATE e-Service application is a
                  required document for making a payment on campus.
                </li>
                <li className={AdmisStyles.items}>
                  GATE has advised that COMPASS (Compensatory Programmes and
                  Academic Support Services) will be assessed as a separate
                  programme and not as a component of an undergraduate programme
                  of choice. Only students pursuing the COMPASS Certificate
                  programme are eligible for GATE funding for COMPASS courses.
                </li>
              </ol>
            </div>
            <p className={AdmisStyles.emphasis}>
              Therefore, students admitted to degree programmes who are required
              to pursue COMPASS courses to strengthen their academic foundations
              will be responsible for the payment of tuition fees for these
              courses at a cost of $300 per credit. Students can access a
              payment plan to assist with tuition fees.
            </p>
          </section>
          <section
            id="payment"
            className={`${AdmisStyles.sectionPayment} ${standardStyles.marginBottomBig} `}
          >
            <h2 className={standardStyles.newsHeading}>
              {" "}
              Online <span> PAYMENT </span> and Payment Plan
            </h2>
            <div className={AdmisStyles.entryreq}>
              <p className={AdmisStyles.bannerSub}>
                Fees can now be paid via the following:{" "}
              </p>
              <ul className={AdmisStyles.list}>
                <li className={AdmisStyles.items}>
                  Direct Deposit into COSTAATT's First Citizens Bank account at
                  all First Citizens Bank Branches{" "}
                </li>
                <li className={AdmisStyles.items}>
                  Net banking transfers from other commercial banks into the
                  College's FCB account.
                </li>
                <li className={AdmisStyles.items}>
                  Self-Service Banner using chip-enabled debit and credit cards.{" "}
                </li>
                <li className={AdmisStyles.items}>
                  Online banking via FCB and Republic Bank (COSTAATT is listed
                  as a registered payee)
                </li>
              </ul>
              <p>
                {" "}
                For more details on Ways to Pay visit
                <Link
                  className={AdmisStyles.anchortag}
                  href="/admissions/howtopay"
                >
                  {" "}
                  Fee Payment Options &rarr;{" "}
                </Link>
              </p>
              <p className={AdmisStyles.secondheading}>Submit</p>
              {/* Replace with ordered list, need to figure out how to be done in next.js */}
              <ol className={AdmisStyles.list}>
                <li className={AdmisStyles.items}>
                  Email your payment receipt to{" "}
                  <a
                    className={AdmisStyles.anchortag}
                    href="mailto:bursar@costaatt.edu.tt"
                  >
                    bursar@costaatt.edu.tt
                  </a>
                </li>
                <li className={AdmisStyles.items}>
                  Email the following signed documents to{" "}
                  <a
                    className={AdmisStyles.anchortag}
                    href="mailto:registrar@oostaatt.edu.tt"
                  >
                    registrar@costaatt.edu.tt
                  </a>{" "}
                  or submit to the Administrative Office at your campus by
                  October 28,2023:
                  {/* get data from database */}
                  <br />
                  <ul className={AdmisStyles.list}>
                    <li className={AdmisStyles.items}>
                      Student Invoice and Payment Terms and Conditions
                    </li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      Student Insurance Form{" "}
                      <Link
                        href="/pdfs/Insurance Benefit and Application Form 22-23.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={AdmisStyles.anchortag}
                      >
                        {" "}
                        <b>(Download Form here) </b>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <p className={AdmisStyles.bannerSub2}>
              {" "}
              Payment Plans (Tuition Fees Only){" "}
            </p>
            <div className={AdmisStyles.entryreq}>
              <ul className={AdmisStyles.list}>
                <li className={AdmisStyles.items}>
                  Sign and submit the Payment Plan Application Form.{" "}
                </li>
                <li className={AdmisStyles.items}>
                  {" "}
                  Submit scanned copy to registrar@costaatt.edu.tt or deliver to
                  the Office of the Registrar, City Campus.
                </li>
                <li className={AdmisStyles.items}>
                  If plan is approved, sign and submit the agreement using
                  either method mentioned in #2
                </li>

                <li className={AdmisStyles.items}>
                  {/* {" "} */}
                  Pay using any of the payment methods stated above on or before
                  each installment date
                </li>
              </ul>
            </div>
            <div className={AdmisStyles.twoColGridCon}>
              <div className={AdmisStyles.twoColGrid}>
                <Divider />
                <p className={AdmisStyles.text}>
                  Deadline to apply for a payment plan in 202410{" "}
                </p>
                <Divider />
                <p className={AdmisStyles.text}>
                  {" "}
                  Installment for Semester I, Academic Year 2023-2024
                </p>
              </div>
              <div className={AdmisStyles.twoColGrid}>
                <Divider />
                <p className={AdmisStyles.text}>
                  <b> October 28, 2023 </b>
                </p>
                <Divider />

                <p className={AdmisStyles.text}>
                  {" "}
                  <b> November 28,2023</b>
                </p>
                <p className={AdmisStyles.text}>
                  <b>December 28, 2023 </b>{" "}
                </p>
                <p className={AdmisStyles.text}>
                  {" "}
                  <b>January 28,2024 </b>
                </p>
                <Divider />
              </div>
            </div>
          </section>
          <section
            id="studentid"
            className={`${AdmisStyles.sectionStudentId} ${standardStyles.marginBottomBig} `}
          >
            <h2 className={standardStyles.newsHeading}>
              Student <span> ID </span> Card
            </h2>
            <p className={AdmisStyles.text}>
              The Office of the Registrar will provide guidance on the procedure
              for obtaining your student ID card and validation sticker. A
              <a
                className={AdmisStyles.anchortag}
                href="https://www.youtube.com/watch?v=f4zgpvuh2k4"
              >
                {" "}
                student email account
              </a>{" "}
              will be assigned to you where we will be in communication with you
              .
            </p>
          </section>
          <section
            id="addinfo"
            className={`${AdmisStyles.sectionAdditionalInfo} ${standardStyles.marginBottomBig} `}
          >
            <h2 className={standardStyles.newsHeading}>
              <span> ADDITIONAL </span> Information
            </h2>
            <p className={AdmisStyles.bannerSub2}>On Campus Appointments</p>
            <p className={AdmisStyles.text}>
              Although we have resumed face-to-face interactions at our
              campuses, please be advised that appointments will be required for
              the following services:{" "}
            </p>
            <div className={AdmisStyles.entryreq}>
              <ul className={AdmisStyles.list}>
                <li className={AdmisStyles.items}>
                  Student Account Billing Queries
                </li>

                <li className={AdmisStyles.items}> Diploma collection </li>
              </ul>
            </div>
            <p className={AdmisStyles.text}>
              {" "}
              All other services will now be available without an appointment
              Click
              <a
                className={AdmisStyles.anchortag}
                href="https://costaattappointments.setmore.com/"
              >
                {" "}
                Book an Appointment
              </a>{" "}
              if you need to book an appointment.
            </p>

            <p className={AdmisStyles.bannerSub2}> Documents Download </p>
            <p className={AdmisStyles.text}>
              {" "}
              <Link
                href="/pdfs/Academic Calendar 2023-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={AdmisStyles.anchortag}
              >
                {" "}
                2022/2023 Academic Calendar
              </Link>
              <br />
              <Link
                href="/pdfs/Insurance Benefit and Application Form 22-23.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={AdmisStyles.anchortag}
              >
                {" "}
                Insurance Form 2022-2023
              </Link>
              <br />
              <Link
                href="/pdfs/Payment Plan Application Form_2020 - Fillable.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={AdmisStyles.anchortag}
              >
                {" "}
                Payment Plan Application Form
              </Link>
              <br />
              <Link
                href="/pdfs/Final Banner Mobile Registration Manual 150818_v1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={AdmisStyles.anchortag}
              >
                {" "}
                Banner Mobile Registration Manual
              </Link>
            </p>
          </section>
        </SideNavOnlyLayout>
      </>
    );
}
howtoregister.getLayout = function getLayout(page) {
    return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default howtoregister