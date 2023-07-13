import React from "react";
import Head from "next/head";

const currentstudents = () => {
  return (
    <>
      <Head>
        <title>Current Students </title>
      </Head>

      <h1>currentstudents</h1>
    </>
  );
};

currentstudents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default currentstudents;
