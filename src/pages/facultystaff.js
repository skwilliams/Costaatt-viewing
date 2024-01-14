import React from 'react';
import Link from "next/link";
import Head from "next/head";
import Image from 'next/image';
import HeadImage from "@/components/PageComponents/HeadImage";
import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";

import  facultyStaffheader from "../../public/images/facultyStaffheader.jpg"
import headerimage from '../../public/images/costaattlife/startclub.jpg'

import facultyStyles from "@/styles/main.module.scss";
import standardStyles from "@/styles/main.module.scss";

const facultystaff = () => {
  return (
    <>
      <div className={facultyStyles.sectionFacultyStaff}>
        <header className={facultyStyles.faculty_header}>
          <Head>
            <title>Faculty & Staff </title>
          </Head>{" "}
          <div className={facultyStyles.faculty_headertext}>
            <h2>Faculty and Staff</h2>
            <h3> Our Faculty and Staff are the engine that drives COSTTAAT </h3>
          </div>
          <div className={facultyStyles.faculty_headerimage}>
            <Image
              // className={facultyStyles.faculty_headerimage}
              src={headerimage}
              width="0"
              height="0"
              alt="image at head"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: "100%", height: "50%" }}
              quality="100"
              onLoad={(e) => console.log(e)} // {naturalHeight: ..., naturalWidth: ...}
            />
          </div>
          {/* <div
            className={`${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
          >
            <Link href="/"> COSTAATT/ </Link>
            <Link href="/services">Services/</Link>
            <Link href="/services/customtrainig">Customized Training</Link>
          </div> */}
        </header>
        <div
          className={facultyStyles.facultylinks}

          // className={`${facultStyles.facultylinks}${standardStyles.toplinksnav} ${standardStyles.marginBottomSmall}`}
        >
          <Link href="/"> COSTAATT/ </Link>
          <Link href="/services">Services/</Link>
          <Link href="/services/customtrainig">Customized Training</Link>
        </div>
      </div>
    </>
  );
      
      }


export default facultystaff;
