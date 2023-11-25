
import React from "react";
import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
import { IconContext } from "react-icons";


const executiveleaders = () => {
  return (
    <>
      <Head>
        <title>Executive |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="College Leadership" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/executive">Executive</Link>
      </p>

      <section id="vps" className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.newsHeading}>Vice Presidents</h2>
      </section>
      <section id="mgmt" className={standardStyles.sectionbackColor}>
        <h2 className={standardStyles.newsHeading}>Management Team</h2>
      </section>
      <section id="deans" className={standardStyles.sectionNoSideNav}>
        <h2 className={standardStyles.newsHeading}>Deans</h2>
      </section>
    </>
  );
}

export default executiveleaders