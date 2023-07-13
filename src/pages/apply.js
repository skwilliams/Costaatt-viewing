import React from 'react'

const apply = () => {
  return (
    <>
      <Head>
        <title>Apply Now </title>
      </Head>
      <div>Apply Now</div>
    </>
  );
}

apply.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default apply