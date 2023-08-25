import HeaderNoImage from '@/components/PageComponents/HeaderNoImage'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AdmisStyles from '@/styles/Admissions.module.scss'
import FacultyStaffCard from '@/components/PageComponents/FacultyStaffDepCard'
import awaitingFacultyStaff from "../../../public/images/schools/awaitingFacultyStaff.png"
import SideNavOnlyLayout from '@/components/Layouts/SideNavOnly_NoTopOrDropdown'
import TopNavOnlyLayout from '@/components/Layouts/TopNavOnly_NoDropdown'
import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import counsellor from "../../../public/images/admissions/contact.svg";
import Link from "next/link";

const admissioncounsellors = () => {
    return (
      <>
        <Head>
          <title>Admission Counsellors</title>
        </Head>
        <HeaderNoImage caption="Admissions Counsellor" />

        <SideNavOnlyLayout>
          <section id="intro" className={AdmisStyles.sectiontext}>
            Do yo have any questions about admissions <br /> We are here for you{" "}
            <br /> Feel free to contact us
          </section>

          <section id="meet the team">
            {" "}
            <p className={AdmisStyles.introtext}>Meet the Team </p>
            <div className={AdmisStyles.twoColGridCon}>
              <div className={AdmisStyles.twoColGridCol}>
                <Image
                  src={awaitingFacultyStaff}
                  width="75px"
                  alt="staff image"
                />
                <p className={AdmisStyles.emphasis}> Faculty name</p>
              </div>
              <div className={AdmisStyles.twoColGridCol}>
                <Image
                  src={awaitingFacultyStaff}
                  width="75px"
                  alt="staff image"
                />
                <p className={AdmisStyles.emphasis}> Faculty name</p>
              </div>
            </div>
          </section>
          <section id="contact" className={AdmisStyles.sectionContact}>
            {" "}
            <p className={AdmisStyles.sectiontext}> Contact Admissions</p>
            <div className={AdmisStyles.threeColGridCon}>
              <div className={AdmisStyles.threeColGrid}>
                <Image
                  className={AdmisStyles.icon}
                  src={telephone}
                  alt="telephone icon"
                />
                <p className={AdmisStyles.icontext}> 625-5030 ext 5900</p>
              </div>
              <div className={AdmisStyles.threeColGrid}>
                <Image
                  className={AdmisStyles.icon}
                  src={email}
                  alt="email icon"
                />
                <p className={AdmisStyles.icontext}>
                  {" "}
                  <a href="mailto:applications@costaatt.edu.tt">
                    {" "}
                    applications@costaatt.edu.tt{" "}
                  </a>{" "}
                </p>
              </div>
              <div className={AdmisStyles.threeColGrid}>
                <Image
                  className={AdmisStyles.icon}
                  src={counsellor}
                  alt="contact icon"
                />
                <p className={AdmisStyles.icontext}>
                  {" "}
                  <Link href="admissionsdirectory">
                    {" "}
                    Admissions Counsellor Directory{" "}
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </SideNavOnlyLayout>
      </>
    );
}

// admissioncounsellors.getLayout = function getLayout(page) {
//   return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
// };
export default admissioncounsellors