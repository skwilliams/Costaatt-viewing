import React from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";
import costlifeStyles from "@/styles/CostaattLife.module.css";
import DeanStyles from "@/styles/Dean.module.scss";
import AboutStyles from "@/styles/About.module.scss";
import { IconContext } from "react-icons";



import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import hours from "../../../public/images/admissions/businesshours.svg";

import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import { Button, Divider } from "@mui/material";

import Image, { StaticImageData } from "next/image";




const accreditation = () => {
  return (
    <>
      <Head>
        <title>Accrediation |{""} COSTAATT</title>
      </Head>
      <HeaderNoImage caption="Accrediation" />
      <p
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
      >
        <Link href="/"> COSTAATT/ </Link>
        <Link href="/about">About/</Link>
        <Link href="/about/accreditation">Accrediation</Link>
      </p>

      <section id></section>
      
    </>
  );

}

export default accreditation