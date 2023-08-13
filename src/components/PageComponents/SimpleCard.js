import React from "react";
import AdmissionStyles from "../../styles/Admissions.module.scss";
import Image from "next/image";

const SimpleCard = ({ text, img, alt }) => {
  return (
    <>
      <div className={AdmissionStyles.cardCon}>
        <Image className={AdmissionStyles.cardimg} width="200" alt={alt} src={img} />
        <div className={AdmissionStyles.cardtext}>{text}</div>
      </div>
    </>
  );
};

export default SimpleCard;
