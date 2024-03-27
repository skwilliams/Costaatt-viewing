import React from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "../../styles/main.module.scss";
import Image from "next/image";
import costlifeStyles from "../../styles/CostaattLife.module.scss";

import studentcouncil2 from "../../../public/images/costaattlife/studentcouncil1.jpg";
import studentcouncil1 from "../../../public/images/costaattlife/studentcouncil2.jpg";
import EventsCalendar from "../../components/PageComponents/EventsCalendar";

import { stucouncildata } from "../costaattlife/studcouninfo";
import StudentCouncilRep from "../../components/PageComponents/StudentCouncilRep";
import ContactStudentLife from "../../components/PageComponents/ContactStudentLife";
import awaitingbanner from "../../../public/images/about/qualitycontrol1.jpg";
import HeadImage from "../../components/PageComponents/HeadImage";

const studentcouncil = () => {
  return (
    <>
      <Head>
        <title>Student Council</title>
      </Head>
      <HeadImage mainimage={awaitingbanner} imagetext="Student Council" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/costaattlife">COSTAATTLIFE / </Link>
        <Link href="/costaattlife/studentcouncil">Student Council</Link>
      </p>

      <header>
        <span className={standardStyles.heading_primary__main}>
          Student Council
        </span>
        <span className={standardStyles.heading_primary__sub}>
          Providing an opportunity for students to present their views to
          college administration
        </span>
      </header>

      <section
        id="introcouncil"
        className={`${costlifeStyles.sectionNoSidenav} ${standardStyles.marginBottomBig}`}
      >
        <h2
          className={`${standardStyles.heading_primary__secondary} ${standardStyles.centertext}`}
        >
          Student Council{" "}
        </h2>

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
      <section id="presentteam" className={costlifeStyles.sectionNoSidenav}>
        <h2
          className={`${standardStyles.heading_primary__secondary} ${standardStyles.centertext}`}
        >
          {" "}
          Student Council Memebers
        </h2>

        <div className={standardStyles.row}>
          <StudentCouncilRep stucouncil={stucouncildata} />
        </div>
      </section>
      <section id="joinus" className={`${costlifeStyles.sectionstartclub} `}>
        <div className={costlifeStyles.startclub}>
          <h2> Represent your fellow students</h2>
          <h3 className={standardStyles.paragraph}>
            {" "}
            How to be part of governace your impact will be great{" "}
          </h3>

          <button
            className={standardStyles.btn}
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
              <h2 className={standardStyles.headingPrimarysub}>
                “Always good to give back”
              </h2>
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

      <section id="events" className={standardStyles.sectionNoSidenav}>
        <div>
          <h2
            className={`${standardStyles.heading_primary__secondary} ${standardStyles.centertext}`}
          >
            {" "}
            Upcoming Sporting Events
          </h2>

          <EventsCalendar />
        </div>
      </section>
      <section id="contact" className={standardStyles.sectionNoSidenav}>
        <h2
          className={`${standardStyles.heading_primary__secondary}  ${standardStyles.marginTopBig} ${standardStyles.centertext}`}
        >
          Contact Student Life{" "}
        </h2>

        <ContactStudentLife />
      </section>
    </>
  );
};

export default studentcouncil;
