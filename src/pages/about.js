import React from "react";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>Costaatt | Home </title>
      </Head>
      <h1>about</h1>
    </>
  );
};
about.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default about;
