import React from 'react'
import Head from 'next/head'
import headimg from '../../../../../../images/Programmes/tester2.jpg'
import HeadImage from "../../../../../components/PageComponents/HeadImage"
import Layout from'../../../../../components/PageWithSideNavComponents/Layout'
const index = () => {
  return (
    <>
      <Head>
        <title>Business </title>
      </Head>
      <HeadImage
        imagetext="Business   "
        mainimage={headimg}
      />
      <div>Business</div>
    </>
  );
}

index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default index