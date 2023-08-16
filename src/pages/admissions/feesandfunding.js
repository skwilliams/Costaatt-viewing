import React from 'react'
import Head from 'next/head'
import AdminStyles from '../../styles/Admissions.module.scss'

import HeadImage from '@/components/PageComponents/HeadImage';
import headImg from '../../../public/images/admissions/feesandfunding.jpg'
import SchoolTile from '@/components/HomeComponents/SchoolTile';
import Link from "next/link"
import HomeStyles from '../../styles/Home.module.scss'
import SimpleCard from '../../components/PageComponents/SimpleCard'

import {

  TILES_INFO,
  
} from "../../components/HomeComponents/homeLinks"








const feesandfunding = () => {
  return (
    <>
      <Head>
        <title>Fees and Funding </title>
      </Head>

      <HeadImage imagetext="Fees and Funding" mainimage={headImg} />

      <section id="intro" className={AdminStyles.sectionfeesintro}>
        <div className={AdminStyles.introtext}>
          Going to university is one of the biggest investments in your future
          you'll make. We are here to support your future success and make
          education reachable. We are committed to transforming lives and making
          education accessible. We will work with you and provide avenues to
          help you launch the career of your dreams
        </div>
      </section>

      <section id="tuition" className={AdminStyles.sectiontuition}>
        <p className={AdminStyles.sectiontext}>All about Fees</p>

        <div className={AdminStyles.fourColGridCon}>
          <div className={AdminStyles.fourColGrid}>
            <SimpleCard
              text=" Fees By Programmes "
              linkpage="/admissions/feesbyschool"
            />
          </div>
          <div className={AdminStyles.fourColGrid}>
            <SimpleCard
              text="Short Courses Fees"
              linkpage="/admissions/feesbyshortcourses"
            />
          </div>
          <div className={AdminStyles.fourColGrid}>
            <SimpleCard
              text="Institutional Fees"
              linkpage="/admissions/institutionalfees"
            />
          </div>
          <div className={AdminStyles.fourColGrid}>
            <SimpleCard text="How to Pay" linkpage="/admissions/howtopay" />
          </div>
        </div>
      </section>

      <section id="finsupport" className={AdminStyles.sectionfinsupport}>
        <p className={AdminStyles.sectiontext}>Financial Support</p>

        <div className={AdminStyles.fourColGridCon}>
          <div className={AdminStyles.fourColGrid}>GATE</div>
          <div className={AdminStyles.fourGridCol}> HELP Loan</div>

          <div className={AdminStyles.fourGridCol}> Payment Plans</div>
          <div className={AdminStyles.fourGridCol}>
            {" "}
            Scholarships and Bursaries
          </div>
        </div>
      </section>
      <section id="moneytips" className={AdminStyles.sectionmoneytips}>
        <p className={AdminStyles.sectiontext}>Mon</p>{" "}
      </section>
    </>
  );
}





export default feesandfunding