import React, {useState} from 'react'

import ReactDom from "react-dom";

import standardStyles from "@/styles/main.module.scss"
import AdmisStyles from "@/styles/Admissions.module.scss";

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



const Careermgt = () => {

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }


    <div className={standardStyles.popup}>
      {isOpen && <Popup />}
      <button onClick={toggle}>Toggle show</button>
    </div>
 

  return (
    <>
      <Head>
        <title>Health and Wellness</title>
      </Head>

      <HeadImage mainimage={awaitingbanner} />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/costaattlife"></Link>
        <Link href="/costaattlife/Careermgt">Sports</Link>
      </p>

      <section id="intro" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.introtext}>
          {" "}
          We are here to guide you as you navigate through this journey.
          COSTAATT offers many service that will assist you in preparing for the
          world of work. We teach you skills and opportunities to robatining
          employment and{" "}
        </h2>
        <hr class={standardStyles.centerunder}/>
      </section>
      <section
        className={`${standardStyles.sectionColor2} ${standardStyles.centertext}`}
        id="services"
      >
        <h2 className={`${standardStyles.headingPrimarysub} ${standardStyles.centertext}`}>Available Services</h2>

        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}>
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
                    Career Management{" "}
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

          <div className={standardStyles.col1of3}>
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
                    Internship
                  </span>
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

          <div className={standardStyles.col1of3}>
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
                    Career Preparation
                  </span>
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
        </div>

        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}>
            <div className={standardStyles.card}>
              <div
                className={`${standardStyles.card__side} ${standardStyles.card__sidefront}`}
              >
                <div
                  className={`${standardStyles.card__picture} ${standardStyles.card__picture4}`}
                >
                    &nbsp;
                </div>
                <h4 className={standardStyles.card__heading}>
                  <span
                    className={`${standardStyles.card__headingSpan}${standardStyles.card__headingSpan4}`}
                  >
                    Placement
                  </span>
                </h4>
                <div
                  className={`${standardStyles.card__details} ${standardStyles.card__details4}`}
                >
                  As part of its commitment to supporting students’ transition
                  to the world of work, the Department of Career Management
                  Services will host an online recruitment service featuring
                  registered student subscribers. In addition, it will offer
                  on-campus recruitment and networking events, career
                  explorations and job placement recruitment drives. Look out
                  for our vacancy postings via student email, the web portal or
                  you can visit your placement officer for information on job
                  vacancies.
                </div>
              </div>
            </div>
          </div>

          <div className={standardStyles.col1of3}>
            <div className={standardStyles.card}>
              <div
                className={`${standardStyles.card__side} ${standardStyles.card__sidefront}`}
              >
                <div
                  className={`${standardStyles.card__picture} ${standardStyles.card__picture5}`}
                >
                    &nbsp;
                </div>
                <h4 className={standardStyles.card__heading}>
                  <span
                    className={`${standardStyles.card__headingSpan}${standardStyles.card__headingSpan5}`}
                  >
                    Workshops
                  </span>
                </h4>
                <div
                  className={`${standardStyles.card__details} ${standardStyles.card__details5}`}
                >
                  The Department of Career Management Services offers several
                  workshops intended to assist you in developing the required
                  competencies to obtain and maintain professional positions.
                  These include: Résumé writing, time management, professional
                  development, interviewing skills, job search strategies and
                  conflict resolution. Workshop schedules will be sent via your
                  student email. Additional information will also be posted on
                  the web portal which can be easily accessed at any time.
                </div>
              </div>
            </div>
          </div>

          <div className={standardStyles.col1of3}>
            <div className={standardStyles.card}>
              <div
                className={`${standardStyles.card__side} ${standardStyles.card__sidefront}`}
              >
                <div
                  className={`${standardStyles.card__picture} ${standardStyles.card__picture6}`}
                >
                    &nbsp;
                </div>
                <h4 className={standardStyles.card__heading}>
                  <span
                    className={`${standardStyles.card__headingSpan}${standardStyles.card__headingSpan6}`}
                  >
                    WorkStudy
                  </span>
                </h4>
                <div
                  className={`${standardStyles.card__details} ${standardStyles.card__details6}`}
                >
                  This programme is intended to allow you to develop through
                  experiential learning opportunities while on campus. It
                  consists of both the work-study trainee and the student
                  ambassador. The Work-Study trainee is intended to provide
                  students with the relevant experience in their field of study
                  while working on campus. The Student Ambassador role allows
                  students to act as college brand ambassadors and leaders. If
                  you would like to receive work-study handbooks and application
                  forms, make a request by visiting the Career Management
                  Services section of the myCOSTAATT Student Portal.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={standardStyles.sectionNoSidenav}>
<h2 classname={`${standardStyles.headingPrimarysub} ${standardStyles.centertext}`} >

          {" "}
          Contact Student Life{" "}
        </h2>
        <p className={standardStyles.paragraph}>
          To request further information on our services, or schedule an
          appointment with a Career Advisor or a Placement Officer, you can log
          on to the myCOSTAATT Student Portal, or contact us:
        </p>
        <ContactStudentLife />
      </section>
    </>
  );
}

export default 
Careermgt