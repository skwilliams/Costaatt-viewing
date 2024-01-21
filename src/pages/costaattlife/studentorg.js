import React from 'react'
import Link from 'next/link'
import Head from 'next/head';
import standardStyles from "@/styles/main.module.scss"
import AdmisStyles from "@/styles/Admissions.module.scss"
import HeadImage from "@/components/PageComponents/HeadImage";
import awaitingbanner from "../../../public/images/awaitingBanner.png";

import awaitingimage from "../../../public/images/awaitingNewsEvent.png";

import { Button, Divider } from '@mui/material';
import Image from 'next/image';
import { FiBookOpen } from "react-icons/fi";
import { PhoneCallback, Sanitizer, SignalCellularConnectedNoInternet4BarTwoTone } from '@mui/icons-material';
import { IconContext } from "react-icons";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import joinclub from "../../../public/images/costaattlife/joinclub.png"

import startclub from "../../../public/images/costaattlife/startclub.jpg";
import campus2 from "../../../public/images/costaattlife/campus 2.jpg";
import studentamb from "../../../public/images/costaattlife/ambas1.png";
import studentamb2 from "../../../public/images/costaattlife/studentAmb.jpg";

import EventsRow from "@/components/PageComponents/EventsRow";
import { getEventsByDept } from "../../../public/data/eventsdata";
import EventCardOrig from '@/components/PageComponents/EventCardOrig';
import ContactStudentLife from '@/components/PageComponents/ContactStudentLife';

const studentorg = () => {




  return (
    <>
      <Head>
        <title>Clubs and Organizations </title>
      </Head>
      <HeadImage mainimage={awaitingbanner} imagetext="Student Clubs and Organizations" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/costaattlife"></Link>
        <Link href="/costaattlife/studentorg">Clubs and Organizations</Link>
      </p>

      <section
        id="introtoclubs"
        className={`${standardStyles.sectionNoSidenav} ${standardStyles.marginBottomBig}`}
      >
        <h2 className={standardStyles.headingPrimarysub}>
          Registered Student Organisations{" "}
        </h2>

        <p className={standardStyles.paragraph}>
          Registered Student Organisations (RSOs) are student clubs formed by
          students to assist in their holistic development and the development
          of their leadership skills. RSOs provide opportunities for students to
          participate in extracurricular activities through membership in clubs
          devoted to leisure or academic pursuits. RSOs are established on the
          recommendation of Students Councils and with the approval of the
          college administration. Students may apply, using the prescribed
          forms, to the Department of Student Development. Student organisations
          benefit from the guidance of assigned faculty advisors whose
          responsibility it is to ensure effective student management of RSOs
          and their activities, including financial administration
        </p>
      </section>
      <section
        id="existingclubs"
        className={`${standardStyles.sectionclubs} ${standardStyles.marginTopBig}`}
      >
        <h2 className={standardStyles.headingPrimarysub}> Exisitng Clubs</h2>

        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Culture </h3>
              <p className={standardStyles.featurebox__text}>
                Enjoy learning about Culture ? <br /> Immense youself in
                Caribbean culture and the multicultural environment of Trinidad
                and Tobago.
              </p>
            </div>
          </div>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Music</h3>
              <p className={standardStyles.featurebox__text}>
                Do you enjoy Music? Join a vibrant and passionate group of music
                lovers and explore the world of music together..
              </p>
            </div>
          </div>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Photography</h3>
              <p className={standardStyles.featurebox__text}>
                Are you a budding photographer? Join us at photography club and
                develop your skills in a supportive environment.
              </p>
            </div>
          </div>
        </div>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Social Media</h3>
              <p className={standardStyles.featurebox__text}>
                Are you keen on honing your skills as a social media influencer
                or journalist? Join us and access opportunities to help you
                succeed in these fields.
              </p>
            </div>
          </div>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Debate </h3>
              <p className={standardStyles.featurebox__text}>
                Do you enjoy a good debate ? At this club we help you engage in
                critical thinking and to learn how to creatively discuss
                problems and ideas..
              </p>
            </div>
          </div>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Gaming</h3>
              <p className={standardStyles.featurebox__text}>
                Do you have an interest in gaming? If so, then we have just the
                club for you! , and it's a great way to meet like-minded people,
                learn more about gaming, and hone your gaming skills.
              </p>
            </div>
          </div>
          {/* <div className={standardStyles.col1of4}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Culture Club</h3>
              <p className={standardStyles.featurebox__text}>
                are interested in learning more about Caribbean culture and the
                multicultural environment of Trinidad and Tobago.
              </p>
            </div>
          </div> */}
        </div>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Nature</h3>
              <p className={standardStyles.featurebox__text}>
                Are you passionate about nature and the environment? Do you want
                to make a positive impact on our planet? If so, we invite you to
                join our Club!
              </p>
            </div>
          </div>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>Book</h3>
              <p className={standardStyles.featurebox__text}>
                Enjoy staying engaged and learning something new? Read
                interesting books and discuss them with like-minded people in a
                fun and friendly environment
              </p>
            </div>
          </div>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.featurebox}>
              <IconContext.Provider value={standardStyles.featurebox__icon}>
                {" "}
                <FiBookOpen value={standardStyles.featurebox__icon} />
              </IconContext.Provider>
              <h3 className={standardStyles.headingcards}>
                Sport and Fete Match
              </h3>
              <p className={standardStyles.featurebox__text}>
                Are you interested in joining a club that offers a variety of
                sports and fete matches? We have something for everyone -
                football, cricket, netball, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="startclub" className={`${standardStyles.sectionstartclub} `}>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.startclub}>
              <h2> Start a New Club</h2>
              <h3 className={standardStyles.paragraph}>
                {" "}
                Are you passionate about anything, you can create a club{" "}
              </h3>

              <button
                className={`${standardStyles.btn} ${standardStyles.btn__purple}`}
              >
                Start a Club
              </button>
            </div>
          </div>
          <div className={standardStyles.col1of2}>
            <div className={standardStyles.joinclub}>
              <h2> Join an Existing Club</h2>
              <h3 className={standardStyles.paragraph}>
                {" "}
                We are so exciting for you to join us{" "}
              </h3>

              <button className={standardStyles.btn}>Join a Club</button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ambassadors"
        className={`${standardStyles.sectionambasadoor} `}
      >
        <h2 className={standardStyles.headingPrimarysub}>
          {" "}
          Student Ambassadors
        </h2>
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of2}>
            <p className={standardStyles.paragraph}>
              Ambassadors are frequently called upon to represent the college at
              external engagements as well as plan and execute many campus
              activities, including but not limited to Admissions Recruitment
              Sessions, Registration, Student Orientation, Graduation and any
              other campus activity that may be planned by the college.
              <br/>
            </p>
            
            <p className={standardStyles.paragraph}
          > 
                            To become a Student Ambassador...

              <Link href="#contact"
                 className={`${standardStyles.btn} ${standardStyles.btn__purple}`}>
                {" "}
 contact student life           </Link>{" "}

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
                  src={studentamb2}
                />

                <Image
                  // srcSet="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 2"
                  width="250"
                  height="0"
                  className={` ${standardStyles.composition__photo} ${standardStyles.composition__photo_p2}`}
                  src={startclub}
                />

                <Image
                  // srcSet="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 3"
                  width="250"
                  height="0"
                  className={`${standardStyles.composition__photo} ${standardStyles.composition__photo_p3}`}
                  src={joinclub}
                />
              </>
            </div>
          </div>
        </div>{" "}
      </section>
      <div className={standardStyles.marginTopBig}></div>

      <section
        id="events"
        className={`${standardStyles.sectionNoSidenav} `}
      >
        <h2 className={standardStyles.headingPrimarysub}>
          {" "}
          Upcoming Club Events
        </h2>
        <div className={standardStyles.marginTopBig}></div>

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
      {/* <div className={standardStyles.marginTopBig}></div> */}
      {/* sectionSideNav overriding  with marginBottomBig */}
      <section
        id="contact"
        className={standardStyles.sectionNoSidenav} 
      >
        <h2 className={standardStyles.headingPrimarysub}>
          {" "}
          Contact Student Life{" "}
        </h2>

        <ContactStudentLife />
      </section>
    </>
  );


}

export default studentorg 