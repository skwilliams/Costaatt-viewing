import React from 'react'
import style from "../../styles/Admissions.module.scss";
import home5 from "../../../images/Links/colors.png";



const HeaderNoImage = ({caption}) => {


  return (
    <>
      <div className={style.pageheader}>
       
            
       <p className={style.pageheadertext}>{caption}</p>
      </div>
    </>
  );
}

export default HeaderNoImage