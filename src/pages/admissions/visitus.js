import TopNavOnlyLayout from "../../components/Layouts/TopNavOnly_NoDropdown";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import ProgStyles from "../../styles/Programmes.module.scss"
import HeaderNoImage from "../../components/PageComponents/HeaderNoImage";

const visitus = () => {
  return (
    <>
      <Head>
        <title>How to Apply</title>
      </Head>
      <HeaderNoImage caption="Visit Us"  />
      <p className={ProgStyles.headingprimarysub}>
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/admissions">Admissions/</Link>
        <Link href="/admissions/visitus">Visit Us</Link>
      </p>
      <div>visitus</div>
    </>
  );
}
visitus.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout> {page} </TopNavOnlyLayout>;
};

export default visitus