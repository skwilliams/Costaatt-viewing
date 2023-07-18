import React from 'react'
import Head from 'next/head'
import HeadImage from '../../../../../components/PageComponents/HeadImage'
import headImg from "../../../../../../images/Programmes/tester2.jpg"
import Layout from '../../../../../components/PageWithSideNavComponents/Layout'
import ProgStyles from '../../../../../styles/Programmes.module.scss'

import ContactSideNav from '../../../../../components/PageComponents/ContactSideNav'
import DeptStyles from '../../../../../styles/Department.module.scss'
import EventCard from '../../../../../components/PageComponents/EventsCard'
import NewsCard from '@/components/PageComponents/NewsCard'
import BusImg from "../../../../../../images/Links/home2.png";
import Link from "next/link"
import Featured from '@/components/PageComponents/Featured'
import { features } from '@/components/PageComponents/featuresdata'


const index = () => {
 
    return (
      <>
        <Head>
          <title>IST</title>
        </Head>

        <HeadImage
          imagetext="Information Science and Technology"
          mainimage={headImg}
        />

        <section id="overview" className={DeptStyles.sectionoverviewSide}>
          <div className={ProgStyles.umargintopsmall}>
            <p className={ProgStyles.headingprimaryleft}> Mission</p>
            <p className={DeptStyles.sidenavtext}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo
              sed quae repellat blanditiis corrupti rerum quia voluptatem
              dolores, explicabo eius numquam, dolore incidunt reprehenderit
              aperiam, ad eos veniam unde. We are here for you Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Mollitia distinctio
              voluptatem a nemo quam, blanditiis quasi ipsa? Architecto
              aspernatur, esse eius id ut accusamus nihil ipsam nemo
              necessitatibus praesentium! Dolorem.
            </p>
            <div className={DeptStyles.contactcard}>
              <ContactSideNav
                btn1txt="Visit"
                btn2txt="Apply"
                contacttype="Department Contact"
                name="Maurisa Charles"
                tel="625-5030 ext 2222"
                // mailto="mcharles@costaatt.edu.tt "
                email="mcharles@costtatt.edu.tt"
              />
            </div>
          </div>
        </section>
        <section id="whatsup" className={DeptStyles.sectionwhatsup}>
          <p className={ProgStyles.headingprimaryleft}> IST Events</p>

          <div className={ProgStyles.threeColGridCon}>
            <div className={ProgStyles.threeColGrid}>
              <NewsCard
                mainimage={BusImg}
                title="Graduation"
                text="Get ready Graduates !!, submit your documents to ensure you walk across the stage, along with a team behind the Cosmic Evolution Early Release Science (CEERS) Survey, have used new observations from the James Webb Space Telescope to confirm the existence of the most distant active supermassive black hole ever found"
                link="https:www.google.com"
                schoolcolor="rgb(187,41,187)"
              />
            </div>
            <div className={ProgStyles.threeColGrid}>
              <NewsCard
                mainimage={BusImg}
                title="New Faculty "
                text="Business & Digital Technologies, welcome Mr.Jim James to the faculty of Business in the School of Physics and Astronomy, along with a team behind the Cosmic Evolution Early Release Science (CEERS) Survey, have used new observations from the James Webb Space Telescope to confirm the existence of the most distant active supermassive black hole ever found"
                link="https:www.google.com"
                schoolcolor="rgb(187,41,187)"
              />
            </div>
            <div className={ProgStyles.threeColGrid}>
              <NewsCard
                mainimage={BusImg}
                title="Advisement"
                text="associate professor in the School of Physics and Astronomy, along with a team behind the Cosmic Evolution Early Release Science (CEERS) Survey, have used new observations from the James Webb Space Telescope to confirm the existence of the most distant active supermassive black hole ever found"
                link="https:www.google.com"
                schoolcolor="rgb(187,41,187)"
              />
            </div>
          </div>
          <div className={ProgStyles.goto}>
            <Link className={ProgStyles.goto} href="#">
              {" "}
              View More..
            </Link>
          </div>
        </section>
        <section id="featuredwork" className={DeptStyles.sectionfeaturedwork}>
            <Featured feat={features}  />
        </section>
        <section id="facultystaff" className={DeptStyles.sectionfaculty}>
          <p>Images of faculty and Staff</p>
        </section>
        <section id="prgorammes" className={DeptStyles.sectionprogrammes}>
          <p>accordian</p>
        </section>
        <section
          id="sturesource"
          className={DeptStyles.sectionsturesources}
        ></section>
      </>
    );

}
index.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
  }

export default index