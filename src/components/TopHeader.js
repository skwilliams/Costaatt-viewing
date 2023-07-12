import React from "react";
import Image from "next/image";
import admissionStyles from "../styles/Admissions.module.scss";

const TopHeader = ({ image, color, text }) => {
  return (
    <div>
      <Image src={image} alt="img" />
      <h1
        className={admissionStyles.topHeaderTitle}
        style={{ backgroundColor: color }}
      >
        {text}
      </h1>
    </div>
  );
};

export default TopHeader;
