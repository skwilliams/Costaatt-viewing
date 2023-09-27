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
import studentamb from "../../../public/images/costaattlife/studentAmb.jpg";
import { getEventsByDept } from "../../../public/data/eventsdata";
import EventCardOrig from "@/components/PageComponents/EventCardOrig";
import { stucouncildata } from "../costaattlife/studcouninfo";
import StudentCouncilRep from "@/components/PageComponents/StudentCouncilRep";
import ContactStudentLife from "@/components/PageComponents/ContactStudentLife";
import {caimans} from"../../../public/images/costaattlife/caimans.png"

const sports = () => {
  return (
    <>
      <Head>
        <title>Sports at COSTAATT</title>
      </Head>
      <HeaderNoImage imagetext="Student Clubs and Organizations" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/costaattlife"></Link>
        <Link href="/costaattlife/sports">Sports</Link>
      </p>

      <section
        id="introsports"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.marginBottomBig}`}
      >
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
      <section id="sportsteams" className={standardStyles.sectionsports}>
        <h2 className={standardStyles.headingPrimarysub}>
          {" "}
          Our Teams Go Caimans
        </h2>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <Image
              className={standardStyles.imgstyle}
              src={caimans}
              alt="Caimans Mascot"
              width="3000"
              height="0"
            />
          </div>
          <div className={standardStyles.col1of2}>
            <p className={standardStyles.paragraph}>
              We subscribe to the National Sports Policy by fostering a
              “Sports-for- all” culture throughout the College. COSTAATT Teams:
              • Football • Basketball • Netball Our success in football,
              basketball, and netball in the UTT Champions League is indicative
              of the College's potential to perform at a high standard. The
              College has embarked on a development programme that now includes
              cricket and volleyball.
            </p>
            <div className={standardStyles.startclub}>
              <h2> Represent your fellow students</h2>
              <h3 className={standardStyles.paragraph}>
                {" "}
                Do you want to be a caiman{" "}
              </h3>

              <a    Q
                href="#contact"
                className={`${standardStyles.btn} ${standardStyles.btn__purple}`}
              >
                Contact us for More Information {" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="activities"
        className={`${standardStyles.sectionambasadoor} `}
      >
        <h2 className={standardStyles.headingPrimarysub}> Activities </h2>
        <div className={standardStyles.row}>
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
            </Link> */}
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
        </div>{" "}
      </section>

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

        <div className={standardStyles.row}>
          <StudentCouncilRep stucouncil={stucouncildata} />
        </div>

        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}></div>
          <div className={standardStyles.col1of3}></div>
          <div className={standardStyles.col1of3}></div>
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
