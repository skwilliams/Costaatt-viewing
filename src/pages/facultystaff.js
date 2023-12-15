import React from 'react';
import Link from "next/link";
import Head from "next/head";
import HeadImage from "@/components/PageComponents/HeadImage";

import  facultyStaffheader from "public/images/facultyStaffheader.jpg";
import standardStyles from "@/styles/main.module.scss";


const facultystaff = () => {
  return (
    <>
      <header className={standardStyles.rentHeader}>
        <Head>
          <title>Customized Training </title>
        </Head>{" "}
        <HeadImage mainimage={facultyStaffheader} />
        <div
          className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
        >
          <Link href="/"> COSTAATT/ </Link>
          <Link href="/services">Services/</Link>
          <Link href="/services/customtrainig">Customized Training</Link>
        </div>
      </header>
    </>
  );
      
      }


export default facultystaff;
