import React from 'react'
import Link from 'next/link'
import standardStyles from "@/styles/main.module.scss"
import costtaatlifeStyles from '@/styles/CostaattLife.module.scss'
import Head from 'next/head'
import HeadImage from '@/components/PageComponents/HeadImage'
import HeaderNoImage from '@/components/PageComponents/HeaderNoImage'

const index = () => {
  return (
    <>
      <Head>
        <title>Student Services</title>
      </Head>
      <HeaderNoImage caption="Student Services" />
      <section id="intro" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.newsHeading}><span> ABOUT</span> Student Services</h2>
        <p className={standardStyles.paragraph}> Student Services includes </p>
      </section>
      <section id="services" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.newsHeading}>Services<span> OFFERED</span></h2>
      </section>
      <section id="event" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.newsHeading}>Events</h2>
      </section>
      <section id="staff" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.newsHeading}>Staff</h2>
      </section>
      <section id="contact" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.newsHeading}>Contact</h2>
      </section>
    </>
  );
}

export default index