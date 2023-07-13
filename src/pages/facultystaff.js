<<<<<<< HEAD
import React from "react";

const facultystaff = () => {
  return <div>facultystaff</div>;
};

export default facultystaff;
=======
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
>>>>>>> 342e671bdebcad76122f5789442ee0d6e9c0a608
