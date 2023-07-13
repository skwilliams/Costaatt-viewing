import React from "react";
import Head from "next/head";

const facultystaff = () => {
  return (
    <>
      <Head>
        <title>Faculty and Staff </title>
      </Head>

      <div>facultystaff</div>
    </>
  );
};

facultystaff.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default facultystaff;
