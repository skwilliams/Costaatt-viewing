import React from 'react'
import Head from 'next/head'
import HeadImage from '../../../../../components/PageComponents/HeadImage'
import headImg from "../../../../../../images/Programmes/tester2.jpg"
import Layout from "../../../../../components/PageWithSideNavComponents/Layout";
import CourseStyle from "../../../../../styles/Course.module.scss"
import ProgStyles from '../../../../../styles/Programmes.module.scss'
const bscLIS = () => {
  return (
    <>
      <Head>
        <title>IST</title>
      </Head>
      <HeadImage
        imagetext="BSC Library & Information Science"
        mainimage={headImg}
      />
      <section id="courseoverview" className={CourseStyle.sectionOverview}>
        <p className={ProgStyles.headingprimaryleft}> Description</p>
     
      </section>
      <section id="careers" className={CourseStyle.sectionCareers}>
        <p className={ProgStyles.headingprimaryleft}> Careers</p>
      </section>
      <section id="gradPortfolio" className={CourseStyle.sectionPortfolio}>
        <p className={ProgStyles.headingprimaryleft}> Graduates Portfolio</p>
      </section>
      <section id="gradSpeak" className={CourseStyle.sectionGradSpeak}>
        <p className={ProgStyles.headingprimaryleft}> Graduates Speak</p>
      </section>
      <section id="curriculum" className={CourseStyle.sectionCurriculum}>
        <p className={ProgStyles.headingprimaryleft}> Curriculum</p>
      </section>
      <section id="feesfinancial" className={CourseStyle.sectionFinancial}>
        <p className={ProgStyles.headingprimaryleft}> Fees and Financial Aid</p>
      </section>
    </>
  ); 
 
};
bscLIS.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default bscLIS