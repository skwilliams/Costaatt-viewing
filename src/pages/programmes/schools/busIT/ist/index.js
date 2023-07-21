import React from 'react'
import Head from 'next/head'
import HeadImage from '../../../../../components/PageComponents/HeadImage'
import headImg from "../../../../../../images/Programmes/tester2.jpg"
import Layout from '../../../../../components/PageWithSideNavComponents/Layout'
import ProgStyles from '../../../../../styles/Programmes.module.scss'
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



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
            <p className={ProgStyles.headingprimaryleft}> Overview</p>
            <p className={DeptStyles.sidenavtext}>
              The Department of ICTs and Digital Technologies is part of the
              School of Business and Digital Technologies. The department
              currently offers several programs designed to meet your
              educational and career goals. Our programmes include the Library
              Science and Information Technology disciplines.
            </p>
            <p className={DeptStyles.subheading}> Vision</p>
            <p className={DeptStyles.sidenavtext}>
              {" "}
              The vision of the ICTs and Digital Technologies department is to
              be the premier Information Technology educational institution in
              the Caribbean.{" "}
            </p>
            <p className={DeptStyles.subheading}> Mission</p>
            <p className={DeptStyles.sidenavtext}>
              {" "}
              To develop expert Information Technology (IT) solution providers,
              equipped with the most up-to-date and relevant information
              technology and critical thinking skills, through training,
              practicum and industry experience.
            </p>{" "}
            <Accordion className={DeptStyles.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={DeptStyles.acoordiantext}>
                  Core Values
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className={ProgStyles.degcourses}>
                  <li className={ProgStyles.degcoursesli}>
                    Dedication - We are dedicated to the task of educating all
                    students in our department. We invest the time and energy
                    necessary to create a positive learning environment for our
                    students.
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    Teamwork - We share knowledge and support each other as we
                    work towards achieving our vision and mission.{" "}
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    Integrity- We are honest in our actions and have respect for
                    our students and each other.{" "}
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    Compassion - we care about our student's success and
                    well-being.{" "}
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    Innovation - we are continuously striving to create a
                    dynamic learning environment for our students. We utilize
                    where necessary new techniques and strategies to improve
                    teaching and learning.{" "}
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    Student-Centeredness - we value and respect the students as
                    unique individuals with different learning abilities. We
                    assist the students as much as possible in realizing their
                    educational goals.{" "}
                  </li>
                  <li className={ProgStyles.degcoursesli}>
                    Lifelong learning - we engage in lifelong learning and
                    encourage our students to be lifelong learners.{" "}
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
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
          <Featured feat={features} />
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