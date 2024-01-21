import React from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import { Button, Divider } from "@mui/material";
import Image from "next/image";

import studentcouncil2 from "../../../public/images/costaattlife/studentcouncil1.jpg";
import studentcouncil1 from "../../../public/images/costaattlife/studentcouncil2.jpg";



import EventCardOrig from "@/components/PageComponents/EventCardOrig";
import {stucouncildata} from "../costaattlife/studcouninfo";
import StudentCouncilRep from "@/components/PageComponents/StudentCouncilRep";
import ContactStudentLife from "@/components/PageComponents/ContactStudentLife";
import awaitingbanner from "../../../public/images/awaitingBanner.png";
import HeadImage from "@/components/PageComponents/HeadImage";




const studentcouncil = () => {
  return (
    <>
      <Head>
        <title>Student Council</title>
      </Head>
      <HeadImage mainimage={awaitingbanner} imagetext="Student Clubs and Organizations" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/costaattlife"></Link>
        <Link href="/costaattlife/studentcouncil">Studnet Council</Link>
      </p>

      <section
        id="introcouncil"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.marginBottomBig}`}
      >
        <h2 className={standardStyles.headingPrimarysub}>Student Council </h2>

        <p className={standardStyles.paragraph}>
          Joining our student council provides an opportunity for students to
          present their views to college administration and collaborate in
          building a positive and vibrant learning environment.The student
          government is a key mechanism through which students acquire the
          leadership, planning, decision- making and collaborative skills which
          will help them to become agents of change and transformation. In
          addition, it provides opportunities for students to learn social
          skills and develop positive relationships with their peers.
        </p>
      </section>
      <section id="presentteam" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.headingPrimarysub}>
          {" "}
          Student Council Memebers
        </h2>

        <div className={standardStyles.row}>
          <StudentCouncilRep stucouncil={stucouncildata} />
        </div>

        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}></div>
          <div className={standardStyles.col1of3}></div>
          <div className={standardStyles.col1of3}></div>
        </div>
      </section>
      <section id="joinus" className={`${standardStyles.sectionstartclub} `}>
        <div className={standardStyles.startclub}>
          <h2> Represent your fellow students</h2>
          <h3 className={standardStyles.paragraph}>
            {" "}
            How to be part of governace your impact will be great{" "}
          </h3>

          <button
            className={`${standardStyles.btn} ${standardStyles.btn__purple}`}
          >
            How to become involved{" "}
          </button>
        </div>
      {/* </section>

      <section id="activities"> */}
        {/* </section> */}
        {/* <h2 className={standardStyles.headingPrimarysub}> Activities </h2> */}
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.activities__pictures}>
              <Image
                src={studentcouncil1}
                alt="Cleaning up beach"
                className={standardStyles.activities__img1}
                width="250"
                height="200"
              />
              <Image
                src={studentcouncil2}
                alt="Cleaning up beach again"
                className={standardStyles.activities__img2}
                width="250"
                height="200"
              />
            </div>
          </div>

          <div className={standardStyles.col1of2}>
            <div className={standardStyles.activities__content}>
              <h2 className={standardStyles.headingPrimarysub}>“Always good to give back”</h2>
              <p className={standardStyles.activities__text}>
                We are there to add value to others in whatever way possible.
                Serving is one of our greatest joy.
              </p>
              <button
                className={`${standardStyles.btn} ${standardStyles.btn__purple}`}
              >
                Join Student Council
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="events"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.marginTopBig}`}
      >
        <h2 className={standardStyles.headingPrimarysub}>
          {" "}
          Upcoming Club Events
        </h2>
        <div className={`${standardStyles.row}`}>
          <div className={standardStyles.col1of3}>
            <EventCardOrig />
          </div>
          <div className={standardStyles.col1of3}>
            <EventCardOrig />
          </div>

          <div className={standardStyles.col1of3}>
            <EventCardOrig />
          </div>
        </div>

        {/* <EventsRow
          label="Upcoming"
          events={getEventsByDept(foundDept.dept_code)}
        />{" "} */}
        {/* pull events */}
      </section>
      <section id="contact" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.headingPrimarysub}>
          {" "}
          Contact Student Life{" "}
        </h2>

        <ContactStudentLife />
      </section>
    </>
  );
};

export default studentcouncil;
