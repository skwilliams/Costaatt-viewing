import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import HeadImage from '@/components/PageComponents/HeadImage'
import standardStyles from "@/styles/main.module.scss"
import Link from 'next/link'
import awaitingbanner from "../../../public/images/awaitingBanner.png";
import projector from "../../../public/images/Services/projector.svg"
import wifi from "../../../public/images/Services/wifi.svg"

import parking from "../../../public/images/Services/parking.svg";

import speakers from "../../../public/images/Services/speakers.svg";
import techsupport from "../../../public/images/Services/techsupport.svg";
import whyback from "../../../public/images/services/whybackground.jpg";

import whyimage1 from "../../../public/images/Services/whyimage1.jpg";

import whyimage2 from "../../../public/images/Services/whyimage2.jpg";


const rentspace = () => {
    return (
      <>
        <div className={standardStyles.sectionRent}>
          <header className={standardStyles.rentHeader}>
            <Head>
              <title>Rental Spaces </title>
            </Head>{" "}
            {/* <HeadImage mainimage={awaitingbanner} /> */}
            <p
              className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
            >
              <Link href="/"> COSTAATT/ </Link>
              <Link href="/services">Services/</Link>
              <Link href="/services/rentspace">Rental Spaces</Link>
            </p>
          </header>
          <div id="intro" className={standardStyles.rentIntro}>
            <p className={standardStyles.paragraph}>
              COSTAATT offers modern and attractive locations to ensure that
              your next corporate event is unforgettable. Our facilities in Port
              of Spain and Chaguanas can accommodate private training sessions,
              corporate events, conferences, book launches, networking events,
              industry panels and much more.
            </p>
          </div>

          <section id="package" className={standardStyles.rentPackage}>
            <div className={standardStyles.package}>
              <Image
                src={projector}
                alt="Icon"
                className={standardStyles.package__icon}
                width="100"
                height="100"
              />
              <h3 className={standardStyles.package__text}>
                {" "}
                Projector Screen or Smartboard
              </h3>
            </div>
            <div className={standardStyles.package}>
              <Image
                src={wifi}
                alt="Icon"
                className={standardStyles.package__icon}
                width="100"
                height="100"
              />
              <h3 className={standardStyles.package__text}> Hi Speed WiFI</h3>
            </div>
            <div className={standardStyles.package}>
              <Image
                src={parking}
                alt="Icon"
                className={standardStyles.package__icon}
                width="100"
                height="100"
              />
              <h3 className={standardStyles.package__text}> Secured Parking</h3>
            </div>
            <div className={standardStyles.package}>
              <Image
                src={speakers}
                alt="Icon"
                className={standardStyles.package__icon}
                width="100"
                height="100"
              />
              <h3 className={standardStyles.package__text}> Speakers</h3>
            </div>

            <div className={standardStyles.package}>
              <Image
                src={techsupport}
                alt="Icon"
                className={standardStyles.feature__icon}
                width="100"
                height="100"
              />
              <h3 className={standardStyles.package__text}>
                {" "}
                Technical Support{" "}
              </h3>
            </div>
          </section>

          <div className={standardStyles.rentWhy__pictures}>
            <Image
              src={whyback}
              alt="Icon"
            //   className={standardStyles.rentWhy__pictures}
              width={3936}
              height={2624}
            // fill
             
            />
            {/* <Image
              src={whyimage1}
              alt="Icon"
              className={standardStyles.rentWhy__img1}
              width="250"
              height="250"
            />
            <Image
              src={whyimage2}
              alt="Icon"
              className={standardStyles.rentWhy__img2}
              width="293"
              height="322"
            /> */}
          </div>
          <div className={standardStyles.rentWhy__content}>
            <h2
              className={`${standardStyles.heading_2} ${standardStyles.heading_2_dark} ${standardStyles.mb_md}`}
            >
              &ldquo;Why Choose COSTAATT for your next Event&ldquo;
            </h2>

            <div className={standardStyles.bullet}>
              <ul>
                <li> Convenient locations</li>
                <li>State-of-the-art facilities</li>
                <li>Flexible pricing options</li>
                <li>Catering available on demand</li>
                <li>PC and laptop day rentals avaliable</li>
              </ul>
            </div>
          </div>

          <section id="spaces" className={standardStyles.rentSpaces}>
            Spaces
          </section>
          <div id="contact" className={standardStyles.rentContact}>
            <div className={standardStyles.paragraph}>
              {/* Contact us today to reserve these or other available spaces at the
            COSTAATT campuses in Port of Spain, Chaguanas, San Fernando and
            Tobago. Haniffa Ali Parris fschelpdesk@costaatt.edu.tt 868-625-5030
            EXT 5363 Online bookings: COSTAATT's Rental Spaces */}
            </div>
            <div className={standardStyles.paragraph}>Download brochures</div>
          </div>
        </div>{" "}
        {/* end of container */}
      </>
    );
}

            export default rentspace