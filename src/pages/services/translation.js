import React from "react";

import HeadImage from "../../components/PageComponents/HeadImage";
import translationHeader from "../../../public/images/about/translation.jpg";
import standardStyles from "../../styles/main.module.scss";
import styles from "../../styles/EducationSection.module.scss";

// import LanaguageStyles from "../../styles/LanguageCard.module.scss";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Icons for Flags
import English from "../../../public/images/servicesPhoto/flagEngland.svg";

import Spanish from "../../../public/images/servicesPhoto/flagSpain.svg";

import German from "../../../public/images/servicesPhoto/flagGermany.svg";

import Dutch from "../../../public/images/servicesPhoto/flagDutch.svg";

import French from "../../../public/images/servicesPhoto/flagFrance.svg";
import Portuguese from "../../../public/images/servicesPhoto/flagPortugal.svg";

import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";

//images for cards
import LanguageStyles from "../../styles/LanguageCard.module.scss";

import ServicesStyles from "../../styles/Services.module.scss";
import Marquee from "../../components/PageComponents/Marquee";
import language from "../../../public/images/about/language.jpg";
import { Sandwich } from "lucide-react";
import EducationSection from "../../components/HomeComponents/EducationSection";

const translation = () => {
  return (
    <>
      <Head>
        <title>Translation and Interpretation </title>
      </Head>{" "}
      <HeadImage mainimage={translationHeader} wide="3573" high="5379" />
      {/* <div className={standardStyles.linksTop}>
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/services">Services/</Link>
        <Link href="/services/translation">Translation and Interpretation</Link>
      </div> */}
      <>
        <section
          id="translate"
          className={`${ServicesStyles.section_translation}
          ${ServicesStyles.sectionbackGreyColor}`}
        >
          <span className={ServicesStyles.heading_primary__main}>
            Translation and Interpreting Services
          </span>
          <span className={ServicesStyles.heading_primary__sub}>
            Strives for Service Excellence
          </span>
          {/* </section>
        // <section className={ServicesStyles.section_translation}> */}
          <div id="overview" className={standardStyles.marginTopHuge}>
            <Marquee text="Welkom Welcome Bienvenue Willkommen Bem-vindo Bienvenida" />
          </div>
          <div className={ServicesStyles.translationMotto}>
            The T&I Unit consistenlty strives for service excellence by
            introducing new methods to improve our clients' experience.
            Efficiency, effetiveness and relevance are our watchwords.
          </div>
          <div className={ServicesStyles.translationSection}>
            <div className={ServicesStyles.textContent}>
              <h1 className={ServicesStyles.heading_primary__secondary}>
                Translation Services
              </h1>
              <p className={ServicesStyles.description}>
                Translation service is available from and into the following
                languages
              </p>
              <p>
                With respect to translation services, we can boast about the
                availabity of fully online service - from client requests, to
                online payment and document delivery. The integration of
                technology-base tools provides clients with the ability to track
                the progess of their requests online. We are mindful that some
                clients may opt for a more tranditional interface and,
                therefore, in-person service is available at COSTAATT's City
                Campus, with some support at other satellites campuses.
              </p>
            </div>
            <div className={ServicesStyles.imageContent}>
              {/* Image component - for example purposes, using an img tag */}

              <div className={standardStyles.row}>
                <div className={standardStyles.col3of3}>
                  <div className={ServicesStyles.language}>
                    <Image
                      src={English}
                      alt="Icon"
                      className={ServicesStyles.language__icon}
                      width="100"
                      height="100"
                    />
                    <h3 className={ServicesStyles.language__text}> English</h3>
                  </div>
                </div>
              </div>

              <div className={standardStyles.row}>
                <div className={standardStyles.col1of2}>
                  <div className={ServicesStyles.language}>
                    <Image
                      src={Spanish}
                      alt="Icon"
                      className={ServicesStyles.language__icon}
                      width="100"
                      height="100"
                    />
                    <h3 className={ServicesStyles.language__text}> Spanish</h3>
                  </div>
                </div>

                <div className={standardStyles.col1of2}>
                  <div className={ServicesStyles.language}>
                    <Image
                      src={French}
                      alt="Icon"
                      className={ServicesStyles.language__icon}
                      width="100"
                      height="100"
                    />
                    <h3 className={ServicesStyles.language__text}> French</h3>
                  </div>
                </div>
              </div>
              <div className={standardStyles.row}>
                <div className={standardStyles.col1of3}>
                  <div className={ServicesStyles.language}>
                    <Image
                      src={Dutch}
                      alt="Icon"
                      className={ServicesStyles.language__icon}
                      width="100"
                      height="100"
                    />
                    <h3 className={ServicesStyles.language__text}> Dutch</h3>
                  </div>
                </div>
                <div className={standardStyles.col1of3}>
                  <div className={ServicesStyles.language}>
                    <Image
                      src={Portuguese}
                      alt="Icon"
                      className={ServicesStyles.language__icon}
                      width="100"
                      height="100"
                    />
                    <h3 className={ServicesStyles.language__text}>
                      {" "}
                      Portuguese
                    </h3>
                  </div>
                </div>
                <div className={standardStyles.col1of3}>
                  <div className={ServicesStyles.language}>
                    <Image
                      src={German}
                      alt="Icon"
                      className={ServicesStyles.language__icon}
                      width="100"
                      height="100"
                    />
                    <h3 className={ServicesStyles.language__text}> German</h3>
                  </div>
                </div>
              </div>
              {/* <div className={standardStyles.row}>
                <Image
                  className={styles.img}
                  width="500"
                  height="400"
                  src={language}
                  alt="Campus Life"
                />
              </div> */}
            </div>
          </div>
        </section>

        <section
          id="interpret"
          className={`${ServicesStyles.section__interpretation}

         `}
        >
          {/* <div className={ServicesStyles.translationSection}> */}
          <div className={ServicesStyles.textContentInterpret}>
            <p className={ServicesStyles.translationLanguages}>
              Interpretation service is available from and into the following
              languages: English, French and Spanish.
            </p>
            <div className={standardStyles.row}>
              <div className={standardStyles.col1of3}>
                <div className={ServicesStyles.language}>
                  <Image
                    src={English}
                    alt="Icon"
                    className={ServicesStyles.language__icon}
                    width="90"
                    height="90"
                  />
                  <h3 className={ServicesStyles.language__text}> English</h3>
                </div>
              </div>
              <div className={standardStyles.col1of3}>
                <div className={ServicesStyles.language}>
                  <Image
                    src={Spanish}
                    alt="Icon"
                    className={ServicesStyles.language__icon}
                    width="100"
                    height="100"
                  />
                  <h3 className={ServicesStyles.language__text}> Spainsh</h3>
                </div>
              </div>

              <div className={standardStyles.col1of3}>
                <div className={ServicesStyles.language}>
                  <Image
                    src={French}
                    alt="Icon"
                    className={ServicesStyles.language__icon}
                    width="100"
                    height="100"
                  />
                  <h3 className={ServicesStyles.language__text}> French</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={ServicesStyles.imageContentInterpret}>
            <h1 className={ServicesStyles.heading_primary__secondary}>
              Interpreting Service
            </h1>
            <p className={styles.textContent}>
              Our Interpreting services include a platform that facilitates the
              provision of remote Interpreting. This new approach to
              Interpreting is both attractive and cost-effective by reducing,
              and in some cases, eliminating inherent costs borne by clients in
              the areas of transportation and accommodation. Our staff are
              trained and well versed in the available technologies and, as
              such, can offer guidance on their appropriate use.
            </p>
          </div>
          {/* </div> */}
        </section>
        <section id="contact" className={ServicesStyles.contactTranslation}>
          <h1 className={ServicesStyles.heading_primary__secondary}>
            Contact Us 
          </h1>
          <p>
            Please send us an email at our designated inbox{" "}
            <a href="mailto:translation@costaatt.edu.tt">
              translation@costaatt.edu.tt
            </a>
          </p>
        </section>
      </>
    </>
  );
};

export default translation;
