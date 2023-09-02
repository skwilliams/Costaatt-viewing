import SideNavOnlyLayout from "@/components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";
import React from "react";
import Head from "next/head";
import ButtonLink from "@/components/HomeComponents/ButtonLink";

import AdmisStyles from "@/styles/Admissions.module.scss";
import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import counsellor from "../../../public/images/admissions/contact.svg";
import Image from "next/image";
import Link from "next/link";
import HeadImage from "@/components/PageComponents/HeadImage";
import headImg from"../../../public/images/admissions/applynow.jpg"
import SimpleCard from "@/components/PageComponents/SimpleCard";
import tick from "../../../public/images/admissions/tick.svg"
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import { Accordion, Divider,Button } from "@mui/material/";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material"
import AddIcon from "@mui/icons-material/Add";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

const newstudent = () => {

const CustomHome = () => {
  return <AddCircleTwoToneIcon style={{ color: "rgb(245,130,32)" }} />
};

  return (
    <>
      <Head>
        <title>First Time Student</title>
      </Head>
      {/* <HeadImage imagetext="" mainimage={headImg} /> */}
      <HeaderNoImage caption={"First Time Applicant"} />
      <SideNavOnlyLayout>
        <section id="intro" className={AdmisStyles.sectionIntroReg}>
          {" "}
          <p className={AdmisStyles.sectiontextleft}>Ready to Apply</p>
          <p className={AdmisStyles.introtext}></p>
        </section>
        <section id="visits" className={AdmisStyles.sectionVisit}>
          <p className={AdmisStyles.sectiontextleft}>COSTAATT Wants you </p>
          Costaatt is a unique place
          <button> Explore Our Programmes </button>
        </section>
        <section id="howtoapply" className={AdmisStyles.sectionHowtoapply}>
          <p className={AdmisStyles.sectiontextleft}>Start Application </p>
          Start Application send to *** How to Apply
        </section>
        <section id="timeline" className={AdmisStyles.sectionTimeline}>
          <p className={AdmisStyles.sectiontextleft}>Timeline </p>
        </section>
        <section id="chooseyourpath">
          {" "}
          <p className={AdmisStyles.sectiontextleft}>Choose Your Path </p>
        </section>
        <section id="require" className={AdmisStyles.sectionRequired}>
          <p className={AdmisStyles.sectiontextleft}>Requirements </p>{" "}
          Requirements
        </section>
        <section id="checklist" className={AdmisStyles.sectionCheckList}>
          {" "}
          <p className={AdmisStyles.sectiontext}>
            First Time Applicant Checklist{" "}
          </p>
          <div className={AdmisStyles.checklist}>
            <Image className={AdmisStyles.imgtick} src={tick} />
            <span className={AdmisStyles.heading}> Apply Online </span>
            <p className={AdmisStyles.text}>
              You have choosen your programme and this is your first time
              applying to COSTAATT!!
              <br />
              You need to complete the online application form
            </p>{" "}
            <p className={AdmisStyles.text}>
              <Link href="/admissions/applynow">
                {" "}
                Online application &rarr;
              </Link>
            </p>
            Change to button
            <ButtonLink
              text="Start Application"
              color="warning"
              size="large"
              path="/admissions/applynow"
            />
            <Divider />
          </div>
          <div className={AdmisStyles.checklist}>
            <Image className={AdmisStyles.imgtick} src={tick} />
            <span className={AdmisStyles.heading}>
              Submit supporting documents
            </span>{" "}
            <br />
            <p className={AdmisStyles.text}>
              {" "}
              Once you have completed your application online, you must submit
              all relevant supporting documents in JPEG or PDF format within two
              (2) weeks to{" "}
              <a
                className={AdmisStyles.anchortag}
                href="mailto:applications@costaatt.edu.tt."
              >
                applications@costaatt.edu.tt.{" "}
              </a>
              If you are unable to submit your documents within that time, you
              must advise us via email to{" "}
              <a
                className={AdmisStyles.anchortag}
                href="mailto:applications@costaatt.edu.tt."
              >
                applications@costaatt.edu.tt.{" "}
              </a>{" "}
            </p>
            <Divider />
          </div>
          <div className={AdmisStyles.checklist}>
            <Image className={AdmisStyles.imgtick} src={tick} />
            <span className={AdmisStyles.heading}>after you have applied</span>
            <br />
            <p className={AdmisStyles.text}>
              {" "}
              It takes approximately 2 weeks after submission of your
              application to be processed, and 2 weeks after which an admissions
              decision can be made. Some programmes require: <br />
            </p>
            {/* To Move arrow to the left */}
            <Accordion sx={{ margin: 2 }}>
              <AccordionSummary expandIcon={<CustomHome />}>
                <Typography fontWeight="bold" fontSize={"1.15rem"}>
                  INTERVIEWS
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <p className={AdmisStyles.text}>
                  <b>
                    {" "}
                    To be admitted to the following programmes, short-listed
                    applicants must be successful at an admissions interview
                  </b>
                </p>{" "}
                <div className={AdmisStyles.entryreq}>
                  <ul className={AdmisStyles.list}>
                    <li className={AdmisStyles.items}>
                      {" "}
                      General Nursing (BSc, AAS)
                    </li>
                    <li className={AdmisStyles.items}>
                      Psychiatric Nursing (BSc, AAS)
                    </li>
                    <li className={AdmisStyles.items}> Midwifery (BSc)</li>
                    <li className={AdmisStyles.items}>
                      Medical Laboratory Technology (BSc, AAS)
                    </li>
                    <li className={AdmisStyles.items}> Radiography (BSc)</li>
                    <li className={AdmisStyles.items}> Social Work (BSW)</li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      Early Childhood Care and Education (BA)
                    </li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      Applied Psychology (BSc)
                    </li>
                  </ul>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: 2 }}>
              <AccordionSummary expandIcon={<CustomHome />}>
                <Typography fontWeight="bold" fontSize={"1.15rem"}>
                  AUDITIONS
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <p className={AdmisStyles.text}>
                  To be admitted to the music programme (bachelor’s and
                  associate degree), short-listed applicants will be required to
                  successfully complete the audition process.
                </p>{" "}
              </AccordionDetails>
            </Accordion>

            <Divider />
          </div>
          <div className={AdmisStyles.checklist}>
            <Image className={AdmisStyles.imgtick} src={tick} />
            <span className={AdmisStyles.heading}>Offers</span>

            {/* To Move arrow to the left */}
            <Accordion sx={{ margin: 2 }}>
              <AccordionSummary expandIcon={<CustomHome />}>
                <Typography fontWeight="bold" fontSize={"1.15rem"}>
                  OFFERS OF ADMISSIONS
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <p className={AdmisStyles.text}>
                  Formal offers of Admission to any programme shall be made, in
                  writing, by the Director of Enrolment or designate.
                </p>{" "}
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: 2 }}>
              <AccordionSummary expandIcon={<CustomHome />}>
                <Typography fontWeight="bold" fontSize={"1.15rem"}>
                  PLACEMENT TEST
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <p className={AdmisStyles.text}>
                  Applicants who receive the offer of a place on a programme
                  will receive a placement test invitation from the Admissions
                  department. Do not be alarmed! If you do not pass a test or do
                  as well as you expect, this will not affect your place on a
                  programme.
                  <br /> However, you may be exempt from taking tests in
                  <b> English language</b> and <b>Mathematics</b> if you already
                  have the requisite level of achievement (see the exemptions
                  below). The results of these tests tell us whether you may
                  need help to strengthen your academic foundations. If you do
                  need help, we will place you in the appropriate level course
                  to help you succeed in your major.
                  <br />
                  Please note that placement tests are
                  <u> online </u> assessments. For applicants who do not have
                  access to a laptop, computer or Internet, arrangements will be
                  made to sit an 'in-person' test at a campus. Remember, this is
                  an important step towards your academic success! <br />
                  <b>Exemptions </b> <br />
                  Please note that the following persons are exempted from
                  taking the placement test, as detailed below: -
                  <br /> <b> Exempt from English & Mathematics test:</b>
                </p>
                <div className={AdmisStyles.entryreq}>
                  <ul className={AdmisStyles.list}>
                    <li className={AdmisStyles.items}>
                      {" "}
                      Persons who completed degree level studies at COSTAATT
                      institutions
                    </li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      Holders of bachelor's and associate degrees from other
                      recognised
                    </li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      Holders of recognised professional certification
                    </li>
                  </ul>
                </div>{" "}
                <p className={AdmisStyles.text}>
                  <b>Exempt from English test only:</b>{" "}
                </p>
                <div className={AdmisStyles.entryreq}>
                  <ul className={AdmisStyles.list}>
                    <li className={AdmisStyles.items}>
                      {" "}
                      CAPE/GCE A' Level graduates with grades 1, 2 or 3 / A, B
                      or C in Communication Studies or Literature
                    </li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      CSEC/GCE O'Level graduates with grade 1 or A in English A
                    </li>
                  </ul>
                </div>{" "}
                <p className={AdmisStyles.text}>
                  {" "}
                  <b>Exempt from Mathematics test only: </b>
                  <br />
                  Please note that the qualifications listed below must have
                  been attained no more than 5 years prior to applying to
                  COSTAATT CSEC/GCE O'Level graduates with grade 1 or A in
                  English A
                </p>
                <div className={AdmisStyles.entryreq}>
                  <ul className={AdmisStyles.list}>
                    <li className={AdmisStyles.items}>
                      {" "}
                      CAPE/ A'Level graduates with grades 1, 2 or 3 / A, B or C
                      in Mathematics or Physics{" "}
                    </li>
                    <li className={AdmisStyles.items}>
                      {" "}
                      CSEC/ GCE O'Level graduates with grades 1, 2 or 3 / A, B
                      or C in Additional Mathematics
                    </li>
                    <li className={AdmisStyles.items}>
                      CSEC/ GCE O' Level graduates with grade 1 or A in
                      Mathematics{" "}
                    </li>
                  </ul>
                </div>{" "}
                {/* see if we can get the pdf to place on our servers */}
                <p className={AdmisStyles.text}>
                  <a
                    className={AdmisStyles.anchortag}
                    Link
                    href="/pdfs/English-Placement-Test-Sample-2019.pdf"
                    target="_blank"
                  >
                    Sample English Placement Test
                  </a>
                  <br />{" "}
                  <a
                    className={AdmisStyles.anchortag}
                    Link
                    href="/pdfs/Mathematics-Placement-Test-Sample-2019.pdf"
                    target="_blank"
                  >
                    Sample Mathematics Placement Test
                  </a>
                </p>
              </AccordionDetails>
            </Accordion>

            <Divider />
          </div>
          <div className={AdmisStyles.checklist}>
            <Image className={AdmisStyles.imgtick} src={tick} />
            <span className={AdmisStyles.heading}> Registration </span>
            <p className={AdmisStyles.text}>
              You have been accepted, now it's time to Register !!
            </p>{" "}
         
            <ButtonLink
              text="How to Register"
              color="warning"
              size="large"
              path="/admissions/howtoregister"
            />
            <Divider />
          </div>
        </section>

        <section id="contact" className={AdmisStyles.sectionContact}>
          {" "}
          <p className={AdmisStyles.sectiontextleft}> Contact Admissions</p>
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
