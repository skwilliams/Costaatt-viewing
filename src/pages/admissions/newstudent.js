import SideNavOnlyLayout from "@/components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";
import React from "react";
import Head from "next/head";

import AdmisStyles from "@/styles/Admissions.module.scss";
import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import counsellor from "../../../public/images/admissions/contact.svg";
import Image from "next/image";
import Link from "next/link";
import HeadImage from "@/components/PageComponents/HeadImage";
import headImg from"../../../public/images/admissions/applynow.jpg"
import SimpleCard from "@/components/PageComponents/SimpleCard";


const newstudent = () => {
  return (
    <>
      <Head>
        <title>First Time Student</title>
      </Head>
      <HeadImage imagetext="" image={headImg} />
      <SideNavOnlyLayout>
        <section id="intro" className={AdmisStyles.sectionIntroReg}>
          {" "}
          <p className={AdmisStyles.sectiontext}>Ready to Apply</p>
          <p className={AdmisStyles.introtext}></p>
        </section>
        <section id="visits" className={AdmisStyles.sectionVisit}>
          <p className={AdmisStyles.sectiontext}>COSTAATT Wants you </p>
          Costaatt is a unique place
          <button> Explore Our Programmes </button>
        </section>
        <section id="howtoapply" className={AdmisStyles.sectionHowtoapply}>
          <p className={AdmisStyles.sectiontext}>Start Application </p>
          Start Application send to *** How to Apply
        </section>
        <section id="timeline" className={AdmisStyles.sectionTimeline}>
          <p className={AdmisStyles.sectiontext}>Timeline </p>
        </section>
        <section id="chooseyourpath">
          {" "}
          <p className={AdmisStyles.sectiontext}>Choose Your Path </p>
        </section>
        <section id="require" className={AdmisStyles.sectionRequired}>
          <p className={AdmisStyles.sectiontext}>Requirements </p> Requirements
        </section>
        <section id="checklist" className={AdmisStyles.sectionChecklist}>
          {" "}
          <p className={AdmisStyles.sectiontext}>Checklist </p>
        </section>
        <section id="nextstep" className={AdmisStyles.Nextstep}>
          {" "}
          <p className={AdmisStyles.sectiontext}>Register </p>
          <p className={AdmisStyles.introtext}>
            {" "}
            Ok I got accepted What's Next Registration{" "}
          </p>
          <SimpleCard
            text=" How to Register "
            linkpage="/admissions/howtoregister"
          />{" "}
        </section>
        <section id="contact" className={AdmisStyles.sectionContact}>
          {" "}
          Contact Admissions
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
                <Link href="admissioncounsellors">
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
};

newstudent.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default newstudent;
