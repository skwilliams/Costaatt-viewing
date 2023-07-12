import React from 'react'
import DepartStyles from '../../styles/DepartCard.module.scss';
import Image from "next/image";
import Link from "next/link";

 

const DepartCard = ({image,departname,intro,linkpage,shortname}) => {
  return (
    <>
   <Image className={DepartStyles.imgstyle} src={image} alt="Department Image" />
       
            <p className={DepartStyles.departname}> {departname}</p>
            <p className={DepartStyles.text}>{intro}  </p>
            <Link className ={DepartStyles.linkpage}
             href={linkpage}
             
            >   
             visit {shortname}... </Link>
      
    </>

  );
};

export default DepartCard










    
