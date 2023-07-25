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

import Image from 'next/image'

import ContactSideNav from '../../../../../components/PageComponents/ContactSideNav'
import DeptStyles from '../../../../../styles/Department.module.scss'
import EventCard from '../../../../../components/PageComponents/EventsCard'
import NewsCard from '@/components/PageComponents/NewsCard'
import BusImg from "../../../../../../images/Links/home2.png";
import Link from "next/link"
import Featured from '@/components/PageComponents/Featured'
import { features } from '@/components/PageComponents/featuresdata'
import {staffdata} from '@/pages/programmes/schools/busIT/ist/facultystaffdata'
import FacultyStaffCard from '../../../../../components/PageComponents/FacultyStaffDepCard'
import image from "../../../../../../images/Programmes/visit-home-v2.jpg"
import image2 from "../../../../../../images/Programmes/campus.png";

import StudentResources from '@/components/PageComponents/StudentResources'


const index = () => {
 
    return (
      <>
        <Head>
          <title>IST</title>
        </Head>
        <HeadImage
          imagetext="ICT and Digital Technologies"
          mainimage={headImg}
        />
        <section id="overview" className={DeptStyles.sectionOverview}>
          <div className={ProgStyles.umargintopsmall}>
            <p className={ProgStyles.headingprimary}> Our Mission</p>
            <p className={DeptStyles.maintext}>
              The department of ICT's and Digital Technologies is the hub were
              technologies meet. It's an infusion of Library Science and
              Technology. If you desire to be exposed to technology that runs
              through the viens of the world, you have come to the right place.
              You can specialize in Databases,Networking, Library Science and
              Web Development. You will be exposed to the best and latest
              technologies all while learning the building blocks that makes up
              Information and Technology.
            </p>
            {/* <p className={DeptStyles.subheading}> Vision</p> */}
            <p className={DeptStyles.subtext}>
              {" "}
              The department of ICTs and Digital Technologies is part of the
              School of Business and Digital Technologies. The department
              currently offers several programs designed to meet your
              educational and career goals. Our programmes include the Library
              Science and Information Technology discipline The vision of the
              ICTs and Digital Technologies department is to be the premier
              Information Technology educational institution in the Caribbean.{" "}
            </p>
            {/* <p className={DeptStyles.subheading}> Mission</p> */}
            <p className={DeptStyles.subtext}>
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
          </div>
        </section>
        <section id="contact" className={DeptStyles.sectionContact}>
          <p className={ProgStyles.headingprimary}> Department Contact</p>

          <div className={DeptStyles.contactcard}>
            <ContactSideNav
              btn1txt="Visit"
              btn2txt="Apply"
              btn3txt="Request Info"
              contacttype="Department Contact"
              name="Maurisa Charles"
              tel="625-5030 ext 2222"
              // mailto="mcharles@costaatt.edu.tt "
              email="mcharles@costtatt.edu.tt"
            />
          </div>
        </section>
        <section id="happening" className={DeptStyles.sectionWhatsup}>
          <p className={ProgStyles.headingprimary}> Department Events</p>

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
        </section>{" "}
        <section id="featuredwork" className={DeptStyles.sectionFeaturedwork}>
          <p className={ProgStyles.headingprimary}> Featured Work</p>

          <Featured feat={features} />
        </section>
        <section id="facultystaff" className={DeptStyles.sectionFaculty}>
          <p className={ProgStyles.headingprimary}> Faculty and Staff</p>
          <div className={DeptStyles.fourGridCon}>
            <FacultyStaffCard staff={staffdata} />
          </div>
        </section>
        <section id="programmes" className={DeptStyles.sectionProgrammes}>
          <p className={ProgStyles.headingprimary}> Department Programmes </p>

          <div className={ProgStyles.threeGridRowCon}>
            <div className={ProgStyles.threeGridRow}>
              <Accordion className={DeptStyles.courseaccordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={ProgStyles.acoordiantext}>
                    Bachelor Degrees
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className={ProgStyles.degcourses}>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> Information Technology </Link>
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href="">Networking</Link>
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> Web Development</Link>
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href="">Library and Information Science</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={ProgStyles.threeGridRow}>
              <Accordion className={DeptStyles.courseaccordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={ProgStyles.acoordiantext}>
                    Associate Degrees
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={ProgStyles.bachelors}>
                  <ul className={ProgStyles.degcourses}>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href="">Information Technology</Link>{" "}
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href="">Web Development</Link>
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href="">Library and Information Studies</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={ProgStyles.threeGridRow}>
              <Accordion className={DeptStyles.courseaccordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={ProgStyles.acoordiantext}>
                    Certificates
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={ProgStyles.bachelors}>
                  <ul className={ProgStyles.degcourses}>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> Records Management</Link>
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> CISCO-CCNA</Link>{" "}
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> Web Development</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </section>
        <section id="sturesource" className={DeptStyles.sectionStuResources}>
          <p className={ProgStyles.headingprimary}> COSTAATT WANTS YOU </p>
          <div className={DeptStyles.threeGridCon}>
            <div className={DeptStyles.threeGridCol}>
              <StudentResources image={image} imagetxt="Apply Now" />{" "}
            </div>
            <div className={DeptStyles.threeGridCol}>
              {" "}
              <StudentResources
                image={image2}
                imagetxt="See Admissions Counsellor"
              />
            </div>
            <div className={DeptStyles.threeGridCol}>
              {" "}
              <StudentResources image={image} imagetxt="Visit Us" />
            </div>
          </div>
        </section>
      </>
    );

}
// index.getLayout = function getLayout(page) {
//     return <Layout>{page}</Layout>
//   }

export default index