import React from 'react'
import HeadImage from '@/components/PageComponents/HeadImage'
import Head from 'next/head'
import headImg from "../../../public/images/admissions/transfercredits.jpg"

import SideNavOnlyLayout from "@/components/Layouts/SideNavOnly_NoTopOrDropdown";
import TopNavOnlyLayout from "@/components/Layouts/TopNavOnly_NoDropdown";
import AdminStyles from "../../styles/Admissions.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";






const transfercredits = () => {
  return (
    <>
      <Head>
        <title>Transfer Credit and Exemptions</title>
      </Head>

      <HeadImage imagetext="Fees and Funding" mainimage={headImg} />
      <section id="intro" className={AdminStyles.sectionintrotransfer}>
        <p className={AdminStyles.introtext}>
          We are excited that you have chosen COSTAATT to continue your studies!
          We know that you may be wondering about the possibility of obtaining
          transfer credit and/or exemptions for your prior learning. Please be
          sure to read the information below for helpful guidelines.
        </p>
      </section>
      <section id="frequestions" className={AdminStyles.sectionintrotransfer}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              What is Transfer Credit{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}>
              {" "}
              <b>Transfer credit </b> usually describes prior learning from a
              recognized institution which is accepted towards a course /
              qualification in another college or university. For example, if
              you have completed prior studies at post-secondary (e.g. CAPE or A
              Levels) or tertiary level, which may be equivalent to a course(s)
              within one of our programmes (associate or bachelor's degrees,
              diplomas or certificates), you may be eligible to receive transfer
              credit and accelerate your studies. Or if you have acquired
              relevant life or work experience, you may also be able to request
              transfer credit to one of our programmes, through our prior
              learning assessment programme.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              Who Can Obtain Transfer Credit and/or Exemption{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div className={AdminStyles.entryreq}>
              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>
                  CAPE / GCE A Level Graduates* *Credits / Exemptions may be
                  awarded to students who have completed CAPE examinations –
                  Units I and II, with grades I, II or III; or GCE Advanced
                  Levels, with grades A, B or C
                </li>
                <li className={AdminStyles.items}>
                  Holders of undergraduate degrees, postgraduate qualifications,
                  professional licensure or qualifications
                </li>
                <li className={AdminStyles.items}>
                  Persons with relevant life or work experience, should ask to
                  speak to an admissions counsellor
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              How Do I apply for Transfer Credit and/or Exemption?{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}>
              {" "}
              <b>
                If you are applying for admission to the college and would like
                to request transfer credit, please be sure to request a transfer
                credit / exemption form.
              </b>{" "}
            </p>

            <p className={AdminStyles.accordiantext}>
              STEP 1: Submit your application for admission <br />
              STEP 2: Discuss the nature of your transfer credit request with an
              admissions counsellor (CAPE, A Levels, Associate degree, other
              tertiary course(s)) <br />
              STEP 3: Complete and submit your transfer credit / exemption form
              along with the following supporting documents:
            </p>
            <div className={AdminStyles.entryreq}>
              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>
                  Academic certificate(s) (original and copy) for all
                  qualifications for which you are seeking transfer credit /
                  exemption
                </li>
                <li className={AdminStyles.items}>
                  Course outlines for qualifications other than CAPE (Caribbean
                  Advanced Proficiency Examination) or A Level subjects
                </li>
                <li className={AdminStyles.items}>
                  Official transcript (must be submitted in a sealed envelope
                  from the awarding institution)
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              How Many Credits can I Transfer{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}>
              {" "}
              <b>Applicants to Certificate or Diploma Programmes</b>
              <br />
              Students may transfer no more than thirty percent (30%) of the
              required credits into certificate or diploma programmes.
            </p>

            <div className={AdminStyles.entryreq}>
              <p className={AdminStyles.accordiantext}>
                <b>Applicants to Associate or Bachelor's Degrees</b> <br />
                Students may transfer no more than fifty percent (50%) of
                college level credits towards an associate and bachelor's degree
                at either programme level, of which:
              </p>

              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>
                  {" "}
                  no more than fifty percent (50%) of credits may be in the
                  major area of study; and
                </li>
                <li className={AdminStyles.items}>
                  {" "}
                  no more than fifty percent (50%) of credits may be in the core
                  curriculum or approved electives within the programme{" "}
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              Do I have to obatin a particular grade to qualify for Transfer
              Credit and/or Exemption?{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div className={AdminStyles.entryreq}>
              <p className={AdminStyles.accordiantext}>
                Transfer credits/exemptions may be awarded to students who have:
              </p>
              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>
                  CAPE qualifications - Units I and II, with grades I, II or
                  III; or
                </li>
                <li className={AdminStyles.items}>
                  GCE Advanced Levels, with grades A, B or C; or
                </li>
                <li className={AdminStyles.items}>
                  a level of achievement deemed equivalent to COSTAATT's 75%
                  grade score or above.
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              What are Some of the Criteria used to Assess Courses for Transfer
              Credit and/or Exemption{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div className={AdminStyles.entryreq}>
              <ul className={AdminStyles.list}>
                <li className={AdminStyles.items}>
                  If the course objectives are deemed to be comparable or
                  equivalent to the target course at the College;
                </li>
                <li className={AdminStyles.items}>
                  Students' level of achievement{" "}
                  <i> refer to previous question </i>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              Can Courses that I transferred into my Last Institution be
              Considered for your Institution{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}>
              {" "}
              Unfortunately, we cannot consider credits represented as
              “Transfer” on an official transcript of another institution
              towards one of our programmes/courses.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" fontSize={"1.25rem"}>
              How recent should my courses be to qulity for Transfer Credit
              and/or Exemption{" "}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <p className={AdminStyles.accordiantext}>
              {" "}
              Courses completed at a recognized post-secondary institution more
              than five (5) years prior to the date of application for transfer
              credit/exemption may not be considered.
            </p>
          </AccordionDetails>
        </Accordion>
      </section>
      <section id="howtoapply" className={AdminStyles.sectionintrotransfer}>
        <p className={AdminStyles.introtext}>How to apply</p>
      </section>
      <section id="exemptionlist" className={AdminStyles.sectionExemptionList}>


        
      </section>
    </>
  );
}



export default transfercredits