import React,{useState} from "react";
import Link from "next/link";
import Head from "next/head";
import standardStyles from "@/styles/main.module.scss";

import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";


import Popup from "@/components/PageComponents/Popup";



const accreditation = () => {

  const [showModal,setShowModal]=useState(false);

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

      <section className={standardStyles.sectionNoSidenav}>
        <h2 className={standardStyles.marginBottomSmall}>
          {" "}
          Implementing a modal
        </h2>
        <p className={standardStyles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed
          risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio
          facilisis mauris sit amet massa vitae. Mi bibendum neque egestas
          congue. Placerat orci nulla pellentesque dignissim enim sit. Vitae
          semper quis lectus nulla at volutpat diam ut venenatis. Malesuada
          pellentesque elit eget gravida cum sociis natoque penatibus et. Proin
          fermentum leo vel orci porta non pulvinar neque laoreet. Gravida neque
          convallis a cras semper. Molestie at elementum eu facilisis sed odio
          morbi quis. Faucibus vitae aliquet nec ullamcorper sit amet risus
          nullam eget. Nam libero justo laoreet sit. Amet massa vitae tortor
          condimentum lacinia quis vel eros donec. Sit amet facilisis magna
          etiam. Imperdiet sed euismod nisi p
        </p>
        <a
          onClick={() => setShowModal(true)}
          className={standardStyles.btnText}
        >
          Read More &rarr;
        </a>

        <button
          onClick={() => setShowModal(true)}
          className={standardStyles.btn}
        >
          Read More &rarr;
        </button>

     
      </section>
      <section className={standardStyles.sectionNoSidenav}>
        <div> Other content </div>
      </section>
    </>
  );

}

export default accreditation