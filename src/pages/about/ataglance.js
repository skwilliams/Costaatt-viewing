import React from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";


import AboutStyles from "@/styles/About.module.scss";


import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";


import Image from "next/image";


import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";

import home2 from "../../../public/images/about/dummyImg1.jpg";
import home3 from "../../../public/images/about/home3.png";
import home5 from "../../../public/images/about/home5.png";
import home6 from "../../../public/images/about/home6.png";





const Ataglance = () => {


  // const [setHasWindow] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setHasWindow(true);
  //   }
  // }, [setHasWindow]);

 async function onClose() {
   console.log("Modal has closed");
 }

 async function onOk() {
   console.log("Ok was clicked");
 }
 
  return (
    <>
      <Head>
        <title>About |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="Profile at a Glance" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about"></Link>
        <Link href="/about">About</Link>
      </p>

      <section id="glance" className={standardStyles.sectionNoSidenavFirst}>
        {/* <div className={AboutStyles.aboutbackColor}> */}
        <h2
          className={`${standardStyles.newsHeading} ${standardStyles.centertext}`}
        >
          <span> The Premier</span> Undergraduate College{" "}
        </h2>

        {/* <Dialog title="Example Modal" onClose={onClose} onOk={onOk}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            eligendi odio ipsa nostrum dolores voluptas architecto tempore nulla
            voluptatibus vel, placeat explicabo exercitationem id officia
            laborum doloremque blanditiis earum accusamus.
          </p>
        </Dialog> */}
        <p
          className={`${standardStyles.paragraph} ${AboutStyles.text2columns}`}
        >
          {" "}
          COSTAATT was established in October 2000 by an Act of Parliament (ACT
          No. 77 of 2000) with the purpose of contributing to national and
          regional development , social equity and the development of civil
          society by providing broad-based access to socially responsive and
          innovative educational programmes and by engaging in scholarly work
          and applied research. <br />
          COSTAATT is an accredited, multi-campus, undergraduate college with
          six academic schools. We have proudly graduated over 20,000 students
          in over 100 programmes ranging from bachelor's and associate degrees
          to diplomas and certificates.
          <br /> Approximately 66% of our programmes offering focus on applied
          and skills-based learning in contemporary disciplines. <br />
          The College has recently established an Upskilling Academy to boost
          entrepreneurial growth through specialized training, business
          incubation and acceleration services. The Tech Hub is also a new
          service area catering to prototyping, product commercialization,
          digital content creation and business coaching.
          <br /> Underpinning the College's commitment to excellence, innovation
          and global relevance are three key strategic imperatives, which shape
          its identity, propel growth and impact student lives, namely, Digital
          Transformation, Sustainable Futures and Global Pathways.
        </p>
        {/* </div> */}
      </section>
      <section id="vision" className={AboutStyles.aboutbackColor}>
        <div className={standardStyles.sectionNoSidenav}>
          {" "}
          <h2
            className={` ${standardStyles.newsHeading} ${standardStyles.newsHeadingWhite} ${standardStyles.centertext}`}
          >
            {" "}
            <span> Mission</span> and VISION{" "}
          </h2>
          <div className={standardStyles.twoGridCon}>
            <div className={standardStyles.twoGridCol}>
              <h3 className={standardStyles.headingSecondary}>Vision</h3>
              <p className={standardStyles.paragraph}>
                To be a student-cantered, dynamic and innovative, world-class
                multi-campus college, promoting excellence in teaching and
                learning, serving diverse communities and producing lifelong
                learners who can compete globally.
              </p>
            </div>
            <div className={standardStyles.twoGridCol}>
              <h3 className={standardStyles.headingSecondary}>Mission</h3>
              <p className={standardStyles.paragraph}>
                To be the premier educational institution in providing
                high-quality, affordable and accessible educational programmes
                serving the needs of business, industry and the diverse campus
                communities and facilitating the personal and professional
                development of its students, faculty and staff.
              </p>
            </div>
          </div>
          <div className={AboutStyles.gallery}>
            <>
              <figure className={AboutStyles.gallery__item}>
                <Image
                  src={home6}
                  width={300}
                  height={300}
                  alt="Photo of  Home6"
                  className={AboutStyles.gallery__photo}
                />
              </figure>
              <figure className={AboutStyles.gallery__item}>
                <Image
                  src={home3}
                  width={300}
                  height={300}
                  alt="Photo of hotel 2"
                  className={AboutStyles.gallery__photo}
                />
              </figure>
              <figure className={AboutStyles.gallery__item}>
                <Image
                  src={home5}
                  width={300}
                  height={300}
                  alt="Photo of hotel 3"
                  className={AboutStyles.gallery__photo}
                />
              </figure>
              <figure className={AboutStyles.gallery__item}>
                <Image
                  src={home2}
                  width={300}
                  height={300}
                  alt="Photo of hotel 3"
                  className={AboutStyles.gallery__photo}
                />
              </figure>
            </>
          </div>
          <div className={standardStyles.threeColGridCon1}>
            <div className={standardStyles.threeColGrid}>
              <div className={standardStyles.featurebox}>
                <h3 className={standardStyles.headingTertiary}>
                  Digital
                  <br /> Transformation{" "}
                </h3>
                <p
                  className={`${standardStyles.featurebox__text} ${standardStyles.leftalign}`}
                >
                  Adapting to the digital era is imperative to staying relevant
                  and competitive. COSTAATT's commitment to cutting-edge
                  technology enhances learning experiences, fosters innovative
                  teaching methods, and prepares our students for tech-driven
                  careers. Through this transformation, we empower learners to
                  navigate the digital landscape confidently and contribute to a
                  tech-savvy workforce.
                </p>
              </div>
            </div>
            <div className={standardStyles.threeColGrid}>
              <div className={standardStyles.featurebox}>
                <h3 className={standardStyles.headingTertiary}>
                  Sustainable <br /> Futures
                </h3>
                <p
                  className={`${standardStyles.featurebox__text} ${standardStyles.leftalign}`}
                >
                  Embracing sustainable practices in vital for COSTAATT's
                  enduring impact. By integrating eco-friendly initiatives into
                  curricula and operations, we cultivate environmentally
                  conscious graduates. This imperative ensures resource
                  efficiency, aligns with the United Nations Sustainable
                  Development Goals (SDGs), and equips our students to drive
                  positive change, securing a greener, more resilient future
                </p>
              </div>{" "}
            </div>
            <div className={standardStyles.threeColGrid}>
              <div className={standardStyles.featurebox}>
                <h3 className={standardStyles.headingTertiary}>
                  Global
                  <br /> Pathways
                </h3>
                <p
                  className={`${standardStyles.featurebox__text} ${standardStyles.leftalign}`}
                >
                  Enabling diverse global opportunities enriches the educational
                  journey for COSTAATT students. By continually fostering
                  international collaborations, cultural exchanges, and mobility
                  programmes, at COSTAATT, we equip students with broader
                  perspective and vital cross-cultural skills. This imperative
                  opens doors to varied career pathways and exclusively equips
                  our graduates to thrive in an interconnected, multicultural
                  world.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>{" "}
        {/*end of sidenav} */}
      </section>
      <section id="schools" className={`${standardStyles.sectionbackColor}`}>
        <h2
          className={`${AboutStyles.schoolHeading} ${standardStyles.centertext}`}
        >
          {" "}
          ACADEMIC <span> Schools</span>
        </h2>
        <p
          className={`${standardStyles.headingTertiary} ${standardStyles.centertext}`}
        >
          {" "}
          Bachelors Degrees | Associate Degrees | Diplomas | Certificates{" "}
        </p>
        <div className={AboutStyles.schoolflex}>
          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolsliberal}`}
            >
              {/* <Link href="/programmes/schools/liberal">
                School of Liberal Arts, Education and Digital Humanities
              </Link> */}
            </div>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolskengord}`}
            >
              {/* <Link href="/programmes/schools/kengord">
                Ken Gordon School of Communication, Creative and Digital Media{" "}
              </Link> */}
            </div>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolsnursing}`}
            >
              {/* <Link href="/programmes/schools/nursing">
                School of Nursing, Health and Medical Technologies{" "}
              </Link> */}
            </div>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolsbusIT}`}
            >
              {/* <Link href="/programmes/schools/busIT">
                School of Business and Digital Technologies{" "}
              </Link> */}
            </div>
          </div>

          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolsenviro}`}
            >
              {/* <Link href="/programmes/schools/enviro">
                School of Environment, Circular Economy and Sustainability{" "}
              </Link> */}
            </div>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <div
              className={`${AboutStyles.schools} ${AboutStyles.schoolsworkF}`}
            >
              {/* <Link href="/programmes/schools/workF">
                School of Workforce, Enhancement and Development{" "}
              </Link> */}
            </div>
          </div>
        </div>

        <h2
          className={`${AboutStyles.schoolHeading} ${standardStyles.centertext}`}
        >
          {" "}
          UPSKILLING <span> Academy</span>
        </h2>
        <p
          className={`${standardStyles.headingTertiary} ${standardStyles.centertext}`}
        >
          {" "}
          Vocational Training | Incubation | Acceleration | Business Coaching |
          Mentorship | Start-ups Financing
        </p>
        <div className={AboutStyles.schoolflex}>
          <div className={AboutStyles.schoolflex__item}>
            <p
              className={`${AboutStyles.upskill} ${AboutStyles.schoolsliberal}`}
            >
              Tourism, Hospitality and Destination Management
            </p>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <p
              className={`${AboutStyles.upskill} ${AboutStyles.schoolskengord}`}
            >
              Creative Industries and New Media
            </p>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <p
              className={`${AboutStyles.upskill} ${AboutStyles.schoolsnursing}`}
            >
              Health and Med Tech{" "}
            </p>
          </div>

          <div className={AboutStyles.schoolflex__item}>
            <p className={`${AboutStyles.upskill} ${AboutStyles.schoolsbusIT}`}>
              Digital and Cyber Entrepreneurship
            </p>
          </div>

          <div className={AboutStyles.schoolflex__item}>
            <p
              className={`${AboutStyles.upskill} ${AboutStyles.schoolsenviro}`}
            >
              Sustainability and Climate Change
            </p>
          </div>
          <div className={AboutStyles.schoolflex__item}>
            <p className={`${AboutStyles.upskill} ${AboutStyles.schoolsworkF}`}>
              Food and Agri Entrepreneurship
            </p>
          </div>
        </div>
        {/* close row */}
      </section>
    </>
  );
};

Ataglance.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};



export default Ataglance