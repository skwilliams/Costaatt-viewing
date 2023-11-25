import React from 'react'
import React from "react";
import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
import { IconContext } from "react-icons";


const administration = () => {
  return (
    <>
      <Head>
        <title>Administration |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="Administration" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/administration">Administration</Link>
      </p>
    </>
  );
}

export default administration