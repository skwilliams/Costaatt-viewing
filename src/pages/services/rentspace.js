import React from "react";
import Image from "next/image";

import Head from "next/head";
import HeadImage from "@/components/PageComponents/HeadImage";
import standardStyles from "@/styles/main.module.scss";
import costlifeStyles from "@/styles/CostaattLife.module.scss";
import Link from "next/link";
import awaitingbanner from "../../../public/images/awaitingBanner.png";

// Icons for standard features
import projector from "../../../public/images/services/projector.svg";
import wifi from "../../../public/images/services/wifi.svg";
import parking from "../../../public/images/services/parking.svg";
import rooftop1 from "../../../public/images/services/rooftop1.jpg";
import chagoutside from "../../../public/images/services/ChaguanasOutside.jpeg";

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

import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import hours from "../../../public/images/admissions/businesshours.svg";
import downloadicon from "../../../public/images/admissions/downloadnoteicon.svg";
import bookOnline from "../../../public/images/services/bookOnline.svg";


//images for cards
import auditorium from "../../../public/images/services/Auditorium.jpg";

import boardRoomChag from "../../../public/images/services/BoardRoom-Pos.jpg";
import rooftopTerrace from "../../../public/images/services/RoofTop-Terrace-1.jpg";
import trainingRoom93 from "../../../public/images/services/Training-Room-93.jpg";
import trainingRoom127 from "../../../public/images/services/Training-Room-127.jpg";
import trainingRoom128 from "../../../public/images/services/Training-Room-128.jpg";

const rentspace = () => {
  return (
    <>
      <div className={standardStyles.sectionRent}>
        <header className={standardStyles.rentHeader}>
          <Head>
            <title>Rental Spaces </title>
          </Head>{" "}
          <HeadImage mainimage={awaitingbanner} />
          <div
          // className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
          >
            <Link href="/"> COSTAATT/ </Link>
            <Link href="/services">Services/</Link>
            <Link href="/services/rentspace">Rental Spaces</Link>
          </div>
        </header>
        <div id="intro" className={standardStyles.rentIntro}>
          <p className={standardStyles.paragraph}>
            COSTAATT offers modern and attractive locations to ensure that your
            next corporate event is unforgettable. Our facilities in Port of
            Spain and Chaguanas can accommodate private training sessions,
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

        <div id="why" className={standardStyles.rentWhy__pictures}>
          {/* <Image
            src={chagoutside}
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
          <div className={standardStyles.space}>
            <Image
              src={auditorium}
              alt="Auditiorian"
              sizes="100vw"
              height={200}
              className={standardStyles.space__img}
            />

            <h5 className={standardStyles.space__name}>Auditiorium</h5>
            <div className={standardStyles.space__location}>
              <Image
                src={location}
                alt="Sppace Size icon"
                className={standardStyles.space__svg}
              />
              <p>Chaguanas</p>
            </div>
            <div className={standardStyles.space__layout}>
              <Image
                src={layout}
                alt="Space Size icon"
                className={standardStyles.space__svg}
              />
              <p>Theatre </p>
            </div>
            <div className={standardStyles.space__size}>
              {/* <svg></svg> */}
              <Image
                src={size}
                alt="Space Size icon"
                className={standardStyles.space__svg}
                sizes="100vw"
                //   fill={true}
              />
              <p>99 persons</p>
            </div>
            <div className={standardStyles.space__price}>
              <Image
                src={price}
                alt=" Price icon"
                className={standardStyles.space__svg}
                sizes="100vw"
                //   fill={true}
              />

              <p>TT $4,000 </p>
            </div>

            <Link href="#contact" className={standardStyles.space__btn}>
              Contact Us
            </Link>
          </div>
          <div className={standardStyles.space}>
            <Image
              src={boardRoomChag}
              alt="BoardRoom"
              sizes="100vw"
              height={200}
              className={standardStyles.space__img}
            />

            <h5 className={standardStyles.space__name}>Board Room</h5>
            <div className={standardStyles.space__location}>
              <Image
                src={location}
                alt="Location icon"
                className={standardStyles.space__svg}
              />
              <p>Chaguanas</p>
            </div>
            <div className={standardStyles.space__layout}>
              <Image
                src={layout}
                alt="Layout icon"
                className={standardStyles.space__svg}
              />
              <p>Conference</p>
            </div>
            <div className={standardStyles.space__size}>
              <Image
                src={size}
                alt="Capacity icon"
                className={standardStyles.space__svg}
                sizes="100vw"
              />
              <p>20 persons</p>
            </div>
            <div className={standardStyles.space__price}>
              <Image
                src={price}
                alt=" Price icon"
                className={standardStyles.space__svg}
                sizes="100vw"
              />

              <p>TT $3500</p>
            </div>
            <Link href="#contact" className={standardStyles.space__btn}>
              Contact Us
            </Link>
          </div>
          <div className={standardStyles.space}>
            <Image
              src={rooftopTerrace}
              alt="Rooftop"
              sizes="100vw"
              height={200}
              className={standardStyles.space__img}
            />

            <h5 className={standardStyles.space__name}>Roof Top Terrace</h5>
            <div className={standardStyles.space__location}>
              <Image
                src={location}
                alt="Sppace Size icon"
                className={standardStyles.space__svg}
              />
              <p>Chaguanas</p>
            </div>
            <div className={standardStyles.space__layout}>
              <Image
                src={layout}
                alt="Layout icon"
                className={standardStyles.space__svg}
              />
              <p>Cocktail</p>
            </div>
            <div className={standardStyles.space__size}>
              <Image
                src={size}
                alt="Sppace Size icon"
                className={standardStyles.space__svg}
                sizes="100vw"
              />
              <p>100 persons</p>
            </div>
            <div className={standardStyles.space__price}>
              <Image
                src={price}
                alt="Price icon"
                className={standardStyles.space__svg}
                sizes="100vw"
              />

              <p>TT $6,000</p>
            </div>
            <Link href="#contact" className={standardStyles.space__btn}>
              Contact Us
            </Link>
          </div>

          <div className={standardStyles.space}>
            <Image
              src={trainingRoom127}
              alt="Training Room"
              sizes="100vw"
              height={200}
              className={standardStyles.space__img}
            />

            <h5 className={standardStyles.space__name}>Training Room</h5>
            <div className={standardStyles.space__location}>
              <Image
                src={location}
                alt="Location icon"
                className={standardStyles.space__svg}
              />
              <p>Chaguanas</p>
            </div>
            <div className={standardStyles.space__layout}>
              <Image
                src={layout}
                alt="Layout icon"
                className={standardStyles.space__svg}
              />
              <p>Classroom</p>
            </div>
            <div className={standardStyles.space__size}>
              <Image
                src={size}
                alt="Capacity icon"
                className={standardStyles.space__svg}
                sizes="100vw"
              />
              <p>30 persons</p>
            </div>
            <div className={standardStyles.space__price}>
              <Image
                src={price}
                alt="Sppace Price icon"
                className={standardStyles.space__svg}
                sizes="100vw"
              />

              <p>TT$ 3,500</p>
            </div>
            <Link href="#contact" className={standardStyles.space__btn}>
              Contact Us
            </Link>
          </div>
          <div className={standardStyles.space}>
            <Image
              src={trainingRoom93}
              alt="Training Room"
              sizes="100vw"
              height={200}
              className={standardStyles.space__img}
            />

            <h5 className={standardStyles.space__name}>Training Room</h5>
            <div className={standardStyles.space__location}>
              <Image
                src={location}
                alt="Location icon"
                className={standardStyles.space__svg}
              />
              <p>Chaguanas</p>
            </div>
            <div className={standardStyles.space__layout}>
              <Image
                src={layout}
                alt="Layout icon"
                className={standardStyles.space__svg}
              />
              <p>Classroom</p>
            </div>
            <div className={standardStyles.space__size}>
              <Image
                src={size}
                alt="Capacity icon"
                className={standardStyles.space__svg}
                sizes="100vw"
              />
              <p>30 persons</p>
            </div>
            <div className={standardStyles.space__price}>
              <Image
                src={price}
                alt="Sppace Price icon"
                className={standardStyles.space__svg}
                sizes="100vw"
              />

              <p>TT$ 3,500</p>
            </div>
            <Link href="#contact" className={standardStyles.space__btn}>
              Contact Us
            </Link>
          </div>
          <div className={standardStyles.space}>
            <Image
              src={trainingRoom128}
              alt="Training Room"
              sizes="100vw"
              height={200}
              className={standardStyles.space__img}
            />

            <h5 className={standardStyles.space__name}>Training Room</h5>
            <div className={standardStyles.space__location}>
              <Image
                src={location}
                alt="Location icon"
                className={standardStyles.space__svg}
              />
              <p>Chaguanas</p>
            </div>
            <div className={standardStyles.space__layout}>
              <Image
                src={layout}
                alt="Layout icon"
                className={standardStyles.space__svg}
              />
              <p>Classroom</p>
            </div>
            <div className={standardStyles.space__size}>
              <Image
                src={size}
                alt="Capacity icon"
                className={standardStyles.space__svg}
                sizes="100vw"
              />
              <p>30 persons</p>
            </div>
            <div className={standardStyles.space__price}>
              <Image
                src={price}
                alt="Sppace Price icon"
                className={standardStyles.space__svg}
                sizes="100vw"
              />

              <p>TT$ 3,500</p>
            </div>
            <Link href="#contact" className={standardStyles.space__btn}>
              Contact Us
            </Link>
          </div>
        </section>
        <section id="morespaces" className={standardStyles.rentCollage}>
          <div className={standardStyles.gallery}>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_1}`}
            >
              <Image
                src={trainingRoom128}
                alt="Gallery image 1"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_2}`}
            >
              <Image
                src={chagoutside}
                alt="Netball"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_3}`}
            >
              <Image
                src={parkingFeature}
                alt="Gallery image 3"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${costlifeStyles.gallery__item_4}`}
            >
              <Image
                src={whyimage1}
                alt="Gallery image 4"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_5}`}
            >
              <Image
                src={trainingRoom128}
                alt="Gallery image 1"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_6}`}
            >
              <Image
                src={chagoutside}
                alt="Netball"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_7}`}
            >
              <Image
                src={parkingFeature}
                alt="Gallery image 3"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${costlifeStyles.gallery__item_8}`}
            >
              <Image
                src={rooftop1}
                alt="Gallery image 4"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_9}`}
            >
              <Image
                src={trainingRoom128}
                alt="Gallery image 1"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_10}`}
            >
              <Image
                src={chagoutside}
                alt="Netball"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_11}`}
            >
              <Image
                src={parkingFeature}
                alt="Gallery image 3"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${costlifeStyles.gallery__item_12}`}
            >
              <Image
                src={rooftop1}
                alt="Gallery image 4"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_13}`}
            >
              <Image
                src={trainingRoom128}
                alt="Gallery image 1"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_14}`}
            >
              <Image
                src={chagoutside}
                alt="Netball"
                className={standardStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${standardStyles.gallery__item} ${standardStyles.gallery__item_3}`}
            >
              <Image
                src={parkingFeature}
                alt="Gallery image 3"
                className={standardStyles.gallery__img}
                sizes="100vw"
                // style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
          </div>
        </section>

        <div id="contact" className={standardStyles.rentContact}>
          <div className={standardStyles.contact}>
            <p className={standardStyles.contact__info}>
              {" "}
              Contact <span> Haniffa Ali Parris </span> today to reserve these
              or other available spaces at the COSTAATT
            </p>
            <div className={standardStyles.telephone}>
              <Image
                className={standardStyles.contact__icon}
                src={telephone}
                alt="telephone icon"
              />
              <p className={standardStyles.space_downloads}>868-625-5030 EXT 5363</p>
            </div>
            <div className={standardStyles.email}>
              <Image
                className={standardStyles.contact__icon}
                src={email}
                alt="email icon"
              />

              <a
                className={standardStyles.space__downloads}
                href="mailto:fschelpdesk@costaatt.edu.tt"
              > fschelpdesk@costaatt.edu.tt
                {" "}
              </a>
              {/* <p className={standardStyles.paragraph}>
                {" "}
               
              </p> */}
            </div>
            <div className={standardStyles.email}>
              <Image
                className={standardStyles.contact__icon}
                src={bookOnline}
                alt="book online icon"
              />
              <a
                href="https://bit.ly/42oZdfL"
                target="_blank"
                rel="noopener noreferrer"
                className={standardStyles.space__downloads}
              >
                {" "}
                 Book Online
              </a>
            </div>

            <div className={standardStyles.email}>
              <Image
                className={standardStyles.contact__icon}
                src={downloadicon}
                alt="download icon"
              />
              {/* Download brochures */}
              <Link
                href="/pdfs/Rental Spaces Lab.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={standardStyles.space__downloads}
              >
                {" "}
                Lab Rentals
              </Link>
              <br />
              <Link
                href="/pdfs/Rental Spaces.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={standardStyles.space__downloads}
              >
                {" "}
                Spaces Rentals
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end of container */}
    </>
  );
};

export default rentspace;
