import React from "react";
import Link from "next/link";
import Head from "next/head";
import HeadImage from "../../components/PageComponents/HeadImage";
import standardStyles from "../../styles/main.module.scss";
import rentalSpacesHeader from "../../../public/images/headers/rentalSpaceHeader.jpg";

// Icons for standard features

import projector from "../../../public/images/servicesPhoto/projector.svg";
import wifi from "../../../public/images/servicesPhoto/wifi.svg";
import parking from "../../../public/images/servicesPhoto/parking.svg";
import speakers from "../../../public/images/servicesPhoto/speakers.svg";
import techsupport from "../../../public/images/servicesPhoto/techsupport.svg";

// svg's for card
import price from "../../../public/images/servicesPhoto/price.svg";
import location from "../../../public/images/servicesPhoto/location.svg";
import layout from "../../../public/images/servicesPhoto/layout.svg";
import size from "../../../public/images/servicesPhoto/size.svg";

import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import downloadicon from "../../../public/images/admissions/downloadnoteicon.svg";
import bookOnline from "../../../public/images/servicesPhoto/bookOnline.svg";

//images for cards
import auditorium from "../../../public/images/servicesPhoto/Auditorium.jpg";

import boardRoomChag from "../../../public/images/servicesPhoto/BoardRoom-Pos.jpg";
import rooftopTerrace from "../../../public/images/servicesPhoto/RoofTop-Terrace-1.jpg";
import trainingRoom93 from "../../../public/images/servicesPhoto/Training-Room-93.jpg";
import trainingRoom127 from "../../../public/images/servicesPhoto/Training-Room-127.jpg";
import trainingRoom128 from "../../../public/images/servicesPhoto/Training-Room-128.jpg";

import Image from "next/image";

const index = () => {
  return (
    <>
      <div className={standardStyles.sectionRent}>
        <header className={standardStyles.rentHeader}>
          <Head>
            <title>Rental Spaces </title>
          </Head>{" "}
          <HeadImage mainimage={rentalSpacesHeader} />
          <div className={standardStyles.linksTop}>
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

            <Link
              href="https://bit.ly/42oZdfL"
              className={standardStyles.space__btn}
            >
              Book Now
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
            <Link
              href="https://bit.ly/42oZdfL"
              className={standardStyles.space__btn}
            >
              Book Now
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
            <Link
              href="https://bit.ly/42oZdfL"
              className={standardStyles.space__btn}
            >
              Book Now
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

            <h5 className={standardStyles.space__name}>Training Room 127</h5>
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
            <Link
              href="https://bit.ly/42oZdfL"
              className={standardStyles.space__btn}
            >
              Book Now
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

            <h5 className={standardStyles.space__name}>Training Room 93</h5>
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
            <Link
              href="https://bit.ly/42oZdfL"
              className={standardStyles.space__btn}
            >
              Book Now
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

            <h5 className={standardStyles.space__name}>Training Room 128</h5>
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
            <Link
              href="https://bit.ly/42oZdfL"
              className={standardStyles.space__btn}
            >
              Book Now
            </Link>
          </div>
        </section>
        {/* <section id="morespaces" className={standardStyles.rentCollage}>
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
        </section> */}
        <section id="contact" className={standardStyles.rentContact}>
          {/* Contact Text */}
          <h3 className={standardStyles.rentContact__text}>
            {" "}
            Contact <span> Haniffa Ali Parris </span> today to reserve these or
            other available spaces at the COSTAATT
          </h3>

          <div className={standardStyles.contact}>
            <Image
              className={standardStyles.contact__icon}
              src={telephone}
              alt="telephone icon"
            />
            <p className={standardStyles.contact__text}>
              868-625-5030 Ext 5363{" "}
            </p>
          </div>
          <div className={standardStyles.contact}>
            <Image
              className={standardStyles.contact__icon}
              src={email}
              alt="email icon"
            />
            <a
              className={standardStyles.contact__text}
              href="mailto:fschelpdesk@costaatt.edu.tt"
            >
              {" "}
              fschelpdesk@costaatt.edu.tt
            </a>
            {/* </div> */}
          </div>
          <div className={standardStyles.contact}>
            <Image
              className={standardStyles.contact__icon}
              src={bookOnline}
              alt="book online icon"
            />
            <a
              href="https://bit.ly/42oZdfL"
              target="_blank"
              className={standardStyles.contact__text}
              rel="noopener noreferrer"
            >
              {" "}
              Book Online
            </a>
          </div>

          {/* <div className={standardStyles.brochure}> */}
          <h3 className={standardStyles.rentContact__text}>
            <span> Download </span> Brochures
          </h3>
          <div className={standardStyles.brochure}>
            {/* <h2>Hello</h2>
            <h2>Bye</h2> */}
            <div className={standardStyles.brochure__text}>
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
                className={standardStyles.contact__text}
              >
                {" "}
                <h5 className={standardStyles.highlight}>Lab Rentals </h5>
              </Link>
            </div>

            <div className={standardStyles.brochure__text}>
              <Image
                className={standardStyles.contact__icon}
                src={downloadicon}
                alt="download icon"
              />

              <Link
                href="/pdfs/Rental Spaces.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={standardStyles.contact__text}
              >
                {" "}
                <h5 className={standardStyles.highlight}> Spaces Rentals </h5>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
