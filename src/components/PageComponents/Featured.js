import React from 'react'
import FeatStyle from '../../styles/Featured.module.scss'
import Link from "next/link"
import Image from 'next/image'

const Featured = (photo,altText,title,text,link) => {
  return (
    <>
  
    <div className={FeatStyle.gridContwo}>
        <div className={FeatStyle.gridtwo}>

            <Image className={FeatStyle.imgstyle} src={photo} alt={altText} />
               

        </div>
         <div className={FeatStyle.gridtwo}>

            <div className={FeatStyle.title}>{title}</div> 
           
             <p className={FeatStyle.text}> {text}</p> 
             <Link className={FeatStyle.goto}>View More... href={link} </Link>
        </div>
</div>

        


    
        
           
           
        </>      

  );
}

export default Featured