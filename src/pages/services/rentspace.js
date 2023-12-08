import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import HeadImage from '@/components/PageComponents/HeadImage'
import standardStyles from "@/styles/main.module.scss"
import Link from 'next/link'
import awaitingbanner from "../../../public/images/awaitingBanner.png";
import projector from "../../../public/images/Services/projector.svg"

const rentspace = () => {
  return (
    <>
      <div className={standardStyles.sectionRent}>
        <header className={standardStyles.rentHeader}>
          <Head>
            <title>Rental Spaces </title>
          </Head>
          <HeadImage mainimage={awaitingbanner} />

          <p
            className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
          >
            <Link href="/"> COSTAATT/ </Link>
            <Link href="/services">Services/</Link>
            <Link href="/services/rentspace">Rental Spaces</Link>
          </p>
        </header>
        <div id="intro" className={standardStyles.rentIntro}>
          {/* <p className={standardStyles.paragraph}>
            COSTAATT offers modern and attractive locations to ensure that your
            next corporate event is unforgettable. Our facilities in Port of
            Spain and Chaguanas can accommodate private training sessions,
            corporate events, conferences, book launches, networking events,
            industry panels and much more.
          </p> */}
          Intro
        </div>

        <section id="package" className={standardStyles.rentPackage}
          
        >
            Package
          <div className={standardStyles.features}>

            <Image
              src={projector}
              alt="Icon"
              className={standardStyles.feature__icon}
              width="200"
              height="200"
            />

            <h4 className="heading-4 heading-4--dark">
              World's best luxury homes
            </h4>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
        </section>
    {/* <section id="whyrent" className={standardStyles.rentWhy}> */}
        <div className={standardStyles.rentWhy__pictures}> Pictures </div>
        <div className={standardStyles.rentWhy__content}>Content</div>
    {/* </section> */}
        
        <section id="spaces" className={standardStyles.rentSpaces}>
            Spaces
        </section>
        <div id ="contact" className={standardStyles.rentContact}>
          <div className={standardStyles.paragraph}>
            {/* Contact us today to reserve these or other available spaces at the
            COSTAATT campuses in Port of Spain, Chaguanas, San Fernando and
            Tobago. Haniffa Ali Parris fschelpdesk@costaatt.edu.tt 868-625-5030
            EXT 5363 Online bookings: COSTAATT's Rental Spaces */}
          </div>
          <div className={standardStyles.paragraph}>
            Download brochures
          </div>


        </div>
      </div>
    </>
  );
}

export default rentspace