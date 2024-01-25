import React from 'react'
import style from "../../styles/Admissions.module.scss";
import home5 from "../../../public/images/colors.png";



const HeaderNoImage = ({caption}) => {


  return (
    <>
      <div className={style.pageheader}>
       <h1 className={style.pageheadertext}>{caption}</h1>
      </div>
    </>
  );
}

export default HeaderNoImage