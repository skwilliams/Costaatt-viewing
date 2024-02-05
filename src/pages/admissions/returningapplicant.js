import React from "react";
import Head from "next/head";
import HeaderNoImage from "../../components/PageComponents/HeaderNoImage";
import Link from "next/link";
import standardStyles from "../../styles/main.module.scss";

const returningapplicant = () => {
  return (
    <>
      <Head>
        <title>New and Transfer Applicants</title>
      </Head>
      <HeaderNoImage caption="New and Transfer Applicants" />
      <p className={standardStyles.headingprimarysub}>
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/admissions">Admissions/</Link>
        <Link href="/admissions/howtoapply">How to Apply</Link>
      </p>
      <section>
        <p className={standardStyles.headingSecondary}>
          {" "}
          New and Transfer Applicant
        </p>
      </section>
    </>
  );
};

export default returningapplicant;
