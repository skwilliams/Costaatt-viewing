

import React, { useState } from 'react'

import ReactDom from "react-dom";

import standardStyles from "@/styles/main.module.scss"
import AdminStyles from "@/styles/Admissions.module.scss";

import HeadImage from "@/components/PageComponents/HeadImage";
import awaitingbanner from "../../../public/images/awaitingBanner.png";

import awaitingimage from "../../../public/images/awaitingNewsEvent.png";

import ContactStudentLife from '@/components/PageComponents/ContactStudentLife';
import awaitingNews from "../../../public/images/awaitingNewsEvent.png";
import Head from 'next/head';
import Link from 'next/link';
import { StickyNote2 } from '@mui/icons-material';
import Image from 'next/image';
import Popup from '@/components/PageComponents/Popup';
import joinclub from "../../../public/images/costaattlife/joinclub.png"
import { AccordionActions } from '@mui/material';

import { Accordion, Divider } from "@mui/material/";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const compasscenter = () => {



  return (
    <>
      <Head>
        <title>Compass Center</title>
      </Head>

      <HeadImage mainimage={awaitingbanner} />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/costaattlife"></Link>
        <Link href="/costaattlife/compasscenter">Sports</Link>
      </p>

      <section id="intro" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.introtext}>
          {" "}
          Students can access support services provided by the COMPASS Centre;
          these include psychosocial support in the form of developmental
          advising and counselling as well as academic support in the form of
          tutorial services, study skills seminars and semester loans of
          selected texts{" "}
        </h2>
        <hr class={standardStyles.centerunder} />
      </section>
      <section
        className={`${standardStyles.sectionColor2} ${standardStyles.centertext}`}
        id="services"
      >
        <h2
          className={`${standardStyles.headingPrimarysub} ${standardStyles.centertext}`}
        >
          Available Services
        </h2>

        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.card}>
              <div
                className={`${standardStyles.card__side} ${standardStyles.card__sidefront}`}
              >
                <div
                  className={`${standardStyles.card__picture} ${standardStyles.card__picture1}`}
                >
                  &nbsp;
                </div>
                <h4 className={standardStyles.card__heading}>
                  <span
                    className={`${standardStyles.card__headingSpan}${standardStyles.card__headingSpan1}`}
                  >
                    Advising {" "}
                  </span>
                </h4>
                <div
                  className={`${standardStyles.card__details} ${standardStyles.card__details1}`}
                >
                  Career management is applying/executing what was learnt in the
                  career planning process to achieve career goals. Career
                  management is not a singular event but a continuing process
                  that is a necessity for adapting to the changing demands of a
                  dynamic socioeconomic environment.
                </div>
              </div>
            </div>
          </div>

          <div className={standardStyles.col1of2}>
            <div className={standardStyles.card}>
              <div
                className={`${standardStyles.card__side} ${standardStyles.card__sidefront}`}
              >
                <div
                  className={`${standardStyles.card__picture} ${standardStyles.card__picture2}`}
                >
                  &nbsp;
                </div>
                <h4 className={standardStyles.card__heading}>
                  <span
                    className={`${standardStyles.card__headingSpan}${standardStyles.card__headingSpan2}`}
                  >
                    Study Skills                  </span>
                </h4>
                <div
                  className={`${standardStyles.card__details} ${standardStyles.card__details2}`}
                >
                  {" "}
                  Students are encouraged to register for internships advertised
                  through the College Internship programmes provide students
                  with an opportunity to integrate theory with practical
                  experience and acquire skills/competencies relevant to their
                  areas of study.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.card}>
              <div
                className={`${standardStyles.card__side} ${standardStyles.card__sidefront}`}
              >
                <div
                  className={`${standardStyles.card__picture} ${standardStyles.card__picture3}`}
                >
                  &nbsp;
                </div>
                <h4 className={standardStyles.card__heading}>
                  <span
                    className={`${standardStyles.card__headingSpan}${standardStyles.card__headingSpan3}`}
                  >
                    Tutorial Services                  </span>
                </h4>
                <div
                  className={`${standardStyles.card__details} ${standardStyles.card__details3}`}
                >
                  Through individual coaching and access to online career
                  guidance software, students will be able to analyse personal
                  attributes and assess aptitudes for particular careers.
                  Students will be able to benefit from support in designing job
                  search strategies, and training in CV/résumé preparation and
                  interview skills. In addition, the department hosts workshops
                  and seminars on self-development and soft skills relevant to
                  the work place, such as time management and workplace
                  communication. Schedule an appointment with your career
                  advisor or placement officer for further information.
                </div>
              </div>
            </div>
          </div>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.card}>
              <div
                className={`${standardStyles.card__side} ${standardStyles.card__sidefront}`}
              >
                <div
                  className={`${standardStyles.card__picture} ${standardStyles.card__picture1}`}
                >
                  &nbsp;
                </div>
                <h4 className={standardStyles.card__heading}>
                  <span
                    className={`${standardStyles.card__headingSpan}${standardStyles.card__headingSpan4}`}
                  >
                    TextBook Loans{" "}
                  </span>
                </h4>
                <div
                  className={`${standardStyles.card__details} ${standardStyles.card__details4
                    }`}
                >
                  Career management is applying/executing what was learnt in the
                  career planning process to achieve career goals. Career
                  management is not a singular event but a continuing process
                  that is a necessity for adapting to the changing demands of a
                  dynamic socioeconomic environment.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="faq" className={standardStyles.sectionNoSidenav}>
        <h2
          className={`${standardStyles.headingPrimarysub} ${standardStyles.centertext}`}
        >
          Frequently Asked Questions{" "}
        </h2>
        <h2 className={standardStyles.introtext}>
          {" "}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold" fontSize={"1.25rem"}>
                What is Transfer Credit{" "}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <p className={AdminStyles.accordiantext}> </p>
            </AccordionDetails>
          </Accordion>
        </h2>
      </section>
      <section id="contact" className={standardStyles.sectionColor2}>
        <h2
          className={`${standardStyles.headingPrimarysub} ${standardStyles.centertext}`}
        >
          Contact Compass{" "}
        </h2>
        <div className={standardStyles.paragraph}>
          Requests for services (tutorials or seminars) may be e-mailed to
          COMPASSCentre@costaatt.edu.tt or telephoned to:
          <div className={standardStyles.bullets}>
            <ul className={standardStyles.list}>
              <li className={standardStyles.items}>
                City Campus, COMPASS Centre - 625-5030 Ext. 5334/5
              </li>
              <li className={standardStyles.items}>
                {" "}
                South Campus, Administration Office - 625-5030 Ext. 5771{" "}
              </li>
              <li className={standardStyles.items}>
                {" "}
                Administration Office - 625-5030 Ext. 5650 Tobago Campus,
              </li>
              <li className={standardStyles.items}>
                {" "}
                Sangre Grande, Administration Office - 625-5030 Ext. 5600
              </li>
              <li className={standardStyles.items}>
                You may also access tutorial support at City Campus by visiting
                COMPASS Centre, Bretton Hall annex or the administrative desk at
                the Tutorial Centre, Room 308.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default compasscenter




