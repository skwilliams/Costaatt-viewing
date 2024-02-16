import React from 'react'
import AdmisStyles from "../../styles/Admissions.module.scss"
import standardStyles from "../../styles/main.module.scss"
import telephone from "../../../public/images/admissions/telephone.svg";
import email from "../../../public/images/admissions/email.svg";
import counsellor from "../../../public/images/admissions/contact.svg";
import Link from "next/link"
import Image from "next/image";


const ContactStudentLife = () => {
  return (
    <>
      <div className={standardStyles.row}>
        <div className={standardStyles.col1of3}>
          <Image
            className={AdmisStyles.icon}
            src={telephone}
            alt="telephone icon"
          />
          <p className={`${AdmisStyles.iconfont} ${standardStyles.paragraph}`}>
            {" "}
            625-5030 ext 5227,5236
          </p>
        </div>
        <div className={standardStyles.col1of3}>
          <Image className={AdmisStyles.icon} src={email} alt="email icon" />
          <p className={AdmisStyles.iconfont}>
            {" "}
            <a
              className={AdmisStyles.iconfont}
              href="mailto:icarter@costaatt.edu.tt"
            >
              {" "}
              icarter@costaatt.edu.tt{" "}
            </a>{" "}
            <a
              className={AdmisStyles.iconfont}
              href="mailto:studentlifeandathletics@costaatt.edu.tt"
            >
              {" "}
              studentlifeandathletics@costaatt.edu.tt{" "}
            </a>{" "}
          </p>
        </div>
        <div className={standardStyles.col1of3}>
          <Image
            className={AdmisStyles.icon}
            src={counsellor}
            alt="contact icon"
          />
          <p className={AdmisStyles.iconfont}>
            {" "}
            <Link className={AdmisStyles.iconfont} href="/directory">
              {" "}
              Directory{" "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactStudentLife