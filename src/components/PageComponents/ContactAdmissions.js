import React from 'react'
import AdmisStyles from "@/styles/Admissions.module.scss"
import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import counsellor from "../../../public/images/admissions/contact.svg";
import Link from "next/link"
import Image from "next/image";


const ContactAdmissions = () => {
  return (
    <>
    
  
      <div className={AdmisStyles.threeColGridCon}>
        <div className={AdmisStyles.threeColGrid}>
          <Image
            className={AdmisStyles.icon}
            src={telephone}
            alt="telephone icon"
          />
          <p className={AdmisStyles.icontext}> 625-5030 ext 5900</p>
        </div>
        <div className={AdmisStyles.threeColGrid}>
          <Image className={AdmisStyles.icon} src={email} alt="email icon" />
          <p className={AdmisStyles.icontext}>
            {" "}
            <a href="mailto:applications@costaatt.edu.tt">
              {" "}
              applications@costaatt.edu.tt{" "}
            </a>{" "}
          </p>
        </div>
        <div className={AdmisStyles.threeColGrid}>
          <Image
            className={AdmisStyles.icon}
            src={counsellor}
            alt="contact icon"
          />
          <p className={AdmisStyles.icontext}>
            {" "}
            <Link href="/admissions/admissioncounsellors"> Admissions Counsellor Directory </Link>
          </p>
        </div>
      </div>
        </>
  );
}

export default ContactAdmissions