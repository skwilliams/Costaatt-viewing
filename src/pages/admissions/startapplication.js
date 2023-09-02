import HeaderNoImage from '@/components/PageComponents/HeaderNoImage'
import React from 'react'
import Link from 'next/link'
import AdmisStyles from "@/styles/Admissions.module.scss"
import Head from 'next/head'

const startapplication = () => {
  return (
    <>
    <Head>
        <title>Start Application</title>
    </Head>
    <HeaderNoImage caption="Start Application"/>

    <section className={AdmisStyles.sectionStartappList}> Application checklist 
     
          <p className={AdmisStyles.sectiontext}>
            Before you apply, ensure you have{" "}
          </p>
          <div className={AdmisStyles.checklist}>
            <Image className={AdmisStyles.imgtick} src={tick} />
            <span className={AdmisStyles.heading}> Programme Details and Requirements </span>
            <p className={AdmisStyles.text}>
              You have choosen your programme and this is your first time
              applying to COSTAATT!!
              <br />
              You need to complete the online application form
            </p>{" "}
            <p className={AdmisStyles.text}>
              <Link href="/programmes/allprogrammes"> List of all programmes &rarr;</Link>
            </p>
            <Divider />
            </div>
    </section>
    </>
   
  )
}

export default startapplication