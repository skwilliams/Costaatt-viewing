import React from 'react'

 import HeadImage from '@/components/PageComponents/HeadImage';
 import translationHeader from '../../../public/images/headers/translationHeader.jpg'
import standardStyles from '@/styles/main.module.scss'

// import LanaguageStyles from "@/styles/LanguageCard.module.scss";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";



// Icons for Flags
import English from "../../../public/images/servicesPhoto/flagEngland.svg";

import Spanish from "../../../public/images/servicesPhoto/flagSpain.svg";

import German from "../../../public/images/servicesPhoto/flagGermany.svg";

import Dutch from "../../../public/images/servicesPhoto/flagDutch.svg";

import French from "../../../public/images/servicesPhoto/flagFrance.svg";
import Portugues from "../../../public/images/servicesPhoto/flagPortugal.svg";



import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";



//images for cards
import LanguageStyles from '@/styles/LanguageCard.module.scss';



const translation = () => {
  return (
    <>
      <div className={standardStyles.sectionTranslate}>
        <header className={standardStyles.rentHeader}>
          <Head>
            <title>Translation and Interpretation </title>
          </Head>{" "}
          <HeadImage mainimage={translationHeader} />
          <div className={standardStyles.linksTop}>
            <Link href="/"> COSTAATT/ </Link>
            <Link href="/services">Services/</Link>
            <Link href="/services/translate">
              Translation and Interpretation
            </Link>
          </div>
        </header>

        <div id="intro" className={standardStyles.rentIntro}>
          <p className={standardStyles.translateIntro}>
            As an official agent recognised by the Government of Trinidad and
            Tobago, the Translation and Interpreting Services (T&I) Unit
            provides a wide range of translation and interpreting services at
            both the local and regional levels. Our clients include corporate
            entities, government organisations and individuals.
          </p>
        </div>
        <section id="translate" className={LanguageStyles.languageCard}>
          <h3 className={standardStyles.translateHeading}>
            COSTAATT <span> Translates </span> services
          </h3>

          <ul>
            <li style={{ backgroundColor: "#6710F5" }}>
              <div className={LanguageStyles.icon}>
                <Image
                  src={German}
                  alt="Icon"
                  className={standardStyles.language__icon}
                  width="100"
                  height="100"
                />{" "}
              </div>
              <div className={LanguageStyles.title}>German</div>
              <div className={LanguageStyles.descr}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                impedit?
              </div>
            </li>
            <li style={{ backgroundColor: "#6710F5" }}>
              <div className="icon">
                <Image
                  src={Dutch}
                  alt="Icon"
                  className={standardStyles.language__icon}
                  width="100"
                  height="100"
                />
              </div>
              <div className={LanguageStyles.title}>HTML 5</div>
              <div className={LanguageStyles.descr}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </li>
            <li style={{ backgroundColor: "#6F42C1" }}>
              <div className={LanguageStyles.icon}>
                <Image
                  src={Dutch}
                  alt="Icon"
                  className={standardStyles.language__icon}
                  width="100"
                  height="100"
                />
              </div>
              <div className={LanguageStyles.title}>CSS 3</div>
              <div className={LanguageStyles.descr}>Lorem ipsum dolor sit.</div>
            </li>
            <li style={{ backgroundColor: "#D63384" }}>
              <div className={LanguageStyles.icon}>
                <Image
                  src={Dutch}
                  alt="Icon"
                  className={standardStyles.language__icon}
                  width="100"
                  height="100"
                />
              </div>
              <div className={LanguageStyles.title}>Englisht</div>
              <div className={LanguageStyles.descr}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                laboriosam odio alias.
              </div>
            </li>
            <li style={{ backgroundColor: "#DC3545" }}>
              <div className={LanguageStyles.icon}>
                <Image
                  src={Dutch}
                  alt="Icon"
                  className={standardStyles.language__icon}
                  width="100"
                  height="100"
                />
              </div>
              <div className={LanguageStyles.title}>German</div>
              <div className={LanguageStyles.descr}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </li>
            <li style={{ backgroundColor: "#DC3545" }}>
              <div className={LanguageStyles.icon}>
                <Image
                  src={Dutch}
                  alt="Icon"
                  className={standardStyles.language__icon}
                  width="100"
                  height="100"
                />
              </div>
              <div className={LanguageStyles.title}>French</div>
              <div className={LanguageStyles.descr}>Translate </div>
            </li>
          </ul>
        </section>

        {/* <p className={standardStyles.paragraph}>
            Official and certified translation services are offered in{" "}
          </p> */}

        {/* <div className={standardStyles.language}>
            <Image
              src={German}
              alt="Icon"
              className={standardStyles.language__icon}
              width="100"
              height="100"
            />
            <h3 className={standardStyles.language__text}> German</h3>
          </div>
          <div className={standardStyles.language}>
            <Image
              src={Dutch}
              alt="Icon"
              className={standardStyles.language__icon}
              width="100"
              height="100"
            />
            <h3 className={standardStyles.language__text}> Dutch</h3>
          </div>
          <div className={standardStyles.language}>
            <Image
              src={Spanish}
              alt="Icon"
              className={standardStyles.language__icon}
              width="100"
              height="100"
            />
            <h3 className={standardStyles.language__text}> Spainish</h3>
          </div>
          <div className={standardStyles.language}>
            <Image
              src={Portugues}
              alt="Icon"
              className={standardStyles.language__icon}
              width="100"
              height="100"
            />
            <h3 className={standardStyles.language__text}> Portugues</h3>
          </div>
          <div className={standardStyles.language}>
            <Image
              src={English}
              alt="Icon"
              className={standardStyles.language__icon}
              width="100"
              height="100"
            />
            <h3 className={standardStyles.language__text}> English</h3>
          </div>
          <div className={standardStyles.language}>
            <Image
              src={French}
              alt="Icon"
              className={standardStyles.language__icon}
              width="100"
              height="100"
            />
            <h3 className={standardStyles.language__text}> French</h3>
          </div> */}

        <section id="interpret" className={standardStyles.interpret}>
          <h3 className={standardStyles.interpretHeading}>
            COSTAATT <span> Interprets </span>
          </h3>
          <div className={standardStyles.language}>
            <Image
              src={English}
              alt="Icon"
              className={standardStyles.language__icon}
              width="100"
              height="100"
            />
            <h3 className={standardStyles.language__text}> English</h3>
          </div>

          <div className={standardStyles.language}>
            <Image
              src={Spanish}
              alt="Icon"
              className={standardStyles.language__icon}
              width="100"
              height="100"
            />
            <h3 className={standardStyles.language__text}> Spainsh</h3>
          </div>

          <div className={standardStyles.language}>
            <Image
              src={French}
              alt="Icon"
              className={standardStyles.language__icon}
              width="100"
              height="100"
            />
            <h3 className={standardStyles.language__text}> French</h3>
          </div>

          <div className={standardStyles.language}>
            <Image
              src={Portugues}
              alt="Icon"
              className={standardStyles.language__icon}
              width="100"
              height="100"
            />
            <h3 className={standardStyles.language__text}> Portugues</h3>
          </div>
        </section>

        <section id="contact" className={standardStyles.contactTranslate}>
          {/* Contact Text */}
          <h3 className={standardStyles.newsHeading}> CONTACT</h3>

          <div className={standardStyles.contact}>
            <Image
              className={standardStyles.contact__icon}
              src={telephone}
              alt="telephone icon"
            />
            <p className={standardStyles.contact__text}>
              (868) 625-5030 ext. 5271{" "}
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
              href="mailto: translation@costaatt.edu.tt"
            >
              {" "}
              translation@costaatt.edu.tt
            </a>
            {/* </div> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default translation