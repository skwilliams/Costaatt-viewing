import Head from 'next/head';
import { getProgrammes } from '../../utilities';
import HeadImage from '@/components/PageComponents/HeadImage';
import ProgStyles from '../../../../styles/Programmes.module.scss';
import DepartCard from '@/components/PageComponents/DepartCard';
import DeanStyles from '../../../../styles/Dean.module.scss';
import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import Image from 'next/image';
import NewsRow from '@/components/PageComponents/NewsRow';
import Divider from '@mui/material/Divider';
import path from 'path';
import fs from 'fs/promises';
import SideNavOnlyLayout from '@/components/Layouts/SideNavOnly_NoTopOrDropdown';
import TopNavOnlyLayout from '@/components/Layouts/TopNavOnly_NoDropdown';
import index from './[deptName]';

//School of Business and Digital Technologies
const school = (props) => {
  const { foundSchool, news } = props;
  // retrieve all programmes in the school and restructure data for Accordion
  const schoolProgrammes = getProgrammes('school', foundSchool);

  console.log(schoolProgrammes);
  const lgrid = foundSchool.departments.length;
  let deptLayout = ProgStyles.threeColGridCon;
  let depcardLayout = ProgStyles.threeColGrid;
  if (lgrid === 2 || lgrid === 4) {
    deptLayout = ProgStyles.twoColGridCon;
    depcardLayout = ProgStyles.twoColGrid;
  }

  return (
    <>
      <Head>
        <title>{foundSchool.shortName}</title>
      </Head>
      <section id="mainheader" className={ProgStyles.sectionmainheader}>
        <HeadImage imagetext="" mainimage={foundSchool.image} />
      </section>
      <p className={ProgStyles.headingprimarysub}>
        COSTAATT/Programmes/{foundSchool.shortName}
      </p>
      {/* <SideNavOnlyLayout> */}
        {/* Section Overview */}
        <section id="overview" className={ProgStyles.sectionoverview}>
          <p className={ProgStyles.headingprimary}> Overview of School</p>
          <p className={ProgStyles.text}>{foundSchool.overview}</p>
        </section>{' '}
        <Divider light />
        {/* Department Cards Section */}
        <section id="depart" className={ProgStyles.sectiondepart}>
          <p className={ProgStyles.headingprimary}> Departments </p>
          <div className={deptLayout}>
            {foundSchool.departments.map((dept, index) => {
              return (
                <div className={depcardLayout} key={index}>
                  <DepartCard
                    image={dept.image}
                    departname={dept.name}
                    intro={dept.summary}
                    linkpage={`/programmes/schools/${foundSchool.nameStump}/${dept.dept_code}`}
                    shortname={dept.shortName}
                  />
                </div>
              );
            })}
          </div>
        </section>
        {/* Programme Accordion */}
        <section id="depcourses" className={ProgStyles.sectiondeptcourses}>
          <p className={ProgStyles.headingprimary}>Find your Degree</p>

          <div className={ProgStyles.progGridCon}>
            {/* Show accordion for only the type/level of programmes available.  return empty fragment otherwise*/}
            {Object.entries(schoolProgrammes).map((level) => {
              return (
                <>
                  {level[1].length > 0 ? (
                    <>
                      <div className={ProgStyles.progGrid} key={level[0]}>
                        <Accordion className={ProgStyles.courseaccordion}>
                          <AccordionSummary
                            key={level[0]}
                            expandIcon={<ExpandMoreIcon />}
                          >
                            <Typography className={ProgStyles.acoordiantext}>
                              {level[0]}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className={ProgStyles.degcourses}>
                              {level[1].map((levelProgs) => {
                                return (
                                  <li
                                    key={levelProgs.prog_code}
                                    className={ProgStyles.degcoursesli}
                                  >
                                    <Link href={levelProgs.prog_shortname}>
                                      {' '}
                                      {levelProgs.prog_name}{' '}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </div>
        </section>
        {/* Meet the Dean Section */}
        <section id="meetthedean" className={DeanStyles.sectionmeetthedean}>
          <div className={ProgStyles.umargintopsmall}>
            <p className={ProgStyles.headingprimary}> Meet the Dean </p>
            <div className={DeanStyles.deanColGridCon}>
              <div className={DeanStyles.deanColGrid}>
                <Image
                  className={`${DeanStyles.deanimg}`}
                  src={foundSchool.dean.image}
                  alt={foundSchool.dean.name}
                  width={300}
                  height={200}
                />
              </div>

              <div className={DeanStyles.deanColGrid}>
                <p className={DeanStyles.deanwords}>
                  <q> {foundSchool.dean.message}</q>
                </p>
              </div>
              <div className={DeanStyles.deanColGrid}>
                <div className={DeanStyles.deancontact}>
                  <p>
                    <span className={DeanStyles.standout}>
                      {foundSchool.dean.name}
                    </span>{' '}
                    <br /> Dean, <br />
                    {foundSchool.shortName} <br />
                    <span className={DeanStyles.standout}>
                      {foundSchool.dean.email}
                    </span>{' '}
                    <br />
                    {foundSchool.dean.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Divider dark="dark" />
        {/* School News Section */}
        <section id="schoolnews" className={ProgStyles.sectionschoolnews}>
          <NewsRow label="School" news={news.slice(0, 3)} />
        </section>
      {/* </SideNavOnlyLayout> */}
    </>
  );
};
// school.getLayout = function getLayout(page) {
//   return <TopNavOnlyLayout>{page}</TopNavOnlyLayout>;
// };
export default school;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { shortName: 'busIT' } },
      { params: { shortName: 'liberal' } },
      { params: { shortName: 'enviro' } },
      { params: { shortName: 'kengord' } },
      { params: { shortName: 'nursing' } },
      { params: { shortName: 'workF' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const schName = params.shortName;
  return {
    props: {
      foundSchool: await getData(
        'data',
        'schooldata.json',
        schName,
        'nameStump'
      ),
      news: await getData(
        'public/data',
        'newsdata.json',
        schName,
        'schoolDivision'
      ),
    },
  };
}

const getData = async function (pathName, fileName, schName, key) {
  const filepath = path.join(process.cwd(), pathName, fileName);
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  const finalData =
    key === 'nameStump'
      ? data.find((info) => info[key] === schName)
      : data.filter((info) => info[key] === schName);

  return finalData === undefined ? null : finalData;
};
