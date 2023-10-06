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
import {caimans} from"../../../public/images/costaattlife/caiman.jpg"
import { basketball } from "../../../public/images/costaattlife/basketball.jpg";
import {costaattteam } from "../../../public/images/costaattlife/costaatt team.jpg";
import { cricket } from "../../../public/images/costaattlife/cricket.jpg";
import { cricket2 } from "../../../public/images/costaattlife/cricket2.jpg";
import { football } from "../../../public/images/costaattlife/football.jpg";
import { netball } from "../../../public/images/costaattlife/netball.jpg";

import { run4life } from "../../../public/images/costaattlife/run4life.jpg";
import {gal1} from "../../../public/images/img/gal-1.jpeg";
import { gal2 } from "../../../public/images/img/gal-2.jpeg";
import { gal3 } from "../../../public/images/img/gal-3.jpeg";
import { gal4 } from "../../../public/images/img/gal-4.jpeg";
import { gal5 } from "../../../public/images/img/gal-5.jpeg";
import { gal6 } from "../../../public/images/img/gal-6.jpeg";
import { gal7 } from "../../../public/images/img/gal-7.jpeg";
import { gal8 } from "../../../public/images/img/gal-8.jpeg";
import { gal9 } from "../../../public/images/img/gal-9.jpeg";
import { gal10 } from "../../../public/images/img/gal-10.jpeg";
import { gal11 } from "../../../public/images/img/gal-11.jpeg";
import { gal12 } from "../../../public/images/img/gal-12.jpeg";



import { gal13 } from "../../../public/images/img/gal-13.jpeg";
import { gal14 } from "../../../public/images/img/gal-14.jpeg";
import ReactPlayer from "react-player";

import GradStyle from "../../styles/GradsSpeak.module.scss";
import { useState } from "react";
import { useEffect } from "react";

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
        imagetext="Student Clubs and Organizations"
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
      ></section>

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
                  src={awaitingimage}
                />

                <Image
                  // srcSet="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Cricket"
                  width="250"
                  height="250"
                  className={` ${standardStyles.composition__photo} ${standardStyles.composition__photo_p2}`}
                  src={awaitingimage}
                />

                <Image
                  // srcSet="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Basketball"
                  width="250"
                  height="250"
                  className={`${standardStyles.composition__photo} ${standardStyles.composition__photo_p3}`}
                  src={awaitingimage}
                />
              </>
            </div>
          </div>
        </div>{" "}
      </section>

      {/* <section className={`${standardStyles.gallery} ${standardStyles.marginTopBig}`}>
        <div
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_1}`}
        >
          <Image
            src={run4life}
            alt="Gallery image 1"
            className={standardStyles.gallery__img}
                        sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </div>
        <div
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_2}`}
        >
          <Image
            src={gal2}
            alt="Netball"
            className={standardStyles.gallery__img}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </div>
        <div
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_3}`}
        >
          <Image
            src={gal3}
            alt="Gallery image 3"
            className={standardStyles.gallery__img}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </div>
        <div
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_4}`}
        >
          <Image
            src={gal4}
            alt="Gallery image 4"
            className={standardStyles.gallery__img}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </div>
        <figure
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_5}`}
        >
          <Image
            src={gal5}
            alt="Gallery image 5"
            className={standardStyles.gallery__img}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <figure
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_6}`}
        >
          <Image
            src={gal6}
            alt="Gallery image 6"
            className={standardStyles.gallery__img}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <figure
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_7}`}
        >
          <Image
            src={gal7}
            alt="Gallery image 7"
            className={standardStyles.gallery__img}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <figure
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_8}`}
        >
          <Image
            src={gal8}
            alt="Gallery image 8"
            className={standardStyles.gallery__img}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <figure
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_9}`}
        >
          <Image
            src={gal9}
            alt="Gallery image 9"
            className={standardStyles.gallery__img}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <figure
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_10}`}
        >
          <Image
            src={gal10}
            alt="Gallery image 10"
            className={standardStyles.gallery__img}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <figure
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_11}`}
        >
          <Image
            src={gal11}
            alt="Gallery image 11"
            className={standardStyles.gallery__img}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <figure
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_12}`}
        >
          <Image
            src={gal12}
            alt="Gallery image 12"
            className={standardStyles.gallery__img}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <figure
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_12}`}
        >
          {" "}
          <Image
            src={gal13}
            alt="Gallery image 13"
            className={standardStyles.gallery__img}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>
        <figure
          className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_13}`}
        >
          {" "}
          <Image
            src={gal14}
            alt="Gallery image 14"
            className={standardStyles.gallery__img}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }} // optional
          />
        </figure>{" "}
      </section> */}

      <section
        id="events"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.marginTopBig}`}
      >
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
          <div className={standardStyles.col1of4}> Ian </div>
          <div className={standardStyles.col1of4}>Nigel</div>
          <div className={standardStyles.col1of4}>Woker1</div>
                  <div className={standardStyles.col1of4}>Worker2</div>

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
