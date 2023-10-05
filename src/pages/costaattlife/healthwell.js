  import React from 'react'
  import Head from "next/head";
  import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
  import Link from "next/link"
  import Image from "next/image"
  import ContactAdmissions from '@/components/PageComponents/ContactAdmissions';
  import standardStyles from '@/styles/main.module.scss'
import { StarSharp } from '@mui/icons-material';
  
  const healthwell = () => {
    return (
      <>
        <Head>
          <title>Health and Wellness</title>
        </Head>
        <HeaderNoImage imagetext="Student Clubs and Organizations" />
        <p
          className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
        >
          <Link href="/"> COSTAATT/ </Link>
          <Link href="/costaattlife"></Link>
          <Link href="/costaattlife/healthwell">Health and Wellness</Link>
        </p>

        <section id="healthover" className={standardStyles.sectionNoSidenav}>
          <div className={standardStyles.headingTertiary}>
            <p className={standardStyles.paragraph}>
              The College recognises that student success is premised not only
              on academic ability and application but on the positive social and
              emotional adjustment of the individual. The Health and Counselling
              Services Department (HCSD) is responsible for the provision of
              basic psycho-social counselling, promotion of healthy lifestyles,
              sick bay facilities and services for the differently-abled.
            </p>
            <>
              <p className={standardStyles.headingPrimarysub}>
                {" "}
                HEALTH AND WELLNESS PROMOTION{" "}
              </p>
              <p>
                During the academic year, health and wellness promotional
                activities can be offered at each campus site. These are
                facilitated by the Ministry of Health and other trained
                personnel who specialise in their respective areas:
              </p>
              <div className={standardStyles.bullets}>
                <ul className={standardStyles.list}>
                  <li className={standardStyles.items}>
                    {" "}
                    Healthy Lifestyles (E.g. HIV/AIDS and Substance Abuse){" "}
                  </li>
                  <li className={standardStyles.items}>
                    {" "}
                    Primary Health Care (E.g. Nutrition, Chronic
                    Non-communicable disease assessment-BMI)
                  </li>
                  <li className={standardStyles.items}>
                    {" "}
                    Emotional Health (E.g. Stress, Time and Anger Management and
                    Managing Depression)
                  </li>
                </ul>
              </div>
            </>
          </div>
        </section>
        <section
          id="counsel"
          className={standardStyles.sectionNoSideNav}
        ></section>
        <section
          id="disability"
          className={standardStyles.sectionNoSideNav}
        ></section>
        <section
          id="sickbay"
          className={standardStyles.sectionNoSideNav}
        ></section>
      </>
    );
  }
  
  export default healthwell
  
  
    