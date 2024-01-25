import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layouts/TopNavOnly_NoDropdown";

import standardStyles from "@/styles/main.module.scss";
import AboutStyles from "@/styles/About.module.scss";
import GridStyles from "@/styles/Grid.module.scss";
import accreditImage from "../../../public/images/about/Accreditation.jpg";
import partner from "../../../public/images/about/partner.png";

import HeaderNoImage from "@/components/PageComponents/HeaderNoImage";
import Image from "next/image";

const qualityassurance = () => {
  return (
    <>
      <header className={AboutStyles.header} />
      <section className={AboutStyles.section_accreditation}>
        <header>
          <span className={standardStyles.heading_primary__main}>
            QUALITY ASSURANCE 
          </span>
          <span className={standardStyles.heading_primary__sub}>
            Commitment to the External Quality Evaluation Process
          </span>
        </header>

        <div className={GridStyles.row}>
          <div className={GridStyles.col1of2}>
            <p className={AboutStyles.section_accreditation__text_box1}>
              As part of the College's quality philosophy, and in keeping with
              legal and regulatory frameworks, we strive to identify, redress
              and continually improve our quality systems and processes. As
              such, COSTAATT embraces the national and international quality
              standards and requirements set by the{" "}
              <a href="https://www.actt.org.tt/" target="_blank">
                Accreditation Council of Trinidad and Tobago
              </a>
              (ACTT), which was established by Act of Parliament, No. 16 of
              2004, to accredit registered post-secondary and tertiary education
              institutions in Trinidad and Tobago.
            </p>
          </div>
          {/* <div className={GridStyles.col1of2}> */}

          <div className={`${GridStyles.col1of2} ${GridStyles.u_center_text}`}>
            <Image
              className={AboutStyles.section_accreditation__image2}
              src={partner}
              alt="partner "
              width="0"
              height="0"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: "100%", height: "50%" }}
              quality="100"
              onLoad={(e) => console.log(e)}
            />
            {/* Source: https://png.toolxox.com/vhv?p=hTJhhmo_free-business-handshake-png-business-organization-transparent-png/ */}
          </div>
        </div>
        <div className={GridStyles.row}>
          <div className={GridStyles.col1of2}>
            <Image
              className={AboutStyles.section_accreditation__image}
              src={accreditImage}
              alt="Accreditation"
              width="0"
              height="0"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: "100%", height: "50%" }}
              quality="100"
              onLoad={(e) => console.log(e)}
            />
          </div>
          <div className={GridStyles.col1of2}>
            <p className={AboutStyles.section_accreditation__text_box}>
              COSTAATT is committed to the delivery of quality education that
              meets the needs of its stakeholders, and recognizes the critical
              role and contribution of quality improvement in this process. The
              College is also committed to a reflective and pro-active review of
              its operations and programme offerings, and in addition welcomes
              the objective analysis of its quality processes through external
              evaluation.
            </p>
            <p className={AboutStyles.section_accreditation__text_box}>
              COSTAATT is indeed proud to be the first institution in Trinidad
              and Tobago to have received ACTT accredited institution status for
              the period November 18, 2010 to November 17, 2017 (the maximum
              period of seven years). In 2017, the College received
              reaffirmation of its institutional accreditation status again for
              the maximum seven-year period. The College therefore holds
              accredited institution status until November 17, 2024.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

qualityassurance.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default qualityassurance;
