import React from 'react';
import Head from 'next/head';
import HeadImage from '@/components/PageComponents/HeadImage';
import headImg from '../../../../../images/Programmes/tester2.jpg';
import Layout from '../../../../components/Layout';
import ProgStyles from '../../../../styles/Programmes.module.scss';
import DepartCard from '@/components/PageComponents/DepartCard';
import DeanStyles from '../../../../styles/Dean.module.scss';
import BusImg from '../../../../../images/Links/home2.png';

import deanimg from '../../../../../images/Links/home1.png';
import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import Image from 'next/image';
import NewsCard from '@/components/PageComponents/NewsCard';

//The School of Environment, Circular Economy and Sustainability
const enviro = () => {
  return (
    <>
      <Head>
        <title> Environment </title>
      </Head>

      <HeadImage
        imagetext="The School of Environment, Circular Economy and Sustainability   "
        mainimage={headImg}
      />

      <p className={ProgStyles.headingprimarysub}>
        COSTAATT/Programmes/Environment{' '}
      </p>

      <section id="overview" className={ProgStyles.sectionoverview}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}> Overview of School</p>
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
      <section id="depart" className={ProgStyles.sectiondepart}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}> Departments </p>
          <div className={ProgStyles.progGridContwo}>
            <div className={ProgStyles.progGridtwo}>
              <DepartCard
                image={BusImg}
                departname="Environmental and Sustainability Studies "
                intro="From entrepreneurs and business professionals to
            information technology enthusiasts, this school is for you! Students   
            at this school will be able to connect classroom content, to real world application. 
            You will be equipped with the skills and support for success."
                linkpage="/programmes/schools/enviro/envsustud/"
                shortname="Environmental Studies"
              />
            </div>
            <div className={ProgStyles.progGridtwo}>
              <DepartCard
                image={BusImg}
                departname="Natural and Life Sciences "
                intro="From entrepreneurs and business professionals to
            information technology enthusiasts, this school is for you! Students   
            at this school will be able to connect classroom content, to real world application. 
            You will be equipped with the skills and support for success."
                linkpage="/programmes/schools/enviro/naturlifesci/"
                shortname="Natural and Life Sciences"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="depcourses" className={ProgStyles.sectiondeptcourses}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}>We Offer</p>

          <div className={ProgStyles.progGridCon}>
            <div className={ProgStyles.progGrid}>
              <Accordion className={ProgStyles.courseaccordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={ProgStyles.acoordiantext}>
                    Bachelor Degrees
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className={ProgStyles.degcourses}>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> Accounting </Link>
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href="">Management and Entrepreneurship</Link>
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> Human Resource Management</Link>{' '}
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> Marketing</Link>
                    </li>
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
            <div className={ProgStyles.progGrid}>
              <Accordion className={ProgStyles.courseaccordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={ProgStyles.acoordiantext}>
                    Associate Degrees
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={ProgStyles.bachelors}>
                  <ul className={ProgStyles.degcourses}>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href="">Business Administration</Link>
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href="">
                        Management Studies for the Protective Services
                      </Link>
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href="">Information Technology</Link>{' '}
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
            <div className={ProgStyles.progGrid}>
              <Accordion className={ProgStyles.courseaccordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={ProgStyles.acoordiantext}>
                    Certificates
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={ProgStyles.bachelors}>
                  <ul className={ProgStyles.degcourses}>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> Supervisory Management</Link>
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> Records Management</Link>
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> CISCO-CCNA</Link>{' '}
                    </li>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href=""> Web Development</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={ProgStyles.progGrid}>
              <Accordion className={ProgStyles.courseaccordion}>
                <AccordionSummary
                  className={ProgStyles.arrow}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography className={ProgStyles.acoordiantext}>
                    Diploma
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className={ProgStyles.degcourses}>
                    <li className={ProgStyles.degcoursesli}>
                      <Link href="">Supervisory Management</Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section id="meetthedean" className={DeanStyles.sectionmeetthedean}>
        <div className={ProgStyles.umargintopsmall}>
          <p className={ProgStyles.headingprimary}> Meet the Dean </p>
          <div className={DeanStyles.deanColGridCon}>
            <div className={DeanStyles.deanColGrid}>
              <Image className={DeanStyles.deanimg} src={deanimg} alt="" />
            </div>
            <div className={DeanStyles.deanColGrid}>
              <p className={DeanStyles.deanwords}>
                <q>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur quaerat possimus, at iure soluta sequi eaque
                  doloribus ex fugit aliquid quidem dolores non nisi optio
                  adipisci dolore numquam laudantium quis.
                </q>
              </p>
            </div>
            <div className={DeanStyles.deanColGrid}>
              <div className={DeanStyles.deancontact}>
                <p>
                  <span className={DeanStyles.standout}>
                    {' '}
                    Lalita Ramlal-Chirckoot{' '}
                  </span>{' '}
                  <br /> Dean, <br />
                  WorkForce Enhancement and Development <br />
                  <span className={DeanStyles.standout}>
                    ltchirkoot@costaatt.edu.tt
                  </span>{' '}
                  <br />
                  868-625-5030 ext 1111{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="schoolnews" className={ProgStyles.sectionschoolnews}>
        <p className={ProgStyles.headingprimary}> School News and Events </p>

        <div className={ProgStyles.threeColGridCon}>
          <div className={ProgStyles.threeColGrid}>
            <NewsCard />
          </div>
          <div className={ProgStyles.threeColGrid}>
            <NewsCard />
          </div>
          <div className={ProgStyles.threeColGrid}>
            <NewsCard />
          </div>
        </div>
      </section>
    </>
  );
};

// sbdt.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };

export default enviro;
