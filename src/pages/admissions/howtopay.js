import React from 'react'
import Head from 'next/head'
import HeaderNoImage from '@/components/PageComponents/HeaderNoImage'
import AdminStyles from '../../styles/Admissions.module.scss'


const howtopay = () => {
  return (
    <>
      <Head>
        <title> How to Pay </title>
      </Head>
      <HeaderNoImage caption="How to Pay " />
      <section id="intro" className={AdminStyles.sectionIntro}>
        <p className={AdminStyles.text}>
          {" "}
          COSTAATT continues to strive to make education accessible moreover we
          have varying options for you to pay your fees
        </p>
      </section>
    </>
  );
}

export default howtopay