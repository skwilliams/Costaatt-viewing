import React from 'react'
import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";
import Head from 'next/head'
import standardStyles from '@/styles/main.module.scss'
import HeaderNoImage from '@/components/PageComponents/HeaderNoImage';
import Link from 'next/link'
import { FiBookOpen } from "react-icons/fi";
import { IconContext } from "react-icons";



const leadership = () => {
  return (
    <>
      <Head>
        <title>Leadership |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="College Leadership" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/leadership">Leadership</Link>
      </p>

      <section id="intro" className={standardStyles.sectionWithSidenav}>
        <div className={standardStyles.introtext}>
          The university is governed by a Board of Trustees and shared
          governance, and administratively led by the president, deans, and vice
          presidents.
        </div>
        <p className={standardStyles.subintrotext}>
          Together, they ensure the fulfillment of COSTAATT's vision and
          mission, uphold its core values, and manage its operations and
          academic affairs to assure the viability and strategic direction of
          the university.{" "}
        </p>
      </section>
      <section
        className={`${standardStyles.sectionclubs} ${standardStyles.marginTopBig}`}
      >
        <div className={standardStyles.row}>
          <div className={standardStyles.col1of3}>
            <Link className={standardStyles.linkhovercolor} href="./president">
              <div
                className={`${standardStyles.featurebox}
                ${standardStyles.linkhovercolor}`}
              >
                {" "}
                <IconContext.Provider value={standardStyles.featurebox__icon}>
                  {" "}
                  <FiBookOpen value={standardStyles.featurebox__icon} />
                </IconContext.Provider>
                <h3 className={standardStyles.headingcards}>President </h3>
              </div>
            </Link>
          </div>

          <div className={standardStyles.col1of3}>
            <Link className={standardStyles.linkhovercolor} href="./trustees">
              <div
                className={`${standardStyles.featurebox}
                ${standardStyles.linkhovercolor}`}
              >
                <IconContext.Provider value={standardStyles.featurebox__icon}>
                  {" "}
                  <FiBookOpen value={standardStyles.featurebox__icon} />
                </IconContext.Provider>
                <h3 className={standardStyles.headingcards}>
                  Board of Trustees{" "}
                </h3>
              </div>
            </Link>
          </div>
          <div className={standardStyles.col1of3}>
            <Link className={standardStyles.linkhovercolor} href="./executiveleaders">
              <div
                className={`${standardStyles.featurebox}
                ${standardStyles.linkhovercolor}`}
              >
                {" "}
                <IconContext.Provider value={standardStyles.featurebox__icon}>
                  {" "}
                  <FiBookOpen value={standardStyles.featurebox__icon} />
                </IconContext.Provider>
                <h3 className={standardStyles.headingcards}>
                  Executive Leadership{" "}
                </h3>
              </div>
            </Link>
          </div>
        
        </div>
      </section>
    </>
  );
}

leadership.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default leadership