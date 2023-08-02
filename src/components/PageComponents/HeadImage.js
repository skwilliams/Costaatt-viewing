import React from "react";
import Image from "next/image";
import style from "../../styles/Programmes.module.scss";

const HeadImage = ({ imagetext, mainimage }) => {
  return (
    <div className={style.pageheader}>
      <Image
        className={style.pageheaderimg}
        src={mainimage}
        width="1366"
        height="300"
        alt={imagetext}
        priority={true}
      />
      <div className={style.pageheadertext}>{imagetext}</div>
    </div>
  );
};

export default HeadImage;
