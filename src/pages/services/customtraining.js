import React from 'react'
import Link from "next/link";
import Head from "next/head";
import HeadImage from "@/components/PageComponents/HeadImage";
import  customHeader from "../../../public/images/customizedTrainingHeader.jpg";
import standardStyles from "@/styles/main.module.scss";


const customtraining = () => {
  return (



    
    <>
      <header className={standardStyles.rentHeader}>
        <Head>
          <title>Customized Training </title>
        </Head>{" "}
        <HeadImage mainimage={customHeader} />
        <div
        className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
        >
          <Link href="/"> COSTAATT/ </Link>
          <Link href="/services">Services/</Link>
          <Link href="/services/customtrainig">Customized Training</Link>
        </div>
      </header>
      <section id ='intro'>
    We can train you in anything...
      </section>
      <section id="offerings">
        Short Courses 
      </section>
      <sectio id="our customers">
        
      </sectio>
    </>
 )
}

export default customtraining