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
      <header className={standardStyles.rentHeader}>
        <Head>
          <title>Translation and Interpretation </title>
        </Head>{" "}
        <HeadImage mainimage={translationHeader} />
        <div
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
        >
          <Link href="/"> COSTAATT/ </Link>
          <Link href="/services">Services/</Link>
          <Link href="/services/rentspace">Rental Spaces</Link>
        </div>
      </header>
      <section className={standardStyles.r}
    </>
  );
}

export default translation