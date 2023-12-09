import React from 'react'
import Image from "next/image";

import Head from 'next/head'
import HeadImage from '@/components/PageComponents/HeadImage'
import standardStyles from "@/styles/main.module.scss"
import Link from 'next/link'
import awaitingbanner from "../../../public/images/awaitingBanner.png";


// Icons for standard features 
import projector from "../../../public/images/services/projector.svg"
import wifi from "../../../public/images/services/wifi.svg"
import parking from "../../../public/images/services/parking.svg";
import rooftop1 from "../../../public/images/services/rooftop1.jpg";
import speakers from "../../../public/images/services/speakers.svg";
import techsupport from "../../../public/images/services/techsupport.svg";

// Photos for why costaatt 
import whyback from "../../../public/images/services/whybackground.jpg";
import parkingFeature from "../../../public/images/services/parkingFeature.jpg";

import whyimage1 from "../../../public/images/services/whyimage1.jpg";

import whyimage2 from "../../../public/images/services/whyimage2.jpg";

// svg's for card
import price from "../../../public/images/services/price.svg";
import location from "../../../public/images/services/location.svg";
import layout from "../../../public/images/services/layout.svg";
import size from "../../../public/images/services/size.svg";


const rentspace = () => {
    return (
      <>
        <div className={standardStyles.sectionRent}>
          <header className={standardStyles.rentHeader}>
            <Head>
              <title>Rental Spaces </title>
            </Head>{" "}
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

          {/* <section id="why" className={standardStyles.rentWhy}> */}
          {/* <div
            style={{ maxWidth: "100%", height: "400px", position: "relative0" }}
          > */}
          <div id="why" className={standardStyles.rentWhy__pictures}>
            <Image
              src={rooftop1}
              alt="Space for rent"
              className={standardStyles.rentWhy__img1}
              sizes="100vw"
              fill={true}
            />
            <Image
              src={parkingFeature}
              alt="Space for rent"
              className={standardStyles.rentWhy__img2}
              sizes="100vw"
              fill={true}
            />
          </div>
          {/* </div> */}
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
          {/* </section> */}

          <section id="spaces" className={standardStyles.rentSpaces}>
            <div className="home">
              <img src="img/house-2.jpeg" alt="House 2" className="home__img" />
              <svg className="home__like">
                <use href="img/sprite.svg#icon-heart-full" />
              </svg>
              <h5 className="home__name">Modern Glass Villa</h5>
              <div className="home__location">
                <svg>
                  <use href="img/sprite.svg#icon-map-pin" />
                </svg>
                <p>Canada</p>
              </div>
              <div className="home__rooms">
                <svg>
                  <use href="img/sprite.svg#icon-profile-male" />
                </svg>
                <p>6 rooms</p>
              </div>
              <div className="home__area">
                <svg>
                  <use href="img/sprite.svg#icon-expand" />
                </svg>
                <p>
                  450 m<sup>2</sup>
                </p>
              </div>
              <div className="home__price">
                <svg>
                  <use href="img/sprite.svg#icon-key" />
                </svg>
                <p>$2,750,000</p>
              </div>
              <button className="btn home__btn">Contact realtor</button>
            </div>
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