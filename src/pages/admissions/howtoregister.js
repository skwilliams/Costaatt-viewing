import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
import React from 'react'
import Head from 'next/head';
import AdmisStyles from "@/styles/Admissions.module.scss"
import SideNavOnlyLayout from '@/components/Layouts/SideNavOnly_NoTopOrDropdown';
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";
import { AdminPanelSettings } from '@mui/icons-material';

const howtoregister = () => {
    return (
      <>
        <Head>
          {" "}
          <title> How to register </title>
        </Head>
        <HeaderNoImage caption={"How to register"} />
        <SideNavOnlyLayout>
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
            {/* <p className={AdmisStyles.banner}>
              {" "}
              <b>
                {" "}
REGISTRATION
              </b>
            </p> */}
            <p className={AdmisStyles.bannerSub}>
              Using Banner for Self-Registration Online
            </p>
            <div className={AdmisStyles.entryreq}>
              <ol className={AdmisStyles.list}>
                <li className={AdmisStyles.items} >
                  Login to{" "}
                  <a  className={AdmisStyles.anchortag} href="https://ssb-prod.ec.costaatt.edu.tt/">
                    Self Service Banner
                  </a>
                  See
                  <a className={AdmisStyles.anchortag} href="https://ssb-prod.ec.costaatt.edu.tt/"> video </a>
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

                </li> Download the Banner Mobile
                Registration Manual to complete this process using our mobile
                app
              </ol>
            </div>
          </section>
          <section id="gate" className={AdmisStyles}>
            <p className={AdmisStyles.sectiontextleft}>Gate Application</p>
            <p className={AdmisStyles.bannerSub}>
              {" "}
              <b> Trinidad and Tobago Nationals Only </b>
            </p>
          </section>
          <section id="payment" className={AdmisStyles}>
            <p className={AdmisStyles.sectiontextleft}>Online Payment</p>
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