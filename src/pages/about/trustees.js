
import React from "react";
import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
import { IconContext } from "react-icons";


const trustees = () => {
  return (
    <>
      <Head>
        <title>Trustees |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="Board of Trustees" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/trustees">Trustees</Link>
      </p>
    </>
  );
}

export default trustees