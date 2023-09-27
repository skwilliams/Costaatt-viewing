import React from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import { Button, Divider } from "@mui/material";
import Image from "next/image";
import { FiBookOpen } from "react-icons/fi";
import {
  PhoneCallback,
  Sanitizer,
  SignalCellularConnectedNoInternet4BarTwoTone,
} from "@mui/icons-material";
import { IconContext } from "react-icons";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import joinclub from "../../../public/images/costaattlife/joinclub.png";
import startclub from "../../../public/images/costaattlife/startclub.jpg";
import campus2 from "../../../public/images/costaattlife/campus 2.jpg";

import studentcouncil2 from "../../../public/images/costaattlife/studentcouncil1.jpg";
import studentcouncil1 from "../../../public/images/costaattlife/studentcouncil2.jpg";


import studentamb from "../../../public/images/costaattlife/studentAmb.jpg";
import EventsRow from "@/components/PageComponents/EventsRow";
import { getEventsByDept } from "../../../public/data/eventsdata";
import EventCardOrig from "@/components/PageComponents/EventCardOrig";
import {stucouncildata} from "../costaattlife/studcouninfo";
import StudentCouncilRep from "@/components/PageComponents/StudentCouncilRep";
import ContactStudentLife from "@/components/PageComponents/ContactStudentLife";

const studentcouncil = () => {
  return (
    <>
      <Head>
        <title>Student Council</title>
      </Head>
      <HeaderNoImage imagetext="Student Clubs and Organizations" />
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

          {/* <button
            className={`${standardStyles.btn} ${standardStyles.btn__purple}`}
          >
            How to become involved{" "}
          </button> */}
        </div>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.composition}>
              <Image
                src={studentcouncil1}
                alt="Cleaning up beach"
                className={` ${standardStyles.composition__photo} ${standardStyles.composition__photo_p1}`}
                width="200"
              />
              <Image
                src={studentcouncil2}
                alt="Cleaning up beach again"
                className={` ${standardStyles.composition__photo} ${standardStyles.composition__photo_p2}`}
                width="200"
              />
              <Image
                src={studentcouncil1}
                alt="Cleaning up beach"
                className={` ${standardStyles.composition__photo} ${standardStyles.composition__photo_p3}`}
                width="200"
              />
              {/* <Image
                src={studentcouncil2}
                alt="Cleaning up beach again"
                className={` ${standardStyles.composition__photo} ${standardStyles.composition__photo_p2}`}
                width="200"
              /> */}
            </div>
          </div>

          <div className={standardStyles.col2of3}>
            <div className={standardStyles.activities__content}>
              {/* <h3 className={standardStyles.headingPrimarysub}>Activities</h3> */}
              <h2>“Always good to give back”</h2>
              <p className={standardStyles.activities__text}>
                We are there to add value to others in whatever way possible.
                Serving is one of our greatest joy.
              </p>
              <button className={standardStyles.btn}>
                Join Student Council
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="activities">
        {/* </section> */}
        <h2 className={standardStyles.headingPrimarysub}> Activities </h2>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.activities__pictures}>
              <Image
                src={studentcouncil1}
                alt="Cleaning up beach"
                className={standardStyles.activities__img1}
                width="200"
              />
              <Image
                src={studentcouncil2}
                alt="Cleaning up beach again"
                className={standardStyles.activities__img2}
                width="200"
              />
            </div>
          </div>

          <div className={standardStyles.col1of2}>
            <div className={standardStyles.activities__content}>
              {/* <h3 className={standardStyles.headingPrimarysub}>Activities</h3> */}
              <h2>“Always good to give back”</h2>
              <p className={standardStyles.activities__text}>
                We are there to add value to others in whatever way possible.
                Serving is one of our greatest joy.
              </p>
              <button className={standardStyles.btn}>
                Join Student Council
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <p className={standardStyles.paragraph}>
              Ambassadors are frequently called upon to represent the college at
              external engagements as well as plan and execute many campus
              activities, including but not limited to Admissions Recruitment
              Sessions, Registration, Student Orientation, Graduation and any
              other campus activity that may be planned by the college.
            </p>
            {/* <Link href="./transfercredits" className={standardStyles.btnText}>
              Learn more →
            </Link> 
          </div>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.composition}>
              <>
                <Image
                  // srcSet="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 1"
                  width="250"
                  height="0"
                  className={`${standardStyles.composition__photo} ${standardStyles.composition__photo_p1} `}
                  src={startclub}
                />

                <Image
                  // srcSet="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 2"
                  width="250"
                  height="0"
                  className={` ${standardStyles.composition__photo} ${standardStyles.composition__photo_p2}`}
                  src={joinclub}
                />

                <Image
                  // srcSet="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 3"
                  width="250"
                  height="0"
                  className={`${standardStyles.composition__photo} ${standardStyles.composition__photo_p3}`}
                  src={studentamb}
                />
              </>
            </div>
          </div>
  </div>{" "} */}

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
