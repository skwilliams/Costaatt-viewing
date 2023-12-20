import React from 'react'
import Link from 'next/link';
import Head
 from 'next/head';
 import HeadImage from '@/components/PageComponents/HeadImage';
 import translationHeader from '../../../public/images/translationHeader.jpg'
import standardStyles from '@/styles/main.module.scss'
const translation = () => {
  return (
    <>
      <div className={standardStyles.contentGrid}>
        <header className={standardStyles.breakout}>
          <Head>
            <title>Translation and Interpretation </title>
          </Head>{" "}
          <HeadImage mainimage={translationHeader} />
          <div
            className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
          >
            <Link href="/"> COSTAATT/ </Link>
            <Link href="/services">Services/</Link>
            <Link href="/services/translate">
              Translation and Interpretation
            </Link>
          </div>
        </header>
      

      <section className={standardStyles.breakout}>
        <p className={standardStyles.paragraph}>
          As an official agent recognised by the Government of Trinidad and
          Tobago, the Translation and Interpreting Services (T&I) Unit provides
          a wide range of translation and interpreting services at both the
          local and regional levels. Our clients include corporate entities,
          government organisations and individuals.
        </p>
      </section>
      <section className={standardStyles.rentPackage}></section>
      </div>
    </>
  );
}

export default translation