import React from 'react'
import Head from'next/head';
import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
import Link from "next/link";
import Imagge from 'next/image';
import joinclub from "../../../public/images/costaattlife/joinclub.png"
import admissionsStyles from "@/styles/Admissions.module.scss"
import SideNavOnlyLayout from "@/components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from '@/components/Layouts/TopNavOnly_NoDropdown';

const developmentcoursesApp = () => {
  return (
    <>
      <Head>
        <title> Professional Development </title>
      </Head>

      <HeaderNoImage caption="Professional Development Application" />
      <p className={ProgStyles.headingprimarysub}>
        COSTAATT/Admissions/Requirements{" "}
      </p>
      <SideNavOnlyLayout>
        <section id="intro">
          <p className={admissionsStyles.sectiontext}>Timeline </p>
        </section>
        <section id="explore">
          <p className={admissionsStyles.sectiontext}>Explore All Courese</p>
        </section>
        <section id="currentofferings">
          <p className={admissionsStyles.sectiontext}>Courses Offered </p>
        </section>
        <section id="howtoapply">
          <p className={admissionsStyles.sectiontext}>How to Apply </p>
        </section>
        <section id="contact">
          <p className={admissionsStyles.sectiontext}>
            Contact WorkForce Department{" "}
          </p>
        </section>
      </SideNavOnlyLayout>
    </>
  ); 
}
developmentcoursesApp.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};


export default developmentcoursesApp;