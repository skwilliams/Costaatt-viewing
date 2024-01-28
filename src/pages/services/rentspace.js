import React from "react";
import Image from "next/image";

import Head from "next/head";
import HeadImage from "@/components/PageComponents/HeadImage";
import servicesStyles from "@/styles/Services.module.scss";
import GridStyles from "@/styles/Grid.module.scss";
import standardStyles from "@/styles/main.module.scss";
import Link from "next/link";

// Icons for standard features
import projector from "../../../public/images/servicesPhoto/projector.svg";
import wifi from "../../../public/images/servicesPhoto/wifi.svg";
import parking from "../../../public/images/servicesPhoto/parking.svg";

import speakers from "../../../public/images/servicesPhoto/speakers.svg";
import techsupport from "../../../public/images/servicesPhoto/techsupport.svg";

// Photos for why costaatt
import whyback from "../../../public/images/servicesPhoto/whybackground.jpg";

import parkingFeature from "../../../public/images/servicesPhoto/parkingFeature.jpg";

import whyimage1 from "../../../public/images/servicesPhoto/whyimage1.jpg";

import whyimage2 from "../../../public/images/servicesPhoto/whyimage2.jpg";

// svg's for card
import price from "../../../public/images/servicesPhoto/price.svg";
import location from "../../../public/images/servicesPhoto/location.svg";
import layout from "../../../public/images/servicesPhoto/layout.svg";
import size from "../../../public/images/servicesPhoto/size.svg";

import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import downloadicon from "../../../public/images/admissions/downloadnoteicon.svg";
import bookOnline from "../../../public/images/servicesPhoto/bookOnline.svg";

import rentalSpacesHeader from "../../../public/images/headers/rentalSpaceHeader.jpg";

//images for cards
import auditorium from "../../../public/images/servicesPhoto/Auditorium.jpg";

import boardRoomChag from "../../../public/images/servicesPhoto/BoardRoom-Pos.jpg";
import rooftopTerrace from "../../../public/images/servicesPhoto/RoofTop-Terrace-1.jpg";
import trainingRoom93 from "../../../public/images/servicesPhoto/Training-Room-93.jpg";
import trainingRoom127 from "../../../public/images/servicesPhoto/Training-Room-127.jpg";
import trainingRoom128 from "../../../public/images/servicesPhoto/Training-Room-128.jpg";
import { Grid } from "lucide-react";

const rentspace = () => {
  return (
    <>
      {/* <header className={servicesStyles.headerRent} /> */}

      {/* <div className={servicesStyles.sectionRent}> */}
      <header className={servicesStyles.rentHeader}>
        <Head>
          <title>Rental Spaces </title>
        </Head>{" "}
        <HeadImage mainimage={rentalSpacesHeader} />
        {/* <header className={servicesStyles.headerRent} /> */}
        <div className={standardStyles.linksTop}>
          <Link href="/"> COSTAATT/ </Link>
          <Link href="/services">Services/</Link>
          <Link href="/services/rentspace">Rental Spaces</Link>
        </div>
        {/* <span className={servicesStyles.heading_primary__main}>
            RENTAL SPACES
          </span>
          <span className={servicesStyles.heading_primary__sub}>
            Modern and Attractive Locations
          </span> */}
      </header>
      {/* <div id="intro" > */}
      <div id="intro" className={servicesStyles.sectionNoSidenav}>
        <p className={standardStyles.paragraph}>
          COSTAATT offers modern and attractive locations to ensure that your
          next corporate event is unforgettable. Our facilities in Port of Spain
          and Chaguanas can accommodate private training sessions, corporate
          events, conferences, book launches, networking events, industry panels
          and much more.
        </p>
      </div>
      <section id="package" className={servicesStyles.sectionNoSidenavMar}>
        <div className={GridStyles.row}>
          <div className={GridStyles.col1of5}>
            <div className={servicesStyles.package}>
              <Image
                src={projector}
                alt="Icon"
                className={servicesStyles.package__icon}
                width="100"
                height="100"
              />

              <h3 className={servicesStyles.package__text}>
                {" "}
                Projector Screen or Smartboard
              </h3>
            </div>
          </div>
          <div className={GridStyles.col1of5}>
            <div className={servicesStyles.package}>
              <Image
                src={wifi}
                alt="Icon"
                className={servicesStyles.package__icon}
                width="100"
                height="100"
              />
              <h3 className={servicesStyles.package__text}> Hi Speed WiFI</h3>
            </div>
          </div>
          <div className={GridStyles.col1of5}>
            <div className={servicesStyles.package}>
              <Image
                src={parking}
                alt="Icon"
                className={servicesStyles.package__icon}
                width="100"
                height="100"
              />
              <h3 className={servicesStyles.package__text}> Secured Parking</h3>
            </div>
          </div>
          <div className={GridStyles.col1of5}>
            <div className={servicesStyles.package}>
              <Image
                src={speakers}
                alt="Icon"
                className={servicesStyles.package__icon}
                width="100"
                height="100"
              />
              <h3 className={servicesStyles.package__text}> Speakers</h3>
            </div>
          </div>

          <div className={GridStyles.col1of5}>
            <div className={servicesStyles.package}>
              <Image
                src={techsupport}
                alt="Icon"
                className={servicesStyles.package__icon}
                width="100"
                height="100"
              />
              <h3 className={servicesStyles.package__text}>
                {" "}
                Technical Support{" "}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className={servicesStyles.sectionbackColor}>
        <h2
          className={`${servicesStyles.heading_2} ${servicesStyles.centertext} ${servicesStyles.marginTopBig}  ${servicesStyles.marginBottomBig} ${servicesStyles.heading_2_dark} ${servicesStyles.mb_md}`}
        >
          <span> Why Choose COSTAATT </span>
        </h2>
        <div className={GridStyles.row}>
          <div className={GridStyles.col1of2}>
            <Image
              src={parkingFeature}
              alt="Space for rent"
              className={servicesStyles.rentWhy__img1}
              sizes="100vw"
              width="400"
            />
          </div>
          <div className={GridStyles.col1of2}>
            <div className={servicesStyles.bullet}>
              <ul>
                <li> Convenient locations</li>
                <li>State-of-the-art facilities</li>
                <li>Flexible pricing options</li>
                <li>Catering available on demand</li>
                <li>PC and laptop day rentals avaliable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="spaces" className={servicesStyles.sectionNoSidenavMar}>
        <h2
          className={`${servicesStyles.centertext}  ${servicesStyles.marginTopBig} ${servicesStyles.newsHeading}`}
        >
          Spaces for <span>Rent </span>{" "}
        </h2>
        <div className={GridStyles.row}>
          <div className={GridStyles.col1of3}>
            <div className={servicesStyles.space}>
              <Image
                src={auditorium}
                alt="Auditiorian"
                sizes="100vw"
                height={200}
                className={servicesStyles.space__img}
              />

              <h5 className={servicesStyles.space__name}>Auditiorium</h5>
              <div className={servicesStyles.space__location}>
                <Image
                  src={location}
                  alt="Space Size icon"
                  className={servicesStyles.space__svg}
                />
                <p>Chaguanas</p>
              </div>
              <div className={servicesStyles.space__layout}>
                <Image
                  src={layout}
                  alt="Space Size icon"
                  className={servicesStyles.space__svg}
                />
                <p>Theatre </p>
              </div>
              <div className={servicesStyles.space__size}>
                {/* <svg></svg> */}
                <Image
                  src={size}
                  alt="Space Size icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                  //   fill={true}
                />
                <p>99 persons</p>
              </div>
              <div className={servicesStyles.space__price}>
                <Image
                  src={price}
                  alt=" Price icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                  //   fill={true}
                />

                <p>TT $4,000 </p>
              </div>

              <Link
                href="https://bit.ly/42oZdfL"
                className={servicesStyles.space__btn}
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className={GridStyles.col1of3}>
            <div className={servicesStyles.space}>
              <Image
                src={auditorium}
                alt="Auditiorian"
                sizes="100vw"
                height={200}
                className={servicesStyles.space__img}
              />

              <h5 className={servicesStyles.space__name}>Auditiorium</h5>
              <div className={servicesStyles.space__location}>
                <Image
                  src={location}
                  alt="Sppace Size icon"
                  className={servicesStyles.space__svg}
                />
                <p>Chaguanas</p>
              </div>
              <div className={servicesStyles.space__layout}>
                <Image
                  src={layout}
                  alt="Space Size icon"
                  className={servicesStyles.space__svg}
                />
                <p>Theatre </p>
              </div>
              <div className={servicesStyles.space__size}>
                {/* <svg></svg> */}
                <Image
                  src={size}
                  alt="Space Size icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                  //   fill={true}
                />
                <p>99 persons</p>
              </div>
              <div className={servicesStyles.space__price}>
                <Image
                  src={price}
                  alt=" Price icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                  //   fill={true}
                />

                <p>TT $4,000 </p>
              </div>

              <Link
                href="https://bit.ly/42oZdfL"
                className={servicesStyles.space__btn}
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className={GridStyles.col1of3}>
            <div className={servicesStyles.space}>
              <Image
                src={boardRoomChag}
                alt="BoardRoom"
                sizes="100vw"
                height={200}
                className={servicesStyles.space__img}
              />

              <h5 className={servicesStyles.space__name}>Board Room</h5>
              <div className={servicesStyles.space__location}>
                <Image
                  src={location}
                  alt="Location icon"
                  className={servicesStyles.space__svg}
                />
                <p>Chaguanas</p>
              </div>
              <div className={servicesStyles.space__layout}>
                <Image
                  src={layout}
                  alt="Layout icon"
                  className={servicesStyles.space__svg}
                />
                <p>Conference</p>
              </div>
              <div className={servicesStyles.space__size}>
                <Image
                  src={size}
                  alt="Capacity icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                />
                <p>20 persons</p>
              </div>
              <div className={servicesStyles.space__price}>
                <Image
                  src={price}
                  alt=" Price icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                />

                <p>TT $3500</p>
              </div>
              <Link
                href="https://bit.ly/42oZdfL"
                className={servicesStyles.space__btn}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <div className={GridStyles.row}>
          <div className={GridStyles.col1of3}>
            <div className={servicesStyles.space}>
              <Image
                src={trainingRoom127}
                alt="Training Room"
                sizes="100vw"
                height={200}
                className={servicesStyles.space__img}
              />

              <h5 className={servicesStyles.space__name}>Training Room 127</h5>
              <div className={servicesStyles.space__location}>
                <Image
                  src={location}
                  alt="Location icon"
                  className={servicesStyles.space__svg}
                />
                <p>Chaguanas</p>
              </div>
              <div className={servicesStyles.space__layout}>
                <Image
                  src={layout}
                  alt="Layout icon"
                  className={servicesStyles.space__svg}
                />
                <p>Classroom</p>
              </div>
              <div className={servicesStyles.space__size}>
                <Image
                  src={size}
                  alt="Capacity icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                />
                <p>30 persons</p>
              </div>
              <div className={servicesStyles.space__price}>
                <Image
                  src={price}
                  alt="Sppace Price icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                />

                <p>TT$ 3,500</p>
              </div>
              <Link
                href="https://bit.ly/42oZdfL"
                className={servicesStyles.space__btn}
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className={GridStyles.col1of3}>
            <div className={servicesStyles.space}>
              <Image
                src={trainingRoom93}
                alt="Training Room"
                sizes="100vw"
                height={200}
                className={servicesStyles.space__img}
              />

              <h5 className={servicesStyles.space__name}>Training Room 93</h5>
              <div className={servicesStyles.space__location}>
                <Image
                  src={location}
                  alt="Location icon"
                  className={servicesStyles.space__svg}
                />
                <p>Chaguanas</p>
              </div>
              <div className={servicesStyles.space__layout}>
                <Image
                  src={layout}
                  alt="Layout icon"
                  className={servicesStyles.space__svg}
                />
                <p>Classroom</p>
              </div>
              <div className={servicesStyles.space__size}>
                <Image
                  src={size}
                  alt="Capacity icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                />
                <p>30 persons</p>
              </div>
              <div className={servicesStyles.space__price}>
                <Image
                  src={price}
                  alt="Sppace Price icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                />

                <p>TT$ 3,500</p>
              </div>
              <Link
                href="https://bit.ly/42oZdfL"
                className={servicesStyles.space__btn}
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className={GridStyles.col1of3}>
            <div className={servicesStyles.space}>
              <Image
                src={trainingRoom128}
                alt="Training Room"
                sizes="100vw"
                height={200}
                className={servicesStyles.space__img}
              />

              <h5 className={servicesStyles.space__name}>Training Room 128</h5>
              <div className={servicesStyles.space__location}>
                <Image
                  src={location}
                  alt="Location icon"
                  className={servicesStyles.space__svg}
                />
                <p>Chaguanas</p>
              </div>
              <div className={servicesStyles.space__layout}>
                <Image
                  src={layout}
                  alt="Layout icon"
                  className={servicesStyles.space__svg}
                />
                <p>Classroom</p>
              </div>
              <div className={servicesStyles.space__size}>
                <Image
                  src={size}
                  alt="Capacity icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                />
                <p>30 persons</p>
              </div>
              <div className={servicesStyles.space__price}>
                <Image
                  src={price}
                  alt="Sppace Price icon"
                  className={servicesStyles.space__svg}
                  sizes="100vw"
                />

                <p>TT$ 3,500</p>
              </div>
              <Link
                href="https://bit.ly/42oZdfL"
                className={servicesStyles.space__btn}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="morespaces" className={servicesStyles.rentCollage}>
          <div className={servicesStyles.gallery}>
            <div
              className={`${servicesStyles.gallery__item} ${servicesStyles.gallery__item_1}`}
            >
              <Image
                src={trainingRoom128}
                alt="Gallery image 1"
                className={servicesStyles.gallery__img}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }} // optional
              />
            </div>
            <div
              className={`${servicesStyles.gallery__item} ${servicesStyles.gallery__item_2}`}
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
        </section>  */}
      <section id="contact" className={servicesStyles.rentContact}>
        {/* Contact Text */}
        <h3 className={servicesStyles.rentContact__text}>
          {" "}
          Contact <span> Haniffa Ali Parris </span> today to reserve these or
          other available spaces at the COSTAATT
        </h3>

        <div className={servicesStyles.contact}>
          <Image
            className={servicesStyles.package__icon}
            src={telephone}
            alt="telephone icon"
          />
          <p className={servicesStyles.contact__text}>868-625-5030 Ext 5363 </p>
        </div>
        <div className={servicesStyles.contact}>
          <Image
            className={servicesStyles.package__icon}
            src={email}
            alt="email icon"
          />
          <a
            className={servicesStyles.contact__text}
            href="mailto:fschelpdesk@costaatt.edu.tt"
          >
            {" "}
            fschelpdesk@costaatt.edu.tt
          </a>
          {/* </div> */}
        </div>
        <div className={servicesStyles.contact}>
          <Image
            className={servicesStyles.package__icon}
            src={bookOnline}
            alt="book online icon"
          />
          <a
            href="https://bit.ly/42oZdfL"
            target="_blank"
            className={servicesStyles.contact__text}
            rel="noopener noreferrer"
          >
            {" "}
            Book Online
          </a>
        </div>

        {/* <div className={servicesStyles.brochure}> */}
        <h3 className={servicesStyles.rentContact__text}>
          <span> Download </span> Brochures
        </h3>
        <div className={servicesStyles.brochure}>
          {/* <h2>Hello</h2>
            <h2>Bye</h2> */}
          <div className={servicesStyles.brochure__text}>
            <Image
              className={servicesStyles.package__icon}
              src={downloadicon}
              alt="download icon"
            />
            {/* Download brochures */}
            <Link
              href="/pdfs/Rental Spaces Lab.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={servicesStyles.contact__text}
            >
              {" "}
              <h5 className={servicesStyles.highlight}>Lab Rentals </h5>
            </Link>
          </div>

          <div className={servicesStyles.brochure__text}>
            <Image
              className={servicesStyles.package__icon}
              src={downloadicon}
              alt="download icon"
            />

            <Link
              href="/pdfs/Rental Spaces.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={servicesStyles.contact__text}
            >
              {" "}
              <h5 className={servicesStyles.highlight}> Spaces Rentals </h5>
            </Link>
          </div>
        </div>
      </section>
      {/* </div> */}
      {/*end section Rent */}
    </>
  );
};

export default rentspace;
