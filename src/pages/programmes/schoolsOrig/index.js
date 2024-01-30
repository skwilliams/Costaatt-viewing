import React from 'react';
import ProgStyles from '../../../styles/Programmes.module.scss';
import visitus from '../../../../public/images/visit-home-v2.jpg';
import SchoolCard from '../../../components/PageComponents/SchoolCard';
import SchoolImage from '../../../../public/images/about/qualitycontrol1.jpg';

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import HeadImage from '@/components/PageComponents/HeadImage';
import headImg from '../../../../public/images/about/qualitycontrol1.jpg';

const schools = () => {
  return (
    <>
      <Head>
        <title>Schools</title>
      </Head>

      <HeadImage imagetext="Schools" mainimage={headImg} />

      <section id="overview" className={ProgStyles.sectionoverview}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}> Overview of Schools</p>
          <p className={ProgStyles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo
            sed quae repellat blanditiis corrupti rerum quia voluptatem dolores,
            explicabo eius numquam, dolore incidunt reprehenderit aperiam, ad
            eos veniam unde. We are here for you Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia distinctio voluptatem a nemo
            quam, blanditiis quasi ipsa? Architecto aspernatur, esse eius id ut
            accusamus nihil ipsam nemo necessitatibus praesentium! Dolorem.
          </p>
        </div>
      </section>

      <section id="allschools" className={ProgStyles.sectionallschools}>
        <p className={ProgStyles.headingprimary}> All Schools</p>

        <SchoolCard
          image={SchoolImage}
          schoolname="School of Business and Digital Technologies"
          intro="lorem ispsum isdf Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo sed
                  quae repellat blanditiis corrupti rerum quia voluptatem dolores, explicabo
                  eius numquam, dolore incidunt reprehenderit aperiam, ad eos veniam unde.
                  We are here for you Lorem ipsum dolor sit amet consectetur adipisicing
                "
          linkpage="/programmes/schools/busIT"
          shortname="SBDT"
        />
        <SchoolCard
          image={SchoolImage}
          schoolname=" School of Liberal Arts, Education and Digital Humanities "
          intro="lorem ispsum isdf Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo sed
                  quae repellat blanditiis corrupti rerum quia voluptatem dolores, explicabo
                  eius numquam, dolore incidunt reprehenderit aperiam, ad eos veniam unde.
                  We are here for you Lorem ipsum dolor sit amet consectetur adipisicing"
          linkpage="/programmes/schools/liberal"
          shortname="SLAEDH"
        />
        <SchoolCard
          image={SchoolImage}
          schoolname="The School of Workforce Enhancement and Development  "
          intro="lorem ispsum isdf Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo sed
    quae repellat blanditiis corrupti rerum quia voluptatem dolores, explicabo
    eius numquam, dolore incidunt reprehenderit aperiam, ad eos veniam unde.
    We are here for you Lorem ipsum dolor sit amet consectetur adipisicing
   "
          linkpage="/programmes/schools/workF"
          shortname="SWED"
        />
        <SchoolCard
          image={SchoolImage}
          schoolname="School of Nursing, Health and Medical Technologies "
          intro="lorem ispsum isdf Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo sed
    quae repellat blanditiis corrupti rerum quia voluptatem dolores, explicabo
    eius numquam, dolore incidunt reprehenderit aperiam, ad eos veniam unde.
    We are here for you Lorem ipsum dolor sit amet consectetur adipisicing
   "
          linkpage="/programmes/schools/nursing"
          shortname="SNHM"
        />
        <SchoolCard
          image={SchoolImage}
          schoolname="The Ken Gordon School of Communication, Creative and Digital Media "
          intro="lorem ispsum isdf Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo sed
    quae repellat blanditiis corrupti rerum quia voluptatem dolores, explicabo
    eius numquam, dolore incidunt reprehenderit aperiam, ad eos veniam unde.
    We are here for you Lorem ipsum dolor sit amet consectetur adipisicing
   "
          linkpage="/programmes/schools/kengord"
          shortname="KGSC"
        />
        <SchoolCard
          image={SchoolImage}
          schoolname="School of Environment, Circular Economy and Sustainability  "
          intro="lorem ispsum isdf Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nemo sed
    quae repellat blanditiis corrupti rerum quia voluptatem dolores, explicabo
    eius numquam, dolore incidunt reprehenderit aperiam, ad eos veniam unde.
    We are here for you Lorem ipsum dolor sit amet consectetur adipisicing
   "
          linkpage="/programmes/schools/enviro"
          shortname="SECE"
        />
      </section>
      <section id="areastudy" className={ProgStyles.sectionareasofstudy}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}> Areas of Study </p>
          <p className={ProgStyles.umargintopsmall}></p>
          <div className={ProgStyles.areasofSGridCon}>
            <div className={ProgStyles.areasofSGrid}>
              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">District Health Visiting</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Medical Lab Technology</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Midwifery</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Nursing</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Pharmacy Assistant</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Phlebotomy</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Radiography</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Sonography for Midwives</Link>
                </li>
              </ul>
            </div>
            <div className={ProgStyles.areasofSGrid}>
              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Criminal Justice</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Early Childhood Care and Education</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Mathematics</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Psychology</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Social Work</Link>{" "}
                </li>
              </ul>
            </div>
            <div className={ProgStyles.areasofSGrid}>
              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Biology</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Emergency Care</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Environmental Health</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Natural and Life Science</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Occupational Safety and Health</Link>{" "}
                </li>
              </ul>
            </div>
            <div className={ProgStyles.areasofSGrid}>
              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Advertising and Promotions</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Films and Video Production</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Graphic Design</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Journalism and PR</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Literatues in English</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Mass Communications</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Music</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Spanish</Link>
                </li>
              </ul>
            </div>
            <div className={ProgStyles.areasofSGrid}>
              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Accounting</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Business Administration</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Entrepreneurship</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Human Resources</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Information Technology</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Library Studies</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Marketing</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Networking</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Supervisory Management</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Records Management</Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  <Link href="#">Web Development</Link>
                </li>
              </ul>
            </div>
            <div className={ProgStyles.areasofSGrid}>
              <ul className={ProgStyles.areasofstudyul}>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Corporate and Upskilling Training</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">
                    Customized Workshops and Short Courses
                  </Link>{" "}
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Professional Development</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">Translation and Interpretation Services</Link>
                </li>
                <li className={ProgStyles.areasofstudyli}>
                  {" "}
                  <Link href="#">CollegeStartTT Programme</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className={ProgStyles.sectionapply}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}> Apply Now </p>
          <div className={ProgStyles.threeColGridCon}>
            <div className={ProgStyles.threeColGrid}>
              <Image
                className={ProgStyles.applyimages}
                src={visitus}
                alt="page image"
              />

              <p className={ProgStyles.applyheading}>Visit us </p>
              <p className={ProgStyles.applytext}>Schedule a tour</p>
              <Link className={ProgStyles.goto} href="/admissions/visitus">
                {" "}
                Make an appointment
              </Link>
            </div>
            <div className={ProgStyles.threeColGrid}>
              <Image
                className={ProgStyles.applyimages}
                src={visitus}
                alt="page image"
              />

              <p className={ProgStyles.applyheading}>Have Qeustions ?</p>
              <p className={ProgStyles.applytext}>
                Speak to an Admission Councillor
              </p>
              <Link className={ProgStyles.goto} href="/admissions/contactcoun">
                {" "}
                Book an appointment with a councillor →
              </Link>
            </div>
            <div className={ProgStyles.threeColGrid}>
              <Image
                className={ProgStyles.applyimages}
                src={visitus}
                alt="page image"
              />

              <p className={ProgStyles.applyheading}>Apply Now </p>
              <p className={ProgStyles.applytext}>
                {" "}
                Ready to start your journey.
              </p>
              <Link className={ProgStyles.goto} href="/admissions/applynow">
                {" "}
                Apply Now →
              </Link>
            </div>
          </div>
          <p />
        </div>
      </section>
    </>
  );
};

// schools.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>
// }
export default schools;
