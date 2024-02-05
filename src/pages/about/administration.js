import React from "react";

import Head from "next/head";
import standardStyles from "../../styles/main.module.scss";
import HeaderNoImage from "../../components/PageComponents/HeaderNoImage";
import Link from "next/link";

const Administration = () => {
  return (
    <>
      <Head>
        <title>Administration |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="Administration" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/administration">Administration</Link>
      </p>
    </>
  );
};

export default Administration;
