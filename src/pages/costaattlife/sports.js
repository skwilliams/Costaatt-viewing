import React from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import { Button, Divider } from "@mui/material";
import HeadImage from "@/components/PageComponents/HeadImage";
import awaitingbanner from "../../../public/images/awaitingBanner.png";

import awaitingimage from "../../../public/images/awaitingNewsEvent.png";


import Image ,{StaticImageData} from "next/image";
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
import studentamb from "../../../public/images/costaattlife/studentAmb.jpg";
import { getEventsByDept } from "../../../public/data/eventsdata";
import EventCardOrig from "@/components/PageComponents/EventCardOrig";
import { stucouncildata } from "../costaattlife/studcouninfo";
import StudentCouncilRep from "@/components/PageComponents/StudentCouncilRep";
import ContactStudentLife from "@/components/PageComponents/ContactStudentLife";
import caimans from"../../../public/images/costaattlife/caiman.jpg"
import basketball  from "../../../public/images/costaattlife/basketball.jpg";
import costaattteam  from "../../../public/images/costaattlife/costaatt team.jpg";
import  cricket  from "../../../public/images/costaattlife/cricket.jpg";
import cricket2  from "../../../public/images/costaattlife/cricket2.jpg";
import  football  from "../../../public/images/costaattlife/football.jpg";
import  netball  from "../../../public/images/costaattlife/netball.jpg";

import  run4life  from "../../../public/images/costaattlife/run4life.jpg";
import ReactPlayer from "react-player";

import GradStyle from "../../styles/GradsSpeak.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import FacultyStaffCard from "@/components/PageComponents/FacultyStaffDepCard";
import StaffCard from "@/components/PageComponents/StaffCard";

const sports = () => {


   const [hasWindow, setHasWindow] = useState(false);
 useEffect(() => {
   if (typeof window !== "undefined") {
     setHasWindow(true);
   }
 }, []);
 const video = ""
  return (
    <>
      <Head>
        <title>Sports at COSTAATT</title>
      </Head>
      <HeadImage
        mainimage={awaitingbanner}
        imagetext={"COSTAATT Sports"}
      />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/costaattlife"></Link>
        <Link href="/costaattlife/sports">Sports</Link>
      </p>

      <section id="introsports" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.headingPrimarysub}>
          Sports at COSTAATT{" "}
        </h2>
        <p className={standardStyles.paragraph}>
          The Department of Athletics seeks to provide extracurricular support
          in the provision of a holistic education for all our students.
          Further, we strive to create opportunities for leadership, promote
          personal development and growth and provide sporting and physical
          activity through intramural and intercollegiate sporting and
          recreational activities.
        </p>
      </section>

      <section
        id="joinus"
        className={`${standardStyles.sectionstartclub} `}
      >
        
      </section>

      <section
        id="sportsteams"
        className={`${standardStyles.sectionambasadoor} `}
      >
        <h2 className={standardStyles.headingPrimarysub}> Our Teams </h2>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.paragraph}>
              We subscribe to the National Sports Policy by fostering a
              “Sports-for- all” culture throughout the College. We subscribe to
              the National Sports Policy by fostering a “Sports-for- all”
              culture throughout the College. COSTAATT Teams:
            </div>
            <div className={standardStyles.bullets}>
              <ul className={standardStyles.list}>
                <li className={standardStyles.items}>Football </li>
                <li className={standardStyles.items}>Basketball</li>
                <li className={standardStyles.items}>Netball</li>
              </ul>
            </div>{" "}
            <div className={standardStyles.paragraph}>
              Our success in football, basketball, and netball in the UTT
              Champions League is indicative of the College's potential to
              perform at a high standard. The College has embarked on a
              development programme that now includes cricket and volleyball.
              Become part of one of our dynamic teams, you'll get fit, create
              new relationships, manage stress and have fun. For more
              information contact our athletics department. We can't wait to
              have you !!
            </div>
          </div>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.composition}>
              <>
                <Image
                  // srcSet="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Football"
                  width="250"
                  height="250"
                  className={`${standardStyles.composition__photo} ${standardStyles.composition__photo_p1} `}
                  src={football}
                />

                <Image
                  // srcSet="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Cricket"
                  width="250"
                  height="250"
                  className={` ${standardStyles.composition__photo} ${standardStyles.composition__photo_p2}`}
                  src={cricket}
                />

                <Image
                  // srcSet="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Basketball"
                  width="250"
                  height="250"
                  className={`${standardStyles.composition__photo} ${standardStyles.composition__photo_p3}`}
                  src={netball}
                />
              </>
            </div>
          </div>
        </div>{" "}
      </section>

 

      <section id="events" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.headingPrimarysub}>
          {" "}
          Upcoming Sporting Events
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
      <section id="thedepartment" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.headingPrimarysub}>
          {" "}
          Department of Athletics{" "}
        </h2>

        {/* <div className={standardStyles.row}>
        </div> */}

        <div className={standardStyles.row}>
          <div className={standardStyles.col1of4}>
            <StaffCard
              name="Ian Carter"
              position={"Director of Athletics, Student Affairs"}
              phone="625 5030 ext 5227"
              email="icarter@costaatt.edu.tt"
            />
          </div>
          <div className={standardStyles.col1of4}>
            <StaffCard
              name="Nigel Ramah"
              position={"Coach"}
              phone="625 5030 ext 5227"
              email="nramah@costaatt.edu.tt"
            />
          </div>
          <div className={standardStyles.col1of4}>
            <StaffCard
              name="Worker 2"
              position={"Position 1"}
              phone="625 5030 ext 5227"
              email="worker2@costaatt.edu.tt"
            />
          </div>
          <div className={standardStyles.col1of4}>
            {" "}
            <StaffCard
              name="Worker 1"
              position={"Position 2"}
              phone="625 5030 ext 5227"
              email="worker1@@costaatt.edu.tt"
            />
          </div>
        </div>
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

export default sports
