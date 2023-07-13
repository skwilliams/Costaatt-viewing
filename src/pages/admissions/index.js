import React from "react";

const index = () => {
  return (
    <>
      <div>Admissions Test</div>
    </>
  );
};
index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default index;
