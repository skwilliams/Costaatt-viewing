import React from 'react';
import SchoolStyles from '../../styles/SchoolCard.module.scss';
import Image from "next/image";
import Link from "next/link";
 

const SchoolCard = ({image,schoolname,intro,linkpage,shortname}) => {
  return (
    <>
        <div className={SchoolStyles.schGridContwo}>
          <div className={SchoolStyles.schGridtwo}>
            <Image className={SchoolStyles.imgstyle} src={image} alt="School Image" />
         </div>
         <div className={SchoolStyles.schGridtwo}>
            <p className={SchoolStyles.schoolname}> {schoolname}</p>
            <p className={SchoolStyles.text}>{intro}  </p>
            <Link className ={SchoolStyles.linkpage}
             href={linkpage}
             
            >   
             visit {shortname}... </Link>
         </div>
        
        </div>
      
    </>

  )
}

export default SchoolCard