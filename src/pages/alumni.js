import React from "react";
import Head from "next/head";
const alumni = () => {
  return (
    <>
      <Head>
        <title>Alumni </title>
      </Head>

      <div>alumni</div>
    </>
  );
};

alumni.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default alumni;
