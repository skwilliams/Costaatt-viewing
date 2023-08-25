import SideNavOnlyLayout from "@/components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";
import React from "react";
import AdmisStyles from "@/styles/Admissions.module.scss";
import telephone from "../../../public/images/admissions/telephone.svg";
import Head from "next/head";
import email from "../../../public/images/admissions/email.svg";
import counsellor from "../../../public/images/admissions/contact.svg";
import Image from "next/image";
import Link from "next/link";
import HeadImage from "@/components/PageComponents/HeadImage";
import headImg from"../../../public/images/admissions/applynow.jpg"


const newstudent = () => {
  return (
    <>
    <Head>
        <title>First Time Student</title>
    </Head>
    <HeadImage imagetext="" image={headImg}/>
      <SideNavOnlyLayout>
        <section id="intro" className={AdmisStyles.introtext}>
          {" "}
        </section>
        <section id="visits" className={AdmisStyles.sectionVisit}>
          Visit COSTAATT Why choose us...
        </section>
        <section id="howtoapply" className={AdmisStyles.sectionHowtoapply}>
          Start Application send to *** How to Apply
        </section>
        <section id="timeline" className={AdmisStyles.sectionTimeline}>
          Timeline
        </section>
        <section id="chooseyourpath"> Choose Your Path</section>
        <section id="require" className={AdmisStyles.sectionRequired}>
          {" "}
          Requirements
        </section>
        <section id="checklist" className={AdmisStyles.sectionChecklist}>
          {" "}
          Checklist
        </section>
        <section id="nextstep" className={AdmisStyles.Nextstep}>
          {" "}
          Ok I got accepted What's Next Registration{" "}
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
};

newstudent.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default newstudent;
