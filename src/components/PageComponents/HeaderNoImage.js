import React from 'react'
import style from "../../styles/About.module.scss";
import home5 from "../../../public/images/colors.png";



const HeaderNoImage = ({caption}) => {


  return (
    <>
      {/* <div className={style.noheader}></div> */}
      <h1 className={style.heading_primary__main}>{caption}</h1>
    </>
  );
}

export default HeaderNoImage