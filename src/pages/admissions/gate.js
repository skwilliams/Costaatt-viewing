import Head from "next/head";
import HeaderNoImage from "../../components/PageComponents/HeaderNoImage";
import AdminStyles from "../../styles/Admissions.module.scss";

import React from "react";

const gate = () => {
  return (
    <>
      <Head>
        <title> GATE </title>
      </Head>
      <HeaderNoImage caption="GATE" />
      <section id="intro" className={AdminStyles.sectionIntro}>
        <p className={AdminStyles.text}>
          {" "}
          The Government Assistance for Tuition Expenses (GATE)
        </p>
      </section>
    </>
  );
};

export default gate;
