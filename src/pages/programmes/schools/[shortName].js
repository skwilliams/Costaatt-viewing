import Head from "next/head";
import HeadImage from "@/components/PageComponents/HeadImage";
import ProgStyles from "../../../styles/Programmes.module.scss";
import DepartCard from "@/components/PageComponents/DepartCard";
import DeanStyles from "../../../styles/Dean.module.scss";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
import NewsRow from "@/components/PageComponents/NewsRow";
import Divider from "@mui/material/Divider";
import path from "path";
import fs from "fs/promises";

//School of Business and Digital Technologies
const school = (props) => {
  const { foundSchool, news } = props;
  // console.log(news);
  const lgrid = foundSchool.departments.length;

  let deptLayout = ProgStyles.threeColGridCon;
  let depcardLayout = ProgStyles.threeColGrid;
  if (lgrid === 2 || lgrid === 4) {
    deptLayout = ProgStyles.progGridContwo;
    depcardLayout = ProgStyles.progGridtwo;
  }

  return (
    <>
      <Head>
        <title>{foundSchool.shortName || "School"}</title>
      </Head>
      <HeadImage imagetext="" mainimage={foundSchool.image} />
      <p className={ProgStyles.headingprimarysub}>
        COSTAATT/Programmes/{foundSchool.shortName}
      </p>
      {/* Section Overview */}
      <section id="overview" className={ProgStyles.sectionoverview}>
        <p className={ProgStyles.headingprimary}> Overview of School</p>
        <p className={ProgStyles.text}>{foundSchool.overview}</p>
      </section>{" "}
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
                  linkpage={`/programmes/schools/${foundSchool.nameStump}/${dept.shortName}`}
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
                    <Link href=""> Human Resource Management</Link>{" "}
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
                    <Link href=""> CISCO-CCNA</Link>{" "}
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
                  </span>{" "}
                  <br /> Dean, <br />
                  {foundSchool.shortName} <br />
                  <span className={DeanStyles.standout}>
                    {foundSchool.dean.email}
                  </span>{" "}
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
        <p className={ProgStyles.headingprimary}>
          {foundSchool.shortName} News
        </p>
        <NewsRow news={news.slice(0, 3)} />
        <div className={ProgStyles.goto}>
          <Link className={ProgStyles.goto} href="#">
            {" "}
            View More..
          </Link>
        </div>
      </section>
    </>
  );
};

export default school;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { shortName: "busIT" } },
      { params: { shortName: "liberal" } },
      { params: { shortName: "enviro" } },
      { params: { shortName: "kengord" } },
      { params: { shortName: "nursing" } },
      { params: { shortName: "workF" } },
    ],
    fallback: false,
  };
}

// export async function getStaticProps(context) {
//   const { params } = context;
//   const schName = params.shortName;
//   // const router = useRouter();
//   // console.log(`the param is ${router.query.param}`);

//   const filepath = path.join(process.cwd(), "data", "schooldata.js");
//   let data = await fs.readFile(filepath, "utf8");
//   // data = JSON.parse(data);
//   console.log(data);
//   const sch = data.find((school) => school.nameStump === schName);
//   console.log(sch);
//   return {
//     props: {
//       foundSchool: sch,
//     },
//   };
// }

export async function getStaticProps(context) {
  const { params } = context;
  const schName = params.shortName;
  return {
    props: {
      foundSchool: await getData(
        "data",
        "schooldata.json",
        schName,
        "nameStump"
      ),
      news: await getData(
        "public/data",
        "newsdata.json",
        schName,
        "schoolDivision"
      ),
    },
  };
}

const getData = async function (pathName, fileName, schName, key) {
  const filepath = path.join(process.cwd(), pathName, fileName);
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  const finalData =
    key === "nameStump"
      ? data.find((info) => info[key] === schName)
      : data.filter((info) => info[key] === schName);

  return finalData === undefined ? null : finalData;
};
