import React from 'react'
import Head from 'next/head'
import AdminStyles from '../../styles/Admissions.module.scss'

import HeadImage from '@/components/PageComponents/HeadImage';
import headImg from '../../../public/images/testerheight.png'
import img from '../../../public/images/schools/departments/EDUCsmall.png'
import img2 from '../../../images/Links/home7.png'
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

      <HeadImage imagetext="" mainimage={headImg} />

      <section id="intro" className={AdminStyles.sectionfeesintro}>
        <div className={AdminStyles.introtext}>
          Going to university is one of the biggest investments in your future
          you'll make. We are here to support your future success and make a
          education within reach. We are committed to transforming lives and
          making education accessible. We will work with you and provide avenues
          to help you launch the career of your dreams
        </div>
      </section>

      <section id="tution" className={AdminStyles.sectiontution}>
        <p>Tution Fees</p>
        <div className={AdminStyles.threeColGridCon}>
          <div className={AdminStyles.threeColGrid}>
            <SimpleCard text="Associate" img={img2} alt="associate" />
          </div>
          <div className={AdminStyles.threeColGrid}>
            <SimpleCard text="Bachelors" img={img2} alt="degree" />
          </div>
          <div className={AdminStyles.threeColGrid}>
            <SimpleCard text="International" img={img2} alt="international" />
          </div>
        </div>
        <div className={AdminStyles.threeColGridCon}>
          <div className={AdminStyles.threeColGrid}>
            <SimpleCard text="Fee Schedule" img={img2} alt="fees" />
          </div>
          <div className={AdminStyles.threeColGrid}>
            <SimpleCard text="School Fees" img={img2} alt="schoolfees" />
          </div>
          <div className={AdminStyles.threeColGrid}>
            <SimpleCard text="How to Pay" img={img2} alt="how to pay" />
          </div>
        </div>
      </section>

      <section
        id="finsupport"
        className={AdminStyles.sectionfinsupport}
      ></section>
      <section id="moneytips" className={AdminStyles.sectionmoneytips}>
        {" "}
      </section>
    </>
  );
}





export default feesandfunding