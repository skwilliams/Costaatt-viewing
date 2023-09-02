import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
import React from 'react'
import Head from 'next/head';
import AdmisStyles from "@/styles/Admissions.module.scss"
import SideNavOnlyLayout from '@/components/Layouts/SideNavOnly_NoTopOrDropdown';
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";
import { AdminPanelSettings } from '@mui/icons-material';
import Link from "next/link"

const howtoregister = () => {
    return (
      <>
        <Head>
          {" "}
          <title> How to register </title>
        </Head>
        <HeaderNoImage caption={"How to register"} />
        <SideNavOnlyLayout>
          <section id="checklist" className={AdmisStyles.sectionregChecklist}>
            <p className={AdmisStyles.sectiontextleft}> Registration Steps</p>

            <div className={AdmisStyles.entryreq}>
              <p className={AdmisStyles.bannerSub}>
                Registration invovles the following :{" "}
              </p>
              <ul className={AdmisStyles.list}>
                <li className={AdmisStyles.items}>Receiving Advisement </li>
                <li className={AdmisStyles.items}>Registering for Courses</li>
                <li className={AdmisStyles.items}>
                  Applying for Gate(if eligible)
                </li>
                <li className={AdmisStyles.items}>Paying Fees</li>
                <li className={AdmisStyles.items}>Collecting Student Id</li>
              </ul>
            </div>
          </section>
          <seciton id="advising" className={AdmisStyles.sectionAdvising}>
            <p className={AdmisStyles.sectiontextleft}>Academic Advisement</p>
            {/* <p className={AdmisStyles.banner}>
              {" "}
              <b>
                {" "}
                Acadmeic Advisement (must be completed online before
                registration){" "}
              </b>
            </p> */}
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
          <section id="register" className={AdmisStyles}>
            <p className={AdmisStyles.sectiontextleft}>Registration</p>

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
                    Self Service Banner
                  </a>
                  See
                  <a
                    className={AdmisStyles.anchortag}
                    href="https://ssb-prod.ec.costaatt.edu.tt/"
                  >
                    {" "}
                    video{" "}
                  </a>
                  for instructions.
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
                Download the Banner Mobile Registration Manual to complete this
                process using our mobile app
              </ol>
            </div>
          </section>
          <section id="gate" className={AdmisStyles}>
            <p className={AdmisStyles.sectiontextleft}>Gate Application</p>
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
          <section id="payment" className={AdmisStyles}>
            <p className={AdmisStyles.sectiontextleft}>
              {" "}
              Online Payment and Payment Plan
            </p>

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
                <p>Submit</p>
                <ol>
                  <li>Email your payment receipt to <a className={AdmisStyles.anchortag} href="mailto:bursar@costaatt.edu.tt">bursar@costaatt.edu.tt</a></li>
                  <li>Email the following signed documents to <a className={AdmisStyles.anchortag}  href="mailto:registrar@oostaatt.edu.tt">registra@costaatt.edu.tt</a> or submit to the Administrative Office at your campus by October 28,2023:<br/>
                      <ul>
                        <li>Student Invoice and Payment Terms and Conditions</li>
                        <li><a href="../Insurance Benefit and Application Form 22-23 "</li>
                      </ul>
                  
                  </li>
                </ol>
              </p>
            </div>
          </section>
          <section id="studentid" className={AdmisStyles}>
            <p className={AdmisStyles.sectiontextleft}>Student Id</p>
          </section>
        </SideNavOnlyLayout>
      </>
    );
}
howtoregister.getLayout = function getLayout(page) {
    return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default howtoregister